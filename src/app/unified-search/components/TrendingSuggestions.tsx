'use client';

import Icon from '@/components/ui/AppIcon';

interface TrendingSuggestionsProps {
  onSuggestionClick: (query: string) => void;
}

const TrendingSuggestions = ({ onSuggestionClick }: TrendingSuggestionsProps) => {
  const trendingTopics = [
    { id: '1', name: 'CES 2026', icon: 'SparklesIcon', count: 2847 },
    { id: '2', name: 'AI Revolution', icon: 'CpuChipIcon', count: 1923 },
    { id: '3', name: 'Quantum Computing', icon: 'CircleStackIcon', count: 1456 },
    { id: '4', name: 'Foldable Phones', icon: 'DevicePhoneMobileIcon', count: 1234 },
    { id: '5', name: 'MacBook Pro M4', icon: 'ComputerDesktopIcon', count: 987 },
    { id: '6', name: 'iPhone 16 Pro', icon: 'DevicePhoneMobileIcon', count: 876 }
  ];

  const popularSearches = [
    'Latest AI developments',
    'Best smartphones 2026',
    'Quantum computing trends',
    'Gaming laptops comparison',
    'Sustainable tech innovations',
    'AR glasses reviews'
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg shadow-sm border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="FireIcon" size={24} variant="solid" className="text-brand-accent" />
          <h3 className="text-xl font-bold text-foreground">Trending Topics</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {trendingTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSuggestionClick(topic.name)}
              className="flex items-center gap-3 p-4 bg-muted hover:bg-primary/10 rounded-lg transition-all duration-300 group border border-transparent hover:border-primary"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name={topic.icon as any} size={20} variant="outline" className="text-primary" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {topic.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {topic.count.toLocaleString()} results
                </p>
              </div>
              <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-sm border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="ClockIcon" size={24} variant="outline" className="text-primary" />
          <h3 className="text-xl font-bold text-foreground">Popular Searches</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(search)}
              className="px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md"
            >
              {search}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-lg border border-primary/20 p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon name="LightBulbIcon" size={24} variant="solid" className="text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-2">Search Tips</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Use specific keywords for better results</li>
              <li>• Filter by content type to narrow down results</li>
              <li>• Try category filters for targeted searches</li>
              <li>• Sort by newest to see latest content first</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSuggestions;