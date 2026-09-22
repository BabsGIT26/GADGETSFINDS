'use client';

import NewsCard from '@/app/live-news-feed/components/NewsCard';
import ProductCard from '@/app/product-comparison-engine/components/ProductCard';
import TrendCard from '@/app/tech-trends-2026/components/TrendCard';
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

interface SearchResultsProps {
  results: SearchResult[];
  isSearching: boolean;
  searchQuery: string;
}

const SearchResults = ({ results, isSearching, searchQuery }: SearchResultsProps) => {
  const newsResults = results.filter(r => r.type === 'news') as Article[];
  const productResults = results.filter(r => r.type === 'product') as Product[];
  const trendResults = results.filter(r => r.type === 'trend') as Trend[];

  const handleCompare = (productId: string) => {
    console.log('Compare product:', productId);
  };

  const handleShare = (trendId: number) => {
    console.log('Share trend:', trendId);
  };

  const handleDownload = (trendId: number) => {
    console.log('Download trend:', trendId);
  };

  if (isSearching) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mb-4"></div>
        <p className="text-muted-foreground text-lg">Searching across all content...</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-card rounded-lg border border-border">
        <Icon name="MagnifyingGlassIcon" size={64} variant="outline" className="text-muted-foreground mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">No results found</h3>
        <p className="text-muted-foreground text-center max-w-md">
          {searchQuery ? (
            <>No results for &quot;{searchQuery}&quot;. Try different keywords or adjust your filters.</>
          ) : (
            'Try adjusting your filters or search for something else.'
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">
          {results.length} {results.length === 1 ? 'Result' : 'Results'}
          {searchQuery && <span className="text-muted-foreground"> for &quot;{searchQuery}&quot;</span>}
        </h2>
      </div>

      {newsResults.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Icon name="NewspaperIcon" size={24} variant="outline" className="text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              News Articles ({newsResults.length})
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsResults.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}

      {productResults.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Icon name="ShoppingBagIcon" size={24} variant="outline" className="text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              Products ({productResults.length})
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productResults.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCompare={handleCompare}
                isComparing={false}
              />
            ))}
          </div>
        </div>
      )}

      {trendResults.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Icon name="ChartBarIcon" size={24} variant="outline" className="text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              Tech Trends ({trendResults.length})
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendResults.map((trend) => (
              <TrendCard
                key={trend.id}
                trend={trend}
                onShare={handleShare}
                onDownload={handleDownload}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;