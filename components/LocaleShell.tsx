import type { ReactNode } from 'react';
import { LOCALE_DIRECTION, type Locale } from '@/lib/i18n';
import { Header } from './Header';
import { Footer } from './Footer';
import { JsonLd } from './JsonLd';
import { organizationJsonLd } from '@/lib/seo';

type Props = {
  locale: Locale;
  children: ReactNode;
  alternates?: Partial<Record<Locale, string>>; // 👈 Zdna had l-prop hna
};

export function LocaleShell({ locale, children, alternates }: Props) {
  const dir = LOCALE_DIRECTION[locale];
  return (
    <html lang={locale} dir={dir}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-brand-night focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        
        {/* 👈 Passina l-alternates direct l l-Header hna */}
        <Header locale={locale} alternates={alternates} />
        
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <JsonLd data={organizationJsonLd()} id="ld-org" />
      </body>
    </html>
  );
}