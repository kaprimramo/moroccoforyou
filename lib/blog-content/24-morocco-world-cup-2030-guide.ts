import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'morocco-world-cup-2030-travel-guide';
const SLUG_FR = 'guide-voyage-coupe-du-monde-2030-maroc';
const SLUG_AR = 'dalil-as-safar-kas-al-alam-2030-al-maghrib';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3886422);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Morocco World Cup 2030 Travel Guide — Host Cities, Stadiums & Tips',
  metaDescription: 'Everything to know about the 2030 FIFA World Cup in Morocco: 6 host cities (Casablanca, Rabat, Marrakech, Fes, Tangier, Agadir), stadiums, dates, transport and travel tips.',
  title: 'Morocco World Cup 2030 Travel Guide: Host Cities, Stadiums & How to Plan',
  description: 'Morocco co-hosts the 2030 FIFA World Cup with Spain and Portugal. This guide covers the 6 Moroccan host cities, stadiums, transport links, and how to start planning your trip now.',
  keyword: 'morocco world cup 2030 travel guide',
  coverImage: COVER,
  coverAlt: 'Football stadium in Morocco prepared for the 2030 FIFA World Cup',
  publishedISO: '2026-06-12',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'In December 2024, FIFA confirmed that Morocco will co-host the 2030 FIFA World Cup alongside Spain and Portugal — the first World Cup spanning two continents and three countries, and the first ever hosted in North Africa. For Morocco, this caps a journey that began with a failed 1994 bid and includes the unforgettable run to the 2022 semifinal in Qatar. For travelers, it is a once-in-a-generation opportunity to combine world-class football with one of the most exciting travel destinations on earth — and the infrastructure being built now will make getting around Morocco easier than ever.',
  sections: [
    {
      heading: 'Morocco World Cup 2030 — The Basics',
      paragraphs: [
        'The 2030 World Cup will be held jointly across Morocco, Spain and Portugal — 20 stadiums across 17 cities, with Morocco hosting 6 stadiums in 6 cities. As a nod to the World Cup centenary (the first edition was played in Uruguay in 1930), three special opening matches will also be held in Uruguay, Argentina and Paraguay before the main tournament begins. The tournament is expected to run from June to July 2030, with exact dates to be confirmed by FIFA.',
      ],
      table: {
        caption: 'Morocco World Cup 2030 — quick facts',
        headers: ['Detail', 'Information'],
        rows: [
          ['Host countries', 'Morocco, Spain, Portugal (joint hosting)'],
          ['Tournament dates', 'June – July 2030 (exact dates TBC by FIFA)'],
          ['Total venues', '20 stadiums in 17 cities (Morocco, Spain, Portugal)'],
          ['Morocco host cities', '6: Casablanca, Rabat, Marrakech, Fes, Tangier, Agadir'],
          ['Estimated Morocco infrastructure investment', '$5 billion+'],
          ['Matches expected in Morocco', '15–20 (estimate, official split TBC)'],
        ],
      },
      callout: {
        label: '🇲🇦 Why This Matters',
        body: 'Morocco is investing over $5 billion in stadiums, airport expansions across all 6 host cities, new motorways, high-speed rail extensions, and nationwide 5G — all on top of the AFCON 2025 upgrades already completed. By 2030, getting around Morocco will be dramatically faster than today. Visiting in the years leading up to the tournament still gives you the authentic Morocco experience, with new infrastructure as a bonus.',
      },
    },
    {
      heading: 'The 6 Moroccan Host Cities',
      paragraphs: [
        'Morocco\'s six World Cup host cities were also the host cities for AFCON 2025 (Dec 2025–Jan 2026), so most of the stadium renovation work is already complete and tested. The crown jewel is the new Grand Stade Hassan II near Casablanca, planned as the largest stadium in the world at 115,000 seats — a strong candidate to host the World Cup final.',
      ],
      table: {
        caption: 'Morocco World Cup 2030 — host cities and stadiums',
        headers: ['City', 'Stadium', 'Planned capacity', 'Highlights for travelers'],
        rows: [
          ['Casablanca / Benslimane', 'Grand Stade Hassan II (new)', '115,000', 'World\'s largest stadium — likely final/semifinal venue'],
          ['Rabat', 'Prince Moulay Abdellah Complex', '69,500', 'AFCON 2025 final host, capital city'],
          ['Marrakech', 'Marrakech Stadium', '45,000 (expanding)', 'Medina, Atlas views, most popular tourist city'],
          ['Fes', 'Fes Stadium', '45,000 → 50,000', 'Multi-purpose (football + athletics), oldest medina'],
          ['Tangier', 'Ibn Battouta Stadium', '65,000 (renovated)', 'Gateway to Spain, ferry connections'],
          ['Agadir', 'Adrar Stadium', '70,000 (expanding)', 'Atlantic beach resort city, golf'],
        ],
      },
    },
    {
      heading: 'Transport: The Tangier–Casablanca–Marrakech–Agadir Corridor',
      paragraphs: [
        'The transport story is as important as the stadiums. Morocco\'s 2030 plans include extending the high-speed TGV line (currently Tangier–Casablanca, the fastest train in Africa) south to Marrakech, plus airport expansions at all six host cities and new motorway connections.',
        'This means the Tangier–Casablanca–Marrakech–Agadir corridor — already covering most of Morocco\'s key tourist destinations — will become one of the most modern transport corridors in Africa by 2030. For travelers, this translates into faster, easier movement between host cities both before and during the tournament.',
      ],
      table: {
        caption: 'Current travel times between Morocco host cities (2026)',
        headers: ['Route', 'Train (current)', 'Car (current)', '2030 outlook'],
        rows: [
          ['Tangier – Casablanca', '2h10 (TGV)', '4–5h', 'TGV already operational'],
          ['Casablanca – Rabat', '0h50 (train)', '1h', 'Stable, well-connected'],
          ['Casablanca – Marrakech', '2h45 (train) / ~2h30 (A7)', '2h30–3h', 'TGV extension planned to Marrakech'],
          ['Marrakech – Agadir', '~3h (train)', '2h30–3h (A7)', 'A7 motorway already operational'],
          ['Casablanca – Fes', '3h30 (train)', '3h30 (toll road)', 'Stable rail link'],
        ],
      },
    },
    {
      heading: 'Why Visit Morocco Before 2030',
      paragraphs: [
        'Visiting Morocco in the years before the World Cup gives you two advantages: the authentic, less-crowded experience that will inevitably change once millions of fans arrive, and the chance to enjoy newly completed infrastructure (renovated stadiums, AFCON-era hotel additions, expanded airports) without 2030-level crowds and prices.',
        'AFCON 2025 (December 2025 – January 2026) already tested most of the stadium and transport upgrades in real conditions — so the systems travelers will use are largely proven. Hotel capacity is expanding across all 6 host cities ahead of 2030, which also means more accommodation choice and competitive pricing for travelers visiting now.',
      ],
      callout: {
        label: '💡 Planning Tip',
        body: 'Each of Morocco\'s 6 World Cup host cities is also a great standalone destination today. Marrakech and Fes for culture and medinas, Casablanca for modern Morocco and nightlife, Agadir for beaches, Tangier for the Spain ferry gateway, and Rabat for the elegant capital. A 2-week trip covering 3–4 of these cities by car is entirely doable on Morocco\'s current motorway network.',
      },
    },
    {
      heading: 'Planning a Multi-City Morocco Trip by Car',
      paragraphs: [
        'For travelers wanting to see multiple World Cup host cities, renting a car at Casablanca Airport (CMN) is the most flexible option — Morocco\'s motorway network already connects Casablanca to Rabat, Marrakech, Fes and (via Marrakech) Agadir, with Tangier reachable via the A1/A4.',
        'A realistic 10–14 day loop: Casablanca → Rabat (1h) → Fes (3h30 via toll road) → Marrakech (via Casablanca or direct, ~4-5h) → Agadir (2h30 on A7). This covers 5 of the 6 Morocco host cities with comfortable driving days throughout.',
      ],
      table: {
        caption: 'Sample Morocco host-city road trip — driving times',
        headers: ['Leg', 'Driving time', 'Distance'],
        rows: [
          ['Casablanca → Rabat', '~1h', '90 km'],
          ['Rabat → Fes', '~2h45', '200 km'],
          ['Fes → Marrakech', '~5h (via Casablanca) or direct route', '~480 km'],
          ['Marrakech → Agadir', '~2h30', '~250 km'],
          ['Agadir → Casablanca (return)', '~5h', '~460 km'],
        ],
      },
    },
    {
      heading: 'Renting a Car for Your World Cup Trip',
      paragraphs: [
        'Whether you are visiting before 2030 to explore the host cities, or planning ahead for the tournament itself, a rental car gives you the freedom to move between cities on your own schedule — especially valuable during a major tournament when trains and flights will be in high demand.',
        'MoroccoForYou Cars operates from Casablanca Airport (CMN), Morocco\'s main international gateway and the city hosting the largest planned stadium. Economy cars from 250 MAD/day (€23), with unlimited mileage and free airport meet-and-greet 24/7 — book on WhatsApp for instant confirmation.',
      ],
      callout: {
        label: '💡 MoroccoForYou Tip',
        body: 'Casablanca Airport (CMN) is the natural base for a multi-city Morocco trip — it has the best international flight connections and sits within driving distance of Rabat, Marrakech and (via the A7) Agadir. Pick up your car at CMN from 250 MAD/day and plan your route to as many host cities as your schedule allows.',
      },
    },
  ],
  faqs: [
    {
      question: 'Which cities in Morocco will host the 2030 World Cup?',
      answer: 'Six cities: Casablanca (Grand Stade Hassan II, near Benslimane), Rabat, Marrakech, Fes, Tangier, and Agadir. These were also the host cities for AFCON 2025.',
    },
    {
      question: 'When is the 2030 World Cup in Morocco?',
      answer: 'The tournament is expected to run from June to July 2030, jointly hosted by Morocco, Spain and Portugal. Exact dates will be confirmed by FIFA closer to the event.',
    },
    {
      question: 'Will the World Cup final be played in Morocco?',
      answer: 'It has not been officially confirmed, but the new Grand Stade Hassan II near Casablanca — planned as the world\'s largest stadium at 115,000 seats — is considered a strong candidate to host the final or a semifinal.',
    },
    {
      question: 'Is it a good time to visit Morocco before the 2030 World Cup?',
      answer: 'Yes — stadium and transport upgrades from AFCON 2025 are already complete and tested, hotel capacity is expanding, and the country is less crowded than it will be during the tournament itself. It is a great window to experience the host cities authentically.',
    },
    {
      question: 'How do I travel between Morocco\'s World Cup host cities?',
      answer: 'By train (high-speed TGV between Tangier and Casablanca, regional trains elsewhere) or by car via Morocco\'s motorway network, which already connects Casablanca, Rabat, Marrakech and Agadir. Renting a car at Casablanca Airport gives the most flexibility.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Why is Morocco hosting the World Cup with Spain and Portugal?', answer: 'FIFA confirmed the joint Morocco-Portugal-Spain bid ("Yalla Vamos 2030") in December 2024 — the first World Cup spanning two continents (Africa and Europe), marking the centenary of the first 1930 World Cup.' },
    { question: 'How much is Morocco spending on World Cup infrastructure?', answer: 'An estimated $5 billion+, covering the new Grand Stade Hassan II, airport expansions in all 6 host cities, motorway connections, a high-speed rail extension to Marrakech, and nationwide 5G coverage.' },
    { question: 'Did Morocco host AFCON before the World Cup?', answer: 'Yes — Morocco hosted AFCON 2025 (December 2025 – January 2026) across the same 6 cities that will host World Cup 2030 matches, serving as a test run for the stadiums and transport upgrades.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'agadir', 'rabat', 'tangier'],
  relatedPosts: ['best-car-to-rent-in-casablanca-morocco', 'morocco-itinerary-2-weeks-first-time', 'driving-in-morocco-tips-for-tourists'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Coupe du Monde 2030 Maroc — Villes Hôtes & Stades',
  metaDescription: 'Tout savoir sur la Coupe du Monde FIFA 2030 au Maroc : 6 villes hôtes (Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir), stades, dates, transport et conseils voyage.',
  title: 'Guide Voyage Coupe du Monde 2030 Maroc : Villes Hôtes, Stades & Comment Planifier',
  description: 'Le Maroc co-organise la Coupe du Monde FIFA 2030 avec l\'Espagne et le Portugal. Ce guide couvre les 6 villes hôtes marocaines, les stades, les liaisons transport et comment commencer à planifier votre voyage dès maintenant.',
  keyword: 'guide voyage coupe du monde 2030 maroc',
  coverImage: COVER,
  coverAlt: 'Stade de football au Maroc préparé pour la Coupe du Monde FIFA 2030',
  publishedISO: '2026-06-12',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'En décembre 2024, la FIFA a confirmé que le Maroc co-organiserait la Coupe du Monde 2030 avec l\'Espagne et le Portugal — la première Coupe du Monde répartie sur deux continents et trois pays, et la première jamais organisée en Afrique du Nord. Pour le Maroc, cela couronne un parcours qui a débuté avec une candidature ratée en 1994 et inclut la mémorable demi-finale de 2022 au Qatar. Pour les voyageurs, c\'est une opportunité unique de combiner football de classe mondiale avec l\'une des destinations les plus passionnantes au monde — et les infrastructures construites aujourd\'hui rendront les déplacements au Maroc plus faciles que jamais.',
  sections: [
    {
      heading: 'Coupe du Monde Maroc 2030 — Les bases',
      paragraphs: [
        'La Coupe du Monde 2030 se tiendra conjointement au Maroc, en Espagne et au Portugal — 20 stades dans 17 villes, le Maroc accueillant 6 stades dans 6 villes. En hommage au centenaire de la Coupe du Monde (la première édition s\'est jouée en Uruguay en 1930), trois matchs d\'ouverture spéciaux se tiendront également en Uruguay, Argentine et Paraguay avant le début du tournoi principal. Le tournoi devrait se dérouler de juin à juillet 2030, les dates exactes restant à confirmer par la FIFA.',
      ],
      table: {
        caption: 'Coupe du Monde Maroc 2030 — infos rapides',
        headers: ['Détail', 'Information'],
        rows: [
          ['Pays hôtes', 'Maroc, Espagne, Portugal (co-organisation)'],
          ['Dates du tournoi', 'Juin – Juillet 2030 (dates exactes à confirmer)'],
          ['Total des stades', '20 stades dans 17 villes (Maroc, Espagne, Portugal)'],
          ['Villes hôtes au Maroc', '6 : Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir'],
          ['Investissement infrastructure Maroc estimé', '5 milliards $+'],
          ['Matchs attendus au Maroc', '15–20 (estimation, répartition officielle à venir)'],
        ],
      },
      callout: {
        label: '🇲🇦 Pourquoi c\'est important',
        body: 'Le Maroc investit plus de 5 milliards $ dans les stades, l\'extension des aéroports des 6 villes hôtes, de nouvelles autoroutes, l\'extension du train à grande vitesse et la couverture 5G nationale — en plus des améliorations déjà réalisées pour la CAN 2025. D\'ici 2030, se déplacer au Maroc sera nettement plus rapide qu\'aujourd\'hui. Visiter le pays dans les années précédant le tournoi offre toujours l\'expérience marocaine authentique, avec de nouvelles infrastructures en prime.',
      },
    },
    {
      heading: 'Les 6 villes hôtes marocaines',
      paragraphs: [
        'Les six villes hôtes marocaines de la Coupe du Monde étaient aussi les villes hôtes de la CAN 2025 (déc. 2025–janv. 2026), donc la plupart des travaux de rénovation des stades sont déjà terminés et testés. Le joyau est le nouveau Grand Stade Hassan II près de Casablanca, prévu comme le plus grand stade du monde avec 115 000 places — un candidat sérieux pour accueillir la finale.',
      ],
      table: {
        caption: 'Coupe du Monde Maroc 2030 — villes hôtes et stades',
        headers: ['Ville', 'Stade', 'Capacité prévue', 'Points forts pour voyageurs'],
        rows: [
          ['Casablanca / Benslimane', 'Grand Stade Hassan II (nouveau)', '115 000', 'Plus grand stade du monde — probable site de finale/demi-finale'],
          ['Rabat', 'Complexe Prince Moulay Abdellah', '69 500', 'Hôte de la finale CAN 2025, ville capitale'],
          ['Marrakech', 'Stade de Marrakech', '45 000 (extension)', 'Médina, vues sur l\'Atlas, ville touristique la plus populaire'],
          ['Fès', 'Stade de Fès', '45 000 → 50 000', 'Multi-usage (football + athlétisme), plus ancienne médina'],
          ['Tanger', 'Stade Ibn Battouta', '65 000 (rénové)', 'Porte d\'entrée vers l\'Espagne, liaisons ferry'],
          ['Agadir', 'Stade Adrar', '70 000 (extension)', 'Ville balnéaire atlantique, golf'],
        ],
      },
    },
    {
      heading: 'Transport : le corridor Tanger–Casablanca–Marrakech–Agadir',
      paragraphs: [
        'Les transports comptent autant que les stades. Les plans 2030 du Maroc incluent l\'extension de la ligne TGV (actuellement Tanger–Casablanca, le train le plus rapide d\'Afrique) vers le sud jusqu\'à Marrakech, plus l\'extension des aéroports des 6 villes hôtes et de nouvelles liaisons autoroutières.',
        'Cela signifie que le corridor Tanger–Casablanca–Marrakech–Agadir — couvrant déjà la plupart des destinations touristiques clés du Maroc — deviendra l\'un des corridors de transport les plus modernes d\'Afrique d\'ici 2030. Pour les voyageurs, cela se traduit par des déplacements plus rapides et plus faciles entre les villes hôtes, avant et pendant le tournoi.',
      ],
      table: {
        caption: 'Temps de trajet actuels entre les villes hôtes (2026)',
        headers: ['Trajet', 'Train (actuel)', 'Voiture (actuel)', 'Perspective 2030'],
        rows: [
          ['Tanger – Casablanca', '2h10 (TGV)', '4–5h', 'TGV déjà opérationnel'],
          ['Casablanca – Rabat', '0h50 (train)', '1h', 'Stable, bien connecté'],
          ['Casablanca – Marrakech', '2h45 (train) / ~2h30 (A7)', '2h30–3h', 'Extension TGV prévue vers Marrakech'],
          ['Marrakech – Agadir', '~3h (train)', '2h30–3h (A7)', 'Autoroute A7 déjà opérationnelle'],
          ['Casablanca – Fès', '3h30 (train)', '3h30 (péage)', 'Liaison ferroviaire stable'],
        ],
      },
    },
    {
      heading: 'Pourquoi visiter le Maroc avant 2030',
      paragraphs: [
        'Visiter le Maroc dans les années précédant la Coupe du Monde offre deux avantages : l\'expérience authentique et moins fréquentée qui changera inévitablement avec l\'arrivée de millions de fans, et la chance de profiter d\'infrastructures récemment achevées (stades rénovés, hôtels de l\'ère CAN, aéroports agrandis) sans la foule et les prix de 2030.',
        'La CAN 2025 (décembre 2025 – janvier 2026) a déjà testé la plupart des améliorations de stades et de transport en conditions réelles — les systèmes que les voyageurs utiliseront sont donc largement éprouvés. La capacité hôtelière s\'étend dans les 6 villes hôtes avant 2030, ce qui signifie aussi plus de choix d\'hébergement et des prix compétitifs pour les voyageurs actuels.',
      ],
      callout: {
        label: '💡 Conseil de planification',
        body: 'Chacune des 6 villes hôtes marocaines de la Coupe du Monde est aussi une excellente destination en soi dès aujourd\'hui. Marrakech et Fès pour la culture et les médinas, Casablanca pour le Maroc moderne et la vie nocturne, Agadir pour les plages, Tanger comme porte vers l\'Espagne, et Rabat pour l\'élégante capitale. Un voyage de 2 semaines couvrant 3–4 de ces villes en voiture est tout à fait réalisable sur le réseau autoroutier actuel du Maroc.',
      },
    },
    {
      heading: 'Planifier un voyage multi-villes au Maroc en voiture',
      paragraphs: [
        'Pour les voyageurs souhaitant voir plusieurs villes hôtes de la Coupe du Monde, louer une voiture à l\'aéroport de Casablanca (CMN) est l\'option la plus flexible — le réseau autoroutier marocain relie déjà Casablanca à Rabat, Marrakech et Fès, et (via Marrakech) à Agadir, Tanger étant accessible via l\'A1/A4.',
        'Une boucle réaliste de 10–14 jours : Casablanca → Rabat (1h) → Fès (3h30 via péage) → Marrakech (via Casablanca ou direct, ~4-5h) → Agadir (2h30 sur A7). Cela couvre 5 des 6 villes hôtes marocaines avec des journées de conduite confortables.',
      ],
      table: {
        caption: 'Exemple de road trip villes hôtes Maroc — temps de trajet',
        headers: ['Étape', 'Temps de conduite', 'Distance'],
        rows: [
          ['Casablanca → Rabat', '~1h', '90 km'],
          ['Rabat → Fès', '~2h45', '200 km'],
          ['Fès → Marrakech', '~5h (via Casablanca) ou route directe', '~480 km'],
          ['Marrakech → Agadir', '~2h30', '~250 km'],
          ['Agadir → Casablanca (retour)', '~5h', '~460 km'],
        ],
      },
    },
    {
      heading: 'Louer une voiture pour votre voyage Coupe du Monde',
      paragraphs: [
        'Que vous visitiez avant 2030 pour explorer les villes hôtes, ou que vous planifiez à l\'avance pour le tournoi lui-même, une voiture de location vous donne la liberté de vous déplacer entre les villes selon votre propre rythme — particulièrement précieux pendant un grand tournoi où trains et vols seront très demandés.',
        'MoroccoForYou Cars opère depuis l\'aéroport de Casablanca (CMN), principale porte d\'entrée internationale du Maroc et ville accueillant le plus grand stade prévu. Voitures économiques dès 250 MAD/jour (23€), kilométrage illimité et accueil gratuit à l\'aéroport 24h/24 — réservez sur WhatsApp pour une confirmation instantanée.',
      ],
      callout: {
        label: '💡 Conseil MoroccoForYou',
        body: 'L\'aéroport de Casablanca (CMN) est la base naturelle pour un voyage multi-villes au Maroc — il a les meilleures connexions de vols internationaux et se trouve à distance de route de Rabat, Marrakech et (via l\'A7) Agadir. Récupérez votre voiture à CMN dès 250 MAD/jour et planifiez votre itinéraire vers autant de villes hôtes que votre emploi du temps le permet.',
      },
    },
  ],
  faqs: [
    {
      question: 'Quelles villes du Maroc accueilleront la Coupe du Monde 2030 ?',
      answer: 'Six villes : Casablanca (Grand Stade Hassan II, près de Benslimane), Rabat, Marrakech, Fès, Tanger et Agadir. Ce sont aussi les villes hôtes de la CAN 2025.',
    },
    {
      question: 'Quand a lieu la Coupe du Monde 2030 au Maroc ?',
      answer: 'Le tournoi devrait se dérouler de juin à juillet 2030, co-organisé par le Maroc, l\'Espagne et le Portugal. Les dates exactes seront confirmées par la FIFA plus près de l\'événement.',
    },
    {
      question: 'La finale de la Coupe du Monde se jouera-t-elle au Maroc ?',
      answer: 'Ce n\'est pas officiellement confirmé, mais le nouveau Grand Stade Hassan II près de Casablanca — prévu comme le plus grand stade du monde avec 115 000 places — est considéré comme un candidat sérieux pour accueillir la finale ou une demi-finale.',
    },
    {
      question: 'Est-ce un bon moment pour visiter le Maroc avant la Coupe du Monde 2030 ?',
      answer: 'Oui — les améliorations de stades et de transport liées à la CAN 2025 sont déjà terminées et testées, la capacité hôtelière s\'étend, et le pays est moins fréquenté qu\'il ne le sera pendant le tournoi. C\'est une excellente fenêtre pour découvrir les villes hôtes de manière authentique.',
    },
    {
      question: 'Comment voyager entre les villes hôtes de la Coupe du Monde au Maroc ?',
      answer: 'En train (TGV à grande vitesse entre Tanger et Casablanca, trains régionaux ailleurs) ou en voiture via le réseau autoroutier marocain, qui relie déjà Casablanca, Rabat, Marrakech et Agadir. Louer une voiture à l\'aéroport de Casablanca offre le plus de flexibilité.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Pourquoi le Maroc co-organise-t-il la Coupe du Monde avec l\'Espagne et le Portugal ?', answer: 'La FIFA a confirmé la candidature conjointe Maroc-Portugal-Espagne ("Yalla Vamos 2030") en décembre 2024 — la première Coupe du Monde répartie sur deux continents (Afrique et Europe), marquant le centenaire de la première Coupe du Monde de 1930.' },
    { question: 'Combien le Maroc dépense-t-il pour les infrastructures de la Coupe du Monde ?', answer: 'Environ 5 milliards $+, couvrant le nouveau Grand Stade Hassan II, l\'extension des aéroports des 6 villes hôtes, des liaisons autoroutières, une extension de ligne TGV vers Marrakech et une couverture 5G nationale.' },
    { question: 'Le Maroc a-t-il accueilli la CAN avant la Coupe du Monde ?', answer: 'Oui — le Maroc a accueilli la CAN 2025 (décembre 2025 – janvier 2026) dans les 6 mêmes villes qui accueilleront les matchs de la Coupe du Monde 2030, servant de test pour les stades et les améliorations de transport.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'agadir', 'rabat', 'tangier'],
  relatedPosts: ['meilleure-voiture-louer-casablanca-maroc', 'itineraire-maroc-2-semaines-premier-voyage', 'conduire-au-maroc-conseils-touristes'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل سفر كأس العالم 2030 المغرب — المدن المستضيفة والملاعب',
  metaDescription: 'كل ما تحتاج معرفته عن كأس العالم FIFA 2030 في المغرب: 6 مدن مستضيفة (الدار البيضاء، الرباط، مراكش، فاس، طنجة، أكادير)، الملاعب، التواريخ، النقل ونصائح السفر.',
  title: 'دليل سفر كأس العالم 2030 المغرب: المدن المستضيفة والملاعب وكيفية التخطيط',
  description: 'يستضيف المغرب كأس العالم FIFA 2030 مع إسبانيا والبرتغال. يغطي هذا الدليل 6 مدن مغربية مستضيفة وملاعبها وروابط النقل وكيفية البدء في تخطيط رحلتك الآن.',
  keyword: 'دليل سفر كأس العالم 2030 المغرب',
  coverImage: COVER,
  coverAlt: 'ملعب كرة قدم في المغرب يُجهَّز لكأس العالم FIFA 2030',
  publishedISO: '2026-06-12',
  author: 'فريق MoroccoForYou',
  readingMinutes: 9,
  intro: 'في ديسمبر 2024، أكدت الفيفا أن المغرب سيستضيف كأس العالم 2030 مشاركة مع إسبانيا والبرتغال — أول كأس عالم يمتد عبر قارتين وثلاث دول، وأول استضافة في شمال أفريقيا. بالنسبة للمغرب، هذا يتوّج مساراً بدأ بترشح فاشل عام 1994 ويشمل وصولاً تاريخياً لنصف نهائي 2022 في قطر. بالنسبة للمسافرين، إنها فرصة لمرة واحدة في الجيل لدمج كرة القدم العالمية مع واحدة من أكثر الوجهات إثارة في العالم — والبنية التحتية التي يتم بناؤها الآن ستجعل التنقل في المغرب أسهل من أي وقت.',
  sections: [
    {
      heading: 'كأس العالم المغرب 2030 — الأساسيات',
      paragraphs: [
        'ستُقام كأس العالم 2030 مشتركة بين المغرب وإسبانيا والبرتغال — 20 ملعباً في 17 مدينة، يستضيف المغرب 6 ملاعب في 6 مدن. وكتحية للذكرى المئوية لكأس العالم (أُقيمت النسخة الأولى في أوروغواي عام 1930)، ستُقام أيضاً ثلاث مباريات افتتاحية خاصة في أوروغواي والأرجنتين وباراغواي قبل بدء البطولة الرئيسية. يُتوقع أن تُقام البطولة من يونيو إلى يوليو 2030، مع تأكيد التواريخ الدقيقة من الفيفا.',
      ],
      table: {
        caption: 'كأس العالم المغرب 2030 — معلومات سريعة',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['الدول المستضيفة', 'المغرب وإسبانيا والبرتغال (استضافة مشتركة)'],
          ['تواريخ البطولة', 'يونيو – يوليو 2030 (التواريخ الدقيقة قيد التأكيد)'],
          ['إجمالي الملاعب', '20 ملعباً في 17 مدينة (المغرب، إسبانيا، البرتغال)'],
          ['المدن المستضيفة في المغرب', '6: الدار البيضاء، الرباط، مراكش، فاس، طنجة، أكادير'],
          ['الاستثمار المقدر في البنية التحتية بالمغرب', '5 مليار $+'],
          ['المباريات المتوقعة في المغرب', '15–20 (تقدير، التوزيع الرسمي قيد التحديد)'],
        ],
      },
      callout: {
        label: '🇲🇦 لماذا هذا مهم',
        body: 'يستثمر المغرب أكثر من 5 مليار دولار في الملاعب وتوسيع المطارات في 6 مدن مستضيفة وطرق سريعة جديدة وامتداد القطار فائق السرعة وتغطية 5G على مستوى البلاد — بالإضافة إلى التحسينات المنجزة بالفعل لكان 2025. بحلول 2030، سيكون التنقل في المغرب أسرع بكثير من اليوم. زيارة البلاد في السنوات السابقة للبطولة لا تزال تمنحك تجربة مغربية أصيلة، مع بنية تحتية جديدة كميزة إضافية.',
      },
    },
    {
      heading: 'المدن المغربية المستضيفة الست',
      paragraphs: [
        'كانت المدن المغربية الست المستضيفة لكأس العالم هي أيضاً مدن استضافة كان 2025 (ديسمبر 2025–يناير 2026)، لذا معظم أعمال تجديد الملاعب مكتملة ومُختبرة بالفعل. الجوهرة هي الملعب الجديد الكبير الحسن الثاني قرب الدار البيضاء، المخطط ليكون أكبر ملعب في العالم بسعة 115,000 مقعد — مرشح قوي لاستضافة النهائي.',
      ],
      table: {
        caption: 'كأس العالم المغرب 2030 — المدن المستضيفة والملاعب',
        headers: ['المدينة', 'الملعب', 'السعة المخططة', 'أبرز ما يهم المسافرين'],
        rows: [
          ['الدار البيضاء / بن سليمان', 'الملعب الكبير الحسن الثاني (جديد)', '115,000', 'أكبر ملعب في العالم — مرشح قوي للنهائي/نصف النهائي'],
          ['الرباط', 'مجمع الأمير مولاي عبدالله', '69,500', 'استضاف نهائي كان 2025، المدينة العاصمة'],
          ['مراكش', 'ملعب مراكش', '45,000 (توسيع)', 'المدينة العتيقة، إطلالات الأطلس، أكثر مدينة سياحية شعبية'],
          ['فاس', 'ملعب فاس', '45,000 → 50,000', 'متعدد الاستخدامات (كرة قدم + ألعاب قوى)، أقدم مدينة عتيقة'],
          ['طنجة', 'ملعب ابن بطوطة', '65,000 (مُجدَّد)', 'بوابة إسبانيا، روابط العبّارات'],
          ['أكادير', 'ملعب أدرار', '70,000 (توسيع)', 'مدينة منتجع شاطئية أطلسية، غولف'],
        ],
      },
    },
    {
      heading: 'النقل: ممر طنجة–الدار البيضاء–مراكش–أكادير',
      paragraphs: [
        'قصة النقل مهمة بقدر الملاعب. تشمل خطط 2030 المغربية امتداد خط القطار فائق السرعة (حالياً طنجة–الدار البيضاء، أسرع قطار في أفريقيا) جنوباً إلى مراكش، بالإضافة إلى توسيع مطارات المدن المستضيفة الست وروابط طرق سريعة جديدة.',
        'هذا يعني أن ممر طنجة–الدار البيضاء–مراكش–أكادير — الذي يغطي بالفعل معظم الوجهات السياحية الرئيسية بالمغرب — سيصبح أحد أحدث ممرات النقل في أفريقيا بحلول 2030. للمسافرين، يعني هذا تنقلاً أسرع وأسهل بين المدن المستضيفة قبل وأثناء البطولة.',
      ],
      table: {
        caption: 'أوقات السفر الحالية بين مدن المغرب المستضيفة (2026)',
        headers: ['المسار', 'القطار (حالياً)', 'السيارة (حالياً)', 'نظرة 2030'],
        rows: [
          ['طنجة – الدار البيضاء', '2:10 (قطار سريع)', '4–5 ساعات', 'القطار السريع يعمل بالفعل'],
          ['الدار البيضاء – الرباط', '0:50 (قطار)', 'ساعة واحدة', 'مستقر وجيد الربط'],
          ['الدار البيضاء – مراكش', '2:45 (قطار) / ~2:30 (A7)', '2:30–3 ساعات', 'امتداد القطار السريع مخطط لمراكش'],
          ['مراكش – أكادير', '~3 ساعات (قطار)', '2:30–3 ساعات (A7)', 'الطريق السريع A7 يعمل بالفعل'],
          ['الدار البيضاء – فاس', '3:30 (قطار)', '3:30 (طريق رسوم)', 'رابط سكة حديد مستقر'],
        ],
      },
    },
    {
      heading: 'لماذا تزور المغرب قبل 2030',
      paragraphs: [
        'زيارة المغرب في السنوات السابقة لكأس العالم تمنحك ميزتين: التجربة الأصيلة الأقل ازدحاماً التي ستتغير حتماً مع وصول ملايين المشجعين، وفرصة الاستفادة من البنية التحتية المكتملة حديثاً (ملاعب مجددة، فنادق إضافية من عصر كان، مطارات موسعة) دون ازدحام وأسعار 2030.',
        'كان 2025 (ديسمبر 2025 – يناير 2026) اختبر بالفعل معظم تحسينات الملاعب والنقل في ظروف حقيقية — لذا الأنظمة التي سيستخدمها المسافرون مُجربة إلى حد كبير. القدرة الفندقية تتوسع في جميع المدن المستضيفة الست قبل 2030، وهذا يعني أيضاً مزيد من خيارات الإقامة وأسعار تنافسية للمسافرين الآن.',
      ],
      callout: {
        label: '💡 نصيحة تخطيط',
        body: 'كل واحدة من المدن المغربية الست المستضيفة لكأس العالم هي أيضاً وجهة رائعة بمفردها اليوم. مراكش وفاس للثقافة والمدن العتيقة، الدار البيضاء للمغرب الحديث والحياة الليلية، أكادير للشواطئ، طنجة كبوابة إسبانيا، والرباط للعاصمة الأنيقة. رحلة لأسبوعين تشمل 3–4 من هذه المدن بالسيارة قابلة للتنفيذ تماماً على شبكة الطرق السريعة الحالية للمغرب.',
      },
    },
    {
      heading: 'تخطيط رحلة متعددة المدن في المغرب بالسيارة',
      paragraphs: [
        'للمسافرين الراغبين في رؤية عدة مدن مستضيفة لكأس العالم، استئجار سيارة من مطار الدار البيضاء (CMN) هو الخيار الأكثر مرونة — شبكة الطرق السريعة المغربية تربط بالفعل الدار البيضاء بالرباط ومراكش وفاس، و(عبر مراكش) أكادير، مع إمكانية الوصول إلى طنجة عبر A1/A4.',
        'حلقة واقعية لـ10–14 يوماً: الدار البيضاء → الرباط (ساعة) → فاس (3:30 عبر طريق الرسوم) → مراكش (عبر الدار البيضاء أو مباشر، ~4-5 ساعات) → أكادير (2:30 على A7). يغطي هذا 5 من 6 مدن مستضيفة مغربية بأيام قيادة مريحة.',
      ],
      table: {
        caption: 'نموذج رحلة برية للمدن المستضيفة المغربية — أوقات القيادة',
        headers: ['المرحلة', 'وقت القيادة', 'المسافة'],
        rows: [
          ['الدار البيضاء → الرباط', '~ساعة', '90 كم'],
          ['الرباط → فاس', '~2:45', '200 كم'],
          ['فاس → مراكش', '~5 ساعات (عبر الدار البيضاء) أو طريق مباشر', '~480 كم'],
          ['مراكش → أكادير', '~2:30', '~250 كم'],
          ['أكادير → الدار البيضاء (عودة)', '~5 ساعات', '~460 كم'],
        ],
      },
    },
    {
      heading: 'استئجار سيارة لرحلة كأس العالم',
      paragraphs: [
        'سواء كنت تزور قبل 2030 لاستكشاف المدن المستضيفة، أو تخطط مسبقاً للبطولة نفسها، فإن سيارة الإيجار تمنحك حرية التنقل بين المدن وفق جدولك الخاص — قيّمة بشكل خاص خلال بطولة كبرى عندما يكون الطلب على القطارات والطيران مرتفعاً.',
        'تعمل MoroccoForYou Cars من مطار الدار البيضاء (CMN)، البوابة الدولية الرئيسية للمغرب والمدينة المستضيفة لأكبر ملعب مخطط. سيارات اقتصادية من 250 درهم/يوم (23€)، مع كيلومترات غير محدودة واستقبال مجاني في المطار 24/7 — احجز عبر واتساب للتأكيد الفوري.',
      ],
      callout: {
        label: '💡 نصيحة MoroccoForYou',
        body: 'مطار الدار البيضاء (CMN) هو القاعدة الطبيعية لرحلة متعددة المدن في المغرب — لديه أفضل اتصالات الطيران الدولية ويقع على مسافة قيادة من الرباط ومراكش و(عبر A7) أكادير. استلم سيارتك من CMN من 250 درهم/يوم وخطط مسارك لأكبر عدد ممكن من المدن المستضيفة وفق جدولك.',
      },
    },
  ],
  faqs: [
    {
      question: 'أي مدن في المغرب ستستضيف كأس العالم 2030؟',
      answer: 'ست مدن: الدار البيضاء (الملعب الكبير الحسن الثاني، قرب بن سليمان)، الرباط، مراكش، فاس، طنجة، وأكادير. هذه أيضاً المدن المستضيفة لكان 2025.',
    },
    {
      question: 'متى تُقام كأس العالم 2030 في المغرب؟',
      answer: 'يُتوقع أن تُقام البطولة من يونيو إلى يوليو 2030، باستضافة مشتركة من المغرب وإسبانيا والبرتغال. ستؤكد الفيفا التواريخ الدقيقة قرب الموعد.',
    },
    {
      question: 'هل ستُلعب نهائي كأس العالم في المغرب؟',
      answer: 'لم يُؤكَّد رسمياً، لكن الملعب الكبير الحسن الثاني الجديد قرب الدار البيضاء — المخطط ليكون أكبر ملعب في العالم بسعة 115,000 — يُعتبر مرشحاً قوياً لاستضافة النهائي أو نصف النهائي.',
    },
    {
      question: 'هل هذا وقت جيد لزيارة المغرب قبل كأس العالم 2030؟',
      answer: 'نعم — تحسينات الملاعب والنقل من كان 2025 مكتملة ومُختبرة بالفعل، القدرة الفندقية تتوسع، والبلد أقل ازدحاماً مما سيكون أثناء البطولة. إنها نافذة رائعة لتجربة المدن المستضيفة بشكل أصيل.',
    },
    {
      question: 'كيف أتنقل بين المدن المغربية المستضيفة لكأس العالم؟',
      answer: 'بالقطار (قطار فائق السرعة بين طنجة والدار البيضاء، قطارات إقليمية في أماكن أخرى) أو بالسيارة عبر شبكة الطرق السريعة المغربية، التي تربط بالفعل الدار البيضاء والرباط ومراكش وأكادير. استئجار سيارة من مطار الدار البيضاء يوفر أكبر مرونة.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'لماذا يستضيف المغرب كأس العالم مع إسبانيا والبرتغال؟', answer: 'أكدت الفيفا الترشح المشترك المغرب-البرتغال-إسبانيا ("يالا فاموس 2030") في ديسمبر 2024 — أول كأس عالم يمتد عبر قارتين (أفريقيا وأوروبا)، احتفالاً بالذكرى المئوية لأول كأس عالم 1930.' },
    { question: 'كم يُنفق المغرب على بنية تحتية كأس العالم؟', answer: 'حوالي 5 مليار دولار+، تشمل الملعب الكبير الحسن الثاني الجديد وتوسيع مطارات المدن المستضيفة الست وروابط طرق سريعة وامتداد خط قطار فائق السرعة إلى مراكش وتغطية 5G على مستوى البلاد.' },
    { question: 'هل استضاف المغرب كان قبل كأس العالم؟', answer: 'نعم — استضاف المغرب كان 2025 (ديسمبر 2025 – يناير 2026) في نفس 6 مدن ستستضيف مباريات كأس العالم 2030، كتجربة للملاعب وتحسينات النقل.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'agadir', 'rabat', 'tangier'],
  relatedPosts: ['afdal-sayyara-listajar-fi-dar-al-bayda', 'khattat-rihlat-al-maghrib-usbuan', 'rihlat-marrakesh-fas-bis-sayyara'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);