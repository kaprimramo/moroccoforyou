// Side-effect import: registers all keyword posts into BLOG_POSTS.
// Must be the first import (before '@/lib/blog') to avoid TDZ on the array.
import '@/lib/blog-content';

import Link from 'next/link';
import { getBlogPostsByLang, blogPath } from '@/lib/blog';
import { homePath } from '@/lib/paths';
import type { Locale } from '@/lib/i18n';

const LABELS: Record<Locale, {
  eyebrow: string;
  title: string;
  intro: string;
  read: string;
  minRead: string;
  home: string;
  dateLocale: string;
}> = {
  en: {
    eyebrow: 'Morocco Travel Blog',
    title: 'Guides, itineraries & local tips for Morocco',
    intro:
      'Written by Morocco-based guides and drivers. No SEO fluff — practical, current, and built around real 2026 prices, real driving times, and the questions travelers actually ask us on WhatsApp.',
    read: 'Read article →',
    minRead: 'min read',
    home: 'Home',
    dateLocale: 'en-US',
  },
  fr: {
    eyebrow: 'Blog voyage Maroc',
    title: 'Guides, itinéraires et conseils locaux pour le Maroc',
    intro:
      'Rédigé par notre équipe basée au Maroc — guides agréés, chauffeurs, propriétaires de riads. Prix 2026 réels, durées de trajet vérifiées, et les vraies questions que nos voyageurs posent sur WhatsApp.',
    read: 'Lire l’article →',
    minRead: 'min de lecture',
    home: 'Accueil',
    dateLocale: 'fr-FR',
  },
  ar: {
    eyebrow: 'مدونة السفر إلى المغرب',
    title: 'أدلة وبرامج ونصائح محلية للمغرب',
    intro:
      'يكتبها فريق MoroccoForYou المقيم في المغرب — مرشدون مرخّصون وسائقون وأصحاب رياضات. أسعار 2026 الحقيقية وأوقات الطريق المتحقّقة وأسئلة المسافرين الفعلية على واتساب.',
    read: 'اقرأ المقال →',
    minRead: 'دقيقة قراءة',
    home: 'الرئيسية',
    dateLocale: 'ar-MA',
  },
};

export function BlogIndexView({ locale }: { locale: Locale }) {
  const t = LABELS[locale];
  const posts = [...getBlogPostsByLang(locale)].sort((a, b) =>
    b.publishedISO.localeCompare(a.publishedISO),
  );

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-brand-night/60">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={homePath(locale)} className="hover:underline">
              {t.home}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-brand-night">{t.eyebrow}</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-terracotta">
          {t.eyebrow}
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-brand-night md:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-brand-night/80">{t.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => {
            const targetLang = p.lang ?? 'en';
            const href = blogPath(targetLang, p.slug);
            return (
              <Link
                key={`${targetLang}-${p.slug}`}
                href={href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-brand-night/10 bg-white transition hover:border-brand-terracotta"
              >
                <div className="aspect-[16/10] overflow-hidden bg-brand-sand">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.coverImage}
                    alt={p.coverAlt ?? p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs uppercase tracking-wider text-brand-terracotta">
                    {new Date(p.publishedISO).toLocaleDateString(t.dateLocale, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}{' '}
                    · {p.readingMinutes} {t.minRead}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-brand-night group-hover:text-brand-terracotta">
                    {p.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-brand-night/70">
                    {p.description}
                  </p>
                  <span className="mt-3 inline-flex text-sm font-semibold text-brand-oasis">
                    {t.read}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
