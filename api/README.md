# MoroccoForYou — AI Itinerary API

Cloudflare Worker that proxies the AIPlanner form to Claude Opus 4.7. Separate from the static Next.js site because `output: 'export'` strips Next.js API routes.

## Stack
- Cloudflare Workers (free tier covers ~100k requests/day)
- `@anthropic-ai/sdk` calling `claude-opus-4-7` with adaptive thinking
- Prompt caching on the system prompt (~600-word designer brief) — repeated requests cost ~10% of the first

## Setup

```bash
cd api
npm install
wrangler login            # one-time
wrangler secret put ANTHROPIC_API_KEY   # paste your key
```

Edit `wrangler.toml` → `ALLOWED_ORIGINS` to match your production + dev origins.

## Run locally

```bash
npm run dev    # http://localhost:8787
```

Then in the Next.js app:

```bash
# .env.local in the site root
NEXT_PUBLIC_AI_API_URL=http://localhost:8787/plan-trip
```

## Deploy

```bash
npm run deploy
```

Then point the site's `NEXT_PUBLIC_AI_API_URL` at the deployed worker URL (e.g. `https://moroccoforyou-api.your-subdomain.workers.dev/plan-trip`).

## Request shape

`POST /plan-trip`

```json
{
  "destinationSlug": "marrakech",
  "destinationName": "Marrakech",
  "locale": "en",
  "days": 5,
  "travelers": 2,
  "pace": "balanced",
  "interests": ["Culture & history", "Food & gastronomy"]
}
```

Response:

```json
{
  "itinerary": "5-day balanced itinerary starting in Marrakech...",
  "usage": {
    "input_tokens": 87,
    "output_tokens": 612,
    "cache_creation_input_tokens": 920,
    "cache_read_input_tokens": 0
  }
}
```

After the first request, `cache_read_input_tokens` should be ~920 and `cache_creation_input_tokens` should drop to 0 — that's prompt caching working (~10× cheaper on cache reads).

## Cost notes

- First request writes the system-prompt cache (~1.25× input price for ~920 tokens).
- Every subsequent request within 5 minutes reads it (~0.1× input price).
- Per-user variables (days, interests, locale) are after the cache breakpoint, so they don't invalidate the cache.
- Adaptive thinking lets Claude decide how much to reason. Set `effort` if you want to bound cost — see the `claude-api` skill or `shared/agent-design.md` in the Anthropic skill bundle.

## Endpoint health

`GET /health` returns `{"ok": true}`.
