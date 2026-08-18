import { Destination, TransportOption, Activity } from '../types';

export const DESTINATIONS: Record<string, Destination> = {
  siem_reap: {
    id: 'siem_reap',
    name: 'Siem Reap & Angkor',
    nameKhmer: 'សៀមរាប',
    province: 'Siem Reap Province',
    description: 'Home to the magnificent 12th-century Angkor Wat temple complex, ancient Khmer Empire ruins, floating villages on Tonle Sap, and vibrant night markets.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1600&q=80',
    coordinates: { x: 38, y: 35 },
    mustSee: ['Angkor Wat Sunrise', 'Bayon Temple (Smiley Faces)', 'Ta Prohm (Tomb Raider Temple)', 'Tonle Sap Floating Village', 'Phare Circus'],
    suggestedDays: 4,
  },
  phnom_penh: {
    id: 'phnom_penh',
    name: 'Phnom Penh',
    nameKhmer: 'ភ្នំពេញ',
    province: 'Capital City',
    description: 'Cambodia’s energetic capital sitting at the confluence of the Mekong and Tonle Sap rivers. A rich blend of French colonial architecture, royal heritage, and poignant history.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=1600&q=80',
    coordinates: { x: 55, y: 68 },
    mustSee: ['Royal Palace & Silver Pagoda', 'National Museum', 'Tuol Sleng Genocide Museum (S-21)', 'Central Market (Psar Thmei)', 'Mekong Sunset Cruise'],
    suggestedDays: 3,
  },
  kampot_kep: {
    id: 'kampot_kep',
    name: 'Kampot & Kep',
    nameKhmer: 'កំពត និង កែប',
    province: 'Southern Coast',
    description: 'Charming riverside town known for world-famous Kampot pepper, French colonial vibes, Bokor Mountain mist, and fresh blue crab in coastal Kep.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    coordinates: { x: 45, y: 85 },
    mustSee: ['Kampot Pepper Plantation', 'Kep Crab Market', 'Bokor National Park', 'Kampot River Sunset Kayaking', 'Rabbit Island (Koh Tonsay)'],
    suggestedDays: 3,
  },
  koh_rong: {
    id: 'koh_rong',
    name: 'Koh Rong Islands',
    nameKhmer: 'កោះរុង',
    province: 'Gulf of Thailand',
    description: 'Tropical paradise islands featuring pristine white-sand beaches, crystal clear waters, bioluminescent plankton, and relaxing island life.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1600&q=80',
    coordinates: { x: 28, y: 88 },
    mustSee: ['Saracen Bay White Sand', 'Night Swim with Bioluminescent Plankton', 'Long Set Beach', 'Snorkeling & Coral Reef Diving', 'Sunset at Lazy Beach'],
    suggestedDays: 4,
  },
  battambang: {
    id: 'battambang',
    name: 'Battambang',
    nameKhmer: 'បាត់ដំបង',
    province: 'Northwestern Cambodia',
    description: 'Cambodia’s artistic hub renowned for fertile rice paddies, historic bamboo train rides, French colonial architecture, and millions of bats emerging at Phnom Sampov.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1600&q=80',
    coordinates: { x: 25, y: 38 },
    mustSee: ['Famous Bamboo Train (Norry)', 'Phnom Sampov Bat Cave Sunset', 'Wat Ek Phnom Ancient Temple', 'Battambang Art Gallery Walk', 'Local Rice Paper Workshops'],
    suggestedDays: 2,
  },
  mondulkiri_kratie: {
    id: 'mondulkiri_kratie',
    name: 'Mondulkiri & Kratie',
    nameKhmer: 'មណ្ឌលគិរី និង ក្រចេះ',
    province: 'Wild East & Mekong',
    description: 'The lush highland wilderness of Cambodia. Home to ethical elephant sanctuaries, rolling pine forest hills, roaring waterfalls, and rare Mekong Irrawaddy dolphins.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
    coordinates: { x: 82, y: 48 },
    mustSee: ['Elephant Valley Project Sanctuary', 'Bousra Waterfall (Highest in Cambodia)', 'Kampi Irrawaddy Dolphin Spotting', 'Bunong Indigenous Village Visit'],
    suggestedDays: 3,
  }
};

