'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

const SearchBar = ({ onSearch, initialQuery = '' }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className={`flex items-center bg-card border rounded-lg transition-all duration-300 shadow-sm ${
          isFocused ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'border-border'
        }`}
      >
        <Icon
          name="MagnifyingGlassIcon"
          size={24}
          variant="outline"
          className="ml-4 text-muted-foreground"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search news, products, trends, categories..."
          className="flex-1 px-4 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-lg"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="p-2 mr-2 hover:bg-muted rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Clear search"
          >
            <Icon name="XMarkIcon" size={20} variant="outline" />
          </button>
        )}
        <button
          type="submit"
          className="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-semibold rounded-r-lg hover:bg-primary/90 transition-colors flex items-center gap-2 min-h-[44px]"
        >
          <span className="hidden sm:inline">Search</span>
          <Icon name="MagnifyingGlassIcon" size={18} variant="outline" className="sm:hidden" />
          <Icon name="ArrowRightIcon" size={18} variant="outline" className="hidden sm:inline" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;