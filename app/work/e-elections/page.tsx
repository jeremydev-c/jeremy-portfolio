import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import Shot from '../../components/Shot';
import HashChain from '../../components/HashChain';
import NextProject from '../../components/NextProject';

export const metadata: Metadata = {
  title: 'E-ELECTIONS — secure digital voting for Kenya',
  description:
    'Case study: a digital voting system with face and fingerprint verification, ward-level ballots, and a tamper-evident SHA-256 ledger. Built solo by Jeremy Nduati for KSEF 2027.',
  alternates: { canonical: '/work/e-elections' },
  openGraph: { images: [{ url: '/work/e-elections-home.jpg', width: 1600, height: 1000 }] },
};

const steps = [
  {
    n: '01',
    title: 'National ID check',
    body: 'The voter enters their ID. If it has already voted, the ballot never opens: an “ACCESS DENIED” alert shows when.',
    img: '/work/e-elections-denied.jpg',
    alt: 'Access denied alert for a National ID that has already voted',
  },
  {
    n: '02',
    title: 'Face or fingerprint',
    body: 'Five quality-checked face frames are fused and matched against the encrypted template, or the phone’s fingerprint sensor is used via WebAuthn.',
    img: '/work/e-elections-face.jpg',
    alt: 'Face scan panel with live quality guidance',
  },
  {
    n: '03',
    title: 'A ballot for your ward',
    body: 'Six seats, from President to Member of County Assembly, routed automatically to the voter’s registered county, constituency and ward.',
    img: '/work/e-elections-review.jpg',
    alt: 'Ballot review screen listing six choices',
  },
  {
    n: '04',
    title: 'Sealed, with a receipt',
    body: 'The ballot is chained and sealed in one atomic step. The voter gets an anonymous KE-2027 receipt code to check later.',
    img: '/work/e-elections-receipt.jpg',
    alt: 'Receipt screen with an anonymous receipt code',
  },
];

const security = [
  ['Hash-chained ledger', 'Each ballot stores the SHA-256 hash of the one before it.'],
  ['Server seals', 'An HMAC key that never touches the database signs every ballot and the chain head.'],
  ['Turnout check', 'Ballots must equal voters marked as voted, so deleting one is exposed.'],
  ['Atomic voting', 'One database operation locks the voter and records the ballot together.'],
  ['Encrypted biometrics', 'Face templates are AES-256-GCM encrypted and bound to the voter’s ID.'],
  ['One-to-many face check', 'A lookalike is rejected if they match someone else better.'],
  ['Request protection', 'Cross-site requests, oversized bodies and brute force are blocked.'],
  ['Ballot secrecy', 'No identity is stored with a ballot, and successful votes are never logged.'],
];

const tests = [
  ['Ledger tamper detection', 6],
  ['Biometric encryption', 4],
  ['Face-matching decisions', 5],
  ['Cross-site & request checks', 6],
] as const;

// Face distance: lower means more alike. Accepted below 0.45.
const faces = [
  { label: 'Genuine voter vs their own template', value: 0.248, verdict: 'Accepted', ok: true },
  { label: 'Lookalike vs the voter they claimed to be', value: 0.375, verdict: 'Rejected by 1:N check', ok: false },
  { label: 'Different person vs voter’s template', value: 1.399, verdict: 'Rejected', ok: false },
];
const SCALE = 1.5;

