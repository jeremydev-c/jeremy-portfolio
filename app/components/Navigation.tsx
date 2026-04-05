'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  activePage?: string;
}

export default function Navigation({ activePage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/fashion-fit', label: 'Fashion Fit', id: 'fashion-fit' },
    { href: '/projects', label: 'Projects', id: 'projects' },
    { href: '/case-studies', label: 'Cases', id: 'case-studies' },
    { href: '/certificates', label: 'Certs', id: 'certificates' },
    { href: '/skills', label: 'Skills', id: 'skills' },
    { href: '/testimonials', label: 'Reviews', id: 'testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-2xl transition-all duration-500 ease-out border backdrop-blur-2xl"
        style={{
          background: scrolled ? 'var(--glass)' : 'var(--glass-light)',
          borderColor: scrolled ? 'var(--glass-border-hover)' : 'var(--glass-border)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center px-3 py-1.5 shrink-0">
          <span className="text-sm font-bold tracking-tight" style={{ color: 'var(--text-strong)' }}>JN</span>
          <span className="hidden xl:inline text-[11px] ml-2 tracking-wide" style={{ color: 'var(--text-faint)' }}>
            Jeremy Nduati
          </span>
        </Link>

        {/* Divider */}
        <div className="hidden md:block w-px h-5" style={{ background: 'var(--glass-border)' }} />

        {/* Links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className="relative px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-200"
                style={{ color: isActive ? 'var(--text-strong)' : 'var(--text-muted)' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'var(--nav-active-bg)',
                      border: '1px solid var(--nav-active-border)',
                    }}
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-5" style={{ background: 'var(--glass-border)' }} />

        {/* Theme Toggle */}
        <ThemeToggle className="hidden md:inline-flex hover:opacity-80" />

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center h-8 px-4 rounded-xl text-[11px] font-semibold tracking-widest uppercase transition-all duration-200 active:scale-[0.97]"
          style={{
            background: activePage === 'contact' ? 'var(--accent)' : 'var(--hire-bg)',
            color: activePage === 'contact' ? '#fff' : 'var(--hire-text)',
          }}
          aria-label="Hire me / Contact"
        >
          Hire Me
        </Link>

        <MobileNav />
      </div>
    </motion.nav>
  );
}
