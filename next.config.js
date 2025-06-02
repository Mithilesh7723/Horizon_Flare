/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['uiavatar.com'], // Add any external image domains here if needed
    unoptimized: false, // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Icon sizes
  },
  compress: true, // Enable compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  // Add redirects for SEO and UX improvements
  async redirects() {
    return [
      {
        source: '/innovation',
        destination: '/innovation-lab',
        permanent: true,
      },
      {
        source: '/cybersecurity-services-india',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/penetration-testing-india',
        destination: '/services/vapt',
        permanent: true,
      },
      {
        source: '/vapt-services-india',
        destination: '/services/vapt',
        permanent: true,
      },
      {
        source: '/web-development-security-india',
        destination: '/services/development',
        permanent: true,
      },
      {
        source: '/ethical-hacking-training-india',
        destination: '/services/training',
        permanent: true,
      },
      {
        source: '/courses',
        destination: '/services/training',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  // Add custom headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
