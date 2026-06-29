import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/i18n';

// Locale-specific metadata defaults that descend to every /ar/* page.
// Layout itself is a transparent pass-through — chrome (Header/Footer/etc)
// is rendered inside each view via <LocaleShell>, and Google Analytics is
// declared once in the root layout. See lib/seo.ts for shared schemas.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MoroccoForYou — رحلات مخصصة وسائقون وتأجير سيارات في المغرب',
    template: '%s · MoroccoForYou',
  },
  description:
    'خطط لرحلتك المثالية في المغرب مع MoroccoForYou: مخطط ذكاء اصطناعي، سائقون خاصون، وتأجير سيارات بمطار الدار البيضاء. الحجز عبر واتساب.',
  applicationName: 'MoroccoForYou',
  icons: { icon: '/favicon.ico' },
  verification: {
    other: {
      'p:domain_verify': ['f7c5b602d0c7d2b75897061267efa5dc'],
    },
  },
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
