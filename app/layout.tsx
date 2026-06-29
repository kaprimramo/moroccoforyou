import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_URL } from '@/lib/i18n';
import { LocaleShell } from '@/components/LocaleShell';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MoroccoForYou — Tailor-made trips, drivers & car rental in Morocco',
    template: '%s · MoroccoForYou',
  },
  // ... (باقي الـ Metadata ديالك كيف هي)
};

export const viewport: Viewport = {
  themeColor: '#0F1B2D',
  width: 'device-width',
  initialScale: 1,
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocaleShell locale="en">
          {children}
          <GoogleAnalytics gaId="G-GM2BJLWEF1" />
        </LocaleShell>
      </body>
    </html>
  );
}