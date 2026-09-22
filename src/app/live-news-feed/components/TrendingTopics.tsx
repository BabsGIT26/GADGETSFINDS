'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Topic {
  id: string;
  name: string;
  count: number;
  trend: 'up' | 'down' | 'stable';
}

const TrendingTopics = () => {
  const topics: Topic[] = [
    { id: '1', name: 'CES 2026', count: 2847, trend: 'up' },
    { id: '2', name: 'AI Revolution', count: 1923, trend: 'up' },
    { id: '3', name: 'Quantum Computing', count: 1456, trend: 'up' },
    { id: '4', name: 'Foldable Phones', count: 1234, trend: 'stable' },
    { id: '5', name: 'AR Glasses', count: 987, trend: 'down' },
    { id: '6', name: 'EV Technology', count: 876, trend: 'up' },
  ];

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <Icon name="ArrowTrendingUpIcon" size={16} variant="solid" className="text-success" />;
      case 'down':
        return <Icon name="ArrowTrendingDownIcon" size={16} variant="solid" className="text-destructive" />;
      default:
        return <Icon name="MinusIcon" size={16} variant="solid" className="text-muted-foreground" />;
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Icon name="FireIcon" size={20} variant="solid" className="text-brand-accent" />
          Trending Topics
        </h3>
        <Link
          href="/trending"
          className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
        >
          View All
          <Icon name="ArrowRightIcon" size={14} variant="outline" />
        </Link>
      </div>

      <div className="space-y-3">
        {topics.map((topic, index) => (
          <Link
            key={topic.id}
            href={`/topic/${topic.id}`}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-muted-foreground w-6">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {topic.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(topic.count)} articles
                </p>
              </div>
            </div>
            {getTrendIcon(topic.trend)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;