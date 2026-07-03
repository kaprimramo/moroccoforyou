import type { Metadata } from 'next';
import { AIPlannerView } from '@/components/views/AIPlannerView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'مخطط سفر ذكي للمغرب — بناه خبراء مغاربة محليون',
  description:
    'خطط لرحلتك إلى المغرب مع أول مخطط سفر ذكي بُني من الصفر على يد مطورين مغاربة في الدار البيضاء. أسعار حقيقية وأوقات طريق فعلية ومعرفة محلية عن كل ركن من المغرب.',
  path: '/planner/',
  locale: 'ar',
});

export default function PlannerPageAr() {
  return <AIPlannerView locale="ar" />;
}
