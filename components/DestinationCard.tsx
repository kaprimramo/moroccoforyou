import Link from 'next/link';
import type { Destination } from '@/lib/destinations';
import type { Locale } from '@/lib/i18n';
import { destinationPath } from '@/lib/paths';
import { getHero } from '@/lib/destination-media';

export function DestinationCard({
  destination,
  locale,
}: {
  destination: Destination;
  locale: Locale;
}) {
  return (
    <Link
      href={destinationPath(locale, destination.slug)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-night/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-brand-sand/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getHero(destination.slug)}
          alt={`${destination.name[locale]} — ${destination.tagline[locale]}`}
          loading="lazy"
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs uppercase tracking-wider text-brand-terracotta">
          {destination.region[locale]}
        </p>
        <h3 className="font-display text-xl font-bold text-brand-night">
          {destination.name[locale]}
        </h3>
        <p className="text-sm text-brand-night/80">{destination.tagline[locale]}</p>
      </div>
    </Link>
  );
}
