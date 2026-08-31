// Side-effect import: registers all keyword posts into BLOG_POSTS.
import '@/lib/blog-content';

import type { Metadata } from 'next';
import { BlogPostView } from '@/components/views/BlogPostView';
import { getBlogSlugsByLang, getBlogPostInLang } from '@/lib/blog';
import { blogPostMetadata, blogAlternatePaths } from '@/lib/blog-seo';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getBlogSlugsByLang('ar').map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPostInLang(params.slug, 'ar');
  if (!post) return {};
  return blogPostMetadata(post, 'ar');
}

export default function Page({ params }: { params: Params }) {
  const post = getBlogPostInLang(params.slug, 'ar');

  return (
    <BlogPostView
      slug={params.slug}
      locale="ar"
      alternates={post ? blogAlternatePaths(post, 'ar') : {}}
    />
  );
}
