import Link from 'next/link';
import { DESTINATIONS } from '@/lib/destinations';
import { dict } from '@/lib/dictionaries';
import { homePath, destinationPath, rentACarPath, plannerPath } from '@/lib/paths';
import { LocaleSwitcher } from './LocaleSwitcher';
import type { Locale } from '@/lib/i18n';

// Tiny inline behaviour for the mobile <details> menu: close on outside
// click, on link click, and on Escape. Stays inline so Header remains a
// pure server component (no 'use client' boundary) and all nav links stay
// in the SSR HTML for crawlers.
const MOBILE_MENU_SCRIPT = `(function(){function close(){var o=document.querySelector('details[data-mobile-menu][open]');if(o)o.removeAttribute('open');}document.addEventListener('click',function(e){var o=document.querySelector('details[data-mobile-menu][open]');if(!o)return;var t=e.target;var inside=t.closest&&t.closest('details[data-mobile-menu]');if(inside!==o){close();return;}var l=t.closest&&t.closest('a[href]');if(l&&!l.closest('[data-no-close]'))close();});document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});})();`;

export function Header({
  locale,
  alternates,
}: {
  locale: Locale;
  alternates?: Partial<Record<Locale, string>>;
}) {
  const t = dict(locale);
  return (
    <header className="sticky top-0 z-40 border-b border-brand-night/10 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:py-4">
        <Link
          href={homePath(locale)}
          className="flex shrink-0 items-center gap-2"
          aria-label="MoroccoForYou"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="MoroccoForYou" className="h-9 w-auto md:h-10" />
        </Link>

        {/* Desktop navigation (≥ md) */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium md:flex"
        >
          <details className="group relative">
            <summary className="cursor-pointer list-none text-brand-night hover:text-brand-terracotta">
              {t.nav.destinations}
            </summary>
            <ul className="absolute end-0 z-10 mt-2 max-h-96 w-64 overflow-auto rounded-md border border-brand-night/10 bg-white p-2 shadow-lg">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={destinationPath(locale, d.slug)}
                    className="block rounded px-3 py-2 hover:bg-brand-cream"
                  >
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
          <Link
            href={plannerPath(locale)}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta px-4 py-2 text-white hover:bg-brand-night"
          >
            <span aria-hidden>✦</span>
            {t.nav.aiPlanner}
          </Link>
          <a
            href="#contact"
            className="rounded-full border border-brand-night/20 px-4 py-2 text-brand-night hover:border-brand-terracotta"
          >
            {t.nav.planMyTrip}
          </a>
          <LocaleSwitcher currentLocale={locale} alternates={alternates} />
        </nav>

        {/* Mobile hamburger (< md). Uses <details> so links stay in the
            crawlable DOM and the menu works without JS. The inline script
            below adds polish (close on outside-click, link-click, Escape). */}
        <details data-mobile-menu className="group relative md:hidden">
          <summary
            aria-label={t.nav.openMenu}
            className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md text-brand-night hover:bg-brand-night/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta [&::-webkit-details-marker]:hidden"
          >
            {/* Hamburger icon (closed state) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="block group-open:hidden"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            {/* Close icon (open state) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="hidden group-open:block"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </summary>

          {/* Slide-down panel. fixed so it overlays page content; inset-x-2
              keeps a small gutter on either side at any screen width. */}
          <nav
            aria-label="Mobile primary"
            className="fixed inset-x-2 top-[3.75rem] z-50 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl border border-brand-night/10 bg-white shadow-2xl"
          >
            <ul className="flex flex-col gap-0.5 p-2 text-base">
              <li>
                <details className="group/sub">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 font-medium text-brand-night hover:bg-brand-cream [&::-webkit-details-marker]:hidden">
                    <span>{t.nav.destinations}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="transition group-open/sub:rotate-180"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <ul className="mt-1 max-h-72 overflow-auto ps-3">
                    {DESTINATIONS.map((d) => (
                      <li key={d.slug}>
                        <Link
                          href={destinationPath(locale, d.slug)}
                          className="block rounded-lg px-3 py-2 text-sm text-brand-night/90 hover:bg-brand-cream"
                        >
                          {d.name[locale]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  href={rentACarPath(locale)}
                  className="block rounded-lg px-3 py-2.5 font-medium text-brand-night hover:bg-brand-cream"
                >
                  {t.nav.rentACar}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="block rounded-lg px-3 py-2.5 font-medium text-brand-night hover:bg-brand-cream"
                >
                  {t.nav.blog}
                </Link>
              </li>
              <li className="px-1 pt-2">
                <Link
                  href={plannerPath(locale)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-terracotta px-4 py-2.5 font-semibold text-white hover:bg-brand-night"
                >
                  <span aria-hidden>✦</span>
                  {t.nav.aiPlanner}
                </Link>
              </li>
              <li className="px-1">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-brand-night/20 px-4 py-2.5 font-semibold text-brand-night hover:border-brand-terracotta"
                >
                  {t.nav.planMyTrip}
                </a>
              </li>
              <li
                data-no-close
                className="mt-2 flex items-center justify-end border-t border-brand-night/10 px-1 pt-3"
              >
                <LocaleSwitcher currentLocale={locale} alternates={alternates} />
              </li>
            </ul>
          </nav>
        </details>
      </div>

      <script dangerouslySetInnerHTML={{ __html: MOBILE_MENU_SCRIPT }} />
    </header>
  );
}
