import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gadgets-finds.com';

  const staticPages = [
    '',
    '/homepage',
    '/about-us',
    '/contact-us',
    '/privacy-policy',
    '/terms-of-service',
    '/cookies',
    '/careers',
    '/newsletter-signup',
    '/live-news-feed',
    '/product-comparison-engine',
    '/unified-search',
    '/tech-trends-2026',
    '/ces-2026-hub',
    '/best-laptops-developers-2026',
  ];

  const articlePages = [
    '/apple-m4-chip-article',
    '/apple-vision-pro-2-article',
    '/ai-productivity-tools-2026-article',
    '/google-gemini-3-article',
    '/ibm-quantum-processor-article',
    '/i-phone-16-pro-vs-samsung-comparison-article',
    '/intel-arc-b-series-article',
    '/macbook-pro-m4-article',
    '/meta-quest-4-article',
    '/microsoft-azure-quantum-article',
    '/nvidia-rtx-6090-ti-article',
    '/nvidia-rtx-6090-ti-live-news-article',
    '/openai-gpt-5-article',
    '/quantum-computing-ibm-article',
    '/samsung-galaxy-s26-ultra-article',
    '/samsung-galaxy-z-fold-6-article',
    '/smart-home-security-systems-article',
    '/sony-playstation-6-article',
    '/sony-wh-2000xm6-review-article',
    '/spacex-starlink-gen-3-article',
    '/tesla-optimus-gen-3-article',
    '/tesla-robotaxi-article',
  ];

  const trendPages = [
    '/tech-trends-2026/6g-networks-begin-global-rollout',
    '/tech-trends-2026/quantum-computing-reaches-commercial-viability',
    '/tech-trends-2026/ai-powered-personal-health-assistants-go-mainstream',
    '/tech-trends-2026/neural-interface-technology-enters-consumer-market',
    '/tech-trends-2026/sustainable-tech-manufacturing-becomes-industry-standard',
    '/tech-trends-2026/autonomous-vehicles-achieve-level-5-certification',
  ];

  const allPages = [...staticPages, ...articlePages, ...trendPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' || path === '/homepage' ? 'daily' : 'weekly',
    priority: path === '' || path === '/homepage' ? 1.0 : path.includes('article') ? 0.7 : 0.8,
  }));
}
