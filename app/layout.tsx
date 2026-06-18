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
  description:
    'Plan your perfect Morocco trip with MoroccoForYou: AI itinerary planner, private drivers, and car rental at Casablanca Airport. WhatsApp booking, EN / FR / AR support.',
  applicationName: 'MoroccoForYou',
  authors: [{ name: 'MoroccoForYou' }],
  formatDetection: { email: false, telephone: false },
  icons: { icon: '/favicon.ico' },
  verification: {
    other: {
      'p:domain_verify': ['f7c5b602d0c7d2b75897061267efa5dc'],
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0F1B2D',
  width: 'device-width',
  initialScale: 1,
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleShell locale="en">
      {children}
      <GoogleAnalytics gaId="G-GM2BJLWEF1" />
    </LocaleShell>
  );
}