import { NextResponse, type NextRequest } from 'next/server';
import { loadPlannerConfig } from '@/lib/planner/config';
import { getOpenAI } from '@/lib/planner/openai';
import type {
  PlannerMessage,
  PlannerMode,
  PlannerPlan,
  PlannerRequestBody,
  PlannerResponseBody,
} from '@/lib/planner/types';

// Route Handler runs at request time on Vercel's Node runtime. Not statically
// exportable — that's fine because next.config.js does not enable `output:
// 'export'` and OpenAI needs live network access.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_ROLES = new Set(['user', 'assistant']);
const ALLOWED_MODES = new Set<PlannerMode>(['chat', 'plan']);

function badRequest(error: string): NextResponse<PlannerResponseBody> {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

function serverError(error: string): NextResponse<PlannerResponseBody> {
  return NextResponse.json({ ok: false, error }, { status: 500 });
}

/** Best-effort validation of the JSON returned by OpenAI in plan mode.
 *  Uses shape assertions rather than a runtime schema library to keep the
 *  bundle small. Returns null if the model returned malformed JSON — the
 *  API falls back to sending only the raw `reply` string. */
function parsePlan(raw: string): PlannerPlan | null {
  let obj: unknown;
  try {
    obj = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!obj || typeof obj !== 'object') return null;
  const p = obj as Record<string, unknown>;
  if (typeof p.brief !== 'string' || typeof p.aboutMe !== 'string') return null;
  if (!Array.isArray(p.days) || p.days.length === 0) return null;
  if (!Array.isArray(p.stays)) return null;
  if (!p.budget || typeof p.budget !== 'object') return null;
  const budget = p.budget as Record<string, unknown>;
  if (
    typeof budget.perPersonMin !== 'number' ||
    typeof budget.perPersonMax !== 'number' ||
    typeof budget.currency !== 'string' ||
    typeof budget.notes !== 'string'
  ) {
    return null;
  }
  if (!Array.isArray(p.insiderTips) || typeof p.bestTimeNotes !== 'string') return null;
  if (typeof p.nextStep !== 'string') return null;
  // At this point the shape passed. Trust the rest.
  return obj as PlannerPlan;
}

export async function POST(req: NextRequest) {
  let body: PlannerRequestBody;
  try {
    body = (await req.json()) as PlannerRequestBody;
  } catch {
    return badRequest('Body must be valid JSON.');
  }

  const config = loadPlannerConfig();

  // ── Input validation ──────────────────────────────────────────────────────
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (!message) return badRequest('`message` is required and must be a non-empty string.');
  if (message.length > config.limits.maxInputChars) {
    return badRequest(
      `\`message\` is longer than the configured limit of ${config.limits.maxInputChars} characters.`,
    );
  }

  const mode: PlannerMode = ALLOWED_MODES.has(body.mode as PlannerMode)
    ? (body.mode as PlannerMode)
    : 'chat';

  // Trust boundary: clamp history to configured turn count and strip anything
  // that isn't a plain {role, content} pair. Prevents prompt injection via
  // fake system/tool messages.
  const history: PlannerMessage[] = Array.isArray(body.history)
    ? body.history
        .filter(
          (m): m is PlannerMessage =>
            typeof m === 'object' &&
            m !== null &&
            typeof (m as PlannerMessage).content === 'string' &&
            ALLOWED_ROLES.has((m as PlannerMessage).role),
        )
        .slice(-config.limits.maxHistoryTurns)
    : [];

  const systemContent =
    mode === 'plan'
      ? `${config.systemPrompt}${config.planModeSystemPromptSuffix}`
      : config.systemPrompt;

  // ── OpenAI call ───────────────────────────────────────────────────────────
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), config.limits.requestTimeoutMs);

  try {
    const openai = getOpenAI();
    const completion = await openai.chat.completions.create(
      {
        model: config.model.name,
        temperature: config.model.temperature,
        top_p: config.model.topP,
        max_tokens: config.model.maxOutputTokens,
        presence_penalty: config.model.presencePenalty,
        frequency_penalty: config.model.frequencyPenalty,
        // In plan mode we ask OpenAI for a JSON object explicitly. The
        // planModeSystemPromptSuffix in planner-config.json describes the
        // exact schema, and includes the word "JSON" which OpenAI requires
        // when response_format is set.
        ...(mode === 'plan'
          ? { response_format: { type: 'json_object' as const } }
          : {}),
        messages: [
          { role: 'system', content: systemContent },
          ...history.map((m) => ({ role: m.role, content: m.content })),
          { role: 'user', content: message },
        ],
      },
      { signal: controller.signal },
    );

    const reply = completion.choices[0]?.message?.content?.trim() ?? '';
    if (!reply) return serverError('The model returned an empty reply. Try again.');

    const plan = mode === 'plan' ? parsePlan(reply) ?? undefined : undefined;

    const payload: PlannerResponseBody = {
      ok: true,
      reply,
      plan,
      ctas: config.ctas,
      configVersion: config.meta.version,
      usage: completion.usage
        ? {
            promptTokens: completion.usage.prompt_tokens,
            completionTokens: completion.usage.completion_tokens,
            totalTokens: completion.usage.total_tokens,
          }
        : undefined,
    };
    return NextResponse.json(payload);
  } catch (err: unknown) {
    if (err instanceof Error && err.name === 'AbortError') {
      return NextResponse.json<PlannerResponseBody>(
        { ok: false, error: 'The planner took too long to respond. Please try again.' },
        { status: 504 },
      );
    }
    const errMsg = err instanceof Error ? err.message : 'Unknown planner error.';
    // eslint-disable-next-line no-console
    console.error('[api/planner] OpenAI call failed:', errMsg);
    return serverError('The planner is temporarily unavailable. Please try again in a moment.');
  } finally {
    clearTimeout(timeout);
  }
}

/** GET is a lightweight health check. Returns the config version + model
 *  currently in use so ops can verify a hot-reload took effect without
 *  invoking a paid completion. */
export async function GET() {
  try {
    const config = loadPlannerConfig();
    return NextResponse.json({
      ok: true,
      configVersion: config.meta.version,
      model: config.model.name,
      updated: config.meta.updated,
      aiName: config.brand.aiName,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error.';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
