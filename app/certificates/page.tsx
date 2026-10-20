import type { Metadata } from 'next';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import RecognitionList from '../components/RecognitionList';
import { recognition } from '../lib/content';

export const metadata: Metadata = {
  title: 'Recognition',
  description: 'Competition results, hackathon rankings and certificates earned by Jeremy Nduati.',
  alternates: { canonical: '/certificates' },
};

export default function Certificates() {
  return (
    <>
      <PageHead
        eyebrow="Recognition"
        title={
          <>
            Results, rankings
            <br />
            <span className="italic text-ink-3">and receipts.</span>
          </>
        }
        intro="Every claim on this site has a certificate behind it. Open any of them below."
      />
      <section className="wrap pb-24 sm:pb-32">
        <Reveal>
          <RecognitionList items={recognition} />
        </Reveal>
      </section>
    </>
  );
}
