import React, { useState } from 'react';
import { 
  TripPreferences, 
  DurationOption, 
  TravelPace, 
  BudgetTier, 
  ActivityInterest 
} from '../types';
import { 
  Calendar, 
  Gauge, 
  DollarSign, 
  Heart, 
  Users, 
  Sparkles, 
  Check, 
  ArrowRight,
  Landmark,
  Utensils,
  Palmtree,
  Trees,
  BookOpen,
  Palette
} from 'lucide-react';

interface PlannerWizardProps {
  onGenerate: (preferences: TripPreferences) => void;
}

export const PlannerWizard: React.FC<PlannerWizardProps> = ({ onGenerate }) => {
  const [duration, setDuration] = useState<DurationOption>('week');
  const [customDays, setCustomDays] = useState<number | undefined>(7);
  const [pace, setPace] = useState<TravelPace>('balanced');
  const [budget, setBudget] = useState<BudgetTier>('comfort');
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [interests, setInterests] = useState<ActivityInterest[]>([
    'temples', 
    'food', 
    'beaches'
  ]);

  const toggleInterest = (interest: ActivityInterest) => {
    if (interests.includes(interest)) {
      if (interests.length > 1) {
        setInterests(interests.filter(i => i !== interest));
      }
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      duration,
      customDays: duration === 'week' ? customDays : undefined,
      pace,
      budget,
      interests,
      travelersCount
    });
  };

  return (
    <section id="planner" className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Itinerary Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Customize Your Cambodia Journey
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-1">
            Answer a few quick questions to generate your optimal route, daily schedule, transit, and budget breakdown.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-10">
          
          {/* STEP 1: DURATION */}
          <div>
            <label className="flex items-center gap-2 text-stone-200 font-bold text-base mb-3">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>1. How long are you staying in Cambodia?</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'few_days', label: 'A Few Days', sub: '1 - 3 Days', days: 3 },
                { id: 'week', label: 'A Week', sub: '4 - 7 Days', days: 7 },
                { id: 'two_weeks', label: 'Two Weeks', sub: '8 - 14 Days', days: 14 },
                { id: 'month', label: 'A Month', sub: '15 - 30 Days', days: 21 },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setDuration(item.id as DurationOption);
                    setCustomDays(item.days);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    duration === item.id
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300 ring-2 ring-amber-500/30'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-800/40'
                  }`}
                >
                  <div className="font-bold text-sm text-stone-100">{item.label}</div>
                  <div className="text-xs text-stone-400 mt-1">{item.sub}</div>
                </button>
              ))}
            </div>
            {duration === 'week' && (
              <div className="mt-3 flex items-center gap-3 text-xs text-stone-400">
                <span>Exact number of days:</span>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={customDays || 7}
                  onChange={(e) => setCustomDays(parseInt(e.target.value) || 7)}
                  className="w-20 px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-700 text-amber-300 font-bold text-sm focus:outline-none focus:border-amber-500"
                />
                <span>Days</span>
              </div>
            )}
          </div>

          {/* STEP 2: TRAVEL PACE */}
          <div>
            <label className="flex items-center gap-2 text-stone-200 font-bold text-base mb-3">
              <Gauge className="w-5 h-5 text-amber-400" />
              <span>2. Preferred Travel Pace & Range</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'relaxed', label: 'Relaxed & Slow', desc: 'Focus on 1-2 regions, deep exploration, easy mornings.' },
                { id: 'balanced', label: 'Balanced Explorer', desc: 'Must-see highlights + coastal beaches or nature at a steady pace.' },
                { id: 'fast', label: 'Ambitious Loop', desc: 'Cover major destinations across North, South & Wild East.' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPace(item.id as TravelPace)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    pace === item.id
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300 ring-2 ring-amber-500/30'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-800/40'
                  }`}
                >
                  <div className="font-bold text-sm text-stone-100">{item.label}</div>
                  <div className="text-xs text-stone-400 mt-1 leading-relaxed">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: BUDGET LEVEL */}
          <div>
            <label className="flex items-center gap-2 text-stone-200 font-bold text-base mb-3">
              <DollarSign className="w-5 h-5 text-amber-400" />
              <span>3. Travel Style & Budget</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'budget', label: 'Backpacker / Budget', price: '$25 - $45 / day', desc: 'Hostels & guesthouses, street food, tuk-tuks.' },
                { id: 'comfort', label: 'Mid-Range / Comfort', price: '$50 - $120 / day', desc: 'Boutique hotels with pool, riversides, VIP buses.' },
                { id: 'luxury', label: 'Luxury / Bespoke', price: '$150+ / day', desc: '5-Star heritage villas, private drivers, fine dining.' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setBudget(item.id as BudgetTier)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    budget === item.id
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300 ring-2 ring-amber-500/30'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-800/40'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-stone-100">{item.label}</span>
                  </div>
                  <div className="text-xs font-semibold text-amber-400 mt-1">{item.price}</div>
                  <div className="text-xs text-stone-400 mt-1">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 4: INTERESTS & HOBBIES */}
          <div>
            <label className="flex items-center gap-2 text-stone-200 font-bold text-base mb-3">
              <Heart className="w-5 h-5 text-amber-400" />
              <span>4. What activities, hobbies & interests excite you?</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { id: 'temples', label: 'Ancient Temples & Angkor', icon: Landmark },
                { id: 'food', label: 'Khmer Food & Cooking', icon: Utensils },
                { id: 'beaches', label: 'Tropical Islands & Beaches', icon: Palmtree },
                { id: 'nature', label: 'Wildlife & Nature Treks', icon: Trees },
                { id: 'history', label: 'History & Museums', icon: BookOpen },
                { id: 'culture', label: 'Arts & Local Culture', icon: Palette },
              ].map((item) => {
                const IconComp = item.icon;
                const selected = interests.includes(item.id as ActivityInterest);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleInterest(item.id as ActivityInterest)}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 text-left transition-all ${
                      selected
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${selected ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold">{item.label}</span>
                    {selected && <Check className="w-4 h-4 text-amber-400 ml-auto" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 5: TRAVELERS */}
          <div>
            <label className="flex items-center gap-2 text-stone-200 font-bold text-base mb-3">
              <Users className="w-5 h-5 text-amber-400" />
              <span>5. How many travelers?</span>
            </label>
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setTravelersCount(num)}
                  className={`w-12 h-12 rounded-xl font-bold border transition-all ${
                    travelersCount === num
                      ? 'bg-amber-500 border-amber-500 text-stone-950 text-base shadow-lg shadow-amber-500/20'
                      : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  {num === 5 ? '5+' : num}
                </button>
              ))}
              <span className="text-xs text-stone-400 ml-2">
                {travelersCount === 1 ? 'Solo Traveler' : travelersCount === 2 ? 'Couple / 2 Friends' : 'Group Trip'}
              </span>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4 border-t border-stone-800">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-base sm:text-lg shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>Generate My Customized Itinerary</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};
