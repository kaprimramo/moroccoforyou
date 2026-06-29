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
    other: {
      'geo.region': locale === 'ar' ? 'AE' : locale === 'fr' ? 'EU' : 'US',
      'geo.placename': 'Morocco',
      'geo.position': '33.5731;-7.5898',
      ICBM: '33.5731, -7.5898',
      'target-market': locale === 'ar' ? 'GCC' : locale === 'fr' ? 'Europe' : 'USA',
      'content-language': locale,
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

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
  locale: Locale = 'en',
) {
  const langMap: Record<Locale, string> = { en: 'en', fr: 'fr', ar: 'ar' };
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: langMap[locale],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[itemprop="acceptedAnswer"]'],
    },
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
        inLanguage: langMap[locale],
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@type': 'Organization', name: SITE_NAME },
    inLanguage: ['en', 'fr', 'ar'],
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

/** Canonical LocalBusiness node. Stable @id so multiple pages can reference
 * the same entity without producing duplicate or conflicting business cards
 * in search results. */
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: 'MoroccoForYou Cars',
    image: `${SITE_URL}/logo.svg`,
    url: `${SITE_URL}/rent-a-car/casablanca-airport/`,
    telephone: '+212634276534',
    email: 'hello@moroccoforyou.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aéroport Mohammed V',
      addressLocality: 'Casablanca',
      postalCode: '20250',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.376427683483136,
      longitude: -7.567062446346052,
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: 'MAD 250 - MAD 1100',
    areaServed: [
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'City', name: 'Marrakech' },
      { '@type': 'City', name: 'Fes' },
      { '@type': 'City', name: 'Rabat' },
      { '@type': 'City', name: 'Tangier' },
      { '@type': 'City', name: 'Agadir' },
    ],
    hasMap: 'https://share.google/lppJQBuy1u0qTgtqi',
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      'MoroccoForYou is a Morocco-based travel agency offering AI-planned itineraries, private drivers, riad bookings, and car rental at Casablanca and Marrakech airports.',
    areaServed: { '@type': 'Country', name: 'Morocco' },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MA',
      addressLocality: 'Casablanca',
    },
    availableLanguage: ['en', 'fr', 'ar'],
    knowsAbout: [
      'Morocco travel',
      'Marrakech itineraries',
      'Sahara desert tours',
      'Morocco car rental',
      'Fes guided tours',
      'Chefchaouen travel guide',
      'Atlas Mountains trekking',
    ],
    sameAs: [],
  };
}
