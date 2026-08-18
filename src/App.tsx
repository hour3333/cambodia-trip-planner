import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlannerWizard } from './components/PlannerWizard';
import { ItineraryView } from './components/ItineraryView';
import { TransportGuide } from './components/TransportGuide';
import { DestinationMap } from './components/DestinationMap';
import { BudgetSummary } from './components/BudgetSummary';
import { TravelTips } from './components/TravelTips';
import { Footer } from './components/Footer';
import { TripPreferences, GeneratedItinerary, PageTab } from './types';
import { generateItinerary } from './utils/itineraryGenerator';
import { Compass, Bus, MapPin, ArrowRight } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('planner');
  const [currency, setCurrency] = useState<'USD' | 'KHR'>('USD');
  const [preferences, setPreferences] = useState<TripPreferences>({
    duration: 'week',
    customDays: 7,
    pace: 'balanced',
    budget: 'comfort',
    interests: ['temples', 'food', 'beaches'],
    travelersCount: 2
  });

  const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);

  // Generate default itinerary on initial render
  useEffect(() => {
    const generated = generateItinerary(preferences);
    setItinerary(generated);
  }, []);

  const handleGenerateItinerary = (newPref: TripPreferences) => {
    setPreferences(newPref);
    const generated = generateItinerary(newPref);
    setItinerary(generated);

    // Scroll smoothly to itinerary section
    setTimeout(() => {
      const el = document.getElementById('itinerary');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleReset = () => {
    const defaultPref: TripPreferences = {
      duration: 'week',
      customDays: 7,
      pace: 'balanced',
      budget: 'comfort',
      interests: ['temples', 'food', 'beaches'],
      travelersCount: 2
    };
    setPreferences(defaultPref);
    setItinerary(generateItinerary(defaultPref));
    setActiveTab('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'USD' ? 'KHR' : 'USD');
  };

  const formatMoney = (usdAmount: number): string => {
    if (currency === 'KHR') {
      const rielAmount = usdAmount * 4000;
      return `${rielAmount.toLocaleString()} ៛`;
    }
    return `$${usdAmount.toLocaleString()} USD`;
  };

  const scrollToPlanner = () => {
    setActiveTab('planner');
    const el = document.getElementById('planner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans">
      
      {/* Navigation Bar */}
      <Header 
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currency={currency} 
        onToggleCurrency={toggleCurrency} 
        onReset={handleReset}
        hasItinerary={!!itinerary}
      />

      {/* Main 3-Page Content Area */}
      <main className="flex-grow">

        {/* PAGE 1: TRIP PLANNER & ITINERARY */}
        {activeTab === 'planner' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Hero Banner */}
            <Hero onStartPlanner={scrollToPlanner} />

            {/* Wizard Form */}
            <PlannerWizard onGenerate={handleGenerateItinerary} />

            {/* Generated Itinerary View */}
            {itinerary && (
              <>
                <ItineraryView 
                  itinerary={itinerary} 
                  currency={currency} 
                  formatMoney={formatMoney} 
                />

                <BudgetSummary 
                  itinerary={itinerary} 
                  currency={currency} 
                  formatMoney={formatMoney} 
                  travelersCount={preferences.travelersCount}
                />
              </>
            )}

            {/* Next Page Navigation Banner */}
            <section className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Continue Exploring</span>
                  <h4 className="text-xl font-extrabold text-white mt-1">Page 2: Inter-City Transport & Transit Logistics</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-1">Check trains, domestic flights, VIP buses, and island ferries.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('transport');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs flex items-center gap-2 transition-all shrink-0"
                >
                  <Bus className="w-4 h-4" />
                  <span>Go to Page 2 (Transport)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 2: TRANSPORT & TRANSIT LOGISTICS */}
        {activeTab === 'transport' && (
          <div className="animate-fadeIn py-8 space-y-12">
            
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950/40 border border-stone-800 rounded-3xl p-6 sm:p-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Bus className="w-4 h-4" />
                  <span>Page 2 of 3 • Inter-city Travel Logistics</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                  Cambodian Transport & Transit Guide
                </h1>
                <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
                  Compare trains, domestic flights, VIP express minivans, island ferries, and local rickshaws with estimated pricing.
                </p>
              </div>
            </div>

            {/* Transport Catalog Component */}
            <TransportGuide formatMoney={formatMoney} />

            {/* Next Page Navigation Banner */}
            <section className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Continue Exploring</span>
                  <h4 className="text-xl font-extrabold text-white mt-1">Page 3: Interactive Destination Map & Travel Tips</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-1">Inspect regional pins, E-Visa details, currency exchange, and cultural dress code.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('guide');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs flex items-center gap-2 transition-all shrink-0"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Go to Page 3 (Map & Tips)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 3: INTERACTIVE MAP & TRAVEL GUIDE */}
        {activeTab === 'guide' && (
          <div className="animate-fadeIn py-8 space-y-12">
            
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950/40 border border-stone-800 rounded-3xl p-6 sm:p-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Page 3 of 3 • Country Map & Travel Guide</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                  Cambodia Destination Map & Travel Essentials
                </h1>
                <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
                  Interactive destination pins, must-see attraction highlights, E-Visa rules, dual currency advice, and temple etiquette.
                </p>
              </div>
            </div>

            {/* Interactive Destination Map */}
            <DestinationMap />

            {/* Travel Essentials & Tips */}
            <TravelTips />

            {/* Back to Planner Page Banner */}
            <section className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Ready to Plan?</span>
                  <h4 className="text-xl font-extrabold text-white mt-1">Page 1: Customize Your Itinerary</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-1">Generate your day-by-day travel schedule for Angkor, Phnom Penh, Kampot, or Koh Rong.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('planner');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs flex items-center gap-2 transition-all shrink-0"
                >
                  <Compass className="w-4 h-4" />
                  <span>Return to Page 1 (Planner)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
