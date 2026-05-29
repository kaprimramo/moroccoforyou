import Link from 'next/link';
import { DESTINATIONS, getDestination } from '@/lib/destinations';
import { dict } from '@/lib/dictionaries';
import { localizedUrl, type Locale } from '@/lib/i18n';
import { destinationPath, homePath, rentACarPath } from '@/lib/paths';
import { getCarById } from '@/lib/cars';
import { getHotels } from '@/lib/hotels';
import {
  getHero,
  getGallery,
  getRecommendedCarIds,
} from '@/lib/destination-media';
import { AIPlanner } from '@/components/AIPlanner';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { TrustSignals } from '@/components/TrustSignals';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { HotelCard } from '@/components/HotelCard';
import { CarCard } from '@/components/CarCard';
import { breadcrumbJsonLd, faqJsonLd, touristDestinationJsonLd } from '@/lib/seo';
import { notFound } from 'next/navigation';

export function DestinationView({ slug, locale }: { slug: string; locale: Locale }) {
  const d = getDestination(slug);
  if (!d) notFound();

  const t = dict(locale);
  const name = d.name[locale];
  const url = localizedUrl(locale, `/destinations/${d.slug}/`);
  const hero = getHero(d.slug);
  const gallery = getGallery(d.slug);
  const hotels = getHotels(d.slug);
  const recommendedCars = getRecommendedCarIds(d.slug)
    .map((id) => getCarById(id))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);
  const other = DESTINATIONS.filter((x) => x.slug !== d.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        id="ld-destination"
        data={touristDestinationJsonLd({
          name: `${name}, Morocco`,
          description: d.description[locale],
          url,
          image: hero,
          geo: d.geo,
          containsPlace: d.highlights[locale],
        })}
      />
      <JsonLd id="ld-faq-destination" data={faqJsonLd(d.faqs[locale], locale)} />
      <JsonLd
        id="ld-breadcrumb"
        data={breadcrumbJsonLd([
          { name: t.notFound.home, url: localizedUrl(locale, '/') },
          {
            name: t.destination.breadcrumb,
            url: localizedUrl(locale, '/destinations/marrakech/'),
          },
          { name, url },
        ])}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-brand-night/60">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={homePath(locale)} className="hover:underline">
              {t.notFound.home}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={destinationPath(locale, 'marrakech')} className="hover:underline">
              {t.destination.breadcrumb}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-brand-night">{name}</li>
        </ol>
      </nav>

      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-terracotta">
              {d.region[locale]}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-brand-night md:text-5xl">
              {name}
            </h1>
            <p className="mt-3 text-lg text-brand-night/80">{d.tagline[locale]}</p>
            <p className="mt-5 text-brand-night/80">{d.description[locale]}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-brand-night/10 bg-white p-3">
                <dt className="text-xs uppercase tracking-wider text-brand-night/60">
                  {t.destination.bestTime}
                </dt>
                <dd className="font-semibold text-brand-night">{d.bestTimeToVisit[locale]}</dd>
              </div>
              <div className="rounded-lg border border-brand-night/10 bg-white p-3">
                <dt className="text-xs uppercase tracking-wider text-brand-night/60">
                  {t.destination.duration}
                </dt>
                <dd className="font-semibold text-brand-night">
                  {d.durationDays} {t.destination.days}
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <WhatsAppCTA
                message={`Hi MoroccoForYou! I’d like to plan a trip to ${name}.`}
                label={t.destination.planCta.replace('{name}', name)}
              />
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-brand-sand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero}
              alt={`${name}, Morocco — ${d.tagline[locale]}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-3xl font-bold text-brand-night">
          {t.destination.highlights}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {d.highlights[locale].map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 rounded-xl border border-brand-night/10 bg-white p-4"
            >
              <span aria-hidden className="mt-1 text-brand-terracotta">●</span>
              <span className="text-brand-night/90">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-3xl font-bold text-brand-night">
          {t.destination.about(name)}
        </h2>
        <p className="mt-4 max-w-3xl whitespace-pre-line text-brand-night/80">
          {d.longDescription[locale]}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-3xl font-bold text-brand-night">
          {t.destination.thingsToDo(name)}
        </h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {d.thingsToDo[locale].map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-brand-night/10 bg-white p-4"
            >
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-terracotta/10 text-sm font-semibold text-brand-terracotta"
              >
                {i + 1}
              </span>
              <span className="text-brand-night/90">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold text-brand-night">
              {t.destination.tipsTitle(name)}
            </h2>
            <ul className="mt-6 space-y-3">
              {d.localTips[locale].map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 rounded-xl border border-brand-night/10 bg-white p-4"
                >
                  <span aria-hidden className="mt-0.5 text-brand-oasis">★</span>
                  <span className="text-brand-night/90">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="self-start rounded-2xl bg-brand-night p-6 text-brand-cream">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-sand">
              {t.destination.pricesTitle(name)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-cream/90">
              {d.prices[locale]}
            </p>
          </aside>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="font-display text-3xl font-bold text-brand-night">
            {t.destination.gallery}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="aspect-[4/3] overflow-hidden rounded-xl bg-brand-sand"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${name} — photo ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-10">
        <AIPlanner destinationName={name} destinationSlug={d.slug} locale={locale} />
      </section>

      {hotels.length > 0 && (
        <section className="bg-white/60 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-night">
                  {t.destination.stayTitle(name)}
                </h2>
                <p className="mt-1 text-brand-night/70">{t.destination.staySubtitle}</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {hotels.map((h) => (
                <HotelCard key={h.id} hotel={h} destinationName={name} />
              ))}
            </div>
          </div>
        </section>
      )}

      {recommendedCars.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-night">
                {t.destination.carsTitle(name)}
              </h2>
              <p className="mt-1 text-brand-night/70">{t.destination.carsSubtitle}</p>
            </div>
            <Link
              href={rentACarPath(locale)}
              className="hidden whitespace-nowrap text-sm font-semibold text-brand-oasis hover:underline md:inline"
            >
              {t.destination.seeAllCars}
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedCars.map((car) => (
              <CarCard key={car.id} car={car} locale={locale} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-white/60 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <TrustSignals locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <FAQ
          faqs={d.faqs[locale]}
          locale={locale}
          title={t.destination.faqTitle(name)}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-bold text-brand-night">
          {t.destination.other}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {other.map((od) => (
            <Link
              key={od.slug}
              href={destinationPath(locale, od.slug)}
              className="rounded-xl border border-brand-night/10 bg-white p-4 hover:border-brand-terracotta"
            >
              <p className="text-xs uppercase tracking-wider text-brand-terracotta">
                {od.region[locale]}
              </p>
              <p className="mt-1 font-semibold text-brand-night">{od.name[locale]}</p>
              <p className="mt-1 text-sm text-brand-night/70">{od.tagline[locale]}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
