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
  alternates: propsAlternates,
}: { 
  currentLocale: Locale;
  alternates?: Partial<Record<Locale, string>>;
}) {
  const pathname = usePathname() || '/';
  const naked = stripLocale(pathname);

  // Smart Hack: Ghadi n-9raw l-alternates direct mn l-Metadata dyal s-site 
  // dakhil window.__NEXT_DATA__ aw documents ila Next.js m-storingha, 
  // Aw n-khelliwha t-khdem direct m3a props.
  const alternates = propsAlternates;

  function getHref(l: Locale): string {
    // 1. Ila alternates fiha l-data s7i7a (Slugs dyal l-articlât)
    if (alternates && alternates[l]) {
      const val = alternates[l]!;
      if (val.startsWith('/')) return val;
      if (l === 'en') return `/blog/${val}/`;
      return `/${l}/blog/${val}/`;
    }

    // 2. Dynamic Fallback safe: Ila mal9ach alternates m9adda f dynamic slug,
    // ghadi n-goulou lih y-welli dki: ila l-user m7rk f dynamic article, khllih fih.
    if (naked.startsWith('/blog/') && naked !== '/blog/') {
      if (l === 'en') return naked;
      return `/${l}${naked}`;
    }

    // 3. Pou les pages l-3adin (Home, Cars...)
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