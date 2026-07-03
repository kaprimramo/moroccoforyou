import type { Metadata } from 'next';
import { AIPlannerView } from '@/components/views/AIPlannerView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'AI Travel Planner Morocco — Built by Local Moroccan Experts',
  description:
    'Plan your Morocco trip with the first AI travel planner built from scratch by Moroccan developers in Casablanca. Real prices, real drive times, insider local knowledge for every corner of Morocco.',
  path: '/planner/',
  locale: 'en',
});

export default function PlannerPage() {
  return <AIPlannerView locale="en" />;
}
