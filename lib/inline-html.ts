/** The inline tags blog content may use. Kept in a React-free module so
 * metadata/JSON-LD code can strip them without pulling in the renderer.
 * The rendering side lives in `lib/rich-text.tsx`. */
export const INLINE_TAGS = ['a', 'strong', 'b', 'em', 'i'] as const;

const TAG_RE = new RegExp(`</?(?:${INLINE_TAGS.join('|')})(?:\\s[^>]*)?>`, 'gi');

/** Drop inline tags, keeping their text. Use wherever content needs to be
 * plain text rather than markup — JSON-LD, meta descriptions, alt text. */
export function stripInlineHtml(input: string): string {
  if (!input || !input.includes('<')) return input;
  return input
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(TAG_RE, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
