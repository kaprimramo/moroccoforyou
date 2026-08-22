import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'where-to-stay-essaouira-best-riads';
const SLUG_FR = 'ou-dormir-essaouira-meilleurs-riads';
const SLUG_AR = 'ayna-tuqim-essaouira';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(8428020);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Where to Stay in Essaouira 2026: Best Riads & Hotels (Madada Mogador & More)',
  metaDescription: 'Complete guide to the best riads and hotels in Essaouira 2026: Madada Mogador, Riad Jade Mogador, Atlas Essaouira and more. Real prices from $17-370/night, ratings, and which area to pick.',
  title: 'Where to Stay in Essaouira 2026: Best Riads & Hotels Compared',
  description: 'Quick answer: Essaouira has around 106 hotels and riads, concentrated mainly inside the medina walls near the port and ramparts, with a smaller cluster of larger resort-style hotels along the coast toward the golf area. This guide compares the top-rated options — Madada Mogador, Riad Jade Mogador, Atlas Essaouira Riad Resort and more — with real 2026 prices and honest notes on what each is actually like.',
  keyword: 'where to stay essaouira',
  coverImage: COVER,
  coverAlt: 'Where to stay in Essaouira 2026 — riad rooftop terrace overlooking the harbour and Atlantic Ocean at sunset',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 13,
  intro: 'Quick answer: Essaouira has approximately 106 hotels and riads, most concentrated inside the medina\'s ramparts within walking distance of the port and Place Moulay Hassan, with a second cluster of larger resort-style hotels along the coast toward the golf course area. Madada Mogador — a boutique property built into the old ramparts with panoramic bay views — consistently ranks among the top choices, alongside excellent-value options like Riad Jade Mogador. This guide compares real 2026 prices and ratings so you can pick with confidence.',
  sections: [
    {
      heading: 'Essaouira Accommodation Areas — Quick Overview',
      paragraphs: ['Essaouira\'s compact medina keeps most properties walkable, but the character shifts by location.'],
      table: {
        caption: 'Where to stay in Essaouira — areas compared 2026',
        headers: ['Area', 'Character', 'Best for'],
        rows: [
          ['Medina, near the ramparts/port', 'Historic, atmospheric, steps from the harbour and Place Moulay Hassan', 'First-timers wanting classic Essaouira charm and walkability'],
          ['Medina entrance', 'Central, easy access to both medina and beach', 'Balance of convenience and character — Madada Mogador sits here'],
          ['Coast/golf area (outside medina)', 'Larger resort-style hotels, pools, more modern amenities', 'Travelers wanting resort comforts over medina character'],
        ],
      },
    },
    {
      heading: 'Best Riads and Hotels in Essaouira — Compared',
      paragraphs: [
        'Essaouira\'s highest-rated properties range from budget riads with genuine hospitality to boutique design hotels built into the historic ramparts.',
      ],
      table: {
        caption: 'Best riads and hotels in Essaouira 2026',
        headers: ['Property', 'Rating', 'Price/night', 'Character'],
        rows: [
          ['Madada Mogador', '4/5 (626+ reviews) — ranked #12 of 106 hotels', 'From $150-370', 'Boutique design hotel built into the old ramparts near the medina entrance, panoramic bay views, on-site restaurant La Table by Madada known for seafood — reviewers consistently praise the location and terrace, though note it feels more like a European boutique hotel than a traditional courtyard riad'],
          ['Riad Jade Mogador', '8.9/10 (890+ reviews) — exceptional value', 'From $46', 'Family-run 6-room riad near the beach, cosy and traditional, guests repeatedly praise manager Khadija and staff by name for warmth and helpfulness'],
          ['Atlas Essaouira Riad Resort', '8.2/10 (809+ reviews)', 'From $118-144', 'Larger convention-style hotel with full-service spa and pool — a genuine change of pace from small medina riads, useful if you want resort amenities'],
          ['Cruiser Mogador Hospitality', '9.8/10 (small sample)', 'Not specified', 'Luxury aparthotel, free breakfast/WiFi/parking, consistently exceptional guest scores'],
          ['Essaouira Lodge', '8.4/10 (52+ reviews)', 'Varies', 'Spa hotel with attached winery outside town on the Marrakech road — a car or shuttle is genuinely necessary here'],
        ],
      },
      callout: {
        label: '💡 Which One Should You Book?',
        body: 'For boutique character with the best location and views: Madada Mogador — book a room with a private terrace if the budget allows. For the best value and genuinely warm hospitality: Riad Jade Mogador, one of Essaouira\'s highest-rated properties at a fraction of Madada\'s price. For resort comforts (pool, spa) over medina charm: Atlas Essaouira Riad Resort.',
      },
    },
    {
      heading: 'Real 2026 Prices by Budget',
      paragraphs: ['Essaouira remains one of Morocco\'s better-value coastal destinations for accommodation.'],
      table: {
        caption: 'Essaouira accommodation prices by budget 2026',
        headers: ['Budget', 'Price/night', 'What to expect'],
        rows: [
          ['Budget', '$17-46 (€16-42)', 'Riad Jade Mogador, hostels near the medina — clean, family-run, genuine hospitality'],
          ['Mid-range', '$118-150 (€109-139)', 'Atlas Essaouira Riad Resort — spa, pool, larger property amenities'],
          ['Boutique/upscale', '$150-370 (€139-342)', 'Madada Mogador — ramparts location, panoramic views, boutique design'],
        ],
      },
    },
    {
      heading: 'Booking Tips for Essaouira',
      paragraphs: ['A handful of practical notes that make the difference between a smooth stay and a frustrating one.'],
      list: [
        'Book Madada Mogador or similarly small boutique properties well ahead — with only a handful of rooms, they sell out quickly, particularly around the Gnaoua Festival in June and Moga Festival in late September/October.',
        'If you\'re driving, confirm parking directly — Madada Mogador offers low-cost on-site parking, useful if you\'re arriving with a rental car; many medina riads have no on-site parking and rely on nearby public lots.',
        'Properties outside the medina (like Essaouira Lodge on the Marrakech road) genuinely require a car or arranged shuttle — don\'t assume walkability without checking the exact address first.',
        'Wednesday tends to offer the lowest nightly rates at several properties according to booking data — worth checking if your travel dates have flexibility.',
        'Confirm breakfast inclusion before booking — most riads include it, but some larger hotels list it as an add-on.',
      ],
    },
    {
      heading: 'Getting to Essaouira and Your Riad',
      paragraphs: ['For the full picture on reaching Essaouira from Marrakech, Casablanca or elsewhere, see our complete route guides.'],
      callout: {
        label: '🚗 Renting a Car for Your Essaouira Trip',
        body: 'If you\'re combining Essaouira with a wider Morocco road trip, we arrange rental cars with free meet & greet at Marrakech or Casablanca Airport — economy from MAD 250/day (€23). See our full <a href="/blog/essaouira-travel-guide">Essaouira Travel Guide</a>, or message us on WhatsApp to arrange pickup: <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    {
      question: 'What is the best riad to stay at in Essaouira?',
      answer: 'Madada Mogador is Essaouira\'s most consistently praised boutique property (4/5 from 626+ reviews), known for its ramparts-side location and panoramic bay views, from roughly $150-370/night. For excellent value, Riad Jade Mogador (8.9/10 from 890+ reviews) offers genuinely warm family-run hospitality from around $46/night.',
    },
    {
      question: 'How much does a hotel cost in Essaouira?',
      answer: 'Budget riads run $17-46/night, mid-range spa hotels cost $118-150/night, and boutique upscale properties like Madada Mogador range $150-370/night depending on room type and season.',
    },
    {
      question: 'Which area of Essaouira should I stay in?',
      answer: 'For classic medina charm within walking distance of the port and Place Moulay Hassan, stay inside the ramparts. For a balance of convenience and character, the medina entrance area (where Madada Mogador sits) works well. For resort amenities like a pool and spa, consider properties on the coast toward the golf area.',
    },
    {
      question: 'Is Madada Mogador a traditional riad?',
      answer: 'Not entirely — reviewers and guides consistently note it has more in common with a European boutique hotel than a classic Moroccan courtyard riad, with no central courtyard but a standout rooftop terrace with ocean views. If you specifically want traditional riad architecture, look at options like Riad Jade Mogador instead.',
    },
    {
      question: 'Do I need a car to reach my Essaouira hotel?',
      answer: 'Most medina properties are fully walkable from the bus station or a taxi drop-off point. Properties outside the medina — such as Essaouira Lodge on the Marrakech road — genuinely require a car or arranged shuttle, so confirm the exact location before booking if walkability matters to you.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is the highest rated hotel in Essaouira?', answer: 'Ratings vary by platform and sample size, but Riad Jade Mogador (8.9/10 from 890+ reviews) and Cruiser Mogador Hospitality (9.8/10) both post exceptionally strong guest scores, alongside Madada Mogador\'s consistent praise for location and views.' },
    { question: 'How many hotels are there in Essaouira?', answer: 'Essaouira has approximately 106 hotels and riads listed across major booking platforms, ranging from budget guesthouses under $20/night to boutique properties over $300/night.' },
    { question: 'Is Essaouira expensive to stay in?', answer: 'Generally no — Essaouira remains one of Morocco\'s better-value coastal destinations, with clean, well-reviewed budget riads available from under $50/night, well below comparable options in Marrakech.' },
  ],
  relatedDestinations: ['essaouira', 'marrakech'],
  relatedPosts: ['essaouira-travel-guide', 'marrakech-travel-guide', 'agadir-car-rental-airport', 'best-private-morocco-tours'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Où Dormir à Essaouira 2026 : Meilleurs Riads & Hôtels (Madada Mogador et Plus)',
  metaDescription: 'Guide complet des meilleurs riads et hôtels à Essaouira 2026 : Madada Mogador, Riad Jade Mogador, Atlas Essaouira et plus. Vrais prix dès 17-370$/nuit, notes, et quel quartier choisir.',
  title: 'Où Dormir à Essaouira 2026 : Meilleurs Riads & Hôtels Comparés',
  description: 'Réponse rapide : Essaouira compte environ 106 hôtels et riads, concentrés principalement à l\'intérieur des remparts de la médina près du port, avec un plus petit groupe d\'hôtels resort le long de la côte vers la zone golf.',
  keyword: 'où dormir essaouira',
  coverImage: COVER,
  coverAlt: 'Où dormir à Essaouira 2026 — terrasse de riad sur le toit surplombant le port et l\'océan Atlantique au coucher du soleil',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 13,
  intro: 'Réponse rapide : Essaouira compte environ 106 hôtels et riads, la plupart concentrés à l\'intérieur des remparts de la médina à distance de marche du port et de la Place Moulay Hassan. Madada Mogador — propriété boutique construite dans les anciens remparts avec vues panoramiques sur la baie — se classe constamment parmi les meilleurs choix, aux côtés d\'options excellent rapport qualité-prix comme Riad Jade Mogador.',
  sections: [
    {
      heading: 'Zones d\'Hébergement à Essaouira — Aperçu Rapide',
      paragraphs: ['La médina compacte d\'Essaouira garde la plupart des propriétés praticables à pied.'],
      table: {
        caption: 'Où dormir à Essaouira — zones comparées 2026',
        headers: ['Zone', 'Caractère', 'Idéal pour'],
        rows: [
          ['Médina, près remparts/port', 'Historique, à quelques pas du port', 'Premiers visiteurs voulant le charme classique'],
          ['Entrée médina', 'Central, accès facile médina et plage', 'Équilibre commodité et caractère'],
          ['Côte/zone golf', 'Grands hôtels resort, piscines', 'Voyageurs voulant conforts resort'],
        ],
      },
    },
    {
      heading: 'Meilleurs Riads et Hôtels à Essaouira — Comparés',
      paragraphs: ['Les propriétés les mieux notées vont de riads économiques à hôtels boutique dans les anciens remparts.'],
      table: {
        caption: 'Meilleurs riads et hôtels à Essaouira 2026',
        headers: ['Propriété', 'Note', 'Prix/nuit', 'Caractère'],
        rows: [
          ['Madada Mogador', '4/5 (626+ avis) — classé #12 sur 106', 'Dès 150-370$', 'Hôtel boutique dans les anciens remparts, vues panoramiques baie'],
          ['Riad Jade Mogador', '8,9/10 (890+ avis) — valeur exceptionnelle', 'Dès 46$', 'Riad familial 6 chambres près plage, chaleureux'],
          ['Atlas Essaouira Riad Resort', '8,2/10 (809+ avis)', 'Dès 118-144$', 'Grand hôtel style congrès avec spa complet et piscine'],
          ['Essaouira Lodge', '8,4/10 (52+ avis)', 'Variable', 'Hôtel spa avec domaine viticole hors ville'],
        ],
      },
      callout: {
        label: '💡 Lequel Réserver ?',
        body: 'Pour caractère boutique avec meilleur emplacement : Madada Mogador. Pour meilleur rapport qualité-prix : Riad Jade Mogador. Pour conforts resort : Atlas Essaouira Riad Resort.',
      },
    },
    {
      heading: 'Vrais Prix 2026 par Budget',
      paragraphs: ['Essaouira reste l\'une des meilleures destinations côtières rapport qualité-prix du Maroc.'],
      table: {
        caption: 'Prix hébergement Essaouira par budget 2026',
        headers: ['Budget', 'Prix/nuit', 'À quoi s\'attendre'],
        rows: [
          ['Économique', '17-46$ (16-42€)', 'Riad Jade Mogador — propre, familial'],
          ['Milieu de gamme', '118-150$ (109-139€)', 'Atlas Essaouira Riad Resort — spa, piscine'],
          ['Boutique/haut de gamme', '150-370$ (139-342€)', 'Madada Mogador — remparts, vues panoramiques'],
        ],
      },
    },
    {
      heading: 'Conseils de Réservation pour Essaouira',
      paragraphs: ['Quelques notes pratiques qui font la différence.'],
      list: [
        'Réservez Madada Mogador bien à l\'avance — peu de chambres, réservé rapidement, surtout autour du Festival Gnaoua en juin.',
        'Si vous conduisez, confirmez le stationnement directement.',
        'Propriétés hors médina nécessitent vraiment une voiture ou navette organisée.',
        'Le mercredi tend à offrir les tarifs les plus bas selon les données de réservation.',
        'Confirmez l\'inclusion du petit-déjeuner avant réservation.',
      ],
    },
    {
      heading: 'Rejoindre Essaouira et Votre Riad',
      paragraphs: ['Pour le tableau complet sur comment rejoindre Essaouira, voir nos guides d\'itinéraires complets.'],
      callout: {
        label: '🚗 Louer une Voiture pour Votre Voyage à Essaouira',
        body: 'Si vous combinez Essaouira avec un road trip plus large, nous organisons des locations avec accueil gratuit à l\'aéroport de Marrakech ou Casablanca — économique dès MAD 250/jour (23€). Voir notre <a href="/blog/guide-voyage-essaouira">Guide Voyage Essaouira</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Quel est le meilleur riad où dormir à Essaouira ?', answer: 'Madada Mogador est la propriété boutique la plus constamment louée d\'Essaouira (4/5 sur 626+ avis), dès environ 150-370$/nuit. Pour un excellent rapport qualité-prix, Riad Jade Mogador (8,9/10 sur 890+ avis) dès environ 46$/nuit.' },
    { question: 'Combien coûte un hôtel à Essaouira ?', answer: 'Riads économiques 17-46$/nuit, hôtels spa milieu de gamme 118-150$/nuit, propriétés boutique haut de gamme 150-370$/nuit.' },
    { question: 'Dans quelle zone d\'Essaouira dois-je dormir ?', answer: 'Pour le charme médina classique, dormez à l\'intérieur des remparts. Pour équilibre commodité/caractère, la zone entrée médina fonctionne bien.' },
    { question: 'Madada Mogador est-il un riad traditionnel ?', answer: 'Pas entièrement — les avis notent constamment plus de points communs avec un hôtel boutique européen qu\'un riad marocain traditionnel à cour centrale.' },
    { question: 'Ai-je besoin d\'une voiture pour rejoindre mon hôtel à Essaouira ?', answer: 'La plupart des propriétés médina sont praticables à pied depuis la gare routière. Les propriétés hors médina nécessitent vraiment une voiture.' },
  ],
  peopleAlsoAsk: [
    { question: 'Quel est l\'hôtel le mieux noté à Essaouira ?', answer: 'Riad Jade Mogador (8,9/10 sur 890+ avis) et Cruiser Mogador Hospitality (9,8/10) affichent des scores exceptionnellement forts.' },
    { question: 'Combien y a-t-il d\'hôtels à Essaouira ?', answer: 'Essaouira compte environ 106 hôtels et riads listés sur les principales plateformes de réservation.' },
    { question: 'Essaouira est-elle chère pour l\'hébergement ?', answer: 'Généralement non — Essaouira reste l\'une des meilleures destinations côtières rapport qualité-prix du Maroc.' },
  ],
  relatedDestinations: ['essaouira', 'marrakech'],
  relatedPosts: ['guide-voyage-essaouira', 'guide-voyage-marrakech', 'location-voiture-agadir-aeroport', 'meilleurs-circuits-prives-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أين تقيم بالصويرة 2026: أفضل الرياضات والفنادق',
  metaDescription: 'دليل شامل لأفضل الرياضات والفنادق بالصويرة 2026: مادادا موگادور، رياض جايد موگادور، أطلس الصويرة والمزيد. أسعار حقيقية، تقييمات، وأي حي تختار.',
  title: 'أين تقيم بالصويرة 2026: أفضل الرياضات والفنادق مقارنة',
  description: 'إجابة سريعة: تضم الصويرة حوالي 106 فندق ورياض، معظمها متمركز داخل أسوار المدينة العتيقة قرب الميناء وساحة مولاي حسن، مع مجموعة أصغر من الفنادق الكبيرة على الساحل نحو منطقة الغولف.',
  keyword: 'أين تقيم الصويرة',
  coverImage: COVER,
  coverAlt: 'أين تقيم بالصويرة 2026 — تراس رياض بالسطح يطل على الميناء والمحيط الأطلسي عند الغروب',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 13,
  intro: 'إجابة سريعة: تضم الصويرة حوالي 106 فندق ورياض، معظمها متمركز داخل أسوار المدينة العتيقة على مسافة مشي من الميناء وساحة مولاي حسن. مادادا موگادور — عقار بوتيك مبني داخل الأسوار القديمة بإطلالات بانورامية على الخليج — يتصدر باستمرار الخيارات الأفضل، إلى جانب خيارات ذات قيمة ممتازة كرياض جايد موگادور.',
  sections: [
    {
      heading: 'مناطق الإقامة بالصويرة — نظرة سريعة',
      paragraphs: ['المدينة العتيقة المدمجة للصويرة تبقي معظم العقارات قابلة للمشي.'],
      table: {
        caption: 'أين تقيم بالصويرة — المناطق مقارنة 2026',
        headers: ['المنطقة', 'الطابع', 'الأنسب لـ'],
        rows: [
          ['المدينة العتيقة، قرب الأسوار/الميناء', 'تاريخية، خطوات من الميناء', 'الزوار للمرة الأولى'],
          ['مدخل المدينة العتيقة', 'مركزي، وصول سهل', 'توازن الراحة والطابع'],
          ['الساحل/منطقة الغولف', 'فنادق كبيرة، مسابح', 'المسافرون الباحثون عن راحة المنتجع'],
        ],
      },
    },
    {
      heading: 'أفضل الرياضات والفنادق بالصويرة — مقارنة',
      paragraphs: ['العقارات الأعلى تقييماً تمتد من رياضات اقتصادية لفنادق بوتيك بالأسوار التاريخية.'],
      table: {
        caption: 'أفضل الرياضات والفنادق بالصويرة 2026',
        headers: ['العقار', 'التقييم', 'السعر/ليلة', 'الطابع'],
        rows: [
          ['مادادا موگادور', '4/5 (+626 تقييم) — المرتبة 12 من 106', 'من 150-370$', 'فندق بوتيك بالأسوار القديمة، إطلالات بانورامية'],
          ['رياض جايد موگادور', '8.9/10 (+890 تقييم) — قيمة استثنائية', 'من 46$', 'رياض عائلي 6 غرف قرب الشاطئ'],
          ['أطلس الصويرة رياض ريزورت', '8.2/10 (+809 تقييم)', 'من 118-144$', 'فندق كبير بسبا كامل ومسبح'],
        ],
      },
      callout: {
        label: '💡 أيها تحجز؟',
        body: 'لطابع بوتيك بأفضل موقع: مادادا موگادور. لأفضل قيمة: رياض جايد موگادور. لراحة المنتجع: أطلس الصويرة.',
      },
    },
    {
      heading: 'أسعار حقيقية 2026 حسب الميزانية',
      paragraphs: ['تبقى الصويرة من أفضل الوجهات الساحلية قيمةً بالمغرب للإقامة.'],
      table: {
        caption: 'أسعار إقامة الصويرة حسب الميزانية 2026',
        headers: ['الميزانية', 'السعر/ليلة', 'ماذا تتوقع'],
        rows: [
          ['اقتصادية', '17-46$ (16-42€)', 'رياض جايد موگادور — نظيف، عائلي'],
          ['متوسطة', '118-150$ (109-139€)', 'أطلس الصويرة — سبا، مسبح'],
          ['بوتيك/راقية', '150-370$ (139-342€)', 'مادادا موگادور — الأسوار، إطلالات بانورامية'],
        ],
      },
    },
    {
      heading: 'نصائح حجز للصويرة',
      paragraphs: ['بعض الملاحظات العملية التي تصنع الفرق.'],
      list: [
        'احجز مادادا موگادور مبكراً — غرف قليلة، تُحجز بسرعة.',
        'إن كنت تقود، أكد موقف السيارات مباشرة.',
        'العقارات خارج المدينة العتيقة تتطلب فعلاً سيارة أو حافلة منظمة.',
        'الأربعاء يميل لتقديم أرخص الأسعار وفق بيانات الحجز.',
        'أكد شمول الفطور قبل الحجز.',
      ],
    },
    {
      heading: 'الوصول للصويرة ورياضك',
      paragraphs: ['للصورة الكاملة عن الوصول للصويرة، راجع أدلة مساراتنا الشاملة.'],
      callout: {
        label: '🚗 استأجر سيارة لرحلتك للصويرة',
        body: 'راجع <a href="/blog/dalil-safar-essaouira">دليل السفر للصويرة</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'ما أفضل رياض للإقامة بالصويرة؟', answer: 'مادادا موگادور العقار البوتيك الأعلى تقييماً باستمرار (4/5 من +626 تقييم)، من حوالي 150-370$/ليلة.' },
    { question: 'كم تكلفة فندق بالصويرة؟', answer: 'الرياضات الاقتصادية 17-46$/ليلة، فنادق السبا المتوسطة 118-150$/ليلة، البوتيك الراقية 150-370$/ليلة.' },
    { question: 'أي منطقة بالصويرة أقيم بها؟', answer: 'لطابع المدينة العتيقة الكلاسيكي، أقم داخل الأسوار.' },
    { question: 'هل مادادا موگادور رياض تقليدي؟', answer: 'ليس تماماً — التقييمات تشير باستمرار لتشابه أكبر بفندق بوتيك أوروبي.' },
    { question: 'هل أحتاج سيارة للوصول لفندقي بالصويرة؟', answer: 'معظم عقارات المدينة العتيقة قابلة للمشي من محطة الحافلات.' },
  ],
  peopleAlsoAsk: [
    { question: 'ما الفندق الأعلى تقييماً بالصويرة؟', answer: 'رياض جايد موگادور (8.9/10) وكروزر موگادور هوسبيتاليتي (9.8/10) يحققان درجات استثنائية.' },
    { question: 'كم عدد الفنادق بالصويرة؟', answer: 'تضم الصويرة حوالي 106 فندق ورياض مدرجة عبر منصات الحجز الرئيسية.' },
    { question: 'هل الصويرة غالية للإقامة؟', answer: 'عموماً لا — تبقى من أفضل الوجهات الساحلية قيمةً بالمغرب.' },
  ],
  relatedDestinations: ['essaouira', 'marrakech'],
  relatedPosts: ['dalil-safar-essaouira', 'dalil-safar-marakish', 'istijar-sayyara-matar-agadir', 'afdal-jawlat-khasa-maghrib'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);