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
      answer: 'Our driver meets you in the arrivals hall of Casablanca Mohammed V Airport (CMN) with a MoroccoForYou Cars sign. Pickup is included free of charge 24/7.',
    },
    {
      question: 'What documents do I need to rent a car in Morocco?',
      answer: 'A valid driving licence held for at least 1 year, your passport or national ID, and a credit or debit card for the deposit. International driving permits are accepted but not required for most nationalities.',
    },
    {
      question: 'Is the mileage unlimited?',
      answer: 'Yes — all our rentals include unlimited mileage within Morocco.',
    },
    {
      question: 'Can I drop the car off in another city?',
      answer: 'Yes. One-way rentals are available to Marrakech, Fes, Agadir, Tangier, and other major cities. Additional fees may apply depending on the route.',
    },
    {
      question: 'Is the price in MAD or EUR?',
      answer: 'Prices on this page are shown in Moroccan Dirhams (MAD) with an indicative EUR equivalent. You can pay in either at pickup.',
    },
    {
      question: 'How much does it cost to rent a car at Casablanca Airport?',
      answer: 'Economy cars start from MAD 250/day (23EUR). Compact cars from MAD 250/day. SUV Dacia Duster from MAD 350/day (32EUR). All prices include unlimited mileage and basic insurance.',
    },
    {
      question: 'Can I rent a car at CMN without a credit card?',
      answer: 'Most agencies require a credit card for the deposit. MoroccoForYou Cars accepts debit cards on prior arrangement. Contact us on WhatsApp to discuss options.',
    },
    {
      question: 'Is it safe to drive in Morocco?',
      answer: 'Yes — Morocco has good paved roads between all major cities. The Casablanca-Marrakech motorway (A7) is fully dual carriageway. Drive on the right, speed limit 120 km/h on motorways.',
    },
  ],
  fr: [
    {
      question: "Ou recupere-t-on la voiture a l'aeroport de Casablanca ?",
      answer: "Notre chauffeur vous accueille dans le hall des arrivees de l'aeroport Mohammed V (CMN) avec un panneau MoroccoForYou Cars. Accueil inclus 24/7.",
    },
    {
      question: 'Quels documents pour louer une voiture au Maroc ?',
      answer: "Un permis de conduire valide depuis au moins 1 an, passeport ou CNI, et une carte bancaire pour la caution. Le permis international est accepte mais non obligatoire pour la plupart des nationalites.",
    },
    {
      question: 'Le kilometrage est-il illimite ?',
      answer: 'Oui — toutes nos locations incluent le kilometrage illimite au Maroc.',
    },
    {
      question: 'Puis-je rendre la voiture dans une autre ville ?',
      answer: "Oui. Les locations aller simple sont possibles vers Marrakech, Fes, Agadir, Tanger et d'autres grandes villes. Des frais peuvent s'appliquer.",
    },
    {
      question: 'Le prix est-il en MAD ou EUR ?',
      answer: 'Les prix sont affiches en dirhams marocains (MAD) avec un equivalent indicatif en EUR. Paiement en MAD ou EUR au retrait.',
    },
    {
      question: "Combien coute la location d'une voiture a l'aeroport de Casablanca ?",
      answer: 'Les voitures economiques demarrent a 250 MAD/jour (23EUR). SUV Dacia Duster a partir de 350 MAD/jour (32EUR). Kilometrage illimite et assurance de base inclus.',
    },
    {
      question: 'Puis-je louer sans carte de credit ?',
      answer: 'La plupart des agences exigent une carte de credit pour la caution. MoroccoForYou Cars accepte les cartes de debit sur arrangement prealable. Contactez-nous sur WhatsApp.',
    },
    {
      question: 'Est-il sur de conduire au Maroc ?',
      answer: "Oui — le Maroc dispose de bonnes routes goudron nees entre toutes les grandes villes. L'autoroute Casablanca-Marrakech (A7) est en 2x2 voies. On roule a droite, limite 120 km/h sur autoroute.",
    },
  ],
  ar: [
    {
      question: 'اين استلم السيارة في مطار الدار البيضاء؟',
      answer: 'يلتقي بكم سائقنا في صالة الوصول بمطار محمد الخامس (CMN) حاملا لافتة MoroccoForYou Cars. الاستقبال مجاني على مدار الساعة.',
    },
    {
      question: 'ما الوثائق المطلوبة لتاجير سيارة في المغرب؟',
      answer: 'رخصة قيادة سارية منذ سنة على الاقل، وجواز السفر او البطاقة الوطنية، وبطاقة ائتمانية للضمان.',
    },
    {
      question: 'هل الكيلومترات غير محدودة؟',
      answer: 'نعم — جميع تاجيراتنا تشمل كيلومترات غير محدودة داخل المغرب.',
    },
    {
      question: 'هل يمكنني تسليم السيارة في مدينة اخرى؟',
      answer: 'نعم. التاجير في اتجاه واحد متاح الى مراكش وفاس واكادير وطنجة ومدن كبرى اخرى.',
    },
    {
      question: 'هل السعر بالدرهم ام باليورو؟',
      answer: 'الاسعار المعروضة بالدرهم المغربي (MAD) مع ما يعادلها باليورو. الدفع ممكن بالدرهم او اليورو عند الاستلام.',
    },
    {
      question: 'كم يكلف استئجار سيارة في مطار الدار البيضاء؟',
      answer: 'السيارات الاقتصادية من 250 درهم/يوم (23EUR). داشيا دوستر SUV من 350 درهم/يوم (32EUR).',
    },
    {
      question: 'هل يمكن الاستئجار بدون بطاقة ائتمان؟',
      answer: 'معظم الوكالات تشترط بطاقة ائتمان للضمان. MoroccoForYou Cars يقبل بطاقات الخصم بترتيب مسبق.',
    },
    {
      question: 'هل القيادة في المغرب آمنة؟',
      answer: 'نعم — المغرب يملك طرقا معبدة جيدة بين جميع المدن الكبرى. القيادة على اليمين، حد السرعة 120 كم/س على الطرق السريعة.',
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
    streetAddress: 'Aeroport Mohammed V',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  telephone: '+212634276534',
  priceRange: 'MAD 250 - MAD 1100 / day',
  parentOrganization: { '@type': 'Organization', name: 'MoroccoForYou' },
};

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MoroccoForYou Cars',
  image: 'https://www.moroccoforyou.com/logo.svg',
  url: `${SITE_URL}${PATH}`,
  telephone: '+212634276534',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aeroport Mohammed V',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.376427683483136,
    longitude: -7.567062446346052,
  },
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: 'MAD 250 - MAD 1100',
  areaServed: ['Casablanca', 'Marrakech', 'Fes', 'Rabat', 'Tangier', 'Agadir'],
  hasMap: 'https://share.google/lppJQBuy1u0qTgtqi',
};

