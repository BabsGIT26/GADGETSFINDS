'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface SocialPost {
  id: number;
  author: string;
  handle: string;
  avatar: string;
  avatarAlt: string;
  content: string;
  image?: string;
  imageAlt?: string;
  likes: number;
  retweets: number;
  timestamp: string;
  platform: 'twitter' | 'linkedin' | 'instagram';
}

const mockPosts: SocialPost[] = [
{
  id: 1,
  author: "Tech Insider",
  handle: "@techinsider",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_180ef5f7a-1763296304349.png",
  avatarAlt: "Tech Insider profile photo showing professional journalist in modern office",
  content: "Mind-blowing AI demo at TechCorp booth! The future is here. #CES2026 #AI",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ef78f953-1768217612922.png",
  imageAlt: "Futuristic AI demonstration with holographic display showing neural network visualization",
  likes: 1243,
  retweets: 456,
  timestamp: "2 hours ago",
  platform: "twitter"
},
{
  id: 2,
  author: "Sarah Chen",
  handle: "@sarahchen",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1facb978e-1763295491426.png",
  avatarAlt: "Sarah Chen profile photo showing tech executive in professional attire",
  content: "Just witnessed the most impressive autonomous vehicle demo. FutureMobility is changing the game! 🚗⚡",
  likes: 892,
  retweets: 234,
  timestamp: "3 hours ago",
  platform: "linkedin"
},
{
  id: 3,
  author: "Gadget Review",
  handle: "@gadgetreview",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5dd0399-1767470262808.png",
  avatarAlt: "Gadget Review profile photo showing tech reviewer with latest devices",
  content: "The new AR glasses from RealityTech are absolutely incredible. This is the future of computing! #CES2026",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8cb9292-1772278160447.png",
  imageAlt: "Person wearing sleek AR glasses with transparent display showing augmented reality interface",
  likes: 2156,
  retweets: 678,
  timestamp: "4 hours ago",
  platform: "twitter"
},
{
  id: 4,
  author: "Innovation Daily",
  handle: "@innovationdaily",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_132c0478a-1773153645284.png",
  avatarAlt: "Innovation Daily profile photo showing tech journalist at industry event",
  content: "Smart home ecosystem demo at ConnectedLiving booth is next level. Everything just works seamlessly! 🏠✨",
  likes: 745,
  retweets: 189,
  timestamp: "5 hours ago",
  platform: "instagram"
}];


export default function SocialFeed() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [posts, setPosts] = useState<SocialPost[]>(mockPosts);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Social Buzz
            </h2>
            <p className="text-muted-foreground text-lg">Loading social feed...</p>
          </div>
        </div>
      </section>);

  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return 'ChatBubbleLeftIcon';
      case 'linkedin':
        return 'BriefcaseIcon';
      case 'instagram':
        return 'CameraIcon';
      default:
        return 'ChatBubbleLeftIcon';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Social Buzz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time social media reactions from CES 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post) =>
          <div
            key={post.id}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={post.avatar}
                  alt={post.avatarAlt}
                  className="w-full h-full object-cover" />

                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{post.author}</h4>
                      <p className="text-sm text-muted-foreground">{post.handle}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon
                      name={getPlatformIcon(post.platform) as any}
                      size={16}
                      variant="outline"
                      className="text-muted-foreground" />

                      <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                    </div>
                  </div>

                  <p className="text-foreground mb-3">{post.content}</p>

                  {post.image &&
                <div className="rounded-lg overflow-hidden mb-3">
                      <AppImage
                    src={post.image}
                    alt={post.imageAlt || "Social media post image"}
                    className="w-full h-64 object-cover" />

                    </div>
                }

                  <div className="flex items-center space-x-6 text-muted-foreground">
                    <button className="flex items-center space-x-2 hover:text-destructive transition-colors">
                      <Icon name="HeartIcon" size={18} variant="outline" />
                      <span className="text-sm font-medium">{post.likes.toLocaleString()}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-success transition-colors">
                      <Icon name="ArrowPathIcon" size={18} variant="outline" />
                      <span className="text-sm font-medium">{post.retweets.toLocaleString()}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                      <Icon name="ShareIcon" size={18} variant="outline" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </section>);

}