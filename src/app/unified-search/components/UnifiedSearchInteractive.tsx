'use client';

import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import SearchResults from './SearchResults';
import TrendingSuggestions from './TrendingSuggestions';
import Icon from '@/components/ui/AppIcon';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  imageAlt: string;
  features: string[];
  isNew?: boolean;
  affiliateLink: string;
  type: 'product';
}

type SearchResult = Product;

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

  const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'MacBook Pro 16" M4 Max',
    brand: 'Apple',
    category: 'laptops',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_124fee632-1779414333483.png",
    imageAlt: 'Silver MacBook Pro laptop with glowing Apple logo',
    features: ['M4 Max Chip', '64GB RAM', '2TB SSD', 'Liquid Retina XDR'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=MacBook+Pro+16+M4+Max&tag=gadgetsfindswebsite-20',
    type: 'product'
  },
  {
    id: 'prod-2',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    image: "https://images.unsplash.com/photo-1608223483220-0fcfd087c502",
    imageAlt: 'Sleek black iPhone with triple camera system',
    features: ['A18 Pro Chip', '8GB RAM', 'Titanium Design', 'ProMotion 120Hz'],
    isNew: true,
    affiliateLink: 'https://www.amazon.com/s?k=iPhone+16+Pro+Max&tag=gadgetsfindswebsite-20',
    type: 'product'
  },
  {
    id: 'prod-3',
    name: 'Samsung Galaxy S26 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11524cc20-1772392472210.png",
    imageAlt: 'Samsung smartphone with curved edge display',
    features: ['Snapdragon 8 Gen 4', '12GB RAM', '200MP Camera', 'S Pen Support'],
    affiliateLink: 'https://www.amazon.com/s?k=Samsung+Galaxy+S26+Ultra&tag=gadgetsfindswebsite-20',
    type: 'product'
  }];


  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    setHasSearched(true);

    setTimeout(() => {
      const allData: SearchResult[] = [...mockProducts];


      let filtered = allData;

      if (query.trim()) {
        const lowerQuery = query.toLowerCase();
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(lowerQuery) ||
          item.brand.toLowerCase().includes(lowerQuery) ||
          item.features.some((f) => f.toLowerCase().includes(lowerQuery))
        );
      }

      if (filters.category !== 'All') {
        filtered = filtered.filter((item) => item.category === filters.category.toLowerCase());
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
          Search the gadgets we cover, then check the current price on Amazon
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