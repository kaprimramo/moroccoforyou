'use client';

import { useMemo, useState } from 'react';
import { whatsappLink } from '@/lib/whatsapp';
import { dict } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

type Props = {
  locale: Locale;
};

export function DatePicker({ locale }: Props) {
  const t = dict(locale).rentACar;
  const location = t.locationName;

  const [pickupDate, setPickupDate] = useState(todayISO(1));
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnDate, setReturnDate] = useState(todayISO(5));
  const [returnTime, setReturnTime] = useState('10:00');

  const message = useMemo(
    () =>
      [
        `Hi MoroccoForYou Cars! I’d like to rent a car at ${location}.`,
        `Pickup: ${pickupDate} at ${pickupTime}`,
        `Return: ${returnDate} at ${returnTime}`,
        'Please send availability and best price.',
      ].join('\n'),
    [pickupDate, pickupTime, returnDate, returnTime, location],
  );

  return (
    <form
      className="rounded-2xl border border-brand-night/10 bg-white p-6 shadow-sm"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Search car rental availability"
    >
      <div className="grid gap-4 md:grid-cols-5">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-night/60">
            {t.locationLabel}
          </label>
          <p className="mt-1 rounded-md border border-brand-night/20 bg-brand-cream px-3 py-2 text-sm font-medium">
            {location}
          </p>
        </div>
        <div>
          <label htmlFor="pickup-date" className="block text-xs font-semibold uppercase tracking-wider text-brand-night/60">
            {t.pickupDate}
          </label>
          <input
            id="pickup-date"
            type="date"
            value={pickupDate}
            min={todayISO(0)}
            onChange={(e) => setPickupDate(e.target.value)}
            className="mt-1 w-full rounded-md border border-brand-night/20 px-3 py-2 text-sm"
          />
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="mt-2 w-full rounded-md border border-brand-night/20 px-3 py-2 text-sm"
            aria-label={t.pickupTime}
          />
        </div>
        <div>
          <label htmlFor="return-date" className="block text-xs font-semibold uppercase tracking-wider text-brand-night/60">
            {t.returnDate}
          </label>
          <input
            id="return-date"
            type="date"
            value={returnDate}
            min={pickupDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="mt-1 w-full rounded-md border border-brand-night/20 px-3 py-2 text-sm"
          />
          <input
            type="time"
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
            className="mt-2 w-full rounded-md border border-brand-night/20 px-3 py-2 text-sm"
            aria-label={t.returnTime}
          />
        </div>
        <div className="flex flex-col justify-end">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1ebe57]"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </form>
  );
}
