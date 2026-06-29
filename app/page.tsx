import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { buildMetadata, localBusinessJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Morocco trips, private drivers & car rental — MoroccoForYou',
  description:
    'Plan a tailor-made Morocco trip with AI: itineraries for Marrakech, Fes, Chefchaouen, the Sahara and more. Private drivers and car rental at Casablanca Airport. WhatsApp booking.',
  path: '/',
  locale: 'en',
});

export default function Page() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} id="ld-localbusiness" />
      <HomeView locale="en" />
    </>
  );
}
