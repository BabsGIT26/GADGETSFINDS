import Icon from '@/components/ui/AppIcon';

interface IndustryImpact {
  id: number;
  industry: string;
  icon: string;
  impactLevel: 'High' | 'Medium' | 'Low';
  impactScore: number;
  keyTrends: string[];
  description: string;
}

interface IndustryImpactAssessmentProps {
  industries: IndustryImpact[];
}

const IndustryImpactAssessment = ({
  industries,
}: IndustryImpactAssessmentProps) => {
  const getImpactColor = (level: string) => {
    const colors: { [key: string]: string } = {
      High: 'text-destructive bg-destructive/10 border-destructive',
      Medium: 'text-warning bg-warning/10 border-warning',
      Low: 'text-success bg-success/10 border-success',
    };
    return colors[level] || 'text-muted-foreground bg-muted border-border';
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">
            Industry Impact Assessment
          </h3>
          <p className="text-sm text-muted-foreground">
            How emerging trends will transform key sectors
          </p>
        </div>
        <Icon name="BuildingOfficeIcon" size={24} variant="outline" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="bg-muted/30 rounded-lg p-5 hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-brand-primary/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                  <Icon
                    name={industry.icon as any}
                    size={24}
                    variant="outline"
                  />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    {industry.industry}
                  </h4>
                  <span
                    className={`inline-block px-2 py-1 rounded-md text-xs font-semibold mt-1 border ${getImpactColor(
                      industry.impactLevel
                    )}`}
                  >
                    {industry.impactLevel} Impact
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {industry.description}
            </p>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-foreground">
                  Impact Score
                </span>
                <span className="text-xs font-bold text-brand-primary">
                  {industry.impactScore}/100
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent h-2 rounded-full transition-all duration-500"
                  style={{ width: `${industry.impactScore}%` }}
                ></div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-foreground mb-2">
                Key Trends:
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.keyTrends.map((trend, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-card text-muted-foreground text-xs rounded-md border border-border"
                  >
                    {trend}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <span className="text-xs text-muted-foreground">High Impact</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span className="text-xs text-muted-foreground">Medium Impact</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="text-xs text-muted-foreground">Low Impact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryImpactAssessment;