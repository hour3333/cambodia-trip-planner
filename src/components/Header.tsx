import React from 'react';
import { Compass, DollarSign, RotateCcw } from 'lucide-react';

interface HeaderProps {
  currency: 'USD' | 'KHR';
  onToggleCurrency: () => void;
  onReset: () => void;
  hasItinerary: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onToggleCurrency,
  onReset,
  hasItinerary
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-950/80 border-b border-stone-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onReset}>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 text-stone-950 font-bold">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Cambodia Odyssey
            </span>
            <span className="text-xs block text-stone-400 font-medium">
              🇰🇭 Smart Travel & Itinerary Planner
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-300">
          <a href="#planner" className="hover:text-amber-400 transition-colors">Planner</a>
          {hasItinerary && <a href="#itinerary" className="hover:text-amber-400 transition-colors">My Itinerary</a>}
          <a href="#transport" className="hover:text-amber-400 transition-colors">Transport Guide</a>
          <a href="#map" className="hover:text-amber-400 transition-colors">Interactive Map</a>
          <a href="#essentials" className="hover:text-amber-400 transition-colors">Travel Tips</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Currency Toggle */}
          <button
            onClick={onToggleCurrency}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-900 border border-stone-700/60 text-xs font-bold text-amber-400 hover:border-amber-500/50 hover:bg-stone-800 transition-all shadow-inner"
            title="Toggle between USD ($) and Cambodian Riel (៛)"
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Currency: {currency === 'USD' ? '$ USD' : '៛ KHR'}</span>
          </button>

          {/* Reset / New Trip */}
          {hasItinerary && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Plan</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
