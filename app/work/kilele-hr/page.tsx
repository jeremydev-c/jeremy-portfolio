import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import NextProject from '../../components/NextProject';
import Shot from '../../components/Shot';

export const metadata: Metadata = {
  title: 'Kilele HR, the whole life of a job in one system',
  description:
    'Case study: a complete HR system built in two days for the iLabAfrica challenge. Scoped access control, encrypted personal data, one approval engine, a careers site, email at every step and a tamper-evident audit trail.',
  alternates: { canonical: '/work/kilele-hr' },
};

const metrics = [
  { value: '74', label: 'Automated tests, all passing' },
  { value: '8', label: 'Roles, built from scoped permissions' },
  { value: '1', label: 'Approval engine for four kinds of request' },
  { value: '14', label: 'Kinds of email, at every step' },
  { value: '256', label: 'Bit AES-GCM encryption on personal data' },
  { value: '2', label: 'Days from first commit to live' },
];

const problems = [
  ['Access', 'An employee, their manager, HR and an auditor should each see different things, and nothing more.'],
  ['Privacy', 'National IDs, KRA PINs and bank details are exactly what must never leak.'],
  ['Approvals', 'Leave, hiring, promotions and exits each need the right people to decide, in order.'],
  ['Trust', 'When something goes wrong, you need to know who did what, and that nobody quietly changed it.'],
];

const layers = [
  ['Access', 'Every permission has a scope: own, team, department or all. Pages, lists and server actions all ask the same engine, so a line manager sees his team and nobody else, whichever link he types.'],
  ['Privacy', 'Personal data is encrypted with AES-256-GCM and leaves the server through one serializer that masks it by default. Showing a full ID needs a reason, and the reason is logged.'],
  ['Trust', 'One approval engine routes every request to the nearest manager allowed to decide, then HR. Every action lands in a SHA-256 hash chain: edit one entry and the check says so.'],
];

const features = [
  ['Scoped roles', 'Eight roles from one permission catalogue; admins edit them without touching code.'],
  ['Encrypted personal data', 'Masked by default, revealed with a logged reason, searchable without decrypting.'],
  ['One approval engine', 'Leave, hiring, promotions and exits, with no self-approval and no double decisions.'],
  ['Kenyan leave rules', 'Public holidays, the Sunday-to-Monday rule, working days and live balances.'],
  ['Careers site', 'Open jobs, PDF CVs checked by their content, and a private status page per applicant.'],
  ['Fair hiring', 'Automatic screening scores and blind interview scorecards: nobody follows the loudest voice.'],
  ['Pre-filled adverts', 'An approved hire becomes a ready-to-edit advert in one click.'],
  ['Replacement prompts', 'Resignations and retirements suggest the hire before anyone has to remember.'],
  ['Email at every step', 'Applicants, approvers and requesters hear exactly when it matters, through Resend.'],
  ['Announcements', 'HR to everyone, managers to their team, with meetings and "seen by 5 of 23".'],
  ['Exits done properly', 'Department clearance, an exit interview only HR sees, and the login closed on the last day.'],
  ['Audit trail', 'Every action, sign-in and denied attempt, in a chain anyone can verify.'],
];

const screens = [
  { src: '/work/kilele-home.jpg', alt: 'The public Kilele Group website with open jobs and staff sign-in', url: 'kilele-hr.vercel.app' },
  { src: '/work/kilele-hiring.jpg', alt: 'The hiring page with adverts, applicants by stage and hiring requests', url: 'kilele-hr.vercel.app / hiring' },
  { src: '/work/kilele-profile.jpg', alt: 'An employee profile with personal data masked', url: 'kilele-hr.vercel.app / people' },
  { src: '/work/kilele-meeting.jpg', alt: 'A town-hall meeting announcement showing who has seen it', url: 'kilele-hr.vercel.app / announcements' },
  { src: '/work/kilele-audit.jpg', alt: 'The hash-chained audit log', url: 'kilele-hr.vercel.app / audit' },
];

const stack = [
  ['App', 'Next.js 16 (App Router, Server Actions), React 19, TypeScript'],
  ['Data', 'MongoDB Atlas, Mongoose, GridFS for CVs, zod validation'],
  ['Security', 'scrypt, signed JWT sessions, AES-256-GCM, HMAC blind index, SHA-256 chain'],
  ['Email', 'Resend, with every message logged before it is sent'],
  ['Platform', 'Vercel, with a daily cron job; Tailwind CSS 4'],
];

