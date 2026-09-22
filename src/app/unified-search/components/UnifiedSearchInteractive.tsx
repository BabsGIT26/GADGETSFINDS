'use client';

import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import SearchResults from './SearchResults';
import TrendingSuggestions from './TrendingSuggestions';
import Icon from '@/components/ui/AppIcon';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  urgency: 'breaking' | 'high' | 'normal';
  image: string;
  alt: string;
  author: string;
  authorImage: string;
  authorAlt: string;
  publishedAt: string;
  readTime: number;
  views: number;
  comments: number;
  type: 'news';
}

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  imageAlt: string;
  features: string[];
  expertScore: number;
  isNew?: boolean;
  inStock: boolean;
  affiliateLink: string;
  type: 'product';
}

interface Trend {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  impactScore: number;
  predictionAccuracy: number;
  timeframe: string;
  description: string;
  industries: string[];
  expertName: string;
  expertRole: string;
  expertImage: string;
  expertAlt: string;
  type: 'trend';
}

type SearchResult = Article | Product | Trend;

interface FilterState {
  contentType: string[];
  category: string;
  dateRange: string;
  sortBy: string;
}

const UnifiedSearchInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    contentType: ['news', 'product', 'trend'],
    category: 'All',
    dateRange: 'all',
    sortBy: 'relevance'
  });
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockArticles: Article[] = [
  {
    id: 'news-1',
    title: 'AI Revolution: New Language Models Surpass Human Performance',
    excerpt: 'Latest AI models demonstrate unprecedented capabilities in reasoning and problem-solving, marking a significant milestone in artificial intelligence development.',
    category: 'AI & Machine Learning',
    urgency: 'breaking',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_113c8f6f0-1764648553585.png",
    alt: 'Futuristic AI neural network visualization with glowing nodes and connections',
    author: 'Dr. Sarah Chen',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1dca24178-1774253692085.png",
    authorAlt: 'Professional Asian woman with glasses in white lab coat',
    publishedAt: '2 hours ago',
    readTime: 5,
    views: 12847,
    comments: 234,
    type: 'news'
  },
  {
    id: 'news-2',
    title: 'CES 2026: Revolutionary Foldable Devices Unveiled',
    excerpt: 'Major tech companies showcase next-generation foldable smartphones and tablets with improved durability and innovative form factors.',
    category: 'Consumer Electronics',
    urgency: 'high',
    image: "https://images.unsplash.com/photo-1568378711447-f5eef04d85b5",
    alt: 'Sleek foldable smartphone with flexible display showing vibrant colors',
    author: 'Michael Torres',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19cb92770-1763295460082.png",
    authorAlt: 'Professional male tech journalist with headset',
    publishedAt: '5 hours ago',
    readTime: 4,
    views: 8932,
    comments: 156,
    type: 'news'
  },
  {
    id: 'news-3',
    title: 'Quantum Computing Breakthrough: 1000-Qubit Processor Achieved',
    excerpt: 'Researchers announce successful development of a 1000-qubit quantum processor, bringing practical quantum computing closer to reality.',
    category: 'Emerging Tech',
    urgency: 'high',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1376ea3cf-1767029942992.png',
    alt: 'Quantum computer processor with blue glowing circuits',
    author: 'Dr. James Liu',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_173966f57-1767532976289.png",
    authorAlt: 'Asian male scientist in laboratory setting',
    publishedAt: '1 day ago',
    readTime: 6,
    views: 15234,
    comments: 389,
    type: 'news'
  }];


  const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'MacBook Pro 16" M4 Max',
    brand: 'Apple',
    category: 'laptops',
    price: 3499,
    originalPrice: 3999,
    rating: 4.8,
    reviewCount: 2847,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_124fee632-1779414333483.png",
    imageAlt: 'Silver MacBook Pro laptop with glowing Apple logo',
    features: ['M4 Max Chip', '64GB RAM', '2TB SSD', 'Liquid Retina XDR'],
    expertScore: 96,
    isNew: true,
    inStock: true,
    affiliateLink: 'https://www.amazon.com/s?k=MacBook+Pro+16+M4+Max&tag=gadgetsfindswebsite-20',
    type: 'product'
  },
  {
    id: 'prod-2',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    price: 1399,
    rating: 4.9,
    reviewCount: 5621,
    image: "https://images.unsplash.com/photo-1608223483220-0fcfd087c502",
    imageAlt: 'Sleek black iPhone with triple camera system',
    features: ['A18 Pro Chip', '8GB RAM', 'Titanium Design', 'ProMotion 120Hz'],
    expertScore: 98,
    isNew: true,
    inStock: true,
    affiliateLink: 'https://www.amazon.com/s?k=iPhone+16+Pro+Max&tag=gadgetsfindswebsite-20',
    type: 'product'
  },
  {
    id: 'prod-3',
    name: 'Samsung Galaxy S26 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    price: 1299,
    originalPrice: 1399,
    rating: 4.7,
    reviewCount: 4238,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11524cc20-1772392472210.png",
    imageAlt: 'Samsung smartphone with curved edge display',
    features: ['Snapdragon 8 Gen 4', '12GB RAM', '200MP Camera', 'S Pen Support'],
    expertScore: 95,
    inStock: true,
    affiliateLink: 'https://www.amazon.com/s?k=Samsung+Galaxy+S26+Ultra&tag=gadgetsfindswebsite-20',
    type: 'product'
  }];


  const mockTrends: Trend[] = [
  {
    id: 1,
    title: 'Quantum Computing Reaches Commercial Viability',
    category: 'Hardware',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1376ea3cf-1767029942992.png',
    alt: 'Quantum computer processor with blue glowing circuits',
    impactScore: 9.5,
    predictionAccuracy: 87,
    timeframe: 'Q2 2026',
    description: 'Major tech companies announce first commercially available quantum computers for enterprise use.',
    industries: ['Finance', 'Healthcare', 'Cybersecurity'],
    expertName: 'Dr. Sarah Chen',
    expertRole: 'Quantum Computing Lead at MIT',
    expertImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1dca24178-1774253692085.png",
    expertAlt: 'Professional Asian woman with glasses in white lab coat',
    type: 'trend'
  },
  {
    id: 2,
    title: 'AI-Powered Personal Health Assistants Go Mainstream',
    category: 'AI & ML',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_148a37f7b-1785913407903.png",
    alt: 'Smartphone displaying health monitoring app with graphs',
    impactScore: 8.8,
    predictionAccuracy: 92,
    timeframe: 'Q1 2026',
    description: 'Advanced AI health assistants integrate with wearables for real-time medical insights.',
    industries: ['Healthcare', 'Wellness', 'Insurance'],
    expertName: 'Dr. Michael Torres',
    expertRole: 'AI Healthcare Researcher',
    expertImage: "https://img.rocket.new/generatedImages/rocket_gen_img_150ac05d3-1768204091448.png",
    expertAlt: 'Professional male tech researcher',
    type: 'trend'
  }];


  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    setHasSearched(true);

    setTimeout(() => {
      const allData: SearchResult[] = [
      ...mockArticles,
      ...mockProducts,
      ...mockTrends];


      let filtered = allData;

      if (query.trim()) {
        const lowerQuery = query.toLowerCase();
        filtered = filtered.filter((item) => {
          if (item.type === 'news') {
            return item.title.toLowerCase().includes(lowerQuery) ||
            item.excerpt.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery);
          } else if (item.type === 'product') {
            return item.name.toLowerCase().includes(lowerQuery) ||
            item.brand.toLowerCase().includes(lowerQuery) ||
            item.features.some((f) => f.toLowerCase().includes(lowerQuery));
          } else {
            return item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery);
          }
        });
      }

      if (filters.contentType.length < 3) {
        filtered = filtered.filter((item) => filters.contentType.includes(item.type));
      }

      if (filters.category !== 'All') {
        filtered = filtered.filter((item) => {
          if (item.type === 'news' || item.type === 'trend') {
            return item.category === filters.category;
          } else if (item.type === 'product') {
            return item.category === filters.category.toLowerCase();
          }
          return true;
        });
      }

      if (filters.dateRange !== 'all') {
        filtered = filtered.filter((item) => {
          if (item.type === 'news') {
            const publishedText = item.publishedAt.toLowerCase();
            if (filters.dateRange === 'today') return publishedText.includes('hour') || publishedText.includes('min');
            if (filters.dateRange === 'week') return publishedText.includes('day') || publishedText.includes('hour');
            if (filters.dateRange === 'month') return true;
          }
          return true;
        });
      }

      if (filters.sortBy === 'newest') {
        filtered.sort((a, b) => {
          if (a.type === 'news' && b.type === 'news') {
            return a.publishedAt.localeCompare(b.publishedAt);
          }
          return 0;
        });
      } else if (filters.sortBy === 'popular') {
        filtered.sort((a, b) => {
          if (a.type === 'news' && b.type === 'news') {
            return b.views - a.views;
          } else if (a.type === 'product' && b.type === 'product') {
            return b.reviewCount - a.reviewCount;
          }
          return 0;
        });
      } else if (filters.sortBy === 'rating') {
        filtered.sort((a, b) => {
          if (a.type === 'product' && b.type === 'product') {
            return b.rating - a.rating;
          } else if (a.type === 'trend' && b.type === 'trend') {
            return b.impactScore - a.impactScore;
          }
          return 0;
        });
      }

      setResults(filtered);
      setIsSearching(false);
    }, 500);
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    if (hasSearched) {
      handleSearch(searchQuery);
    }
  };

  if (!isHydrated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-16 bg-muted rounded-lg"></div>
          <div className="h-96 bg-muted rounded-lg"></div>
        </div>
      </div>);

  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-foreground mb-2 flex items-center gap-3">
          <Icon name="MagnifyingGlassIcon" size={36} variant="outline" className="text-primary" />
          Unified Search
        </h1>
        <p className="text-muted-foreground text-lg">
          Search across tech news, products, and trends in one place
        </p>
      </div>

      <div className="mb-6">
        <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
      </div>

      {!hasSearched &&
      <TrendingSuggestions onSuggestionClick={handleSearch} />
      }

      {hasSearched &&
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </div>

          <div className="lg:col-span-3">
            <SearchResults
            results={results}
            isSearching={isSearching}
            searchQuery={searchQuery} />

          </div>
        </div>
      }
    </div>);

};

export default UnifiedSearchInteractive;