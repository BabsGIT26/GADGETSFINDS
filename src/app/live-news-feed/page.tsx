import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LiveNewsFeedInteractive from './components/LiveNewsFeedInteractive';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Live News Feed — Real-Time Tech News & Updates — Gadgets Finds',
  description: 'Stay updated with real-time tech news, breaking stories, and industry developments. Get instant access to the latest innovations, product launches, and expert analysis from the world of technology.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/live-news-feed'
  },
  openGraph: {
    title: 'Live News Feed',
    description: 'Real-time tech news, breaking stories, and industry developments.',
    url: 'https://www.gadgets-finds.com/live-news-feed',
    type: 'website',
    images: [
    {
      url: "https://images.unsplash.com/photo-1584559331997-cfd4be2ec08b",
      width: 1200,
      height: 630,
      alt: 'Live News Feed'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Live News Feed',
    description: 'Real-time tech news, breaking stories, and industry developments.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

export default function LiveNewsFeed() {
  return (
    <>
      <Header />
      <LiveNewsFeedInteractive />
      <Footer />
    </>);

}