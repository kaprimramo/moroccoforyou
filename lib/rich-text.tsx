import Link from 'next/link';
import type { ReactNode } from 'react';
import { BLOG_POSTS, blogPath } from './blog';

/**
 * Renders the small subset of inline HTML that blog content is allowed to use.
 *
 * Article copy lives in plain TypeScript strings, and React escapes strings by
 * default — so an `<a href="...">` written in a paragraph or a callout used to
 * show up as literal angle-bracket text. Everything that renders body copy
 * (paragraphs, intro, list items, table cells, callout bodies, FAQ and PAA
 * answers) passes through `renderRichText`, so links are clickable everywhere
 * automatically, in every article, present and future.
 *
 * Supported tags: <a>, <strong>/<b>, <em>/<i>, <br>. Anything else is left as
 * literal text. Content is authored in-repo (never user input), so this is a
 * deliberate renderer for trusted markup, not a sanitizer.
 *
 * See CLAUDE.md → "Links inside blog article content" for the author-facing
 * syntax, including the opt-in text-style and button options.
 */

/** Structural classes every inline link keeps, whatever the author styles. */
const LINK_BASE = 'underline-offset-2 transition-colors';

/** The default look. Replaced wholesale when the author supplies `class`. */
const LINK_DEFAULT = 'font-medium text-brand-terracotta underline hover:text-brand-night';

const BUTTON_BASE =
  'my-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold no-underline shadow-sm transition';

/** Presets for `data-btn`. Unknown values fall back to `primary`. */
const BUTTON_VARIANTS: Record<string, string> = {
  primary: 'bg-brand-terracotta text-white hover:bg-brand-terracotta/90',
  secondary: 'bg-brand-night text-brand-cream hover:bg-brand-night/90',
  outline:
    'border-2 border-brand-terracotta text-brand-terracotta hover:bg-brand-terracotta hover:text-white',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1EBE5B]',
};

const SIMPLE_TAGS: Record<string, 'strong' | 'em'> = {
  strong: 'strong',
  b: 'strong',
  em: 'em',
  i: 'em',
};

// Group 1: <a> attributes, group 2: <a> inner HTML.
// Group 3: simple tag name, group 4: its inner HTML.
// Content never nests anchors, so the non-greedy inner match is safe.
const TOKEN =
  /<a\s+([^>]*?)\s*>([\s\S]*?)<\/a\s*>|<(strong|b|em|i)\s*>([\s\S]*?)<\/\3\s*>|<br\s*\/?>/gi;

const ATTR = /([a-zA-Z][a-zA-Z0-9-]*)\s*=\s*"([^"]*)"/g;

function parseAttrs(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const re = new RegExp(ATTR.source, 'g');
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw))) attrs[m[1].toLowerCase()] = m[2];
  return attrs;
}

function cx(...parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join(' ');
}

/** Off-site (or non-http scheme) targets open in a new tab by default. */
function isExternal(href: string): boolean {
  return /^(https?:)?\/\//i.test(href) || /^(mailto|tel|whatsapp):/i.test(href);
}

const BLOG_HREF = /^\/(?:en|fr|ar)?\/?blog\/([^/?#]+)\/?$/;

let slugPaths: Map<string, string> | null = null;

/** slug -> the one real path that post is published at. Slugs are unique across
 * all 3 languages, so this is unambiguous. Built lazily because content
 * registers itself into BLOG_POSTS via side-effect imports. */
function pathForSlug(slug: string): string | undefined {
  if (!slugPaths || slugPaths.size !== BLOG_POSTS.length) {
    slugPaths = new Map(BLOG_POSTS.map((p) => [p.slug, blogPath(p.lang ?? 'en', p.slug)]));
  }
  return slugPaths.get(slug);
}

/** Point an internal href at the URL that actually exists.
 *
 * Two things get fixed automatically, so authors can't get them wrong:
 *  - Locale prefix. Articles are routinely written linking to `/blog/{slug}/`
 *    even when the target is a French or Arabic post living at `/fr/blog/` or
 *    `/ar/blog/`. We look the slug up in BLOG_POSTS and use its real path.
 *  - Trailing slash. The site sets `trailingSlash: true`, so `/blog/x` would
 *    308-redirect; emitting `/blog/x/` keeps every internal link a single hop. */
function normalizeInternal(href: string): string {
  if (!href.startsWith('/')) return href;
  if (href.includes('#') || href.includes('?')) return href;

  const blogMatch = BLOG_HREF.exec(href);
  if (blogMatch) {
    const real = pathForSlug(blogMatch[1]);
    if (real) return real;
  }

  if (href.endsWith('/')) return href;
  if (/\.[a-z0-9]{2,5}$/i.test(href)) return href; // /logo.svg, /file.pdf
  return `${href}/`;
}

function renderAnchor(rawAttrs: string, inner: string, key: string): ReactNode {
  const attrs = parseAttrs(rawAttrs);
  const rawHref = attrs.href ?? '#';
  const authorClass = attrs.class ?? attrs.classname;
  const btn = attrs['data-btn'];

  const className = btn
    ? cx(BUTTON_BASE, BUTTON_VARIANTS[btn] ?? BUTTON_VARIANTS.primary, authorClass)
    : cx(LINK_BASE, authorClass ?? LINK_DEFAULT);

  const children = renderRichText(inner, `${key}-`);
  const external = isExternal(rawHref);
  const href = external ? rawHref : normalizeInternal(rawHref);

  // Author-supplied target/rel always win, so an affiliate link can declare
  // its own rel="sponsored nofollow".
  const target = attrs.target ?? (external ? '_blank' : undefined);
  const rel = attrs.rel ?? (external ? 'noopener noreferrer' : undefined);

  if (!external && href.startsWith('/')) {
    return (
      <Link key={key} href={href} className={className} title={attrs.title}>
        {children}
      </Link>
    );
  }

  return (
    <a key={key} href={href} className={className} target={target} rel={rel} title={attrs.title}>
      {children}
    </a>
  );
}

/** Turn a content string into React nodes, expanding the supported inline tags.
 * Strings with no `<` are returned as-is, which is the overwhelming majority. */
export function renderRichText(input: string, keyPrefix = ''): ReactNode {
  if (!input || !input.includes('<')) return input;

  const nodes: ReactNode[] = [];
  const re = new RegExp(TOKEN.source, 'gi');
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(input))) {
    if (m.index > last) nodes.push(input.slice(last, m.index));
    last = m.index + m[0].length;
    const key = `${keyPrefix}rt${i++}`;

    if (m[1] !== undefined) {
      nodes.push(renderAnchor(m[1], m[2] ?? '', key));
    } else if (m[3]) {
      const Tag = SIMPLE_TAGS[m[3].toLowerCase()] ?? 'strong';
      nodes.push(<Tag key={key}>{renderRichText(m[4] ?? '', `${key}-`)}</Tag>);
    } else {
      nodes.push(<br key={key} />);
    }
  }

  if (last < input.length) nodes.push(input.slice(last));
  return nodes.length === 1 ? nodes[0] : nodes;
}

export { stripInlineHtml } from './inline-html';
