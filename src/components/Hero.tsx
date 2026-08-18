import React from 'react';
import { Compass, MapPin, Sparkles, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartPlanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanner }) => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-stone-800">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Tailored Specifically for Cambodia Travel</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Explore the Wonders of <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Kingdom of Cambodia
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-stone-300 font-normal leading-relaxed mb-10">
          From the ancient towers of <strong className="text-white">Angkor Wat</strong> to the tropical white beaches of <strong className="text-white">Koh Rong</strong>, world-famous <strong className="text-white">Kampot pepper</strong>, and Mekong river wildlife. Craft your custom day-by-day itinerary with exact travel options & costs.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartPlanner}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Compass className="w-5 h-5" />
            <span>Create My Cambodia Itinerary</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-left">
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-md">
            <Calendar className="w-6 h-6 text-amber-400 mb-2" />
            <h4 className="font-bold text-stone-200 text-sm">Flexible Duration</h4>
            <p className="text-xs text-stone-400 mt-1">From 3-day gateways to 1-month grand loops.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-md">
            <MapPin className="w-6 h-6 text-amber-400 mb-2" />
            <h4 className="font-bold text-stone-200 text-sm">Real Transport Routes</h4>
            <p className="text-xs text-stone-400 mt-1">Train, domestic flights, VIP buses & island ferries.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-md">
            <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
            <h4 className="font-bold text-stone-200 text-sm">Cost & Budgeting</h4>
            <p className="text-xs text-stone-400 mt-1">Accurate pricing in $ USD & Cambodian Riel ៛.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-md">
            <Sparkles className="w-6 h-6 text-amber-400 mb-2" />
            <h4 className="font-bold text-stone-200 text-sm">Hobby Matching</h4>
            <p className="text-xs text-stone-400 mt-1">Temples, street food, beaches, nature & history.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
