'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_LABELS, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';

function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(fr|ar)(\/.*)?$/);
  if (match) return match[2] || '/';
  return pathname || '/';
}

function pathForLocale(locale: Locale, basePath: string): string {
  const clean = basePath.startsWith('/') ? basePath : `/${basePath}`;
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`;
}

export function LocaleSwitcher({ 
  currentLocale,
  alternates,
}: { 
  currentLocale: Locale;
  // alternates daba katmchi direct b l-path l-kamel dyal l-article fga3 l-lughat
  alternates?: Partial<Record<Locale, string>>;
}) {
  const pathname = usePathname() || '/';
  const naked = stripLocale(pathname);

  function getHref(l: Locale): string {
    // 1. Ila kayn lien direct dyal l-article f had l-lugha (f l-alternates object)
    if (alternates && alternates[l]) {
      return alternates[l]!;
    }

    // 2. Ila l-user f chi article walakin ma-passyach lih alternate link dyal l-lugha l-khra
    // hna kanreddouh direct l l-page d l-blog dyal dik l-lugha
    if (naked.startsWith('/blog/') && naked !== '/blog/') {
      if (l === 'en') return '/blog/';
      return `/${l}/blog/`;
    }

    // 3. Pou les pages l-3adin (Home, Car rental, Contact...), kanbedlo ghir locale prefix
    return pathForLocale(l, naked);
  }

  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none rounded-full border border-brand-night/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-night hover:border-brand-terracotta">
        {currentLocale}
      </summary>
      <ul className="absolute right-0 z-10 mt-2 w-36 rounded-md border border-brand-night/10 bg-white p-1 shadow-lg">
        {LOCALES.map((l) => (
          <li key={l}>
            <Link
              hrefLang={l}
              href={getHref(l)}
              className={`block rounded px-3 py-2 text-sm hover:bg-brand-cream ${
                l === currentLocale ? 'font-semibold text-brand-terracotta' : ''
              }`}
            >
              {LOCALE_LABELS[l]}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}