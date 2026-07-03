import Link from 'next/link';
import { plannerPath } from '@/lib/paths';
import type { Locale } from '@/lib/i18n';

// Reusable "trust card" that ends every blog post and can be dropped anywhere
// else. Emphasises that the AI was built by Moroccan developers — this is
// the core positioning message the site wants to reinforce. The <Link> is a
// plain, crawlable, locale-aware internal link to /planner (or /fr/planner
// or /ar/planner) so it acts as strong internal-link equity.

type Variant = 'inline' | 'card';

type Copy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  chip: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    eyebrow: 'AI TRAVEL PLANNER',
    title: 'Get a Morocco plan built by locals, not by a generic bot.',
    body: 'Our AI travel planner was built from scratch by a Casablanca-based team of Moroccan developers and trained on hyper-accurate, insider knowledge — from Marrakech derbs to the last kilometre before the Merzouga dunes. Try it now.',
    cta: 'Plan my Morocco trip with AI',
    chip: 'Built by Moroccans',
  },
  fr: {
    eyebrow: 'PLANIFICATEUR IA',
    title: 'Un plan Maroc conçu par des locaux, pas par un bot générique.',
    body: 'Notre planificateur a été construit de zéro par une équipe de développeurs marocains à Casablanca et entraîné avec un savoir local hyper-précis — des derbs de Marrakech au dernier kilomètre avant les dunes de Merzouga. Essayez-le.',
    cta: 'Planifier mon voyage avec l’IA',
    chip: 'Conçu par des Marocains',
  },
  ar: {
    eyebrow: 'مخططة السفر الذكية',
    title: 'خطة مغربية من صنّاع محليين، لا من بوت عام.',
    body: 'مخططنا الذكي بُني من الصفر على يد فريق من المطورين المغاربة في الدار البيضاء، ودُرّب على معرفة محلية دقيقة — من دروب مراكش إلى آخر كيلومتر قبل كثبان مرزوكة. جرّبه الآن.',
    cta: 'خطط لرحلتي بالذكاء الاصطناعي',
    chip: 'بناها مطورون مغاربة',
  },
};

export function AIPlannerCTA({
  locale,
  variant = 'card',
}: {
  locale: Locale;
  variant?: Variant;
}) {
  const t = COPY[locale];
  const href = plannerPath(locale);

  if (variant === 'inline') {
    // Compact version — sits inside long-form article flow without dominating.
    return (
      <aside
        className="not-prose my-8 rounded-2xl border border-brand-terracotta/30 bg-gradient-to-br from-brand-cream to-white p-5 shadow-sm"
        aria-label={t.eyebrow}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-terracotta">
          {t.chip} · {t.eyebrow}
        </p>
        <p className="mt-2 font-display text-lg font-bold leading-snug text-brand-night md:text-xl">
          {t.title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-brand-night/80">{t.body}</p>
        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-oasis px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-night"
        >
          {t.cta}
          <span aria-hidden>→</span>
        </Link>
      </aside>
    );
  }

  // Default: standalone "hero card" used on non-article pages.
  return (
    <section
      className="my-10 overflow-hidden rounded-3xl border border-brand-night/10 bg-brand-night text-brand-cream shadow-lg"
      aria-label={t.eyebrow}
    >
      <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-10">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-terracotta">
              <span aria-hidden>🇲🇦</span> {t.chip}
            </span>
            <span className="text-xs uppercase tracking-widest text-brand-cream/60">
              {t.eyebrow}
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-3xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-2xl text-brand-cream/80">{t.body}</p>
        </div>
        <div className="flex md:justify-end">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-night"
          >
            {t.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
