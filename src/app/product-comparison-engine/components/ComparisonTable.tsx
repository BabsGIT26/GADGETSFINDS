'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import type { Product } from './ProductCard';

interface ComparisonTableProps {
  products: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
}

interface Specification {
  label: string;
  key: string;
}

const ComparisonTable = ({ products, onRemove, onClear }: ComparisonTableProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'reviews'>('overview');

  const specifications: Specification[] = [
    { label: 'Price', key: 'price' },
    { label: 'Expert Score', key: 'expertScore' },
    { label: 'User Rating', key: 'rating' },
    { label: 'Review Count', key: 'reviewCount' },
    { label: 'Availability', key: 'inStock' },
  ];

  if (products.length === 0) {
    return (
      <div className="bg-card rounded-lg border border-border p-12 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
            <Icon name="ScaleIcon" size={32} variant="outline" className="text-muted-foreground" />
          </div>
          <h3 className="font-display font-semibold text-xl text-foreground">
            No Products Selected
          </h3>
          <p className="text-muted-foreground">
            Select products from the list below to start comparing their features, specifications, and prices side by side.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-display font-semibold text-lg text-foreground flex items-center space-x-2">
          <Icon name="ScaleIcon" size={20} variant="outline" />
          <span>Comparing {products.length} Products</span>
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={onClear}
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors flex items-center space-x-1"
          >
            <Icon name="XMarkIcon" size={16} variant="outline" />
            <span>Clear All</span>
          </button>
          <button
            className="px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 rounded-md transition-colors flex items-center space-x-1"
            aria-label="Share comparison"
          >
            <Icon name="ShareIcon" size={16} variant="outline" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="flex space-x-1 p-2">
          {(['overview', 'specs', 'reviews'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="sticky left-0 bg-card z-10 p-4 text-left text-sm font-semibold text-foreground min-w-[200px]">
                Product
              </th>
              {products.map((product) => (
                <th key={product.id} className="p-4 min-w-[250px]">
                  <div className="space-y-3">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                      <AppImage
                        src={product.image}
                        alt={product.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => onRemove(product.id)}
                        className="absolute top-2 right-2 p-1.5 bg-card/90 hover:bg-card rounded-full transition-colors"
                        aria-label="Remove from comparison"
                      >
                        <Icon name="XMarkIcon" size={16} variant="outline" />
                      </button>
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground font-medium uppercase">
                        {product.brand}
                      </p>
                      <h3 className="font-display font-semibold text-sm text-foreground mt-1">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activeTab === 'overview' && (
              <>
                {specifications.map((spec, index) => (
                  <tr key={spec.key} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="sticky left-0 bg-card z-10 p-4 text-sm font-medium text-foreground border-r border-border">
                      {spec.label}
                    </td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {spec.key === 'price' && (
                          <span className="text-lg font-bold text-foreground">
                            ${product.price.toLocaleString()}
                          </span>
                        )}
                        {spec.key === 'expertScore' && (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="flex-1 max-w-[120px] bg-muted rounded-full h-2">
                              <div
                                className="bg-brand-secondary h-full rounded-full"
                                style={{ width: `${product.expertScore}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-brand-secondary">
                              {product.expertScore}
                            </span>
                          </div>
                        )}
                        {spec.key === 'rating' && (
                          <div className="flex items-center justify-center space-x-1">
                            <Icon name="StarIcon" size={16} variant="solid" className="text-brand-cta" />
                            <span className="text-sm font-medium text-foreground">
                              {product.rating}
                            </span>
                          </div>
                        )}
                        {spec.key === 'reviewCount' && (
                          <span className="text-sm text-muted-foreground">
                            {product.reviewCount} reviews
                          </span>
                        )}
                        {spec.key === 'inStock' && (
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              product.inStock
                                ? 'bg-success/10 text-success' :'bg-destructive/10 text-destructive'
                            }`}
                          >
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="sticky left-0 bg-card z-10 p-4 text-sm font-medium text-foreground border-r border-border">
                    Key Features
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4">
                      <div className="space-y-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon
                              name="CheckCircleIcon"
                              size={16}
                              variant="solid"
                              className="text-success mt-0.5 flex-shrink-0"
                            />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="bg-muted/30">
                  <td className="sticky left-0 bg-card z-10 p-4 text-sm font-medium text-foreground border-r border-border">
                    Action
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4">
                      <a
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full px-4 py-2 rounded-md text-sm font-semibold text-center transition-colors ${
                          product.inStock
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                            : 'bg-muted text-muted-foreground cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'View Deal' : 'Out of Stock'}
                      </a>
                    </td>
                  ))}
                </tr>
              </>
            )}
            {activeTab === 'specs' && (
              <tr>
                <td colSpan={products.length + 1} className="p-8 text-center">
                  <p className="text-muted-foreground">
                    Detailed specifications coming soon
                  </p>
                </td>
              </tr>
            )}
            {activeTab === 'reviews' && (
              <tr>
                <td colSpan={products.length + 1} className="p-8 text-center">
                  <p className="text-muted-foreground">
                    User reviews and expert opinions coming soon
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;