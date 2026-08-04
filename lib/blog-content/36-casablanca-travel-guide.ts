import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'casablanca-travel-guide';
const SLUG_FR = 'guide-voyage-casablanca';
const SLUG_AR = 'dalil-safar-dar-al-bayda';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(36467138);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Casablanca Travel Guide 2026 — Is It Worth Visiting? Local Expert Answers',
  metaDescription: 'Complete Casablanca travel guide 2026: Hassan II Mosque, Corniche, best restaurants, nightlife, day trips and car rental. Written by a Casablanca-based local team.',
  title: 'Casablanca Travel Guide 2026: Everything You Need to Know (By Locals)',
  description: 'The complete Casablanca travel guide written by our Casablanca-based team — not a travel blogger passing through for 48 hours. Hassan II Mosque insider tips, the neighborhoods most guides skip, honest answer to "is Casablanca worth visiting," and the car rental advice that makes every day trip actually work.',
  keyword: 'casablanca travel guide',
  coverImage: COVER,
  coverAlt: 'Casablanca Morocco travel guide — Hassan II Mosque at sunset over the Atlantic Ocean',
  publishedISO: '2026-08-04',
  author: 'Omar L. — Casablanca Local & Car Rental Specialist',
  readingMinutes: 15,
  intro: 'Most Casablanca travel guides are written by bloggers who spent 36 hours here on the way to Marrakech. We live here. Our team has operated from Casablanca Mohammed V Airport since 2019, and we handle hundreds of Morocco road trips per year — which means we know what visitors actually find when they arrive, what they miss, what surprises them, and what they wish someone had told them before landing. This is the guide we give our own clients before they start their Morocco trip. Honest, local, and built around what actually works in 2026.',
  sections: [
    {
      heading: 'Is Casablanca Worth Visiting? The Honest Local Answer',
      paragraphs: [
        'Yes — but not for the reasons most travel guides say. Casablanca is not Marrakech. It has no dramatic medina maze, no Jemaa el-Fnaa square, no carpet souk. What it has is something rarer in Morocco: a living, working, modern city that happens to contain one of the most extraordinary buildings on earth, a world-class beachfront promenade, and a restaurant scene that outclasses every other Moroccan city.',
        'The travelers who love Casablanca are those who come with the right expectations: this is Morocco\'s Barcelona, not Morocco\'s Marrakech. Wide boulevards lined with art deco buildings, rooftop bars with Atlantic views, beach clubs, a nightlife scene that runs until 4am, and a cosmopolitan energy you find nowhere else in the country. The travelers who leave disappointed expected souks and camels and got a modern metropolis instead.',
        'Our honest verdict: Casablanca deserves 1–2 days on any Morocco itinerary, not as a stopover but as a destination in its own right. The Hassan II Mosque alone is worth the stop — it is the single most impressive building we have ever seen in Morocco, and we have seen all of them. Pair it with a Corniche sunset and dinner at a proper Casablanca seafood restaurant, and you have an experience that no other Moroccan city can replicate.',
      ],
      callout: {
        label: '🇲🇦 Local Verdict',
        body: 'If someone asks us "should I skip Casablanca?" we always say the same thing: skip it and you miss the Hassan II Mosque, the best seafood in Morocco, and the only Moroccan city where you can watch the sunset over the Atlantic from a rooftop bar. That\'s your call.',
      },
    },
    {
      heading: 'Quick Facts: Casablanca at a Glance',
      paragraphs: [
        'Everything you need to know before arrival — the practical facts that most travel guides bury in paragraph 12.',
      ],
      table: {
        caption: 'Casablanca essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Official name', 'Casablanca (Dar al-Bayda in Arabic — "The White House")'],
          ['Population', '~4.3 million (largest city in Morocco)'],
          ['Airport', 'Mohammed V International Airport (CMN) — 35 km from city centre'],
          ['Currency', 'Moroccan Dirham (MAD) — 1 EUR ≈ 10.8 MAD (2026)'],
          ['Language', 'Arabic (official), Darija (Moroccan dialect), French (business), English in tourist areas'],
          ['Time zone', 'GMT+1 (no daylight saving)'],
          ['Best time to visit', 'March–May and September–November (mild weather, fewer crowds)'],
          ['How many days needed', '1–2 days for the highlights; 3 days to explore properly'],
          ['Car rental from CMN', 'From 250 MAD/day (€23) — MoroccoForYou Cars, free meet & greet'],
          ['World Cup 2030', 'Casablanca is one of 6 Moroccan host cities — stadium expansion underway'],
        ],
      },
    },
    {
      heading: 'Hassan II Mosque — The One Non-Negotiable',
      paragraphs: [
        'If you do one thing in Casablanca, do this. The Hassan II Mosque is not just the largest mosque in Morocco — it is one of the most extraordinary buildings constructed anywhere in the 20th century. Built partially over the Atlantic Ocean, its prayer hall has a glass floor so worshippers pray directly above the sea. The minaret rises 210 metres and projects a laser beam toward Mecca visible from 30 km away. The entire structure was hand-built by 10,000 Moroccan craftsmen over 7 years.',
        'For non-Muslim visitors, access is through guided tours only — typically 9am to 3pm, with multiple daily departure times. Tours last 45–60 minutes and cover the prayer hall, hammam, ablutions hall, and esplanade. Tickets cost approximately 140 MAD (€13) for adults. Friday tours are limited due to congregational prayers — book ahead or avoid Friday mornings.',
        'The best time to visit is early morning (9–10am) when light fills the interior and queue times are shortest, or late afternoon (2–3pm) when the Atlantic provides the most dramatic backdrop. The esplanade is free to walk around at any time — worth visiting at sunset even if you don\'t take a tour.',
      ],
      callout: {
        label: '💡 Hassan II Mosque Local Tip',
        body: 'Book your guided tour ticket online before arrival, especially March–August when cruise ships flood the esplanade between 10am and 1pm. The tour itself is extraordinary — do not skip it to "just see it from outside." The interior is where the craftsmanship becomes genuinely jaw-dropping. After the tour, walk 200m to the right to find the traditional hammam attached to the mosque complex — open to the public and far less crowded than the tourist hammams in the medina.',
      },
    },
    {
      heading: 'Best Things to Do in Casablanca',
      paragraphs: [
        'Beyond the mosque, Casablanca has more depth than most travel guides give it credit for — you just need to know where to look.',
      ],
      table: {
        caption: 'Best things to do in Casablanca 2026',
        headers: ['Attraction', 'Neighborhood', 'Time needed', 'Local tip'],
        rows: [
          ['Hassan II Mosque', 'Sidi Belyout', '2–3 hours', 'Book tour online, arrive 30 min early'],
          ['La Corniche', 'Ain Diab', '1–2 hours walking', 'Best at sunset — walk from Phare El Hank to Morocco Mall end'],
          ['Quartier Habous (New Medina)', 'Habous', '1–2 hours', 'Less chaotic than Marrakech souks, authentic craft shopping'],
          ['Old Medina', 'Ancienne Medina', '1 hour', 'Smaller and calmer than imperial cities — great for photos'],
          ['Mohammed V Square', 'City Centre', '30 min', 'Art deco architecture hub — best viewed from the fountain'],
          ['Morocco Mall', 'Ain Diab', '2–3 hours', 'Africa\'s largest mall — worth seeing even if you don\'t shop'],
          ['Rick\'s Café', 'Ancienne Medina', 'Dinner reservation', 'Tourist experience but excellent food — book ahead always'],
          ['Ain Diab Beach', 'Ain Diab', 'Half day', 'Best June–September; water cold rest of year'],
          ['Villa des Arts', 'City Centre', '1 hour', 'Contemporary Moroccan art — free entry, often overlooked'],
          ['Twin Centre', 'Maarif', '30 min', 'Casablanca\'s business district skyline — best viewed from Parc de la Ligue Arabe'],
        ],
      },
    },
    {
      heading: 'Getting to Casablanca Airport (CMN) — Your First Decision',
      paragraphs: [
        'Most Morocco itineraries start at Casablanca Mohammed V Airport (CMN), which means your first decision as a traveler is how to get from the airport into the city — or directly to wherever you\'re going. This decision shapes your entire Morocco trip.',
        'If Casablanca is your only destination or you\'re continuing by train, the ONCF airport train (Casa Voyageurs station, 55 MAD, 30 minutes) is the most practical and cheapest option. If you\'re continuing to any other Moroccan city — Marrakech, Fes, Agadir, Tangier — renting a car at CMN is almost always the better decision: you leave the airport on your own schedule, stop wherever looks interesting, and avoid coordinating trains and buses for the rest of your trip.',
        'MoroccoForYou Cars offers a free meet-and-greet service directly in the CMN arrivals hall — your driver is waiting with a sign showing your name when you land, no queue, no counter. Economy cars from 250 MAD/day (€23), Dacia Duster 4x4 from 350 MAD/day (€32) for Atlas and Sahara routes. WhatsApp booking, confirmation within 1 hour.',
      ],
      callout: {
        label: '✈️ CMN Airport Local Tip',
        body: 'Do not book a rental car at the airport counter on arrival — peak-season queues at Hertz, Avis and Europcar run 30–60 minutes, and counter prices include undisclosed surcharges. Book MoroccoForYou Cars on WhatsApp before your flight. Your car is waiting when you land, your price is confirmed, and you\'re on the road in 20 minutes. +212 634 276 534',
      },
    },
    {
      heading: 'Where to Stay in Casablanca — Neighborhoods Explained',
      paragraphs: [
        'Unlike Marrakech or Fes, Casablanca does not have a famous medina hotel neighborhood. The choice of area depends entirely on what you want from your stay.',
      ],
      table: {
        caption: 'Best neighborhoods to stay in Casablanca 2026',
        headers: ['Neighborhood', 'Vibe', 'Best for', 'Price range/night'],
        rows: [
          ['Ain Diab / Corniche', 'Beach resort strip, Atlantic views, nightlife', 'Couples, beach lovers, nightlife seekers', 'MAD 600–2,500 (€55–230)'],
          ['Maarif', 'Upscale residential, best restaurants, shopping', 'Food lovers, business travelers, longer stays', 'MAD 500–1,800 (€46–167)'],
          ['City Centre / Mohammed V', 'Art deco, central, walkable', 'First-time visitors, short stays, budget', 'MAD 350–1,200 (€32–111)'],
          ['Quartier Habous', 'Traditional, near the new medina', 'Travelers wanting a local feel', 'MAD 300–800 (€28–74)'],
          ['Near CMN Airport', 'Convenient but no character', 'Early morning flights, transit only', 'MAD 400–1,000 (€37–93)'],
        ],
      },
    },
    {
      heading: 'Best Restaurants in Casablanca — Where Locals Actually Eat',
      paragraphs: [
        'Casablanca has the best restaurant scene in Morocco — not the most photogenic, but the most serious about food. The city\'s cosmopolitan population supports restaurants at a level that Marrakech\'s tourist economy cannot sustain. Seafood is the specialty: Atlantic fish landed at the Port of Casablanca goes from boat to kitchen in hours.',
        'The Maarif neighborhood is the epicenter of serious Casablanca dining — Moroccan, French, Italian, Japanese, and Lebanese restaurants line the streets between Avenue des Forces Armées Royales and Boulevard Massira. For traditional Moroccan food, the Quartier Habous area has more authentic options at lower prices than tourist-facing restaurants near the mosque.',
        'Budget for dinner: 150–250 MAD/person (€14–23) for a good restaurant. Seafood restaurants at the Corniche run 250–500 MAD/person (€23–46). Rick\'s Café is tourist-priced at 400–600 MAD/person (€37–55) but delivers genuinely excellent food and the cinematic atmosphere is real.',
      ],
      callout: {
        label: '🦞 Local Seafood Tip',
        body: 'For the best value seafood in Casablanca, skip the Corniche restaurants (tourist prices) and go to the fish market area near the old port. Simple restaurants here serve the same Atlantic catch for 30–40% less. Ask your hotel or riad for the current best local recommendation — this category changes faster than any guide can keep up with.',
      },
    },
    {
      heading: 'Day Trips from Casablanca — Why You Need a Car',
      paragraphs: [
        'Casablanca\'s location on Morocco\'s Atlantic coast makes it one of the best bases for day trips in the country. Within 1–2 hours by car, you can reach Rabat (Morocco\'s capital), El Jadida (Portuguese fortified city, UNESCO World Heritage), and the beaches between Casablanca and Essaouira. Within 2.5–3 hours, Marrakech.',
        'The key word is "by car." Train and bus connections from Casablanca are good for Rabat and Marrakech, but limited for coastal towns, beaches, and off-the-beaten-track destinations. A rental car picked up at CMN airport gives you the freedom to stop at Mohammedia beach on the way to Rabat, divert to El Jadida instead of heading straight back, or extend the day as far as the road takes you.',
      ],
      table: {
        caption: 'Day trips from Casablanca — distance, time and what to see',
        headers: ['Destination', 'Distance', 'Driving time', 'Why go', 'Car needed?'],
        rows: [
          ['Rabat', '87 km', '1h00–1h20', 'Hassan Tower, Kasbah Oudayas, Chellah ruins', 'Optional — train works'],
          ['El Jadida', '99 km', '1h15–1h30', 'Portuguese cistern, UNESCO medina, Atlantic beach', 'Recommended'],
          ['Mohammedia', '25 km', '25–35 min', 'Beach, port, relaxed local town', 'Yes'],
          ['Essaouira', '370 km', '4h–4h30', 'Blue-white port town, wind, seafood, souks', 'Yes — full day'],
          ['Marrakech', '240 km', '2h30–3h', 'Jemaa el-Fnaa, souks, riads, Majorelle Garden', 'Optional — CTM bus exists'],
          ['Chefchaouen', '340 km', '3h45–4h30', 'Blue city — best overnight not day trip', 'Yes'],
          ['Agadir', '480 km', '5h–5h30', 'Beach resort — too far for day trip', 'Yes — overnight'],
        ],
      },
      callout: {
        label: '🚗 Day Trip Car Rental Tip',
        body: 'Book your rental car at CMN airport rather than Casablanca city centre — you avoid urban traffic immediately, the airport location is closer to the motorway network, and MoroccoForYou Cars\' free meet-and-greet means you\'re on the road in 20 minutes after landing. Economy cars from 250 MAD/day (€23). +212 634 276 534',
      },
    },
    {
      heading: 'Getting Around Casablanca',
      paragraphs: [
        'Casablanca has Morocco\'s most developed urban transport network — a functional tram system, abundant petit taxis, and the easiest driving environment of any major Moroccan city (wide boulevards, reasonable parking).',
      ],
      table: {
        caption: 'Getting around Casablanca — options compared 2026',
        headers: ['Method', 'Cost', 'Best for', 'Avoid when'],
        rows: [
          ['Petit taxi (red)', '15–40 MAD per ride', 'Short city trips, medina to Corniche', 'Rush hour (7–9am, 5–7pm)'],
          ['Tram (Line 1 & 2)', '8 MAD flat fare', 'City centre to Mohammed V Square, train stations', 'With heavy luggage'],
          ['Rental car', 'From 250 MAD/day', 'Day trips, airport, flexibility', 'City centre parking on weekends'],
          ['Grand taxi (white)', '60–100 MAD shared', 'CMN airport to city (shared)', 'If you have a lot of luggage'],
          ['ONCF train', '55 MAD (airport)', 'CMN to city centre, Rabat connection', 'When schedule doesn\'t fit'],
          ['Walking', 'Free', 'Corniche, Habous, City Centre', 'Summer midday heat'],
        ],
      },
    },
    {
      heading: 'Best Time to Visit Casablanca',
      paragraphs: [
        'Casablanca\'s Atlantic location gives it one of Morocco\'s most temperate climates — cooler summers and milder winters than inland cities like Marrakech or Fes. This makes it genuinely pleasant year-round, with no "bad" months in the way that the Sahara or the mountains can be.',
      ],
      table: {
        caption: 'Best time to visit Casablanca — month by month guide',
        headers: ['Period', 'Weather', 'Crowds', 'Verdict'],
        rows: [
          ['January–February', '14–18°C, occasional rain', 'Low', 'Quiet, cheap, cool — good for city exploration'],
          ['March–May', '18–24°C, mostly sunny', 'Medium', '⭐ Best season — perfect weather, manageable crowds'],
          ['June–August', '24–28°C, Atlantic breeze', 'High (beach season)', 'Great beach weather, busiest at Corniche and Hassan II Mosque'],
          ['September–October', '22–26°C, excellent', 'Medium', '⭐ Second-best season — warm, post-summer calm'],
          ['November–December', '16–20°C, some rain', 'Low', 'Good for city sightseeing, fewer tourists'],
          ['Ramadan (variable)', 'Any weather', 'Variable', 'Restaurants closed daytime — plan accordingly'],
        ],
      },
    },
    {
      heading: 'Casablanca and the 2030 World Cup',
      paragraphs: [
        'Casablanca is one of six Moroccan cities selected to host matches at the 2030 FIFA World Cup — a shared tournament between Morocco, Spain, and Portugal. The city\'s Grand Stade Hassan II, currently under construction on the outskirts of Casablanca, will be one of the largest football stadiums in the world with a planned capacity of 115,000 — surpassing every existing stadium currently in the sport.',
        'For travelers visiting now, 2026–2029 is the optimal window: the city is investing heavily in infrastructure (roads, hotels, public spaces) but before the crowds and price inflation that will accompany the tournament itself. The Corniche is being extended, new hotels are under construction, and international airlines are expanding routes to CMN. Book your Morocco car rental for World Cup 2030 well in advance — CMN will be the primary gateway airport for the tournament.',
      ],
      callout: {
        label: '🏆 World Cup 2030 Car Rental Tip',
        body: 'Planning to attend World Cup 2030 matches in Casablanca, Marrakech, Rabat, Fes, Tangier or Agadir? Rent your car from MoroccoForYou Cars at CMN Airport and drive between host cities on your own schedule. The A7 motorway connects all six Moroccan host cities. Book as far ahead as possible — demand will exceed supply significantly during the tournament. +212 634 276 534',
      },
    },
    {
      heading: 'Casablanca Travel Tips — What Nobody Else Tells You',
      paragraphs: [
        'Ten things our clients wish they had known before arriving in Casablanca, based on 6 years of operating here.',
      ],
      table: {
        caption: 'Casablanca insider tips 2026',
        headers: ['Tip', 'Why it matters'],
        rows: [
          ['Book Hassan II Mosque tours online', 'Walk-up tickets exist but queues in peak season are 45–60 min. Online booking takes 5 minutes.'],
          ['The Corniche is best at 6–8pm', 'Morning fog burns off by afternoon. Sunset light on the Atlantic from the promenade is one of Morocco\'s best moments.'],
          ['Maarif > Corniche for restaurants', 'Corniche restaurants are tourist-priced and average. Maarif has better food at 30–40% lower prices.'],
          ['Casablanca traffic is worst 5–7pm', 'If renting a car, plan arrivals/departures outside this window. CMN to city centre takes 35 min at 10am, 75 min at 6pm.'],
          ['The tram is genuinely useful', 'Line 1 connects the main train stations and city centre. Cheap, air-conditioned, and surprisingly reliable.'],
          ['Habous is better than the Old Medina for shopping', 'More organized, better craft quality, less aggressive vendor pressure than the old medina.'],
          ['Don\'t expect a traditional Morocco here', 'Casablanca is deliberately modern. Visitors expecting Marrakech-style medina streets leave disappointed. Different city, different experience.'],
          ['Parking is easier than you think', 'Unlike Marrakech and Fes, Casablanca has actual car parks (parkings) near major attractions. Gardiens will manage street parking for 5–10 MAD.'],
          ['The port area is underrated', 'The working fishing port near the old medina — not the leisure port — is one of the most atmospheric places in the city. Best early morning.'],
          ['Give it more than one day', 'Almost every traveler who spends two days in Casablanca says they wish they\'d planned three. Almost every traveler who planned one day says they\'ll come back.'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Is Casablanca worth visiting in Morocco?',
      answer: 'Yes — but with realistic expectations. Casablanca is Morocco\'s modern, cosmopolitan city: wide art deco boulevards, the extraordinary Hassan II Mosque, a world-class Corniche promenade, and the best restaurant scene in the country. It is not a traditional medina city like Marrakech or Fes. Visitors who come expecting modern Morocco\'s best leave impressed; those expecting souks and camels leave confused.',
    },
    {
      question: 'How many days do you need in Casablanca?',
      answer: '1 day is the minimum to see the Hassan II Mosque and Corniche. 2 days lets you add Quartier Habous, the old medina, and a proper Casablanca dinner. 3 days is ideal if Casablanca is your base for a day trip to Rabat or El Jadida. Most travelers underestimate Casablanca and wish they had planned more time.',
    },
    {
      question: 'What is the best time to visit Casablanca?',
      answer: 'March–May and September–October are the best months: warm temperatures (18–26°C), minimal rain, and manageable crowds. June–August is beach season with great weather but busier. January–February is quiet and mild — good for city sightseeing. Casablanca\'s Atlantic climate means it is pleasant year-round.',
    },
    {
      question: 'How do I get from Casablanca Airport to the city?',
      answer: 'Four options: ONCF airport train to Casa Voyageurs station (55 MAD, 30 min), rental car with meet & greet at the arrivals hall (MoroccoForYou Cars from 250 MAD/day), shared grand taxi (60–80 MAD), or private taxi (150–200 MAD). For travelers continuing beyond Casablanca, renting a car at CMN is almost always the most practical choice.',
    },
    {
      question: 'Can non-Muslims visit Hassan II Mosque in Casablanca?',
      answer: 'Yes — Hassan II Mosque is one of the very few mosques in Morocco open to non-Muslim visitors. Access is through guided tours only, typically 9am–3pm daily (reduced on Fridays). Tickets cost approximately 140 MAD (€13) for adults. Book online to avoid queues, especially March–August.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is Casablanca safe for tourists?', answer: 'Yes — Casablanca is generally safe for tourists with standard urban precautions. The main tourist areas (Corniche, Hassan II Mosque, city centre, Maarif) are well-policed and well-lit. Exercise normal awareness around the old medina and avoid poorly-lit alleys at night. Casablanca has less aggressive souk vendor culture than Marrakech — most visitors find it easier to navigate independently.' },
    { question: 'What is Casablanca famous for in Morocco?', answer: 'Casablanca is famous for the Hassan II Mosque (one of the world\'s largest), its Art Deco colonial architecture, the Corniche beachfront, Rick\'s Café (inspired by the 1942 film), and as Morocco\'s economic and business capital. It is also known internationally for the 1942 Humphrey Bogart film — though the film was shot entirely in Hollywood.' },
    { question: 'How far is Casablanca from Marrakech?', answer: 'Casablanca to Marrakech is 240 km by the A7 motorway — approximately 2 hours 30 minutes to 3 hours driving. The toll is approximately 78 MAD (€7). A MoroccoForYou rental car picked up at CMN airport makes the Casablanca–Marrakech connection the most flexible and convenient option for most travelers.' },
  ],
  relatedDestinations: ['casablanca', 'rabat', 'marrakech', 'agadir'],
  relatedPosts: ['casablanca-airport-car-rental', 'things-to-do-in-casablanca-one-day', 'casablanca-to-rabat-by-car', 'casablanca-to-agadir-by-car', 'best-car-to-rent-in-casablanca-morocco'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Casablanca 2026 — Vaut-il le Détour ? Réponse de Locaux',
  metaDescription: 'Guide complet Casablanca 2026 : Mosquée Hassan II, Corniche, meilleurs restaurants, nightlife, excursions et location voiture. Rédigé par notre équipe casablancaise.',
  title: 'Guide Voyage Casablanca 2026 : Tout Ce Qu\'il Faut Savoir (Par des Locaux)',
  description: 'Le guide complet de Casablanca rédigé par notre équipe basée à Casablanca — pas un blogueur de passage pour 48 heures. Conseils insider sur la Mosquée Hassan II, les quartiers que la plupart des guides ignorent, réponse honnête à "Casablanca vaut-il le détour ?", et les conseils de location voiture qui rendent chaque excursion possible.',
  keyword: 'guide voyage casablanca',
  coverImage: COVER,
  coverAlt: 'Guide voyage Casablanca Maroc — Mosquée Hassan II au coucher du soleil sur l\'Atlantique',
  publishedISO: '2026-08-04',
  author: 'Omar L. — Local Casablancais & Spécialiste Location Voiture',
  readingMinutes: 15,
  intro: 'La plupart des guides de Casablanca sont écrits par des blogueurs qui ont passé 36 heures ici en route pour Marrakech. Nous, on vit ici. Notre équipe opère depuis l\'aéroport Mohammed V de Casablanca depuis 2019 et gère des centaines de road trips au Maroc par an — ce qui signifie qu\'on sait ce que les visiteurs trouvent vraiment à l\'arrivée, ce qu\'ils ratent, ce qui les surprend, et ce qu\'ils auraient aimé savoir avant d\'atterrir. C\'est le guide qu\'on donne à nos propres clients avant leur voyage au Maroc. Honnête, local, et construit autour de ce qui marche vraiment en 2026.',
  sections: [
    {
      heading: 'Casablanca vaut-il le détour ? La réponse honnête des locaux',
      paragraphs: [
        'Oui — mais pas pour les raisons que la plupart des guides citent. Casablanca n\'est pas Marrakech. Elle n\'a pas de médina labyrinthique, pas de place Jemaa el-Fnaa, pas de souk aux tapis. Ce qu\'elle a, c\'est quelque chose de plus rare au Maroc : une ville vivante, moderne et fonctionnelle qui contient l\'un des bâtiments les plus extraordinaires de la planète, une promenade en bord de mer de classe mondiale, et une scène gastronomique qui dépasse toutes les autres villes marocaines.',
        'Les voyageurs qui adorent Casablanca sont ceux qui arrivent avec les bonnes attentes : c\'est la Barcelone du Maroc, pas sa Marrakech. De larges boulevards bordés d\'immeubles Art Déco, des bars en rooftop avec vue sur l\'Atlantique, des beach clubs, une vie nocturne qui tourne jusqu\'à 4h du matin, et une énergie cosmopolite qu\'on ne trouve nulle part ailleurs dans le pays.',
        'Notre verdict honnête : Casablanca mérite 1 à 2 jours sur tout itinéraire Maroc, non comme escale mais comme destination à part entière. La Mosquée Hassan II à elle seule justifie l\'arrêt — c\'est le bâtiment le plus impressionnant que nous ayons jamais vu au Maroc, et nous les avons tous vus. Ajoutez un coucher de soleil sur la Corniche et un dîner dans un vrai restaurant de fruits de mer casablancais, et vous avez une expérience qu\'aucune autre ville marocaine ne peut reproduire.',
      ],
      callout: {
        label: '🇲🇦 Verdict Local',
        body: 'Quand quelqu\'un nous demande "dois-je sauter Casablanca ?" on dit toujours la même chose : sautez-la et vous ratez la Mosquée Hassan II, les meilleurs fruits de mer du Maroc, et la seule ville marocaine où vous pouvez regarder le coucher de soleil sur l\'Atlantique depuis un bar en rooftop. C\'est votre choix.',
      },
    },
    {
      heading: 'Casablanca en un coup d\'œil — Infos essentielles',
      paragraphs: [
        'Tout ce qu\'il faut savoir avant l\'arrivée — les faits pratiques que la plupart des guides enterrent au paragraphe 12.',
      ],
      table: {
        caption: 'Infos essentielles Casablanca 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Nom officiel', 'Casablanca (Dar al-Bayda en arabe — "La Maison Blanche")'],
          ['Population', '~4,3 millions (plus grande ville du Maroc)'],
          ['Aéroport', 'Aéroport International Mohammed V (CMN) — 35 km du centre-ville'],
          ['Monnaie', 'Dirham marocain (MAD) — 1 EUR ≈ 10,8 MAD (2026)'],
          ['Langues', 'Arabe (officiel), Darija (dialecte marocain), Français (affaires), Anglais en zones touristiques'],
          ['Fuseau horaire', 'GMT+1 (pas de changement d\'heure)'],
          ['Meilleure période', 'Mars–Mai et Septembre–Novembre (météo douce, moins de foule)'],
          ['Durée recommandée', '1–2 jours pour les incontournables ; 3 jours pour explorer correctement'],
          ['Location voiture CMN', 'Dès 250 MAD/jour (23€) — MoroccoForYou Cars, accueil gratuit'],
          ['Coupe du Monde 2030', 'Casablanca est l\'une des 6 villes marocaines hôtes — extension stade en cours'],
        ],
      },
    },
    {
      heading: 'Mosquée Hassan II — L\'incontournable absolu',
      paragraphs: [
        'Si vous ne faites qu\'une chose à Casablanca, faites celle-ci. La Mosquée Hassan II n\'est pas seulement la plus grande mosquée du Maroc — c\'est l\'un des bâtiments les plus extraordinaires construits au XXe siècle. Partiellement construite au-dessus de l\'Atlantique, sa salle de prière a un sol en verre pour que les fidèles prient directement au-dessus de la mer. Le minaret s\'élève à 210 mètres et projette un faisceau laser vers La Mecque visible à 30 km.',
        'Pour les visiteurs non-musulmans, l\'accès se fait uniquement via des visites guidées — généralement de 9h à 15h, avec plusieurs horaires quotidiens. Les visites durent 45–60 minutes. Billets environ 140 MAD (13€) pour les adultes. Les visites du vendredi sont limitées en raison des prières — réservez à l\'avance ou évitez le vendredi matin.',
        'Le meilleur moment pour visiter est tôt le matin (9–10h) quand la lumière remplit l\'intérieur et que les queues sont les plus courtes, ou en fin d\'après-midi (14–15h) quand l\'Atlantique offre la toile de fond la plus dramatique.',
      ],
      callout: {
        label: '💡 Conseil Insider Mosquée Hassan II',
        body: 'Réservez votre billet de visite guidée en ligne avant l\'arrivée, surtout mars–août quand les paquebots de croisière inondent l\'esplanade entre 10h et 13h. La visite elle-même est extraordinaire — ne la ratez pas pour "juste la voir de l\'extérieur." L\'intérieur est là où l\'artisanat devient vraiment époustouflant.',
      },
    },
    {
      heading: 'Meilleures choses à faire à Casablanca',
      paragraphs: [
        'Au-delà de la mosquée, Casablanca a plus de profondeur que la plupart des guides lui accordent — il faut juste savoir où chercher.',
      ],
      table: {
        caption: 'Meilleures choses à faire à Casablanca 2026',
        headers: ['Attraction', 'Quartier', 'Temps nécessaire', 'Conseil local'],
        rows: [
          ['Mosquée Hassan II', 'Sidi Belyout', '2–3 heures', 'Réservez en ligne, arrivez 30 min avant'],
          ['La Corniche', 'Aïn Diab', '1–2 heures à pied', 'Meilleure au coucher du soleil — marchez du Phare El Hank au Morocco Mall'],
          ['Quartier Habous (Nouvelle Médina)', 'Habous', '1–2 heures', 'Moins chaotique que les souks de Marrakech, shopping artisanal authentique'],
          ['Ancienne Médina', 'Ancienne Médina', '1 heure', 'Plus petite et calme que les villes impériales — idéale pour les photos'],
          ['Place Mohammed V', 'Centre-ville', '30 min', 'Centre de l\'architecture Art Déco — meilleure vue depuis la fontaine'],
          ['Morocco Mall', 'Aïn Diab', '2–3 heures', 'Plus grand mall d\'Afrique — vaut le coup même sans faire de shopping'],
          ['Rick\'s Café', 'Ancienne Médina', 'Dîner sur réservation', 'Expérience touristique mais excellente nourriture — réservez toujours à l\'avance'],
          ['Plage Aïn Diab', 'Aïn Diab', 'Demi-journée', 'Meilleure juin–septembre ; eau froide le reste de l\'année'],
          ['Villa des Arts', 'Centre-ville', '1 heure', 'Art marocain contemporain — entrée gratuite, souvent ignoré'],
          ['Twin Centre', 'Maârif', '30 min', 'Skyline du quartier des affaires de Casablanca — meilleure vue depuis le Parc de la Ligue Arabe'],
        ],
      },
    },
    {
      heading: 'Rejoindre l\'aéroport de Casablanca (CMN) — Votre première décision',
      paragraphs: [
        'La plupart des itinéraires Maroc commencent à l\'aéroport Mohammed V de Casablanca (CMN), ce qui signifie que votre première décision en tant que voyageur est de savoir comment rejoindre la ville depuis l\'aéroport — ou directement vers votre prochaine destination.',
        'Si Casablanca est votre seule destination ou si vous continuez en train, le train ONCF depuis l\'aéroport (Casa Voyageurs, 55 MAD, 30 min) est l\'option la plus pratique. Si vous continuez vers une autre ville marocaine — Marrakech, Fès, Agadir, Tanger — louer une voiture à CMN est presque toujours la meilleure décision.',
        'MoroccoForYou Cars propose un service d\'accueil gratuit directement dans le hall des arrivées de CMN — votre chauffeur vous attend avec une pancarte à votre nom quand vous atterrissez, sans file, sans comptoir. Voitures économiques dès 250 MAD/jour (23€), Dacia Duster 4x4 dès 350 MAD/jour (32€). Réservation WhatsApp, confirmation sous 1 heure.',
      ],
      callout: {
        label: '✈️ Conseil Insider Aéroport CMN',
        body: 'Ne réservez pas de voiture au comptoir de l\'aéroport à l\'arrivée — les files en haute saison chez Hertz, Avis et Europcar durent 30–60 minutes, et les prix comptoir incluent des suppléments non déclarés. Réservez MoroccoForYou Cars sur WhatsApp avant votre vol. +212 634 276 534',
      },
    },
    {
      heading: 'Où dormir à Casablanca — Les quartiers expliqués',
      paragraphs: [
        'Contrairement à Marrakech ou Fès, Casablanca n\'a pas de quartier hôtelier de médina célèbre. Le choix de zone dépend entièrement de ce que vous voulez de votre séjour.',
      ],
      table: {
        caption: 'Meilleurs quartiers pour dormir à Casablanca 2026',
        headers: ['Quartier', 'Ambiance', 'Idéal pour', 'Fourchette prix/nuit'],
        rows: [
          ['Aïn Diab / Corniche', 'Bord de mer, vues Atlantique, nightlife', 'Couples, plage, sorties nocturnes', 'MAD 600–2 500 (55–230€)'],
          ['Maârif', 'Résidentiel haut de gamme, meilleurs restos, shopping', 'Gastronomes, voyageurs d\'affaires, longs séjours', 'MAD 500–1 800 (46–167€)'],
          ['Centre-ville / Mohammed V', 'Art Déco, central, marchable', 'Premiers visiteurs, courts séjours, budget', 'MAD 350–1 200 (32–111€)'],
          ['Quartier Habous', 'Traditionnel, proche nouvelle médina', 'Voyageurs cherchant une ambiance locale', 'MAD 300–800 (28–74€)'],
          ['Près de l\'aéroport CMN', 'Pratique mais sans caractère', 'Vols tôt le matin, transit uniquement', 'MAD 400–1 000 (37–93€)'],
        ],
      },
    },
    {
      heading: 'Meilleurs restaurants à Casablanca — Où mangent les locaux',
      paragraphs: [
        'Casablanca a la meilleure scène gastronomique du Maroc — pas la plus photogénique, mais la plus sérieuse côté cuisine. La population cosmopolite de la ville soutient des restaurants à un niveau que l\'économie touristique de Marrakech ne peut pas maintenir. Les fruits de mer sont la spécialité : le poisson atlantique débarqué au Port de Casablanca passe du bateau à la cuisine en quelques heures.',
        'Le quartier Maârif est l\'épicentre de la gastronomie casablancaise sérieuse — restaurants marocains, français, italiens, japonais et libanais. Pour la cuisine marocaine traditionnelle, le Quartier Habous propose des options plus authentiques à des prix inférieurs.',
        'Budget dîner : 150–250 MAD/personne (14–23€) pour un bon restaurant. Restaurants de fruits de mer Corniche : 250–500 MAD/personne (23–46€). Rick\'s Café : 400–600 MAD/personne (37–55€) — prix touristiques mais excellente cuisine.',
      ],
      callout: {
        label: '🦞 Conseil Fruits de Mer Local',
        body: 'Pour les meilleurs fruits de mer au meilleur rapport qualité-prix à Casablanca, évitez les restaurants de la Corniche (prix touristiques) et allez vers la zone du marché aux poissons près du vieux port. Les restaurants simples ici servent la même pêche atlantique pour 30–40% moins cher.',
      },
    },
    {
      heading: 'Excursions depuis Casablanca — Pourquoi vous avez besoin d\'une voiture',
      paragraphs: [
        'La position de Casablanca sur la côte atlantique marocaine en fait l\'une des meilleures bases pour des excursions dans le pays. À 1–2 heures en voiture, Rabat, El Jadida et les plages entre Casablanca et Essaouira. À 2h30–3h, Marrakech.',
        'Le mot-clé est "en voiture." Les connexions ferroviaires et bus depuis Casablanca sont bonnes pour Rabat et Marrakech, mais limitées pour les villes côtières, les plages et les destinations hors des sentiers battus. Une voiture de location prise à l\'aéroport CMN vous donne la liberté de vous arrêter à la plage de Mohammedia, de dévier vers El Jadida ou d\'étendre la journée aussi loin que la route vous emmène.',
      ],
      table: {
        caption: 'Excursions depuis Casablanca — distance, temps et pourquoi y aller',
        headers: ['Destination', 'Distance', 'Temps de trajet', 'Pourquoi y aller', 'Voiture nécessaire ?'],
        rows: [
          ['Rabat', '87 km', '1h00–1h20', 'Tour Hassan, Kasbah Oudayas, ruines Chellah', 'Optionnel — train possible'],
          ['El Jadida', '99 km', '1h15–1h30', 'Citerne portugaise, médina UNESCO, plage atlantique', 'Recommandé'],
          ['Mohammedia', '25 km', '25–35 min', 'Plage, port, ville locale détendue', 'Oui'],
          ['Essaouira', '370 km', '4h–4h30', 'Port bleu-blanc, vent, fruits de mer, souks', 'Oui — journée complète'],
          ['Marrakech', '240 km', '2h30–3h', 'Jemaa el-Fnaa, souks, riads, Jardin Majorelle', 'Optionnel — bus CTM existe'],
          ['Chefchaouen', '340 km', '3h45–4h30', 'Ville bleue — mieux en nuit qu\'excursion', 'Oui'],
          ['Agadir', '480 km', '5h–5h30', 'Station balnéaire — trop loin pour excursion', 'Oui — nuit sur place'],
        ],
      },
      callout: {
        label: '🚗 Conseil Location Voiture Excursion',
        body: 'Réservez votre voiture à l\'aéroport CMN plutôt qu\'en centre-ville — vous évitez immédiatement le trafic urbain, l\'aéroport est plus proche du réseau autoroutier, et l\'accueil gratuit de MoroccoForYou Cars vous met sur la route en 20 minutes après l\'atterrissage. Économiques dès 250 MAD/jour (23€). +212 634 276 534',
      },
    },
    {
      heading: 'Se déplacer à Casablanca',
      paragraphs: [
        'Casablanca dispose du réseau de transport urbain le plus développé du Maroc — un tramway fonctionnel, des petits taxis abondants, et l\'environnement de conduite le plus facile de toute grande ville marocaine.',
      ],
      table: {
        caption: 'Se déplacer à Casablanca — options comparées 2026',
        headers: ['Moyen', 'Coût', 'Idéal pour', 'À éviter quand'],
        rows: [
          ['Petit taxi (rouge)', '15–40 MAD par trajet', 'Courts trajets urbains', 'Heures de pointe (7h–9h, 17h–19h)'],
          ['Tramway (Lignes 1 & 2)', '8 MAD tarif fixe', 'Centre-ville, gares ferroviaires', 'Avec beaucoup de bagages'],
          ['Voiture de location', 'Dès 250 MAD/jour', 'Excursions, aéroport, flexibilité', 'Parking centre-ville le week-end'],
          ['Grand taxi (blanc)', '60–100 MAD partagé', 'Aéroport CMN vers ville (partagé)', 'Avec beaucoup de bagages'],
          ['Train ONCF', '55 MAD (aéroport)', 'CMN centre-ville, connexion Rabat', 'Quand l\'horaire ne convient pas'],
          ['À pied', 'Gratuit', 'Corniche, Habous, Centre-ville', 'Chaleur de midi en été'],
        ],
      },
    },
    {
      heading: 'Meilleure période pour visiter Casablanca',
      paragraphs: [
        'La position atlantique de Casablanca lui confère l\'un des climats les plus tempérés du Maroc — étés plus frais et hivers plus doux que les villes intérieures comme Marrakech ou Fès. Cela la rend agréable toute l\'année.',
      ],
      table: {
        caption: 'Meilleure période pour visiter Casablanca — guide mois par mois',
        headers: ['Période', 'Météo', 'Affluence', 'Verdict'],
        rows: [
          ['Janvier–Février', '14–18°C, pluies occasionnelles', 'Faible', 'Calme, peu cher, frais — bon pour l\'exploration urbaine'],
          ['Mars–Mai', '18–24°C, majoritairement ensoleillé', 'Moyen', '⭐ Meilleure saison — météo parfaite, foule gérable'],
          ['Juin–Août', '24–28°C, brise atlantique', 'Élevé (saison plage)', 'Super pour la plage, plus fréquenté Corniche et Mosquée'],
          ['Septembre–Octobre', '22–26°C, excellent', 'Moyen', '⭐ Deuxième meilleure saison — chaud, calme post-estival'],
          ['Novembre–Décembre', '16–20°C, quelques pluies', 'Faible', 'Bon pour les visites urbaines, moins de touristes'],
          ['Ramadan (variable)', 'N\'importe quelle météo', 'Variable', 'Restaurants fermés la journée — planifiez en conséquence'],
        ],
      },
    },
    {
      heading: 'Casablanca et la Coupe du Monde 2030',
      paragraphs: [
        'Casablanca est l\'une des six villes marocaines sélectionnées pour accueillir des matchs lors de la Coupe du Monde FIFA 2030 — un tournoi partagé entre le Maroc, l\'Espagne et le Portugal. Le Grand Stade Hassan II, actuellement en construction à la périphérie de Casablanca, sera l\'un des plus grands stades de football au monde avec une capacité prévue de 115 000 places.',
        'Pour les voyageurs qui visitent maintenant, 2026–2029 est la fenêtre optimale : la ville investit massivement dans les infrastructures (routes, hôtels, espaces publics) mais avant les foules et l\'inflation des prix qui accompagneront le tournoi lui-même.',
      ],
      callout: {
        label: '🏆 Conseil Location Voiture Coupe du Monde 2030',
        body: 'Vous prévoyez d\'assister aux matchs de la Coupe du Monde 2030 à Casablanca, Marrakech, Rabat, Fès, Tanger ou Agadir ? Louez votre voiture chez MoroccoForYou Cars à l\'aéroport CMN et conduisez entre les villes hôtes à votre rythme. L\'autoroute A7 relie les six villes marocaines hôtes. Réservez le plus tôt possible. +212 634 276 534',
      },
    },
    {
      heading: 'Conseils voyage Casablanca — Ce que personne d\'autre ne vous dit',
      paragraphs: [
        'Dix choses que nos clients auraient aimé savoir avant d\'arriver à Casablanca, basées sur 6 ans d\'opérations ici.',
      ],
      table: {
        caption: 'Conseils insider Casablanca 2026',
        headers: ['Conseil', 'Pourquoi c\'est important'],
        rows: [
          ['Réservez les visites de la Mosquée Hassan II en ligne', 'Les tickets sur place existent mais les queues en haute saison durent 45–60 min.'],
          ['La Corniche est meilleure à 18h–20h', 'La brume matinale se dissipe dans l\'après-midi. La lumière du coucher de soleil sur l\'Atlantique est l\'un des plus beaux moments du Maroc.'],
          ['Maârif > Corniche pour les restaurants', 'Les restaurants de la Corniche sont à prix touristiques et moyens. Maârif offre une meilleure cuisine à 30–40% moins cher.'],
          ['Le trafic casablancais est pire 17h–19h', 'CMN au centre-ville prend 35 min à 10h, 75 min à 18h.'],
          ['Le tramway est vraiment utile', 'La ligne 1 relie les gares principales et le centre-ville. Pas cher, climatisé et étonnamment fiable.'],
          ['Habous est meilleur que l\'Ancienne Médina pour le shopping', 'Plus organisé, meilleure qualité artisanale, moins de pression vendeur.'],
          ['N\'attendez pas le Maroc traditionnel ici', 'Casablanca est délibérément moderne. Les visiteurs espérant des rues de médina style Marrakech repartent déçus.'],
          ['Se garer est plus facile qu\'on pense', 'Contrairement à Marrakech et Fès, Casablanca a de vrais parkings près des attractions principales.'],
          ['La zone portuaire est sous-estimée', 'Le port de pêche actif près de l\'ancienne médina est l\'un des endroits les plus atmosphériques de la ville.'],
          ['Donnez-lui plus d\'un jour', 'Presque tous les voyageurs qui passent deux jours à Casablanca disent qu\'ils auraient voulu en prévoir trois.'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Casablanca vaut-il le détour au Maroc ?',
      answer: 'Oui — mais avec des attentes réalistes. Casablanca est la ville moderne et cosmopolite du Maroc : larges boulevards Art Déco, l\'extraordinaire Mosquée Hassan II, une promenade Corniche de classe mondiale, et la meilleure scène gastronomique du pays. Ce n\'est pas une ville de médina traditionnelle comme Marrakech ou Fès.',
    },
    {
      question: 'Combien de jours faut-il à Casablanca ?',
      answer: '1 jour est le minimum pour voir la Mosquée Hassan II et la Corniche. 2 jours permettent d\'ajouter Habous, l\'ancienne médina et un vrai dîner casablancais. 3 jours sont idéaux si Casablanca est votre base pour une excursion à Rabat ou El Jadida.',
    },
    {
      question: 'Quelle est la meilleure période pour visiter Casablanca ?',
      answer: 'Mars–Mai et Septembre–Octobre sont les meilleurs mois : températures douces (18–26°C), peu de pluie et foule gérable. Juin–Août est la saison plage avec une excellente météo mais plus fréquenté. Janvier–Février est calme et doux — bon pour les visites urbaines.',
    },
    {
      question: 'Comment aller de l\'aéroport de Casablanca au centre-ville ?',
      answer: 'Quatre options : train ONCF vers Casa Voyageurs (55 MAD, 30 min), voiture de location avec accueil à l\'arrivée (MoroccoForYou Cars dès 250 MAD/jour), grand taxi partagé (60–80 MAD), ou taxi privé (150–200 MAD).',
    },
    {
      question: 'Les non-musulmans peuvent-ils visiter la Mosquée Hassan II ?',
      answer: 'Oui — la Mosquée Hassan II est l\'une des très rares mosquées du Maroc ouvertes aux non-musulmans. L\'accès se fait uniquement via des visites guidées, généralement 9h–15h (horaires réduits le vendredi). Billets environ 140 MAD (13€) pour les adultes.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Casablanca est-elle sûre pour les touristes ?', answer: 'Oui — Casablanca est généralement sûre pour les touristes avec des précautions urbaines standard. Les zones touristiques principales (Corniche, Mosquée Hassan II, centre-ville, Maârif) sont bien surveillées et bien éclairées. Casablanca a moins de culture vendeur agressive que Marrakech.' },
    { question: 'Pour quoi Casablanca est-elle célèbre au Maroc ?', answer: 'Casablanca est célèbre pour la Mosquée Hassan II, son architecture coloniale Art Déco, la Corniche, Rick\'s Café et comme capitale économique et commerciale du Maroc. Elle est aussi connue internationalement pour le film de 1942 avec Humphrey Bogart — bien que le film ait été entièrement tourné à Hollywood.' },
    { question: 'Quelle est la distance entre Casablanca et Marrakech ?', answer: 'Casablanca à Marrakech fait 240 km via l\'autoroute A7 — environ 2h30 à 3h de trajet. Le péage est d\'environ 78 MAD (7€). Une voiture de location MoroccoForYou prise à l\'aéroport CMN rend la connexion Casablanca–Marrakech la plus flexible et pratique.' },
  ],
  relatedDestinations: ['casablanca', 'rabat', 'marrakech', 'agadir'],
  relatedPosts: ['location-voiture-aeroport-casablanca-cmn', 'que-faire-a-casablanca-en-une-journee', 'casablanca-rabat-en-voiture', 'casablanca-agadir-en-voiture', 'meilleure-voiture-louer-casablanca-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر للدار البيضاء 2026 — هل تستحق الزيارة؟ إجابة المحليين',
  metaDescription: 'دليل شامل للدار البيضاء 2026: مسجد الحسن الثاني، الكورنيش، أفضل المطاعم، الحياة الليلية، رحلات يوم ومعلومات تأجير السيارات. من فريق محلي مقيم في الدار البيضاء.',
  title: 'دليل السفر للدار البيضاء 2026: كل ما تحتاج معرفته (من المحليين)',
  description: 'الدليل الشامل للدار البيضاء من فريقنا المقيم في الدار البيضاء — ليس مدوّن مر من هنا 36 ساعة. نصائح داخلية عن مسجد الحسن الثاني، الأحياء التي تتجاهلها معظم الأدلة، إجابة صادقة على "هل تستحق الدار البيضاء الزيارة؟"، ونصائح تأجير السيارات التي تجعل كل رحلة يوم ممكنة.',
  keyword: 'دليل السفر للدار البيضاء',
  coverImage: COVER,
  coverAlt: 'دليل السفر للدار البيضاء المغرب — مسجد الحسن الثاني عند غروب الشمس فوق المحيط الأطلسي',
  publishedISO: '2026-08-04',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في تأجير السيارات',
  readingMinutes: 15,
  intro: 'معظم أدلة الدار البيضاء كتبها مدونون أمضوا 36 ساعة هنا في طريقهم إلى مراكش. نحن نعيش هنا. فريقنا يعمل من مطار محمد الخامس بالدار البيضاء منذ 2019 ويدير مئات الرحلات البرية بالمغرب سنوياً — مما يعني أننا نعرف ما يجده الزوار فعلاً عند الوصول، وما يفوتونه، وما يفاجئهم، وما يتمنون معرفته قبل الهبوط. هذا هو الدليل الذي نعطيه لعملائنا قبل بدء رحلتهم المغربية. صادق ومحلي ومبني على ما يعمل فعلاً في 2026.',
  sections: [
    {
      heading: 'هل الدار البيضاء تستحق الزيارة؟ الإجابة الصادقة من المحليين',
      paragraphs: [
        'نعم — لكن ليس للأسباب التي تذكرها معظم أدلة السفر. الدار البيضاء ليست مراكش. ليس فيها متاهة مدينة عتيقة، ولا ساحة جامع الفنا، ولا سوق السجاد. ما فيها أندر في المغرب: مدينة حية وعاملة وحديثة تضم أحد أكثر المباني استثنائية على وجه الأرض، وممشى بحري يفوق مستوى العالم، ومشهد مطاعم يتفوق على جميع المدن المغربية الأخرى.',
        'المسافرون الذين يحبون الدار البيضاء هم أولئك الذين يصلون بتوقعات صحيحة: إنها برشلونة المغرب، وليست مراكشها. بوليفارات واسعة تصطف بها مبانٍ آر ديكو، وبارات على الأسطح بإطلالة على المحيط الأطلسي، ونوادٍ شاطئية، وحياة ليلية تستمر حتى الساعة 4 صباحاً، وطاقة عالمية لا تجدها في أي مكان آخر بالبلاد.',
        'حكمنا الصادق: الدار البيضاء تستحق يوماً إلى يومين في أي مسار مغربي، ليس كمحطة عبور بل كوجهة بحد ذاتها. مسجد الحسن الثاني وحده يستحق التوقف — إنه أكثر مبنى أثار إعجابنا في المغرب، وقد رأينا كلها.',
      ],
      callout: {
        label: '🇲🇦 حكم محلي',
        body: 'عندما يسألنا أحد "هل أتجاوز الدار البيضاء؟" نقول دائماً نفس الشيء: تجاوزها وستفوتك مسجد الحسن الثاني، وأفضل المأكولات البحرية في المغرب، والمدينة المغربية الوحيدة حيث يمكنك مشاهدة غروب الشمس على الأطلسي من بار على السطح.',
      },
    },
    {
      heading: 'الدار البيضاء بلمحة — المعلومات الأساسية',
      paragraphs: [
        'كل ما تحتاج معرفته قبل الوصول — الحقائق العملية التي تدفنها معظم الأدلة في الفقرة الثانية عشرة.',
      ],
      table: {
        caption: 'المعلومات الأساسية عن الدار البيضاء 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['الاسم الرسمي', 'الدار البيضاء (Casablanca بالإسبانية — "البيت الأبيض")'],
          ['السكان', '~4.3 مليون (أكبر مدينة في المغرب)'],
          ['المطار', 'مطار محمد الخامس الدولي (CMN) — 35 كم من وسط المدينة'],
          ['العملة', 'الدرهم المغربي (MAD) — 1 يورو ≈ 10.8 درهم (2026)'],
          ['اللغات', 'العربية (رسمية)، الدارجة (اللهجة المغربية)، الفرنسية (الأعمال)، الإنجليزية في المناطق السياحية'],
          ['المنطقة الزمنية', 'GMT+1 (لا يوجد توقيت صيفي)'],
          ['أفضل وقت للزيارة', 'مارس–مايو وسبتمبر–نوفمبر (طقس معتدل، ازدحام أقل)'],
          ['المدة الموصى بها', 'يوم إلى يومين للمعالم الرئيسية؛ 3 أيام للاستكشاف الصحيح'],
          ['تأجير سيارة من CMN', 'من 250 درهم/يوم (23€) — MoroccoForYou Cars، استقبال مجاني'],
          ['كأس العالم 2030', 'الدار البيضاء إحدى 6 مدن مغربية مضيفة — توسعة الملعب جارية'],
        ],
      },
    },
    {
      heading: 'مسجد الحسن الثاني — الزيارة الإلزامية الوحيدة',
      paragraphs: [
        'إذا فعلت شيئاً واحداً في الدار البيضاء، فليكن هذا. مسجد الحسن الثاني ليس فقط أكبر مسجد في المغرب — إنه أحد أكثر المباني استثنائية التي شيدت في القرن العشرين. مبني جزئياً فوق المحيط الأطلسي، وقاعة صلاته لها أرضية زجاجية يصلي فيها المصلون مباشرة فوق البحر. المئذنة ترتفع 210 أمتار وتُسقط شعاع ليزر نحو مكة المكرمة يُرى من مسافة 30 كيلومتراً.',
        'للزوار غير المسلمين، يتم الدخول عبر جولات إرشادية فقط — عادةً من الساعة 9 صباحاً حتى 3 مساءً، مع مواعيد انطلاق يومية متعددة. تستغرق الجولات 45–60 دقيقة. التذاكر حوالي 140 درهم (13€) للبالغين. جولات الجمعة محدودة بسبب صلاة الجمعة — احجز مسبقاً أو تجنب صباح الجمعة.',
      ],
      callout: {
        label: '💡 نصيحة داخلية عن مسجد الحسن الثاني',
        body: 'احجز تذكرة جولتك الإرشادية عبر الإنترنت قبل الوصول، خاصة مارس–أغسطس عندما تغمر سفن الرحلات السياحية الساحة بين الساعة 10 صباحاً و1 ظهراً. الجولة نفسها رائعة — لا تفوتها "لمجرد رؤيتها من الخارج." الداخل هو حيث يصبح الحرف اليدوي مذهلاً حقاً.',
      },
    },
    {
      heading: 'أفضل الأشياء للقيام بها في الدار البيضاء',
      paragraphs: [
        'ما وراء المسجد، الدار البيضاء لها عمق أكثر مما تمنحها معظم الأدلة — تحتاج فقط معرفة أين تبحث.',
      ],
      table: {
        caption: 'أفضل الأشياء للقيام بها في الدار البيضاء 2026',
        headers: ['المعلم', 'الحي', 'الوقت المطلوب', 'نصيحة محلية'],
        rows: [
          ['مسجد الحسن الثاني', 'سيدي بليوط', '2–3 ساعات', 'احجز عبر الإنترنت، اصل قبل 30 دقيقة'],
          ['الكورنيش', 'عين الذياب', 'ساعة إلى ساعتين مشياً', 'أفضل عند الغروب — امشِ من منارة الهنك إلى نهاية Morocco Mall'],
          ['حي الحبوس (المدينة الجديدة)', 'الحبوس', 'ساعة إلى ساعتين', 'أقل فوضى من أسواق مراكش، تسوق حرفي أصيل'],
          ['المدينة العتيقة', 'المدينة العتيقة', 'ساعة', 'أصغر وأهدأ من المدن الإمبراطورية — رائعة للتصوير'],
          ['ساحة محمد الخامس', 'وسط المدينة', '30 دقيقة', 'محور العمارة الآر ديكو — أفضل منظر من النافورة'],
          ['Morocco Mall', 'عين الذياب', '2–3 ساعات', 'أكبر مركز تسوق في أفريقيا — يستحق الزيارة حتى بدون تسوق'],
          ['ريك كافيه', 'المدينة العتيقة', 'عشاء مع حجز', 'تجربة سياحية لكن طعام ممتاز — احجز دائماً مسبقاً'],
          ['شاطئ عين الذياب', 'عين الذياب', 'نصف يوم', 'أفضل يونيو–سبتمبر؛ الماء بارد بقية العام'],
          ['فيلا الفنون', 'وسط المدينة', 'ساعة', 'فن مغربي معاصر — دخول مجاني، كثيراً ما يُغفل'],
          ['التوأم سنتر', 'المعاريف', '30 دقيقة', 'أفق حي الأعمال بالدار البيضاء — أفضل منظر من Parc de la Ligue Arabe'],
        ],
      },
    },
    {
      heading: 'الوصول إلى مطار الدار البيضاء (CMN) — قرارك الأول',
      paragraphs: [
        'تبدأ معظم مسارات المغرب في مطار محمد الخامس بالدار البيضاء (CMN)، مما يعني أن قرارك الأول كمسافر هو كيفية الانتقال من المطار إلى المدينة — أو مباشرة إلى وجهتك التالية.',
        'إذا كانت الدار البيضاء وجهتك الوحيدة أو تواصل بالقطار، فقطار ONCF من المطار (محطة الدار البيضاء المسافرين، 55 درهم، 30 دقيقة) هو الخيار الأكثر عملية. إذا واصلت إلى أي مدينة مغربية أخرى — مراكش أو فاس أو أكادير أو طنجة — فاستئجار سيارة في CMN هو دائماً القرار الأفضل تقريباً.',
        'تقدم MoroccoForYou Cars خدمة استقبال مجانية مباشرة في صالة وصول CMN — سائقك ينتظرك بلافتة تحمل اسمك عند الهبوط، بلا طابور، بلا طاولة. سيارات اقتصادية من 250 درهم/يوم (23€)، داشيا دوستر 4x4 من 350 درهم/يوم (32€). حجز واتساب، تأكيد خلال ساعة.',
      ],
      callout: {
        label: '✈️ نصيحة داخلية مطار CMN',
        body: 'لا تحجز سيارة إيجار من طاولة المطار عند الوصول — طوابير موسم الذروة عند Hertz وAvis وEuropcar تستغرق 30–60 دقيقة، وأسعار الطاولة تتضمن رسوماً غير معلنة. احجز MoroccoForYou Cars على واتساب قبل رحلتك. +212 634 276 534',
      },
    },
    {
      heading: 'أين تقيم في الدار البيضاء — شرح الأحياء',
      paragraphs: [
        'على عكس مراكش أو فاس، لا تملك الدار البيضاء حيّاً فندقياً مشهوراً في المدينة العتيقة. يعتمد اختيار المنطقة كلياً على ما تريده من إقامتك.',
      ],
      table: {
        caption: 'أفضل أحياء الإقامة في الدار البيضاء 2026',
        headers: ['الحي', 'الأجواء', 'الأنسب لـ', 'نطاق السعر/ليلة'],
        rows: [
          ['عين الذياب / الكورنيش', 'شريط شاطئي، إطلالات أطلسية، حياة ليلية', 'الأزواج، محبو الشاطئ، باحثو الحياة الليلية', 'MAD 600–2,500 (55–230€)'],
          ['المعاريف', 'سكني راقٍ، أفضل مطاعم، تسوق', 'محبو الطعام، رجال الأعمال، الإقامات الطويلة', 'MAD 500–1,800 (46–167€)'],
          ['وسط المدينة / محمد الخامس', 'آر ديكو، مركزي، قابل للمشي', 'الزوار للمرة الأولى، الإقامات القصيرة، الميزانية', 'MAD 350–1,200 (32–111€)'],
          ['حي الحبوس', 'تقليدي، قرب المدينة الجديدة', 'المسافرون الباحثون عن أجواء محلية', 'MAD 300–800 (28–74€)'],
          ['قرب مطار CMN', 'مريح لكن بلا طابع', 'رحلات الفجر الباكر، العبور فقط', 'MAD 400–1,000 (37–93€)'],
        ],
      },
    },
    {
      heading: 'أفضل مطاعم الدار البيضاء — أين يأكل المحليون فعلاً',
      paragraphs: [
        'الدار البيضاء لديها أفضل مشهد مطاعم في المغرب — ليس الأكثر جمالاً للصور، لكن الأكثر جدية في الطعام. المأكولات البحرية هي التخصص: السمك الأطلسي المنزَّل في ميناء الدار البيضاء ينتقل من القارب إلى المطبخ في ساعات.',
        'حي المعاريف هو مركز المطاعم الجادة بالدار البيضاء — مطاعم مغربية وفرنسية وإيطالية ويابانية ولبنانية. للطعام المغربي التقليدي، منطقة الحبوس لديها خيارات أكثر أصالة بأسعار أقل.',
        'ميزانية العشاء: 150–250 درهم/شخص (14–23€) لمطعم جيد. مطاعم المأكولات البحرية في الكورنيش: 250–500 درهم/شخص (23–46€). ريك كافيه: 400–600 درهم/شخص (37–55€) — أسعار سياحية لكن طعام ممتاز حقاً.',
      ],
      callout: {
        label: '🦞 نصيحة المأكولات البحرية المحلية',
        body: 'لأفضل المأكولات البحرية بأفضل قيمة في الدار البيضاء، تجنب مطاعم الكورنيش (أسعار سياحية) واذهب إلى منطقة سوق السمك قرب الميناء القديم. المطاعم البسيطة هناك تقدم نفس المصيد الأطلسي بـ30–40% أقل.',
      },
    },
    {
      heading: 'رحلات يوم من الدار البيضاء — لماذا تحتاج سيارة',
      paragraphs: [
        'موقع الدار البيضاء على الساحل الأطلسي المغربي يجعلها من أفضل القواعد لرحلات اليوم في البلاد. في غضون ساعة إلى ساعتين بالسيارة، تصل إلى الرباط والجديدة والشواطئ بين الدار البيضاء والصويرة. في 2.5–3 ساعات، مراكش.',
        'الكلمة المفتاحية هي "بالسيارة." الاتصالات بالقطار والحافلة من الدار البيضاء جيدة للرباط ومراكش، لكن محدودة للمدن الساحلية والشواطئ والوجهات خارج المسالك المعتادة. سيارة إيجار تُستلم من مطار CMN تمنحك حرية التوقف في شاطئ المحمدية، والانحراف نحو الجديدة، أو تمديد اليوم بعيداً.',
      ],
      table: {
        caption: 'رحلات يوم من الدار البيضاء — المسافة والوقت وسبب الذهاب',
        headers: ['الوجهة', 'المسافة', 'وقت القيادة', 'لماذا تذهب', 'سيارة مطلوبة؟'],
        rows: [
          ['الرباط', '87 كم', '1:00–1:20 ساعة', 'برج الحسن، قصبة الأوداية، أطلال شالة', 'اختياري — القطار ممكن'],
          ['الجديدة', '99 كم', '1:15–1:30 ساعة', 'الصهريج البرتغالي، مدينة عتيقة يونسكو، شاطئ أطلسي', 'موصى به'],
          ['المحمدية', '25 كم', '25–35 دقيقة', 'شاطئ، ميناء، بلدة محلية مريحة', 'نعم'],
          ['الصويرة', '370 كم', '4:00–4:30 ساعة', 'ميناء أزرق أبيض، رياح، مأكولات بحرية، أسواق', 'نعم — يوم كامل'],
          ['مراكش', '240 كم', '2:30–3:00 ساعة', 'جامع الفنا، أسواق، رياضات، حديقة ماجوريل', 'اختياري — حافلة CTM موجودة'],
          ['شفشاون', '340 كم', '3:45–4:30 ساعة', 'المدينة الزرقاء — أفضل كليلة لا رحلة يوم', 'نعم'],
          ['أكادير', '480 كم', '5:00–5:30 ساعة', 'منتجع شاطئي — بعيد جداً لرحلة يوم', 'نعم — مبيت'],
        ],
      },
      callout: {
        label: '🚗 نصيحة تأجير سيارة لرحلات اليوم',
        body: 'احجز سيارتك في مطار CMN بدلاً من وسط مدينة الدار البيضاء — تتجنب ازدحام المدينة فوراً، والمطار أقرب لشبكة الطرق السريعة، واستقبال MoroccoForYou Cars المجاني يضعك على الطريق خلال 20 دقيقة من الهبوط. سيارات اقتصادية من 250 درهم/يوم (23€). +212 634 276 534',
      },
    },
    {
      heading: 'التنقل في الدار البيضاء',
      paragraphs: [
        'تمتلك الدار البيضاء أكثر شبكات النقل الحضري تطوراً في المغرب — نظام ترام فعّال وسيارات أجرة صغيرة وفيرة وأسهل بيئة قيادة في أي مدينة مغربية كبرى.',
      ],
      table: {
        caption: 'التنقل في الدار البيضاء — الخيارات مقارنة 2026',
        headers: ['الوسيلة', 'التكلفة', 'الأنسب لـ', 'تجنب عند'],
        rows: [
          ['تاكسي صغير (أحمر)', '15–40 درهم للرحلة', 'تنقلات قصيرة داخل المدينة', 'ساعات الذروة (7–9ص، 5–7م)'],
          ['الترام (الخط 1 و2)', '8 درهم ثابت', 'وسط المدينة، محطات القطار', 'مع أمتعة ثقيلة'],
          ['سيارة إيجار', 'من 250 درهم/يوم', 'رحلات اليوم، المطار، المرونة', 'وقوف وسط المدينة أيام العطل'],
          ['تاكسي كبير (أبيض)', '60–100 درهم مشترك', 'المطار CMN إلى المدينة (مشترك)', 'مع أمتعة كثيرة'],
          ['قطار ONCF', '55 درهم (مطار)', 'CMN لوسط المدينة، رابط الرباط', 'عندما لا يناسب الجدول'],
          ['المشي', 'مجاني', 'الكورنيش، الحبوس، وسط المدينة', 'حرارة منتصف النهار صيفاً'],
        ],
      },
    },
    {
      heading: 'أفضل وقت لزيارة الدار البيضاء',
      paragraphs: [
        'موقع الدار البيضاء الأطلسي يمنحها أحد أكثر مناخات المغرب اعتدالاً — صيف أبرد وشتاء أخف من المدن الداخلية كمراكش وفاس. هذا يجعلها ممتعة على مدار السنة.',
      ],
      table: {
        caption: 'أفضل وقت لزيارة الدار البيضاء — دليل شهر بشهر',
        headers: ['الفترة', 'الطقس', 'الازدحام', 'الحكم'],
        rows: [
          ['يناير–فبراير', '14–18°م، أمطار عرضية', 'منخفض', 'هادئ، رخيص، بارد — جيد لاستكشاف المدينة'],
          ['مارس–مايو', '18–24°م، مشمس في الغالب', 'متوسط', '⭐ أفضل موسم — طقس مثالي، ازدحام مقبول'],
          ['يونيو–أغسطس', '24–28°م، نسيم أطلسي', 'عالٍ (موسم الشاطئ)', 'رائع للشاطئ، أكثر ازدحاماً في الكورنيش والمسجد'],
          ['سبتمبر–أكتوبر', '22–26°م، ممتاز', 'متوسط', '⭐ ثاني أفضل موسم — دافئ، هدوء ما بعد الصيف'],
          ['نوفمبر–ديسمبر', '16–20°م، بعض الأمطار', 'منخفض', 'جيد لزيارات المدينة، سياح أقل'],
          ['رمضان (متغير)', 'أي طقس', 'متغير', 'مطاعم مغلقة نهاراً — خطط وفقاً لذلك'],
        ],
      },
    },
    {
      heading: 'الدار البيضاء وكأس العالم 2030',
      paragraphs: [
        'الدار البيضاء إحدى المدن المغربية الست المختارة لاستضافة مباريات كأس العالم FIFA 2030 — بطولة مشتركة بين المغرب وإسبانيا والبرتغال. الملعب الكبير الحسن الثاني، قيد الإنشاء حالياً في ضواحي الدار البيضاء، سيكون أحد أكبر ملاعب كرة القدم في العالم بطاقة مخططة 115,000 مقعد.',
        'للمسافرين الزائرين الآن، 2026–2029 هي النافذة المثلى: المدينة تستثمر بكثافة في البنية التحتية (طرق، فنادق، مساحات عامة) لكن قبل الحشود وتضخم الأسعار اللذين سيصاحبان البطولة نفسها.',
      ],
      callout: {
        label: '🏆 نصيحة تأجير السيارة لكأس العالم 2030',
        body: 'تخطط لحضور مباريات كأس العالم 2030 في الدار البيضاء أو مراكش أو الرباط أو فاس أو طنجة أو أكادير؟ استأجر سيارتك من MoroccoForYou Cars في مطار CMN وتنقل بين المدن المضيفة بوتيرتك الخاصة. الطريق السريع A7 يربط المدن الست المغربية. احجز مبكراً قدر الإمكان. +212 634 276 534',
      },
    },
    {
      heading: 'نصائح سفر الدار البيضاء — ما لا يخبرك به أحد',
      paragraphs: [
        'عشرة أشياء تمنى عملاؤنا معرفتها قبل الوصول إلى الدار البيضاء، بناءً على 6 سنوات من العمل هنا.',
      ],
      table: {
        caption: 'نصائح داخلية عن الدار البيضاء 2026',
        headers: ['النصيحة', 'لماذا تهم'],
        rows: [
          ['احجز جولات مسجد الحسن الثاني عبر الإنترنت', 'تذاكر الوقوف موجودة لكن طوابير موسم الذروة تستغرق 45–60 دقيقة.'],
          ['الكورنيش أفضل من 6–8 مساءً', 'الضباب الصباحي يتبدد بعد الظهر. ضوء غروب الشمس على الأطلسي من الممشى أحد أجمل لحظات المغرب.'],
          ['المعاريف > الكورنيش للمطاعم', 'مطاعم الكورنيش بأسعار سياحية ومتوسطة. المعاريف طعام أفضل بـ30–40% أرخص.'],
          ['ازدحام الدار البيضاء أسوأ 5–7 مساءً', 'CMN لوسط المدينة 35 دقيقة الساعة 10 صباحاً، 75 دقيقة الساعة 6 مساءً.'],
          ['الترام مفيد فعلاً', 'الخط 1 يربط المحطات الرئيسية ووسط المدينة. رخيص ومكيف وموثوق بشكل مفاجئ.'],
          ['الحبوس أفضل من المدينة العتيقة للتسوق', 'أكثر تنظيماً، جودة حرفية أفضل، ضغط بائع أقل.'],
          ['لا تتوقع المغرب التقليدي هنا', 'الدار البيضاء حديثة عن قصد. الزوار الذين يتوقعون شوارع مدينة عتيقة يغادرون محبطين.'],
          ['الوقوف أسهل مما تظن', 'على عكس مراكش وفاس، الدار البيضاء لديها مواقف سيارات حقيقية قرب المعالم الرئيسية.'],
          ['منطقة الميناء مقدَّرة بأقل من قيمتها', 'ميناء الصيد العامل قرب المدينة العتيقة أحد أكثر الأماكن أجواءً في المدينة.'],
          ['أعطها أكثر من يوم واحد', 'تقريباً كل مسافر يقضي يومين في الدار البيضاء يقول إنه كان يتمنى التخطيط لثلاثة.'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'هل الدار البيضاء تستحق الزيارة في المغرب؟',
      answer: 'نعم — لكن بتوقعات واقعية. الدار البيضاء هي المدينة الحديثة والعالمية في المغرب: بوليفارات واسعة بآر ديكو، ومسجد الحسن الثاني الاستثنائي، وممشى كورنيش يفوق مستوى العالم، وأفضل مشهد مطاعم في البلاد. إنها ليست مدينة مدينة عتيقة تقليدية كمراكش أو فاس.',
    },
    {
      question: 'كم يوماً تحتاج في الدار البيضاء؟',
      answer: 'يوم واحد هو الحد الأدنى لرؤية مسجد الحسن الثاني والكورنيش. يومان يتيحان إضافة الحبوس والمدينة العتيقة وعشاء حقيقي في الدار البيضاء. 3 أيام مثالية إذا كانت الدار البيضاء قاعدتك لرحلة يوم إلى الرباط أو الجديدة.',
    },
    {
      question: 'ما أفضل وقت لزيارة الدار البيضاء؟',
      answer: 'مارس–مايو وسبتمبر–أكتوبر أفضل الأشهر: درجات حرارة دافئة (18–26°م)، مطر قليل، وازدحام مقبول. يونيو–أغسطس موسم الشاطئ بطقس رائع لكن أكثر ازدحاماً. يناير–فبراير هادئ ومعتدل — جيد لزيارات المدينة.',
    },
    {
      question: 'كيف أنتقل من مطار الدار البيضاء إلى وسط المدينة؟',
      answer: 'أربعة خيارات: قطار ONCF إلى محطة الدار البيضاء المسافرين (55 درهم، 30 دقيقة)، سيارة إيجار مع استقبال في صالة الوصول (MoroccoForYou Cars من 250 درهم/يوم)، تاكسي كبير مشترك (60–80 درهم)، أو تاكسي خاص (150–200 درهم).',
    },
    {
      question: 'هل يمكن لغير المسلمين زيارة مسجد الحسن الثاني؟',
      answer: 'نعم — مسجد الحسن الثاني أحد المساجد النادرة جداً في المغرب المفتوحة لغير المسلمين. الدخول عبر جولات إرشادية فقط، عادةً 9 صباحاً–3 مساءً (مواعيد مخفضة الجمعة). التذاكر حوالي 140 درهم (13€) للبالغين.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل الدار البيضاء آمنة للسياح؟', answer: 'نعم — الدار البيضاء آمنة بشكل عام للسياح مع احتياطات حضرية عادية. المناطق السياحية الرئيسية (الكورنيش، مسجد الحسن الثاني، وسط المدينة، المعاريف) مراقبة جيداً ومضاءة. الدار البيضاء لديها ثقافة ضغط بائع أسواق أقل عدوانية من مراكش.' },
    { question: 'بماذا تشتهر الدار البيضاء في المغرب؟', answer: 'تشتهر الدار البيضاء بمسجد الحسن الثاني، وعمارتها الاستعمارية الآر ديكو، والكورنيش، وريك كافيه وعاصمتها الاقتصادية والتجارية للمغرب. معروفة دولياً أيضاً بفيلم هامفري بوغارت 1942 — رغم أن الفيلم صُوِّر كلياً في هوليوود.' },
    { question: 'ما المسافة بين الدار البيضاء ومراكش؟', answer: 'الدار البيضاء إلى مراكش 240 كم عبر الطريق السريع A7 — حوالي 2.5 إلى 3 ساعات قيادة. الرسوم حوالي 78 درهم (7€). سيارة إيجار MoroccoForYou تُستلم من مطار CMN تجعل رابط الدار البيضاء–مراكش الخيار الأكثر مرونة وعملية.' },
  ],
  relatedDestinations: ['casablanca', 'rabat', 'marrakech', 'agadir'],
  relatedPosts: ['istajar-sayyara-matar-dar-al-bayda-cmn', 'ma-tafal-fi-dar-al-bayda-fi-yawm-wahid', 'min-dar-al-bayda-ila-al-ribat-bis-sayyara', 'min-dar-al-bayda-ila-agadir-bis-sayyara', 'afdal-sayyara-listajar-fi-dar-al-bayda'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);