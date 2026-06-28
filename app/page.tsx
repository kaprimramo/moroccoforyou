import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { buildMetadata } from '@/lib/seo';
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
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'MoroccoForYou Cars',
        telephone: '+212634276534',
        email: 'hello@moroccoforyou.com',
        url: 'https://www.moroccoforyou.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Casablanca Mohammed V Airport (CMN)',
          addressLocality: 'Casablanca',
          postalCode: '20250',
          addressCountry: 'MA'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.3675,
          longitude: -7.5898
        },
        openingHours: 'Mo-Su 00:00-24:00',
        priceRange: '€€'
      }} id="ld-localbusiness" />
      <HomeView locale="en" />
    </>
  );
}
