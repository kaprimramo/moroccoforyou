import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'marrakech-to-chefchaouen-by-car';
const SLUG_FR = 'marrakech-a-chefchaouen-en-voiture';
const SLUG_AR = 'min-marakish-ila-shafshawan-bis-sayyara';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(5022341);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Marrakech to Chefchaouen by Car 2026 — Route, Distance & Real Driving Times',
  metaDescription: 'Complete guide to driving from Marrakech to Chefchaouen: 560-680 km depending on route, 7-9 hours, best stops (Casablanca, Rabat, or the scenic Ifrane route), toll costs, and why splitting the drive over 2 days beats a single long day.',
  title: 'Marrakech to Chefchaouen by Car 2026: The Complete Route, Distance & Timing Guide',
  description: 'Quick answer: Marrakech to Chefchaouen is 560-680 km depending on the route chosen, taking 7-9 hours of pure driving — too far for a comfortable single day. This guide compares the fast coastal-motorway route via Casablanca and Rabat against the scenic inland route via Ifrane, with real 2026 tolls, fuel costs, and the best places to break the journey, written by a Casablanca-based team that drives this exact corridor regularly.',
  keyword: 'marrakech to chefchaouen by car',
  coverImage: COVER,
  coverAlt: 'Marrakech to Chefchaouen by car 2026 — winding mountain road through the Middle Atlas cedar forest near Ifrane',
  publishedISO: '2026-08-14',
  updatedISO: '2026-08-14',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 14,
  intro: 'Quick answer: driving from Marrakech to Chefchaouen covers 560-680 km depending on your chosen route, with 7-9 hours of pure driving time — genuinely too far to attempt comfortably in a single day, despite what some quick trip-planning tools suggest. Marrakech and Chefchaouen sit at opposite ends of Morocco: one at the foot of the High Atlas in the south, the other tucked into the Rif Mountains near the Mediterranean in the far north. This guide compares the two realistic route options, gives honest 2026 driving times and toll costs, and explains exactly why our team recommends splitting this specific drive over two days rather than one.',
  sections: [
    {
      heading: 'How Far Is It, Really? The Distance Confusion Explained',
      paragraphs: [
        'Different route calculators quote different numbers for this journey — anywhere from 560 km to 680 km — and the reason is that there genuinely are multiple viable routes with different distances, not measurement error. The shortest road distance (via the direct A7/A1 motorway corridor through Casablanca and Rabat) runs approximately 560-580 km. A more scenic inland routing that passes through the Middle Atlas can add 50-100 km depending on exact roads chosen.',
      ],
      table: {
        caption: 'Marrakech to Chefchaouen — distance by route 2026',
        headers: ['Route', 'Distance', 'Pure driving time', 'Character'],
        rows: [
          ['Motorway via Casablanca & Rabat (A7/A1)', '~560-580 km', '7-7.5 hours', 'Fastest, most predictable — modern toll motorway the whole way'],
          ['Inland/scenic via Middle Atlas', '~600-680 km', '8-9 hours', 'Slower but more varied landscape, passes near Ifrane and Fes'],
        ],
      },
      callout: {
        label: '💡 Direct Answer',
        body: 'For nearly all travelers, the motorway route via Casablanca and Rabat is the right choice — it is faster, better maintained, has more services (fuel, food, rest stops), and the toll costs are predictable. Only choose the inland route if you specifically want to break the journey with a stop in Fes or the Middle Atlas cedar forests.',
      },
    },
    {
      heading: 'The Fast Route — Marrakech, Casablanca, Rabat, Tangier, Chefchaouen',
      paragraphs: [
        'This is the route we recommend for nearly every client making this specific drive. It runs entirely on Morocco\'s modern A7 and A1 toll motorways, is well signposted, and passes directly through or near three of Morocco\'s largest cities — meaning fuel stations, rest stops, and food options are frequent and reliable.',
      ],
      table: {
        caption: 'Marrakech to Chefchaouen — fast motorway route 2026',
        headers: ['Leg', 'Distance', 'Time', 'Notes'],
        rows: [
          ['Marrakech → Casablanca', '~240 km', '2.5-3 hours', 'A7 motorway, well maintained'],
          ['Casablanca → Rabat', '~95 km', '1-1.25 hours', 'A1 motorway, light traffic outside rush hour'],
          ['Rabat → Tangier area turnoff', '~250 km', '2.5-3 hours', 'A1 motorway continues north to the coast'],
          ['Turnoff → Chefchaouen', '~65 km', '1-1.25 hours', 'N2 road climbing into the Rif Mountains'],
          ['Total', '~560-580 km', '7-7.5 hours pure driving', 'Add 1-2 hours for fuel/food/rest stops'],
        ],
      },
      callout: {
        label: '💰 Toll Costs',
        body: 'Expect approximately MAD 200-250 (€18-23) in total tolls for the full Marrakech-Chefchaouen motorway route, payable by cash or card at toll booths. Fuel for the full round trip in an economy car runs roughly MAD 700-900 (€65-83) at 2026 prices of ~14-15 MAD/litre.',
      },
    },
    {
      heading: 'The Scenic Route — Via the Middle Atlas',
      paragraphs: [
        'If you have more time and want mountain scenery rather than pure motorway driving, the inland route through the Middle Atlas offers a genuinely different character — cedar forests, cooler air, and a chance to pass near Ifrane (nicknamed "the Switzerland of Morocco" for its chalet-style architecture and winter snow) or continue on to Fes before heading north.',
        'This route typically adds 1-2 hours and 50-100 km compared to the pure motorway option, and the roads through mountain sections require more careful, slower driving — not dangerous, but genuinely different from motorway cruising.',
      ],
      callout: {
        label: '🌲 When the Scenic Route Makes Sense',
        body: 'Choose this route if you\'re combining the drive with a stop in Fes (effectively turning one long drive into a proper multi-city road trip), or if mountain and forest scenery matters more to you than arrival time. Skip it if you\'re short on time or simply need to get from A to B efficiently — the motorway route wins on every practical metric.',
      },
    },
    {
      heading: 'Why You Should Split This Drive Over Two Days',
      paragraphs: [
        'A 7-9 hour drive is technically doable in a single day, but it is not an enjoyable road trip experience — and after a full day behind the wheel, arriving in Chefchaouen\'s narrow, hilly medina streets after dark is genuinely more stressful than it needs to be. Our consistent recommendation, based on years of routing clients along this corridor, is to break the journey overnight.',
      ],
      table: {
        caption: 'Recommended 2-day Marrakech to Chefchaouen split',
        headers: ['Day', 'Route', 'Distance', 'Why stop here'],
        rows: [
          ['Day 1', 'Marrakech → Rabat (overnight)', '~335 km, 3.5-4 hours', 'Rabat is a genuinely worthwhile stop in its own right — the Kasbah des Oudayas, Hassan Tower, and Chellah Necropolis reward a night, not just a drive-through'],
          ['Day 2', 'Rabat → Chefchaouen', '~225-280 km, 2.5-3.5 hours', 'A short, relaxed final leg — arrive in daylight, find parking near the medina easily, settle in before exploring the blue streets'],
        ],
      },
      callout: {
        label: '🏨 Why Rabat Specifically',
        body: 'Rabat sits almost exactly at the midpoint of this route and is one of Morocco\'s most underrated cities — genuinely worth an overnight rather than just a highway pass-through. For the full guide to what to see there, see our <a href="/blog/rabat-travel-guide">Rabat Travel Guide</a>.',
      },
    },
    {
      heading: 'Alternative: Flying Part of the Way',
      paragraphs: [
        'If driving the full distance doesn\'t appeal, a hybrid option exists: fly from Marrakech (RAK) to Tangier (TNG) — a roughly 50-minute flight, often under €50 one-way on budget carriers — then either rent a car in Tangier for the final 65 km to Chefchaouen, or take a CTM bus (approximately MAD 50, 3 hours).',
      ],
      table: {
        caption: 'Marrakech to Chefchaouen — all options compared 2026',
        headers: ['Method', 'Time', 'Approximate cost', 'Best for'],
        rows: [
          ['Self-drive (motorway route)', '7-7.5 hours (or 2 days split)', 'MAD 700-900 fuel + MAD 200-250 tolls', 'Flexibility, stops along the way, continuing onward by car'],
          ['Fly to Tangier + rental car/taxi', '~50 min flight + 1-1.5 hours drive', '€40-70 flight + car/taxi', 'Time-limited travelers wanting to skip the long drive'],
          ['Fly to Tangier + CTM bus', '~50 min flight + ~3 hours bus', '€40-70 flight + MAD 50 bus', 'Budget travelers without a rental car'],
          ['Train + bus (via Casablanca/Tangier or Rabat)', '9-10 hours total', 'MAD 230-500', 'No car needed, but genuinely the slowest option'],
          ['Direct bus (CTM, via Rabat)', '~9.5-10 hours', 'MAD 230-370', 'Cheapest full journey, but very long'],
        ],
      },
      callout: {
        label: '🚗 Rent Your Car for This Route',
        body: 'For the self-drive option, an economy car is fully sufficient for the entire motorway route — no mountain passes or unpaved sections involved. We arrange rentals from Marrakech or with pickup at Casablanca Airport (CMN) if you\'re starting your trip there instead — economy from MAD 250/day (€23), unlimited mileage. +212 634 276 534',
      },
    },
    {
      heading: 'Practical Driving Tips for This Route',
      paragraphs: [
        'A handful of specifics that make the difference between a smooth drive and an unnecessarily tiring one.',
      ],
      list: [
        'Leave Marrakech by 7-8am if attempting the drive in a single day — this maximizes daylight and avoids arriving in Chefchaouen\'s hilly medina streets after dark.',
        'Toll booths on the A7/A1 accept both cash (MAD) and cards — keep some cash for smaller booths just in case.',
        'Fuel stations are frequent along the entire motorway corridor; you will never need to worry about running low between Marrakech and Rabat, or Rabat and the Tangier turnoff.',
        'Avoid driving into Chefchaouen after dark if possible — the medina\'s narrow, steep streets and limited parking are genuinely easier to navigate in daylight.',
        'An International Driving Permit is required alongside your home licence for foreign visitors renting a car in Morocco.',
        'Most rental cars in Morocco run on diesel — confirm this at pickup before your first fuel stop.',
        'Watch for speed cameras approaching towns along the motorway, particularly around Casablanca and Rabat.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How far is Marrakech from Chefchaouen by car?',
      answer: 'The distance is 560-580 km via the direct motorway route through Casablanca and Rabat, or 600-680 km via the more scenic inland route through the Middle Atlas. Pure driving time is 7-7.5 hours on the motorway route, or 8-9 hours on the scenic route.',
    },
    {
      question: 'Can you drive from Marrakech to Chefchaouen in one day?',
      answer: 'Technically yes — it is a 7-9 hour drive depending on route — but it is not a comfortable single-day experience, and arriving in Chefchaouen\'s hilly medina after a full day of driving, often after dark, adds unnecessary stress. We recommend splitting the journey over two days with an overnight stop in Rabat, which sits almost exactly at the midpoint.',
    },
    {
      question: 'What is the best route from Marrakech to Chefchaouen?',
      answer: 'For most travelers, the motorway route via Casablanca and Rabat (A7 then A1) is best — it\'s faster, better maintained, and has frequent fuel and rest stops. The inland route via the Middle Atlas is worth choosing only if you want to add a stop in Fes or want mountain/forest scenery, accepting a longer, slower drive.',
    },
    {
      question: 'How much do tolls cost from Marrakech to Chefchaouen?',
      answer: 'Expect approximately MAD 200-250 (€18-23) in total tolls for the full motorway route, payable by cash or card at toll booths along the A7 and A1.',
    },
    {
      question: 'Is there a faster way than driving the whole route?',
      answer: 'Yes — flying from Marrakech (RAK) to Tangier (TNG) takes about 50 minutes and often costs under €50 one-way on budget carriers, after which you can rent a car or take a CTM bus for the remaining 65 km to Chefchaouen, cutting total travel time to roughly 2-4 hours instead of 7-9.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is the drive from Marrakech to Chefchaouen safe?', answer: 'Yes — the motorway route is entirely on modern, well-maintained toll roads with clear signage. The main precautions are avoiding night driving where possible, watching for speed cameras near towns, and driving carefully (not dangerously) on any mountain sections if you choose the scenic inland route.' },
    { question: 'Should I stop in Casablanca or Rabat on the way to Chefchaouen?', answer: 'Rabat is the better stop of the two for this specific route — it sits almost exactly at the midpoint and offers genuine sightseeing (the Kasbah des Oudayas, Hassan Tower, Chellah Necropolis) rather than just being a waypoint. Casablanca works if you specifically want to see the Hassan II Mosque, but it adds less naturally to this particular route.' },
    { question: 'Do I need a 4x4 to drive from Marrakech to Chefchaouen?', answer: 'No — both the motorway route and the scenic inland route are entirely on paved roads suitable for a standard economy car. A 4x4 is not necessary for this specific journey, unlike routes toward the Sahara or Atlas mountain passes.' },
  ],
  relatedDestinations: ['marrakech', 'chefchaouen', 'rabat', 'casablanca'],
  relatedPosts: ['marrakech-travel-guide', 'chefchaouen-travel-guide', 'rabat-travel-guide', 'tangier-travel-guide', 'casablanca-travel-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Marrakech à Chefchaouen en Voiture 2026 — Itinéraire, Distance et Temps Réels',
  metaDescription: 'Guide complet pour conduire de Marrakech à Chefchaouen : 560-680 km selon l\'itinéraire, 7-9 heures, meilleurs arrêts (Casablanca, Rabat, ou la route panoramique d\'Ifrane), coûts de péage.',
  title: 'Marrakech à Chefchaouen en Voiture 2026 : Itinéraire Complet, Distance et Timing',
  description: 'Réponse rapide : Marrakech à Chefchaouen fait 560-680 km selon l\'itinéraire choisi, avec 7-9 heures de conduite pure — trop loin pour une journée confortable. Ce guide compare la route rapide autoroutière via Casablanca et Rabat contre la route panoramique intérieure via Ifrane.',
  keyword: 'marrakech à chefchaouen en voiture',
  coverImage: COVER,
  coverAlt: 'Marrakech à Chefchaouen en voiture 2026 — route de montagne sinueuse à travers la forêt de cèdres du Moyen Atlas près d\'Ifrane',
  publishedISO: '2026-08-14',
  updatedISO: '2026-08-14',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 14,
  intro: 'Réponse rapide : conduire de Marrakech à Chefchaouen couvre 560-680 km selon l\'itinéraire choisi, avec 7-9 heures de conduite pure — vraiment trop loin pour tenter confortablement en une seule journée. Marrakech et Chefchaouen se situent aux extrémités opposées du Maroc. Ce guide compare les deux options d\'itinéraire réalistes, donne des temps de conduite et coûts de péage honnêtes 2026.',
  sections: [
    {
      heading: 'Quelle Distance Réellement ? La Confusion Expliquée',
      paragraphs: ['Différents calculateurs d\'itinéraire donnent différents chiffres — entre 560 km et 680 km — car il existe véritablement plusieurs itinéraires viables avec des distances différentes.'],
      table: {
        caption: 'Marrakech à Chefchaouen — distance par itinéraire 2026',
        headers: ['Itinéraire', 'Distance', 'Temps de conduite pur', 'Caractère'],
        rows: [
          ['Autoroute via Casablanca & Rabat (A7/A1)', '~560-580 km', '7-7,5 heures', 'Le plus rapide, le plus prévisible'],
          ['Intérieur/panoramique via Moyen Atlas', '~600-680 km', '8-9 heures', 'Plus lent mais paysage plus varié, passe près d\'Ifrane et Fès'],
        ],
      },
      callout: {
        label: '💡 Réponse Directe',
        body: 'Pour presque tous les voyageurs, l\'itinéraire autoroutier via Casablanca et Rabat est le bon choix — plus rapide, mieux entretenu, plus de services.',
      },
    },
    {
      heading: 'L\'Itinéraire Rapide — Marrakech, Casablanca, Rabat, Tanger, Chefchaouen',
      paragraphs: ['C\'est l\'itinéraire que nous recommandons pour presque tous les clients effectuant ce trajet spécifique.'],
      table: {
        caption: 'Marrakech à Chefchaouen — itinéraire autoroutier rapide 2026',
        headers: ['Étape', 'Distance', 'Temps', 'Notes'],
        rows: [
          ['Marrakech → Casablanca', '~240 km', '2,5-3 heures', 'Autoroute A7'],
          ['Casablanca → Rabat', '~95 km', '1-1,25 heure', 'Autoroute A1'],
          ['Rabat → Sortie Tanger', '~250 km', '2,5-3 heures', 'A1 continue au nord'],
          ['Sortie → Chefchaouen', '~65 km', '1-1,25 heure', 'Route N2 vers le Rif'],
          ['Total', '~560-580 km', '7-7,5 heures', 'Ajoutez 1-2h pour arrêts'],
        ],
      },
      callout: {
        label: '💰 Coûts de Péage',
        body: 'Prévoyez environ MAD 200-250 (18-23€) de péages totaux. Le carburant pour l\'aller-retour complet coûte environ MAD 700-900 (65-83€).',
      },
    },
    {
      heading: 'L\'Itinéraire Panoramique — Via le Moyen Atlas',
      paragraphs: ['Si vous avez plus de temps et voulez des paysages de montagne, l\'itinéraire intérieur via le Moyen Atlas offre un caractère vraiment différent.'],
      callout: {
        label: '🌲 Quand l\'Itinéraire Panoramique a du Sens',
        body: 'Choisissez cet itinéraire si vous combinez le trajet avec un arrêt à Fès, ou si le paysage montagne/forêt compte plus que l\'heure d\'arrivée.',
      },
    },
    {
      heading: 'Pourquoi Diviser ce Trajet sur Deux Jours',
      paragraphs: ['Un trajet de 7-9 heures est techniquement faisable en une journée, mais ce n\'est pas une expérience road trip agréable.'],
      table: {
        caption: 'Division recommandée sur 2 jours Marrakech-Chefchaouen',
        headers: ['Jour', 'Itinéraire', 'Distance', 'Pourquoi s\'arrêter ici'],
        rows: [
          ['Jour 1', 'Marrakech → Rabat (nuit)', '~335 km, 3,5-4h', 'Rabat mérite vraiment une nuit — Kasbah des Oudayas, Tour Hassan, Chellah'],
          ['Jour 2', 'Rabat → Chefchaouen', '~225-280 km, 2,5-3,5h', 'Étape finale courte et détendue — arrivée de jour'],
        ],
      },
      callout: {
        label: '🏨 Pourquoi Rabat Spécifiquement',
        body: 'Rabat se situe presque exactement au milieu de cet itinéraire. Voir notre <a href="/blog/guide-voyage-rabat">Guide Voyage Rabat</a> complet.',
      },
    },
    {
      heading: 'Alternative : Voler une Partie du Trajet',
      paragraphs: ['Si conduire la distance complète ne vous tente pas, une option hybride existe : voler de Marrakech (RAK) à Tanger (TNG) — environ 50 minutes, souvent moins de 50€.'],
      table: {
        caption: 'Marrakech à Chefchaouen — toutes options comparées 2026',
        headers: ['Méthode', 'Temps', 'Coût approximatif', 'Idéal pour'],
        rows: [
          ['Auto-conduite (autoroute)', '7-7,5h (ou 2 jours)', 'MAD 700-900 + péages', 'Flexibilité, arrêts en route'],
          ['Vol Tanger + voiture/taxi', '~50min vol + 1-1,5h', '40-70€ + voiture', 'Voyageurs pressés'],
          ['Vol Tanger + bus CTM', '~50min vol + ~3h bus', '40-70€ + MAD 50', 'Voyageurs budget'],
          ['Train + bus', '9-10h total', 'MAD 230-500', 'Sans voiture, mais lent'],
        ],
      },
      callout: {
        label: '🚗 Louez Votre Voiture pour cet Itinéraire',
        body: 'Une voiture économique suffit amplement pour l\'itinéraire autoroutier complet. Économique dès MAD 250/jour (23€). +212 634 276 534',
      },
    },
    {
      heading: 'Conseils Pratiques de Conduite',
      paragraphs: ['Quelques spécificités qui font la différence.'],
      list: [
        'Partez de Marrakech vers 7-8h si vous tentez le trajet en une journée.',
        'Les péages sur A7/A1 acceptent espèces et cartes — gardez du cash pour les petits péages.',
        'Stations-service fréquentes sur tout le corridor autoroutier.',
        'Évitez de conduire à Chefchaouen après la tombée de la nuit si possible.',
        'Un permis de conduire international est requis avec votre permis national.',
        'La plupart des voitures de location au Maroc roulent au diesel — confirmez au retrait.',
      ],
    },
  ],
  faqs: [
    { question: 'Quelle est la distance Marrakech-Chefchaouen en voiture ?', answer: '560-580 km via l\'autoroute directe par Casablanca et Rabat, ou 600-680 km via l\'itinéraire panoramique intérieur. 7-7,5 heures de conduite pure sur autoroute, ou 8-9 heures sur l\'itinéraire panoramique.' },
    { question: 'Peut-on faire Marrakech-Chefchaouen en un jour ?', answer: 'Techniquement oui — 7-9 heures de conduite selon l\'itinéraire — mais ce n\'est pas confortable en une journée. Nous recommandons diviser sur 2 jours avec une nuit à Rabat.' },
    { question: 'Quel est le meilleur itinéraire ?', answer: 'Pour la plupart des voyageurs, l\'itinéraire autoroutier via Casablanca et Rabat (A7 puis A1) est le meilleur — plus rapide, mieux entretenu.' },
    { question: 'Combien coûtent les péages ?', answer: 'Environ MAD 200-250 (18-23€) au total pour l\'itinéraire autoroutier complet.' },
    { question: 'Existe-t-il un moyen plus rapide que conduire tout le trajet ?', answer: 'Oui — voler de Marrakech (RAK) à Tanger (TNG) prend environ 50 minutes et coûte souvent moins de 50€, réduisant le temps total à 2-4 heures au lieu de 7-9.' },
  ],
  peopleAlsoAsk: [
    { question: 'Le trajet Marrakech-Chefchaouen est-il sûr ?', answer: 'Oui — l\'itinéraire autoroutier est entièrement sur routes à péage modernes bien entretenues.' },
    { question: 'Faut-il s\'arrêter à Casablanca ou Rabat en route ?', answer: 'Rabat est le meilleur arrêt des deux pour cet itinéraire spécifique — situé presque exactement au milieu.' },
    { question: 'Faut-il un 4x4 pour Marrakech-Chefchaouen ?', answer: 'Non — les deux itinéraires sont entièrement sur routes goudronnées adaptées à une voiture économique standard.' },
  ],
  relatedDestinations: ['marrakech', 'chefchaouen', 'rabat', 'casablanca'],
  relatedPosts: ['guide-voyage-marrakech', 'guide-voyage-chefchaouen', 'guide-voyage-rabat', 'guide-voyage-tanger', 'guide-voyage-casablanca'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'من مراكش إلى شفشاون بالسيارة 2026 — المسار والمسافة والأوقات الحقيقية',
  metaDescription: 'دليل شامل للقيادة من مراكش لشفشاون: 560-680 كم حسب المسار، 7-9 ساعات، أفضل التوقفات (الدار البيضاء، الرباط، أو طريق إفران الخلاب)، تكاليف الرسوم.',
  title: 'من مراكش إلى شفشاون بالسيارة 2026: دليل المسار والمسافة والتوقيت الكامل',
  description: 'إجابة سريعة: القيادة من مراكش لشفشاون تغطي 560-680 كم حسب المسار المختار، بـ7-9 ساعات قيادة خالصة — بعيد فعلاً لمحاولته بارتياح في يوم واحد.',
  keyword: 'من مراكش إلى شفشاون بالسيارة',
  coverImage: COVER,
  coverAlt: 'من مراكش إلى شفشاون بالسيارة 2026 — طريق جبلي متعرج عبر غابة أرز الأطلس المتوسط قرب إفران',
  publishedISO: '2026-08-14',
  updatedISO: '2026-08-14',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 14,
  intro: 'إجابة سريعة: القيادة من مراكش لشفشاون تغطي 560-680 كم حسب المسار المختار، بـ7-9 ساعات قيادة خالصة — بعيد فعلاً لمحاولته بارتياح في يوم واحد. تقع مراكش وشفشاون على طرفي المغرب المتقابلين.',
  sections: [
    {
      heading: 'كم المسافة فعلاً؟ توضيح الالتباس',
      paragraphs: ['حاسبات المسارات المختلفة تعطي أرقاماً مختلفة — بين 560 و680 كم — لأن هناك فعلاً عدة مسارات صالحة بمسافات مختلفة.'],
      table: {
        caption: 'مراكش لشفشاون — المسافة حسب المسار 2026',
        headers: ['المسار', 'المسافة', 'وقت القيادة الخالص', 'الطابع'],
        rows: [
          ['الطريق السريع عبر الدار البيضاء والرباط (A7/A1)', '~560-580 كم', '7-7.5 ساعة', 'الأسرع والأكثر توقعاً'],
          ['الداخلي/الخلاب عبر الأطلس المتوسط', '~600-680 كم', '8-9 ساعات', 'أبطأ لكن مناظر أكثر تنوعاً'],
        ],
      },
      callout: {
        label: '💡 إجابة مباشرة',
        body: 'لمعظم المسافرين، مسار الطريق السريع عبر الدار البيضاء والرباط هو الخيار الصحيح — أسرع وأفضل صيانة.',
      },
    },
    {
      heading: 'المسار السريع — مراكش، الدار البيضاء، الرباط، طنجة، شفشاون',
      paragraphs: ['هذا المسار الذي نوصي به لمعظم العملاء الذين يقومون بهذه الرحلة تحديداً.'],
      table: {
        caption: 'مراكش لشفشاون — مسار الطريق السريع 2026',
        headers: ['المرحلة', 'المسافة', 'الوقت', 'ملاحظات'],
        rows: [
          ['مراكش ← الدار البيضاء', '~240 كم', '2.5-3 ساعات', 'طريق سريع A7'],
          ['الدار البيضاء ← الرباط', '~95 كم', '1-1.25 ساعة', 'طريق سريع A1'],
          ['الرباط ← مخرج طنجة', '~250 كم', '2.5-3 ساعات', 'A1 يستمر شمالاً'],
          ['المخرج ← شفشاون', '~65 كم', '1-1.25 ساعة', 'طريق N2 نحو الريف'],
          ['الإجمالي', '~560-580 كم', '7-7.5 ساعة', 'أضف 1-2 ساعة للتوقفات'],
        ],
      },
      callout: {
        label: '💰 تكاليف الرسوم',
        body: 'توقع حوالي MAD 200-250 (18-23€) رسوماً إجمالية. الوقود للرحلة الكاملة ذهاباً وإياباً حوالي MAD 700-900.',
      },
    },
    {
      heading: 'المسار الخلاب — عبر الأطلس المتوسط',
      paragraphs: ['إذا كان لديك وقت أكثر وتريد مناظر جبلية، المسار الداخلي عبر الأطلس المتوسط يقدم طابعاً مختلفاً فعلاً.'],
      callout: {
        label: '🌲 متى يكون المسار الخلاب منطقياً',
        body: 'اختر هذا المسار إذا كنت تجمع الرحلة مع توقف بفاس، أو إذا كانت المناظر الجبلية/الغابات تهمك أكثر من وقت الوصول.',
      },
    },
    {
      heading: 'لماذا تقسم هذه الرحلة على يومين',
      paragraphs: ['رحلة 7-9 ساعات ممكنة تقنياً بيوم واحد، لكنها ليست تجربة رحلة برية ممتعة.'],
      table: {
        caption: 'التقسيم الموصى به على يومين مراكش-شفشاون',
        headers: ['اليوم', 'المسار', 'المسافة', 'لماذا التوقف هنا'],
        rows: [
          ['اليوم 1', 'مراكش ← الرباط (مبيت)', '~335 كم، 3.5-4 ساعات', 'الرباط تستحق فعلاً ليلة — قصبة الأوداية وصومعة حسان'],
          ['اليوم 2', 'الرباط ← شفشاون', '~225-280 كم، 2.5-3.5 ساعة', 'مرحلة أخيرة قصيرة ومريحة'],
        ],
      },
      callout: {
        label: '🏨 لماذا الرباط تحديداً',
        body: 'الرباط تقع تقريباً في منتصف هذا المسار بالضبط. راجع <a href="/blog/dalil-safar-ribat">دليل السفر للرباط</a> الشامل.',
      },
    },
    {
      heading: 'بديل: الطيران جزء من الطريق',
      paragraphs: ['إذا لم تكن القيادة كامل المسافة تناسبك، يوجد خيار مختلط: الطيران من مراكش (RAK) لطنجة (TNG) — حوالي 50 دقيقة.'],
      table: {
        caption: 'مراكش لشفشاون — كل الخيارات مقارنة 2026',
        headers: ['الطريقة', 'الوقت', 'التكلفة التقريبية', 'الأنسب لـ'],
        rows: [
          ['القيادة الذاتية', '7-7.5 ساعة (أو يومين)', 'MAD 700-900 + رسوم', 'المرونة والتوقفات'],
          ['طيران طنجة + سيارة/تاكسي', '~50 دقيقة طيران + 1-1.5 ساعة', '40-70€ + سيارة', 'المسافرون المستعجلون'],
          ['طيران طنجة + حافلة CTM', '~50 دقيقة + ~3 ساعات', '40-70€ + MAD 50', 'مسافرو الميزانية'],
        ],
      },
      callout: {
        label: '🚗 استأجر سيارتك لهذا المسار',
        body: 'سيارة اقتصادية كافية تماماً لمسار الطريق السريع الكامل. اقتصادية من MAD 250/يوم (23€). +212 634 276 534',
      },
    },
    {
      heading: 'نصائح قيادة عملية',
      paragraphs: ['بعض التفاصيل التي تصنع الفرق.'],
      list: [
        'غادر مراكش نحو 7-8 صباحاً إذا حاولت الرحلة بيوم واحد.',
        'محطات الرسوم على A7/A1 تقبل النقد والبطاقات.',
        'محطات الوقود متكررة على طول الممر السريع بأكمله.',
        'تجنب القيادة لشفشاون بعد حلول الظلام إن أمكن.',
        'رخصة قيادة دولية مطلوبة مع رخصتك الوطنية.',
      ],
    },
  ],
  faqs: [
    { question: 'كم تبعد مراكش عن شفشاون بالسيارة؟', answer: '560-580 كم عبر الطريق السريع المباشر بالدار البيضاء والرباط، أو 600-680 كم عبر المسار الداخلي الخلاب. 7-7.5 ساعة قيادة خالصة على الطريق السريع.' },
    { question: 'هل يمكن القيادة من مراكش لشفشاون بيوم واحد؟', answer: 'تقنياً نعم — 7-9 ساعات حسب المسار — لكنها ليست مريحة بيوم واحد. نوصي بالتقسيم على يومين مع مبيت بالرباط.' },
    { question: 'ما أفضل مسار؟', answer: 'لمعظم المسافرين، مسار الطريق السريع عبر الدار البيضاء والرباط هو الأفضل.' },
    { question: 'كم تكلفة الرسوم؟', answer: 'حوالي MAD 200-250 (18-23€) إجمالاً لمسار الطريق السريع الكامل.' },
    { question: 'هل توجد طريقة أسرع من قيادة كامل المسار؟', answer: 'نعم — الطيران من مراكش (RAK) لطنجة (TNG) يستغرق حوالي 50 دقيقة.' },
  ],
  peopleAlsoAsk: [
    { question: 'هل رحلة مراكش-شفشاون آمنة؟', answer: 'نعم — مسار الطريق السريع بالكامل على طرق رسوم حديثة جيدة الصيانة.' },
    { question: 'هل أتوقف بالدار البيضاء أم الرباط؟', answer: 'الرباط أفضل توقف من الاثنين لهذا المسار تحديداً — تقع تقريباً في المنتصف بالضبط.' },
    { question: 'هل أحتاج دفعاً رباعياً؟', answer: 'لا — كلا المسارين بالكامل على طرق معبدة مناسبة لسيارة اقتصادية قياسية.' },
  ],
  relatedDestinations: ['marrakech', 'chefchaouen', 'rabat', 'casablanca'],
  relatedPosts: ['dalil-safar-marakish', 'dalil-safar-shafshawan', 'dalil-safar-ribat', 'dalil-safar-tanja', 'dalil-safar-dar-al-bayda'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);