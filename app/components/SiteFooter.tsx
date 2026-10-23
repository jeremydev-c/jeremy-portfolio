import Link from 'next/link';
import LocalTime from './LocalTime';
import { site } from '../lib/content';

const columns = [
  {
    title: 'Pages',
    links: [
      { href: '/work', label: 'Work' },
      { href: '/work/e-elections', label: 'E-Elections' },
      { href: '/work/fashion-fit', label: 'Fashion Fit' },
      { href: '/about', label: 'About' },
      { href: '/certificates', label: 'Recognition' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { href: site.github, label: 'GitHub' },
      { href: site.linkedin, label: 'LinkedIn' },
      { href: `mailto:${site.email}`, label: 'Email' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink">
      <Link href="/contact" className="group block bg-cobalt text-bone">
        <div className="wrap flex flex-wrap items-end justify-between gap-6 py-14 sm:py-20">
          <p className="font-display text-[clamp(3rem,10vw,9.5rem)] uppercase leading-[0.84] tracking-[-0.06em]">
            Let’s build
            <br />
            something.
          </p>
          <span
            aria-hidden
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-none transition-transform duration-300 ease-out group-hover:-rotate-45"
          >
            →
          </span>
        </div>
      </Link>

      <div className="wrap grid gap-10 border-t-2 border-ink py-12 sm:grid-cols-2 lg:grid-cols-12">
        <dl className="grid grid-cols-2 gap-6 font-mono text-[11px] font-bold uppercase tracking-[0.08em] lg:col-span-6">
          <div>
            <dt className="text-ink-3">Based in</dt>
            <dd className="mt-1.5">{site.location}</dd>
          </div>
          <div>
            <dt className="text-ink-3">Local time</dt>
            <dd className="mt-1.5">
              <LocalTime />
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-ink-3">Email</dt>
            <dd className="mt-1.5 normal-case tracking-normal">
              <a href={`mailto:${site.email}`} className="link-draw text-[15px]">
                {site.email}
              </a>
            </dd>
          </div>
        </dl>

        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-3">
            <h2 className="eyebrow">{col.title}</h2>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => {
                const external = l.href.startsWith('http');
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="link-draw font-display text-[20px] uppercase tracking-[-0.03em]"
                    >
                      {l.label}
                      {external && <span aria-hidden> ↗</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap">
        <div className="flex flex-col gap-2 border-t-2 border-ink py-5 font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}</p>
          <p>Set in Inter Tight &amp; Space Mono · Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
