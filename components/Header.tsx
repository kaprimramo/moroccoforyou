'use client';
import Link from 'next/link';
import { DESTINATIONS } from '@/lib/destinations';
import { dict } from '@/lib/dictionaries';
import { homePath, destinationPath, rentACarPath } from '@/lib/paths';
import { LocaleSwitcher } from './LocaleSwitcher';
import type { Locale } from '@/lib/i18n';

export function Header({ locale, alternates }: { locale: Locale; alternates?: Partial<Record<Locale, string>> }) {
  const t = dict(locale);
  return (
    <header className="sticky top-0 z-40 border-b border-brand-night/10 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={homePath(locale)} className="flex items-center gap-2">
          <img src="/logo.svg" alt="MoroccoForYou" height="40" style={{height: '40px'}} />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium md:flex">
          <details className="group relative">
            <summary className="cursor-pointer list-none text-brand-night hover:text-brand-terracotta">
              {t.nav.destinations}
            </summary>
            <ul className="absolute right-0 z-10 mt-2 max-h-96 w-64 overflow-auto rounded-md border border-brand-night/10 bg-white p-2 shadow-lg">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link href={destinationPath(locale, d.slug)} className="block rounded px-3 py-2 hover:bg-brand-cream">
                    {d.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <Link href={rentACarPath(locale)} className="hover:text-brand-terracotta">
            {t.nav.rentACar}
          </Link>
          <Link href="/blog/" className="hover:text-brand-terracotta">
            {t.nav.blog}
          </Link>
          <a href="#contact" className="rounded-full bg-brand-oasis px-4 py-2 text-white hover:bg-brand-night">
            {t.nav.planMyTrip}
          </a>
          <LocaleSwitcher currentLocale={locale} alternates={alternates} />
        </nav>
      </div>
    </header>
  );
}