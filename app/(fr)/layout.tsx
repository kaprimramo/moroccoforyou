import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { SITE_URL } from '@/lib/i18n';
import { LocaleShell } from '@/components/LocaleShell';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MoroccoForYou — Voyages sur mesure, chauffeurs et location au Maroc',
    template: '%s · MoroccoForYou',
  },
  description:
    `Planifiez votre voyage idéal au Maroc avec MoroccoForYou : planificateur IA, chauffeurs privés, et location de voiture à l'aéroport de Casablanca. Réservation par WhatsApp.`,
  applicationName: 'MoroccoForYou',
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  themeColor: '#0F1B2D',
  width: 'device-width',
  initialScale: 1,
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleShell locale="fr">
      {children}
      <GoogleAnalytics gaId="G-GM2BJLWEF1" />
    </LocaleShell>
  );
}