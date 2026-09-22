'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  category: string;
  urgency: string;
  sortBy: string;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeUrgency, setActiveUrgency] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    'All',
    'AI & Machine Learning',
    'Consumer Electronics',
    'Mobile Technology',
    'Gaming',
    'Enterprise Tech',
    'Emerging Tech',
  ];

  const urgencyLevels = ['All', 'Breaking', 'High', 'Normal'];

  const sortOptions = [
    { value: 'latest', label: 'Latest First', icon: 'ClockIcon' },
    { value: 'popular', label: 'Most Popular', icon: 'FireIcon' },
    { value: 'trending', label: 'Trending', icon: 'ArrowTrendingUpIcon' },
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onFilterChange({ category, urgency: activeUrgency, sortBy });
  };

  const handleUrgencyChange = (urgency: string) => {
    setActiveUrgency(urgency);
    onFilterChange({ category: activeCategory, urgency, sortBy });
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    onFilterChange({ category: activeCategory, urgency: activeUrgency, sortBy: sort });
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-4 mb-6">
      <div className="flex items-center justify-between mb-4 lg:mb-0">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Icon name="AdjustmentsHorizontalIcon" size={20} variant="outline" />
          Filters
        </h2>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle filters"
        >
          <Icon
            name={isFilterOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
            variant="outline"
          />
        </button>
      </div>

      <div className={`space-y-4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
        <div>
          <label className="text-sm font-semibold text-muted-foreground mb-2 block">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all min-h-[44px] flex items-center justify-center ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-muted-foreground mb-2 block">
              Urgency Level
            </label>
            <div className="flex flex-wrap gap-2">
              {urgencyLevels.map((urgency) => (
                <button
                  key={urgency}
                  onClick={() => handleUrgencyChange(urgency)}
                  className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all min-h-[44px] flex items-center justify-center ${
                    activeUrgency === urgency
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {urgency}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-muted-foreground mb-2 block">
              Sort By
            </label>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value)}
                  className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all flex items-center gap-2 min-h-[44px] ${
                    sortBy === option.value
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Icon name={option.icon as any} size={16} variant="outline" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;