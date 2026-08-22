import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'tangier-private-tours';
const SLUG_FR = 'excursions-privees-tanger';
const SLUG_AR = 'jawlat-khasa-tanja';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(10188300);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Tangier Private Tours 2026: Chefchaouen, Tetouan & Asilah Day Trips, Real Prices',
  metaDescription: 'Best private tours from Tangier 2026: Chefchaouen day trips, Tetouan and Asilah combos, Cap Spartel and Hercules Caves. Real prices from $45-385/person, verified reviews, and how to book directly.',
  title: 'Tangier Private Tours 2026: Chefchaouen, Tetouan & Asilah Day Trips Compared',
  description: 'Quick answer: Tangier\'s position at the crossroads of the Mediterranean and Atlantic — just 14 km from Spain — makes it the natural base for day trips across northern Morocco. The most popular private tour is the Chefchaouen day trip (roughly $45-125/person depending on group size), often combined with Tetouan\'s UNESCO medina or Asilah\'s mural-covered coastal streets. This guide compares real tours, verified prices, and what each itinerary actually covers.',
  keyword: 'tangier private tours',
  coverImage: COVER,
  coverAlt: 'Tangier private tours 2026 — private guide and driver with tourists overlooking the Chefchaouen blue medina from a scenic viewpoint',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 13,
  intro: 'Quick answer: Tangier sits at the meeting point of the Mediterranean and Atlantic, just 14 km from Spain — which makes it the natural launch point for private day trips across northern Morocco. The most-booked tour by far is the Chefchaouen day trip, typically running 8-11 hours with hotel pickup and a local guide, priced from roughly $45/person in a group of 8 up to $125/person for a fully private tour. Many itineraries add Tetouan\'s UNESCO-listed medina or the Akchour waterfalls along the way, while shorter half-day options cover Tangier itself — the Kasbah, Cap Spartel, and Hercules Caves. This guide compares real verified tours and prices so you can choose the right one.',
  sections: [
    {
      heading: 'Most Popular Tangier Day Trips — Compared',
      paragraphs: [
        'A handful of destinations dominate the Tangier private tour market, each with a genuinely distinct character.',
      ],
      table: {
        caption: 'Best Tangier day trips 2026',
        headers: ['Destination', 'Distance/Duration', 'Typical price/person', 'What you\'ll see'],
        rows: [
          ['Chefchaouen (day trip)', '~2 hours each way, 8-11 hour tour', '$45-125 (group size dependent)', 'Blue-washed medina, Plaza Uta el-Hammam, Kasbah, souks'],
          ['Chefchaouen + Tetouan combo', '~2 hours + 1 hour, full day', '$60-140', 'Both UNESCO/blue-city highlights in one trip — the most popular combined itinerary'],
          ['Chefchaouen + Akchour Waterfalls', 'Full day, 7+ hours', 'Similar to standard Chefchaouen tour', 'Blue city plus a short hike to the Akchour waterfalls and Bridge of God rock formation'],
          ['Tangier city tour (Kasbah, Cap Spartel, Hercules Caves)', '3-5 hours', '$40-90', 'Tangier\'s own highlights — ideal for a shorter stay or cruise stopover'],
          ['Tangier + Asilah', 'Half or full day', '$45-100', 'Combines Tangier sightseeing with Asilah\'s mural-covered coastal medina, ~45 min away'],
        ],
      },
      callout: {
        label: '💡 Direct Answer: Which Tour Should You Book?',
        body: 'If you have one day and want the single most iconic experience, book the Chefchaouen day trip alone — it consistently ranks as the top-booked private tour from Tangier. If you have a full day and want more variety, the Chefchaouen + Tetouan combo adds a genuinely different UNESCO medina without significantly extending the day. For cruise passengers or short stopovers, the Tangier city tour (Kasbah, Cap Spartel) fits comfortably into 3-5 hours.',
      },
    },
    {
      heading: 'Private vs Small Group — What Changes',
      paragraphs: [
        'This affects price more than any other factor, and it\'s worth understanding before you book.',
      ],
      table: {
        caption: 'Private vs small group Tangier tours',
        headers: ['Type', 'Price impact', 'Best for'],
        rows: [
          ['Private (just your group)', 'Higher per person, but scales down significantly with group size — a private tour with 4-6 people can cost roughly the same per person as a small shared group', 'Families, couples wanting flexibility, or groups of 4+'],
          ['Small shared group', 'Lowest cost per person for solo or pair travelers', 'Solo travelers, budget-conscious pairs'],
        ],
      },
      callout: {
        label: '🎫 Book Your Tangier Tour',
        body: 'Verified operators run these tours daily with hotel pickup and free cancellation up to 24 hours before departure — check current availability and prices: <a href="https://www.getyourguide.com/tangier-l835/?partner_id=FMSVUZD">Browse Tangier Tours & Excursions →</a>',
      },
    },
    {
      heading: 'What a Typical Chefchaouen Day Trip Includes',
      paragraphs: [
        'Nearly every Chefchaouen tour from Tangier follows the same core structure, regardless of operator.',
      ],
      list: [
        'Hotel pickup in Tangier, typically early morning (around 8-9am)',
        'Scenic drive through the Rif Mountains (roughly 2 hours each way)',
        'Guided walking tour of Chefchaouen\'s blue medina, including Plaza Uta el-Hammam and the 18th-century Kasbah',
        'Free time to shop the souks for handmade rugs, ceramics and textiles',
        'Lunch break (often not included in the base price — confirm before booking)',
        'Return drive to Tangier, typically arriving by early evening',
      ],
    },
    {
      heading: 'Honest Notes from Real Reviews',
      paragraphs: [
        'A few consistent, practically useful details that show up across verified reviews of Tangier tours.',
      ],
      list: [
        'Multiple reviewers specifically flag the Hercules Caves as skippable — small, dark, and the entry fee (roughly MAD 80) is considered poor value by several travelers, "in and out in under 10 minutes."',
        'The Rif Mountain drive is genuinely winding — reviewers with motion sensitivity recommend sitting in front and taking any recommended medication beforehand.',
        'Drivers and guides are consistently praised by name in reviews for punctuality and local knowledge — a good sign that this remains a personal, guide-led experience rather than a mass-tourism operation.',
        'A 2-day Tangier + Chefchaouen combination (with an overnight) runs roughly $385/person including accommodation, for travelers wanting a more relaxed pace than the single-day round trip.',
      ],
    },
    {
      heading: 'Self-Drive Alternative',
      paragraphs: [
        'If you\'d rather explore at your own pace, every destination above is fully accessible by rental car.',
      ],
      callout: {
        label: '🚗 Rent a Car in Tangier Instead',
        body: 'Chefchaouen, Tetouan and Asilah are all comfortably reachable by rental car, giving you full control over timing and stops. Economy from MAD 250/day (€23). See our full <a href="/blog/marrakech-to-chefchaouen-by-car">Chefchaouen driving guide</a>, or message us to arrange pickup: <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    {
      question: 'How much does a private tour from Tangier to Chefchaouen cost?',
      answer: 'Prices range from roughly $45/person in a larger shared group up to $125/person for a fully private tour, with the specific price depending heavily on group size — private tours become proportionally cheaper per person as the group grows.',
    },
    {
      question: 'How long is the drive from Tangier to Chefchaouen?',
      answer: 'Approximately 2 hours each way through the Rif Mountains, making most day trips run 8-11 hours total including time in Chefchaouen itself and the return journey.',
    },
    {
      question: 'Is the Chefchaouen day trip from Tangier worth it?',
      answer: 'Yes — it is consistently the most-booked private tour from Tangier, and verified reviews across multiple operators repeatedly praise the experience, particularly the guided medina walk and the drive itself through the Rif Mountains. Some tours combine it with Tetouan or the Akchour waterfalls for added value.',
    },
    {
      question: 'Are the Hercules Caves in Tangier worth visiting?',
      answer: 'Reviews are mixed to negative — several travelers describe the site as small and dark, taking under 10 minutes to see, with the roughly MAD 80 entry fee considered poor value by multiple reviewers. Consider skipping it in favor of Cap Spartel itself, which is free and offers genuine views.',
    },
    {
      question: 'Should I book a private tour or self-drive from Tangier?',
      answer: 'A private tour removes the need to navigate the Rif Mountain roads yourself and includes a knowledgeable local guide, which many travelers value for a first visit to Chefchaouen. Self-driving offers full control over timing and cost — a rental car from Tangier runs from MAD 250/day, comparable to or cheaper than a private tour for two or more people.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is the most popular day trip from Tangier?', answer: 'The Chefchaouen day trip is by far the most popular and most-booked private tour from Tangier, drawing travelers with its distinctive blue-washed medina roughly 2 hours away through the Rif Mountains.' },
    { question: 'Can I visit Chefchaouen and Tetouan in one day from Tangier?', answer: 'Yes — this is one of the most popular combined itineraries, typically running a full day (8-11 hours) and priced from roughly $60-140/person, covering both Chefchaouen\'s blue medina and Tetouan\'s UNESCO-listed Andalusian old town.' },
    { question: 'How far is Asilah from Tangier?', answer: 'Approximately 45 minutes, making it a popular half-day or combined-tour addition alongside Tangier\'s own sightseeing, known for its mural-covered medina walls and relaxed coastal atmosphere.' },
  ],
  relatedDestinations: ['tangier', 'chefchaouen'],
  relatedPosts: ['tangier-travel-guide', 'chefchaouen-travel-guide', 'marrakech-to-chefchaouen-by-car', 'best-private-morocco-tours'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Excursions Privées Tanger 2026 : Chefchaouen, Tétouan & Asilah, Vrais Prix',
  metaDescription: 'Meilleures excursions privées depuis Tanger 2026 : excursions Chefchaouen, combos Tétouan et Asilah, Cap Spartel et Grottes d\'Hercule. Vrais prix dès 45-385$/personne, avis vérifiés.',
  title: 'Excursions Privées Tanger 2026 : Chefchaouen, Tétouan & Asilah Comparées',
  description: 'Réponse rapide : la position de Tanger au carrefour de la Méditerranée et de l\'Atlantique — à seulement 14 km de l\'Espagne — en fait la base naturelle pour des excursions à travers le nord du Maroc. L\'excursion la plus populaire est la journée à Chefchaouen (environ 45-125$/personne selon la taille du groupe).',
  keyword: 'excursions privées tanger',
  coverImage: COVER,
  coverAlt: 'Excursions privées Tanger 2026 — guide privé et chauffeur avec touristes surplombant la médina bleue de Chefchaouen',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 13,
  intro: 'Réponse rapide : Tanger se situe au point de rencontre de la Méditerranée et de l\'Atlantique, à seulement 14 km de l\'Espagne — ce qui en fait le point de départ naturel pour des excursions privées à travers le nord du Maroc. L\'excursion la plus réservée est de loin celle de Chefchaouen, durant typiquement 8-11 heures avec prise en charge hôtel, à partir d\'environ 45$/personne en groupe de 8 jusqu\'à 125$/personne pour une excursion entièrement privée.',
  sections: [
    {
      heading: 'Excursions les Plus Populaires depuis Tanger — Comparées',
      paragraphs: ['Quelques destinations dominent le marché des excursions privées de Tanger.'],
      table: {
        caption: 'Meilleures excursions Tanger 2026',
        headers: ['Destination', 'Distance/Durée', 'Prix typique/personne', 'Ce que vous verrez'],
        rows: [
          ['Chefchaouen (excursion journée)', '~2h aller, 8-11h au total', '45-125$ (selon taille groupe)', 'Médina bleue, Place Uta el-Hammam, Kasbah, souks'],
          ['Chefchaouen + Tétouan', '~2h + 1h, journée complète', '60-140$', 'Les deux points forts UNESCO/ville bleue en un voyage'],
          ['Chefchaouen + Cascades d\'Akchour', 'Journée complète, 7h+', 'Similaire au tour standard', 'Ville bleue plus courte randonnée aux cascades'],
          ['Circuit ville Tanger (Kasbah, Cap Spartel, Grottes Hercule)', '3-5 heures', '40-90$', 'Points forts de Tanger même'],
          ['Tanger + Asilah', 'Demi ou journée complète', '45-100$', 'Combine visite Tanger avec médina côtière d\'Asilah'],
        ],
      },
      callout: {
        label: '💡 Réponse Directe : Quelle Excursion Réserver ?',
        body: 'Si vous avez un jour et voulez l\'expérience la plus emblématique, réservez l\'excursion Chefchaouen seule. Si vous voulez plus de variété, la combinaison Chefchaouen + Tétouan ajoute une médina UNESCO vraiment différente.',
      },
    },
    {
      heading: 'Privé vs Petit Groupe — Ce qui Change',
      paragraphs: ['Cela affecte le prix plus que tout autre facteur.'],
      table: {
        caption: 'Privé vs petit groupe excursions Tanger',
        headers: ['Type', 'Impact prix', 'Idéal pour'],
        rows: [
          ['Privé (votre groupe seul)', 'Plus cher par personne, mais diminue significativement avec la taille du groupe', 'Familles, couples voulant flexibilité, groupes de 4+'],
          ['Petit groupe partagé', 'Coût le plus bas par personne pour voyageurs solo/duo', 'Voyageurs solo, duos économes'],
        ],
      },
      callout: {
        label: '🎫 Réservez Votre Excursion Tanger',
        body: 'Des opérateurs vérifiés proposent ces excursions quotidiennement avec prise en charge hôtel et annulation gratuite jusqu\'à 24h avant : <a href="https://www.getyourguide.com/tangier-l835/?partner_id=FMSVUZD">Parcourir les Excursions Tanger →</a>',
      },
    },
    {
      heading: 'Ce qu\'une Excursion Chefchaouen Type Inclut',
      paragraphs: ['Presque chaque excursion suit la même structure de base.'],
      list: [
        'Prise en charge hôtel à Tanger, tôt le matin (vers 8-9h)',
        'Conduite panoramique à travers le Rif (~2h aller)',
        'Visite guidée à pied de la médina bleue de Chefchaouen',
        'Temps libre pour magasiner dans les souks',
        'Pause déjeuner (souvent non incluse — confirmez avant réservation)',
        'Retour à Tanger, arrivée typiquement en fin d\'après-midi',
      ],
    },
    {
      heading: 'Notes Honnêtes des Vrais Avis',
      paragraphs: ['Quelques détails pratiques constants dans les avis vérifiés.'],
      list: [
        'Plusieurs avis signalent spécifiquement que les Grottes d\'Hercule sont dispensables — petites, sombres, et le prix d\'entrée (~MAD 80) considéré peu intéressant.',
        'La route du Rif est vraiment sinueuse — prévoyez de vous asseoir à l\'avant si sensible au mal des transports.',
        'Chauffeurs et guides sont constamment loués nommément dans les avis pour ponctualité et connaissance locale.',
        'Une combinaison Tanger + Chefchaouen sur 2 jours coûte environ 385$/personne hébergement inclus.',
      ],
    },
    {
      heading: 'Alternative Autoconduite',
      paragraphs: ['Si vous préférez explorer à votre rythme, chaque destination est accessible en voiture de location.'],
      callout: {
        label: '🚗 Louez une Voiture à Tanger Plutôt',
        body: 'Chefchaouen, Tétouan et Asilah sont toutes accessibles confortablement en voiture de location. Économique dès MAD 250/jour (23€). Voir notre <a href="/blog/marrakech-a-chefchaouen-en-voiture">guide conduite Chefchaouen</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Combien coûte une excursion privée de Tanger à Chefchaouen ?', answer: 'De 45$/personne en grand groupe partagé à 125$/personne en excursion entièrement privée, selon la taille du groupe.' },
    { question: 'Combien dure le trajet de Tanger à Chefchaouen ?', answer: 'Environ 2 heures aller par les montagnes du Rif, donc la plupart des excursions journée durent 8-11 heures au total.' },
    { question: 'L\'excursion Chefchaouen depuis Tanger vaut-elle le coup ?', answer: 'Oui — c\'est constamment l\'excursion privée la plus réservée depuis Tanger, avec des avis vérifiés louant particulièrement la visite guidée de la médina.' },
    { question: 'Les Grottes d\'Hercule à Tanger valent-elles la visite ?', answer: 'Avis mitigés à négatifs — plusieurs voyageurs décrivent le site comme petit et sombre, visitable en moins de 10 minutes.' },
    { question: 'Dois-je réserver une excursion privée ou conduire moi-même depuis Tanger ?', answer: 'Une excursion privée évite de naviguer les routes du Rif vous-même et inclut un guide local. L\'autoconduite offre contrôle total du timing.' },
  ],
  peopleAlsoAsk: [
    { question: 'Quelle est l\'excursion la plus populaire depuis Tanger ?', answer: 'L\'excursion Chefchaouen est de loin la plus populaire et la plus réservée depuis Tanger.' },
    { question: 'Peut-on visiter Chefchaouen et Tétouan en un jour depuis Tanger ?', answer: 'Oui — c\'est l\'un des itinéraires combinés les plus populaires, typiquement journée complète (8-11h) dès environ 60-140$/personne.' },
    { question: 'À quelle distance est Asilah de Tanger ?', answer: 'Environ 45 minutes, en faisant un ajout populaire demi-journée ou excursion combinée.' },
  ],
  relatedDestinations: ['tangier', 'chefchaouen'],
  relatedPosts: ['guide-voyage-tanger', 'guide-voyage-chefchaouen', 'marrakech-a-chefchaouen-en-voiture', 'meilleurs-circuits-prives-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'جولات خاصة فاخرة من طنجة 2026: شفشاون وتطوان وأصيلة، أسعار وسائق خاص',
  metaDescription: 'أفضل الجولات الخاصة الفاخرة من طنجة 2026 لضيوف الخليج: رحلات شفشاون بسيارة فاخرة وسائق خاص، تطوان وأصيلة، رأس سبارطيل. حجز مباشر عبر واتساب مع خصوصية كاملة.',
  title: 'جولات خاصة فاخرة من طنجة 2026: شفشاون وتطوان وأصيلة مع سائق خاص',
  description: 'إجابة سريعة: موقع طنجة عند ملتقى المتوسط والأطلسي — على بعد 14 كم فقط من إسبانيا — يجعلها القاعدة الطبيعية للجولات الخاصة عبر شمال المغرب. لضيوفنا من السعودية والإمارات وقطر، نرتب جولة يوم كامل لشفشاون بسيارة فاخرة وسائق خاص محترف، مع خصوصية تامة وحجز مباشر عبر واتساب.',
  keyword: 'جولة خاصة فاخرة طنجة',
  coverImage: COVER,
  coverAlt: 'جولات خاصة فاخرة طنجة 2026 — مرشد خاص وسائق مع سياح يطلون على المدينة العتيقة الزرقاء بشفشاون من نقطة مشاهدة خلابة',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 13,
  intro: 'إجابة سريعة: تقع طنجة عند ملتقى المتوسط والأطلسي، على بعد 14 كم فقط من إسبانيا — ما يجعلها نقطة الانطلاق الطبيعية لجولات خاصة عبر شمال المغرب. لضيوفنا من دول الخليج الباحثين عن تجربة فاخرة وخاصة بالكامل، نرتب سيارة فاخرة مع سائق محترف لرحلة شفشاون النموذجية، بدلاً من الجولات الجماعية المشتركة، مع مرونة كاملة بالجدول واختيار التوقفات.',
  sections: [
    {
      heading: 'أشهر رحلات طنجة اليومية — مقارنة',
      paragraphs: ['عدد قليل من الوجهات يهيمن على سوق الجولات الخاصة بطنجة، ولضيوفنا من الخليج نوصي دائماً بالخيار الخاص الفاخر لأقصى راحة وخصوصية.'],
      table: {
        caption: 'أفضل رحلات طنجة اليومية 2026',
        headers: ['الوجهة', 'المسافة/المدة', 'السعر النموذجي/شخص', 'ماذا سترى'],
        rows: [
          ['شفشاون (رحلة يوم)', '~ساعتان ذهاباً، 8-11 ساعة إجمالاً', '45-125$ (حسب حجم المجموعة، أعلى للخاص الفاخر)', 'مدينة عتيقة زرقاء، ساحة أوطة الحمام، القصبة، الأسواق'],
          ['شفشاون + تطوان', '~ساعتان + ساعة، يوم كامل', '60-140$', 'أبرز معالم يونسكو والمدينة الزرقاء برحلة واحدة'],
          ['شفشاون + شلالات أكشور', 'يوم كامل، +7 ساعات', 'مماثل للرحلة القياسية', 'المدينة الزرقاء مع نزهة قصيرة للشلالات'],
          ['جولة مدينة طنجة (القصبة، رأس سبارطيل، مغارات هرقل)', '3-5 ساعات', '40-90$', 'أبرز معالم طنجة نفسها'],
          ['طنجة + أصيلة', 'نصف أو يوم كامل', '45-100$', 'يجمع استكشاف طنجة مع المدينة العتيقة الساحلية بأصيلة'],
        ],
      },
      callout: {
        label: '💡 إجابة مباشرة: أي جولة تحجز؟',
        body: 'إن كان لديك يوم واحد وتريد التجربة الأكثر تميزاً، احجز رحلة شفشاون وحدها. لضيوفنا من الخليج، نوصي بالخيار الخاص الفاخر بسيارة حديثة وسائق محترف يتحدث العربية عند الطلب، مع مرونة كاملة بالتوقف للتصوير والتسوق.',
      },
    },
    {
      heading: 'الخاص الفاخر مقابل المجموعة الصغيرة المشتركة',
      paragraphs: ['هذا يؤثر على السعر أكثر من أي عامل آخر، ولضيوف الخليج الخيار الخاص هو المفضل دائماً.'],
      table: {
        caption: 'خاص فاخر مقابل مجموعة صغيرة — جولات طنجة',
        headers: ['النوع', 'تأثير السعر', 'الأنسب لـ'],
        rows: [
          ['خاص فاخر (مجموعتك فقط)', 'أعلى للشخص، لكن ينخفض كثيراً مع حجم المجموعة', 'العائلات والأزواج من الخليج الباحثين عن خصوصية كاملة'],
          ['مجموعة صغيرة مشتركة', 'أقل تكلفة للشخص للمسافرين المنفردين', 'المسافرون المنفردون'],
        ],
      },
      callout: {
        label: '🎫 احجز جولتك بطنجة',
        body: 'مشغلون موثقون يديرون هذه الجولات يومياً باستلام من الفندق وإلغاء مجاني حتى 24 ساعة قبل الموعد: <a href="https://www.getyourguide.com/tangier-l835/?partner_id=FMSVUZD">تصفح جولات طنجة ←</a>',
      },
    },
    {
      heading: 'ماذا تشمل رحلة شفشاون النموذجية',
      paragraphs: ['تقريباً كل رحلة شفشاون من طنجة تتبع نفس الهيكل الأساسي.'],
      list: [
        'استلام من الفندق بطنجة، عادةً صباحاً باكراً (حوالي 8-9)',
        'قيادة بانورامية عبر جبال الريف (~ساعتان ذهاباً)',
        'جولة مرشدة سيراً بالمدينة العتيقة الزرقاء بشفشاون',
        'وقت حر للتسوق بالأسواق',
        'استراحة غداء (غالباً غير مشمولة — أكد قبل الحجز)',
        'العودة لطنجة، الوصول عادةً أواخر بعد الظهر',
      ],
    },
    {
      heading: 'ملاحظات صادقة من التقييمات الحقيقية',
      paragraphs: ['بعض التفاصيل العملية المتكررة عبر التقييمات الموثقة لجولات طنجة.'],
      list: [
        'عدة تقييمات تشير تحديداً لمغارات هرقل كقابلة للتخطي — صغيرة ومظلمة، ورسم الدخول (~MAD 80) يُعتبر قيمة ضعيفة.',
        'طريق جبال الريف متعرج فعلاً — يُنصح بالجلوس أمامياً إن كنت حساساً للحركة.',
        'السائقون والمرشدون يُشاد بهم باستمرار بالاسم بالتقييمات للالتزام بالمواعيد والمعرفة المحلية.',
        'جولة طنجة + شفشاون على يومين تكلف حوالي 385$/شخص شاملة الإقامة.',
      ],
    },
    {
      heading: 'بديل السيارة الفاخرة الذاتية',
      paragraphs: ['إذا فضلت الاستكشاف بوتيرتك الخاصة، كل وجهة أعلاه قابلة للوصول بسيارة إيجار فاخرة.'],
      callout: {
        label: '🚗 استأجر سيارتك الفاخرة بطنجة بدلاً من ذلك',
        body: 'شفشاون وتطوان وأصيلة كلها قابلة للوصول بسيارة إيجار، مع تحكم كامل بالتوقيت والتوقفات. نقدم لضيوف الخليج سيارات دفع رباعي فاخرة مع سائق محترف. راجع <a href="/blog/min-marakish-ila-shafshawan-bis-sayyara">دليل القيادة لشفشاون</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'كم تكلفة جولة خاصة من طنجة لشفشاون؟', answer: 'من 45$/شخص بمجموعة كبيرة مشتركة إلى 125$/شخص لجولة خاصة بالكامل، حسب حجم المجموعة. للخيار الفاخر بسيارة حديثة وسائق مخصص، الأسعار أعلى قليلاً لكن تشمل خصوصية تامة.' },
    { question: 'كم تستغرق الرحلة من طنجة لشفشاون؟', answer: 'حوالي ساعتين ذهاباً عبر جبال الريف، لذا معظم رحلات اليوم تستغرق 8-11 ساعة إجمالاً.' },
    { question: 'هل تستحق رحلة شفشاون من طنجة؟', answer: 'نعم — الجولة الخاصة الأكثر حجزاً باستمرار من طنجة، مع تقييمات موثقة تشيد خاصة بجولة المدينة العتيقة المرشدة.' },
    { question: 'هل تستحق مغارات هرقل بطنجة الزيارة؟', answer: 'تقييمات متباينة لسلبية — عدة مسافرين يصفون الموقع بالصغير والمظلم، يُزار خلال أقل من 10 دقائق.' },
    { question: 'هل يمكن الحجز من الرياض أو دبي أو جدة مباشرة لجولة طنجة؟', answer: 'نعم — نستقبل حجوزات مباشرة من مسافري الخليج عبر واتساب، مع تنسيق كامل لبرنامج خاص فاخر يناسب تفضيلاتكم وترتيب سيارة وسائق يتحدث العربية.' },
  ],
  peopleAlsoAsk: [
    { question: 'ما أشهر رحلة يومية من طنجة؟', answer: 'رحلة شفشاون هي الأشهر والأكثر حجزاً بفارق كبير من طنجة، تجذب المسافرين بمدينتها العتيقة الزرقاء المميزة على بعد ساعتين تقريباً.' },
    { question: 'هل يمكن زيارة شفشاون وتطوان بيوم واحد من طنجة؟', answer: 'نعم — من أشهر البرامج المدمجة، عادةً يوم كامل (8-11 ساعة) بسعر حوالي 60-140$/شخص.' },
    { question: 'كم تبعد أصيلة عن طنجة؟', answer: 'حوالي 45 دقيقة، ما يجعلها إضافة شائعة لنصف يوم أو جولة مدمجة مع طنجة نفسها.' },
  ],
  relatedDestinations: ['tangier', 'chefchaouen'],
  relatedPosts: ['dalil-safar-tanja', 'dalil-safar-shafshawan', 'min-marakish-ila-shafshawan-bis-sayyara', 'afdal-jawlat-khasa-maghrib'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);