# MoroccoForYou — authoring notes

## Links inside blog article content

Article copy lives in plain strings in `lib/blog-content/*.ts`. Those strings
support a small set of inline HTML tags, rendered by `lib/rich-text.tsx`.

Rich text is applied to every body-copy field, so links work the same way
everywhere: `intro`, `sections[].paragraphs[]`, `sections[].list[]`,
`sections[].table.rows[][]`, `sections[].callout.body`, `faqs[].answer`, and
`peopleAlsoAsk[].answer`. Headings, titles, labels and meta fields stay plain
text.

Supported tags: `<a>`, `<strong>`/`<b>`, `<em>`/`<i>`, `<br>`. Anything else is
printed literally.

### 1. Default — a normal text link

Just write an anchor. No extra attributes needed.

```ts
body: 'See our <a href="/blog/casablanca-airport-guide-cmn">Casablanca Airport Guide</a> for details.',
```

Renders in the site's default link style (terracotta, underlined). This is
automatic for every article, current and future — nothing to opt into.

Three things are handled for you, so they can't be got wrong:

- **Locale prefix.** Write `/blog/{slug}/` for *any* article, in any language.
  The slug is looked up in `BLOG_POSTS` and rewritten to where that post
  actually lives — `/fr/blog/{slug}/` for French, `/ar/blog/{slug}/` for Arabic.
- **Trailing slash.** The site uses `trailingSlash: true`; internal links get
  the slash added so they never hit a 308 redirect.
- **External links** (`https://`, `wa.me`, `mailto:`, `tel:`) automatically get
  `target="_blank"` and `rel="noopener noreferrer"`.

### 2. Custom text style — opt in with `class`

Add a `class` attribute with any Tailwind classes. Your classes **replace** the
default link colour/weight/underline, so you get exactly what you write.
(Tailwind scans `lib/**`, so classes written in content are always generated.)

```ts
// bold, green, no underline
'... <a href="/planner/" class="font-bold text-brand-oasis no-underline">Plan my trip</a> ...'

// larger and underlined
'... <a href="/blog/surf-morocco-complete-guide" class="text-lg font-semibold text-brand-night underline">Surf guide</a> ...'
```

Brand colours available: `brand-terracotta`, `brand-night`, `brand-oasis`,
`brand-sand`, `brand-cream`.

### 3. Button — opt in with `data-btn`

Add `data-btn` to render the link as a pill button instead of inline text.

```ts
'... <a href="https://wa.me/212634276534" data-btn="whatsapp">Message us on WhatsApp</a> ...'
```

| `data-btn` | Look |
|---|---|
| `primary` | Terracotta fill, white text |
| `secondary` | Dark navy fill, cream text |
| `outline` | Terracotta outline, fills on hover |
| `whatsapp` | WhatsApp green fill, white text |

An unrecognised value falls back to `primary`. You can add `class` alongside
`data-btn` to tweak a preset — with buttons, `class` is *appended* to the preset
rather than replacing it:

```ts
'... <a href="/planner/" data-btn="primary" class="w-full">Start planning</a> ...'
```

### Affiliate links

Nothing is added automatically beyond `target`/`rel` on external links. Set your
own `rel` when you need it — an explicit `rel` always wins:

```ts
'... <a href="https://partner.example.com/x" rel="sponsored nofollow noopener">Book this car</a> ...'
```

### Notes

- Content is trusted, in-repo markup. `lib/rich-text.tsx` is a renderer for a
  known tag set, not a sanitiser — don't feed it user input.
- JSON-LD (FAQ schema) strips these tags via `stripInlineHtml`, so structured
  data stays plain text while the page shows real links.

## Sitemap `lastmod`

`app/sitemap.ts` derives dates automatically wherever it can:

- **Articles** use `updatedISO ?? publishedISO` from the post.
- **Blog index pages** (`/blog/`, `/fr/blog/`, `/ar/blog/`) use the newest
  article in that locale, so they move on their own when you publish.

Everything else — home, planner, rent-a-car, destinations — has no dated source,
so it reads from the `PAGE_UPDATED` map at the top of `app/sitemap.ts`. **Bump
the relevant entry when you meaningfully change one of those pages.**

Don't be tempted to use the build time instead: it marks all 51 of those URLs as
changed on every deploy, and a `lastmod` that always says "just now" teaches
crawlers to ignore the field everywhere, including on articles where it's real.
