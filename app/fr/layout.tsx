import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/i18n';

// Locale-specific metadata defaults that descend to every /fr/* page.
// Layout itself is a transparent pass-through — chrome (Header/Footer/etc)
// is rendered inside each view via <LocaleShell>, and Google Analytics is
// declared once in the root layout. See lib/seo.ts for shared schemas.
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
  verification: {
    other: {
      'p:domain_verify': ['f7c5b602d0c7d2b75897061267efa5dc'],
    },
  },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
