import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'رحلات في المغرب، سائقون خاصون، وتأجير سيارات — MoroccoForYou',
  description:
    'خطّط لرحلة مخصصة في المغرب بالذكاء الاصطناعي: برامج لمراكش وفاس وشفشاون والصحراء وغيرها. سائقون خاصون وتأجير سيارات بمطار الدار البيضاء. حجز عبر واتساب.',
  path: '/',
  locale: 'ar',
});

export default function Page() {
  return <HomeView locale="ar" />;
}
