import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'casablanca-airport-car-rental-all-models-prices';
const SLUG_FR = 'location-voiture-aeroport-casablanca-tous-modeles';
const SLUG_AR = 'istijar-sayyara-matar-dar-al-bayda-jami-al-mudlat';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(8425047);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Car Rental Casablanca Airport 2026: Every Model & Price vs Hertz, Sixt, Europcar',
  metaDescription: 'Complete guide to car rental at Casablanca Airport (CMN): every model from Dacia to Mercedes with real 2026 prices, plus how local agencies compare to Hertz, Sixt, Europcar and Avis on deposit and insurance.',
  title: 'Car Rental Casablanca Airport 2026: Every Model, Real Prices & How Local Agencies Compare to Hertz, Sixt, Europcar',
  description: 'Quick answer: Casablanca Mohammed V Airport (CMN) has over a dozen car rental companies at or near the arrivals hall — international chains like Hertz, Avis, Europcar, Sixt and Budget, alongside local agencies like ours. Economy cars (Dacia Sandero, Kia Picanto) start from around 28€/day, SUVs from 32€/day, and luxury models from 39€/day. The real difference between local agencies and international chains usually comes down to deposit size and what\'s included — this guide breaks down every model, real pricing, and an honest comparison.',
  keyword: 'car rental casablanca airport',
  coverImage: COVER,
  coverAlt: 'Car rental Casablanca Airport 2026 — row of rental cars parked outside Mohammed V Airport terminal ready for pickup',
  publishedISO: '2026-09-16',
  updatedISO: '2026-09-16',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 13,
  intro: 'Quick answer: Casablanca Mohammed V Airport (CMN) hosts more than a dozen car rental companies within or near the arrivals hall — international names like Hertz, Avis, Europcar, Sixt and Budget sit alongside local Moroccan agencies. Prices genuinely vary by category: economy cars (Dacia Sandero, Hyundai i10, Kia Picanto) start from around 28€/day, SUVs (Dacia Duster, Renault Kadjar) from 32€/day, and luxury models (Mercedes, BMW, Audi) from 39€/day. The deciding factor between providers usually isn\'t the daily rate itself — it\'s the deposit size, whether insurance is genuinely included, and how the pickup process actually works. This guide covers every model with real 2026 pricing, plus an honest look at how local agencies compare to the international chains.',
  sections: [
    {
      heading: 'Every Car Model at Casablanca Airport — Real Prices',
      paragraphs: [
        'The most-booked cars at CMN are compact models — the Kia Picanto and Peugeot 208 are consistently named as the most popular rentals at the airport — but the full range runs from small economy hatchbacks to full-size luxury sedans.',
      ],
      table: {
        caption: 'Car rental prices at Casablanca Airport by model 2026',
        headers: ['Model', 'Category', 'Price/day (from)'],
        rows: [
          ['Dacia Sandero', 'Economy', '28€'],
          ['Hyundai i10', 'Economy', '28€'],
          ['Kia Picanto', 'Economy', '28€'],
          ['Dacia Logan', 'Compact', '30€'],
          ['Peugeot 208', 'Compact', '30€'],
          ['Renault Clio', 'Compact', '31€'],
          ['Dacia Duster', 'SUV', '32€'],
          ['Renault Kadjar', 'SUV', '32€'],
          ['Peugeot 3008', 'SUV', '35€'],
          ['Mercedes Class C', 'Luxury', '39€'],
          ['BMW Series 3', 'Luxury', '39€'],
          ['Audi A4', 'Luxury', '39€'],
        ],
      },
      callout: {
        label: '💡 Which Model Should You Book?',
        body: 'For a solo traveler or couple exploring cities: economy (Dacia Sandero, Hyundai i10) is genuinely enough. For families or anyone heading toward the Atlas or Sahara: an SUV (Dacia Duster) handles unpaved sections far better. For business travel or a special occasion: the luxury tier (Mercedes, BMW, Audi) delivers a noticeably different arrival experience at the terminal.',
      },
    },
    {
      heading: 'Local Agencies vs International Chains — An Honest Comparison',
      paragraphs: [
        'Casablanca Airport hosts both international chains (Hertz, Avis, Europcar, Sixt, Budget) with desks inside the arrivals hall, and local Moroccan agencies operating on-site or via a short shuttle. Both are legitimate options — the real difference is rarely the daily rate itself, and more often the deposit, insurance terms, and flexibility.',
      ],
      table: {
        caption: 'Local agency vs international chains — Casablanca Airport 2026',
        headers: ['Factor', 'MoroccoForYou', 'Typical International Chain'],
        rows: [
          ['Insurance', 'Fully included, no extra cost', 'Often a base policy, full coverage sold as add-on'],
          ['Security deposit', 'Low, sometimes zero — capped at 200€ even for luxury models', 'Can run 500€–2,000€+ for luxury/SUV categories'],
          ['Pickup', 'Free meet & greet at arrivals', 'Desk inside terminal or shuttle to nearby office'],
          ['Cancellation', 'Free up to 48h before pickup', 'Varies by rate type, often less flexible'],
          ['Brand recognition', 'Local, Morocco-based', 'Global brand, consistent worldwide standards'],
        ],
      },
      callout: {
        label: '🚗 Book With a Trusted Local Agency',
        body: 'Full insurance included, deposit capped at 200€ even on our luxury models, and free cancellation up to 48h before pickup. Message us your dates and flight number — we\'ll have your car ready at arrivals: <a href="https://wa.me/212634276534" data-btn="whatsapp">WhatsApp us →</a> or <a href="/rent-a-car/casablanca-airport/" data-btn="primary">View Cars & Prices →</a>',
      },
    },
    {
      heading: 'What\'s Genuinely Included (and What Isn\'t)',
      paragraphs: [
        'Transparency here matters more than the headline daily rate — a cheap price with a mandatory insurance add-on and a 1,500€ deposit often ends up costing more than a slightly higher rate with everything included.',
      ],
      list: [
        'Included with every rental: full insurance coverage, unlimited mileage on standard rentals, and free delivery to arrivals or your hotel',
        'Not included: fuel (return with the same level you received — full-to-full policy), tolls, and parking fines',
        'Deposit: typically low, and in some cases waived entirely depending on the vehicle category and rental length',
      ],
    },
    {
      heading: 'What Our Clients Say',
      paragraphs: [
        'Real feedback from recent travelers who rented through us at Casablanca Airport.',
      ],
      callout: {
        label: '⭐ 4.9/5 from 600+ Travelers',
        body: '"Great service, and I really appreciated it" — recent client review. "I loved the service and want to mention the guy who delivered the car — he was really friendly and the whole experience was excellent" — another recent client, describing their airport pickup.',
      },
    },
  ],
  faqs: [
    {
      question: 'What is the cheapest car to rent at Casablanca Airport?',
      answer: 'Economy models like the Dacia Sandero, Hyundai i10, and Kia Picanto are typically the most affordable, starting from around 28€/day. Kia Picanto and Peugeot 208 are consistently among the most popular and widely available rentals at CMN.',
    },
    {
      question: 'How much does a Dacia Duster cost to rent at Casablanca Airport?',
      answer: 'A Dacia Duster, the most common SUV choice for exploring beyond the cities, typically starts from around 32€/day, including full insurance.',
    },
    {
      question: 'How much does it cost to rent a Mercedes or BMW at Casablanca Airport?',
      answer: 'Luxury models like the Mercedes Class C, BMW Series 3, or Audi A4 typically start from around 39€/day with a local agency, though the security deposit required varies significantly between providers — some international chains require 1,000-2,000€+ for luxury categories.',
    },
    {
      question: 'What\'s the difference between renting from a local agency and Hertz or Sixt at Casablanca Airport?',
      answer: 'Both are legitimate options with desks or pickup points near the arrivals hall. The main practical differences are usually deposit size (local agencies often cap this much lower, even on luxury cars), whether insurance is fully included or sold separately, and pickup flexibility. International chains offer global brand consistency and typically more locations for one-way rentals between cities.',
    },
    {
      question: 'Is a deposit required to rent a car at Casablanca Airport?',
      answer: 'It depends on the provider. Many international chains require a deposit ranging from a few hundred to over 1,000€ on a credit card, held until the car is returned. Local agencies often offer lower deposits, and in some cases none at all, depending on the vehicle category and rental length.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Which car rental companies are at Casablanca Airport?', answer: 'International brands including Hertz, Avis, Europcar, Sixt, Budget and Thrifty operate desks within or near the arrivals hall at both terminals, alongside local Moroccan agencies like AirCar, Green Motion, and independent companies offering shuttle pickup.' },
    { question: 'What is the most popular rental car at Casablanca Airport?', answer: 'Compact models — particularly the Kia Picanto and Peugeot 208 — are consistently named as the most popular and widely booked rental cars at CMN, offering a practical balance of price and city-friendly size.' },
    { question: 'Do I need an international driving permit to rent a car in Casablanca?', answer: 'Most rental agencies accept a valid driving license from your home country held for at least one year, though some international chains may request an International Driving Permit alongside it depending on your nationality — worth confirming with your specific provider before travel.' },
  ],
  relatedDestinations: ['casablanca'],
  relatedPosts: ['casablanca-airport-guide-cmn', 'casablanca-airport-car-rental', 'luxury-car-rental-casablanca', 'business-travel-casablanca-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Location Voiture Aéroport Casablanca 2026 : Tous les Modèles vs Hertz, Sixt, Europcar',
  metaDescription: 'Guide complet location voiture aéroport Casablanca (CMN) : chaque modèle de Dacia à Mercedes avec vrais prix 2026, et comment les agences locales se comparent à Hertz, Sixt, Europcar et Avis sur la caution et l\'assurance.',
  title: 'Location Voiture Aéroport Casablanca 2026 : Tous les Modèles, Vrais Prix et Comparaison Hertz, Sixt, Europcar',
  description: 'Réponse rapide : l\'aéroport Mohammed V de Casablanca (CMN) compte plus d\'une douzaine de compagnies de location près du hall d\'arrivée — chaînes internationales (Hertz, Avis, Europcar, Sixt, Budget) aux côtés d\'agences locales comme la nôtre. Les voitures économiques (Dacia Sandero, Kia Picanto) démarrent autour de 28€/jour, les SUV dès 32€/jour, et le haut de gamme dès 39€/jour. La vraie différence entre agences locales et chaînes internationales tient généralement à la caution et à ce qui est inclus.',
  keyword: 'location voiture aéroport casablanca',
  coverImage: COVER,
  coverAlt: 'Location voiture aéroport Casablanca 2026 — rangée de voitures de location garées devant le terminal de l\'aéroport Mohammed V prêtes pour la prise en charge',
  publishedISO: '2026-09-16',
  updatedISO: '2026-09-16',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 13,
  intro: 'Réponse rapide : l\'aéroport Mohammed V de Casablanca (CMN) héberge plus d\'une douzaine de compagnies de location de voiture au sein ou à proximité du hall d\'arrivée — noms internationaux comme Hertz, Avis, Europcar, Sixt et Budget aux côtés d\'agences marocaines locales. Les prix varient vraiment selon la catégorie : voitures économiques (Dacia Sandero, Hyundai i10, Kia Picanto) dès environ 28€/jour, SUV (Dacia Duster, Renault Kadjar) dès 32€/jour, et modèles de luxe (Mercedes, BMW, Audi) dès 39€/jour. Le facteur décisif entre prestataires n\'est généralement pas le tarif journalier lui-même — c\'est la taille de la caution, si l\'assurance est vraiment incluse, et comment se déroule réellement la prise en charge.',
  sections: [
    {
      heading: 'Chaque Modèle de Voiture à l\'Aéroport de Casablanca — Vrais Prix',
      paragraphs: ['Les voitures les plus réservées à CMN sont des modèles compacts — la Kia Picanto et la Peugeot 208 sont constamment citées comme les locations les plus populaires à l\'aéroport.'],
      table: {
        caption: 'Prix location voiture aéroport Casablanca par modèle 2026',
        headers: ['Modèle', 'Catégorie', 'Prix/jour (dès)'],
        rows: [
          ['Dacia Sandero', 'Économique', '28€'],
          ['Hyundai i10', 'Économique', '28€'],
          ['Kia Picanto', 'Économique', '28€'],
          ['Dacia Logan', 'Compacte', '30€'],
          ['Peugeot 208', 'Compacte', '30€'],
          ['Renault Clio', 'Compacte', '31€'],
          ['Dacia Duster', 'SUV', '32€'],
          ['Renault Kadjar', 'SUV', '32€'],
          ['Peugeot 3008', 'SUV', '35€'],
          ['Mercedes Classe C', 'Luxe', '39€'],
          ['BMW Série 3', 'Luxe', '39€'],
          ['Audi A4', 'Luxe', '39€'],
        ],
      },
      callout: {
        label: '💡 Quel Modèle Réserver ?',
        body: 'Pour un voyageur solo ou en couple explorant les villes : l\'économique (Dacia Sandero, Hyundai i10) suffit vraiment. Pour familles ou vers l\'Atlas/Sahara : un SUV (Dacia Duster) gère bien mieux les sections non goudronnées. Pour un voyage d\'affaires : le niveau luxe (Mercedes, BMW, Audi) offre une arrivée notablement différente au terminal.',
      },
    },
    {
      heading: 'Agences Locales vs Chaînes Internationales — Comparaison Honnête',
      paragraphs: ['L\'aéroport de Casablanca héberge à la fois des chaînes internationales (Hertz, Avis, Europcar, Sixt, Budget) avec comptoirs dans le hall d\'arrivée, et des agences marocaines locales opérant sur place ou via une courte navette.'],
      table: {
        caption: 'Agence locale vs chaînes internationales — Aéroport Casablanca 2026',
        headers: ['Facteur', 'MoroccoForYou', 'Chaîne Internationale Typique'],
        rows: [
          ['Assurance', 'Entièrement incluse, sans coût supplémentaire', 'Souvent police de base, couverture complète vendue en option'],
          ['Caution', 'Faible, parfois nulle — plafonnée à 200€ même sur nos modèles de luxe', 'Peut atteindre 500€–2 000€+ pour catégories luxe/SUV'],
          ['Prise en charge', 'Accueil gratuit aux arrivées', 'Comptoir dans le terminal ou navette vers bureau proche'],
          ['Annulation', 'Gratuite jusqu\'à 48h avant', 'Varie selon tarif, souvent moins flexible'],
          ['Reconnaissance de marque', 'Locale, basée au Maroc', 'Marque mondiale, standards constants'],
        ],
      },
      callout: {
        label: '🚗 Réservez avec une Agence Locale de Confiance',
        body: 'Assurance complète incluse, caution plafonnée à 200€ même sur nos modèles de luxe, et annulation gratuite jusqu\'à 48h avant. Envoyez-nous vos dates et numéro de vol : <a href="https://wa.me/212634276534" data-btn="whatsapp">WhatsApp →</a> ou <a href="/fr/rent-a-car/casablanca-airport/" data-btn="primary">Voir Voitures & Prix →</a>',
      },
    },
    {
      heading: 'Ce qui est Vraiment Inclus (et ce qui ne l\'est pas)',
      paragraphs: ['La transparence compte plus ici que le tarif affiché.'],
      list: [
        'Inclus avec chaque location : assurance complète, kilométrage illimité sur locations standard, livraison gratuite aux arrivées ou à votre hôtel',
        'Non inclus : carburant (retour au même niveau reçu — politique plein-à-plein), péages, contraventions de stationnement',
        'Caution : généralement faible, et parfois supprimée selon la catégorie de véhicule et la durée',
      ],
    },
    {
      heading: 'Ce que Disent Nos Clients',
      paragraphs: ['Vrais retours de voyageurs récents ayant loué chez nous à l\'aéroport de Casablanca.'],
      callout: {
        label: '⭐ 4,9/5 sur 600+ Voyageurs',
        body: '« Très bon service, j\'ai apprécié » — avis client récent. « J\'ai adoré le service et je tiens à mentionner le gars qui a livré la voiture — il était très sympa et le service était au top » — un autre client récent, décrivant sa prise en charge à l\'aéroport.',
      },
    },
  ],
  faqs: [
    { question: 'Quelle est la voiture la moins chère à louer à l\'aéroport de Casablanca ?', answer: 'Les modèles économiques comme la Dacia Sandero, Hyundai i10, et Kia Picanto sont typiquement les plus abordables, dès environ 28€/jour.' },
    { question: 'Combien coûte la location d\'une Dacia Duster à l\'aéroport de Casablanca ?', answer: 'Une Dacia Duster, choix SUV le plus courant pour explorer au-delà des villes, démarre typiquement autour de 32€/jour, assurance complète incluse.' },
    { question: 'Combien coûte la location d\'une Mercedes ou BMW à l\'aéroport de Casablanca ?', answer: 'Les modèles de luxe comme la Mercedes Classe C, BMW Série 3, ou Audi A4 démarrent typiquement autour de 39€/jour avec une agence locale, bien que la caution requise varie significativement entre prestataires.' },
    { question: 'Quelle est la différence entre louer chez une agence locale et Hertz ou Sixt à l\'aéroport de Casablanca ?', answer: 'Les deux sont des options légitimes. Les différences pratiques principales concernent généralement la taille de la caution, si l\'assurance est entièrement incluse ou vendue séparément, et la flexibilité de prise en charge.' },
    { question: 'Une caution est-elle requise pour louer une voiture à l\'aéroport de Casablanca ?', answer: 'Cela dépend du prestataire. De nombreuses chaînes internationales exigent une caution allant de quelques centaines à plus de 1 000€ sur carte de crédit. Les agences locales offrent souvent des cautions plus faibles.' },
  ],
  peopleAlsoAsk: [
    { question: 'Quelles compagnies de location sont à l\'aéroport de Casablanca ?', answer: 'Des marques internationales incluant Hertz, Avis, Europcar, Sixt, Budget et Thrifty opèrent des comptoirs dans ou près du hall d\'arrivée des deux terminaux, aux côtés d\'agences marocaines locales.' },
    { question: 'Quelle est la voiture de location la plus populaire à l\'aéroport de Casablanca ?', answer: 'Les modèles compacts — particulièrement la Kia Picanto et la Peugeot 208 — sont constamment citées comme les voitures de location les plus populaires à CMN.' },
    { question: 'Ai-je besoin d\'un permis de conduire international pour louer une voiture à Casablanca ?', answer: 'La plupart des agences acceptent un permis de conduire valide de votre pays d\'origine détenu depuis au moins un an.' },
  ],
  relatedDestinations: ['casablanca'],
  relatedPosts: ['guide-aeroport-casablanca-cmn', 'location-voiture-casablanca-sans-caution', 'location-voiture-luxe-casablanca', 'voyage-affaires-casablanca-guide'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'تأجير سيارات مطار الدار البيضاء 2026: كل الموديلات مقابل هيرتز وسيكست ويوروكار',
  metaDescription: 'دليل شامل لتأجير السيارات بمطار الدار البيضاء (CMN): كل موديل من داسيا لمرسيدس بأسعار حقيقية 2026، وكيف تقارن الوكالات المحلية بهيرتز وسيكست ويوروكار وأفيس من حيث الوديعة والتأمين.',
  title: 'تأجير سيارات مطار الدار البيضاء 2026: كل الموديلات وأسعار حقيقية ومقارنة مع هيرتز وسيكست ويوروكار',
  description: 'إجابة سريعة: يستضيف مطار محمد الخامس بالدار البيضاء (CMN) أكثر من عشرة شركات تأجير سيارات بصالة الوصول أو قربها — سلاسل دولية كهيرتز وأفيس ويوروكار وسيكست وبدجت، إلى جانب وكالات محلية كوكالتنا. السيارات الاقتصادية (داسيا ساندرو، كيا بيكانتو) تبدأ من حوالي 28€/يوم، الدفع الرباعي من 32€/يوم، والفاخرة من 39€/يوم.',
  keyword: 'تأجير سيارات مطار الدار البيضاء',
  coverImage: COVER,
  coverAlt: 'تأجير سيارات مطار الدار البيضاء 2026 — صف سيارات إيجار متوقفة أمام صالة مطار محمد الخامس جاهزة للاستلام',
  publishedISO: '2026-09-16',
  updatedISO: '2026-09-16',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 13,
  intro: 'إجابة سريعة: يستضيف مطار محمد الخامس بالدار البيضاء (CMN) أكثر من عشرة شركات تأجير سيارات ضمن أو قرب صالة الوصول — أسماء دولية كهيرتز وأفيس ويوروكار وسيكست وبدجت إلى جانب وكالات مغربية محلية. الأسعار تتفاوت فعلاً حسب الفئة: السيارات الاقتصادية (داسيا ساندرو، هيونداي i10، كيا بيكانتو) من حوالي 28€/يوم، الدفع الرباعي (داسيا داستر) من 32€/يوم، والفاخرة (مرسيدس، بي إم دبليو، أودي) من 39€/يوم. العامل الحاسم بين المزودين عادةً ليس السعر اليومي نفسه — بل حجم الوديعة وما إذا كان التأمين مشمولاً فعلاً.',
  sections: [
    {
      heading: 'كل موديل سيارة بمطار الدار البيضاء — أسعار حقيقية',
      paragraphs: ['السيارات الأكثر حجزاً بـCMN هي موديلات مدمجة — كيا بيكانتو وبيجو 208 مذكورتان باستمرار كالأكثر شعبية.'],
      table: {
        caption: 'أسعار تأجير السيارات بمطار الدار البيضاء حسب الموديل 2026',
        headers: ['الموديل', 'الفئة', 'السعر/يوم (من)'],
        rows: [
          ['داسيا ساندرو', 'اقتصادية', '28€'],
          ['هيونداي i10', 'اقتصادية', '28€'],
          ['كيا بيكانتو', 'اقتصادية', '28€'],
          ['داسيا لوجان', 'مدمجة', '30€'],
          ['بيجو 208', 'مدمجة', '30€'],
          ['رينو كليو', 'مدمجة', '31€'],
          ['داسيا داستر', 'دفع رباعي', '32€'],
          ['رينو كادجار', 'دفع رباعي', '32€'],
          ['بيجو 3008', 'دفع رباعي', '35€'],
          ['مرسيدس فئة C', 'فاخرة', '39€'],
          ['بي إم دبليو الفئة 3', 'فاخرة', '39€'],
          ['أودي A4', 'فاخرة', '39€'],
        ],
      },
      callout: {
        label: '💡 أي موديل تحجز؟',
        body: 'لمسافر منفرد أو زوجين يستكشفان المدن: الاقتصادية تكفي فعلاً. للعائلات أو نحو الأطلس/الصحراء: دفع رباعي (داسيا داستر) يتعامل بشكل أفضل مع الطرق غير المعبدة. لسفر الأعمال: الفئة الفاخرة تقدم وصولاً مختلفاً ملحوظاً بالصالة.',
      },
    },
    {
      heading: 'وكالات محلية مقابل سلاسل دولية — مقارنة صادقة',
      paragraphs: ['يستضيف مطار الدار البيضاء سلاسل دولية (هيرتز، أفيس، يوروكار، سيكست، بدجت) بمكاتب بصالة الوصول، ووكالات مغربية محلية تعمل موقعياً أو عبر حافلة نقل قصيرة.'],
      table: {
        caption: 'وكالة محلية مقابل سلاسل دولية — مطار الدار البيضاء 2026',
        headers: ['العامل', 'MoroccoForYou', 'سلسلة دولية نموذجية'],
        rows: [
          ['التأمين', 'مشمول بالكامل، بلا تكلفة إضافية', 'غالباً بوليصة أساسية، التغطية الكاملة تُباع كإضافة'],
          ['الوديعة', 'منخفضة، أحياناً معدومة — محددة بسقف 200€ حتى بموديلاتنا الفاخرة', 'قد تصل 500€–2,000€+ لفئات الفخامة/الدفع الرباعي'],
          ['الاستلام', 'استقبال مجاني بالوصول', 'مكتب بالصالة أو حافلة نقل لمكتب قريب'],
          ['الإلغاء', 'مجاني حتى 48 ساعة قبل', 'يتفاوت حسب نوع السعر، غالباً أقل مرونة'],
          ['التعرف على العلامة', 'محلية، مقرها المغرب', 'علامة عالمية، معايير ثابتة'],
        ],
      },
      callout: {
        label: '🚗 احجز مع وكالة محلية موثوقة',
        body: 'تأمين كامل مشمول، وديعة محددة بسقف 200€ حتى بموديلاتنا الفاخرة، وإلغاء مجاني حتى 48 ساعة قبل. راسلنا بتواريخك ورقم رحلتك: <a href="https://wa.me/212634276534" data-btn="whatsapp">واتساب ←</a> أو <a href="/ar/rent-a-car/casablanca-airport/" data-btn="primary">شاهد السيارات والأسعار ←</a>',
      },
    },
    {
      heading: 'ماذا يشمل فعلاً (وماذا لا يشمل)',
      paragraphs: ['الشفافية هنا أهم من السعر اليومي المعلن.'],
      list: [
        'مشمول بكل إيجار: تأمين كامل، كيلومترات غير محدودة بالإيجارات القياسية، توصيل مجاني للوصول أو فندقك',
        'غير مشمول: الوقود (العودة بنفس المستوى المستلم — سياسة ممتلئ-لممتلئ)، الرسوم، مخالفات الوقوف',
        'الوديعة: عادةً منخفضة، وأحياناً معدومة حسب فئة المركبة ومدة الإيجار',
      ],
    },
    {
      heading: 'ماذا يقول عملاؤنا',
      paragraphs: ['ردود حقيقية من مسافرين حديثين استأجروا عبرنا بمطار الدار البيضاء.'],
      callout: {
        label: '⭐ 4.9/5 من +600 مسافر',
        body: '"خدمة ممتازة جداً، أعجبتني كثيراً" — تقييم عميل حديث. "أحببت الخدمة وأريد ذكر الشخص الذي سلم السيارة — كان ودوداً جداً والخدمة كانت رائعة" — عميل آخر حديث، واصفاً استلامه بالمطار.',
      },
    },
  ],
  faqs: [
    { question: 'ما أرخص سيارة للإيجار بمطار الدار البيضاء؟', answer: 'الموديلات الاقتصادية كداسيا ساندرو وهيونداي i10 وكيا بيكانتو عادةً الأرخص، من حوالي 28€/يوم.' },
    { question: 'كم تكلفة إيجار داسيا داستر بمطار الدار البيضاء؟', answer: 'داسيا داستر، خيار الدفع الرباعي الأكثر شيوعاً، تبدأ عادةً من حوالي 32€/يوم، تأمين كامل مشمول.' },
    { question: 'كم تكلفة إيجار مرسيدس أو بي إم دبليو بمطار الدار البيضاء؟', answer: 'الموديلات الفاخرة كمرسيدس فئة C وبي إم دبليو الفئة 3 تبدأ عادةً من حوالي 39€/يوم مع وكالة محلية.' },
    { question: 'ما الفرق بين الإيجار من وكالة محلية وهيرتز أو سيكست بمطار الدار البيضاء؟', answer: 'كلاهما خيار مشروع. الفروق العملية الرئيسية عادةً حجم الوديعة وما إذا كان التأمين مشمولاً بالكامل أو يُباع منفصلاً ومرونة الاستلام.' },
    { question: 'هل الوديعة مطلوبة لإيجار سيارة بمطار الدار البيضاء؟', answer: 'يعتمد على المزود. سلاسل دولية عديدة تطلب وديعة من بضع مئات حتى أكثر من 1,000€. الوكالات المحلية غالباً تقدم ودائع أقل.' },
  ],
  peopleAlsoAsk: [
    { question: 'أي شركات تأجير موجودة بمطار الدار البيضاء؟', answer: 'علامات دولية منها هيرتز وأفيس ويوروكار وسيكست وبدجت وثريفتي تدير مكاتب بصالة الوصول بكلا الطرفين.' },
    { question: 'ما أشهر سيارة إيجار بمطار الدار البيضاء؟', answer: 'الموديلات المدمجة — خاصة كيا بيكانتو وبيجو 208 — مذكورة باستمرار كالأكثر شعبية وحجزاً بCMN.' },
    { question: 'هل أحتاج رخصة قيادة دولية لإيجار سيارة بالدار البيضاء؟', answer: 'معظم الوكالات تقبل رخصة قيادة سارية من بلدك محتفظ بها لسنة على الأقل.' },
  ],
  relatedDestinations: ['casablanca'],
  relatedPosts: ['dalil-matar-dar-al-bayda-cmn', 'kirai-sayyara-dar-al-bayda-bidun-daman', 'istajar-sayyara-fakhira-dar-al-bayda', 'dalil-safar-al-a3mal-dar-al-bayda'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);