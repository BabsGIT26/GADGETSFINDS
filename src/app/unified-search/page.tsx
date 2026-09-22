import type { Metadata } from 'next';
import UnifiedSearchInteractive from './components/UnifiedSearchInteractive';
import Footer from '@/app/homepage/components/Footer';
import Header from '@/components/common/Header';

export const metadata: Metadata = {
  title: 'Unified Search — Find Tech News, Products & Trends',
  description: 'Search across tech news, product comparisons, and industry trends all in one place. Unified search engine for comprehensive tech discovery.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/unified-search'
  },
  openGraph: {
    title: 'Unified Search',
    description: 'Find tech news, products, and trends all in one place.',
    url: 'https://www.gadgets-finds.com/unified-search',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_10fafe55b-1770570666016.png",
      width: 1200,
      height: 630,
      alt: 'Unified Search'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Unified Search',
    description: 'Find tech news, products, and trends all in one place.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

const UnifiedSearchPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <UnifiedSearchInteractive />
        <Footer />
      </main>
    </>
  );

};

export default UnifiedSearchPage;