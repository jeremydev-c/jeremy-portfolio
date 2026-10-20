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
    <footer className="border-t border-rule">
      <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.02em]">
            Built in Kenya,
            <br />
            <span className="italic text-ink-3">one careful commit at a time.</span>
          </p>
          <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 font-mono text-[11px] uppercase tracking-[0.14em]">
            <div>
              <dt className="text-ink-3">Based in</dt>
              <dd className="mt-1.5 text-ink">{site.location}</dd>
            </div>
            <div>
              <dt className="text-ink-3">Local time</dt>
              <dd className="mt-1.5 text-ink">
                <LocalTime />
              </dd>
            </div>
          </dl>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-3">
            <h2 className="eyebrow">{col.title}</h2>
            <ul className="mt-5 space-y-2.5">
              {col.links.map((l) => {
                const external = l.href.startsWith('http');
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="link-draw text-[15px] text-ink-2 hover:text-ink"
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
        <div className="flex flex-col gap-3 border-t border-rule py-6 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}</p>
          <p>Set in Instrument Serif &amp; Geist · Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
