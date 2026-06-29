import { localePath, type Locale } from './i18n';

// Re-export the canonical implementation from i18n.ts. Callers can keep
// importing `localePath` from `@/lib/paths` for backwards compatibility.
export { localePath };

export function homePath(locale: Locale) {
  return localePath(locale, '/');
}

export function destinationPath(locale: Locale, slug: string) {
  return localePath(locale, `/destinations/${slug}/`);
}

export function rentACarPath(locale: Locale) {
  return localePath(locale, '/rent-a-car/casablanca-airport/');
}
