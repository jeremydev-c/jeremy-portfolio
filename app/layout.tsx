import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import StructuredData from './components/StructuredData';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import MotionProvider from './components/MotionProvider';
import { site } from './lib/content';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

const description =
  'Jeremy Nduati is a 16-year-old full-stack developer and designer from Kenya, building secure, production-grade products: payments, applied AI and E-ELECTIONS, a tamper-evident digital voting system.';

export const metadata: Metadata = {
  title: {
    default: 'Jeremy Nduati — Full-stack developer & designer',
    template: '%s — Jeremy Nduati',
  },
  description,
  keywords: [
    'Jeremy Nduati',
    'full-stack developer Kenya',
    'Next.js developer',
    'UI/UX designer',
    'M-Pesa integration',
    'Paystack',
    'E-ELECTIONS',
    'digital voting Kenya',
    'portfolio',
  ],
  authors: [{ name: 'Jeremy Nduati' }],
  creator: 'Jeremy Nduati',
  metadataBase: new URL(site.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: 'Jeremy Nduati',
    title: 'Jeremy Nduati — Full-stack developer & designer',
    description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jeremy Nduati' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremy Nduati — Full-stack developer & designer',
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3efe6' },
    { media: '(prefers-color-scheme: dark)', color: '#12110e' },
  ],
};

// Runs before paint so a saved light/dark choice never flashes the wrong theme.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <StructuredData />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
