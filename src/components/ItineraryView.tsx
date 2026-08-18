import React, { useState } from 'react';
import { GeneratedItinerary } from '../types';
import { 
  Bus, 
  Train, 
  Plane, 
  Ship, 
  Car, 
  Compass, 
  Sun, 
  Landmark, 
  Sparkles, 
  Utensils, 
  Ship as ShipIcon, 
  Beer, 
  Crown, 
  BookOpen, 
  Sunset, 
  ShoppingBag, 
  Leaf, 
  UtensilsCrossed, 
  Waves, 
  Palmtree, 
  TrainTrack, 
  Moon, 
  Trees, 
  Fish, 
  Printer, 
  Info,
  ChevronRight,
  Bed
} from 'lucide-react';

interface ItineraryViewProps {
  itinerary: GeneratedItinerary;
  currency: 'USD' | 'KHR';
  formatMoney: (usd: number) => string;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({
  itinerary,
  formatMoney
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [selectedFilterDest, setSelectedFilterDest] = useState<string>('all');

  const filteredDays = selectedFilterDest === 'all'
    ? itinerary.days
    : itinerary.days.filter(d => d.destinationId === selectedFilterDest);

  const currentDayPlan = itinerary.days.find(d => d.dayNumber === activeDay) || itinerary.days[0];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-4 h-4 text-amber-400" />;
      case 'Landmark': return <Landmark className="w-4 h-4 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Utensils': return <Utensils className="w-4 h-4 text-amber-400" />;
      case 'Ship': return <ShipIcon className="w-4 h-4 text-amber-400" />;
      case 'Beer': return <Beer className="w-4 h-4 text-amber-400" />;
      case 'Crown': return <Crown className="w-4 h-4 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-amber-400" />;
      case 'Sunset': return <Sunset className="w-4 h-4 text-amber-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4 text-amber-400" />;
      case 'Leaf': return <Leaf className="w-4 h-4 text-amber-400" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-4 h-4 text-amber-400" />;
      case 'Waves': return <Waves className="w-4 h-4 text-amber-400" />;
      case 'Palmtree': return <Palmtree className="w-4 h-4 text-amber-400" />;
      case 'TrainTrack': return <TrainTrack className="w-4 h-4 text-amber-400" />;
      case 'Moon': return <Moon className="w-4 h-4 text-amber-400" />;
      case 'Trees': return <Trees className="w-4 h-4 text-amber-400" />;
      case 'Fish': return <Fish className="w-4 h-4 text-amber-400" />;
      default: return <Compass className="w-4 h-4 text-amber-400" />;
    }
  };

  const renderTransportIcon = (mode: string) => {
    switch (mode) {
      case 'train': return <Train className="w-5 h-5 text-amber-400" />;
      case 'plane': return <Plane className="w-5 h-5 text-amber-400" />;
      case 'ferry': return <Ship className="w-5 h-5 text-amber-400" />;
      case 'private_car': return <Car className="w-5 h-5 text-amber-400" />;
      default: return <Bus className="w-5 h-5 text-amber-400" />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="itinerary" className="max-w-7xl mx-auto px-4 py-16 scroll-mt-24">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950/40 border border-stone-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Itinerary Ready</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {itinerary.title}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              {itinerary.summary}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold flex items-center gap-2 transition-all border border-stone-700"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Visited Destinations Chips */}
        <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mr-2">Route Hubs:</span>
          {itinerary.destinationsVisited.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setSelectedFilterDest(dest.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedFilterDest === dest.id
                  ? 'bg-amber-500 text-stone-950'
                  : 'bg-stone-950/70 border border-stone-800 text-stone-300 hover:border-amber-500/50'
              }`}
            >
              📍 {dest.name} ({dest.nameKhmer})
            </button>
          ))}
          {selectedFilterDest !== 'all' && (
            <button
              onClick={() => setSelectedFilterDest('all')}
              className="text-xs text-amber-400 font-bold hover:underline ml-2"
            >
              Show All
            </button>
          )}
        </div>
      </div>

      {/* Main Content Layout: Day Navigation Sidebar + Detailed Day View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Day selector tabs */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider px-1">
            Day-by-Day Timeline ({filteredDays.length} Days)
          </h3>
          <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
            {filteredDays.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDay(day.dayNumber)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  activeDay === day.dayNumber
                    ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-amber-500 text-white ring-1 ring-amber-500/50'
                    : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:bg-stone-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-extrabold text-xs">
                      Day {day.dayNumber}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">{day.destinationProvince}</span>
                  </div>
                  <div className="font-bold text-sm text-stone-100 mt-1">{day.destinationName}</div>
                  <div className="text-xs text-stone-400 truncate max-w-[200px] mt-0.5">{day.morning.title}</div>
                </div>

                <ChevronRight className={`w-5 h-5 ${activeDay === day.dayNumber ? 'text-amber-400' : 'text-stone-600'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Active Day Detailed Breakdown */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Day Title Card */}
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  📍 {currentDayPlan.destinationProvince}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {currentDayPlan.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-amber-400">Day {currentDayPlan.dayNumber}</span>
              </div>
            </div>

            {/* Inter-City Transport Notice if travelling on this day */}
            {currentDayPlan.interCityTransport && (
              <div className="mt-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  {renderTransportIcon(currentDayPlan.interCityTransport.mode)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-amber-200">
                      Inter-city Travel: {currentDayPlan.interCityTransport.title}
                    </span>
                    <span className="text-xs font-bold text-amber-400">
                      {formatMoney(currentDayPlan.interCityTransport.costUSD)}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    {currentDayPlan.interCityTransport.description}
                  </p>
                  <div className="mt-2 text-xs font-semibold text-amber-300 flex items-center gap-2">
                    <Info className="w-3.5 h-3.5" />
                    <span>Tip: {currentDayPlan.interCityTransport.bookingTip}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Time Chunk Activities: Morning, Afternoon, Evening */}
          <div className="space-y-6">
            {[
              { slot: 'Morning', activity: currentDayPlan.morning, color: 'from-amber-500/10 to-orange-500/5' },
              { slot: 'Afternoon', activity: currentDayPlan.afternoon, color: 'from-yellow-500/10 to-amber-500/5' },
              { slot: 'Evening', activity: currentDayPlan.evening, color: 'from-purple-500/10 to-indigo-500/5' },
            ].map(({ slot, activity }) => (
              <div 
                key={slot}
                className={`bg-stone-900/90 border border-stone-800 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Image Column */}
                  <div className="md:col-span-5 relative h-56 md:h-auto min-h-[220px]">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent md:hidden" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-300 font-extrabold text-xs">
                      {slot}
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="md:col-span-7 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                          {renderIcon(activity.iconName)}
                          <span>{activity.category}</span>
                        </span>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 border border-stone-700">
                          Est. {activity.estimatedCostUSD > 0 ? formatMoney(activity.estimatedCostUSD) : 'Included / Free'}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {activity.description}
                      </p>
                    </div>

                    {/* Tip Box */}
                    {activity.tips && (
                      <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800 text-xs text-stone-300 flex items-start gap-2">
                        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span><strong>Travel Tip:</strong> {activity.tips}</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Accommodation Box */}
          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Stay Recommendation</span>
                <h5 className="font-bold text-stone-100 text-sm">
                  {currentDayPlan.accommodationRecommendation.name}
                </h5>
                <span className="text-xs text-stone-400">{currentDayPlan.accommodationRecommendation.type}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-amber-400">
                {formatMoney(currentDayPlan.accommodationRecommendation.estimatedCostUSD)} / night
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
