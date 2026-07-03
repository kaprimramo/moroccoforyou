// Shape of `planner-config.json`. Kept as an explicit TypeScript type instead
// of a `.d.ts` next to the JSON so consumers can import the type without
// pulling the JSON contents. The runtime loader in `./config.ts` casts the
// parsed JSON to this type after a small structural sanity check.

export type PlannerModelConfig = {
  /** OpenAI model id, e.g. "gpt-4o", "gpt-4o-mini". */
  name: string;
  /** 0–2. Higher = more variety. Recommend 0.5–0.8 for planning. */
  temperature: number;
  /** Nucleus sampling. Usually leave at 1. */
  topP: number;
  /** Upper bound on generation length. */
  maxOutputTokens: number;
  presencePenalty: number;
  frequencyPenalty: number;
};

export type PlannerPersona = {
  name: string;
  role: string;
  voice: string;
  expertiseAreas: string[];
};

export type PlannerTone = {
  prefer: string[];
  avoid: string[];
};

export type PlannerBrand = {
  aiName: string;
  aiShortName: string;
  team: string;
  trustStatement: string;
  trustStatementFr: string;
  trustStatementAr: string;
};

export type PlannerCta = {
  label: string;
  href: string;
  utm?: string;
};

export type PlannerCtas = {
  primary: PlannerCta;
  secondary: PlannerCta[];
  email: string;
  phone: string;
};

export type PlannerLimits = {
  /** Max characters allowed in the user's single-turn input. */
  maxInputChars: number;
  /** Max prior turns kept in the OpenAI request when history is passed. */
  maxHistoryTurns: number;
  /** Abort the OpenAI call after this many ms. */
  requestTimeoutMs: number;
};

export type PlannerConfig = {
  meta: {
    version: string;
    updated: string;
    notes?: string;
  };
  brand: PlannerBrand;
  model: PlannerModelConfig;
  persona: PlannerPersona;
  tone: PlannerTone;
  systemPrompt: string;
  planModeSystemPromptSuffix: string;
  userTurnGuidance?: {
    clarifyingQuestionsIfMissing?: string[];
    priceReferences?: Record<string, [number, number]>;
  };
  safety: {
    refuseTopics: string[];
    escalateToHuman: string[];
  };
  ctas: PlannerCtas;
  limits: PlannerLimits;
};

// ─── HTTP contract for `/api/planner` ────────────────────────────────────────

export type PlannerMessage = {
  role: 'user' | 'assistant';
  content: string;
};

/** `chat` = freeform conversational reply (string). `plan` = structured JSON
 *  itinerary suitable for a card-grid layout. */
export type PlannerMode = 'chat' | 'plan';

export type PlannerRequestBody = {
  /** Latest user message. */
  message: string;
  /** Optional prior turns for context (excluding the current message). */
  history?: PlannerMessage[];
  /** Optional client-provided locale hint. */
  locale?: 'en' | 'fr' | 'ar';
  /** Response format. Defaults to 'chat'. */
  mode?: PlannerMode;
};

/** Structured travel plan returned when `mode === 'plan'`. */
export type PlannerPlan = {
  brief: string;
  aboutMe: string;
  days: Array<{
    day: number;
    title: string;
    activities: string[];
    drive: string | null;
    stayHint: string | null;
  }>;
  stays: Array<{
    location: string;
    name: string;
    type: string;
    priceBand: string;
    why: string;
  }>;
  budget: {
    perPersonMin: number;
    perPersonMax: number;
    currency: 'EUR' | 'USD' | 'GBP' | 'MAD';
    notes: string;
  };
  insiderTips: string[];
  bestTimeNotes: string;
  nextStep: string;
};

export type PlannerResponseBody =
  | {
      ok: true;
      /** Freeform assistant reply. Always present so clients can render text
       *  even when a structured plan was requested (fallback if parsing
       *  fails). In plan mode this is the raw JSON string. */
      reply: string;
      /** Structured plan — only present when `mode === 'plan'` and parsing
       *  succeeded. */
      plan?: PlannerPlan;
      /** Marketing CTAs the client can render alongside the reply. */
      ctas: PlannerCtas;
      /** Rough token accounting for cost tracking on the client. */
      usage?: {
        promptTokens: number;
        completionTokens: number;
        totalTokens: number;
      };
      /** Config version that generated this reply. */
      configVersion: string;
    }
  | {
      ok: false;
      error: string;
    };
