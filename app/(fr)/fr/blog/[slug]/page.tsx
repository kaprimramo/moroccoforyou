// Side-effect import: registers all keyword posts into BLOG_POSTS.
import '@/lib/blog-content';

import type { Metadata } from 'next';
import { BlogPostView } from '@/components/views/BlogPostView';
import { getRootBlogSlugs, getBlogPostInLang, blogUrl } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';
import { SetBlogAlternates } from '@/components/SetBlogAlternates';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getRootBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPostInLang(params.slug, 'fr'); // 👈 'fr' hna
  if (!post) return {};
  const meta = buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.description,
    path: `/blog/${post.slug}/`,
    locale: 'fr', // 👈 'fr' hna
    image: post.coverImage,
  });
  if (post.alternates) {
    const languages: Record<string, string> = {};
    if (post.alternates.en) languages['en'] = blogUrl('en', post.alternates.en);
    if (post.alternates.fr) languages['fr'] = blogUrl('fr', post.alternates.fr);
    if (post.alternates.ar) languages['ar'] = blogUrl('ar', post.alternates.ar);
    languages['x-default'] = languages['en'] ?? '';
    meta.alternates = { ...(meta.alternates ?? {}), languages };
  }
  return meta;
}

export default function Page({ params }: { params: Params }) {
  const post = getBlogPostInLang(params.slug, 'fr'); // 👈 'fr' hna

  return (
    <>
      {post?.alternates && (
        <SetBlogAlternates 
          alternates={{
            en: post.alternates.en ? `/blog/${post.alternates.en}/` : '',
            fr: post.alternates.fr ? `/fr/blog/${post.alternates.fr}/` : '',
            ar: post.alternates.ar ? `/ar/blog/${post.alternates.ar}/` : '',
          }}
        />
      )}
      <BlogPostView slug={params.slug} locale="fr" />
    </>
  );
}