'use client';

import { useMemo, useState } from 'react';
import { whatsappLink } from '@/lib/whatsapp';
import { dict } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

type Props = {
  destinationName: string;
  destinationSlug: string;
  locale: Locale;
};

type ItineraryState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'ok'; itinerary: string }
  | { status: 'error'; error: string };

const API_URL = process.env.NEXT_PUBLIC_AI_API_URL;

export function AIPlanner({ destinationName, destinationSlug, locale }: Props) {
  const t = dict(locale).destination;

  const [days, setDays] = useState(4);
  const [travelers, setTravelers] = useState(2);
  const [pace, setPace] = useState<'relaxed' | 'balanced' | 'packed'>('balanced');
  const [interests, setInterests] = useState<string[]>([t.interests[0], t.interests[1]]);
  const [state, setState] = useState<ItineraryState>({ status: 'idle' });

  const message = useMemo(
    () =>
      [
        `Hi MoroccoForYou! I’d like an AI-planned ${days}-day trip starting in ${destinationName}.`,
        `Travelers: ${travelers}. Pace: ${pace}.`,
        `Interests: ${interests.join(', ') || 'general sightseeing'}.`,
        'Please send a custom itinerary and quote.',
      ].join('\n'),
    [days, travelers, pace, interests, destinationName],
  );

  function toggleInterest(i: string) {
    setInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );
  }

  async function generate() {
    if (!API_URL) {
      setState({
        status: 'error',
        error:
          'AI itinerary endpoint not configured (NEXT_PUBLIC_AI_API_URL). Use the WhatsApp button instead — we reply in <1h.',
      });
      return;
    }
    setState({ status: 'loading' });
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destinationSlug,
          destinationName,
          locale,
          days,
          travelers,
          pace,
          interests,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `${res.status} ${res.statusText}`);
      }
      const data = (await res.json()) as { itinerary?: string; error?: string };
      if (data.error || !data.itinerary) throw new Error(data.error || 'No itinerary returned');
      setState({ status: 'ok', itinerary: data.itinerary });
    } catch (err) {
      setState({ status: 'error', error: err instanceof Error ? err.message : 'Request failed' });
    }
  }

  return (
    <section
      aria-labelledby="ai-planner-heading"
      className="rounded-2xl border border-brand-night/10 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="rounded-full bg-brand-oasis/10 px-3 py-1 text-xs font-semibold text-brand-oasis"
        >
          {t.aiPlannerEyebrow}
        </span>
        <h2 id="ai-planner-heading" className="font-display text-2xl font-bold text-brand-night">
          {t.aiPlannerTitle(destinationName)}
        </h2>
      </div>
      <p className="mt-2 text-sm text-brand-night/70">{t.aiPlannerSubtitle}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-brand-night">{t.aiPlannerLength}</span>
          <input
            type="range"
            min={2}
            max={14}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="mt-2 w-full accent-brand-terracotta"
          />
          <span className="mt-1 inline-block text-sm font-semibold">
            {days} {t.days}
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-brand-night">{t.aiPlannerTravelers}</span>
          <input
            type="number"
            min={1}
            max={20}
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
            className="mt-2 w-full rounded-md border border-brand-night/20 bg-white px-3 py-2"
          />
        </label>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-brand-night">{t.aiPlannerPace}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(['relaxed', 'balanced', 'packed'] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPace(p)}
                className={`rounded-full border px-4 py-1.5 text-sm capitalize ${
                  pace === p
                    ? 'border-brand-terracotta bg-brand-terracotta text-white'
                    : 'border-brand-night/20 bg-white text-brand-night hover:border-brand-terracotta'
                }`}
              >
                {p === 'relaxed' ? t.paceRelaxed : p === 'balanced' ? t.paceBalanced : t.packed}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-brand-night">{t.aiPlannerInterests}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {t.interests.map((i) => {
              const active = interests.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleInterest(i)}
                  aria-pressed={active}
                  className={`rounded-full border px-3 py-1.5 text-xs ${
                    active
                      ? 'border-brand-oasis bg-brand-oasis text-white'
                      : 'border-brand-night/20 bg-white text-brand-night hover:border-brand-oasis'
                  }`}
                >
                  {i}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-brand-night/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-brand-night/70">{t.aiPlannerReplyNote}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={generate}
            disabled={state.status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-oasis px-5 py-3 text-sm font-semibold text-white hover:bg-brand-night disabled:opacity-60"
          >
            {state.status === 'loading' ? t.aiPlannerGenerating : t.aiPlannerGenerate}
          </button>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1ebe57]"
          >
            {t.aiPlannerSendWhatsapp}
          </a>
        </div>
      </div>

      {state.status === 'ok' && (
        <div className="mt-6 rounded-xl bg-brand-cream p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-oasis">
            {t.aiPlannerEyebrow}
          </p>
          <article
            className="prose prose-sm mt-2 max-w-none whitespace-pre-wrap font-sans text-brand-night"
            aria-live="polite"
          >
            {state.itinerary}
          </article>
        </div>
      )}
      {state.status === 'error' && (
        <p className="mt-6 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {state.error}
        </p>
      )}
    </section>
  );
}
