'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navigation activePage="contact" />

      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="section-label">Get in touch</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
              Let&apos;s build something together
            </h1>
            <p className="text-carbon-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              I respond within 24 hours. Whether you need a full-stack app, UI/UX design, or AI-powered solutions — let&apos;s talk.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mb-8 sm:mb-12"
          >
            <a
              href="mailto:nduatijeremy7@gmail.com"
              className="btn-primary gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://github.com/jeremydev-c"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeremydev-c"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {[
              { title: 'Full-Stack Development', desc: 'Complete web & mobile applications' },
              { title: 'UI/UX Design', desc: 'Clean, user-centered interfaces' },
              { title: 'Payment Integration', desc: 'Stripe, M-Pesa, Paystack' },
            ].map((s) => (
              <div key={s.title} className="card text-center">
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-1">{s.title}</h3>
                <p className="text-carbon-400 text-[10px] sm:text-xs">{s.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}
