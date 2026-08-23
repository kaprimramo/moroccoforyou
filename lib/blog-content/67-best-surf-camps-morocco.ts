import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'best-surf-camps-morocco';
const SLUG_FR = 'meilleurs-camps-surf-maroc';
const SLUG_AR = 'afdal-mukhayamat-rukub-al-amwaj-maghrib';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(1549180);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Best Surf Camps in Morocco 2026: Taghazout, Tamraght & Imsouane Compared',
  metaDescription: 'Compare the best surf camps in Morocco 2026: Surf Maroc (Amouage), Dfrost Almugar, Blue Waves Surf House, Original Surf Morocco, Pure Surf Camp and more. Real prices from €309-800/week, ratings, and which camp fits your level.',
  title: 'Best Surf Camps in Morocco 2026: Taghazout, Tamraght & Imsouane Compared',
  description: 'Quick answer: Morocco\'s surf coast hosts the highest concentration of surf camps in Africa outside South Africa, ranging from budget hostels around €309/week to boutique four-star retreats with alcohol licenses and private pools. Surf Maroc\'s Amouage in Taghazout leads on luxury; Blue Waves Surf House in Tamraght and Anza is consistently praised for its boho design; Original Surf Morocco and Pure Surf Camp offer strong budget-to-mid-range value. This guide compares real 2026 camps, prices, and which one fits your level and budget.',
  keyword: 'surf camp morocco',
  coverImage: COVER,
  coverAlt: 'Best surf camps in Morocco 2026 — rooftop terrace of a surf camp overlooking the Atlantic coast at Taghazout with surfboards lined up',
  publishedISO: '2026-08-23',
  updatedISO: '2026-08-23',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 14,
  intro: 'Quick answer: Taghazout and Tamraght host the densest concentration of surf camps in Africa outside South Africa, spanning every budget from €309/week hostel-style packages to €800+/week boutique retreats. Surf Maroc\'s flagship Amouage property in Taghazout stands out for genuine luxury — a 4-star build with the town\'s first alcohol license and views over Anchor Point. Blue Waves Surf House (with locations in Tamraght and Anza) is a consistent favourite for its boho-Berber design and cactus-garden rooftop. For our full breakdown of the surf spots themselves — Anchor Point, Imsouane\'s Bay, and everywhere in between — see our companion <a href="/blog/surf-morocco-complete-guide">Surfing in Morocco Complete Guide</a>. This guide focuses specifically on where to stay.',
  sections: [
    {
      heading: 'Best Surf Camps in Morocco — Compared',
      paragraphs: [
        'The right camp depends heavily on your priorities — some genuinely focus on progression and coaching, others lean into the social/yoga side, and a handful offer real luxury.',
      ],
      table: {
        caption: 'Best surf camps in Morocco 2026',
        headers: ['Camp', 'Location', 'Style', 'Price range'],
        rows: [
          ['Surf Maroc — Amouage', 'Taghazout', '4-star luxury build, first alcohol license in town, views over Anchor Point, dorm-to-palatial-suite range', 'From €620/week (all-inclusive packages)'],
          ['Blue Waves Surf House', 'Tamraght (also Anza Beach)', 'Boho-Berber design, adobe bathrooms, cacti rooftop garden for wave-checking', 'Mid-range'],
          ['Dfrost Almugar Taghazout Villa', 'Taghazout, overlooking the main beach', '8-day camp format, stylish villa setting', 'Mid-to-upper range'],
          ['Original Surf Morocco', 'Taghazout', 'Small, friendly team, relaxed vibe, well-reviewed for personal attention', 'Budget-mid range'],
          ['Pure Surf Camp Morocco', 'Aourir, near Taghazout', 'Rooftop-focused, chill atmosphere, genuinely budget-friendly', 'From €309/week'],
          ['Solid Surf House', 'Tamraght', 'Daily yoga, surf lessons, video analysis and theory sessions', 'From €479/week'],
          ['Olo Surf & Nature', 'Imsouane', 'Positioned directly for The Bay, quieter alternative to Taghazout camps', 'Mid-range'],
          ['Sea View Surf Camp', 'Aourir', '180° ocean view, relaxed vibe', 'From €389/week'],
          ['Yuba Surf Morocco', 'Tamraght', 'Highly rated specifically for complete beginners', 'Budget-mid range'],
        ],
      },
      callout: {
        label: '💡 Which Camp Should You Book?',
        body: 'For genuine luxury and the best views of Anchor Point: Surf Maroc\'s Amouage. For boho design and a quieter Tamraght base: Blue Waves Surf House. For complete beginners wanting a calm, structured introduction: Yuba Surf Morocco. For the best budget value: Pure Surf Camp Morocco from €309/week. For Imsouane\'s famously long, mellow wave away from Taghazout\'s crowds: Olo Surf & Nature.',
      },
    },
    {
      heading: 'What a Typical All-Inclusive Package Includes',
      paragraphs: [
        'Nearly every established camp follows a similar package structure, regardless of price tier.',
      ],
      list: [
        'Shared or private accommodation (dorm, shared twin, or private room depending on budget)',
        'Daily surf guiding — camps typically transport guests to whichever break suits the day\'s conditions and group level',
        'Board and wetsuit rental included',
        'Breakfast and often dinner (home-cooked Moroccan meals are a consistent highlight across nearly every camp reviewed)',
        'Airport transfer from Agadir, usually included or available as a paid add-on',
        'Yoga sessions at many properties — genuinely optional at most, core to the offering at a few (Solid Surf House, several Imsouane camps)',
      ],
    },
    {
      heading: 'Real 2026 Prices by Budget',
      paragraphs: [
        'Morocco consistently undercuts equivalent European surf camps on price, which is part of why it has become such a popular winter destination.',
      ],
      table: {
        caption: 'Morocco surf camp prices by budget 2026',
        headers: ['Budget', 'Price/week', 'What to expect'],
        rows: [
          ['Budget hostels', '€309-390/week', 'Pure Surf Camp, Sea View Surf Camp — shared rooms, rooftop social spaces, core package included'],
          ['Mid-range', '€479-620/week', 'Solid Surf House, Surf Maroc standard rooms — private/semi-private, structured lessons and yoga'],
          ['Premium', '€709-800+/week', 'Boutique retreats with enhanced coaching, better food, more privacy'],
          ['Luxury', 'Palatial suite rates, Amouage top tier', 'Surf Maroc\'s Amouage at the top end — 4-star build, alcohol license, Anchor Point views'],
        ],
      },
    },
    {
      heading: 'Choosing Your Camp by Skill Level',
      paragraphs: [
        'Not every camp suits every level equally — some genuinely specialize in one end of the spectrum.',
      ],
      table: {
        caption: 'Best surf camps by skill level 2026',
        headers: ['Level', 'Recommended camps', 'Why'],
        rows: [
          ['Complete beginner', 'Yuba Surf Morocco, Wave Gypsy Surf & Yoga', 'Structured, patient teaching approach; Wave Gypsy\'s yoga-forward 8-day format suits nervous first-timers'],
          ['Improving/intermediate', 'Solid Surf House, Original Surf Morocco', 'Video analysis and coaching progression, daily guiding to the right-level breaks'],
          ['Advanced/experienced', 'Surf Maroc (Amouage), Dfrost Almugar', 'Direct access and knowledge of Anchor Point, Killer Point and the serious breaks'],
          ['Wanting quieter/less crowded waves', 'Olo Surf & Nature (Imsouane)', 'Based directly at The Bay, away from Taghazout\'s more social, crowded scene'],
        ],
      },
    },
    {
      heading: 'Getting to Your Surf Camp',
      paragraphs: [
        'Nearly all Taghazout and Tamraght camps sit within 45 minutes of Agadir Al Massira Airport (AGA), with most offering airport pickup as part of the package or a small add-on fee.',
      ],
      callout: {
        label: '🚗 Rent a Car Instead of Relying on Camp Transport',
        body: 'If you want the freedom to explore beyond your camp\'s daily surf guiding — visiting Paradise Valley, driving to Imsouane independently, or continuing on to Essaouira — a rental car gives genuine flexibility. Economy from MAD 250/day (€23), pick up at Agadir Airport with free meet & greet. See our full <a href="/blog/agadir-car-rental-airport">Agadir Car Rental Guide</a>, or message us: <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    {
      question: 'What is the best surf camp in Morocco?',
      answer: 'It depends on your priorities. Surf Maroc\'s Amouage leads on genuine luxury with 4-star amenities and views over Anchor Point. Blue Waves Surf House is consistently praised for its distinctive boho-Berber design. For budget travelers, Pure Surf Camp Morocco offers strong value from €309/week. For complete beginners, Yuba Surf Morocco is specifically well-regarded.',
    },
    {
      question: 'How much does a surf camp cost in Morocco?',
      answer: 'Budget hostel-style camps start around €309-390/week. Mid-range camps with private rooms and structured coaching run €479-620/week. Premium and luxury retreats range from €709/week up to palatial suite rates at top properties like Surf Maroc\'s Amouage.',
    },
    {
      question: 'Should I stay in Taghazout or Tamraght for a surf camp?',
      answer: 'Taghazout is louder, busier and more social, with direct access to Anchor Point and the famous breaks. Tamraght, a few kilometres south, is quieter and more residential while remaining close to the action — many camps have shifted their base here for this reason.',
    },
    {
      question: 'What is included in a Morocco surf camp package?',
      answer: 'Nearly every established camp includes accommodation, daily surf guiding to the appropriate break, board and wetsuit rental, breakfast (often dinner too), and either included or add-on airport transfer from Agadir. Yoga sessions are common but optional at most properties.',
    },
    {
      question: 'Is Imsouane a good alternative to Taghazout for a surf camp?',
      answer: 'Yes — Imsouane offers a genuinely quieter, more low-key experience centered on The Bay, one of the longest rideable waves in Africa. Camps like Olo Surf & Nature are positioned directly for this wave, making Imsouane a strong choice for travelers wanting to avoid Taghazout\'s busier, more social scene.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is Surf Maroc a good surf camp?', answer: 'Yes — Surf Maroc, particularly its Amouage property in Taghazout, is one of the most established and highly regarded operators in Morocco, offering everything from dorm rooms to palatial suites with views over Anchor Point, plus the town\'s first alcohol license.' },
    { question: 'How far in advance should I book a Morocco surf camp?', answer: 'Booking several weeks to a couple of months ahead is generally recommended, particularly for peak winter season (October-April) when demand is highest and the best-known camps fill up.' },
    { question: 'Do surf camps in Morocco offer yoga?', answer: 'Many do, though it varies by camp — some genuinely build yoga into the daily structure (Solid Surf House, several Imsouane properties), while others offer it as an optional add-on alongside the core surf package.' },
  ],
  relatedDestinations: ['agadir', 'essaouira'],
  relatedPosts: ['surf-morocco-complete-guide', 'agadir-car-rental-airport', 'agadir-travel-guide', 'essaouira-travel-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Meilleurs Camps de Surf au Maroc 2026 : Taghazout, Tamraght & Imsouane Comparés',
  metaDescription: 'Comparez les meilleurs camps de surf au Maroc 2026 : Surf Maroc (Amouage), Dfrost Almugar, Blue Waves Surf House, Original Surf Morocco, Pure Surf Camp et plus. Vrais prix dès 309-800€/semaine.',
  title: 'Meilleurs Camps de Surf au Maroc 2026 : Taghazout, Tamraght & Imsouane Comparés',
  description: 'Réponse rapide : la côte de surf marocaine héberge la plus forte concentration de camps de surf d\'Afrique hors Afrique du Sud, allant d\'auberges économiques à ~309€/semaine à des retraites boutique 4 étoiles avec licence alcool et piscines privées.',
  keyword: 'camp surf maroc',
  coverImage: COVER,
  coverAlt: 'Meilleurs camps de surf au Maroc 2026 — terrasse sur le toit d\'un camp de surf surplombant la côte atlantique à Taghazout',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 14,
  intro: 'Réponse rapide : Taghazout et Tamraght hébergent la concentration la plus dense de camps de surf d\'Afrique hors Afrique du Sud, couvrant tous les budgets de 309€/semaine style auberge à 800€+/semaine retraites boutique. La propriété phare Amouage de Surf Maroc à Taghazout se démarque par un luxe véritable — construction 4 étoiles avec la première licence alcool de la ville et vues sur Anchor Point. Pour notre analyse complète des spots de surf eux-mêmes, voir notre guide compagnon <a href="/blog/guide-complet-surf-maroc">Surf au Maroc Guide Complet</a>. Ce guide se concentre spécifiquement sur où loger.',
  sections: [
    {
      heading: 'Meilleurs Camps de Surf au Maroc — Comparés',
      paragraphs: ['Le bon camp dépend fortement de vos priorités.'],
      table: {
        caption: 'Meilleurs camps de surf au Maroc 2026',
        headers: ['Camp', 'Emplacement', 'Style', 'Gamme de prix'],
        rows: [
          ['Surf Maroc — Amouage', 'Taghazout', 'Construction luxe 4 étoiles, première licence alcool de la ville', 'Dès 620€/semaine tout compris'],
          ['Blue Waves Surf House', 'Tamraght (aussi Anza Beach)', 'Design boho-berbère, salles de bain adobe', 'Milieu de gamme'],
          ['Dfrost Almugar Taghazout Villa', 'Taghazout', 'Format camp 8 jours, villa élégante', 'Milieu-haut de gamme'],
          ['Original Surf Morocco', 'Taghazout', 'Petite équipe amicale, ambiance détendue', 'Économique-milieu de gamme'],
          ['Pure Surf Camp Morocco', 'Aourir, près Taghazout', 'Focus terrasse, ambiance chill', 'Dès 309€/semaine'],
          ['Solid Surf House', 'Tamraght', 'Yoga quotidien, analyse vidéo', 'Dès 479€/semaine'],
          ['Olo Surf & Nature', 'Imsouane', 'Positionné directement pour The Bay', 'Milieu de gamme'],
        ],
      },
      callout: {
        label: '💡 Quel Camp Réserver ?',
        body: 'Pour luxe véritable et meilleures vues d\'Anchor Point : Amouage de Surf Maroc. Pour design boho et base Tamraght plus calme : Blue Waves Surf House. Pour meilleure valeur économique : Pure Surf Camp Morocco dès 309€/semaine.',
      },
    },
    {
      heading: 'Ce qu\'un Package Tout Compris Inclut Typiquement',
      paragraphs: ['Presque chaque camp établi suit une structure de package similaire.'],
      list: [
        'Hébergement partagé ou privé',
        'Guidage surf quotidien',
        'Location planche et combinaison incluse',
        'Petit-déjeuner et souvent dîner',
        'Transfert aéroport depuis Agadir',
        'Sessions yoga dans de nombreuses propriétés',
      ],
    },
    {
      heading: 'Vrais Prix 2026 par Budget',
      paragraphs: ['Le Maroc reste constamment moins cher que les camps de surf européens équivalents.'],
      table: {
        caption: 'Prix camps de surf Maroc par budget 2026',
        headers: ['Budget', 'Prix/semaine', 'À quoi s\'attendre'],
        rows: [
          ['Auberges économiques', '309-390€/semaine', 'Pure Surf Camp, Sea View Surf Camp'],
          ['Milieu de gamme', '479-620€/semaine', 'Solid Surf House, Surf Maroc standard'],
          ['Premium', '709-800€+/semaine', 'Retraites boutique avec coaching amélioré'],
          ['Luxe', 'Tarifs suite palatiale', 'Amouage de Surf Maroc au sommet'],
        ],
      },
    },
    {
      heading: 'Choisir Votre Camp par Niveau',
      paragraphs: ['Chaque camp ne convient pas également à tous les niveaux.'],
      table: {
        caption: 'Meilleurs camps de surf par niveau 2026',
        headers: ['Niveau', 'Camps recommandés', 'Pourquoi'],
        rows: [
          ['Débutant complet', 'Yuba Surf Morocco, Wave Gypsy', 'Approche pédagogique structurée et patiente'],
          ['Intermédiaire', 'Solid Surf House, Original Surf Morocco', 'Analyse vidéo et progression coaching'],
          ['Avancé', 'Surf Maroc (Amouage), Dfrost Almugar', 'Accès direct à Anchor Point et Killer Point'],
        ],
      },
    },
    {
      heading: 'Rejoindre Votre Camp de Surf',
      paragraphs: ['Presque tous les camps sont à 45 minutes de l\'aéroport Agadir Al Massira (AGA).'],
      callout: {
        label: '🚗 Louez une Voiture Plutôt que le Transport du Camp',
        body: 'Économique dès MAD 250/jour (23€), prise en charge à l\'aéroport d\'Agadir. Voir notre <a href="/blog/location-voiture-agadir-aeroport">Guide Location Voiture Agadir</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Quel est le meilleur camp de surf au Maroc ?', answer: 'Cela dépend de vos priorités. Amouage de Surf Maroc mène sur le luxe véritable. Pure Surf Camp Morocco offre une forte valeur économique dès 309€/semaine.' },
    { question: 'Combien coûte un camp de surf au Maroc ?', answer: 'Camps économiques dès 309-390€/semaine, milieu de gamme 479-620€/semaine, premium 709€+/semaine.' },
    { question: 'Dois-je loger à Taghazout ou Tamraght ?', answer: 'Taghazout est plus animé avec accès direct à Anchor Point. Tamraght, quelques kilomètres au sud, est plus calme et résidentiel.' },
    { question: 'Qu\'est-ce qu\'un package camp de surf inclut ?', answer: 'Hébergement, guidage surf quotidien, location matériel, petit-déjeuner, et transfert aéroport inclus ou en option.' },
    { question: 'Imsouane est-elle une bonne alternative à Taghazout ?', answer: 'Oui — Imsouane offre une expérience plus calme centrée sur The Bay, l\'une des vagues les plus longues d\'Afrique.' },
  ],
  peopleAlsoAsk: [
    { question: 'Surf Maroc est-il un bon camp de surf ?', answer: 'Oui — l\'un des opérateurs les plus établis et réputés au Maroc.' },
    { question: 'Combien de temps à l\'avance réserver un camp de surf ?', answer: 'Plusieurs semaines à quelques mois à l\'avance, particulièrement pour la haute saison hivernale.' },
    { question: 'Les camps de surf au Maroc proposent-ils du yoga ?', answer: 'Beaucoup oui, mais cela varie selon le camp.' },
  ],
  relatedDestinations: ['agadir', 'essaouira'],
  relatedPosts: ['guide-complet-surf-maroc', 'location-voiture-agadir-aeroport', 'guide-voyage-agadir', 'guide-voyage-essaouira'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أفضل معسكرات ركوب الأمواج بالمغرب 2026: تاغازوت وتامراغت وإمسوان',
  metaDescription: 'قارن أفضل معسكرات ركوب الأمواج بالمغرب 2026: سيرف ماروك (أموواج)، دفروست ألموغار، بلو ويفز سيرف هاوس، أوريجينال سيرف مروكو والمزيد. أسعار حقيقية من 309-800€/أسبوع.',
  title: 'أفضل معسكرات ركوب الأمواج بالمغرب 2026: تاغازوت وتامراغت وإمسوان مقارنة',
  description: 'إجابة سريعة: يستضيف ساحل ركوب الأمواج المغربي أعلى تركيز معسكرات ركوب أمواج بأفريقيا خارج جنوب أفريقيا. راجع دليلنا المصاحب لمواقع ركوب الأمواج نفسها. يركز هذا الدليل تحديداً على أين تقيم.',
  keyword: 'معسكر ركوب الأمواج المغرب',
  coverImage: COVER,
  coverAlt: 'أفضل معسكرات ركوب الأمواج بالمغرب 2026 — تراس معسكر ركوب أمواج بالسطح يطل على الساحل الأطلسي بتاغازوت',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 14,
  intro: 'إجابة سريعة: تستضيف تاغازوت وتامراغت أكثف تركيز معسكرات ركوب أمواج بأفريقيا خارج جنوب أفريقيا. عقار أموواج الرائد لسيرف ماروك بتاغازوت يبرز بفخامة حقيقية. راجع دليلنا المصاحب لمواقع ركوب الأمواج. يركز هذا الدليل تحديداً على أين تقيم.',
  sections: [
    {
      heading: 'أفضل معسكرات ركوب الأمواج بالمغرب — مقارنة',
      paragraphs: ['المعسكر المناسب يعتمد كثيراً على أولوياتك.'],
      table: {
        caption: 'أفضل معسكرات ركوب الأمواج بالمغرب 2026',
        headers: ['المعسكر', 'الموقع', 'الطراز', 'نطاق السعر'],
        rows: [
          ['سيرف ماروك — أموواج', 'تاغازوت', 'بناء فاخر 4 نجوم', 'من 620€/أسبوع'],
          ['بلو ويفز سيرف هاوس', 'تامراغت', 'تصميم بوهيمي أمازيغي', 'متوسط'],
          ['دفروست ألموغار', 'تاغازوت', 'فيلا أنيقة', 'متوسط-راقٍ'],
          ['أوريجينال سيرف مروكو', 'تاغازوت', 'فريق صغير ودود', 'اقتصادي-متوسط'],
          ['بيور سيرف كامب', 'أوريير، قرب تاغازوت', 'أجواء استرخاء', 'من 309€/أسبوع'],
        ],
      },
      callout: {
        label: '💡 أي معسكر تحجز؟',
        body: 'للفخامة الحقيقية: أموواج لسيرف ماروك. لأفضل قيمة اقتصادية: بيور سيرف كامب من 309€/أسبوع.',
      },
    },
    {
      heading: 'ما يشمله باقة شاملة نموذجية',
      paragraphs: ['تقريباً كل معسكر راسخ يتبع هيكل باقة مماثل.'],
      list: [
        'إقامة مشتركة أو خاصة',
        'إرشاد ركوب أمواج يومي',
        'تأجير لوح وبدلة مشمول',
        'فطور وغالباً عشاء',
        'نقل مطار من أكادير',
      ],
    },
    {
      heading: 'أسعار حقيقية 2026 حسب الميزانية',
      paragraphs: ['المغرب يبقى دائماً أرخص من معسكرات ركوب الأمواج الأوروبية المماثلة.'],
      table: {
        caption: 'أسعار معسكرات ركوب الأمواج بالمغرب حسب الميزانية 2026',
        headers: ['الميزانية', 'السعر/أسبوع', 'ماذا تتوقع'],
        rows: [
          ['نزل اقتصادية', '309-390€/أسبوع', 'بيور سيرف كامب'],
          ['متوسطة', '479-620€/أسبوع', 'سوليد سيرف هاوس'],
          ['راقية', '709€+/أسبوع', 'ملاذات بوتيك'],
        ],
      },
    },
    {
      heading: 'الوصول لمعسكرك',
      paragraphs: ['تقريباً كل المعسكرات على بعد 45 دقيقة من مطار أكادير المسيرة.'],
      callout: {
        label: '🚗 استأجر سيارة بدلاً من نقل المعسكر',
        body: 'اقتصادية من MAD 250/يوم (23€). راجع <a href="/blog/istijar-sayyara-matar-agadir">دليل تأجير سيارات مطار أكادير</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'ما أفضل معسكر ركوب أمواج بالمغرب؟', answer: 'يعتمد على أولوياتك. أموواج لسيرف ماروك يقود بالفخامة الحقيقية. بيور سيرف كامب يقدم قيمة اقتصادية قوية من 309€/أسبوع.' },
    { question: 'كم تكلفة معسكر ركوب أمواج بالمغرب؟', answer: 'معسكرات اقتصادية من 309-390€/أسبوع، متوسطة 479-620€/أسبوع، راقية 709€+/أسبوع.' },
    { question: 'هل أقيم بتاغازوت أم تامراغت؟', answer: 'تاغازوت أكثر حيوية بوصول مباشر لأنكور بوينت. تامراغت أهدأ وسكنية أكثر.' },
  ],
  peopleAlsoAsk: [
    { question: 'هل سيرف ماروك معسكر جيد؟', answer: 'نعم — من أرسخ وأكثر المشغلين تقديراً بالمغرب.' },
    { question: 'كم مسبقاً أحجز معسكر ركوب أمواج؟', answer: 'عدة أسابيع لبضعة أشهر مسبقاً.' },
  ],
  relatedDestinations: ['agadir', 'essaouira'],
  relatedPosts: ['dalil-shamil-rukub-al-amwaj-maghrib', 'istijar-sayyara-matar-agadir', 'dalil-safar-agadir', 'dalil-safar-essaouira'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);