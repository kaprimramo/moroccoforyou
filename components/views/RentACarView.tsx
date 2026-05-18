import Link from 'next/link';
import { CARS } from '@/lib/cars';
import { dict } from '@/lib/dictionaries';
import { localizedUrl, SITE_URL, type Locale } from '@/lib/i18n';
import { destinationPath, homePath } from '@/lib/paths';
import { CarCard } from '@/components/CarCard';
import { DatePicker } from '@/components/DatePicker';
import { TrustSignals } from '@/components/TrustSignals';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

const PATH = '/rent-a-car/casablanca-airport/';

const FAQS: Record<Locale, { question: string; answer: string }[]> = {
  en: [
    {
      question: 'Where do I pick up the car at Casablanca Airport?',
      answer:
        'Our driver meets you in the arrivals hall of Casablanca Mohammed V Airport (CMN) with a MoroccoForYou Cars sign. Pickup is included free of charge 24/7.',
    },
    {
      question: 'What documents do I need to rent a car in Morocco?',
      answer:
        'A valid driving licence held for at least 1 year, your passport or national ID, and a credit or debit card for the deposit. International driving permits are accepted but not required for most nationalities.',
    },
    {
      question: 'Is the mileage unlimited?',
      answer: 'Yes — all our rentals include unlimited mileage within Morocco.',
    },
    {
      question: 'Can I drop the car off in another city?',
      answer:
        'Yes. One-way rentals are available to Marrakech, Fes, Agadir, Tangier, and other major cities. Additional fees may apply depending on the route.',
    },
    {
      question: 'Is the price in MAD or EUR?',
      answer:
        'Prices on this page are shown in Moroccan Dirhams (MAD) with an indicative EUR equivalent. You can pay in either at pickup.',
    },
  ],
  fr: [
    {
      question: 'Où récupère-t-on la voiture à l’aéroport de Casablanca ?',
      answer:
        'Notre chauffeur vous accueille dans le hall des arrivées de l’aéroport Mohammed V (CMN) avec un panneau MoroccoForYou Cars. Accueil inclus 24/7.',
    },
    {
      question: 'Quels documents pour louer une voiture au Maroc ?',
      answer:
        'Un permis de conduire valide depuis au moins 1 an, passeport ou CNI, et une carte bancaire pour la caution. Le permis international est accepté mais non obligatoire pour la plupart des nationalités.',
    },
    {
      question: 'Le kilométrage est-il illimité ?',
      answer: 'Oui — toutes nos locations incluent le kilométrage illimité au Maroc.',
    },
    {
      question: 'Puis-je rendre la voiture dans une autre ville ?',
      answer:
        'Oui. Les locations aller simple sont possibles vers Marrakech, Fès, Agadir, Tanger et d’autres grandes villes. Des frais peuvent s’appliquer.',
    },
    {
      question: 'Le prix est-il en MAD ou EUR ?',
      answer:
        'Les prix sont affichés en dirhams marocains (MAD) avec un équivalent indicatif en EUR. Paiement en MAD ou EUR au retrait.',
    },
  ],
  ar: [
    {
      question: 'أين أستلم السيارة في مطار الدار البيضاء؟',
      answer:
        'يلتقي بكم سائقنا في صالة الوصول بمطار محمد الخامس (CMN) حاملاً لافتة MoroccoForYou Cars. الاستقبال مجاني على مدار الساعة.',
    },
    {
      question: 'ما الوثائق المطلوبة لتأجير سيارة في المغرب؟',
      answer:
        'رخصة قيادة سارية منذ سنة على الأقل، وجواز السفر أو البطاقة الوطنية، وبطاقة ائتمانية للضمان. رخصة القيادة الدولية مقبولة لكن غير ضرورية لمعظم الجنسيات.',
    },
    {
      question: 'هل الكيلومترات غير محدودة؟',
      answer: 'نعم — جميع تأجيراتنا تشمل كيلومترات غير محدودة داخل المغرب.',
    },
    {
      question: 'هل يمكنني تسليم السيارة في مدينة أخرى؟',
      answer:
        'نعم. التأجير في اتجاه واحد متاح إلى مراكش وفاس وأكادير وطنجة ومدن كبرى أخرى. قد تُطبَّق رسوم إضافية.',
    },
    {
      question: 'هل السعر بالدرهم أم باليورو؟',
      answer:
        'الأسعار المعروضة بالدرهم المغربي (MAD) مع ما يعادلها باليورو. الدفع ممكن بالدرهم أو اليورو عند الاستلام.',
    },
  ],
};

const CAR_RENTAL_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  name: 'MoroccoForYou Cars — Casablanca Airport',
  url: `${SITE_URL}${PATH}`,
  areaServed: { '@type': 'Country', name: 'Morocco' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  telephone: '+212-600-000-000',
  priceRange: 'MAD 250 – MAD 1,100 / day',
  parentOrganization: { '@type': 'Organization', name: 'MoroccoForYou' },
};

export function RentACarView({ locale }: { locale: Locale }) {
  const t = dict(locale).rentACar;
  const tCommon = dict(locale);

  return (
    <>
      <JsonLd id="ld-autorental" data={CAR_RENTAL_JSONLD} />
      <JsonLd id="ld-faq-cars" data={faqJsonLd(FAQS[locale])} />
      <JsonLd
        id="ld-breadcrumb-cars"
        data={breadcrumbJsonLd([
          { name: tCommon.notFound.home, url: localizedUrl(locale, '/') },
          { name: tCommon.nav.rentACar, url: localizedUrl(locale, PATH) },
          { name: t.locationName, url: localizedUrl(locale, PATH) },
        ])}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-brand-night/60">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={homePath(locale)} className="hover:underline">
              {tCommon.notFound.home}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>{tCommon.nav.rentACar}</li>
          <li aria-hidden>/</li>
          <li className="font-medium text-brand-night">{t.locationName}</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-terracotta">
              {t.eyebrow}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-brand-night md:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 text-lg text-brand-night/80">{t.subtitle}</p>
            <ul className="mt-5 grid gap-2 text-sm text-brand-night/90 sm:grid-cols-2">
              {t.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
          </div>
          <div className="self-start">
            <DatePicker locale={locale} />
            <p className="mt-3 text-xs text-brand-night/60">{t.note}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <TrustSignals
          locale={locale}
          signals={[
            { icon: '🚗', label: 'From MAD 250', sub: `≈ €23 ${t.perDay}` },
            { icon: '🛬', label: t.features[0], sub: 'CMN 24/7' },
            { icon: '∞', label: t.features[1], sub: '' },
            { icon: '↩️', label: t.features[2], sub: '' },
          ]}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-night">{t.fleetTitle}</h2>
            <p className="mt-1 text-brand-night/70">{t.fleetSubtitle}</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARS.map((car) => (
            <CarCard key={car.id} car={car} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <FAQ faqs={FAQS[locale]} locale={locale} title={t.faqTitle} />
      </section>

      <section className="mx-auto mb-16 max-w-4xl rounded-3xl bg-brand-night px-6 py-12 text-center text-brand-cream md:px-12">
        <h2 className="font-display text-3xl font-bold">{t.needHelpTitle}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-brand-cream/80">{t.needHelpSubtitle}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <WhatsAppCTA
            message="Hi MoroccoForYou Cars! I'd like a recommendation for a rental at Casablanca Airport."
            label={t.needHelpCta}
          />
          <Link
            href={destinationPath(locale, 'marrakech')}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.seeDestinations}
          </Link>
        </div>
      </section>
    </>
  );
}
