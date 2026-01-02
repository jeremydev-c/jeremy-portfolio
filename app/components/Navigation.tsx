'use client';

import Link from 'next/link';
import MobileNav from './MobileNav';

interface NavigationProps {
  activePage?: string;
}

export default function Navigation({ activePage }: NavigationProps) {
  const navLinks = [
    { href: '/#about', label: 'About', id: 'about' },
    { href: '/projects', label: 'Projects', id: 'projects' },
    { href: '/case-studies', label: 'Case Studies', id: 'case-studies' },
    { href: '/certificates', label: 'Certificates', id: 'certificates' },
    { href: '/skills', label: 'Skills', id: 'skills' },
    { href: '/testimonials', label: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/10 bg-gray-900/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 min-h-0">
          <span className="text-xl sm:text-2xl font-bold text-gradient leading-none">
            Jeremy Nduati
          </span>
          <span className="hidden lg:inline text-xs text-gray-400 leading-none">
            Full-Stack • UI/UX • Payments
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`nav-link ${
                activePage === link.id
                  ? 'bg-purple-500/15 text-purple-200 border border-purple-500/30 shadow-[0_0_0_3px_rgba(168,85,247,0.08)]'
                  : 'border border-transparent'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className={`ml-2 inline-flex items-center justify-center h-10 px-5 rounded-xl font-semibold text-sm text-white
              bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600
              shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02]
              transition-all active:scale-[0.98]
              ${activePage === 'contact' ? 'ring-2 ring-purple-400/40' : ''}`}
            aria-label="Hire me / Contact"
          >
            Hire Me
          </Link>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}

