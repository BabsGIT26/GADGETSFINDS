'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PulseMetric {
  category: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

const TechPulseMeter = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const metrics: PulseMetric[] = [
    { category: 'AI Innovation', value: 91, trend: 'up', change: 7 },
    { category: 'Consumer Tech', value: 72, trend: 'up', change: 1 },
    { category: 'Mobile Devices', value: 68, trend: 'down', change: -6 },
    { category: 'Gaming Hardware', value: 63, trend: 'down', change: -11 },
    { category: 'Smart Home', value: 78, trend: 'up', change: 4 },
  ];

  if (!isHydrated) {
    return (
      <div className="bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark rounded-xl p-8 border border-brand-primary/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-brand-text-primary">Live Tech Pulse</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            <span className="text-sm text-brand-text-secondary">Live</span>
          </div>
        </div>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-brand-text-primary font-medium">{metric.category}</span>
                <span className="text-2xl font-bold text-brand-primary">{metric.value}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full"
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark rounded-xl p-6 md:p-8 border border-brand-primary/20 shadow-2xl">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-2xl font-bold text-brand-text-primary">Live Tech Pulse</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
          <span className="text-xs md:text-sm text-brand-text-secondary">Live</span>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        {metrics.map((metric, index) => (
          <button
            key={index}
            onClick={() => setActiveMetric(index)}
            className={`w-full bg-slate-800/50 rounded-lg p-3 md:p-4 transition-all duration-300 hover:bg-slate-800 min-h-[60px] md:min-h-auto ${
              activeMetric === index ? 'ring-2 ring-brand-primary' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm md:text-base text-brand-text-primary font-medium">{metric.category}</span>
              <div className="flex items-center space-x-1 md:space-x-2">
                <span className="text-xl md:text-2xl font-bold text-brand-primary">{metric.value}</span>
                <div
                  className={`flex items-center space-x-1 ${
                    metric.trend === 'up' ?'text-green-400'
                      : metric.trend === 'down' ?'text-red-400' :'text-brand-text-secondary'
                  }`}
                >
                  <Icon
                    name={
                      metric.trend === 'up' ?'ArrowTrendingUpIcon'
                        : metric.trend === 'down' ?'ArrowTrendingDownIcon' :'MinusIcon'
                    }
                    size={14}
                    variant="solid"
                    className="md:w-4 md:h-4"
                  />
                  <span className="text-xs md:text-sm font-semibold">
                    {metric.change > 0 ? '+' : ''}
                    {metric.change}%
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full transition-all duration-500"
                style={{ width: `${metric.value}%` }}
              ></div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-700">
        <p className="text-xs md:text-sm text-brand-text-secondary text-center px-2">
          Updated every 5 minutes • Based on 10,000+ data points
        </p>
      </div>
    </div>
  );
};

export default TechPulseMeter;