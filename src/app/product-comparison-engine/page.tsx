import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ComparisonEngineInteractive from './components/ComparisonEngineInteractive';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Compare Gadgets — Compare Tech Products — Gadgets Finds',
  description: 'Compare tech products side-by-side with intelligent filtering, expert scores, user ratings, and comprehensive specifications to make informed purchasing decisions.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/product-comparison-engine'
  },
  openGraph: {
    title: 'Compare Gadgets',
    description: 'Compare tech products side-by-side with expert scores and user ratings.',
    url: 'https://www.gadgets-finds.com/product-comparison-engine',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_146e5507a-1766231017695.png",
      width: 1200,
      height: 630,
      alt: 'Product Comparison Engine'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Compare Gadgets',
    description: 'Compare tech products side-by-side with expert scores and user ratings.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

export default function ProductComparisonEngine() {
  return (
    <>
      <Header />
      <ComparisonEngineInteractive />
      <Footer />
    </>);

}