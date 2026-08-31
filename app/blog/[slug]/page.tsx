// Side-effect import: registers all keyword posts into BLOG_POSTS.
import '@/lib/blog-content';

import type { Metadata } from 'next';
import { BlogPostView } from '@/components/views/BlogPostView';
import { getRootBlogSlugs, getBlogPostInLang } from '@/lib/blog';
import { blogPostMetadata, blogAlternatePaths } from '@/lib/blog-seo';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getRootBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPostInLang(params.slug, 'en');
  if (!post) return {};
  // This route also serves legacy non-EN posts that stay mounted at /blog/.
  // Tag them with their real content language so hreflang doesn't claim a
  // French article is the English version.
  return blogPostMetadata(post, post.lang ?? 'en');
}

export default function Page({ params }: { params: Params }) {
  const post = getBlogPostInLang(params.slug, 'en');

  return (
    <BlogPostView
      slug={params.slug}
      locale="en"
      alternates={post ? blogAlternatePaths(post, post.lang ?? 'en') : {}}
    />
  );
}
