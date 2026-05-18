import type { Metadata } from 'next';
import { LOCALES, SITE_URL, localizedUrl, type Locale } from './i18n';

export const SITE_NAME = 'MoroccoForYou';

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  locale = 'en',
  image,
}: BuildMetadataArgs): Metadata {
  const canonical = localizedUrl(locale, path);
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, localizedUrl(l, path)]),
  ) as Record<Locale, string>;
  const ogImage = image ?? `${SITE_URL}/og-default.jpg`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: {
        ...languages,
        'x-default': localizedUrl('en', path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function touristDestinationJsonLd(args: {
  name: string;
  description: string;
  url: string;
  image?: string;
  geo?: { lat: number; lng: number };
  containsPlace?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: args.name,
    description: args.description,
    url: args.url,
    ...(args.image ? { image: args.image } : {}),
    ...(args.geo
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: args.geo.lat,
            longitude: args.geo.lng,
          },
        }
      : {}),
    ...(args.containsPlace && args.containsPlace.length > 0
      ? {
          containsPlace: args.containsPlace.map((name) => ({
            '@type': 'TouristAttraction',
            name,
          })),
        }
      : {}),
    isPartOf: {
      '@type': 'Country',
      name: 'Morocco',
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    areaServed: { '@type': 'Country', name: 'Morocco' },
    sameAs: [],
  };
}
