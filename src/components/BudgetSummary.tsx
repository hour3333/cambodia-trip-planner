import React from 'react';
import { GeneratedItinerary } from '../types';
import { Bed, Utensils, Bus, Ticket, Sparkles, AlertCircle } from 'lucide-react';

interface BudgetSummaryProps {
  itinerary: GeneratedItinerary;
  currency: 'USD' | 'KHR';
  formatMoney: (usd: number) => string;
  travelersCount: number;
}

export const BudgetSummary: React.FC<BudgetSummaryProps> = ({
  itinerary,
  formatMoney,
  travelersCount
}) => {
  const { accommodation, food, transport, activitiesAndPasses } = itinerary.budgetBreakdownUSD;
  const total = itinerary.totalCostEstimateUSD;

  const categories = [
    { label: 'Accommodation', amount: accommodation, icon: Bed, color: 'bg-amber-500' },
    { label: 'Food & Dining', amount: food, icon: Utensils, color: 'bg-emerald-500' },
    { label: 'Inter-City & Local Transport', amount: transport, icon: Bus, color: 'bg-blue-500' },
    { label: 'Activities & Park Passes', amount: activitiesAndPasses, icon: Ticket, color: 'bg-purple-500' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-stone-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Financial Overview & Cost Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Estimated Trip Budget Breakdown
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              Estimated total for {travelersCount} {travelersCount === 1 ? 'traveler' : 'travelers'} across {itinerary.durationDays} days in Cambodia.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-right">
            <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Estimated Total Trip Cost</span>
            <span className="text-3xl sm:text-4xl font-black text-amber-400">
              {formatMoney(total)}
            </span>
            <span className="text-xs text-stone-400 block mt-1">
              (~{formatMoney(Math.round(total / itinerary.durationDays))} / day)
            </span>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const percentage = total > 0 ? Math.round((cat.amount / total) * 100) : 0;
            return (
              <div key={cat.label} className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${cat.color} text-stone-950`}>
                      <IconComp className="w-4 h-4 font-bold" />
                    </div>
                    <span className="font-bold text-sm text-stone-200">{cat.label}</span>
                  </div>
                  <span className="font-black text-sm text-stone-100">
                    {formatMoney(cat.amount)} <span className="text-xs text-stone-500 font-medium">({percentage}%)</span>
                  </span>
                </div>
                {/* Progress bar line */}
                <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                  <div 
                    className={`h-full ${cat.color} transition-all duration-1000`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Budget Saving Advice */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-stone-300 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-amber-200 font-bold">Cambodia Money Tip:</strong>
            <p className="leading-relaxed">
              Use local ride-hailing apps like <strong>PassApp</strong> or <strong>Grab</strong> for city tuk-tuk rides—they cost 40% less than hailing drivers on the street ($1.50 - $3 per ride). ATMs charge a flat $4-$6 USD fee per transaction, so withdraw larger sums less frequently.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
