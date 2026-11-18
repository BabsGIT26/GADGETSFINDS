'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface BreakingNews {
  id: string;
  title: string;
  timestamp: string;
  href?: string;
}

interface BreakingNewsBannerProps {
  breakingNews?: BreakingNews[];
}

const BreakingNewsBanner = ({ breakingNews: propBreakingNews }: BreakingNewsBannerProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const breakingNews = propBreakingNews && propBreakingNews.length > 0 ? propBreakingNews : [];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || breakingNews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, breakingNews.length]);

  if (!isVisible || breakingNews.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground py-5 px-4 mb-6 rounded-lg shadow-lg relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow"></div>
      
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Icon name="BoltIcon" size={20} variant="solid" className="animate-pulse" />
            <span className="font-bold text-sm uppercase tracking-wider">Breaking</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <Link
              href={breakingNews[currentIndex]?.href || `/article-detail-page?id=${breakingNews[currentIndex]?.id}`}
              className="block hover:underline"
            >
              <p className="text-sm font-medium truncate">
                {breakingNews[currentIndex]?.title}
              </p>
              {isHydrated && (
                <p className="text-xs opacity-80 mt-1">
                  {breakingNews[currentIndex]?.timestamp}
                </p>
              )}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="hidden sm:flex items-center gap-1">
            {breakingNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to breaking news ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Close breaking news banner"
          >
            <Icon name="XMarkIcon" size={18} variant="outline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsBanner;