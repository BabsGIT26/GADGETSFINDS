import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Tech Articles & In-Depth Reviews | Gadgets Finds',
  description: 'Explore our comprehensive collection of tech articles, product reviews, and industry analysis covering the latest gadgets and innovations.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/article-detail-page'
  },
  openGraph: {
    title: 'Tech Articles & Reviews | Gadgets Finds',
    description: 'Comprehensive tech articles and in-depth product reviews.',
    url: 'https://www.gadgets-finds.com/article-detail-page',
    type: 'website',
    images: [
    {
      url: "https://images.unsplash.com/photo-1603566235047-01d7ed16abc0",
      width: 1200,
      height: 630,
      alt: 'Tech Articles & Reviews'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Tech Articles & Reviews | Gadgets Finds',
    description: 'Comprehensive tech articles and in-depth product reviews.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

export default function ArticleDetailLayout({ children }: {children: React.ReactNode;}) {
  return <>{children}</>;
}