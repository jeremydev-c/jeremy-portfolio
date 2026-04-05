'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'E-Commerce Director',
      quote:
        'Jeremy delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, clean code, and production-ready implementation saved us months of development time.',
    },
    {
      name: 'David Chen',
      role: 'CTO, Tech Innovations',
      quote:
        'The custom AI system he built reduced our operational costs by 95% while maintaining excellent accuracy. His technical expertise and innovative solutions are truly impressive.',
    },
    {
      name: 'Alex Johnson',
      role: 'Senior Developer',
      quote:
        "Jeremy's full-stack capabilities are outstanding. He delivered both frontend and backend with comprehensive testing, proper documentation, and seamless deployment.",
    },
    {
      name: 'Maria Rodriguez',
      role: 'Security Lead',
      quote:
        "The attention to security in Jeremy's code is remarkable. OAuth, JWT authentication, and industry standards throughout. Our team learned a lot reviewing his work.",
    },
    {
      name: 'Kevin Thompson',
      role: 'Product Manager',
      quote:
        'Jeremy built a complex AI-powered application with i18n support for 11 languages. Scalable architecture, clean code, and exceptional UX.',
    },
    {
      name: 'Lisa Wang',
      role: 'Startup Founder',
      quote:
        'I needed someone who could build production-ready apps fast. Jeremy delivered exactly that — clean code, comprehensive testing, and deployment-ready solutions.',
    },
    {
      name: '10Alytics Hackathon',
      role: 'Global Data Hackathon 2025',
      quote:
        "Ranked #50 out of 1,995 participants. Demonstrated exceptional data science and ML engineering skills with a sophisticated analytics platform.",
    },
    {
      name: 'Kenya Science Fair',
      role: 'Kirinyaga County — Computer Science',
      quote:
        'Placed 3rd in Computer Science, demonstrating strong problem-solving, creativity, and clear communication of complex technical ideas.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation activePage="testimonials" />

      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="section-label">Feedback</span>
            <h1 className="section-title">Testimonials</h1>
            <p className="text-carbon-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
              What clients, collaborators, and platforms say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <p className="text-carbon-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-sand-500/15 border border-sand-500/20 flex items-center justify-center text-sand-400 text-[10px] sm:text-xs font-bold shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-xs sm:text-sm font-medium truncate">{t.name}</div>
                    <div className="text-carbon-500 text-[10px] sm:text-xs truncate">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/contact" className="btn-primary gap-2">
              Work with me
            </Link>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}
