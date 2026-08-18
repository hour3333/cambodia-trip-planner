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
import { TripPreferences, GeneratedItinerary } from './types';
import { generateItinerary } from './utils/itineraryGenerator';

export function App() {
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
    const el = document.getElementById('planner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans">
      
      {/* Navigation Bar */}
      <Header 
        currency={currency} 
        onToggleCurrency={toggleCurrency} 
        onReset={handleReset}
        hasItinerary={!!itinerary}
      />

      <main className="flex-grow space-y-12">
        {/* Hero Section */}
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

        {/* Transport Guide */}
        <TransportGuide formatMoney={formatMoney} />

        {/* Interactive Map */}
        <DestinationMap />

        {/* Travel Tips & Etiquette */}
        <TravelTips />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
