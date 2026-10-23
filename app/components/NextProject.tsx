import Link from 'next/link';

export default function NextProject({ href, name, kind }: { href: string; name: string; kind: string }) {
  return (
    <Link href={href} className="group block border-t-2 border-ink transition-colors duration-200 hover:bg-cobalt hover:text-bone">
      <div className="wrap flex flex-wrap items-end justify-between gap-6 py-14 sm:py-20">
        <div>
          <p className="eyebrow group-hover:!text-bone/80">Next project · {kind}</p>
          <p className="mt-4 font-display text-display-lg uppercase">{name}</p>
        </div>
        <span
          aria-hidden
          className="font-display text-display-lg transition-transform duration-300 ease-out group-hover:translate-x-3"
        >
          →
        </span>
      </div>
    </Link>
  );
}
