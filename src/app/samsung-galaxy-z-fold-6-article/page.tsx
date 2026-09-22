import type { Metadata } from 'next';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Samsung Galaxy Z Fold 6 Review — Gadgets Finds',
  description: 'Samsung Galaxy Z Fold 6 foldable smartphone review: improved crease, powerful performance, and refined design — though the crease remains visible.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/samsung-galaxy-z-fold-6-article'
  },
  openGraph: {
    title: 'Samsung Galaxy Z Fold 6 Review',
    description: 'Improved crease and powerful performance — though the crease remains visible.',
    url: 'https://www.gadgets-finds.com/samsung-galaxy-z-fold-6-article',
    type: 'article',
    images: [{
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_16d9ea378-1772208754355.png",
      width: 1200,
      height: 630,
      alt: 'Samsung Galaxy Z Fold 6'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Samsung Galaxy Z Fold 6 Review',
    description: 'Improved crease and powerful performance — though the crease remains visible.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Samsung Galaxy Z Fold 6 Review',
  description: 'Samsung Galaxy Z Fold 6 foldable smartphone review: improved crease, powerful performance, and refined design — though the crease remains visible.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10251a029-1772328371059.png",
  datePublished: '2024-07-10',
  dateModified: '2026-08-12',
  author: { '@type': 'Organization', name: 'Gadgets Finds' },
  publisher: { '@type': 'Organization', name: 'Gadgets Finds', logo: { '@type': 'ImageObject', url: 'https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png' } }
};

export default function SamsungGalaxyZFold6Article() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-14 md:pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1b44cefde-1768629979683.png"
            alt="Modern foldable smartphone displaying vibrant screen in partially folded position"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full mb-4">
                REVIEW
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                Samsung Galaxy Z Fold 6 Review: Refined Foldable, Crease Still Present
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/95 mb-3 md:mb-4 max-w-3xl leading-relaxed">
                Samsung's 2024 foldable flagship brings meaningful improvements in design, durability, and performance — but the inner display crease remains visible, as noted by reviewers worldwide.
              </p>
              <div className="flex items-center flex-wrap gap-4 text-sm text-gray-200">
                <span>David Kim</span>
                <span>•</span>
                <span>July 10, 2024</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Live News Feed button */}
          <div className="mb-8 pb-8 border-b border-border">
            <Link
              href="/live-news-feed"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors">
              <Icon name="NewspaperIcon" size={20} variant="outline" />
              <span>Live News Feed</span>
            </Link>
          </div>

          {/* Accuracy Notice */}
          <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
            <div className="flex items-start gap-3">
              <Icon name="ExclamationTriangleIcon" size={20} variant="solid" className="text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">Accuracy Correction</p>
                <p className="text-muted-foreground text-sm mt-1">
                  A previous version of this article claimed the Z Fold 6 achieved "seamless crease elimination." This is <strong>incorrect</strong>. The Galaxy Z Fold 6 still has a visible crease on the inner display — this was widely noted in reviews from The Verge, GSMArena, and other publications. Samsung improved the crease compared to previous generations, but did not eliminate it.
                </p>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              The Galaxy Z Fold 6 (released July 2024) represents Samsung's most refined foldable to date, with meaningful improvements in design, durability, and performance. However, it does not eliminate the inner display crease — a limitation that remains a characteristic of current foldable display technology.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Display: Improved, But Crease Remains</h2>
            <p className="text-muted-foreground mb-4">
              The Z Fold 6 features an improved Ultra-Thin Glass (UTG) layer that is thinner than previous generations, combined with a redesigned hinge mechanism. Samsung has made the crease less pronounced compared to the Z Fold 5, but it remains clearly visible — particularly when the display is viewed at an angle or in certain lighting conditions.
            </p>
            <p className="text-muted-foreground mb-4">
              Reviews from major publications consistently noted the crease is still present:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>The Verge: "The crease is still there and still noticeable"</li>
              <li>GSMArena: "The crease is visible, though slightly improved over the Fold 5"</li>
              <li>MKBHD: "You still feel and see the crease — it hasn't been solved"</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              The main display measures 7.6 inches with a 2160 x 1856 resolution, delivering good clarity at 374 PPI. The cover display has been widened to 6.3 inches, making it more practical for one-handed use. Both screens support 120Hz adaptive refresh rates and peak brightness of 2,600 nits.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Enhanced Durability</h2>
            <p className="text-muted-foreground mb-4">
              Samsung claims the Z Fold 6 can withstand 200,000 folds — a significant engineering achievement. The device features:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>Armor Aluminum Frame:</strong> Stronger than conventional aluminum alloys</li>
              <li><strong>Gorilla Glass Victus 2:</strong> Improved scratch and drop resistance on the cover display</li>
              <li><strong>IPX8 Water Resistance:</strong> Can survive submersion in up to 1.5 meters of water for 30 minutes</li>
              <li><strong>Thinner profile:</strong> At 12.1mm folded, it is slimmer than the Z Fold 5</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Performance and Battery</h2>
            <p className="text-muted-foreground mb-4">
              Powered by Qualcomm's Snapdragon 8 Gen 3 processor (not Gen 4 — that chip was not available at launch), the Z Fold 6 delivers excellent performance. The device comes with 12GB of RAM and storage options of 256GB or 512GB. A 4,400mAh battery provides solid all-day battery life, with 25W fast charging and 15W wireless charging support.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Camera System</h2>
            <p className="text-muted-foreground mb-4">
              The Z Fold 6 features a triple-camera setup:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>50MP main sensor with OIS and f/1.8 aperture</li>
              <li>12MP ultra-wide with 123-degree field of view</li>
              <li>10MP telephoto with 3x optical zoom</li>
              <li>10MP cover display camera and 4MP under-display camera</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Software and Multitasking</h2>
            <p className="text-muted-foreground mb-4">
              Running One UI 6.1.1 based on Android 14, the Z Fold 6 introduces enhanced multitasking features including improved split-screen functionality, drag-and-drop between apps, and a taskbar for quick app switching. Samsung has worked with developers to optimize apps for the foldable form factor, though the ecosystem is still maturing.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Pricing and Availability</h2>
            <p className="text-muted-foreground mb-4">
              The Galaxy Z Fold 6 launched in July 2024 starting at $1,899 for the 256GB model. It is available in Shadow Pink, Silver Shadow, and Crafted Black colorways. Samsung also released a special edition Z Fold 6 with improved crease reduction for select markets, though even this variant retains a visible crease.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Verdict</h2>
            <p className="text-muted-foreground mb-4">
              The Z Fold 6 is Samsung's best foldable yet — more durable, slightly slimmer, and with a marginally improved inner display. However, it does not represent a breakthrough in crease elimination. If you can accept the crease as part of the foldable experience, the Z Fold 6 is an excellent productivity device. If the crease is a dealbreaker, no current foldable phone solves this problem.
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="ShareIcon" size={20} variant="outline" />
              </button>
              <button className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="BookmarkIcon" size={20} variant="outline" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);

}