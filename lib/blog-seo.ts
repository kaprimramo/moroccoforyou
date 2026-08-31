import type { Metadata } from 'next';
import { blogPath, blogUrl, type BlogLang, type BlogPost } from './blog';
import { buildMetadata } from './seo';
import type { Locale } from './i18n';

const BLOG_LANGS: BlogLang[] = ['en', 'fr', 'ar'];

/** hreflang map for a post: its own language plus every sibling declared in
 * `post.alternates`. Always derived from `blogUrl()`, which owns the
 * `/blog/` vs `/fr/blog/` vs `/ar/blog/` decision (including legacy slugs that
 * stay at the root in every language). */
export function blogAlternateUrls(
  post: BlogPost,
  lang: BlogLang,
): Record<string, string> {
  const urls: Record<string, string> = { [lang]: blogUrl(lang, post.slug) };
  for (const l of BLOG_LANGS) {
    const sibling = post.alternates?.[l];
    if (sibling) urls[l] = blogUrl(l, sibling);
  }
  urls['x-default'] = urls['en'] ?? urls[lang];
  return urls;
}

/** Same map as `blogAlternateUrls` but as site-relative paths — what
 * `BlogPostView`'s language switcher consumes. */
export function blogAlternatePaths(
  post: BlogPost,
  lang: BlogLang,
): Partial<Record<Locale, string>> {
  const paths: Partial<Record<Locale, string>> = {
    [lang]: blogPath(lang, post.slug),
  };
  for (const l of BLOG_LANGS) {
    const sibling = post.alternates?.[l];
    if (sibling) paths[l] = blogPath(l, sibling);
  }
  return paths;
}

/** Complete `Metadata` for a blog post detail page — canonical, hreflang,
 * OG and Twitter tags. The EN, FR and AR `[slug]` routes all call this, so a
 * post's URLs are computed in exactly one place and every new article picks up
 * the correct tags automatically. */
export function blogPostMetadata(post: BlogPost, lang: BlogLang): Metadata {
  return buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.description,
    path: blogPath(lang, post.slug),
    locale: lang,
    image: post.coverImage,
    canonicalUrl: blogUrl(lang, post.slug),
    languages: blogAlternateUrls(post, lang),
  });
}
