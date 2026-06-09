'use client';

import { useEffect } from 'react';
import { blogStore } from '@/lib/blog-context';

export function SetBlogAlternates({ alternates }: { alternates: Record<string, string> }) {
  useEffect(() => {
    // Kat-setty l-links jded f l-client side store
    blogStore.setAlternates(alternates);

    // Melli l-user kaykhrej m l-article, l-store kat-khwa bach madirosch machakil f pages khrin
    return () => {
      blogStore.clear();
    };
  }, [alternates]);

  return null; // May-render walou f l-UI, khdam ghir f l-khlfa
}