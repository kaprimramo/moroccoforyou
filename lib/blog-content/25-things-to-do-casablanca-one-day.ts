import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'things-to-do-in-casablanca-one-day';
const SLUG_FR = 'que-faire-a-casablanca-en-une-journee';
const SLUG_AR = 'ma-tafal-fi-dar-al-bayda-fi-yawm-wahid';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889677);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Things to Do in Casablanca in One Day — Perfect 2026 Itinerary',
  metaDescription: 'The perfect one-day Casablanca itinerary 2026: Hassan II Mosque, the Corniche, Old Medina, Habous Quarter and Rick\'s Café — timing, tips, and how to get around.',
  title: 'Things to Do in Casablanca in One Day: The Perfect Itinerary (2026)',
  description: 'One day in Casablanca is enough to get a real feel for the city if you plan smart. This itinerary covers the Hassan II Mosque, the Corniche, the Old Medina, the Habous Quarter and Rick\'s Café — with timing and transport tips.',
  keyword: 'things to do in casablanca one day',
  coverImage: COVER,
  coverAlt: 'Hassan II Mosque Casablanca on the Atlantic coast',
  publishedISO: '2026-06-12',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'Casablanca is often treated as a one-night stopover between the airport and "real" Morocco — but a single well-planned day here reveals a side of the country most itineraries skip entirely: French colonial Art Deco boulevards, the world\'s third-largest mosque sitting directly on the Atlantic, and a relaxed Corniche promenade that feels more like the Riviera than the Sahara. Here is exactly how to spend one day in Casablanca, hour by hour.',
  sections: [
    {
      heading: 'The 3 Rules for a Good One Day in Casablanca',
      paragraphs: [
        'Casablanca rewards travelers who plan with intention rather than trying to see everything. Three principles make the difference between a frustrating day and a great one.',
        'Focus on zones, not a checklist: group sights by area (city centre / Old Medina, then the Corniche) so you are not crossing the city back and forth.',
        'Save the Hassan II Mosque for the right time: morning light on the ocean side is spectacular, and guided tour times are fixed — check the schedule and build your day around it.',
        'Less is more: Casablanca is a big, modern city. Trying to "do everything" leaves you exhausted and rushing through the highlights. Pick 4–5 key stops and enjoy them properly.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'Most of Casablanca\'s key sights are spread across the city, so taxis are the most practical way to get around for a one-day visit — a ride between most central points costs 20–40 MAD. Agree on a price or insist the meter is switched on before you set off.',
      },
    },
    {
      heading: 'Morning: Hassan II Mosque (9:00–11:00)',
      paragraphs: [
        'Start your day at the Hassan II Mosque — the third-largest mosque in the world and the only one in Morocco that non-Muslims can enter. Built directly over the Atlantic Ocean, with a 210-metre minaret (the tallest in the world), its mosaic-tiled courtyards, carved stone, and ocean views are genuinely awe-inspiring, especially in the morning light.',
        'Guided tours run several times a day and are the only way to see the interior — check the schedule in advance since times can shift. Dress modestly (covered shoulders and knees for both men and women; headscarves available for women if needed). Allow about an hour for the tour plus time to walk the surrounding esplanade.',
      ],
      table: {
        caption: 'Hassan II Mosque — visitor information',
        headers: ['Detail', 'Information'],
        rows: [
          ['Status', 'Only mosque in Morocco open to non-Muslims'],
          ['Size', '3rd largest mosque in the world'],
          ['Minaret height', '210 metres — tallest minaret in the world'],
          ['Visit method', 'Guided tour only — fixed times, check schedule'],
          ['Dress code', 'Covered shoulders and knees; headscarves available'],
          ['Best time', 'Morning — best light on the ocean side'],
          ['Nearby', 'Le Hammam spa located beneath the mosque'],
        ],
      },
    },
    {
      heading: 'Late Morning: Old Medina and Mohammed V Square (11:00–13:00)',
      paragraphs: [
        'From the mosque, take a short taxi ride (10–15 minutes) to the Old Medina — Casablanca\'s oldest district, a maze of narrow lanes with small shops, cafés, and a more local, lived-in atmosphere than the polished medinas of Marrakech or Fes. It is compact and easy to explore on foot in 45 minutes to an hour.',
        'Continue on foot or by short taxi to Mohammed V Square (Place des Nations Unies) and the surrounding government buildings — a showcase of the French colonial "Mauresque" architectural style that blends traditional Moroccan decoration with 1920s–30s Art Deco. The nearby Cathédrale du Sacré-Cœur, a striking former church now used for cultural events, is also worth a photo stop.',
      ],
    },
    {
      heading: 'Lunch: Choose Wisely (13:00–14:30)',
      paragraphs: [
        'Lunch is a good moment to slow down. For a traditional Moroccan meal with atmosphere, head toward the Habous Quarter (see below) or a central restaurant serving tagines and grilled fish — Casablanca\'s coastal location means seafood is a highlight everywhere. Budget 80–150 MAD for a solid lunch at a mid-range local restaurant.',
        'If you prefer something quick, the area around Mohammed V Square has plenty of cafés for a coffee and pastry break before continuing to the Habous Quarter.',
      ],
    },
    {
      heading: 'Afternoon: Habous Quarter — The "New Medina" (14:30–16:00)',
      paragraphs: [
        'The Habous Quarter (Quartier Habous) was built by the French in the 1930s as a "new medina" — a planned neighbourhood designed in traditional Moroccan style with arcaded streets, white buildings, and decorative ironwork. It is calmer and cleaner than the Old Medina, with excellent shops for leather goods, ceramics, spices, and traditional Moroccan pastries.',
        'This is one of the best places in Casablanca for souvenir shopping without the intensity of Marrakech\'s souks. The Royal Palace of Casablanca sits at the edge of the quarter (viewable from outside only).',
      ],
    },
    {
      heading: 'Late Afternoon: The Corniche (16:00–18:00)',
      paragraphs: [
        'End your day at the Corniche — Casablanca\'s Atlantic waterfront promenade in the Ain Diab district, a complete change of pace from the city centre. Long promenades run alongside the ocean, lined with cafés, beach clubs, and restaurants facing directly onto the water. This is the side of Casablanca that feels modern, open, and surprisingly European.',
        'Walk from near the Hassan II Mosque area along the coastline toward the lighthouse (Phare d\'El Hank), or simply pick a beachfront café and watch the Atlantic at sunset. Weekends are especially lively, with families, joggers, and street vendors out in force.',
      ],
      callout: {
        label: '💡 MoroccoForYou Tip',
        body: 'If you are driving yourself, the Corniche is also where several of the city\'s best evening restaurants and bars are located (see our Casablanca Nightlife Guide) — making it a natural place to end a one-day visit before dinner. Renting a car at Casablanca Airport from 250 MAD/day gives you the flexibility to combine sightseeing with an evening at the Corniche without relying on taxis.',
      },
    },
    {
      heading: 'Evening: Rick\'s Café (Optional, 19:00 onward)',
      paragraphs: [
        'If you have one evening in Casablanca, Rick\'s Café is the classic choice — a deliberate recreation of the bar from the 1942 film "Casablanca," with nightly live piano and a genuinely atmospheric dining room. It works equally well as a sit-down dinner or just a cocktail and the piano. Reservations recommended, especially at weekends.',
      ],
    },
    {
      heading: 'Getting to Casablanca City Centre from the Airport',
      paragraphs: [
        'If your one day in Casablanca starts (or ends) at the airport, the train is the cheapest and most reliable option. Trains run roughly hourly from Casablanca Mohammed V Airport (CMN) to Casa Voyageurs station, taking about 30–35 minutes, with one-way tickets around 43 MAD (€4). From Casa Voyageurs, a taxi to the Hassan II Mosque or city centre takes 15–20 minutes and costs around 20–30 MAD — agree the price or confirm the meter is on before departing.',
        'If you would rather not deal with trains and taxis, a rental car picked up directly at the airport lets you set your own pace for the day — MoroccoForYou Cars offers free meet-and-greet at CMN 24/7, with economy cars from 250 MAD/day.',
      ],
      table: {
        caption: 'Airport to city centre — options',
        headers: ['Option', 'Time', 'Cost'],
        rows: [
          ['Train (CMN → Casa Voyageurs)', '~30–35 min', '~43 MAD (€4) one-way'],
          ['Taxi (Casa Voyageurs → Mosque/centre)', '~15–20 min', '~20–30 MAD (€2–3)'],
          ['Direct taxi (airport → city centre)', '~45 min (traffic dependent)', '~250–300 MAD fixed rate'],
          ['Rental car (self-drive)', 'Flexible', 'From 250 MAD/day, unlimited mileage'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Is one day enough to see Casablanca?',
      answer: 'Yes — one focused day covers the highlights well: Hassan II Mosque, the Old Medina, Mohammed V Square, the Habous Quarter, and the Corniche. It is not enough to "do everything," but it gives a genuine sense of the city if you plan by zone rather than trying to see every attraction.',
    },
    {
      question: 'What is the most important thing to see in Casablanca?',
      answer: 'The Hassan II Mosque — the third-largest mosque in the world, built over the Atlantic Ocean, and the only mosque in Morocco open to non-Muslim visitors. If you only have time for one stop, make it this one, ideally in the morning.',
    },
    {
      question: 'How do I get around Casablanca in one day?',
      answer: 'Taxis are the most practical option for a one-day visit — most central rides cost 20–40 MAD. Agree on the price beforehand or ensure the meter is used. A rental car offers more flexibility if you want to combine the city visit with onward travel.',
    },
    {
      question: 'Is Rick\'s Café worth visiting in Casablanca?',
      answer: 'Yes — Rick\'s Café is a deliberate recreation of the bar from the 1942 film "Casablanca," with nightly live piano and a genuinely atmospheric setting. It works well for dinner or just a cocktail in the evening. Book ahead, especially at weekends.',
    },
    {
      question: 'What should I wear to visit the Hassan II Mosque?',
      answer: 'Modest dress is required for both men and women — covered shoulders and knees. Headscarves are available for women if needed. The mosque can only be visited as part of a guided tour, so check the schedule before you arrive.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I visit Casablanca on a layover?', answer: 'Yes — the Hassan II Mosque and city centre are reachable from CMN airport by train (about 30–35 minutes to Casa Voyageurs) plus a short taxi. A layover of 5–6 hours is enough for the mosque and a walk through the city centre.' },
    { question: 'What is the Corniche in Casablanca?', answer: 'The Corniche is Casablanca\'s Atlantic waterfront promenade in the Ain Diab district — lined with cafés, beach clubs and restaurants facing the ocean. It offers a more relaxed, modern side of the city compared to the centre.' },
    { question: 'Is Casablanca worth visiting if I am going to Marrakech anyway?', answer: 'Yes — Casablanca offers a different, more modern side of Morocco than Marrakech\'s medina-focused experience. Even a single day adds real contrast to a Morocco itinerary, especially around the Hassan II Mosque and the Corniche.' },
  ],
  relatedDestinations: ['casablanca', 'rabat', 'marrakech'],
  relatedPosts: ['casablanca-nightlife-guide-tourists', 'how-to-get-from-casablanca-airport-to-city-centre', 'best-car-to-rent-in-casablanca-morocco'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Que Faire à Casablanca en Une Journée — Itinéraire Parfait 2026',
  metaDescription: 'L\'itinéraire parfait pour une journée à Casablanca en 2026 : Mosquée Hassan II, la Corniche, l\'Ancienne Médina, le Quartier Habous et Rick\'s Café — horaires, conseils et transport.',
  title: 'Que Faire à Casablanca en Une Journée : L\'Itinéraire Parfait (2026)',
  description: 'Une journée à Casablanca suffit pour ressentir la vraie atmosphère de la ville si vous planifiez intelligemment. Cet itinéraire couvre la Mosquée Hassan II, la Corniche, l\'Ancienne Médina, le Quartier Habous et Rick\'s Café.',
  keyword: 'que faire a casablanca en une journee',
  coverImage: COVER,
  coverAlt: 'Mosquée Hassan II Casablanca sur la côte atlantique',
  publishedISO: '2026-06-12',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'Casablanca est souvent vue comme une simple escale d\'une nuit entre l\'aéroport et le "vrai" Maroc — mais une seule journée bien planifiée révèle une facette du pays que la plupart des itinéraires ignorent complètement : des boulevards Art Déco coloniaux français, la troisième plus grande mosquée du monde posée directement sur l\'Atlantique, et une promenade de la Corniche qui ressemble plus à la Riviera qu\'au Sahara. Voici exactement comment passer une journée à Casablanca, heure par heure.',
  sections: [
    {
      heading: 'Les 3 règles pour une bonne journée à Casablanca',
      paragraphs: [
        'Casablanca récompense les voyageurs qui planifient avec intention plutôt que d\'essayer de tout voir. Trois principes font la différence entre une journée frustrante et une journée réussie.',
        'Concentrez-vous sur des zones, pas une liste : regroupez les sites par secteur (centre-ville / Ancienne Médina, puis la Corniche) pour ne pas traverser la ville en tous sens.',
        'Réservez la Mosquée Hassan II pour le bon moment : la lumière du matin côté océan est spectaculaire, et les horaires de visite guidée sont fixes — vérifiez le planning et construisez votre journée autour.',
        'Moins, c\'est plus : Casablanca est une grande ville moderne. Essayer de "tout faire" épuise et fait courir entre les sites. Choisissez 4-5 arrêts clés et profitez-en pleinement.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'La plupart des sites clés de Casablanca sont répartis dans la ville, donc les taxis sont le moyen le plus pratique pour se déplacer en une journée — un trajet entre points centraux coûte 20–40 MAD. Convenez d\'un prix ou insistez pour que le compteur soit allumé avant de partir.',
      },
    },
    {
      heading: 'Matin : Mosquée Hassan II (9h00–11h00)',
      paragraphs: [
        'Commencez votre journée à la Mosquée Hassan II — la troisième plus grande mosquée du monde et la seule du Maroc ouverte aux non-musulmans. Construite directement au-dessus de l\'océan Atlantique, avec un minaret de 210 mètres (le plus haut du monde), ses cours en mosaïque, sa pierre sculptée et ses vues sur l\'océan sont vraiment impressionnantes, surtout à la lumière du matin.',
        'Des visites guidées ont lieu plusieurs fois par jour et c\'est le seul moyen de voir l\'intérieur — vérifiez le planning à l\'avance car les horaires peuvent changer. Tenue modeste requise (épaules et genoux couverts pour hommes et femmes ; foulards disponibles pour les femmes si besoin). Comptez environ une heure pour la visite plus le temps de marcher sur l\'esplanade environnante.',
      ],
      table: {
        caption: 'Mosquée Hassan II — informations visiteurs',
        headers: ['Détail', 'Information'],
        rows: [
          ['Statut', 'Seule mosquée du Maroc ouverte aux non-musulmans'],
          ['Taille', '3e plus grande mosquée du monde'],
          ['Hauteur minaret', '210 mètres — minaret le plus haut du monde'],
          ['Méthode de visite', 'Visite guidée uniquement — horaires fixes, vérifiez le planning'],
          ['Code vestimentaire', 'Épaules et genoux couverts ; foulards disponibles'],
          ['Meilleur moment', 'Matin — meilleure lumière côté océan'],
          ['À proximité', 'Spa Le Hammam situé sous la mosquée'],
        ],
      },
    },
    {
      heading: 'Fin de matinée : Ancienne Médina et Place Mohammed V (11h00–13h00)',
      paragraphs: [
        'Depuis la mosquée, prenez un court trajet en taxi (10–15 min) jusqu\'à l\'Ancienne Médina — le plus ancien quartier de Casablanca, un dédale de ruelles étroites avec de petites boutiques, cafés et une atmosphère plus locale et vécue que les médinas léchées de Marrakech ou Fès. Compact, facile à explorer à pied en 45 minutes à une heure.',
        'Continuez à pied ou en court taxi jusqu\'à la Place Mohammed V (Place des Nations Unies) et les bâtiments administratifs environnants — une vitrine du style architectural colonial français "mauresque" qui mêle décoration marocaine traditionnelle et Art Déco des années 1920-30. La Cathédrale du Sacré-Cœur voisine, ancienne église désormais utilisée pour des événements culturels, vaut aussi un arrêt photo.',
      ],
    },
    {
      heading: 'Déjeuner : choisissez judicieusement (13h00–14h30)',
      paragraphs: [
        'Le déjeuner est un bon moment pour ralentir. Pour un repas marocain traditionnel avec ambiance, dirigez-vous vers le Quartier Habous (voir ci-dessous) ou un restaurant central servant tajines et poisson grillé — la position côtière de Casablanca fait des fruits de mer un point fort partout. Comptez 80–150 MAD pour un bon déjeuner dans un restaurant local de milieu de gamme.',
        'Si vous préférez quelque chose de rapide, le secteur autour de la Place Mohammed V regorge de cafés pour une pause café-pâtisserie avant de continuer vers le Quartier Habous.',
      ],
    },
    {
      heading: 'Après-midi : Quartier Habous — la "Nouvelle Médina" (14h30–16h00)',
      paragraphs: [
        'Le Quartier Habous a été construit par les Français dans les années 1930 comme une "nouvelle médina" — un quartier planifié de style marocain traditionnel avec rues à arcades, bâtiments blancs et ferronnerie décorative. Plus calme et propre que l\'Ancienne Médina, avec d\'excellentes boutiques de cuir, céramiques, épices et pâtisseries marocaines traditionnelles.',
        'C\'est l\'un des meilleurs endroits de Casablanca pour le shopping souvenirs sans l\'intensité des souks de Marrakech. Le Palais Royal de Casablanca se trouve à la limite du quartier (visible seulement depuis l\'extérieur).',
      ],
    },
    {
      heading: 'Fin d\'après-midi : la Corniche (16h00–18h00)',
      paragraphs: [
        'Terminez votre journée à la Corniche — la promenade atlantique de Casablanca dans le quartier d\'Ain Diab, un changement de rythme complet par rapport au centre-ville. De longues promenades courent le long de l\'océan, bordées de cafés, clubs de plage et restaurants donnant directement sur l\'eau. C\'est la facette de Casablanca qui semble moderne, ouverte et étonnamment européenne.',
        'Marchez depuis la zone de la Mosquée Hassan II le long de la côte vers le phare (Phare d\'El Hank), ou installez-vous simplement dans un café face à la mer pour regarder l\'Atlantique au coucher du soleil. Les week-ends sont particulièrement animés, avec familles, joggeurs et vendeurs de rue.',
      ],
      callout: {
        label: '💡 Conseil MoroccoForYou',
        body: 'Si vous conduisez vous-même, la Corniche est aussi l\'endroit où se trouvent plusieurs des meilleurs restaurants et bars du soir de la ville (voir notre Guide Vie Nocturne Casablanca) — un lieu naturel pour terminer une journée avant le dîner. Louer une voiture à l\'aéroport de Casablanca dès 250 MAD/jour vous donne la liberté de combiner visites et soirée à la Corniche sans dépendre des taxis.',
      },
    },
    {
      heading: 'Soir : Rick\'s Café (optionnel, à partir de 19h00)',
      paragraphs: [
        'Si vous avez une soirée à Casablanca, Rick\'s Café est le choix classique — une recréation délibérée du bar du film "Casablanca" de 1942, avec piano live tous les soirs et une salle vraiment atmosphérique. Cela fonctionne aussi bien pour un dîner assis qu\'un simple cocktail avec le piano. Réservation recommandée, surtout le week-end.',
      ],
    },
    {
      heading: 'Rejoindre le centre-ville de Casablanca depuis l\'aéroport',
      paragraphs: [
        'Si votre journée à Casablanca commence (ou se termine) à l\'aéroport, le train est l\'option la moins chère et la plus fiable. Les trains partent environ chaque heure de l\'aéroport Mohammed V (CMN) vers la gare Casa Voyageurs, environ 30–35 minutes, billets aller simple autour de 43 MAD (4€). Depuis Casa Voyageurs, un taxi vers la Mosquée Hassan II ou le centre-ville prend 15–20 minutes et coûte environ 20–30 MAD.',
        'Si vous préférez éviter trains et taxis, une voiture de location récupérée directement à l\'aéroport vous laisse fixer votre propre rythme — MoroccoForYou Cars offre un accueil gratuit à CMN 24h/24, voitures économiques dès 250 MAD/jour.',
      ],
      table: {
        caption: 'Aéroport vers centre-ville — options',
        headers: ['Option', 'Durée', 'Coût'],
        rows: [
          ['Train (CMN → Casa Voyageurs)', '~30–35 min', '~43 MAD (4€) aller simple'],
          ['Taxi (Casa Voyageurs → Mosquée/centre)', '~15–20 min', '~20–30 MAD (2–3€)'],
          ['Taxi direct (aéroport → centre-ville)', '~45 min (selon trafic)', '~250–300 MAD forfait'],
          ['Voiture de location (autonome)', 'Flexible', 'Dès 250 MAD/jour, km illimité'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Une journée suffit-elle pour voir Casablanca ?',
      answer: 'Oui — une journée bien organisée couvre les points forts : Mosquée Hassan II, Ancienne Médina, Place Mohammed V, Quartier Habous et la Corniche. Ce n\'est pas suffisant pour "tout faire", mais cela donne un véritable aperçu de la ville si vous planifiez par zone plutôt que d\'essayer de voir chaque attraction.',
    },
    {
      question: 'Quelle est la chose la plus importante à voir à Casablanca ?',
      answer: 'La Mosquée Hassan II — la troisième plus grande mosquée du monde, construite au-dessus de l\'océan Atlantique, et la seule mosquée du Maroc ouverte aux visiteurs non-musulmans. Si vous n\'avez le temps que pour un arrêt, faites celui-ci, idéalement le matin.',
    },
    {
      question: 'Comment se déplacer à Casablanca en une journée ?',
      answer: 'Les taxis sont l\'option la plus pratique pour une visite d\'une journée — la plupart des trajets centraux coûtent 20–40 MAD. Convenez du prix au préalable ou assurez-vous que le compteur est utilisé. Une voiture de location offre plus de flexibilité.',
    },
    {
      question: 'Rick\'s Café vaut-il une visite à Casablanca ?',
      answer: 'Oui — Rick\'s Café est une recréation délibérée du bar du film "Casablanca" de 1942, avec piano live tous les soirs et une ambiance vraiment particulière. Cela fonctionne bien pour le dîner ou juste un cocktail le soir. Réservez à l\'avance, surtout le week-end.',
    },
    {
      question: 'Que dois-je porter pour visiter la Mosquée Hassan II ?',
      answer: 'Une tenue modeste est requise pour les hommes et les femmes — épaules et genoux couverts. Des foulards sont disponibles pour les femmes si besoin. La mosquée ne peut être visitée que dans le cadre d\'une visite guidée, donc vérifiez le planning avant d\'arriver.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on visiter Casablanca lors d\'une escale ?', answer: 'Oui — la Mosquée Hassan II et le centre-ville sont accessibles depuis l\'aéroport CMN par train (environ 30–35 minutes jusqu\'à Casa Voyageurs) plus un court taxi. Une escale de 5–6 heures suffit pour la mosquée et une promenade en centre-ville.' },
    { question: 'Qu\'est-ce que la Corniche à Casablanca ?', answer: 'La Corniche est la promenade atlantique de Casablanca dans le quartier d\'Ain Diab — bordée de cafés, clubs de plage et restaurants face à l\'océan. Elle offre une facette plus détendue et moderne de la ville par rapport au centre.' },
    { question: 'Casablanca vaut-elle le détour si je vais à Marrakech de toute façon ?', answer: 'Oui — Casablanca offre une facette différente et plus moderne du Maroc que l\'expérience centrée sur la médina de Marrakech. Même une seule journée ajoute un vrai contraste à un itinéraire marocain, surtout autour de la Mosquée Hassan II et de la Corniche.' },
  ],
  relatedDestinations: ['casablanca', 'rabat', 'marrakech'],
  relatedPosts: ['dalil-al-hayat-al-layliya-dar-al-bayda', 'kayfa-tasil-min-matar-al-dar-al-bayda-ila-al-madina', 'afdal-sayyara-listajar-fi-dar-al-bayda'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'ماذا تفعل في الدار البيضاء في يوم واحد — برنامج مثالي 2026',
  metaDescription: 'برنامج يوم واحد مثالي في الدار البيضاء 2026: مسجد الحسن الثاني والكورنيش والمدينة القديمة وحي الحبوس وريك كافيه — التوقيت والنصائح والتنقل.',
  title: 'ماذا تفعل في الدار البيضاء في يوم واحد: البرنامج المثالي (2026)',
  description: 'يوم واحد في الدار البيضاء كافٍ للحصول على شعور حقيقي بالمدينة إذا خططت بذكاء. يغطي هذا البرنامج مسجد الحسن الثاني والكورنيش والمدينة القديمة وحي الحبوس وريك كافيه.',
  keyword: 'ماذا تفعل في الدار البيضاء في يوم واحد',
  coverImage: COVER,
  coverAlt: 'مسجد الحسن الثاني الدار البيضاء على الساحل الأطلسي',
  publishedISO: '2026-06-12',
  author: 'فريق MoroccoForYou',
  readingMinutes: 9,
  intro: 'كثيراً ما تُعامَل الدار البيضاء كمحطة توقف ليلة واحدة بين المطار و"المغرب الحقيقي" — لكن يوماً واحداً مخططاً جيداً هنا يكشف جانباً من البلاد تتجاهله معظم البرامج تماماً: شوارع آرت ديكو الاستعمارية الفرنسية، وثالث أكبر مسجد في العالم يقع مباشرة على الأطلسي، وممشى كورنيش هادئ يشبه ريفييرا أكثر من الصحراء. إليك بالضبط كيف تقضي يوماً في الدار البيضاء، ساعة بساعة.',
  sections: [
    {
      heading: 'القواعد الثلاث ليوم جيد في الدار البيضاء',
      paragraphs: [
        'الدار البيضاء تكافئ المسافرين الذين يخططون بقصد بدل محاولة رؤية كل شيء. ثلاثة مبادئ تصنع الفرق بين يوم محبط ويوم رائع.',
        'ركّز على المناطق لا على القائمة: اجمع المعالم حسب المنطقة (وسط المدينة/المدينة القديمة، ثم الكورنيش) لتجنب التنقل عبر المدينة جيئة وذهاباً.',
        'احتفظ بمسجد الحسن الثاني للوقت المناسب: ضوء الصباح على جانب المحيط مذهل، ومواعيد الزيارات المرشدة ثابتة — تحقق من الجدول وبني يومك حوله.',
        'الأقل أفضل: الدار البيضاء مدينة كبيرة وحديثة. محاولة "فعل كل شيء" تترك المرء مرهقاً ومتسرعاً. اختر 4-5 محطات أساسية واستمتع بها بشكل صحيح.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'معظم معالم الدار البيضاء الأساسية منتشرة في المدينة، فسيارات الأجرة هي الطريقة الأكثر عملية للتنقل في زيارة يوم واحد — تكلف الرحلة بين النقاط المركزية 20–40 درهم. اتفق على السعر أو تأكد من تشغيل العداد قبل الانطلاق.',
      },
    },
    {
      heading: 'الصباح: مسجد الحسن الثاني (9:00–11:00)',
      paragraphs: [
        'ابدأ يومك بمسجد الحسن الثاني — ثالث أكبر مسجد في العالم والمسجد الوحيد في المغرب المفتوح لغير المسلمين. مبني مباشرة فوق المحيط الأطلسي، بمنارة ارتفاعها 210 متر (الأعلى في العالم)، وساحاته المرصعة بالفسيفساء وحجره المنحوت وإطلالاته على المحيط مذهلة حقاً، خاصة في ضوء الصباح.',
        'تُقام الزيارات المرشدة عدة مرات يومياً وهي الطريقة الوحيدة لرؤية الداخل — تحقق من الجدول مسبقاً لأن المواعيد قد تتغير. اللباس المتواضع مطلوب (أكتاف وركبتين مغطاة للرجال والنساء؛ أوشحة متاحة للنساء عند الحاجة). خصص حوالي ساعة للزيارة بالإضافة لوقت المشي حول الساحة المحيطة.',
      ],
      table: {
        caption: 'مسجد الحسن الثاني — معلومات للزوار',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['الوضع', 'المسجد الوحيد في المغرب المفتوح لغير المسلمين'],
          ['الحجم', 'ثالث أكبر مسجد في العالم'],
          ['ارتفاع المنارة', '210 متر — أعلى منارة في العالم'],
          ['طريقة الزيارة', 'زيارة مرشدة فقط — مواعيد ثابتة، تحقق من الجدول'],
          ['كود اللباس', 'أكتاف وركبتين مغطاة؛ أوشحة متاحة'],
          ['أفضل وقت', 'الصباح — أفضل ضوء على جانب المحيط'],
          ['قريب منه', 'سبا لو حمّام يقع تحت المسجد'],
        ],
      },
    },
    {
      heading: 'أواخر الصباح: المدينة القديمة وساحة محمد الخامس (11:00–13:00)',
      paragraphs: [
        'من المسجد، اركب سيارة أجرة قصيرة (10–15 دقيقة) إلى المدينة القديمة — أقدم حي في الدار البيضاء، متاهة من الأزقة الضيقة بمحلات صغيرة ومقاهي وأجواء محلية أكثر من المدن العتيقة المصقولة في مراكش أو فاس. مدمجة وسهلة الاستكشاف سيراً على الأقدام في 45 دقيقة إلى ساعة.',
        'استمر سيراً أو بسيارة أجرة قصيرة إلى ساحة محمد الخامس (ساحة الأمم المتحدة) والمباني الحكومية المحيطة — واجهة للنمط المعماري الاستعماري الفرنسي "المغاربي" الذي يمزج الزخرفة المغربية التقليدية بالآرت ديكو من عشرينيات وثلاثينيات القرن الماضي. كاتدرائية القلب المقدس القريبة، كنيسة سابقة تُستخدم الآن لفعاليات ثقافية، تستحق أيضاً وقفة للتصوير.',
      ],
    },
    {
      heading: 'الغداء: اختر بحكمة (13:00–14:30)',
      paragraphs: [
        'الغداء لحظة جيدة للتمهل. لوجبة مغربية تقليدية بأجواء، توجه نحو حي الحبوس (انظر أدناه) أو مطعم وسط المدينة يقدم الطاجين والسمك المشوي — موقع الدار البيضاء الساحلي يجعل المأكولات البحرية نقطة بارزة في كل مكان. خصص 80–150 درهم لغداء جيد في مطعم محلي متوسط.',
        'إذا فضّلت شيئاً سريعاً، المنطقة حول ساحة محمد الخامس مليئة بالمقاهي لاستراحة قهوة وحلوى قبل الاستمرار إلى حي الحبوس.',
      ],
    },
    {
      heading: 'بعد الظهر: حي الحبوس — "المدينة الجديدة" (14:30–16:00)',
      paragraphs: [
        'بُني حي الحبوس من قبل الفرنسيين في الثلاثينيات كـ"مدينة جديدة" — حي مخطط بأسلوب مغربي تقليدي بشوارع ذات أقواس ومباني بيضاء وحدادة زخرفية. أكثر هدوءاً ونظافة من المدينة القديمة، بمحلات ممتازة للجلود والخزف والتوابل والحلويات المغربية التقليدية.',
        'إنه من أفضل أماكن التسوق للهدايا التذكارية في الدار البيضاء دون كثافة أسواق مراكش. يقع القصر الملكي بالدار البيضاء على حدود الحي (يُشاهَد من الخارج فقط).',
      ],
    },
    {
      heading: 'أواخر العصر: الكورنيش (16:00–18:00)',
      paragraphs: [
        'اختم يومك بالكورنيش — ممشى الدار البيضاء الأطلسي في حي عين الذئاب، تغيير كامل في الإيقاع عن وسط المدينة. ممرات طويلة تمتد بجانب المحيط، مع مقاهي ونوادي شاطئ ومطاعم تواجه الماء مباشرة. هذا هو جانب الدار البيضاء الذي يبدو حديثاً ومنفتحاً وأوروبياً بشكل مفاجئ.',
        'سر من منطقة مسجد الحسن الثاني على طول الساحل نحو المنارة (فار الهنك)، أو اختر مقهى على الشاطئ وشاهد الأطلسي عند الغروب. عطل نهاية الأسبوع حيوية بشكل خاص، بعائلات وعدّائين وبائعين متجولين.',
      ],
      callout: {
        label: '💡 نصيحة MoroccoForYou',
        body: 'إذا كنت تقود سيارتك الخاصة، الكورنيش هو أيضاً مكان عدة من أفضل مطاعم وبارات المساء بالمدينة (انظر دليلنا للحياة الليلية بالدار البيضاء) — مكان طبيعي لإنهاء يوم قبل العشاء. استئجار سيارة من مطار الدار البيضاء من 250 درهم/يوم يمنحك حرية الجمع بين السياحة وأمسية في الكورنيش دون الاعتماد على سيارات الأجرة.',
      },
    },
    {
      heading: 'المساء: ريك كافيه (اختياري، من 19:00)',
      paragraphs: [
        'إذا كانت لديك أمسية في الدار البيضاء، ريك كافيه هو الاختيار الكلاسيكي — إعادة خلق مقصودة للبار من فيلم "كازابلانكا" 1942، مع بيانو حي كل ليلة وغرفة طعام عاطفية حقاً. يعمل بشكل جيد للعشاء أو فقط كوكتيل مع البيانو. الحجز موصى به، خاصة عطل نهاية الأسبوع.',
      ],
    },
    {
      heading: 'الوصول إلى وسط الدار البيضاء من المطار',
      paragraphs: [
        'إذا كان يومك في الدار البيضاء يبدأ (أو ينتهي) في المطار، القطار هو الخيار الأرخص والأكثر موثوقية. تنطلق القطارات تقريباً كل ساعة من مطار محمد الخامس (CMN) إلى محطة كاسا فوياجور، حوالي 30–35 دقيقة، تذاكر الاتجاه الواحد حوالي 43 درهم (4€). من كاسا فوياجور، سيارة أجرة إلى مسجد الحسن الثاني أو وسط المدينة تستغرق 15–20 دقيقة وتكلف حوالي 20–30 درهم.',
        'إذا فضّلت عدم التعامل مع القطارات وسيارات الأجرة، سيارة إيجار تستلمها مباشرة من المطار تتيح لك تحديد سرعتك الخاصة لليوم — MoroccoForYou Cars تقدم استقبالاً مجانياً في CMN على مدار الساعة، سيارات اقتصادية من 250 درهم/يوم.',
      ],
      table: {
        caption: 'المطار إلى وسط المدينة — الخيارات',
        headers: ['الخيار', 'الوقت', 'التكلفة'],
        rows: [
          ['قطار (CMN → كاسا فوياجور)', '~30–35 دقيقة', '~43 درهم (4€) اتجاه واحد'],
          ['سيارة أجرة (كاسا فوياجور → المسجد/الوسط)', '~15–20 دقيقة', '~20–30 درهم (2–3€)'],
          ['سيارة أجرة مباشرة (مطار → وسط المدينة)', '~45 دقيقة (حسب الزحمة)', '~250–300 درهم سعر ثابت'],
          ['سيارة إيجار (قيادة ذاتية)', 'مرن', 'من 250 درهم/يوم، كيلومترات غير محدودة'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'هل يكفي يوم واحد لرؤية الدار البيضاء؟',
      answer: 'نعم — يوم منظم جيداً يغطي أبرز المعالم: مسجد الحسن الثاني، المدينة القديمة، ساحة محمد الخامس، حي الحبوس والكورنيش. ليس كافياً لـ"فعل كل شيء"، لكنه يعطي شعوراً حقيقياً بالمدينة إذا خططت حسب المنطقة بدل محاولة رؤية كل معلم.',
    },
    {
      question: 'ما أهم شيء يجب رؤيته في الدار البيضاء؟',
      answer: 'مسجد الحسن الثاني — ثالث أكبر مسجد في العالم، مبني فوق المحيط الأطلسي، والمسجد الوحيد في المغرب المفتوح للزوار غير المسلمين. إن كان لديك وقت لمحطة واحدة فقط، اجعلها هذه، ويفضل في الصباح.',
    },
    {
      question: 'كيف أتنقل في الدار البيضاء في يوم واحد؟',
      answer: 'سيارات الأجرة هي الخيار الأكثر عملية لزيارة يوم واحد — معظم الرحلات المركزية تكلف 20–40 درهم. اتفق على السعر مسبقاً أو تأكد من استخدام العداد. سيارة الإيجار توفر مرونة أكبر.',
    },
    {
      question: 'هل يستحق ريك كافيه الزيارة في الدار البيضاء؟',
      answer: 'نعم — ريك كافيه إعادة خلق مقصودة لبار فيلم "كازابلانكا" 1942، مع بيانو حي كل ليلة وأجواء مميزة حقاً. يعمل جيداً للعشاء أو فقط كوكتيل في المساء. احجز مسبقاً، خاصة عطل نهاية الأسبوع.',
    },
    {
      question: 'ما الذي يجب أن أرتديه لزيارة مسجد الحسن الثاني؟',
      answer: 'اللباس المتواضع مطلوب للرجال والنساء — أكتاف وركبتين مغطاة. أوشحة متاحة للنساء عند الحاجة. لا يمكن زيارة المسجد إلا كجزء من زيارة مرشدة، فتحقق من الجدول قبل الوصول.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يمكن زيارة الدار البيضاء خلال ترانزيت؟', answer: 'نعم — مسجد الحسن الثاني ووسط المدينة يمكن الوصول إليهما من مطار CMN بالقطار (حوالي 30–35 دقيقة إلى كاسا فوياجور) بالإضافة لسيارة أجرة قصيرة. ترانزيت من 5–6 ساعات كافٍ للمسجد ونزهة في وسط المدينة.' },
    { question: 'ما هو الكورنيش في الدار البيضاء؟', answer: 'الكورنيش هو ممشى الدار البيضاء الأطلسي في حي عين الذئاب — مليء بالمقاهي ونوادي الشاطئ والمطاعم المواجهة للمحيط. يقدم جانباً أكثر استرخاءً وحداثة من المدينة مقارنة بالوسط.' },
    { question: 'هل تستحق الدار البيضاء الزيارة إذا كنت ذاهباً لمراكش على أي حال؟', answer: 'نعم — تقدم الدار البيضاء جانباً مختلفاً وأكثر حداثة من المغرب مقارنة بتجربة مراكش المرتكزة على المدينة العتيقة. حتى يوم واحد يضيف تبايناً حقيقياً لبرنامج مغربي، خاصة حول مسجد الحسن الثاني والكورنيش.' },
  ],
  relatedDestinations: ['casablanca', 'rabat', 'marrakech'],
  relatedPosts: ['dalil-al-hayat-al-layliya-dar-al-bayda', 'kayfa-tasil-min-matar-al-dar-al-bayda-ila-al-madina', 'afdal-sayyara-listajar-fi-dar-al-bayda'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);