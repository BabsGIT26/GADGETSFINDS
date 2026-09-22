import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface QuickAccessItem {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

const QuickAccessGrid = () => {
  const quickAccessItems: QuickAccessItem[] = [
    {
      title: 'Product Comparison',
      description: 'Compare specs, prices, and reviews side-by-side',
      icon: 'ScaleIcon',
      href: '/product-comparison-engine',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'CES 2026 Hub',
      description: 'Exclusive coverage of the biggest tech event',
      icon: 'SparklesIcon',
      href: '/ces-2026-hub',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tech Trends',
      description: 'Discover what\'s shaping technology in 2026',
      icon: 'ChartBarIcon',
      href: '/tech-trends-2026',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Live News Feed',
      description: 'Real-time updates from the tech world',
      icon: 'RssIcon',
      href: '/live-news-feed',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {quickAccessItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group bg-card rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary"
        >
          <div
            className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
          >
            <Icon name={item.icon as any} size={24} variant="outline" className="text-white" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
          <div className="mt-3 md:mt-4 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Explore</span>
            <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-1" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuickAccessGrid;