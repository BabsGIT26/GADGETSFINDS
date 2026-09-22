'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Interview {
  id: number;
  name: string;
  title: string;
  company: string;
  youtubeId: string;
  topic: string;
  duration: string;
  date: string;
}

const interviews: Interview[] = [
  {
    id: 1,
    name: "Jensen Huang",
    title: "CEO & Co-Founder",
    company: "NVIDIA",
    youtubeId: "cEg8cOx7UZk",
    topic: "Blackwell Ultra GPUs & the AI Supercomputer Era",
    duration: "28 min",
    date: "Jan 6"
  },
  {
    id: 2,
    name: "TM Roh",
    title: "President, Mobile eXperience",
    company: "Samsung Electronics",
    youtubeId: "F15ANPrzkBc",
    topic: "Galaxy AI & the Future of Mobile Intelligence",
    duration: "22 min",
    date: "Jan 7"
  },
  {
    id: 3,
    name: "Cristiano Amon",
    title: "President & CEO",
    company: "Qualcomm",
    youtubeId: "QpBTM0GO6xI",
    topic: "Snapdragon X Elite & the AI PC Revolution",
    duration: "31 min",
    date: "Jan 7"
  },
  {
    id: 4,
    name: "William Cho",
    title: "CEO",
    company: "LG Electronics",
    youtubeId: "9No-FiEInLA",
    topic: "Transparent OLED & AI-Powered Home Ecosystems",
    duration: "19 min",
    date: "Jan 7"
  }
];

export default function ExclusiveInterviews() {
  const [shareStates, setShareStates] = useState<{ [key: number]: boolean }>({});

  const handleShare = async (interview: Interview) => {
    const url = `https://www.youtube.com/watch?v=${interview.youtubeId}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareStates(prev => ({ ...prev, [interview.id]: true }));
      setTimeout(() => setShareStates(prev => ({ ...prev, [interview.id]: false })), 2000);
    } catch {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Executive Interviews
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In-depth conversations with the industry leaders who shaped CES 2026
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all group"
            >
              {/* Embedded YouTube Video */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${interview.youtubeId}?rel=0&modestbranding=1`}
                  title={`${interview.name} - ${interview.topic}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {interview.name}
                    </h3>
                    <p className="text-sm text-brand-primary font-semibold">{interview.title}</p>
                    <p className="text-sm text-muted-foreground">{interview.company}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {interview.date}
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                      {interview.duration}
                    </span>
                  </div>
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-4">
                  "{interview.topic}"
                </p>

                <div className="flex items-center space-x-2">
                  <a
                    href={`https://www.youtube.com/watch?v=${interview.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
                  >
                    <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
                    <span>Open on YouTube</span>
                  </a>
                  <button
                    onClick={() => handleShare(interview)}
                    className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors flex items-center space-x-1"
                    title="Copy link"
                  >
                    {shareStates[interview.id] ? (
                      <Icon name="CheckIcon" size={20} variant="solid" className="text-green-500" />
                    ) : (
                      <Icon name="ShareIcon" size={20} variant="outline" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}