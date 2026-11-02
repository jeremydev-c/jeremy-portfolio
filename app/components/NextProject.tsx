import Link from 'next/link';

export default function NextProject({ href, name, kind }: { href: string; name: string; kind: string }) {
  return (
    <Link href={href} className="group block border-t border-rule">
      <div className="wrap flex flex-wrap items-end justify-between gap-6 py-16 sm:py-24">
        <div>
          <p className="eyebrow">Next exhibit · {kind}</p>
          <p className="mt-4 font-display text-display-lg transition-colors group-hover:text-ink-2">{name}</p>
        </div>
        <span
          aria-hidden
          className="font-display text-display-md text-ink-3 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:text-ink"
        >
          →
        </span>
      </div>
    </Link>
  );
}
