import { dict } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

type FAQItem = { question: string; answer: string };

export function FAQ({
  faqs,
  locale,
  title,
}: {
  faqs: FAQItem[];
  locale: Locale;
  title?: string;
}) {
  const heading = title ?? dict(locale).faq.title;
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl">
      <h2 id="faq-heading" className="font-display text-3xl font-bold text-brand-night">
        {heading}
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.question}
            className="group rounded-lg border border-brand-night/10 bg-white p-4 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none font-semibold text-brand-night marker:hidden">
              <span className="flex items-center justify-between gap-4">
                {f.question}
                <span aria-hidden className="text-brand-terracotta transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-brand-night/80">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
