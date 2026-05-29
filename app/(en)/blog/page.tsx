import type { Metadata } from 'next';
import { BlogIndexView } from '@/components/views/BlogIndexView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Morocco Travel Blog — Guides, Itineraries & Local Tips',
  description:
    'In-depth Morocco travel guides written by local guides: 7-day itineraries, Marrakech riads, Sahara desert tours, Chefchaouen guide, car rental, and more.',
  path: '/blog/',
  locale: 'en',
});

export default function Page() {
  return <BlogIndexView locale="en" />;
}
