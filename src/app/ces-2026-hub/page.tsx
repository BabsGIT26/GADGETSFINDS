import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CESHubInteractive from './components/CESHubInteractive';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'CES 2026 Hub — Live Coverage & Exclusive Interviews — Gadgets Finds',
  description: 'Your definitive command center for CES 2026 coverage featuring live streams, exclusive interviews, product launches, and real-time updates from the world\'s most influential tech event.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/ces-2026-hub'
  },
  openGraph: {
    title: 'CES 2026 Hub',
    description: 'Live streams, exclusive interviews, and real-time updates from CES 2026.',
    url: 'https://www.gadgets-finds.com/ces-2026-hub',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0da6387-1786441686869.png",
      width: 1200,
      height: 630,
      alt: 'CES 2026 Hub'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'CES 2026 Hub',
    description: 'Live streams, exclusive interviews, and real-time updates from CES 2026.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

export default function CES2026Hub() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <CESHubInteractive />
      </div>
      <Footer />
    </main>);

}