export const TRANSPORT_CATALOG: TransportOption[] = [
  {
    mode: 'bus',
    title: 'Giant Ibis VIP Express Bus',
    company: 'Giant Ibis Transport',
    from: 'Phnom Penh',
    to: 'Siem Reap',
    duration: '5.5 hours',
    costUSD: 18,
    description: 'Modern luxury coach with Wi-Fi, power outlets, snacks, and guide onboard via National Highway 6.',
    icon: 'Bus',
    bookingTip: 'Book 2 days in advance via CamboTicket or Giant Ibis app. Morning departures at 7:45 AM or 8:45 AM are best.'
  },
  {
    mode: 'plane',
    title: 'Domestic Flight (AirAsia / Angkor Air)',
    company: 'Cambodia Angkor Air / AirAsia',
    from: 'Phnom Penh',
    to: 'Siem Reap (SAI)',
    duration: '45 mins',
    costUSD: 65,
    description: 'Fastest transit between capital and temple region. Direct non-stop flight.',
    icon: 'Plane',
    bookingTip: 'Arrival is at Siem Reap-Angkor International Airport (SAI). Allow $25 for a airport taxi into downtown (approx 45 mins).'
  },
  {
    mode: 'train',
    title: 'Royal Railway Scenic Express Train',
    company: 'Royal Railway Cambodia',
    from: 'Phnom Penh',
    to: 'Kampot',
    duration: '3.5 hours',
    costUSD: 10,
    description: 'Air-conditioned passenger train winding past green rice paddies and coastal mountains.',
    icon: 'Train',
    bookingTip: 'Runs daily. A fantastic relaxed alternative to road transit with scenic countryside views.'
  },
  {
    mode: 'bus',
    title: 'Larryta Express VIP Minivan',
    company: 'Larryta Express',
    from: 'Phnom Penh',
    to: 'Kampot',
    duration: '2.5 hours',
    costUSD: 10,
    description: 'Comfortable 15-seater Ford Transit van with leather seats and direct highway route.',
    icon: 'Bus',
    bookingTip: 'Departs hourly from Phnom Penh Central. Very popular among locals and expats.'
  },
  {
    mode: 'ferry',
    title: 'Island Speedboat Ferry',
    company: 'Island Speed Ferry Cambodia',
    from: 'Sihanoukville Pier',
    to: 'Koh Rong / Koh Rong Sanloem',
    duration: '45 mins',
    costUSD: 25,
    description: 'High-speed catamaran ferry connecting mainland pier (Autonomous Port) to island beaches.',
    icon: 'Ship',
    bookingTip: 'Ticket includes round-trip return. Keep your physical ticket safe for island return boat.'
  },
  {
    mode: 'bus',
    title: 'Seila Angkor VIP Express Minivan',
    company: 'Seila Angkor Express',
    from: 'Siem Reap',
    to: 'Battambang',
    duration: '3 hours',
    costUSD: 9,
    description: 'Direct express van connecting the cultural capital with the agricultural art hub.',
    icon: 'Bus',
    bookingTip: 'Traverses scenic countryside around the northern end of Tonle Sap Lake.'
  },
  {
    mode: 'private_car',
    title: 'Private Air-Conditioned SUV / Car',
    company: 'Private Chauffeur',
    from: 'Phnom Penh',
    to: 'Mondulkiri (Sen Monorom)',
    duration: '5 hours',
    costUSD: 85,
    description: 'Comfortable private vehicle for mountain highways into the eastern highlands.',
    icon: 'Car',
    bookingTip: 'Ideal for groups of 2-4 travelers carrying heavy luggage or photography gear.'
  }
];

