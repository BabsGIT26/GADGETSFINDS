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
      title: "Don't miss October Prime Day 2026: Try Amazon Prime free for 30 days!",
      excerpt: "Eligible new members can start a 30-day Amazon Prime trial before Prime Big Deal Days, October 6–7.",
      category: "Deals",
      image: "/assets/images/PRIME_OCTOBER_2026.png",
      alt: "Amazon Prime before Prime Big Deal Days",
      author: "",
      publishedDate: "2026-10-05",
      readTime: "5 min read",
      tags: ["Amazon", "Prime", "Deals"]
    },
    {
      id: 2,
      title: "These 12 deals are worth opening before October Prime Day",
      excerpt: "AirPods, MacBook, Ring, Blink and more. Prices change before you click.",
      category: "Deals",
      image: "/assets/images/october_deals_card.png",
      alt: "October Prime Day deals",
      author: "",
      publishedDate: "2026-10-04",
      readTime: "4 min read",
      tags: ["Deals", "October"]
    },
    {
      id: 3,
      title: "Amazon Outlet explained",
      excerpt: "Public clearance and overstock — not a secret club. How to read Outlet vs Warehouse.",
      category: "Guide",
      image: "/assets/images/amazon_outlet.png",
      alt: "Gadgets Finds",
      author: "",
      publishedDate: "2026-09-28",
      readTime: "6 min read",
      tags: ["Amazon", "Outlet", "Guide"]
    },
    {
      id: 4,
      title: "Quantum Computing Breakthrough: IBM Announces 1000-Qubit Processor",
      excerpt: "IBM's latest quantum processor marks a significant milestone in the race toward practical quantum computing.",
      category: "News",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_133e69454-1764670841086.png",
      alt: "Futuristic quantum computer processor with blue glowing circuits",
      author: "",
      publishedDate: "Jul 22, 2026",
      readTime: "6 min read",
      tags: ["Quantum Computing", "IBM", "Innovation"]
    },
    {
      id: 5,
      title: "Smart Home Security Systems: 2026 Comparison and Recommendations",
      excerpt: "Comprehensive analysis of the top smart home security systems, from DIY options to professional monitoring.",
      category: "Comparison",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3b7e4f7-1765090734789.png",
      alt: "Modern smart home security camera mounted on white wall",
      author: "",
      publishedDate: "Jul 11, 2026",
      readTime: "15 min read",
      tags: ["Smart Home", "Security", "Comparison"]
    },
    {
      id: 6,
      title: "iPhone 16 Pro vs Samsung Galaxy S26 Ultra: Ultimate Camera Showdown",
      excerpt: "How iPhone 16 Pro and Galaxy S26 Ultra compare on paper for photography.",
      category: "Comparison",
      image: "https://images.unsplash.com/photo-1730226172459-2cb1baa93762",
      alt: "iPhone and Samsung Galaxy smartphones side by side comparison on white background",
      author: "",
      publishedDate: "Jun 28, 2026",
      readTime: "10 min read",
      tags: ["Smartphones", "Photography", "Comparison"]
    },
    {
      id: 7,
      title: "AI-Powered Productivity Tools That Actually Work in 2026",
      excerpt: "Our team tested dozens of AI productivity tools to find the ones that genuinely improve workflow efficiency.",
      category: "Guide",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5481e82-1770938347610.png",
      alt: "Person using AI productivity software on laptop with holographic interface",
      author: "",
      publishedDate: "Jun 14, 2026",
      readTime: "9 min read",
      tags: ["AI", "Productivity", "Software"]
    },
    {
      id: 8,
      title: "Sony WH-2000XM6 Review: The New King of Noise Cancellation",
      excerpt: "Sony's latest flagship headphones set a new standard for active noise cancellation and audio quality.",
      category: "Review",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_13c1b7db7-1772147463184.png",
      alt: "Premium black wireless headphones with silver accents on white background",
      author: "",
      publishedDate: "Aug 7, 2026",
      readTime: "8 min read",
      tags: ["Audio", "Headphones", "Review"]
    },
    {
      id: 9,
      title: "Best Laptops for Developers in 2026: Complete Buying Guide",
      excerpt: "A 2026 buying guide to laptops for coding, from budget machines to workstations.",
      category: "Buying Guide",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_178ed799d-1785088751486.png",
      alt: "Modern laptop with code editor displayed on screen in dark workspace",
      author: "",
      publishedDate: "2026-03-18",
      readTime: "12 min read",
      tags: ["Laptops", "Development", "Buying Guide"]
    },
  ];

  const articleRoutes: { [key: number]: string } = {
    1: "/member-trial",
    2: "/october-deals",
    3: "/amazon-outlet-guide",
    4: "/quantum-computing-ibm-article",
    5: "/smart-home-security-systems-article",
    6: "/i-phone-16-pro-vs-samsung-comparison-article",
    7: "/ai-productivity-tools-2026-article",
    8: "/sony-wh-2000xm6-review-article",
    9: "/best-laptops-developers-2026",
  };

  const getFilteredItems = (): ContentItem[] => {
    switch (activeFilter) {
      case "Latest":
        return [...contentItems].sort((a, b) => {
          const dateA = new Date(a.publishedDate).getTime();
          const dateB = new Date(b.publishedDate).getTime();
          return dateB - dateA;
        });
      case "Trending":
        return contentItems.filter(
          (item) => item.category === "News" || item.category === "Comparison"
        );
      case "Reviews":
        return contentItems.filter((item) => item.category === "Review");
      case "Guides":
        return contentItems.filter(
          (item) => item.category === "Guide" || item.category === "Buying Guide"
        );
      case "See All":
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
          {contentItems.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-card rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <AppImage src={item.image} alt={item.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-bold text-foreground">Recommended</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            href={articleRoutes[item.id] || "/"}
            className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <AppImage src={item.image} alt={item.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.excerpt}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Icon name="Clock" size={14} />
                {item.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedContentStream;
