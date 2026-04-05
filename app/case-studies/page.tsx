'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function CaseStudies() {
  const caseStudies = [
    {
      name: 'Fiscal Intelligence Dashboard',
      summary: 'ML analytics platform for African sovereign debt — ranked #50 / 1,995 globally.',
      role: 'Data Scientist & ML Engineer',
      timeline: 'Hackathon',
      stack: 'Python, Plotly, ML',
      challenge:
        'Create an intuitive platform enabling policymakers to understand fiscal risks and predict outcomes using complex financial datasets. Compete against 1,995 participants.',
      solution: [
        'Developed advanced ML models for risk scoring and scenario analysis.',
        'Built interactive dashboard with real-time filtering and dynamic visualizations.',
        'Implemented policy impact estimation system with potential annual savings.',
      ],
      metrics: [
        { label: 'Ranking', value: '#50 / 1,995' },
        { label: 'Countries', value: '10+' },
        { label: 'Charts', value: '4' },
      ],
    },
    {
      name: 'EventVerse',
      summary: 'Digitized the entire event lifecycle — dual payments, QR ticketing, live ops dashboard.',
      role: 'Lead Full-Stack Engineer',
      timeline: '12 weeks',
      stack: 'Next.js, Prisma, Stripe',
      challenge:
        'Create a unified experience for hybrid events with real-time ticketing, universal payments, and on-site verification.',
      solution: [
        'Dual payment architecture with webhook-based reconciliation.',
        'Scanner-first PWA that caches QR codes offline.',
        'Live ops dashboard showing ticket sales and attendee flow.',
      ],
      metrics: [
        { label: 'Payment success', value: '+38%' },
        { label: 'Check-in time', value: '-65%' },
        { label: 'Support tickets', value: '-45%' },
      ],
    },
    {
      name: 'ShopStar',
      summary: 'Scaled a founder\'s MVP into an enterprise retail platform handling flash sales and fulfillment.',
      role: 'Full-Stack Engineer',
      timeline: '10 weeks',
      stack: 'Next.js, Node, MongoDB',
      challenge:
        'Replace fragmented tooling (Google Sheets + WhatsApp orders) with a single source of truth.',
      solution: [
        'Implemented inventory ledger with low-stock automations.',
        'Role-based admin portal with cohort analytics and AOV tracking.',
        'Transactional comms covering the full order lifecycle.',
      ],
      metrics: [
        { label: 'Conversion', value: '+27%' },
        { label: 'Fulfillment', value: '2x faster' },
        { label: 'Refund rate', value: '-18%' },
      ],
    },
    {
      name: 'Fashion Fit',
      summary: 'AI-powered styling assistant with computer vision — 95% cost reduction vs cloud APIs.',
      role: 'AI Engineer & Designer',
      timeline: '14 weeks',
      stack: 'React Native, OpenAI',
      challenge:
        'Provide real-time item detection and styling tips without relying on expensive third-party APIs for every image.',
      solution: [
        'Hybrid CV pipeline: local parsing for color + silhouette, optional GPT-4 for semantic tagging.',
        'Wardrobe intelligence layer learning per-user preferences and seasonal constraints.',
        '14 custom fashion intelligence algorithms for outfit scoring.',
      ],
      metrics: [
        { label: 'Cost saved', value: '95%' },
        { label: 'Accuracy', value: '88%+' },
        { label: 'Algorithms', value: '14' },
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation activePage="case-studies" />

      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="section-label">Deep Dive</span>
            <h1 className="section-title">Case Studies</h1>
            <p className="text-carbon-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              How each project evolved from problem to measurable outcome.
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                {/* Header */}
                <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                  <div>
                    <span className="text-[10px] text-sand-500 uppercase tracking-[0.2em] font-semibold">
                      {study.name}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 mb-2 leading-snug">{study.summary}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { label: 'Role', value: study.role },
                      { label: 'Timeline', value: study.timeline },
                      { label: 'Stack', value: study.stack },
                    ].map((m) => (
                      <div key={m.label} className="bg-carbon-800/50 border border-carbon-700/40 rounded-lg p-2 sm:p-3">
                        <p className="text-[9px] sm:text-[10px] text-carbon-500 uppercase tracking-wider mb-0.5 sm:mb-1">{m.label}</p>
                        <p className="text-[11px] sm:text-xs text-carbon-200 leading-snug">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge + Approach */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6 sm:mb-8">
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold text-sand-500 uppercase tracking-wider mb-2 sm:mb-3">Challenge</h4>
                    <p className="text-carbon-300 text-xs sm:text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold text-sand-500 uppercase tracking-wider mb-2 sm:mb-3">Approach</h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {study.solution.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-carbon-300 text-xs sm:text-sm">
                          <span className="text-sand-500 mt-0.5 shrink-0">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-carbon-800/30 border border-carbon-700/40 rounded-lg p-4 sm:p-5">
                  <h4 className="text-[10px] sm:text-xs font-semibold text-sand-500 uppercase tracking-wider mb-3 sm:mb-4">Impact</h4>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="text-base sm:text-lg font-bold text-white">{m.value}</p>
                        <p className="text-[9px] sm:text-[10px] text-carbon-500 uppercase tracking-wider mt-0.5 sm:mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/contact" className="btn-primary gap-2">
              Start a project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}
