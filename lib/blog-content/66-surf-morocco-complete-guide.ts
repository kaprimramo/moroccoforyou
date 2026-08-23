import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'surf-morocco-complete-guide';
const SLUG_FR = 'guide-complet-surf-maroc';
const SLUG_AR = 'dalil-shamil-rukub-al-amwaj-maghrib';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(38938004);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Surfing in Morocco 2026: Complete Guide to Every Spot, Camp & Competition',
  metaDescription: 'The complete Morocco surf guide 2026: every major spot from Anchor Point to Imsouane, surf camp prices, difficulty levels, WSL Pro Taghazout Bay dates, car rental logistics, and distances between breaks.',
  title: 'Surfing in Morocco 2026: The Complete Guide to Every Spot, Camp & Competition',
  description: 'Quick answer: Morocco\'s Atlantic coast concentrates more named surf breaks per kilometre than almost anywhere outside Indonesia — from Taghazout\'s world-famous Anchor Point to the mellow beginner beaches of Tamraght, the legendary long wave at Imsouane, and the wind-powered breaks of Essaouira and Sidi Kaouki. This guide covers every major spot with real difficulty levels, surf camp prices, exact distances between breaks, car rental logistics, and the confirmed 2026 competition calendar — written for surfers planning a trip, whether it\'s your first time in the water or you\'re chasing Anchor Point at its best.',
  keyword: 'surfing in morocco',
  coverImage: COVER,
  coverAlt: 'Surfing in Morocco 2026 — surfer riding a long right-hand wave at Anchor Point Taghazout with the Atlas foothills in the background',
  publishedISO: '2026-08-23',
  updatedISO: '2026-08-23',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 18,
  intro: 'Quick answer: Morocco is Europe\'s closest long-haul surf destination — 2-4 hours\' flying time direct to Agadir — with one of the most concentrated surf coastlines on earth. The stretch from Tamri south through Taghazout, Tamraght, and down to Imsouane packs in more named breaks per kilometre than almost anywhere outside Indonesia: Anchor Point, Killer Point, Boilers, Hash Point, Banana Point, Devil\'s Rock, and the legendary Bay at Imsouane, one of the longest rideable waves in Africa. Further north, Essaouira and Sidi Kaouki add wind-powered breaks better suited to intermediate surfers, while south of Agadir, Mirleft, Legzira and Sidi Ifni offer the same quality waves with a fraction of the crowds. This guide covers every zone, real difficulty levels, camp prices, and the confirmed 2026 competition calendar that now puts Morocco firmly on the professional surfing map.',
  sections: [
    {
      heading: 'Morocco Surf Zones — Complete Overview',
      paragraphs: [
        'Morocco\'s surf coast breaks into distinct zones, each with a different character, crowd level, and skill focus. Understanding which zone fits your trip matters more than picking a single named break.',
      ],
      table: {
        caption: 'Morocco surf zones compared 2026',
        headers: ['Zone', 'Distance from Agadir', 'Character', 'Best for'],
        rows: [
          ['Taghazout & Tamraght', '19-20 km north', 'Morocco\'s surf capital — highest concentration of camps, schools and named breaks in Africa outside South Africa', 'Every level — Anchor Point (advanced) to Banana Point (beginner)'],
          ['Imsouane', '~65 km north', 'Quieter fishing village, home to The Bay — one of the longest rideable waves in Africa', 'Intermediate longboarders and improvers wanting long rides without Taghazout crowds'],
          ['Essaouira & Sidi Kaouki', '~175-190 km north (via Agadir/Marrakech)', 'Wind-dominated coast, strong Alizé wind makes paddling more demanding', 'Intermediate surfers, also a top windsurf/kitesurf destination'],
          ['Mirleft & Legzira', '~90-100 km south', 'Sleepy Berber villages, red cliffs, uncrowded even in peak season', 'Adventure surfers wanting quality waves without the scene'],
          ['Sidi Ifni', '~165 km south', 'Faded Spanish art-deco former enclave, atmospheric and little-surfed', 'Experienced surfers seeking an off-the-radar reef and beach break'],
        ],
      },
      callout: {
        label: '🏄 Direct Answer: Where Should You Base Yourself?',
        body: 'First-timers and most travelers: Taghazout or Tamraght — the largest concentration of camps, schools, and breaks for every level, 45 minutes from Agadir Airport. Want longer, mellower rides and fewer crowds: Imsouane. Want to combine surf with windsurfing/kitesurfing: Essaouira. Want the Morocco surf scene of 20 years ago: Mirleft or Sidi Ifni.',
      },
    },
    {
      heading: 'Taghazout & Tamraght — Every Named Break, Rated by Level',
      paragraphs: [
        'This is the heart of Moroccan surfing, and knowing which break suits your level before you paddle out matters — several of these are genuinely not beginner-friendly.',
      ],
      table: {
        caption: 'Taghazout & Tamraght surf breaks — complete list 2026',
        headers: ['Break', 'Level', 'Type', 'Notes'],
        rows: [
          ['Anchor Point (Madraba)', 'Advanced only', 'Right-hand point break', 'Morocco\'s most famous wave — rides of 200-500m on a good swell, works best 4-8ft with NNW swell, hosts the WSL Pro Taghazout Bay'],
          ['Killer Point', 'Advanced', 'Right-hand reef/point', 'Powerful, barreling sections, named for occasional passing orcas'],
          ['Hash Point', 'Beginner-intermediate', 'Right-hand point, in front of the village', 'Fun, forgiving waves, popular with longboarders'],
          ['Panoramas', 'Beginner-intermediate', 'Right-hand point', 'More forgiving than Anchor Point on smaller swells — the go-to when the main break is too big'],
          ['Banana Point / Banana Beach', 'Beginner', 'Beach break', 'Where the majority of surf schools teach first-timers'],
          ['Devil\'s Rock', 'Beginner-intermediate', 'Point break', 'A Tamraght local favourite, more sheltered from north winds'],
          ['Crocro (Crocodiles)', 'Beginner-intermediate', 'Beach/reef', 'One reason many camps have shifted base from Taghazout to Tamraght'],
          ['Boilers', 'Advanced only', 'Powerful reef', 'Heavy, technical — for experienced surfers only'],
        ],
      },
      callout: {
        label: '⚠️ Beginner Safety Note',
        body: 'Avoid Anchor Point, Killer Point, and Boilers as a beginner — every surf camp and school in Taghazout instead uses Banana Point, Hash Point, or Panoramas for lessons, which are genuinely appropriate for first-timers. A standard 2-hour beginner lesson (board, wetsuit, instruction) costs roughly 250-350 MAD per person in a group, or 400-600 MAD for a private lesson.',
      },
    },
    {
      heading: 'Beyond Taghazout — Imsouane, Essaouira and the South',
      paragraphs: [
        'Morocco\'s surf coast extends well beyond the Taghazout bubble, and each zone offers something genuinely different.',
      ],
      table: {
        caption: 'Other major Morocco surf zones — details 2026',
        headers: ['Location', 'Level', 'Key breaks', 'Character'],
        rows: [
          ['Imsouane', 'Beginner-intermediate (The Bay), advanced (Cathedral Point)', 'The Bay — one of the longest rides in Africa', 'A genuinely different pace from Taghazout — quieter fishing village, long mellow rides'],
          ['Essaouira / Sidi Kaouki', 'Intermediate (wind makes paddling harder)', 'Main beach break, Sidi Kaouki point at southern end', 'Wind-dominated — also a top windsurf/kitesurf destination, see our dedicated Essaouira guide'],
          ['Mirleft', 'All levels', 'Marabout (intermediate rights), Les Aftas and Sidi El Ouali (advanced)', 'Rugged cliffs, sweeping beaches, uncrowded even in peak season'],
          ['Legzira', 'Intermediate-advanced', 'Reef break with nice rights, beach break with punchy sets', 'Dramatic red cliffs and rock arches, rarely busy'],
          ['Sidi Ifni', 'Beginner (main beach shorebreak), advanced (the reef)', 'Consistent long rights all winter on the reef', 'Old Spanish port town, deep Berber fishing roots, genuinely atmospheric'],
          ['Safi', 'Advanced only', 'Widely regarded as Morocco\'s best wave', 'Heavy, powerful, for experienced surfers seeking the country\'s top-quality break'],
        ],
      },
    },
    {
      heading: 'When to Go — Season by Season',
      paragraphs: [
        'Morocco is a genuine year-round destination, but the "best" season depends entirely on your skill level.',
      ],
      table: {
        caption: 'Morocco surf seasons by skill level 2026',
        headers: ['Period', 'Conditions', 'Best for'],
        rows: [
          ['October–April (peak season)', 'Consistent North Atlantic groundswells, air temp 20-24°C', 'Intermediate/advanced surfers wanting Anchor Point, Killers and the reefs firing'],
          ['December–February (prime advanced)', 'Biggest, cleanest swells, 4/3mm wetsuit recommended', 'Confident, experienced surfers chasing Anchor Point at its best'],
          ['May–September (beginner season)', 'Smaller waves, warmer water up to 23°C, boardshorts/rash guard viable July-August', 'Complete beginners and improvers — smaller, more forgiving swells'],
          ['March–May & October–November (shoulder)', 'Manageable waves, pleasant water temperatures', 'A genuine sweet spot for most skill levels'],
        ],
      },
    },
    {
      heading: 'Morocco\'s 2026 Surf Competition Calendar',
      paragraphs: [
        'Morocco has become a fixture on the professional surfing calendar, with Taghazout Bay now hosting internationally sanctioned events.',
      ],
      table: {
        caption: 'Morocco surf competitions 2026',
        headers: ['Event', 'Dates', 'Location', 'Details'],
        rows: [
          ['Pro Taghazout Bay (QS 4,000)', 'March 22-29, 2026', 'Anchor Point / Anza Beach, Taghazout Bay', 'Co-sanctioned by WSL Europe and Africa — the region\'s flagship Qualifying Series event, a key step toward the Challenger Series. 2026 winners: Janire Gonzalez Etxabarri and Adur Amatriain (both Basque Country)'],
          ['Taghazout Surf Expo', 'October 22-25, 2026', 'Taghazout', '5th edition — 80+ exhibitors, 40,000+ visitors, trade show, talks, workshops, free concerts, and DJ sets; Africa\'s leading surf industry gathering'],
          ['Junior Pro Taghazout Bay', 'November 11-15, 2026', 'Anchor Point / Anza Beach', 'WSL Europe junior season finale, also counting for Africa — under-20 talent from both regions'],
        ],
      },
      callout: {
        label: '🏆 Watching the Competition',
        body: 'Pro Taghazout Bay is free to watch from the rocks and beach at Anchor Point or Anza — no ticket required, and it is genuinely one of the best free spectator experiences in Moroccan sport. Moroccan surfer Ramzi Boukhiam, a Taghazout local and Championship Tour wildcard, remains the athlete most local camps and cafés will be cheering for.',
      },
    },
    {
      heading: 'Surf Camp Prices — Real 2026 Rates',
      paragraphs: [
        'Taghazout and Tamraght host the highest concentration of surf camps in Africa outside South Africa, spanning every budget.',
      ],
      table: {
        caption: 'Morocco surf camp prices 2026',
        headers: ['Category', 'Price/night or week', 'What to expect'],
        rows: [
          ['Budget camps', 'MAD 100-300/night (~€90+/week)', 'Hostel-style, surf guiding included, equipment rental extra'],
          ['Mid-range camps', 'MAD 500-1,000/night, €479-620/week all-inclusive', 'Private/semi-private rooms, meals and equipment included, daily guiding'],
          ['Premium retreats', 'MAD 1,500+/night, €709+/week', 'Boutique properties with yoga, massage, personalised coaching'],
          ['Beginner lesson (2h, group)', 'MAD 250-350', 'Board, wetsuit, instruction included'],
          ['Beginner lesson (2h, private)', 'MAD 400-600', 'One-on-one instruction'],
          ['Board rental (independent)', 'MAD 150-250/day (€15-25)', 'For certified surfers not needing lessons'],
        ],
      },
    },
    {
      heading: 'Getting Around — Distances and Car Rental',
      paragraphs: [
        'Agadir Al Massira Airport (AGA) is the practical gateway to Morocco\'s surf coast, and a rental car genuinely opens up the full range of breaks rather than limiting you to whichever zone your camp sits in.',
      ],
      table: {
        caption: 'Distances between Morocco surf zones 2026',
        headers: ['Route', 'Distance', 'Drive time'],
        rows: [
          ['Agadir Airport → Taghazout', '~20 km', '45 min'],
          ['Agadir Airport → Imsouane', '~65 km', '1h15'],
          ['Taghazout → Imsouane', '~45 km', '1 hour'],
          ['Agadir → Mirleft', '~90-100 km', '1h30'],
          ['Agadir → Sidi Ifni', '~165 km', '2 hours'],
          ['Agadir → Essaouira', '~175-190 km', '2h15-2h30'],
        ],
      },
      callout: {
        label: '🚗 Rent a Car for Your Surf Trip',
        body: 'A rental car lets you chase the best conditions across zones rather than being limited to whichever breaks your camp can walk to — genuinely useful given how much Morocco\'s wave quality varies by wind and swell direction day to day. Economy from MAD 250/day (€23), pick up at Agadir Airport with free meet & greet. See our full <a href="/blog/agadir-car-rental-airport">Agadir Car Rental Guide</a>, or message us: <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
    {
      heading: 'Combine Surf with the Rest of Morocco',
      paragraphs: [
        'Several operators and independent travelers pair a surf week with Morocco\'s desert circuit — Agadir to Taroudant, Ouarzazate, the Dades and Todra Gorges, and on to Merzouga\'s dunes makes for one of Morocco\'s great two-week combination trips.',
      ],
      callout: {
        label: '🏜️ Plan a Surf + Sahara Trip',
        body: 'See our <a href="/blog/marrakech-to-merzouga-tours-compared">Marrakech to Merzouga Tours guide</a> or <a href="/blog/sahara-desert-morocco-travel-guide">Sahara Desert Travel Guide</a> to combine a Taghazout surf week with a desert circuit — a rental car makes this genuinely straightforward from Agadir.',
      },
    },
  ],
  faqs: [
    {
      question: 'Where is the best place to surf in Morocco?',
      answer: 'Taghazout is Morocco\'s surf capital — home to the world-famous Anchor Point and the highest concentration of surf camps and schools in Africa outside South Africa. For a quieter alternative with equally long rides, Imsouane\'s Bay is one of the longest rideable waves on the continent.',
    },
    {
      question: 'Is Morocco good for beginner surfers?',
      answer: 'Yes — Banana Point and Devil\'s Rock around Aourir and Tamraght, plus the long gentle wave at Imsouane and the beach breaks at Taghazout, offer forgiving conditions with a large surf-camp and school infrastructure. Avoid Anchor Point, Killer Point, and Boilers as a beginner, and stick to May-September for the smallest, warmest conditions.',
    },
    {
      question: 'When is the WSL surf competition in Morocco?',
      answer: 'The Pro Taghazout Bay, a WSL Qualifying Series QS 4,000 event, runs March 22-29 at Anchor Point and Anza Beach in Taghazout Bay in 2026. The Junior Pro Taghazout Bay follows November 11-15 as the European junior season finale. Both are free to watch from the beach.',
    },
    {
      question: 'How much does a surf camp cost in Morocco?',
      answer: 'Budget camps run MAD 100-300/night (roughly €90+/week), mid-range camps with meals and equipment included cost €479-620/week all-inclusive, and premium retreats with yoga and personalised coaching start from €709/week.',
    },
    {
      question: 'What is the best time of year to surf in Morocco?',
      answer: 'October to April delivers the most consistent North Atlantic swells for intermediate and advanced surfers, with December-February the prime window for experienced surfers chasing Anchor Point at its biggest. May to September offers smaller, warmer, more forgiving conditions ideal for beginners.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is Anchor Point in Morocco?', answer: 'Anchor Point (known locally as Madraba) is Morocco\'s most famous surf break, a long right-hand point break in Taghazout that can produce rides of 200-500m on a good swell. It hosts the WSL Pro Taghazout Bay and is considered one of the world\'s premier right-hand waves, suitable for advanced surfers only.' },
    { question: 'Do I need to bring my own surfboard to Morocco?', answer: 'Generally no — nearly every surf camp and shop in Taghazout and Tamraght rents boards (MAD 150-250/day) and wetsuits, and bringing your own is typically only worth it for experienced surfers with specific board preferences for particular breaks.' },
    { question: 'Is Imsouane good for beginners?', answer: 'Yes, particularly at The Bay, one of the longest and most forgiving rideable waves in Africa, making it popular with improving intermediate surfers and beginners wanting long, mellow rides away from Taghazout\'s crowds. Cathedral Point nearby suits more advanced surfers.' },
  ],
  relatedDestinations: ['agadir', 'essaouira'],
  relatedPosts: ['agadir-car-rental-airport', 'agadir-travel-guide', 'essaouira-travel-guide', 'dakhla-travel-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Surf au Maroc 2026 : Guide Complet de Chaque Spot, Camp et Compétition',
  metaDescription: 'Le guide complet du surf au Maroc 2026 : chaque spot majeur d\'Anchor Point à Imsouane, prix des camps de surf, niveaux de difficulté, dates WSL Pro Taghazout Bay, logistique location voiture, distances entre les breaks.',
  title: 'Surf au Maroc 2026 : Le Guide Complet de Chaque Spot, Camp et Compétition',
  description: 'Réponse rapide : la côte atlantique du Maroc concentre plus de breaks de surf nommés au kilomètre que presque partout ailleurs hors Indonésie — d\'Anchor Point à Taghazout aux plages douces pour débutants de Tamraght, la légendaire longue vague d\'Imsouane, et les breaks propulsés par le vent d\'Essaouira et Sidi Kaouki. Ce guide couvre chaque spot majeur avec niveaux de difficulté réels, prix des camps de surf, distances exactes entre breaks, logistique location voiture, et le calendrier de compétitions 2026 confirmé.',
  keyword: 'surf au maroc',
  coverImage: COVER,
  coverAlt: 'Surf au Maroc 2026 — surfeur sur une longue vague droite à Anchor Point Taghazout avec les contreforts de l\'Atlas en arrière-plan',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 18,
  intro: 'Réponse rapide : le Maroc est la destination surf longue distance la plus proche d\'Europe — 2 à 4 heures de vol direct vers Agadir — avec l\'une des côtes de surf les plus concentrées sur terre. Le tronçon de Tamri au sud jusqu\'à Taghazout, Tamraght, et jusqu\'à Imsouane regroupe plus de breaks nommés au kilomètre que presque partout ailleurs hors Indonésie : Anchor Point, Killer Point, Boilers, Hash Point, Banana Point, Devil\'s Rock, et la légendaire Bay à Imsouane, l\'une des vagues les plus longues d\'Afrique.',
  sections: [
    {
      heading: 'Zones de Surf au Maroc — Aperçu Complet',
      paragraphs: ['La côte de surf marocaine se divise en zones distinctes, chacune avec un caractère, un niveau de fréquentation et une orientation de niveau différents.'],
      table: {
        caption: 'Zones de surf au Maroc comparées 2026',
        headers: ['Zone', 'Distance depuis Agadir', 'Caractère', 'Idéal pour'],
        rows: [
          ['Taghazout & Tamraght', '19-20 km nord', 'Capitale du surf marocain — plus forte concentration de camps, écoles et breaks nommés d\'Afrique hors Afrique du Sud', 'Tous niveaux — Anchor Point (avancé) à Banana Point (débutant)'],
          ['Imsouane', '~65 km nord', 'Village de pêcheurs plus calme, abrite The Bay — l\'une des vagues les plus longues d\'Afrique', 'Longboarders intermédiaires et progressants voulant longues vagues sans la foule de Taghazout'],
          ['Essaouira & Sidi Kaouki', '~175-190 km nord', 'Côte dominée par le vent, fort vent Alizé rend la rame plus exigeante', 'Surfeurs intermédiaires, aussi destination windsurf/kitesurf top'],
          ['Mirleft & Legzira', '~90-100 km sud', 'Villages berbères tranquilles, falaises rouges, peu fréquenté même en haute saison', 'Surfeurs aventuriers voulant des vagues de qualité sans la scène'],
          ['Sidi Ifni', '~165 km sud', 'Ancienne enclave espagnole art-déco fanée, atmosphérique et peu surfée', 'Surfeurs expérimentés cherchant un reef et beach break hors radar'],
        ],
      },
      callout: {
        label: '🏄 Réponse Directe : Où Vous Baser ?',
        body: 'Premiers surfeurs et la plupart des voyageurs : Taghazout ou Tamraght. Vagues plus longues, plus douces et moins de foule : Imsouane. Combiner surf avec windsurf/kitesurf : Essaouira. La scène surf marocaine d\'il y a 20 ans : Mirleft ou Sidi Ifni.',
      },
    },
    {
      heading: 'Taghazout & Tamraght — Chaque Break Nommé, Noté par Niveau',
      paragraphs: ['C\'est le cœur du surf marocain, et savoir quel break convient à votre niveau avant de partir compte vraiment.'],
      table: {
        caption: 'Breaks de surf Taghazout & Tamraght — liste complète 2026',
        headers: ['Break', 'Niveau', 'Type', 'Notes'],
        rows: [
          ['Anchor Point (Madraba)', 'Avancé uniquement', 'Point break droit', 'La vague la plus célèbre du Maroc — vagues de 200-500m sur bonne houle, accueille le WSL Pro Taghazout Bay'],
          ['Killer Point', 'Avancé', 'Reef/point droit', 'Puissant, sections tubulaires, nommé pour les orques passant occasionnellement'],
          ['Hash Point', 'Débutant-intermédiaire', 'Point droit, devant le village', 'Vagues amusantes et indulgentes, populaire chez les longboarders'],
          ['Panoramas', 'Débutant-intermédiaire', 'Point droit', 'Plus indulgent qu\'Anchor Point sur petites houles'],
          ['Banana Point / Banana Beach', 'Débutant', 'Beach break', 'Où la majorité des écoles de surf enseignent aux débutants'],
          ['Devil\'s Rock', 'Débutant-intermédiaire', 'Point break', 'Favori local de Tamraght, plus abrité des vents du nord'],
          ['Crocro', 'Débutant-intermédiaire', 'Beach/reef', 'Une raison pour laquelle de nombreux camps ont déplacé leur base'],
          ['Boilers', 'Avancé uniquement', 'Reef puissant', 'Lourd, technique — pour surfeurs expérimentés uniquement'],
        ],
      },
      callout: {
        label: '⚠️ Note Sécurité Débutant',
        body: 'Évitez Anchor Point, Killer Point et Boilers en tant que débutant — chaque camp et école utilise plutôt Banana Point, Hash Point ou Panoramas pour les cours. Une leçon débutant standard de 2h coûte environ MAD 250-350 par personne en groupe, ou MAD 400-600 en privé.',
      },
    },
    {
      heading: 'Au-delà de Taghazout — Imsouane, Essaouira et le Sud',
      paragraphs: ['La côte de surf marocaine s\'étend bien au-delà de la bulle Taghazout.'],
      table: {
        caption: 'Autres zones de surf majeures au Maroc — détails 2026',
        headers: ['Lieu', 'Niveau', 'Breaks clés', 'Caractère'],
        rows: [
          ['Imsouane', 'Débutant-intermédiaire (The Bay), avancé (Cathedral Point)', 'The Bay — l\'une des vagues les plus longues d\'Afrique', 'Rythme vraiment différent de Taghazout'],
          ['Essaouira / Sidi Kaouki', 'Intermédiaire (vent rend la rame difficile)', 'Beach break principal, point Sidi Kaouki au sud', 'Dominé par le vent — aussi destination windsurf/kitesurf top'],
          ['Mirleft', 'Tous niveaux', 'Marabout (intermédiaire), Les Aftas et Sidi El Ouali (avancé)', 'Falaises accidentées, plages étendues, peu fréquenté'],
          ['Legzira', 'Intermédiaire-avancé', 'Reef avec beaux droits, beach break avec sets puissants', 'Falaises rouges spectaculaires et arches rocheuses'],
          ['Sidi Ifni', 'Débutant (shorebreak), avancé (le reef)', 'Droits longs et constants tout l\'hiver sur le reef', 'Ancienne ville portuaire espagnole, racines berbères profondes'],
          ['Safi', 'Avancé uniquement', 'Largement considéré comme la meilleure vague du Maroc', 'Lourd, puissant, pour surfeurs expérimentés'],
        ],
      },
    },
    {
      heading: 'Quand Y Aller — Saison par Saison',
      paragraphs: ['Le Maroc est une véritable destination toute l\'année, mais la "meilleure" saison dépend entièrement de votre niveau.'],
      table: {
        caption: 'Saisons de surf au Maroc par niveau 2026',
        headers: ['Période', 'Conditions', 'Idéal pour'],
        rows: [
          ['Octobre-Avril (haute saison)', 'Houles nord-atlantiques constantes, air 20-24°C', 'Surfeurs intermédiaires/avancés voulant Anchor Point et les reefs actifs'],
          ['Décembre-Février (top avancé)', 'Plus grosses houles, combinaison 4/3mm recommandée', 'Surfeurs confiants et expérimentés chassant Anchor Point à son meilleur'],
          ['Mai-Septembre (saison débutant)', 'Vagues plus petites, eau plus chaude jusqu\'à 23°C', 'Débutants complets et progressants'],
          ['Mars-Mai & Octobre-Novembre (intersaison)', 'Vagues gérables, températures agréables', 'Vraie période idéale pour la plupart des niveaux'],
        ],
      },
    },
    {
      heading: 'Calendrier de Compétitions Surf Maroc 2026',
      paragraphs: ['Le Maroc est devenu un incontournable du calendrier professionnel de surf.'],
      table: {
        caption: 'Compétitions de surf au Maroc 2026',
        headers: ['Événement', 'Dates', 'Lieu', 'Détails'],
        rows: [
          ['Pro Taghazout Bay (QS 4 000)', '22-29 mars 2026', 'Anchor Point / Anza Beach', 'Co-sanctionné WSL Europe et Afrique — événement phare Qualifying Series. Vainqueurs 2026 : Janire Gonzalez Etxabarri et Adur Amatriain'],
          ['Taghazout Surf Expo', '22-25 octobre 2026', 'Taghazout', '5e édition — 80+ exposants, 40 000+ visiteurs, salon professionnel, conférences, concerts gratuits'],
          ['Junior Pro Taghazout Bay', '11-15 novembre 2026', 'Anchor Point / Anza Beach', 'Finale saison junior WSL Europe, compte aussi pour l\'Afrique'],
        ],
      },
      callout: {
        label: '🏆 Regarder la Compétition',
        body: 'Le Pro Taghazout Bay est gratuit à regarder depuis les rochers et la plage à Anchor Point ou Anza — aucun billet requis, l\'une des meilleures expériences spectateur gratuites du sport marocain.',
      },
    },
    {
      heading: 'Prix des Camps de Surf — Vrais Tarifs 2026',
      paragraphs: ['Taghazout et Tamraght accueillent la plus forte concentration de camps de surf d\'Afrique hors Afrique du Sud.'],
      table: {
        caption: 'Prix des camps de surf au Maroc 2026',
        headers: ['Catégorie', 'Prix/nuit ou semaine', 'À quoi s\'attendre'],
        rows: [
          ['Camps économiques', 'MAD 100-300/nuit (~90€+/semaine)', 'Style auberge, guidage surf inclus'],
          ['Camps milieu de gamme', 'MAD 500-1 000/nuit, 479-620€/semaine tout compris', 'Chambres privées/semi-privées, repas et équipement inclus'],
          ['Retraites premium', 'MAD 1 500+/nuit, 709€+/semaine', 'Propriétés boutique avec yoga, massage, coaching personnalisé'],
          ['Cours débutant (2h, groupe)', 'MAD 250-350', 'Planche, combinaison, instruction incluses'],
        ],
      },
    },
    {
      heading: 'Se Déplacer — Distances et Location Voiture',
      paragraphs: ['L\'aéroport Agadir Al Massira (AGA) est la porte d\'entrée pratique vers la côte de surf marocaine.'],
      table: {
        caption: 'Distances entre zones de surf au Maroc 2026',
        headers: ['Trajet', 'Distance', 'Temps de conduite'],
        rows: [
          ['Aéroport Agadir → Taghazout', '~20 km', '45 min'],
          ['Aéroport Agadir → Imsouane', '~65 km', '1h15'],
          ['Taghazout → Imsouane', '~45 km', '1 heure'],
          ['Agadir → Mirleft', '~90-100 km', '1h30'],
          ['Agadir → Essaouira', '~175-190 km', '2h15-2h30'],
        ],
      },
      callout: {
        label: '🚗 Louez une Voiture pour Votre Voyage Surf',
        body: 'Une voiture de location vous permet de chasser les meilleures conditions à travers les zones. Économique dès MAD 250/jour (23€), prise en charge à l\'aéroport d\'Agadir. Voir notre <a href="/blog/location-voiture-agadir-aeroport">Guide Location Voiture Agadir</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Où est le meilleur endroit pour surfer au Maroc ?', answer: 'Taghazout est la capitale du surf marocain — abrite le célèbre Anchor Point et la plus forte concentration de camps de surf d\'Afrique hors Afrique du Sud.' },
    { question: 'Le Maroc convient-il aux surfeurs débutants ?', answer: 'Oui — Banana Point et Devil\'s Rock, plus la vague longue et douce d\'Imsouane, offrent des conditions indulgentes avec une grande infrastructure de camps et écoles.' },
    { question: 'Quand est la compétition WSL de surf au Maroc ?', answer: 'Le Pro Taghazout Bay, événement WSL Qualifying Series QS 4 000, se déroule du 22 au 29 mars à Anchor Point et Anza Beach en 2026.' },
    { question: 'Combien coûte un camp de surf au Maroc ?', answer: 'Camps économiques MAD 100-300/nuit, camps milieu de gamme 479-620€/semaine tout compris, retraites premium dès 709€/semaine.' },
    { question: 'Quelle est la meilleure période pour surfer au Maroc ?', answer: 'Octobre à avril offre les houles nord-atlantiques les plus constantes ; mai à septembre offre des conditions plus petites et douces idéales pour débutants.' },
  ],
  peopleAlsoAsk: [
    { question: 'Qu\'est-ce qu\'Anchor Point au Maroc ?', answer: 'Anchor Point est le break de surf le plus célèbre du Maroc, un point break droit à Taghazout pouvant produire des vagues de 200-500m.' },
    { question: 'Dois-je apporter ma propre planche au Maroc ?', answer: 'Généralement non — presque chaque camp et boutique à Taghazout loue planches et combinaisons.' },
    { question: 'Imsouane convient-elle aux débutants ?', answer: 'Oui, particulièrement à The Bay, l\'une des vagues les plus longues et indulgentes d\'Afrique.' },
  ],
  relatedDestinations: ['agadir', 'essaouira'],
  relatedPosts: ['location-voiture-agadir-aeroport', 'guide-voyage-agadir', 'guide-voyage-essaouira', 'guide-voyage-dakhla'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'ركوب الأمواج بالمغرب 2026: الدليل الشامل لكل موقع ومعسكر ومسابقة',
  metaDescription: 'الدليل الشامل لركوب الأمواج بالمغرب 2026: كل موقع رئيسي من أنكور بوينت لإمسوان، أسعار معسكرات ركوب الأمواج، مستويات الصعوبة، مواعيد WSL برو تاغازوت باي، لوجستيات تأجير السيارات، المسافات بين المواقع.',
  title: 'ركوب الأمواج بالمغرب 2026: الدليل الشامل لكل موقع ومعسكر ومسابقة',
  description: 'إجابة سريعة: يجمع الساحل الأطلسي للمغرب مواقع ركوب أمواج مسماة أكثر لكل كيلومتر من أي مكان تقريباً خارج إندونيسيا — من أنكور بوينت الشهير عالمياً بتاغازوت لشواطئ تامراغت اللطيفة للمبتدئين، الموجة الطويلة الأسطورية بإمسوان، ومواقع الرياح بالصويرة وسيدي كاوكي. يغطي هذا الدليل كل موقع رئيسي بمستويات صعوبة حقيقية وأسعار معسكرات وتقويم مسابقات 2026 المؤكد.',
  keyword: 'ركوب الأمواج المغرب',
  coverImage: COVER,
  coverAlt: 'ركوب الأمواج بالمغرب 2026 — راكب أمواج على موجة يمينية طويلة بأنكور بوينت تاغازوت مع سفوح الأطلس بالخلفية',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 18,
  intro: 'إجابة سريعة: المغرب أقرب وجهة ركوب أمواج بعيدة المدى لأوروبا — 2-4 ساعات طيران مباشر لأكادير — بواحد من أكثر سواحل ركوب الأمواج تركيزاً على وجه الأرض. الشريط من تامري جنوباً عبر تاغازوت وتامراغت وصولاً لإمسوان يضم مواقع مسماة أكثر لكل كيلومتر من أي مكان تقريباً خارج إندونيسيا: أنكور بوينت وكيلر بوينت وبويلرز وهاش بوينت وبنانا بوينت وديفلز روك، والخليج الأسطوري بإمسوان، إحدى أطول الموجات القابلة للركوب بأفريقيا.',
  sections: [
    {
      heading: 'مناطق ركوب الأمواج بالمغرب — نظرة شاملة',
      paragraphs: ['ساحل ركوب الأمواج المغربي ينقسم لمناطق متمايزة، لكل منها طابع ومستوى ازدحام وتركيز مستوى مختلف.'],
      table: {
        caption: 'مناطق ركوب الأمواج بالمغرب مقارنة 2026',
        headers: ['المنطقة', 'المسافة من أكادير', 'الطابع', 'الأنسب لـ'],
        rows: [
          ['تاغازوت وتامراغت', '19-20 كم شمالاً', 'عاصمة ركوب الأمواج المغربية — أعلى تركيز معسكرات ومدارس ومواقع مسماة بأفريقيا خارج جنوب أفريقيا', 'كل المستويات — أنكور بوينت (متقدم) لبنانا بوينت (مبتدئ)'],
          ['إمسوان', '~65 كم شمالاً', 'قرية صيادين أهدأ، موطن الخليج — إحدى أطول الموجات القابلة للركوب بأفريقيا', 'راكبو لونغبورد متوسطون ومتطورون يبحثون عن موجات طويلة'],
          ['الصويرة وسيدي كاوكي', '~175-190 كم شمالاً', 'ساحل تهيمن عليه الرياح، رياح الأليزي القوية تجعل التجديف أصعب', 'راكبو الأمواج المتوسطون، أيضاً وجهة رياضة الريح الرائدة'],
          ['ميرليفت وليغزيرا', '~90-100 كم جنوباً', 'قرى أمازيغية هادئة، منحدرات حمراء، غير مزدحمة حتى بذروة الموسم', 'راكبو الأمواج المغامرون الباحثون عن موجات جودة بلا الزحام'],
          ['سيدي إفني', '~165 كم جنوباً', 'مستعمرة إسبانية سابقة آرت ديكو باهتة، أجواء مميزة وقليلة الركوب', 'راكبو الأمواج ذوو الخبرة الباحثون عن صخرة وشاطئ بعيداً عن الأنظار'],
        ],
      },
      callout: {
        label: '🏄 إجابة مباشرة: أين تتمركز؟',
        body: 'المبتدئون ومعظم المسافرين: تاغازوت أو تامراغت. موجات أطول وأهدأ وزحام أقل: إمسوان. الجمع بين ركوب الأمواج ورياضة الريح: الصويرة. مشهد ركوب الأمواج المغربي منذ 20 سنة: ميرليفت أو سيدي إفني.',
      },
    },
    {
      heading: 'تاغازوت وتامراغت — كل موقع مسمى، مصنف حسب المستوى',
      paragraphs: ['هذا قلب ركوب الأمواج المغربي، ومعرفة أي موقع يناسب مستواك قبل التجديف مهم فعلاً.'],
      table: {
        caption: 'مواقع ركوب الأمواج بتاغازوت وتامراغت — القائمة الكاملة 2026',
        headers: ['الموقع', 'المستوى', 'النوع', 'ملاحظات'],
        rows: [
          ['أنكور بوينت (مضربة)', 'متقدم فقط', 'موجة يمينية نقطية', 'أشهر موجة بالمغرب — ركوب 200-500م بموجة جيدة، تستضيف WSL برو تاغازوت باي'],
          ['كيلر بوينت', 'متقدم', 'صخرة/نقطة يمينية', 'قوية، أقسام أنبوبية، سُميت لحيتان الأوركا العابرة أحياناً'],
          ['هاش بوينت', 'مبتدئ-متوسط', 'نقطة يمينية، أمام القرية', 'موجات ممتعة ومتسامحة، شائعة لراكبي اللونغبورد'],
          ['بانوراماس', 'مبتدئ-متوسط', 'نقطة يمينية', 'أكثر تسامحاً من أنكور بوينت بالموجات الصغيرة'],
          ['بنانا بوينت/بنانا بيتش', 'مبتدئ', 'شاطئ', 'حيث تُعلّم معظم مدارس ركوب الأمواج المبتدئين'],
          ['ديفلز روك', 'مبتدئ-متوسط', 'نقطة', 'مفضل محلي بتامراغت، أكثر حماية من رياح الشمال'],
          ['كروكرو', 'مبتدئ-متوسط', 'شاطئ/صخرة', 'أحد أسباب انتقال معسكرات كثيرة لتامراغت'],
          ['بويلرز', 'متقدم فقط', 'صخرة قوية', 'ثقيلة وتقنية — للمتقدمين فقط'],
        ],
      },
      callout: {
        label: '⚠️ ملاحظة سلامة للمبتدئين',
        body: 'تجنب أنكور بوينت وكيلر بوينت وبويلرز كمبتدئ — كل معسكر ومدرسة تستخدم بدلاً منها بنانا بوينت أو هاش بوينت أو بانوراماس للدروس. درس مبتدئ قياسي لساعتين يكلف حوالي MAD 250-350 للشخص بمجموعة، أو MAD 400-600 خاص.',
      },
    },
    {
      heading: 'ما وراء تاغازوت — إمسوان والصويرة والجنوب',
      paragraphs: ['ساحل ركوب الأمواج المغربي يمتد أبعد بكثير من فقاعة تاغازوت.'],
      table: {
        caption: 'مناطق ركوب أمواج رئيسية أخرى بالمغرب — التفاصيل 2026',
        headers: ['الموقع', 'المستوى', 'المواقع الرئيسية', 'الطابع'],
        rows: [
          ['إمسوان', 'مبتدئ-متوسط (الخليج)، متقدم (كاثيدرال بوينت)', 'الخليج — إحدى أطول الموجات بأفريقيا', 'وتيرة مختلفة فعلاً عن تاغازوت'],
          ['الصويرة/سيدي كاوكي', 'متوسط (الريح تصعّب التجديف)', 'شاطئ رئيسي، نقطة سيدي كاوكي جنوباً', 'تهيمن عليها الرياح — أيضاً وجهة رياضة ريح رائدة'],
          ['ميرليفت', 'كل المستويات', 'مرابوط (متوسط)، الأفتاس وسيدي الوالي (متقدم)', 'منحدرات وعرة، شواطئ ممتدة، غير مزدحمة'],
          ['ليغزيرا', 'متوسط-متقدم', 'صخرة بيمينيات جميلة، شاطئ بمجموعات قوية', 'منحدرات حمراء درامية وأقواس صخرية'],
          ['سيدي إفني', 'مبتدئ (الشاطئ)، متقدم (الصخرة)', 'يمينيات طويلة وثابتة طوال الشتاء بالصخرة', 'بلدة ميناء إسبانية قديمة، جذور صيد أمازيغية عميقة'],
          ['آسفي', 'متقدم فقط', 'تُعتبر على نطاق واسع أفضل موجة بالمغرب', 'ثقيلة وقوية، لذوي الخبرة'],
        ],
      },
    },
    {
      heading: 'متى تذهب — موسماً بموسم',
      paragraphs: ['المغرب وجهة حقيقية طوال السنة، لكن "أفضل" موسم يعتمد كلياً على مستواك.'],
      table: {
        caption: 'مواسم ركوب الأمواج بالمغرب حسب المستوى 2026',
        headers: ['الفترة', 'الظروف', 'الأنسب لـ'],
        rows: [
          ['أكتوبر-أبريل (ذروة الموسم)', 'أمواج شمال أطلسية ثابتة، هواء 20-24°م', 'راكبو الأمواج المتوسطون/المتقدمون الباحثون عن أنكور بوينت نشطاً'],
          ['ديسمبر-فبراير (ذروة المتقدمين)', 'أكبر وأنظف الأمواج', 'راكبو الأمواج الواثقون وذوو الخبرة'],
          ['مايو-سبتمبر (موسم المبتدئين)', 'موجات أصغر، ماء أدفأ حتى 23°م', 'المبتدئون الكاملون والمتطورون'],
          ['مارس-مايو وأكتوبر-نوفمبر (موسم وسيط)', 'موجات قابلة للإدارة، حرارة ماء لطيفة', 'نقطة مثالية حقيقية لمعظم المستويات'],
        ],
      },
    },
    {
      heading: 'تقويم مسابقات ركوب الأمواج بالمغرب 2026',
      paragraphs: ['أصبح المغرب ثابتاً بتقويم ركوب الأمواج الاحترافي.'],
      table: {
        caption: 'مسابقات ركوب الأمواج بالمغرب 2026',
        headers: ['الفعالية', 'المواعيد', 'الموقع', 'التفاصيل'],
        rows: [
          ['برو تاغازوت باي (QS 4,000)', '22-29 مارس 2026', 'أنكور بوينت/شاطئ أنزا', 'برعاية مشتركة WSL أوروبا وأفريقيا — الفائزون 2026: خانيري غونزاليز إتشاباري وأدور أماترياين'],
          ['معرض تاغازوت للركوب', '22-25 أكتوبر 2026', 'تاغازوت', 'النسخة 5 — +80 عارض، +40,000 زائر'],
          ['جونيور برو تاغازوت باي', '11-15 نوفمبر 2026', 'أنكور بوينت/شاطئ أنزا', 'نهائي موسم الناشئين WSL أوروبا'],
        ],
      },
      callout: {
        label: '🏆 مشاهدة المسابقة',
        body: 'برو تاغازوت باي مجاني للمشاهدة من الصخور والشاطئ بأنكور بوينت أو أنزا — بلا تذكرة مطلوبة.',
      },
    },
    {
      heading: 'أسعار معسكرات ركوب الأمواج — أسعار حقيقية 2026',
      paragraphs: ['تاغازوت وتامراغت تستضيفان أعلى تركيز معسكرات ركوب أمواج بأفريقيا خارج جنوب أفريقيا.'],
      table: {
        caption: 'أسعار معسكرات ركوب الأمواج بالمغرب 2026',
        headers: ['الفئة', 'السعر/ليلة أو أسبوع', 'ماذا تتوقع'],
        rows: [
          ['معسكرات اقتصادية', 'MAD 100-300/ليلة', 'نمط نزل، إرشاد ركوب مشمول'],
          ['معسكرات متوسطة', 'MAD 500-1,000/ليلة، 479-620€/أسبوع شامل', 'غرف خاصة/شبه خاصة، وجبات ومعدات مشمولة'],
          ['ملاذات راقية', 'MAD 1,500+/ليلة', 'عقارات بوتيك بيوغا وتدليك'],
        ],
      },
    },
    {
      heading: 'التنقل — المسافات وتأجير السيارات',
      paragraphs: ['مطار أكادير المسيرة (AGA) البوابة العملية لساحل ركوب الأمواج المغربي.'],
      table: {
        caption: 'المسافات بين مناطق ركوب الأمواج بالمغرب 2026',
        headers: ['المسار', 'المسافة', 'وقت القيادة'],
        rows: [
          ['مطار أكادير ← تاغازوت', '~20 كم', '45 دقيقة'],
          ['مطار أكادير ← إمسوان', '~65 كم', '1:15 ساعة'],
          ['أكادير ← ميرليفت', '~90-100 كم', '1:30 ساعة'],
          ['أكادير ← الصويرة', '~175-190 كم', '2:15-2:30 ساعة'],
        ],
      },
      callout: {
        label: '🚗 استأجر سيارة لرحلة ركوب أمواجك',
        body: 'سيارة إيجار تتيح لك مطاردة أفضل الظروف عبر المناطق. اقتصادية من MAD 250/يوم (23€)، استلام بمطار أكادير. راجع <a href="/blog/istijar-sayyara-matar-agadir">دليل تأجير سيارات مطار أكادير</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'أين أفضل مكان لركوب الأمواج بالمغرب؟', answer: 'تاغازوت عاصمة ركوب الأمواج المغربية — موطن أنكور بوينت الشهير عالمياً وأعلى تركيز معسكرات بأفريقيا خارج جنوب أفريقيا.' },
    { question: 'هل المغرب جيد لركوب الأمواج للمبتدئين؟', answer: 'نعم — بنانا بوينت وديفلز روك، بالإضافة للموجة الطويلة اللطيفة بإمسوان، تقدم ظروفاً متسامحة ببنية معسكرات ومدارس كبيرة.' },
    { question: 'متى مسابقة WSL لركوب الأمواج بالمغرب؟', answer: 'برو تاغازوت باي، فعالية WSL QS 4,000، تُقام 22-29 مارس بأنكور بوينت وأنزا بيتش 2026.' },
    { question: 'كم تكلفة معسكر ركوب أمواج بالمغرب؟', answer: 'المعسكرات الاقتصادية MAD 100-300/ليلة، المتوسطة 479-620€/أسبوع شامل، الراقية من 709€/أسبوع.' },
    { question: 'ما أفضل وقت لركوب الأمواج بالمغرب؟', answer: 'أكتوبر-أبريل يقدم أثبت الأمواج للمتوسطين والمتقدمين؛ مايو-سبتمبر ظروف أصغر وأدفأ مثالية للمبتدئين.' },
  ],
  peopleAlsoAsk: [
    { question: 'ما أنكور بوينت بالمغرب؟', answer: 'أنكور بوينت أشهر موقع ركوب أمواج بالمغرب، موجة يمينية نقطية طويلة بتاغازوت.' },
    { question: 'هل أحتاج إحضار لوحي الخاص للمغرب؟', answer: 'عموماً لا — تقريباً كل معسكر ومحل بتاغازوت يؤجر ألواحاً وبدلات.' },
    { question: 'هل إمسوان جيدة للمبتدئين؟', answer: 'نعم، خاصة بالخليج، إحدى أطول وأكثر الموجات تسامحاً بأفريقيا.' },
  ],
  relatedDestinations: ['agadir', 'essaouira'],
  relatedPosts: ['istijar-sayyara-matar-agadir', 'dalil-safar-agadir', 'dalil-safar-essaouira', 'dalil-safar-dakhla'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);