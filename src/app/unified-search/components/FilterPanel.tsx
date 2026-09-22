'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  contentType: string[];
  category: string;
  dateRange: string;
  sortBy: string;
}

const FilterPanel = ({ filters, onFilterChange }: FilterPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const contentTypes = [
    { id: 'news', label: 'News', icon: 'NewspaperIcon' },
    { id: 'product', label: 'Products', icon: 'ShoppingBagIcon' },
    { id: 'trend', label: 'Trends', icon: 'ChartBarIcon' }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Consumer Electronics',
    'Mobile Technology',
    'Gaming',
    'Enterprise Tech',
    'Emerging Tech',
    'Hardware',
    'Software',
    'Connectivity',
    'Sustainability'
  ];

  const dateRanges = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant', icon: 'SparklesIcon' },
    { value: 'newest', label: 'Newest First', icon: 'ClockIcon' },
    { value: 'popular', label: 'Most Popular', icon: 'FireIcon' },
    { value: 'rating', label: 'Highest Rated', icon: 'StarIcon' }
  ];

  const handleContentTypeToggle = (type: string) => {
    const newContentTypes = filters.contentType.includes(type)
      ? filters.contentType.filter(t => t !== type)
      : [...filters.contentType, type];
    
    if (newContentTypes.length === 0) return;
    
    onFilterChange({ ...filters, contentType: newContentTypes });
  };

  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filters, category });
  };

  const handleDateRangeChange = (dateRange: string) => {
    onFilterChange({ ...filters, dateRange });
  };

  const handleSortChange = (sortBy: string) => {
    onFilterChange({ ...filters, sortBy });
  };

  const handleReset = () => {
    onFilterChange({
      contentType: ['news', 'product', 'trend'],
      category: 'All',
      dateRange: 'all',
      sortBy: 'relevance'
    });
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border sticky top-24">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-display font-semibold text-lg text-foreground flex items-center gap-2">
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
              Content Type
            </label>
            <div className="space-y-2">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleContentTypeToggle(type.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    filters.contentType.includes(type.id)
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Icon name={type.icon as any} size={18} variant="outline" />
                  <span>{type.label}</span>
                  {filters.contentType.includes(type.id) && (
                    <Icon name="CheckIcon" size={16} variant="solid" className="ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <label className="block text-sm font-semibold text-foreground mb-3">
              Category
            </label>
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    filters.category === category
                      ? 'bg-primary/10 text-primary font-medium' :'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <label className="block text-sm font-semibold text-foreground mb-3">
              Date Range
            </label>
            <div className="space-y-2">
              {dateRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => handleDateRangeChange(range.value)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    filters.dateRange === range.value
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <label className="block text-sm font-semibold text-foreground mb-3">
              Sort By
            </label>
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                    filters.sortBy === option.value
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Icon name={option.icon as any} size={16} variant="outline" />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <button
              onClick={handleReset}
              className="w-full px-4 py-2 bg-muted text-foreground rounded-md font-medium hover:bg-muted/80 transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="ArrowPathIcon" size={18} variant="outline" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;