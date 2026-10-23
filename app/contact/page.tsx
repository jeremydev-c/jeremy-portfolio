import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import CopyEmail from '../components/CopyEmail';
import LocalTime from '../components/LocalTime';
import { site } from '../lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Jeremy Nduati: web and mobile apps, payments, and secure systems.',
  alternates: { canonical: '/contact' },
};

const services = [
  ['Web & mobile products', 'From the first sketch to a deployed, monitored app.'],
  ['Payments', 'M-Pesa, Paystack and Stripe, wired in properly.'],
  ['Portfolios & brand sites', 'A site with an identity of its own, not a template.'],
  ['UI/UX design', 'Calm, clear interfaces, designed before they are coded.'],
];

export default function Contact() {
  return (
    <section className="wrap pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pt-44">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="anim-fade-up">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 font-display text-display-lg">
              Let’s build
              <br />
              <span className="italic text-cobalt">something real.</span>
            </h1>
            <p className="mt-8 max-w-md text-[18px] leading-[1.6] text-ink-2">
              Tell me what you need and when. I’ll reply with honest questions, a plan and a price,
              usually within a day.
            </p>
          </div>

          <div className="anim-fade-up mt-12" style={{ animationDelay: '0.1s' }}>
            <CopyEmail email={site.email} />
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-rule pt-8 font-mono text-[11px] uppercase tracking-[0.14em]">
              <div>
                <dt className="text-ink-3">Local time</dt>
                <dd className="mt-2 text-ink">
                  <LocalTime />
                </dd>
              </div>
              <div>
                <dt className="text-ink-3">Elsewhere</dt>
                <dd className="mt-2 flex gap-4 text-ink">
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="link-draw">
                    GitHub ↗
                  </a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-draw">
                    LinkedIn ↗
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="anim-fade-up mt-12" style={{ animationDelay: '0.15s' }}>
            <ul className="border-t border-rule">
              {services.map(([title, body], i) => (
                <li key={title} className="flex gap-4 border-b border-rule py-4">
                  <span className="font-mono text-[11px] text-cobalt">0{i + 1}</span>
                  <span>
                    <span className="block text-[16px]">{title}</span>
                    <span className="block text-[14px] text-ink-3">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="anim-fade-up lg:col-span-6 lg:col-start-7" style={{ animationDelay: '0.1s' }}>
          <div className="border-2 border-ink bg-paper-2 p-6 sm:p-10">
            <p className="font-display text-[30px] leading-tight">Project brief</p>
            <p className="mt-2 text-[14px] text-ink-3">Everything except the last question is required.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
