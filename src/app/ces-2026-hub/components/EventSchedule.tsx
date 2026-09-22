'use client';

import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ScheduleEvent {
  id: number;
  time: string;
  title: string;
  stage: string;
  category: string;
  featured: boolean;
  youtubeId: string;
}

interface DaySchedule {
  date: string;
  day: string;
  events: ScheduleEvent[];
}

const schedule: DaySchedule[] = [
  {
    date: "Jan 6",
    day: "Tuesday",
    events: [
      { id: 1, time: "10:00 AM", title: "Sony Honda Mobility: AFEELA 1 & Prototype 2026 World Premiere", stage: "Mandalay Bay, Media Days Stage", category: "Automotive", featured: true, youtubeId: "bX3YWJM-kZA" },
      { id: 2, time: "10:00 AM", title: "CES 2026 Show Floor Opening", stage: "Las Vegas Convention Center", category: "Event", featured: false, youtubeId: "bX3YWJM-kZA" },
    ]
  },
  {
    date: "Jan 7",
    day: "Wednesday",
    events: [
      { id: 3, time: "8:30 AM", title: "Samsung First Look: Galaxy Z TriFold & AI Home Ecosystem", stage: "Wynn Las Vegas, Samsung Exhibition Hall", category: "Smartphones", featured: true, youtubeId: "hPdEMp1fOA4" },
      { id: 4, time: "10:00 AM", title: "LG Electronics Keynote: AI Home & CLOiD Home Robot", stage: "LG World Premiere Stage", category: "Displays", featured: true, youtubeId: "FeHBnkIHAD8" },
      { id: 5, time: "12:00 PM", title: "Qualcomm: Snapdragon X2 AI PC Platform Reveal", stage: "Venetian Expo", category: "AI & Computing", featured: false, youtubeId: "cpAvo7DjEn8" },
      { id: 6, time: "2:00 PM", title: "Sony Innovation Day: Xperia & PlayStation Ecosystem", stage: "Sony Booth, Central Hall", category: "Entertainment", featured: false, youtubeId: "ykl_GmJDB1Q" },
      { id: 7, time: "4:00 PM", title: "CES Innovation Awards Ceremony", stage: "Main Stage, LVCC", category: "Event", featured: false, youtubeId: "pyhdBrj-9g8" }
    ]
  },
  {
    date: "Jan 8",
    day: "Thursday",
    events: [
      { id: 8, time: "9:00 AM", title: "Lenovo Tech World: AI-Powered PCs & Devices", stage: "Venetian Expo, Hall B", category: "Laptops", featured: true, youtubeId: "bX3YWJM-kZA" },
      { id: 9, time: "10:30 AM", title: "BMW & Mercedes: Autonomous Driving & In-Car AI", stage: "West Hall, Automotive Zone", category: "Automotive", featured: true, youtubeId: "bX3YWJM-kZA" },
      { id: 10, time: "12:30 PM", title: "Intel Arc GPU & Core Ultra Processor Showcase", stage: "Intel Booth, North Hall", category: "AI & Computing", featured: false, youtubeId: "bX3YWJM-kZA" },
      { id: 11, time: "2:00 PM", title: "Health Tech Summit: Wearables & Digital Health", stage: "Health & Wellness Hall", category: "Health Tech", featured: false, youtubeId: "bX3YWJM-kZA" },
      { id: 12, time: "4:30 PM", title: "Startup Pitch Competition Finals", stage: "Eureka Park, Sands Expo", category: "Startups", featured: false, youtubeId: "bX3YWJM-kZA" }
    ]
  },
  {
    date: "Jan 9",
    day: "Friday",
    events: [
      { id: 13, time: "9:00 AM", title: "ASUS ROG Gaming Hardware Showcase", stage: "Gaming & Esports Arena", category: "Gaming", featured: false, youtubeId: "bX3YWJM-kZA" },
      { id: 14, time: "10:00 AM", title: "Smart Home & Connectivity: Matter 2.0 Demos", stage: "Smart Home Pavilion", category: "Smart Home", featured: false, youtubeId: "bX3YWJM-kZA" },
      { id: 15, time: "1:00 PM", title: "Robotics & Automation: Boston Dynamics & ABB", stage: "Robotics Zone, South Hall", category: "Robotics", featured: true, youtubeId: "bX3YWJM-kZA" },
      { id: 16, time: "3:00 PM", title: "Sustainability in Tech: Green Innovation Panel", stage: "Sustainability Stage", category: "Sustainability", featured: false, youtubeId: "bX3YWJM-kZA" },
      { id: 17, time: "5:00 PM", title: "CES 2026 Closing Ceremony & Best of CES Awards", stage: "Main Stage, LVCC", category: "Event", featured: true, youtubeId: "bX3YWJM-kZA" }
    ]
  }
];

