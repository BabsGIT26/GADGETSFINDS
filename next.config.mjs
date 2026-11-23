/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
      ignoreBuildErrors: false,
    },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'img.rocket.new',
      },
    ],
  },

      async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'gadgets-finds.com' }],
      destination: 'https://www.gadgets-finds.com/:path*',
      permanent: true,
    },
    {
      source: '/careers',
      destination: '/about-us',
      permanent: true,
    },
    {
      source: '/homepage',
      destination: '/',
      permanent: true,
    },
    {
      source: '/early-black-friday-deals',
      destination: '/',
      permanent: true,
    },
    {
      // Old October Prime Day page; send visitors to the evergreen deals page.
      source: '/october-deals',
      destination: '/best-amazon-deals-this-week',
      statusCode: 301,
    },
    // Stage 3: thin single-product pages merged into roundups (anchor = section).
    { source: '/macbook-pro-m4-article', destination: '/best-macbooks-2026#macbook-pro-14-m5', statusCode: 301 },
    { source: '/macbook-air-m5-13-article', destination: '/best-macbooks-2026#macbook-air-13-m5', statusCode: 301 },
    { source: '/macbook-pro-m5-max-article', destination: '/best-macbooks-2026#macbook-pro-16-m5-max', statusCode: 301 },
    { source: '/apple-macbook-pro-oled-proled-xdr', destination: '/best-macbooks-2026#macbook-pro-proled-xdr', statusCode: 301 },
    { source: '/nvidia-rtx-50-series-lowest-prices', destination: '/best-graphics-cards-2026', statusCode: 301 },
    { source: '/nvidia-rtx-50-series-lowest-prices-amazon', destination: '/best-graphics-cards-2026', statusCode: 301 },
    { source: '/nvidia-rtx-5090-ti-article', destination: '/best-graphics-cards-2026#rtx-5090', statusCode: 301 },
    { source: '/intel-arc-b-series-article', destination: '/best-graphics-cards-2026#intel-arc-b580', statusCode: 301 },
    { source: '/playstation-5-article', destination: '/best-gaming-consoles-2026#playstation-5', statusCode: 301 },
    { source: '/playstation-5-pro-article', destination: '/best-gaming-consoles-2026#playstation-5-pro', statusCode: 301 },
    { source: '/playstation-5-digital-renewed-article', destination: '/best-gaming-consoles-2026#playstation-5', statusCode: 301 },
    { source: '/xbox-series-x-digital-article', destination: '/best-gaming-consoles-2026#xbox-series-x-digital', statusCode: 301 },
    { source: '/ghost-of-yotei-complete-edition', destination: '/best-gaming-consoles-2026#ps5-ghost-of-yotei-bundle', statusCode: 301 },
    { source: '/playstation-5-dualsense-article', destination: '/best-ps5-accessories-2026#dualsense', statusCode: 301 },
    { source: '/ps5-cooling-station-article', destination: '/best-ps5-accessories-2026#cooling-station', statusCode: 301 },
    { source: '/logitech-g29-driving-force-article', destination: '/best-ps5-accessories-2026#racing-wheel', statusCode: 301 },
    { source: '/samsung-galaxy-s26-ultra-article', destination: '/best-phones-2026#galaxy-s26-ultra', statusCode: 301 },
    { source: '/iphone-17-vs-galaxy-s26-ultra', destination: '/best-phones-2026#iphone-17-vs-galaxy-s26-ultra', statusCode: 301 },
    { source: '/i-phone-16-pro-vs-samsung-comparison-article', destination: '/best-phones-2026#iphone-17-vs-galaxy-s26-ultra', statusCode: 301 },
    { source: '/samsung-galaxy-z-fold-6-article', destination: '/best-foldable-phones-2026#older-models', statusCode: 301 },
    { source: '/sony-wh-2000xm6-review-article', destination: '/best-noise-cancelling-headphones-2026#sony-wh-1000xm6', statusCode: 301 },
    { source: '/article-detail-page', destination: '/', statusCode: 301 },
  ];
},
};
export default nextConfig;
