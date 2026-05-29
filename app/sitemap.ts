// Side-effect import: registers all keyword posts into BLOG_POSTS.
import '@/lib/blog-content';

import type { MetadataRoute } from 'next';
import { DESTINATIONS } from '@/lib/destinations';
import { BLOG_POSTS, blogPath } from '@/lib/blog';
import { LOCALES, SITE_URL, localizedUrl, type Locale } from '@/lib/i18n';

const LOCALIZED_PATHS = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
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

function blogAlternatesFor(post: (typeof BLOG_POSTS)[number]) {
  if (!post.alternates) return undefined;
  const languages: Record<string, string> = {};
  if (post.alternates.en) languages['en'] = localizedUrl('en', blogPath('en', post.alternates.en));
  if (post.alternates.fr) languages['fr'] = localizedUrl('fr', blogPath('fr', post.alternates.fr));
  if (post.alternates.ar) languages['ar'] = localizedUrl('ar', blogPath('ar', post.alternates.ar));
  languages['x-default'] = languages['en'] ?? Object.values(languages)[0];
  return { languages };
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

  // Per-post entries with hreflang alternates between EN/FR/AR siblings.
  for (const post of BLOG_POSTS) {
    const lang = post.lang ?? 'en';
    entries.push({
      url: localizedUrl(lang, blogPath(lang, post.slug)),
      lastModified: new Date(post.updatedISO ?? post.publishedISO),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: blogAlternatesFor(post),
    });
  }

  return entries;
}