const categories = ["All", "AI & Computing", "Smartphones", "Laptops", "Automotive", "Gaming", "Health Tech", "Robotics"];

function ShareDropdown({ title, youtubeId, onClose }: { title: string; youtubeId: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  const encodedUrl = encodeURIComponent(videoUrl);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(videoUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareLinks = [
    { label: 'X / Twitter', href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, color: 'hover:bg-black/10' },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, color: 'hover:bg-blue-50' },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, color: 'hover:bg-blue-50' },
    { label: 'Reddit', href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`, color: 'hover:bg-orange-50' },
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, color: 'hover:bg-green-50' },
  ];

  return (
    <div ref={ref} className="absolute right-0 bottom-full mb-2 w-52 bg-white dark:bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden">
      <button
        onClick={handleCopy}
        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors border-b border-border"
      >
        <Icon name="LinkIcon" size={16} variant="outline" />
        {copied ? '✓ Link Copied!' : 'Copy Link'}
      </button>
      {shareLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-4 py-2.5 text-sm text-foreground ${s.color} transition-colors`}
        >
          <Icon name="ArrowTopRightOnSquareIcon" size={14} variant="outline" />
          {s.label}
        </a>
      ))}
    </div>
  );
}

function VideoModal({ event, onClose }: { event: ScheduleEvent; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-card rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div>
            <h3 className="font-bold text-foreground text-base leading-tight">{event.title}</h3>
            <p className="text-muted-foreground text-xs mt-0.5">{event.stage} · {event.time}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
            <Icon name="XMarkIcon" size={20} variant="outline" />
          </button>
        </div>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${event.youtubeId}?autoplay=1&rel=0`}
            title={event.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function EventSchedule() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<ScheduleEvent | null>(null);
  const [openShareId, setOpenShareId] = useState<number | null>(null);

  const filteredEvents = selectedCategory === "All"
    ? schedule[selectedDay].events
    : schedule[selectedDay].events.filter(event => event.category === selectedCategory);

  return (
    <section id="event-schedule" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            CES 2026 Schedule Recap
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key sessions and keynotes from CES 2026 — January 6–9, 2026 · Las Vegas Convention Center
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {schedule.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedDay === index
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              <div className="text-sm">{day.day}</div>
              <div className="text-lg font-bold">{day.date}</div>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`p-6 rounded-xl transition-all hover:shadow-lg ${
                event.featured
                  ? 'bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary' :'bg-card border border-border hover:border-primary/50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-xl font-bold text-primary">{event.time.split(' ')[0]}</div>
                    <div className="text-xs text-muted-foreground">{event.time.split(' ')[1]}</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {event.title}
                      </h3>
                      {event.featured && (
                        <span className="px-2 py-1 bg-brand-cta text-brand-dark text-xs font-semibold rounded">
                          KEYNOTE
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Icon name="MapPinIcon" size={16} variant="outline" />
                        <span>{event.stage}</span>
                      </span>
                      <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 md:flex-shrink-0">
                  <button
                    onClick={() => setActiveVideo(event)}
                    className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold text-sm transition-colors flex items-center space-x-2"
                  >
                    <Icon name="PlayIcon" size={16} variant="solid" />
                    <span>Watch Replay</span>
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setOpenShareId(openShareId === event.id ? null : event.id)}
                      className="p-2 bg-card hover:bg-muted rounded-lg transition-colors"
                    >
                      <Icon name="ShareIcon" size={20} variant="outline" />
                    </button>
                    {openShareId === event.id && (
                      <ShareDropdown
                        title={event.title}
                        youtubeId={event.youtubeId}
                        onClose={() => setOpenShareId(null)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Icon name="CalendarDaysIcon" size={48} variant="outline" className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">No sessions found for this category on this day</p>
          </div>
        )}
      </div>

      {activeVideo && (
        <VideoModal event={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}