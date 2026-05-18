import { whatsappLink } from '@/lib/whatsapp';

type Props = {
  message: string;
  label?: string;
  className?: string;
  variant?: 'solid' | 'outline' | 'pill';
};

export function WhatsAppCTA({
  message,
  label = 'Chat on WhatsApp',
  className = '',
  variant = 'solid',
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-oasis focus:ring-offset-2';
  const styles = {
    solid: 'bg-[#25D366] px-5 py-3 text-white hover:bg-[#1ebe57]',
    outline:
      'border border-[#25D366] px-5 py-3 text-[#1ebe57] hover:bg-[#25D366]/10',
    pill: 'bg-brand-terracotta px-4 py-2 text-white hover:bg-brand-night',
  };
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M19.05 4.91A10 10 0 0 0 4.06 18.4L3 22l3.71-1.04A10 10 0 1 0 19.05 4.91Zm-7.04 15.16a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.2.62.59-2.14-.2-.32a8.2 8.2 0 1 1 6.29 3.16Zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.08-.4-.13-.56.12-.16.25-.65.8-.8.97-.15.16-.3.18-.55.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.74-.15-.25-.02-.39.11-.51.11-.12.25-.3.37-.45.13-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42l-.47-.01a.9.9 0 0 0-.65.3 2.7 2.7 0 0 0-.84 2.02c0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.47-.28Z" />
      </svg>
      {label}
    </a>
  );
}
