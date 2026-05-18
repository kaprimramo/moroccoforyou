import type { Metadata } from 'next';
import { RentACarView } from '@/components/views/RentACarView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Location de voiture à l’aéroport de Casablanca (CMN) — MoroccoForYou Cars',
  description:
    'Louez une voiture à l’aéroport Mohammed V de Casablanca à partir de 250 MAD / jour. Accueil 24/7, kilométrage illimité, annulation gratuite 48h. Réservation WhatsApp.',
  path: '/rent-a-car/casablanca-airport/',
  locale: 'fr',
});

export default function Page() {
  return <RentACarView locale="fr" />;
}
