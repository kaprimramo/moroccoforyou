# MoroccoForYou

Tailor-made Morocco trips, private drivers, and car rental. Two pieces:

| Piece | Stack | Lives in |
|---|---|---|
| Static site (3 locales × 3 page types = static HTML) | Next.js 14 App Router · TypeScript · Tailwind · `output: 'export'` | `./` |
| AI itinerary endpoint (optional) | Cloudflare Worker · `@anthropic-ai/sdk` · Claude Opus 4.7 + prompt caching | `./api/` |

## Routes

| Route | EN | FR | AR |
|---|---|---|---|
| Home | `/` | `/fr/` | `/ar/` |
| Destinations (13 cities) | `/destinations/<slug>/` | `/fr/destinations/<slug>/` | `/ar/destinations/<slug>/` |
| Car rental | `/rent-a-car/casablanca-airport/` | `/fr/rent-a-car/casablanca-airport/` | `/ar/rent-a-car/casablanca-airport/` |
| Sitemap | `/sitemap.xml` (covers all locales × all paths with `hreflang` alternates) |
| Robots | `/robots.txt` |

Destinations seeded: Marrakech, Fes, Chefchaouen, Sahara (Merzouga), Casablanca, Essaouira, Tangier, Rabat, Agadir, Aït Ben Haddou, Ouarzazate, Atlas (Imlil), Dakhla — each with full EN / FR / AR `name`, `tagline`, `description`, `highlights`, `faqs`.

## SEO

- `output: 'export'` → every page is pure HTML, no JS rendering required
- Per-locale `<html lang dir>` via Next.js route groups (`app/(en)`, `app/(fr)`, `app/(ar)`) — AR pages render with `dir="rtl"`
- JSON-LD: `TouristDestination`, `FAQPage`, `BreadcrumbList`, `AutoRental`, `TravelAgency`
- Hreflang EN / FR / AR + `x-default` on every page

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build static site

```bash
npm run build
# Output in ./out — deploy to any static host (Vercel / Netlify / Cloudflare Pages / S3)
```

## AI itinerary endpoint (optional)

The AIPlanner on each destination page has a "Generate AI itinerary" button. By default it's disabled and the form falls back to WhatsApp-only.

To enable it:

1. Deploy the Worker — see [`api/README.md`](./api/README.md). One command after `wrangler login`: `cd api && wrangler secret put ANTHROPIC_API_KEY && npm run deploy`.
2. Copy `.env.local.example` → `.env.local` and set `NEXT_PUBLIC_AI_API_URL` to the deployed Worker URL.
3. Rebuild the site.

Because the site is static-exported, the API has to live elsewhere — a Cloudflare Worker is the cheapest option. Could also deploy to Vercel/AWS Lambda/anywhere that runs Node.

## Customize

- `lib/i18n.ts` — `SITE_URL` (must match your production domain for hreflang to be valid)
- `lib/whatsapp.ts` — `WHATSAPP_NUMBER`
- `lib/destinations.ts` — add destinations (the page, sitemap, hreflang, and JSON-LD pick them up automatically)
- `lib/cars.ts` — rental fleet
- `lib/dictionaries.ts` — UI strings per locale
- `tailwind.config.ts` — brand colors
- Hero / car / destination images go in `public/images/` (paths match the slugs in the data files)
