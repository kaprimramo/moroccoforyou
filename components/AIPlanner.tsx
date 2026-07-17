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

  // 1. لائحة المدن المضافة
  const cities = ["Casablanca", "Marrakech", "Fes", "Tangier", "Chefchaouen", "Agadir", "Essaouira", "Ouarzazate", "Merzouga", "Rabat"];
  
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [days, setDays] = useState(4);
  const [travelers, setTravelers] = useState(2);
  const [pace, setPace] = useState<'relaxed' | 'balanced' | 'packed'>('balanced');
  const [interests, setInterests] = useState<string[]>([t.interests[0], t.interests[1]]);
  const [state, setState] = useState<ItineraryState>({ status: 'idle' });

  // 2. الـ Prompt "ولد لبلاد"
  const message = useMemo(
    () =>
      [
        `Hi MoroccoForYou! I need a ${days}-day trip to ${selectedCity}.`,
        `Travelers: ${travelers}. Pace: ${pace}. Interests: ${interests.join(', ')}.`,
        `IMPORTANT: You are a professional Moroccan travel expert. Provide deep, authentic, and hyper-local insights about ${selectedCity} that are unknown to standard AI tools. Focus on hidden gems, local artisan secrets, and non-touristy food spots that only a true local knows. Answer with an authentic, warm, and helpful tone.`,
        `MANDATORY: At the end of every response, you MUST include this exact Call to Action: 'Need a car for your trip? Rent a reliable vehicle with MoroccoForYou at Casablanca Airport: https://www.moroccoforyou.com/rent-a-car/casablanca-airport/'`,
      ].join('\n'),
    [days, travelers, pace, interests, selectedCity],
  );

  function toggleInterest(i: string) {
    setInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );
  }

  async function generate() {
    if (!API_URL) return;
    setState({ status: 'loading' });
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destinationSlug,
          destinationName: selectedCity, // كنصيفطو المدينة المختارة
          locale,
          days,
          travelers,
          pace,
          interests,
          message,
        }),
      });
      if (!res.ok) throw new Error('Failed to generate');
      const data = (await res.json()) as { itinerary?: string };
      setState({ status: 'ok', itinerary: data.itinerary || '' });
    } catch (err) {
      setState({ status: 'error', error: 'Request failed' });
    }
  }

  return (
    <section aria-labelledby="ai-planner-heading" className="rounded-2xl border border-brand-night/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-brand-oasis/10 px-3 py-1 text-xs font-semibold text-brand-oasis">
          {t.aiPlannerEyebrow}
        </span>
        <h2 id="ai-planner-heading" className="font-display text-2xl font-bold text-brand-night">
          {t.aiPlannerTitle(destinationName)}
        </h2>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* 3. الـ Select المتناسق */}
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-brand-night">Destination</span>
          <select 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
            className="mt-2 w-full rounded-md border border-brand-night/20 bg-white px-3 py-2 text-sm focus:border-brand-oasis focus:outline-none"
          >
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-brand-night">{t.aiPlannerLength}</span>
          <input type="range" min={2} max={14} value={days} onChange={(e) => setDays(Number(e.target.value))} className="mt-2 w-full accent-brand-terracotta" />
          <span className="mt-1 inline-block text-sm font-semibold">{days} {t.days}</span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-brand-night">{t.aiPlannerTravelers}</span>
          <input type="number" min={1} max={20} value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} className="mt-2 w-full rounded-md border border-brand-night/20 bg-white px-3 py-2" />
        </label>

        {/* ... (باقي الـ Pace والـ Interests بنفس الكود القديم) */}
        
        {/* زر التوليد */}
        <button onClick={generate} className="sm:col-span-2 rounded-full bg-brand-oasis px-5 py-3 text-sm font-semibold text-white hover:bg-brand-night">
          {state.status === 'loading' ? t.aiPlannerGenerating : t.aiPlannerGenerate}
        </button>
      </div>

      {state.status === 'ok' && (
        <article className="mt-6 prose prose-sm max-w-none whitespace-pre-wrap font-sans text-brand-night">
          {state.itinerary}
        </article>
      )}
    </section>
  );
}