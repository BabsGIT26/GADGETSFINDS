import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface TrendCardProps {
  trend: {
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
    slug: string;
  };
  onShare: (trendId: number) => void;
}

const TrendCard = ({ trend, onShare }: TrendCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <AppImage
          src={trend.image}
          alt={trend.alt}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-primary text-brand-dark text-xs font-semibold rounded-full">
            {trend.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-brand-dark/80 text-brand-text-primary text-xs font-semibold rounded-full backdrop-blur-sm">
            {trend.timeframe}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
          {trend.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {trend.description}
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Impact Score</span>
              <span className="text-xs font-semibold text-brand-primary">
                {trend.impactScore}/10
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full transition-all duration-500"
                style={{ width: `${trend.impactScore * 10}%` }}
              ></div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Accuracy</span>
              <span className="text-xs font-semibold text-success">
                {trend.predictionAccuracy}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-gradient-to-r from-success to-brand-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${trend.predictionAccuracy}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {trend.industries.map((industry, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {industry}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end pt-4 border-t border-border mt-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onShare(trend.id)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Share trend"
            >
              <Icon name="ShareIcon" size={18} variant="outline" />
            </button>
            <Link
              href={`/tech-trends-2026/${trend.slug}`}
              className="flex items-center gap-1 px-3 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Explore
              <Icon name="ArrowRightIcon" size={14} variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;