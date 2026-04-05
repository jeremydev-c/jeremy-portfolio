'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const pageMessages: Record<string, { title: string; message: string; cta: string; link: string }> = {
    '/projects': {
      title: 'Ready to build?',
      message: "I've shipped 4+ production apps. Let's discuss your project.",
      cta: "Let's Talk",
      link: '/contact',
    },
    '/skills': {
      title: 'Looking for talent?',
      message: 'Full-stack expertise with 8+ certifications and global recognition.',
      cta: 'Hire Me',
      link: '/contact',
    },
    '/certificates': {
      title: 'Verified skills',
      message: 'Continuous learning backed by industry certifications.',
      cta: 'Start a Project',
      link: '/contact',
    },
    '/testimonials': {
      title: 'Trusted by clients',
      message: 'Ready to be the next success story?',
      cta: 'Get Started',
      link: '/contact',
    },
    '/contact': {
      title: "Let's create together",
      message: '24-hour response time. Production-ready results.',
      cta: 'View My Work',
      link: '/projects',
    },
  };

  useEffect(() => {
    setIsVisible(false);

    if (pathname !== '/' && pageMessages[pathname]) {
      const showTimer = setTimeout(() => setIsVisible(true), 2500);
      return () => clearTimeout(showTimer);
    }
  }, [pathname]);

  useEffect(() => {
    if (isVisible) {
      const autoHide = setTimeout(() => setIsVisible(false), 4500);
      return () => clearTimeout(autoHide);
    }
  }, [isVisible]);

  const msg = pageMessages[pathname || ''];
  if (!msg) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ type: 'spring', damping: 24, stiffness: 260 }}
          className="fixed top-24 right-4 md:right-8 z-40 w-full max-w-xs pointer-events-none"
        >
          <div
            className="rounded-lg p-4 shadow-xl pointer-events-auto relative"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 transition-colors"
              style={{ color: 'var(--text-faint)' }}
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-strong)' }}>{msg.title}</h3>
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{msg.message}</p>
            <Link
              href={msg.link}
              onClick={() => setIsVisible(false)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors tracking-wide uppercase"
              style={{ color: 'var(--accent)' }}
            >
              {msg.cta} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
