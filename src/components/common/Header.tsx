'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const STORAGE_KEY = 'gadgets_read_notif_ids';

function getReadIds(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveReadIds(ids: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
  } catch {
    // ignore
  }
}

interface Notification {
  id: string;
  type: 'breaking' | 'trending' | 'review' | 'update';
  title: string;
  description: string;
  time: string;
  read: boolean;
  href: string;
}

const typeConfig: Record<Notification['type'], { icon: string; color: string; label: string }> = {
  breaking: { icon: 'BoltIcon', color: 'text-red-500 bg-red-50', label: 'Breaking' },
  trending: { icon: 'FireIcon', color: 'text-orange-500 bg-orange-50', label: 'Trending' },
  review: { icon: 'StarIcon', color: 'text-yellow-500 bg-yellow-50', label: 'Review' },
  update: { icon: 'ArrowPathIcon', color: 'text-blue-500 bg-blue-50', label: 'Update' },
};

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notifFilter, setNotifFilter] = useState<'all' | 'unread'>('all');
  const notifRef = useRef<HTMLDivElement>(null);

  // Fetch real news and convert to notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/news?category=technology&pageSize=5');
        const data = await res.json();
        if (data.useMockData || !data.articles?.length) return;

        const readIds = getReadIds();

        const notifs: Notification[] = data.articles
          .filter((a: { title?: string; description?: string; publishedAt?: string }) => a.title && a.title !== '[Removed]')
          .slice(0, 5)
          .map((a: { title: string; description?: string; publishedAt: string; url: string }, i: number) => ({
            id: `news-${i}`,
            type: i === 0 ? 'breaking' : i % 2 === 0 ? 'trending' : 'update',
            title: a.title,
            description: a.description || '',
            time: timeAgo(a.publishedAt),
            read: readIds.has(`news-${i}`),
            href: '/live-news-feed',
          }));

        setNotifications(notifs);
      } catch {
        // silently fail — no notifications shown if fetch fails
      }
    };

    fetchNotifications();
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, read: true }));
      const readIds = getReadIds();
      updated.forEach((n) => readIds.add(n.id));
      saveReadIds(readIds);
      return updated;
    });
  };

  const markRead = (id: string) => {
    setNotifications((prev) => {
      const updated = prev.map((n) => (n.id === id ? { ...n, read: true } : n));
      const readIds = getReadIds();
      readIds.add(id);
      saveReadIds(readIds);
      return updated;
    });
  };

  const filteredNotifs = notifFilter === 'unread'
    ? notifications.filter((n) => !n.read)
    : notifications;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setIsNotifOpen(false);
      }
    };
    if (isNotifOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNotifOpen]);

  const navItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Live Feed', href: '/live-news-feed', icon: 'RssIcon' },
    { label: 'Compare Gadgets', href: '/product-comparison-engine', icon: 'ScaleIcon' },
    { label: 'CES 2026', href: '/ces-2026-hub', icon: 'CalendarIcon' },
    { label: 'Trends', href: '/tech-trends-2026', icon: 'ChartBarIcon' },
    { label: 'Search', href: '/unified-search', icon: 'MagnifyingGlassIcon' },
  ];

  // Items shown directly in header on desktop
  const primaryNavItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Live Feed', href: '/live-news-feed', icon: 'RssIcon' },
    { label: 'Trends', href: '/tech-trends-2026', icon: 'ChartBarIcon' },
    { label: 'Search', href: '/unified-search', icon: 'MagnifyingGlassIcon' },
    { label: 'Compare Gadgets', href: '/product-comparison-engine', icon: 'ScaleIcon' },
    { label: 'CES 2026', href: '/ces-2026-hub', icon: 'CalendarIcon' },
  ];

  // Items kept in the dropdown menu (desktop: all primary + notifications)
  const dropdownNavItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Live Feed', href: '/live-news-feed', icon: 'RssIcon' },
    { label: 'Trends', href: '/tech-trends-2026', icon: 'ChartBarIcon' },
    { label: 'Search', href: '/unified-search', icon: 'MagnifyingGlassIcon' },
    { label: 'Compare Gadgets', href: '/product-comparison-engine', icon: 'ScaleIcon' },
    { label: 'CES 2026', href: '/ces-2026-hub', icon: 'CalendarIcon' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-md">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center h-14 md:h-16 gap-2">
          {/* Logo + Brand */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/homepage" className="flex items-center space-x-2 md:space-x-3 group flex-shrink-0">
              <div className="relative">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-black flex items-center justify-center transform transition-transform group-hover:scale-105 overflow-hidden">
                  <AppImage
                    src="/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png"
                    alt="GadgetsFinds Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    priority={true}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base md:text-xl text-foreground tracking-tight whitespace-nowrap">
                  Gadgets Finds
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop primary nav links — stretched across full width */}
          <nav className="hidden lg:flex flex-1 items-center justify-between px-4">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={16} variant="outline" />
                <span>{item.label}</span>
              </Link>
            ))}
            {/* X/Twitter social link */}
            <a
              href="https://x.com/Gadgets_finds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Gadgets Finds on X (Twitter)"
              className="flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Notifications as nav item with dropdown */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setIsNotifOpen((prev) => !prev)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                  isNotifOpen ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <span className="relative">
                  <Icon name="BellIcon" size={16} variant="outline" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                      {unreadCount}
                    </span>
                  )}
                </span>
              </button>

              {/* Notification Dropdown Panel */}
              {isNotifOpen && (
                <div className="absolute right-0 top-12 w-96 bg-card border border-border rounded-xl shadow-2xl z-50 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                    <h3 className="font-bold text-base text-foreground">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllRead}
                        className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex border-b border-border">
                    <button
                      onClick={() => setNotifFilter('all')}
                      className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                        notifFilter === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setNotifFilter('unread')}
                      className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                        notifFilter === 'unread' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      Unread {unreadCount > 0 && `(${unreadCount})`}
                    </button>
                  </div>

                  {/* Notifications List */}
                  <div className="max-h-[420px] overflow-y-auto">
                    {filteredNotifs.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center px-4">
                        <Icon name="BellSlashIcon" size={36} variant="outline" className="text-muted-foreground mb-3" />
                        <p className="text-sm font-medium text-muted-foreground">No notifications</p>
                        <p className="text-xs text-muted-foreground mt-1">You&apos;re all caught up!</p>
                      </div>
                    ) : (
                      filteredNotifs.map((notification) => {
                        const config = typeConfig[notification.type];
                        return (
                          <Link
                            key={notification.id}
                            href={notification.href}
                            onClick={() => {
                              markRead(notification.id);
                              setIsNotifOpen(false);
                            }}
                            className={`flex items-start space-x-3 px-4 py-3 hover:bg-muted transition-colors border-b border-border/50 last:border-0 ${
                              !notification.read ? 'bg-blue-50/30' : ''
                            }`}
                          >
                            <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5 ${config.color}`}>
                              <Icon name={config.icon} size={16} variant="solid" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-1.5 mb-0.5">
                                <span className={`text-[10px] font-bold uppercase tracking-wide ${config.color.split(' ')[0]}`}>
                                  {config.label}
                                </span>
                                {!notification.read && (
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                                )}
                              </div>
                              <p className="text-sm font-semibold text-foreground leading-snug line-clamp-1">
                                {notification.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
                                {notification.description}
                              </p>
                              <p className="text-[11px] text-muted-foreground mt-1">{notification.time}</p>
                            </div>
                          </Link>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right side: Hamburger — always top-right */}
          <div className="flex items-center flex-shrink-0 ml-auto lg:ml-0">
            <button
              className="p-2 text-foreground hover:bg-muted rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                variant="outline"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav strip — below header row, horizontal scrollable, mobile only */}
      <div className="lg:hidden border-t border-border/50 bg-card overflow-x-auto scrollbar-hide">
        <nav className="flex items-center gap-1 px-2 py-1.5 w-max">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                isActive(item.href)
                  ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={item.icon} size={14} variant="outline" />
              <span>{item.label}</span>
            </Link>
          ))}
          {/* Notifications in mobile nav strip — icon only, no "Alerts" text */}
          <button
            onClick={() => setIsNotifOpen((prev) => !prev)}
            className={`flex items-center px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0 relative ${
              isNotifOpen ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <span className="relative">
              <Icon name="BellIcon" size={14} variant="outline" />
              {unreadCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  {unreadCount}
                </span>
              )}
            </span>
          </button>
        </nav>
      </div>

      {/* Navigation dropdown menu — shown on all screen sizes */}
      {isMobileMenuOpen && (
        <div className="absolute right-4 top-16 w-64 bg-card border border-border rounded-lg shadow-xl animate-slide-down max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="px-3 py-4 space-y-1">
            {/* On mobile: show all nav items */}
            <div className="lg:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-base transition-colors
                    ${isActive(item.href) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}
                  `}
                >
                  {item.icon && <Icon name={item.icon} size={20} variant="outline" />}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* On desktop: show all nav items in dropdown too */}
            <div className="hidden lg:block">
              {dropdownNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-base transition-colors
                    ${isActive(item.href) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}
                  `}
                >
                  {item.icon && <Icon name={item.icon} size={20} variant="outline" />}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Notifications in menu */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsNotifOpen(true);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-base text-muted-foreground hover:text-foreground hover:bg-muted transition-colors min-h-[44px]"
            >
              <div className="flex items-center space-x-3">
                <Icon name="BellIcon" size={20} variant="outline" />
                <span>Notifications</span>
              </div>
              {unreadCount > 0 && (
                <span className="w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Subscribe button */}
            <div className="pt-4 border-t border-border mt-2">
              <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors min-h-[44px]">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile notification overlay — only shown on small screens when triggered from menu */}
      {isNotifOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setIsNotifOpen(false)}
        >
          <div
            className="absolute right-4 top-16 w-80 bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <h3 className="font-bold text-base text-foreground">Notifications</h3>
              <div className="flex items-center space-x-3">
                {unreadCount > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); markAllRead(); }}
                    onTouchEnd={(e) => { e.stopPropagation(); e.preventDefault(); markAllRead(); }}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); setIsNotifOpen(false); }}
                  onTouchEnd={(e) => { e.stopPropagation(); e.preventDefault(); setIsNotifOpen(false); }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Icon name="XMarkIcon" size={18} variant="outline" />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex border-b border-border">
              <button
                onClick={(e) => { e.stopPropagation(); setNotifFilter('all'); }}
                onTouchEnd={(e) => { e.stopPropagation(); e.preventDefault(); setNotifFilter('all'); }}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  notifFilter === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                All
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setNotifFilter('unread'); }}
                onTouchEnd={(e) => { e.stopPropagation(); e.preventDefault(); setNotifFilter('unread'); }}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  notifFilter === 'unread' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Unread {unreadCount > 0 && `(${unreadCount})`}
              </button>
            </div>

            {/* List */}
            <div className="max-h-[60vh] overflow-y-auto">
              {filteredNotifs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center px-4">
                  <Icon name="BellSlashIcon" size={32} variant="outline" className="text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">No notifications</p>
                </div>
              ) : (
                filteredNotifs.map((notification) => {
                  const config = typeConfig[notification.type];
                  return (
                    <Link
                      key={notification.id}
                      href={notification.href}
                      onClick={(e) => {
                        e.stopPropagation();
                        markRead(notification.id);
                        setIsNotifOpen(false);
                      }}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                        markRead(notification.id);
                        setIsNotifOpen(false);
                      }}
                      className={`flex items-start space-x-3 px-4 py-3 hover:bg-muted transition-colors border-b border-border/50 last:border-0 ${
                        !notification.read ? 'bg-blue-50/30' : ''
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 ${config.color}`}>
                        <Icon name={config.icon} size={14} variant="solid" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1.5 mb-0.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wide ${config.color.split(' ')[0]}`}>
                            {config.label}
                          </span>
                          {!notification.read && (
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-foreground line-clamp-1">{notification.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{notification.description}</p>
                        <p className="text-[11px] text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;