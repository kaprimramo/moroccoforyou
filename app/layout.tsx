import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_URL } from '@/lib/i18n';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MoroccoForYou — Tailor-made trips, drivers & car rental in Morocco',
    template: '%s · MoroccoForYou',
  },
  description:
    'Plan your perfect Morocco trip with MoroccoForYou: AI itinerary planner, private drivers, and car rental at Casablanca Airport. WhatsApp booking, EN / FR / AR support.',
  applicationName: 'MoroccoForYou',
  authors: [{ name: 'MoroccoForYou' }],
  formatDetection: { email: false, telephone: false },
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  themeColor: '#0F1B2D',
  width: 'device-width',
  initialScale: 1,
};

// Sets <html lang> and <html dir> from the URL path before React hydrates.
// Stays inline (no module import) so it runs before paint without blocking.
// `suppressHydrationWarning` on <html> tells React the lang/dir attributes
// may legitimately differ between server-rendered HTML and post-hydration DOM.
const LANG_DIR_BOOTSTRAP = `(function(){try{var p=location.pathname;var l=(p==='/ar'||p.indexOf('/ar/')===0)?'ar':(p==='/fr'||p.indexOf('/fr/')===0)?'fr':'en';var e=document.documentElement;if(e.lang!==l)e.lang=l;var d=l==='ar'?'rtl':'ltr';if(e.dir!==d)e.dir=d;}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The root <html> renders with the EN default (the most common case).
  // Per-locale layouts and pages that live under /ar/* or /fr/* rely on the
  // bootstrap script above to fix lang/dir before paint. Localised <metadata>
  // alternates+hreflang remain canonical for SEO independently of this attr.
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: LANG_DIR_BOOTSTRAP }} />
        {children}
        <GoogleAnalytics gaId="G-GM2BJLWEF1" />
      </body>
    </html>
  );
}
