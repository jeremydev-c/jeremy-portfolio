import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeremy Nduati - Web Designer & UI/UX Specialist Portfolio",
  description: "Creative web designer specializing in modern UI/UX design, visual design, and user-centered interfaces. Showcasing beautiful web experiences and innovative design work.",
  keywords: ["web designer", "UI designer", "UX designer", "web design", "user interface design", "visual design", "modern web design", "responsive design", "portfolio"],
  metadataBase: new URL("https://modenova.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jeremy Nduati - Web Designer & UI/UX Specialist",
    description: "Creative web designer creating beautiful, modern, and user-centered web experiences",
    url: "https://modenova.co.ke",
    siteName: "Jeremy Nduati Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Nduati - Web Designer & UI/UX Specialist",
    description: "Creative web designer creating beautiful, modern, and user-centered web experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

