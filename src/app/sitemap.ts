import { MetadataRoute } from 'next';
import { PAGE_DATES, SITE_UPDATED } from '@/lib/page-dates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gadgets-finds.com';

  const staticPages = [
    '',
    '/about-us',
    '/privacy-policy',
    '/terms-of-service',
    '/cookies',
    '/contact-us',
    '/how-we-research',
    '/affiliate-disclosure',
    '/best-laptops-developers-2026',
  ];

  const articlePages = [
    '/i-phone-16-pro-vs-samsung-comparison-article',
    '/macbook-pro-m4-article',
    '/playstation-5-digital-renewed-article',
    '/samsung-galaxy-s26-ultra-article',
    '/samsung-galaxy-z-fold-6-article',
    '/smart-home-security-systems-article',
    '/sony-wh-2000xm6-review-article',
    '/genz-semi-automatic-slingshot-article',
    '/logitech-g29-driving-force-article',
  ];

  const buyingGuides = [
    '/best-cheap-tablets-under-150',
    '/best-portable-chargers-for-travel',
    '/best-smartwatches-under-350',
    '/best-mini-gadgets-under-30',
    '/best-amazon-deals-this-week',
    '/best-ps5-accessories-2026',
    '/best-budget-robot-vacuums-under-300',
    '/black-friday-robot-vacuums',
    '/black-friday-robot-vacuums/roborock-qrevo-2-pro-black',
    '/black-friday-robot-vacuums/roborock-qrevo-2-pro-white',
    '/black-friday-robot-vacuums/roborock-qrevo-curv-2-flow',
    '/black-friday-robot-vacuums/eufy-c10',
    '/black-friday-robot-vacuums/ecovacs-t90-pro-omni',
    '/black-friday-robot-vacuums/roborock-q7-m5-plus',
    '/black-friday-robot-vacuums/shark-ai-ultra',
    '/black-friday-robot-vacuums/ilife-a30s',
    '/black-friday-robot-vacuums/eufy-l60',
    '/black-friday-robot-vacuums/lefant-m210-pro',
    '/black-friday-smartwatches',
    '/black-friday-smartwatches/apple-watch-se-3-40mm',
    '/black-friday-smartwatches/apple-watch-series-12-42mm',
    '/black-friday-smartwatches/apple-watch-series-12-cellular-46mm',
    '/black-friday-smartwatches/garmin-venu-4',
    '/black-friday-smartwatches/garmin-instinct-3-amoled',
    '/black-friday-smartwatches/whoop-5-peak',
    '/black-friday-smartwatches/carbinox-edge',
    '/roborock-vs-roomba-2026',
    '/best-foldable-phones-2026',
    '/iphone-duo-cases',
  ];

  const productPages = [
    '/macbook-pro-m5-max-article',
    '/macbook-air-m5-13-article',
    '/apple-macbook-pro-oled-proled-xdr',
    '/nvidia-rtx-5090-ti-article',
    '/nvidia-rtx-50-series-lowest-prices',
    '/iphone-17-vs-galaxy-s26-ultra',
    '/playstation-5-article',
    '/playstation-5-pro-article',
    '/playstation-5-dualsense-article',
    '/ps5-cooling-station-article',
    '/xbox-series-x-digital-article',
    '/roborock-saros-z70-article',
    '/samsung-65-s85h-oled-article',
    '/samsung-990-pro-4tb-article',
    '/ghost-of-yotei-complete-edition',
    '/amazon-outlet-guide',
    '/outlet-extender-stick',
  ];

  const allPages = [...staticPages, ...buyingGuides, ...productPages, ...articlePages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    // Real last-change dates per page (from git history), not the build time.
    lastModified: PAGE_DATES[path] ?? SITE_UPDATED,
    changeFrequency: path === '' || path === '/best-amazon-deals-this-week' ? 'daily' : 'weekly',
    priority: path === '' ? 1.0 : buyingGuides.includes(path) ? 0.9 : path.includes('article') ? 0.7 : 0.8,
  }));
}
