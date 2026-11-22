'use client';

import ProductCard from '@/app/product-comparison-engine/components/ProductCard';
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

interface SearchResultsProps {
  results: { type: string }[];
  isSearching: boolean;
  searchQuery: string;
}

const SearchResults = ({ results, isSearching, searchQuery }: SearchResultsProps) => {
  const productResults = results.filter((item) => item.type === 'product') as Product[];

  const handleCompare = (productId: string) => {
    console.log('Compare product:', productId);
  };

  if (isSearching) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mb-4"></div>
        <p className="text-muted-foreground text-lg">Searching...</p>
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
    </div>
  );
};

export default SearchResults;