import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import TrendingStoriesCarousel from './components/TrendingStoriesCarousel';
import PersonalizedContentStream from './components/PersonalizedContentStream';
import QuickAccessGrid from './components/QuickAccessGrid';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';
import TopPicks from '@/components/common/TopPicks';
import GadgetsSection from './components/GadgetsSection';
import MiniGadgetsSection from './components/MiniGadgetsSection';
import { isSaleSeason, seasonCopy } from '@/lib/sale-season';
import { PHOTO_ROUTES, photosForRoutes } from '@/lib/amazon/route-photos';
import { illustrationPath } from '@/lib/illustrations';

// Re-render hourly so the Black Friday banner and titles switch after Cyber Monday.
export const revalidate = 3600;

const SALE_META = {
  title: 'Black Friday Gadget Deals 2026',
  description:
    "Black Friday and Cyber Monday 2026 gadget guides: robot vacuums, Fire TV and smartwatches, often discounted this week. Check today's live price on Amazon.",
};

const EVERGREEN_META = {
  title: 'Gadgets Finds — Gadget Buying Guides for 2026',
  description:
    'Tech gadget buying guides for 2026: robot vacuums, PS5 accessories, cheap tablets, travel chargers, smartwatches and laptops. See what to buy and what to skip.',
};

export function generateMetadata(): Metadata {
  const copy = seasonCopy(SALE_META, EVERGREEN_META);
  const branded = copy.title.includes('Gadgets Finds') ? copy.title : `${copy.title} | Gadgets Finds`;
  return {
    title: { absolute: branded },
    description: copy.description,
    metadataBase: new URL('https://www.gadgets-finds.com'),
    alternates: {
      canonical: 'https://www.gadgets-finds.com/',
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: 'https://www.gadgets-finds.com/',
      type: 'website',
      images: [
        {
          url: '/og-home.png',
          width: 1200,
          height: 630,
          alt: 'Gadgets Finds',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Gadgets_finds',
      creator: '@Gadgets_finds',
      title: copy.title,
      description: copy.description,
      images: ['/og-home.png'],
    },
  };
}

function BlackFridayWeekBanner() {
  if (!isSaleSeason()) return null;
  const linkClass =
    'inline-flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-extrabold bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-colors';
  return (
    <section
      aria-label="Black Friday week deals"
      className="mt-10 md:mt-14 rounded-2xl border-2 border-red-800 bg-red-800 p-4 md:p-6"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-amber-200 mb-2">Black Friday week 2026</p>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Black Friday and Cyber Monday deals</h2>
      <p className="text-sm md:text-base text-white leading-relaxed mb-3">
        Black Friday is November 27 and Cyber Monday is November 30. These gadgets are often discounted this week — check
        today's price on Amazon. We do not list sale prices here because they change.
      </p>
      <p className="text-sm text-white mb-4">Brands do not pay to be included in our guides.</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        <a href="/black-friday-gaming-pc" className={linkClass}>
          Gaming PC parts
        </a>
        <a href="/best-amazon-deals-this-week" className={linkClass}>
          Fire TV deals
        </a>
        <a href="/black-friday-robot-vacuums" className={linkClass}>
          Robot vacuum deals
        </a>
        <a href="/black-friday-smartwatches" className={linkClass}>
          Smartwatch deals
        </a>
      </div>
    </section>
  );
}

export default async function Homepage() {
  const sale = isSaleSeason();
  const photos = await photosForRoutes(PHOTO_ROUTES);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Clears the fixed header, plus 12–16px of room */}
      <div className="site-spacer" />

      <main className="pt-0">
        <section className="pt-0 pb-8 md:pb-16 bg-background">
          <div className="container mx-auto px-4">
            <PersonalizedContentStream photos={photos} />
            <div className="max-w-4xl mx-auto mt-10 md:mt-14">
              <TopPicks
                title="Top picks from our guides"
                note={
                  sale
                    ? "Often discounted on Black Friday — check today's price on Amazon. Brands do not pay to be included in our guides."
                    : 'Brands do not pay to be included in our guides. Check today’s price on Amazon.'
                }
                picks={[
                  { label: 'Best travel power bank', name: 'Anker 20,000mAh 87W (built-in cable)', why: 'From our travel chargers guide.', url: 'https://www.amazon.com/dp/B0CXDQXC3Q?tag=gadgetsfindswebsite-20', image: illustrationPath('powerbank') },
                  { label: 'Best value streaming', name: 'Fire TV Stick 4K Select', why: 'From our Amazon deals guide.', url: 'https://www.amazon.com/dp/B0C6W3D4RM?tag=gadgetsfindswebsite-20', image: illustrationPath('streaming') },
                  { label: 'Best robot vacuum value', name: 'Roborock Q7 L5', why: 'From our robot vacuums under $300 guide.', url: 'https://www.amazon.com/dp/B0F3337BV7?tag=gadgetsfindswebsite-20', image: illustrationPath('vacuum') },
                ]}
              />
              <BlackFridayWeekBanner />
            </div>
          </div>
        </section>

        <GadgetsSection photos={photos} />
        <MiniGadgetsSection photos={photos} />

        <section className="bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-text-primary mb-3 md:mb-4 px-2">
                {sale ? 'Black Friday gadget deals for 2026' : 'Gadget buying guides for 2026'}
              </h1>
              <p className="text-base md:text-xl text-brand-text-secondary max-w-3xl mx-auto px-4">
                {sale
                  ? 'Robot vacuums, Fire TV, smartwatches, and small gear. Often discounted this week — check today’s price on Amazon.'
                  : 'Robot vacuums, PS5 accessories, tablets, chargers, smartwatches, and small gear. Prices and limits, not a sales pitch.'}
              </p>
            </div>

            <div className="w-full">
              <TrendingStoriesCarousel photos={photos} />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <QuickAccessGrid />
          </div>
        </section>

        <section className="py-8 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <NewsletterSubscription />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
