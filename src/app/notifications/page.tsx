'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Icon from '@/components/ui/AppIcon';

interface Notification {
  id: number;
  type: 'breaking' | 'trending' | 'review' | 'update';
  title: string;
  description: string;
  time: string;
  read: boolean;
  href: string;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: 'breaking',
    title: 'Breaking: NVIDIA RTX 6090 Ti Announced',
    description: 'NVIDIA just unveiled the RTX 6090 Ti with unprecedented performance benchmarks at CES 2026.',
    time: '2 minutes ago',
    read: false,
    href: '/nvidia-rtx-6090-ti-article',
  },
  {
    id: 2,
    type: 'trending',
    title: 'Apple M4 Chip Review Is Trending',
    description: 'Our in-depth Apple M4 chip review is now one of the most-read articles this week.',
    time: '1 hour ago',
    read: false,
    href: '/apple-m4-chip-article',
  },
  {
    id: 3,
    type: 'review',
    title: 'New Review: Sony WH-2000XM6',
    description: 'We published a full review of the Sony WH-2000XM6 headphones. See how they compare.',
    time: '3 hours ago',
    read: false,
    href: '/sony-wh-2000xm6-review-article',
  },
  {
    id: 4,
    type: 'update',
    title: 'CES 2026 Hub Updated',
    description: 'New product launches and event schedules have been added to the CES 2026 Hub.',
    time: '5 hours ago',
    read: true,
    href: '/ces-2026-hub',
  },
  {
    id: 5,
    type: 'trending',
    title: 'Samsung Galaxy S26 Ultra vs iPhone 16 Pro',
    description: 'Our comparison article is going viral — find out which flagship wins in 2026.',
    time: '8 hours ago',
    read: true,
    href: '/i-phone-16-pro-vs-samsung-comparison-article',
  },
  {
    id: 6,
    type: 'update',
    title: 'Tech Trends 2026 Report Published',
    description: 'Our annual Tech Trends 2026 report is live. Explore the top 6 trends shaping the future.',
    time: '1 day ago',
    read: true,
    href: '/tech-trends-2026',
  },
  {
    id: 7,
    type: 'breaking',
    title: 'Tesla Robotaxi Officially Launches',
    description: 'Tesla has officially launched its Robotaxi service in select cities across the US.',
    time: '2 days ago',
    read: true,
    href: '/tesla-robotaxi-article',
  },
];

const typeConfig: Record<Notification['type'], { icon: string; color: string; label: string }> = {
  breaking: { icon: 'BoltIcon', color: 'text-red-500 bg-red-50', label: 'Breaking' },
  trending: { icon: 'FireIcon', color: 'text-orange-500 bg-orange-50', label: 'Trending' },
  review: { icon: 'StarIcon', color: 'text-yellow-500 bg-yellow-50', label: 'Review' },
  update: { icon: 'ArrowPathIcon', color: 'text-blue-500 bg-blue-50', label: 'Update' },
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const filtered = filter === 'unread' ? notifications.filter((n) => !n.read) : notifications;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Icon name="BellIcon" size={28} variant="outline" className="text-foreground" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
                <p className="text-sm text-muted-foreground">
                  {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
                </p>
              </div>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Mark all as read
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all' ?'bg-card text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              All ({notifications.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'unread' ?'bg-card text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Unread ({unreadCount})
            </button>
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <Icon name="BellSlashIcon" size={48} variant="outline" className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">No unread notifications</p>
                <p className="text-sm text-muted-foreground mt-1">You&apos;re all caught up!</p>
              </div>
            ) : (
              filtered.map((notification) => {
                const config = typeConfig[notification.type];
                return (
                  <Link
                    key={notification.id}
                    href={notification.href}
                    onClick={() => markRead(notification.id)}
                    className={`block rounded-xl border transition-all hover:shadow-md ${
                      notification.read
                        ? 'bg-card border-border' :'bg-blue-50/40 border-blue-200'
                    }`}
                  >
                    <div className="flex items-start space-x-4 p-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${config.color}`}>
                        <Icon name={config.icon} size={20} variant="solid" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`text-xs font-semibold uppercase tracking-wide ${config.color.split(' ')[0]}`}>
                            {config.label}
                          </span>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          )}
                        </div>
                        <p className={`text-sm font-semibold leading-snug mb-1 ${notification.read ? 'text-foreground' : 'text-foreground'}`}>
                          {notification.title}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {notification.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>

                      {/* Arrow */}
                      <Icon name="ChevronRightIcon" size={16} variant="outline" className="text-muted-foreground flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
