import type { Metadata } from 'next';
import { BlogIndexView } from '@/components/views/BlogIndexView';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'مدونة السفر إلى المغرب — أدلة وبرامج ونصائح محلية',
  description:
    'مدونة السفر إلى المغرب من MoroccoForYou: أدلة 7 و10 أيام، رياضات مراكش، جولة صحراء مرزوكة، مدينتا فاس وشفشاون العتيقتان، وتأجير السيارات.',
  path: '/blog/',
  locale: 'ar',
});

export default function Page() {
  return <BlogIndexView locale="ar" />;
}
