'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ContentItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  author: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
}

const PersonalizedContentStream = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('See All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const filters = ['See All', 'Latest', 'Trending', 'Reviews', 'Guides'];

  const contentItems: ContentItem[] = [
  {
    id: 1,
    title: 'Best Laptops for Developers in 2026: Complete Buying Guide',
    excerpt: 'We tested 50+ laptops to find the perfect machines for coding, from budget-friendly options to high-end workstations.',
    category: 'Buying Guide',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_178ed799d-1785088751486.png",
    alt: 'Modern laptop with code editor displayed on screen in dark workspace',
    author: '',
    publishedDate: '2026-03-18',
    readTime: '12 min read',
    tags: ['Laptops', 'Development', 'Buying Guide']
  },
  {
    id: 2,
    title: 'Sony WH-2000XM6 Review: The New King of Noise Cancellation',
    excerpt: 'Sony\'s latest flagship headphones set a new standard for active noise cancellation and audio quality.',
    category: 'Review',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13c1b7db7-1772147463184.png",
    alt: 'Premium black wireless headphones with silver accents on white background',
    author: '',
    publishedDate: 'Aug 7, 2026',
    readTime: '8 min read',
    tags: ['Audio', 'Headphones', 'Review']
  },
  {
    id: 3,
    title: 'Quantum Computing Breakthrough: IBM Announces 1000-Qubit Processor',
    excerpt: 'IBM\'s latest quantum processor marks a significant milestone in the race toward practical quantum computing.',
    category: 'News',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_133e69454-1764670841086.png",
    alt: 'Futuristic quantum computer processor with blue glowing circuits',
    author: '',
    publishedDate: 'Jul 22, 2026',
    readTime: '6 min read',
    tags: ['Quantum Computing', 'IBM', 'Innovation']
  },
  {
    id: 4,
    title: 'Smart Home Security Systems: 2026 Comparison and Recommendations',
    excerpt: 'Comprehensive analysis of the top smart home security systems, from DIY options to professional monitoring.',
    category: 'Comparison',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3b7e4f7-1765090734789.png",
    alt: 'Modern smart home security camera mounted on white wall',
    author: '',
    publishedDate: 'Jul 11, 2026',
    readTime: '15 min read',
    tags: ['Smart Home', 'Security', 'Comparison']
  },
  {
    id: 5,
    title: 'iPhone 16 Pro vs Samsung Galaxy S26 Ultra: Ultimate Camera Showdown',
    excerpt: 'We put the two flagship smartphones through extensive camera testing to determine the mobile photography champion.',
    category: 'Comparison',
    image: "https://images.unsplash.com/photo-1730226172459-2cb1baa93762",
    alt: 'iPhone and Samsung Galaxy smartphones side by side comparison on white background',
    author: '',
    publishedDate: 'Jun 28, 2026',
    readTime: '10 min read',
    tags: ['Smartphones', 'Photography', 'Comparison']
  },
  {
    id: 6,
    title: 'AI-Powered Productivity Tools That Actually Work in 2026',
    excerpt: 'Our team tested dozens of AI productivity tools to find the ones that genuinely improve workflow efficiency.',
    category: 'Guide',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5481e82-1770938347610.png",
    alt: 'Person using AI productivity software on laptop with holographic interface',
    author: '',
    publishedDate: 'Jun 14, 2026',
    readTime: '9 min read',
    tags: ['AI', 'Productivity', 'Software']
  }];

  const articleRoutes: {[key: number]: string;} = {
    1: '/best-laptops-developers-2026',
    2: '/sony-wh-2000xm6-review-article',
    3: '/quantum-computing-ibm-article',
    4: '/smart-home-security-systems-article',
    5: '/i-phone-16-pro-vs-samsung-comparison-article',
    6: '/ai-productivity-tools-2026-article'
  };

  const getFilteredItems = (): ContentItem[] => {
    switch (activeFilter) {
      case 'Latest':
        // Sort by most recent date and return all
        return [...contentItems].sort((a, b) => {
          const dateA = new Date(a.publishedDate).getTime();
          const dateB = new Date(b.publishedDate).getTime();
          return dateB - dateA;
        });
      case 'Trending':
        // Trending: News and Comparison categories
        return contentItems.filter((item) =>
        item.category === 'News' || item.category === 'Comparison'
        );
      case 'Reviews':
        // Reviews: Review category
        return contentItems.filter((item) =>
        item.category === 'Review'
        );
      case 'Guides':
        // Guides: Guide and Buying Guide categories
        return contentItems.filter((item) =>
        item.category === 'Guide' || item.category === 'Buying Guide'
        );
      case 'See All':
      default:
        return contentItems;
    }
  };

  const filteredItems = getFilteredItems();

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Recommended</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.slice(0, 3).map((item) =>
          <div key={item.id} className="bg-card rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <AppImage src={item.image} alt={item.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-3">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.author}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>);

  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3 md:gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Recommended</h2>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
          {filters.map((filter) =>
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 md:px-4 py-2 rounded-lg font-medium text-xs md:text-sm whitespace-nowrap transition-colors min-h-[44px] flex items-center justify-center ${
            activeFilter === filter ?
            'bg-primary text-primary-foreground' :
            'bg-muted text-muted-foreground hover:bg-muted/80'}`
            }>
            
              {filter}
          </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredItems.map((item) => {
          // Map each article to its correct dedicated page

          return (
            <Link
              key={item.id}
              href={articleRoutes[item.id] || '/homepage'}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">

              <div className="relative h-40 md:h-48 overflow-hidden">
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-semibold text-foreground">{item.readTime}</span>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2 md:mb-3">
                  {item.category}
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">{item.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium">{item.author}</span>
                  <span>{item.publishedDate}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 md:mt-3">
                  {item.tags.slice(0, 2).map((tag) =>
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">

                      {tag}
                    </span>
                  )}
                </div>
              </div>
            </Link>);

        })}
      </div>

      <div className="flex justify-center pt-2 md:pt-4">
        <Link
          href="/live-news-feed"
          className="inline-flex items-center space-x-2 px-5 md:px-6 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm md:text-base hover:bg-primary/90 transition-colors">

          <span>View All Articles</span>
          <Icon name="ArrowRightIcon" size={20} variant="outline" />
        </Link>
      </div>
    </div>);

};

export default PersonalizedContentStream;