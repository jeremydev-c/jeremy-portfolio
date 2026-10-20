import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import { capabilities, site, toolbelt } from '../lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jeremy Nduati is a self-taught, 16-year-old full-stack developer and designer from Kirinyaga, Kenya.',
  alternates: { canonical: '/about' },
};

const principles = [
  {
    title: 'Design first, then code',
    body: 'Every screen is decided before it is built. It is faster than redesigning in code, and the result holds together.',
  },
  {
    title: 'Security from day one',
    body: 'Validation, auth, rate limits and encryption go in at the start, not after something goes wrong.',
  },
  {
    title: 'Built for Kenyan reality',
    body: 'M-Pesa before cards, light pages for slow networks, and interfaces that work on a budget phone.',
  },
  {
    title: 'AI as a tool, not a crutch',
    body: 'I use AI to move faster, then read, test and own every line that ships.',
  },
];

export default function About() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title={
          <>
            Self-taught,
            <br />
            <span className="italic text-ink-3">and still learning daily.</span>
          </>
        }
      />

      <section className="wrap pb-20 sm:pb-28">
        <div className="grid gap-14 border-t border-rule pt-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <figure className="max-w-[360px]">
              <div className="plate aspect-[4/5] rounded-md">
                <Image src="/me.jpeg" alt="Portrait of Jeremy Nduati" fill priority sizes="360px" className="object-cover" />
              </div>
              <figcaption className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">
                {site.fullName} · {site.location}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
            <div className="prose-body max-w-[38rem]">
              <p className="!text-[22px] !leading-[1.5] text-ink">
                I’m Jeremy, a 16-year-old developer and designer from Kirinyaga, Kenya.
              </p>
              <p>
                I don’t take Computer Science at school. I study a different technical subject, and I
                learned to code on my own because I couldn’t stop building things. What started as
                small experiments became sites and apps for real clients: an egg farm that sells
                countrywide, a sign-language institute’s admissions, portfolios for data
                professionals.
              </p>
              <p>
                My biggest project so far started in a History lesson about the IEBC. Kenya was about to
                spend tens of billions of shillings on an election that still runs on paper, and I
                wondered why. That question became{' '}
                <Link href="/work/e-elections" className="link-under text-ink">E-ELECTIONS</Link>, a secure
                digital voting system I’m entering in the Kenya Science &amp; Engineering Fair 2027.
              </p>
              <p>
                I care about the details people only notice when they are missing: a receipt you can
                verify, a payment that never double-charges, a page that loads on a slow connection.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-2/60">
        <div className="wrap py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">How I work</p>
            <h2 className="mt-4 font-serif text-display-md">Four rules I don’t break</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="bg-paper p-7 sm:p-10">
                <p className="font-mono text-[11px] text-kiln">0{i + 1}</p>
                <h3 className="mt-6 font-serif text-[30px] leading-tight">{p.title}</h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink-2">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-4 font-serif text-display-md">What I can build for you</h2>
        </Reveal>
        <ul className="mt-12 border-t border-rule">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.05} className="grid gap-4 border-b border-rule py-8 lg:grid-cols-12">
              <span className="font-mono text-[11px] text-ink-3 lg:col-span-1">0{i + 1}</span>
              <h3 className="font-serif text-[32px] leading-none lg:col-span-4">{c.title}</h3>
              <p className="text-[16px] leading-relaxed text-ink-2 lg:col-span-4">{c.body}</p>
              <ul className="flex flex-wrap gap-1.5 lg:col-span-3 lg:justify-end">
                {c.tools.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20">
          <p className="eyebrow">Toolbelt</p>
          <p className="mt-6 max-w-5xl font-serif text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.3] text-ink-3">
            {toolbelt.map((t, i) => (
              <span key={t}>
                <span className="text-ink transition-colors hover:text-kiln">{t}</span>
                {i < toolbelt.length - 1 && <span className="mx-2 text-ink/25">/</span>}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal className="mt-20 flex flex-wrap gap-3">
          <Link href="/work" className="btn-ink">
            See the work <span aria-hidden>→</span>
          </Link>
          <Link href="/contact" className="btn-line">
            Start a project
          </Link>
        </Reveal>
      </section>
    </>
  );
}
