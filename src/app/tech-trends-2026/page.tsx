import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import TechTrendsInteractive from './components/TechTrendsInteractive';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Tech Trends 2026 — Future Predictions & Industry Impact — Gadgets Finds',
  description: 'Discover the technological innovations shaping tomorrow with expert predictions, industry impact assessments, and real-time accuracy tracking from Gadgets Finds Future Tech Observatory.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/tech-trends-2026'
  },
  openGraph: {
    title: 'Tech Trends 2026',
    description: 'Expert predictions and industry impact assessments for emerging technologies.',
    url: 'https://www.gadgets-finds.com/tech-trends-2026',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_10e4f08d2-1767831638166.png",
      width: 1200,
      height: 630,
      alt: 'Tech Trends 2026'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Tech Trends 2026',
    description: 'Expert predictions and industry impact assessments for emerging technologies.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

export default function TechTrends2026() {
  return (
    <>
      <Header />
      <TechTrendsInteractive />
      <Footer />
    </>);

}