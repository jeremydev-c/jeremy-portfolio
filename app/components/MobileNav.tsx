'use client';

import { useEffect, useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  const navLinks = [
    { href: '/', label: 'Home', num: '01' },
    { href: '/fashion-fit', label: 'Fashion Fit', num: '02' },
    { href: '/projects', label: 'Projects', num: '03' },
    { href: '/case-studies', label: 'Case Studies', num: '04' },
    { href: '/certificates', label: 'Certificates', num: '05' },
    { href: '/skills', label: 'Skills', num: '06' },
    { href: '/testimonials', label: 'Testimonials', num: '07' },
    { href: '/contact', label: 'Contact', num: '08' },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden h-8 w-8 inline-flex items-center justify-center rounded-xl transition-colors"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] md:hidden"
            id={menuId}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{ background: 'var(--mobile-bg)' }}
            />

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-10 h-10 w-10 flex items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: 'var(--glass-border)', color: 'var(--text-muted)' }}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="relative z-10 h-full flex flex-col justify-between px-8 py-20">
              <nav className="flex-1 flex flex-col justify-center">
                {navLinks.map((link, index) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.04, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-3 border-b transition-colors duration-200"
                        style={{
                          borderColor: 'var(--glass-border)',
                          color: isActive ? 'var(--text-strong)' : 'var(--text-faint)',
                        }}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-[10px] font-mono tabular-nums" style={{ color: 'var(--text-faint)' }}>{link.num}</span>
                          <span className="text-2xl sm:text-3xl font-light tracking-tight">{link.label}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <p className="text-[11px] tracking-wide" style={{ color: 'var(--text-faint)' }}>
                    &copy; {new Date().getFullYear()} Jeremy Nduati
                  </p>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-widest uppercase transition-colors"
                  style={{ background: 'var(--hire-bg)', color: 'var(--hire-text)' }}
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
