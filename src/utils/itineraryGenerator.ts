import { 
  TripPreferences, 
  GeneratedItinerary, 
  DayPlan, 
  Destination, 
  TransportOption 
} from '../types';
import { DESTINATIONS, ACTIVITIES_DATABASE, TRANSPORT_CATALOG } from '../data/cambodiaData';

export function getDaysCount(pref: TripPreferences): number {
  if (pref.customDays && pref.customDays > 0) {
    return Math.min(Math.max(pref.customDays, 1), 30);
  }
  switch (pref.duration) {
    case 'few_days': return 3;
    case 'week': return 7;
    case 'two_weeks': return 14;
    case 'month': return 21;
    default: return 7;
  }
}

export function generateItinerary(pref: TripPreferences): GeneratedItinerary {
  const totalDays = getDaysCount(pref);
  
  // Determine destination sequence based on duration & interests
  const destSequence: string[] = [];
  
  if (totalDays <= 3) {
    if (pref.interests.includes('beaches')) {
      destSequence.push('koh_rong');
    } else if (pref.interests.includes('history') && !pref.interests.includes('temples')) {
      destSequence.push('phnom_penh');
    } else {
      destSequence.push('siem_reap');
    }
  } else if (totalDays <= 7) {
    if (pref.interests.includes('beaches')) {
      destSequence.push('siem_reap', 'koh_rong');
    } else if (pref.interests.includes('nature')) {
      destSequence.push('siem_reap', 'kampot_kep');
    } else {
      destSequence.push('siem_reap', 'phnom_penh');
    }
  } else if (totalDays <= 14) {
    destSequence.push('siem_reap', 'phnom_penh', 'kampot_kep', 'koh_rong');
    if (pref.interests.includes('culture') || pref.interests.includes('temples')) {
      destSequence.unshift('battambang'); // Add Battambang at start/middle
    }
  } else {
    // 15 - 30 days full grand loop
    destSequence.push('siem_reap', 'battambang', 'phnom_penh', 'kampot_kep', 'koh_rong', 'mondulkiri_kratie');
  }

  // Allocate days per destination
  const daysPerDest: { destId: string; count: number }[] = [];
  const basePerDest = Math.floor(totalDays / destSequence.length);
  let remainder = totalDays % destSequence.length;

  destSequence.forEach((dId) => {
    let extra = 0;
    if (remainder > 0) {
      extra = 1;
      remainder--;
    }
    daysPerDest.push({ destId: dId, count: Math.max(1, basePerDest + extra) });
  });

  const dayPlans: DayPlan[] = [];
  const destinationsVisitedMap = new Map<string, Destination>();
  const transportLegs: TransportOption[] = [];

  let currentDay = 1;

  // Accommodation budget per night estimate based on tier
  const hotelBudget = pref.budget === 'budget' ? 22 : pref.budget === 'comfort' ? 65 : 190;
  const foodBudgetPerDay = pref.budget === 'budget' ? 12 : pref.budget === 'comfort' ? 28 : 75;

  let totalActivitiesCost = 0;
  let totalTransportCost = 0;

  for (let dIndex = 0; dIndex < daysPerDest.length; dIndex++) {
    const { destId, count } = daysPerDest[dIndex];
    const destination = DESTINATIONS[destId] || DESTINATIONS.siem_reap;
    destinationsVisitedMap.set(destination.id, destination);

    const availableActivities = ACTIVITIES_DATABASE[destId] || [];

    // Filter or sort activities by user interests
    const sortedActivities = [...availableActivities].sort((a, b) => {
      const aMatch = pref.interests.includes(a.category) ? 1 : 0;
      const bMatch = pref.interests.includes(b.category) ? 1 : 0;
      return bMatch - aMatch;
    });

    for (let dayInDest = 1; dayInDest <= count; dayInDest++) {
      const isFirstDayOfLeg = dayInDest === 1 && dIndex > 0;
      let interCityTransport: TransportOption | undefined = undefined;

      if (isFirstDayOfLeg) {
        const prevDestId = daysPerDest[dIndex - 1].destId;
        const matchingTransport = TRANSPORT_CATALOG.find(
          t => (t.from.toLowerCase().includes(DESTINATIONS[prevDestId]?.name.toLowerCase().split(' ')[0]) || 
               DESTINATIONS[prevDestId]?.name.toLowerCase().includes(t.from.toLowerCase())) &&
              (t.to.toLowerCase().includes(destination.name.toLowerCase().split(' ')[0]) || 
               destination.name.toLowerCase().includes(t.to.toLowerCase()))
        );

        if (matchingTransport) {
          interCityTransport = matchingTransport;
          transportLegs.push(matchingTransport);
          totalTransportCost += matchingTransport.costUSD * pref.travelersCount;
        } else {
          // Default backup inter-city transport option
          const fallbackTransport: TransportOption = {
            mode: 'bus',
            title: `Express Transit from ${DESTINATIONS[prevDestId]?.name || 'Previous Stop'} to ${destination.name}`,
            company: 'Larryta / VIP Express',
            from: DESTINATIONS[prevDestId]?.name || 'Previous City',
            to: destination.name,
            duration: '3.5 hours',
            costUSD: 14,
            description: 'Comfortable air-conditioned express minivan across national highways.',
            icon: 'Bus',
            bookingTip: 'Book tickets 1 day prior at your hotel reception.'
          };
          interCityTransport = fallbackTransport;
          transportLegs.push(fallbackTransport);
          totalTransportCost += fallbackTransport.costUSD * pref.travelersCount;
        }
      }

      // Select morning, afternoon, evening activities
      const morningAct = sortedActivities[(dayInDest - 1) % sortedActivities.length] || availableActivities[0];
      const afternoonAct = sortedActivities[(dayInDest) % sortedActivities.length] || availableActivities[1] || availableActivities[0];
      const eveningAct = sortedActivities[(dayInDest + 1) % sortedActivities.length] || availableActivities[2] || availableActivities[0];

      const dayActivityCost = (morningAct.estimatedCostUSD + afternoonAct.estimatedCostUSD + eveningAct.estimatedCostUSD) * pref.travelersCount;
      totalActivitiesCost += dayActivityCost;

      dayPlans.push({
        dayNumber: currentDay,
        title: `Day ${currentDay}: Exploring ${destination.name}`,
        destinationId: destination.id,
        destinationName: destination.name,
        destinationProvince: destination.province,
        morning: morningAct,
        afternoon: afternoonAct,
        evening: eveningAct,
        accommodationRecommendation: {
          name: pref.budget === 'budget' 
            ? `${destination.name} Boutique Hostel & Villa` 
            : pref.budget === 'comfort' 
            ? `${destination.name} Riverside Resort & Spa` 
            : `Grand Heritage Hotel ${destination.name}`,
          type: pref.budget === 'budget' ? 'Cozy Private Room / Hostel' : pref.budget === 'comfort' ? '4-Star Boutique Hotel' : '5-Star Heritage Luxury Villa',
          estimatedCostUSD: hotelBudget
        },
        interCityTransport
      });

      currentDay++;
    }
  }

  const accommodationTotal = hotelBudget * totalDays;
  const foodTotal = foodBudgetPerDay * totalDays * pref.travelersCount;
  const totalCostEstimateUSD = Math.round(accommodationTotal + foodTotal + totalTransportCost + totalActivitiesCost);

  const itineraryTitle = `${totalDays}-Day ${pref.budget.toUpperCase()} ${pref.interests.length > 0 ? pref.interests.map(i => i.toUpperCase()).join(' & ') : 'CAMBODIA'} ODYSSEY`;

  return {
    id: `itinerary-${Date.now()}`,
    title: itineraryTitle,
    durationDays: totalDays,
    summary: `A carefully curated ${totalDays}-day journey across ${destinationsVisitedMap.size} epic Cambodian destinations: ${Array.from(destinationsVisitedMap.values()).map(d => d.name).join(', ')}. Tailored for a ${pref.pace} pace and ${pref.budget} comfort level.`,
    days: dayPlans,
    destinationsVisited: Array.from(destinationsVisitedMap.values()),
    totalCostEstimateUSD,
    budgetBreakdownUSD: {
      accommodation: accommodationTotal,
      food: foodTotal,
      transport: totalTransportCost,
      activitiesAndPasses: totalActivitiesCost,
    },
    transportLegs
  };
}
