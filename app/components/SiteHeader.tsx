'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { site } from '../lib/content';

const nav = [
  { href: '/work', label: 'Work' },
  { href: '/work/e-elections', label: 'E-Elections' },
  { href: '/about', label: 'About' },
  { href: '/certificates', label: 'Recognition' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the mobile menu after navigating.
  if (open && openedAt !== pathname) {
    setOpen(false);
    setOpenedAt(pathname);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === '/work' ? pathname === '/work' || pathname === '/work/fashion-fit' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? 'border-b border-rule bg-paper/85 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6 sm:h-[72px]">
          <Link href="/" className="group flex items-baseline gap-2.5" aria-label={`${site.name}, home`}>
            <span className="font-serif text-[23px] leading-none tracking-[-0.01em]">
              Jeremy Nduati
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3 md:inline">
              Dev &amp; Design
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`link-draw text-[14px] transition-colors ${
                  isActive(item.href) ? 'text-ink' : 'text-ink-2 hover:text-ink'
                }`}
                style={isActive(item.href) ? { backgroundSize: '100% 1px' } : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link href="/contact" className="btn-ink hidden !py-2.5 sm:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
              </span>
              Start a project
            </Link>
            <button
              type="button"
              onClick={() => {
                setOpen((v) => !v);
                setOpenedAt(pathname);
              }}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-9 place-items-center rounded-full border border-ink/15 px-4 font-mono text-[11px] uppercase tracking-[0.14em] lg:hidden"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-paper pt-24 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile" className="wrap flex flex-1 flex-col">
              {[{ href: '/', label: 'Home' }, ...nav, { href: '/contact', label: 'Contact' }].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-rule py-4"
                  >
                    <span className="font-serif text-[40px] leading-none">{item.label}</span>
                    <span className="font-mono text-[11px] text-ink-3">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto flex items-center justify-between py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                <a href={`mailto:${site.email}`} className="link-under normal-case tracking-normal">
                  {site.email}
                </a>
                <span>Kenya</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
