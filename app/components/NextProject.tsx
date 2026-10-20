import Link from 'next/link';

export default function NextProject({ href, name, kind }: { href: string; name: string; kind: string }) {
  return (
    <Link href={href} className="group block border-t border-rule bg-paper-2/60">
      <div className="wrap flex flex-wrap items-end justify-between gap-6 py-16 sm:py-24">
        <div>
          <p className="eyebrow">Next project · {kind}</p>
          <p className="mt-4 font-serif text-display-lg transition-colors duration-500 group-hover:text-kiln">{name}</p>
        </div>
        <span
          aria-hidden
          className="font-serif text-display-lg transition-transform duration-500 ease-out group-hover:translate-x-3"
        >
          →
        </span>
      </div>
    </Link>
  );
}
