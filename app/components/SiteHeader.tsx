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
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the mobile menu after navigating.
  if (open && openedAt !== pathname) {
    setOpen(false);
    setOpenedAt(pathname);
  }

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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-rule/80 bg-paper/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="wrap flex h-14 items-center justify-between gap-6">
          <Link href="/" className="flex items-baseline gap-2" aria-label={`${site.name}, home`}>
            <span className="font-display text-[17px] tracking-[-0.02em]">Jeremy Nduati</span>
            <span className="hidden font-mono text-[10.5px] text-ink-3 sm:inline">Nanyuki, KE</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`relative text-[14px] transition-colors ${
                  isActive(item.href) ? 'text-ink' : 'text-ink-3 hover:text-ink'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span aria-hidden className="absolute -bottom-[19px] left-0 right-0 h-[2px] bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn-ink hidden !h-9 !px-4 !text-[13.5px] sm:inline-flex">
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
              className="grid h-9 place-items-center rounded-[8px] border border-ink/15 px-3 text-[13px] lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col bg-paper pt-20 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile" className="wrap flex flex-1 flex-col">
              {[{ href: '/', label: 'Home' }, ...nav, { href: '/contact', label: 'Contact' }].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + i * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-rule py-4"
                  >
                    <span className="font-display text-[34px] leading-none tracking-[-0.035em]">{item.label}</span>
                    <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, '0')}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto flex items-center justify-between py-6 text-[14px] text-ink-3">
                <a href={`mailto:${site.email}`} className="link-under text-ink">
                  {site.email}
                </a>
                <span>{site.location}</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
