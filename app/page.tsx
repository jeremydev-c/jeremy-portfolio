import Image from 'next/image';
import Link from 'next/link';
import Reveal from './components/Reveal';
import Stage from './components/Stage';
import { projects, recognition, site } from './lib/content';

// Three projects get a full stage on the home page; the rest are listed below them.
const featured = ['e-elections', 'kilele-hr', 'fashion-fit'].map((slug) => projects.find((p) => p.slug === slug)!);
const others = projects.filter((p) => !featured.includes(p));

// Each line is backed by a certificate on /certificates.
const records = [
  { value: '#50', of: 'of 1,995', label: '10Alytics Global Data Hackathon', year: '2025' },
  { value: '3rd', of: 'place', label: 'Kenya Science & Engineering Fair, Computer Science, county level', year: '2025' },
  { value: 'Level 2', of: 'completed', label: 'Moringa School High School Bootcamp', year: '2026' },
];

function exhibitHref(p: (typeof projects)[number]) {
  return { href: p.caseStudy ?? p.live ?? '/work', external: !p.caseStudy && !!p.live };
}

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="wrap pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <p className="anim-fade-up eyebrow">Full-stack developer and designer</p>
            <h1 className="anim-fade-up mt-6 font-display text-display-xl" style={{ animationDelay: '0.08s' }}>
              Jeremy Nduati
              <span className="block text-ink-3">builds software you can check.</span>
            </h1>
            <p
              className="anim-fade-up mt-8 max-w-[36rem] text-[18px] leading-[1.6] text-ink-2 sm:text-[20px]"
              style={{ animationDelay: '0.16s' }}
            >
              I’m 16 and self-taught, and I’ve been building since I was 14. From Nanyuki, Kenya, I
              design and build complete products: a voting system with a tamper-evident ledger, an AI
              wardrobe app, and paid e-commerce for a farm that sells countrywide.
            </p>
            <div className="anim-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: '0.24s' }}>
              <Link href="/work" className="btn-ink">
                See the work <span aria-hidden>→</span>
              </Link>
              <Link href="/contact" className="btn-line">
                Start a project
              </Link>
            </div>
          </div>

          <figure className="anim-fade lg:col-span-4" style={{ animationDelay: '0.2s' }}>
            <div className="plate mx-auto aspect-[4/5] max-w-[340px] lg:max-w-none">
              <Image src="/me.jpeg" alt="Portrait of Jeremy Nduati" fill priority sizes="(min-width: 1024px) 28vw, 340px" className="object-cover" />
            </div>
            <figcaption className="label-card mx-auto mt-4 max-w-[340px] lg:max-w-none">
              <p className="font-mono text-[11px] text-accent">No. 00</p>
              <p className="mt-2 text-[15px] font-medium">The developer, at 16</p>
              <p className="mt-0.5 text-[13.5px] text-ink-3">{site.fullName} · {site.location}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ------------------------------------------------------------ Exhibits */}
      <section aria-labelledby="exhibits" className="border-t border-rule">
        <div className="wrap pt-16 sm:pt-24">
          <Reveal className="flex items-end justify-between gap-6">
            <h2 id="exhibits" className="font-display text-display-md">On show</h2>
            <Link href="/work" className="link-draw shrink-0 text-[14.5px] text-ink-2 hover:text-ink">
              All {projects.length} projects →
            </Link>
          </Reveal>
        </div>

        <ol className="wrap space-y-16 py-12 sm:space-y-24 sm:py-16">
          {featured.map((p, i) => {
            const { href, external } = exhibitHref(p);
            return (
              <Reveal as="li" key={p.slug}>
                <Link
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8"
                >
                  <Stage p={p} priority={i === 0} className="lg:col-span-9" sizes="(min-width: 1024px) 64vw, 100vw" />
                  <div className="label-card lg:col-span-3">
                    <p className="font-mono text-[11px] text-accent">No. {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-2 font-display text-[24px] leading-tight tracking-[-0.025em]">{p.name}</h3>
                    <p className="text-[14px] text-ink-3">{p.year === 'Client' ? 'Client commission' : p.year}</p>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2">{p.summary}</p>
                    <p className="mt-4 border-t border-rule pt-3 font-mono text-[11px] leading-relaxed text-ink-3">
                      {p.stack.slice(0, 4).join(', ')}
                    </p>
                    <p className="mt-4 text-[14px] font-medium">
                      <span className="link-draw">{p.caseStudy ? 'View the case study' : 'Visit the live site'}</span>{' '}
                      <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        {external ? '↗' : '→'}
                      </span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ol>

        {/* Also on show: the client commissions, as a plain index. */}
        <div className="wrap pb-20 sm:pb-28">
          <Reveal>
            <p className="eyebrow">Also on show</p>
            <ul className="mt-5 border-t border-rule">
              {others.map((p, i) => {
                const { href, external } = exhibitHref(p);
                return (
                  <li key={p.slug} className="border-b border-rule">
                    <Link
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-1 py-5 transition-colors"
                    >
                      <span className="col-span-2 font-mono text-[11px] text-accent sm:col-span-1">
                        No. {String(featured.length + i + 1).padStart(2, '0')}
                      </span>
                      <span className="col-span-10 font-display text-[22px] leading-tight tracking-[-0.025em] sm:col-span-5 sm:text-[26px]">
                        {p.name}
                      </span>
                      <span className="col-span-10 col-start-3 text-[14.5px] text-ink-3 sm:col-span-5 sm:col-start-auto">
                        {p.tagline}
                      </span>
                      <span aria-hidden className="hidden text-right text-ink-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink sm:col-span-1 sm:block">
                        {external ? '↗' : '→'}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- Records */}
      <section className="border-t border-rule bg-paper-2/70">
        <div className="wrap py-20 sm:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">On the record</p>
              <h2 className="mt-4 font-display text-display-md">
                Results with a certificate behind them.
              </h2>
            </div>
            <Link href="/certificates" className="link-draw text-[14.5px] text-ink-2 hover:text-ink">
              All {recognition.length} entries →
            </Link>
          </Reveal>
          <ul className="grid-rules mt-12 md:grid-cols-3">
            {records.map((r, i) => (
              <Reveal as="li" key={r.label} delay={i * 0.06} className="!bg-paper-2 p-7 sm:p-9">
                <p className="font-display text-[clamp(2.8rem,5vw,4.2rem)] leading-none tracking-[-0.045em]">
                  {r.value} <span className="text-[0.4em] tracking-[-0.02em] text-ink-3">{r.of}</span>
                </p>
                <p className="mt-6 text-[15px] leading-snug">{r.label}</p>
                <p className="mt-1 font-mono text-[11px] text-ink-3">{r.year}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ Me */}
      <section className="wrap grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">About the maker</p>
          <p className="mt-5 font-display text-display-md">
            I don’t take Computer Science at school.
            <span className="block text-ink-3">I learned it by building.</span>
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <div className="prose-body">
            <p>
              I study a different technical subject, and code is the thing I do because I can’t stop.
              It started with small experiments when I was 14 and grew into sites and apps for real
              businesses and professionals, in Kenya and beyond.
            </p>
            <p>
              I care about the details people only notice when they’re missing: a receipt you can
              verify, a payment that never double-charges, a page that loads on slow data. One day I
              want to build software my whole country relies on.
            </p>
          </div>
          <Link href="/about" className="btn-line mt-8">
            More about me
          </Link>
        </Reveal>
      </section>
    </>
  );
}
