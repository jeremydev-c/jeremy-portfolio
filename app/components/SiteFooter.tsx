import Link from 'next/link';
import LocalTime from './LocalTime';
import { site } from '../lib/content';

const columns = [
  {
    title: 'Rooms',
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
  {
    title: 'The small print',
    links: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="wrap grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow">Visitor information</p>
          <p className="mt-5 font-display text-display-lg">
            Have something to build?
            <span className="block text-ink-3">Let’s talk about it.</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
          <Link href="/contact" className="btn-ink">
            Start a project <span aria-hidden>→</span>
          </Link>
          <a href={`mailto:${site.email}`} className="btn-line">
            Email me
          </a>
        </div>
      </div>

      <div className="wrap grid gap-10 border-t border-rule py-12 sm:grid-cols-2 lg:grid-cols-12">
        <dl className="grid grid-cols-2 gap-6 text-[14px] lg:col-span-6">
          <div>
            <dt className="eyebrow">Based in</dt>
            <dd className="mt-2">{site.location}</dd>
          </div>
          <div>
            <dt className="eyebrow">Local time</dt>
            <dd className="mt-2 tabular">
              <LocalTime />
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="eyebrow">Replies</dt>
            <dd className="mt-2 text-ink-2">Usually within a day, East Africa Time.</dd>
          </div>
        </dl>

        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <h2 className="eyebrow">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => {
                const external = l.href.startsWith('http');
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-[14.5px] text-ink-2 transition-colors hover:text-ink"
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
        <div className="flex flex-col gap-2 border-t border-rule py-6 text-[12.5px] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. Designed and built by me.</p>
          <p>Set in Funnel Display, Funnel Sans and Geist Mono. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
