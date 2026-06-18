import type { Metadata } from 'next';
import { RentACarView } from '@/components/views/RentACarView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'تأجير السيارات في مطار الدار البيضاء (CMN) — MoroccoForYou Cars',
  description:
    'استأجر سيارة في مطار محمد الخامس بالدار البيضاء ابتداءً من 250 درهم في اليوم. استقبال 24/7، كيلومترات غير محدودة، إلغاء مجاني خلال 48 ساعة. الحجز عبر واتساب.',
  path: '/rent-a-car/casablanca-airport/',
  locale: 'ar',
});

export default function Page() {
  return <RentACarView locale="ar" />;
}
