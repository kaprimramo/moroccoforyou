import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'casablanca-nightlife-guide-tourists';
const SLUG_FR = 'guide-vie-nocturne-casablanca-touristes';
const SLUG_AR = 'dalil-al-hayat-al-layliya-dar-al-bayda';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889843);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Casablanca Nightlife Guide for Tourists 2026 — Best Bars & Restaurants',
  metaDescription: 'Best bars, restaurants with live music and nightlife in Casablanca 2026: Sky 28, Rick\'s Café, La Bodega, Le Cabestan, Dar Dada — prices, hours and insider tips.',
  title: 'Casablanca Nightlife Guide: Best Bars, Live Music & Restaurants (2026)',
  description: 'The complete guide to Casablanca nightlife for tourists in 2026: the best rooftop bars, live music restaurants, tapas bars and authentic Moroccan dining — with real prices and opening hours.',
  keyword: 'casablanca nightlife guide tourists',
  coverImage: COVER,
  coverAlt: 'Casablanca skyline at night — nightlife bars and restaurants',
  publishedISO: '2026-06-11',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro: 'Casablanca has Morocco\'s most sophisticated nightlife scene — and most tourists never find it. While Marrakech gets the rooftop riad attention, Casa runs later, dresses better, and has a local crowd of young professionals who actually know how to have a good time. From the highest rooftop bar in Morocco to a Spanish tapas bar with live salsa, this guide covers the best places to eat, drink, and hear live music in Casablanca in 2026.',
  sections: [
    {
      heading: 'Casablanca Nightlife — What to Expect',
      paragraphs: [
        'Casablanca nightlife is driven by a sophisticated local crowd rather than tourists. The two main zones are the Corniche (coastal boulevard with beach clubs and oceanfront restaurants) and Maarif (downtown neighborhood with wine bars, jazz clubs, and rooftop lounges). Most venues open around 9pm and peak between midnight and 3am.',
        'Alcohol is widely available in Casablanca\'s licensed restaurants and bars — it is the most liberal city in Morocco for nightlife. Dress code at upscale venues is smart casual; jeans and trainers are fine at most bars but some clubs enforce a dress code at weekends.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'Casablanca starts later than European cities. Arriving at a restaurant at 8pm means you\'ll be eating alone. Locals dine from 9:30pm and head to bars after 11pm. Plan your evening accordingly — dinner at 9pm, drinks from 11pm, club from midnight.',
      },
    },
    {
      heading: 'Sky 28 — The Highest Rooftop Bar in Morocco',
      paragraphs: [
        'Sky 28 sits on the 28th floor of the Kenzi Tower Hotel (Twin Center, Boulevard Zerktouni, Maarif), with a 360° panoramic view of Casablanca and the Atlantic Ocean. It is the most spectacular bar in Morocco — full stop. The rooftop transforms from an afternoon lounge into a full DJ night by 10pm.',
        'The menu covers tapas (from 90 MAD), salads, sandwiches and full plates (from 180 MAD). Cocktails start at 120 MAD. The best experience is arriving around 6pm to watch the sun set over the ocean, then staying for the evening DJ set. Reservations recommended at weekends.',
      ],
      table: {
        caption: 'Sky 28 — key information',
        headers: ['Detail', 'Information'],
        rows: [
          ['Address', 'Kenzi Tower Hotel, 174 Bd Zerktouni, Maarif, Casablanca'],
          ['Opening hours', 'Daily 15h00 – 01h00'],
          ['Tapas from', '90 MAD (€8)'],
          ['Main plates from', '180 MAD (€16)'],
          ['Cocktails from', '120 MAD (€11)'],
          ['Music', 'Live music + DJ most evenings'],
          ['Best time to go', 'Sunset (6–8pm) or late evening (10pm+)'],
          ['Reservations', 'Recommended at weekends'],
        ],
      },
    },
    {
      heading: 'Rick\'s Café — Live Piano and Iconic Atmosphere',
      paragraphs: [
        'Rick\'s Café is the most atmospheric bar-restaurant in Casablanca — a deliberate recreation of the fictional bar from the 1942 Humphrey Bogart film, opened in 2004 by American diplomat Kathy Kriger. It should be a tourist trap but somehow it isn\'t. The tadelakt walls, terracotta floors, and nightly live piano set create something genuinely romantic.',
        'The menu leans into Morocco\'s Atlantic seafood — sole, John Dory, fresh fish of the day — plus steaks, foie gras, and goat cheese salad. Budget 400–600 MAD per person for dinner with wine. The bar is more affordable if you just want a cocktail and the piano. Book dinner 24–48 hours ahead.',
      ],
      table: {
        caption: 'Rick\'s Café — key information',
        headers: ['Detail', 'Information'],
        rows: [
          ['Address', '248 Bd Sour Jdid, Casablanca (near the Corniche)'],
          ['Opening hours', 'Mon–Sat 18h00 – 01h00, Sun 12h00 – 00h00'],
          ['Dinner budget', '400–600 MAD/person (€37–55) with wine'],
          ['Cocktails', 'From 120 MAD (€11)'],
          ['Music', 'Live piano nightly'],
          ['Dress code', 'Smart casual'],
          ['Reservations', 'Strongly recommended for dinner'],
          ['Website', 'rickscafe.ma'],
        ],
      },
    },
    {
      heading: 'La Bodega de Casablanca — Spanish Tapas and Live Latin Music',
      paragraphs: [
        'La Bodega is the most fun venue in Casablanca — a Spanish-style tapas bar with live music almost every night (reggae, samba, salsa, rock) and a dance floor that fills up after midnight. The decor leans Spanish: colorful chairs, decorative grapes hanging from the bar, a bull\'s head on the wall.',
        'The food is genuinely good — cold and warm starters, seafood, croquettes, traditional paella. Budget 200–350 MAD per person for food. Cocktails and sangria from 90 MAD. The atmosphere peaks around 11pm when the live band starts. No reservation needed early; at weekends, arrive before 10pm to get a table.',
      ],
      table: {
        caption: 'La Bodega de Casablanca — key information',
        headers: ['Detail', 'Information'],
        rows: [
          ['Address', 'Phare d\'El Hank, 90 Bd de la Corniche, Casablanca'],
          ['Opening hours', 'Daily 19h00 – 03h00'],
          ['Food budget', '200–350 MAD/person (€18–32)'],
          ['Sangria / cocktails', 'From 90 MAD (€8)'],
          ['Music', 'Live band most nights — reggae, salsa, samba'],
          ['Dance floor', 'Yes — after midnight'],
          ['Best night', 'Friday and Saturday'],
          ['Reservations', 'Recommended at weekends'],
        ],
      },
    },
    {
      heading: 'Le Cabestan — Oceanfront Fine Dining',
      paragraphs: [
        'Le Cabestan is Casablanca\'s most dramatic restaurant — perched on a rocky cliff above the Atlantic Ocean on the Corniche, with floor-to-ceiling windows and a jungle trail entrance that is genuinely unlike anywhere else in Morocco. The cuisine is Mediterranean-French with an emphasis on Moroccan seafood.',
        'Budget 500–800 MAD per person for dinner with wine. The Sunday brunch (from 200 MAD) is excellent value. Le Cabestan works as a sunset cocktail stop even if you are not eating — arrive at 7pm, order drinks at the bar, watch the Atlantic. Dinner reservations essential at weekends.',
      ],
      table: {
        caption: 'Le Cabestan — key information',
        headers: ['Detail', 'Information'],
        rows: [
          ['Address', 'Corniche Ain Diab, Casablanca'],
          ['Opening hours', 'Daily 12h00 – 03h00'],
          ['Dinner budget', '500–800 MAD/person (€46–73) with wine'],
          ['Sunday brunch', 'From 200 MAD (€18)'],
          ['Cuisine', 'Mediterranean-French, Moroccan seafood'],
          ['Dress code', 'Smart casual to formal'],
          ['Reservations', 'Essential at weekends'],
          ['Best for', 'Romantic dinner, sunset cocktails'],
        ],
      },
    },
    {
      heading: 'Dar Dada — Authentic Moroccan Cuisine with Live Animation',
      paragraphs: [
        'Dar Dada is the best address in Casablanca for a full traditional Moroccan dining experience with live entertainment. Located in the heart of the medina near the Marina, the restaurant seats 250 and hosts Moroccan music and animation most evenings. The menu combines traditional Moroccan dishes with Lebanese, Turkish and international influences.',
        'Lunch and dinner service runs seven days. Budget 250–400 MAD per person for a full meal. The atmosphere is warm and theatrical — think hand-painted ceilings, mosaic floors, and traditional music performed tableside. Perfect for groups and celebrations. Reservations via their website at dardada.com.',
      ],
      table: {
        caption: 'Dar Dada — key information',
        headers: ['Detail', 'Information'],
        rows: [
          ['Address', '31 Imm, Rue El Arsa, Médina, Casablanca'],
          ['Phone', '+212 661 60 26 02'],
          ['Opening hours', 'Mon–Sat 12h00–15h30 and 19h00–01h00'],
          ['Dinner budget', '250–400 MAD/person (€23–37)'],
          ['Cuisine', 'Moroccan + Lebanese + international'],
          ['Capacity', '250 seated, 350 cocktail'],
          ['Animation', 'Live Moroccan music most evenings'],
          ['Website', 'dardada.com'],
          ['Reservations', 'Online via dardada.com or by phone'],
        ],
      },
    },
    {
      heading: 'Practical Tips for Casablanca Nightlife',
      paragraphs: [
        'Getting there: Casablanca\'s nightlife zones (Corniche, Maarif) are best reached by petit taxi — 20–40 MAD from most central hotels. Driving is possible but parking on the Corniche is limited at weekends. Renting a car from MoroccoForYou at Casablanca Airport gives you flexibility for evening outings — ask for recommendations on WhatsApp.',
        'Budget: Casablanca nightlife is not cheap by Moroccan standards. Budget 300–600 MAD per person for a full evening (dinner + drinks). The Corniche venues (Le Cabestan, La Bodega) are pricier; Maarif bars (Sky 28, Rick\'s Café) offer better value for cocktail-only visits.',
      ],
      table: {
        caption: 'Casablanca nightlife — evening itinerary suggestions',
        headers: ['Time', 'Activity', 'Budget'],
        rows: [
          ['18h00–20h00', 'Sunset cocktails at Sky 28 or Le Cabestan', '120–200 MAD'],
          ['20h00–22h00', 'Dinner at Dar Dada or Rick\'s Café', '300–600 MAD'],
          ['22h00–00h00', 'Live music at La Bodega or Rick\'s Café', '100–200 MAD'],
          ['00h00–03h00', 'Late drinks at Sky 28 or Corniche clubs', '150–300 MAD'],
        ],
      },
      callout: {
        label: '💡 MoroccoForYou Tip',
        body: 'Rent a car at Casablanca Airport CMN from 320 MAD/day and explore the Corniche freely. MoroccoForYou Cars delivers to CMN 24/7 — book on WhatsApp for instant confirmation and a free recommendation on the best evening spots near your hotel.',
      },
    },
  ],
  faqs: [
    {
      question: 'Is nightlife safe in Casablanca for tourists?',
      answer: 'Yes — Casablanca is the safest city in Morocco for nightlife. The Corniche and Maarif areas have good police presence. Use petit taxis for late-night travel (20–40 MAD) rather than walking unfamiliar streets after midnight.',
    },
    {
      question: 'Can you drink alcohol in Casablanca?',
      answer: 'Yes — Casablanca has the most liberal alcohol scene in Morocco. Licensed restaurants, hotels and bars all serve alcohol. Budget 90–150 MAD for a cocktail at most venues.',
    },
    {
      question: 'What is the best area for nightlife in Casablanca?',
      answer: 'The Corniche (coastal boulevard in Ain Diab) for oceanfront restaurants and beach clubs, and Maarif (downtown) for rooftop bars and jazz venues. Most tourists base themselves between the two.',
    },
    {
      question: 'Do I need to book in advance for Casablanca restaurants?',
      answer: 'For Rick\'s Café and Le Cabestan at weekends, book 48 hours ahead. Sky 28, La Bodega and Dar Dada accept walk-ins but reservations are recommended on Fridays and Saturdays.',
    },
    {
      question: 'What time does nightlife start in Casablanca?',
      answer: 'Restaurants fill from 9:30pm. Bars peak between midnight and 2am. Casablanca runs significantly later than European cities — arriving at 8pm means a quiet venue.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is Casablanca good for nightlife?', answer: 'Yes — it has Morocco\'s best nightlife, driven by young local professionals rather than tourists. Sky 28, La Bodega and Rick\'s Café are the standout venues.' },
    { question: 'What is the dress code at Casablanca bars?', answer: 'Smart casual at most venues. Avoid trainers and shorts at upscale rooftop bars like Sky 28. La Bodega is more relaxed.' },
    { question: 'How much does a night out in Casablanca cost?', answer: 'Budget 300–600 MAD (€27–55) per person for a full evening including dinner and drinks. Cocktail-only evenings cost 150–300 MAD.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['casablanca-airport-car-rental', 'things-to-do-casablanca', 'how-to-get-from-casablanca-airport-to-city-centre'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Vie Nocturne Casablanca Touristes 2026 — Bars & Restaurants',
  metaDescription: 'Meilleurs bars, restaurants avec animation et vie nocturne à Casablanca 2026 : Sky 28, Rick\'s Café, La Bodega, Le Cabestan, Dar Dada — prix, horaires et conseils locaux.',
  title: 'Guide Vie Nocturne Casablanca : Meilleurs Bars, Live Music & Restaurants (2026)',
  description: 'Le guide complet de la vie nocturne à Casablanca pour touristes en 2026 : les meilleurs rooftops, restaurants avec animation live, bars à tapas et cuisine marocaine authentique.',
  keyword: 'vie nocturne casablanca touristes',
  coverImage: COVER,
  coverAlt: 'Casablanca by night — bars et restaurants avec animation',
  publishedISO: '2026-06-11',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro: 'Casablanca a la scène nocturne la plus sophistiquée du Maroc — et la plupart des touristes ne la trouvent jamais. Pendant que Marrakech attire l\'attention avec ses riads en terrasse, Casa commence plus tard, s\'habille mieux, et dispose d\'une clientèle locale de jeunes professionnels qui savent vraiment s\'amuser. Du rooftop bar le plus haut du Maroc à un bar à tapas espagnol avec salsa live, ce guide couvre les meilleurs endroits pour manger, boire et écouter de la musique live à Casablanca en 2026.',
  sections: [
    {
      heading: 'Vie nocturne à Casablanca — à quoi s\'attendre',
      paragraphs: [
        'La vie nocturne de Casablanca est portée par une clientèle locale sophistiquée plutôt que par les touristes. Les deux zones principales sont la Corniche (boulevard côtier avec clubs de plage et restaurants en bord de mer) et Maârif (quartier du centre avec bars à vin, jazz clubs et lounges en rooftop). La plupart des établissements ouvrent vers 21h et sont à leur pic entre minuit et 3h du matin.',
        'L\'alcool est largement disponible dans les restaurants et bars agréés de Casablanca — c\'est la ville la plus libérale du Maroc en matière de vie nocturne. La tenue vestimentaire dans les établissements haut de gamme est smart casual.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'Casablanca commence plus tard que les villes européennes. Arriver au restaurant à 20h signifie dîner seul. Les locaux dînent à partir de 21h30 et vont dans les bars après 23h. Planifiez votre soirée en conséquence — dîner à 21h, cocktails à partir de 23h, club à partir de minuit.',
      },
    },
    {
      heading: 'Sky 28 — Le Rooftop Bar le Plus Haut du Maroc',
      paragraphs: [
        'Sky 28 se trouve au 28e étage du Kenzi Tower Hotel (Twin Center, Boulevard Zerktouni, Maârif), avec une vue panoramique à 360° sur Casablanca et l\'océan Atlantique. C\'est le bar le plus spectaculaire du Maroc. Le rooftop se transforme d\'un lounge l\'après-midi en une soirée DJ complète vers 22h.',
        'La carte propose tapas (à partir de 90 MAD), salades, sandwichs et plats élaborés (à partir de 180 MAD). Les cocktails démarrent à 120 MAD. La meilleure expérience : arriver vers 18h pour regarder le coucher du soleil sur l\'océan, puis rester pour le set DJ du soir. Réservation recommandée le week-end.',
      ],
      table: {
        caption: 'Sky 28 — informations clés',
        headers: ['Détail', 'Information'],
        rows: [
          ['Adresse', 'Kenzi Tower Hotel, 174 Bd Zerktouni, Maârif, Casablanca'],
          ['Horaires', 'Tous les jours 15h00 – 01h00'],
          ['Tapas à partir de', '90 MAD (8€)'],
          ['Plats à partir de', '180 MAD (16€)'],
          ['Cocktails à partir de', '120 MAD (11€)'],
          ['Musique', 'Live + DJ la plupart des soirs'],
          ['Meilleur moment', 'Coucher du soleil (18h–20h) ou soirée (22h+)'],
          ['Réservations', 'Recommandées le week-end'],
        ],
      },
    },
    {
      heading: 'Rick\'s Café — Piano Live et Atmosphère Iconique',
      paragraphs: [
        'Rick\'s Café est le bar-restaurant le plus atmosphérique de Casablanca — une recréation délibérée du bar fictif du film de 1942 avec Humphrey Bogart, ouverte en 2004 par la diplomate américaine Kathy Kriger. Cela devrait être un piège à touristes mais ce n\'est étrangement pas le cas. Les murs en tadelakt, les sols en terre cuite et le piano live quotidien créent quelque chose de genuinement romantique.',
        'La carte mise sur les fruits de mer atlantiques du Maroc — sole, saint-pierre, poisson du jour — plus steaks, foie gras et salade de chèvre. Comptez 400–600 MAD par personne pour le dîner avec vin. Réservez le dîner 24–48h à l\'avance.',
      ],
      table: {
        caption: 'Rick\'s Café — informations clés',
        headers: ['Détail', 'Information'],
        rows: [
          ['Adresse', '248 Bd Sour Jdid, Casablanca (près de la Corniche)'],
          ['Horaires', 'Lun–Sam 18h00 – 01h00, Dim 12h00 – 00h00'],
          ['Budget dîner', '400–600 MAD/personne (37–55€) avec vin'],
          ['Cocktails', 'À partir de 120 MAD (11€)'],
          ['Musique', 'Piano live tous les soirs'],
          ['Code vestimentaire', 'Smart casual'],
          ['Réservations', 'Fortement recommandées pour le dîner'],
          ['Site web', 'rickscafe.ma'],
        ],
      },
    },
    {
      heading: 'La Bodega de Casablanca — Tapas Espagnoles et Musique Latine Live',
      paragraphs: [
        'La Bodega est l\'endroit le plus festif de Casablanca — un bar à tapas à l\'espagnole avec de la musique live presque tous les soirs (reggae, samba, salsa, rock) et une piste de danse qui se remplit après minuit. Le décor penche espagnol : chaises colorées, grappes décoratives au-dessus du bar, tête de taureau au mur.',
        'La nourriture est vraiment bonne — entrées froides et chaudes, fruits de mer, croquettes, paella traditionnelle. Comptez 200–350 MAD par personne pour la nourriture. Cocktails et sangria à partir de 90 MAD. L\'atmosphère culmine vers 23h quand le groupe live démarre.',
      ],
      table: {
        caption: 'La Bodega de Casablanca — informations clés',
        headers: ['Détail', 'Information'],
        rows: [
          ['Adresse', 'Phare d\'El Hank, 90 Bd de la Corniche, Casablanca'],
          ['Horaires', 'Tous les jours 19h00 – 03h00'],
          ['Budget repas', '200–350 MAD/personne (18–32€)'],
          ['Sangria / cocktails', 'À partir de 90 MAD (8€)'],
          ['Musique', 'Groupe live la plupart des soirs — reggae, salsa, samba'],
          ['Piste de danse', 'Oui — après minuit'],
          ['Meilleure soirée', 'Vendredi et samedi'],
          ['Réservations', 'Recommandées le week-end'],
        ],
      },
    },
    {
      heading: 'Le Cabestan — Dîner Gastronomique en Bord de Mer',
      paragraphs: [
        'Le Cabestan est le restaurant le plus dramatique de Casablanca — perché sur une falaise rocheuse au-dessus de l\'océan Atlantique sur la Corniche, avec des baies vitrées et une entrée via un sentier végétalisé unique au Maroc. La cuisine est méditerranéenne-française avec l\'accent sur les fruits de mer marocains.',
        'Comptez 500–800 MAD par personne pour le dîner avec vin. Le brunch du dimanche (à partir de 200 MAD) est excellent. Le Cabestan fonctionne aussi comme arrêt cocktail au coucher du soleil — arrivez à 19h, commandez des boissons au bar, regardez l\'Atlantique. Réservation indispensable le week-end.',
      ],
      table: {
        caption: 'Le Cabestan — informations clés',
        headers: ['Détail', 'Information'],
        rows: [
          ['Adresse', 'Corniche Ain Diab, Casablanca'],
          ['Horaires', 'Tous les jours 12h00 – 03h00'],
          ['Budget dîner', '500–800 MAD/personne (46–73€) avec vin'],
          ['Brunch du dimanche', 'À partir de 200 MAD (18€)'],
          ['Cuisine', 'Méditerranéenne-française, fruits de mer marocains'],
          ['Code vestimentaire', 'Smart casual à formel'],
          ['Réservations', 'Indispensables le week-end'],
          ['Idéal pour', 'Dîner romantique, cocktails au coucher du soleil'],
        ],
      },
    },
    {
      heading: 'Dar Dada — Cuisine Marocaine Authentique avec Animation Live',
      paragraphs: [
        'Dar Dada est la meilleure adresse de Casablanca pour une expérience de cuisine marocaine traditionnelle complète avec animation live. Situé au cœur de la médina près de la Marina, le restaurant accueille 250 personnes et propose de la musique et animation marocaines la plupart des soirs. La carte combine plats marocains traditionnels et influences libanaises, turques et internationales.',
        'Service midi et soir du lundi au samedi. Comptez 250–400 MAD par personne pour un repas complet. L\'atmosphère est chaleureuse et théâtrale — plafonds peints à la main, sols en mosaïque, musique traditionnelle jouée en salle. Parfait pour les groupes et les célébrations. Réservations en ligne sur dardada.com.',
      ],
      table: {
        caption: 'Dar Dada — informations clés',
        headers: ['Détail', 'Information'],
        rows: [
          ['Adresse', '31 Imm, Rue El Arsa, Médina, Casablanca'],
          ['Téléphone', '+212 661 60 26 02'],
          ['Horaires', 'Lun–Sam 12h00–15h30 et 19h00–01h00'],
          ['Budget repas', '250–400 MAD/personne (23–37€)'],
          ['Cuisine', 'Marocaine + libanaise + internationale'],
          ['Capacité', '250 assis, 350 en cocktail'],
          ['Animation', 'Musique marocaine live la plupart des soirs'],
          ['Site web', 'dardada.com'],
          ['Réservations', 'En ligne sur dardada.com ou par téléphone'],
        ],
      },
    },
    {
      heading: 'Conseils pratiques pour la vie nocturne à Casablanca',
      paragraphs: [
        'Comment y aller : les zones nocturnes de Casablanca (Corniche, Maârif) sont mieux accessibles en petit taxi — 20–40 MAD depuis la plupart des hôtels centraux. Louer une voiture chez MoroccoForYou à l\'aéroport de Casablanca vous donne la flexibilité pour les sorties en soirée.',
        'Budget : la vie nocturne de Casablanca n\'est pas bon marché aux standards marocains. Prévoyez 300–600 MAD par personne pour une soirée complète (dîner + boissons).',
      ],
      table: {
        caption: 'Casablanca nightlife — suggestions d\'itinéraire soirée',
        headers: ['Heure', 'Activité', 'Budget'],
        rows: [
          ['18h00–20h00', 'Cocktails coucher de soleil Sky 28 ou Le Cabestan', '120–200 MAD'],
          ['20h00–22h00', 'Dîner chez Dar Dada ou Rick\'s Café', '300–600 MAD'],
          ['22h00–00h00', 'Musique live à La Bodega ou Rick\'s Café', '100–200 MAD'],
          ['00h00–03h00', 'Derniers verres au Sky 28 ou clubs Corniche', '150–300 MAD'],
        ],
      },
      callout: {
        label: '💡 Conseil MoroccoForYou',
        body: 'Louez une voiture à l\'aéroport CMN dès 320 MAD/jour et explorez la Corniche librement. MoroccoForYou Cars livre à CMN 24h/24 — réservez sur WhatsApp pour une confirmation immédiate et une recommandation gratuite sur les meilleurs spots nocturnes près de votre hôtel.',
      },
    },
  ],
  faqs: [
    {
      question: 'La vie nocturne est-elle sûre à Casablanca pour les touristes ?',
      answer: 'Oui — Casablanca est la ville la plus sûre du Maroc pour la vie nocturne. Les zones de la Corniche et Maârif ont une bonne présence policière. Utilisez les petits taxis pour les déplacements tardifs (20–40 MAD).',
    },
    {
      question: 'Peut-on consommer de l\'alcool à Casablanca ?',
      answer: 'Oui — Casablanca a la scène alcool la plus libérale du Maroc. Les restaurants, hôtels et bars agréés servent tous de l\'alcool. Comptez 90–150 MAD pour un cocktail dans la plupart des établissements.',
    },
    {
      question: 'Quel est le meilleur quartier pour la vie nocturne à Casablanca ?',
      answer: 'La Corniche (boulevard côtier à Ain Diab) pour les restaurants en bord de mer et clubs de plage, et Maârif (centre-ville) pour les rooftops et bars jazz.',
    },
    {
      question: 'Faut-il réserver à l\'avance les restaurants de Casablanca ?',
      answer: 'Pour Rick\'s Café et Le Cabestan le week-end, réservez 48h à l\'avance. Sky 28, La Bodega et Dar Dada acceptent les walk-ins mais les réservations sont recommandées vendredi et samedi.',
    },
    {
      question: 'À quelle heure commence la vie nocturne à Casablanca ?',
      answer: 'Les restaurants se remplissent à partir de 21h30. Les bars atteignent leur pic entre minuit et 2h. Casablanca fonctionne nettement plus tard que les villes européennes.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Casablanca est-elle bien pour la vie nocturne ?', answer: 'Oui — elle a la meilleure vie nocturne du Maroc, portée par des jeunes professionnels locaux plutôt que des touristes. Sky 28, La Bodega et Rick\'s Café sont les adresses incontournables.' },
    { question: 'Quel est le code vestimentaire dans les bars de Casablanca ?', answer: 'Smart casual dans la plupart des établissements. Évitez baskets et shorts dans les rooftops haut de gamme comme Sky 28. La Bodega est plus décontractée.' },
    { question: 'Combien coûte une soirée à Casablanca ?', answer: 'Prévoyez 300–600 MAD (27–55€) par personne pour une soirée complète avec dîner et boissons. Une soirée cocktails uniquement coûte 150–300 MAD.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['location-voiture-aeroport-fes-maroc', 'comment-aller-aeroport-casablanca-centre-ville', 'conseils-premier-voyage-au-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل الحياة الليلية في الدار البيضاء للسياح 2026',
  metaDescription: 'أفضل البارات والمطاعم مع الموسيقى الحية في الدار البيضاء 2026: Sky 28 وريك كافيه ولا بوديغا ولو كابيستان ودار دادا — أسعار وأوقات عمل ونصائح.',
  title: 'دليل الحياة الليلية في الدار البيضاء: أفضل البارات والموسيقى والمطاعم (2026)',
  description: 'الدليل الشامل للحياة الليلية في الدار البيضاء للسياح 2026: أفضل البارات على الأسطح والمطاعم مع موسيقى حية وبارات التاباس والمطبخ المغربي الأصيل.',
  keyword: 'دليل الحياة الليلية الدار البيضاء سياح',
  coverImage: COVER,
  coverAlt: 'الدار البيضاء ليلاً — البارات والمطاعم مع الترفيه',
  publishedISO: '2026-06-11',
  author: 'فريق MoroccoForYou',
  readingMinutes: 10,
  intro: 'الدار البيضاء تملك أكثر مشاهد الحياة الليلية تطوراً في المغرب — ومعظم السياح لا يجدونها أبداً. بينما تحظى مراكش بالاهتمام بفضل رياضاتها المطلة، تبدأ الدار البيضاء متأخراً، وتتلبس بشكل أفضل، وتضم جمهوراً محلياً من الشباب المحترف الذي يعرف حقاً كيف يقضي وقتاً ممتعاً. من أعلى بار على السطح في المغرب إلى بار تاباس إسباني مع السالسا الحية، يغطي هذا الدليل أفضل الأماكن لتناول الطعام والشرب وسماع الموسيقى الحية في الدار البيضاء 2026.',
  sections: [
    {
      heading: 'الحياة الليلية في الدار البيضاء — ماذا تتوقع',
      paragraphs: [
        'الحياة الليلية في الدار البيضاء مدفوعة بجمهور محلي راقٍ وليس بالسياح. المنطقتان الرئيسيتان هما الكورنيش (البوليفار الساحلي مع نوادي الشاطئ والمطاعم المطلة على البحر) والمعاريف (حي وسط المدينة مع بارات الخمور والجاز ولاونجات الأسطح). معظم الأماكن تفتح حوالي الساعة 9 مساءً وتبلغ ذروتها بين منتصف الليل و3 صباحاً.',
        'الكحول متاح على نطاق واسع في المطاعم والبارات المرخصة بالدار البيضاء — إنها أكثر مدن المغرب ليبرالية في الحياة الليلية.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'الدار البيضاء تبدأ متأخرة عن المدن الأوروبية. الوصول للمطعم الساعة 8 مساءً يعني تناول الطعام وحدك. يتناول السكان المحليون العشاء من الساعة 9:30 مساءً ويذهبون للبارات بعد 11 مساءً. خطط مساءك وفقاً لذلك.',
      },
    },
    {
      heading: 'Sky 28 — أعلى بار على السطح في المغرب',
      paragraphs: [
        'يقع Sky 28 في الطابق الثامن والعشرين من فندق كنزي تاور (تون سنتر، شارع زركتوني، المعاريف)، مع إطلالة بانورامية 360 درجة على الدار البيضاء والمحيط الأطلسي. إنه الأكثر إثارة في المغرب. يتحول السطح من لاونج في فترة ما بعد الظهر إلى حفلة DJ كاملة بحلول الساعة 10 مساءً.',
        'القائمة تشمل التاباس (من 90 درهم)، سلطات، سندويشات وأطباق رئيسية (من 180 درهم). الكوكتيلات تبدأ من 120 درهم. أفضل تجربة: الوصول حوالي 6 مساءً لمشاهدة غروب الشمس فوق المحيط، ثم البقاء لحفلة DJ المسائية.',
      ],
      table: {
        caption: 'Sky 28 — معلومات أساسية',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['العنوان', 'فندق كنزي تاور، 174 شارع زركتوني، المعاريف، الدار البيضاء'],
          ['أوقات العمل', 'يومياً 15:00 – 01:00'],
          ['التاباس من', '90 درهم (8€)'],
          ['الأطباق الرئيسية من', '180 درهم (16€)'],
          ['الكوكتيلات من', '120 درهم (11€)'],
          ['الموسيقى', 'موسيقى حية + DJ معظم الأمسيات'],
          ['أفضل وقت', 'غروب الشمس (18:00–20:00) أو أمسية (22:00+)'],
          ['الحجز', 'موصى به في عطل نهاية الأسبوع'],
        ],
      },
    },
    {
      heading: 'ريك كافيه — بيانو حي وأجواء أيقونية',
      paragraphs: [
        'ريك كافيه هو الأكثر أجواءً في الدار البيضاء — إعادة خلق مقصودة للبار الخيالي من فيلم 1942 مع هامفري بوغارت، افتُتح عام 2004 من قِبَل الدبلوماسية الأمريكية كاثي كريغر. يجب أن يكون فخاً سياحياً لكنه ليس كذلك بطريقة ما. جدران التادلاكت وأرضيات الطين الحرارية وعروض البيانو الحية الليلية تخلق شيئاً رومانسياً حقاً.',
        'تعتمد القائمة على المأكولات البحرية الأطلسية المغربية — سمك السول، جون دوري، سمك اليوم — بالإضافة إلى الستيك وكبد الأوز وسلطة الجبن. ميزانية 400–600 درهم للشخص للعشاء مع النبيذ. احجز العشاء قبل 24–48 ساعة.',
      ],
      table: {
        caption: 'ريك كافيه — معلومات أساسية',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['العنوان', '248 شارع سور الجديد، الدار البيضاء (قرب الكورنيش)'],
          ['أوقات العمل', 'الإثنين–السبت 18:00–01:00، الأحد 12:00–00:00'],
          ['ميزانية العشاء', '400–600 درهم/شخص (37–55€) مع النبيذ'],
          ['الكوكتيلات', 'من 120 درهم (11€)'],
          ['الموسيقى', 'بيانو حي كل ليلة'],
          ['كود اللباس', 'سمارت كاجوال'],
          ['الحجز', 'موصى به للعشاء بشدة'],
          ['الموقع', 'rickscafe.ma'],
        ],
      },
    },
    {
      heading: 'لا بوديغا — تاباس إسبانية وموسيقى لاتينية حية',
      paragraphs: [
        'لا بوديغا هي الأكثر مرحاً في الدار البيضاء — بار تاباس بأسلوب إسباني مع موسيقى حية تقريباً كل ليلة (ريغي، سامبا، سالسا، روك) وصالة رقص تمتلئ بعد منتصف الليل. الديكور إسباني الطابع: كراسي ملونة وعناقيد عنب زخرفية وقرن ثور على الجدار.',
        'الطعام جيد حقاً — مقبلات باردة وساخنة ومأكولات بحرية وكروكيت وبايلا تقليدية. ميزانية 200–350 درهم للشخص للطعام. كوكتيلات وسانغريا من 90 درهم. تبلغ الأجواء ذروتها حوالي 11 مساءً حين يبدأ الفرقة الحية.',
      ],
      table: {
        caption: 'لا بوديغا دي كازابلانكا — معلومات أساسية',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['العنوان', 'فار الهنك، 90 شارع الكورنيش، الدار البيضاء'],
          ['أوقات العمل', 'يومياً 19:00 – 03:00'],
          ['ميزانية الطعام', '200–350 درهم/شخص (18–32€)'],
          ['السانغريا / الكوكتيلات', 'من 90 درهم (8€)'],
          ['الموسيقى', 'فرقة حية معظم الليالي — ريغي، سالسا، سامبا'],
          ['صالة الرقص', 'نعم — بعد منتصف الليل'],
          ['أفضل ليلة', 'الجمعة والسبت'],
          ['الحجز', 'موصى به في عطل نهاية الأسبوع'],
        ],
      },
    },
    {
      heading: 'لو كابيستان — عشاء فاخر على البحر',
      paragraphs: [
        'لو كابيستان هو الأكثر درامية في الدار البيضاء — على صخرة فوق المحيط الأطلسي على الكورنيش، مع نوافذ من الأرض للسقف ومدخل عبر ممر مشجر فريد من نوعه في المغرب. المطبخ متوسطي-فرنسي مع التركيز على المأكولات البحرية المغربية.',
        'ميزانية 500–800 درهم للشخص للعشاء مع النبيذ. البرانش الأحد (من 200 درهم) ممتاز. يعمل لو كابيستان أيضاً كمحطة كوكتيل عند غروب الشمس — اصل الساعة 7 مساءً، اطلب المشروبات عند البار، شاهد الأطلسي.',
      ],
      table: {
        caption: 'لو كابيستان — معلومات أساسية',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['العنوان', 'كورنيش عين الذئاب، الدار البيضاء'],
          ['أوقات العمل', 'يومياً 12:00 – 03:00'],
          ['ميزانية العشاء', '500–800 درهم/شخص (46–73€) مع النبيذ'],
          ['برانش الأحد', 'من 200 درهم (18€)'],
          ['المطبخ', 'متوسطي-فرنسي، مأكولات بحرية مغربية'],
          ['كود اللباس', 'سمارت كاجوال إلى رسمي'],
          ['الحجز', 'ضروري في عطل نهاية الأسبوع'],
          ['الأنسب لـ', 'عشاء رومانسي، كوكتيلات غروب الشمس'],
        ],
      },
    },
    {
      heading: 'دار دادا — مطبخ مغربي أصيل مع ترفيه حي',
      paragraphs: [
        'دار دادا هي أفضل عنوان في الدار البيضاء لتجربة الطعام المغربي التقليدي الكاملة مع ترفيه حي. تقع في قلب المدينة العتيقة قرب المارينا، يتسع المطعم لـ250 شخصاً ويستضيف موسيقى وترفيهاً مغربياً معظم الأمسيات. تجمع القائمة الأطباق المغربية التقليدية مع مؤثرات لبنانية وتركية ودولية.',
        'خدمة الغداء والعشاء من الإثنين للسبت. ميزانية 250–400 درهم للشخص للوجبة الكاملة. الأجواء دافئة ومسرحية — سقوف مرسومة يدوياً وأرضيات فسيفساء وموسيقى تقليدية تُعزف في القاعة. مثالي للمجموعات والاحتفالات.',
      ],
      table: {
        caption: 'دار دادا — معلومات أساسية',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['العنوان', '31 إم إم، شارع العرصة، المدينة القديمة، الدار البيضاء'],
          ['الهاتف', '+212 661 60 26 02'],
          ['أوقات العمل', 'الإثنين–السبت 12:00–15:30 و19:00–01:00'],
          ['ميزانية العشاء', '250–400 درهم/شخص (23–37€)'],
          ['المطبخ', 'مغربي + لبناني + دولي'],
          ['الطاقة الاستيعابية', '250 جالسين، 350 حفل كوكتيل'],
          ['الترفيه', 'موسيقى مغربية حية معظم الأمسيات'],
          ['الموقع', 'dardada.com'],
          ['الحجز', 'أونلاين عبر dardada.com أو بالهاتف'],
        ],
      },
    },
    {
      heading: 'نصائح عملية للحياة الليلية في الدار البيضاء',
      paragraphs: [
        'كيف تصل: مناطق الحياة الليلية في الدار البيضاء (الكورنيش، المعاريف) أفضل وصولاً بسيارة الأجرة الصغيرة — 20–40 درهم من معظم الفنادق المركزية. استئجار سيارة من MoroccoForYou في مطار الدار البيضاء يمنحك المرونة للنزهات المسائية.',
        'الميزانية: الحياة الليلية في الدار البيضاء ليست رخيصة بالمعايير المغربية. خصص 300–600 درهم للشخص لمساء كامل (عشاء + مشروبات).',
      ],
      table: {
        caption: 'الحياة الليلية بالدار البيضاء — اقتراحات برنامج المساء',
        headers: ['الوقت', 'النشاط', 'الميزانية'],
        rows: [
          ['18:00–20:00', 'كوكتيلات غروب الشمس في Sky 28 أو لو كابيستان', '120–200 درهم'],
          ['20:00–22:00', 'عشاء في دار دادا أو ريك كافيه', '300–600 درهم'],
          ['22:00–00:00', 'موسيقى حية في لا بوديغا أو ريك كافيه', '100–200 درهم'],
          ['00:00–03:00', 'مشروبات أخيرة في Sky 28 أو نوادي الكورنيش', '150–300 درهم'],
        ],
      },
      callout: {
        label: '💡 نصيحة MoroccoForYou',
        body: 'استأجر سيارة من مطار CMN من 320 درهم/يوم واستكشف الكورنيش بحرية. MoroccoForYou Cars يوصل إلى CMN 24/7 — احجز عبر واتساب للتأكيد الفوري وتوصية مجانية بأفضل الأماكن الليلية بالقرب من فندقك.',
      },
    },
  ],
  faqs: [
    {
      question: 'هل الحياة الليلية آمنة في الدار البيضاء للسياح؟',
      answer: 'نعم — الدار البيضاء هي أكثر مدن المغرب أماناً للحياة الليلية. مناطق الكورنيش والمعاريف تملك حضوراً شرطياً جيداً. استخدم سيارات الأجرة الصغيرة للتنقل في وقت متأخر (20–40 درهم).',
    },
    {
      question: 'هل يمكن شرب الكحول في الدار البيضاء؟',
      answer: 'نعم — الدار البيضاء تملك أكثر مشاهد الكحول ليبرالية في المغرب. المطاعم والفنادق والبارات المرخصة تقدم الكحول. خصص 90–150 درهم للكوكتيل في معظم الأماكن.',
    },
    {
      question: 'ما أفضل حي للحياة الليلية في الدار البيضاء؟',
      answer: 'الكورنيش (البوليفار الساحلي في عين الذئاب) للمطاعم المطلة على البحر ونوادي الشاطئ، والمعاريف (وسط المدينة) للأسطح وبارات الجاز.',
    },
    {
      question: 'هل يجب الحجز مسبقاً في مطاعم الدار البيضاء؟',
      answer: 'لريك كافيه ولو كابيستان في عطل نهاية الأسبوع، احجز قبل 48 ساعة. Sky 28 ولا بوديغا ودار دادا تقبل الدخول المباشر لكن الحجز موصى به الجمعة والسبت.',
    },
    {
      question: 'متى تبدأ الحياة الليلية في الدار البيضاء؟',
      answer: 'تمتلئ المطاعم من الساعة 9:30 مساءً. تبلغ البارات ذروتها بين منتصف الليل و2 صباحاً. الدار البيضاء تعمل متأخرة بشكل ملحوظ عن المدن الأوروبية.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل الدار البيضاء جيدة للحياة الليلية؟', answer: 'نعم — تملك أفضل حياة ليلية في المغرب، مدفوعة بشباب محلي محترف وليس سياحاً. Sky 28 ولا بوديغا وريك كافيه هي أبرز الأماكن.' },
    { question: 'ما كود اللباس في بارات الدار البيضاء؟', answer: 'سمارت كاجوال في معظم الأماكن. تجنب الأحذية الرياضية والشورت في الأسطح الراقية مثل Sky 28. لا بوديغا أكثر استرخاءً.' },
    { question: 'كم تكلف أمسية في الدار البيضاء؟', answer: 'خصص 300–600 درهم (27–55€) للشخص لأمسية كاملة مع العشاء والمشروبات. أمسية كوكتيلات فقط تكلف 150–300 درهم.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['istajar-sayyara-matar-fas-al-maghrib', 'kayfa-tasil-min-matar-al-dar-al-bayda-ila-al-madina', 'nasaeh-li-ziyarat-al-maghrib-li-awwal-marra'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);