import type { Metadata } from 'next';
import { BlogIndexView } from '@/components/views/BlogIndexView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Blog voyage Maroc — Guides, itinéraires et conseils locaux',
  description:
    'Le blog voyage Maroc de MoroccoForYou : guides 7 et 10 jours, riads de Marrakech, tour du désert de Merzouga, médinas de Fès et Chefchaouen, location de voiture.',
  path: '/blog/',
  locale: 'fr',
});

export default function Page() {
  return <BlogIndexView locale="fr" />;
}
