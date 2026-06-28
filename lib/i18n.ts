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

export const GEO_MARKETS = {
  usa: {
    name: 'United States',
    region: 'US',
    language: 'en-US',
    target: 'US',
  },
  uk: {
    name: 'United Kingdom',
    region: 'GB',
    language: 'en-GB',
    target: 'GB',
  },
  europe: {
    name: 'Europe',
    region: 'EU',
    language: 'en-GB',
    target: 'EU',
  },
  gcc: {
    name: 'GCC',
    region: 'AE',
    language: 'ar',
    target: 'GCC',
  },
} as const;

// Canonical host. The Vercel project 301-redirects the apex (moroccoforyou.com)
// to the www subdomain, so every canonical, sitemap entry, OG URL and JSON-LD
// link must use www to avoid Google Search Console "Redirect error".
export const SITE_URL = 'https://www.moroccoforyou.com';

export function localizedUrl(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? `${SITE_URL}${clean}` : `${SITE_URL}/${locale}${clean}`;
}

export function normalizePath(path: string): string {
  if (!path.startsWith('/')) return `/${path}`;
  return path;
}

export function localePath(locale: Locale, path: string): string {
  const clean = normalizePath(path);
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
}

export function fullUrl(path: string): string {
  return `${SITE_URL}${normalizePath(path)}`;
}

export function geoTargetMetaForLocale(locale: Locale) {
  const region = locale === 'ar' ? 'MENA' : locale === 'fr' ? 'EU' : 'US';
  const language = LOCALE_LABELS[locale];
  const market =
    locale === 'ar'
      ? GEO_MARKETS.gcc
      : locale === 'fr'
        ? GEO_MARKETS.europe
        : GEO_MARKETS.usa;

  return {
    'geo.region': market.region,
    'geo.placename': market.name,
    'geo.position': '33.5731;-7.5898',
    ICBM: '33.5731, -7.5898',
    'target-market': market.target,
    'content-language': locale,
    'language': language,
    'audience': region,
  };
}

export function hreflangForLocale(locale: Locale): string {
  return locale === 'en' ? 'en' : locale;
}

export function alternateLanguagesForPath(path: string) {
  return Object.fromEntries(
    LOCALES.map((l) => [hreflangForLocale(l), localizedUrl(l, path)]),
  ) as Record<string, string>;
}
