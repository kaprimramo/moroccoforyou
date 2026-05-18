import { DEFAULT_LOCALE, type Locale } from './i18n';

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
}

export function homePath(locale: Locale) {
  return localePath(locale, '/');
}

export function destinationPath(locale: Locale, slug: string) {
  return localePath(locale, `/destinations/${slug}/`);
}

export function rentACarPath(locale: Locale) {
  return localePath(locale, '/rent-a-car/casablanca-airport/');
}
