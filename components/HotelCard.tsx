import { type Hotel, hotelTypeLabel } from '@/lib/hotels';
import { WhatsAppCTA } from './WhatsAppCTA';

export function HotelCard({ hotel, destinationName }: { hotel: Hotel; destinationName: string }) {
  const message = `Hi MoroccoForYou! I'd like to check availability at ${hotel.name} in ${destinationName}.`;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brand-night/10 bg-white shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-brand-cream">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hotel.image}
          alt={`${hotel.name} — ${destinationName}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-night/80">
          {hotelTypeLabel(hotel.type)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-bold text-brand-night">{hotel.name}</h3>
          <p className="text-xs text-brand-night/60">{hotel.location}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-brand-night">★ {hotel.rating.toFixed(1)}</span>
          <span className="text-brand-night/60">({hotel.reviewCount.toLocaleString()})</span>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {hotel.features.slice(0, 4).map((f) => (
            <li
              key={f}
              className="rounded-full bg-brand-cream px-2.5 py-1 text-[11px] text-brand-night/80"
            >
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <p>
            <span className="block text-xs uppercase tracking-wider text-brand-night/60">From</span>
            <span className="block text-xl font-bold text-brand-terracotta">
              {hotel.pricePerNightFromMAD.toLocaleString()} MAD
            </span>
            <span className="block text-[11px] text-brand-night/60">
              ≈ €{hotel.pricePerNightFromEUR} / night
            </span>
          </p>
          <WhatsAppCTA message={message} label="Check rates" variant="pill" />
        </div>
      </div>
    </article>
  );
}
