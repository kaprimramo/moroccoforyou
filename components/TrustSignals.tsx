import { dict } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

type Signal = { label: string; sub?: string; icon: string };

export function TrustSignals({
  locale,
  signals,
}: {
  locale: Locale;
  signals?: Signal[];
}) {
  const t = dict(locale).trust;
  const defaults: Signal[] = [
    { icon: '★', label: t.rating, sub: t.ratingSub },
    { icon: '🛡', label: t.licensed, sub: t.licensedSub },
    { icon: '💬', label: t.reply, sub: t.replySub },
    { icon: '🅿️', label: t.cancel, sub: t.cancelSub },
  ];
  const finalSignals = signals ?? defaults;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {finalSignals.map((s) => (
        <li
          key={s.label}
          className="flex items-start gap-3 rounded-xl border border-brand-night/10 bg-white p-4 shadow-sm"
        >
          <span aria-hidden className="text-2xl">{s.icon}</span>
          <div>
            <p className="font-semibold text-brand-night">{s.label}</p>
            {s.sub && <p className="text-sm text-brand-night/70">{s.sub}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
