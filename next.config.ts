import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This folder has its own lockfile; don't let Next pick a parent folder as the root.
  turbopack: { root: __dirname },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Old URLs from the previous version of the site keep working.
  async redirects() {
    return [
      { source: '/projects', destination: '/work', permanent: true },
      { source: '/case-studies', destination: '/work', permanent: true },
      { source: '/fashion-fit', destination: '/work/fashion-fit', permanent: true },
      { source: '/skills', destination: '/about', permanent: true },
      { source: '/testimonials', destination: '/certificates', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
