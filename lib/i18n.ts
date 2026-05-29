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

export function localizedUrl(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? `${SITE_URL}${clean}` : `${SITE_URL}/${locale}${clean}`;
}
