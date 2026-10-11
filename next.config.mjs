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
      source: '/homepage',
      destination: '/',
      permanent: true, // 308/301 : redirection permanente pour Google
    },
    {
      source: '/nvidia-rtx-5090-ti-article',
      destination: '/nvidia-rtx-5090-article',
      permanent: true,
    },
    {
      source: '/sony-wh-2000xm6-review-article',
      destination: '/sony-wh-1000xm6-review-article',
      permanent: true,
    },
    {
      source: '/nvidia-rtx-6090-ti-article',
      destination: '/nvidia-rtx-6090-ti-live-news-article',
      permanent: true,
    },
  ];
},
};
export default nextConfig;