export default function EElections() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <header className="wrap pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
        <div className="anim-fade-up">
          <p className="eyebrow">
            <Link href="/work" className="link-draw">Work</Link> / Case study · Kenya Science &amp; Engineering Fair 2027
          </p>
          <h1 className="mt-6 font-serif text-display-xl">E-ELECTIONS</h1>
          <p className="mt-4 font-serif text-[clamp(1.6rem,3.2vw,2.8rem)] italic leading-tight text-kiln">
            Every Kenyan vote, counted in the open.
          </p>
        </div>
        <div className="anim-fade-up" style={{ animationDelay: '0.12s' }}>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-rule pt-8 text-[15px] lg:grid-cols-4">
            {[
              ['Role', 'Sole designer & engineer'],
              ['Year', '2026'],
              ['Status', 'Fair entry, in testing'],
              ['Stack', 'Next.js 16 · TypeScript · MongoDB Atlas'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="anim-fade-up wrap">
        <Shot
          src="/work/e-elections-home.jpg"
          alt="E-ELECTIONS home page with a sealed ballot receipt illustration"
          url="e-elections / home"
          priority
          sizes="(min-width: 1400px) 1300px, 100vw"
        />
      </div>

      {/* ----------------------------------------------------------------- Why */}
      <section className="wrap py-20 sm:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Why I built it</p>
            <p className="mt-8 font-serif text-[clamp(4rem,10vw,8.5rem)] leading-[0.85] tracking-[-0.04em] text-kiln">
              74.8<span className="text-[0.45em]">bn</span>
            </p>
            <p className="mt-4 max-w-xs text-[14px] leading-snug text-ink-3">
              Kenya shillings budgeted by the IEBC to run the 2027 General Election.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="prose-body">
              <p className="!text-[22px] !leading-[1.5] text-ink">
                The idea came in a History lesson about the IEBC. The budget was enormous, and the
                country was still voting on paper.
              </p>
              <p>
                Paper ballots have to be printed, guarded, transported to every polling station and
                counted by hand, and every step costs money and invites doubt. I wanted to see whether
                one student could build a system that does the same job digitally, without asking
                voters to simply trust it.
              </p>
              <p>
                So the goal was never just “voting on a website”. It was voting that anyone can audit:
                a voter can check their own ballot, and nobody, including whoever runs the server, can
                quietly change a result.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- The flow */}
      <section className="border-y border-rule bg-paper-2/60">
        <div className="wrap py-20 sm:py-28 lg:py-32">
          <Reveal>
            <p className="eyebrow">How a vote works</p>
            <h2 className="mt-4 max-w-3xl font-serif text-display-md">Four steps, about two minutes, from any device.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={(i % 2) * 0.08}>
                <div className="browser">
                  <div className="relative aspect-[800/537]">
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover object-top" />
                  </div>
                </div>
                <div className="mt-6 flex gap-5">
                  <span className="font-serif text-[44px] leading-none text-kiln">{s.n}</span>
                  <div>
                    <h3 className="text-[19px] font-medium">{s.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------------------- The ledger */}
      <section className="bg-night text-bone">
        <div className="wrap py-20 sm:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55">The ledger</p>
              <h2 className="mt-4 font-serif text-display-md">
                Like a chain of padlocks.
                <span className="block italic text-[#e9a27f]">Break one, and it shows.</span>
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
              <div className="space-y-5 text-[17px] leading-[1.7] text-bone/70">
                <p>
                  Every ballot is turned into a fingerprint, a SHA-256 hash, that also includes the
                  fingerprint of the ballot before it. Change a single vote and its fingerprint changes,
                  which breaks the link to every ballot after it.
                </p>
                <p>
                  An attacker with database access could try to recalculate the whole chain. That fails
                  too: each ballot and the chain’s head are sealed with a secret key that lives only on
                  the server, and the number of ballots must match the number of voters marked as having
                  voted.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-14 border-t border-bone/10 pt-10" delay={0.1}>
            <HashChain />
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- Security */}
      <section className="wrap py-20 sm:py-28 lg:py-32">
        <Reveal>
          <p className="eyebrow">Security</p>
          <h2 className="mt-4 max-w-3xl font-serif text-display-md">Eight layers between a voter and a forged result.</h2>
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {security.map(([t, b], i) => (
            <Reveal as="li" key={t} delay={(i % 4) * 0.05} className="bg-paper p-6 sm:p-7">
              <p className="font-mono text-[11px] text-kiln">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-5 text-[17px] font-medium">{t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{b}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------- Tests */}
      <section className="border-y border-rule bg-paper-2/60">
        <div className="wrap grid gap-16 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Tested</p>
            <p className="mt-8 font-serif text-[clamp(4rem,10vw,8.5rem)] leading-[0.85] tracking-[-0.04em]">
              21<span className="text-ink-3">/21</span>
            </p>
            <p className="mt-4 max-w-xs text-[14px] leading-snug text-ink-3">
              Automated security tests passed, including every attempt to change, re-hash, rewrite or
              delete a vote.
            </p>
            <ul className="mt-10 border-t border-rule">
              {tests.map(([name, n]) => (
                <li key={name} className="flex items-baseline justify-between border-b border-rule py-3 text-[15px]">
                  {name}
                  <span className="font-mono text-[12px] text-ink-3">
                    {n}/{n} passed
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <h3 className="font-serif text-display-sm">Face matching, measured</h3>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-2">
              Distance between two faces: lower means more alike. A voter is accepted below 0.45, and
              only if nobody else on the register matches them better.
            </p>
            <div className="relative mt-10 space-y-7">
              <div
                aria-hidden
                className="absolute bottom-0 top-0 z-10 border-l border-dashed border-ink/50"
                style={{ left: `${(0.45 / SCALE) * 100}%` }}
              >
                <span className="absolute -top-6 -translate-x-1/2 whitespace-nowrap font-mono text-[10.5px] text-ink-2">
                  0.45 threshold
                </span>
              </div>
              {faces.map((f) => (
                <div key={f.label}>
                  <div className="h-9 w-full overflow-hidden rounded-sm bg-ink/[0.06]">
                    <div
                      className={`flex h-full items-center justify-end pr-2 font-mono text-[12px] ${
                        f.ok ? 'bg-moss text-paper' : 'bg-kiln/85 text-paper'
                      }`}
                      style={{ width: `${Math.min(f.value / SCALE, 1) * 100}%` }}
                    >
                      {f.value.toFixed(3)}
                    </div>
                  </div>
                  <p className="mt-2 flex flex-wrap justify-between gap-x-4 text-[13.5px]">
                    <span className="text-ink-2">{f.label}</span>
                    <span className={f.ok ? 'text-moss' : 'text-kiln'}>{f.verdict}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[13px] leading-relaxed text-ink-3">
              The lookalike scored under the threshold, so a simple check would have let them in. The
              one-to-many check caught them because they matched their own registration (0.257) far
              better.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- Results & audit */}
      <section className="wrap py-20 sm:py-28 lg:py-32">
        <Reveal>
          <p className="eyebrow">Results &amp; audit</p>
          <h2 className="mt-4 max-w-3xl font-serif text-display-md">
            Counted from the ledger, not from a number someone typed.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Shot src="/work/e-elections-results.jpg" alt="Live results page" url="e-elections / results" ratio="aspect-[16/12]" />
            <p className="mt-4 text-[14px] text-ink-3">
              Live results refresh every three seconds, tallied straight from the verified chain.
            </p>
          </Reveal>
          <Reveal className="space-y-8 lg:col-span-5" delay={0.1}>
            <div>
              <Shot src="/work/e-elections-tamper.jpg" alt="Hacker tamper test detecting three simulated attacks" ratio="aspect-[800/537]" />
              <p className="mt-4 text-[14px] text-ink-3">
                The built-in tamper test attacks a copy of the ledger three ways. All three are caught.
              </p>
            </div>
            <div>
              <Shot src="/work/e-elections-verify.jpg" alt="Receipt verification page" ratio="aspect-[16/10]" />
              <p className="mt-4 text-[14px] text-ink-3">
                Any voter can check their receipt: hash, server seal and both chain links.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Next */}
      <section className="border-t border-rule">
        <div className="wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">What’s next</p>
            <h2 className="mt-4 font-serif text-display-md">The road to the fair, and past it.</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <ol className="border-t border-rule">
              {[
                ['USSD voting on *2027#', 'So voters with a basic “kabambe” phone are not left out.'],
                ['Sharper face recognition', 'More training data and liveness checks, aiming for 99% accuracy.'],
                ['Field testing', 'A mock election with real users, measuring speed and first-try verification.'],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-5 border-b border-rule py-5">
                  <span className="font-mono text-[11px] text-kiln">0{i + 1}</span>
                  <span>
                    <span className="block text-[17px]">{t}</span>
                    <span className="mt-1 block text-[15px] text-ink-2">{b}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <NextProject href="/work/fashion-fit" name="Fashion Fit" kind="Applied AI · Mobile" />
    </>
  );
}
