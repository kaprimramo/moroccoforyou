import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'international-sports-events-morocco';
const SLUG_FR = 'evenements-sportifs-internationaux-maroc';
const SLUG_AR = 'fa3aliyat-riyadiya-dawliya-maghrib';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(7551233);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'International Sports Events in Morocco — Annual Calendar & Travel Guide',
  metaDescription: 'Morocco hosts a growing calendar of international sports events year-round: ATP/WTA tennis in Marrakech and Rabat, major marathons, the Marrakech E-Prix, Diamond League athletics, and the 2030 FIFA World Cup. Complete guide with host cities and car rental tips.',
  title: 'International Sports Events in Morocco: The Complete Annual Guide',
  description: 'Quick answer: Morocco has quietly become one of Africa\'s busiest hosts of international sport — an ATP tennis tour stop in Marrakech every March, a WTA tournament in Rabat every May, major marathons in Marrakech, Casablanca and the Sahara, Diamond League athletics, Formula E racing, and now the build-up to co-hosting the 2030 FIFA World Cup. This guide is a living reference to Morocco\'s recurring sporting calendar — what happens each year, in which city, and how to plan a trip around it, updated as new events are added or dates shift.',
  keyword: 'international sports events morocco',
  coverImage: COVER,
  coverAlt: 'International sports events in Morocco — tennis court at the Grand Prix Hassan II tournament in Marrakech',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 13,
  intro: 'Quick answer: Morocco has built a genuinely packed annual sporting calendar over the past two decades — an ATP 250 tennis tournament in Marrakech (the Grand Prix Hassan II, Africa\'s longest-running men\'s tour event), a WTA tournament in Rabat, major marathons in Marrakech, Casablanca and Merzouga, Diamond League athletics in Rabat, Formula E street racing in Marrakech, and a national football scene now building toward co-hosting the 2030 FIFA World Cup alongside Spain and Portugal. This guide is designed as a living reference — not a single-year event list — covering the recurring fixtures that return year after year, so it stays useful long after any individual "2026" or "2027" edition has passed.',
  sections: [
    {
      heading: 'Morocco\'s Recurring Annual Sports Calendar',
      paragraphs: [
        'These events happen every year (sometimes with slightly shifting dates), making Morocco a genuine year-round sports travel destination rather than a one-off tournament host.',
      ],
      table: {
        caption: 'Morocco\'s recurring annual international sports events',
        headers: ['Event', 'Sport', 'City', 'Typical timing'],
        rows: [
          ['Grand Prix Hassan II', 'Tennis (ATP 250, men)', 'Marrakech', 'Late March / early April'],
          ['Grand Prix SAR La Princesse Lalla Meryem', 'Tennis (WTA 250, women)', 'Rabat', 'Mid-to-late May'],
          ['Marrakech Marathon', 'Athletics (marathon, half, 10K)', 'Marrakech', 'Late January'],
          ['Casablanca Marathon', 'Athletics (marathon)', 'Casablanca', 'Late October'],
          ['Rabat International Meeting', 'Athletics (Diamond League)', 'Rabat', 'Spring/early summer'],
          ['Marrakesh E-Prix', 'Motorsport (Formula E)', 'Marrakech', 'Varies, typically Q1'],
          ['Dune Desert Marathon of Morocco', 'Athletics (trail/ultra)', 'Merzouga (Sahara)', 'Varies'],
          ['Pro Golf Tour events (Madaëf Golfs Open, Pro Golf Tour Océan)', 'Golf (men, 3rd-tier European Tour)', 'Various (often Rabat/Agadir area)', 'May'],
          ['Botola Pro season', 'Football (domestic league)', 'Nationwide (Casablanca, Rabat, Fes, Tangier, Marrakech)', 'August–May'],
        ],
      },
      callout: {
        label: '🎾 Why Marrakech Leads on Tennis',
        body: 'The Grand Prix Hassan II is one of the longest-continuously-running professional tennis tournaments in Africa, played on clay at the Royal Tennis Club de Marrakech — a genuine ATP Tour stop that regularly draws top-100 ranked players. Combined with the WTA event in Rabat six weeks later, Morocco offers a rare back-to-back men\'s and women\'s professional tennis double-header each spring.',
      },
    },
    {
      heading: 'Major Multi-Sport Tournaments Hosted in Morocco',
      paragraphs: [
        'Beyond the annual fixtures, Morocco has established itself as a serious bidder and host for continental and global multi-sport tournaments — events that don\'t happen every year in Morocco specifically, but that the country now competes to host on a recurring cycle.',
      ],
      table: {
        caption: 'Major tournaments Morocco has hosted or will host',
        headers: ['Tournament', 'Morocco hosting', 'Host cities', 'Significance'],
        rows: [
          ['Africa Cup of Nations (AFCON)', '2025 edition (Dec 2025–Jan 2026)', 'Casablanca, Rabat, Marrakech, Fes, Tangier, Agadir', 'Tested the same stadiums and transport infrastructure now being used for the 2030 World Cup'],
          ['Africa Women Cup of Nations (WAFCON)', '2026 edition (late July–mid August)', 'Multiple host cities across Morocco', 'A major boost for women\'s football visibility in North Africa'],
          ['FIFA World Cup', '2030 (co-hosted with Spain and Portugal)', 'Casablanca, Rabat, Marrakech, Fes, Tangier, Agadir — 6 stadiums', 'First World Cup hosted in North Africa; see our full <a href="/blog/morocco-world-cup-2030-travel-guide">World Cup 2030 Travel Guide</a> for stadium details and how to plan a multi-city trip'],
        ],
      },
      callout: {
        label: '🏆 One Infrastructure, Multiple Tournaments',
        body: 'A key pattern worth understanding: Morocco\'s 6 World Cup 2030 host cities are the same 6 cities that hosted AFCON 2025 and are hosting WAFCON 2026. The stadiums, airport upgrades, and motorway connections built for one tournament directly benefit the next — meaning the country\'s sports infrastructure keeps improving with each event, well ahead of 2030.',
      },
    },
    {
      heading: 'Endurance and Adventure Sports Events',
      paragraphs: [
        'Morocco\'s landscape — desert, mountains, and Atlantic coast — has made it a genuine destination for endurance sport, distinct from the stadium-based tournaments above.',
      ],
      table: {
        caption: 'Morocco endurance and adventure sports events',
        headers: ['Event', 'Type', 'Location', 'Notes'],
        rows: [
          ['Dune Desert Marathon of Morocco', 'Trail running (10K, 21K, 42K)', 'Merzouga, Sahara', 'Runs directly through the Erg Chebbi dunes — a genuinely unique setting among world marathons'],
          ['Marrakech Marathon', 'Road marathon', 'Marrakech', 'Draws 13,000+ runners annually through the medina, palm groves and Atlas foothills'],
          ['Casablanca Marathon', 'Road marathon', 'Casablanca', 'A flatter, faster course through Morocco\'s largest city'],
          ['Trail and cycling races (various)', 'Trail running, cycling', 'Nationwide — Atlas Mountains, Anti-Atlas, coastal routes', 'A growing calendar of smaller regional races, particularly around Marrakech and the Atlas'],
        ],
      },
    },
    {
      heading: 'Planning a Sports Trip to Morocco',
      paragraphs: [
        'Whether you\'re traveling for a specific tournament or building a trip around Morocco\'s sporting calendar generally, the logistics are similar to any multi-city Morocco itinerary — and a rental car is usually the most practical way to move between host cities.',
      ],
      list: [
        'Book accommodation early for tournament weeks — cities hosting ATP/WTA events, marathons, or major tournaments see hotel demand spike, particularly in Marrakech and Rabat.',
        'Check exact dates each year — while these events recur annually, exact dates shift by a week or two depending on the international tour calendar (ATP, WTA, Diamond League) they belong to.',
        'For marathon travelers, factor in a few extra days either side of race day to recover and explore — Marrakech and Casablanca both reward a longer stay beyond just race weekend.',
        'For World Cup 2030 planning specifically, our dedicated <a href="/blog/morocco-world-cup-2030-travel-guide">World Cup 2030 Travel Guide</a> covers all 6 host cities, stadium details, and transport corridors in depth.',
        'A rental car remains the most flexible way to combine a tournament visit with wider Morocco travel — most sporting events sit in or near cities already well-served by Morocco\'s motorway network.',
      ],
      callout: {
        label: '🚗 Plan Your Sports Trip Car Rental',
        body: 'Whether you\'re following the tennis circuit from Marrakech to Rabat, running a marathon and continuing on to explore the country, or building a full 2030 World Cup itinerary, we arrange rental cars with free meet & greet at Casablanca Airport (CMN) — economy from MAD 250/day (€23), executive and 4x4 options available. Message us your dates on WhatsApp: <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    {
      question: 'What international sports events does Morocco host?',
      answer: 'Morocco hosts an ATP tennis tournament (Grand Prix Hassan II) in Marrakech every spring, a WTA tournament in Rabat, major marathons in Marrakech, Casablanca and the Sahara (Merzouga), Diamond League athletics in Rabat, Formula E racing in Marrakech, and has hosted or will host AFCON 2025, WAFCON 2026, and the 2030 FIFA World Cup (co-hosted with Spain and Portugal).',
    },
    {
      question: 'When is the tennis tournament in Marrakech?',
      answer: 'The Grand Prix Hassan II typically takes place in late March or early April each year at the Royal Tennis Club de Marrakech, on clay courts, as part of the ATP 250 tour. It is one of the longest-continuously-running professional tennis tournaments in Africa.',
    },
    {
      question: 'Is Morocco hosting the 2030 World Cup?',
      answer: 'Yes — Morocco co-hosts the 2030 FIFA World Cup alongside Spain and Portugal, marking the first World Cup hosted in North Africa. Morocco will host matches across 6 stadiums in Casablanca, Rabat, Marrakech, Fes, Tangier and Agadir. See our full <a href="/blog/morocco-world-cup-2030-travel-guide">World Cup 2030 Travel Guide</a> for complete details.',
    },
    {
      question: 'What marathons can I run in Morocco?',
      answer: 'The Marrakech Marathon (late January, 13,000+ runners) and Casablanca Marathon (late October) are Morocco\'s two major road marathons. For a more unusual setting, the Dune Desert Marathon of Morocco runs through the Erg Chebbi dunes near Merzouga in the Sahara.',
    },
    {
      question: 'Do I need a car to travel between Morocco\'s sporting events?',
      answer: 'For most events, yes — while some are concentrated in a single city (like the Marrakech tennis or marathon), following the tennis circuit from Marrakech to Rabat, or planning a multi-city World Cup 2030 trip, requires moving between cities. Morocco\'s motorway network connects all major host cities, making a rental car the most flexible option.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Does Morocco have an ATP tennis tournament?', answer: 'Yes — the Grand Prix Hassan II, an ATP 250 event played on clay at the Royal Tennis Club de Marrakech each spring. It is one of Africa\'s longest-running professional tennis tournaments, regularly drawing top-100 ranked players.' },
    { question: 'What is the Marrakesh E-Prix?', answer: 'The Marrakesh E-Prix is a Formula E electric motorsport race held on a street circuit in Marrakech, part of the international Formula E World Championship calendar, typically held in the first quarter of the year.' },
    { question: 'Did Morocco host the Africa Cup of Nations?', answer: 'Yes — Morocco hosted AFCON 2025, running from December 2025 to January 2026, across the same 6 cities (Casablanca, Rabat, Marrakech, Fes, Tangier, Agadir) that will host World Cup 2030 matches, serving as a real-world test of the stadiums and transport infrastructure.' },
  ],
  relatedDestinations: ['marrakech', 'rabat', 'casablanca'],
  relatedPosts: ['morocco-world-cup-2030-travel-guide', 'marrakech-travel-guide', 'rabat-travel-guide', 'casablanca-travel-guide', 'best-car-to-rent-in-casablanca-morocco'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Événements Sportifs Internationaux au Maroc — Calendrier Annuel et Guide Voyage',
  metaDescription: 'Le Maroc accueille un calendrier croissant d\'événements sportifs internationaux toute l\'année : tennis ATP/WTA à Marrakech et Rabat, grands marathons, l\'E-Prix de Marrakech, athlétisme Diamond League, et la Coupe du Monde FIFA 2030.',
  title: 'Événements Sportifs Internationaux au Maroc : Le Guide Annuel Complet',
  description: 'Réponse rapide : le Maroc est devenu discrètement l\'un des hôtes les plus actifs d\'Afrique en matière de sport international — une étape du tour ATP à Marrakech chaque mars, un tournoi WTA à Rabat chaque mai, de grands marathons à Marrakech, Casablanca et au Sahara, l\'athlétisme Diamond League, la course automobile Formule E, et maintenant la préparation à co-organiser la Coupe du Monde FIFA 2030.',
  keyword: 'événements sportifs internationaux maroc',
  coverImage: COVER,
  coverAlt: 'Événements sportifs internationaux au Maroc — court de tennis au tournoi Grand Prix Hassan II à Marrakech',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 13,
  intro: 'Réponse rapide : le Maroc a discrètement bâti un calendrier sportif annuel véritablement chargé au cours des deux dernières décennies — un tournoi ATP 250 à Marrakech (le Grand Prix Hassan II, l\'événement masculin du tour le plus ancien d\'Afrique), un tournoi WTA à Rabat, de grands marathons à Marrakech, Casablanca et Merzouga, l\'athlétisme Diamond League à Rabat, la course de rue Formule E à Marrakech, et une scène footballistique nationale se préparant maintenant à co-organiser la Coupe du Monde FIFA 2030 aux côtés de l\'Espagne et du Portugal.',
  sections: [
    {
      heading: 'Le Calendrier Sportif Annuel Récurrent du Maroc',
      paragraphs: ['Ces événements ont lieu chaque année (parfois avec des dates légèrement variables), faisant du Maroc une véritable destination de voyage sportif toute l\'année.'],
      table: {
        caption: 'Événements sportifs internationaux annuels récurrents du Maroc',
        headers: ['Événement', 'Sport', 'Ville', 'Timing typique'],
        rows: [
          ['Grand Prix Hassan II', 'Tennis (ATP 250, hommes)', 'Marrakech', 'Fin mars / début avril'],
          ['Grand Prix SAR La Princesse Lalla Meryem', 'Tennis (WTA 250, femmes)', 'Rabat', 'Mi-fin mai'],
          ['Marathon de Marrakech', 'Athlétisme (marathon, semi, 10K)', 'Marrakech', 'Fin janvier'],
          ['Marathon de Casablanca', 'Athlétisme (marathon)', 'Casablanca', 'Fin octobre'],
          ['Meeting International de Rabat', 'Athlétisme (Diamond League)', 'Rabat', 'Printemps/début été'],
          ['E-Prix de Marrakech', 'Sport automobile (Formule E)', 'Marrakech', 'Variable, généralement T1'],
          ['Dune Desert Marathon of Morocco', 'Athlétisme (trail/ultra)', 'Merzouga (Sahara)', 'Variable'],
          ['Événements Pro Golf Tour', 'Golf (hommes)', 'Divers (souvent Rabat/Agadir)', 'Mai'],
          ['Saison Botola Pro', 'Football (championnat national)', 'Tout le pays', 'Août–Mai'],
        ],
      },
      callout: {
        label: '🎾 Pourquoi Marrakech Mène sur le Tennis',
        body: 'Le Grand Prix Hassan II est l\'un des tournois de tennis professionnels continûment organisés les plus anciens d\'Afrique, joué sur terre battue au Royal Tennis Club de Marrakech. Combiné à l\'événement WTA de Rabat six semaines plus tard, le Maroc offre un rare doublé tennis professionnel masculin-féminin chaque printemps.',
      },
    },
    {
      heading: 'Grands Tournois Multi-Sports Organisés au Maroc',
      paragraphs: ['Au-delà des rendez-vous annuels, le Maroc s\'est établi comme un candidat et hôte sérieux pour les tournois multi-sports continentaux et mondiaux.'],
      table: {
        caption: 'Grands tournois organisés ou à venir au Maroc',
        headers: ['Tournoi', 'Accueil Maroc', 'Villes hôtes', 'Signification'],
        rows: [
          ['Coupe d\'Afrique des Nations (CAN)', 'Édition 2025 (déc 2025–jan 2026)', 'Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir', 'A testé les mêmes stades et infrastructures de transport utilisés pour la Coupe du Monde 2030'],
          ['Coupe d\'Afrique des Nations Féminine (CAN Femmes)', 'Édition 2026 (fin juillet–mi août)', 'Plusieurs villes hôtes au Maroc', 'Un coup de projecteur majeur pour le football féminin en Afrique du Nord'],
          ['Coupe du Monde FIFA', '2030 (co-organisée avec Espagne et Portugal)', 'Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir — 6 stades', 'Première Coupe du Monde organisée en Afrique du Nord ; voir notre <a href="/blog/guide-voyage-coupe-du-monde-2030-maroc">Guide Voyage Coupe du Monde 2030</a>'],
        ],
      },
      callout: {
        label: '🏆 Une Infrastructure, Plusieurs Tournois',
        body: 'Un schéma clé à comprendre : les 6 villes hôtes de la Coupe du Monde 2030 du Maroc sont les mêmes 6 villes qui ont accueilli la CAN 2025 et accueillent la CAN Femmes 2026. Les stades, améliorations aéroportuaires et connexions autoroutières construits pour un tournoi bénéficient directement au suivant.',
      },
    },
    {
      heading: 'Événements Sportifs d\'Endurance et d\'Aventure',
      paragraphs: ['Le paysage du Maroc — désert, montagnes et côte atlantique — en a fait une véritable destination pour le sport d\'endurance.'],
      table: {
        caption: 'Événements sportifs d\'endurance et d\'aventure au Maroc',
        headers: ['Événement', 'Type', 'Lieu', 'Notes'],
        rows: [
          ['Dune Desert Marathon of Morocco', 'Trail running (10K, 21K, 42K)', 'Merzouga, Sahara', 'Traverse directement les dunes de l\'Erg Chebbi — un cadre véritablement unique'],
          ['Marathon de Marrakech', 'Marathon route', 'Marrakech', 'Attire 13 000+ coureurs annuellement à travers la médina et les palmeraies'],
          ['Marathon de Casablanca', 'Marathon route', 'Casablanca', 'Parcours plus plat et rapide à travers la plus grande ville du Maroc'],
          ['Courses trail et cyclisme (diverses)', 'Trail running, cyclisme', 'Tout le pays', 'Calendrier croissant de courses régionales plus petites'],
        ],
      },
    },
    {
      heading: 'Planifier un Voyage Sportif au Maroc',
      paragraphs: ['Que vous voyagiez pour un tournoi spécifique ou construisiez un voyage autour du calendrier sportif marocain, la logistique ressemble à tout itinéraire multi-villes au Maroc.'],
      list: [
        'Réservez l\'hébergement tôt pour les semaines de tournoi — les villes accueillant des événements ATP/WTA, marathons ou grands tournois voient la demande hôtelière grimper.',
        'Vérifiez les dates exactes chaque année — ces événements récurrent annuellement mais les dates exactes varient d\'une à deux semaines selon le calendrier du tour international.',
        'Pour les coureurs de marathon, prévoyez quelques jours supplémentaires de part et d\'autre du jour de course.',
        'Pour la planification Coupe du Monde 2030 spécifiquement, notre <a href="/blog/guide-voyage-coupe-du-monde-2030-maroc">Guide Voyage Coupe du Monde 2030</a> dédié couvre les 6 villes hôtes en détail.',
        'Une voiture de location reste le moyen le plus flexible de combiner une visite tournoi avec un voyage Maroc plus large.',
      ],
      callout: {
        label: '🚗 Planifiez la Location Voiture de Votre Voyage Sportif',
        body: 'Que vous suiviez le circuit tennis de Marrakech à Rabat, couriez un marathon, ou construisiez un itinéraire complet Coupe du Monde 2030, nous organisons des locations avec accueil gratuit à l\'aéroport de Casablanca (CMN) — économique dès MAD 250/jour (23€). Contactez-nous : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Quels événements sportifs internationaux le Maroc accueille-t-il ?', answer: 'Le Maroc accueille un tournoi de tennis ATP (Grand Prix Hassan II) à Marrakech chaque printemps, un tournoi WTA à Rabat, de grands marathons à Marrakech, Casablanca et au Sahara, l\'athlétisme Diamond League à Rabat, la Formule E à Marrakech, et a accueilli ou accueillera la CAN 2025, la CAN Femmes 2026, et la Coupe du Monde FIFA 2030.' },
    { question: 'Quand a lieu le tournoi de tennis à Marrakech ?', answer: 'Le Grand Prix Hassan II a généralement lieu fin mars ou début avril chaque année au Royal Tennis Club de Marrakech, sur terre battue, dans le cadre du tour ATP 250.' },
    { question: 'Le Maroc organise-t-il la Coupe du Monde 2030 ?', answer: 'Oui — le Maroc co-organise la Coupe du Monde FIFA 2030 aux côtés de l\'Espagne et du Portugal, marquant la première Coupe du Monde organisée en Afrique du Nord.' },
    { question: 'Quels marathons puis-je courir au Maroc ?', answer: 'Le Marathon de Marrakech (fin janvier) et le Marathon de Casablanca (fin octobre) sont les deux grands marathons routiers du Maroc. Pour un cadre plus insolite, le Dune Desert Marathon traverse les dunes de l\'Erg Chebbi près de Merzouga.' },
    { question: 'Ai-je besoin d\'une voiture pour voyager entre les événements sportifs du Maroc ?', answer: 'Pour la plupart des événements, oui — suivre le circuit tennis de Marrakech à Rabat, ou planifier un voyage multi-villes Coupe du Monde 2030, nécessite de se déplacer entre villes.' },
  ],
  peopleAlsoAsk: [
    { question: 'Le Maroc a-t-il un tournoi de tennis ATP ?', answer: 'Oui — le Grand Prix Hassan II, un événement ATP 250 joué sur terre battue au Royal Tennis Club de Marrakech chaque printemps, l\'un des tournois de tennis professionnels les plus anciens d\'Afrique.' },
    { question: 'Qu\'est-ce que l\'E-Prix de Marrakech ?', answer: 'L\'E-Prix de Marrakech est une course de sport automobile électrique Formule E tenue sur un circuit urbain à Marrakech, dans le cadre du calendrier international du Championnat du Monde de Formule E.' },
    { question: 'Le Maroc a-t-il organisé la Coupe d\'Afrique des Nations ?', answer: 'Oui — le Maroc a organisé la CAN 2025, de décembre 2025 à janvier 2026, dans les mêmes 6 villes qui accueilleront les matchs de la Coupe du Monde 2030.' },
  ],
  relatedDestinations: ['marrakech', 'rabat', 'casablanca'],
  relatedPosts: ['guide-voyage-coupe-du-monde-2030-maroc', 'guide-voyage-marrakech', 'guide-voyage-rabat', 'guide-voyage-casablanca', 'meilleure-voiture-louer-casablanca-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'الفعاليات الرياضية الدولية بالمغرب — التقويم السنوي ودليل السفر',
  metaDescription: 'يستضيف المغرب تقويماً متنامياً من الفعاليات الرياضية الدولية على مدار السنة: تنس ATP/WTA بمراكش والرباط، ماراثونات كبرى، سباق مراكش للفورمولا إي، ألعاب القوى دايموند ليغ، وكأس العالم فيفا 2030.',
  title: 'الفعاليات الرياضية الدولية بالمغرب: الدليل السنوي الشامل',
  description: 'إجابة سريعة: أصبح المغرب بهدوء أحد أكثر مضيفي الرياضة الدولية نشاطاً في أفريقيا — محطة جولة ATP بمراكش كل مارس، بطولة WTA بالرباط كل مايو، ماراثونات كبرى بمراكش والدار البيضاء والصحراء، ألعاب قوى دايموند ليغ، سباق سيارات فورمولا إي، والآن الاستعداد لاستضافة كأس العالم فيفا 2030 المشتركة.',
  keyword: 'الفعاليات الرياضية الدولية المغرب',
  coverImage: COVER,
  coverAlt: 'الفعاليات الرياضية الدولية بالمغرب — ملعب تنس ببطولة الجائزة الكبرى الحسن الثاني بمراكش',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 13,
  intro: 'إجابة سريعة: بنى المغرب بهدوء تقويماً رياضياً سنوياً حافلاً فعلاً على مدى العقدين الماضيين — بطولة ATP 250 بمراكش (الجائزة الكبرى الحسن الثاني، أقدم حدث رجالي بجولة أفريقيا)، بطولة WTA بالرباط، ماراثونات كبرى بمراكش والدار البيضاء ومرزوقة، ألعاب قوى دايموند ليغ بالرباط، سباق شوارع فورمولا إي بمراكش، ومشهد كرة قدم وطني يستعد الآن لاستضافة كأس العالم فيفا 2030 مع إسبانيا والبرتغال.',
  sections: [
    {
      heading: 'التقويم الرياضي السنوي المتكرر بالمغرب',
      paragraphs: ['تحدث هذه الفعاليات كل سنة (أحياناً بمواعيد متغيرة قليلاً)، مما يجعل المغرب وجهة سفر رياضي حقيقية على مدار السنة.'],
      table: {
        caption: 'الفعاليات الرياضية الدولية السنوية المتكررة بالمغرب',
        headers: ['الفعالية', 'الرياضة', 'المدينة', 'التوقيت النموذجي'],
        rows: [
          ['الجائزة الكبرى الحسن الثاني', 'تنس (ATP 250، رجال)', 'مراكش', 'أواخر مارس/أوائل أبريل'],
          ['الجائزة الكبرى الأميرة لالة مريم', 'تنس (WTA 250، نساء)', 'الرباط', 'منتصف-أواخر مايو'],
          ['ماراثون مراكش', 'ألعاب قوى (ماراثون، نصف، 10كم)', 'مراكش', 'أواخر يناير'],
          ['ماراثون الدار البيضاء', 'ألعاب قوى (ماراثون)', 'الدار البيضاء', 'أواخر أكتوبر'],
          ['لقاء الرباط الدولي', 'ألعاب قوى (دايموند ليغ)', 'الرباط', 'ربيع/أوائل صيف'],
          ['سباق مراكش للفورمولا إي', 'سباق سيارات (فورمولا إي)', 'مراكش', 'متغير، عادةً الربع الأول'],
          ['ماراثون كثبان الصحراء المغربية', 'ألعاب قوى (تريل/ألترا)', 'مرزوقة (الصحراء)', 'متغير'],
          ['فعاليات جولة الجولف المحترفة', 'جولف (رجال)', 'متنوعة (غالباً الرباط/أكادير)', 'مايو'],
          ['موسم البطولة الاحترافية', 'كرة قدم (دوري وطني)', 'على مستوى البلاد', 'أغسطس-مايو'],
        ],
      },
      callout: {
        label: '🎾 لماذا تقود مراكش في التنس',
        body: 'الجائزة الكبرى الحسن الثاني من أقدم بطولات التنس الاحترافية المستمرة بأفريقيا، تُلعب على الطين بنادي الرباط الملكي للتنس بمراكش. مع بطولة WTA بالرباط بعدها بستة أسابيع، يقدم المغرب زوجاً نادراً من التنس الاحترافي الرجالي-النسائي كل ربيع.',
      },
    },
    {
      heading: 'بطولات متعددة الرياضات كبرى استضافها المغرب',
      paragraphs: ['ما وراء المواعيد السنوية، أثبت المغرب نفسه كمرشح ومضيف جاد للبطولات القارية والعالمية متعددة الرياضات.'],
      table: {
        caption: 'بطولات كبرى استضافها أو سيستضيفها المغرب',
        headers: ['البطولة', 'استضافة المغرب', 'المدن المضيفة', 'الأهمية'],
        rows: [
          ['كأس الأمم الأفريقية', 'نسخة 2025 (ديسمبر 2025-يناير 2026)', 'الدار البيضاء، الرباط، مراكش، فاس، طنجة، أكادير', 'اختبرت نفس الملاعب والبنية التحتية المستخدمة الآن لكأس العالم 2030'],
          ['كأس الأمم الأفريقية للسيدات', 'نسخة 2026 (أواخر يوليو-منتصف أغسطس)', 'عدة مدن مضيفة بالمغرب', 'دفعة كبرى لرؤية كرة القدم النسائية بشمال أفريقيا'],
          ['كأس العالم فيفا', '2030 (مشتركة مع إسبانيا والبرتغال)', 'الدار البيضاء، الرباط، مراكش، فاس، طنجة، أكادير — 6 ملاعب', 'أول كأس عالم تُستضاف بشمال أفريقيا؛ راجع <a href="/blog/dalil-as-safar-kas-al-alam-2030-al-maghrib">دليل سفر كأس العالم 2030</a>'],
        ],
      },
      callout: {
        label: '🏆 بنية تحتية واحدة، بطولات متعددة',
        body: 'نمط أساسي يستحق الفهم: المدن الست المضيفة لكأس العالم 2030 بالمغرب هي نفس الست التي استضافت كأس الأمم 2025 وتستضيف كأس الأمم للسيدات 2026.',
      },
    },
    {
      heading: 'فعاليات رياضات التحمل والمغامرة',
      paragraphs: ['تضاريس المغرب — الصحراء والجبال والساحل الأطلسي — جعلته وجهة حقيقية لرياضة التحمل.'],
      table: {
        caption: 'فعاليات رياضات التحمل والمغامرة بالمغرب',
        headers: ['الفعالية', 'النوع', 'الموقع', 'ملاحظات'],
        rows: [
          ['ماراثون كثبان الصحراء المغربية', 'جري تريل (10-21-42كم)', 'مرزوقة، الصحراء', 'يمر مباشرة عبر كثبان عرق الشبي'],
          ['ماراثون مراكش', 'ماراثون طريق', 'مراكش', 'يجذب +13,000 عداء سنوياً عبر المدينة العتيقة'],
          ['ماراثون الدار البيضاء', 'ماراثون طريق', 'الدار البيضاء', 'مسار أكثر استواءً وسرعة'],
          ['سباقات تريل ودراجات (متنوعة)', 'جري تريل، دراجات', 'على مستوى البلاد', 'تقويم متنامٍ من السباقات الإقليمية الأصغر'],
        ],
      },
    },
    {
      heading: 'تخطيط رحلة رياضية للمغرب',
      paragraphs: ['سواء كنت تسافر لبطولة محددة أو تبني رحلة حول التقويم الرياضي المغربي عموماً، اللوجستيات مشابهة لأي برنامج متعدد المدن.'],
      list: [
        'احجز الإقامة مبكراً لأسابيع البطولات.',
        'تحقق من المواعيد الدقيقة كل سنة.',
        'لعدائي الماراثون، خطط لأيام إضافية.',
        'لتخطيط كأس العالم 2030 تحديداً، راجع دليلنا المخصص.',
        'سيارة إيجار تبقى الطريقة الأكثر مرونة لدمج زيارة بطولة مع سفر مغربي أوسع.',
      ],
      callout: {
        label: '🚗 خطط لتأجير سيارتك للرحلة الرياضية',
        body: 'سواء تابعت جولة التنس من مراكش للرباط، ركضت ماراثوناً، أو بنيت برنامجاً كاملاً لكأس العالم 2030، نرتب تأجير سيارات باستقبال مجاني بمطار الدار البيضاء (CMN) — اقتصادية من MAD 250/يوم (23€). راسلنا: <a href="https://wa.me/212634276534">212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'ما الفعاليات الرياضية الدولية التي يستضيفها المغرب؟', answer: 'يستضيف المغرب بطولة تنس ATP بمراكش كل ربيع، بطولة WTA بالرباط، ماراثونات كبرى، ألعاب قوى دايموند ليغ، فورمولا إي، واستضاف أو سيستضيف كأس الأمم 2025 وكأس الأمم للسيدات 2026 وكأس العالم فيفا 2030.' },
    { question: 'متى بطولة التنس بمراكش؟', answer: 'الجائزة الكبرى الحسن الثاني عادةً أواخر مارس أو أوائل أبريل كل سنة بنادي الرباط الملكي للتنس بمراكش، على الطين، ضمن جولة ATP 250.' },
    { question: 'هل يستضيف المغرب كأس العالم 2030؟', answer: 'نعم — يستضيف المغرب كأس العالم فيفا 2030 مشتركاً مع إسبانيا والبرتغال، أول كأس عالم بشمال أفريقيا.' },
    { question: 'ما الماراثونات التي يمكن ركضها بالمغرب؟', answer: 'ماراثون مراكش (أواخر يناير) وماراثون الدار البيضاء (أواخر أكتوبر) أكبر ماراثونين طريق بالمغرب.' },
    { question: 'هل أحتاج سيارة للسفر بين الفعاليات الرياضية بالمغرب؟', answer: 'لمعظم الفعاليات، نعم — متابعة جولة التنس أو تخطيط رحلة كأس العالم 2030 متعددة المدن يتطلب التنقل بين المدن.' },
  ],
  peopleAlsoAsk: [
    { question: 'هل لدى المغرب بطولة تنس ATP؟', answer: 'نعم — الجائزة الكبرى الحسن الثاني، حدث ATP 250 على الطين بنادي الرباط الملكي بمراكش كل ربيع.' },
    { question: 'ما سباق مراكش للفورمولا إي؟', answer: 'سباق سيارات كهربائية فورمولا إي على حلبة شوارع بمراكش، ضمن تقويم بطولة العالم الدولية للفورمولا إي.' },
    { question: 'هل استضاف المغرب كأس الأمم الأفريقية؟', answer: 'نعم — استضاف المغرب كأس الأمم 2025، من ديسمبر 2025 حتى يناير 2026، بنفس الست مدن التي ستستضيف مباريات كأس العالم 2030.' },
  ],
  relatedDestinations: ['marrakech', 'rabat', 'casablanca'],
  relatedPosts: ['dalil-as-safar-kas-al-alam-2030-al-maghrib', 'dalil-safar-marakish', 'dalil-safar-ribat', 'dalil-safar-dar-al-bayda', 'afdal-sayyara-listajar-fi-dar-al-bayda'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);