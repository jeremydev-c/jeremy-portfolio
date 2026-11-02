import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import Stage from '../components/Stage';
import { projects } from '../lib/content';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects by Jeremy Nduati: E-ELECTIONS, Fashion Fit, and client builds with payments, admissions and e-commerce.',
  alternates: { canonical: '/work' },
};

export default function Work() {
  return (
    <>
      <PageHead
        eyebrow={`Room 01 · Work · ${projects.length} exhibits`}
        title={
          <>
            Things I’ve designed
            <span className="block text-ink-3">and shipped.</span>
          </>
        }
        intro="Two products of my own, and five builds for clients. Each one below covers the problem, what I did, and what it runs on."
      />

      <div className="wrap pb-24 sm:pb-32">
        {projects.map((p, i) => (
          <article key={p.slug} id={p.slug} className="scroll-mt-24 border-t border-rule py-14 sm:py-20">
            <Reveal>
              {p.caseStudy ? (
                <Link href={p.caseStudy} className="group block" aria-label={`${p.name} case study`}>
                  <Stage p={p} priority={i === 0} sizes="(min-width: 1400px) 1000px, 100vw" wide />
                </Link>
              ) : (
                <Stage p={p} priority={i === 0} sizes="(min-width: 1400px) 1000px, 100vw" wide />
              )}
            </Reveal>

            <Reveal className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8" delay={0.05}>
              {/* The wall label */}
              <div className="lg:col-span-4">
                <p className="font-mono text-[11px] text-accent">No. {String(i + 1).padStart(2, '0')}</p>
                <h2 className="mt-2 font-display text-display-sm">{p.name}</h2>
                <p className="mt-1 text-[15px] text-ink-3">
                  {p.kind} · {p.year === 'Client' ? 'Client commission' : p.year}
                </p>
                {p.badge && <p className="chip mt-4">{p.badge}</p>}

                <dl className="mt-6 space-y-4 border-t border-rule pt-5 text-[14.5px]">
                  <div>
                    <dt className="eyebrow">Role</dt>
                    <dd className="mt-1">{p.role}</dd>
                  </div>
                  {p.timeline && (
                    <div>
                      <dt className="eyebrow">Timeline</dt>
                      <dd className="mt-1">{p.timeline}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="eyebrow">Medium</dt>
                    <dd className="mt-1 font-mono text-[12px] leading-relaxed text-ink-2">{p.stack.join(', ')}</dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-[19px] leading-[1.55]">{p.summary}</p>

                <div className="mt-8">
                  <p className="eyebrow">The problem</p>
                  <p className="mt-2 text-[16px] leading-relaxed text-ink-2">{p.challenge}</p>
                </div>
                <ul className="mt-6 space-y-3 border-t border-rule pt-6">
                  {p.approach.map((a) => (
                    <li key={a} className="flex gap-3 text-[16px] leading-relaxed text-ink-2">
                      <span aria-hidden className="mt-[0.75em] h-px w-3 shrink-0 bg-ink-3" />
                      {a}
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
                  {p.liveNote && <span className="text-[13px] text-ink-3">{p.liveNote}</span>}
                </div>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </>
  );
}
