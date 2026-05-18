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
    title: `${d.name.ar}، المغرب — ماذا تفعل، برنامج بالذكاء الاصطناعي وسائق خاص`,
    description: `${d.tagline.ar}. ${d.description.ar.slice(0, 140)}… خطط لرحلتك إلى ${d.name.ar} عبر واتساب مع MoroccoForYou.`,
    path: `/destinations/${d.slug}/`,
    locale: 'ar',
    image: getHero(d.slug),
  });
}

export default function Page({ params }: { params: Params }) {
  return <DestinationView slug={params.slug} locale="ar" />;
}
