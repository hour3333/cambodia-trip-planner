import React from 'react';
import { TRAVEL_ESSENTIALS } from '../data/cambodiaData';
import { ShieldAlert, DollarSign, Calendar, HeartHandshake, CheckCircle } from 'lucide-react';

export const TravelTips: React.FC = () => {
  return (
    <section id="essentials" className="max-w-7xl mx-auto px-4 py-16 scroll-mt-24">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldAlert className="w-4 h-4" />
            <span>Know Before You Go</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Cambodia Travel Essentials & Etiquette
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
            Important tips for a smooth, respectful, and hassle-free trip to Cambodia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Visa */}
          <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">
              {TRAVEL_ESSENTIALS.visa.title}
            </h3>
            <ul className="text-xs text-stone-300 space-y-2 leading-relaxed">
              <li>• <strong>E-Visa:</strong> {TRAVEL_ESSENTIALS.visa.eVisaCost}</li>
              <li>• <strong>On Arrival:</strong> {TRAVEL_ESSENTIALS.visa.onArrival}</li>
              <li>• <strong>Validity:</strong> {TRAVEL_ESSENTIALS.visa.validity}</li>
              <li className="text-stone-400 font-medium pt-1 border-t border-stone-800/80">
                {TRAVEL_ESSENTIALS.visa.passportRequirement}
              </li>
            </ul>
          </div>

          {/* Card 2: Currency */}
          <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">
              {TRAVEL_ESSENTIALS.currency.title}
            </h3>
            <ul className="text-xs text-stone-300 space-y-2 leading-relaxed">
              <li>• <strong>Currencies:</strong> {TRAVEL_ESSENTIALS.currency.primary}</li>
              <li>• <strong>Fixed Rate:</strong> {TRAVEL_ESSENTIALS.currency.exchangeRate}</li>
              <li className="text-stone-400 font-medium pt-1 border-t border-stone-800/80">
                {TRAVEL_ESSENTIALS.currency.tip}
              </li>
            </ul>
          </div>

          {/* Card 3: Best Seasons */}
          <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">
              Seasons & Weather
            </h3>
            <ul className="text-xs text-stone-300 space-y-2 leading-relaxed">
              <li>• <strong>Cool & Dry:</strong> {TRAVEL_ESSENTIALS.seasons.coolDry}</li>
              <li>• <strong>Hot Season:</strong> {TRAVEL_ESSENTIALS.seasons.hotDry}</li>
              <li>• <strong>Green Season:</strong> {TRAVEL_ESSENTIALS.seasons.greenMonsoon}</li>
            </ul>
          </div>

          {/* Card 4: Etiquette */}
          <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">
              Cultural Etiquette
            </h3>
            <div className="space-y-2 text-xs text-stone-300">
              {TRAVEL_ESSENTIALS.etiquette.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
