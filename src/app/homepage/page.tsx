import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import TrendingStoriesCarousel from './components/TrendingStoriesCarousel';
import PersonalizedContentStream from './components/PersonalizedContentStream';
import QuickAccessGrid from './components/QuickAccessGrid';
import TechPulseMeter from './components/TechPulseMeter';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';
import CES2026Preview from './components/CES2026Preview';
import GadgetsSection from './components/GadgetsSection';

export const metadata: Metadata = {
  title: 'Gadgets Finds — Gadget Deals, Reviews & Tech News',
  description: 'Daily gadget deals, honest reviews, and tech news. Compare specs and prices on laptops, phones, GPUs, and gaming gear.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/',
  },
  openGraph: {
    title: 'Gadgets Finds — Gadget Deals, Reviews & Tech News',
    description: 'Daily gadget deals, honest reviews, and tech news. Compare specs and prices on laptops, phones, GPUs, and gaming gear.',
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
    title: 'Gadgets Finds — Gadget Deals, Reviews & Tech News',
    description: 'Daily gadget deals, honest reviews, and tech news. Compare specs and prices on laptops, phones, GPUs, and gaming gear.',
    images: ['/og-home.png'],
  },
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
            <GadgetsSection />
      <main className="pt-36 md:pt-20">
<section className="py-8 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <PersonalizedContentStream />
          </div>
        </section>
        
        <section className="bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-text-primary mb-3 md:mb-4 px-2">
                Gadget deals, honest reviews, and tech news
              </h1>
              <p className="text-base md:text-xl text-brand-text-secondary max-w-3xl mx-auto px-4">
                Compare specs and prices, read our reviews, and keep up with the launches that matter.
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
            <TechPulseMeter />
          </div>
        </section>

        <CES2026Preview />

        <section className="py-8 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <NewsletterSubscription />
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}
