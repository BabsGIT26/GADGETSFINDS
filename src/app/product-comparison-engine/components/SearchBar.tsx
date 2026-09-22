'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const popularSearches = [
    'Gaming Laptops',
    'iPhone 16',
    'Samsung Galaxy S26',
    'MacBook Pro 2026',
    'iPad Pro',
  ];

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`flex items-center bg-card border rounded-lg transition-all duration-300 ${
            isFocused ? 'border-primary shadow-lg' : 'border-border'
          }`}
        >
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            variant="outline"
            className="ml-4 text-muted-foreground"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search products, brands, or features..."
            className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                onSearch('');
              }}
              className="p-2 mr-2 hover:bg-muted rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Clear search"
            >
              <Icon name="XMarkIcon" size={18} variant="outline" />
            </button>
          )}
          <button
            type="submit"
            className="px-4 md:px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-r-lg hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            <span className="hidden sm:inline">Search</span>
            <Icon name="MagnifyingGlassIcon" size={18} variant="outline" className="sm:hidden" />
          </button>
        </div>
      </form>

      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="p-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Popular Searches
            </p>
            <div className="space-y-1">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuery(search);
                    onSearch(search);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors flex items-center space-x-2"
                >
                  <Icon name="ClockIcon" size={16} variant="outline" className="text-muted-foreground" />
                  <span>{search}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;