/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
      ignoreBuildErrors: true,
    },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
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
      source: '/homepage',
      destination: '/',
      permanent: true,
    },
  ];
},
};
export default nextConfig;
