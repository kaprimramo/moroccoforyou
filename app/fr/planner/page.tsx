import type { Metadata } from 'next';
import { AIPlannerView } from '@/components/views/AIPlannerView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Planificateur IA Maroc — Conçu par des experts locaux marocains',
  description:
    'Planifiez votre voyage au Maroc avec le premier planificateur IA construit de zéro par des développeurs marocains à Casablanca. Vrais prix, vraies durées, savoir local sur chaque coin du Maroc.',
  path: '/planner/',
  locale: 'fr',
});

export default function PlannerPageFr() {
  return <AIPlannerView locale="fr" />;
}
