import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

// ─────────────────────────────────────────────────────────────────────────────
// Keyword #1 — "how many days in Morocco is enough"
// EN: UK/US/AU readers · FR: FR/BE/CH readers · AR: Gulf/Saudi/Moroccan readers
// ─────────────────────────────────────────────────────────────────────────────

const SLUG_EN = 'how-many-days-in-morocco-is-enough';
const SLUG_FR = 'combien-de-jours-prevoir-au-maroc';
const SLUG_AR = 'kam-yawman-tahtaj-fi-al-maghrib';

const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(10551201);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'How Many Days in Morocco Is Enough? 2026 Trip Length Guide',
  metaDescription:
    'How many days in Morocco is enough in 2026? Honest 5/7/10/14-day comparisons with real costs, route ideas and what you actually see. Plan your trip on WhatsApp.',
  title: 'How Many Days in Morocco Is Enough? The Honest 2026 Answer',
  description:
    'A field-tested breakdown of 5, 7, 10 and 14-day Morocco trips — what fits, what you skip, real costs and the route we recommend for first-time visitors.',
  keyword: 'how many days in morocco is enough',
  coverImage: COVER,
  coverAlt: 'High Atlas Mountains and a Moroccan kasbah at sunset — how many days in Morocco is enough',
  publishedISO: '2026-05-12',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro:
    'For most first-time visitors, 7 to 10 days is enough for Morocco — long enough to combine one imperial city, the Sahara dunes, and a contrasting second city, but short enough that the long Atlas drives still feel like an adventure rather than a slog. Five days is too rushed unless you stay around Marrakech. Fourteen days is generous and lets you add the coast or the north. Below is the honest, day-by-day answer based on hundreds of itineraries our team in Morocco has built for British, American and Australian travellers.',
  sections: [
    {
      heading: 'The short answer: 7 to 10 days is the sweet spot',
      paragraphs: [
        'If you want the classic Morocco experience — a medina city, the Sahara, the Atlas, and either the Atlantic coast or a second imperial city — plan for at least 7 nights. The drives are scenic but slow (you average 60 km/h once you leave the motorway), and the desert overnight needs two days of driving built around it. Anything less than a week and you will be choosing between Marrakech and the Sahara rather than seeing both properly.',
        'Ten days is what most of our returning travellers say in retrospect they wish they had booked. The extra three days let you breathe, add Chefchaouen or Essaouira, and recover from the long Sahara drive without rushing back to the airport.',
      ],
      callout: {
        label: 'Local insider tip',
        body: 'Plan one full rest day in the middle of any trip longer than 6 nights. The constant new sights, food and travel are more tiring than people expect, and Marrakech in particular is best enjoyed with a hammam-and-rooftop day after the road.',
      },
    },
    {
      heading: 'Morocco trip length comparison — what you actually see',
      paragraphs: [
        'Use this table as a planning starting point. Each row assumes you arrive and leave from Casablanca or Marrakech and use a private driver, which we recommend over self-drive for trips under 10 days.',
      ],
      table: {
        caption: 'How many days in Morocco — what fits in each trip length',
        headers: ['Days', 'Realistic itinerary', 'Highlights you skip', 'Approx. cost per person (mid-range)'],
        rows: [
          ['3–4 days', 'Marrakech only + 1 Atlas or Agafay day trip', 'Sahara, Fes, coast', '£420 – £620'],
          ['5–6 days', 'Marrakech (3n) + Sahara overnight loop (2n)', 'Fes, Chefchaouen, coast', '£640 – £880'],
          ['7 days', 'Marrakech → Aït Ben Haddou → Sahara → Fes', 'Coast, Chefchaouen', '£780 – £1,150'],
          ['10 days', 'Marrakech → Sahara → Fes → Chefchaouen → Tangier', 'Atlantic coast, Agadir', '£1,090 – £1,650'],
          ['14 days', 'Imperial loop + Sahara + Essaouira + Chefchaouen', 'Almost nothing', '£1,450 – £2,400'],
        ],
      },
    },
    {
      heading: 'What you can do with 5 days in Morocco',
      paragraphs: [
        'Five days works if you commit to one region. The smartest 5-day plan is Marrakech-based: two days exploring the medina (Jemaa el-Fnaa, the souks, Bahia Palace, Majorelle Garden), one day in the High Atlas for a Berber village lunch, then a 2-day private Sahara loop for the dunes overnight and the long drive back. Visit our [Marrakech guide](/destinations/marrakech/) for the medina detail.',
        'Do not try to add Fes or Chefchaouen to a 5-day trip — the driving and the flying eats your time.',
      ],
    },
    {
      heading: 'What you can do with 7 days in Morocco',
      paragraphs: [
        'Seven days is the most common length we plan. The flagship route: Marrakech (2 nights), Aït Ben Haddou and Ouarzazate (1 night), the Dadès Valley or Skoura (1 night), the Sahara at Merzouga (1 night in a luxury desert camp), then on to Fes (2 nights) before flying out of Fes-Saïss or taking the train down to Casablanca. You see two imperial cities and the desert with no day repeated.',
        'Travelers who prefer to fly home from Marrakech can do the reverse: fly into Casablanca, train or fly to Fes, do the Fes → Sahara → Marrakech leg, and depart Marrakech.',
      ],
    },
    {
      heading: 'What you can do with 10 days in Morocco',
      paragraphs: [
        'Ten days lets you add a third pillar to the classic 7-day route. The most popular addition is Chefchaouen — the blue town in the Rif Mountains — inserted between Fes and Tangier, with a day-trip to the Akchour waterfalls. The other popular addition is Essaouira on the Atlantic coast, between Marrakech and Casablanca, for two days of fresh sardines, ramparts and breezy walks. See our [Chefchaouen guide](/destinations/chefchaouen/) for the northern leg.',
        'A 10-day trip also lets you fit one full rest day, which makes the whole holiday feel slower and more memorable.',
      ],
    },
    {
      heading: 'What you can do with 14 days in Morocco',
      paragraphs: [
        'Fourteen days lets you do almost everything without rushing. We design these trips as: Casablanca (1n) → Rabat (1n) → Fes (2n) → Chefchaouen (2n) → Tangier (1n, optional ferry day to Spain) → fly down to Marrakech → Marrakech (2n) → Sahara via Ouarzazate (2n) → back to Marrakech (1n) → Essaouira (2n) → out via Casablanca.',
        'If you are travelling with children, swap the Chefchaouen leg for more Essaouira (beach + camels for kids) and slow the desert section down.',
      ],
    },
    {
      heading: 'Best months for each trip length',
      paragraphs: [
        'The best months to visit Morocco are March–May and September–November. April and October are the gold standards — warm but not hot, low chance of rain in the south, dunes still comfortable at sunrise. July and August are too hot for the Sahara and the imperial cities (38–45°C); the Atlantic coast (Essaouira, Casablanca, Agadir) is fine. Winter (Dec–Feb) is the best time for desert luxury camps if you do not mind genuinely cold nights and possible Atlas snow.',
        'If you only have 5 days, October or November give you the most reliable weather across all regions in one trip.',
      ],
    },
    {
      heading: 'Should I rent a car or hire a driver?',
      paragraphs: [
        'For trips up to 10 days, hire a private driver — you save planning time, you can drink the mint tea, and a driver-guide adds local context at every stop. For trips of 11+ days, especially with a beach component (Essaouira, Agadir), a [car rental from Casablanca Airport](/rent-a-car/casablanca-airport/) gives you more freedom for less money. MoroccoForYou Cars delivers to the airport in 5 minutes and the same agency can match you with a driver later in the trip if you decide you want one for the Sahara leg only.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is 5 days enough for Morocco?',
      answer:
        'Five days is enough if you stay focused on Marrakech and the surrounding region (Atlas, Agafay, optional Sahara overnight). It is not enough to also visit Fes or Chefchaouen — the drives are too long. For a multi-city trip plan at least 7 days.',
    },
    {
      question: 'Is 7 days enough to see Morocco?',
      answer:
        'Yes — 7 days is the most common Morocco itinerary length and lets you combine Marrakech, the Sahara at Merzouga, Aït Ben Haddou and Fes. Anything you add beyond that (Chefchaouen, Essaouira, coast) requires a 10-day trip.',
    },
    {
      question: 'Is 10 days too long for Morocco?',
      answer:
        'No. Ten days is widely considered the most comfortable length for a first Morocco trip. The extra three days over a 7-day plan let you add Chefchaouen or Essaouira and include one true rest day in the middle.',
    },
    {
      question: 'What is the cheapest length to visit Morocco?',
      answer:
        'Per-day costs drop slightly on longer trips because flights, transfers and one-time entry fees are spread out — but the total spend rises. A budget 7-day mid-range Morocco trip in 2026 averages £780–£1,150 per person excluding flights.',
    },
    {
      question: 'When should I book my Morocco trip?',
      answer:
        'For April–May or October–November travel, book 3–4 months ahead — the best riads and desert camps fill early. For summer or winter low season, 4–6 weeks ahead is usually enough.',
    },
  ],
  peopleAlsoAsk: [
    {
      question: 'How long is the drive from Marrakech to the Sahara desert?',
      answer:
        'About 9–10 hours direct, but no one drives it in a day. The standard route is a 3-day private trip via Aït Ben Haddou and the Dadès Valley.',
    },
    {
      question: 'Can I do Morocco in a weekend?',
      answer:
        'Only a city break. A 2-night Marrakech weekend works for the medina and one Atlas half-day. You will not see the Sahara or Fes.',
    },
    {
      question: 'Is Morocco worth a 2-week holiday?',
      answer:
        'Yes — Morocco has enough variety (medieval cities, Sahara, Atlantic coast, mountains) to fill two relaxed weeks without repetition.',
    },
  ],
  relatedDestinations: ['marrakech', 'fes', 'sahara-merzouga', 'chefchaouen', 'essaouira'],
  relatedPosts: ['morocco-7-days-itinerary', 'morocco-road-trip-guide', 'morocco-travel-tips'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Combien de jours prévoir au Maroc ? Guide 2026',
  metaDescription:
    'Combien de jours prévoir au Maroc en 2026 ? Comparatif 5/7/10/14 jours avec budgets réels, itinéraires conseillés et erreurs à éviter. Planifiez sur WhatsApp.',
  title: 'Combien de jours prévoir au Maroc ? La vraie réponse 2026',
  description:
    'Notre comparatif honnête des séjours de 5, 7, 10 et 14 jours au Maroc — itinéraires, budgets réels par personne et conseils pratiques pour un premier voyage depuis la France, la Belgique ou la Suisse.',
  keyword: 'combien de jours prévoir au maroc',
  coverImage: COVER,
  coverAlt: 'Haut Atlas et kasbah marocaine au coucher du soleil — combien de jours prévoir au Maroc',
  publishedISO: '2026-05-12',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro:
    'Pour un premier voyage, 7 à 10 jours suffisent au Maroc — assez pour combiner une ville impériale, les dunes du Sahara et une seconde ville contrastée, tout en gardant les longues routes de l’Atlas comme une aventure plutôt qu’une corvée. Cinq jours est trop court si vous voulez sortir de Marrakech. Quatorze jours permet d’ajouter la côte atlantique ou le Nord. Depuis Paris, Lyon, Bruxelles ou Genève le vol direct ne fait que 3 heures, donc inutile de "rentabiliser" un week-end : un séjour court fonctionne très bien.',
  sections: [
    {
      heading: 'La réponse courte : 7 à 10 jours, c’est l’idéal',
      paragraphs: [
        'L’expérience marocaine classique — médina impériale, Sahara, Atlas, et côte ou seconde médina — demande au minimum 7 nuits. Les routes sont superbes mais lentes (60 km/h de moyenne dès qu’on quitte l’autoroute), et la nuit dans le désert exige deux journées de route encadrantes. À moins d’une semaine, il faut choisir entre Marrakech et le Sahara plutôt que de voir les deux correctement.',
        'Dix jours, c’est ce que nos voyageurs disent rétrospectivement avoir préféré. Les trois jours supplémentaires laissent ajouter Chefchaouen ou Essaouira et récupérer d’une longue journée de route sans courir vers l’aéroport.',
      ],
      callout: {
        label: 'Astuce locale',
        body: 'Prévoyez une vraie journée de repos au milieu de tout séjour de plus de 6 nuits. Les changements constants de paysages, de cuisine et de transport sont plus fatigants qu’on l’imagine, et Marrakech se savoure mieux après une demi-journée hammam-terrasse.',
      },
    },
    {
      heading: 'Comparatif durée — ce que vous voyez vraiment',
      paragraphs: [
        'Ce tableau part d’une arrivée et d’un départ à Casablanca ou Marrakech avec un chauffeur privé, ce que nous recommandons en dessous de 10 jours.',
      ],
      table: {
        caption: 'Combien de jours prévoir au Maroc — ce qui rentre dans chaque format',
        headers: ['Durée', 'Itinéraire réaliste', 'Ce que vous laissez de côté', 'Budget moyen par personne'],
        rows: [
          ['3–4 jours', 'Marrakech + 1 excursion Atlas ou Agafay', 'Sahara, Fès, côte', '480 € – 720 €'],
          ['5–6 jours', 'Marrakech (3n) + boucle Sahara (2n)', 'Fès, Chefchaouen, côte', '740 € – 1 020 €'],
          ['7 jours', 'Marrakech → Aït Ben Haddou → Sahara → Fès', 'Côte, Chefchaouen', '900 € – 1 320 €'],
          ['10 jours', 'Marrakech → Sahara → Fès → Chefchaouen → Tanger', 'Côte atlantique, Agadir', '1 250 € – 1 900 €'],
          ['14 jours', 'Boucle impériale + Sahara + Essaouira + Chefchaouen', 'Presque rien', '1 680 € – 2 800 €'],
        ],
      },
    },
    {
      heading: 'Que faire en 5 jours au Maroc ?',
      paragraphs: [
        'Cinq jours fonctionne si vous restez sur une seule région. Le plan le plus efficace est centré sur [Marrakech](/destinations/marrakech/) : deux jours dans la médina (Jemaa el-Fna, souks, Palais Bahia, Jardin Majorelle), un jour dans le Haut Atlas pour un déjeuner berbère, puis une boucle privée de 2 jours au Sahara pour la nuit dans les dunes. Le retour par Aït Ben Haddou peut se faire en un seul jour avec un départ matinal.',
        'N’essayez pas d’ajouter Fès ou Chefchaouen sur 5 jours — les trajets internes consomment trop de temps utile.',
      ],
    },
    {
      heading: 'Que faire en 7 jours au Maroc ?',
      paragraphs: [
        'Sept jours est le format que nous concevons le plus souvent. L’itinéraire phare : Marrakech (2 nuits), Aït Ben Haddou et Ouarzazate (1 nuit), vallée du Dadès ou Skoura (1 nuit), Sahara à Merzouga (1 nuit en camp de luxe), puis [Fès](/destinations/fes/) (2 nuits) avant de repartir depuis l’aéroport Fès-Saïss ou en TGV vers Casablanca. Deux villes impériales et le désert sans aucune journée doublée.',
        'Les voyageurs qui préfèrent repartir de Marrakech inversent le sens : Casablanca, train ou vol vers Fès, puis Fès → Sahara → Marrakech.',
      ],
    },
    {
      heading: 'Que faire en 10 jours au Maroc ?',
      paragraphs: [
        'Dix jours permet d’ajouter un troisième pilier à l’itinéraire 7 jours. L’ajout le plus apprécié est [Chefchaouen](/destinations/chefchaouen/), inséré entre Fès et Tanger, avec une journée aux cascades d’Akchour. Le second choix est Essaouira sur la côte, entre Marrakech et Casablanca, pour deux jours de sardines fraîches, de remparts et de vent atlantique.',
        'Dix jours laissent aussi place à une vraie journée de repos, qui change tout sur le rythme global.',
      ],
    },
    {
      heading: 'Que faire en 14 jours au Maroc ?',
      paragraphs: [
        'Quatorze jours permettent de presque tout faire sans courir. Notre format favori : Casablanca (1n) → Rabat (1n) → Fès (2n) → Chefchaouen (2n) → Tanger (1n, optionnellement traversée vers Tarifa) → vol intérieur vers Marrakech (2n) → Sahara via Ouarzazate (2n) → retour Marrakech (1n) → Essaouira (2n) → vol depuis Casablanca.',
        'Avec enfants, remplacez Chefchaouen par plus d’Essaouira (plage, dromadaires, vent doux) et ralentissez la séquence Sahara.',
      ],
    },
    {
      heading: 'Quand partir selon la durée du séjour',
      paragraphs: [
        'Les meilleurs mois pour partir au Maroc sont mars-mai et septembre-novembre. Avril et octobre sont les valeurs sûres — chaleur modérée, faible risque de pluie au sud, dunes tempérées au lever du soleil. Juillet-août est trop chaud pour le Sahara et les médinas impériales (38-45 °C) ; la côte atlantique (Essaouira, Casablanca, Agadir) reste agréable. L’hiver (déc-fév) est la meilleure saison pour les camps de luxe au désert si vous acceptez des nuits réellement fraîches et de possibles chutes de neige sur l’Atlas.',
        'Avec seulement 5 jours, octobre ou novembre offrent la météo la plus fiable d’une région à l’autre.',
      ],
    },
    {
      heading: 'Louer une voiture ou prendre un chauffeur ?',
      paragraphs: [
        'Pour les séjours de 10 jours ou moins, prenez un chauffeur privé — vous gagnez du temps de planification, vous savourez le thé à la menthe sans surveiller la route, et un chauffeur-guide ajoute du contenu local à chaque arrêt. Pour les séjours de 11 jours et plus, surtout avec une composante balnéaire, la [location de voiture à l’aéroport de Casablanca](/rent-a-car/casablanca-airport/) donne plus de liberté pour moins cher. MoroccoForYou Cars livre à l’aéroport en 5 minutes en meet & greet.',
      ],
    },
  ],
  faqs: [
    {
      question: '5 jours suffisent-ils au Maroc ?',
      answer:
        'Cinq jours suffisent si vous restez autour de Marrakech (Atlas, Agafay, et éventuellement une nuit au Sahara). Ce n’est pas assez pour ajouter Fès ou Chefchaouen — les distances internes sont trop importantes.',
    },
    {
      question: 'Une semaine au Maroc, est-ce assez ?',
      answer:
        'Oui — 7 jours est le format le plus demandé et permet de combiner Marrakech, Aït Ben Haddou, le Sahara à Merzouga et Fès. Tout ajout (Chefchaouen, Essaouira, côte) demande au moins 10 jours.',
    },
    {
      question: '10 jours au Maroc, c’est trop long ?',
      answer:
        'Non. C’est la durée que nos clients trouvent rétrospectivement la plus confortable pour un premier voyage. Les trois jours en plus permettent d’ajouter Chefchaouen ou Essaouira et de glisser une vraie journée de repos.',
    },
    {
      question: 'Quel budget moyen pour un voyage au Maroc ?',
      answer:
        'En 2026, un voyage de 7 jours en milieu de gamme coûte environ 900 € à 1 320 € par personne hors vol (hôtel, chauffeur privé, entrées, repas). Un séjour de 14 jours en luxe peut dépasser 2 800 €.',
    },
    {
      question: 'Quand réserver son voyage au Maroc ?',
      answer:
        'Pour avril-mai ou octobre-novembre, réservez 3 à 4 mois à l’avance — les meilleurs riads et camps se remplissent vite. En basse saison (été, hiver), 4 à 6 semaines suffisent généralement.',
    },
  ],
  peopleAlsoAsk: [
    {
      question: 'Combien d’heures de route entre Marrakech et le Sahara ?',
      answer:
        'Environ 9 à 10 heures direct, mais personne ne le fait en une journée. L’itinéraire standard est un circuit privé de 3 jours via Aït Ben Haddou et la vallée du Dadès.',
    },
    {
      question: 'Peut-on visiter Marrakech en un week-end depuis Paris ?',
      answer:
        'Oui, le vol direct fait 3h. Un week-end de 3 nuits permet de couvrir la médina et un Atlas en demi-journée. Le Sahara demande une nuit supplémentaire.',
    },
    {
      question: 'Le Maroc vaut-il un séjour de 2 semaines ?',
      answer:
        'Oui — la diversité des paysages (médinas, Sahara, côte, montagnes) tient sans peine deux semaines sans répétition.',
    },
  ],
  relatedDestinations: ['marrakech', 'fes', 'sahara-merzouga', 'chefchaouen', 'essaouira'],
  relatedPosts: ['morocco-7-days-itinerary', 'morocco-road-trip-guide'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'كم يومًا تحتاج في المغرب؟ دليل 2026 للزائر',
  metaDescription:
    'كم يومًا تحتاج في المغرب 2026؟ مقارنة صريحة بين 5 و7 و10 و14 يومًا مع تكاليف حقيقية ومسارات مقترحة للمسافر الخليجي والمغربي. خطط عبر واتساب.',
  title: 'كم يومًا تحتاج في المغرب؟ الإجابة الصريحة لعام 2026',
  description:
    'دليل ميداني صريح لمدد الإقامة في المغرب: 5 و7 و10 و14 يومًا — ما الذي تشاهده فعلًا، التكلفة الحقيقية بالدرهم والريال، والمسار الموصى به للزائر الخليجي والسعودي والمغربي المقيم في الخارج.',
  keyword: 'كم يومًا تحتاج في المغرب',
  coverImage: COVER,
  coverAlt: 'جبال الأطلس الكبير وقصبة مغربية عند الغروب — كم يومًا تحتاج في المغرب',
  publishedISO: '2026-05-12',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 11,
  intro:
    'الإجابة المختصرة: من 7 إلى 10 أيام تكفي معظم الزوار لأول مرة لزيارة المغرب — وقت كافٍ لجمع مدينة إمبراطورية مع كثبان الصحراء ومدينة ثانية مختلفة، ووقت قصير بحيث تظل طرق الأطلس الطويلة مغامرة لا عبئًا. خمسة أيام قليلة جدًا إن أردت الخروج من مراكش، و14 يومًا تتيح إضافة الساحل أو الشمال. هذا الدليل مكتوب من واقع رحلات صممناها لعائلات خليجية وسعودية ومقيمي المهجر، مع تركيز على الإيقاع المريح والخيارات الحلال والأنشطة العائلية.',
  sections: [
    {
      heading: 'الإجابة السريعة: 7 إلى 10 أيام هي المدة المثلى',
      paragraphs: [
        'تجربة المغرب الكلاسيكية — مدينة عتيقة إمبراطورية + الصحراء + الأطلس + ساحل أو مدينة ثانية — تحتاج 7 ليالٍ على الأقل. الطرق خلابة لكنها بطيئة (60 كم/س متوسط السرعة خارج الطريق السيار)، وليلة الصحراء تستلزم يومين من القيادة محيطين بها. أقل من أسبوع يعني الاختيار بين مراكش والصحراء بدل رؤيتهما معًا.',
        'الزوار الذين جربوا 10 أيام يقولون إنها المدة الأكثر راحة. الأيام الثلاثة الإضافية تتيح إضافة شفشاون أو الصويرة، وإراحة الجسم بعد رحلة الصحراء قبل العودة.',
      ],
      callout: {
        label: 'نصيحة محلية',
        body: 'خصّص يوم راحة كامل في منتصف أي رحلة تتجاوز 6 ليالٍ. التنقل المستمر والمأكولات الجديدة والصور المتلاحقة أكثر إرهاقًا مما تتوقع، ومراكش تُستمتع بها أكثر بعد نصف يوم حمام تقليدي وسطح هادئ.',
      },
    },
    {
      heading: 'مقارنة مدد الرحلة — ماذا تشاهد فعلًا',
      paragraphs: [
        'الجدول يفترض الوصول والمغادرة من الدار البيضاء أو مراكش مع سائق خاص — وهو ما ننصح به للرحلات أقل من 10 أيام.',
      ],
      table: {
        caption: 'كم يومًا تحتاج في المغرب — ما يتسع في كل مدة',
        headers: ['المدة', 'برنامج واقعي', 'ما تتنازل عنه', 'تكلفة تقديرية للفرد'],
        rows: [
          ['3–4 أيام', 'مراكش + رحلة يومية للأطلس أو أكافاي', 'الصحراء وفاس والساحل', '1 800 – 2 700 ريال'],
          ['5–6 أيام', 'مراكش (3 ليالٍ) + حلقة الصحراء (ليلتان)', 'فاس وشفشاون والساحل', '2 800 – 3 850 ريال'],
          ['7 أيام', 'مراكش → آيت بن حدّو → الصحراء → فاس', 'الساحل وشفشاون', '3 400 – 4 950 ريال'],
          ['10 أيام', 'مراكش → الصحراء → فاس → شفشاون → طنجة', 'الساحل الأطلسي وأكادير', '4 700 – 7 150 ريال'],
          ['14 يومًا', 'حلقة المدن الإمبراطورية + الصحراء + الصويرة', 'لا شيء تقريبًا', '6 300 – 10 500 ريال'],
        ],
      },
    },
    {
      heading: 'ماذا تفعل في 5 أيام بالمغرب؟',
      paragraphs: [
        'خمسة أيام تنجح إذا التزمت بمنطقة واحدة. الخطة الأذكى ترتكز على [مراكش](/destinations/marrakech/): يومان داخل المدينة العتيقة (ساحة جامع الفنا، الأسواق، قصر الباهية، حديقة ماجوريل)، يوم في الأطلس لغداء أمازيغي تقليدي، ثم حلقة خاصة لمدة يومين إلى الصحراء لمبيت الكثبان. العودة عبر آيت بن حدّو ممكنة في يوم واحد بانطلاق مبكر.',
        'لا تحاول إضافة فاس أو شفشاون إلى رحلة 5 أيام — المسافات الداخلية تلتهم الوقت المفيد.',
      ],
    },
    {
      heading: 'ماذا تفعل في 7 أيام بالمغرب؟',
      paragraphs: [
        'سبعة أيام أكثر برنامج نطلب تصميمه. المسار الكلاسيكي: مراكش (ليلتان)، آيت بن حدّو وورزازات (ليلة)، وادي دادس أو سكورة (ليلة)، الصحراء في مرزوكة (ليلة في مخيم فاخر)، ثم [فاس](/destinations/fes/) (ليلتان) قبل المغادرة من مطار فاس-سايس أو بقطار البراق إلى الدار البيضاء. مدينتان إمبراطوريتان والصحراء بدون تكرار يوم.',
        'الزوار الذين يفضلون المغادرة من مراكش يعكسون الاتجاه: الوصول إلى الدار البيضاء، قطار أو طيران إلى فاس، ثم فاس → الصحراء → مراكش.',
      ],
    },
    {
      heading: 'ماذا تفعل في 10 أيام بالمغرب؟',
      paragraphs: [
        'عشرة أيام تتيح إضافة ركيزة ثالثة لبرنامج 7 أيام. الإضافة الأكثر طلبًا هي [شفشاون](/destinations/chefchaouen/) — المدينة الزرقاء — بين فاس وطنجة، مع رحلة يومية إلى شلالات أقشور. والخيار الثاني هو الصويرة على الساحل، بين مراكش والدار البيضاء، ليومين من السمك الطازج والأسوار والهواء البحري.',
        'العشرة أيام تتيح أيضًا يوم راحة حقيقي يغيّر إيقاع الرحلة كلها.',
      ],
    },
    {
      heading: 'ماذا تفعل في 14 يومًا بالمغرب؟',
      paragraphs: [
        '14 يومًا تكاد تستوعب كل شيء دون عجلة. الصيغة المفضلة عندنا: الدار البيضاء (ليلة) → الرباط (ليلة) → فاس (ليلتان) → شفشاون (ليلتان) → طنجة (ليلة، مع خيار العبور إلى طريفة الإسبانية) → طيران داخلي إلى مراكش (ليلتان) → الصحراء عبر ورزازات (ليلتان) → عودة مراكش (ليلة) → الصويرة (ليلتان) → الإقلاع من الدار البيضاء.',
        'مع الأطفال، استبدل شفشاون بمزيد من الصويرة (شاطئ، جمال، نسيم لطيف) وأبطئ مرحلة الصحراء.',
      ],
    },
    {
      heading: 'أفضل الأشهر حسب مدة الرحلة',
      paragraphs: [
        'أفضل أشهر السفر إلى المغرب هي مارس إلى ماي وسبتمبر إلى نوفمبر. أبريل وأكتوبر آمنان للغاية — حرارة معتدلة، احتمال مطر منخفض في الجنوب، كثبان مريحة عند الشروق. يوليو وأغسطس حاران للصحراء والمدن الإمبراطورية (38-45°م)؛ الساحل الأطلسي (الصويرة، الدار البيضاء، أكادير) لطيف. الشتاء (دجنبر-فبراير) أفضل موسم للمخيمات الفاخرة إن تقبّلت ليالي باردة فعلًا واحتمال ثلج على الأطلس.',
        'بـ 5 أيام فقط، أكتوبر أو نوفمبر يعطيان أوثق طقس بين مختلف المناطق.',
      ],
    },
    {
      heading: 'سيارة مؤجَّرة أم سائق خاص؟',
      paragraphs: [
        'للرحلات حتى 10 أيام، خذ سائقًا خاصًا — توفّر وقت التخطيط، تحتسي شاي النعناع بدون مراقبة الطريق، والسائق-المرشد يضيف سياقًا محليًا عند كل توقف. للرحلات 11 يومًا فأكثر، خاصة مع شق ساحلي، [استئجار سيارة من مطار الدار البيضاء](/rent-a-car/casablanca-airport/) يعطيك حرية أكبر بتكلفة أقل. تقدّم MoroccoForYou Cars استلامًا من المطار في 5 دقائق.',
      ],
    },
  ],
  faqs: [
    {
      question: 'هل تكفي 5 أيام لزيارة المغرب؟',
      answer:
        'تكفي إذا التزمت بمراكش ومحيطها (الأطلس، أكافاي، أو ليلة صحراء واحدة). لا تكفي لإضافة فاس أو شفشاون — المسافات الداخلية كبيرة. للرحلات متعددة المدن، خصّص 7 أيام على الأقل.',
    },
    {
      question: 'هل تكفي 7 أيام لزيارة المغرب؟',
      answer:
        'نعم — هي المدة الأكثر طلبًا وتتيح الجمع بين مراكش والصحراء في مرزوكة وآيت بن حدّو وفاس. أي إضافة بعد ذلك (شفشاون، الصويرة، الساحل) تتطلب 10 أيام.',
    },
    {
      question: 'هل 10 أيام طويلة جدًا في المغرب؟',
      answer:
        'لا. هي المدة التي يصفها زوارنا بأنها الأكثر راحة لأول زيارة. الأيام الثلاثة الإضافية تتيح إضافة شفشاون أو الصويرة وإدراج يوم راحة حقيقي.',
    },
    {
      question: 'ما الميزانية الوسطية لرحلة المغرب؟',
      answer:
        'في 2026، رحلة 7 أيام بمستوى متوسط تكلف بين 3 400 و 4 950 ريالًا للفرد دون تذكرة الطيران (فندق + سائق خاص + رسوم + وجبات). الرحلات الفاخرة 14 يومًا قد تتجاوز 10 000 ريال.',
    },
    {
      question: 'متى يُحجز السفر إلى المغرب؟',
      answer:
        'لأبريل-ماي أو أكتوبر-نوفمبر، احجز قبل 3 إلى 4 أشهر — أفضل الرياضات ومخيمات الصحراء تُحجز بسرعة. للموسم المنخفض (الصيف، الشتاء)، 4 إلى 6 أسابيع تكفي عادةً.',
    },
  ],
  peopleAlsoAsk: [
    {
      question: 'كم ساعة بين مراكش والصحراء؟',
      answer:
        'حوالي 9-10 ساعات مباشرة، لكن لا أحد يسلكها في يوم واحد. المسار القياسي هو رحلة خاصة 3 أيام عبر آيت بن حدّو ووادي دادس.',
    },
    {
      question: 'هل يمكن زيارة مراكش في عطلة نهاية أسبوع من الخليج؟',
      answer:
        'الرحلة المباشرة من دبي حوالي 8 ساعات. عطلة 3 ليالٍ تكفي للمدينة العتيقة ونصف يوم في الأطلس. الصحراء تحتاج ليلة إضافية.',
    },
    {
      question: 'هل يستحق المغرب رحلة أسبوعين؟',
      answer:
        'نعم — تنوع المناظر (المدن العتيقة، الصحراء، الساحل، الجبال) يكفي بسهولة لأسبوعين بدون تكرار.',
    },
  ],
  relatedDestinations: ['marrakech', 'fes', 'sahara-merzouga', 'chefchaouen', 'essaouira'],
  relatedPosts: [],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);
