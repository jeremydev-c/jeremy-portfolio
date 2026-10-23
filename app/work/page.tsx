import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import Shot from '../components/Shot';
import { projects, type Project } from '../lib/content';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects by Jeremy Nduati: E-ELECTIONS, Fashion Fit, and client builds with payments, admissions and e-commerce.',
  alternates: { canonical: '/work' },
};

function hostOf(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}

function Visual({ p, priority }: { p: Project; priority?: boolean }) {
  if (p.image) {
    return <Shot src={p.image} alt={`${p.name} website`} url={p.live ? hostOf(p.live) : p.slug} priority={priority} />;
  }
  if (p.icon) {
    return (
      <div className="browser grid aspect-[16/10] place-items-center bg-paper-3">
        <div className="text-center">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-[30px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)] sm:h-36 sm:w-36 sm:rounded-[38px]">
            <Image src={p.icon} alt={`${p.name} app icon`} fill sizes="144px" className="object-cover" />
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">React Native app</p>
        </div>
      </div>
    );
  }
  // No screenshot available: a typographic plate instead.
  return (
    <div className="browser relative grid aspect-[16/10] place-items-center overflow-hidden bg-night text-bone">
      <p className="px-8 text-center font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.02]">
        {p.short}
        <span className="mt-4 block font-mono text-[11px] uppercase tracking-[0.16em] text-bone/50">{p.tagline}</span>
      </p>
    </div>
  );
}

export default function Work() {
  return (
    <>
      <PageHead
        eyebrow={`Work · ${projects.length} projects`}
        title={
          <>
            Things I’ve
            <br />
            <span className="italic text-ink-3">designed and shipped.</span>
          </>
        }
        intro="Two products of my own, and five builds for clients. Each one below covers the problem, what I did, and what it runs on."
      />

      <div className="wrap pb-24 sm:pb-32">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="grid scroll-mt-28 gap-10 border-t border-rule py-16 sm:py-24 lg:grid-cols-12 lg:gap-12"
          >
            <Reveal className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              {p.caseStudy ? (
                <Link href={p.caseStudy} className="block transition-transform duration-700 ease-out hover:-translate-y-1">
                  <Visual p={p} priority={i === 0} />
                </Link>
              ) : (
                <Visual p={p} priority={i === 0} />
              )}
            </Reveal>

            <Reveal className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`} delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-ink-3">{String(i + 1).padStart(2, '0')}</span>
                <span className="eyebrow">{p.kind}</span>
                {p.badge && <span className="chip border-cobalt/40 text-cobalt">{p.badge}</span>}
              </div>
              <h2 className="mt-5 font-display text-display-md">{p.name}</h2>
              <p className="mt-5 text-[17px] leading-[1.65] text-ink-2">{p.summary}</p>

              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-rule pt-6 text-[14px]">
                <div>
                  <dt className="eyebrow">Role</dt>
                  <dd className="mt-1.5">{p.role}</dd>
                </div>
                {p.timeline && (
                  <div>
                    <dt className="eyebrow">Timeline</dt>
                    <dd className="mt-1.5">{p.timeline}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-8">
                <p className="eyebrow">The problem</p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.challenge}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {p.approach.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-cobalt" />
                    {a}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                {p.caseStudy && (
                  <Link href={p.caseStudy} className="btn-ink">
                    Read the case study <span aria-hidden>→</span>
                  </Link>
                )}
                {p.live && !p.liveNote && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className={p.caseStudy ? 'btn-line' : 'btn-ink'}>
                    Visit the live site <span aria-hidden>↗</span>
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-line">
                    Code on GitHub <span aria-hidden>↗</span>
                  </a>
                )}
                {p.liveNote && <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{p.liveNote}</span>}
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </>
  );
}
