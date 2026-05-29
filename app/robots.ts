import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/i18n';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // Explicit allow rules so Search Console cannot misinterpret the
        // default `Allow: /` and report key sections as blocked.
        allow: [
          '/',
          '/blog/',
          '/destinations/',
          '/rent-a-car/',
          '/fr/',
          '/ar/',
        ],
        // Keep Next.js internals and Vercel preview noise out of the index,
        // but never block content paths.
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
