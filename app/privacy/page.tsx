import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';
import { site } from '../lib/content';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What this site collects, why, and how to ask for it to be deleted.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="The small print · Privacy"
      title={
        <>
          Privacy,
          <span className="block text-ink-3">in plain words.</span>
        </>
      }
      updated="2 November 2026"
      intro="This is a personal portfolio. It has no accounts, no adverts and no tracking cookies. Here is everything it does with information about you."
      sections={[
        {
          title: 'The contact form',
          body: (
            <>
              <p>
                When you send the form, your name, email address, subject and message (and the kind of
                project you picked, if any) are sent to my inbox so I can reply. Nothing else is
                collected and nothing is stored in a database on this site.
              </p>
              <p>
                The email is delivered by Resend, an email service, and arrives in my Gmail. I use what
                you send only to answer you and talk about your project. I never sell it, share it or
                add you to a mailing list.
              </p>
            </>
          ),
        },
        {
          title: 'Visitor statistics',
          body: (
            <p>
              The site uses Vercel Web Analytics and Speed Insights to count page views and measure how
              fast pages load. They do not use cookies and do not identify you; I only see totals such as
              how many people visited a page and which country they came from.
            </p>
          ),
        },
        {
          title: 'Hosting',
          body: (
            <p>
              The site is hosted by Vercel. Like any web host, Vercel’s servers briefly process
              technical details such as your IP address in order to deliver the pages to you and protect
              the site from abuse.
            </p>
          ),
        },
        {
          title: 'Your theme choice',
          body: (
            <p>
              If you switch between light and dark, your choice is saved in your own browser (local
              storage) so the site remembers it next time. It never leaves your device, and clearing your
              browser data removes it.
            </p>
          ),
        },
        {
          title: 'Links to other sites',
          body: (
            <p>
              Project pages link to live client sites, GitHub, LinkedIn and certificate files. Those sites
              have their own privacy policies, which apply once you leave this one.
            </p>
          ),
        },
        {
          title: 'Your rights',
          body: (
            <p>
              Under Kenya’s Data Protection Act, 2019 you can ask to see, correct or delete anything you
              have sent me. Email{' '}
              <a href={`mailto:${site.email}`} className="link-under text-ink">
                {site.email}
              </a>{' '}
              and I will delete your messages and reply to confirm.
            </p>
          ),
        },
      ]}
    />
  );
}
