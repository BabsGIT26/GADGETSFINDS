import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import TrendingStoriesCarousel from './components/TrendingStoriesCarousel';
import PersonalizedContentStream from './components/PersonalizedContentStream';
import QuickAccessGrid from './components/QuickAccessGrid';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';
import GadgetsSection from './components/GadgetsSection';
import MiniGadgetsSection from './components/MiniGadgetsSection';

export const metadata: Metadata = {
  title: 'Gadgets Finds — Gadget Buying Guides for 2026',
  description:
    'Buying guides for robot vacuums, PS5 accessories, tablets under $150, travel chargers, smartwatches under $350, and mini gadgets. Prices, limits, and what to skip.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/',
  },
  openGraph: {
    title: 'Gadgets Finds — Gadget Buying Guides for 2026',
    description:
      'Buying guides for robot vacuums, PS5 accessories, tablets under $150, travel chargers, smartwatches under $350, and mini gadgets.',
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
    title: 'Gadgets Finds — Gadget Buying Guides for 2026',
    description:
      'Buying guides for robot vacuums, PS5 accessories, tablets under $150, travel chargers, smartwatches under $350, and mini gadgets.',
    images: ['/og-home.png'],
  },
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Spacer so content starts below the fixed header (taller on mobile because of nav strip) */}
      <div className="h-28 md:h-16" />

      <main className="pt-0">
        <section className="py-8 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <PersonalizedContentStream />
          </div>
        </section>

        <GadgetsSection />
        <MiniGadgetsSection />

        <section className="bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-text-primary mb-3 md:mb-4 px-2">
                Gadget buying guides for 2026
              </h1>
              <p className="text-base md:text-xl text-brand-text-secondary max-w-3xl mx-auto px-4">
                Robot vacuums, PS5 accessories, tablets, chargers, smartwatches, and small gear.
                Prices and limits, not a sales pitch.
              </p>
            </div>

            <div className="w-full">
              <TrendingStoriesCarousel />
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
