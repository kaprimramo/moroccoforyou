import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'tangier-travel-guide';
const SLUG_FR = 'guide-voyage-tanger';
const SLUG_AR = 'dalil-safar-tanja';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(6555970);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Tangier Travel Guide 2026 — Morocco\'s #1 Destination: Gateway Between Two Continents',
  metaDescription: 'Complete Tangier travel guide 2026: Cape Spartel, Hercules Caves, Kasbah Museum, ferry from Spain, Al Boraq high-speed train, American Legation Museum, halal luxury hotels, and real prices for Morocco\'s fastest-growing city.',
  title: 'Tangier Travel Guide 2026: Morocco\'s #1 Destination — Where Two Continents Meet',
  description: 'The complete Tangier guide written by a Casablanca-based team that connects clients to Morocco\'s northern gateway daily via the Al Boraq high-speed train. In 2026 Tangier overtook Marrakech as Morocco\'s #1 tourism destination — here is why, with real prices, ferry and train logistics, and honest advice for every kind of traveler, from European day-trippers to Gulf luxury seekers.',
  keyword: 'tangier travel guide',
  coverImage: COVER,
  coverAlt: 'Tangier travel guide 2026 — view across the Strait of Gibraltar from Cape Spartel where the Atlantic meets the Mediterranean',
  publishedISO: '2026-08-13',
  updatedISO: '2026-08-13',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 18,
  intro: 'Quick answer: in 2026, Tangier overtook Marrakech to become Morocco\'s #1 tourism destination — driven by billions of dirhams in new infrastructure, the Al Boraq high-speed train cutting the Casablanca connection to 2h10, a growing luxury hotel scene, and its unmatched position just 14 km from Spain across the Strait of Gibraltar. For over a century this port city has drawn a strange and brilliant mix of people — Phoenician traders, international diplomats, Beat Generation writers, rock stars, and now a new wave of travelers rediscovering a city that is simultaneously ancient, cosmopolitan, and genuinely affordable. Our Casablanca-based team moves clients through Tangier constantly via the high-speed rail corridor. This is the honest, practical guide we give them.',
  sections: [
    {
      heading: 'Is Tangier Worth Visiting? The Honest Answer',
      paragraphs: [
        'Tangier earns its 2026 status as Morocco\'s top destination for a simple reason: it delivers the country\'s full sensory experience — a real medina, a real kasbah, real souks — in a package that is more relaxed, more walkable, and more international than Marrakech or Fes, at a fraction of European prices just across a narrow strait.',
        'The city carries a genuinely unusual history. For much of the 20th century Tangier was an International Zone, administered jointly by multiple foreign powers rather than fully by Morocco or any single colonial ruler — a status that made it a magnet for spies, exiled royalty, and a remarkable roster of writers and artists: Paul Bowles, William S. Burroughs, Jack Kerouac, Tennessee Williams, and Henri Matisse all spent formative time here, and the Rolling Stones famously took mint tea at Café Hafa. That layered, multicultural DNA is still visible everywhere — in the mix of Spanish, French, and Moroccan architecture, and in a medina that feels distinctly less chaotic and more manageable than its southern counterparts.',
        'The honest caveat: Tangier\'s beach is functional rather than beautiful by Agadir or Essaouira standards, and its port-city energy means it lacks some of the deep imperial-city gravitas of Fes or Marrakech. Come to Tangier for its position, its layered history, its literary pedigree, and its role as the smartest gateway into the rest of Morocco — not for a beach holiday.',
      ],
      callout: {
        label: '🇲🇦 Local Verdict',
        body: 'Tangier in 2026 is not a "before you get to the real Morocco" stop anymore — it has become a legitimate primary destination in its own right, and the statistics back it up: it now outpaces Marrakech in visitor growth. Give it 2 full days minimum. It also happens to be the smartest possible starting point for a north Morocco loop toward Chefchaouen and Asilah.',
      },
    },
    {
      heading: 'Tangier Quick Facts 2026',
      paragraphs: ['Everything you need to know before arrival.'],
      table: {
        caption: 'Tangier essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Status 2026', 'Morocco\'s #1 tourism destination — overtook Marrakech in visitor growth'],
          ['Population', '~1.1 million'],
          ['Location', 'Africa\'s northwestern tip — Strait of Gibraltar, 14 km from Spain at the closest point'],
          ['Airport', 'Tangier Ibn Battouta Airport (TNG) — ~15 km / 25–30 min from city centre'],
          ['Ferry from Spain', 'Tarifa or Algeciras to Tangier — 35–60 min crossing, multiple daily departures'],
          ['High-speed train (Al Boraq)', 'Tangier ↔ Casablanca in 2h10 at up to 320 km/h — Africa\'s only high-speed rail line'],
          ['Distance from Casablanca (CMN)', '~340 km by road, 3h45–4h15 driving; 2h10 by Al Boraq train'],
          ['Distance from Chefchaouen', '~110 km, 1h45–2h driving'],
          ['Famous for', 'Cape Spartel, Hercules Caves, Kasbah, American Legation Museum, Café Hafa, literary history'],
          ['Best time to visit', 'April–June and September–October'],
          ['How many days needed', '2 days minimum — 3 to add Asilah or Chefchaouen day trips'],
          ['Car rental from Tangier', 'From MAD 250/day (€23) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'How to Get to Tangier — Every Route Explained',
      paragraphs: [
        'Tangier is unique among Moroccan cities in offering four genuinely practical entry points, which is a large part of why it works for such a wide range of travelers.',
      ],
      table: {
        caption: 'Getting to Tangier — all options 2026',
        headers: ['Method', 'From', 'Time', 'Price', 'Best for'],
        rows: [
          ['Ferry', 'Tarifa or Algeciras, Spain', '35–60 min', '€35–65 one-way (car extra)', 'European travelers already in southern Spain — genuinely a day trip'],
          ['Al Boraq high-speed train', 'Casablanca (Casa-Voyageurs)', '2h10', 'MAD 150–250 (2nd class)', 'Anyone flying into Casablanca — the fastest, most comfortable domestic option'],
          ['Al Boraq high-speed train', 'Rabat (Rabat-Agdal)', '~1h', 'MAD 100–180', 'Combining with a Rabat stop'],
          ['Flight', 'Various European/Gulf cities direct', 'Varies', 'Varies', 'Direct international arrivals — Tangier Ibn Battouta has a growing route network'],
          ['Rental car', 'Casablanca (CMN)', '3h45–4h15', 'From MAD 250/day', 'Travelers wanting to explore the north coast and Rif independently'],
        ],
      },
      callout: {
        label: '🚄 Why the Al Boraq Train Changes Everything',
        body: 'Before 2018, Tangier to Casablanca meant a 5-hour slog. Al Boraq — Africa\'s only high-speed rail line, running at up to 320 km/h — cut that to 2h10, with departures roughly every hour from 6am to 9pm. This makes Tangier a genuinely easy add-on to any Casablanca-based itinerary, and turns a Rabat stopover into a simple 1-hour hop.',
      },
    },
    {
      heading: 'Top Things to Do in Tangier',
      paragraphs: [
        'Tangier\'s attractions divide naturally into medina/kasbah heritage, natural landmarks unique to its geographic position, and the layered international history that sets it apart from any other Moroccan city.',
      ],
      table: {
        caption: 'Best things to do in Tangier 2026',
        headers: ['Attraction', 'Area', 'Time needed', 'Price', 'Notes'],
        rows: [
          ['Cape Spartel (Cap Spartel)', '14 km west of centre', '1.5–2 hours', 'Free (lighthouse exterior)', 'Africa\'s northwestern tip, 315m above the meeting point of the Atlantic and Mediterranean — Morocco\'s oldest working lighthouse (1865)'],
          ['Hercules Caves', 'Near Cape Spartel', '30–45 min', 'MAD 20–30', 'Sea caves with a famous Africa-shaped ocean opening — inhabited since prehistoric times'],
          ['Kasbah Museum', 'Kasbah, old city', '1–1.5 hours', 'MAD 80 (combined with Contemporary Art Museum)', 'Tangier\'s top museum — pre-historic to Roman-era relics plus the English colonial period'],
          ['Contemporary Art Museum', 'Former Sultan\'s Palace, Kasbah', '45 min', 'Included with Kasbah Museum ticket', 'Opened 2021 in the restored Kasbah prison — northern Morocco\'s contemporary artists'],
          ['American Legation Museum', 'Medina', '45 min–1 hour', 'Free/donation', 'The only U.S. National Historic Landmark outside American soil — marks Morocco\'s 1777 recognition of American independence'],
          ['Café Hafa', 'Clifftop, west of medina', '1 hour+', 'MAD 7 (mint tea)', 'Open since 1921 — terraced clifftop tables with Spain visible across the strait; hosted the Rolling Stones, Matisse and generations of writers'],
          ['Grand Socco & Petit Socco', 'Medina entrance / medina heart', '1 hour', 'Free', 'Where the modern city meets the old — Tangier\'s two great meeting squares'],
          ['Tangier Medina', 'Old city', '1.5–2 hours', 'Free', 'Notably calmer and more manageable than Fes or Marrakech'],
          ['St. Andrew\'s Church', 'Near Grand Socco', '20–30 min', 'Free', 'Moorish-Christian sanctuary where Matisse painted in 1912'],
        ],
      },
      callout: {
        label: '📸 The Ten-Experience Shortlist',
        body: 'Short on time? These define a Tangier visit: Cape Spartel at sunset, Hercules Caves, the Kasbah Museum, mint tea at Café Hafa, a walk through the medina from Grand Socco to Petit Socco, the American Legation Museum, and — if you have an extra half day — the ferry-view crossing itself, even as a round trip.',
      },
    },
    {
      heading: 'Why Tangier Works for Every Kind of Traveler',
      paragraphs: [
        'Few Moroccan cities appeal this broadly across nationalities and travel styles — worth understanding why, whichever kind of traveler you are.',
      ],
      table: {
        caption: 'Tangier by traveler type — what each audience finds here',
        headers: ['Traveler type', 'Why Tangier appeals', 'What to prioritize'],
        rows: [
          ['European travelers (day-trippers)', 'Just 14 km from Spain — a genuine day trip from Tarifa or a weekend from anywhere in southern Spain', 'Ferry timing, medina, Cape Spartel — all doable in a long day'],
          ['American travelers', 'The American Legation Museum is the only U.S. National Historic Landmark outside the United States — marking Morocco as the first nation to recognize U.S. independence in 1777', 'The Legation Museum, plus the Beat Generation literary trail (Bowles, Burroughs, Kerouac all lived here)'],
          ['British & literary travelers', 'A genuine literary pilgrimage city — Paul Bowles wrote here for decades, the Rolling Stones and Matisse are part of local lore, Café Hafa is a living piece of that history', 'Café Hafa, the medina walk, secondhand bookshops referencing the Interzone era'],
          ['Gulf travelers (Saudi, UAE, Qatar)', 'Shared Islamic heritage, halal dining as standard, growing luxury hotel investment (Waldorf Astoria, Hilton and others planned 2025–2026), privacy-focused boutique properties', 'Luxury riads and new 5-star openings, private guided tours, halal-certified dining — no special search needed, it is the default'],
          ['Families', 'Manageable, walkable medina; genuinely calmer vendor pressure than Marrakech or Fes; the American Legation and caves work well for children', 'Cape Spartel, Hercules Caves, the beach for a relaxed afternoon'],
        ],
      },
    },
    {
      heading: 'Tangier for Gulf and Muslim Travelers',
      paragraphs: [
        'Morocco\'s appeal to Gulf travelers — from Saudi Arabia, the UAE, Qatar, and Kuwait — has grown into one of its fastest-expanding tourism segments, and Tangier is positioned to benefit directly from this shift, with shared Islamic cultural heritage, halal-friendly dining as the default rather than an exception, and a wave of new luxury hospitality investment aimed squarely at this market.',
        'Halal dining requires no special search in Tangier — it is standard across virtually every restaurant. Prayer facilities are widely available, and the city\'s mosques, including the historic Grand Mosque near the medina, are architecturally significant in their own right. For families and Gulf travelers prioritizing privacy, look for riads offering private courtyards and women-only hammam options, increasingly common in the city\'s boutique accommodation scene.',
      ],
      callout: {
        label: '🕌 Practical Notes for Gulf Travelers',
        body: 'International hotel brands including Waldorf Astoria and Hilton have properties planned or opening in Morocco through 2025–2026, part of a broader push to capture the Gulf luxury travel segment — expect Tangier and the wider northern coast to see continued growth in 5-star and boutique-private offerings. When booking, confirm halal certification and prayer-facility details directly with the property, as standards vary between traditional riads and international chains.',
      },
    },
    {
      heading: 'Beyond Tangier — The Mediterranean Rif Coast',
      paragraphs: [
        'Tangier is also the natural gateway to a stretch of Morocco most international visitors never see: the Mediterranean Rif coast running east toward Algeria, past Tetouan, Al Hoceima, Nador, and Saïdia. This is genuinely off-the-radar territory for most travel itineraries, offering Mediterranean beaches, dramatic mountain-meets-sea landscapes, and authentic Amazigh (Berber) culture with a fraction of the tourist traffic of the Atlantic coast.',
      ],
      table: {
        caption: 'Mediterranean Rif coast towns worth knowing 2026',
        headers: ['Town', 'Distance from Tangier', 'Character', 'Highlight'],
        rows: [
          ['Tetouan', '~60 km, 1 hour', 'UNESCO-listed medina with distinctly Andalusian architecture', 'Often called the "daughter of Granada" — closest medina to Spain in feel'],
          ['Al Hoceima', '~300 km, 5–6 hours (or via Fes)', '"Pearl of the Mediterranean" — pristine bay beaches, national park', 'Quemado and Cala Iris beaches, dramatic Rif Mountain backdrop, excellent diving'],
          ['Nador', '~380 km', 'Rif coast city on Marchica lagoon — one of the Mediterranean\'s largest', 'Cap des Trois Fourches peninsula, gateway to Spanish Melilla, authentic Riffian culture'],
          ['Saïdia', '~450 km, near Algerian border', '"Blue Pearl of the Mediterranean" — Morocco\'s largest beach resort', 'Long sandy beaches, marina development, quieter than Atlantic resorts'],
        ],
      },
      callout: {
        label: '🏔️ The Rif Mountains',
        body: 'Between the coastal towns lies the Rif range itself — over 300 km long, up to 2,500m high, and one of Morocco\'s least-visited mountain regions. The most scenic overland routes run between Chefchaouen and Fes via Ketama, or between Al Hoceima/Nador and Taza via Aknoul — dramatic driving, best attempted with a 4x4 and genuinely worth it for travelers seeking landscapes far from the standard circuit.',
      },
    },
    {
      paragraphs: [
        'Tangier\'s position makes it an excellent base for exploring Morocco\'s far north — a region most standard itineraries skip entirely in favor of jumping straight to Chefchaouen or Fes.',
      ],
      table: {
        caption: 'Best day trips from Tangier 2026',
        headers: ['Destination', 'Distance', 'Drive time', 'Why go'],
        rows: [
          ['Chefchaouen', '~110 km', '1h45–2h', 'The Blue City — Tangier is the most common day-trip or one-way departure point'],
          ['Asilah', '~45 km', '45 min', 'Small whitewashed coastal town, murals, laid-back Atlantic beach atmosphere'],
          ['Cape Spartel & Hercules Caves', '14 km', '20–30 min', 'Essential half-day, easily combined into one trip'],
          ['Tetouan', '~60 km', '1 hour', 'UNESCO-listed medina, distinctly Andalusian architectural character'],
          ['Ceuta (Spanish enclave)', '~40 km to border', '45 min + border crossing', 'A genuine curiosity — Spanish territory on the African continent'],
        ],
      },
      callout: {
        label: '🚗 Explore the North with a Rental Car',
        body: 'Tangier is the ideal starting point for a north Morocco loop — Chefchaouen, Tetouan, and Asilah are all within easy driving distance, and the Al Boraq train connects you back to Casablanca or Rabat when you\'re ready to continue south. Economy cars from MAD 250/day (€23), free meet & greet available. +212 634 276 534',
      },
    },
    {
      heading: 'What to Eat in Tangier',
      paragraphs: [
        'Tangier\'s cuisine reflects its layered history — Moroccan, Andalusian, and European influences meet in a genuinely distinctive coastal food culture.',
      ],
      table: {
        caption: 'What to eat in Tangier 2026',
        headers: ['Dish/Experience', 'Where', 'Price', 'Notes'],
        rows: [
          ['Fresh seafood', 'Port area, medina restaurants', 'MAD 80–200', 'Tangier\'s coastal position means genuinely fresh daily catch'],
          ['Maakouda (potato fritters)', 'Street stalls throughout the medina', 'MAD 3–8', 'Iconic Tangier street snack'],
          ['Mint tea at Café Hafa', 'Clifftop terrace', 'MAD 7', 'The essential Tangier ritual — cheap, historic, unbeatable view'],
          ['Tagine and couscous', 'Medina restaurants', 'MAD 50–120', 'Standard Moroccan staples, well executed'],
          ['Andalusian-influenced dishes', 'Traditional restaurants', 'MAD 60–150', 'A legacy of Tangier\'s Spanish and Portuguese historical ties'],
        ],
      },
    },
    {
      heading: 'Where to Stay in Tangier',
      paragraphs: [
        'Tangier offers a genuine spread from budget medina guesthouses to new international 5-star properties reflecting the city\'s 2025–2026 investment wave.',
      ],
      table: {
        caption: 'Where to stay in Tangier 2026',
        headers: ['Area', 'Vibe', 'Best for', 'Price range/night'],
        rows: [
          ['Medina / Kasbah', 'Historic, atmospheric, walkable', 'First-timers, culture-focused travelers', 'MAD 300–1,200 (€28–111)'],
          ['New Town (Ville Nouvelle)', 'Modern, business-friendly, near the Boulevard', 'Business travelers, families wanting comfort', 'MAD 400–1,500 (€37–139)'],
          ['Marina / waterfront', 'New development, upscale, sea views', 'Gulf and luxury travelers, honeymooners', 'MAD 800–3,500+ (€74–325+)'],
          ['Malabata (east of centre)', 'Beach resort area, quieter', 'Beach-priority travelers, families', 'MAD 500–2,000 (€46–185)'],
        ],
      },
    },
    {
      heading: 'Best Time to Visit Tangier',
      paragraphs: [
        'Tangier\'s Strait of Gibraltar position gives it a genuinely temperate, wind-influenced climate distinct from inland Morocco.',
      ],
      table: {
        caption: 'Best time to visit Tangier — month by month 2026',
        headers: ['Period', 'Temperature', 'Character', 'Verdict'],
        rows: [
          ['April–June', '16–24°C', 'Mild, fresh Atlantic breeze, occasional rain', '⭐ Ideal — comfortable walking weather'],
          ['July–August', '22–28°C', 'Warm, breezy, peak European ferry traffic', 'Good but busiest — book ferries and hotels ahead'],
          ['September–October', '20–26°C', 'Warm, clear, fewer crowds', '⭐ Excellent — arguably the best season'],
          ['November–March', '11–17°C', 'Cool, wetter, Atlantic winds stronger', 'Fine for city sightseeing, less ideal for the beach'],
        ],
      },
    },
    {
      heading: 'Tangier vs Casablanca vs Marrakech',
      paragraphs: [
        'A common question from travelers deciding where to prioritize.',
      ],
      table: {
        caption: 'Tangier vs other major Moroccan cities 2026',
        headers: ['City', '2026 status', 'Character', 'Best for'],
        rows: [
          ['Tangier', 'Morocco\'s #1 tourism destination (2026)', 'Gateway city, layered international history, coastal', 'European day trips, literary/historic interest, north Morocco base'],
          ['Casablanca', 'Business capital, major airport hub', 'Modern, cosmopolitan, Atlantic corniche', 'Business travel, Hassan II Mosque, airport arrivals'],
          ['Marrakech', 'Most visited historically, still #1 in absolute numbers', 'Theatrical medina, souks, day trips to Atlas/Sahara', 'First-time visitors wanting classic "Morocco" imagery'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Is Tangier worth visiting in 2026?',
      answer: 'Yes — in 2026 Tangier officially overtook Marrakech as Morocco\'s #1 tourism destination by visitor growth, driven by major infrastructure investment, the Al Boraq high-speed train connection, and a wave of new luxury hospitality. It offers a genuine medina and kasbah experience, unique layered international history, and a position just 14 km from Spain, all at a fraction of European prices.',
    },
    {
      question: 'How do you get from Casablanca to Tangier?',
      answer: 'The fastest option is the Al Boraq high-speed train, taking 2h10 at up to 320 km/h between Casa-Voyageurs and Tangier Ville, with departures roughly every hour from 6am to 9pm (MAD 150–250, second class). By rental car it takes 3h45–4h15 over approximately 340 km. Domestic flights also connect the two cities.',
    },
    {
      question: 'Can you visit Tangier as a day trip from Spain?',
      answer: 'Yes — ferries from Tarifa or Algeciras take 35–60 minutes to cross the Strait of Gibraltar, making Tangier a genuinely practical day trip from southern Spain, with multiple daily departures and one-way fares typically €35–65.',
    },
    {
      question: 'Why is the American Legation Museum in Tangier significant?',
      answer: 'It is the only U.S. National Historic Landmark located outside the United States, marking the site where Morocco became the first country in the world to formally recognize American independence, in 1777. The five-story former diplomatic mission is now a museum covering Moroccan-American relations and history.',
    },
    {
      question: 'Is Tangier good for Gulf and Muslim travelers?',
      answer: 'Yes — Tangier offers halal dining as a standard rather than an exception, widely available prayer facilities, and a growing wave of luxury hospitality investment (including international brands like Waldorf Astoria and Hilton planned for 2025–2026) aimed at Gulf travelers seeking privacy-focused, culturally comfortable luxury experiences.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is Tangier known for?', answer: 'Tangier is known for its position at the meeting point of the Atlantic and Mediterranean just 14 km from Spain, its historic Kasbah and medina, its unusual 20th-century status as an International Zone that attracted writers like Paul Bowles and William Burroughs, the iconic clifftop Café Hafa (open since 1921), and its role as Morocco\'s main gateway to Europe. In 2026 it became Morocco\'s #1 tourism destination.' },
    { question: 'How far is Tangier from Chefchaouen?', answer: 'Tangier is approximately 110 km from Chefchaouen, about 1h45–2h driving. Tangier is one of the most common departure points for day trips to Chefchaouen, and many north-Morocco itineraries connect the two cities directly.' },
    { question: 'What is the Al Boraq train and how much does it cost?', answer: 'Al Boraq is Africa\'s only high-speed rail line, connecting Tangier to Casablanca in 2h10 at speeds up to 320 km/h. Second-class fares typically run MAD 150–250, with first class MAD 200–300, and trains depart roughly every hour from early morning to evening.' },
  ],
  relatedDestinations: ['chefchaouen', 'casablanca', 'rabat'],
  relatedPosts: ['chefchaouen-travel-guide', 'casablanca-travel-guide', 'rabat-travel-guide', 'casablanca-airport-guide-cmn'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Tanger 2026 — Destination #1 du Maroc : Porte Entre Deux Continents',
  metaDescription: 'Guide complet Tanger 2026 : Cap Spartel, Grottes d\'Hercule, Musée de la Kasbah, ferry depuis l\'Espagne, train Al Boraq, Musée de la Légation Américaine, hôtels de luxe halal, et vrais prix.',
  title: 'Guide Voyage Tanger 2026 : Destination #1 du Maroc — Où Deux Continents se Rencontrent',
  description: 'Le guide Tanger complet rédigé par une équipe casablancaise qui connecte des clients à la porte nord du Maroc quotidiennement via le train à grande vitesse Al Boraq. En 2026, Tanger a détrôné Marrakech comme destination touristique n°1 du Maroc.',
  keyword: 'guide voyage tanger',
  coverImage: COVER,
  coverAlt: 'Guide voyage Tanger 2026 — vue sur le détroit de Gibraltar depuis le Cap Spartel où l\'Atlantique rencontre la Méditerranée',
  publishedISO: '2026-08-13',
  updatedISO: '2026-08-13',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 18,
  intro: 'Réponse rapide : en 2026, Tanger a détrôné Marrakech pour devenir la destination touristique n°1 du Maroc — portée par des milliards de dirhams d\'infrastructures nouvelles, le train à grande vitesse Al Boraq réduisant la liaison Casablanca à 2h10, une scène hôtelière de luxe croissante, et sa position unique à seulement 14 km de l\'Espagne. Notre équipe casablancaise fait transiter des clients par Tanger constamment via le corridor ferroviaire à grande vitesse. Voici le guide honnête et pratique que nous leur donnons.',
  sections: [
    {
      heading: 'Tanger Vaut-elle le Détour ? La Réponse Honnête',
      paragraphs: [
        'Tanger mérite son statut 2026 de première destination du Maroc pour une raison simple : elle offre l\'expérience sensorielle complète du pays — une vraie médina, une vraie kasbah — dans un format plus détendu, plus praticable à pied, et plus international que Marrakech ou Fès.',
        'La ville porte une histoire véritablement singulière. Pendant une grande partie du 20e siècle, Tanger fut une Zone Internationale, administrée conjointement par plusieurs puissances étrangères — un statut qui en fit un aimant pour espions, royauté exilée, et une liste remarquable d\'écrivains et artistes : Paul Bowles, William S. Burroughs, Jack Kerouac, Tennessee Williams et Henri Matisse y ont tous séjourné, et les Rolling Stones ont pris le thé à la menthe au Café Hafa.',
        'La réserve honnête : la plage de Tanger est fonctionnelle plutôt que magnifique comparée à Agadir ou Essaouira. Venez à Tanger pour sa position, son histoire en couches, son pedigree littéraire et son rôle de porte d\'entrée la plus intelligente vers le reste du Maroc.',
      ],
      callout: {
        label: '🇲🇦 Verdict Local',
        body: 'Tanger en 2026 n\'est plus une étape "avant le vrai Maroc" — elle est devenue une destination principale légitime en soi. Donnez-lui 2 jours complets minimum. C\'est aussi le point de départ le plus intelligent pour une boucle nord Maroc vers Chefchaouen et Asilah.',
      },
    },
    {
      heading: 'Tanger en Chiffres — Infos Essentielles 2026',
      paragraphs: ['Tout ce qu\'il faut savoir avant d\'arriver.'],
      table: {
        caption: 'Infos essentielles Tanger 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Statut 2026', 'Destination touristique n°1 du Maroc'],
          ['Population', '~1,1 million'],
          ['Localisation', 'Pointe nord-ouest de l\'Afrique — Détroit de Gibraltar, 14 km de l\'Espagne'],
          ['Aéroport', 'Aéroport Tanger Ibn Battouta (TNG) — ~15 km / 25–30 min du centre'],
          ['Ferry depuis l\'Espagne', 'Tarifa ou Algésiras vers Tanger — 35–60 min de traversée'],
          ['Train grande vitesse (Al Boraq)', 'Tanger ↔ Casablanca en 2h10 à 320 km/h'],
          ['Distance depuis Casablanca', '~340 km par route, 3h45–4h15 ; 2h10 en train Al Boraq'],
          ['Distance depuis Chefchaouen', '~110 km, 1h45–2h de route'],
          ['Meilleure période', 'Avril–juin et septembre–octobre'],
          ['Durée recommandée', '2 jours minimum'],
          ['Location voiture depuis Tanger', 'Dès MAD 250/jour (23€) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'Comment Rejoindre Tanger — Chaque Route Expliquée',
      paragraphs: ['Tanger offre quatre points d\'entrée véritablement pratiques.'],
      table: {
        caption: 'Rejoindre Tanger — toutes les options 2026',
        headers: ['Méthode', 'Depuis', 'Durée', 'Prix', 'Idéal pour'],
        rows: [
          ['Ferry', 'Tarifa ou Algésiras, Espagne', '35–60 min', '35–65€ aller simple', 'Voyageurs européens déjà en Espagne du sud'],
          ['Train Al Boraq', 'Casablanca (Casa-Voyageurs)', '2h10', 'MAD 150–250 (2e classe)', 'Quiconque atterrit à Casablanca'],
          ['Train Al Boraq', 'Rabat (Rabat-Agdal)', '~1h', 'MAD 100–180', 'Combiner avec un arrêt Rabat'],
          ['Vol', 'Diverses villes européennes/Golfe', 'Variable', 'Variable', 'Arrivées internationales directes'],
          ['Voiture de location', 'Casablanca (CMN)', '3h45–4h15', 'Dès MAD 250/jour', 'Explorer la côte nord indépendamment'],
        ],
      },
      callout: {
        label: '🚄 Pourquoi le Train Al Boraq Change Tout',
        body: 'Avant 2018, Tanger à Casablanca signifiait 5 heures de route. Al Boraq — la seule ligne à grande vitesse d\'Afrique, jusqu\'à 320 km/h — a réduit cela à 2h10, avec des départs environ toutes les heures de 6h à 21h.',
      },
    },
    {
      heading: 'Meilleures Choses à Faire à Tanger',
      paragraphs: ['Les attractions de Tanger se répartissent entre patrimoine médina/kasbah, sites naturels uniques, et histoire internationale en couches.'],
      table: {
        caption: 'Meilleures choses à faire à Tanger 2026',
        headers: ['Attraction', 'Zone', 'Temps', 'Prix', 'Notes'],
        rows: [
          ['Cap Spartel', '14 km à l\'ouest', '1,5–2 heures', 'Gratuit', 'Pointe nord-ouest de l\'Afrique, 315m au-dessus de la rencontre Atlantique-Méditerranée'],
          ['Grottes d\'Hercule', 'Près du Cap Spartel', '30–45 min', 'MAD 20–30', 'Grottes marines avec ouverture en forme d\'Afrique'],
          ['Musée de la Kasbah', 'Kasbah, vieille ville', '1–1,5 heure', 'MAD 80 (combiné)', 'Meilleur musée de Tanger — reliques préhistoriques à romaines'],
          ['Musée de la Légation Américaine', 'Médina', '45 min–1 heure', 'Gratuit/don', 'Seul monument historique national américain hors des USA'],
          ['Café Hafa', 'Falaise, ouest de la médina', '1 heure+', 'MAD 7 (thé)', 'Ouvert depuis 1921 — vue sur l\'Espagne, Rolling Stones et Matisse'],
          ['Grand Socco & Petit Socco', 'Médina', '1 heure', 'Gratuit', 'Où la ville moderne rencontre l\'ancienne'],
          ['Médina de Tanger', 'Vieille ville', '1,5–2 heures', 'Gratuit', 'Nettement plus calme que Fès ou Marrakech'],
        ],
      },
    },
    {
      heading: 'Pourquoi Tanger Convient à Tous les Types de Voyageurs',
      paragraphs: ['Peu de villes marocaines séduisent aussi largement selon les nationalités et styles de voyage.'],
      table: {
        caption: 'Tanger par type de voyageur',
        headers: ['Type de voyageur', 'Pourquoi Tanger séduit', 'À privilégier'],
        rows: [
          ['Européens (excursions)', 'À seulement 14 km de l\'Espagne', 'Ferry, médina, Cap Spartel en une longue journée'],
          ['Américains', 'Le Musée de la Légation Américaine est le seul monument historique national US hors des États-Unis', 'Musée de la Légation, route littéraire Beat Generation'],
          ['Britanniques et littéraires', 'Ville de pèlerinage littéraire — Paul Bowles y a écrit des décennies', 'Café Hafa, marche médina, librairies d\'occasion'],
          ['Voyageurs du Golfe', 'Patrimoine islamique partagé, restauration halal standard, nouveaux hôtels de luxe (Waldorf Astoria, Hilton 2025-2026)', 'Riads de luxe, nouvelles ouvertures 5 étoiles'],
          ['Familles', 'Médina praticable et calme, pression vendeurs réduite', 'Cap Spartel, Grottes d\'Hercule, plage'],
        ],
      },
    },
    {
      heading: 'Tanger pour les Voyageurs du Golfe et Musulmans',
      paragraphs: [
        'L\'attrait du Maroc pour les voyageurs du Golfe — Arabie Saoudite, EAU, Qatar, Koweït — est devenu l\'un de ses segments touristiques à la croissance la plus rapide, et Tanger en bénéficie directement grâce à un patrimoine islamique partagé et une restauration halal par défaut.',
        'La restauration halal ne nécessite aucune recherche spéciale à Tanger — c\'est le standard partout. Les installations de prière sont largement disponibles.',
      ],
      callout: {
        label: '🕌 Notes Pratiques pour Voyageurs du Golfe',
        body: 'Des marques hôtelières internationales dont Waldorf Astoria et Hilton ont des propriétés prévues ou en ouverture au Maroc jusqu\'en 2025-2026, visant le segment luxe du Golfe.',
      },
    },
    {
      heading: 'Au-delà de Tanger — La Côte Méditerranéenne du Rif',
      paragraphs: ['Tanger est aussi la porte naturelle vers un tronçon du Maroc que la plupart des visiteurs internationaux ne voient jamais : la côte méditerranéenne du Rif vers l\'est — Tétouan, Al Hoceima, Nador, Saïdia.'],
      table: {
        caption: 'Villes de la côte méditerranéenne du Rif 2026',
        headers: ['Ville', 'Distance depuis Tanger', 'Caractère', 'Point fort'],
        rows: [
          ['Tétouan', '~60 km, 1h', 'Médina UNESCO d\'architecture andalouse', 'Souvent appelée "fille de Grenade"'],
          ['Al Hoceima', '~300 km, 5–6h', '"Perle de la Méditerranée" — baie immaculée', 'Plages Quemado et Cala Iris, plongée excellente'],
          ['Nador', '~380 km', 'Ville côtière sur la lagune Marchica', 'Cap des Trois Fourches, porte vers Melilla'],
          ['Saïdia', '~450 km, près frontière algérienne', '"Perle Bleue de la Méditerranée"', 'Plus grande station balnéaire du Maroc'],
        ],
      },
      callout: {
        label: '🏔️ Les Montagnes du Rif',
        body: 'Entre les villes côtières se trouve le massif du Rif lui-même — plus de 300 km de long, jusqu\'à 2 500m d\'altitude. Les routes les plus scéniques passent entre Chefchaouen et Fès via Ketama.',
      },
    },
    {
      heading: 'Excursions depuis Tanger',
      paragraphs: ['La position de Tanger en fait une excellente base pour explorer l\'extrême nord du Maroc.'],
      table: {
        caption: 'Meilleures excursions depuis Tanger 2026',
        headers: ['Destination', 'Distance', 'Trajet', 'Pourquoi y aller'],
        rows: [
          ['Chefchaouen', '~110 km', '1h45–2h', 'La Ville Bleue'],
          ['Asilah', '~45 km', '45 min', 'Petite ville côtière blanche, murales'],
          ['Cap Spartel', '14 km', '20–30 min', 'Demi-journée essentielle'],
          ['Tétouan', '~60 km', '1h', 'Médina UNESCO'],
        ],
      },
      callout: {
        label: '🚗 Explorez le Nord en Voiture de Location',
        body: 'Tanger est le point de départ idéal pour une boucle nord Maroc. Économique dès MAD 250/jour (23€). +212 634 276 534',
      },
    },
    {
      heading: 'Que Manger à Tanger',
      paragraphs: ['La cuisine de Tanger reflète son histoire en couches.'],
      table: {
        caption: 'Que manger à Tanger 2026',
        headers: ['Plat', 'Où', 'Prix', 'Notes'],
        rows: [
          ['Fruits de mer frais', 'Zone portuaire', 'MAD 80–200', 'Pêche vraiment fraîche'],
          ['Maakouda', 'Étals de rue', 'MAD 3–8', 'Snack emblématique'],
          ['Thé à la menthe Café Hafa', 'Terrasse falaise', 'MAD 7', 'Le rituel essentiel'],
        ],
      },
    },
    {
      heading: 'Où Dormir à Tanger',
      paragraphs: ['Tanger offre un éventail allant des guesthouses médina aux nouveaux 5 étoiles internationaux.'],
      table: {
        caption: 'Où dormir à Tanger 2026',
        headers: ['Zone', 'Ambiance', 'Idéal pour', 'Prix/nuit'],
        rows: [
          ['Médina / Kasbah', 'Historique', 'Premiers visiteurs', 'MAD 300–1 200 (28–111€)'],
          ['Ville Nouvelle', 'Moderne', 'Affaires, familles', 'MAD 400–1 500 (37–139€)'],
          ['Marina', 'Nouveau, haut de gamme', 'Golfe, luxe', 'MAD 800–3 500+ (74–325€+)'],
        ],
      },
    },
  ],
  faqs: [
    { question: 'Tanger vaut-elle le détour en 2026 ?', answer: 'Oui — en 2026 Tanger a officiellement détrôné Marrakech comme destination touristique n°1 du Maroc par croissance de visiteurs, portée par les infrastructures et le train Al Boraq.' },
    { question: 'Comment aller de Casablanca à Tanger ?', answer: 'Le train Al Boraq, 2h10 à 320 km/h, MAD 150-250 en 2e classe. En voiture 3h45-4h15.' },
    { question: 'Peut-on visiter Tanger en excursion depuis l\'Espagne ?', answer: 'Oui — ferries de Tarifa ou Algésiras, 35-60 minutes, 35-65€ aller simple.' },
    { question: 'Pourquoi le Musée de la Légation Américaine est-il important ?', answer: 'Seul monument historique national américain hors des USA, marquant où le Maroc reconnut l\'indépendance américaine en 1777.' },
    { question: 'Tanger convient-elle aux voyageurs du Golfe ?', answer: 'Oui — restauration halal standard, installations de prière disponibles, investissements de luxe croissants.' },
  ],
  peopleAlsoAsk: [
    { question: 'Pour quoi Tanger est-elle connue ?', answer: 'Sa position au détroit de Gibraltar, sa Kasbah historique, son statut de Zone Internationale au 20e siècle, le Café Hafa, et son statut de destination n°1 du Maroc en 2026.' },
    { question: 'Distance Tanger-Chefchaouen ?', answer: '~110 km, 1h45-2h de route.' },
    { question: 'Qu\'est-ce que le train Al Boraq ?', answer: 'Seule ligne à grande vitesse d\'Afrique, Tanger-Casablanca en 2h10 à 320 km/h.' },
  ],
  relatedDestinations: ['chefchaouen', 'casablanca', 'rabat'],
  relatedPosts: ['guide-voyage-chefchaouen', 'guide-voyage-casablanca', 'guide-voyage-rabat', 'guide-aeroport-casablanca-cmn'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر لطنجة 2026 — الوجهة الأولى في المغرب: بوابة بين قارتين',
  metaDescription: 'دليل شامل لطنجة 2026: رأس سبارطيل، مغارات هرقل، متحف القصبة، العبّارة من إسبانيا، قطار البراق السريع، متحف السفارة الأمريكية، فنادق فاخرة حلال، وأسعار حقيقية.',
  title: 'دليل السفر لطنجة 2026: الوجهة الأولى في المغرب — حيث تلتقي القارتان',
  description: 'دليل طنجة الشامل من فريق مقيم في الدار البيضاء ينقل عملاء لبوابة المغرب الشمالية يومياً عبر قطار البراق السريع. في 2026 تجاوزت طنجة مراكش لتصبح الوجهة السياحية الأولى في المغرب.',
  keyword: 'دليل السفر لطنجة',
  coverImage: COVER,
  coverAlt: 'دليل السفر لطنجة 2026 — إطلالة على مضيق جبل طارق من رأس سبارطيل حيث يلتقي الأطلسي بالمتوسط',
  publishedISO: '2026-08-13',
  updatedISO: '2026-08-13',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 18,
  intro: 'إجابة سريعة: في 2026 تجاوزت طنجة مراكش لتصبح الوجهة السياحية الأولى في المغرب — مدفوعة باستثمارات بنية تحتية ضخمة، وقطار البراق السريع الذي يختصر الاتصال بالدار البيضاء إلى 2:10 ساعة، ومشهد فنادق فاخرة متنامٍ، وموقعها الفريد على بعد 14 كم فقط من إسبانيا. فريقنا المقيم في الدار البيضاء ينقل عملاء عبر طنجة باستمرار عبر ممر السكك الحديدية السريع. هذا هو الدليل الصادق والعملي الذي نعطيهم إياه.',
  sections: [
    {
      heading: 'هل طنجة تستحق الزيارة؟ الإجابة الصادقة',
      paragraphs: [
        'تستحق طنجة مكانتها 2026 كوجهة أولى في المغرب لسبب بسيط: تقدم التجربة الحسية الكاملة للبلد — مدينة عتيقة حقيقية وقصبة حقيقية — بحزمة أكثر استرخاءً وقابلية للمشي وعالمية من مراكش أو فاس.',
        'تحمل المدينة تاريخاً غير عادي فعلاً. لجزء كبير من القرن 20، كانت طنجة منطقة دولية، تديرها عدة قوى أجنبية معاً — وضع جعلها مغناطيساً للجواسيس والملوك المنفيين وقائمة رائعة من الكتّاب والفنانين: بول بولز وويليام بوروز وجاك كيرواك وتينيسي ويليامز وهنري ماتيس جميعهم أمضوا وقتاً هنا، واشتهر فرقة رولينغ ستونز بشرب شاي النعناع في مقهى حافة.',
        'التحفظ الصادق: شاطئ طنجة وظيفي أكثر منه جميلاً بمعايير أكادير أو الصويرة. تعال لطنجة من أجل موقعها وتاريخها الطبقي وإرثها الأدبي ودورها كأذكى بوابة لبقية المغرب.',
      ],
      callout: {
        label: '🇲🇦 حكم محلي',
        body: 'طنجة 2026 لم تعد محطة "قبل المغرب الحقيقي" — أصبحت وجهة رئيسية شرعية بحد ذاتها. أعطها يومين كاملين على الأقل. إنها أيضاً أذكى نقطة انطلاق لحلقة شمال المغرب نحو شفشاون وأصيلة.',
      },
    },
    {
      heading: 'طنجة بالأرقام — المعلومات الأساسية 2026',
      paragraphs: ['كل ما تحتاج معرفته قبل الوصول.'],
      table: {
        caption: 'المعلومات الأساسية عن طنجة 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['الوضع 2026', 'الوجهة السياحية الأولى في المغرب'],
          ['السكان', '~1.1 مليون'],
          ['الموقع', 'أقصى شمال غرب أفريقيا — مضيق جبل طارق، 14 كم من إسبانيا'],
          ['المطار', 'مطار طنجة ابن بطوطة (TNG) — ~15 كم / 25–30 دقيقة'],
          ['العبّارة من إسبانيا', 'طريفة أو الجزيرة الخضراء — 35–60 دقيقة عبور'],
          ['قطار البراق السريع', 'طنجة ↔ الدار البيضاء في 2:10 ساعة بسرعة 320 كم/س'],
          ['المسافة من الدار البيضاء', '~340 كم بالطريق، 3:45–4:15 ساعة؛ 2:10 ساعة بالقطار'],
          ['المسافة من شفشاون', '~110 كم، 1:45–2 ساعة'],
          ['أفضل وقت', 'أبريل–يونيو وسبتمبر–أكتوبر'],
          ['المدة الموصى بها', 'يومان على الأقل'],
          ['تأجير سيارة من طنجة', 'من MAD 250/يوم (23€) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'كيف تصل إلى طنجة — كل الطرق موضحة',
      paragraphs: ['تقدم طنجة أربع نقاط دخول عملية فعلاً.'],
      table: {
        caption: 'الوصول إلى طنجة — كل الخيارات 2026',
        headers: ['الطريقة', 'من', 'المدة', 'السعر', 'الأنسب لـ'],
        rows: [
          ['العبّارة', 'طريفة أو الجزيرة الخضراء، إسبانيا', '35–60 دقيقة', '35–65€ اتجاه واحد', 'المسافرون الأوروبيون بالفعل بجنوب إسبانيا'],
          ['قطار البراق', 'الدار البيضاء', '2:10 ساعة', 'MAD 150–250 (درجة 2)', 'أي شخص يهبط بالدار البيضاء'],
          ['قطار البراق', 'الرباط', '~ساعة', 'MAD 100–180', 'دمج مع محطة الرباط'],
          ['رحلة طيران', 'مدن أوروبية/خليجية متنوعة', 'متغير', 'متغير', 'وصولات دولية مباشرة'],
          ['سيارة إيجار', 'الدار البيضاء (CMN)', '3:45–4:15 ساعة', 'من MAD 250/يوم', 'استكشاف الساحل الشمالي بشكل مستقل'],
        ],
      },
      callout: {
        label: '🚄 لماذا يغير قطار البراق كل شيء',
        body: 'قبل 2018، كانت طنجة للدار البيضاء تعني 5 ساعات شاقة. البراق — خط السكك الحديدية الوحيد السريع في أفريقيا، بسرعة تصل 320 كم/س — اختصر ذلك لـ2:10 ساعة، مع رحلات كل ساعة تقريباً من 6 صباحاً حتى 9 مساءً.',
      },
    },
    {
      heading: 'أفضل الأشياء للقيام بها في طنجة',
      paragraphs: ['معالم طنجة تنقسم بين تراث المدينة العتيقة/القصبة، ومعالم طبيعية فريدة، وتاريخ دولي طبقي.'],
      table: {
        caption: 'أفضل الأشياء للقيام بها في طنجة 2026',
        headers: ['المعلم', 'المنطقة', 'الوقت', 'السعر', 'ملاحظات'],
        rows: [
          ['رأس سبارطيل', '14 كم غرباً', '1.5–2 ساعة', 'مجاني', 'أقصى شمال غرب أفريقيا، 315م فوق ملتقى الأطلسي والمتوسط'],
          ['مغارات هرقل', 'قرب رأس سبارطيل', '30–45 دقيقة', 'MAD 20–30', 'مغارات بحرية بفتحة على شكل أفريقيا'],
          ['متحف القصبة', 'القصبة، المدينة القديمة', '1–1.5 ساعة', 'MAD 80 (مشترك)', 'أفضل متحف بطنجة — قطع أثرية من عصور ما قبل التاريخ للرومان'],
          ['متحف السفارة الأمريكية', 'المدينة العتيقة', '45 دقيقة–ساعة', 'مجاني/تبرع', 'المعلم التاريخي الوطني الأمريكي الوحيد خارج أمريكا'],
          ['مقهى حافة', 'حافة الجرف، غرب المدينة', 'ساعة+', 'MAD 7 (شاي)', 'مفتوح منذ 1921 — رولينغ ستونز وماتيس'],
          ['السوق الكبير والسوق الصغير', 'المدينة', 'ساعة', 'مجاني', 'حيث تلتقي المدينة الحديثة بالقديمة'],
          ['مدينة طنجة العتيقة', 'المدينة القديمة', '1.5–2 ساعة', 'مجاني', 'أهدأ وأسهل من فاس أو مراكش ملحوظاً'],
        ],
      },
    },
    {
      heading: 'لماذا تناسب طنجة كل نوع مسافر',
      paragraphs: ['قليل من المدن المغربية تجذب بهذا الاتساع عبر الجنسيات وأنماط السفر.'],
      table: {
        caption: 'طنجة حسب نوع المسافر',
        headers: ['نوع المسافر', 'لماذا تجذب طنجة', 'الأولوية'],
        rows: [
          ['المسافرون الأوروبيون (رحلات يوم)', 'على بعد 14 كم فقط من إسبانيا', 'توقيت العبّارة، المدينة، رأس سبارطيل'],
          ['المسافرون الأمريكيون', 'متحف السفارة الأمريكية المعلم الوطني الأمريكي الوحيد خارج أمريكا', 'متحف السفارة، مسار أدب جيل البيت'],
          ['البريطانيون والأدبيون', 'مدينة حج أدبي حقيقية', 'مقهى حافة، نزهة المدينة العتيقة'],
          ['مسافرو الخليج', 'تراث إسلامي مشترك، طعام حلال قياسي، فنادق فاخرة جديدة', 'رياضات فاخرة، افتتاحات 5 نجوم جديدة'],
          ['العائلات', 'مدينة عتيقة قابلة للمشي وهادئة', 'رأس سبارطيل، مغارات هرقل، الشاطئ'],
        ],
      },
    },
    {
      heading: 'طنجة للمسافرين الخليجيين والمسلمين',
      paragraphs: [
        'جاذبية المغرب للمسافرين الخليجيين — من السعودية والإمارات وقطر والكويت — أصبحت من أسرع قطاعات السياحة نمواً، وطنجة في موقع للاستفادة مباشرة من هذا التحول بتراث إسلامي مشترك وطعام حلال كمعيار.',
        'الطعام الحلال لا يتطلب بحثاً خاصاً في طنجة — إنه المعيار في كل مكان تقريباً. مرافق الصلاة متوفرة على نطاق واسع.',
      ],
      callout: {
        label: '🕌 ملاحظات عملية لمسافري الخليج',
        body: 'ماركات فندقية دولية بما فيها Waldorf Astoria وHilton لديها عقارات مخططة أو تفتتح بالمغرب حتى 2025-2026، تستهدف قطاع السفر الفاخر الخليجي.',
      },
    },
    {
      heading: 'ما وراء طنجة — ساحل الريف المتوسطي',
      paragraphs: ['طنجة أيضاً البوابة الطبيعية لجزء من المغرب لا يراه معظم الزوار الدوليين أبداً: ساحل الريف المتوسطي شرقاً — تطوان والحسيمة والناظور والسعيدية.'],
      table: {
        caption: 'مدن ساحل الريف المتوسطي 2026',
        headers: ['المدينة', 'المسافة من طنجة', 'الطابع', 'الميزة'],
        rows: [
          ['تطوان', '~60 كم، ساعة', 'مدينة عتيقة يونسكو بعمارة أندلسية', 'تُلقب "ابنة غرناطة"'],
          ['الحسيمة', '~300 كم، 5–6 ساعات', '"لؤلؤة المتوسط" — خليج نقي', 'شواطئ كيمادو وكالا إيريس، غوص ممتاز'],
          ['الناظور', '~380 كم', 'مدينة ساحلية على بحيرة مرشيكة', 'رأس الثلاث فرش، بوابة مليلية'],
          ['السعيدية', '~450 كم، قرب الحدود الجزائرية', '"اللؤلؤة الزرقاء للمتوسط"', 'أكبر منتجع شاطئي بالمغرب'],
        ],
      },
      callout: {
        label: '🏔️ جبال الريف',
        body: 'بين المدن الساحلية تقع سلسلة الريف نفسها — أكثر من 300 كم طولاً حتى 2,500م ارتفاعاً. أكثر الطرق خلابة بين شفشاون وفاس عبر كتامة.',
      },
    },
    {
      heading: 'رحلات يومية من طنجة',
      paragraphs: ['موقع طنجة يجعلها قاعدة ممتازة لاستكشاف أقصى شمال المغرب.'],
      table: {
        caption: 'أفضل الرحلات اليومية من طنجة 2026',
        headers: ['الوجهة', 'المسافة', 'القيادة', 'لماذا تذهب'],
        rows: [
          ['شفشاون', '~110 كم', '1:45–2 ساعة', 'المدينة الزرقاء'],
          ['أصيلة', '~45 كم', '45 دقيقة', 'بلدة ساحلية بيضاء صغيرة، جداريات'],
          ['رأس سبارطيل', '14 كم', '20–30 دقيقة', 'نصف يوم أساسي'],
          ['تطوان', '~60 كم', 'ساعة', 'مدينة عتيقة يونسكو'],
        ],
      },
      callout: {
        label: '🚗 استكشف الشمال بسيارة إيجار',
        body: 'طنجة نقطة الانطلاق المثالية لحلقة شمال المغرب. اقتصادية من MAD 250/يوم (23€). +212 634 276 534',
      },
    },
    {
      heading: 'ماذا تأكل في طنجة',
      paragraphs: ['مطبخ طنجة يعكس تاريخها الطبقي.'],
      table: {
        caption: 'ماذا تأكل في طنجة 2026',
        headers: ['الطبق', 'أين', 'السعر', 'ملاحظات'],
        rows: [
          ['مأكولات بحرية طازجة', 'منطقة الميناء', 'MAD 80–200', 'صيد طازج فعلاً'],
          ['معقودة (فطائر بطاطس)', 'أكشاك الشوارع', 'MAD 3–8', 'وجبة طنجة الأيقونية'],
          ['شاي النعناع بمقهى حافة', 'تراس الجرف', 'MAD 7', 'الطقس الأساسي'],
        ],
      },
    },
    {
      heading: 'أين تقيم في طنجة',
      paragraphs: ['طنجة تقدم مدى حقيقياً من دور ضيافة اقتصادية بالمدينة العتيقة لفنادق 5 نجوم دولية جديدة.'],
      table: {
        caption: 'أين تقيم في طنجة 2026',
        headers: ['المنطقة', 'الأجواء', 'الأنسب لـ', 'السعر/ليلة'],
        rows: [
          ['المدينة العتيقة / القصبة', 'تاريخية', 'الزوار الأوائل', 'MAD 300–1,200 (28–111€)'],
          ['المدينة الجديدة', 'حديثة', 'الأعمال، العائلات', 'MAD 400–1,500 (37–139€)'],
          ['المارينا', 'جديد، راقٍ', 'الخليج، الفخامة', 'MAD 800–3,500+ (74–325€+)'],
        ],
      },
    },
  ],
  faqs: [
    { question: 'هل طنجة تستحق الزيارة في 2026؟', answer: 'نعم — في 2026 تجاوزت طنجة رسمياً مراكش كوجهة سياحية أولى بالمغرب بنمو الزوار، مدفوعة باستثمارات بنية تحتية وقطار البراق.' },
    { question: 'كيف تصل من الدار البيضاء إلى طنجة؟', answer: 'قطار البراق، 2:10 ساعة بسرعة 320 كم/س، MAD 150-250 درجة ثانية. بالسيارة 3:45-4:15 ساعة.' },
    { question: 'هل يمكن زيارة طنجة كرحلة يوم من إسبانيا؟', answer: 'نعم — عبّارات من طريفة أو الجزيرة الخضراء، 35-60 دقيقة، 35-65€ اتجاه واحد.' },
    { question: 'لماذا متحف السفارة الأمريكية مهم؟', answer: 'المعلم التاريخي الوطني الأمريكي الوحيد خارج أمريكا، يمثل حيث اعترف المغرب أولاً باستقلال أمريكا عام 1777.' },
    { question: 'هل طنجة جيدة لمسافري الخليج والمسلمين؟', answer: 'نعم — طعام حلال قياسي، مرافق صلاة متوفرة، استثمارات فاخرة متنامية.' },
  ],
  peopleAlsoAsk: [
    { question: 'بماذا تشتهر طنجة؟', answer: 'موقعها عند مضيق جبل طارق على بعد 14 كم من إسبانيا، قصبتها التاريخية، وضعها كمنطقة دولية بالقرن 20، مقهى حافة، ووضعها كوجهة أولى بالمغرب 2026.' },
    { question: 'كم تبعد طنجة عن شفشاون؟', answer: '~110 كم، 1:45-2 ساعة قيادة.' },
    { question: 'ما قطار البراق وكم يكلف؟', answer: 'خط السكك الحديدية السريع الوحيد في أفريقيا، طنجة-الدار البيضاء في 2:10 ساعة. الدرجة الثانية MAD 150-250.' },
  ],
  relatedDestinations: ['chefchaouen', 'casablanca', 'rabat'],
  relatedPosts: ['dalil-safar-shafshawan', 'dalil-safar-dar-al-bayda', 'dalil-safar-ribat', 'dalil-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);