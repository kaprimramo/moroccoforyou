// Side-effect import: registers all keyword posts into BLOG_POSTS.
import '@/lib/blog-content';

import type { MetadataRoute } from 'next';
import { DESTINATIONS } from '@/lib/destinations';
import { BLOG_POSTS, blogUrl, getBlogPostsByLang } from '@/lib/blog';
import { blogAlternateUrls } from '@/lib/blog-seo';
import { LOCALES, localizedUrl, type Locale } from '@/lib/i18n';

/** Last meaningful content change for pages that aren't driven by dated data.
 * Bump the relevant entry when you actually change that page.
 *
 * Deliberately not the build time. Stamping `new Date()` claimed that all 51
 * non-article URLs changed on every deploy, and a lastmod that always says
 * "just now" teaches crawlers to ignore the field — including on the article
 * entries, where it is accurate and worth trusting. Seed values are the last
 * commit date that touched each page's sources. */
const PAGE_UPDATED = {
  home: '2026-06-29',
  planner: '2026-07-03',
  rentACar: '2026-06-29',
  destinations: '2026-06-29',
} as const;

/** The blog index lists every article in its locale, so it genuinely does
 * change whenever one is published or updated there — no manual bumping. */
function blogIndexUpdated(locale: Locale): Date {
  const newest = getBlogPostsByLang(locale).reduce<string | undefined>((max, p) => {
    const d = p.updatedISO ?? p.publishedISO;
    return !max || d > max ? d : max;
  }, undefined);
  return new Date(newest ?? PAGE_UPDATED.home);
}

const fixed = (iso: string) => () => new Date(iso);

const LOCALIZED_PATHS: {
  path: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly';
  lastModified: (locale: Locale) => Date;
}[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly', lastModified: fixed(PAGE_UPDATED.home) },
  {
    path: '/planner/',
    priority: 0.95,
    changeFrequency: 'weekly',
    lastModified: fixed(PAGE_UPDATED.planner),
  },
  {
    path: '/rent-a-car/casablanca-airport/',
    priority: 0.9,
    changeFrequency: 'weekly',
    lastModified: fixed(PAGE_UPDATED.rentACar),
  },
  { path: '/blog/', priority: 0.8, changeFrequency: 'weekly', lastModified: blogIndexUpdated },
  ...DESTINATIONS.map((d) => ({
    path: `/destinations/${d.slug}/`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: fixed(PAGE_UPDATED.destinations),
  })),
];

function alternatesFor(path: string) {
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, localizedUrl(l, path)]),
  ) as Record<Locale, string>;
  return { languages: { ...languages, 'x-default': localizedUrl('en', path) } };
}

// Shares `blogAlternateUrls` with the blog pages' generateMetadata, so a
// post's sitemap entry and its <link rel="canonical"> / hreflang tags can
// never drift apart.
function blogAlternatesFor(post: (typeof BLOG_POSTS)[number]) {
  return { languages: blogAlternateUrls(post, post.lang ?? 'en') };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency, lastModified } of LOCALIZED_PATHS) {
    for (const locale of LOCALES) {
      entries.push({
        url: localizedUrl(locale, path),
        lastModified: lastModified(locale),
        changeFrequency,
        priority,
        alternates: alternatesFor(path),
      });
    }
  }

  for (const post of BLOG_POSTS) {
    const lang = post.lang ?? 'en';

    entries.push({
      // blogUrl(), not localizedUrl() — it owns the /blog/ vs /{locale}/blog/
      // decision and keeps legacy root-mounted slugs at the root.
      url: blogUrl(lang, post.slug),
      lastModified: new Date(post.updatedISO ?? post.publishedISO),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: blogAlternatesFor(post),
    });
  }

  return entries;
}
