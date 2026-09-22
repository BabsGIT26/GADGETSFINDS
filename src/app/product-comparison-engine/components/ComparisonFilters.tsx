'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface ComparisonFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  brands: string[];
  features: string[];
  sortBy: string;
}

const ComparisonFilters = ({ onFilterChange }: ComparisonFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: [0, 5000],
    brands: [],
    features: [],
    sortBy: 'relevance',
  });

  const categories: FilterOption[] = [
    { id: 'all', label: 'All Products', value: 'all' },
    { id: 'laptops', label: 'Laptops', value: 'laptops' },
    { id: 'smartphones', label: 'Smartphones', value: 'smartphones' },
    { id: 'tablets', label: 'Tablets', value: 'tablets' },
    { id: 'wearables', label: 'Wearables', value: 'wearables' },
    { id: 'audio', label: 'Audio', value: 'audio' },
    { id: 'gaming', label: 'Gaming', value: 'gaming' },
    { id: 'drones', label: 'Drones', value: 'drones' },
    { id: 'cameras', label: 'Cameras', value: 'cameras' },
    { id: 'vr-ar', label: 'VR / AR', value: 'vr-ar' },
    { id: 'smart-home', label: 'Smart Home', value: 'smart-home' },
  ];

  const brands: FilterOption[] = [
    { id: 'apple', label: 'Apple', value: 'apple' },
    { id: 'samsung', label: 'Samsung', value: 'samsung' },
    { id: 'dell', label: 'Dell', value: 'dell' },
    { id: 'hp', label: 'HP', value: 'hp' },
    { id: 'lenovo', label: 'Lenovo', value: 'lenovo' },
    { id: 'google', label: 'Google', value: 'google' },
    { id: 'sony', label: 'Sony', value: 'sony' },
    { id: 'asus', label: 'ASUS', value: 'asus' },
    { id: 'razer', label: 'Razer', value: 'razer' },
    { id: 'microsoft', label: 'Microsoft', value: 'microsoft' },
    { id: 'nintendo', label: 'Nintendo', value: 'nintendo' },
    { id: 'dji', label: 'DJI', value: 'dji' },
    { id: 'bose', label: 'Bose', value: 'bose' },
    { id: 'gopro', label: 'GoPro', value: 'gopro' },
    { id: 'meta', label: 'Meta', value: 'meta' },
    { id: 'amazon', label: 'Amazon', value: 'amazon' },
    { id: 'garmin', label: 'Garmin', value: 'garmin' },
    { id: 'canon', label: 'Canon', value: 'canon' },
    { id: 'nvidia', label: 'NVIDIA', value: 'nvidia' },
  ];

  const features: FilterOption[] = [
    { id: '5g', label: '5G Connectivity', value: '5g' },
    { id: 'ai', label: 'AI-Powered', value: 'ai' },
    { id: 'wireless', label: 'Wireless Charging', value: 'wireless' },
    { id: 'waterproof', label: 'Water Resistant', value: 'waterproof' },
    { id: 'touchscreen', label: 'Touchscreen', value: 'touchscreen' },
  ];

  const sortOptions: FilterOption[] = [
    { id: 'relevance', label: 'Most Relevant', value: 'relevance' },
    { id: 'price-low', label: 'Price: Low to High', value: 'price-low' },
    { id: 'price-high', label: 'Price: High to Low', value: 'price-high' },
    { id: 'rating', label: 'Highest Rated', value: 'rating' },
    { id: 'newest', label: 'Newest First', value: 'newest' },
  ];

  const handleCategoryChange = (category: string) => {
    const newFilters = { ...filters, category };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (index: number, value: number) => {
    const newPriceRange: [number, number] = [...filters.priceRange] as [number, number];
    newPriceRange[index] = value;
    const newFilters = { ...filters, priceRange: newPriceRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    const newFilters = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter((f) => f !== feature)
      : [...filters.features, feature];
    const newFilters = { ...filters, features: newFeatures };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (sortBy: string) => {
    const newFilters = { ...filters, sortBy };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      category: 'all',
      priceRange: [0, 5000],
      brands: [],
      features: [],
      sortBy: 'relevance',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-display font-semibold text-lg text-foreground flex items-center space-x-2">
          <Icon name="AdjustmentsHorizontalIcon" size={20} variant="outline" />
          <span>Filters</span>
        </h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 hover:bg-muted rounded-md transition-colors lg:hidden"
          aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
        >
          <Icon
            name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
            variant="outline"
          />
        </button>
      </div>

      <div className={`${isExpanded ? 'block' : 'hidden lg:block'}`}>
        <div className="p-4 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Category
            </label>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    filters.category === category.value
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Price Range
            </label>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Brands
            </label>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label
                  key={brand.id}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand.value)}
                    onChange={() => handleBrandToggle(brand.value)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {brand.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Features
            </label>
            <div className="space-y-2">
              {features.map((feature) => (
                <label
                  key={feature.id}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.features.includes(feature.value)}
                    onChange={() => handleFeatureToggle(feature.value)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Sort By
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-3 py-2 bg-muted border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleReset}
            className="w-full px-4 py-2 bg-muted text-foreground rounded-md text-sm font-medium hover:bg-muted/80 transition-colors flex items-center justify-center space-x-2"
          >
            <Icon name="ArrowPathIcon" size={16} variant="outline" />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonFilters;