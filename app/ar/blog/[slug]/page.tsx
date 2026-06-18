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
  void require('@/lib/blog-content');
  return getBlogSlugsByLang('ar').map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPostInLang(params.slug, 'ar');
  if (!post) return {};
  const meta = buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.description,
    path: `/ar/blog/${post.slug}/`, // 👈 FIX SEO: path khasso i-koun fih /ar/
    locale: 'ar',
    image: post.coverImage,
  });
  if (post.alternates) {
    const languages: Record<string, string> = {};
    if (post.alternates.en) languages['en'] = blogUrl('en', post.alternates.en);
    if (post.alternates.fr) languages['fr'] = blogUrl('fr', post.alternates.fr);
    if (post.alternates.ar) languages['ar'] = blogUrl('ar', post.alternates.ar);
    languages['x-default'] = languages['en'] ?? languages['ar'];
    meta.alternates = { ...(meta.alternates ?? {}), languages };
  }
  return meta;
}

export default function Page({ params }: { params: Params }) {
  // 1. Fetchi l-post d l-Arabe hna f l-page
  const post = getBlogPostInLang(params.slug, 'ar');

  // 2. Mapping dyal les custom alternates slugs m9addin
  const alternatesPaths: Record<string, string> = {};
  if (post?.alternates) {
    if (post.alternates.en) alternatesPaths['en'] = `/blog/${post.alternates.en}/`;
    if (post.alternates.fr) alternatesPaths['fr'] = `/fr/blog/${post.alternates.fr}/`;
    if (post.alternates.ar) alternatesPaths['ar'] = `/ar/blog/${post.alternates.ar}/`;
  }

  // 3. Passi l-alternates l l-view direct
  return <BlogPostView slug={params.slug} locale="ar" alternates={alternatesPaths} />;
}