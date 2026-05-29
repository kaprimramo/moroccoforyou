// Side-effect import: registers all keyword posts into BLOG_POSTS.
import '@/lib/blog-content';

import type { Metadata } from 'next';
import { BlogPostView } from '@/components/views/BlogPostView';
import {
  getBlogSlugsByLang,
  getBlogPostInLang,
  blogUrl,
} from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getBlogSlugsByLang('fr').map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPostInLang(params.slug, 'fr');
  if (!post) return {};
  const meta = buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.description,
    path: `/blog/${post.slug}/`,
    locale: 'fr',
    image: post.coverImage,
  });
  if (post.alternates) {
    const languages: Record<string, string> = {};
    if (post.alternates.en) languages['en'] = blogUrl('en', post.alternates.en);
    if (post.alternates.fr) languages['fr'] = blogUrl('fr', post.alternates.fr);
    if (post.alternates.ar) languages['ar'] = blogUrl('ar', post.alternates.ar);
    languages['x-default'] = languages['en'] ?? languages['fr'];
    meta.alternates = { ...(meta.alternates ?? {}), languages };
  }
  return meta;
}

export default function Page({ params }: { params: Params }) {
  return <BlogPostView slug={params.slug} locale="fr" />;
}
