import type { Metadata } from 'next';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'NVIDIA RTX 5090 Review — Gadgets Finds',
  description: 'NVIDIA RTX 5090 delivers flagship GPU performance for gaming, content creation, and AI workloads with the new Blackwell architecture.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/nvidia-rtx-6090-ti-article'
  },
  openGraph: {
    title: 'NVIDIA RTX 5090 Review',
    description: 'Flagship GPU performance for gaming, content creation, and AI with Blackwell architecture.',
    url: 'https://www.gadgets-finds.com/nvidia-rtx-6090-ti-article',
    type: 'article',
    images: [{
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1f4342726-1777062087272.png",
      width: 1200,
      height: 630,
      alt: 'NVIDIA RTX 5090'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'NVIDIA RTX 5090 Review',
    description: 'Flagship GPU performance for gaming, content creation, and AI with Blackwell architecture.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NVIDIA RTX 5090 Review: Gaming Performance Breakthrough',
  description: 'NVIDIA RTX 5090 delivers flagship GPU performance for gaming, content creation, and AI workloads with the new Blackwell architecture.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17269c6d2-1774465657277.png",
  datePublished: '2025-01-30',
  dateModified: '2025-01-30',
  author: { '@type': 'Organization', name: 'Gadgets Finds' },
  publisher: { '@type': 'Organization', name: 'Gadgets Finds', logo: { '@type': 'ImageObject', url: 'https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png' } }
};

export default function NVIDIARTXArticle() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-14 md:pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        {/* Hero Section – flexible + mobile-safe */}
        <div className="relative min-h-[55vh] max-h-[80vh] overflow-hidden flex flex-col">
          <AppImage
            src="/assets/images/nvidia_rtx_5090.png"
            alt="NVIDIA RTX 5090 Blackwell graphics card with triple fan cooling system"
            className="absolute inset-0 h-full w-full object-cover"
            priority />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/15" />

          {/* Top-right "Back to Home" pill */}
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2 sm:top-6 sm:right-6">
            <Link
              href="/homepage"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/15 px-3 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25">
              <Icon name="ArrowLeftIcon" size={14} variant="outline" />
              Back to Home
            </Link>
          </div>

          {/* Hero content – bottom aligned, compact on mobile */}
          <div className="relative z-30 mt-auto pb-10 pt-6 sm:pb-12 sm:pt-10">
            <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <span className="rounded-full bg-brand-accent px-3 py-0.5 text-[10px] sm:text-xs font-bold text-brand-dark">
                  Hardware
                </span>
                <time className="text-gray-200/90">January 30, 2025</time>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]">
                NVIDIA RTX 5090 Benchmarks: Gaming Performance Breakthrough
              </h1>

              <p className="mt-3 max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] leading-relaxed">
                Our benchmark results show the RTX 5090 delivering massive performance gains over the RTX 4090 in ray-traced gaming, powered by NVIDIA's new Blackwell architecture and 32GB of GDDR7 memory.
              </p>

              {/* Meta line – strong backdrop */}
              <div className="mt-4 flex flex-wrap items-center gap-4 rounded-md bg-black/65 px-4 py-2 text-xs sm:text-sm text-gray-100 backdrop-blur-md shadow-sm">
                <span className="flex items-center gap-1.5">
                  <Icon name="UserIcon" size={14} variant="outline" />
                  David Park
                </span>
                <span className="text-gray-400">•</span>
                <span className="flex items-center gap-1.5">
                  <Icon name="ClockIcon" size={14} variant="outline" />
                  6 min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live News Feed button right after hero – matches other pages */}
        <div className="max-w-5xl mx-auto px-5 py-6 sm:py-8">
          <Link
            href="/live-news-feed"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors">
            <Icon name="NewspaperIcon" size={20} variant="outline" />
            <span>Live News Feed</span>
          </Link>
        </div>

        {/* Article Body */}
        <article className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-12 lg:py-16">
          <div className="prose prose-lg prose-invert max-w-none lg:prose-xl">
            <h2>Blackwell Architecture: A New Era</h2>
            <p>
              NVIDIA's RTX 5090 is the flagship of the GeForce RTX 50 series, built on the all-new Blackwell architecture. With 21,760 CUDA cores and 32GB of GDDR7 memory on a 512-bit memory bus, it delivers the highest performance ever seen in a consumer GPU. The card launched in January 2025 at $1,999 MSRP.
            </p>
            <p>
              The Blackwell architecture introduces fifth-generation ray tracing cores and fourth-generation Tensor cores, enabling real-time path tracing at 4K resolution alongside DLSS 4 with Multi Frame Generation — capable of generating up to 3 additional frames per rendered frame.
            </p>

            <h2>Gaming Benchmark Results</h2>
            <div className="not-prose my-10 rounded-xl border border-border bg-card p-6 sm:p-8">
              <h3 className="mb-5 text-2xl font-bold">4K Ultra Settings Performance</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="mt-1 text-brand-primary" />
                  <span><strong>Cyberpunk 2077 (Path Tracing + DLSS 4):</strong> 180+ FPS</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="mt-1 text-brand-primary" />
                  <span><strong>Microsoft Flight Simulator 2024:</strong> 150 FPS</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="mt-1 text-brand-primary" />
                  <span><strong>Alan Wake 2 (Path Tracing):</strong> 165 FPS</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="mt-1 text-brand-primary" />
                  <span><strong>Black Myth: Wukong (Max RT):</strong> 200+ FPS</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="mt-1 text-brand-primary" />
                  <span><strong>Hogwarts Legacy (Max Settings):</strong> 210 FPS</span>
                </li>
              </ul>
            </div>

            <h2>DLSS 4 with Multi Frame Generation</h2>
            <p>
              NVIDIA's DLSS 4 is the headline feature of the RTX 50 series. Multi Frame Generation uses AI to generate up to 3 additional frames for every rendered frame, delivering up to 4x the frame rate in supported titles. Combined with the Reflex 2 latency reduction technology, the experience remains responsive even at very high frame rates.
            </p>
            <p>
              Image quality has also been significantly improved with a new transformer-based AI model that reduces ghosting and temporal artifacts compared to DLSS 3, making upscaled images nearly indistinguishable from native resolution.
            </p>

            <h2>Ray Tracing Performance</h2>
            <p>
              The RTX 5090's fifth-generation RT cores deliver a substantial improvement in ray tracing performance compared to the RTX 4090. In Cyberpunk 2077 with full path tracing and DLSS 4 Quality mode, the card maintains well over 100 native FPS before frame generation, making true path tracing a practical reality for the first time.
            </p>

            <h2>Power and Cooling</h2>
            <p>
              The RTX 5090 carries a 575W TDP — a significant jump from the RTX 4090's 450W. NVIDIA's Founders Edition uses a new 3-slot cooler design with a vapor chamber and three fans to keep temperatures manageable. The card requires a 16-pin power connector and a 1000W+ PSU is strongly recommended.
            </p>

            <h2>Professional Workload Performance</h2>
            <p>
              Beyond gaming, the RTX 5090 excels in AI and creative workloads. The 32GB GDDR7 frame buffer is large enough to run most large language models locally, and the enhanced Tensor cores with FP4 and FP8 precision support make it a powerful tool for AI inference and training.
            </p>
            <p>
              Video editors working with 8K footage in DaVinci Resolve benefit from hardware-accelerated decoding and real-time playback, while 3D artists see dramatically faster render times in Blender and Octane.
            </p>

            <h2>Pricing and Availability</h2>
            <p>
              The NVIDIA RTX 5090 launched on January 30, 2025, at an MSRP of $1,999 for the Founders Edition. AIB partner cards with custom cooling solutions range from $2,099 to $2,499. Due to high demand, availability has been limited — check major retailers for stock updates.
            </p>

            <div className="not-prose my-10 rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-6 sm:p-8">
              <h3 className="mb-4 text-2xl font-bold">Editor's Verdict</h3>
              <p className="italic text-muted-foreground">
                The RTX 5090 is the undisputed fastest consumer GPU available today. DLSS 4 Multi Frame Generation is a genuine game-changer, and the 32GB GDDR7 frame buffer future-proofs the card for years to come. The high price and power draw are the only real drawbacks for enthusiasts who demand the absolute best.
              </p>
              <p className="mt-3 font-medium">— David Park, Senior Hardware Analyst</p>
            </div>

            <h2>Final Thoughts</h2>
            <p>
              NVIDIA's RTX 5090 sets a new benchmark for consumer GPU performance. The Blackwell architecture, combined with DLSS 4 Multi Frame Generation, delivers a generational leap in gaming performance. If you need the fastest GPU money can buy right now, the RTX 5090 is it — just make sure your PSU and wallet are ready.
            </p>
          </div>

          {/* Final CTA – consistent "Live News Feed" button */}
          <div className="mt-12 border-t border-border pt-10 text-center sm:text-left">
            <Link
              href="/live-news-feed"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors">
              <Icon name="NewspaperIcon" size={20} variant="outline" />
              <span>Live News Feed</span>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/apple-vision-pro-2-article" className="group block">
                <div className="rounded-lg border border-border bg-card p-5 transition hover:border-brand-primary">
                  <span className="text-xs font-bold text-brand-primary">Breaking News</span>
                  <h4 className="mt-2 text-lg font-bold text-foreground group-hover:text-brand-primary">
                    Apple Vision Pro 2 Leaked: Revolutionary Eye-Tracking Technology
                  </h4>
                </div>
              </Link>
              <Link href="/macbook-pro-m4-article" className="group block">
                <div className="rounded-lg border border-border bg-card p-5 transition hover:border-brand-primary">
                  <span className="text-xs font-bold text-brand-primary">Laptops</span>
                  <h4 className="mt-2 text-lg font-bold text-foreground group-hover:text-brand-primary">
                    MacBook Pro M4: Apple Silicon Reaches New Performance Heights
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </>);

}