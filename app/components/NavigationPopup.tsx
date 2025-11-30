'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Different messages for different pages
  const pageMessages: Record<string, { title: string; message: string; cta: string; link: string }> = {
    '/projects': {
      title: '🚀 Ready to Build Something Amazing?',
      message: 'I\'ve built 4+ production apps with real-world impact. Let\'s discuss how I can bring your vision to life with cutting-edge technology and proven expertise.',
      cta: 'Let\'s Talk',
      link: '/contact'
    },
    '/skills': {
      title: '💼 Looking for Top-Tier Talent?',
      message: 'Full-stack expertise, 8+ certifications, and ranked #50 in a global hackathon. I combine technical mastery with creative problem-solving to deliver exceptional results.',
      cta: 'Hire Me',
      link: '/contact'
    },
    '/certificates': {
      title: '🏆 Verified Excellence',
      message: 'My certifications from Coursera, FreeCodeCamp, and Forage prove my commitment to continuous learning. Ready to bring this expertise to your project?',
      cta: 'Start a Project',
      link: '/contact'
    },
    '/testimonials': {
      title: '⭐ Trusted by Clients',
      message: 'Don\'t just take my word for it—see what clients say about working with me. Ready to be the next success story?',
      cta: 'Get Started',
      link: '/contact'
    },
    '/contact': {
      title: '✨ Let\'s Create Something Great Together',
      message: 'I respond within 24 hours and bring 4+ years of experience building production-ready applications. Your project deserves the best.',
      cta: 'View My Work',
      link: '/projects'
    }
  };

  useEffect(() => {
    // Reset visibility when pathname changes
    setIsVisible(false);
    
    // Show popup after 2 seconds on page load for supported pages
    if (pathname !== '/' && pageMessages[pathname]) {
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(showTimer);
    }
  }, [pathname]);

  // Auto-dismiss timer when popup becomes visible
  useEffect(() => {
    if (isVisible) {
      const autoHideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4000); // 4 seconds

      return () => clearTimeout(autoHideTimer);
    }
  }, [isVisible]);

  const currentMessage = pageMessages[pathname || ''];

  if (!currentMessage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-20 right-4 md:right-8 z-[100] w-full max-w-sm mx-4 pointer-events-none"
        >
          <div className="glass-effect-strong rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-4 md:p-5 relative overflow-hidden pointer-events-auto">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-pulse"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon and Title Row */}
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gradient mb-1">
                    {currentMessage.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {currentMessage.message}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-3">
                <Link
                  href={currentMessage.link}
                  onClick={() => setIsVisible(false)}
                  className="btn-primary w-full text-sm py-2 text-center flex items-center justify-center gap-2 pointer-events-auto"
                >
                  {currentMessage.cta}
                  <Sparkles className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

