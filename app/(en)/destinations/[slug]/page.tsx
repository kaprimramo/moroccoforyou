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
    title: `${d.name.en}, Morocco — Things to do, AI itinerary & private driver`,
    description: `${d.tagline.en}. ${d.description.en.slice(0, 140)}… Plan your ${d.name.en} trip on WhatsApp with MoroccoForYou.`,
    path: `/destinations/${d.slug}/`,
    locale: 'en',
    image: getHero(d.slug),
  });
}

export default function Page({ params }: { params: Params }) {
  return <DestinationView slug={params.slug} locale="en" />;
}