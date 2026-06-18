import Link from 'next/link';
import { DESTINATIONS } from '@/lib/destinations';
import { dict } from '@/lib/dictionaries';
import { destinationPath, rentACarPath } from '@/lib/paths';
import type { Locale } from '@/lib/i18n';

export function Footer({ locale }: { locale: Locale }) {
  const t = dict(locale);
  return (
    <footer className="mt-20 border-t border-brand-night/10 bg-brand-night text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold">MoroccoForYou</p>
          <p className="mt-3 text-sm text-brand-cream/80">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-sand">
            {t.footer.destinations}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {DESTINATIONS.slice(0, 8).map((d) => (
              <li key={d.slug}>
                <Link
                  href={destinationPath(locale, d.slug)}
                  className="text-brand-cream/80 hover:text-white"
                >
                  {d.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-sand">
            {t.footer.services}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href={rentACarPath(locale)}
                className="text-brand-cream/80 hover:text-white"
              >
                {t.footer.carRental}
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-brand-cream/80 hover:text-white">
                {t.footer.privateDrivers}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-brand-cream/80 hover:text-white">
                {t.footer.aiPlanner}
              </a>
            </li>
            <li>
              <Link href="/blog/" className="text-brand-cream/80 hover:text-white">
                {t.nav.blog}
              </Link>
            </li>
          </ul>
        </div>
        <div id="contact">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-sand">
            {t.footer.contact}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-cream/80">
            <li>WhatsApp: +212 634 276 534</li>
            <li>Email: hello@moroccoforyou.com</li>
            <li>{t.footer.languages}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-brand-cream/60">
          © {new Date().getFullYear()} MoroccoForYou. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
