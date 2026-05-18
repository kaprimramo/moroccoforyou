import Link from 'next/link';
import { dict } from '@/lib/dictionaries';
import { destinationPath, homePath, rentACarPath } from '@/lib/paths';

export default function NotFound() {
  const t = dict('en').notFound;
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-terracotta">
        {t.eyebrow}
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-brand-night">{t.title}</h1>
      <p className="mt-3 text-brand-night/70">{t.subtitle}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href={homePath('en')}
          className="rounded-full bg-brand-terracotta px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-night"
        >
          {t.home}
        </Link>
        <Link
          href={destinationPath('en', 'marrakech')}
          className="rounded-full border border-brand-night/20 px-5 py-2.5 text-sm font-semibold hover:border-brand-terracotta"
        >
          Marrakech
        </Link>
        <Link
          href={rentACarPath('en')}
          className="rounded-full border border-brand-night/20 px-5 py-2.5 text-sm font-semibold hover:border-brand-terracotta"
        >
          Rent a car
        </Link>
      </div>
    </section>
  );
}
