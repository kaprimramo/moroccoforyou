import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { SITE_URL } from '@/lib/i18n';
import { LocaleShell } from '@/components/LocaleShell';

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
};

export const viewport: Viewport = {
  themeColor: '#0F1B2D',
  width: 'device-width',
  initialScale: 1,
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="ar">{children}</LocaleShell>;
}
