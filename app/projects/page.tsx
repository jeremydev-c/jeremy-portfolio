'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Projects() {
  const projects = [
    {
      name: 'Fiscal Intelligence Dashboard',
      tagline: '10Alytics Hackathon 2025 — ML Analytics Platform',
      description:
        'Data visualization and analytics platform for African sovereign debt analysis. Advanced ML models for risk scoring, scenario analysis, and policy impact estimates. Ranked #50 out of 1,995 participants.',
      tech: ['Python', 'Plotly', 'Machine Learning', 'Data Analysis', 'HTML5', 'JavaScript', 'Netlify'],
      features: [
        'Advanced ML models for risk scoring',
        'Interactive country/region filtering',
        'Real-time policy impact estimates',
        'Critical fiscal warnings system',
      ],
      liveUrl: 'https://moonlit-starlight-601077.netlify.app',
      githubUrl: '#',
      badge: 'Top 50 / 1,995',
    },
    {
      name: 'EventVerse',
      tagline: 'Full-Stack Event Management Platform',
      description:
        'Event management with dual payment gateways (Stripe & M-Pesa), QR code ticketing, real-time attendance tracking, and role-based dashboards.',
      tech: ['Next.js 14', 'TypeScript', 'MongoDB', 'Prisma', 'Stripe', 'M-Pesa', 'QR Codes'],
      features: [
        'Dual payment integration (Stripe + M-Pesa)',
        'QR code generation & scanning',
        'Real-time payment status polling',
        'Role-based dashboards',
      ],
      liveUrl: 'https://eventverse-mu.vercel.app',
      githubUrl: 'https://github.com/jeremydev-c/eventverse',
    },
    {
      name: 'ShopStar',
      tagline: 'Enterprise E-Commerce Platform',
      description:
        'Full-stack e-commerce with Stripe payments, inventory management, admin dashboard, and comprehensive order processing.',
      tech: ['Next.js 16', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Resend'],
      features: [
        'Secure payment processing (Stripe)',
        'Real-time inventory management',
        'Admin dashboard with analytics',
        'Order tracking & email notifications',
      ],
      liveUrl: 'https://shopstar-psi.vercel.app',
      githubUrl: 'https://github.com/jeremydev-c/shopstar',
    },
    {
      name: 'Fashion Fit',
      tagline: 'AI-Powered Personal Styling Assistant',
      description:
        'Fashion recommendation platform using custom computer vision AI to analyze clothing and suggest outfit combinations. 95% cost reduction with hybrid AI architecture.',
      tech: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'OpenAI', 'Cloudinary', 'Paystack'],
      features: [
        'Custom computer vision AI (95% cost cut)',
        'AI-powered outfit recommendations',
        'Smart wardrobe management',
        '14 fashion intelligence algorithms',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/jeremydev-c/fashion-fit',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation activePage="projects" />

      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="section-label">Featured Work</span>
            <h1 className="section-title">Projects</h1>
            <p className="text-carbon-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Production applications built with modern technologies, real payment integrations, and AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sand-400 transition-colors truncate">
                        {project.name}
                      </h3>
                      <p className="text-sand-500 text-xs sm:text-sm mt-1">{project.tagline}</p>
                    </div>
                    {project.badge && (
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[10px] bg-sand-500/10 border border-sand-500/20 text-sand-400 uppercase tracking-wider font-semibold whitespace-nowrap shrink-0">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-carbon-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{project.description}</p>

                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-carbon-400 text-xs sm:text-sm">
                        <span className="text-sand-500 mt-0.5 shrink-0">+</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-carbon-800/60 border border-carbon-700/40 text-carbon-300 rounded text-[10px] sm:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary gap-2 text-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary gap-2 text-xs"
                      >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-16 text-center"
          >
            <Link href="/contact" className="btn-primary gap-2">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}
