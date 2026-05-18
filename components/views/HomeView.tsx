import Link from 'next/link';
import { DESTINATIONS } from '@/lib/destinations';
import { dict } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import { destinationPath, homePath, rentACarPath } from '@/lib/paths';
import { DestinationCard } from '@/components/DestinationCard';
import { TrustSignals } from '@/components/TrustSignals';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { faqJsonLd } from '@/lib/seo';
import { HERO_HOMEPAGE } from '@/lib/destination-media';

const HOME_FAQS: Record<Locale, { question: string; answer: string }[]> = {
  en: [
    {
      question: 'How does MoroccoForYou work?',
      answer:
        'Tell us your travel dates, interests, and pace via our AI planner or WhatsApp. We design a custom itinerary, book your hotels and private driver, and stay reachable in real time during your trip.',
    },
    {
      question: 'Can I just rent a car without a full itinerary?',
      answer:
        'Yes. Our MoroccoForYou Cars service offers car rental from Casablanca Airport (CMN) with free cancellation up to 48h before pickup.',
    },
    {
      question: 'What languages do you speak?',
      answer: 'We support travelers in English, French, and Arabic — by WhatsApp, phone, and email.',
    },
    {
      question: 'Is Morocco safe to travel to?',
      answer:
        'Morocco is one of the safest countries in North Africa for tourism. We brief every traveler on local etiquette and stay on call throughout your trip.',
    },
  ],
  fr: [
    {
      question: 'Comment fonctionne MoroccoForYou ?',
      answer:
        'Dites-nous vos dates, vos envies et votre rythme via notre planificateur IA ou WhatsApp. Nous concevons un itinéraire sur mesure, réservons hôtels et chauffeur, et restons joignables pendant tout le voyage.',
    },
    {
      question: 'Puis-je louer une voiture sans itinéraire complet ?',
      answer:
        'Oui. MoroccoForYou Cars propose la location à l’aéroport de Casablanca (CMN) avec annulation gratuite jusqu’à 48h avant.',
    },
    {
      question: 'Quelles langues parlez-vous ?',
      answer: 'Anglais, français et arabe — par WhatsApp, téléphone et e-mail.',
    },
    {
      question: 'Le Maroc est-il sûr pour voyager ?',
      answer:
        'Le Maroc est l’un des pays les plus sûrs d’Afrique du Nord pour le tourisme. Nous briefons chaque voyageur sur les usages locaux et restons joignables tout le séjour.',
    },
  ],
  ar: [
    {
      question: 'كيف يعمل MoroccoForYou؟',
      answer:
        'أخبرنا بتواريخ سفرك واهتماماتك وإيقاع رحلتك عبر مخططنا الذكي أو واتساب. نصمم لك برنامجًا مخصصًا، ونحجز الفنادق والسائق الخاص، ونبقى متاحين طوال الرحلة.',
    },
    {
      question: 'هل يمكنني فقط استئجار سيارة بدون برنامج كامل؟',
      answer:
        'نعم. تقدم MoroccoForYou Cars تأجير السيارات من مطار الدار البيضاء (CMN) مع إلغاء مجاني حتى 48 ساعة قبل الاستلام.',
    },
    {
      question: 'ما اللغات التي تتحدثونها؟',
      answer: 'الإنجليزية والفرنسية والعربية — عبر واتساب والهاتف والبريد الإلكتروني.',
    },
    {
      question: 'هل المغرب آمن للسفر؟',
      answer:
        'المغرب من أكثر دول شمال أفريقيا أمانًا للسياحة. نقدّم لكل مسافر إحاطة بالعادات المحلية ونبقى متاحين طوال الرحلة.',
    },
  ],
};

export function HomeView({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const faqs = HOME_FAQS[locale];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} id="ld-faq-home" />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-sand/40 via-brand-cream to-brand-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-terracotta">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand-night md:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-night/80">{t.hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={destinationPath(locale, 'marrakech')}
                className="inline-flex items-center justify-center rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white hover:bg-brand-night"
              >
                {t.hero.ctaPlan}
              </Link>
              <Link
                href={rentACarPath(locale)}
                className="inline-flex items-center justify-center rounded-full border border-brand-night/20 bg-white px-6 py-3 text-sm font-semibold text-brand-night hover:border-brand-terracotta"
              >
                {t.hero.ctaRent}
              </Link>
              <WhatsAppCTA
                message="Hi MoroccoForYou! I’d like help planning a Morocco trip."
                label={t.hero.ctaWhatsapp}
                variant="outline"
              />
            </div>
            <p className="mt-4 text-xs text-brand-night/60">{t.hero.proof}</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-brand-sand shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_HOMEPAGE}
                alt="Atlas mountains and a kasbah at sunset — Morocco"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-lg md:block">
              <p className="text-xs uppercase tracking-wider text-brand-night/60">
                {t.hero.featuredEyebrow}
              </p>
              <p className="font-display text-lg font-semibold text-brand-night">
                {t.hero.featuredTitle}
              </p>
              <p className="text-sm text-brand-terracotta">{t.hero.featuredPrice}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-night md:text-4xl">
              {t.topDestinations.title}
            </h2>
            <p className="mt-2 text-brand-night/70">{t.topDestinations.subtitle}</p>
          </div>
          <Link
            href={destinationPath(locale, 'marrakech')}
            className="hidden whitespace-nowrap text-sm font-semibold text-brand-oasis hover:underline md:inline"
          >
            {t.topDestinations.seeAll}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <DestinationCard key={d.slug} destination={d} locale={locale} />
          ))}
        </div>
      </section>

      <section className="bg-white/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-3xl font-bold text-brand-night">
            {t.why.title}
          </h2>
          <p className="mt-2 text-center text-brand-night/70">{t.why.subtitle}</p>
          <div className="mt-8">
            <TrustSignals locale={locale} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <FAQ faqs={faqs} locale={locale} />
      </section>

      <section className="mx-auto mb-16 max-w-4xl rounded-3xl bg-brand-night px-6 py-12 text-center text-brand-cream md:px-12">
        <h2 className="font-display text-3xl font-bold">{t.bottomCta.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-brand-cream/80">{t.bottomCta.subtitle}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <WhatsAppCTA
            message="Hi MoroccoForYou! I’d like help planning a Morocco trip."
            label={t.bottomCta.start}
          />
          <Link
            href={homePath(locale)}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.bottomCta.browse}
          </Link>
        </div>
      </section>
    </>
  );
}
