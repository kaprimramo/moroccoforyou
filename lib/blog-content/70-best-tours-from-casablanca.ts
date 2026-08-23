import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'best-tours-from-casablanca';
const SLUG_FR = 'meilleures-excursions-depuis-casablanca';
const SLUG_AR = 'afdal-jawlat-min-dar-al-bayda';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(6587481);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Best Tours from Casablanca 2026: City Tours, Layover Options & Multi-Day Circuits',
  metaDescription: 'Compare the best tours from Casablanca 2026: half-day city tours, layover-friendly options, desert tours, and 5-15 day Morocco circuits starting from Casablanca. Real prices and how to choose.',
  title: 'Best Tours from Casablanca 2026: City Tours, Layover Options & Multi-Day Circuits',
  description: 'Quick answer: Casablanca works as a starting point for three distinct types of tours — half-day city tours covering the Hassan II Mosque and Corniche, layover-friendly options for travelers with only a few hours between flights, and multi-day circuits (typically 7-15 days) covering Chefchaouen, Fes, the Sahara and Marrakech. This guide compares real options and prices for each.',
  keyword: 'casablanca tours',
  coverImage: COVER,
  coverAlt: 'Best tours from Casablanca 2026 — guided group at the Hassan II Mosque with the Atlantic coast visible behind',
  publishedISO: '2026-08-23',
  updatedISO: '2026-08-23',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 12,
  intro: 'Quick answer: Casablanca serves three distinct tour needs. For a few hours between flights, layover-friendly city tours cover the Hassan II Mosque, the Corniche and the old medina in 3-4 hours. For a full day, city tours add the Habous Quarter and local markets. For travelers using Casablanca as their Morocco entry point, multi-day circuits (commonly 7, 8, 10, or up to 15 days) run from Casablanca through Chefchaouen, Fes, the Sahara desert and Marrakech before returning. This guide compares real options across all three.',
  sections: [
    {
      heading: 'Casablanca City Tours — Half-Day and Full-Day Options',
      paragraphs: [
        'For travelers with limited time in Casablanca itself, a guided city tour is the most efficient way to see the highlights without navigating independently.',
      ],
      table: {
        caption: 'Casablanca city tour options 2026',
        headers: ['Tour type', 'Duration', 'What it covers'],
        rows: [
          ['Layover tour', '3-4 hours', 'Hassan II Mosque (exterior or interior with advance booking), Corniche, quick medina walk — designed specifically for travelers with a flight connection'],
          ['Half-day city tour', '4-5 hours', 'Hassan II Mosque, Corniche, Mohammed V Square, Old Medina'],
          ['Full-day city tour', '6-8 hours', 'Adds the Habous Quarter (New Medina), Royal Palace exterior, and often a food or market stop'],
          ['Casablanca food tour', 'Half day', 'Local market visits, street food tastings, often includes central market and a traditional lunch'],
        ],
      },
      callout: {
        label: '💡 Direct Answer: Which Casablanca Tour Should You Book?',
        body: 'If you have a layover of 5+ hours, a dedicated layover tour is worth arranging — Casablanca Airport (CMN) sits close enough to the city that this is genuinely feasible without missing your connection, provided you build in buffer time for immigration and security on return. For a standard visit, a half-day tour covers the essentials without an overly long day.',
      },
    },
    {
      heading: 'Multi-Day Morocco Tours Starting from Casablanca',
      paragraphs: [
        'Since Casablanca Mohammed V is Morocco\'s main international airport, it is the natural starting point for multi-day circuits covering the rest of the country.',
      ],
      table: {
        caption: 'Multi-day tours from Casablanca 2026',
        headers: ['Duration', 'Typical route', 'Best for'],
        rows: [
          ['5-7 days', 'Casablanca → Rabat → Chefchaouen → Fes → Marrakech (or reverse)', 'Travelers with a week wanting the essential circuit'],
          ['8-10 days', 'Adds the Sahara desert (Merzouga) with a camel trek and desert camp night', 'The most popular duration — balances pace with comprehensive coverage'],
          ['12-15 days', 'Extends to include Essaouira, additional Atlas Mountains time, or a slower pace throughout', 'Travelers wanting a genuinely unhurried trip without cutting destinations'],
        ],
      },
      callout: {
        label: '🎫 Book a Multi-Day Tour',
        body: 'For verified private and shared multi-day tours with real reviews, see our <a href="/blog/best-private-morocco-tours">Best Private Morocco Tours guide</a> and <a href="/blog/marrakech-to-merzouga-tours-compared">Marrakech to Merzouga Tours comparison</a> — several of these tours can be adapted to start from Casablanca instead of Marrakech.',
      },
    },
    {
      heading: 'Casablanca to Marrakech — Tour vs Self-Drive',
      paragraphs: [
        'This specific route sees consistent search interest, and travelers genuinely split between guided and independent options.',
      ],
      table: {
        caption: 'Casablanca to Marrakech — tour options vs self-drive',
        headers: ['Option', 'Time', 'Best for'],
        rows: [
          ['Guided day tour', 'Full day round-trip', 'Travelers wanting Marrakech highlights without driving'],
          ['One-way private transfer', '2.5-3 hours', 'Travelers continuing their trip in Marrakech, not returning same day'],
          ['Self-drive rental', '2.5-3 hours each way', 'Full flexibility, ability to stop en route or extend the stay independently'],
        ],
      },
    },
    {
      heading: 'Self-Drive Alternative for Any Route',
      paragraphs: [
        'If you\'d rather explore at your own pace than join a scheduled tour, every route above is fully doable independently with a rental car.',
      ],
      callout: {
        label: '🚗 Rent a Car Instead of a Guided Tour',
        body: 'A rental car gives full control over timing, stops, and pace — particularly useful for multi-day circuits where a guided tour\'s fixed schedule may not match your interests. Economy from MAD 250/day (€23), Dacia Duster 4x4 from MAD 350/day (€32) recommended for Sahara or Atlas routes. Pick up at Casablanca Airport with free meet & greet. See our full <a href="/blog/casablanca-airport-guide-cmn">Casablanca Airport Guide</a>, or message us: <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    {
      question: 'Can I do a tour of Casablanca during a flight layover?',
      answer: 'Yes — with a layover of 5+ hours, a dedicated layover tour (typically 3-4 hours) covering the Hassan II Mosque, the Corniche and a quick medina walk is genuinely feasible, provided you build in buffer time for immigration and airport security on your return.',
    },
    {
      question: 'What is the best multi-day tour from Casablanca?',
      answer: 'An 8-10 day circuit is the most popular duration, typically covering Chefchaouen, Fes, the Sahara desert (with a camel trek and desert camp night), and Marrakech before returning. Shorter 5-7 day options skip the Sahara; longer 12-15 day trips add Essaouira and a more relaxed pace.',
    },
    {
      question: 'How much does a day tour from Casablanca cost?',
      answer: 'Half-day city tours and layover tours typically run lower cost given the shorter duration, while full-day tours to Marrakech or the desert cost more due to longer distances and driver time. Prices vary significantly by group size and whether the tour is private or shared.',
    },
    {
      question: 'Should I book a Casablanca to Marrakech tour or drive myself?',
      answer: 'A guided day tour suits travelers wanting Marrakech highlights without driving and returning to Casablanca the same day. A one-way private transfer or self-drive rental suits travelers continuing their trip in Marrakech rather than returning — self-drive additionally allows stops en route.',
    },
    {
      question: 'Is Casablanca a good starting point for a Morocco tour?',
      answer: 'Yes — as Morocco\'s main international airport hub, Casablanca is the natural starting point for multi-day circuits, with the widest choice of onward flight and rental car options compared to other Moroccan cities.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is there to see on a Casablanca city tour?', answer: 'The Hassan II Mosque (one of the largest mosques in the world, with ocean-facing architecture), the Corniche coastal promenade, Mohammed V Square, the Old Medina, and often the Habous Quarter (New Medina) on longer tours.' },
    { question: 'How long is the drive from Casablanca to the Sahara desert?', answer: 'Approximately 8-9 hours to Merzouga, which is why most desert tours from Casablanca run as multi-day trips (typically 3+ days) rather than a single-day round trip, usually breaking the journey via Marrakech or Fes.' },
    { question: 'Can I visit Chefchaouen on a day trip from Casablanca?', answer: 'It is possible but demanding — the drive is approximately 4-4.5 hours each way, making it a very long single day. Most travelers instead combine Chefchaouen with an overnight stop or as part of a multi-day circuit.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech'],
  relatedPosts: ['casablanca-travel-guide', 'best-private-morocco-tours', 'marrakech-to-merzouga-tours-compared', 'casablanca-airport-guide-cmn'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Meilleures Excursions depuis Casablanca 2026 : Visites Ville, Escale et Circuits',
  metaDescription: 'Comparez les meilleures excursions depuis Casablanca 2026 : visites ville demi-journée, options adaptées aux escales, excursions désert, et circuits Maroc 5-15 jours au départ de Casablanca.',
  title: 'Meilleures Excursions depuis Casablanca 2026 : Visites Ville, Escale et Circuits Multi-Jours',
  description: 'Réponse rapide : Casablanca fonctionne comme point de départ pour trois types d\'excursions distincts — visites ville demi-journée couvrant la Mosquée Hassan II et la Corniche, options adaptées aux escales pour voyageurs avec seulement quelques heures entre vols, et circuits multi-jours (typiquement 7-15 jours) couvrant Chefchaouen, Fès, le Sahara et Marrakech.',
  keyword: 'excursions casablanca',
  coverImage: COVER,
  coverAlt: 'Meilleures excursions depuis Casablanca 2026 — groupe guidé à la Mosquée Hassan II avec la côte atlantique visible derrière',
  publishedISO: '2026-08-23',
  updatedISO: '2026-08-23',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 12,
  intro: 'Réponse rapide : Casablanca sert trois besoins d\'excursion distincts. Pour quelques heures entre vols, les visites ville adaptées aux escales couvrent la Mosquée Hassan II, la Corniche et l\'ancienne médina en 3-4 heures. Pour une journée complète, les visites ville ajoutent le Quartier Habous et les marchés locaux. Pour les voyageurs utilisant Casablanca comme point d\'entrée au Maroc, les circuits multi-jours (communément 7, 8, 10, ou jusqu\'à 15 jours) partent de Casablanca à travers Chefchaouen, Fès, le désert du Sahara et Marrakech.',
  sections: [
    {
      heading: 'Visites Ville de Casablanca — Options Demi-Journée et Journée Complète',
      paragraphs: ['Pour les voyageurs avec un temps limité à Casablanca même, une visite guidée est le moyen le plus efficace de voir les points forts.'],
      table: {
        caption: 'Options visite ville Casablanca 2026',
        headers: ['Type de visite', 'Durée', 'Ce qu\'elle couvre'],
        rows: [
          ['Visite escale', '3-4 heures', 'Mosquée Hassan II, Corniche, marche rapide médina — conçue spécifiquement pour voyageurs en correspondance'],
          ['Visite ville demi-journée', '4-5 heures', 'Mosquée Hassan II, Corniche, Place Mohammed V, Ancienne Médina'],
          ['Visite ville journée complète', '6-8 heures', 'Ajoute le Quartier Habous, extérieur du Palais Royal, souvent arrêt marché'],
          ['Visite gastronomique Casablanca', 'Demi-journée', 'Visites marché local, dégustations street food'],
        ],
      },
      callout: {
        label: '💡 Réponse Directe : Quelle Excursion Casablanca Réserver ?',
        body: 'Avec une escale de 5+ heures, une visite escale dédiée vaut la peine — l\'aéroport de Casablanca (CMN) est assez proche de la ville pour que ce soit vraiment faisable sans manquer votre correspondance, à condition de prévoir une marge pour l\'immigration et la sécurité au retour.',
      },
    },
    {
      heading: 'Circuits Maroc Multi-Jours au Départ de Casablanca',
      paragraphs: ['Casablanca Mohammed V étant le principal aéroport international du Maroc, c\'est le point de départ naturel pour les circuits multi-jours.'],
      table: {
        caption: 'Circuits multi-jours depuis Casablanca 2026',
        headers: ['Durée', 'Itinéraire typique', 'Idéal pour'],
        rows: [
          ['5-7 jours', 'Casablanca → Rabat → Chefchaouen → Fès → Marrakech', 'Voyageurs avec une semaine voulant le circuit essentiel'],
          ['8-10 jours', 'Ajoute le désert du Sahara (Merzouga) avec trek chameau et nuit camp désert', 'La durée la plus populaire'],
          ['12-15 jours', 'S\'étend pour inclure Essaouira, temps Atlas supplémentaire', 'Voyageurs voulant un rythme vraiment détendu'],
        ],
      },
      callout: {
        label: '🎫 Réservez un Circuit Multi-Jours',
        body: 'Voir notre <a href="/blog/meilleurs-circuits-prives-maroc">guide Meilleurs Circuits Privés au Maroc</a> et notre <a href="/blog/excursion-marrakech-merzouga-circuits">comparaison Excursion Marrakech Merzouga</a>.',
      },
    },
    {
      heading: 'Casablanca à Marrakech — Excursion vs Autoconduite',
      paragraphs: ['Cet itinéraire spécifique voit un intérêt de recherche constant.'],
      table: {
        caption: 'Casablanca à Marrakech — options excursion vs autoconduite',
        headers: ['Option', 'Temps', 'Idéal pour'],
        rows: [
          ['Excursion journée guidée', 'Journée complète aller-retour', 'Voyageurs voulant les points forts sans conduire'],
          ['Transfert privé aller simple', '2,5-3 heures', 'Voyageurs continuant leur voyage à Marrakech'],
          ['Location autoconduite', '2,5-3 heures chaque sens', 'Flexibilité totale'],
        ],
      },
    },
    {
      heading: 'Alternative Autoconduite pour Tout Itinéraire',
      paragraphs: ['Si vous préférez explorer à votre rythme, chaque itinéraire ci-dessus est faisable indépendamment.'],
      callout: {
        label: '🚗 Louez une Voiture Plutôt qu\'une Excursion Guidée',
        body: 'Économique dès MAD 250/jour (23€), Dacia Duster 4x4 dès MAD 350/jour (32€) recommandé pour Sahara ou Atlas. Prise en charge à l\'aéroport de Casablanca. Voir notre <a href="/blog/guide-aeroport-casablanca-cmn">Guide Aéroport de Casablanca</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Puis-je faire une visite de Casablanca pendant une escale ?', answer: 'Oui — avec une escale de 5+ heures, une visite escale dédiée (typiquement 3-4 heures) couvrant la Mosquée Hassan II, la Corniche et une marche rapide médina est vraiment faisable.' },
    { question: 'Quel est le meilleur circuit multi-jours depuis Casablanca ?', answer: 'Un circuit 8-10 jours est la durée la plus populaire, couvrant typiquement Chefchaouen, Fès, le désert du Sahara et Marrakech.' },
    { question: 'Combien coûte une excursion journée depuis Casablanca ?', answer: 'Les visites ville demi-journée et escale coûtent généralement moins vu la durée plus courte, tandis que les excursions journée complète vers Marrakech ou le désert coûtent plus.' },
    { question: 'Dois-je réserver une excursion Casablanca-Marrakech ou conduire moi-même ?', answer: 'Une excursion journée guidée convient aux voyageurs voulant les points forts sans conduire et retournant à Casablanca le même jour.' },
    { question: 'Casablanca est-elle un bon point de départ pour un circuit Maroc ?', answer: 'Oui — en tant que principal hub aéroportuaire international du Maroc, Casablanca est le point de départ naturel pour les circuits multi-jours.' },
  ],
  peopleAlsoAsk: [
    { question: 'Qu\'y a-t-il à voir sur une visite ville de Casablanca ?', answer: 'La Mosquée Hassan II, la promenade côtière Corniche, la Place Mohammed V, l\'Ancienne Médina, et souvent le Quartier Habous sur les visites plus longues.' },
    { question: 'Combien de temps dure le trajet de Casablanca au désert du Sahara ?', answer: 'Environ 8-9 heures jusqu\'à Merzouga, d\'où la plupart des excursions désert depuis Casablanca fonctionnent comme voyages multi-jours plutôt qu\'aller-retour en une journée.' },
    { question: 'Puis-je visiter Chefchaouen en excursion journée depuis Casablanca ?', answer: 'C\'est possible mais exigeant — le trajet est d\'environ 4-4,5 heures chaque sens, faisant une très longue journée unique.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech'],
  relatedPosts: ['guide-voyage-casablanca', 'meilleurs-circuits-prives-maroc', 'excursion-marrakech-merzouga-circuits', 'guide-aeroport-casablanca-cmn'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أفضل الجولات من الدار البيضاء 2026: جولات المدينة والترانزيت والمسارات متعددة الأيام',
  metaDescription: 'قارن أفضل الجولات من الدار البيضاء 2026: جولات مدينة نصف يوم، خيارات مناسبة للترانزيت، جولات صحراوية، ومسارات مغرب 5-15 يوماً انطلاقاً من الدار البيضاء.',
  title: 'أفضل الجولات من الدار البيضاء 2026: جولات المدينة والترانزيت والمسارات متعددة الأيام',
  description: 'إجابة سريعة: الدار البيضاء تخدم ثلاثة احتياجات جولات مختلفة. لبضع ساعات بين الرحلات، جولات المدينة المناسبة للترانزيت تغطي مسجد الحسن الثاني والكورنيش والمدينة العتيقة القديمة بـ3-4 ساعات. ليوم كامل، جولات المدينة تضيف حي الحبوس والأسواق المحلية. لمسافري الدار البيضاء كنقطة دخول للمغرب، المسارات متعددة الأيام تمتد من الدار البيضاء عبر شفشاون وفاس والصحراء ومراكش.',
  keyword: 'جولات الدار البيضاء',
  coverImage: COVER,
  coverAlt: 'أفضل الجولات من الدار البيضاء 2026 — مجموعة مرشدة بمسجد الحسن الثاني مع الساحل الأطلسي مرئياً بالخلفية',
  publishedISO: '2026-08-23',
  updatedISO: '2026-08-23',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 12,
  intro: 'إجابة سريعة: الدار البيضاء تخدم ثلاثة احتياجات جولات مختلفة. لبضع ساعات بين الرحلات، جولات المدينة المناسبة للترانزيت تغطي المعالم الأساسية بـ3-4 ساعات. لمسافري الدار البيضاء كنقطة دخول للمغرب، المسارات متعددة الأيام (عادةً 7 أو 8 أو 10 أو حتى 15 يوماً) تمتد عبر شفشاون وفاس والصحراء ومراكش.',
  sections: [
    {
      heading: 'جولات مدينة الدار البيضاء — خيارات نصف يوم ويوم كامل',
      paragraphs: ['للمسافرين بوقت محدود بالدار البيضاء نفسها، جولة مرشدة أكثر الطرق فعالية لرؤية الأبرز.'],
      table: {
        caption: 'خيارات جولة مدينة الدار البيضاء 2026',
        headers: ['نوع الجولة', 'المدة', 'ماذا تشمل'],
        rows: [
          ['جولة ترانزيت', '3-4 ساعات', 'مسجد الحسن الثاني، الكورنيش، نزهة سريعة بالمدينة العتيقة'],
          ['جولة مدينة نصف يوم', '4-5 ساعات', 'مسجد الحسن الثاني، الكورنيش، ساحة محمد الخامس'],
          ['جولة مدينة يوم كامل', '6-8 ساعات', 'تضيف حي الحبوس، خارج القصر الملكي'],
          ['جولة طعام الدار البيضاء', 'نصف يوم', 'زيارات سوق محلي، تذوق طعام شوارع'],
        ],
      },
      callout: {
        label: '💡 إجابة مباشرة: أي جولة دار بيضاء تحجز؟',
        body: 'بترانزيت +5 ساعات، جولة ترانزيت مخصصة تستحق الترتيب — مطار الدار البيضاء (CMN) قريب بما يكفي من المدينة ليكون هذا ممكناً فعلاً بلا فوات الرحلة.',
      },
    },
    {
      heading: 'مسارات مغرب متعددة الأيام انطلاقاً من الدار البيضاء',
      paragraphs: ['بما أن مطار الدار البيضاء محمد الخامس المطار الدولي الرئيسي بالمغرب، فهو نقطة الانطلاق الطبيعية للمسارات متعددة الأيام.'],
      table: {
        caption: 'مسارات متعددة الأيام من الدار البيضاء 2026',
        headers: ['المدة', 'المسار النموذجي', 'الأنسب لـ'],
        rows: [
          ['5-7 أيام', 'الدار البيضاء ← الرباط ← شفشاون ← فاس ← مراكش', 'المسافرون بأسبوع يريدون المسار الأساسي'],
          ['8-10 أيام', 'يضيف صحراء مرزوقة برحلة جمل وليلة مخيم', 'المدة الأكثر شعبية'],
          ['12-15 يوماً', 'يمتد ليشمل الصويرة ووقت أطلس إضافي', 'الباحثون عن وتيرة مسترخية فعلاً'],
        ],
      },
      callout: {
        label: '🎫 احجز مساراً متعدد الأيام',
        body: 'راجع <a href="/blog/afdal-jawlat-khasa-maghrib">دليل أفضل الجولات الخاصة بالمغرب</a> و<a href="/blog/rihla-marakish-mirzuqa-jawlat-fakhira">مقارنة رحلة مراكش مرزوقة</a>.',
      },
    },
    {
      heading: 'الدار البيضاء لمراكش — جولة مقابل القيادة الذاتية',
      paragraphs: ['هذا المسار المحدد يشهد اهتمام بحث ثابت.'],
      table: {
        caption: 'الدار البيضاء لمراكش — خيارات جولة مقابل قيادة ذاتية',
        headers: ['الخيار', 'الوقت', 'الأنسب لـ'],
        rows: [
          ['جولة يوم مرشدة', 'يوم كامل ذهاباً وإياباً', 'الباحثون عن الأبرز بلا قيادة'],
          ['نقل خاص باتجاه واحد', '2.5-3 ساعات', 'المسافرون المتابعون رحلتهم بمراكش'],
          ['تأجير ذاتي القيادة', '2.5-3 ساعات كل اتجاه', 'مرونة كاملة'],
        ],
      },
    },
    {
      heading: 'بديل القيادة الذاتية لأي مسار',
      paragraphs: ['إن فضلت الاستكشاف بوتيرتك، كل مسار أعلاه قابل للتنفيذ بشكل مستقل.'],
      callout: {
        label: '🚗 استأجر سيارة بدلاً من جولة مرشدة',
        body: 'اقتصادية من MAD 250/يوم (23€)، داشيا دوستر 4x4 من MAD 350/يوم (32€) موصى بها للصحراء أو الأطلس. راجع <a href="/blog/dalil-matar-dar-al-bayda-cmn">دليل مطار الدار البيضاء</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'هل يمكن جولة الدار البيضاء أثناء ترانزيت رحلة؟', answer: 'نعم — بترانزيت +5 ساعات، جولة ترانزيت مخصصة (3-4 ساعات) تغطي مسجد الحسن الثاني والكورنيش ممكنة فعلاً.' },
    { question: 'ما أفضل مسار متعدد الأيام من الدار البيضاء؟', answer: 'مسار 8-10 أيام المدة الأكثر شعبية، يغطي عادةً شفشاون وفاس وصحراء ومراكش.' },
    { question: 'كم تكلفة جولة يوم من الدار البيضاء؟', answer: 'جولات المدينة نصف اليوم والترانزيت تكلف أقل عموماً نظراً للمدة الأقصر.' },
    { question: 'هل أحجز جولة الدار البيضاء-مراكش أم أقود بنفسي؟', answer: 'جولة يوم مرشدة تناسب الباحثين عن الأبرز بلا قيادة والعودة بنفس اليوم.' },
    { question: 'هل الدار البيضاء نقطة انطلاق جيدة لمسار مغرب؟', answer: 'نعم — كمحور مطار دولي رئيسي بالمغرب، الدار البيضاء نقطة الانطلاق الطبيعية للمسارات متعددة الأيام.' },
  ],
  peopleAlsoAsk: [
    { question: 'ماذا يوجد لرؤيته بجولة مدينة الدار البيضاء؟', answer: 'مسجد الحسن الثاني، الكورنيش، ساحة محمد الخامس، المدينة العتيقة القديمة، وغالباً حي الحبوس.' },
    { question: 'كم يستغرق الطريق من الدار البيضاء لصحراء الصحراء؟', answer: 'حوالي 8-9 ساعات لمرزوقة، لذا معظم الجولات الصحراوية تعمل كرحلات متعددة الأيام.' },
    { question: 'هل يمكن زيارة شفشاون برحلة يوم من الدار البيضاء؟', answer: 'ممكن لكن متطلب — الطريق حوالي 4-4.5 ساعة كل اتجاه، مما يجعله يوماً واحداً طويلاً جداً.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech'],
  relatedPosts: ['dalil-safar-dar-al-bayda', 'afdal-jawlat-khasa-maghrib', 'rihla-marakish-mirzuqa-jawlat-fakhira', 'dalil-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);