const journey = [
  ['Foundation', 'Sign-in, scoped roles, user and role admin, and the hash-chained audit trail.'],
  ['People and leave', 'Encrypted records, the org chart, Kenyan leave rules and the shared approval engine.'],
  ['Hiring', 'From hiring request to careers site, screening, blind scorecards, offer and hire.'],
  ['Growth and exits', 'Promotions within pay bands, clearance, exit interviews and the HR dashboard.'],
  ['Product polish', 'Replacement prompts, pre-filled adverts and a glittering black-and-white redesign.'],
  ['Live', 'Public website, email at every step, announcements, deployment on Vercel and a final security sweep.'],
];

export default function KileleHR() {
  return (
    <>
      <header className="wrap pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
        <div className="anim-fade-up">
          <p className="eyebrow">
            <Link href="/work" className="link-draw">Work</Link> / Case study · iLabAfrica challenge, Strathmore University
          </p>
          <h1 className="mt-6 font-display text-display-xl">Kilele HR</h1>
          <p className="mt-4 font-display text-[clamp(1.6rem,3.2vw,2.8rem)] leading-tight text-ink-3">
            The whole life of a job, in one calm system.
          </p>
        </div>
        <div className="anim-fade-up" style={{ animationDelay: '0.12s' }}>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-rule pt-8 text-[15px] lg:grid-cols-4">
            {[
              ['Role', 'Sole designer & engineer'],
              ['Timeline', '2 days, 4–5 Nov 2026'],
              ['Platform', 'Web app, live on Vercel'],
              ['Stack', 'Next.js · MongoDB · Resend'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://kilele-hr.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-ink">
              Try the live demo <span aria-hidden>↗</span>
            </a>
            <a href="https://github.com/jeremydev-c/Kilele-HR" target="_blank" rel="noopener noreferrer" className="btn-line">
              Code on GitHub <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </header>

      <section className="bg-night text-bone">
        <div className="wrap grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Shot src="/work/kilele-dashboard.jpg" alt="Kilele HR home for an HR manager" url="kilele-hr.vercel.app / home" priority />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="eyebrow !text-bone/55">The numbers</p>
            <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] bg-bone/10">
              {metrics.map((m) => (
                <li key={m.label} className="bg-night p-6">
                  <p className="font-display text-[clamp(2.2rem,3.6vw,3.2rem)] leading-none">{m.value}</p>
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
            <h2 className="mt-4 font-display text-display-md">
              HR is people&rsquo;s most private data.
              <span className="block text-ink-3">It still has to move fast.</span>
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
            <h2 className="mt-4 max-w-4xl font-display text-display-md">
              Three ideas, each in <span className="text-ink-3">exactly one place</span> in the code.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-rule bg-rule md:grid-cols-3">
            {layers.map(([t, b], i) => (
              <Reveal as="li" key={t} delay={i * 0.08} className="bg-paper p-7 sm:p-9">
                <p className="font-mono text-[11px] text-accent">Layer 0{i + 1}</p>
                <h3 className="mt-6 font-display text-[34px] leading-none">{t}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{b}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-20 sm:py-28 lg:py-32">
        <Reveal>
          <p className="eyebrow">Screens</p>
          <h2 className="mt-4 font-display text-display-md">From the careers site to the audit trail</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {screens.map((s, i) => (
            <Reveal key={s.src} delay={(i % 2) * 0.08} className={i === 0 ? 'lg:col-span-2' : ''}>
              <Shot src={s.src} alt={s.alt} url={s.url} sizes={i === 0 ? '(min-width: 1024px) 90vw, 100vw' : '(min-width: 1024px) 45vw, 100vw'} />
              <p className="mt-3 text-[14px] text-ink-3">{s.alt}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="wrap py-20 sm:py-28 lg:py-32">
          <Reveal>
            <p className="eyebrow">Features</p>
            <h2 className="mt-4 font-display text-display-md">Twelve things it does well</h2>
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
        </div>
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
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://kilele-hr.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-ink">
                Try the live demo <span aria-hidden>↗</span>
              </a>
              <a href="https://github.com/jeremydev-c/Kilele-HR" target="_blank" rel="noopener noreferrer" className="btn-line">
                Code on GitHub <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="eyebrow">Journey</p>
            <ol className="relative mt-8 border-l border-rule pl-8">
              {journey.map(([t, b]) => (
                <li key={t} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border border-ink-3 bg-paper" />
                  <p className="text-[17px]">{t}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{b}</p>
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
