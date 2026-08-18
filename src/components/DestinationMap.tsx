import React, { useState } from 'react';
import { DESTINATIONS } from '../data/cambodiaData';
import { Destination } from '../types';
import { MapPin, Navigation, CheckCircle2 } from 'lucide-react';

export const DestinationMap: React.FC = () => {
  const [selectedDest, setSelectedDest] = useState<Destination>(DESTINATIONS.siem_reap);

  const destinationsList = Object.values(DESTINATIONS);

  return (
    <section id="map" className="max-w-7xl mx-auto px-4 py-16 scroll-mt-24">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Navigation className="w-4 h-4" />
            <span>Interactive Country Route Map</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Explore Key Cambodian Destinations
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
            Click on any region pin below to inspect its highlights, description, and suggested stay duration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Map Frame */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-3xl p-6 relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
            
            {/* Styled Map Background Representation */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />

            {/* Stylized Cambodia Shape Outline Canvas */}
            <svg className="absolute inset-0 w-full h-full text-stone-800/40" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M 20 30 Q 35 15 60 25 Q 90 35 85 60 Q 75 80 50 85 Q 25 80 20 60 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeDasharray="3 3" 
              />
            </svg>

            {/* Pins overlay */}
            {destinationsList.map((dest) => {
              const isSelected = selectedDest.id === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDest(dest)}
                  style={{ top: `${dest.coordinates.y}%`, left: `${dest.coordinates.x}%` }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all z-20 focus:outline-none`}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Pulsing ring when selected */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-amber-500/30 animate-ping" />
                    )}
                    <div className={`p-2.5 rounded-2xl shadow-xl transition-all flex items-center justify-center ${
                      isSelected 
                        ? 'bg-amber-500 text-stone-950 scale-125 ring-4 ring-amber-500/20' 
                        : 'bg-stone-900 text-amber-400 border border-stone-700 hover:border-amber-500 hover:scale-110'
                    }`}>
                      <MapPin className="w-5 h-5 font-bold" />
                    </div>
                    <span className={`mt-1 text-[11px] font-extrabold px-2 py-0.5 rounded-md backdrop-blur-md transition-all whitespace-nowrap ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-900/90 text-stone-200 border border-stone-800'
                    }`}>
                      {dest.name}
                    </span>
                  </div>
                </button>
              );
            })}

          </div>

          {/* Destination Detail Sidebar */}
          <div className="lg:col-span-5 bg-stone-950/80 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden mb-5">
                <img 
                  src={selectedDest.bannerImage} 
                  alt={selectedDest.name}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{selectedDest.province}</span>
                  <h3 className="text-2xl font-extrabold text-white">{selectedDest.name} ({selectedDest.nameKhmer})</h3>
                </div>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                {selectedDest.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  ⭐ Must-See Highlights:
                </h4>
                <div className="space-y-2">
                  {selectedDest.mustSee.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>Suggested Stay: <strong className="text-amber-400 font-bold">{selectedDest.suggestedDays} Days</strong></span>
              <span className="text-stone-500">Kingdom of Cambodia</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
