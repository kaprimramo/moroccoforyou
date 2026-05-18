import Anthropic from '@anthropic-ai/sdk';

type Env = {
  ANTHROPIC_API_KEY: string;
  ALLOWED_ORIGINS: string;
};

type PlanTripRequest = {
  destinationSlug: string;
  destinationName: string;
  locale: 'en' | 'fr' | 'ar';
  days: number;
  travelers: number;
  pace: 'relaxed' | 'balanced' | 'packed';
  interests: string[];
};

const SYSTEM_PROMPT = `You are MoroccoForYou's senior trip designer. You build short, useful, location-aware itineraries for travelers visiting Morocco.

## What you know
- The full road network and travel times between Moroccan cities (Marrakech, Fes, Chefchaouen, Casablanca, Rabat, Tangier, Essaouira, Agadir, Aït Ben Haddou, Ouarzazate, Merzouga, Imlil, Dakhla, etc.)
- The signature experiences in each region: imperial medinas, Atlas hiking, Sahara dunes, Atlantic surf, Berber villages, kasbahs, gnawa music, hammams, riad stays
- Realistic durations: a Marrakech → Merzouga round-trip is 3 days minimum; Chefchaouen is best as a 1–2 day stop on a northern loop; Imperial Cities + Sahara is a 9–11 day loop
- Cultural notes: Friday slowdowns, Ramadan timing impacts, modest dress at religious sites, tipping norms
- Common traveler mistakes: trying to drive Marrakech → Merzouga in one day, skipping the Atlas, treating Casablanca as a sightseeing city

## How you write itineraries
- Begin with a one-line summary: "X-day {pace} itinerary starting in {city}, focused on {top 2 interests}."
- Then a day-by-day breakdown. Each day has:
  - **Day N — {location/route}**
  - 2–4 bullet points of what to do (morning / afternoon / evening if useful)
  - 1 line of practical context (drive time, where to sleep, what to book ahead)
- End with a short "Practical notes" section (3–5 bullets): money, what to pre-book, when to travel, transport recommendation.
- Match the pace setting:
  - relaxed: 1 stop per day, lots of downtime, hammam/riad time
  - balanced: 1 main activity + 1 secondary
  - packed: dense; 2–3 activities per day, OK to push early starts
- For families of 4+ or large groups, prefer private driver + riad over public transport.
- If the requested duration is too short for the implied scope (e.g. 3-day Sahara from Marrakech), say so in the summary and propose what to drop.

## Output format
- Markdown
- No preamble, no "Sure, here is..." — go straight to the summary line
- Keep it under ~600 words. Tight, useful, no filler.
- Always write in the requested language: English, French, or Arabic. Match the natural register of a travel concierge.
- End with: "Want this customized? Reply on WhatsApp with your dates and we'll send a quote within the hour."`;

const LOCALE_NAME: Record<PlanTripRequest['locale'], string> = {
  en: 'English',
  fr: 'French (français)',
  ar: 'Arabic (العربية)',
};

