'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <a href="#main-heading" className="skip-to-main">
        Skip to main content
      </a>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 relative" aria-label="Hero section">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-sand-500/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Photo */}
            <motion.div
              className="lg:col-span-4 flex justify-center lg:justify-end order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-[200px] sm:w-[260px] md:w-[300px]">
                <div className="relative rounded-2xl overflow-hidden border border-carbon-700/40">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/me.jpeg"
                      alt="Jeremy Nduati"
                      fill
                      priority
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 300px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex gap-1.5 sm:gap-2">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[10px] bg-carbon-950/70 border border-carbon-700/40 text-carbon-200 backdrop-blur-sm tracking-wider uppercase">
                      Available
                    </span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[10px] bg-carbon-950/70 border border-carbon-700/40 text-carbon-200 backdrop-blur-sm tracking-wider uppercase">
                      24h reply
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div className="lg:col-span-8 text-center lg:text-left">
              <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Full-Stack Developer & Designer
              </motion.span>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white tracking-tight leading-[1.1] text-balance"
                id="main-heading"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                I build web apps that
                <span className="text-sand-400"> ship and scale</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-carbon-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                15-year-old developer building production-grade applications with
                Next.js, TypeScript, payment integrations, and AI. Ranked{' '}
                <span className="text-white font-medium">#50 out of 1,995</span> globally.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-10"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Link href="/contact" className="btn-primary gap-2">
                  Work with me <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View Projects
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0 pt-6 sm:pt-8 border-t border-carbon-800/60"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                {[
                  { value: '4+', label: 'Production Apps' },
                  { value: '#50', label: 'Global Rank' },
                  { value: '3rd', label: 'County Winner' },
                  { value: '8+', label: 'Certificates' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-carbon-400 mt-1 tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured: Fashion Fit */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/fashion-fit" className="group block">
              <div className="card sm:p-8 md:p-10 border-sand-500/10 hover:border-sand-500/30 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-carbon-700/40 shrink-0">
                    <Image
                      src="/fashion-fit-icon.jpeg"
                      alt="Fashion Fit"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] text-sand-500 uppercase tracking-[0.2em] font-semibold">Featured Project</span>
                      <span className="px-2 py-0.5 rounded text-[9px] bg-sand-500/10 border border-sand-500/20 text-sand-400 uppercase tracking-wider font-semibold">
                        YSK 2026
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-sand-300 transition-colors">
                      Fashion Fit — AI-Powered Wardrobe Management
                    </h3>
                    <p className="text-carbon-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                      14 fashion intelligence algorithms, computer vision capture, real-time weather styling,
                      AI style coach, and a learning engine — built at 15 for Young Scientist Kenya 2026.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-carbon-600 group-hover:text-sand-400 transition-colors shrink-0 hidden lg:block" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-carbon-800/60" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-20"
          >
            <span className="section-label">About</span>
            <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl">
              I care about outcomes{' '}
              <span className="text-sand-400">and craft.</span>
            </h2>
            <p className="text-carbon-300 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-2xl">
              I design clean experiences, then engineer them with security, scalability,
              and real users in mind. My edge is simple: idea to design to code without
              losing quality — faster delivery, fewer mistakes, pixel-perfect execution.
            </p>
          </motion.div>

          {/* Key numbers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-carbon-700/30 rounded-lg overflow-hidden mb-12 sm:mb-20"
          >
            {[
              { value: '#50', sub: 'of 1,995', label: 'Global Hackathon Rank' },
              { value: '95%', sub: '', label: 'AI Cost Reduction' },
              { value: '4+', sub: '', label: 'Production Apps Shipped' },
              { value: '3rd', sub: 'place', label: 'County Science Fair' },
            ].map((stat) => (
              <div key={stat.label} className="bg-carbon-900 p-4 sm:p-6 md:p-8 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-none">
                  {stat.value}
                  {stat.sub && <span className="text-xs sm:text-sm font-normal text-carbon-500 ml-1">{stat.sub}</span>}
                </div>
                <div className="text-[10px] sm:text-[11px] text-carbon-500 mt-1.5 sm:mt-2 uppercase tracking-wider leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* What I bring */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-20"
          >
            <h3 className="text-sm font-semibold text-sand-500 uppercase tracking-[0.2em] mb-6 sm:mb-8">What I bring</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-8">
              {[
                { title: 'End-to-end delivery', desc: 'Design, frontend, backend, payments, deployment — one person, zero handoff gaps.' },
                { title: 'Production standards', desc: 'Auth, validation, error handling, and security baked in from day one.' },
                { title: 'AI-accelerated workflow', desc: 'I use AI tools to move faster without cutting quality or shipping sloppy code.' },
                { title: 'Real business impact', desc: 'Every project is built for measurable results — conversion, cost, speed, reliability.' },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-carbon-800 pl-4 sm:pl-5 hover:border-sand-500/50 transition-colors">
                  <h4 className="text-white font-semibold text-sm sm:text-[15px] mb-1 sm:mb-1.5">{item.title}</h4>
                  <p className="text-carbon-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Toolbelt */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-sand-500 uppercase tracking-[0.2em] mb-4 sm:mb-5">Toolbelt</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                'Next.js', 'TypeScript', 'React', 'React Native', 'Node.js', 'Express',
                'MongoDB', 'Prisma', 'Stripe', 'M-Pesa', 'Paystack', 'OpenAI',
                'Tailwind', 'Framer Motion', 'Expo', 'Python', 'Figma', 'Git',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded text-[11px] sm:text-xs bg-carbon-900 border border-carbon-800 text-carbon-400 hover:text-white hover:border-carbon-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Links */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="section-label">Explore</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">Dive deeper</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { href: '/projects', label: 'Projects', desc: 'Featured production work', num: '01' },
              { href: '/case-studies', label: 'Case Studies', desc: 'Deep dive into outcomes', num: '02' },
              { href: '/certificates', label: 'Certificates', desc: 'Verified achievements', num: '03' },
              { href: '/skills', label: 'Skills', desc: 'Technical expertise', num: '04' },
              { href: '/testimonials', label: 'Testimonials', desc: 'What clients say', num: '05' },
              { href: '/contact', label: 'Contact', desc: 'Start a conversation', num: '06' },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className="card group flex items-start justify-between hover:border-sand-500/30"
                >
                  <div>
                    <span className="text-[10px] text-carbon-500 font-mono tracking-wider">{item.num}</span>
                    <h3 className="text-base sm:text-lg font-semibold text-white mt-1 group-hover:text-sand-300 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-carbon-400 text-xs sm:text-sm mt-1">{item.desc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-carbon-600 group-hover:text-sand-400 transition-colors shrink-0 mt-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="section-label">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 sm:mb-4">
              What people say
            </h2>
            <p className="text-carbon-400 max-w-lg mx-auto text-sm sm:text-base">
              Feedback from clients and collaborators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {[
              {
                quote: 'Jeremy delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and production-ready implementation saved us months.',
                author: 'Sarah Mitchell',
                role: 'E-Commerce Director',
              },
              {
                quote: 'The custom AI system he built reduced our operational costs by 95% while maintaining excellent accuracy. A game-changer for our business.',
                author: 'David Chen',
                role: 'CTO, Tech Innovations',
              },
              {
                quote: 'Ranked #50 out of 1,995 participants. Demonstrates exceptional data science and ML engineering skills with sophisticated analytics platforms.',
                author: '10Alytics Hackathon',
                role: 'Global Data Hackathon 2025',
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="card"
              >
                <p className="text-carbon-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-sand-500/15 border border-sand-500/20 flex items-center justify-center text-sand-400 text-[10px] sm:text-xs font-bold shrink-0">
                    {t.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-xs sm:text-sm font-medium truncate">{t.author}</div>
                    <div className="text-carbon-500 text-[10px] sm:text-xs truncate">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials" className="btn-secondary gap-2">
              All Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-carbon-800/60">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Let&apos;s work together</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-6 text-balance">
              Ready to build something real?
            </h2>
            <p className="text-base sm:text-lg text-carbon-300 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              From concept to deployment, I ship fast, communicate clearly, and build things that last.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/contact" className="btn-primary gap-2">
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="btn-secondary">
                See my work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-carbon-800/60 text-carbon-500 py-10 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">Jeremy Nduati</h3>
              <p className="text-xs sm:text-sm leading-relaxed">
                Full-Stack Developer &amp; Designer building production-ready web applications.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">Pages</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/#about" className="hover:text-sand-400 transition-colors">About</Link></li>
                <li><Link href="/projects" className="hover:text-sand-400 transition-colors">Projects</Link></li>
                <li><Link href="/skills" className="hover:text-sand-400 transition-colors">Skills</Link></li>
                <li><Link href="/contact" className="hover:text-sand-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/jeremydev-c" target="_blank" rel="noopener noreferrer" className="hover:text-sand-400 transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/jeremydev-c" target="_blank" rel="noopener noreferrer" className="hover:text-sand-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:nduatijeremy7@gmail.com" className="hover:text-sand-400 transition-colors" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-carbon-800/60 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Jeremy Nduati</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
