import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Prediction {
  id: number;
  expertName: string;
  expertRole: string;
  expertImage: string;
  expertAlt: string;
  prediction: string;
  date: string;
  accuracy: number;
  status: 'Accurate' | 'Partially Accurate' | 'Pending' | 'Inaccurate';
  category: string;
}

interface ExpertPredictionTrackerProps {
  predictions: Prediction[];
}

const ExpertPredictionTracker = ({
  predictions,
}: ExpertPredictionTrackerProps) => {
  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      Accurate: 'text-success bg-success/10',
      'Partially Accurate': 'text-warning bg-warning/10',
      Pending: 'text-brand-secondary bg-brand-secondary/10',
      Inaccurate: 'text-destructive bg-destructive/10',
    };
    return colors[status] || 'text-muted-foreground bg-muted';
  };

  const getStatusIcon = (status: string) => {
    const icons: { [key: string]: string } = {
      Accurate: 'CheckCircleIcon',
      'Partially Accurate': 'ExclamationCircleIcon',
      Pending: 'ClockIcon',
      Inaccurate: 'XCircleIcon',
    };
    return icons[status] || 'QuestionMarkCircleIcon';
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">
            Expert Prediction Tracker
          </h3>
          <p className="text-sm text-muted-foreground">
            Real-time accuracy monitoring of industry forecasts
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-lg">
          <Icon name="ChartBarIcon" size={20} variant="solid" />
          <span className="text-sm font-semibold text-brand-primary">
            Live Tracking
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {predictions.map((prediction) => (
          <div
            key={prediction.id}
            className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <AppImage
                  src={prediction.expertImage}
                  alt={prediction.expertAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-base font-semibold text-foreground">
                      {prediction.expertName}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {prediction.expertRole}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                    {prediction.date}
                  </span>
                </div>

                <p className="text-sm text-foreground mb-3 leading-relaxed">
                  {prediction.prediction}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(
                        prediction.status
                      )}`}
                    >
                      <Icon
                        name={getStatusIcon(prediction.status) as any}
                        size={14}
                        variant="solid"
                      />
                      {prediction.status}
                    </span>
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      {prediction.category}
                    </span>
                  </div>

                  {prediction.status !== 'Pending' && (
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-brand-primary to-success h-2 rounded-full transition-all duration-500"
                          style={{ width: `${prediction.accuracy}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-brand-primary">
                        {prediction.accuracy}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">87%</div>
            <div className="text-xs text-muted-foreground">
              Overall Accuracy
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-primary mb-1">156</div>
            <div className="text-xs text-muted-foreground">
              Total Predictions
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning mb-1">42</div>
            <div className="text-xs text-muted-foreground">Pending Review</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-secondary mb-1">
              23
            </div>
            <div className="text-xs text-muted-foreground">Active Experts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertPredictionTracker;