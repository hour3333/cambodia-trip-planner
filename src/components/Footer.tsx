import React from 'react';
import { Compass, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 py-12 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 font-bold flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-stone-200 text-sm block">Cambodia Odyssey</span>
            <span>Kingdom of Wonder • Trip & Route Planner</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-stone-400">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mx-0.5" />
          <span>for travelers exploring Cambodia 🇰🇭</span>
        </div>

        <div className="text-stone-500 text-[11px]">
          © {new Date().getFullYear()} Cambodia Odyssey. Open Source Static Application.
        </div>

      </div>
    </footer>
  );
};
