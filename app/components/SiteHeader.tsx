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
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper">
        <div className="wrap flex h-14 items-center justify-between gap-6 sm:h-16">
          <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
            <span className="grid h-9 w-9 place-items-center bg-ink font-display text-[17px] leading-none tracking-[-0.06em] text-paper transition-colors group-hover:bg-cobalt group-hover:text-bone">
              JN
            </span>
            <span className="font-display text-[19px] uppercase leading-none tracking-[-0.04em]">Jeremy Nduati</span>
          </Link>

          <nav aria-label="Main" className="hidden h-full items-stretch lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`flex items-center border-l-2 border-ink px-5 font-mono text-[12px] font-bold uppercase tracking-[0.08em] transition-colors last:border-r-2 ${
                  isActive(item.href) ? 'bg-ink text-paper' : 'hover:bg-cobalt hover:text-bone'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link href="/contact" className="btn-ink hidden !py-2 sm:inline-flex">
              <span className="h-2 w-2 bg-moss" />
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
              className="grid h-9 place-items-center border-2 border-ink px-3 font-mono text-[11px] font-bold uppercase tracking-[0.08em] lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col bg-cobalt pt-20 text-bone lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile" className="wrap flex flex-1 flex-col">
              {[{ href: '/', label: 'Home' }, ...nav, { href: '/contact', label: 'Contact' }].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b-2 border-bone py-3"
                  >
                    <span className="font-display text-[44px] uppercase leading-none tracking-[-0.05em]">{item.label}</span>
                    <span className="font-mono text-[12px] font-bold">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto flex items-center justify-between py-6 font-mono text-[11px] font-bold uppercase tracking-[0.08em]">
                <a href={`mailto:${site.email}`} className="underline underline-offset-4 normal-case tracking-normal">
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
