import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'where-to-stay-rabat-best-hotels';
const SLUG_FR = 'ou-dormir-rabat-meilleurs-hotels';
const SLUG_AR = 'ayna-tuqim-al-ribat';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(30532058);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Where to Stay in Rabat 2026: Best Hotels (Sofitel, Fairmont, Onomo & More)',
  metaDescription: 'Complete guide to the best hotels in Rabat 2026: Sofitel Jardin des Roses, Fairmont La Marina, ONOMO Terminus, Conrad Rabat Arzana and more. Real prices from $33-378/night, ratings, and which area to pick.',
  title: 'Where to Stay in Rabat 2026: Best Hotels Compared',
  description: 'Quick answer: Rabat has around 1,387 hotels ranging from budget business properties in the Ville Nouvelle to beachfront luxury resorts in Harhoura. This guide compares top-rated options — Sofitel Rabat Jardin des Roses, Fairmont La Marina Rabat Sale, ONOMO Hotel Rabat Terminus, Conrad Rabat Arzana and more — with real 2026 prices and honest notes on each.',
  keyword: 'where to stay rabat',
  coverImage: COVER,
  coverAlt: 'Where to stay in Rabat 2026 — modern hotel pool terrace overlooking the Bouregreg river and Kasbah des Oudayas',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 13,
  intro: 'Quick answer: Rabat has approximately 1,387 hotels, with the Ville Nouvelle (modern city centre) as the go-to area for convenience — close to attractions, restaurants and shops, and offering everything from budget-friendly options to international 4-star chains. For beachfront luxury, Harhoura south of the city hosts standout resort properties like Conrad Rabat Arzana. Fairmont La Marina Rabat Sale consistently posts the strongest guest ratings (8.9-9.4/10), while ONOMO Hotel Rabat Terminus offers reliable 4-star comfort in a historic, century-old building right on Avenue Mohammed V. This guide compares real 2026 prices and ratings so you can book with confidence.',
  sections: [
    {
      heading: 'Rabat Accommodation Areas — Quick Overview',
      paragraphs: ['Rabat\'s hotel scene splits clearly by area and purpose.'],
      table: {
        caption: 'Where to stay in Rabat — areas compared 2026',
        headers: ['Area', 'Character', 'Best for'],
        rows: [
          ['Ville Nouvelle (modern city centre)', 'Close to attractions, restaurants, shops — the most convenient base', 'First-timers, business travelers, most visitors generally'],
          ['Near the Medina / Kasbah des Oudayas', 'Historic character, walkable to landmarks', 'Travelers wanting proximity to sightseeing'],
          ['Harhoura (south coast)', 'Beachfront resorts, further from the city centre', 'Travelers wanting a resort experience with a pool and beach access'],
          ['Agdal', 'Residential, quieter, still central', 'Longer stays, quieter atmosphere'],
        ],
      },
    },
    {
      heading: 'Best Hotels in Rabat — Compared',
      paragraphs: [
        'Rabat\'s highest-rated properties span reliable business hotels to genuine luxury resorts.',
      ],
      table: {
        caption: 'Best hotels in Rabat 2026',
        headers: ['Hotel', 'Rating', 'Price/night', 'Character'],
        rows: [
          ['Fairmont La Marina Rabat Sale', '8.9-9.4/10 (multiple sources)', 'Varies', 'Eco-certified property near the marina, sailing/motorboating/surfing activities nearby, consistently praised for stylish accommodations and attentive concierge service'],
          ['Sofitel Rabat Jardin des Roses', 'Strong reviews', 'From $239', '8-hectare urban oasis in the heart of the capital — pools, spa, fitness centre, tennis court, multicultural dining options'],
          ['ONOMO Hotel Rabat Terminus', '8.2/10 (200+ reviews)', 'From $105-130', 'Historic hotel building, 100+ years old, fully renovated, prime location on Avenue Mohammed V, walkable to the Kasbah des Oudayas, Hassan Tower, and Chellah'],
          ['Conrad Rabat Arzana', '9.2/10 (72-75 reviews)', 'From $263-356', '5-star luxury resort in Harhoura with 2 outdoor pools, beachfront location, consistently praised for excellent location and helpful staff'],
          ['Rabat Marriott Hotel', '9.4/10 (71-78 reviews)', 'From $229-286', 'Full-service spa, outdoor pool, guests repeatedly call it "the most amazing Marriott" they\'ve stayed in'],
          ['Hotel Belere Rabat', '7.8/10 (589+ reviews)', 'From $117-133', 'Art Deco property with attached winery, family-friendly with babysitting and BBQ facilities, largest review sample among mid-range options'],
          ['La Tour Hassan Palace', '5-star', 'From $323-366', 'Historic luxury property near Chellah with multiple restaurants'],
        ],
      },
      callout: {
        label: '💡 Which One Should You Book?',
        body: 'For the strongest overall guest satisfaction: Fairmont La Marina Rabat Sale or Rabat Marriott (both posting 9+/10 scores). For a genuine beach resort experience: Conrad Rabat Arzana in Harhoura. For reliable value with excellent central location and historic character: ONOMO Hotel Rabat Terminus. For a large-sample, family-friendly mid-range option: Hotel Belere Rabat.',
      },
    },
    {
      heading: 'Real 2026 Prices by Budget',
      paragraphs: ['Rabat offers a genuinely wide price range, from sub-$50 budget options to $350+ luxury resorts.'],
      table: {
        caption: 'Rabat accommodation prices by budget 2026',
        headers: ['Budget', 'Price/night', 'What to expect'],
        rows: [
          ['Budget', '$33-46 (€30-42)', 'Basic hotels and guesthouses across the Ville Nouvelle'],
          ['Mid-range', '$105-133 (€97-123)', 'ONOMO Hotel Rabat Terminus, Hotel Belere Rabat — reliable 4-star comfort'],
          ['Upscale', '$229-294 (€212-273)', 'Sofitel Jardin des Roses, Rabat Marriott, Conrad Rabat Arzana'],
          ['Luxury', '$323-378+ (€300-350+)', 'La Tour Hassan Palace, Four Seasons Hotel Rabat at Kasr Al Bahr, The Ritz-Carlton Rabat Dar Es Salam'],
        ],
      },
      callout: {
        label: '💰 Practical Note',
        body: 'Rabat charges a city tourist tax of approximately MAD 19.80 per person per night (roughly €1.80), not included in most quoted rates for mid-range hotels. Several luxury properties — including Fairmont La Marina, Sofitel Jardin des Roses, and The Ritz-Carlton Dar Es Salam — are pet-friendly if traveling with animals.',
      },
    },
    {
      heading: 'Booking Tips for Rabat',
      paragraphs: ['A handful of practical notes that make the difference between a smooth stay and a frustrating one.'],
      list: [
        'If you\'re renting a car, confirm parking availability directly — Hotel Belere Rabat offers free on-site parking, useful if you\'re arriving with a rental.',
        'For business travel, ONOMO Hotel Rabat Medina caters specifically to business travelers with well-equipped meeting facilities and easy access to local business hubs.',
        'Harhoura beach resorts like Conrad Rabat Arzana sit further from the city centre — factor in transport time if you plan daily sightseeing in the Medina or Kasbah.',
        'The Ville Nouvelle remains the most practical base for most visitors — close to the Mohammed V Mausoleum, Hassan Tower, and easy access to restaurants and shops.',
      ],
    },
    {
      heading: 'Getting to Rabat and Your Hotel',
      paragraphs: ['For the full picture on reaching Rabat, whether flying into Rabat-Sale Airport or driving from Casablanca, see our complete guides.'],
      callout: {
        label: '🚗 Renting a Car for Your Rabat Trip',
        body: 'We arrange rental cars with free meet & greet at Rabat-Sale Airport (RBA) or Casablanca Airport (CMN) — economy from MAD 250/day (€23). See our full <a href="/blog/rabat-travel-guide">Rabat Travel Guide</a> and <a href="/blog/location-voiture-aeroport-rabat-rba">Rabat Airport Guide</a>, or message us on WhatsApp: <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    {
      question: 'What is the best hotel to stay at in Rabat?',
      answer: 'Fairmont La Marina Rabat Sale and Rabat Marriott Hotel both consistently post the strongest guest ratings (9+/10). For a genuine beachfront resort experience, Conrad Rabat Arzana in Harhoura is a top choice. For reliable value with historic character and central location, ONOMO Hotel Rabat Terminus is a strong mid-range pick.',
    },
    {
      question: 'How much does a hotel cost in Rabat?',
      answer: 'Budget hotels run $33-46/night, mid-range 4-star options like ONOMO Hotel Rabat Terminus cost $105-133/night, and luxury properties like Conrad Rabat Arzana or La Tour Hassan Palace range $263-378+/night.',
    },
    {
      question: 'Which area of Rabat should I stay in?',
      answer: 'The Ville Nouvelle is the most practical base for most visitors — close to major attractions, restaurants and shops. For a beach resort experience, consider Harhoura south of the city. For historic character within walking distance of the Kasbah des Oudayas, look at hotels near the Medina.',
    },
    {
      question: 'Are there beach resort hotels in Rabat?',
      answer: 'Yes — Harhoura, south of central Rabat, hosts beachfront luxury properties including Conrad Rabat Arzana (5-star, 2 outdoor pools, from $263/night), offering a genuine resort experience with easy access to the coast.',
    },
    {
      question: 'Do Rabat hotels charge a tourist tax?',
      answer: 'Yes — a city tax of approximately MAD 19.80 per person per night (roughly €1.80) applies at most properties, typically not included in the quoted room rate and charged separately at check-in or check-out.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is the highest rated hotel in Rabat?', answer: 'Fairmont La Marina Rabat Sale and Rabat Marriott Hotel both post exceptional guest scores of 9+/10, with Fairmont particularly praised for its eco-certification, stylish accommodations, and concierge service near the marina.' },
    { question: 'How many hotels are there in Rabat?', answer: 'Rabat has approximately 1,387 hotels listed across major booking platforms, ranging from budget guesthouses under $50/night to 5-star luxury resorts over $350/night.' },
    { question: 'Is Rabat expensive to stay in compared to Marrakech or Casablanca?', answer: 'Rabat offers a comparable range to Casablanca, generally with a wide spread from budget to luxury, and is often considered slightly less expensive than Marrakech at the upper end given lower international tourist demand as a business/political capital.' },
  ],
  relatedDestinations: ['rabat', 'casablanca'],
  relatedPosts: ['rabat-travel-guide', 'location-voiture-aeroport-rabat-rba', 'casablanca-travel-guide', 'business-travel-casablanca-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Où Dormir à Rabat 2026 : Meilleurs Hôtels (Sofitel, Fairmont, Onomo et Plus)',
  metaDescription: 'Guide complet des meilleurs hôtels à Rabat 2026 : Sofitel Jardin des Roses, Fairmont La Marina, ONOMO Terminus, Conrad Rabat Arzana et plus. Vrais prix dès 33-378$/nuit, notes, et quel quartier choisir.',
  title: 'Où Dormir à Rabat 2026 : Meilleurs Hôtels Comparés',
  description: 'Réponse rapide : Rabat compte environ 1 387 hôtels allant de propriétés économiques dans la Ville Nouvelle à des resorts de luxe en bord de mer à Harhoura. Ce guide compare les options les mieux notées avec vrais prix 2026.',
  keyword: 'où dormir rabat',
  coverImage: COVER,
  coverAlt: 'Où dormir à Rabat 2026 — terrasse piscine d\'hôtel moderne surplombant le fleuve Bouregreg et la Kasbah des Oudayas',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 13,
  intro: 'Réponse rapide : Rabat compte environ 1 387 hôtels, avec la Ville Nouvelle (centre-ville moderne) comme zone la plus pratique — proche des attractions, restaurants et boutiques. Pour le luxe en bord de mer, Harhoura au sud de la ville accueille des propriétés resort remarquables comme Conrad Rabat Arzana. Fairmont La Marina Rabat Salé affiche constamment les notes clients les plus fortes (8,9-9,4/10).',
  sections: [
    {
      heading: 'Zones d\'Hébergement à Rabat — Aperçu Rapide',
      paragraphs: ['La scène hôtelière de Rabat se divise clairement par zone et objectif.'],
      table: {
        caption: 'Où dormir à Rabat — zones comparées 2026',
        headers: ['Zone', 'Caractère', 'Idéal pour'],
        rows: [
          ['Ville Nouvelle', 'Proche attractions, restaurants, boutiques', 'Premiers visiteurs, voyageurs affaires'],
          ['Près Médina / Kasbah des Oudayas', 'Caractère historique, praticable à pied', 'Voyageurs voulant proximité sites'],
          ['Harhoura (côte sud)', 'Resorts bord de mer, plus loin du centre', 'Voyageurs voulant expérience resort'],
          ['Agdal', 'Résidentiel, plus calme, toujours central', 'Séjours plus longs'],
        ],
      },
    },
    {
      heading: 'Meilleurs Hôtels à Rabat — Comparés',
      paragraphs: ['Les propriétés les mieux notées de Rabat vont d\'hôtels affaires fiables à véritables resorts de luxe.'],
      table: {
        caption: 'Meilleurs hôtels à Rabat 2026',
        headers: ['Hôtel', 'Note', 'Prix/nuit', 'Caractère'],
        rows: [
          ['Fairmont La Marina Rabat Sale', '8,9-9,4/10', 'Variable', 'Propriété éco-certifiée près de la marina, voile/surf à proximité'],
          ['Sofitel Rabat Jardin des Roses', 'Avis solides', 'Dès 239$', 'Oasis urbaine de 8 hectares — piscines, spa, tennis'],
          ['ONOMO Hotel Rabat Terminus', '8,2/10 (200+ avis)', 'Dès 105-130$', 'Hôtel historique centenaire, avenue Mohammed V'],
          ['Conrad Rabat Arzana', '9,2/10 (72-75 avis)', 'Dès 263-356$', 'Resort de luxe 5 étoiles à Harhoura, 2 piscines extérieures'],
          ['Rabat Marriott Hotel', '9,4/10 (71-78 avis)', 'Dès 229-286$', 'Spa complet, piscine extérieure, avis exceptionnels'],
          ['Hotel Belere Rabat', '7,8/10 (589+ avis)', 'Dès 117-133$', 'Propriété Art Déco avec domaine viticole'],
        ],
      },
      callout: {
        label: '💡 Lequel Réserver ?',
        body: 'Pour la meilleure satisfaction client globale : Fairmont La Marina ou Rabat Marriott. Pour une expérience resort bord de mer : Conrad Rabat Arzana. Pour valeur fiable avec emplacement central : ONOMO Hotel Rabat Terminus.',
      },
    },
    {
      heading: 'Vrais Prix 2026 par Budget',
      paragraphs: ['Rabat offre une gamme de prix vraiment large.'],
      table: {
        caption: 'Prix hébergement Rabat par budget 2026',
        headers: ['Budget', 'Prix/nuit', 'À quoi s\'attendre'],
        rows: [
          ['Économique', '33-46$ (30-42€)', 'Hôtels de base Ville Nouvelle'],
          ['Milieu de gamme', '105-133$ (97-123€)', 'ONOMO Terminus, Hotel Belere'],
          ['Haut de gamme', '229-294$ (212-273€)', 'Sofitel, Marriott, Conrad Arzana'],
          ['Luxe', '323-378$+ (300-350€+)', 'La Tour Hassan Palace, Four Seasons'],
        ],
      },
      callout: {
        label: '💰 Note Pratique',
        body: 'Rabat applique une taxe de séjour d\'environ MAD 19,80 par personne par nuit (~1,80€), non incluse dans la plupart des tarifs.',
      },
    },
    {
      heading: 'Conseils de Réservation pour Rabat',
      paragraphs: ['Quelques notes pratiques qui font la différence.'],
      list: [
        'Si vous louez une voiture, confirmez le stationnement directement.',
        'Pour voyage affaires, ONOMO Hotel Rabat Medina cible spécifiquement les voyageurs professionnels.',
        'Les resorts plage Harhoura sont plus loin du centre-ville.',
        'La Ville Nouvelle reste la base la plus pratique pour la plupart des visiteurs.',
      ],
    },
    {
      heading: 'Rejoindre Rabat et Votre Hôtel',
      paragraphs: ['Pour le tableau complet sur comment rejoindre Rabat, voir nos guides complets.'],
      callout: {
        label: '🚗 Louer une Voiture pour Votre Voyage à Rabat',
        body: 'Nous organisons des locations avec accueil gratuit à l\'aéroport de Rabat-Salé (RBA) ou Casablanca (CMN) — économique dès MAD 250/jour (23€). Voir notre <a href="/blog/guide-voyage-rabat">Guide Voyage Rabat</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Quel est le meilleur hôtel où dormir à Rabat ?', answer: 'Fairmont La Marina Rabat Sale et Rabat Marriott Hotel affichent tous deux les notes clients les plus fortes (9+/10). Pour un vrai resort bord de mer, Conrad Rabat Arzana à Harhoura.' },
    { question: 'Combien coûte un hôtel à Rabat ?', answer: 'Hôtels économiques 33-46$/nuit, options 4 étoiles milieu de gamme 105-133$/nuit, propriétés luxe 263-378$+/nuit.' },
    { question: 'Dans quelle zone de Rabat dois-je dormir ?', answer: 'La Ville Nouvelle est la base la plus pratique pour la plupart des visiteurs.' },
    { question: 'Y a-t-il des hôtels resort plage à Rabat ?', answer: 'Oui — Harhoura, au sud du centre, accueille des propriétés luxe bord de mer dont Conrad Rabat Arzana.' },
    { question: 'Les hôtels de Rabat facturent-ils une taxe de séjour ?', answer: 'Oui — taxe d\'environ MAD 19,80 par personne par nuit (~1,80€) dans la plupart des propriétés.' },
  ],
  peopleAlsoAsk: [
    { question: 'Quel est l\'hôtel le mieux noté à Rabat ?', answer: 'Fairmont La Marina et Rabat Marriott affichent tous deux des scores exceptionnels de 9+/10.' },
    { question: 'Combien y a-t-il d\'hôtels à Rabat ?', answer: 'Rabat compte environ 1 387 hôtels listés sur les principales plateformes.' },
    { question: 'Rabat est-elle chère comparée à Marrakech ou Casablanca ?', answer: 'Rabat offre une gamme comparable à Casablanca, généralement considérée légèrement moins chère que Marrakech au niveau supérieur.' },
  ],
  relatedDestinations: ['rabat', 'casablanca'],
  relatedPosts: ['guide-voyage-rabat', 'location-voiture-aeroport-rabat-rba', 'guide-voyage-casablanca', 'voyage-affaires-casablanca-guide'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أين تقيم بالرباط 2026: أفضل الفنادق (سوفيتيل، فيرمونت، أونومو والمزيد)',
  metaDescription: 'دليل شامل لأفضل الفنادق بالرباط 2026: سوفيتيل جاردان دي روز، فيرمونت لا مارينا، أونومو ترمينوس، كونراد الرباط أرزانة والمزيد. أسعار حقيقية، تقييمات.',
  title: 'أين تقيم بالرباط 2026: أفضل الفنادق مقارنة',
  description: 'إجابة سريعة: تضم الرباط حوالي 1,387 فندقاً من عقارات اقتصادية بالمدينة الجديدة لمنتجعات فاخرة بحرية بحرحورة. فيرمونت لا مارينا الرباط سلا يحقق باستمرار أقوى تقييمات الضيوف (8.9-9.4/10).',
  keyword: 'أين تقيم الرباط',
  coverImage: COVER,
  coverAlt: 'أين تقيم بالرباط 2026 — تراس مسبح فندق حديث يطل على نهر أبي رقراق وقصبة الأوداية',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 13,
  intro: 'إجابة سريعة: تضم الرباط حوالي 1,387 فندقاً، مع المدينة الجديدة كالمنطقة الأكثر عملية — قرب المعالم والمطاعم والمحلات. للفخامة البحرية، تستضيف بحرحورة جنوب المدينة عقارات منتجع بارزة كـكونراد الرباط أرزانة. فيرمونت لا مارينا الرباط سلا يحقق باستمرار أقوى تقييمات (8.9-9.4/10).',
  sections: [
    {
      heading: 'مناطق الإقامة بالرباط — نظرة سريعة',
      paragraphs: ['مشهد فنادق الرباط ينقسم بوضوح حسب المنطقة والغرض.'],
      table: {
        caption: 'أين تقيم بالرباط — المناطق مقارنة 2026',
        headers: ['المنطقة', 'الطابع', 'الأنسب لـ'],
        rows: [
          ['المدينة الجديدة', 'قرب المعالم والمطاعم', 'الزوار الأوائل، رجال الأعمال'],
          ['قرب المدينة العتيقة/القصبة', 'طابع تاريخي، قابل للمشي', 'الباحثون عن قرب المعالم'],
          ['بحرحورة (الساحل الجنوبي)', 'منتجعات بحرية، أبعد عن المركز', 'الباحثون عن تجربة منتجع'],
          ['أكدال', 'سكني، أهدأ', 'الإقامات الأطول'],
        ],
      },
    },
    {
      heading: 'أفضل الفنادق بالرباط — مقارنة',
      paragraphs: ['العقارات الأعلى تقييماً بالرباط تمتد من فنادق أعمال موثوقة لمنتجعات فاخرة حقيقية.'],
      table: {
        caption: 'أفضل الفنادق بالرباط 2026',
        headers: ['الفندق', 'التقييم', 'السعر/ليلة', 'الطابع'],
        rows: [
          ['فيرمونت لا مارينا الرباط سلا', '8.9-9.4/10', 'متغير', 'عقار معتمد بيئياً قرب المارينا'],
          ['سوفيتيل الرباط جاردان دي روز', 'تقييمات قوية', 'من 239$', 'واحة حضرية 8 هكتار — مسابح، سبا'],
          ['أونومو ترمينوس الرباط', '8.2/10 (+200 تقييم)', 'من 105-130$', 'فندق تاريخي عمره +100 سنة'],
          ['كونراد الرباط أرزانة', '9.2/10 (+72 تقييم)', 'من 263-356$', 'منتجع فاخر 5 نجوم ببحرحورة'],
          ['فندق رباط ماريوت', '9.4/10 (+71 تقييم)', 'من 229-286$', 'سبا كامل، مسبح خارجي'],
        ],
      },
      callout: {
        label: '💡 أيها تحجز؟',
        body: 'لأقوى رضا ضيوف: فيرمونت لا مارينا أو رباط ماريوت. لتجربة منتجع بحري حقيقية: كونراد أرزانة.',
      },
    },
    {
      heading: 'أسعار حقيقية 2026 حسب الميزانية',
      paragraphs: ['الرباط تقدم نطاق أسعار واسع فعلاً.'],
      table: {
        caption: 'أسعار إقامة الرباط حسب الميزانية 2026',
        headers: ['الميزانية', 'السعر/ليلة', 'ماذا تتوقع'],
        rows: [
          ['اقتصادية', '33-46$ (30-42€)', 'فنادق أساسية بالمدينة الجديدة'],
          ['متوسطة', '105-133$ (97-123€)', 'أونومو ترمينوس، بيليري'],
          ['راقية', '229-294$ (212-273€)', 'سوفيتيل، ماريوت، كونراد أرزانة'],
          ['فاخرة', '323-378$+ (300-350€+)', 'لا تور حسن بالاس'],
        ],
      },
      callout: {
        label: '💰 ملاحظة عملية',
        body: 'تفرض الرباط ضريبة سياحة مدينة حوالي MAD 19.80 للشخص لكل ليلة (~1.80€).',
      },
    },
    {
      heading: 'نصائح حجز للرباط',
      paragraphs: ['بعض الملاحظات العملية التي تصنع الفرق.'],
      list: [
        'إن استأجرت سيارة، أكد موقف السيارات مباشرة.',
        'لسفر الأعمال، أونومو ميدينا يستهدف تحديداً المسافرين المهنيين.',
        'منتجعات شاطئ بحرحورة أبعد عن وسط المدينة.',
        'المدينة الجديدة تبقى القاعدة الأكثر عملية لمعظم الزوار.',
      ],
    },
    {
      heading: 'الوصول للرباط وفندقك',
      paragraphs: ['للصورة الكاملة عن الوصول للرباط، راجع أدلتنا الشاملة.'],
      callout: {
        label: '🚗 استأجر سيارة لرحلتك للرباط',
        body: 'نرتب تأجير سيارات باستقبال مجاني بمطار الرباط-سلا (RBA) أو الدار البيضاء (CMN) — من MAD 250/يوم (23€). راجع <a href="/blog/dalil-safar-ribat">دليل السفر للرباط</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'ما أفضل فندق للإقامة بالرباط؟', answer: 'فيرمونت لا مارينا ورباط ماريوت كلاهما يحققان أقوى تقييمات الضيوف (9+/10).' },
    { question: 'كم تكلفة فندق بالرباط؟', answer: 'الفنادق الاقتصادية 33-46$/ليلة، المتوسطة 105-133$/ليلة، الفاخرة 263-378$+/ليلة.' },
    { question: 'أي منطقة بالرباط أقيم بها؟', answer: 'المدينة الجديدة القاعدة الأكثر عملية لمعظم الزوار.' },
    { question: 'هل توجد فنادق منتجع شاطئي بالرباط؟', answer: 'نعم — بحرحورة جنوب المركز تستضيف عقارات فاخرة بحرية منها كونراد أرزانة.' },
    { question: 'هل تفرض فنادق الرباط ضريبة سياحة؟', answer: 'نعم — ضريبة حوالي MAD 19.80 للشخص لكل ليلة.' },
  ],
  peopleAlsoAsk: [
    { question: 'ما الفندق الأعلى تقييماً بالرباط؟', answer: 'فيرمونت لا مارينا ورباط ماريوت كلاهما يحققان درجات استثنائية 9+/10.' },
    { question: 'كم عدد الفنادق بالرباط؟', answer: 'تضم الرباط حوالي 1,387 فندقاً مدرجاً عبر منصات الحجز الرئيسية.' },
    { question: 'هل الرباط غالية مقارنة بمراكش أو الدار البيضاء؟', answer: 'الرباط تقدم نطاقاً مماثلاً للدار البيضاء، وتُعتبر عموماً أقل تكلفة قليلاً من مراكش بالمستوى الأعلى.' },
  ],
  relatedDestinations: ['rabat', 'casablanca'],
  relatedPosts: ['dalil-safar-ribat', 'dalil-matar-al-ribat-rba', 'dalil-safar-dar-al-bayda', 'dalil-safar-al-a3mal-dar-al-bayda'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);