import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'agadir-travel-guide';
const SLUG_FR = 'guide-voyage-agadir';
const SLUG_AR = 'dalil-safar-agadir';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(34855142);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Agadir Travel Guide 2026 — Beaches, Taghazout Surf, Paradise Valley & Real Prices',
  metaDescription: 'Complete Agadir travel guide 2026: best beaches, Taghazout surf, Paradise Valley, Souk El Had, Danialand, hidden Anti-Atlas gems, driving distances from every city, real prices and honest advice.',
  title: 'Agadir Travel Guide 2026: Morocco\'s Sun-Kissed Beach Capital — Everything You Need to Know',
  description: 'The complete Agadir guide written by a Casablanca-based team that drives clients to Agadir year-round. Real 2026 prices, 300 days of sunshine explained, Taghazout surf culture, hidden Anti-Atlas gorges nobody talks about, honest comparison with Essaouira, and exact driving distances from every Moroccan city.',
  keyword: 'agadir travel guide',
  coverImage: COVER,
  coverAlt: 'Agadir travel guide 2026 — Agadir Bay beach and Corniche promenade with the Kasbah Oufella above',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 17,
  intro: 'Agadir is Morocco\'s answer to the question "what if a beach resort city had 300 days of sunshine, a 10km stretch of golden sand, and one of Africa\'s best surf breaks 20 minutes up the coast?" Rebuilt almost entirely after the devastating 1960 earthquake, Agadir is deliberately modern — no ancient medina maze here, but a relaxed, palm-lined Corniche, a thriving surf culture at Taghazout, and a warm winter climate that keeps Europeans coming when the rest of Morocco (and Europe) shivers. Our Casablanca-based team drives clients south to Agadir throughout the year. This is the honest, practical guide we give them — including the Anti-Atlas gorges and desert circuits that almost no other Agadir guide mentions.',
  sections: [
    {
      heading: 'Is Agadir Worth Visiting? The Honest Answer',
      paragraphs: [
        'Agadir divides opinion more than any other major Moroccan destination, and the reason is simple: it is not what people expect from "Morocco." There is no labyrinthine medina, no centuries-old souk maze, no imperial palaces. The 1960 earthquake that killed over 12,000 people led to a complete rebuild — modern, planned, low-rise, and functional rather than atmospheric.',
        'What Agadir does have is something no other Moroccan city can match: a genuine beach resort identity with nearly 300 days of sunshine a year, mild winters (18–25°C from November to February) while northern Europe and even northern Morocco shiver, and direct access to Taghazout, one of the best surf destinations in Africa. It is also, increasingly, a base for exploring the wild, little-visited Anti-Atlas mountains and oases inland.',
        'Our honest verdict: skip Agadir if you came to Morocco purely for medina culture — Marrakech or Fes deliver that far better. Choose Agadir if you want beach time, surf, reliable winter sun, or a relaxed base from which to explore the Anti-Atlas and Souss Valley. Many of our clients combine 2–3 days in Agadir with a Marrakech or Essaouira leg for the best of both worlds.',
      ],
      callout: {
        label: '🇲🇦 Local Verdict',
        body: 'Agadir is not Morocco\'s most "Moroccan" city — and that is precisely its appeal for a certain kind of traveler. If you want camels and kasbahs, go elsewhere first. If you want a beach, warm winter sun, and easy day trips into genuinely wild Anti-Atlas terrain most tourists never see, Agadir delivers exactly that.',
      },
    },
    {
      heading: 'Agadir Quick Facts 2026',
      paragraphs: ['Everything you need to know before arrival.'],
      table: {
        caption: 'Agadir essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Population', '~700,000 (city), Souss-Massa region much larger'],
          ['Rebuilt after', '1960 earthquake — modern, low-rise city plan'],
          ['Region', 'Souss-Massa — between the High Atlas, Anti-Atlas, desert and Atlantic'],
          ['Airport', 'Agadir Al Massira Airport (AGA) — 25 km / ~30 min from city centre'],
          ['Beach length', '~9–10 km of sandy beachfront'],
          ['Sunshine', '~300 days of sun per year'],
          ['Winter temperature', '18–25°C (Nov–Feb) — Morocco\'s warmest winter destination'],
          ['Best time to visit', 'Year-round; winter for warm sun, spring/autumn for balance, summer for peak beach life'],
          ['Distance from Casablanca', '460–466 km via A7 motorway — 4h45–5h00 driving'],
          ['Distance from Marrakech', '~260 km via A7 — 2h30–3h00 driving'],
          ['Distance from Taghazout', '20 km north — Morocco\'s surf capital'],
          ['Car rental from AGA/Agadir', 'From MAD 250/day (€23) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'Agadir Beaches — Complete Guide',
      paragraphs: [
        'Agadir\'s defining feature is its beach — nearly 10km of sand curving around a wide, sheltered bay, consistently ranked among Morocco\'s cleanest and safest. The main city beach is calm enough for swimming most of the year, while the coastline north toward Taghazout delivers some of Africa\'s most consistent surf.',
      ],
      table: {
        caption: 'Agadir and surrounding beaches guide 2026',
        headers: ['Beach', 'Distance from centre', 'Character', 'Best for'],
        rows: [
          ['Agadir Bay (Plage d\'Agadir)', 'City centre', 'Wide, sheltered, sandy, lively promenade', 'Swimming, families, beach clubs, sunset walks'],
          ['Taghazout', '20 km north', 'Africa\'s premier surf town — consistent breaks', 'Surfers, yoga retreats, laid-back travelers'],
          ['Tamraght', '15 km north', 'Quieter surf spot near Taghazout', 'Beginner surfers, calmer scene'],
          ['Imourane', '~7 km from centre', 'Quieter residential beach area', 'Escaping the busiest central stretch'],
          ['Aourir (Banana Beach)', '18 km north', 'Local market town beach, banana plantations nearby', 'Combining beach with the Sunday souk'],
        ],
      },
      callout: {
        label: '🏄 Taghazout Surf Tip',
        body: 'Taghazout offers breaks for every level — Anchor Point and Boilers for experienced surfers, Panoramas and Devil\'s Rock for intermediates, Banana Beach and Tamraght for beginners. Winter (October–March) brings the biggest, most powerful swells and the best conditions overall; summer is gentler and better for beginners.',
      },
    },
    {
      heading: 'Top Things to Do in Agadir',
      paragraphs: [
        'Agadir\'s attractions are spread between the beachfront, the hilltop Kasbah, and the city\'s growing collection of modern family attractions.',
      ],
      table: {
        caption: 'Best things to do in Agadir 2026',
        headers: ['Attraction', 'Area', 'Time needed', 'Price', 'Notes'],
        rows: [
          ['Agadir Oufella Kasbah + cable car', 'Hilltop above the bay', '1.5–2 hours', 'Cable car ~MAD 80 return', 'Panoramic views over the whole bay — best at sunset. The 16th-century kasbah ruins are free to walk around.'],
          ['Agadir Corniche', 'Beachfront', '1–3 hours', 'Free', 'Palm-lined promenade with beach clubs, cafés and restaurants — best late afternoon into sunset'],
          ['Souk El Had', 'City centre', '1.5–2 hours', 'Free entry', 'One of Africa\'s largest markets — spices, crafts, produce, leather goods. Bargaining expected.'],
          ['Danialand Waterpark', 'Agadir Oufella area', 'Half day', 'MAD 250–350/adult (indicative)', 'Major new waterpark (opened 2024, expanding through 2026) — 10 pools, 27 slides, Airbus-fuselage restaurants'],
          ['Museum of Amazigh (Berber) Culture', 'City centre', '45 min–1 hour', 'MAD 20–30', 'Excellent overview of Amazigh heritage, jewellery, textiles and traditions of the Souss region'],
          ['Marina d\'Agadir', 'Port area', '1–2 hours', 'Free to walk', 'Yachts, waterfront restaurants, a relaxed evening stroll'],
          ['Crocoparc', 'Outskirts of Agadir', 'Half day', 'MAD 150–200/adult', 'Nile crocodile park — popular family activity'],
          ['Mohammed V Mosque', 'City centre', '20–30 min (exterior)', 'Free (exterior view)', 'Fine example of modern Moroccan religious architecture'],
        ],
      },
      callout: {
        label: '🎢 What\'s New in Agadir for 2026',
        body: 'Agadir is investing heavily in tourism infrastructure ahead of 2030. Danialand waterpark (opened June 2024, still expanding) now includes an Aqua Tower, a 1km lazy river, and two restaurants built inside repurposed Airbus fuselages. The Corniche is undergoing renovation, and the city is upgrading pedestrian zones and access to the Kasbah. Expect the offering to keep growing through 2026–2029.',
      },
    },
    {
      heading: 'Hidden Gems — The Anti-Atlas and Souss Massa Circuits Nobody Talks About',
      paragraphs: [
        'This is the part of an Agadir trip almost every guide skips. The Souss-Massa region sits between the High Atlas, the Anti-Atlas, the pre-Sahara desert, and the Atlantic — giving Agadir access to landscapes and heritage sites that are genuinely underexplored compared to the well-trodden Marrakech-Fes circuit.',
      ],
      table: {
        caption: 'Hidden gems around Agadir — Anti-Atlas and Souss Massa 2026',
        headers: ['Site/Circuit', 'Distance from Agadir', 'What it is', 'Why it matters'],
        rows: [
          ['Aït Mansour Gorges (Tafraoute)', '~150 km, 2h30', 'Dramatic palm-lined gorge cutting through the Anti-Atlas', 'One of Morocco\'s most spectacular and least-visited canyon landscapes'],
          ['Paradise Valley', '~55 km, 1h', 'Natural rock pools and waterfalls in a palm-filled canyon', 'Popular but genuinely beautiful half-day escape — swim in the pools'],
          ['Jbel Siroua', '~150 km, 2h30–3h', 'Extinct volcano trekking region between High Atlas and Sahara', 'Multi-day trekking territory, dramatic volcanic scenery, Berber villages'],
          ['Jbel Aklim', '~120 km', 'Anti-Atlas mountain with panoramic viewpoints', 'Sweeping views across the Anti-Atlas range, far from crowds'],
          ['Route des Oasis (Tata–Akka)', '~250 km', 'Pre-Saharan oasis circuit through palm groves and kasbahs', 'A genuine desert-oasis experience, closer than Merzouga'],
          ['Ifri Imadidane', '~130 km', 'Traditional Amazigh collective granary (agadir)', 'Rare heritage site — communal fortified grain stores, centuries old'],
          ['Souss-Massa National Park', '~50 km south', 'Coastal wetland reserve', 'One of Morocco\'s best birdwatching sites — flamingos, rare bald ibis'],
          ['Kasbahs, Ksour & Granaries route', 'Various, 1–3h', 'Heritage circuit through fortified villages and granaries', 'Living architectural history far from the tourist trail'],
        ],
      },
      callout: {
        label: '🏔️ Our Recommendation',
        body: 'If you have a rental car and more than 3 days in Agadir, dedicate one full day to the Anti-Atlas — Paradise Valley in the morning, continuing to Aït Mansour Gorges or Tafraoute for lunch and the afternoon. This is the Agadir experience almost no other traveler has, and it is one of the most rewarding day trips in southern Morocco.',
      },
    },
    {
      heading: 'Adventure and Sport Around Agadir',
      paragraphs: [
        'Beyond beach and gorge exploring, the Souss-Massa region has a genuine outdoor sport culture — surf, hiking, and off-road circuits that go well beyond a standard beach holiday.',
      ],
      table: {
        caption: 'Adventure activities around Agadir 2026',
        headers: ['Activity', 'Where', 'Level', 'Notes'],
        rows: [
          ['Surfing', 'Taghazout, Tamraght, Banana Beach', 'All levels', 'Year-round; winter for power, summer for beginners. Lessons widely available.'],
          ['Coastal 4x4 trail south of Agadir', 'South coast toward Souss-Massa park', 'Moderate', 'Rugged coastal tracks — best with a guide or 4x4 tour'],
          ['Hiking circuits — Souss Massa', 'Various, inland', 'Easy to moderate', 'Berber villages, argan forests, valley trails'],
          ['Multi-sport stay (surf + trekking)', 'Combined Taghazout + Anti-Atlas', 'Mixed', 'Popular combo package for active travelers'],
          ['Desert bivouac (family-friendly)', 'Inland toward pre-Sahara', '1–2 nights', 'A gentler introduction to desert camping than a full Merzouga trip'],
          ['Golf', 'Multiple courses around Agadir', 'All levels', 'Agadir is one of Morocco\'s established golf destinations'],
        ],
      },
    },
    {
      heading: 'Best Time to Visit Agadir',
      paragraphs: [
        'Agadir\'s single biggest advantage over every other Moroccan destination is its climate consistency — it is genuinely a year-round destination, which is rare in Morocco.',
      ],
      table: {
        caption: 'Best time to visit Agadir — month by month 2026',
        headers: ['Period', 'Temperature', 'Character', 'Verdict'],
        rows: [
          ['November–February (winter)', '18–25°C', 'Warm, dry, sunny while northern Morocco and Europe are cold', '⭐ Agadir\'s unique selling point — best winter sun destination in Morocco'],
          ['March–May (spring)', '22–28°C', 'Warm, dry, uncrowded, argan trees in bloom', '⭐ Ideal — beach weather without peak crowds or prices'],
          ['June–September (summer)', '28–35°C', 'Hot, very busy — Moroccan and European holidaymakers', 'Peak beach season, packed restaurants, higher prices, Atlantic breeze cools the coast'],
          ['October (transition)', '24–28°C', 'Still warm, crowds thinning', 'Excellent transition month — good value, good weather'],
        ],
      },
      callout: {
        label: '☀️ Why Winter Matters',
        body: 'While Chefchaouen, Fes and the Atlas shiver at 5–10°C in January, Agadir stays a comfortable 18–25°C. This is the reason European travelers — especially from the UK, France and Germany — treat Agadir as a winter escape rather than a summer beach trip. If your goal is guaranteed warm weather in December or January, Agadir is Morocco\'s best answer.',
      },
    },
    {
      heading: 'How to Get to Agadir — Distances From Every Major City',
      paragraphs: [
        'Agadir is well connected by motorway from the north, and increasingly reachable directly by international flight into Agadir Al Massira Airport (AGA).',
      ],
      table: {
        caption: 'Driving distances and times to Agadir 2026',
        headers: ['From', 'Distance', 'Driving time', 'Route', 'Toll'],
        rows: [
          ['Casablanca (CMN Airport)', '460–466 km', '4h45–5h00', 'A7 motorway via Marrakech', '~MAD 164 (€15)'],
          ['Marrakech', '~260 km', '2h30–3h00', 'A7 motorway direct', '~MAD 86 (€8)'],
          ['Essaouira', '~175 km', '2h15–2h30', 'N1 coastal road', 'No toll — national road'],
          ['Rabat', '~550 km', '5h30–6h00', 'A1 to Casablanca, then A7 south', '~MAD 195 (€18)'],
          ['Fes', '~640 km', '6h30–7h00', 'Via Casablanca/Marrakech — best split over 2 days', '~MAD 230 (€21)'],
          ['Ouarzazate', '~360 km', '5h–5h30', 'Via Taroudant and the Tizi n\'Test or Tichka route', 'Minimal — mostly national roads'],
          ['Agadir Al Massira Airport (AGA) to city centre', '25 km', '25–30 min', 'Direct road', 'No toll'],
        ],
      },
      callout: {
        label: '🚗 Casablanca to Agadir — Two Route Options',
        body: 'Inland motorway (A7 via Marrakech): fastest and most reliable, ~4h45–5h. Coastal route (via El Jadida, Safi, Essaouira): ~6h30–7h but far more scenic — many travelers split this into a 2–3 day trip with Essaouira as an overnight stop, roughly 2h15 from Agadir. Rent your car at Casablanca Airport (CMN) with free meet & greet — economy from MAD 250/day (€23). +212 634 276 534',
      },
    },
    {
      heading: 'Getting Around Agadir and Day Trips',
      paragraphs: [
        'Agadir\'s central beachfront and Corniche are easily walkable, but a car becomes genuinely useful — even essential — the moment you want to explore Taghazout, Paradise Valley, or the Anti-Atlas gorges.',
      ],
      table: {
        caption: 'Getting around Agadir and best day trips 2026',
        headers: ['Option/Destination', 'Distance/Cost', 'Notes'],
        rows: [
          ['Petit taxi (city)', 'MAD 15–30/ride', 'Short hops within the city — insist on the meter'],
          ['Grand taxi to Taghazout', 'MAD 30–50/seat shared', 'Shared taxis run regularly along the coast road'],
          ['Rental car', 'From MAD 250/day (€23)', 'Essential for Paradise Valley, Anti-Atlas gorges, and flexible beach-hopping'],
          ['Taghazout day trip', '20 km, 30 min', 'Surf town, cafés, laid-back beach scene'],
          ['Paradise Valley day trip', '55 km, 1h', 'Rock pools, swimming, palm canyon — half day'],
          ['Tafraoute / Aït Mansour day trip', '150 km, 2h30', 'Full day — Anti-Atlas gorges, pink granite rock formations'],
          ['Essaouira day trip / overnight', '175 km, 2h15', 'Coastal town, UNESCO medina — better as an overnight stop'],
        ],
      },
    },
    {
      heading: 'Where to Stay in Agadir',
      paragraphs: [
        'Agadir does not have the riad-dense medina culture of Marrakech or Fes — its accommodation is dominated by beachfront hotels and resorts, with a small but growing selection of boutique riads.',
      ],
      table: {
        caption: 'Where to stay in Agadir 2026',
        headers: ['Area', 'Vibe', 'Best for', 'Price range/night'],
        rows: [
          ['Agadir Beach / Corniche', 'Central, lively, walkable to beach', 'First-timers, easy access to everything', 'MAD 500–2,500 (€46–230)'],
          ['Founty (Baie des Palmiers)', 'Quieter, upscale, near golf courses', 'Couples, boutique riads, relaxed stays', 'MAD 700–3,000 (€65–278)'],
          ['Taghazout / Tamraght', 'Surf-town, casual, guesthouses', 'Surfers, budget travelers, yoga retreats', 'MAD 200–900 (€18–83)'],
          ['City centre (away from beach)', 'Practical, local, more affordable', 'Budget travelers, longer stays', 'MAD 200–600 (€18–55)'],
        ],
      },
      callout: {
        label: '🏨 Recommendations',
        body: 'Boutique riad experience: Riad Villa Blanche (Founty, spa + pool, walking distance to beach). Sea-view resort: Hotel The View Agadir (5-star, panoramic Atlantic views). Surf/budget: Taghazout guesthouses and surf camps offer some of the best value on the whole Moroccan coast.',
      },
    },
    {
      heading: 'What to Eat in Agadir',
      paragraphs: [
        'As a coastal resort city, Agadir\'s food scene leans heavily into fresh seafood, alongside international dining options that reflect its role as Morocco\'s most tourism-oriented beach city.',
      ],
      table: {
        caption: 'What to eat in Agadir 2026',
        headers: ['Dish/Experience', 'Where', 'Price', 'Notes'],
        rows: [
          ['Fresh grilled seafood', 'Marina, Corniche restaurants', 'MAD 100–250', 'Sardines, calamari and daily catch — Agadir\'s culinary strength'],
          ['Tagine and couscous', 'Local restaurants, riads', 'MAD 50–120', 'Standard Moroccan staples, well executed across the city'],
          ['Dinner-show restaurants', 'Buddha Bar Agadir, Chems Ayour', 'MAD 250–500', 'Fusion or traditional cuisine with live entertainment'],
          ['Street food / juice stalls', 'Souk El Had, Corniche', 'MAD 5–20', 'Fresh orange juice, grilled corn, msemen'],
          ['Argan products', 'Souk El Had, cooperatives', 'MAD 100–250/bottle', 'Agadir sits at the heart of argan oil production — buy direct from cooperatives'],
        ],
      },
    },
    {
      heading: 'Agadir vs Essaouira — The Question Everyone Asks',
      paragraphs: [
        'Agadir and Essaouira are both coastal, but they offer fundamentally different experiences — and the choice depends entirely on what kind of trip you want.',
      ],
      table: {
        caption: 'Agadir vs Essaouira — honest comparison 2026',
        headers: ['Aspect', 'Agadir', 'Essaouira'],
        rows: [
          ['Character', 'Modern beach resort, rebuilt post-1960', 'Historic walled UNESCO medina town'],
          ['Beach', 'Wide, sheltered, swimmable, 10km', 'Windier, better for windsurfing/kitesurfing than swimming'],
          ['Atmosphere', 'Resort, family-friendly, sunbed culture', 'Bohemian, artistic, laid-back medina charm'],
          ['Surf', 'Access to Taghazout nearby (20km)', 'Good wind sports, less renowned surf breaks'],
          ['Winter warmth', 'Warmest winter destination in Morocco', 'Cooler and windier than Agadir in winter'],
          ['Nightlife', 'More developed — bars, clubs, dinner shows', 'Quieter, more low-key evenings'],
          ['Best for', 'Beach holiday, surf trips, warm winter escape', 'Culture + coast combo, art lovers, photographers'],
        ],
      },
      callout: {
        label: '🗺️ Our Recommendation',
        body: 'Many of our clients do both: 2–3 nights Agadir for beach and surf, then drive the coastal road to Essaouira (2h15) for 1–2 nights of medina culture before continuing to Marrakech. This combination captures the best of Morocco\'s Atlantic coast without compromise. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'Is Agadir worth visiting?',
      answer: 'Yes, for the right traveler — Agadir does not have Marrakech or Fes-style medina culture (the city was almost entirely rebuilt after the 1960 earthquake), but it offers Morocco\'s most reliable beach climate, nearly 300 days of sunshine, access to Taghazout surf, and genuinely underexplored Anti-Atlas mountain and oasis day trips. Skip it if you want historic medinas; visit it for beach, sun, and surf.',
    },
    {
      question: 'How far is Agadir from Casablanca?',
      answer: 'Agadir is 460–466 km from Casablanca via the A7 motorway through Marrakech, taking approximately 4h45–5h00 to drive. An alternative coastal route via El Jadida, Safi and Essaouira takes 6h30–7h but is significantly more scenic and often split into a 2–3 day trip.',
    },
    {
      question: 'What is the best time to visit Agadir?',
      answer: 'Agadir is genuinely a year-round destination. Winter (November–February, 18–25°C) is its unique advantage — the warmest winter beach destination in Morocco. Spring (March–May) offers ideal weather without peak crowds. Summer (June–September) is hot and busy with the highest prices. Autumn (October) is an excellent value transition month.',
    },
    {
      question: 'Is Taghazout part of Agadir?',
      answer: 'Taghazout is a separate fishing-village-turned-surf-town located about 20 km north of Agadir, roughly 30 minutes by car or shared taxi. It is one of Africa\'s premier surf destinations and is easily combined with an Agadir stay as a day trip or as an alternative base for a more laid-back, surf-focused visit.',
    },
    {
      question: 'What are the hidden gems near Agadir?',
      answer: 'Beyond the beach, the Souss-Massa region offers genuinely underexplored sites: the Aït Mansour Gorges near Tafraoute (dramatic Anti-Atlas canyon), Paradise Valley (natural pools and waterfalls), Jbel Siroua (volcanic trekking terrain), the Route des Oasis toward Tata and Akka, and Souss-Massa National Park (excellent birdwatching, including flamingos and the rare bald ibis).',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is Agadir known for?', answer: 'Agadir is known as Morocco\'s premier beach resort city — a modern, rebuilt destination (after the devastating 1960 earthquake) with nearly 300 days of sunshine per year, a 10km sandy beach, and proximity to Taghazout, one of Africa\'s best surf destinations. It is also known for its warm winter climate, golf courses, and role as a gateway to the Anti-Atlas mountains and pre-Saharan oases.' },
    { question: 'Is Agadir or Marrakech better?', answer: 'They serve different purposes. Marrakech offers Morocco\'s most famous historic medina, souks and cultural depth. Agadir offers beach, surf, and reliable warm weather — especially in winter. Many travelers combine both: a few days of Marrakech culture followed by beach time in Agadir, connected by a straightforward 2h30–3h drive on the A7 motorway.' },
    { question: 'How many days do you need in Agadir?', answer: '2–3 days covers the beach, Corniche, Kasbah viewpoint, and Souk El Had. Add a 4th or 5th day to properly explore Taghazout surf culture and take a day trip into the Anti-Atlas (Paradise Valley or the Aït Mansour Gorges near Tafraoute) — this is where most standard guides stop but where the region genuinely rewards more time.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech'],
  relatedPosts: ['casablanca-to-agadir-by-car', 'marrakech-travel-guide', 'casablanca-travel-guide', 'best-car-to-rent-in-casablanca-morocco', 'casablanca-airport-guide-cmn'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Agadir 2026 — Plages, Surf Taghazout, Paradise Valley et Vrais Prix',
  metaDescription: 'Guide complet Agadir 2026 : meilleures plages, surf à Taghazout, Paradise Valley, Souk El Had, Danialand, joyaux cachés de l\'Anti-Atlas, distances depuis chaque ville, vrais prix.',
  title: 'Guide Voyage Agadir 2026 : La Capitale Balnéaire Ensoleillée du Maroc — Tout Savoir',
  description: 'Le guide Agadir complet rédigé par une équipe basée à Casablanca qui conduit des clients à Agadir toute l\'année. Vrais prix 2026, explication des 300 jours de soleil, culture surf de Taghazout, gorges cachées de l\'Anti-Atlas, comparaison honnête avec Essaouira, et distances exactes depuis chaque ville marocaine.',
  keyword: 'guide voyage agadir',
  coverImage: COVER,
  coverAlt: 'Guide voyage Agadir 2026 — plage de la baie d\'Agadir et promenade de la Corniche avec la Kasbah Oufella au-dessus',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 17,
  intro: 'Agadir est la réponse du Maroc à la question : "et si une ville balnéaire avait 300 jours de soleil par an, une bande de sable doré de 10 km, et l\'un des meilleurs spots de surf d\'Afrique à 20 minutes le long de la côte ?" Reconstruite presque entièrement après le séisme dévastateur de 1960, Agadir est délibérément moderne — pas de dédale de médina ancienne ici, mais une Corniche bordée de palmiers, une culture surf florissante à Taghazout, et un climat hivernal doux qui attire les Européens quand le reste du Maroc (et l\'Europe) grelotte. Notre équipe casablancaise conduit des clients vers le sud à Agadir toute l\'année. Voici le guide honnête et pratique que nous leur donnons.',
  sections: [
    {
      heading: 'Agadir Vaut-elle le Détour ? La Réponse Honnête',
      paragraphs: [
        'Agadir divise les opinions plus que toute autre grande destination marocaine, et la raison est simple : ce n\'est pas ce que les gens attendent du "Maroc". Pas de médina labyrinthique, pas de dédale de souk séculaire, pas de palais impériaux. Le séisme de 1960 qui a tué plus de 12 000 personnes a conduit à une reconstruction complète — moderne, planifiée, basse et fonctionnelle plutôt qu\'atmosphérique.',
        'Ce qu\'Agadir a, qu\'aucune autre ville marocaine ne peut égaler : une véritable identité de station balnéaire avec près de 300 jours de soleil par an, des hivers doux (18–25°C de novembre à février) pendant que l\'Europe du nord et même le nord du Maroc grelottent, et un accès direct à Taghazout, l\'une des meilleures destinations de surf d\'Afrique.',
        'Notre verdict honnête : évitez Agadir si vous êtes venu au Maroc uniquement pour la culture médina — Marrakech ou Fès livrent bien mieux cela. Choisissez Agadir si vous voulez du temps plage, du surf, un soleil hivernal fiable, ou une base détendue pour explorer l\'Anti-Atlas et la vallée du Souss.',
      ],
      callout: {
        label: '🇲🇦 Verdict Local',
        body: 'Agadir n\'est pas la ville la plus "marocaine" du Maroc — et c\'est précisément son attrait pour un certain type de voyageur. Si vous voulez chameaux et kasbahs, allez ailleurs d\'abord. Si vous voulez une plage, un soleil hivernal chaud, et des excursions faciles dans un terrain Anti-Atlas véritablement sauvage.',
      },
    },
    {
      heading: 'Agadir en Chiffres — Infos Essentielles 2026',
      paragraphs: ['Tout ce qu\'il faut savoir avant d\'arriver.'],
      table: {
        caption: 'Infos essentielles Agadir 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Population', '~700 000 (ville), région Souss-Massa bien plus grande'],
          ['Reconstruite après', 'Séisme de 1960 — plan urbain moderne, bas'],
          ['Région', 'Souss-Massa — entre le Haut Atlas, l\'Anti-Atlas, le désert et l\'Atlantique'],
          ['Aéroport', 'Aéroport Agadir Al Massira (AGA) — 25 km / ~30 min du centre'],
          ['Longueur de plage', '~9–10 km de front de mer sablonneux'],
          ['Ensoleillement', '~300 jours de soleil par an'],
          ['Température hivernale', '18–25°C (nov–fév) — destination hivernale la plus chaude du Maroc'],
          ['Meilleure période', 'Toute l\'année ; hiver pour soleil chaud, printemps/automne pour équilibre'],
          ['Distance depuis Casablanca', '460–466 km via A7 — 4h45–5h00 de conduite'],
          ['Distance depuis Marrakech', '~260 km via A7 — 2h30–3h00 de conduite'],
          ['Distance depuis Taghazout', '20 km au nord — capitale surf du Maroc'],
          ['Location voiture depuis AGA/Agadir', 'Dès MAD 250/jour (23€) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'Les Plages d\'Agadir — Guide Complet',
      paragraphs: [
        'La caractéristique déterminante d\'Agadir est sa plage — près de 10 km de sable courbant autour d\'une baie large et abritée, régulièrement classée parmi les plus propres et sûres du Maroc.',
      ],
      table: {
        caption: 'Guide des plages d\'Agadir et environs 2026',
        headers: ['Plage', 'Distance centre', 'Caractère', 'Idéal pour'],
        rows: [
          ['Baie d\'Agadir (Plage d\'Agadir)', 'Centre-ville', 'Large, abritée, sablonneuse, promenade animée', 'Baignade, familles, beach clubs, promenades coucher de soleil'],
          ['Taghazout', '20 km au nord', 'Ville surf n°1 d\'Afrique — breaks constants', 'Surfeurs, retraites yoga, voyageurs décontractés'],
          ['Tamraght', '15 km au nord', 'Spot surf plus calme près de Taghazout', 'Surfeurs débutants, ambiance plus calme'],
          ['Imourane', '~7 km du centre', 'Zone plage résidentielle plus calme', 'Éviter la portion centrale la plus animée'],
          ['Aourir (Banana Beach)', '18 km au nord', 'Plage de ville marché local, plantations de bananes', 'Combiner plage avec le souk du dimanche'],
        ],
      },
      callout: {
        label: '🏄 Conseil Surf Taghazout',
        body: 'Taghazout offre des breaks pour tous niveaux — Anchor Point et Boilers pour surfeurs expérimentés, Panoramas et Devil\'s Rock pour intermédiaires, Banana Beach et Tamraght pour débutants. L\'hiver (octobre–mars) apporte les plus grandes houles et les meilleures conditions.',
      },
    },
    {
      heading: 'Meilleures Choses à Faire à Agadir',
      paragraphs: ['Les attractions d\'Agadir se répartissent entre le front de mer, la Kasbah au sommet de la colline, et la collection croissante d\'attractions familiales modernes de la ville.'],
      table: {
        caption: 'Meilleures choses à faire à Agadir 2026',
        headers: ['Attraction', 'Zone', 'Temps', 'Prix', 'Notes'],
        rows: [
          ['Kasbah Agadir Oufella + téléphérique', 'Colline surplombant la baie', '1,5–2 heures', 'Téléphérique ~MAD 80 aller-retour', 'Vues panoramiques sur toute la baie — meilleur au coucher de soleil'],
          ['Corniche d\'Agadir', 'Front de mer', '1–3 heures', 'Gratuit', 'Promenade bordée de palmiers avec beach clubs, cafés et restaurants'],
          ['Souk El Had', 'Centre-ville', '1,5–2 heures', 'Entrée gratuite', 'L\'un des plus grands marchés d\'Afrique — épices, artisanat, cuir'],
          ['Parc aquatique Danialand', 'Zone Agadir Oufella', 'Demi-journée', 'MAD 250–350/adulte (indicatif)', 'Nouveau parc majeur (ouvert 2024, en expansion) — 10 piscines, 27 toboggans'],
          ['Musée de la Culture Amazighe', 'Centre-ville', '45 min–1 heure', 'MAD 20–30', 'Excellent aperçu du patrimoine amazigh du Souss'],
          ['Marina d\'Agadir', 'Zone portuaire', '1–2 heures', 'Gratuit', 'Yachts, restaurants en front de mer, promenade détendue'],
          ['Crocoparc', 'Périphérie d\'Agadir', 'Demi-journée', 'MAD 150–200/adulte', 'Parc de crocodiles du Nil — activité familiale populaire'],
          ['Mosquée Mohammed V', 'Centre-ville', '20–30 min (extérieur)', 'Gratuit (vue extérieure)', 'Bel exemple d\'architecture religieuse marocaine moderne'],
        ],
      },
      callout: {
        label: '🎢 Nouveautés Agadir 2026',
        body: 'Agadir investit massivement dans les infrastructures touristiques avant 2030. Danialand (ouvert juin 2024, encore en expansion) inclut désormais une Aqua Tower, une rivière lente de 1km, et deux restaurants installés dans des fuselages d\'Airbus réaménagés. La Corniche est en rénovation.',
      },
    },
    {
      heading: 'Joyaux Cachés — Les Circuits Anti-Atlas et Souss Massa dont Personne ne Parle',
      paragraphs: ['C\'est la partie d\'un voyage à Agadir que presque tous les guides ignorent. La région Souss-Massa se situe entre le Haut Atlas, l\'Anti-Atlas, le pré-désert et l\'Atlantique.'],
      table: {
        caption: 'Joyaux cachés autour d\'Agadir — Anti-Atlas et Souss Massa 2026',
        headers: ['Site/Circuit', 'Distance depuis Agadir', 'Ce que c\'est', 'Pourquoi c\'est important'],
        rows: [
          ['Gorges d\'Aït Mansour (Tafraoute)', '~150 km, 2h30', 'Gorge spectaculaire bordée de palmiers traversant l\'Anti-Atlas', 'L\'un des paysages canyon les plus spectaculaires et les moins visités du Maroc'],
          ['Paradise Valley', '~55 km, 1h', 'Piscines naturelles et cascades dans un canyon de palmiers', 'Escapade populaire mais réellement magnifique — baignade dans les vasques'],
          ['Jbel Siroua', '~150 km, 2h30–3h', 'Région de trekking volcan éteint entre Haut Atlas et Sahara', 'Territoire de trekking multi-jours, paysage volcanique dramatique'],
          ['Jbel Aklim', '~120 km', 'Montagne Anti-Atlas avec points de vue panoramiques', 'Vues étendues sur la chaîne Anti-Atlas, loin des foules'],
          ['Route des Oasis (Tata–Akka)', '~250 km', 'Circuit oasis présaharien à travers palmeraies et kasbahs', 'Une véritable expérience oasis-désert, plus proche que Merzouga'],
          ['Ifri Imadidane', '~130 km', 'Grenier collectif amazigh traditionnel (agadir)', 'Site patrimonial rare — greniers fortifiés communaux séculaires'],
          ['Parc National Souss-Massa', '~50 km au sud', 'Réserve de zones humides côtières', 'L\'un des meilleurs sites d\'observation d\'oiseaux du Maroc'],
        ],
      },
      callout: {
        label: '🏔️ Notre Recommandation',
        body: 'Si vous avez une voiture de location et plus de 3 jours à Agadir, consacrez une journée entière à l\'Anti-Atlas — Paradise Valley le matin, continuant vers les Gorges d\'Aït Mansour ou Tafraoute pour le déjeuner et l\'après-midi.',
      },
    },
    {
      heading: 'Aventure et Sport Autour d\'Agadir',
      paragraphs: ['Au-delà de la plage et des gorges, la région Souss-Massa a une véritable culture de sport outdoor — surf, randonnée, et circuits tout-terrain.'],
      table: {
        caption: 'Activités aventure autour d\'Agadir 2026',
        headers: ['Activité', 'Où', 'Niveau', 'Notes'],
        rows: [
          ['Surf', 'Taghazout, Tamraght, Banana Beach', 'Tous niveaux', 'Toute l\'année ; hiver pour la puissance, été pour débutants'],
          ['Piste 4x4 côtière sud d\'Agadir', 'Côte sud vers parc Souss-Massa', 'Modéré', 'Pistes côtières accidentées — mieux avec guide ou tour 4x4'],
          ['Circuits randonnée Souss Massa', 'Divers, intérieur', 'Facile à modéré', 'Villages berbères, forêts d\'arganiers, sentiers de vallée'],
          ['Séjour multi-sport (surf + trek)', 'Taghazout + Anti-Atlas combinés', 'Mixte', 'Package combo populaire pour voyageurs actifs'],
          ['Bivouac désertique familial', 'Intérieur vers pré-Sahara', '1–2 nuits', 'Introduction plus douce au camping désert qu\'un voyage complet à Merzouga'],
          ['Golf', 'Plusieurs parcours autour d\'Agadir', 'Tous niveaux', 'Agadir est une destination golf établie au Maroc'],
        ],
      },
    },
    {
      heading: 'Meilleure Période pour Visiter Agadir',
      paragraphs: ['Le plus grand avantage d\'Agadir sur toute autre destination marocaine est la constance de son climat — c\'est véritablement une destination toute l\'année.'],
      table: {
        caption: 'Meilleure période pour visiter Agadir — mois par mois 2026',
        headers: ['Période', 'Température', 'Caractère', 'Verdict'],
        rows: [
          ['Novembre–Février (hiver)', '18–25°C', 'Chaud, sec, ensoleillé pendant que le nord du Maroc et l\'Europe ont froid', '⭐ L\'avantage unique d\'Agadir — meilleure destination soleil hivernal au Maroc'],
          ['Mars–Mai (printemps)', '22–28°C', 'Chaud, sec, peu fréquenté, arganiers en fleurs', '⭐ Idéal — météo plage sans foules ni prix pic'],
          ['Juin–Septembre (été)', '28–35°C', 'Chaud, très fréquenté', 'Saison plage pic, restaurants pleins, prix plus élevés'],
          ['Octobre (transition)', '24–28°C', 'Encore chaud, foules en baisse', 'Excellent mois de transition — bon rapport qualité-prix'],
        ],
      },
      callout: {
        label: '☀️ Pourquoi l\'Hiver Compte',
        body: 'Pendant que Chefchaouen, Fès et l\'Atlas grelottent à 5–10°C en janvier, Agadir reste à un confortable 18–25°C. C\'est la raison pour laquelle les voyageurs européens traitent Agadir comme une escapade hivernale plutôt qu\'un voyage plage estival.',
      },
    },
    {
      heading: 'Comment Rejoindre Agadir — Distances Depuis Chaque Grande Ville',
      paragraphs: ['Agadir est bien connectée par autoroute depuis le nord, et de plus en plus accessible directement par vol international vers l\'aéroport Agadir Al Massira (AGA).'],
      table: {
        caption: 'Distances et temps de trajet vers Agadir 2026',
        headers: ['Depuis', 'Distance', 'Temps de conduite', 'Itinéraire', 'Péage'],
        rows: [
          ['Casablanca (Aéroport CMN)', '460–466 km', '4h45–5h00', 'Autoroute A7 via Marrakech', '~MAD 164 (15€)'],
          ['Marrakech', '~260 km', '2h30–3h00', 'A7 direct', '~MAD 86 (8€)'],
          ['Essaouira', '~175 km', '2h15–2h30', 'Route côtière N1', 'Pas de péage'],
          ['Rabat', '~550 km', '5h30–6h00', 'A1 vers Casablanca puis A7 sud', '~MAD 195 (18€)'],
          ['Fès', '~640 km', '6h30–7h00', 'Via Casablanca/Marrakech — mieux réparti sur 2 jours', '~MAD 230 (21€)'],
          ['Ouarzazate', '~360 km', '5h–5h30', 'Via Taroudant et col Tizi n\'Test ou Tichka', 'Minimal'],
          ['Aéroport AGA au centre-ville', '25 km', '25–30 min', 'Route directe', 'Pas de péage'],
        ],
      },
      callout: {
        label: '🚗 Casablanca à Agadir — Deux Options',
        body: 'Autoroute intérieure (A7 via Marrakech) : la plus rapide, ~4h45–5h. Route côtière (via El Jadida, Safi, Essaouira) : ~6h30–7h mais bien plus pittoresque. Louez votre voiture à l\'aéroport de Casablanca (CMN) — économique dès MAD 250/jour (23€). +212 634 276 534',
      },
    },
    {
      heading: 'Se Déplacer à Agadir et Excursions',
      paragraphs: ['Le front de mer central et la Corniche d\'Agadir sont facilement praticables à pied, mais une voiture devient réellement utile dès que vous voulez explorer Taghazout, Paradise Valley, ou les gorges de l\'Anti-Atlas.'],
      table: {
        caption: 'Se déplacer à Agadir et meilleures excursions 2026',
        headers: ['Option/Destination', 'Distance/Coût', 'Notes'],
        rows: [
          ['Petit taxi (ville)', 'MAD 15–30/course', 'Courts trajets en ville — insistez sur le compteur'],
          ['Grand taxi vers Taghazout', 'MAD 30–50/place partagée', 'Taxis partagés réguliers le long de la côte'],
          ['Voiture de location', 'Dès MAD 250/jour (23€)', 'Essentielle pour Paradise Valley, gorges Anti-Atlas'],
          ['Excursion Taghazout', '20 km, 30 min', 'Ville surf, cafés, ambiance plage décontractée'],
          ['Excursion Paradise Valley', '55 km, 1h', 'Vasques naturelles, baignade, canyon de palmiers'],
          ['Excursion Tafraoute / Aït Mansour', '150 km, 2h30', 'Journée complète — gorges Anti-Atlas, formations granit rose'],
          ['Excursion/nuit Essaouira', '175 km, 2h15', 'Ville côtière, médina UNESCO — mieux en étape nuit'],
        ],
      },
    },
    {
      heading: 'Où Dormir à Agadir',
      paragraphs: ['Agadir n\'a pas la culture riad dense de Marrakech ou Fès — son hébergement est dominé par les hôtels et resorts en front de mer, avec une sélection croissante de riads boutique.'],
      table: {
        caption: 'Où dormir à Agadir 2026',
        headers: ['Zone', 'Ambiance', 'Idéal pour', 'Fourchette prix/nuit'],
        rows: [
          ['Plage d\'Agadir / Corniche', 'Central, animé, accès plage à pied', 'Premiers visiteurs, accès facile à tout', 'MAD 500–2 500 (46–230€)'],
          ['Founty (Baie des Palmiers)', 'Plus calme, haut de gamme, près golf', 'Couples, riads boutique, séjours détendus', 'MAD 700–3 000 (65–278€)'],
          ['Taghazout / Tamraght', 'Ville surf, décontracté, guesthouses', 'Surfeurs, budget, retraites yoga', 'MAD 200–900 (18–83€)'],
          ['Centre-ville (loin de la plage)', 'Pratique, local, plus abordable', 'Voyageurs budget, longs séjours', 'MAD 200–600 (18–55€)'],
        ],
      },
      callout: {
        label: '🏨 Recommandations',
        body: 'Expérience riad boutique : Riad Villa Blanche (Founty, spa + piscine). Resort vue mer : Hotel The View Agadir (5 étoiles, vues panoramiques Atlantique). Surf/budget : les guesthouses de Taghazout offrent parmi les meilleurs rapports qualité-prix de toute la côte marocaine.',
      },
    },
    {
      heading: 'Que Manger à Agadir',
      paragraphs: ['En tant que ville balnéaire côtière, la scène culinaire d\'Agadir mise fortement sur les fruits de mer frais, aux côtés d\'options de restauration internationale.'],
      table: {
        caption: 'Que manger à Agadir 2026',
        headers: ['Plat/Expérience', 'Où', 'Prix', 'Notes'],
        rows: [
          ['Fruits de mer grillés frais', 'Marina, restaurants Corniche', 'MAD 100–250', 'Sardines, calamars et pêche du jour'],
          ['Tagine et couscous', 'Restaurants locaux, riads', 'MAD 50–120', 'Classiques marocains, bien exécutés'],
          ['Restaurants dîner-spectacle', 'Buddha Bar Agadir, Chems Ayour', 'MAD 250–500', 'Cuisine fusion ou traditionnelle avec animation live'],
          ['Street food / jus', 'Souk El Had, Corniche', 'MAD 5–20', 'Jus d\'orange frais, maïs grillé, msemen'],
          ['Produits d\'argan', 'Souk El Had, coopératives', 'MAD 100–250/bouteille', 'Agadir est au cœur de la production d\'huile d\'argan'],
        ],
      },
    },
    {
      heading: 'Agadir vs Essaouira — La Question que Tout le Monde Pose',
      paragraphs: ['Agadir et Essaouira sont toutes deux côtières, mais offrent des expériences fondamentalement différentes.'],
      table: {
        caption: 'Agadir vs Essaouira — comparaison honnête 2026',
        headers: ['Aspect', 'Agadir', 'Essaouira'],
        rows: [
          ['Caractère', 'Station balnéaire moderne, reconstruite post-1960', 'Ville médina historique fortifiée UNESCO'],
          ['Plage', 'Large, abritée, baignable, 10km', 'Plus venteuse, meilleure pour windsurf/kitesurf'],
          ['Ambiance', 'Resort, familiale, culture bain de soleil', 'Bohème, artistique, charme médina décontracté'],
          ['Surf', 'Accès à Taghazout proche (20km)', 'Bons sports de vent, breaks surf moins réputés'],
          ['Chaleur hivernale', 'Destination hivernale la plus chaude du Maroc', 'Plus frais et venteux qu\'Agadir en hiver'],
          ['Vie nocturne', 'Plus développée — bars, clubs, dîners-spectacles', 'Plus calme, soirées low-key'],
          ['Idéal pour', 'Vacances plage, voyages surf, escapade hivernale chaude', 'Combo culture + côte, amateurs d\'art'],
        ],
      },
      callout: {
        label: '🗺️ Notre Recommandation',
        body: 'Beaucoup de nos clients font les deux : 2–3 nuits Agadir pour plage et surf, puis conduite sur la route côtière vers Essaouira (2h15) pour 1–2 nuits de culture médina avant de continuer vers Marrakech. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'Agadir vaut-elle le détour ?',
      answer: 'Oui, pour le bon voyageur — Agadir n\'a pas la culture médina de Marrakech ou Fès (la ville a été presque entièrement reconstruite après le séisme de 1960), mais elle offre le climat plage le plus fiable du Maroc, près de 300 jours de soleil, l\'accès au surf de Taghazout, et des excursions Anti-Atlas véritablement sous-explorées.',
    },
    {
      question: 'À quelle distance est Agadir de Casablanca ?',
      answer: 'Agadir est à 460–466 km de Casablanca via l\'autoroute A7 par Marrakech, environ 4h45–5h00 de conduite. Une route côtière alternative via El Jadida, Safi et Essaouira prend 6h30–7h mais est bien plus pittoresque.',
    },
    {
      question: 'Quelle est la meilleure période pour visiter Agadir ?',
      answer: 'Agadir est véritablement une destination toute l\'année. L\'hiver (novembre–février, 18–25°C) est son avantage unique. Le printemps (mars–mai) offre une météo idéale sans foules pic. L\'été (juin–septembre) est chaud et fréquenté avec les prix les plus élevés.',
    },
    {
      question: 'Taghazout fait-elle partie d\'Agadir ?',
      answer: 'Taghazout est un village de pêcheurs devenu ville surf séparé, situé à environ 20 km au nord d\'Agadir, environ 30 minutes en voiture ou taxi partagé. C\'est l\'une des destinations surf premières d\'Afrique.',
    },
    {
      question: 'Quels sont les joyaux cachés près d\'Agadir ?',
      answer: 'Au-delà de la plage, la région Souss-Massa offre des sites véritablement sous-explorés : les Gorges d\'Aït Mansour près de Tafraoute, Paradise Valley, Jbel Siroua, la Route des Oasis vers Tata et Akka, et le Parc National Souss-Massa.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Pour quoi Agadir est-elle connue ?', answer: 'Agadir est connue comme la première ville balnéaire du Maroc — une destination moderne reconstruite (après le séisme dévastateur de 1960) avec près de 300 jours de soleil par an, une plage de sable de 10km, et la proximité de Taghazout, l\'une des meilleures destinations surf d\'Afrique.' },
    { question: 'Agadir ou Marrakech, laquelle est meilleure ?', answer: 'Elles servent des objectifs différents. Marrakech offre la médina historique la plus célèbre du Maroc. Agadir offre plage, surf et météo chaude fiable — surtout en hiver. Beaucoup de voyageurs combinent les deux, reliées par un trajet simple de 2h30–3h sur l\'A7.' },
    { question: 'Combien de jours faut-il à Agadir ?', answer: '2–3 jours couvrent la plage, la Corniche, le point de vue Kasbah et Souk El Had. Ajoutez un 4e ou 5e jour pour explorer Taghazout et faire une excursion dans l\'Anti-Atlas (Paradise Valley ou Gorges d\'Aït Mansour).' },
  ],
  relatedDestinations: ['casablanca', 'marrakech'],
  relatedPosts: ['casablanca-agadir-en-voiture', 'guide-voyage-marrakech', 'guide-voyage-casablanca', 'meilleure-voiture-louer-casablanca-maroc', 'guide-aeroport-casablanca-cmn'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر لأكادير 2026 — الشواطئ، ركوب أمواج تاغازوت، وادي الفردوس والأسعار الحقيقية',
  metaDescription: 'دليل شامل لأكادير 2026: أفضل الشواطئ، ركوب الأمواج في تاغازوت، وادي الفردوس، سوق الحد، دانيالاند، جواهر الأطلس الصغير الخفية، المسافات من كل مدينة، أسعار حقيقية.',
  title: 'دليل السفر لأكادير 2026: عاصمة المغرب الشاطئية المشمسة — كل ما تحتاج معرفته',
  description: 'دليل أكادير الشامل من فريق مقيم في الدار البيضاء يقود عملاء لأكادير على مدار السنة. أسعار حقيقية 2026، شرح 300 يوم من الشمس، ثقافة ركوب الأمواج في تاغازوت، أودية الأطلس الصغير الخفية، مقارنة صادقة مع الصويرة، ومسافات دقيقة من كل مدينة مغربية.',
  keyword: 'دليل السفر لأكادير',
  coverImage: COVER,
  coverAlt: 'دليل السفر لأكادير 2026 — شاطئ خليج أكادير وممشى الكورنيش مع قصبة أوفلا فوقه',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 17,
  intro: 'أكادير هي إجابة المغرب على السؤال: "ماذا لو كانت مدينة منتجع شاطئي تملك 300 يوم من الشمس، وشريط رمل ذهبي بطول 10 كم، وأحد أفضل موجات ركوب الأمواج في أفريقيا على بعد 20 دقيقة على الساحل؟" أُعيد بناؤها بالكامل تقريباً بعد زلزال 1960 المدمر، أكادير حديثة عن قصد — لا متاهة مدينة عتيقة هنا، لكن كورنيش مصفوف بالنخيل، وثقافة ركوب أمواج مزدهرة في تاغازوت، ومناخ شتوي دافئ يجذب الأوروبيين حين يرتجف بقية المغرب (وأوروبا). فريقنا المقيم في الدار البيضاء يقود عملاء جنوباً لأكادير طوال السنة. هذا هو الدليل الصادق والعملي الذي نعطيهم إياه.',
  sections: [
    {
      heading: 'هل أكادير تستحق الزيارة؟ الإجابة الصادقة',
      paragraphs: [
        'أكادير تُقسِّم الآراء أكثر من أي وجهة مغربية كبرى أخرى، والسبب بسيط: إنها ليست ما يتوقعه الناس من "المغرب". لا مدينة عتيقة متاهية، لا سوق قروسطي متعرج، لا قصور إمبراطورية. زلزال 1960 الذي قتل أكثر من 12,000 شخص أدى لإعادة بناء كاملة — حديثة ومخططة ومنخفضة ووظيفية بدلاً من ذات أجواء.',
        'ما تملكه أكادير، وما لا تستطيع أي مدينة مغربية أخرى مضاهاته: هوية منتجع شاطئي حقيقية بقرابة 300 يوم من الشمس سنوياً، وشتاء دافئ (18–25°م من نوفمبر لفبراير) بينما يرتجف شمال أوروبا وحتى شمال المغرب، ووصول مباشر لتاغازوت، إحدى أفضل وجهات ركوب الأمواج في أفريقيا.',
        'حكمنا الصادق: تجاوز أكادير إذا جئت للمغرب فقط من أجل ثقافة المدينة العتيقة — مراكش أو فاس تقدمان ذلك أفضل بكثير. اختر أكادير إذا أردت وقت شاطئ، ركوب أمواج، شمساً شتوية موثوقة، أو قاعدة مسترخية لاستكشاف الأطلس الصغير ووادي سوس.',
      ],
      callout: {
        label: '🇲🇦 حكم محلي',
        body: 'أكادير ليست أكثر مدن المغرب "مغربية" — وهذا بالضبط جاذبيتها لنوع معين من المسافرين. إذا أردت الجمال والقصبات، اذهب لمكان آخر أولاً. إذا أردت شاطئاً وشمساً شتوية دافئة ورحلات سهلة لتضاريس أطلس صغير بري فعلاً.',
      },
    },
    {
      heading: 'أكادير بالأرقام — المعلومات الأساسية 2026',
      paragraphs: ['كل ما تحتاج معرفته قبل الوصول.'],
      table: {
        caption: 'المعلومات الأساسية عن أكادير 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['السكان', '~700,000 (المدينة)، منطقة سوس ماسة أكبر بكثير'],
          ['أُعيد بناؤها بعد', 'زلزال 1960 — مخطط مدينة حديث ومنخفض'],
          ['المنطقة', 'سوس ماسة — بين الأطلس الكبير والأطلس الصغير والصحراء والأطلسي'],
          ['المطار', 'مطار أكادير المسيرة (AGA) — 25 كم / ~30 دقيقة من وسط المدينة'],
          ['طول الشاطئ', '~9–10 كم من الواجهة الرملية'],
          ['أيام الشمس', '~300 يوم من الشمس سنوياً'],
          ['حرارة الشتاء', '18–25°م (نوفمبر–فبراير) — أدفأ وجهة شتوية في المغرب'],
          ['أفضل وقت', 'طوال السنة؛ الشتاء للشمس الدافئة، الربيع/الخريف للتوازن'],
          ['المسافة من الدار البيضاء', '460–466 كم عبر A7 — 4:45–5:00 ساعة'],
          ['المسافة من مراكش', '~260 كم عبر A7 — 2:30–3:00 ساعة'],
          ['المسافة من تاغازوت', '20 كم شمالاً — عاصمة ركوب الأمواج في المغرب'],
          ['تأجير سيارة من AGA/أكادير', 'من MAD 250/يوم (23€) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'شواطئ أكادير — الدليل الكامل',
      paragraphs: ['الميزة المُعرِّفة لأكادير هي شاطئها — قرابة 10 كم من الرمال المنحنية حول خليج واسع ومحمي، يُصنَّف باستمرار من أنظف وأأمن شواطئ المغرب.'],
      table: {
        caption: 'دليل شواطئ أكادير والمحيطة 2026',
        headers: ['الشاطئ', 'المسافة من المركز', 'الطابع', 'الأنسب لـ'],
        rows: [
          ['خليج أكادير (شاطئ أكادير)', 'وسط المدينة', 'واسع، محمي، رملي، ممشى حيوي', 'السباحة، العائلات، النوادي الشاطئية'],
          ['تاغازوت', '20 كم شمالاً', 'مدينة ركوب الأمواج الأولى في أفريقيا', 'الراكبون، معتكفات اليوغا، المسافرون المسترخون'],
          ['تمراغت', '15 كم شمالاً', 'موقع ركوب أمواج أهدأ قرب تاغازوت', 'الراكبون المبتدئون، أجواء أهدأ'],
          ['إيموران', '~7 كم من المركز', 'منطقة شاطئ سكنية أهدأ', 'تجنب أكثر الأقسام ازدحاماً'],
          ['أوريير (شاطئ الموز)', '18 كم شمالاً', 'شاطئ بلدة سوق محلي، مزارع موز قريبة', 'دمج الشاطئ مع سوق الأحد'],
        ],
      },
      callout: {
        label: '🏄 نصيحة ركوب أمواج تاغازوت',
        body: 'تاغازوت تقدم موجات لكل المستويات — أنكور بوينت وبويلرز للمتمرسين، بانوراماس وديفيلز روك للمتوسطين، بنانا بيتش وتمراغت للمبتدئين. الشتاء (أكتوبر–مارس) يجلب أكبر وأقوى الموجات وأفضل الظروف عموماً.',
      },
    },
    {
      heading: 'أفضل الأشياء للقيام بها في أكادير',
      paragraphs: ['معالم أكادير موزعة بين الواجهة الشاطئية والقصبة على التل ومجموعة المدينة المتنامية من المعالم العائلية الحديثة.'],
      table: {
        caption: 'أفضل الأشياء للقيام بها في أكادير 2026',
        headers: ['المعلم', 'المنطقة', 'الوقت', 'السعر', 'ملاحظات'],
        rows: [
          ['قصبة أكادير أوفلا + التلفريك', 'تل فوق الخليج', '1.5–2 ساعة', 'التلفريك ~MAD 80 ذهاباً وإياباً', 'إطلالات بانورامية على الخليج كله — الأفضل عند الغروب'],
          ['كورنيش أكادير', 'الواجهة البحرية', '1–3 ساعات', 'مجاني', 'ممشى مصفوف بالنخيل بنوادٍ شاطئية ومقاهٍ ومطاعم'],
          ['سوق الحد', 'وسط المدينة', '1.5–2 ساعة', 'دخول مجاني', 'أحد أكبر أسواق أفريقيا — توابل وحرف ومنتجات'],
          ['حديقة دانيالاند المائية', 'منطقة أكادير أوفلا', 'نصف يوم', 'MAD 250–350/بالغ (إرشادي)', 'حديقة مائية جديدة كبرى (افتُتحت 2024، تتوسع)'],
          ['متحف الثقافة الأمازيغية', 'وسط المدينة', '45 دقيقة–ساعة', 'MAD 20–30', 'استعراض ممتاز للتراث الأمازيغي والمجوهرات والمنسوجات'],
          ['مارينا أكادير', 'منطقة الميناء', '1–2 ساعة', 'مجاني للمشي', 'يخوت ومطاعم واجهة بحرية، نزهة مسائية مسترخية'],
          ['كروكوبارك', 'ضواحي أكادير', 'نصف يوم', 'MAD 150–200/بالغ', 'حديقة تماسيح النيل — نشاط عائلي شعبي'],
          ['مسجد محمد الخامس', 'وسط المدينة', '20–30 دقيقة (خارجياً)', 'مجاني (منظر خارجي)', 'مثال جميل للعمارة الدينية المغربية الحديثة'],
        ],
      },
      callout: {
        label: '🎢 جديد أكادير لـ2026',
        body: 'تستثمر أكادير بكثافة في البنية التحتية السياحية قبل 2030. دانيالاند (افتُتح يونيو 2024، لا يزال يتوسع) يضم الآن برج مائي ونهراً بطيئاً بطول كيلومتر ومطعمين داخل هياكل طائرات إيرباص معاد تصميمها.',
      },
    },
    {
      heading: 'جواهر خفية — دوائر الأطلس الصغير وسوس ماسة التي لا يتحدث عنها أحد',
      paragraphs: ['هذا هو الجزء من رحلة أكادير الذي يتجاهله تقريباً كل دليل. تقع منطقة سوس ماسة بين الأطلس الكبير والأطلس الصغير وما قبل الصحراء والأطلسي.'],
      table: {
        caption: 'جواهر خفية حول أكادير — الأطلس الصغير وسوس ماسة 2026',
        headers: ['الموقع/الدائرة', 'المسافة من أكادير', 'ما هو', 'لماذا يهم'],
        rows: [
          ['محاجر أيت منصور (تافراوت)', '~150 كم، 2:30 ساعة', 'محجر خلاب مصفوف بالنخيل يقطع الأطلس الصغير', 'من أكثر مناظر الأودية إثارة وأقلها زيارةً في المغرب'],
          ['وادي الفردوس', '~55 كم، ساعة', 'برك صخرية طبيعية وشلالات في وادٍ مليء بالنخيل', 'هروب نصف يوم شعبي لكن جميل فعلاً — سباحة في البرك'],
          ['جبل سيروا', '~150 كم، 2:30–3 ساعات', 'منطقة مشي بركان منقرض بين الأطلس الكبير والصحراء', 'أرض مشي متعددة الأيام، مناظر بركانية درامية'],
          ['جبل أكليم', '~120 كم', 'جبل أطلس صغير بنقاط مشاهدة بانورامية', 'إطلالات واسعة عبر سلسلة الأطلس الصغير، بعيداً عن الحشود'],
          ['طريق الواحات (طاطا–أكا)', '~250 كم', 'دائرة واحات ما قبل صحراوية عبر بساتين النخيل والقصبات', 'تجربة واحة-صحراء حقيقية، أقرب من مرزوقة'],
          ['إفري إمديدان', '~130 كم', 'مخزن غلال جماعي أمازيغي تقليدي (أكادير)', 'موقع تراثي نادر — مخازن غلال محصنة جماعية قديمة'],
          ['المنتزه الوطني سوس ماسة', '~50 كم جنوباً', 'محمية أراضٍ رطبة ساحلية', 'من أفضل مواقع مراقبة الطيور في المغرب'],
        ],
      },
      callout: {
        label: '🏔️ توصيتنا',
        body: 'إذا كانت لديك سيارة إيجار وأكثر من 3 أيام في أكادير، خصص يوماً كاملاً للأطلس الصغير — وادي الفردوس صباحاً، متابعاً لمحاجر أيت منصور أو تافراوت للغداء وبعد الظهر.',
      },
    },
    {
      heading: 'المغامرة والرياضة حول أكادير',
      paragraphs: ['بعيداً عن استكشاف الشاطئ والمحاجر، تملك منطقة سوس ماسة ثقافة رياضة خارجية حقيقية — ركوب أمواج ومشي ودوائر طرق وعرة.'],
      table: {
        caption: 'أنشطة المغامرة حول أكادير 2026',
        headers: ['النشاط', 'أين', 'المستوى', 'ملاحظات'],
        rows: [
          ['ركوب الأمواج', 'تاغازوت، تمراغت، شاطئ الموز', 'كل المستويات', 'طوال السنة؛ الشتاء للقوة، الصيف للمبتدئين'],
          ['مسار 4x4 ساحلي جنوب أكادير', 'الساحل الجنوبي نحو منتزه سوس ماسة', 'متوسط', 'مسارات ساحلية وعرة — الأفضل مع مرشد أو جولة 4x4'],
          ['دوائر مشي سوس ماسة', 'مختلفة، داخلياً', 'سهل إلى متوسط', 'قرى بربرية، غابات أرغان، مسارات وادي'],
          ['إقامة متعددة الرياضات (سيرف + مشي)', 'تاغازوت + الأطلس الصغير معاً', 'مختلط', 'باقة كومبو شعبية للمسافرين النشطين'],
          ['مبيت صحراوي عائلي', 'داخلياً نحو ما قبل الصحراء', '1–2 ليلة', 'مقدمة ألطف للتخييم الصحراوي من رحلة مرزوقة الكاملة'],
          ['الجولف', 'ملاعب متعددة حول أكادير', 'كل المستويات', 'أكادير من وجهات الجولف الراسخة في المغرب'],
        ],
      },
    },
    {
      heading: 'أفضل وقت لزيارة أكادير',
      paragraphs: ['أكبر ميزة لأكادير على أي وجهة مغربية أخرى هي ثبات مناخها — إنها فعلاً وجهة على مدار السنة.'],
      table: {
        caption: 'أفضل وقت لزيارة أكادير — شهراً بشهر 2026',
        headers: ['الفترة', 'درجة الحرارة', 'الطابع', 'الحكم'],
        rows: [
          ['نوفمبر–فبراير (الشتاء)', '18–25°م', 'دافئ، جاف، مشمس بينما شمال المغرب وأوروبا باردان', '⭐ ميزة أكادير الفريدة — أفضل وجهة شمس شتوية في المغرب'],
          ['مارس–مايو (الربيع)', '22–28°م', 'دافئ، جاف، غير مزدحم، أزهار الأرغان', '⭐ مثالي — طقس شاطئ بلا حشود أو أسعار ذروة'],
          ['يونيو–سبتمبر (الصيف)', '28–35°م', 'حار، مزدحم جداً', 'موسم الشاطئ الذروة، مطاعم ممتلئة، أسعار أعلى'],
          ['أكتوبر (انتقال)', '24–28°م', 'لا يزال دافئاً، الحشود تتناقص', 'شهر انتقال ممتاز — قيمة جيدة، طقس جيد'],
        ],
      },
      callout: {
        label: '☀️ لماذا يهم الشتاء',
        body: 'بينما ترتجف شفشاون وفاس والأطلس عند 5–10°م في يناير، تبقى أكادير عند 18–25°م مريحة. هذا سبب معاملة المسافرين الأوروبيين لأكادير كهروب شتوي لا رحلة شاطئ صيفية.',
      },
    },
    {
      heading: 'كيف تصل إلى أكادير — المسافات من كل مدينة كبرى',
      paragraphs: ['أكادير متصلة جيداً بالطريق السريع من الشمال، ويمكن الوصول إليها بشكل متزايد مباشرة برحلة دولية لمطار أكادير المسيرة (AGA).'],
      table: {
        caption: 'المسافات وأوقات القيادة لأكادير 2026',
        headers: ['من', 'المسافة', 'وقت القيادة', 'المسار', 'الرسوم'],
        rows: [
          ['الدار البيضاء (مطار CMN)', '460–466 كم', '4:45–5:00 ساعة', 'طريق سريع A7 عبر مراكش', '~MAD 164 (15€)'],
          ['مراكش', '~260 كم', '2:30–3:00 ساعة', 'A7 مباشر', '~MAD 86 (8€)'],
          ['الصويرة', '~175 كم', '2:15–2:30 ساعة', 'طريق ساحلي N1', 'بلا رسوم'],
          ['الرباط', '~550 كم', '5:30–6:00 ساعة', 'A1 للدار البيضاء ثم A7 جنوباً', '~MAD 195 (18€)'],
          ['فاس', '~640 كم', '6:30–7:00 ساعة', 'عبر الدار البيضاء/مراكش — أفضل على يومين', '~MAD 230 (21€)'],
          ['ورززات', '~360 كم', '5:00–5:30 ساعة', 'عبر تارودانت وممر تيزي نتست أو تيشكا', 'ضئيل'],
          ['مطار AGA لوسط المدينة', '25 كم', '25–30 دقيقة', 'طريق مباشر', 'بلا رسوم'],
        ],
      },
      callout: {
        label: '🚗 الدار البيضاء لأكادير — خياران',
        body: 'الطريق السريع الداخلي (A7 عبر مراكش): الأسرع والأكثر موثوقية، ~4:45–5 ساعات. الطريق الساحلي (عبر الجديدة وآسفي والصويرة): ~6:30–7 ساعات لكن أكثر خلاباً بكثير. استأجر سيارتك من مطار الدار البيضاء (CMN) — اقتصادية من MAD 250/يوم (23€). +212 634 276 534',
      },
    },
    {
      heading: 'التنقل في أكادير والرحلات اليومية',
      paragraphs: ['الواجهة الشاطئية المركزية والكورنيش في أكادير سهلا المشي، لكن السيارة تصبح مفيدة فعلاً — بل ضرورية — بمجرد أن تريد استكشاف تاغازوت أو وادي الفردوس أو محاجر الأطلس الصغير.'],
      table: {
        caption: 'التنقل في أكادير وأفضل الرحلات اليومية 2026',
        headers: ['الخيار/الوجهة', 'المسافة/التكلفة', 'ملاحظات'],
        rows: [
          ['تاكسي صغير (المدينة)', 'MAD 15–30/رحلة', 'قفزات قصيرة داخل المدينة — أصر على العداد'],
          ['تاكسي كبير لتاغازوت', 'MAD 30–50/مقعد مشترك', 'تاكسيات مشتركة منتظمة على طريق الساحل'],
          ['سيارة إيجار', 'من MAD 250/يوم (23€)', 'ضرورية لوادي الفردوس ومحاجر الأطلس الصغير'],
          ['رحلة تاغازوت اليومية', '20 كم، 30 دقيقة', 'مدينة ركوب أمواج، مقاهٍ، أجواء شاطئ مسترخية'],
          ['رحلة وادي الفردوس اليومية', '55 كم، ساعة', 'برك صخرية، سباحة، وادي نخيل — نصف يوم'],
          ['رحلة تافراوت / أيت منصور اليومية', '150 كم، 2:30 ساعة', 'يوم كامل — محاجر الأطلس الصغير، تشكيلات جرانيت وردي'],
          ['رحلة/مبيت الصويرة', '175 كم، 2:15 ساعة', 'بلدة ساحلية، مدينة عتيقة يونسكو — أفضل كمحطة مبيت'],
        ],
      },
    },
    {
      heading: 'أين تقيم في أكادير',
      paragraphs: ['أكادير لا تملك ثقافة الرياض الكثيفة لمراكش أو فاس — إقامتها يهيمن عليها الفنادق والمنتجعات الشاطئية، مع مجموعة صغيرة لكن متنامية من الرياضات البوتيك.'],
      table: {
        caption: 'أين تقيم في أكادير 2026',
        headers: ['المنطقة', 'الأجواء', 'الأنسب لـ', 'نطاق السعر/ليلة'],
        rows: [
          ['شاطئ أكادير / الكورنيش', 'مركزي، حيوي، وصول شاطئ مشياً', 'الزوار للمرة الأولى، وصول سهل لكل شيء', 'MAD 500–2,500 (46–230€)'],
          ['فونتي (خليج النخيل)', 'أهدأ، راقٍ، قرب ملاعب الجولف', 'الأزواج، رياضات بوتيك، إقامات مسترخية', 'MAD 700–3,000 (65–278€)'],
          ['تاغازوت / تمراغت', 'مدينة سيرف، غير رسمي، دور ضيافة', 'الراكبون، الميزانية، معتكفات اليوغا', 'MAD 200–900 (18–83€)'],
          ['وسط المدينة (بعيداً عن الشاطئ)', 'عملي، محلي، أكثر اقتصادية', 'مسافرو الميزانية، الإقامات الطويلة', 'MAD 200–600 (18–55€)'],
        ],
      },
      callout: {
        label: '🏨 توصياتنا',
        body: 'تجربة رياض بوتيك: Riad Villa Blanche (فونتي، سبا + مسبح). منتجع بإطلالة بحرية: Hotel The View Agadir (5 نجوم). سيرف/اقتصادي: دور ضيافة تاغازوت تقدم من أفضل القيم على الساحل المغربي كله.',
      },
    },
    {
      heading: 'ماذا تأكل في أكادير',
      paragraphs: ['كمدينة منتجع ساحلية، مشهد طعام أكادير يميل بقوة للمأكولات البحرية الطازجة، إلى جانب خيارات طعام دولية.'],
      table: {
        caption: 'ماذا تأكل في أكادير 2026',
        headers: ['الطبق/التجربة', 'أين', 'السعر', 'ملاحظات'],
        rows: [
          ['مأكولات بحرية مشوية طازجة', 'المارينا، مطاعم الكورنيش', 'MAD 100–250', 'سردين وكاليماري وصيد اليوم'],
          ['طاجين وكسكس', 'مطاعم محلية، رياضات', 'MAD 50–120', 'أطباق مغربية أساسية، منفذة جيداً'],
          ['مطاعم عشاء-عرض', 'Buddha Bar أكادير، Chems Ayour', 'MAD 250–500', 'مطبخ فيوجن أو تقليدي مع ترفيه حي'],
          ['طعام شوارع / عصائر', 'سوق الحد، الكورنيش', 'MAD 5–20', 'عصير برتقال طازج، ذرة مشوية، مسمن'],
          ['منتجات الأرغان', 'سوق الحد، تعاونيات', 'MAD 100–250/زجاجة', 'أكادير في قلب إنتاج زيت الأرغان'],
        ],
      },
    },
    {
      heading: 'أكادير مقابل الصويرة — السؤال الذي يطرحه الجميع',
      paragraphs: ['أكادير والصويرة كلاهما ساحلي، لكن تقدمان تجارب مختلفة جوهرياً.'],
      table: {
        caption: 'أكادير مقابل الصويرة — مقارنة صادقة 2026',
        headers: ['الجانب', 'أكادير', 'الصويرة'],
        rows: [
          ['الطابع', 'منتجع شاطئي حديث، أُعيد بناؤه بعد 1960', 'مدينة عتيقة تاريخية مسورة يونسكو'],
          ['الشاطئ', 'واسع، محمي، قابل للسباحة، 10كم', 'أكثر رياحاً، أفضل لركوب الرياح'],
          ['الأجواء', 'منتجع، عائلي، ثقافة أسرة الشمس', 'بوهيمي، فني، سحر مدينة عتيقة مسترخٍ'],
          ['ركوب الأمواج', 'وصول لتاغازوت القريبة (20كم)', 'رياضات رياح جيدة، موجات ركوب أقل شهرة'],
          ['دفء الشتاء', 'أدفأ وجهة شتوية في المغرب', 'أبرد وأكثر رياحاً من أكادير شتاءً'],
          ['الحياة الليلية', 'أكثر تطوراً — بارات، نوادٍ، عروض عشاء', 'أهدأ، أمسيات أقل صخباً'],
          ['الأنسب لـ', 'عطلة شاطئية، رحلات سيرف، هروب شتوي دافئ', 'كومبو ثقافة + ساحل، عشاق الفن'],
        ],
      },
      callout: {
        label: '🗺️ توصيتنا',
        body: 'كثير من عملائنا يفعلون الاثنين: 2–3 ليالٍ أكادير للشاطئ والسيرف، ثم قيادة الطريق الساحلي للصويرة (2:15) لليلة أو ليلتين من ثقافة المدينة العتيقة قبل متابعة لمراكش. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'هل أكادير تستحق الزيارة؟',
      answer: 'نعم، للمسافر المناسب — أكادير لا تملك ثقافة المدينة العتيقة كمراكش أو فاس (أُعيد بناء المدينة بالكامل تقريباً بعد زلزال 1960)، لكنها تقدم أكثر مناخ شاطئي موثوقية في المغرب، قرابة 300 يوم من الشمس، وصول لسيرف تاغازوت، ورحلات أطلس صغير سوس ماسة غير مستكشفة فعلاً.',
    },
    {
      question: 'كم تبعد أكادير عن الدار البيضاء؟',
      answer: 'أكادير على بعد 460–466 كم من الدار البيضاء عبر الطريق السريع A7 عبر مراكش، حوالي 4:45–5:00 ساعة قيادة. طريق ساحلي بديل عبر الجديدة وآسفي والصويرة يستغرق 6:30–7 ساعات لكنه أكثر خلاباً بكثير.',
    },
    {
      question: 'ما أفضل وقت لزيارة أكادير؟',
      answer: 'أكادير فعلاً وجهة على مدار السنة. الشتاء (نوفمبر–فبراير، 18–25°م) ميزتها الفريدة. الربيع (مارس–مايو) يقدم طقساً مثالياً بلا حشود ذروة. الصيف (يونيو–سبتمبر) حار ومزدحم بأعلى الأسعار.',
    },
    {
      question: 'هل تاغازوت جزء من أكادير؟',
      answer: 'تاغازوت قرية صيادين تحولت لمدينة سيرف منفصلة، تقع على بعد حوالي 20 كم شمال أكادير، حوالي 30 دقيقة بالسيارة أو تاكسي مشترك. إنها من وجهات ركوب الأمواج الأولى في أفريقيا.',
    },
    {
      question: 'ما الجواهر الخفية قرب أكادير؟',
      answer: 'بعيداً عن الشاطئ، تقدم منطقة سوس ماسة مواقع غير مستكشفة فعلاً: محاجر أيت منصور قرب تافراوت، وادي الفردوس، جبل سيروا، طريق الواحات نحو طاطا وأكا، والمنتزه الوطني سوس ماسة.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'بماذا تشتهر أكادير؟', answer: 'تشتهر أكادير كأولى مدن المغرب الشاطئية — وجهة حديثة أُعيد بناؤها (بعد زلزال 1960 المدمر) بقرابة 300 يوم من الشمس سنوياً، وشاطئ رملي بطول 10كم، وقرب من تاغازوت، إحدى أفضل وجهات ركوب الأمواج في أفريقيا.' },
    { question: 'أكادير أم مراكش، أيهما أفضل؟', answer: 'تخدمان أغراضاً مختلفة. مراكش تقدم أشهر مدينة عتيقة تاريخية في المغرب. أكادير تقدم شاطئاً وركوب أمواج وطقساً دافئاً موثوقاً — خاصة شتاءً. كثير من المسافرين يجمعون بينهما، مرتبطتين برحلة بسيطة 2:30–3 ساعات على A7.' },
    { question: 'كم يوماً تحتاج في أكادير؟', answer: '2–3 أيام تغطي الشاطئ والكورنيش ونقطة مشاهدة القصبة وسوق الحد. أضف يوماً رابعاً أو خامساً لاستكشاف تاغازوت ورحلة يومية للأطلس الصغير (وادي الفردوس أو محاجر أيت منصور).' },
  ],
  relatedDestinations: ['casablanca', 'marrakech'],
  relatedPosts: ['min-dar-al-bayda-ila-agadir-bis-sayyara', 'dalil-safar-marakish', 'dalil-safar-dar-al-bayda', 'afdal-sayyara-listajar-fi-dar-al-bayda', 'dalil-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);