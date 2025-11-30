import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import StructuredData from "./components/StructuredData";
import NavigationPopup from "./components/NavigationPopup";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Jeremy Nduati - Full-Stack Developer & UI/UX Designer",
    template: "%s | Jeremy Nduati",
  },
  description: "15-year-old full-stack developer and UI/UX designer building enterprise-grade applications. Specializing in Next.js, TypeScript, payment integrations (Stripe & M-Pesa), AI/ML solutions, and production-ready deployments.",
  keywords: [
    "full-stack developer",
    "UI/UX designer",
    "Next.js developer",
    "TypeScript",
    "web developer",
    "payment integration",
    "Stripe",
    "M-Pesa",
    "AI engineer",
    "portfolio",
    "Jeremy Nduati",
    "production-ready applications",
  ],
  authors: [{ name: "Jeremy Nduati" }],
  creator: "Jeremy Nduati",
  metadataBase: new URL("https://modenova.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modenova.co.ke",
    siteName: "Jeremy Nduati Portfolio",
    title: "Jeremy Nduati - Full-Stack Developer & UI/UX Designer",
    description: "15-year-old full-stack developer building enterprise-grade applications with Next.js, TypeScript, and modern design principles.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeremy Nduati - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Nduati - Full-Stack Developer & UI/UX Designer",
    description: "Building enterprise-grade applications at 15. Full-stack development, payment integrations, and beautiful UI/UX design.",
    creator: "@jeremydev-c",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#9333ea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <body className="antialiased">
        <ErrorBoundary>
          <LoadingScreen />
          {children}
          <NavigationPopup />
          <Analytics />
          <SpeedInsights />
        </ErrorBoundary>
      </body>
    </html>
  );
}