export function RentACarView({ locale }: { locale: Locale }) {
  const t = dict(locale).rentACar;
  const tCommon = dict(locale);
  return (
    <>
      <JsonLd id="ld-autorental" data={CAR_RENTAL_JSONLD} />
      <JsonLd id="ld-localbusiness" data={LOCAL_BUSINESS_JSONLD} />
      <JsonLd id="ld-faq-cars" data={faqJsonLd(FAQS[locale], locale)} />
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

      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-2xl bg-brand-terracotta/10 border border-brand-terracotta/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-brand-night text-lg">Ready to book your car at CMN?</p>
            <p className="text-brand-night/70 text-sm mt-1">Reply within 1 hour · Free airport meet and greet · From MAD 250/day</p>
          </div>
          <WhatsAppCTA
            message="Hi MoroccoForYou Cars! I'd like to book a car at Casablanca Airport (CMN)."
            label="Book on WhatsApp"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-display text-2xl font-bold text-brand-night mb-6">
          Car Rental at Casablanca Airport (CMN) — Everything You Need to Know
        </h2>
        <div className="space-y-4 text-brand-night/80 leading-relaxed">
          <p>
            MoroccoForYou Cars offers professional meet-and-greet car rental at Casablanca Mohammed V Airport (CMN) — Morocco largest international airport. Your driver waits in arrivals 24/7 with a name board, so you walk straight to your car without queuing at a counter.
          </p>
          <p>
            Economy cars start from <strong>MAD 250/day (23EUR / $25)</strong> with unlimited mileage and basic insurance included. Need a 4x4 for the Atlas Mountains or the Sahara? Our Dacia Duster starts from <strong>MAD 350/day (32EUR)</strong> — the most popular choice for Morocco road trips.
          </p>
          <p>
            One-way rentals are available from Casablanca Airport (CMN) to Marrakech, Fes, Agadir, Rabat, and Tangier. Drop-off fee applies depending on route. The Casablanca-Marrakech motorway (A7) is fully paved dual carriageway — 240 km, 2h30 drive.
          </p>
          <p>
            All MoroccoForYou Cars rentals include: unlimited mileage within Morocco, free airport meet-and-greet at CMN, 24/7 roadside assistance, and basic third-party insurance. Book on WhatsApp for instant confirmation — we reply within 1 hour.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-brand-night/10 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-brand-terracotta">MAD 250</p>
            <p className="text-sm text-brand-night/70 mt-1">Economy from 23EUR/day</p>
          </div>
          <div className="rounded-xl border border-brand-night/10 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-brand-terracotta">24/7</p>
            <p className="text-sm text-brand-night/70 mt-1">Airport meet and greet</p>
          </div>
          <div className="rounded-xl border border-brand-night/10 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-brand-terracotta">∞</p>
            <p className="text-sm text-brand-night/70 mt-1">Unlimited mileage</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-display text-2xl font-bold text-brand-night mb-6">
          Find Us at Casablanca Airport (CMN)
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl overflow-hidden border border-brand-night/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13623.94930705058!2d-7.567062446346052!3d33.376427683483136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63b8bc866083b%3A0xde7a9657dc6b95f1!2sMoroccoForYou!5e0!3m2!1sen!2sma!4v1780943917092!5m2!1sen!2sma"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MoroccoForYou Cars — Casablanca Airport CMN"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-terracotta mb-1">
                Pickup Location
              </p>
              <p className="font-semibold text-brand-night">Casablanca Airport (CMN)</p>
              <p className="text-sm text-brand-night/70">
                Mohammed V International Airport<br />
                Casablanca, Morocco
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-terracotta mb-1">
                Phone / WhatsApp
              </p>
              
                href="tel:+212634276534"
                className="font-semibold text-brand-night hover:text-brand-terracotta"
              >
                +212 634 276 534
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-terracotta mb-1">
                Opening Hours
              </p>
              <p className="font-semibold text-brand-night">Open 24/7</p>
              <p className="text-sm text-brand-night/70">Airport pickups available any time</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-terracotta mb-1">
                Service Area
              </p>
              <p className="text-sm text-brand-night/70">
                Casablanca · Marrakech · Fes · Rabat · Tangier · Agadir
              </p>
            </div>
          </div>
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