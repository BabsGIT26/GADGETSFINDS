'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface LiveIndicatorProps {
  updateCount: number;
  lastUpdateTime: Date;
  isLive: boolean;
}

const LiveIndicator = ({ updateCount, lastUpdateTime, isLive }: LiveIndicatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [timeSinceUpdate, setTimeSinceUpdate] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const updateTimeSince = () => {
      const now = new Date();
      const diffMs = now.getTime() - lastUpdateTime.getTime();
      const diffSecs = Math.floor(diffMs / 1000);
      const diffMins = Math.floor(diffSecs / 60);

      if (diffSecs < 60) {
        setTimeSinceUpdate(`Updated ${diffSecs}s ago`);
      } else if (diffMins < 60) {
        setTimeSinceUpdate(`Updated ${diffMins}m ago`);
      } else {
        setTimeSinceUpdate('Updated recently');
      }
    };

    updateTimeSince();
    const interval = setInterval(updateTimeSince, 1000);

    return () => clearInterval(interval);
  }, [isHydrated, lastUpdateTime]);

  return (
    <div className="flex items-center gap-4 bg-card rounded-lg shadow-sm border border-border px-4 py-3 mb-6">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-brand-primary animate-pulse' : 'bg-muted-foreground'}`}></div>
          {isLive && <div className="absolute inset-0 w-3 h-3 bg-brand-primary rounded-full animate-ping"></div>}
        </div>
        <span className="text-sm font-bold text-foreground">{isLive ? 'LIVE' : 'OFFLINE'}</span>
      </div>
      
      <div className="h-4 w-px bg-border"></div>
      
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon name="ArrowPathIcon" size={16} variant="outline" />
        <span className="text-sm">
          {isHydrated ? (updateCount > 0 ? timeSinceUpdate : 'Just updated') : 'Updating...'}
        </span>
      </div>
    </div>
  );
};

export default LiveIndicator;