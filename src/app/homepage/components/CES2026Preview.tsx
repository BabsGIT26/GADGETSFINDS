import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const highlights = [
{
  label: 'Samsung Galaxy Z TriFold',
  tag: 'Smartphones',
  tagColor: 'bg-blue-500/20 text-blue-400',
  desc: 'Best Overall CES 2026 winner. Triple-fold 10-inch display, 3.9mm thin when unfolded, Snapdragon 8 Elite, Galaxy AI.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10251a029-1772328371059.png",
  alt: 'Samsung Galaxy Z TriFold smartphone fully unfolded showing expansive 10-inch tri-panel display',
  featured: true
},
{
  label: 'LG OLED evo W6 Wallpaper TV',
  tag: 'Displays',
  tagColor: 'bg-purple-500/20 text-purple-400',
  desc: "World's thinnest true wireless OLED TV at just 9mm. Hyper Radiant Color Technology, Zero Connect Box up to 10m away.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f120c53b-1786553290566.png",
  alt: 'LG OLED evo W6 Wallpaper TV mounted flush on wall showing ultra-thin 9mm profile',
  featured: false
},
{
  label: 'Intel Core Ultra Series 3',
  tag: 'Processors',
  tagColor: 'bg-green-500/20 text-green-400',
  desc: "First AI PC chip built on Intel 18A process (Panther Lake). Up to 16 cores, 50 NPU TOPS, 77% faster gaming vs. prior gen.",
  image: "https://images.unsplash.com/photo-1716772912302-6452fea6c2e5",
  alt: 'Intel Core Ultra Series 3 Panther Lake processor chip on circuit board showcasing Intel 18A process technology',
  featured: false
},
{
  label: 'LG CLOiD Home Robot',
  tag: 'Robotics',
  tagColor: 'bg-yellow-500/20 text-yellow-400',
  desc: "AI-powered humanoid home robot with two arms, five-fingered hands. Folds laundry, cooks, and manages household chores autonomously.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_169d81e83-1786553292506.png",
  alt: 'LG CLOiD humanoid home robot with articulated arms demonstrating household task automation at CES 2026',
  featured: false
}];


const stats = [
{ value: '4,100+', label: 'Exhibitors' },
{ value: '148K+', label: 'Attendees' },
{ value: '1,200+', label: 'Startups' },
{ value: '141', label: 'Countries' }];


export default function CES2026Preview() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/20 border border-brand-primary/40 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase">CES 2026 — Las Vegas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary leading-tight">
              The Biggest Tech Event<br />
              <span className="text-brand-primary">Recapped</span>
            </h2>
            <p className="text-brand-text-secondary mt-3 max-w-xl text-sm md:text-base">
              From the world's thinnest wireless OLED TV to a tri-fold phone that won Best Overall — here are the standout reveals from CES 2026.
            </p>
          </div>
          <Link
            href="/ces-2026-hub"
            className="inline-flex items-center gap-2 px-5 py-3 bg-brand-primary text-white rounded-lg font-semibold text-sm hover:bg-brand-primary/90 transition-all shrink-0 self-start md:self-auto">
            
            Full CES Hub
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </Link>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats?.map((s) =>
          <div key={s?.label} className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center">
              <p className="text-2xl font-bold text-brand-primary">{s?.value}</p>
              <p className="text-xs text-brand-text-secondary mt-1 uppercase tracking-wide">{s?.label}</p>
            </div>
          )}
        </div>

        {/* Highlight cards — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights?.map((h, index) =>
          <div
            key={h?.label}
            className="relative rounded-2xl overflow-hidden group h-56 md:h-64">
            
              <AppImage
              src={h?.image}
              alt={h?.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${h?.tagColor} mb-2 inline-block`}>
                  {h?.tag}
                </span>
                <h3 className="text-white font-bold text-base md:text-lg">{h?.label}</h3>
                <p className="text-white/70 text-sm mt-1 line-clamp-2">{h?.desc}</p>
              </div>
              {index === 0 &&
            <div className="absolute top-3 right-3 bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  BEST OVERALL
                </div>
            }
            </div>
          )}
        </div>

        {/* CTA strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
          <div className="flex items-center gap-3">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-brand-primary" />
            <span className="text-brand-text-primary font-semibold text-sm">
              1,200+ startups launched — explore the full coverage
            </span>
          </div>
          <Link
            href="/ces-2026-hub"
            className="text-brand-primary font-bold text-sm flex items-center gap-1 hover:underline shrink-0">
            
            See all launches <Icon name="ArrowRightIcon" size={14} variant="outline" />
          </Link>
        </div>
      </div>
    </section>);

}