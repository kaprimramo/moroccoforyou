import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Voyages au Maroc, chauffeurs privés & location de voiture — MoroccoForYou',
  description:
    'Planifiez un voyage sur mesure au Maroc avec l’IA : itinéraires pour Marrakech, Fès, Chefchaouen, le Sahara et plus. Chauffeurs privés et location à Casablanca. Réservation WhatsApp.',
  path: '/',
  locale: 'fr',
});

export default function Page() {
  return <HomeView locale="fr" />;
}
