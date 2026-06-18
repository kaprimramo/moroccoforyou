import type { Metadata } from 'next';
import { RentACarView } from '@/components/views/RentACarView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Car rental at Casablanca Airport (CMN) — MoroccoForYou Cars',
  description:
    'Rent a car at Casablanca Mohammed V Airport from MAD 250 / day. Free meet & greet 24/7, unlimited mileage, free cancellation up to 48h. Book on WhatsApp.',
  path: '/rent-a-car/casablanca-airport/',
  locale: 'en',
});

export default function Page() {
  return <RentACarView locale="en" />;
}
