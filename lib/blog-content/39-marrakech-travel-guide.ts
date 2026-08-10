import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'marrakech-travel-guide';
const SLUG_FR = 'guide-voyage-marrakech';
const SLUG_AR = 'dalil-safar-marakish';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(2166161);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Marrakech Travel Guide 2026 — Is It Worth Visiting? Local Expert Answers',
  metaDescription: 'Complete Marrakech travel guide 2026: Jemaa el-Fnaa, souks, Majorelle Garden, best riads, food guide, day trips, World Cup 2030 update, and honest comparison vs Fes, Chefchaouen & Agadir.',
  title: 'Marrakech Travel Guide 2026: Everything You Need to Know (By Locals Who Live Here)',
  description: 'The complete Marrakech guide written by a Casablanca-based team that handles hundreds of Morocco road trips per year. Is Marrakech worth it in 2026? Honest answer. Best neighborhoods, souks strategy, where locals actually eat, how to survive Jemaa el-Fnaa, Marrakech vs every other Moroccan city, and the World Cup 2030 angle nobody else is covering.',
  keyword: 'marrakech travel guide',
  coverImage: COVER,
  coverAlt: 'Marrakech travel guide 2026 — Jemaa el-Fnaa square at dusk with Koutoubia Mosque minaret and Atlas Mountains',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 18,
  intro: 'Marrakech is Morocco\'s most visited city, its most photographed city, and — depending on who you ask — either its most exciting or its most exhausting. Our team has sent hundreds of clients to Marrakech from Casablanca Airport over the past five years. We know what they loved, what overwhelmed them, what they wish someone had warned them about, and what most travel guides get wrong. This is the Marrakech guide we give our own clients before they set off on the A7 motorway. Honest, practical, written by people who live in Morocco — not bloggers passing through for three days.',
  sections: [
    {
      heading: 'Is Marrakech Worth Visiting in 2026? The Honest Local Answer',
      paragraphs: [
        'Yes — but with clear expectations. Marrakech is one of the most sensory-intense cities on earth: a UNESCO-listed medina where 1,000 years of history collides with 21st-century tourism, where the call to prayer competes with snake charmers, and where the world\'s most theatrical public square runs on chaos that somehow works. It is extraordinary. It is also, at times, exhausting.',
        'The travelers who love Marrakech are those who engage with it on its own terms: who slow down in the souks, who accept that getting lost is the point, who eat where locals eat rather than where the signboards say "Tourist Menu", and who understand that the vendor pressure they\'ll encounter is part of a centuries-old commercial culture — not a personal attack.',
        'The travelers who leave disappointed are usually those who expected a sanitized, Instagram-curated version of Morocco. Jemaa el-Fnaa at midnight is spectacular. The same square at 2pm in August with 50 tour groups is something else. Marrakech rewards preparation. This guide is that preparation.',
      ],
      callout: {
        label: '🇲🇦 Local Verdict',
        body: 'Is Marrakech worth it? Absolutely — but give it 3 nights minimum, not 2 days. The first day you\'re overwhelmed. The second day you start to understand it. The third day Marrakech reveals itself. Visitors who leave after 2 days almost always say the same thing: "I wish I\'d stayed longer."',
      },
    },
    {
      heading: 'Marrakech Quick Facts 2026',
      paragraphs: [
        'Everything you need to know before arrival — the practical facts most guides bury in paragraph 15.',
      ],
      table: {
        caption: 'Marrakech essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Official name', 'Marrakech (مراكش) — also spelled Marrakesh'],
          ['Nickname', '"The Red City" (walls and buildings made of local red sandstone)'],
          ['Population', '~1 million city, ~4 million metro'],
          ['Location', 'Foothills of the High Atlas Mountains, 240 km south of Casablanca'],
          ['Airport', 'Marrakech Menara Airport (RAK) — 6 km from medina'],
          ['Nearest major airport', 'Casablanca CMN — 240 km, 2h30 by motorway'],
          ['Currency', 'Moroccan Dirham (MAD) — 1 EUR ≈ 10.8 MAD (2026)'],
          ['Language', 'Arabic (official), Darija (local dialect), French, English in tourist areas'],
          ['Best time to visit', 'March–May and September–November (perfect weather, manageable crowds)'],
          ['How many days needed', '3 nights minimum — 4–5 for day trips (Atlas, Essaouira, Agafay)'],
          ['World Cup 2030', 'Marrakech is a host city — stadium renovation underway (closed until 2029)'],
          ['Car rental from CMN', 'From 250 MAD/day (€23) — MoroccoForYou Cars, meet & greet at arrivals'],
        ],
      },
    },
    {
      heading: 'The Marrakech Medina — How to Actually Navigate It',
      paragraphs: [
        'The Marrakech medina is a UNESCO World Heritage Site and one of the largest car-free urban areas in the world. It is also deliberately disorienting — the narrow derbs (alleyways) were designed to confuse invaders, and they do an equally effective job on tourists. Here is what you need to know to navigate it without losing your mind.',
        'The medina is divided into roughly four quadrants by two main axes: the north-south axis connecting Jemaa el-Fnaa to the Mellah (Jewish quarter), and the east-west axis through the main souk district. Jemaa el-Fnaa is the orientation point — if lost, ask any local for "la place" and you will be pointed in the right direction.',
        'The souks are organized by craft — a medieval organizational system that survives intact. Dyers near the tanneries, spice sellers in the spice souk, leather workers near Chouara, woodworkers near the Medersa Ben Youssef. Walking with this map in mind transforms the apparent chaos into a logical city.',
      ],
      callout: {
        label: '💡 Medina Navigation Insider Tips',
        body: 'Download maps.me before arrival — it works offline and has the Marrakech medina mapped with derb-level detail. Do not follow anyone who offers to "show you the way" unless you have agreed on a guide fee in advance. The standard rate for a licensed guide is MAD 300–400 for a half-day. Getting genuinely lost and finding your own way out is one of the best experiences Marrakech offers — but budget 30–60 minutes for it.',
      },
    },
    {
      heading: 'Jemaa el-Fnaa — The World\'s Most Theatrical Square',
      paragraphs: [
        'Jemaa el-Fnaa is the beating heart of Marrakech and one of the most extraordinary public spaces on earth. UNESCO recognized it not as a monument but as an "Intangible Cultural Heritage" — acknowledging that what makes it special is not what is built there but what happens there: daily. Snake charmers, acrobats, storytellers, henna artists, orange juice vendors, musicians playing Gnawa trance music, food stalls that materialize at dusk and fill the square with smoke and the smell of grilled meat.',
        'The square operates on a rhythm. Morning: quiet, locals and juice vendors. Afternoon: tour groups, heat, controlled chaos. Sunset: the transformation begins — stalls appear, musicians arrive, the crowd thickens. After 9pm: the square reaches its peak theatrical intensity, with dozens of food stalls, hundreds of performers, thousands of visitors and locals all sharing the same space. This is when Jemaa el-Fnaa becomes something genuinely unrepeatable.',
      ],
      callout: {
        label: '🎭 Jemaa el-Fnaa Insider Rules',
        body: 'If you photograph snake charmers, musicians, or performers, you will be asked for money — this is fair and expected. Agree a price before photographing, or be ready to pay MAD 10–20 after. Orange juice at the square costs MAD 4–5 (always squeeze your own to avoid added sugar). Food stalls at night: stalls 1–15 are most touristy; stalls further back have better food and lower prices. Never sit down at a stall until you\'ve checked the prices on the menu board — prices are legitimate, but knowing them in advance avoids confusion.',
      },
    },
    {
      heading: 'Best Things to Do in Marrakech — The Essential List',
      paragraphs: [
        'Beyond Jemaa el-Fnaa, Marrakech has more depth than most visitors discover in a standard 48-hour visit.',
      ],
      table: {
        caption: 'Best things to do in Marrakech 2026',
        headers: ['Attraction', 'Area', 'Time needed', 'Price', 'Local tip'],
        rows: [
          ['Jemaa el-Fnaa', 'Medina centre', 'Evening — 2+ hours', 'Free to enter', 'Go at 9pm for peak atmosphere'],
          ['Majorelle Garden + Yves Saint Laurent Museum', 'Gueliz', '1.5–2 hours', 'MAD 150–200', 'Book online — queues otherwise. Best early morning.'],
          ['Bahia Palace', 'Southern medina', '1 hour', 'MAD 70', 'One of Morocco\'s finest 19th-century palaces — often overlooked'],
          ['Saadian Tombs', 'Southern medina', '45 min', 'MAD 70', 'Book timed entry — crowds get intense 10am–2pm'],
          ['Medersa Ben Youssef', 'Northern medina', '1 hour', 'MAD 70', 'Most beautiful Islamic architecture in Marrakech — go early'],
          ['El Badi Palace ruins', 'Southern medina', '1 hour', 'MAD 70', 'Atmospheric ruins — best in late afternoon light'],
          ['Mellah (Jewish Quarter)', 'Southern medina', '1 hour', 'Free', 'Authentic and largely tourist-free — the real Marrakech'],
          ['Rahba Kedima (Spice Square)', 'Medina souks', '30 min', 'Free', 'Buy spices here — better quality and authenticity than tourist shops'],
          ['Koutoubia Mosque gardens', 'Near Jemaa el-Fnaa', '30 min', 'Free (gardens only)', 'Non-Muslims cannot enter mosque — gardens are beautiful at sunset'],
          ['Le Jardin Secret', 'Northern medina', '1 hour', 'MAD 50', 'Underrated — a restored 16th-century riad garden with rooftop view'],
          ['Agafay Desert', '40 km from medina', 'Half to full day', 'MAD 400–1,200 (tours)', 'Rocky desert — different from Sahara but closer and equally beautiful'],
          ['Atlas Mountains day trip', '60–90 km from medina', 'Full day', 'MAD 200–400 (transport)', 'Hire a car at CMN or Marrakech — public transport is slow'],
        ],
      },
    },
    {
      heading: 'The Marrakech Souks — A Practical Guide',
      paragraphs: [
        'The souks of Marrakech are one of the most intense shopping experiences on earth — and one of the most rewarding if you approach them correctly. The key to surviving and enjoying the souks is understanding that everything is a negotiation, that the first price is always the opening bid, and that the appropriate counteroffer is approximately 40–50% of what you are first quoted.',
        'The souks are organized by trade: the Souk des Babouches (leather slippers), Souk des Teinturiers (dyers), Souk Haddadine (metalworkers), Souk Cherratine (leather goods), and the main Souk Semmarine that runs north from Jemaa el-Fnaa. Walk the full souk route before buying anything — prices and quality vary dramatically between stalls selling identical items.',
      ],
      table: {
        caption: 'Marrakech souks guide — what to buy and where 2026',
        headers: ['Item', 'Best souk', 'Fair price range', 'Tip'],
        rows: [
          ['Babouches (leather slippers)', 'Souk des Babouches', 'MAD 80–150 (€7–14)', 'Genuine leather vs synthetic — leather has a distinctive smell'],
          ['Argan oil (culinary)', 'Spice souk / Rahba Kedima', 'MAD 150–250/250ml (€14–23)', 'Buy from women\'s cooperative for guaranteed authenticity'],
          ['Argan oil (cosmetic)', 'Same as above', 'MAD 100–180/100ml (€9–17)', 'Test: cosmetic is golden, culinary is darker'],
          ['Wool blanket (handira)', 'Northern medina', 'MAD 400–800 (€37–74)', 'Machine-made vs handwoven — handwoven is heavier, irregular'],
          ['Ceramic tagine', 'Pottery souk (south medina)', 'MAD 150–400 (€14–37)', 'Lead-free ceramics are marked — ask specifically'],
          ['Silver jewellery', 'Souk Semmarine', 'MAD 100–500 (€9–46)', 'Genuine silver has 925 or 800 stamp — check before buying'],
          ['Leather bag', 'Souk Cherratine', 'MAD 200–600 (€18–55)', 'Full-grain leather is stiffer than bonded leather'],
          ['Spices (cumin, ras el hanout, saffron)', 'Rahba Kedima spice square', 'MAD 20–80 for 100g (€1.85–7.40)', 'Saffron fraud is common — genuine saffron is MAD 150+/gram'],
        ],
      },
      callout: {
        label: '🛍️ Souk Strategy: The 3-Pass Rule',
        body: 'Walk the souks once without buying (note items and prices). Walk a second time and negotiate for items you want — counteroffer at 40-50% of the first price. Make final purchases on a third pass if needed. Never buy at the first price on the first pass. Never feel obligated to buy because you entered a shop — saying "shukran, la" (thank you, no) is completely acceptable and not rude.',
      },
    },
    {
      heading: 'Where to Stay in Marrakech — Riad vs Hotel',
      paragraphs: [
        'Marrakech invented the riad hotel concept — a traditional Moroccan house built around a central courtyard, converted into a boutique guesthouse. Staying in a riad inside the medina is the definitive Marrakech experience and should be the default choice for first-time visitors. The contrast between the chaos of the derbs outside and the serenity of your riad courtyard is one of the most memorable experiences Morocco offers.',
      ],
      table: {
        caption: 'Where to stay in Marrakech — options by type and budget 2026',
        headers: ['Area', 'Vibe', 'Best for', 'Price range/night'],
        rows: [
          ['Medina (central riad)', 'Authentic, atmospheric, immersive', 'First-timers, couples, cultural experience', 'MAD 400–2,500 (€37–230)'],
          ['Medina (budget riad)', 'Basic but charming, rooftop terrace', 'Solo travelers, budget, backpackers', 'MAD 150–400 (€14–37)'],
          ['Gueliz (ville nouvelle)', 'Modern, restaurants, less chaos', 'Repeat visitors, business, longer stays', 'MAD 300–1,500 (€28–139)'],
          ['Hivernage', 'Luxury hotels, swimming pools, quiet', 'Families, luxury seekers, pool priority', 'MAD 800–5,000+ (€74–460+)'],
          ['Palmeraie (palm grove)', 'Resort vibe, space, nature', 'Honeymoons, families, resort holiday', 'MAD 1,200–8,000 (€111–740)'],
        ],
      },
      callout: {
        label: '🏨 Riad Booking Tips',
        body: 'Book riads directly by email or WhatsApp when possible — you often get better rates and the owner meets you personally. Give your riad address to your taxi driver in Arabic — medina addresses confuse most drivers. The best riads book out months in advance for March–May and September–November. For summer (July–August), always confirm the riad has air conditioning — many traditional riads do not.',
      },
    },
    {
      heading: 'What to Eat in Marrakech — Where Locals Actually Go',
      paragraphs: [
        'Marrakech has two food scenes running in parallel: the tourist restaurant circuit (menus in five languages, belly dancer shows, overpriced pastilla) and the real Marrakchi food culture that locals navigate daily. Both are valid. But if you only eat at one category, eat at the second.',
      ],
      table: {
        caption: 'What to eat in Marrakech — local guide 2026',
        headers: ['Dish', 'Where to find it', 'Price', 'Notes'],
        rows: [
          ['Lamb tagine with prunes & almonds', 'Medina restaurants, riads', 'MAD 80–150', 'The definitive Marrakchi tagine — slow-cooked 4+ hours'],
          ['Couscous (Friday specialty)', 'Local restaurants, Fridays only', 'MAD 40–80', 'Traditional Friday meal — seven vegetables on top'],
          ['Msemen (square flatbread)', 'Street stalls, morning', 'MAD 3–5', 'Flaky breakfast bread — eat with honey and argan oil'],
          ['Harira (soup)', 'Street stalls, everywhere', 'MAD 5–10', 'Morocco\'s national soup — tomato, lentil, chickpea'],
          ['Merguez (spicy sausage)', 'Jemaa el-Fnaa night stalls', 'MAD 30–50', 'Grilled on the spot — order by pointing'],
          ['Pastilla (pigeon pie)', 'Traditional restaurants', 'MAD 60–120', 'Sweet-savoury pastry — one of Morocco\'s great dishes'],
          ['Mechoui (slow-roasted lamb)', 'Mechoui Alley, medina', 'MAD 60–100/portion', 'Whole lamb slow-roasted in underground ovens — line up before noon'],
          ['Fresh orange juice', 'Jemaa el-Fnaa, everywhere', 'MAD 4–5', 'The world\'s best value — squeeze it yourself at the stall'],
          ['Mint tea', 'Every café', 'MAD 10–20', 'Order "without sugar" (bla sukkar) if you prefer — then add your own'],
        ],
      },
      callout: {
        label: '🍽️ Where Locals Eat',
        body: 'Mechoui Alley (Derb Debbachi area) for slow-roasted lamb before noon. Place des Ferblantiers for local lunch (MAD 30–50). Café des Épices on Rahba Kedima for rooftop lunch. Souk Kafé for medina lunch at fair prices. Avoid any restaurant with photos on the menu outside Jemaa el-Fnaa — they are tourist traps without exception.',
      },
    },
    {
      heading: 'Marrakech vs Other Moroccan Cities — The Honest Comparison',
      paragraphs: [
        'The most common question we get from clients is "which Moroccan city should I prioritize?" Here is our honest answer — city by city.',
      ],
      table: {
        caption: 'Marrakech vs other Moroccan cities — which should you visit?',
        headers: ['City', 'Best for', 'Different from Marrakech because...', 'Visit if you...'],
        rows: [
          ['Fes', 'Medieval depth, craftsmanship, authentic medina', 'Older, quieter, more inward — the world\'s best-preserved medieval city', 'Want fewer tourists, more history, deeper cultural immersion'],
          ['Chefchaouen', 'Photography, mountain atmosphere, relaxation', 'Blue city in the Rif Mountains — completely different aesthetic and pace', 'Want beautiful photos, calm pace, mountain air, and cooler temperatures'],
          ['Casablanca', 'Modern Morocco, nightlife, Atlantic coast', 'Morocco\'s business capital — modern boulevards, not a traditional medina', 'Want cosmopolitan Morocco, great restaurants, beach, and Hassan II Mosque'],
          ['Agadir', 'Beach holiday, resort, surfing', 'Modern beach resort — rebuilt after 1960 earthquake, no historic medina', 'Want a beach holiday alongside your Morocco cultural experience'],
          ['Essaouira', 'Coastal atmosphere, wind, relaxation', 'Atlantic port city — laid-back, Gnawa music, strong wind, excellent seafood', 'Want to decompress after Marrakech\'s intensity (perfect 2-day detour)'],
          ['Sahara/Merzouga', 'Desert experience, camels, stargazing', 'Not a city — a landscape destination requiring 2+ days', 'Have 8+ days and want the full Morocco road trip experience'],
          ['Rabat', 'Capital city, Roman ruins, quieter medina', 'Administrative capital — more European feel, excellent museums, calmer', 'Want Morocco without the tourist pressure of Marrakech or Fes'],
        ],
      },
      callout: {
        label: '🗺️ Our Road Trip Recommendation',
        body: 'The perfect first Morocco trip (7–10 days): Casablanca Airport (CMN) → Marrakech (3 nights) → Essaouira (1 night) → back to Marrakech → Atlas day trip → Casablanca. Or the north loop: CMN → Rabat → Tangier → Chefchaouen → Fes → CMN. Rent a car at CMN — the road between cities is half the experience. From 250 MAD/day (€23): +212 634 276 534',
      },
    },
    {
      heading: 'Day Trips from Marrakech — Why You Need a Car',
      paragraphs: [
        'Marrakech\'s location at the foot of the High Atlas Mountains makes it one of Morocco\'s best bases for day trips. The range of landscapes reachable in a single day is extraordinary: from Atlantic coast (Essaouira, 2.5 hours) to mountain village (Imlil, 1.5 hours) to rocky desert (Agafay, 45 minutes) to waterfalls (Ouzoud, 3 hours).',
      ],
      table: {
        caption: 'Best day trips from Marrakech 2026',
        headers: ['Destination', 'Distance', 'Drive time', 'Why go', 'Car needed?'],
        rows: [
          ['Agafay Desert', '40 km', '45 min', 'Rocky desert landscape, quad bikes, glamping, close substitute for Sahara', 'Yes — essential'],
          ['Imlil & Atlas Mountains', '60 km', '1h15', 'Berber village, hiking, Toubkal National Park, snow in winter', 'Yes — mountain roads'],
          ['Ouzoud Waterfalls', '170 km', '2h45', 'Morocco\'s most spectacular waterfalls, swimming, Barbary macaques', 'Yes — most flexible'],
          ['Essaouira', '190 km', '2h30', 'Atlantic port, blue boats, Gnawa music, seafood, wind', 'Yes or bus (3h30)'],
          ['Aït Ben Haddou', '200 km', '3h', 'UNESCO kasbah, filmed in Game of Thrones, Gladiator, Lawrence of Arabia', 'Yes — combine with Ouarzazate'],
          ['Ouarzazate', '210 km', '3h15', '"Hollywood of Africa" — Atlas Studios, Taourirt Kasbah', 'Yes — combine with Aït Ben Haddou'],
          ['Casablanca', '240 km', '2h30', 'Hassan II Mosque, Corniche, Morocco\'s best restaurants', 'Yes or train (3h)'],
        ],
      },
      callout: {
        label: '🚗 Rent Your Car at CMN, Drive to Marrakech',
        body: 'Pick up at Casablanca Airport (CMN), drive to Marrakech (2h30, MAD 78 toll), use the car for day trips, return to CMN at the end. Economy from 250 MAD/day (€23), Dacia Duster 4x4 from 350 MAD/day (€32) for Atlas and desert routes. +212 634 276 534',
      },
    },
    {
      heading: 'Best Time to Visit Marrakech',
      paragraphs: [
        'Marrakech\'s location at the edge of the Sahara gives it one of Morocco\'s most extreme climates — scorching summers and cold winter nights, with two perfect windows in spring and autumn.',
      ],
      table: {
        caption: 'Best time to visit Marrakech — month by month 2026',
        headers: ['Period', 'Temperature', 'Crowds', 'Verdict'],
        rows: [
          ['March–May', '20–28°C, sunny, occasional rain', 'Medium — growing', '⭐ Best season — perfect weather, Agafay blooms, manageable crowds'],
          ['June–August', '35–45°C at peak, very dry', 'High (international tourists)', 'Too hot for comfortable sightseeing 11am–4pm — swim and rest in riad'],
          ['September–October', '25–32°C, excellent', 'Medium — declining', '⭐ Second best season — warm, post-summer calm, golden light'],
          ['November–February', '15–20°C day, 5–10°C night', 'Low (budget season)', 'Good for sightseeing — bring layers for evenings, Atlas snow possible'],
          ['Ramadan (variable)', 'Any weather', 'Local festival atmosphere', 'Restaurants closed daytime — souks quieter morning, busier evening'],
          ['Eid holidays', 'Any weather', 'Very busy domestically', 'Higher riad prices — book well in advance'],
        ],
      },
    },
    {
      heading: 'Marrakech and the 2030 World Cup',
      paragraphs: [
        'Marrakech is one of six Moroccan cities selected to host matches at the 2030 FIFA World Cup, shared between Morocco, Spain, and Portugal. The Grand Stade de Marrakech (capacity approximately 46,000 after renovation) is currently closed for full renovation — the athletics track is being removed, stands are being brought closer to the pitch, and the entire venue is being upgraded to FIFA 2030 standards.',
        'The renovation is expected to be completed by 2028–2029. For travelers visiting Marrakech before the World Cup, this means the stadium is not accessible for visits but the city is actively investing in infrastructure — roads, hotels, and public spaces are all being upgraded. The period 2026–2029 is optimal for visiting Marrakech before World Cup crowds and price inflation arrive.',
        'For those planning to attend World Cup 2030 matches: Marrakech is 2h30 from Casablanca (motorway) and 3h from Fes. Renting a car at Casablanca Airport (CMN) and driving between host cities is the most flexible option for the tournament.',
      ],
      callout: {
        label: '🏆 Plan Your World Cup 2030 Marrakech Trip',
        body: 'MoroccoForYou Cars at CMN Airport handles multi-city road trips between all 6 Moroccan host cities. The A7 motorway connects Casablanca to Marrakech (2h30) and Agadir (5h total). Book your car rental for 2030 as early as possible — demand will be extreme. +212 634 276 534',
      },
    },
    {
      heading: 'Marrakech Travel Tips — What Nobody Else Tells You',
      paragraphs: [
        'Ten things our clients wish they had known before arriving, based on hundreds of Marrakech road trips from Casablanca.',
      ],
      list: [
        'The medina is intentionally disorienting — getting lost is part of the experience, not a failure. Download maps.me offline before arriving.',
        'Photographer scams: anyone who positions themselves between you and a landmark for a photo will ask for money. This is standard — pay MAD 10–20 or decline before they move.',
        'Henna scam: women who approach you to "draw a little henna for free" will demand MAD 200+ when finished. Nothing is free in the medina — agree a price before accepting anything.',
        'Fake guides: men who approach saying "the palace is closed today, I know another way" are never telling the truth. The palaces are open. Walk away.',
        'Taxi in Marrakech: petit taxis (red) must use meters. Always insist on the meter ("compteur s\'il vous plaît"). If refused, get another taxi. Fixed-price taxis from the medina to Gueliz should be approximately MAD 30–50.',
        'The best hammam experience is not the one your riad recommends (they get commission). Ask for local recommendations — Hammam Dar el-Bacha is one of the most beautiful traditional hammams in Marrakech (MAD 100–150).',
        'Mechoui Alley for lunch — line up by 11:30am. By 1pm the best cuts are gone. Order by weight and point at what you want.',
        'Majorelle Garden: book tickets online the day before. Walk-up queues in high season can be 45–60 minutes. The Yves Saint Laurent Museum combined ticket (MAD 200) is worth it.',
        'The medina at night is safe and completely different from daytime — the vendor pressure drops dramatically after dark. The best time to walk the souks is 7–9pm when locals are shopping.',
        'Marrakech in summer (July–August) requires a riad with a pool or air conditioning. Do not book a riad with "natural ventilation" for summer — it means no air conditioning, and temperatures reach 40°C+.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How many days do you need in Marrakech?',
      answer: '3 nights minimum. Day 1: medina, Jemaa el-Fnaa, orientation. Day 2: souks, Bahia Palace, Medersa Ben Youssef, Majorelle Garden. Day 3: Saadian Tombs, Mellah, rooftop lunch, evening at the square. Day 4+: day trips (Atlas, Agafay, Essaouira). Visitors who stay only 2 days almost always wish they had stayed longer.',
    },
    {
      question: 'Is Marrakech safe for tourists?',
      answer: 'Yes — Marrakech is generally safe. Violent crime against tourists is very rare. The main issues are scams and persistent vendor pressure in the medina, which are manageable with preparation. Solo female travelers report higher levels of harassment in Marrakech than in other Moroccan cities — particularly in the medina. Traveling in groups, dressing modestly, and using confident body language reduces this significantly.',
    },
    {
      question: 'What is the best time to visit Marrakech?',
      answer: 'March–May and September–October are the best months: temperatures 20–30°C, clear skies, and manageable crowds. June–August is extremely hot (35–45°C) and best avoided for medina walking. November–February is cool and quiet — excellent for sightseeing but bring warm layers for evenings.',
    },
    {
      question: 'How do you get from Casablanca to Marrakech?',
      answer: 'By rental car: 240 km on the A7 motorway, 2h30 drive, MAD 78 toll. By train: 3 hours from Casa Voyageurs, MAD 95 second class. By CTM bus: 3h30, MAD 100–120. Renting a car at Casablanca Airport (CMN) and driving to Marrakech is the most popular option for travelers who plan to do day trips from Marrakech.',
    },
    {
      question: 'Should I visit Marrakech or Fes?',
      answer: 'Both if possible — they are very different cities. Marrakech is theatrical, intense, and photogenic with excellent day trips. Fes is quieter, older, and offers deeper cultural immersion with the world\'s best-preserved medieval city. For a first visit with limited time: Marrakech first (more accessible, more English spoken, better day trip options). For repeat visitors: Fes for deeper Morocco.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is Marrakech worth visiting in 2026?', answer: 'Yes — Marrakech remains one of the world\'s great travel destinations in 2026. The UNESCO medina, Jemaa el-Fnaa square, the souks, Majorelle Garden, and the Atlas Mountains access are all unchanged. The city is investing heavily in infrastructure ahead of the 2030 World Cup. Give it 3+ nights and approach it with realistic expectations about vendor pressure in the medina.' },
    { question: 'What is Marrakech famous for?', answer: 'Marrakech is famous for Jemaa el-Fnaa (UNESCO Intangible Heritage square), its vast medieval medina (UNESCO World Heritage), the Majorelle Garden and Yves Saint Laurent connection, the souks, traditional riads, the Koutoubia Mosque, and its position as the gateway to Atlas Mountains and Sahara day trips. It is Morocco\'s most visited city and the country\'s primary international tourism hub.' },
    { question: 'How far is Marrakech from Casablanca?', answer: 'Marrakech is 240 km from Casablanca on the A7 motorway — approximately 2h30 to 3 hours driving. The toll is MAD 78 (€7). Renting a car at Casablanca Airport (CMN) and driving to Marrakech is the most popular and practical option for most international visitors to Morocco.' },
  ],
  relatedDestinations: ['marrakech', 'casablanca', 'fes', 'agadir'],
  relatedPosts: ['marrakech-street-food-guide', 'how-to-get-from-marrakech-to-chefchaouen', 'driving-from-marrakech-to-fes-self-drive', 'casablanca-to-marrakech-by-car', 'casablanca-travel-guide', 'chefchaouen-travel-guide', 'casablanca-airport-guide-cmn'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Marrakech 2026 — Vaut-il le Détour ? Réponse d\'un Local',
  metaDescription: 'Guide complet Marrakech 2026 : Jemaa el-Fnaa, souks, Jardin Majorelle, meilleurs riads, guide gastronomique, excursions, mise à jour Coupe du Monde 2030 et comparaison honnête vs Fès, Chefchaouen et Agadir.',
  title: 'Guide Voyage Marrakech 2026 : Tout Ce Qu\'il Faut Savoir (Par des Locaux)',
  description: 'Le guide complet de Marrakech rédigé par une équipe basée à Casablanca qui gère des centaines de road trips au Maroc par an. Marrakech vaut-il le détour en 2026 ? Réponse honnête. Meilleurs quartiers, stratégie souks, où mangent les locaux, comment survivre à Jemaa el-Fnaa, Marrakech vs toutes les autres villes marocaines, et l\'angle Coupe du Monde 2030.',
  keyword: 'guide voyage marrakech',
  coverImage: COVER,
  coverAlt: 'Guide voyage Marrakech 2026 — Place Jemaa el-Fnaa au crépuscule avec minaret Koutoubia et Atlas',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 18,
  intro: 'Marrakech est la ville la plus visitée du Maroc, la plus photographiée, et — selon les avis — soit la plus excitante soit la plus épuisante. Notre équipe a envoyé des centaines de clients à Marrakech depuis l\'aéroport de Casablanca ces cinq dernières années. Nous savons ce qu\'ils ont adoré, ce qui les a débordés, ce qu\'ils auraient voulu qu\'on leur dise avant, et ce que la plupart des guides de voyage ratent. Voici le guide Marrakech que nous donnons à nos propres clients avant qu\'ils s\'élancent sur l\'autoroute A7.',
  sections: [
    {
      heading: 'Marrakech vaut-il le détour en 2026 ? La réponse honnête des locaux',
      paragraphs: [
        'Oui — mais avec des attentes claires. Marrakech est l\'une des villes les plus intenses sur le plan sensoriel au monde : une médina classée UNESCO où 1 000 ans d\'histoire se confrontent au tourisme du 21e siècle, où l\'appel à la prière rivalise avec les charmeurs de serpents, et où la place publique la plus théâtrale du monde fonctionne sur un chaos qui, d\'une façon mystérieuse, fonctionne. C\'est extraordinaire. C\'est aussi, parfois, épuisant.',
        'Les voyageurs qui adorent Marrakech sont ceux qui s\'engagent avec la ville selon ses propres règles : qui ralentissent dans les souks, qui acceptent que se perdre est le but, qui mangent où mangent les locaux plutôt que là où les panneaux disent "Menu Touristique", et qui comprennent que la pression des vendeurs qu\'ils rencontreront fait partie d\'une culture commerciale vieille de plusieurs siècles.',
        'Les voyageurs qui repartent déçus sont généralement ceux qui attendaient une version aseptisée et Instagram-curatée du Maroc. Jemaa el-Fnaa à minuit est spectaculaire. La même place à 14h en août avec 50 groupes de touristes, c\'est autre chose. Marrakech récompense la préparation. Ce guide est cette préparation.',
      ],
      callout: {
        label: '🇲🇦 Verdict Local',
        body: 'Marrakech vaut-il le détour ? Absolument — mais donnez-lui 3 nuits minimum, pas 2 jours. Le premier jour, vous êtes submergé. Le deuxième, vous commencez à comprendre. Le troisième, Marrakech se révèle. Les visiteurs qui repartent après 2 jours disent presque toujours : "J\'aurais voulu rester plus longtemps."',
      },
    },
    {
      heading: 'Marrakech en Chiffres — Infos Essentielles 2026',
      paragraphs: [
        'Tout ce qu\'il faut savoir avant d\'arriver — les faits pratiques que la plupart des guides enterrent au paragraphe 15.',
      ],
      table: {
        caption: 'Infos essentielles Marrakech 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Nom officiel', 'Marrakech (مراكش)'],
          ['Surnom', '"La Ville Rouge" (murs et bâtiments en grès rouge local)'],
          ['Population', '~1 million en ville, ~4 millions en métropole'],
          ['Localisation', 'Piémont du Haut Atlas, 240 km au sud de Casablanca'],
          ['Aéroport', 'Aéroport Marrakech Menara (RAK) — 6 km de la médina'],
          ['Aéroport principal le plus proche', 'Casablanca CMN — 240 km, 2h30 par autoroute'],
          ['Monnaie', 'Dirham marocain (MAD) — 1 EUR ≈ 10,8 MAD (2026)'],
          ['Meilleure période', 'Mars–Mai et septembre–novembre'],
          ['Durée recommandée', '3 nuits minimum — 4–5 pour les excursions'],
          ['Coupe du Monde 2030', 'Marrakech est ville hôte — stade en rénovation (fermé jusqu\'en 2029)'],
          ['Location voiture depuis CMN', 'Dès 250 MAD/jour (23€) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'La Médina de Marrakech — Comment la Naviguer',
      paragraphs: [
        'La médina de Marrakech est un site du patrimoine mondial UNESCO et l\'une des plus grandes zones urbaines sans voiture au monde. Elle est aussi délibérément désorientante — les derbs (ruelles) ont été conçus pour confondre les envahisseurs, et ils font le même effet aux touristes. Voici ce qu\'il faut savoir pour naviguer sans perdre la tête.',
        'La médina est divisée en quatre quadrants par deux axes principaux. Jemaa el-Fnaa est le point d\'orientation — si vous vous perdez, demandez à n\'importe quel local "la place" et on vous indiquera la direction.',
        'Les souks sont organisés par métier — un système médiéval qui survit intact. Teinturiers près des tanneries, épiciers dans le souk des épices, maroquiniers près de Chouara, menuisiers près de la Medersa Ben Youssef. Marcher avec cette carte en tête transforme le chaos apparent en ville logique.',
      ],
      callout: {
        label: '💡 Conseils Insider Navigation Médina',
        body: 'Téléchargez maps.me avant d\'arriver — fonctionne hors ligne et a la médina de Marrakech cartographiée au niveau des derbs. Ne suivez personne qui propose de "vous montrer le chemin" sans avoir convenu d\'un tarif de guide au préalable. Se perdre vraiment et retrouver son chemin est l\'une des meilleures expériences de Marrakech — mais budgétez 30 à 60 minutes.',
      },
    },
    {
      heading: 'Jemaa el-Fnaa — La Place la Plus Théâtrale du Monde',
      paragraphs: [
        'Jemaa el-Fnaa est le cœur battant de Marrakech et l\'un des espaces publics les plus extraordinaires de la planète. L\'UNESCO l\'a reconnue non pas comme monument mais comme "Patrimoine Culturel Immatériel" — reconnaissant que ce qui la rend spéciale n\'est pas ce qui est construit là mais ce qui s\'y passe : tous les jours. Charmeurs de serpents, acrobates, conteurs, tatoueurs au henné, vendeurs de jus d\'orange, musiciens de musique de transe Gnawa, étals de nourriture qui se matérialisent au crépuscule.',
        'La place fonctionne sur un rythme. Matin : calme, locaux et vendeurs de jus. Après-midi : groupes touristiques, chaleur, chaos contrôlé. Coucher de soleil : la transformation commence — étals apparaissent, musiciens arrivent, la foule s\'épaissit. Après 21h : la place atteint son pic d\'intensité théâtrale.',
      ],
      callout: {
        label: '🎭 Règles Insider Jemaa el-Fnaa',
        body: 'Si vous photographiez des charmeurs de serpents ou des artistes, on vous demandera de l\'argent — c\'est juste et attendu. Convenez d\'un prix avant ou soyez prêt à payer MAD 10–20. Jus d\'orange sur la place : MAD 4–5 (pressez toujours vous-même pour éviter l\'ajout de sucre). Étals de nourriture la nuit : les étals 1–15 sont plus touristiques ; les étals plus loin dans la place ont une meilleure nourriture à des prix inférieurs.',
      },
    },
    {
      heading: 'Meilleures Choses à Faire à Marrakech',
      paragraphs: [
        'Au-delà de Jemaa el-Fnaa, Marrakech a plus de profondeur que la plupart des visiteurs découvrent en 48 heures.',
      ],
      table: {
        caption: 'Meilleures choses à faire à Marrakech 2026',
        headers: ['Attraction', 'Quartier', 'Temps nécessaire', 'Prix', 'Conseil local'],
        rows: [
          ['Jemaa el-Fnaa', 'Centre médina', 'Soirée — 2h+', 'Gratuit', 'Allez à 21h pour l\'atmosphère maximale'],
          ['Jardin Majorelle + Musée YSL', 'Guéliz', '1h30–2h', 'MAD 150–200', 'Réservez en ligne — files sinon. Mieux tôt le matin.'],
          ['Palais de la Bahia', 'Médina sud', '1 heure', 'MAD 70', 'L\'un des plus beaux palais du 19e siècle au Maroc'],
          ['Tombeaux Saadiens', 'Médina sud', '45 min', 'MAD 70', 'Réservez l\'entrée minutée — foules intenses 10h–14h'],
          ['Medersa Ben Youssef', 'Médina nord', '1 heure', 'MAD 70', 'Plus belle architecture islamique de Marrakech — allez tôt'],
          ['Ruines Palais El Badi', 'Médina sud', '1 heure', 'MAD 70', 'Ruines atmosphériques — meilleures en lumière fin d\'après-midi'],
          ['Mellah (quartier juif)', 'Médina sud', '1 heure', 'Gratuit', 'Authentique et peu touristique — la vraie Marrakech'],
          ['Rahba Kedima (Place des Épices)', 'Souks médina', '30 min', 'Gratuit', 'Achetez vos épices ici — meilleure qualité et authenticité'],
          ['Jardins de la Koutoubia', 'Près Jemaa el-Fnaa', '30 min', 'Gratuit (jardins)', 'Magnifiques au coucher de soleil — mosquée fermée aux non-musulmans'],
          ['Le Jardin Secret', 'Médina nord', '1 heure', 'MAD 50', 'Sous-estimé — jardin de riad restauré du 16e siècle'],
          ['Désert Agafay', '40 km', 'Demi à journée', 'MAD 400–1 200 (tours)', 'Désert rocheux — différent du Sahara mais proche et tout aussi beau'],
          ['Excursion Atlas', '60–90 km', 'Journée complète', 'MAD 200–400 (transport)', 'Louez une voiture à CMN — transports en commun lents'],
        ],
      },
    },
    {
      heading: 'Les Souks de Marrakech — Guide Pratique',
      paragraphs: [
        'Les souks de Marrakech sont l\'une des expériences de shopping les plus intenses au monde — et l\'une des plus gratifiantes si vous les abordez correctement. La clé pour survivre et apprécier les souks est de comprendre que tout se négocie, que le premier prix est toujours l\'offre d\'ouverture, et que la contre-offre appropriée est environ 40 à 50% de ce qui vous est d\'abord demandé.',
      ],
      table: {
        caption: 'Guide des souks de Marrakech — quoi acheter et où 2026',
        headers: ['Article', 'Meilleur souk', 'Prix juste', 'Conseil'],
        rows: [
          ['Babouches (chaussons en cuir)', 'Souk des Babouches', 'MAD 80–150 (7–14€)', 'Cuir véritable vs synthétique — le cuir a une odeur distinctive'],
          ['Huile d\'argan (culinaire)', 'Souk des épices / Rahba Kedima', 'MAD 150–250/250ml (14–23€)', 'Achetez en coopérative de femmes pour garantir l\'authenticité'],
          ['Huile d\'argan (cosmétique)', 'Idem', 'MAD 100–180/100ml (9–17€)', 'Test : cosmétique est dorée, culinaire est plus foncée'],
          ['Couverture en laine (handira)', 'Médina nord', 'MAD 400–800 (37–74€)', 'Machine vs tissée main — tissée main est plus lourde, irrégulière'],
          ['Tagine en céramique', 'Souk poterie (sud médina)', 'MAD 150–400 (14–37€)', 'Céramiques sans plomb marquées — demandez spécifiquement'],
          ['Bijoux en argent', 'Souk Semmarine', 'MAD 100–500 (9–46€)', 'L\'argent véritable a le tampon 925 ou 800 — vérifiez avant d\'acheter'],
          ['Sac en cuir', 'Souk Cherratine', 'MAD 200–600 (18–55€)', 'Le cuir pleine fleur est plus rigide que le cuir reconstitué'],
          ['Épices (cumin, ras el hanout, safran)', 'Rahba Kedima', 'MAD 20–80 pour 100g (1,85–7,40€)', 'Fraude safran fréquente — safran authentique est MAD 150+/gramme'],
        ],
      },
      callout: {
        label: '🛍️ Stratégie Souks : La Règle des 3 Passages',
        body: 'Parcourez les souks une première fois sans acheter (notez articles et prix). Passez une deuxième fois et négociez — contre-offrez à 40-50% du premier prix. Faites vos achats lors d\'un troisième passage si nécessaire. N\'achetez jamais au premier prix au premier passage. Ne vous sentez jamais obligé d\'acheter parce que vous êtes entré dans une boutique.',
      },
    },
    {
      heading: 'Où Dormir à Marrakech — Riad vs Hôtel',
      paragraphs: [
        'Marrakech a inventé le concept du riad-hôtel — une maison marocaine traditionnelle construite autour d\'une cour centrale, convertie en gîte boutique. Séjourner dans un riad à l\'intérieur de la médina est l\'expérience Marrakech par excellence et devrait être le choix par défaut pour les premiers visiteurs.',
      ],
      table: {
        caption: 'Où dormir à Marrakech — options par type et budget 2026',
        headers: ['Quartier', 'Ambiance', 'Idéal pour', 'Fourchette prix/nuit'],
        rows: [
          ['Médina (riad central)', 'Authentique, atmosphérique, immersif', 'Premiers visiteurs, couples, expérience culturelle', 'MAD 400–2 500 (37–230€)'],
          ['Médina (riad budget)', 'Simple mais charmant, terrasse sur le toit', 'Voyageurs solo, budget, backpackers', 'MAD 150–400 (14–37€)'],
          ['Guéliz (ville nouvelle)', 'Moderne, restaurants, moins de chaos', 'Visiteurs réguliers, affaires, longs séjours', 'MAD 300–1 500 (28–139€)'],
          ['Hivernage', 'Hôtels de luxe, piscines, calme', 'Familles, luxe, priorité piscine', 'MAD 800–5 000+ (74–460€+)'],
          ['Palmeraie', 'Resort, espace, nature', 'Lunes de miel, familles, vacances resort', 'MAD 1 200–8 000 (111–740€)'],
        ],
      },
    },
    {
      heading: 'Que Manger à Marrakech — Où Mangent les Locaux',
      paragraphs: [
        'Marrakech a deux scènes culinaires qui fonctionnent en parallèle : le circuit des restaurants touristiques et la vraie culture alimentaire marrakchie que les locaux fréquentent. Les deux sont valides. Mais si vous ne choisissez qu\'une catégorie, choisissez la deuxième.',
      ],
      table: {
        caption: 'Que manger à Marrakech — guide local 2026',
        headers: ['Plat', 'Où le trouver', 'Prix', 'Notes'],
        rows: [
          ['Tajine d\'agneau aux pruneaux et amandes', 'Restaurants médina, riads', 'MAD 80–150', 'Le tajine marrakchi par excellence — cuit lentement 4h+'],
          ['Couscous (spécialité du vendredi)', 'Restaurants locaux, vendredi uniquement', 'MAD 40–80', 'Repas traditionnel du vendredi — sept légumes dessus'],
          ['Msemen (pain carré feuilleté)', 'Étals de rue, matin', 'MAD 3–5', 'Pain du petit-déjeuner feuilleté — mangez avec miel et huile d\'argan'],
          ['Harira (soupe)', 'Partout, étals de rue', 'MAD 5–10', 'La soupe nationale marocaine — tomate, lentilles, pois chiches'],
          ['Merguez (saucisse épicée)', 'Étals nocturnes Jemaa el-Fnaa', 'MAD 30–50', 'Grillée sur place — commandez en pointant'],
          ['Pastilla (tourte au pigeon)', 'Restaurants traditionnels', 'MAD 60–120', 'Pâtisserie sucrée-salée — l\'un des grands plats du Maroc'],
          ['Mechoui (agneau rôti lentement)', 'Ruelle Mechoui, médina', 'MAD 60–100/portion', 'Agneau entier rôti dans des fours souterrains — faites la queue avant midi'],
          ['Jus d\'orange frais', 'Jemaa el-Fnaa, partout', 'MAD 4–5', 'Le meilleur rapport qualité-prix du monde — pressez vous-même'],
          ['Thé à la menthe', 'Tout café', 'MAD 10–20', 'Commandez "sans sucre" (bla sukkar) si vous préférez'],
        ],
      },
    },
    {
      heading: 'Marrakech vs les Autres Villes Marocaines — La Comparaison Honnête',
      paragraphs: [
        'La question la plus fréquente de nos clients : "quelle ville marocaine dois-je prioriser ?" Voici notre réponse honnête — ville par ville.',
      ],
      table: {
        caption: 'Marrakech vs autres villes marocaines — laquelle visiter ?',
        headers: ['Ville', 'Meilleur pour', 'Différente de Marrakech parce que...', 'Visitez si vous...'],
        rows: [
          ['Fès', 'Profondeur médiévale, artisanat, médina authentique', 'Plus ancienne, plus calme, plus intérieure — meilleure ville médiévale préservée au monde', 'Voulez moins de touristes, plus d\'histoire, immersion culturelle plus profonde'],
          ['Chefchaouen', 'Photographie, atmosphère montagnarde, détente', 'Ville bleue dans le Rif — esthétique et rythme complètement différents', 'Voulez de belles photos, rythme calme, air de montagne et températures fraîches'],
          ['Casablanca', 'Maroc moderne, nightlife, côte atlantique', 'Capitale économique — boulevards modernes, pas de médina traditionnelle', 'Voulez le Maroc cosmopolite, grands restaurants, plage et mosquée Hassan II'],
          ['Agadir', 'Vacances balnéaires, resort, surf', 'Station balnéaire moderne — reconstruite après séisme 1960, pas de médina historique', 'Voulez des vacances à la plage en parallèle de votre expérience culturelle marocaine'],
          ['Essaouira', 'Atmosphère côtière, vent, détente', 'Port atlantique — décontracté, musique Gnawa, vent fort, fruits de mer excellents', 'Voulez décompresser après l\'intensité de Marrakech (parfait détour 2 jours)'],
          ['Sahara/Merzouga', 'Expérience désert, chameaux, étoiles', 'Pas une ville — destination paysage nécessitant 2+ jours', 'Avez 8+ jours et voulez le road trip Maroc complet'],
          ['Rabat', 'Capitale, ruines romaines, médina plus calme', 'Capitale administrative — ambiance plus européenne, excellents musées', 'Voulez le Maroc sans la pression touristique de Marrakech ou Fès'],
        ],
      },
      callout: {
        label: '🗺️ Notre Recommandation Road Trip',
        body: 'Le premier voyage Maroc parfait (7–10 jours) : Aéroport Casablanca (CMN) → Marrakech (3 nuits) → Essaouira (1 nuit) → retour Marrakech → excursion Atlas → Casablanca. Ou la boucle nord : CMN → Rabat → Tanger → Chefchaouen → Fès → CMN. Louez une voiture à CMN — la route entre les villes fait partie de l\'expérience. Dès 250 MAD/jour (23€) : +212 634 276 534',
      },
    },
    {
      heading: 'Excursions depuis Marrakech — Pourquoi Vous Avez Besoin d\'une Voiture',
      paragraphs: [
        'La position de Marrakech au pied du Haut Atlas en fait l\'une des meilleures bases pour des excursions au Maroc. La diversité de paysages accessibles en une journée est extraordinaire : de la côte atlantique (Essaouira, 2h30) au village de montagne (Imlil, 1h30) au désert rocheux (Agafay, 45 min) aux cascades (Ouzoud, 3h).',
      ],
      table: {
        caption: 'Meilleures excursions depuis Marrakech 2026',
        headers: ['Destination', 'Distance', 'Trajet', 'Pourquoi y aller', 'Voiture nécessaire ?'],
        rows: [
          ['Désert Agafay', '40 km', '45 min', 'Désert rocheux, quads, glamping, substitut proche du Sahara', 'Oui — indispensable'],
          ['Imlil et Atlas', '60 km', '1h15', 'Village berbère, randonnée, Parc National Toubkal', 'Oui — routes de montagne'],
          ['Cascades d\'Ouzoud', '170 km', '2h45', 'Cascades les plus spectaculaires du Maroc, baignade, macaques de Barbarie', 'Oui — plus flexible'],
          ['Essaouira', '190 km', '2h30', 'Port atlantique, bateaux bleus, musique Gnawa, fruits de mer, vent', 'Oui ou bus (3h30)'],
          ['Aït Ben Haddou', '200 km', '3h', 'Ksar UNESCO, filmé dans Game of Thrones, Gladiator, Lawrence d\'Arabie', 'Oui — combiner avec Ouarzazate'],
          ['Ouarzazate', '210 km', '3h15', '"Hollywood d\'Afrique" — Atlas Studios, Kasbah Taourirt', 'Oui — combiner avec Aït Ben Haddou'],
          ['Casablanca', '240 km', '2h30', 'Mosquée Hassan II, Corniche, meilleurs restaurants du Maroc', 'Oui ou train (3h)'],
        ],
      },
      callout: {
        label: '🚗 Louez à CMN, Conduisez jusqu\'à Marrakech',
        body: 'Prise en charge à l\'aéroport de Casablanca (CMN), trajet jusqu\'à Marrakech (2h30, MAD 78 péage), utilisez la voiture pour les excursions, retour à CMN en fin de séjour. Économique dès 250 MAD/jour (23€), Dacia Duster 4x4 dès 350 MAD/jour (32€) pour l\'Atlas et le désert. +212 634 276 534',
      },
    },
    {
      heading: 'Meilleure Période pour Visiter Marrakech',
      paragraphs: [
        'La position de Marrakech en bordure du Sahara lui donne l\'un des climats les plus extrêmes du Maroc — étés torrides et nuits d\'hiver froides, avec deux fenêtres parfaites au printemps et en automne.',
      ],
      table: {
        caption: 'Meilleure période pour visiter Marrakech — mois par mois 2026',
        headers: ['Période', 'Température', 'Affluence', 'Verdict'],
        rows: [
          ['Mars–Mai', '20–28°C, ensoleillé, pluies occasionnelles', 'Moyen — croissant', '⭐ Meilleure saison — météo parfaite, Agafay en fleurs, foules gérables'],
          ['Juin–Août', '35–45°C au pic, très sec', 'Élevé (touristes internationaux)', 'Trop chaud pour visiter 11h–16h — piscine et repos au riad'],
          ['Septembre–Octobre', '25–32°C, excellent', 'Moyen — décroissant', '⭐ Deuxième meilleure saison — chaud, calme post-estival, lumière dorée'],
          ['Novembre–Février', '15–20°C jour, 5–10°C nuit', 'Faible (saison budget)', 'Bon pour les visites — apportez des couches pour les soirées, neige possible sur l\'Atlas'],
          ['Ramadan (variable)', 'Toute météo', 'Ambiance fête locale', 'Restaurants fermés en journée — souks plus calmes le matin, plus animés le soir'],
          ['Fêtes de l\'Aïd', 'Toute météo', 'Très fréquenté localement', 'Prix riads plus élevés — réservez longtemps à l\'avance'],
        ],
      },
    },
    {
      heading: 'Marrakech et la Coupe du Monde 2030',
      paragraphs: [
        'Marrakech est l\'une des six villes marocaines sélectionnées pour accueillir des matchs de la Coupe du Monde FIFA 2030. Le Grand Stade de Marrakech (capacité ~46 000 après rénovation) est actuellement fermé pour rénovation complète — la piste d\'athlétisme est supprimée, les tribunes sont rapprochées du terrain, et l\'ensemble est mis aux normes FIFA 2030.',
        'La rénovation devrait être achevée en 2028–2029. Pour les voyageurs visitant Marrakech avant la Coupe du Monde, la ville investit massivement dans les infrastructures — routes, hôtels et espaces publics. La période 2026–2029 est optimale pour visiter Marrakech avant les foules et l\'inflation des prix du tournoi.',
      ],
      callout: {
        label: '🏆 Planifiez Votre Voyage Coupe du Monde 2030 à Marrakech',
        body: 'MoroccoForYou Cars à l\'aéroport CMN gère les road trips multi-villes entre les 6 villes marocaines hôtes. L\'autoroute A7 relie Casablanca à Marrakech (2h30) et Agadir (5h au total). Réservez votre location voiture pour 2030 le plus tôt possible. +212 634 276 534',
      },
    },
    {
      heading: 'Conseils Voyage Marrakech — Ce Que Personne ne Vous Dit',
      paragraphs: [
        'Dix choses que nos clients auraient aimé savoir avant d\'arriver, basées sur des centaines de road trips Marrakech depuis Casablanca.',
      ],
      list: [
        'La médina est intentionnellement désorientante — se perdre fait partie de l\'expérience. Téléchargez maps.me en mode hors ligne avant d\'arriver.',
        'Arnaque photo : toute personne qui se positionne entre vous et un monument pour une photo demandera de l\'argent. Payez MAD 10–20 ou refusez avant qu\'ils bougent.',
        'Arnaque henné : les femmes qui vous proposent "un peu de henné gratuit" exigeront MAD 200+ une fois terminé. Convenez d\'un prix avant d\'accepter quoi que ce soit.',
        'Faux guides : les hommes qui approchent en disant "le palais est fermé aujourd\'hui, je connais un autre chemin" ne disent jamais la vérité. Les palais sont ouverts. Passez votre chemin.',
        'Taxi à Marrakech : les petits taxis (rouges) doivent utiliser le compteur. Insistez toujours ("compteur s\'il vous plaît"). Tarif approximatif médina → Guéliz : MAD 30–50.',
        'La meilleure expérience hammam n\'est pas celle recommandée par votre riad (ils touchent une commission). Demandez des recommandations locales — Hammam Dar el-Bacha est l\'un des plus beaux traditionnels (MAD 100–150).',
        'Ruelle Mechoui pour le déjeuner — faites la queue avant 11h30. À 13h, les meilleures pièces sont parties. Commandez au poids en pointant ce que vous voulez.',
        'Jardin Majorelle : réservez en ligne la veille. Les files en haute saison peuvent atteindre 45 à 60 minutes.',
        'La médina la nuit est sûre et complètement différente de la journée — la pression des vendeurs chute dramatiquement après la tombée de la nuit. La meilleure heure pour les souks : 19h–21h.',
        'Marrakech en été (juillet–août) nécessite un riad avec piscine ou climatisation. Ne réservez pas un riad avec "ventilation naturelle" en été — les températures atteignent 40°C+.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Combien de jours faut-il à Marrakech ?',
      answer: '3 nuits minimum. Jour 1 : médina, Jemaa el-Fnaa, orientation. Jour 2 : souks, Palais de la Bahia, Medersa Ben Youssef, Jardin Majorelle. Jour 3 : Tombeaux Saadiens, Mellah, déjeuner en terrasse, soirée sur la place. Jour 4+ : excursions (Atlas, Agafay, Essaouira). Les visiteurs qui restent seulement 2 jours regrettent presque toujours de ne pas être restés plus longtemps.',
    },
    {
      question: 'Marrakech est-elle sûre pour les touristes ?',
      answer: 'Oui — Marrakech est généralement sûre. La criminalité violente contre les touristes est très rare. Les principaux problèmes sont les arnaques et la pression persistante des vendeurs dans la médina, gérables avec de la préparation. Les voyageuses seules signalent des niveaux de harcèlement plus élevés à Marrakech que dans d\'autres villes marocaines — voyager en groupe, s\'habiller modestement et adopter un langage corporel assuré réduit significativement ce phénomène.',
    },
    {
      question: 'Quelle est la meilleure période pour visiter Marrakech ?',
      answer: 'Mars–Mai et septembre–octobre sont les meilleurs mois : températures 20–30°C, ciel dégagé et foules gérables. Juin–août est extrêmement chaud (35–45°C) et déconseillé pour les visites de la médina. Novembre–février est frais et calme — excellent pour les visites mais apportez des couches pour les soirées.',
    },
    {
      question: 'Comment aller de Casablanca à Marrakech ?',
      answer: 'En voiture de location : 240 km sur l\'autoroute A7, 2h30 de trajet, MAD 78 de péage. En train : 3 heures depuis Casa Voyageurs, MAD 95 en 2e classe. En bus CTM : 3h30, MAD 100–120. Louer une voiture à l\'aéroport de Casablanca (CMN) et conduire jusqu\'à Marrakech est l\'option la plus populaire pour les voyageurs qui prévoient des excursions depuis Marrakech.',
    },
    {
      question: 'Faut-il visiter Marrakech ou Fès ?',
      answer: 'Les deux si possible — ce sont des villes très différentes. Marrakech est théâtrale, intense et photogénique avec d\'excellentes excursions. Fès est plus calme, plus ancienne, et offre une immersion culturelle plus profonde avec la meilleure ville médiévale préservée au monde. Pour un premier voyage avec peu de temps : Marrakech d\'abord (plus accessible, plus d\'anglais parlé, meilleures options d\'excursion). Pour les visiteurs réguliers : Fès pour un Maroc plus profond.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Marrakech vaut-il le détour en 2026 ?', answer: 'Oui — Marrakech reste l\'une des grandes destinations de voyage mondiales en 2026. La médina UNESCO, Jemaa el-Fnaa, les souks, le Jardin Majorelle et l\'accès à l\'Atlas sont inchangés. La ville investit massivement avant la Coupe du Monde 2030. Donnez-lui 3+ nuits et abordez-la avec des attentes réalistes sur la pression des vendeurs dans la médina.' },
    { question: 'Pour quoi Marrakech est-elle célèbre ?', answer: 'Marrakech est célèbre pour Jemaa el-Fnaa (Patrimoine Culturel Immatériel UNESCO), sa vaste médina médiévale (Patrimoine Mondial UNESCO), le Jardin Majorelle et le lien avec Yves Saint Laurent, les souks, les riads traditionnels, la mosquée Koutoubia et son accès aux excursions Atlas et Sahara. C\'est la ville la plus visitée du Maroc.' },
    { question: 'Quelle est la distance entre Marrakech et Casablanca ?', answer: 'Marrakech est à 240 km de Casablanca sur l\'autoroute A7 — environ 2h30 à 3h de trajet. Le péage est de MAD 78 (7€). Louer une voiture à l\'aéroport de Casablanca (CMN) et conduire jusqu\'à Marrakech est l\'option la plus populaire et pratique pour la plupart des visiteurs internationaux au Maroc.' },
  ],
  relatedDestinations: ['marrakech', 'casablanca', 'fes', 'agadir'],
  relatedPosts: ['guide-gastronomique-marrakech', 'comment-aller-de-marrakech-a-chefchaouen', 'conduite-marrakech-fes', 'casablanca-agadir-en-voiture', 'guide-voyage-casablanca', 'guide-voyage-chefchaouen', 'guide-aeroport-casablanca-cmn'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر لمراكش 2026 — هل تستحق الزيارة؟ إجابة المحليين',
  metaDescription: 'دليل شامل لمراكش 2026: جامع الفنا، الأسواق، حديقة ماجوريل، أفضل الرياضات، دليل المطاعم، رحلات يوم، تحديث كأس العالم 2030 ومقارنة صادقة مع فاس وشفشاون وأكادير.',
  title: 'دليل السفر لمراكش 2026: كل ما تحتاج معرفته (من المحليين)',
  description: 'الدليل الشامل لمراكش من فريق مقيم في الدار البيضاء يدير مئات الرحلات البرية بالمغرب سنوياً. هل مراكش تستحق الزيارة في 2026؟ إجابة صادقة. أفضل الأحياء، استراتيجية الأسواق، أين يأكل المحليون فعلاً، كيف تنجو في جامع الفنا، مراكش مقابل كل مدينة مغربية أخرى، وزاوية كأس العالم 2030.',
  keyword: 'دليل السفر لمراكش',
  coverImage: COVER,
  coverAlt: 'دليل السفر لمراكش 2026 — ساحة جامع الفنا عند الغسق مع مئذنة الكتبية وجبال الأطلس',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 18,
  intro: 'مراكش هي أكثر مدن المغرب زيارةً وتصويراً — وحسب من تسأل، إما أكثرها إثارةً أو أكثرها إرهاقاً. فريقنا أرسل مئات العملاء إلى مراكش من مطار الدار البيضاء على مدى خمس سنوات. نعرف ما أحبوه، وما أربكهم، وما كانوا يتمنون أن ينبههم إليه أحد، وما تخطئه معظم أدلة السفر. هذا هو دليل مراكش الذي نعطيه لعملائنا قبل انطلاقهم على الطريق السريع A7.',
  sections: [
    {
      heading: 'هل مراكش تستحق الزيارة في 2026؟ الإجابة الصادقة من المحليين',
      paragraphs: [
        'نعم — لكن مع توقعات واضحة. مراكش واحدة من أكثر المدن حدةً للحواس على وجه الأرض: مدينة عتيقة مدرجة في اليونسكو تتصادم فيها ألف سنة من التاريخ مع سياحة القرن الحادي والعشرين، حيث يتنافس الأذان مع حاوي الأفاعي، وحيث أكثر ساحات العامة مسرحيةً في العالم تعمل بفوضى تنجح رغم كل شيء. إنها استثنائية. وهي أيضاً، أحياناً، مُرهقة.',
        'المسافرون الذين يحبون مراكش هم أولئك الذين يتعاملون معها وفق شروطها الخاصة: يتباطؤون في الأسواق، يقبلون أن الضياع هو الهدف، يأكلون حيث يأكل المحليون، ويفهمون أن ضغط البائعين الذي سيواجهونه جزء من ثقافة تجارية عريقة وليس هجوماً شخصياً.',
        'المسافرون الذين يغادرون خائبين هم عادةً أولئك الذين توقعوا نسخة معقمة ومنسقة من المغرب. جامع الفنا منتصف الليل مشهد استثنائي. نفس الساحة الساعة الثانية ظهراً في أغسطس مع 50 مجموعة سياحية، شيء آخر تماماً. مراكش تكافئ التحضير. هذا الدليل هو ذلك التحضير.',
      ],
      callout: {
        label: '🇲🇦 حكم محلي',
        body: 'هل مراكش تستحق؟ بالتأكيد — لكن أعطها 3 ليالٍ على الأقل، ليس يومين. اليوم الأول تشعر بالإرباك. اليوم الثاني تبدأ بالفهم. اليوم الثالث تنكشف مراكش. الزوار الذين يغادرون بعد يومين يقولون تقريباً دائماً: "كنت أتمنى البقاء أطول."',
      },
    },
    {
      heading: 'مراكش بالأرقام — المعلومات الأساسية 2026',
      paragraphs: [
        'كل ما تحتاج معرفته قبل الوصول — الحقائق العملية التي تدفنها معظم الأدلة في الفقرة الخامسة عشرة.',
      ],
      table: {
        caption: 'المعلومات الأساسية عن مراكش 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['الاسم الرسمي', 'مراكش (Marrakech)'],
          ['اللقب', '"المدينة الحمراء" (الأسوار والمباني من الحجر الرملي الأحمر المحلي)'],
          ['السكان', '~مليون في المدينة، ~4 ملايين في المنطقة الكبرى'],
          ['الموقع', 'سفوح جبال الأطلس الكبير، 240 كم جنوب الدار البيضاء'],
          ['المطار', 'مطار مراكش المنارة (RAK) — 6 كم من المدينة العتيقة'],
          ['أقرب مطار رئيسي', 'CMN الدار البيضاء — 240 كم، 2:30 ساعة بالطريق السريع'],
          ['العملة', 'الدرهم المغربي (MAD) — 1 يورو ≈ 10.8 درهم (2026)'],
          ['أفضل وقت للزيارة', 'مارس–مايو وسبتمبر–نوفمبر'],
          ['المدة الموصى بها', '3 ليالٍ على الأقل — 4–5 للرحلات اليومية'],
          ['كأس العالم 2030', 'مراكش مدينة مضيفة — الملعب قيد التجديد (مغلق حتى 2029)'],
          ['تأجير سيارة من CMN', 'من 250 درهم/يوم (23€) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'المدينة العتيقة لمراكش — كيف تتنقل فيها',
      paragraphs: [
        'المدينة العتيقة لمراكش موقع تراث عالمي يونسكو وواحدة من أكبر المناطق الحضرية الخالية من السيارات في العالم. كما أنها مُربكة عن قصد — الدروب (الأزقة الضيقة) صُممت لإرباك الغزاة، وتؤدي نفس الوظيفة بكفاءة مع السياح.',
        'المدينة مقسمة إلى أربعة أرباع تقريباً. ساحة جامع الفنا هي نقطة التوجه — إذا ضللت الطريق، اسأل أي محلي عن "la place" وسيدلك إليها.',
        'الأسواق منظمة حسب الحرفة — نظام قروسطي لا يزال قائماً. الصباغون قرب المدابغ، بائعو التوابل في سوق التوابل، الجلادون قرب شوارة، النجارون قرب مدرسة بن يوسف. المشي مع هذه الخريطة في الذهن يحول الفوضى الظاهرة إلى مدينة منطقية.',
      ],
      callout: {
        label: '💡 نصائح داخلية للتنقل في المدينة',
        body: 'حمّل maps.me قبل الوصول — يعمل دون إنترنت ولديه المدينة العتيقة لمراكش مرسومة بمستوى الدروب. لا تتبع أحداً يعرض "إرشادك للطريق" دون الاتفاق مسبقاً على أتعاب مرشد. الضياع الحقيقي وإيجاد طريقك بنفسك من أفضل تجارب مراكش — لكن خصص 30–60 دقيقة له.',
      },
    },
    {
      heading: 'جامع الفنا — أكثر الساحات مسرحيةً في العالم',
      paragraphs: [
        'جامع الفنا هو قلب مراكش النابض وأحد أكثر الفضاءات العامة استثنائيةً على وجه الأرض. اعترفت اليونسكو به ليس كنصب تذكاري بل كـ"تراث ثقافي غير مادي" — معترفةً بأن ما يجعله خاصاً ليس ما بُني هناك بل ما يحدث هناك يومياً: حاوو الأفاعي والبهلوانون والحكواتية وفنانو الحناء وبائعو عصير البرتقال وموسيقيو الغناوة وأكشاك الطعام.',
        'تعمل الساحة وفق إيقاع. الصباح: هادئ، محليون وبائعو عصير. بعد الظهر: مجموعات سياحية، حرارة، فوضى مضبوطة. الغروب: يبدأ التحول — تظهر الأكشاك، يصل الموسيقيون، يتكثف الحشد. بعد التاسعة مساءً: تصل الساحة لذروة كثافتها المسرحية.',
      ],
      callout: {
        label: '🎭 قواعد داخلية لجامع الفنا',
        body: 'إذا صورت حاوي أفاعي أو موسيقيين أو فنانين، ستُطلب منك أموال — هذا عادل ومتوقع. اتفق على سعر قبل التصوير أو كن مستعداً لدفع MAD 10–20 بعده. عصير البرتقال في الساحة: MAD 4–5 (اعصره دائماً بنفسك لتجنب إضافة السكر). أكشاك الطعام ليلاً: الأكشاك 1–15 أكثر سياحيةً؛ الأكشاك في العمق لديها طعام أفضل بأسعار أقل.',
      },
    },
    {
      heading: 'أفضل الأشياء للقيام بها في مراكش',
      paragraphs: [
        'ما وراء جامع الفنا، مراكش لها عمق أكبر مما يكتشفه معظم الزوار في 48 ساعة.',
      ],
      table: {
        caption: 'أفضل الأشياء للقيام بها في مراكش 2026',
        headers: ['المعلم', 'المنطقة', 'الوقت المطلوب', 'السعر', 'نصيحة محلية'],
        rows: [
          ['جامع الفنا', 'وسط المدينة العتيقة', 'المساء — ساعتان+', 'مجاني للدخول', 'اذهب الساعة 9 مساءً للأجواء القصوى'],
          ['حديقة ماجوريل + متحف YSL', 'الكيلياز', '1:30–2 ساعة', 'MAD 150–200', 'احجز عبر الإنترنت — طوابير بدونه. الأفضل صباحاً مبكراً.'],
          ['قصر الباهية', 'جنوب المدينة', 'ساعة', 'MAD 70', 'أحد أجمل قصور القرن التاسع عشر في المغرب'],
          ['أضرحة السعديين', 'جنوب المدينة', '45 دقيقة', 'MAD 70', 'احجز الدخول المحدد الوقت — الحشود شديدة 10–14'],
          ['مدرسة بن يوسف', 'شمال المدينة', 'ساعة', 'MAD 70', 'أجمل عمارة إسلامية في مراكش — اذهب مبكراً'],
          ['أطلال قصر البديع', 'جنوب المدينة', 'ساعة', 'MAD 70', 'أطلال ذات أجواء — الأفضل في ضوء آخر النهار'],
          ['الملاح (الحي اليهودي)', 'جنوب المدينة', 'ساعة', 'مجاني', 'أصيل وخالٍ من السياح تقريباً — مراكش الحقيقية'],
          ['رحبة القدماء (ساحة التوابل)', 'أسواق المدينة', '30 دقيقة', 'مجاني', 'اشترِ توابلك هنا — جودة وأصالة أفضل من محلات السياح'],
          ['حدائق الكتبية', 'قرب جامع الفنا', '30 دقيقة', 'مجاني (الحدائق)', 'رائعة عند الغروب — غير المسلمين لا يدخلون المسجد'],
          ['الحديقة السرية', 'شمال المدينة', 'ساعة', 'MAD 50', 'مُقلَّلة من قيمتها — حديقة رياض مُرممة من القرن 16'],
          ['صحراء أكفاي', '40 كم', 'نصف يوم لكامل', 'MAD 400–1,200 (جولات)', 'صحراء صخرية — مختلفة عن الصحراء الكبرى لكن أقرب وجميلة بالقدر ذاته'],
          ['رحلة يومية للأطلس', '60–90 كم', 'يوم كامل', 'MAD 200–400 (نقل)', 'استأجر سيارة من CMN — وسائل النقل العام بطيئة'],
        ],
      },
    },
    {
      heading: 'أسواق مراكش — الدليل العملي',
      paragraphs: [
        'أسواق مراكش واحدة من أكثر تجارب التسوق حدةً على وجه الأرض — ومن أكثرها مكافأةً إذا اقتربت منها بالطريقة الصحيحة. مفتاح النجاة من الأسواق والاستمتاع بها هو فهم أن كل شيء قابل للتفاوض، وأن السعر الأول هو دائماً عرض الافتتاح، وأن العرض المضاد المناسب هو حوالي 40–50% مما يُقتبس منك أولاً.',
      ],
      table: {
        caption: 'دليل أسواق مراكش — ماذا تشتري وأين 2026',
        headers: ['المنتج', 'أفضل سوق', 'نطاق السعر العادل', 'نصيحة'],
        rows: [
          ['بلغة (شبشب جلدي)', 'سوق البلغة', 'MAD 80–150 (7–14€)', 'جلد حقيقي مقابل صناعي — الجلد له رائحة مميزة'],
          ['زيت الأرغان (غذائي)', 'سوق التوابل / رحبة القدماء', 'MAD 150–250/250مل (14–23€)', 'اشترِ من تعاونية نسائية لضمان الأصالة'],
          ['زيت الأرغان (تجميلي)', 'نفسه', 'MAD 100–180/100مل (9–17€)', 'اختبار: التجميلي ذهبي، الغذائي أغمق'],
          ['بطانية صوفية (هنديرة)', 'شمال المدينة', 'MAD 400–800 (37–74€)', 'آلي مقابل منسوج يدوياً — اليدوي أثقل وغير منتظم'],
          ['طاجين خزفي', 'سوق الفخار (جنوب)', 'MAD 150–400 (14–37€)', 'الخزف الخالي من الرصاص مُحدَّد — اسأل خصيصاً'],
          ['مجوهرات فضية', 'سوق السمارين', 'MAD 100–500 (9–46€)', 'الفضة الحقيقية لها ختم 925 أو 800 — تحقق قبل الشراء'],
          ['حقيبة جلدية', 'سوق الشرارتين', 'MAD 200–600 (18–55€)', 'الجلد الكامل أصلب من الجلد المُركَّب'],
          ['توابل (كمون، رأس الحانوت، زعفران)', 'رحبة القدماء', 'MAD 20–80 لـ100غ (1.85–7.40€)', 'غش الزعفران شائع — الزعفران الحقيقي MAD 150+/غرام'],
        ],
      },
      callout: {
        label: '🛍️ استراتيجية الأسواق: قاعدة المرور الثلاث',
        body: 'تجول في الأسواق مرة دون شراء (لاحظ المنتجات والأسعار). مرر مرة ثانية وتفاوض — اعرض 40–50% من السعر الأول. أتمم مشترياتك في المرور الثالث إن لزم. لا تشترِ أبداً بالسعر الأول في المرور الأول. لا تشعر بأنك ملزم بالشراء لأنك دخلت متجراً — قول "شكراً، لا" (شكراً، لا) مقبول تماماً.',
      },
    },
    {
      heading: 'أين تقيم في مراكش — الرياض مقابل الفندق',
      paragraphs: [
        'مراكش ابتكرت مفهوم فندق الرياض — منزل مغربي تقليدي مبني حول فناء مركزي، محوَّل إلى نزل فاخر صغير. الإقامة في رياض داخل المدينة العتيقة هي التجربة الجوهرية لمراكش ويجب أن تكون الاختيار الافتراضي للزوار للمرة الأولى.',
      ],
      table: {
        caption: 'أين تقيم في مراكش — الخيارات حسب النوع والميزانية 2026',
        headers: ['المنطقة', 'الأجواء', 'الأنسب لـ', 'نطاق السعر/ليلة'],
        rows: [
          ['المدينة (رياض مركزي)', 'أصيل، ذو أجواء، غامر', 'الزوار للمرة الأولى، الأزواج، التجربة الثقافية', 'MAD 400–2,500 (37–230€)'],
          ['المدينة (رياض اقتصادي)', 'بسيط لكن ساحر، سطح بإطلالة', 'مسافرو المنفرد، الميزانية', 'MAD 150–400 (14–37€)'],
          ['الكيلياز (المدينة الجديدة)', 'حديث، مطاعم، أقل فوضى', 'الزوار المتكررون، الأعمال', 'MAD 300–1,500 (28–139€)'],
          ['الحيرناج', 'فنادق فاخرة، مسابح، هادئ', 'العائلات، الباحثون عن الرفاهية', 'MAD 800–5,000+ (74–460€+)'],
          ['المحمدية (غابة النخيل)', 'منتجع، مساحة، طبيعة', 'شهر العسل، العائلات', 'MAD 1,200–8,000 (111–740€)'],
        ],
      },
    },
    {
      heading: 'ماذا تأكل في مراكش — أين يأكل المحليون فعلاً',
      paragraphs: [
        'مراكش لديها مشهدان طهوييان يعملان بالتوازي: دائرة المطاعم السياحية والثقافة الغذائية المراكشية الحقيقية. كلاهما صالح. لكن إذا اخترت فئة واحدة، اختر الثانية.',
      ],
      table: {
        caption: 'ماذا تأكل في مراكش — الدليل المحلي 2026',
        headers: ['الطبق', 'أين تجده', 'السعر', 'ملاحظات'],
        rows: [
          ['طاجين الضأن بالبرقوق واللوز', 'مطاعم المدينة، الرياضات', 'MAD 80–150', 'الطاجين المراكشي النموذجي — يُطهى ببطء 4+ ساعات'],
          ['كسكس (تخصص الجمعة)', 'مطاعم محلية، الجمعة فقط', 'MAD 40–80', 'وجبة الجمعة التقليدية — سبعة خضار فوقه'],
          ['مسمن (خبز مربع مورق)', 'أكشاك الشوارع، الصباح', 'MAD 3–5', 'خبز فطور مورق — كُله مع العسل وزيت الأرغان'],
          ['حريرة (حساء)', 'في كل مكان، أكشاك الشوارع', 'MAD 5–10', 'الحساء الوطني المغربي — طماطم وعدس وحمص'],
          ['مرقاز (سجق حار)', 'أكشاك ليل جامع الفنا', 'MAD 30–50', 'مشوي في اللحظة — اطلب بالإشارة'],
          ['بستيلة (فطيرة الحمام)', 'مطاعم تقليدية', 'MAD 60–120', 'معجنات حلوة مالحة — أحد أعظم أطباق المغرب'],
          ['مشوي (ضأن مشوي ببطء)', 'زقاق المشوي، المدينة', 'MAD 60–100/حصة', 'ضأن كامل مشوي في أفران أرضية — قف في الطابور قبل الظهر'],
          ['عصير البرتقال الطازج', 'جامع الفنا، في كل مكان', 'MAD 4–5', 'أفضل قيمة في العالم — اعصره بنفسك عند الكشك'],
          ['شاي بالنعناع', 'كل مقهى', 'MAD 10–20', 'اطلب "بلا سكر" إذا فضلت — ثم أضف بنفسك'],
        ],
      },
    },
    {
      heading: 'مراكش مقابل المدن المغربية الأخرى — المقارنة الصادقة',
      paragraphs: [
        'السؤال الأكثر شيوعاً من عملائنا: "أي مدينة مغربية يجب أن أولويها؟" إليك إجابتنا الصادقة — مدينةً بمدينة.',
      ],
      table: {
        caption: 'مراكش مقابل المدن المغربية الأخرى — أيها تزور؟',
        headers: ['المدينة', 'الأفضل لـ', 'مختلفة عن مراكش لأن...', 'زرها إذا...'],
        rows: [
          ['فاس', 'العمق القروسطي، الحرف، المدينة العتيقة الأصيلة', 'أقدم، أهدأ، أكثر انطواءً — أفضل مدينة قروسطية محفوظة في العالم', 'تريد سياحاً أقل، تاريخاً أكثر، انغماساً ثقافياً أعمق'],
          ['شفشاون', 'التصوير، الأجواء الجبلية، الاسترخاء', 'المدينة الزرقاء في جبال الريف — جماليات وإيقاع مختلفان كلياً', 'تريد صوراً جميلة، وتيرة هادئة، هواء جبلي ودرجات أبرد'],
          ['الدار البيضاء', 'المغرب الحديث، الحياة الليلية، الساحل الأطلسي', 'العاصمة الاقتصادية — بوليفارات حديثة، لا مدينة عتيقة تقليدية', 'تريد المغرب العالمي، مطاعم رائعة، شاطئ ومسجد الحسن الثاني'],
          ['أكادير', 'عطلة شاطئية، منتجع، ركوب الأمواج', 'منتجع شاطئي حديث — أُعيد بناؤه بعد زلزال 1960، لا مدينة عتيقة تاريخية', 'تريد عطلة شاطئية إلى جانب تجربتك الثقافية المغربية'],
          ['الصويرة', 'الأجواء الساحلية، الرياح، الاسترخاء', 'ميناء أطلسي — متراخٍ، موسيقى الغناوة، رياح قوية، مأكولات بحرية ممتازة', 'تريد الاسترخاء بعد حدة مراكش (استراحة مثالية ليومين)'],
          ['الصحراء/مرزوقة', 'تجربة الصحراء، الجمال، مراقبة النجوم', 'ليست مدينة — وجهة طبيعية تتطلب 2+ أيام', 'لديك 8+ أيام وتريد رحلة مغرب برية كاملة'],
          ['الرباط', 'العاصمة، الأطلال الرومانية، مدينة عتيقة أهدأ', 'العاصمة الإدارية — طابع أكثر أوروبية، متاحف ممتازة', 'تريد المغرب بدون الضغط السياحي لمراكش أو فاس'],
        ],
      },
      callout: {
        label: '🗺️ توصيتنا للرحلة البرية',
        body: 'أفضل رحلة مغرب أولى (7–10 أيام): مطار الدار البيضاء (CMN) ← مراكش (3 ليالٍ) ← الصويرة (ليلة) ← العودة لمراكش ← رحلة أطلس ← الدار البيضاء. أو حلقة الشمال: CMN ← الرباط ← طنجة ← شفشاون ← فاس ← CMN. استأجر سيارة من CMN — الطريق بين المدن نصف التجربة. من 250 درهم/يوم (23€): +212 634 276 534',
      },
    },
    {
      heading: 'رحلات يوم من مراكش — لماذا تحتاج سيارة',
      paragraphs: [
        'موقع مراكش عند سفوح جبال الأطلس الكبير يجعلها من أفضل قواعد الرحلات اليومية في المغرب. تنوع المناظر الطبيعية الذي يمكن الوصول إليه في يوم واحد استثنائي: من الساحل الأطلسي (الصويرة، 2.5 ساعة) إلى القرية الجبلية (إيملشيل، 1.5 ساعة) إلى الصحراء الصخرية (أكفاي، 45 دقيقة) إلى الشلالات (أوزود، 3 ساعات).',
      ],
      table: {
        caption: 'أفضل الرحلات اليومية من مراكش 2026',
        headers: ['الوجهة', 'المسافة', 'وقت القيادة', 'لماذا تذهب', 'سيارة مطلوبة؟'],
        rows: [
          ['صحراء أكفاي', '40 كم', '45 دقيقة', 'صحراء صخرية، دراجات رباعية، تخييم فاخر', 'نعم — ضرورية'],
          ['إيملشيل والأطلس', '60 كم', '1:15 ساعة', 'قرية أمازيغية، مشي، المنتزه الوطني توبقال', 'نعم — طرق جبلية'],
          ['شلالات أوزود', '170 كم', '2:45 ساعة', 'أجمل شلالات المغرب، سباحة، قردة البربر', 'نعم — الأكثر مرونة'],
          ['الصويرة', '190 كم', '2:30 ساعة', 'ميناء أطلسي، قوارب زرقاء، موسيقى الغناوة، مأكولات بحرية', 'نعم أو حافلة (3:30)'],
          ['أيت بن حدو', '200 كم', '3 ساعات', 'قصبة يونسكو، صُور فيها Game of Thrones وGladiator', 'نعم — ادمجه مع ورززات'],
          ['ورززات', '210 كم', '3:15 ساعة', '"هوليوود أفريقيا" — أستوديوهات الأطلس، قصبة تاوريرت', 'نعم — ادمجه مع أيت بن حدو'],
          ['الدار البيضاء', '240 كم', '2:30 ساعة', 'مسجد الحسن الثاني، الكورنيش، أفضل مطاعم المغرب', 'نعم أو قطار (3 ساعات)'],
        ],
      },
      callout: {
        label: '🚗 استأجر من CMN، قُد إلى مراكش',
        body: 'استلام في مطار الدار البيضاء (CMN)، قيادة لمراكش (2:30، MAD 78 رسوم)، استخدم السيارة للرحلات اليومية، عودة لـCMN في النهاية. اقتصادية من 250 درهم/يوم (23€)، داشيا دوستر 4x4 من 350 درهم/يوم (32€) للأطلس والصحراء. +212 634 276 534',
      },
    },
    {
      heading: 'أفضل وقت لزيارة مراكش',
      paragraphs: [
        'موقع مراكش على حافة الصحراء يمنحها أحد أكثر مناخات المغرب تطرفاً — صيف لاهب وليالٍ شتوية باردة، مع نافذتين مثاليتين في الربيع والخريف.',
      ],
      table: {
        caption: 'أفضل وقت لزيارة مراكش — شهراً بشهر 2026',
        headers: ['الفترة', 'درجة الحرارة', 'الازدحام', 'الحكم'],
        rows: [
          ['مارس–مايو', '20–28°م، مشمس، أمطار أحياناً', 'متوسط — متصاعد', '⭐ أفضل موسم — طقس مثالي، أكفاي يزهر، ازدحام مقبول'],
          ['يونيو–أغسطس', '35–45°م في الذروة، جاف جداً', 'عالٍ (سياح دوليون)', 'حر شديد للزيارة 11–16 — مسبح وراحة في الرياض'],
          ['سبتمبر–أكتوبر', '25–32°م، ممتاز', 'متوسط — متناقص', '⭐ ثاني أفضل موسم — دافئ، هدوء ما بعد الصيف، ضوء ذهبي'],
          ['نوفمبر–فبراير', '15–20°م نهاراً، 5–10°م ليلاً', 'منخفض (موسم الميزانية)', 'جيد للزيارات — أحضر طبقات للمساء، ثلج محتمل على الأطلس'],
          ['رمضان (متغير)', 'أي طقس', 'أجواء احتفال محلي', 'مطاعم مغلقة نهاراً — أسواق أهدأ صباحاً، أكثر حيوية مساءً'],
          ['أعياد العيد', 'أي طقس', 'مزدحم محلياً جداً', 'أسعار رياضات أعلى — احجز مبكراً جداً'],
        ],
      },
    },
    {
      heading: 'مراكش وكأس العالم 2030',
      paragraphs: [
        'مراكش واحدة من ست مدن مغربية مختارة لاستضافة مباريات كأس العالم FIFA 2030. الملعب الكبير لمراكش (طاقة ~46,000 بعد التجديد) مغلق حالياً للتجديد الكامل — تُزال مضمار الألعاب الرياضية، وتُقرَّب المدرجات من الملعب، ويُحدَّث كل شيء وفق معايير FIFA 2030.',
        'من المتوقع اكتمال التجديد بحلول 2028–2029. للمسافرين الزائرين لمراكش قبل كأس العالم، المدينة تستثمر بكثافة في البنية التحتية. الفترة 2026–2029 مثالية لزيارة مراكش قبل حشود كأس العالم وتضخم الأسعار.',
      ],
      callout: {
        label: '🏆 خطط لرحلتك لكأس العالم 2030 في مراكش',
        body: 'MoroccoForYou Cars في مطار CMN تدير رحلات برية متعددة المدن بين المدن المغربية الست المضيفة. الطريق السريع A7 يربط الدار البيضاء بمراكش (2:30) وأكادير (5 ساعات إجمالاً). احجز سيارتك لـ2030 في أقرب وقت ممكن. +212 634 276 534',
      },
    },
    {
      heading: 'نصائح سفر مراكش — ما لا يخبرك به أحد',
      paragraphs: [
        'عشرة أشياء تمنى عملاؤنا معرفتها قبل الوصول، بناءً على مئات رحلات مراكش من الدار البيضاء.',
      ],
      list: [
        'المدينة العتيقة مُربكة عن قصد — الضياع جزء من التجربة لا فشل فيه. حمّل maps.me دون إنترنت قبل الوصول.',
        'نصب التصوير: أي شخص يضع نفسه بينك وبين معلم لالتقاط صورة سيطلب أموالاً. هذا طبيعي — ادفع MAD 10–20 أو ارفض قبل أن يتحرك.',
        'نصب الحناء: النساء اللواتي يقتربن لـ"رسم قليل من الحناء مجاناً" ستطلبن MAD 200+ عند الانتهاء. لا شيء مجاني في المدينة — اتفق على سعر قبل القبول بأي شيء.',
        'مرشدون مزيفون: الرجال الذين يقتربون قائلين "القصر مغلق اليوم، أعرف طريقاً آخر" لا يقولون الحقيقة أبداً. القصور مفتوحة. ابتعد.',
        'التاكسي في مراكش: التاكسيات الصغيرة (الحمراء) يجب أن تستخدم العداد. أصر دائماً على العداد ("compteur s\'il vous plaît"). إذا رُفض، خذ تاكسياً آخر.',
        'أفضل تجربة حمام ليست التي يوصي بها رياضك (يحصلون على عمولة). اطلب توصيات محلية — حمام دار الباشا من أجمل الحمامات التقليدية في مراكش (MAD 100–150).',
        'زقاق المشوي للغداء — قف في الطابور قبل الحادية عشرة والنصف. بحلول الواحدة، أفضل القطع تكون قد نفدت. اطلب بالوزن وأشر لما تريد.',
        'حديقة ماجوريل: احجز عبر الإنترنت قبل يوم. الطوابير بالمشي في الموسم العالي قد تصل 45–60 دقيقة.',
        'المدينة ليلاً آمنة ومختلفة كلياً عن النهار — ضغط البائعين ينخفض بشكل كبير بعد الغروب. أفضل وقت لتجول الأسواق: 19–21.',
        'مراكش في الصيف (يوليو–أغسطس) تتطلب رياضاً بمسبح أو تكييف. لا تحجز رياضاً بـ"تهوية طبيعية" في الصيف — الحرارة تصل 40°م+.',
      ],
    },
  ],
  faqs: [
    {
      question: 'كم يوماً تحتاج في مراكش؟',
      answer: '3 ليالٍ على الأقل. اليوم 1: المدينة، جامع الفنا، التوجه. اليوم 2: الأسواق، قصر الباهية، مدرسة بن يوسف، حديقة ماجوريل. اليوم 3: أضرحة السعديين، الملاح، غداء على السطح، مساء في الساحة. اليوم 4+: رحلات يومية (الأطلس، أكفاي، الصويرة). الزوار الذين يمكثون يومين فقط يتمنون دائماً تقريباً البقاء أطول.',
    },
    {
      question: 'هل مراكش آمنة للسياح؟',
      answer: 'نعم — مراكش آمنة بشكل عام. الجرائم العنيفة ضد السياح نادرة جداً. المشاكل الرئيسية هي النصب وضغط البائعين المستمر في المدينة، وهي قابلة للإدارة بالتحضير. المسافرات المنفردات يبلّغن عن مستويات مضايقة أعلى في مراكش مقارنة بمدن مغربية أخرى — السفر في مجموعات والتحلي بلغة جسد واثقة يقلل هذا بشكل ملحوظ.',
    },
    {
      question: 'ما أفضل وقت لزيارة مراكش؟',
      answer: 'مارس–مايو وسبتمبر–أكتوبر أفضل الأشهر: درجات حرارة 20–30°م، سماء صافية وازدحام مقبول. يونيو–أغسطس حار للغاية (35–45°م) وغير موصى به للمشي في المدينة. نوفمبر–فبراير هادئ وجيد للزيارات — أحضر طبقات للمساء.',
    },
    {
      question: 'كيف تصل من الدار البيضاء إلى مراكش؟',
      answer: 'بسيارة إيجار: 240 كم على الطريق السريع A7، 2:30 ساعة، رسوم MAD 78. بالقطار: 3 ساعات من محطة الدار البيضاء المسافرين، MAD 95 درجة ثانية. بحافلة CTM: 3:30 ساعة، MAD 100–120. استئجار سيارة من مطار الدار البيضاء (CMN) والقيادة لمراكش هو الخيار الأشيع للمسافرين الذين يخططون لرحلات يومية من مراكش.',
    },
    {
      question: 'هل أزور مراكش أم فاس؟',
      answer: 'كلتيهما إن أمكن — إنهما مدينتان مختلفتان جداً. مراكش مسرحية وحادة وجميلة للتصوير مع رحلات يومية ممتازة. فاس أهدأ وأقدم وتوفر انغماساً ثقافياً أعمق مع أفضل مدينة قروسطية محفوظة في العالم. لأول زيارة مع وقت محدود: مراكش أولاً (أكثر وصولاً، يُتحدث الإنجليزية أكثر، خيارات رحلات يومية أفضل). للزوار المتكررين: فاس لمغرب أعمق.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل مراكش تستحق الزيارة في 2026؟', answer: 'نعم — مراكش تبقى واحدة من وجهات السفر العالمية العظيمة في 2026. المدينة العتيقة اليونسكو وجامع الفنا والأسواق وحديقة ماجوريل والوصول للأطلس كلها دون تغيير. المدينة تستثمر بكثافة قبل كأس العالم 2030. أعطها 3+ ليالٍ وتعامل معها بتوقعات واقعية حول ضغط البائعين في المدينة العتيقة.' },
    { question: 'بماذا تشتهر مراكش؟', answer: 'تشتهر مراكش بجامع الفنا (تراث ثقافي غير مادي يونسكو)، ومدينتها العتيقة القروسطية الواسعة (تراث عالمي يونسكو)، وحديقة ماجوريل والارتباط بإيف سان لوران، والأسواق، والرياضات التقليدية، ومسجد الكتبية، وموقعها كبوابة لرحلات جبال الأطلس والصحراء اليومية. إنها أكثر مدن المغرب زيارةً.' },
    { question: 'ما المسافة بين مراكش والدار البيضاء؟', answer: 'مراكش على بعد 240 كم من الدار البيضاء على الطريق السريع A7 — حوالي 2:30 إلى 3 ساعات قيادة. الرسوم MAD 78 (7€). استئجار سيارة من مطار الدار البيضاء (CMN) والقيادة لمراكش هو الخيار الأشيع والأكثر عملية لمعظم الزوار الدوليين للمغرب.' },
  ],
  relatedDestinations: ['marrakech', 'casablanca', 'fes', 'agadir'],
  relatedPosts: ['dalil-atiam-marakish', 'kayfa-nasil-min-marakish-ila-shafshawan', 'al-qiyadah-min-marakish-ila-fas', 'min-dar-al-bayda-ila-agadir-bis-sayyara', 'dalil-safar-dar-al-bayda', 'dalil-safar-shafshawan', 'dalil-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);