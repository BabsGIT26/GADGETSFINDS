'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SessionReplay {
  id: number;
  title: string;
  presenter: string;
  views: string;
  youtubeId: string;
  date: string;
  duration: string;
}

const sessionReplays: SessionReplay[] = [
  {
    id: 1,
    title: "NVIDIA CEO Jensen Huang CES 2026 Keynote",
    presenter: "Jensen Huang, NVIDIA",
    views: "2.1M",
    youtubeId: "0NBILspM4c4",
    date: "Jan 6, 2026",
    duration: "1h 42min"
  },
  {
    id: 2,
    title: "Samsung The First Look 2026 – Galaxy S26 & AI Living",
    presenter: "TM Roh, Samsung",
    views: "1.4M",
    youtubeId: "hPdEMp1fOA4",
    date: "Jan 7, 2026",
    duration: "58min"
  },
  {
    id: 3,
    title: "LG World Premiere: CLOiD Robot & AI Home at CES 2026",
    presenter: "LG Electronics",
    views: "890K",
    youtubeId: "GvLbSQ0Qelo",
    date: "Jan 7, 2026",
    duration: "45min"
  },
  {
    id: 4,
    title: "Samsung Galaxy Unpacked February 2026 – Galaxy S26 Series",
    presenter: "Samsung Mobile Division",
    views: "620K",
    youtubeId: "SA93zbnoR4U",
    date: "Jan 7, 2026",
    duration: "52min"
  }
];

export default function LiveStreamSection() {
  const [activeSession, setActiveSession] = useState<number>(1);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentSession = sessionReplays.find((s) => s.id === activeSession) || sessionReplays[0];

  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://gadgets-finds.com/ces-2026-hub';
  const shareText = `Watch the ${currentSession.title} – CES 2026 Keynote Replay`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = pageUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: 'XMarkIcon',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
      color: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'Facebook',
      icon: 'ShareIcon',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'LinkedIn',
      icon: 'LinkIcon',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'Reddit',
      icon: 'ArrowUpCircleIcon',
      url: `https://reddit.com/submit?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(shareText)}`,
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      name: 'WhatsApp',
      icon: 'ChatBubbleLeftRightIcon',
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section id="session-replays" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
              Keynote Replays
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch the biggest keynotes and sessions from CES 2026
            </p>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary rounded-full">
            <Icon name="FilmIcon" size={16} variant="solid" className="text-primary" />
            <span className="text-primary font-semibold text-sm">4 KEYNOTES</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Embedded YouTube Video */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                key={currentSession.youtubeId}
                src={`https://www.youtube.com/embed/${currentSession.youtubeId}?rel=0&modestbranding=1`}
                title={currentSession.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Info */}
            <div className="mt-4 mb-2">
              <h3 className="font-display font-bold text-lg text-foreground mb-1">
                {currentSession.title}
              </h3>
              <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                <span className="flex items-center space-x-1">
                  <Icon name="UserIcon" size={14} variant="outline" />
                  <span>{currentSession.presenter}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="ClockIcon" size={14} variant="outline" />
                  <span>{currentSession.duration}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="UserGroupIcon" size={14} variant="outline" />
                  <span>{currentSession.views} views</span>
                </span>
              </div>
            </div>

            {/* Share Button */}
            <div className="mt-4 relative">
              <button
                onClick={() => setShareOpen(!shareOpen)}
                className="px-6 py-3 bg-card hover:bg-muted rounded-lg font-semibold transition-colors flex items-center space-x-2 border border-border"
              >
                <Icon name="ShareIcon" size={20} variant="outline" />
                <span>Share</span>
              </button>

              {/* Share Dropdown */}
              {shareOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl z-50 p-4">
                  <p className="text-sm font-semibold text-foreground mb-3">Share this keynote</p>

                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors mb-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={copied ? "CheckIcon" : "LinkIcon"} size={16} variant="outline" className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {copied ? 'Link copied!' : 'Copy link'}
                    </span>
                  </button>

                  {/* Social Media Links */}
                  <div className="space-y-2">
                    {shareLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShareOpen(false)}
                        className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-white transition-colors ${link.color}`}
                      >
                        <Icon name={link.icon as any} size={16} variant="outline" className="text-white flex-shrink-0" />
                        <span className="text-sm font-medium">Share on {link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Backdrop to close share dropdown */}
            {shareOpen && (
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShareOpen(false)}
              />
            )}
          </div>

          {/* Keynote List */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-foreground mb-4">
              All Keynotes
            </h3>
            {sessionReplays.map((session) => (
              <button
                key={session.id}
                onClick={() => setActiveSession(session.id)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  activeSession === session.id
                    ? 'bg-primary/10 border-2 border-primary' :'bg-card hover:bg-muted border-2 border-transparent'
                }`}
              >
                <div className="flex items-start space-x-3">
                  {/* YouTube Thumbnail */}
                  <div className="relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0 bg-black">
                    <img
                      src={`https://img.youtube.com/vi/${session.youtubeId}/mqdefault.jpg`}
                      alt={`${session.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 bg-red-600/90 rounded-full flex items-center justify-center">
                        <Icon name="PlayIcon" size={12} variant="solid" className="text-white ml-0.5" />
                      </div>
                    </div>
                    {activeSession === session.id && (
                      <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-primary/90 rounded text-white text-xs font-semibold">
                        NOW
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">
                      {session.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{session.date}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Icon name="UserGroupIcon" size={12} variant="outline" />
                        <span>{session.views}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
