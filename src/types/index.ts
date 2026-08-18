export type DurationOption = 'few_days' | 'week' | 'two_weeks' | 'month';

export type TravelPace = 'relaxed' | 'balanced' | 'fast';

export type BudgetTier = 'budget' | 'comfort' | 'luxury';

export type ActivityInterest = 
  | 'temples' 
  | 'food' 
  | 'beaches' 
  | 'nature' 
  | 'history' 
  | 'culture';

export interface TripPreferences {
  duration: DurationOption;
  customDays?: number;
  pace: TravelPace;
  budget: BudgetTier;
  interests: ActivityInterest[];
  travelersCount: number;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  category: ActivityInterest;
  estimatedCostUSD: number;
  iconName: string;
  tips?: string;
  timeSlot: 'Morning' | 'Afternoon' | 'Evening';
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  nameKhmer: string;
  province: string;
  description: string;
  image: string;
  bannerImage: string;
  coordinates: { x: number; y: number }; // Percentage for interactive map
  mustSee: string[];
  suggestedDays: number;
}

export interface TransportOption {
  mode: 'train' | 'plane' | 'bus' | 'ferry' | 'private_car' | 'tuk_tuk';
  title: string;
  company: string;
  from: string;
  to: string;
  duration: string;
  costUSD: number;
  description: string;
  icon: string;
  bookingTip: string;
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  destinationId: string;
  destinationName: string;
  destinationProvince: string;
  morning: Activity;
  afternoon: Activity;
  evening: Activity;
  accommodationRecommendation: {
    name: string;
    type: string;
    estimatedCostUSD: number;
  };
  interCityTransport?: TransportOption;
}

export interface GeneratedItinerary {
  id: string;
  title: string;
  durationDays: number;
  summary: string;
  days: DayPlan[];
  destinationsVisited: Destination[];
  totalCostEstimateUSD: number;
  budgetBreakdownUSD: {
    accommodation: number;
    food: number;
    transport: number;
    activitiesAndPasses: number;
  };
  transportLegs: TransportOption[];
}
