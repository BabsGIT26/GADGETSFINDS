import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  eventDate: string;
}

export default function HeroSection({ eventDate }: HeroSectionProps) {
  const handleWatchReplays = () => {
    const el = document.getElementById('session-replays');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReadHighlights = () => {
    const el = document.getElementById('event-schedule');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark pt-14 md:pt-16">
      <div className="absolute inset-0 opacity-20">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_108bb16f9-1772160079161.png"
          alt="Modern technology exhibition hall with bright LED displays and futuristic booth designs at CES convention center"
          className="w-full h-full object-cover" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/20 border border-brand-primary rounded-full mb-6">
          <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-brand-primary" />
          <span className="text-brand-primary font-semibold text-sm tracking-wide">EVENT RECAP</span>
        </div>
        
        <h1 className="font-display font-bold text-5xl md:text-7xl text-brand-text-primary mb-4 tracking-tight">
          CES 2026
          <span className="block text-brand-primary mt-2">Full Coverage</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-text-secondary max-w-3xl mb-8 leading-relaxed">
          Relive the biggest moments, breakthrough innovations, and exclusive highlights from the world's most influential tech event
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <div className="flex items-center space-x-3 px-6 py-3 bg-card/10 backdrop-blur-sm rounded-lg border border-brand-primary/30">
            <Icon name="CalendarIcon" size={24} variant="solid" className="text-brand-primary" />
            <div className="text-left">
              <p className="text-xs text-brand-text-secondary uppercase tracking-wide">Event Dates</p>
              <p className="text-lg font-semibold text-brand-text-primary">{eventDate}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 px-6 py-3 bg-card/10 backdrop-blur-sm rounded-lg border border-brand-accent/30">
            <Icon name="MapPinIcon" size={24} variant="solid" className="text-brand-accent" />
            <div className="text-left">
              <p className="text-xs text-brand-text-secondary uppercase tracking-wide">Location</p>
              <p className="text-lg font-semibold text-brand-text-primary">Las Vegas, NV</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleWatchReplays}
            className="px-8 py-4 bg-brand-primary text-white rounded-lg font-semibold text-lg hover:bg-brand-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-brand-primary/50 flex items-center space-x-2">
            
            <Icon name="PlayIcon" size={20} variant="solid" />
            <span>Watch Replays</span>
          </button>
          <button
            onClick={handleReadHighlights}
            className="px-8 py-4 bg-card/20 backdrop-blur-sm text-brand-text-primary border border-brand-text-secondary/30 rounded-lg font-semibold text-lg hover:bg-card/30 transition-all flex items-center space-x-2">
            
            <Icon name="NewspaperIcon" size={20} variant="outline" />
            <span>Read Highlights</span>
          </button>
        </div>
      </div>
    </section>);

}