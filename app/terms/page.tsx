import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '../components/LegalPage';
import { site } from '../lib/content';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The terms for using this portfolio site and its content.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <LegalPage
      eyebrow="The small print · Terms"
      title={
        <>
          Terms of use,
          <span className="block text-ink-3">kept short.</span>
        </>
      }
      updated="2 November 2026"
      intro={`By using this site you agree to the terms below. They cover the site itself; any project we work on together gets its own written agreement.`}
      sections={[
        {
          title: 'Who runs this site',
          body: (
            <p>
              This site is the personal portfolio of {site.fullName}, a developer and designer based in{' '}
              {site.location}. You can reach me at{' '}
              <a href={`mailto:${site.email}`} className="link-under text-ink">
                {site.email}
              </a>
              .
            </p>
          ),
        },
        {
          title: 'The content',
          body: (
            <>
              <p>
                The writing, design and code of this site are my own work. You are welcome to read, link
                to and share pages. Please do not copy the design or text and present it as your own.
              </p>
              <p>
                Screenshots of client websites show work I designed and built. The businesses, their
                names and their logos belong to their owners. Certificates belong to the organisations
                that issued them and are shown as evidence of results.
              </p>
            </>
          ),
        },
        {
          title: 'Open-source code',
          body: (
            <p>
              Some projects link to code on GitHub. That code is covered by the licence in its own
              repository, not by these terms.
            </p>
          ),
        },
        {
          title: 'No guarantees',
          body: (
            <p>
              I keep this site accurate and working, but it is provided as it is. Descriptions of projects
              reflect them when they were written, and live client sites may have changed since. I am not
              responsible for the content of external sites linked from here.
            </p>
          ),
        },
        {
          title: 'Using the contact form',
          body: (
            <p>
              Please use the form for genuine enquiries only. Sending a message does not create a contract
              or commit either of us to a project. How your message is handled is explained on the{' '}
              <Link href="/privacy" className="link-under text-ink">
                privacy page
              </Link>
              .
            </p>
          ),
        },
        {
          title: 'Changes and law',
          body: (
            <p>
              I may update these terms as the site changes; the date at the top shows the latest version.
              These terms are governed by the laws of Kenya.
            </p>
          ),
        },
      ]}
    />
  );
}
