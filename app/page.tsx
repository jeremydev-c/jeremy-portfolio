import Image from 'next/image';
import Link from 'next/link';
import HeroTitle from './components/HeroTitle';
import Reveal from './components/Reveal';
import LocalTime from './components/LocalTime';
import Marquee from './components/Marquee';
import { projects, site, toolbelt } from './lib/content';

const facts = [
  { value: '16', label: 'Years old, self-taught' },
  { value: '#50', label: 'Of 1,995 in a global data hackathon' },
  { value: '3rd', label: 'Kenya Science & Engineering Fair, county level' },
  { value: '7', label: 'Products designed and built' },
];

// Three projects on the poster; the rest live on /work.
const featured = ['e-elections', 'fashion-fit', 'tabby'].map((slug) => projects.find((p) => p.slug === slug)!);

const directory = [
  { href: '/work', label: 'All work', note: 'Seven projects, from farm e-commerce to AI' },
  { href: '/about', label: 'About', note: 'My story, how I work and what I can build' },
  { href: '/certificates', label: 'Recognition', note: 'Results, rankings and certificates' },
  { href: '/contact', label: 'Contact', note: 'Start a project with me' },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="wrap pb-10 pt-24 sm:pb-14 sm:pt-32">
        <div className="anim-fade-up mb-6 grid grid-cols-2 border-y border-ink font-mono text-[11px] font-bold uppercase tracking-[0.08em] sm:mb-10 sm:grid-cols-4">
          <p className="border-r border-ink py-2.5 pr-3">{site.role}</p>
          <p className="py-2.5 pl-3 sm:border-r sm:border-ink sm:pr-3">{site.location}</p>
          <p className="border-r border-t border-ink py-2.5 pr-3 sm:border-t-0 sm:pl-3">
            <LocalTime />
          </p>
          <p className="flex items-center gap-2 border-t border-ink py-2.5 pl-3 sm:border-t-0">
            <span className="h-2 w-2 bg-moss" /> Open for 2027
          </p>
        </div>

        <HeroTitle />

        <div className="anim-fade-up mt-10 grid border-t-2 border-ink pt-6 sm:mt-14 lg:grid-cols-12 lg:gap-8" style={{ animationDelay: '0.45s' }}>
          <p className="max-w-[40rem] text-[19px] leading-[1.5] sm:text-[22px] lg:col-span-7">
            I’m {site.fullName}, a 16-year-old developer and designer from Nanyuki. I teach myself by
            building, and I ship complete products — payments, security, applied AI — for real people.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 lg:col-span-5 lg:mt-0 lg:justify-end lg:self-end">
            <Link href="/work" className="btn-ink">
              See my work <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-line">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <Marquee items={toolbelt.slice(0, 12)} />

      {/* ------------------------------------------------------------ Featured */}
      <section className="wrap py-16 sm:py-24">
        <Reveal className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
          <h2 className="font-display text-display-md uppercase">Selected work</h2>
          <Link href="/work" className="link-draw shrink-0 font-mono text-[12px] font-bold uppercase tracking-[0.08em]">
            All 7 →
          </Link>
        </Reveal>

        <ul className="grid-rules mt-8 md:grid-cols-3">
          {featured.map((p, i) => {
            const href = p.caseStudy ?? p.live ?? '/work';
            const external = !p.caseStudy && !!p.live;
            return (
              <Reveal as="li" key={p.slug} delay={i * 0.06}>
                <Link
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-full flex-col p-5 transition-colors duration-200 hover:bg-cobalt hover:text-bone sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-[clamp(3.5rem,7vw,6rem)] leading-[0.8] tracking-[-0.06em]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {p.badge && <span className="chip group-hover:border-bone group-hover:text-bone">{p.badge}</span>}
                  </div>
                  <h3 className="mt-8 font-display text-[clamp(1.7rem,2.6vw,2.4rem)] uppercase leading-[0.95] tracking-[-0.04em]">
                    {p.short}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-ink-3 group-hover:text-bone/75">
                    {p.kind}
                  </p>
                  <div className="relative mt-6 aspect-[16/11] overflow-hidden border-2 border-ink bg-cobalt-soft group-hover:border-bone">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.name} screenshot`}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      p.icon && (
                        <Image src={p.icon} alt={`${p.name} app icon`} width={120} height={120} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-ink" />
                      )
                    )}
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-2 group-hover:text-bone/85">{p.tagline}</p>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* --------------------------------------------------------------- Facts */}
      <section className="border-y-2 border-ink bg-ink text-paper">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 0.05}
              className={`py-10 sm:py-14 ${i % 2 === 1 ? 'border-l border-paper/25 pl-5 sm:pl-8' : 'pr-5'} ${i >= 2 ? 'border-t border-paper/25 lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l lg:pl-8' : ''}`}
            >
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] tracking-[-0.06em]">
                  {f.value}
                </span>
                <span className="mt-3 block max-w-[14rem] font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-paper/70">
                  {f.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------------------ Me */}
      <section className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <figure className="max-w-[440px]">
            <div className="plate aspect-[4/5]">
              <Image src="/me.jpeg" alt="Portrait of Jeremy Nduati" fill sizes="440px" className="object-cover" />
            </div>
            <figcaption className="mt-3 flex justify-between border-b border-ink pb-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em]">
              <span>Fig. 01</span>
              <span>The developer, at 16</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Who I am</p>
            <p className="mt-5 font-display text-[clamp(2.2rem,4.4vw,4rem)] uppercase leading-[0.92] tracking-[-0.05em]">
              I don’t take Computer Science at school.{' '}
              <span className="bg-cobalt px-[0.1em] text-bone [box-decoration-break:clone]">I learned it by building.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose-body mt-8 max-w-[38rem]">
              <p>
                I study a different technical subject, and code is the thing I do because I can’t stop.
                It started with small experiments and grew into sites and apps for real businesses and
                professionals, in Kenya and beyond.
              </p>
              <p>
                I care about the details people only notice when they’re missing: a receipt you can
                verify, a payment that never double-charges, a page that loads on slow data. One day I
                want to build software my whole country relies on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- Directory */}
      <nav aria-label="Explore the site" className="wrap pb-16 sm:pb-24">
        <ul className="border-t-2 border-ink">
          {directory.map((d, i) => (
            <Reveal as="li" key={d.href} delay={i * 0.04} className="border-b-2 border-ink">
              <Link
                href={d.href}
                className="group grid grid-cols-12 items-center gap-x-4 gap-y-1 px-2 py-5 transition-colors duration-200 hover:bg-cobalt hover:text-bone sm:py-6"
              >
                <span className="col-span-2 font-mono text-[12px] font-bold sm:col-span-1">0{i + 1}</span>
                <span className="col-span-9 font-display text-[clamp(2.2rem,6vw,5rem)] uppercase leading-[0.9] tracking-[-0.05em] sm:col-span-6">
                  {d.label}
                </span>
                <span className="col-span-10 col-start-3 text-[15px] text-ink-2 group-hover:text-bone/85 sm:col-span-4 sm:col-start-auto">
                  {d.note}
                </span>
                <span
                  aria-hidden
                  className="col-span-1 hidden justify-self-end font-display text-[clamp(2rem,4vw,3.5rem)] transition-transform duration-300 ease-out group-hover:-rotate-45 sm:block"
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
