'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Exhibitor {
  id: number;
  name: string;
  booth: string;
  category: string;
  hall: string;
}

const mockExhibitors: Exhibitor[] = [
  { id: 1, name: "TechCorp", booth: "A-101", category: "AI & Computing", hall: "North Hall" },
  { id: 2, name: "MobileInnovate", booth: "B-205", category: "Mobile Devices", hall: "Central Hall" },
  { id: 3, name: "FutureMobility", booth: "C-310", category: "Automotive", hall: "West Hall" },
  { id: 4, name: "ConnectedLiving", booth: "A-150", category: "Smart Home", hall: "North Hall" },
  { id: 5, name: "RealityTech", booth: "D-420", category: "AR/VR", hall: "South Hall" },
  { id: 6, name: "WellnessTech", booth: "B-180", category: "Health Tech", hall: "Central Hall" },
  { id: 7, name: "GreenEnergy", booth: "C-275", category: "Sustainability", hall: "West Hall" },
  { id: 8, name: "RoboticsCo", booth: "D-390", category: "Robotics", hall: "South Hall" }
];

const halls = ["All Halls", "North Hall", "Central Hall", "West Hall", "South Hall"];

export default function FloorMap() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedHall, setSelectedHall] = useState<string>("All Halls");

  const filteredExhibitors = mockExhibitors.filter(exhibitor => {
    const matchesSearch = exhibitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exhibitor.booth.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exhibitor.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesHall = selectedHall === "All Halls" || exhibitor.hall === selectedHall;
    return matchesSearch && matchesHall;
  });

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Interactive Floor Map
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Navigate CES 2026 with our interactive exhibitor directory
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative mb-6">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              variant="outline"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search exhibitors, booths, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {halls.map((hall) => (
              <button
                key={hall}
                onClick={() => setSelectedHall(hall)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedHall === hall
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground hover:bg-muted'
                }`}
              >
                {hall}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display font-bold text-xl text-foreground mb-4 flex items-center space-x-2">
              <Icon name="MapIcon" size={24} variant="solid" className="text-primary" />
              <span>Convention Center Map</span>
            </h3>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
                <div className="bg-primary/20 rounded-lg flex items-center justify-center border-2 border-primary">
                  <span className="font-bold text-primary">North Hall</span>
                </div>
                <div className="bg-accent/20 rounded-lg flex items-center justify-center border-2 border-accent">
                  <span className="font-bold text-accent">Central Hall</span>
                </div>
                <div className="bg-brand-secondary/20 rounded-lg flex items-center justify-center border-2 border-brand-secondary">
                  <span className="font-bold text-brand-secondary">West Hall</span>
                </div>
                <div className="bg-brand-accent/20 rounded-lg flex items-center justify-center border-2 border-brand-accent">
                  <span className="font-bold text-brand-accent">South Hall</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Icon name="BuildingOfficeIcon" size={16} variant="outline" />
                <span>4 Exhibition Halls</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="UserGroupIcon" size={16} variant="outline" />
                <span>500+ Exhibitors</span>
              </span>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display font-bold text-xl text-foreground mb-4 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Icon name="BuildingStorefrontIcon" size={24} variant="solid" className="text-primary" />
                <span>Exhibitor Directory</span>
              </span>
              <span className="text-sm text-muted-foreground">
                {filteredExhibitors.length} results
              </span>
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {filteredExhibitors.map((exhibitor) => (
                <div
                  key={exhibitor.id}
                  className="p-4 bg-muted hover:bg-muted/80 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{exhibitor.name}</h4>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                      {exhibitor.booth}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPinIcon" size={14} variant="outline" />
                      <span>{exhibitor.hall}</span>
                    </span>
                    <span>•</span>
                    <span>{exhibitor.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}