export const ACTIVITIES_DATABASE: Record<string, Activity[]> = {
  siem_reap: [
    {
      id: 'angkor_wat_sunrise',
      title: 'Angkor Wat Sunrise & Main Complex',
      description: 'Watch the iconic sunrise behind the 5 towers of Angkor Wat reflected in the lotus pond. Explore the intricate bas-relief galleries depicting ancient Khmer mythology.',
      location: 'Angkor Archaeological Park',
      category: 'temples',
      estimatedCostUSD: 37, // Angkor Pass
      iconName: 'Sun',
      tips: 'Buy your 1-Day ($37) or 3-Day ($62) Angkor Pass online in advance. Dress respectfully (covered shoulders & knees). Pick up tuk-tuk at 4:30 AM.',
      timeSlot: 'Morning',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bayon_ta_prohm',
      title: 'Bayon Temple & Ta Prohm (Tomb Raider)',
      description: 'Marvel at 216 giant smiling stone faces of Avalokiteshvara at Bayon. Next, visit Ta Prohm, where massive silk-cotton tree roots envelop ancient stone corridors.',
      location: 'Angkor Thom & East Angkor',
      category: 'temples',
      estimatedCostUSD: 0, // Included in pass
      iconName: 'Landmark',
      tips: 'Visit Ta Prohm during mid-day when tour buses recede for better photos.',
      timeSlot: 'Afternoon',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'phare_circus',
      title: 'Phare, The Cambodian Circus',
      description: 'An unforgettable evening of high-energy theater, acrobatics, dance, and live music performed by talented youth from NGO Phare Ponleu Selpak.',
      location: 'Ring Road, Siem Reap',
      category: 'culture',
      estimatedCostUSD: 22,
      iconName: 'Sparkles',
      tips: 'Book Seat Category A or B online in advance. The show starts at 8:00 PM sharply.',
      timeSlot: 'Evening',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'khmer_cooking_class',
      title: 'Khmer Market Tour & Cooking Masterclass',
      description: 'Walk through local markets selecting fresh kaffir lime, lemongrass, and galangal. Cook authentic Fish Amok curry, Beef Lok Lak, and Mango Sticky Rice.',
      location: 'Country Kitchen, Siem Reap',
      category: 'food',
      estimatedCostUSD: 25,
      iconName: 'Utensils',
      tips: 'Includes full multi-course lunch and printed recipe book to take home!',
      timeSlot: 'Morning',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tonle_sap_floating_village',
      title: 'Kompong Phluk Floating Village Sunset Boat',
      description: 'Cruise past stilt houses raised 10 meters above the water and mangrove flooded forests on Southeast Asia’s largest freshwater lake.',
      location: 'Tonle Sap Lake',
      category: 'nature',
      estimatedCostUSD: 20,
      iconName: 'Ship',
      tips: 'Best visited from August to February when water levels are high.',
      timeSlot: 'Afternoon',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'pub_street_night_market',
      title: 'Pub Street & Angkor Night Market Exploration',
      description: 'Dive into Siem Reap’s famous night hub. Enjoy $1 fresh Angkor draught beer, vibrant street food stalls (grilled skewers, fried ice cream), and hand-made souvenirs.',
      location: 'Downtown Siem Reap',
      category: 'food',
      estimatedCostUSD: 12,
      iconName: 'Beer',
      tips: 'Haggle gently for handicrafts at the night market. Try $2 foot massages after a long day of temple walking!',
      timeSlot: 'Evening',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    }
  ],
  phnom_penh: [
    {
      id: 'royal_palace_silver_pagoda',
      title: 'Royal Palace & Silver Pagoda Tour',
      description: 'Admire classic Khmer throne hall architecture, lush manicured gardens, and the Silver Pagoda paved with 5,000 solid silver floor tiles and housing a Emerald Buddha.',
      location: 'Samdach Sothearos Blvd',
      category: 'culture',
      estimatedCostUSD: 10,
      iconName: 'Crown',
      tips: 'Strict dress code required: shoulders and knees must be covered. Open 8:00 AM - 11:00 AM and 2:00 PM - 5:00 PM.',
      timeSlot: 'Morning',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tuol_sleng_killing_fields',
      title: 'Tuol Sleng (S-21) & Choeung Ek Genocide Memorial',
      description: 'Understand Cambodia’s resilient spirit with a sobering, educational visit to the former high school turned prison S-21 and the Killing Fields memorial stupa.',
      location: 'Phnom Penh Suburbs',
      category: 'history',
      estimatedCostUSD: 15, // Includes audio guide
      iconName: 'BookOpen',
      tips: 'The inclusion of the official audio guide is highly recommended; it provides deeply moving personal survivor accounts.',
      timeSlot: 'Afternoon',
      image: 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mekong_sunset_cruise',
      title: 'Mekong & Tonle Sap Four Rivers Sunset Cruise',
      description: 'Sail along the famous river intersection as the sun sets over the Phnom Penh skyline. Sip local cocktails and enjoy traditional live music.',
      location: 'Riverside Promenade (Sisowath Quay)',
      category: 'culture',
      estimatedCostUSD: 18,
      iconName: 'Sunset',
      tips: 'Boats board at 5:00 PM near the Night Market pier.',
      timeSlot: 'Evening',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'central_market_shopping',
      title: 'Central Market (Psar Thmei) Art Deco Discovery',
      description: 'Explore the iconic 1937 Yellow Art Deco dome market filled with antiques, silver jewelry, Cambodian silks, gemstones, and local food stalls.',
      location: 'Street 126, Phnom Penh',
      category: 'culture',
      estimatedCostUSD: 15,
      iconName: 'ShoppingBag',
      tips: 'Try traditional Num Banh Chok (Khmer Noodle Soup) at the central food courtyard for $1.50!',
      timeSlot: 'Morning',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'
    }
  ],
  kampot_kep: [
    {
      id: 'kampot_pepper_farm',
      title: 'La Plantation Kampot Pepper & Tasting Tour',
      description: 'Guided organic farm walk learning why Kampot pepper is awarded PGI status by the EU. Taste black, red, white, and fresh green peppercorns.',
      location: 'Kampot Countryside',
      category: 'food',
      estimatedCostUSD: 5,
      iconName: 'Leaf',
      tips: 'Buy vacuum-sealed Kampot Red Pepper as the ultimate culinary souvenir for home cooking.',
      timeSlot: 'Morning',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'kep_crab_market',
      title: 'Kep Crab Market & Stir-Fried Kampot Pepper Feast',
      description: 'Watch local women pull wooden crab traps directly from the Gulf of Thailand. Enjoy fresh blue crab stir-fried with green peppercorns right at seaside wooden huts.',
      location: 'Kep Waterfront',
      category: 'food',
      estimatedCostUSD: 14,
      iconName: 'UtensilsCrossed',
      tips: 'Haggle for 1kg of fresh live crab ($8-$10) and pay a restaurant $3 to cook it with fresh Kampot peppercorns!',
      timeSlot: 'Afternoon',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'kampot_river_sunset_kayak',
      title: 'Green Loop River Kayaking & Firefly Sunset',
      description: 'Paddle through serene narrow mangrove canals lined with coconut palms. As night falls, watch fireflies illuminate the river banks.',
      location: 'Kampot River (Praek Tuek Chhu)',
      category: 'nature',
      estimatedCostUSD: 12,
      iconName: 'Waves',
      tips: 'Rent kayaks from Champa Lodge or Greenhouse around 4:00 PM for optimal light.',
      timeSlot: 'Evening',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    }
  ],
  koh_rong: [
    {
      id: 'saracen_bay_beach',
      title: 'Pristine White Beach Relaxation & Hammock Time',
      description: 'Unwind on powder-white sand fringed by turquoise waters. Soak up tropical sun and enjoy fresh coconut juice from beachfront wooden cafes.',
      location: 'Saracen Bay / Long Set Beach',
      category: 'beaches',
      estimatedCostUSD: 5,
      iconName: 'Palmtree',
      tips: 'Bring eco-friendly reef-safe sunscreen and plenty of cash as island ATMs can be unreliable.',
      timeSlot: 'Morning',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'island_snorkeling_boat',
      title: 'Coral Reef Snorkeling & Koh Koun Boat Tour',
      description: 'Board a longtail boat to uninhabited islets. Swim alongside colorful tropical fish, sea anemones, and explore vibrant coral gardens.',
      location: 'Koh Koun Islet',
      category: 'beaches',
      estimatedCostUSD: 18,
      iconName: 'Compass',
      tips: 'Includes mask, snorkel gear, fresh tropical fruits, and BBQ fish lunch onboard.',
      timeSlot: 'Afternoon',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bioluminescent_plankton_swim',
      title: 'Night Swim with Bioluminescent Plankton',
      description: 'Take a boat out to pitch-black coves. Jump into warm waters and watch magic unfold as every movement sparks glowing electric-blue bioluminescence!',
      location: 'Koh Rong Night Coves',
      category: 'nature',
      estimatedCostUSD: 12,
      iconName: 'Sparkles',
      tips: 'The darker the night (new moon phase), the brighter the blue glowing effect underwater!',
      timeSlot: 'Evening',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  battambang: [
    {
      id: 'bamboo_train_norry',
      title: 'Historic Bamboo Train (Norry) Ride',
      description: 'Hop onto a improvised bamboo flatcar powered by a small engine. Glide over historic single-track railway through scenic green rice fields at 30km/h.',
      location: 'O Dambang, Battambang',
      category: 'culture',
      estimatedCostUSD: 5,
      iconName: 'TrainTrack',
      tips: 'When meeting another train coming from opposite direction, the carriage with fewer passengers is disassembled in 1 minute to let the other pass!',
      timeSlot: 'Morning',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'phnom_sampov_bat_cave',
      title: 'Phnom Sampov Mountain & Millions of Bats Sunset',
      description: 'Visit hill top temples and historical caves. At 5:30 PM, gather at the mountain base to witness 4 million bats emerge in a mesmerizing continuous stream.',
      location: 'Phnom Sampov Hill',
      category: 'nature',
      estimatedCostUSD: 3,
      iconName: 'Moon',
      tips: 'Grab a cold Angkor Beer from roadside plastic chairs and watch the bat stream snake across the evening sky for 45 minutes.',
      timeSlot: 'Evening',
      image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80'
    }
  ],
  mondulkiri_kratie: [
    {
      id: 'elephant_valley_project',
      title: 'Ethical Elephant Sanctuary Day Walk',
      description: 'Trek through lush highland valley forests alongside rescued elephants in their natural habitat. Watch them bathe in streams with zero riding allowed.',
      location: 'Sen Monorom, Mondulkiri',
      category: 'nature',
      estimatedCostUSD: 55,
      iconName: 'Trees',
      tips: 'Book weeks in advance. 100% of proceeds go directly to Bunong indigenous forest protection and elephant veterinary care.',
      timeSlot: 'Morning',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'irrawaddy_dolphins_kratie',
      title: 'Mekong Irrawaddy Dolphin Eco-Boat Tour',
      description: 'Board a quiet wooden boat at Kampi on the Mekong River. Spot rare, sweet-faced Irrawaddy freshwater dolphins surfacing in calm river pools.',
      location: 'Kampi, Kratie',
      category: 'nature',
      estimatedCostUSD: 10,
      iconName: 'Fish',
      tips: 'Best viewed late afternoon when temperatures cool and dolphins actively feed.',
      timeSlot: 'Afternoon',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

export const TRAVEL_ESSENTIALS = {
  visa: {
    title: 'Visa & Entry Requirements',
    eVisaCost: '$36 USD online (evisa.gov.kh)',
    onArrival: '$30 USD cash at Phnom Penh (PNH) or Siem Reap (SAI) airports',
    validity: '30 Days Tourist (T-Class), extendable once for 30 additional days.',
    passportRequirement: 'Passport must have at least 6 months validity remaining and 2 blank pages.'
  },
  currency: {
    title: 'Dual Currency System',
    primary: 'US Dollars ($ USD) & Cambodian Riel (៛ KHR)',
    exchangeRate: '$1.00 USD ≈ 4,000 KHR',
    tip: 'ATMs dispense USD cash. Small change under $1 is given in Cambodian Riel (e.g. 2,000 Riel = $0.50). Always inspect USD bills for tears as damaged bills are rejected.'
  },
  seasons: {
    coolDry: 'Nov – Feb (Best time: 24°C - 30°C, clear skies)',
    hotDry: 'Mar – May (Warmest: 32°C - 38°C, great for beaches)',
    greenMonsoon: 'Jun – Oct (Rainy/Green season: quick afternoon showers, lush scenery, fewer crowds)'
  },
  etiquette: [
    'Always cover shoulders and knees when visiting ancient temples or active pagodas.',
    'Remove shoes and hats before entering someone’s home or temple main halls.',
    'Use both hands or your right hand when passing money or items to elders.',
    'Never touch anyone’s head or point your feet directly at Buddha images or people.'
  ]
};
