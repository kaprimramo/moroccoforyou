import type { Car } from '@/lib/cars';
import { dict } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';
import { WhatsAppCTA } from './WhatsAppCTA';

export function CarCard({ car, locale }: { car: Car; locale: Locale }) {
  const t = dict(locale).rentACar;
  const message = `Hi! I’d like to book the ${car.name} at Casablanca Airport. Please send availability.`;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brand-night/10 bg-white shadow-sm">
      <div className="aspect-[16/10] w-full bg-brand-cream">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.image}
          alt={`${car.name} — MoroccoForYou Cars`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-bold text-brand-night">{car.name}</h3>
            <p className="text-xs uppercase tracking-wider text-brand-night/60">{car.category}</p>
          </div>
          <p className="text-right">
            <span className="block text-2xl font-bold text-brand-terracotta">
              {car.pricePerDayMAD} MAD
            </span>
            <span className="block text-xs text-brand-night/60">
              ≈ €{car.pricePerDayEUR} {t.perDay}
            </span>
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-1 text-xs text-brand-night/80">
          <li>👥 {t.seats(car.seats)}</li>
          <li>🧳 {t.bags(car.bags)}</li>
          <li>⚙️ {t.transmission[car.transmission]}</li>
          <li>{car.airCon ? `❄️ ${t.aircon}` : `— ${t.noAircon}`}</li>
        </ul>
        <ul className="flex flex-wrap gap-1.5">
          {car.features.map((f) => (
            <li
              key={f}
              className="rounded-full bg-brand-cream px-2.5 py-1 text-[11px] text-brand-night/80"
            >
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-3">
          <WhatsAppCTA message={message} label={t.bookOnWhatsapp} className="w-full" />
        </div>
      </div>
    </article>
  );
}
