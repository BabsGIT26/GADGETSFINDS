import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: number;
  year: string;
  quarter: string;
  title: string;
  description: string;
  category: string;
  likelihood: number;
}

interface TimelineVisualizationProps {
  events: TimelineEvent[];
  activeYear: string;
  onYearChange: (year: string) => void;
}

const TimelineVisualization = ({
  events,
  activeYear,
  onYearChange,
}: TimelineVisualizationProps) => {
  const years = ['2026', '2027', '2028', '2029', '2030'];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      AI: 'bg-brand-primary',
      Hardware: 'bg-brand-secondary',
      Software: 'bg-brand-accent',
      Connectivity: 'bg-brand-trust',
      Sustainability: 'bg-success',
    };
    return colors[category] || 'bg-muted';
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">
          Technology Evolution Timeline
        </h3>
        <div className="flex items-center gap-2">
          <Icon name="ClockIcon" size={20} variant="outline" />
          <span className="text-sm text-muted-foreground">
            Interactive Forecast
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`
              px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap
              ${
                activeYear === year
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }
            `}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent"></div>

        <div className="space-y-6">
          {events
            .filter((event) => event.year === activeYear)
            .map((event, index) => (
              <div key={event.id} className="relative pl-20">
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full ${getCategoryColor(
                    event.category
                  )} border-4 border-card shadow-lg`}
                ></div>

                <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-brand-primary">
                        {event.quarter}
                      </span>
                      <span
                        className={`px-2 py-1 ${getCategoryColor(
                          event.category
                        )} text-white text-xs rounded-md`}
                      >
                        {event.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="BoltIcon" size={14} variant="solid" />
                      <span className="text-xs text-muted-foreground">
                        {event.likelihood}% likely
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-semibold text-foreground mb-2">
                    {event.title}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-semibold text-foreground">
            Categories:
          </span>
          {['AI', 'Hardware', 'Software', 'Connectivity', 'Sustainability'].map(
            (category) => (
              <div key={category} className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${getCategoryColor(
                    category
                  )}`}
                ></div>
                <span className="text-xs text-muted-foreground">{category}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineVisualization;