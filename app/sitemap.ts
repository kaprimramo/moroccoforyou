import type { MetadataRoute } from 'next';
import { DESTINATIONS } from '@/lib/destinations';
import { LOCALES, SITE_URL, localizedUrl, type Locale } from '@/lib/i18n';

const PATHS = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  {
    path: '/rent-a-car/casablanca-airport/',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const { path, priority, changeFrequency } of PATHS) {
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
  return entries;
}
