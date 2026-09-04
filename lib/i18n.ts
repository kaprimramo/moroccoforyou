export const LOCALES = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_DIRECTION: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  fr: 'ltr',
  ar: 'rtl',
};

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
};

// Canonical host. The Vercel project 301-redirects the apex (moroccoforyou.com)
// to the www subdomain, so every canonical, sitemap entry, OG URL and JSON-LD
// link must use www to avoid Google Search Console "Redirect error".
export const SITE_URL = 'https://www.moroccoforyou.com';

export function normalizePath(path: string): string {
  if (!path.startsWith('/')) return `/${path}`;
  return path;
}

/** Remove a leading /{locale} segment so the path is locale-neutral.
 *
 * `localizedUrl` / `localePath` add the prefix themselves, so a caller that
 * passes an already-prefixed path (e.g. `/fr/blog/x/`) would otherwise get a
 * doubled `/fr/fr/blog/x/`. Stripping first makes both functions idempotent:
 * passing `/blog/x/` or `/fr/blog/x/` yields the same result. No real route
 * starts with a locale-named segment, so this can't swallow a legitimate path. */
export function stripLocalePrefix(path: string): string {
  const clean = normalizePath(path);
  for (const l of LOCALES) {
    if (clean === `/${l}` || clean === `/${l}/`) return '/';
    if (clean.startsWith(`/${l}/`)) return clean.slice(l.length + 1);
  }
  return clean;
}

export function localizedUrl(locale: Locale, path: string): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}

/** Locale-prefixed path. EN (default) lives at the root; FR/AR get a /{locale} prefix.
 * Idempotent — safe to pass an already-prefixed path.
 * Single source of truth — `lib/paths.ts` re-exports this. */
export function localePath(locale: Locale, path: string): string {
  const clean = stripLocalePrefix(path);
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
}

export function fullUrl(path: string): string {
  return `${SITE_URL}${normalizePath(path)}`;
}

export function hreflangForLocale(locale: Locale): string {
  return locale === 'en' ? 'en' : locale;
}

export function alternateLanguagesForPath(path: string) {
  return Object.fromEntries(
    LOCALES.map((l) => [hreflangForLocale(l), localizedUrl(l, path)]),
  ) as Record<string, string>;
}
