import type { Metadata } from 'next';
import { DestinationView } from '@/components/views/DestinationView';
import { getAllDestinationSlugs, getDestination } from '@/lib/destinations';
import { buildMetadata } from '@/lib/seo';
import { getHero } from '@/lib/destination-media';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const d = getDestination(params.slug);
  if (!d) return {};
  return buildMetadata({
    title: `${d.name.fr}, Maroc — Que faire, itinéraire IA & chauffeur privé`,
    description: `${d.tagline.fr}. ${d.description.fr.slice(0, 140)}… Planifiez votre voyage à ${d.name.fr} sur WhatsApp avec MoroccoForYou.`,
    path: `/destinations/${d.slug}/`,
    locale: 'fr',
    image: getHero(d.slug),
  });
}

export default function Page({ params }: { params: Params }) {
  return <DestinationView slug={params.slug} locale="fr" />;
}
