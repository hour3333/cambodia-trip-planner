import React from 'react';
import { TRANSPORT_CATALOG } from '../data/cambodiaData';
import { Bus, Train, Plane, Ship, Car, Compass, ArrowRight, Clock } from 'lucide-react';

interface TransportGuideProps {
  formatMoney: (usd: number) => string;
}

export const TransportGuide: React.FC<TransportGuideProps> = ({ formatMoney }) => {
  return (
    <section id="transport" className="max-w-7xl mx-auto px-4 py-16 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Compass className="w-4 h-4" />
          <span>Inter-City Transit & Travel Logistics</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Getting Around Cambodia
        </h2>
        <p className="text-stone-400 text-sm sm:text-base mt-2">
          Compare trains, domestic flights, VIP express buses, island speedboats, and local tuk-tuks.
        </p>
      </div>

      {/* Catalog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {TRANSPORT_CATALOG.map((item, idx) => (
          <div 
            key={idx}
            className="bg-stone-900 border border-stone-800 rounded-3xl p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {item.mode === 'train' && <Train className="w-6 h-6" />}
                  {item.mode === 'plane' && <Plane className="w-6 h-6" />}
                  {item.mode === 'ferry' && <Ship className="w-6 h-6" />}
                  {item.mode === 'bus' && <Bus className="w-6 h-6" />}
                  {item.mode === 'private_car' && <Car className="w-6 h-6" />}
                </div>
                <span className="text-sm font-black text-amber-400 px-3 py-1 rounded-full bg-stone-950 border border-stone-800">
                  {formatMoney(item.costUSD)}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {item.title}
              </h3>
              <div className="text-xs text-stone-400 font-semibold mb-3 flex items-center gap-2">
                <span>{item.from}</span>
                <ArrowRight className="w-3 h-3 text-amber-400" />
                <span>{item.to}</span>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Duration: {item.duration}</span>
                </span>
                <span className="font-bold text-stone-200">{item.company}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-950 text-xs text-amber-300/90 leading-normal">
                <strong>Booking Note:</strong> {item.bookingTip}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Booking Apps Highlight */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950/30 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold text-white mb-1">
            📱 Recommended Cambodian Booking Apps
          </h4>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Download <strong>PassApp</strong> & <strong>Grab</strong> for instant rickshaws/tuk-tuks, and use <strong>CamboTicket</strong> or <strong>BookMeBus</strong> for direct online bus and ferry e-tickets across Cambodia.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          <span className="px-3 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs font-bold">
            ⚡ CamboTicket
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs font-bold">
            🛺 PassApp Cambodia
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs font-bold">
            🚆 Royal Railway App
          </span>
        </div>
      </div>

    </section>
  );
};
