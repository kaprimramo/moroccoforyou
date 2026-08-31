// Side-effect import: registers all keyword posts into BLOG_POSTS.
import '@/lib/blog-content';

import type { MetadataRoute } from 'next';
import { DESTINATIONS } from '@/lib/destinations';
import { BLOG_POSTS, blogUrl } from '@/lib/blog';
import { blogAlternateUrls } from '@/lib/blog-seo';
import { LOCALES, localizedUrl, type Locale } from '@/lib/i18n';

const LOCALIZED_PATHS = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/planner/', priority: 0.95, changeFrequency: 'weekly' as const },
  {
    path: '/rent-a-car/casablanca-airport/',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  { path: '/blog/', priority: 0.8, changeFrequency: 'weekly' as const },
  ...DESTINATIONS.map((d) => ({
    path: `/destinations/${d.slug}/`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
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
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of LOCALIZED_PATHS) {
    for (const locale of LOCALES) {
      entries.push({
        url: localizedUrl(locale, path),
        lastModified: now,
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
