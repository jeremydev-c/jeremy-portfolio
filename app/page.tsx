import Image from 'next/image';
import Link from 'next/link';
import HeroTitle from './components/HeroTitle';
import Reveal from './components/Reveal';
import LocalTime from './components/LocalTime';
import Seal from './components/Seal';
import { site } from './lib/content';

const facts = [
  { value: '16', label: 'Years old, self-taught' },
  { value: '#50', label: 'of 1,995 in a global data hackathon' },
  { value: '3rd', label: 'Kenya Science & Engineering Fair, county level' },
  { value: '7', label: 'Products designed and built' },
];

// The rest of the site, mentioned rather than shown.
const directory = [
  { href: '/work', label: 'Work', note: 'Seven projects, from farm e-commerce to AI' },
  { href: '/work/e-elections', label: 'E-Elections', note: 'Secure digital voting for Kenya, my KSEF 2027 entry' },
  { href: '/about', label: 'About', note: 'My story, how I work and what I can build' },
  { href: '/certificates', label: 'Recognition', note: 'Results, rankings and certificates' },
  { href: '/contact', label: 'Contact', note: 'Start a project with me' },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="wrap pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pt-44">
        <p className="eyebrow mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mb-12">
          <span>{site.role}</span>
          <span aria-hidden className="h-px w-8 bg-ink/30" />
          <span>{site.location}</span>
        </p>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-9">
            <HeroTitle />
          </div>

          <div className="anim-fade-up lg:col-span-3 lg:pb-3" style={{ animationDelay: '0.7s' }}>
            <dl className="grid grid-cols-2 gap-x-6 font-mono text-[11px] uppercase tracking-[0.14em] lg:grid-cols-1">
              {[
                ['Focus', 'Full-stack, payments, security, AI'],
                ['Currently', 'E-ELECTIONS for KSEF 2027'],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-rule py-3.5">
                  <dt className="text-ink-3">{k}</dt>
                  <dd className="mt-1.5 text-[13px] normal-case tracking-normal text-ink">{v}</dd>
                </div>
              ))}
              <div className="border-t border-rule py-3.5">
                <dt className="text-ink-3">Local time</dt>
                <dd className="mt-1.5 text-ink">
                  <LocalTime />
                </dd>
              </div>
              <div className="border-t border-rule py-3.5">
                <dt className="text-ink-3">Status</dt>
                <dd className="mt-1.5 flex items-center gap-2 text-[13px] normal-case tracking-normal text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                  Taking projects for 2027
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          className="anim-fade-up mt-14 grid gap-10 border-t border-rule pt-10 sm:mt-16 lg:grid-cols-12 lg:items-end lg:gap-8"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="max-w-[36rem] text-[19px] leading-[1.6] text-ink-2 sm:text-[21px] lg:col-span-7">
            I’m Jeremy Gachiki Nduati, a 16-year-old developer and designer from Kirinyaga. I teach
            myself by building, and I ship complete products — payments, security, applied AI — for
            real people.
          </p>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Link href="/work" className="btn-ink">
              See my work <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-line">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Me */}
      <section className="border-t border-rule bg-paper-2/60">
        <div className="wrap grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <Reveal className="lg:col-span-5">
            <figure className="relative max-w-[420px]">
              <div className="plate aspect-[4/5] rounded-md">
                <Image src="/me.jpeg" alt="Portrait of Jeremy Nduati" fill sizes="420px" className="object-cover" />
              </div>
              <Seal size={128} className="absolute -bottom-10 -right-6 rotate-[-10deg] text-kiln sm:-right-12" />
              <figcaption className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">
                Fig. 1 — The developer, at 16
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">Who I am</p>
              <p className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.08] tracking-[-0.015em]">
                I don’t take Computer Science at school.
                <span className="italic text-ink-3"> Everything I know, I learned by building.</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="prose-body mt-8 max-w-[36rem]">
                <p>
                  I study a different technical subject, and code is the thing I do because I can’t
                  stop. It started with small experiments and grew into sites and apps for real
                  businesses and professionals, in Kenya and beyond.
                </p>
                <p>
                  I care about the details people only notice when they’re missing: a receipt you can
                  verify, a payment that never double-charges, a page that loads on slow data. One day
                  I want to build software my whole country relies on.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="mt-12 grid grid-cols-2 border-t border-rule">
                {facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={`border-b border-rule py-6 ${i % 2 === 1 ? 'border-l pl-6' : 'pr-6'}`}
                  >
                    <dt className="sr-only">{f.label}</dt>
                    <dd>
                      <span className="block font-serif text-[clamp(2.4rem,4vw,3.5rem)] leading-none tracking-[-0.03em]">
                        {f.value}
                      </span>
                      <span className="mt-2 block text-[13px] leading-snug text-ink-2">{f.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Directory */}
      <nav aria-label="Explore the site" className="wrap py-20 sm:py-28 lg:py-32">
        <Reveal>
          <p className="eyebrow">Explore</p>
        </Reveal>
        <ul className="mt-8 border-t border-rule">
          {directory.map((d, i) => (
            <Reveal as="li" key={d.href} delay={i * 0.05} className="border-b border-rule">
              <Link href={d.href} className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 py-6 sm:py-7">
                <span className="col-span-2 font-mono text-[11px] text-ink-3 sm:col-span-1">0{i + 1}</span>
                <span className="col-span-10 font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] tracking-[-0.02em] transition-[color,transform] duration-500 ease-out group-hover:translate-x-2 group-hover:text-kiln sm:col-span-6">
                  {d.label}
                </span>
                <span className="col-span-9 col-start-3 text-[15px] text-ink-2 sm:col-span-4 sm:col-start-auto">
                  {d.note}
                </span>
                <span
                  aria-hidden
                  className="col-span-1 hidden justify-self-end font-serif text-[28px] transition-transform duration-500 ease-out group-hover:-rotate-45 group-hover:text-kiln sm:block"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </nav>
    </>
  );
}
