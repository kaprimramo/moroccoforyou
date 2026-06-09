// Side-effect import: registers all keyword posts into BLOG_POSTS.
// Must be the first import (before '@/lib/blog') to avoid TDZ on the array.
import '@/lib/blog-content';

import Link from 'next/link';
import {
  BLOG_POSTS,
  blogPostingJsonLd,
  getBlogPostInLang,
  blogPath,
  blogUrl,
  type BlogPost,
} from '@/lib/blog';
import { getDestination } from '@/lib/destinations';
import { JsonLd } from '@/components/JsonLd';
import { FAQ } from '@/components/FAQ';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { TrustSignals } from '@/components/TrustSignals';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import { destinationPath, homePath } from '@/lib/paths';
import { localizedUrl, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

type Lang = NonNullable<BlogPost['lang']>;

const LABELS: Record<Lang, {
  blogEyebrow: string;
  minRead: string;
  by: string;
  published: string;
  updated: string;
  home: string;
  blog: string;
  destinationsInArticle: string;
  faqTitle: string;
  peopleAlsoAsk: string;
  readNext: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  dateLocale: string;
  blogIndexPath: string;
  whatsappMessage: (title: string) => string;
}> = {
  en: {
    blogEyebrow: 'Morocco Travel Blog',
    minRead: 'min read',
    by: 'By',
    published: 'Published',
    updated: 'Updated',
    home: 'Home',
    blog: 'Blog',
    destinationsInArticle: 'Destinations in this article',
    faqTitle: 'Frequently asked questions',
    peopleAlsoAsk: 'People also ask',
    readNext: 'Read next',
    ctaTitle: 'Plan your Morocco trip with us',
    ctaBody: 'MoroccoForYou is a Morocco-based agency. Tell us your dates on WhatsApp — we reply within an hour with a draft itinerary, hotel options and a car or driver quote.',
    ctaButton: 'Start on WhatsApp',
    dateLocale: 'en-US',
    blogIndexPath: '/blog/',
    whatsappMessage: (t) => `Hi MoroccoForYou! I just read your "${t}" article and would like help planning a Morocco trip.`,
  },
  fr: {
    blogEyebrow: 'Blog voyage Maroc',
    minRead: 'min de lecture',
    by: 'Par',
    published: 'Publié le',
    updated: 'Mis à jour le',
    home: 'Accueil',
    blog: 'Blog',
    destinationsInArticle: 'Destinations citées dans cet article',
    faqTitle: 'Questions fréquentes',
    peopleAlsoAsk: 'Autres questions',
    readNext: 'À lire ensuite',
    ctaTitle: 'Planifiez votre voyage au Maroc avec nous',
    ctaBody: 'MoroccoForYou est une agence basée au Maroc. Donnez-nous vos dates sur WhatsApp — nous répondons dans l\'heure avec un itinéraire, des hôtels et un devis voiture ou chauffeur.',
    ctaButton: 'Démarrer sur WhatsApp',
    dateLocale: 'fr-FR',
    blogIndexPath: '/fr/blog/',
    whatsappMessage: (t) => `Bonjour MoroccoForYou ! Je viens de lire votre article "${t}" et j'aimerais de l'aide pour planifier un voyage au Maroc.`,
  },
  ar: {
    blogEyebrow: 'مدونة السفر إلى المغرب',
    minRead: 'دقيقة قراءة',
    by: 'بقلم',
    published: 'نُشر في',
    updated: 'حُدّث في',
    home: 'الرئيسية',
    blog: 'المدونة',
    destinationsInArticle: 'الوجهات المذكورة في هذا المقال',
    faqTitle: 'الأسئلة الشائعة',
    peopleAlsoAsk: 'يسأل الناس أيضًا',
    readNext: 'اقرأ بعد ذلك',
    ctaTitle: 'خطط لرحلتك إلى المغرب معنا',
    ctaBody: 'MoroccoForYou وكالة سفر مقرّها المغرب. أرسل لنا تواريخك عبر واتساب — نرد خلال ساعة ببرنامج مقترح وفنادق وعرض سيارة أو سائق.',
    ctaButton: 'ابدأ عبر واتساب',
    dateLocale: 'ar-MA',
    blogIndexPath: '/ar/blog/',
    whatsappMessage: (t) => `مرحبًا MoroccoForYou! قرأت للتو مقالكم "${t}" وأود المساعدة في تخطيط رحلة إلى المغرب.`,
  },
};

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogPostView({ slug, locale }: { slug: string; locale: Locale }) {
  const post = getBlogPostInLang(slug, locale);
  if (!post) notFound();

  const lang: Lang = post.lang ?? 'en';
  const t = LABELS[lang];
  const url = blogUrl(lang, post.slug);
  const related = (post.relatedPosts ?? [])
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);
  const relatedDestinations = (post.relatedDestinations ?? [])
    .map((s) => getDestination(s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .slice(0, 4);

  return (
    <>
      <JsonLd id="ld-blog" data={blogPostingJsonLd(post, url)} />
      <JsonLd id="ld-blog-faq" data={faqJsonLd(post.faqs, lang)} />
      <JsonLd
        id="ld-blog-breadcrumb"
        data={breadcrumbJsonLd([
          { name: t.home, url: localizedUrl(locale, '/') },
          { name: t.blog, url: localizedUrl(locale, lang === 'en' ? '/blog/' : `/blog/`) },
          { name: post.title, url },
        ])}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-4 pt-6 text-sm text-brand-night/60">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={homePath(locale)} className="hover:underline">
              {t.home}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={t.blogIndexPath} className="hover:underline">
              {t.blog}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-brand-night line-clamp-1">{post.title}</li>
        </ol>
      </nav>

      <article lang={lang} className="mx-auto max-w-3xl px-4 py-10">
        <header>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-terracotta">
            {t.blogEyebrow} · {post.readingMinutes} {t.minRead}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand-night md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-brand-night/80">{post.description}</p>
          <p className="mt-3 text-sm text-brand-night/60">
            {t.by} {post.author} · {t.published} {formatDate(post.publishedISO, t.dateLocale)}
            {post.updatedISO ? (
              <>
                {' '}
                · {t.updated} {formatDate(post.updatedISO, t.dateLocale)}
              </>
            ) : null}
          </p>
        </header>

        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-brand-sand">
          <img
            src={post.coverImage}
            alt={post.coverAlt ?? post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mt-8 text-lg leading-relaxed text-brand-night/90">{post.intro}</p>

        {post.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="font-display text-2xl font-bold text-brand-night">{s.heading}</h2>
            {s.paragraphs.map((para, i) => (
              <p key={i} className="mt-3 leading-relaxed text-brand-night/85">
                {para}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 list-disc space-y-2 ps-6 text-brand-night/85">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {s.table && (
              <figure className="mt-5 overflow-x-auto rounded-xl border border-brand-night/10 bg-white">
                <table className="w-full text-sm">
                  {s.table.caption && (
                    <caption className="px-4 pt-3 text-start text-xs font-semibold uppercase tracking-wider text-brand-night/60">
                      {s.table.caption}
                    </caption>
                  )}
                  <thead className="bg-brand-sand/60 text-brand-night">
                    <tr>
                      {s.table.headers.map((h) => (
                        <th key={h} className="px-4 py-2 text-start font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row, ri) => (
                      <tr key={ri} className="border-t border-brand-night/10">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-2 align-top text-brand-night/90">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </figure>
            )}
            {s.callout && (
              <aside className="mt-5 rounded-2xl border-s-4 border-brand-terracotta bg-brand-cream p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-terracotta">
                  {s.callout.label}
                </p>
                <p className="mt-2 leading-relaxed text-brand-night/90">{s.callout.body}</p>
              </aside>
            )}
          </section>
        ))}

        <div className="mt-12 rounded-2xl bg-brand-night p-6 text-brand-cream">
          <h3 className="font-display text-xl font-bold">{t.ctaTitle}</h3>
          <p className="mt-2 text-brand-cream/80">{t.ctaBody}</p>
          <div className="mt-4">
            <WhatsAppCTA
              message={t.whatsappMessage(post.title)}
              label={t.ctaButton}
            />
          </div>
        </div>
      </article>

      {relatedDestinations.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="font-display text-2xl font-bold text-brand-night">
            {t.destinationsInArticle}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedDestinations.map((d) => (
              <Link
                key={d.slug}
                href={destinationPath(locale, d.slug)}
                className="rounded-xl border border-brand-night/10 bg-white p-4 hover:border-brand-terracotta"
              >
                <p className="text-xs uppercase tracking-wider text-brand-terracotta">
                  {d.region[locale]}
                </p>
                <p className="mt-1 font-semibold text-brand-night">{d.name[locale]}</p>
                <p className="mt-1 text-sm text-brand-night/70">{d.tagline[locale]}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="bg-white/60 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <FAQ faqs={post.faqs} locale={locale} title={t.faqTitle} />
        </div>
      </section>

      {post.peopleAlsoAsk && post.peopleAlsoAsk.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-10">
          <h2 className="font-display text-2xl font-bold text-brand-night">
            {t.peopleAlsoAsk}
          </h2>
          <dl className="mt-5 space-y-4">
            {post.peopleAlsoAsk.map((qa) => (
              <div key={qa.question} className="rounded-xl border border-brand-night/10 bg-white p-4">
                <dt className="font-semibold text-brand-night">{qa.question}</dt>
                <dd className="mt-1 text-brand-night/80">{qa.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-12">
        <TrustSignals locale={locale} />
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="font-display text-2xl font-bold text-brand-night">{t.readNext}</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => {
              const targetLang = p.lang ?? 'en';
              const href = blogPath(targetLang, p.slug);
              return (
                <Link
                  key={p.slug}
                  href={href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-brand-night/10 bg-white transition hover:border-brand-terracotta"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-brand-sand">
                    <img
                      src={p.coverImage}
                      alt={p.coverAlt ?? p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="font-display text-base font-semibold text-brand-night group-hover:text-brand-terracotta">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-night/70 line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}