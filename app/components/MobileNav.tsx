'use client';

import { useEffect, useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/skills', label: 'Skills' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);

    // Prevent background scroll when menu is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 hover:text-white hover:bg-white/10 transition-colors relative"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-purple-500/20 z-50 md:hidden shadow-2xl"
              id={menuId}
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-lg transition-all border-b border-gray-800/50 hover:pl-4 group ${
                        // Highlight current page (treat "/#about" as home)
                        (link.href === '/#about' ? pathname === '/' : pathname === link.href)
                          ? 'text-purple-300'
                          : 'text-gray-300 hover:text-purple-400'
                      }`}
                    >
                      <span className="group-hover:opacity-100 opacity-0 inline-block mr-2 transition-opacity">→</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-auto pb-8 pt-6 space-y-3">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center block"
                    aria-label="Hire me"
                  >
                    Hire Me
                  </Link>
                  <Link
                    href="/projects"
                    onClick={() => setIsOpen(false)}
                    className="btn-secondary w-full text-center block"
                    aria-label="View projects"
                  >
                    View Projects
                  </Link>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Fast replies • Production-ready work • Clean UI/UX
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

