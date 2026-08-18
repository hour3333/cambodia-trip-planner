import React from 'react';
import { Compass, DollarSign, RotateCcw, MapPin, Bus, Calendar } from 'lucide-react';
import { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  currency: 'USD' | 'KHR';
  onToggleCurrency: () => void;
  onReset: () => void;
  hasItinerary: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  currency,
  onToggleCurrency,
  onReset,
  hasItinerary
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-950/90 border-b border-stone-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectTab('planner')}>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 text-stone-950 font-bold">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Cambodia Odyssey
            </span>
            <span className="text-xs block text-stone-400 font-medium">
              🇰🇭 3-Page Travel Experience
            </span>
          </div>
        </div>

        {/* 3 Pages Navigation Bar */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-2xl bg-stone-900 border border-stone-800">
          <button
            onClick={() => onSelectTab('planner')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'planner'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Page 1: Trip Planner</span>
          </button>

          <button
            onClick={() => onSelectTab('transport')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'transport'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
            }`}
          >
            <Bus className="w-4 h-4" />
            <span>Page 2: Transport & Transit</span>
          </button>

          <button
            onClick={() => onSelectTab('guide')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Page 3: Interactive Map & Tips</span>
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Currency Toggle */}
          <button
            onClick={onToggleCurrency}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700/60 text-xs font-bold text-amber-400 hover:border-amber-500/50 hover:bg-stone-800 transition-all shadow-inner"
            title="Toggle between USD ($) and Cambodian Riel (៛)"
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>{currency === 'USD' ? '$ USD' : '៛ KHR'}</span>
          </button>

          {/* Reset / New Trip */}
          {hasItinerary && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 font-bold text-xs transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">New Plan</span>
            </button>
          )}
        </div>

      </div>

      {/* Mobile 3-Page Sub-Header Tabs */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-800/80 px-2 py-2 bg-stone-950/95">
        <button
          onClick={() => onSelectTab('planner')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'planner' ? 'bg-amber-500 text-stone-950' : 'text-stone-400'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>1. Planner</span>
        </button>
        <button
          onClick={() => onSelectTab('transport')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'transport' ? 'bg-amber-500 text-stone-950' : 'text-stone-400'
          }`}
        >
          <Bus className="w-3.5 h-3.5" />
          <span>2. Transport</span>
        </button>
        <button
          onClick={() => onSelectTab('guide')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'guide' ? 'bg-amber-500 text-stone-950' : 'text-stone-400'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>3. Map & Tips</span>
        </button>
      </div>
    </header>
  );
};