function corsHeaders(req: Request, env: Env): Record<string, string> {
  const origin = req.headers.get('Origin') ?? '';
  const allowed = env.ALLOWED_ORIGINS.split(',').map((s) => s.trim());
  const ok = allowed.includes(origin) || allowed.includes('*');
  return {
    'Access-Control-Allow-Origin': ok ? origin : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function jsonResponse(body: unknown, init: ResponseInit & { req: Request; env: Env }) {
  const { req, env, ...rest } = init;
  return new Response(JSON.stringify(body), {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(req, env),
      ...(rest.headers ?? {}),
    },
  });
}

function validate(payload: unknown): PlanTripRequest | { error: string } {
  if (!payload || typeof payload !== 'object') return { error: 'Body must be JSON object' };
  const p = payload as Record<string, unknown>;
  const locale = p.locale;
  if (locale !== 'en' && locale !== 'fr' && locale !== 'ar') {
    return { error: 'locale must be en, fr, or ar' };
  }
  const pace = p.pace;
  if (pace !== 'relaxed' && pace !== 'balanced' && pace !== 'packed') {
    return { error: 'pace must be relaxed, balanced, or packed' };
  }
  const days = Number(p.days);
  if (!Number.isFinite(days) || days < 1 || days > 30) {
    return { error: 'days must be 1–30' };
  }
  const travelers = Number(p.travelers);
  if (!Number.isFinite(travelers) || travelers < 1 || travelers > 50) {
    return { error: 'travelers must be 1–50' };
  }
  if (typeof p.destinationName !== 'string' || p.destinationName.length === 0 || p.destinationName.length > 80) {
    return { error: 'destinationName required (≤80 chars)' };
  }
  if (typeof p.destinationSlug !== 'string' || !/^[a-z0-9-]{1,60}$/.test(p.destinationSlug)) {
    return { error: 'destinationSlug invalid' };
  }
  if (!Array.isArray(p.interests) || p.interests.some((i) => typeof i !== 'string') || p.interests.length > 10) {
    return { error: 'interests must be a string[] of length ≤10' };
  }
  return {
    destinationSlug: p.destinationSlug,
    destinationName: p.destinationName,
    locale,
    days,
    travelers,
    pace,
    interests: p.interests as string[],
  };
}

async function planTrip(req: PlanTripRequest, env: Env): Promise<{ itinerary: string; usage: Anthropic.Usage }> {
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

  const userPrompt = [
    `Language: ${LOCALE_NAME[req.locale]}`,
    `Starting destination: ${req.destinationName}`,
    `Duration: ${req.days} days`,
    `Travelers: ${req.travelers}`,
    `Pace: ${req.pace}`,
    `Interests: ${req.interests.length > 0 ? req.interests.join(', ') : 'general sightseeing'}`,
    '',
    `Design the itinerary now.`,
  ].join('\n');

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 2048,
    thinking: { type: 'adaptive' },
    system: [
      {
        type: 'text',
        text: SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages: [{ role: 'user', content: userPrompt }],
  });

  const text = response.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map((b) => b.text)
    .join('\n')
    .trim();

  if (!text) throw new Error('Empty response from model');

  return { itinerary: text, usage: response.usage };
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(req, env) });
    }

    const url = new URL(req.url);
    if (url.pathname === '/health') {
      return jsonResponse({ ok: true }, { req, env });
    }

    if (req.method !== 'POST' || url.pathname !== '/plan-trip') {
      return jsonResponse({ error: 'Not found' }, { status: 404, req, env });
    }

    let payload: unknown;
    try {
      payload = await req.json();
    } catch {
      return jsonResponse({ error: 'Invalid JSON' }, { status: 400, req, env });
    }

    const validated = validate(payload);
    if ('error' in validated) {
      return jsonResponse(validated, { status: 400, req, env });
    }

    try {
      const { itinerary, usage } = await planTrip(validated, env);
      return jsonResponse(
        {
          itinerary,
          usage: {
            input_tokens: usage.input_tokens,
            output_tokens: usage.output_tokens,
            cache_creation_input_tokens: usage.cache_creation_input_tokens ?? 0,
            cache_read_input_tokens: usage.cache_read_input_tokens ?? 0,
          },
        },
        { req, env },
      );
    } catch (err) {
      if (err instanceof Anthropic.RateLimitError) {
        return jsonResponse(
          { error: 'Rate limited — please try again shortly.' },
          { status: 429, req, env },
        );
      }
      if (err instanceof Anthropic.APIError) {
        return jsonResponse(
          { error: `Anthropic API error (${err.status}): ${err.message}` },
          { status: 502, req, env },
        );
      }
      const message = err instanceof Error ? err.message : 'Unknown error';
      return jsonResponse({ error: message }, { status: 500, req, env });
    }
  },
} satisfies ExportedHandler<Env>;
