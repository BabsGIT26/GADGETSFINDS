import type { Metadata } from 'next';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Apple Vision Pro 2: Development Paused, Apple Pivots to Smart Glasses — Gadgets Finds',
  description: 'Apple Vision Pro 2 development has reportedly been paused or significantly delayed. Apple is now prioritizing smart glasses over a full Vision Pro successor.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/apple-vision-pro-2-article'
  },
  openGraph: {
    title: 'Apple Vision Pro 2: Development Paused, Apple Pivots to Smart Glasses',
    description: 'Reports indicate Apple has paused Vision Pro 2 development and is focusing on smart glasses instead.',
    url: 'https://www.gadgets-finds.com/apple-vision-pro-2-article',
    type: 'article',
    images: [{
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2702a85-1767011861401.png",
      width: 1200,
      height: 630,
      alt: 'Apple Vision Pro headset'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Apple Vision Pro 2: Development Paused, Apple Pivots to Smart Glasses',
    description: 'Reports indicate Apple has paused Vision Pro 2 development and is focusing on smart glasses instead.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Apple Vision Pro 2: Development Paused, Apple Pivots to Smart Glasses',
  description: 'Apple Vision Pro 2 development has reportedly been paused or significantly delayed. Apple is now prioritizing smart glasses over a full Vision Pro successor.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1198d0cb1-1767780408380.png",
  datePublished: '2026-08-12',
  dateModified: '2026-08-12',
  author: { '@type': 'Organization', name: 'Gadgets Finds' },
  publisher: { '@type': 'Organization', name: 'Gadgets Finds', logo: { '@type': 'ImageObject', url: 'https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png' } }
};

export default function AppleVisionPro2Article() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-14 md:pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        {/* Hero Section */}
        <div className="relative min-h-[50vh] md:h-[60vh] overflow-hidden flex flex-col">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1198d0cb1-1767780408380.png"
            alt="Apple Vision Pro headset with advanced eye-tracking sensors"
            className="absolute inset-0 w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-0" />

          {/* Header Buttons */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-end items-center gap-3 z-20">
            <Link
              href="/homepage"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2
                         bg-white/10 backdrop-blur-md hover:bg-white/20
                         rounded-lg transition-colors text-white font-medium
                         border border-white/10 text-xs sm:text-sm shadow-sm">


              
              <Icon name="ArrowLeftIcon" size={16} variant="outline" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Title & Meta */}
          <div className="relative z-10 mt-auto pb-6 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="max-w-5xl mx-auto">
              <div className="mb-3 md:mb-4 flex items-center flex-wrap gap-3 mt-[3px]">
                <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs md:text-sm font-bold rounded-full">
                  Analysis
                </span>
                <span className="text-gray-200/90 text-xs md:text-sm">
                  August 12, 2026
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 md:mb-4">
                Apple Vision Pro 2: Development Paused — Apple Pivots to Smart Glasses
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/95 mb-3 md:mb-4 max-w-3xl leading-relaxed">
                Reports from multiple credible sources indicate Apple has paused or significantly delayed a full Vision Pro successor, shifting focus to a lighter smart glasses product instead.
              </p>

              <div className="flex items-center flex-wrap gap-4 md:gap-6 text-sm md:text-base text-gray-200/90">
                <span className="flex items-center gap-2">
                  <Icon name="UserIcon" size={16} variant="outline" />
                  Sarah Chen
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Icon name="ClockIcon" size={16} variant="outline" />
                  5 min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Link
            href="/live-news-feed"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors">
            <Icon name="NewspaperIcon" size={20} variant="outline" />
            <span>Live News Feed</span>
          </Link>
        </div>

        {/* Article Content */}
        <article className="max-w-5xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">

            {/* Accuracy Notice */}
            <div className="not-prose mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
              <div className="flex items-start gap-3">
                <Icon name="ExclamationTriangleIcon" size={20} variant="solid" className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Accuracy Notice</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Apple has <strong>not officially announced</strong> a Vision Pro 2. Reports indicate development of a full successor has been paused or delayed. Any previously published "leaked specs" for Vision Pro 2 are unverified. This article reflects the current state of reporting as of August 2026.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">What We Know: Development Paused</h2>
            <p className="text-muted-foreground mb-6">
              Multiple credible reports from Bloomberg's Mark Gurman and other Apple analysts indicate that Apple has paused or significantly scaled back development of a direct Vision Pro successor. The original Apple Vision Pro launched in February 2024 at $3,499 — a price point that limited mainstream adoption. Rather than rushing a Vision Pro 2 to market, Apple appears to be rethinking its spatial computing strategy.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Apple's New Focus: Smart Glasses</h2>
            <p className="text-muted-foreground mb-6">
              Instead of a full Vision Pro successor, Apple is reportedly prioritizing the development of a lighter, more affordable smart glasses product — a category that Meta has entered with its Ray-Ban Meta glasses. Apple's smart glasses are expected to be a more wearable, everyday device rather than a full spatial computing headset.
            </p>

            <div className="bg-card rounded-lg p-6 my-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Current State of Apple's Headset Strategy</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-brand-primary mt-1" />
                  <span><strong>Apple Vision Pro (Gen 1):</strong> Launched February 2024 at $3,499 — currently available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="XCircleIcon" size={20} variant="solid" className="text-destructive mt-1" />
                  <span><strong>Vision Pro 2 (full successor):</strong> Development reportedly paused or delayed — no confirmed timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="ClockIcon" size={20} variant="outline" className="text-amber-500 mt-1" />
                  <span><strong>Apple Smart Glasses:</strong> Reportedly in development — no confirmed specs, name, or release date</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Why the Pivot?</h2>
            <p className="text-muted-foreground mb-6">
              The original Vision Pro, while technologically impressive, faced significant challenges: its $3,499 price tag, heavy weight (~600g), limited battery life (~2 hours), and relatively small app ecosystem constrained mainstream adoption. Apple reportedly concluded that a Vision Pro 2 at a similar price point would face the same barriers.
            </p>
            <p className="text-muted-foreground mb-6">
              Smart glasses — lighter, cheaper, and more socially acceptable to wear in public — represent a different market opportunity. Apple is said to be working on a product that could be worn throughout the day, rather than a device used for focused sessions.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">What This Means for Spatial Computing</h2>
            <p className="text-muted-foreground mb-6">
              Apple's strategic shift does not mean the end of spatial computing — it reflects a recalibration of how Apple believes users will adopt the technology. A more affordable, lighter smart glasses product could reach far more consumers than a premium headset, potentially building the ecosystem that a future Vision Pro successor would need to succeed.
            </p>
            <p className="text-muted-foreground mb-6">
              Industry analysts expect Apple to eventually return to a full spatial computing headset, but the timeline has been pushed back significantly from earlier expectations of a 2025–2026 Vision Pro 2 launch.
            </p>

            <div className="bg-brand-primary/10 rounded-lg p-6 my-8 border border-brand-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3">Editor's Note</h3>
              <p className="text-muted-foreground italic">
                "Apple's decision to pause Vision Pro 2 development and focus on smart glasses is a pragmatic response to the challenges of the spatial computing market. The original Vision Pro was a remarkable technical achievement, but its price and form factor limited its reach. Smart glasses could be the on-ramp that eventually leads consumers to embrace more immersive spatial experiences." — Sarah Chen, Senior Tech Analyst
              </p>
            </div>
          </div>
        </article>

        {/* Bottom Navigation */}
        <div className="max-w-5xl mx-auto px-4 py-8 border-t border-border">
          <Link
            href="/live-news-feed"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors">
            <Icon name="NewspaperIcon" size={20} variant="outline" />
            <span>Live News Feed</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>);
}