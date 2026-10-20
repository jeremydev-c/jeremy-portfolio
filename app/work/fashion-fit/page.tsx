import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import NextProject from '../../components/NextProject';

export const metadata: Metadata = {
  title: 'Fashion Fit — AI wardrobe and outfit planner',
  description:
    'Case study: a React Native app that digitises your wardrobe with computer vision and suggests outfits using 14 custom algorithms, live weather and a learning engine.',
  alternates: { canonical: '/work/fashion-fit' },
};

const metrics = [
  { value: '14', label: 'Fashion-intelligence algorithms' },
  { value: '95%', label: 'Lower AI cost than cloud-only' },
  { value: '88%+', label: 'Vision categorisation accuracy' },
  { value: '30', label: 'Languages supported' },
  { value: '15+', label: 'API endpoints' },
  { value: '6', label: 'Core screens' },
];

const problems = [
  ['Time', 'Remembering or cataloguing what you own by hand is impractical.'],
  ['Decision fatigue', 'Choosing from dozens of items every day drains energy.'],
  ['Underuse', 'Without visibility, people rewear a few pieces and forget the rest.'],
  ['Spending', 'New clothes get bought for occasions the wardrobe already covers.'],
];

const layers = [
  ['Vision', 'Camera capture goes to GPT-4o-mini vision, which returns category, colours, pattern, fit, style, occasions, brand and a confidence score.'],
  ['Intelligence', '14 scoring algorithms: occasion and time-of-day profiles, weather, colour harmony, style coherence, variety and learned preferences.'],
  ['Learning', 'Every save, rejection and interaction feeds the engine. Your Style DNA recalculates and suggestions improve with use.'],
];

const features = [
  ['AI vision capture', 'Single photos or bulk mode for up to 30 items at once.'],
  ['Smart recommendations', 'Complete outfits for the occasion, time of day and weather.'],
  ['Digital wardrobe', 'Every piece catalogued, searchable and filterable.'],
  ['Weather-aware styling', 'GPS or destination weather, from Nairobi to Kisumu.'],
  ['7-day planner', 'Plan the week ahead; the AI fills in the outfits.'],
  ['AI style coach', 'Chat with a fashion-trained assistant, with saved history.'],
  ['Style DNA', 'Your styles, colours and brands, with consistency scores.'],
  ['Wardrobe analytics', 'What you actually wear, and what sits idle.'],
  ['Learning engine', 'Suggestions personalised to you over time.'],
  ['Freemium + Paystack', 'Free, Pro and Elite plans billed in KES.'],
  ['30 languages', 'Full internationalisation from day one.'],
  ['Production security', 'JWT, bcrypt, validation and server-side plan checks.'],
];

const stack = [
  ['Mobile', 'React Native, Expo 51, React Navigation, Reanimated'],
  ['State & data', 'TanStack Query, Zustand, AsyncStorage'],
  ['Backend', 'Node.js, Express, MongoDB, Mongoose, JWT'],
  ['AI', 'OpenAI GPT-4o-mini, Vision API, custom scoring engine'],
  ['Cloud', 'Cloudinary, Paystack, Resend'],
];

const journey = [
  ['Research', 'Problem validation: 92M tonnes of textile waste, 20–30% wardrobe use in East Africa.'],
  ['Architecture', 'Hybrid AI pipeline and freemium model design.'],
  ['Core build', 'Wardrobe, camera capture, categorisation and the 14-algorithm engine.'],
  ['Intelligence', 'Style DNA, learning engine, weather and destination styling, analytics.'],
  ['Polish', 'Subscriptions, onboarding, bulk capture, 30 locales, theming, accessibility.'],
  ['Competition', 'Prepared as an entry for Young Scientists Kenya 2026.'],
];

