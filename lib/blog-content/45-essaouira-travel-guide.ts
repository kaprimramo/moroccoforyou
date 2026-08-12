import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'essaouira-travel-guide';
const SLUG_FR = 'guide-voyage-essaouira';
const SLUG_AR = 'dalil-safar-essaouira';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(38785627);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Essaouira Travel Guide 2026 — Morocco\'s Windy City: Ramparts, Gnaoua Festival & Prices',
  metaDescription: 'Complete Essaouira travel guide 2026: UNESCO medina, Skala ramparts, port fish market, Gnaoua Festival dates, surf and windsurf spots, argan cooperatives, driving distances, and honest comparison with Agadir and Marrakech.',
  title: 'Essaouira Travel Guide 2026: Morocco\'s Windy City Where Marrakech Comes to Breathe',
  description: 'The complete Essaouira guide written by a Casablanca-based team that drives clients to Essaouira as both a day trip and a coastal escape. Real 2026 prices, the honest wind-versus-beach trade-off, Gnaoua Festival dates, the Game of Thrones and Odyssey filming connection, argan oil cooperatives, and exact distances from every Moroccan city.',
  keyword: 'essaouira travel guide',
  coverImage: COVER,
  coverAlt: 'Essaouira travel guide 2026 — blue fishing boats in the harbour with the 18th-century Skala ramparts and medina walls',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 16,
  intro: 'If Marrakech is Morocco turned up to full volume, Essaouira is where the country exhales. A fortified 18th-century port town on the Atlantic coast, Essaouira trades souk chaos for salt air, snake charmers for seagulls, and desert heat for a wind so constant it shaped the entire local culture. Our Casablanca-based team drives clients to Essaouira constantly, usually as a coastal counterpoint to Marrakech\'s intensity. This is the honest, practical guide we give them.',
  sections: [
    {
      heading: 'Is Essaouira Worth Visiting? The Honest Answer',
      paragraphs: [
        'Essaouira solves a problem most Morocco itineraries don\'t know they have: decompression. After two or three days of Marrakech\'s sensory intensity, Essaouira is a genuine release valve. The medina is compact and walkable in under an hour, the vendor pressure is a fraction of Marrakech\'s.',
        'What Essaouira has that no other Moroccan coastal city matches: an intact 18th-century UNESCO-listed medina behind still-standing sea ramparts, one of Africa\'s most important annual music festivals, blue fishing boats and a working port, and wind strong enough to have built a genuine international windsurfing reputation.',
        'The honest caveat: Essaouira is not a swimming beach in the way Agadir is. The same wind that makes it a world-class watersports destination makes the water choppy and the air noticeably cooler than Morocco\'s other coastal towns, even in summer.',
      ],
      callout: {
        label: '🇲🇦 Local Verdict',
        body: 'Essaouira is the best 1–2 day addition to almost any Marrakech-based itinerary. If you want a beach holiday specifically, go to Agadir or Taghazout instead. As one local guide puts it: "Marrakech feeds your energy, Essaouira gives your soul a rest."',
      },
    },
    {
      heading: 'Essaouira Quick Facts 2026',
      paragraphs: ['Everything you need to know before arrival.'],
      table: {
        caption: 'Essaouira essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Former name', 'Mogador — from the Phoenician "Migdol," meaning small fortress'],
          ['Population', '~90,000'],
          ['UNESCO status', 'Medina inscribed as World Heritage Site (2001)'],
          ['Region', 'Marrakech-Safi, Atlantic coast'],
          ['Airport', 'Essaouira-Mogador Airport (ESU) — limited flights'],
          ['Nearest major airport', 'Marrakech Menara (RAK) — 175–190 km, 2h30–3h'],
          ['Distance from Casablanca', '~350 km'],
          ['Distance from Agadir', '~175–190 km, 2h15–2h30'],
          ['Best known for', 'UNESCO medina, sea ramparts, wind sports, Gnaoua Festival, argan oil, seafood'],
          ['Best time to visit', 'April–June and September–October'],
          ['How many days needed', '1–2 days minimum'],
          ['Car rental from Marrakech/Casablanca', 'From MAD 250/day (€23)'],
        ],
      },
    },
    {
      heading: 'The Skala Ramparts and Medina — What to See',
      paragraphs: [
        'Essaouira\'s defining architectural feature is the Skala de la Ville — a long, cannon-lined sea rampart built by French engineer Théodore Cornut in the 1760s under Sultan Mohammed III. Walking the ramparts at sunset is the single most photographed experience in the city.',
        'The medina behind the ramparts is compact, low-rise, and genuinely walkable — laid out on a grid system unusual for a Moroccan old town.',
      ],
      table: {
        caption: 'Best things to do in Essaouira 2026',
        headers: ['Attraction', 'Time needed', 'Price', 'Notes'],
        rows: [
          ['Skala de la Ville (sea ramparts)', '45 min–1 hour', 'Free', 'Best at sunset — cannon-lined terrace, famous film backdrop'],
          ['Skala du Port (port ramparts)', '20–30 min', 'Small entry fee', 'Smaller rampart overlooking the fishing port'],
          ['Fishing port and fish market', '30–45 min', 'Free to walk', 'Blue boats, dockside catch, grilled fish stalls'],
          ['Place Moulay Hassan', '30 min+', 'Free', 'Medina social heart — main Gnaoua Festival stage'],
          ['Medina souks', '1–2 hours', 'Free to browse', 'Thuya wood carving, silver jewellery, art galleries'],
          ['Purple Isle (Iles Purpuraires)', 'Boat trip, half day', 'Varies', 'Small archipelago offshore, historic dye site'],
          ['Beach and wind sports', '1–2 hours', 'Varies', 'South of medina — better for wind sports than swimming'],
        ],
      },
      callout: {
        label: '🎬 Essaouira on Screen',
        body: 'The Skala ramparts appeared as Astapor in Game of Thrones, and — most recently — in Christopher Nolan\'s The Odyssey (2026), where Essaouira\'s beaches provided the setting for the discovery of the Trojan Horse. Orson Welles filmed scenes of his 1949 Othello on the same ramparts.',
      },
    },
    {
      heading: 'Gnaoua World Music Festival — Dates and Practical Guide',
      paragraphs: [
        'The Gnaoua World Music Festival is Essaouira\'s biggest annual event, drawing hundreds of thousands of visitors to a town of 90,000 for three days each June. Founded in 1998 to celebrate Gnawa music — inscribed by UNESCO as Intangible Cultural Heritage in 2019 — the festival has hosted Carlos Santana, Robert Plant, Marcus Miller and Pat Metheny alongside Gnawa maalems.',
        'The 2026 edition runs June 25–27. The main stage sits at Place Moulay Hassan, with dozens of free performances throughout the medina, beach and ramparts.',
      ],
      callout: {
        label: '🎵 Gnaoua Festival Booking Tip',
        body: 'Essaouira has roughly 100 riads in the medina. During festival weekend, they book out months ahead and prices rise 50–100%. Reserve 3–6 months ahead, or visit in May/October instead for similar weather with fewer crowds.',
      },
    },
    {
      heading: 'Wind, Surf and Watersports — Essaouira\'s Real Identity',
      paragraphs: [
        'The trade wind — locals call it the Alizé — blows almost constantly from spring through autumn, turning Essaouira into one of Africa\'s premier windsurfing and kitesurfing destinations. This same wind is why the water is choppy and the air cooler than Agadir, even in July.',
      ],
      table: {
        caption: 'Essaouira watersports and wind guide 2026',
        headers: ['Activity', 'Best months', 'Skill level', 'Notes'],
        rows: [
          ['Windsurfing', 'April–September', 'Intermediate to advanced', 'One of the most reliable wind destinations in North Africa'],
          ['Kitesurfing', 'April–September', 'All levels with lessons', 'Schools along the beach south of the medina'],
          ['Surfing', 'Year-round, best autumn/winter', 'Beginner to intermediate', 'Gentler than Taghazout'],
          ['Sunset rampart walk', 'Year-round', 'Everyone', 'Wind drops toward evening'],
        ],
      },
    },
    {
      heading: 'What to Eat in Essaouira',
      paragraphs: [
        'Essaouira\'s food identity is built around its working port — the best place in Morocco to eat fish landed the same morning.',
      ],
      table: {
        caption: 'What to eat in Essaouira 2026',
        headers: ['Dish/Experience', 'Where', 'Price', 'Notes'],
        rows: [
          ['Port fish stalls', 'Fishing port', 'MAD 50–120', 'Choose your catch, pay by weight, grilled in front of you'],
          ['Sardines grilled or fried', 'Port stalls, restaurants', 'MAD 30–60', 'Essaouira is a major sardine-fishing port'],
          ['Seafood tagine', 'Medina restaurants', 'MAD 80–150', 'Fish, shrimp and calamari with local spices'],
          ['Argan oil products', 'Souks, cooperatives', 'MAD 100–250/bottle', 'Buy direct from women\'s cooperatives'],
          ['Mint tea at Place Moulay Hassan', 'Café terraces', 'MAD 10–20', 'The essential Essaouira pastime'],
        ],
      },
    },
    {
      heading: 'Essaouira\'s Jewish Heritage — Why Jews Are Remembered So Fondly Here',
      paragraphs: [
        'Essaouira holds one of Morocco\'s most significant and best-preserved Jewish heritage sites, and it is worth understanding why before you walk through the Mellah. When Sultan Sidi Mohammed Ben Abdallah founded the fortified port in the 1760s, he deliberately invited Jewish merchants to settle and trade here, granting them a formal role in connecting Morocco to European commerce. The city grew so closely tied to this community that by the late 19th century, Jews made up close to 40% of Essaouira\'s population — the only city in the Arab world where Jewish residents were, at times, a near-majority.',
        'This was not tolerance in a passive sense; it was active partnership. The Mellah — the historic Jewish quarter, whose name comes from the Arabic word for "salt" — was not a ghetto in the European sense. Jewish families lived under royal protection, many wealthy merchant families lived outside the Mellah entirely, and Stars of David are still visible carved above doorways throughout the old quarter, a quiet, permanent marker of how openly the community was acknowledged. Morocco\'s 2011 constitution formally names the "Hebraic" component as part of the nation\'s identity — one of very few constitutions in the Arab world to do so.',
        'Most of Essaouira\'s Jewish residents emigrated after 1948, largely to Israel, France and Canada, and the Mellah fell into disrepair for decades. But the connection never fully broke. Each September, thousands of Jewish pilgrims — from Israel, France, Canada and beyond — return to Essaouira for the hiloula, an annual pilgrimage to the tomb of Rabbi Haim Pinto (1748–1845), a revered religious figure whose mausoleum sits in the old Jewish cemetery by the sea. It is one of the only places in the Arab world where an active Jewish pilgrimage tradition continues uninterrupted, openly, and with state support.',
      ],
      table: {
        caption: 'Essaouira\'s Jewish heritage sites 2026',
        headers: ['Site', 'What it is', 'Location', 'Notes'],
        rows: [
          ['Bayt Dakira ("House of Memory")', 'Restored synagogue, museum and research centre', 'Edge of the Mellah', 'Inaugurated by King Mohammed VI in 2020 — the flagship site to start at'],
          ['Slat Lkahal Synagogue', 'Restored 18th-century community synagogue', 'Within the Mellah', 'One of the original community houses of worship, now open to visitors'],
          ['Haim Pinto Synagogue', 'Small private synagogue and rabbi\'s former home', 'Near Bab Doukkala, edge of Mellah', 'Named for Rabbi Haim Pinto — the annual hiloula pilgrimage site each September'],
          ['Old and new Jewish cemeteries', 'Historic burial grounds by the sea wall', 'Adjacent to the Mellah', 'Rabbi Pinto\'s mausoleum, plus graves of merchant families going back generations'],
          ['The Mellah quarter', 'Former Jewish neighbourhood, now partly restored', 'Northern medina, along the ramparts', 'Star of David carvings still visible above doorways; artisan studios now occupy many buildings'],
        ],
      },
      callout: {
        label: '🕎 Visiting Respectfully',
        body: 'The Jewish heritage sites are modest from the outside and easy to walk past without a guide pointing them out — a local guide genuinely improves the experience here. Dress modestly at active religious sites, as you would at any place of worship. If the hiloula matters to your visit, time your trip for September, when the pilgrimage to Rabbi Pinto\'s tomb fills the city with visitors from around the world. The cemetery guardian can also grant access to the Haim Pinto Synagogue on request.',
      },
    },
    {
      heading: 'Essaouira vs Agadir — The Coastal Question',
      paragraphs: ['Clients heading to Morocco\'s Atlantic coast constantly ask which town to prioritize.'],
      table: {
        caption: 'Essaouira vs Agadir — honest comparison 2026',
        headers: ['Aspect', 'Essaouira', 'Agadir'],
        rows: [
          ['Character', 'Historic UNESCO fortified medina, bohemian', 'Modern beach resort, rebuilt after 1960'],
          ['Beach', 'Windy, choppy water, better for wind sports', 'Wide, sheltered, swimmable, 10km'],
          ['Wind', 'Strong and defining', 'Milder, more consistent for lounging'],
          ['Medina/culture', 'Compact UNESCO medina, art galleries', 'No historic medina'],
          ['Best for', 'Culture + coast combo, windsurfers', 'Beach holiday, warm winter sun'],
          ['Distance from Marrakech', '175–190 km, 2h15–2h30', '260 km, 2h30–3h'],
        ],
      },
      callout: {
        label: '🗺️ Our Recommendation',
        body: 'Many clients combine both: 2–3 nights Marrakech, then Essaouira for 1–2 nights, or continue south to Agadir. Essaouira and Agadir are close enough (175–190 km) to combine in one Atlantic coast loop.',
      },
    },
    {
      heading: 'How to Get to Essaouira — Distances From Every Major City',
      paragraphs: ['Essaouira sits on Morocco\'s Atlantic coast, most commonly reached via Marrakech.'],
      table: {
        caption: 'Driving distances and times to Essaouira 2026',
        headers: ['From', 'Distance', 'Driving time', 'Route'],
        rows: [
          ['Marrakech', '175–190 km', '2h15–2h30', 'Direct road — standard route'],
          ['Casablanca (CMN Airport)', '~350 km', '4h–4h30', 'Via Marrakech or coastal via Safi'],
          ['Agadir', '175–190 km', '2h15–2h30', 'Coastal N1 road'],
          ['Rabat', '~450 km', '5h30–6h', 'Via Casablanca and Marrakech'],
          ['Essaouira Airport (ESU) to medina', '~15 km', '20 min', 'Direct road — limited flights'],
        ],
      },
      callout: {
        label: '🚗 Rent Your Car for Essaouira',
        body: 'Pick up at Casablanca Airport (CMN) or Marrakech, drive to Essaouira. Economy from MAD 250/day (€23), unlimited mileage, free meet & greet at CMN. +212 634 276 534',
      },
    },
    {
      heading: 'Best Time to Visit Essaouira',
      paragraphs: ['Essaouira\'s constant wind is a year-round factor to plan around, not a summer-only phenomenon.'],
      table: {
        caption: 'Best time to visit Essaouira — month by month 2026',
        headers: ['Period', 'Temperature', 'Wind', 'Verdict'],
        rows: [
          ['April–June', '18–24°C', 'Building, strong by June', '⭐ Ideal balance'],
          ['June (Gnaoua Festival)', '20–25°C', 'Strong', 'Best cultural experience but book far ahead'],
          ['July–August', '20–26°C', 'Strongest of the year', 'Cooler than inland but wind can limit beach comfort'],
          ['September–October', '20–25°C', 'Easing', '⭐ Excellent — fewer crowds'],
          ['November–March', '13–18°C', 'Present but variable', 'Cooler, quieter, still walkable'],
        ],
      },
    },
    {
      heading: 'Where to Stay in Essaouira',
      paragraphs: ['Essaouira has roughly 100 riads and guesthouses within its compact medina.'],
      table: {
        caption: 'Where to stay in Essaouira 2026',
        headers: ['Area', 'Vibe', 'Best for', 'Price range/night'],
        rows: [
          ['Medina (near ramparts)', 'Historic, atmospheric', 'First-timers, couples, photographers', 'MAD 300–1,200 (€28–111)'],
          ['Medina (near Place Moulay Hassan)', 'Central, social', 'Solo travelers, backpackers', 'MAD 200–800 (€18–74)'],
          ['Beach area', 'Modern hotels, closer to wind sports', 'Surfers, windsurfers, families', 'MAD 400–1,500 (€37–139)'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Is Essaouira worth visiting?',
      answer: 'Yes — Essaouira is one of Morocco\'s most rewarding coastal stops, offering an intact UNESCO-listed 18th-century medina, dramatic sea ramparts, fresh port-caught seafood, and a relaxed atmosphere compared to Marrakech. It works best as a 1–2 day addition to a Marrakech itinerary rather than a standalone beach holiday.',
    },
    {
      question: 'How far is Essaouira from Marrakech?',
      answer: 'Essaouira is 175–190 km from Marrakech, taking approximately 2h15–2h30 to drive via the direct road.',
    },
    {
      question: 'When is the Gnaoua Festival in Essaouira 2026?',
      answer: 'The Gnaoua World Music Festival 2026 runs June 25–27, with the main stage at Place Moulay Hassan and free performances throughout the medina, beach and ramparts. Book accommodation 3–6 months ahead.',
    },
    {
      question: 'Can you swim at Essaouira beach?',
      answer: 'You can, but Essaouira is better known for wind sports than swimming — the strong Atlantic wind makes the water choppier and the air cooler than Agadir. For a dedicated swimming beach holiday, Agadir\'s sheltered bay is the better choice.',
    },
    {
      question: 'Is Essaouira connected to Game of Thrones or The Odyssey filming?',
      answer: 'Yes — the Skala de la Ville ramparts played Astapor in Game of Thrones, and Essaouira\'s beaches were used in The Odyssey (2026) for the discovery of the Trojan Horse. Orson Welles also filmed Othello (1949) on the same ramparts.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is Essaouira known for?', answer: 'Essaouira is known for its UNESCO-listed 18th-century fortified medina, the cannon-lined Skala de la Ville ramparts, the annual Gnaoua World Music Festival, strong Atlantic winds ideal for windsurfing, its working fishing port and fresh seafood, and its film history including Game of Thrones and The Odyssey.' },
    { question: 'Is Essaouira safer than Marrakech?', answer: 'Both cities are generally safe, but Essaouira is noticeably calmer with far less vendor pressure than Marrakech\'s souks.' },
    { question: 'How many days do you need in Essaouira?', answer: '1 full day covers the ramparts, souks, port and Place Moulay Hassan. 2–3 days allows time for wind sports lessons and a boat trip to the Purple Isles.' },
  ],
  relatedDestinations: ['marrakech', 'casablanca'],
  relatedPosts: ['marrakech-travel-guide', 'the-odyssey-morocco-filming-locations', 'agadir-travel-guide', 'casablanca-travel-guide', 'sahara-desert-morocco-travel-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Essaouira 2026 — La Ville du Vent : Remparts, Festival Gnaoua et Prix',
  metaDescription: 'Guide complet Essaouira 2026 : medina UNESCO, remparts de la Skala, marche aux poissons, dates du Festival Gnaoua, spots de surf et windsurf, cooperatives d\'argan, distances, comparaison honnete avec Agadir et Marrakech.',
  title: 'Guide Voyage Essaouira 2026 : La Ville du Vent Ou Marrakech Vient Respirer',
  description: 'Le guide Essaouira complet redige par une equipe casablancaise qui conduit des clients a Essaouira, en excursion ou en escapade cotiere. Vrais prix 2026, le compromis vent-plage honnete, dates du Festival Gnaoua, la connexion Game of Thrones et Odyssee, cooperatives d\'huile d\'argan, distances exactes.',
  keyword: 'guide voyage essaouira',
  coverImage: COVER,
  coverAlt: 'Guide voyage Essaouira 2026 — bateaux de peche bleus dans le port avec les remparts de la Skala du 18e siecle',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'Omar L. — Local Casablancais & Specialiste Road Trip Maroc',
  readingMinutes: 16,
  intro: 'Si Marrakech est le Maroc pousse a plein volume, Essaouira est l\'endroit ou le pays expire. Ville portuaire fortifiee du 18e siecle sur la cote atlantique, Essaouira echange le chaos des souks contre l\'air sale et la chaleur du desert contre un vent constant qui a faconne toute la culture locale. Notre equipe casablancaise conduit constamment des clients a Essaouira, comme contrepoint cotier a l\'intensite de Marrakech.',
  sections: [
    {
      heading: 'Essaouira Vaut-elle le Detour ? La Reponse Honnete',
      paragraphs: [
        'Essaouira resout un probleme que la plupart des itineraires marocains ne savent pas avoir : la decompression. Apres deux ou trois jours a Marrakech, Essaouira est une veritable soupape.',
        'Ce qu\'Essaouira a que nulle autre ville cotiere marocaine n\'egale : une medina fortifiee du 18e siecle classee UNESCO intacte, l\'un des festivals de musique les plus importants d\'Afrique, des bateaux de peche bleus, et un vent assez fort pour une reputation internationale de windsurf.',
        'La reserve honnete : Essaouira n\'est pas une plage de baignade comme Agadir. Le meme vent rend l\'eau agitee et l\'air plus frais, meme en ete.',
      ],
      callout: {
        label: '🇲🇦 Verdict Local',
        body: 'Essaouira est le meilleur ajout de 1 a 2 jours a un itineraire base sur Marrakech. Pour des vacances plage, allez a Agadir ou Taghazout.',
      },
    },
    {
      heading: 'Essaouira en Chiffres — Infos Essentielles 2026',
      paragraphs: ['Tout ce qu\'il faut savoir avant d\'arriver.'],
      table: {
        caption: 'Infos essentielles Essaouira 2026',
        headers: ['Info', 'Detail'],
        rows: [
          ['Ancien nom', 'Mogador — du phenicien "Migdol"'],
          ['Population', '~90 000'],
          ['Statut UNESCO', 'Medina inscrite Patrimoine Mondial (2001)'],
          ['Region', 'Marrakech-Safi, cote atlantique'],
          ['Aeroport', 'Aeroport Essaouira-Mogador (ESU) — vols limites'],
          ['Aeroport principal le plus proche', 'Marrakech Menara (RAK) — 175–190 km, 2h30–3h'],
          ['Distance depuis Casablanca', '~350 km'],
          ['Distance depuis Agadir', '~175–190 km, 2h15–2h30'],
          ['Celebre pour', 'Medina UNESCO, remparts, sports de vent, Festival Gnaoua, argan'],
          ['Meilleure periode', 'Avril–juin et septembre–octobre'],
          ['Duree recommandee', '1–2 jours minimum'],
          ['Location voiture', 'Des MAD 250/jour (23€)'],
        ],
      },
    },
    {
      heading: 'Les Remparts de la Skala et la Medina',
      paragraphs: [
        'La Skala de la Ville — rempart borde de canons construit par Theodore Cornut dans les annees 1760. Marcher sur les remparts au coucher de soleil est l\'experience la plus photographiee de la ville.',
        'La medina derriere les remparts est compacte et praticable a pied — organisee en grille, heritage militaire europeen.',
      ],
      table: {
        caption: 'Meilleures choses a faire a Essaouira 2026',
        headers: ['Attraction', 'Temps', 'Prix', 'Notes'],
        rows: [
          ['Skala de la Ville', '45 min–1h', 'Gratuit', 'Meilleur au coucher de soleil'],
          ['Skala du Port', '20–30 min', 'Petit droit', 'Surplombant le port actif'],
          ['Port de peche et marche', '30–45 min', 'Gratuit', 'Bateaux bleus, poisson grille'],
          ['Place Moulay Hassan', '30 min+', 'Gratuit', 'Coeur social, scene Festival Gnaoua'],
          ['Souks de la medina', '1–2h', 'Gratuit', 'Sculpture thuya, bijoux, galeries d\'art'],
          ['Iles Purpuraires', 'Bateau, demi-jour', 'Variable', 'Archipel, site historique de teinture'],
          ['Plage et sports vent', '1–2h', 'Variable', 'Sud de la medina'],
        ],
      },
      callout: {
        label: '🎬 Essaouira a l\'Ecran',
        body: 'Les remparts ont joue Astapor dans Game of Thrones, et dans L\'Odyssee (2026) de Nolan pour la decouverte du Cheval de Troie. Orson Welles y a tourne Othello en 1949.',
      },
    },
    {
      heading: 'Festival Gnaoua — Dates et Guide Pratique',
      paragraphs: [
        'Le Festival Gnaoua est le plus grand evenement annuel d\'Essaouira, attirant des centaines de milliers de visiteurs pour trois jours chaque juin. Fonde en 1998, inscrit UNESCO en 2019, il a accueilli Carlos Santana, Robert Plant, Marcus Miller et Pat Metheny.',
        'L\'edition 2026 se deroule du 25 au 27 juin, scene principale a Place Moulay Hassan.',
      ],
      callout: {
        label: '🎵 Conseil Reservation Festival',
        body: 'Environ 100 riads dans la medina se reservent des mois a l\'avance pendant le festival, prix +50-100%. Reservez 3–6 mois avant, ou visitez en mai/octobre.',
      },
    },
    {
      heading: 'Vent, Surf et Sports Nautiques',
      paragraphs: [
        'Le vent alize souffle presque constamment du printemps a l\'automne, faisant d\'Essaouira une destination windsurf/kitesurf majeure d\'Afrique.',
      ],
      table: {
        caption: 'Guide sports nautiques Essaouira 2026',
        headers: ['Activite', 'Meilleurs mois', 'Niveau', 'Notes'],
        rows: [
          ['Windsurf', 'Avril–septembre', 'Intermediaire+', 'Destination vent fiable'],
          ['Kitesurf', 'Avril–septembre', 'Tous niveaux', 'Ecoles au sud de la medina'],
          ['Surf', 'Toute l\'annee', 'Debutant+', 'Plus doux que Taghazout'],
          ['Balade remparts', 'Toute l\'annee', 'Tous', 'Vent tombe en soiree'],
        ],
      },
    },
    {
      heading: 'Que Manger a Essaouira',
      paragraphs: ['L\'identite culinaire tourne autour du port actif.'],
      table: {
        caption: 'Que manger a Essaouira 2026',
        headers: ['Plat', 'Ou', 'Prix', 'Notes'],
        rows: [
          ['Poisson du port', 'Port de peche', 'MAD 50–120', 'Choisissez, payez au poids, grille devant vous'],
          ['Sardines', 'Etals, restaurants', 'MAD 30–60', 'Grand port sardinier'],
          ['Tagine fruits de mer', 'Restaurants medina', 'MAD 80–150', 'Poisson, crevettes, calamars'],
          ['Huile d\'argan', 'Cooperatives', 'MAD 100–250/bouteille', 'Achat direct cooperatives femmes'],
          ['The a la menthe', 'Place Moulay Hassan', 'MAD 10–20', 'Passe-temps essentiel'],
        ],
      },
    },
    {
      heading: 'Le Patrimoine Juif d\'Essaouira — Pourquoi les Juifs y Sont Si Chaleureusement Rappeles',
      paragraphs: [
        'Essaouira abrite l\'un des sites du patrimoine juif les plus importants et les mieux preserves du Maroc. Quand le Sultan Sidi Mohammed Ben Abdallah fonda le port fortifie dans les annees 1760, il invita deliberement des marchands juifs a s\'y installer, leur accordant un role formel dans le commerce avec l\'Europe. Vers la fin du 19e siecle, les Juifs representaient pres de 40% de la population d\'Essaouira — la seule ville du monde arabe ou les residents juifs furent, par moments, presque majoritaires.',
        'Ce n\'etait pas une tolerance passive mais un veritable partenariat actif. Le Mellah — l\'ancien quartier juif — n\'etait pas un ghetto au sens europeen. Les familles juives vivaient sous protection royale, et de nombreuses familles de riches marchands vivaient meme hors du Mellah. Des etoiles de David sont encore visibles gravees au-dessus des portes dans tout le vieux quartier. La constitution marocaine de 2011 nomme formellement la composante "hebraique" comme faisant partie de l\'identite nationale — l\'une des tres rares constitutions du monde arabe a le faire.',
        'La plupart des Juifs d\'Essaouira ont emigre apres 1948, principalement vers Israel, la France et le Canada, et le Mellah est tombe en desuetude pendant des decennies. Mais le lien ne s\'est jamais completement rompu. Chaque septembre, des milliers de pelerins juifs — d\'Israel, de France, du Canada et d\'ailleurs — reviennent a Essaouira pour la hiloula, un pelerinage annuel vers la tombe du Rabbi Haim Pinto (1748–1845), figure religieuse veneree dont le mausolee se trouve dans l\'ancien cimetiere juif au bord de la mer.',
      ],
      table: {
        caption: 'Sites du patrimoine juif d\'Essaouira 2026',
        headers: ['Site', 'Ce que c\'est', 'Emplacement', 'Notes'],
        rows: [
          ['Bayt Dakira ("Maison de la Memoire")', 'Synagogue restauree, musee et centre de recherche', 'Bord du Mellah', 'Inauguree par le Roi Mohammed VI en 2020 — le site phare a visiter en premier'],
          ['Synagogue Slat Lkahal', 'Synagogue communautaire restauree du 18e siecle', 'Dans le Mellah', 'L\'un des lieux de culte originaux, maintenant ouvert aux visiteurs'],
          ['Synagogue Haim Pinto', 'Petite synagogue privee et ancienne maison du rabbin', 'Pres de Bab Doukkala', 'Nommee d\'apres le Rabbi Haim Pinto — site du pelerinage annuel hiloula chaque septembre'],
          ['Anciens et nouveaux cimetieres juifs', 'Terrains funeraires historiques au bord des remparts', 'Adjacent au Mellah', 'Mausolee du Rabbi Pinto, tombes de familles marchandes'],
          ['Le quartier du Mellah', 'Ancien quartier juif, partiellement restaure', 'Medina nord, le long des remparts', 'Etoiles de David encore visibles au-dessus des portes'],
        ],
      },
      callout: {
        label: '🕎 Visiter avec Respect',
        body: 'Les sites du patrimoine juif sont discrets de l\'exterieur — un guide local ameliore vraiment l\'experience. Habillez-vous modestement dans les lieux de culte actifs. Si la hiloula vous interesse, planifiez votre visite en septembre. Le gardien du cimetiere peut aussi accorder l\'acces a la synagogue Haim Pinto sur demande.',
      },
    },
    {
      heading: 'Essaouira vs Agadir',
      paragraphs: ['Question cotiere frequente des clients.'],
      table: {
        caption: 'Essaouira vs Agadir — comparaison 2026',
        headers: ['Aspect', 'Essaouira', 'Agadir'],
        rows: [
          ['Caractere', 'Medina fortifiee UNESCO, bohème', 'Resort moderne post-1960'],
          ['Plage', 'Venteuse, eau agitee', 'Large, abritee, baignable'],
          ['Vent', 'Fort et determinant', 'Plus doux'],
          ['Culture', 'Medina UNESCO, galeries', 'Pas de medina historique'],
          ['Ideal pour', 'Culture+cote, windsurfeurs', 'Vacances plage'],
          ['Distance Marrakech', '175–190 km', '260 km'],
        ],
      },
      callout: {
        label: '🗺️ Notre Recommandation',
        body: 'Combinez : 2–3 nuits Marrakech, puis Essaouira 1–2 nuits, ou continuez vers Agadir. Essaouira-Agadir 175–190 km.',
      },
    },
    {
      heading: 'Comment Rejoindre Essaouira',
      paragraphs: ['Generalement via Marrakech.'],
      table: {
        caption: 'Distances vers Essaouira 2026',
        headers: ['Depuis', 'Distance', 'Temps', 'Itineraire'],
        rows: [
          ['Marrakech', '175–190 km', '2h15–2h30', 'Route directe'],
          ['Casablanca (CMN)', '~350 km', '4h–4h30', 'Via Marrakech ou cote via Safi'],
          ['Agadir', '175–190 km', '2h15–2h30', 'Route cotiere N1'],
          ['Rabat', '~450 km', '5h30–6h', 'Via Casablanca/Marrakech'],
        ],
      },
      callout: {
        label: '🚗 Louez Votre Voiture',
        body: 'Prise en charge CMN ou Marrakech. Economique des MAD 250/jour (23€). +212 634 276 534',
      },
    },
    {
      heading: 'Meilleure Periode',
      paragraphs: ['Le vent constant est a planifier toute l\'annee.'],
      table: {
        caption: 'Meilleure periode Essaouira 2026',
        headers: ['Periode', 'Temperature', 'Vent', 'Verdict'],
        rows: [
          ['Avril–Juin', '18–24°C', 'Montant', '⭐ Equilibre ideal'],
          ['Juin (Festival)', '20–25°C', 'Fort', 'Meilleure culture mais reservez tot'],
          ['Juillet–Aout', '20–26°C', 'Le plus fort', 'Plus frais mais vent limite plage'],
          ['Septembre–Octobre', '20–25°C', 'S\'apaisant', '⭐ Excellent'],
          ['Novembre–Mars', '13–18°C', 'Variable', 'Plus calme'],
        ],
      },
    },
    {
      heading: 'Ou Dormir a Essaouira',
      paragraphs: ['Environ 100 riads dans la medina compacte.'],
      table: {
        caption: 'Ou dormir a Essaouira 2026',
        headers: ['Zone', 'Ambiance', 'Ideal pour', 'Prix/nuit'],
        rows: [
          ['Medina (remparts)', 'Historique', 'Premiers visiteurs', 'MAD 300–1200 (28–111€)'],
          ['Medina (Place Moulay Hassan)', 'Central, social', 'Solo, backpackers', 'MAD 200–800 (18–74€)'],
          ['Zone plage', 'Hotels modernes', 'Surfeurs, familles', 'MAD 400–1500 (37–139€)'],
        ],
      },
    },
  ],
  faqs: [
    { question: 'Essaouira vaut-elle le detour ?', answer: 'Oui — medina UNESCO intacte, remparts, fruits de mer frais, atmosphere detendue comparee a Marrakech. Meilleur en ajout 1-2 jours qu\'en sejour plage autonome.' },
    { question: 'Distance Essaouira-Marrakech ?', answer: '175–190 km, environ 2h15–2h30 de route.' },
    { question: 'Dates Festival Gnaoua 2026 ?', answer: '25–27 juin, scene principale Place Moulay Hassan, performances gratuites dans la medina. Reservez 3–6 mois avant.' },
    { question: 'Peut-on nager a Essaouira ?', answer: 'Oui mais plutot destination sports de vent — eau agitee, air plus frais qu\'Agadir. Pour baignade, preferez Agadir.' },
    { question: 'Lien avec Game of Thrones/Odyssee ?', answer: 'Oui — remparts = Astapor dans GoT, plages utilisees dans L\'Odyssee (2026) pour le Cheval de Troie.' },
  ],
  peopleAlsoAsk: [
    { question: 'Pour quoi Essaouira est-elle connue ?', answer: 'Medina UNESCO 18e siecle, remparts Skala, Festival Gnaoua, vents forts windsurf/kitesurf, port de peche actif, histoire cinema (GoT, Odyssee).' },
    { question: 'Essaouira plus sure que Marrakech ?', answer: 'Les deux sont sures, mais Essaouira nettement plus calme avec moins de pression vendeurs.' },
    { question: 'Combien de jours a Essaouira ?', answer: '1 jour couvre remparts, souks, port, Place Moulay Hassan. 2-3 jours pour sports de vent et Iles Purpuraires.' },
  ],
  relatedDestinations: ['marrakech', 'casablanca'],
  relatedPosts: ['guide-voyage-marrakech', 'lieux-tournage-lodyssee-maroc', 'guide-voyage-agadir', 'guide-voyage-casablanca', 'guide-voyage-sahara-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر للصويرة 2026 — مدينة الريح: الأسوار، مهرجان كناوة والأسعار',
  metaDescription: 'دليل شامل للصويرة 2026: المدينة العتيقة يونسكو، أسوار الصقالة، سوق السمك، مواعيد مهرجان كناوة، مواقع ركوب الأمواج، تعاونيات الأرغان، مقارنة مع أكادير ومراكش.',
  title: 'دليل السفر للصويرة 2026: مدينة الريح حيث تأتي مراكش لتتنفس',
  description: 'دليل الصويرة الشامل من فريق مقيم في الدار البيضاء يقود عملاء للصويرة. أسعار حقيقية 2026، مقايضة الريح والشاطئ، مواعيد مهرجان كناوة، ارتباط الأفلام، مسافات دقيقة.',
  keyword: 'دليل السفر للصويرة',
  coverImage: COVER,
  coverAlt: 'دليل السفر للصويرة 2026 — قوارب صيد زرقاء مع أسوار الصقالة من القرن 18',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 16,
  intro: 'إذا كانت مراكش المغرب بأقصى صوت، فالصويرة حيث يتنفس البلد. مدينة ميناء محصنة من القرن 18، تستبدل فوضى الأسواق بهواء البحر وحرارة الصحراء بريح ثابتة شكلت الثقافة المحلية. فريقنا يقود عملاء للصويرة باستمرار كنظير ساحلي لحدة مراكش.',
  sections: [
    {
      heading: 'هل الصويرة تستحق الزيارة؟',
      paragraphs: [
        'الصويرة تحل مشكلة إزالة الضغط بعد أيام في مراكش. المدينة العتيقة مدمجة وقابلة للمشي بأقل ضغط بائعين.',
        'ما تملكه ولا تضاهيها فيه مدينة أخرى: مدينة عتيقة يونسكو من القرن 18 سليمة، مهرجان موسيقي مهم، قوارب صيد زرقاء، وريح قوية بنت سمعة دولية.',
        'التحفظ الصادق: ليست شاطئ سباحة كأكادير. نفس الريح تجعل الماء متلاطماً والهواء أبرد.',
      ],
      callout: {
        label: '🇲🇦 حكم محلي',
        body: 'أفضل إضافة ليوم-يومين لبرنامج قائم على مراكش. لعطلة شاطئية، اذهب لأكادير أو تاغازوت.',
      },
    },
    {
      heading: 'الصويرة بالأرقام 2026',
      paragraphs: ['كل ما تحتاج معرفته قبل الوصول.'],
      table: {
        caption: 'المعلومات الأساسية 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['الاسم السابق', 'موكادور'],
          ['السكان', '~90,000'],
          ['وضع اليونسكو', 'مدرجة تراثاً (2001)'],
          ['المنطقة', 'مراكش آسفي، الساحل الأطلسي'],
          ['المطار', 'مطار الصويرة موكادور (ESU) — رحلات محدودة'],
          ['أقرب مطار رئيسي', 'مراكش (RAK) — 175–190 كم'],
          ['المسافة من الدار البيضاء', '~350 كم'],
          ['أفضل وقت', 'أبريل–يونيو وسبتمبر–أكتوبر'],
          ['المدة الموصى بها', 'يوم إلى يومين على الأقل'],
          ['تأجير سيارة', 'من MAD 250/يوم (23€)'],
        ],
      },
    },
    {
      heading: 'أسوار الصقالة والمدينة العتيقة',
      paragraphs: [
        'الصقالة الكبرى — سور بحري بناه تيودور كورنو في ستينيات القرن 18. المشي عند الغروب أكثر تجربة تُصوَّر.',
        'المدينة العتيقة خلف الأسوار مدمجة ومنخفضة — منظمة شبكياً، إرث عسكري أوروبي.',
      ],
      table: {
        caption: 'أفضل الأشياء في الصويرة 2026',
        headers: ['المعلم', 'الوقت', 'السعر', 'ملاحظات'],
        rows: [
          ['الصقالة الكبرى', '45د-ساعة', 'مجاني', 'الأفضل عند الغروب'],
          ['صقالة الميناء', '20-30د', 'رسم صغير', 'تطل على الميناء العامل'],
          ['ميناء الصيد', '30-45د', 'مجاني', 'قوارب زرقاء، سمك مشوي'],
          ['ساحة مولاي حسن', '30د+', 'مجاني', 'قلب اجتماعي، مسرح مهرجان كناوة'],
          ['أسواق المدينة', '1-2 ساعة', 'مجاني', 'نحت ثويا، مجوهرات، معارض'],
          ['الجزر الأرجوانية', 'رحلة قارب', 'متغير', 'أرخبيل، موقع صبغة تاريخي'],
          ['الشاطئ ورياضات الريح', '1-2 ساعة', 'متغير', 'جنوب المدينة'],
        ],
      },
      callout: {
        label: '🎬 الصويرة على الشاشة',
        body: 'الأسوار مثلت أستابور في Game of Thrones، وفي الأوديسة (2026) لاكتشاف حصان طروادة. أورسون ويلز صور Othello هناك 1949.',
      },
    },
    {
      heading: 'مهرجان كناوة — المواعيد والدليل',
      paragraphs: [
        'أكبر حدث سنوي، يجذب مئات الآلاف لثلاثة أيام كل يونيو. تأسس 1998، أُدرج يونسكو 2019، استضاف كارلوس سانتانا وروبرت بلانت.',
        'نسخة 2026: 25-27 يونيو، المسرح الرئيسي بساحة مولاي حسن.',
      ],
      callout: {
        label: '🎵 نصيحة حجز',
        body: 'حوالي 100 رياض تُحجز قبل أشهر خلال المهرجان بزيادة 50-100%. احجز قبل 3-6 أشهر، أو زر مايو/أكتوبر.',
      },
    },
    {
      heading: 'الريح وركوب الأمواج',
      paragraphs: ['الريح التجارية تهب باستمرار من الربيع للخريف، جعلت الصويرة وجهة رائدة لركوب الأمواج الشراعية.'],
      table: {
        caption: 'دليل الرياضات المائية 2026',
        headers: ['النشاط', 'أفضل الأشهر', 'المستوى', 'ملاحظات'],
        rows: [
          ['ركوب الأمواج الشراعي', 'أبريل-سبتمبر', 'متوسط+', 'وجهة ريح موثوقة'],
          ['الطائرة الشراعية', 'أبريل-سبتمبر', 'كل المستويات', 'مدارس جنوب المدينة'],
          ['ركوب الأمواج', 'طوال السنة', 'مبتدئ+', 'ألطف من تاغازوت'],
          ['نزهة الأسوار', 'طوال السنة', 'الجميع', 'الريح تنخفض مساءً'],
        ],
      },
    },
    {
      heading: 'ماذا تأكل في الصويرة',
      paragraphs: ['الهوية الغذائية حول الميناء العامل.'],
      table: {
        caption: 'ماذا تأكل 2026',
        headers: ['الطبق', 'أين', 'السعر', 'ملاحظات'],
        rows: [
          ['سمك الميناء', 'ميناء الصيد', 'MAD 50-120', 'اختر، ادفع بالوزن، يُشوى أمامك'],
          ['سردين', 'أكشاك، مطاعم', 'MAD 30-60', 'ميناء صيد سردين كبير'],
          ['طاجين بحري', 'مطاعم المدينة', 'MAD 80-150', 'سمك، جمبري، كاليماري'],
          ['زيت الأرغان', 'تعاونيات', 'MAD 100-250', 'شراء مباشر من التعاونيات'],
          ['شاي بالنعناع', 'ساحة مولاي حسن', 'MAD 10-20', 'التسلية الأساسية'],
        ],
      },
    },
    {
      heading: 'التراث اليهودي في الصويرة — لماذا يُتذكَّر اليهود هنا بحفاوة',
      paragraphs: [
        'تضم الصويرة أحد أهم مواقع التراث اليهودي وأفضلها حفظاً في المغرب. عندما أسس السلطان سيدي محمد بن عبد الله الميناء المحصن في ستينيات القرن 18، دعا عن قصد تجاراً يهوداً للاستقرار والتجارة هناك، مانحاً إياهم دوراً رسمياً في ربط المغرب بالتجارة الأوروبية. بحلول أواخر القرن 19، شكّل اليهود قرابة 40% من سكان الصويرة — المدينة الوحيدة في العالم العربي حيث كان السكان اليهود، في بعض الأوقات، أغلبية تقريباً.',
        'لم يكن هذا تسامحاً سلبياً بل شراكة فعلية. الملاح — الحي اليهودي التاريخي — لم يكن حياً منعزلاً بالمعنى الأوروبي. عاشت العائلات اليهودية تحت الحماية الملكية، وعاشت العديد من عائلات التجار الأثرياء خارج الملاح تماماً. لا تزال نجوم داوود منحوتة فوق الأبواب مرئية في أنحاء الحي القديم. يسمي الدستور المغربي لعام 2011 رسمياً المكوّن "العبراني" كجزء من هوية الأمة — من الدساتير القليلة جداً في العالم العربي التي تفعل ذلك.',
        'هاجر معظم يهود الصويرة بعد 1948، غالباً لإسرائيل وفرنسا وكندا، وتدهور الملاح لعقود. لكن الرابط لم ينقطع تماماً. كل سبتمبر، يعود آلاف الحجاج اليهود — من إسرائيل وفرنسا وكندا وأماكن أخرى — للصويرة من أجل الهيلولا، حج سنوي لضريح الحاخام حاييم بينتو (1748–1845)، شخصية دينية موقرة يقع ضريحه في المقبرة اليهودية القديمة قرب البحر.',
      ],
      table: {
        caption: 'مواقع التراث اليهودي في الصويرة 2026',
        headers: ['الموقع', 'ما هو', 'الموقع الجغرافي', 'ملاحظات'],
        rows: [
          ['بيت ذاكيرة ("بيت الذاكرة")', 'كنيس ومتحف ومركز بحث مُرمَّم', 'حافة الملاح', 'افتتحه الملك محمد السادس عام 2020 — الموقع الرئيسي للبدء'],
          ['كنيس صلاة الكحال', 'كنيس جماعي مُرمَّم من القرن 18', 'داخل الملاح', 'أحد بيوت العبادة الأصلية، مفتوح الآن للزوار'],
          ['كنيس حاييم بينتو', 'كنيس خاص صغير ومنزل الحاخام سابقاً', 'قرب باب دكالة', 'سُمي على اسم الحاخام حاييم بينتو — موقع حج الهيلولا السنوي كل سبتمبر'],
          ['المقابر اليهودية القديمة والجديدة', 'مقابر تاريخية قرب سور البحر', 'مجاورة للملاح', 'ضريح الحاخام بينتو، وقبور عائلات تجارية'],
          ['حي الملاح', 'الحي اليهودي السابق، مُرمَّم جزئياً', 'شمال المدينة العتيقة، على طول الأسوار', 'نجوم داوود لا تزال مرئية فوق الأبواب'],
        ],
      },
      callout: {
        label: '🕎 الزيارة باحترام',
        body: 'مواقع التراث اليهودي متواضعة من الخارج — مرشد محلي يحسّن التجربة فعلاً. البس بتواضع في المواقع الدينية النشطة. إذا كانت الهيلولا تهمك، خطط لزيارتك في سبتمبر. يمكن لحارس المقبرة أيضاً منح الوصول لكنيس حاييم بينتو عند الطلب.',
      },
    },
    {
      heading: 'الصويرة مقابل أكادير',
      paragraphs: ['سؤال ساحلي متكرر من العملاء.'],
      table: {
        caption: 'مقارنة 2026',
        headers: ['الجانب', 'الصويرة', 'أكادير'],
        rows: [
          ['الطابع', 'مدينة عتيقة محصنة يونسكو', 'منتجع حديث بعد 1960'],
          ['الشاطئ', 'عاصف، ماء متلاطم', 'واسع، محمي، قابل للسباحة'],
          ['الريح', 'قوية ومحددة', 'أهدأ'],
          ['الثقافة', 'مدينة عتيقة، معارض', 'لا مدينة عتيقة'],
          ['الأنسب لـ', 'ثقافة+ساحل، رياضات ريح', 'عطلة شاطئية'],
          ['المسافة من مراكش', '175-190 كم', '260 كم'],
        ],
      },
      callout: {
        label: '🗺️ توصيتنا',
        body: 'ادمج: 2-3 ليالٍ مراكش، ثم الصويرة ليلة-ليلتين، أو تابع لأكادير. المسافة بينهما 175-190 كم.',
      },
    },
    {
      heading: 'كيف تصل للصويرة',
      paragraphs: ['عادةً عبر مراكش.'],
      table: {
        caption: 'المسافات 2026',
        headers: ['من', 'المسافة', 'الوقت', 'المسار'],
        rows: [
          ['مراكش', '175-190 كم', '2:15-2:30', 'طريق مباشر'],
          ['الدار البيضاء (CMN)', '~350 كم', '4-4:30', 'عبر مراكش أو ساحلياً'],
          ['أكادير', '175-190 كم', '2:15-2:30', 'طريق ساحلي N1'],
          ['الرباط', '~450 كم', '5:30-6', 'عبر الدار البيضاء ومراكش'],
        ],
      },
      callout: {
        label: '🚗 استأجر سيارتك',
        body: 'استلام من CMN أو مراكش. اقتصادية من MAD 250/يوم (23€). +212 634 276 534',
      },
    },
    {
      heading: 'أفضل وقت للزيارة',
      paragraphs: ['الريح الثابتة عامل يُخطط له طوال السنة.'],
      table: {
        caption: 'أفضل وقت 2026',
        headers: ['الفترة', 'الحرارة', 'الريح', 'الحكم'],
        rows: [
          ['أبريل-يونيو', '18-24°م', 'متصاعدة', '⭐ توازن مثالي'],
          ['يونيو (المهرجان)', '20-25°م', 'قوية', 'أفضل ثقافياً لكن احجز مبكراً'],
          ['يوليو-أغسطس', '20-26°م', 'الأقوى', 'أبرد لكن الريح تحد الشاطئ'],
          ['سبتمبر-أكتوبر', '20-25°م', 'تهدأ', '⭐ ممتاز'],
          ['نوفمبر-مارس', '13-18°م', 'متغيرة', 'أهدأ'],
        ],
      },
    },
    {
      heading: 'أين تقيم',
      paragraphs: ['حوالي 100 رياض في المدينة المدمجة.'],
      table: {
        caption: 'أين تقيم 2026',
        headers: ['المنطقة', 'الأجواء', 'الأنسب لـ', 'السعر/ليلة'],
        rows: [
          ['المدينة (الأسوار)', 'تاريخية', 'الزوار الأوائل', 'MAD 300-1200'],
          ['المدينة (ساحة مولاي حسن)', 'مركزي اجتماعي', 'المنفردون', 'MAD 200-800'],
          ['منطقة الشاطئ', 'فنادق حديثة', 'الراكبون، العائلات', 'MAD 400-1500'],
        ],
      },
    },
  ],
  faqs: [
    { question: 'هل الصويرة تستحق الزيارة؟', answer: 'نعم — مدينة عتيقة يونسكو سليمة، أسوار درامية، مأكولات بحرية طازجة، أجواء مسترخية. أفضل كإضافة ليوم-يومين لا كعطلة شاطئية مستقلة.' },
    { question: 'كم تبعد عن مراكش؟', answer: '175-190 كم، حوالي 2:15-2:30 ساعة قيادة.' },
    { question: 'مواعيد مهرجان كناوة 2026؟', answer: '25-27 يونيو، ساحة مولاي حسن، عروض مجانية. احجز قبل 3-6 أشهر.' },
    { question: 'هل يمكن السباحة؟', answer: 'يمكن لكن أشهر برياضات الريح — ماء متلاطم، هواء أبرد من أكادير.' },
    { question: 'ارتباط بأفلام؟', answer: 'نعم — الأسوار = أستابور في GoT، الشواطئ في الأوديسة (2026) لحصان طروادة.' },
  ],
  peopleAlsoAsk: [
    { question: 'بماذا تشتهر الصويرة؟', answer: 'مدينة عتيقة يونسكو، أسوار الصقالة، مهرجان كناوة، رياح قوية، ميناء صيد نشط، تاريخ سينمائي.' },
    { question: 'أكثر أماناً من مراكش؟', answer: 'كلتاهما آمنتان لكن الصويرة أهدأ بضغط بائعين أقل.' },
    { question: 'كم يوماً تحتاج؟', answer: 'يوم يغطي الأسوار والأسواق والميناء. 2-3 أيام لرياضات الريح والجزر الأرجوانية.' },
  ],
  relatedDestinations: ['marrakech', 'casablanca'],
  relatedPosts: ['dalil-safar-marakish', 'amakin-taswir-al-udisa-maghrib', 'dalil-safar-agadir', 'dalil-safar-dar-al-bayda', 'dalil-safar-sahara-maghrib'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);