export default function FashionFit() {
  return (
    <>
      <header className="wrap pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
        <div className="anim-fade-up">
          <p className="eyebrow">
            <Link href="/work" className="link-draw">Work</Link> / Case study · Young Scientists Kenya 2026
          </p>
          <h1 className="mt-6 font-serif text-display-xl">Fashion Fit</h1>
          <p className="mt-4 font-serif text-[clamp(1.6rem,3.2vw,2.8rem)] italic leading-tight text-kiln">
            Your whole wardrobe, styled by AI.
          </p>
        </div>
        <div className="anim-fade-up" style={{ animationDelay: '0.12s' }}>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-rule pt-8 text-[15px] lg:grid-cols-4">
            {[
              ['Role', 'AI engineer & designer'],
              ['Timeline', '14 weeks'],
              ['Platform', 'React Native (Expo)'],
              ['Stack', 'Node.js · MongoDB · OpenAI'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="bg-night text-bone">
        <div className="wrap grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-12">
          <Reveal className="flex justify-center lg:col-span-5">
            <div className="relative h-56 w-56 overflow-hidden rounded-[56px] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] sm:h-72 sm:w-72 sm:rounded-[72px]">
              <Image src="/fashion-fit-icon.jpeg" alt="Fashion Fit app icon" fill priority sizes="288px" className="object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-bone/10 sm:grid-cols-3">
              {metrics.map((m) => (
                <li key={m.label} className="bg-night p-6">
                  <p className="font-serif text-[clamp(2.4rem,4vw,3.5rem)] leading-none">{m.value}</p>
                  <p className="mt-3 text-[13px] leading-snug text-bone/55">{m.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="wrap py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">The problem</p>
            <h2 className="mt-4 font-serif text-display-md">
              92 million tonnes of textile waste.
              <span className="block italic text-ink-3">Most people wear 20–30% of what they own.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <ul className="border-t border-rule">
              {problems.map(([t, b]) => (
                <li key={t} className="grid grid-cols-3 gap-4 border-b border-rule py-5">
                  <span className="text-[17px]">{t}</span>
                  <span className="col-span-2 text-[15px] leading-relaxed text-ink-2">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-2/60">
        <div className="wrap py-20 sm:py-28 lg:py-32">
          <Reveal>
            <p className="eyebrow">Architecture</p>
            <h2 className="mt-4 max-w-4xl font-serif text-display-md">
              A hybrid AI pipeline, <span className="italic text-kiln">95% cheaper</span> than sending every photo to the cloud.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-rule bg-rule md:grid-cols-3">
            {layers.map(([t, b], i) => (
              <Reveal as="li" key={t} delay={i * 0.08} className="bg-paper p-7 sm:p-9">
                <p className="font-mono text-[11px] text-kiln">Layer 0{i + 1}</p>
                <h3 className="mt-6 font-serif text-[34px] leading-none">{t}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{b}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-20 sm:py-28 lg:py-32">
        <Reveal>
          <p className="eyebrow">Features</p>
          <h2 className="mt-4 font-serif text-display-md">Twelve things it does well</h2>
        </Reveal>
        <ul className="mt-14 grid border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([t, b], i) => (
            <Reveal as="li" key={t} delay={(i % 3) * 0.05} className="border-b border-rule py-6 sm:pr-8">
              <p className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-ink-3">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[17px]">{t}</span>
              </p>
              <p className="mt-1.5 pl-8 text-[14.5px] leading-relaxed text-ink-2">{b}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-rule">
        <div className="wrap grid gap-16 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Built with</p>
            <dl className="mt-8 border-t border-rule">
              {stack.map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-4 border-b border-rule py-4 text-[15px]">
                  <dt className="text-ink-3">{k}</dt>
                  <dd className="col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://github.com/jeremydev-c/fashion-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink mt-10"
            >
              Code on GitHub <span aria-hidden>↗</span>
            </a>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="eyebrow">Journey</p>
            <ol className="relative mt-8 border-l border-rule pl-8">
              {journey.map(([t, b]) => (
                <li key={t} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border border-kiln bg-paper" />
                  <p className="text-[17px]">{t}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{b}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <NextProject href="/work/e-elections" name="E-ELECTIONS" kind="Civic tech · Security" />
    </>
  );
}
