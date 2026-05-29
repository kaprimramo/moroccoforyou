import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

// ─────────────────────────────────────────────────────────────────────────────
// Keyword #2 — "Morocco travel tips first time visitors"
// ─────────────────────────────────────────────────────────────────────────────

const SLUG_EN = 'morocco-travel-tips-first-time-visitors';
const SLUG_FR = 'conseils-premier-voyage-au-maroc';
const SLUG_AR = 'nasaeh-li-ziyarat-al-maghrib-li-awwal-marra';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(30355061);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Morocco Travel Tips First Time Visitors — 2026 Local Guide',
  metaDescription:
    'Essential Morocco travel tips for first time visitors in 2026: money, dress, scams, food, tipping and how to enjoy the medinas. Plan your trip on WhatsApp.',
  title: 'Morocco Travel Tips First Time Visitors Need in 2026',
  description:
    'The Morocco travel tips first time visitors actually need: money, dress code, scams to spot, medina etiquette, food safety, tipping and the small habits that change your trip.',
  keyword: 'morocco travel tips first time visitors',
  coverImage: COVER,
  coverAlt: 'Tangier kasbah at golden hour — Morocco travel tips for first time visitors',
  publishedISO: '2026-05-14',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro:
    'The single biggest Morocco travel tip for first time visitors is this: Morocco is friendlier and easier than the internet suggests, but the medina cities (Marrakech, Fes) reward people who arrive with a plan. Below are 25 field-tested tips for British, American and Australian travellers — covering money, dress code, the most common scams, food safety, tipping, Wi-Fi, photography etiquette and what to actually do when a stranger says "the tannery is closed today". Most are 30-second habits that will save you stress, money and the occasional argument.',
  sections: [
    {
      heading: 'Money and payments — what to know before you land',
      paragraphs: [
        'The Moroccan dirham (MAD) is a closed currency, which means you cannot legally buy it outside Morocco. Withdraw from an ATM the moment you land — Casablanca and Marrakech airports both have several reliable bank machines in the arrivals hall. Rates are within 1–2% of mid-market.',
        'Carry cash in small denominations. Petit-taxis, souk vendors, food stalls and even some riads outside the major cities cannot break a MAD 200 note. ATMs typically dispense in MAD 200s; ask at any bank counter to swap them for 20s, 50s and 100s.',
      ],
      callout: {
        label: 'Local insider tip',
        body: 'Keep MAD 50 in a separate pocket as your "small-tip" pile — porters, parking gardiens, mosque doormen, the toilet attendant — and never break a 100 for them. It saves the awkward "wait, I need change" dance.',
      },
    },
    {
      heading: 'Dress code — what to wear in Morocco',
      paragraphs: [
        'Morocco is a Muslim country with a relaxed but real dress code, especially in medinas, rural villages and conservative cities like Fes. The rule for both men and women: shoulders and knees covered in towns, sleeveless OK at hotel pools and on tourist beaches. Loose linen trousers and a light long-sleeve shirt are perfect 9 months a year.',
        'Women: a light scarf in your day bag is useful — it doubles as sun protection, mosque cover, and dust shield in the Sahara. Men: avoid singlets in the medinas; t-shirts are fine.',
      ],
    },
    {
      heading: 'The most common scams — and how to handle them',
      paragraphs: [
        'These are the four scams every first-time visitor runs into within 24 hours of arriving in Marrakech or Fes. None of them are dangerous; all are mildly annoying. A confident, smiling "la, shokran" (no, thank you) and continued walking handles 95% of cases.',
      ],
      list: [
        'The "free help" steered tour — a young man asks where you’re going, walks with you, then demands €20 for "guiding". Politely decline help inside the medina; use Google Maps.',
        'The "tannery is closed today" — a stranger claims the site you’re heading to is closed, and offers an "alternative". It’s never closed. Walk on.',
        'The "instant henna" — a woman grabs your hand and starts painting before you’ve agreed. Agree on a price up front or pull your hand back politely before she touches you.',
        'The taxi without a meter — always insist on the meter ("compteur s’il vous plaît"). If they refuse, get out and take another. Minimum fare in town is MAD 20.',
      ],
    },
    {
      heading: 'Food safety and what to actually eat',
      paragraphs: [
        'Moroccan food is mostly very safe — tagines simmer for hours, breads come hot from the oven, and busy stalls in [Marrakech](/destinations/marrakech/)’s Jemaa el-Fnaa turn over food too fast for problems. Common-sense rules apply: avoid pre-cut fruit from street carts, drink bottled water (€0.30 per 1.5L), and use the busier stalls (queueing locals are the best signal).',
        'Try at least once: pastilla (sweet-savoury pigeon or chicken pie) in Fes, tangia (slow-cooked beef pot) in Marrakech, fresh sardines grilled at the port in Essaouira, and harira soup anywhere.',
      ],
    },
    {
      heading: 'Tipping — how much, when, where',
      paragraphs: [
        'Tipping is expected in Morocco but amounts are small. The rule of thumb: 5–10% on a sit-down restaurant bill if service is not included, MAD 5–10 in cafés, MAD 10–20 per bag for hotel porters, MAD 20–30 per day for housekeeping, and 10% on a guided tour. Petit-taxi fares get rounded up to the nearest MAD 5–10.',
        'Mosque tour guides, hammam attendants and gardien parking helpers all expect MAD 5–20 — it is part of the service for most of them, not an extra.',
      ],
    },
    {
      heading: 'Wi-Fi, SIMs and staying connected',
      paragraphs: [
        'Buy a Maroc Telecom or Inwi SIM at the airport on arrival. MAD 50 (€4.50) gets you 10 GB of 4G for 30 days — more than enough for maps, WhatsApp and Instagram. eSIMs from Airalo work too, slightly more expensive but no faffing at a counter.',
        'Wi-Fi in riads is usually decent in common areas, weaker in interior rooms (the thick walls block the signal). Hotels in Casablanca and Rabat have fibre-grade Wi-Fi.',
      ],
    },
    {
      heading: 'Photography etiquette',
      paragraphs: [
        'Photograph the medina, the architecture, the food — not the people without permission. Older men in particular take it personally if a phone is pointed at them without a nod. A smiling "Bonjour, je peux ?" (or the English equivalent) works almost every time. Some characters in Jemaa el-Fnaa (water sellers, snake charmers) will ask for MAD 20–50 after a photo — that is the deal, not a scam.',
      ],
    },
    {
      heading: 'Getting around: when to walk, when to taxi, when to drive',
      paragraphs: [
        'In Marrakech, Fes and Chefchaouen, the medina is car-free and you walk. Petit-taxis cover modern districts and intercity hops within a region. For the long Sahara loop or the Casablanca → Fes → Chefchaouen leg, hire a private driver or [rent a car from Casablanca Airport](/rent-a-car/casablanca-airport/) — the motorway network between Casa, Rabat, Tangier, Fes and Marrakech is excellent.',
        'Do not drive into the medinas. Park outside the gates (your riad will tell you which one) and let porters meet you.',
      ],
    },
    {
      heading: 'Best months to visit Morocco',
      paragraphs: [
        'March-May and September-November give the most comfortable weather for first-time visitors. April and October are the gold standards. Avoid July-August in the Sahara and imperial cities (40°C+); winter (December-February) is excellent for desert luxury camps but cold at night and possibly snowy in the High Atlas.',
        'Ramadan dates shift each year. Restaurants in tourist areas stay open in daytime, but the rhythm of the country slows and souks reopen late afternoon. It is a beautiful time to visit if you’re flexible.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is Morocco safe for first time visitors?',
      answer:
        'Yes — Morocco is one of the safest tourist countries in North Africa, with a visible police presence in tourist zones and a culture welcoming to foreign visitors. The most common issues are pushy touts and minor scams, not violent crime.',
    },
    {
      question: 'What should I not do in Morocco?',
      answer:
        'Don’t walk into a mosque if you are not Muslim (except Hassan II in Casablanca), don’t drink alcohol in public outside hotels and licensed bars, don’t photograph people without permission, and don’t bargain aggressively for tiny amounts — it sours the exchange for both sides.',
    },
    {
      question: 'Do I need a visa for Morocco?',
      answer:
        'UK, US, Canadian, Australian, EU and most Gulf passport holders get a free 90-day stamp on arrival. No prior visa required for tourism.',
    },
    {
      question: 'How much cash should I bring to Morocco?',
      answer:
        'For a 7-day trip, plan to withdraw £250–£400 in MAD on arrival. Cards work in hotels and bigger restaurants; souks, taxis, food stalls and rural hotels are cash-only.',
    },
    {
      question: 'Is the tap water safe to drink in Morocco?',
      answer:
        'In Casablanca, Rabat and most modern hotels, yes. Outside of those, stick to bottled water (€0.30 per 1.5L). Most travellers default to bottled water everywhere just to be safe.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I drink alcohol in Morocco?', answer: 'Yes, in licensed hotels, bars and a handful of restaurants. Public drinking on the street is illegal and culturally unwelcome.' },
    { question: 'Is Uber available in Morocco?', answer: 'No, but Careem operates in Casablanca and Rabat. Elsewhere, take petit-taxis with the meter on.' },
    { question: 'Do Moroccans speak English?', answer: 'Younger Moroccans in tourism speak English well. French is the second working language; a few words of either gets you a long way.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'casablanca'],
  relatedPosts: ['morocco-7-days-itinerary', 'best-riads-marrakech', 'morocco-travel-tips'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Conseils premier voyage au Maroc — Guide local 2026',
  metaDescription:
    'Tous les conseils pour un premier voyage au Maroc en 2026 : argent, tenue, arnaques, médinas, restaurants, taxis, pourboires. Vos questions, réponses locales.',
  title: 'Conseils premier voyage au Maroc : ce qu’on ne vous dit pas',
  description:
    'Les vrais conseils pour un premier voyage au Maroc en 2026 — argent et CB, code vestimentaire, arnaques classiques, étiquette dans les médinas, pourboires et sécurité, par une équipe basée à Casablanca.',
  keyword: 'conseils premier voyage au maroc',
  coverImage: COVER,
  coverAlt: 'Kasbah de Tanger au coucher du soleil — conseils premier voyage au Maroc',
  publishedISO: '2026-05-14',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro:
    'Le conseil le plus important pour un premier voyage au Maroc : le pays est nettement plus accueillant et plus facile que ce que laisse penser internet, mais les médinas de Marrakech et de Fès se vivent mieux avec un minimum de préparation. Vous trouverez ici 25 conseils éprouvés pour les voyageurs français, belges et suisses — argent, tenue, arnaques classiques, médinas, restaurants, pourboires, eau et photo. Aucune n’est compliquée, toutes vous éviteront des malentendus.',
  sections: [
    {
      heading: 'L’argent — ce qu’il faut savoir avant d’atterrir',
      paragraphs: [
        'Le dirham marocain (MAD) est une monnaie fermée : impossible d’en acheter à l’avance. Retirez aux DAB de l’aéroport dès l’arrivée — Casablanca et Marrakech disposent de plusieurs distributeurs fiables (BMCE, Attijariwafa, Banque Populaire) dans le hall des arrivées. Le taux est à 1-2 % du taux interbancaire.',
        'Demandez des petites coupures à votre banque marocaine. Les DAB distribuent en billets de 200 MAD, et les petits taxis, vendeurs de souk et stands de restauration ne savent pas faire la monnaie sur 200. Au comptoir d’une agence bancaire, on vous échange volontiers contre des 20, 50 et 100.',
      ],
      callout: {
        label: 'Astuce locale',
        body: 'Gardez l’équivalent de 50 MAD dans une poche séparée comme cagnotte "petits pourboires" — porteurs, gardiens de parking, dame des toilettes, gardien de mosquée — et n’y mettez jamais de 100. Cela évite la danse gênante "attendez, j’ai pas la monnaie".',
      },
    },
    {
      heading: 'La tenue — comment s’habiller au Maroc',
      paragraphs: [
        'Le Maroc est un pays musulman au code vestimentaire détendu mais réel, surtout dans les médinas, les villages et les villes conservatrices comme Fès. La règle pour hommes et femmes : épaules et genoux couverts en ville, débardeurs OK aux piscines d’hôtel et sur les plages touristiques. Un pantalon de lin léger et une chemise manches longues légère sont parfaits 9 mois par an.',
        'Pour les femmes : un foulard léger dans le sac sert à tout — protection solaire, couvre-chef pour mosquée, cache-poussière au Sahara. Pour les hommes : évitez les marcels en médina, les t-shirts passent partout.',
      ],
    },
    {
      heading: 'Les arnaques classiques — et comment réagir',
      paragraphs: [
        'Voici les quatre arnaques que rencontrent presque tous les premiers visiteurs dans les 24 heures suivant l’arrivée à Marrakech ou Fès. Aucune n’est dangereuse, toutes sont agaçantes. Un "la, shokran" (non, merci) souriant et la marche continue règlent 95 % des cas.',
      ],
      list: [
        'L’"aide gratuite" qui devient guide — un jeune homme vous demande où vous allez, vous accompagne, puis réclame 20 €. Refusez l’aide en médina, utilisez Google Maps.',
        'Le "tanneurs fermés aujourd’hui" — quelqu’un prétend que le site visé est fermé et propose une "alternative". Ce n’est jamais fermé. Continuez.',
        'Le henné instantané — une femme attrape votre main et commence à peindre. Convenez d’un prix avant ou retirez la main poliment.',
        'Le petit taxi sans compteur — exigez le compteur ("compteur s’il vous plaît"). Sinon, descendez et prenez le suivant. Course minimum 20 MAD en ville.',
      ],
    },
    {
      heading: 'Manger en sécurité et que goûter',
      paragraphs: [
        'La cuisine marocaine est globalement très sûre — les tajines mijotent des heures, le pain sort tout chaud, et les stands actifs de Jemaa el-Fna à [Marrakech](/destinations/marrakech/) renouvellent les plats trop vite pour poser problème. Règles de bon sens : évitez les fruits prédécoupés des chariots, buvez en bouteille (3 MAD le 1,5L) et préférez les stands où des Marocains font la queue.',
        'À goûter au moins une fois : la pastilla (au pigeon ou au poulet) à Fès, la tangia (jarre de bœuf à l’étuvée) à Marrakech, les sardines fraîches grillées au port à Essaouira, et la harira partout.',
      ],
    },
    {
      heading: 'Pourboires — combien, où, comment',
      paragraphs: [
        'Le pourboire est attendu mais les montants sont modestes. Repères : 5-10 % au restaurant si non inclus, 5-10 MAD au café, 10-20 MAD par bagage pour les porteurs, 20-30 MAD par jour pour le ménage en hôtel, 10 % pour un guide. Les courses en petit taxi s’arrondissent au 5-10 MAD supérieur.',
        'Les guides de mosquée, le personnel de hammam et les gardiens de parking attendent 5-20 MAD — c’est leur rémunération, pas un extra.',
      ],
    },
    {
      heading: 'Wi-Fi, carte SIM et connexion',
      paragraphs: [
        'Achetez une SIM Maroc Telecom ou Inwi à l’aéroport dès l’arrivée. 50 MAD (4,50 €) donnent 10 Go de 4G pour 30 jours — largement assez pour maps, WhatsApp et Instagram. Les eSIM Airalo fonctionnent aussi, légèrement plus chères mais sans passer au comptoir.',
        'Le Wi-Fi des riads est correct en parties communes, plus faible en chambres intérieures (les murs épais bloquent le signal). Les hôtels modernes de Casablanca et Rabat ont du Wi-Fi fibre.',
      ],
    },
    {
      heading: 'Étiquette photo',
      paragraphs: [
        'Photographiez l’architecture, la nourriture, les ruelles — pas les personnes sans accord. Les hommes âgés en particulier prennent mal qu’un téléphone se tourne vers eux sans un regard. Un "Bonjour, je peux ?" souriant suffit dans 9 cas sur 10. Certains personnages de Jemaa el-Fna (porteurs d’eau, charmeurs de serpents) demanderont 20-50 MAD après la photo : c’est la règle, pas une arnaque.',
      ],
    },
    {
      heading: 'Se déplacer : marche, taxi ou voiture ?',
      paragraphs: [
        'À Marrakech, Fès et [Chefchaouen](/destinations/chefchaouen/), la médina est piétonne, on marche. Les petits taxis couvrent les quartiers modernes et les courts trajets intra-régionaux. Pour la boucle Sahara ou la liaison Casablanca → Fès → Chefchaouen, prenez un chauffeur privé ou [louez une voiture à l’aéroport de Casablanca](/rent-a-car/casablanca-airport/) — le réseau autoroutier Casa-Rabat-Tanger-Fès-Marrakech est excellent.',
        'Ne conduisez pas dans les médinas. Garez-vous hors des portes (votre riad vous indiquera laquelle) et laissez les porteurs vous accueillir.',
      ],
    },
    {
      heading: 'Quand partir pour un premier voyage',
      paragraphs: [
        'Mars-mai et septembre-novembre offrent le climat le plus confortable. Avril et octobre sont des valeurs sûres. Évitez juillet-août au Sahara et dans les médinas impériales (40 °C+) ; l’hiver (décembre-février) est excellent pour les camps de luxe au désert mais les nuits sont vraiment fraîches et l’Atlas peut neiger.',
        'Les dates du Ramadan changent chaque année. Les restaurants des zones touristiques restent ouverts en journée, mais le rythme du pays ralentit et les souks rouvrent en fin d’après-midi. C’est un moment magnifique pour visiter si vous êtes souple.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Le Maroc est-il sûr pour un premier voyage ?',
      answer:
        'Oui — le Maroc est l’un des pays touristiques les plus sûrs d’Afrique du Nord, avec une présence policière visible dans les zones touristiques. Les principaux désagréments sont les rabatteurs insistants et de petites arnaques, jamais la violence.',
    },
    {
      question: 'Que ne faut-il pas faire au Maroc ?',
      answer:
        'Ne pas entrer dans une mosquée si vous n’êtes pas musulman (sauf Hassan II à Casablanca), ne pas boire d’alcool dans la rue, ne pas photographier les gens sans accord, et ne pas marchander agressivement pour des sommes minuscules — ça gâche l’échange des deux côtés.',
    },
    {
      question: 'Faut-il un visa pour le Maroc ?',
      answer:
        'Non pour les Français, Belges et Suisses — tampon de 90 jours gratuit à l’arrivée. Passeport valide 3 mois après le retour.',
    },
    {
      question: 'Combien d’argent prévoir pour un voyage au Maroc ?',
      answer:
        'Pour 7 jours, prévoyez de retirer 300-500 € en dirhams sur place. Les cartes passent en hôtels et grands restaurants ; souks, taxis, stands et hôtels ruraux ne prennent que les espèces.',
    },
    {
      question: 'L’eau du robinet est-elle potable au Maroc ?',
      answer:
        'À Casablanca, Rabat et dans la plupart des hôtels modernes, oui. Ailleurs, restez à l’eau en bouteille (3 MAD le 1,5L). La plupart des voyageurs choisissent l’eau en bouteille partout par sécurité.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on boire de l’alcool au Maroc ?', answer: 'Oui, en hôtels licenciés, bars et certains restaurants. Boire dans la rue est illégal et mal vu.' },
    { question: 'Uber fonctionne-t-il au Maroc ?', answer: 'Non, mais Careem est présent à Casablanca et Rabat. Ailleurs, prenez des petits taxis avec compteur.' },
    { question: 'Parle-t-on français partout au Maroc ?', answer: 'Très largement, surtout dans le tourisme, le commerce et les villes. Quelques mots d’arabe (salam, shokran) sont toujours appréciés.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'casablanca'],
  relatedPosts: ['morocco-7-days-itinerary', 'best-riads-marrakech'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'نصائح لزيارة المغرب لأول مرة — دليل 2026',
  metaDescription:
    'أهم نصائح زيارة المغرب لأول مرة في 2026: العملة، اللباس، الأمن، الأكل، الحلال، التسوق، المواصلات والمواقع الدينية. خطط رحلتك عبر واتساب.',
  title: 'نصائح لزيارة المغرب لأول مرة: ما يجب معرفته في 2026',
  description:
    'دليل ميداني للمسافر الخليجي والسعودي والمغربي بالخارج في أول زيارة للمغرب: العملة، اللباس، الحلال، أوقات الصلاة، الأسعار الحقيقية، والمواصلات، بعيدًا عن الكليشيهات.',
  keyword: 'نصائح لزيارة المغرب لأول مرة',
  coverImage: COVER,
  coverAlt: 'قصبة طنجة عند الغروب — نصائح لزيارة المغرب لأول مرة',
  publishedISO: '2026-05-14',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 12,
  intro:
    'إذا كانت زيارتك للمغرب هي الأولى، فالنصيحة الأهم: المغرب أسهل وأودّ بكثير مما يصوّره الإنترنت، لكن المدن العتيقة (مراكش، فاس) تكافئ الزائر الذي يصل بخطة بسيطة. هنا 25 نصيحة عملية موجّهة للمسافر الخليجي والسعودي والجالية المغربية بالخارج — تشمل العملة، اللباس، الأكل الحلال، أوقات الصلاة، التسوق، التاكسي، البقشيش، الإنترنت، والتصوير. أغلبها عادات بسيطة توفّر عليك أيامًا من التعلم بالمحاولة والخطأ.',
  sections: [
    {
      heading: 'العملة والدفع — ما تحتاج معرفته قبل الوصول',
      paragraphs: [
        'الدرهم المغربي (MAD) عملة مغلقة لا تُباع خارج المغرب. اسحب من الصراف الآلي فور الهبوط — مطارا الدار البيضاء ومراكش بهما أجهزة موثوقة في صالة الوصول (BMCE، التجاري وفا بنك، البنك الشعبي). السعر يبتعد 1-2% فقط عن السعر بين البنوك.',
        'اطلب فئات صغيرة من الكاش. الصرافات تخرج أوراق 200 درهم، لكن سيارات الأجرة الصغيرة وباعة الأسواق وأكشاك الطعام لا يردّون باقي 200. اذهب إلى شباك أي بنك واطلب تبديلها بفئات 20 و50 و100.',
      ],
      callout: {
        label: 'نصيحة محلية',
        body: 'احتفظ بـ 50 درهم في جيب جانبي مخصص للبقشيش الصغير — حمال الحقائب، حارس السيارة، خادمة دورات المياه، بوّاب المسجد — ولا تضع فيه 100 درهم أبدًا. توفّر عليك حرج «ما عندي صرف».',
      },
    },
    {
      heading: 'اللباس المناسب — ماذا أرتدي في المغرب',
      paragraphs: [
        'المغرب بلد مسلم بقواعد لباس معتدلة لكنها حقيقية، خاصة في المدن العتيقة والقرى والمدن المحافظة كفاس. القاعدة للرجل والمرأة: تغطية الأكتاف والركبتين في المدن، والملابس الشاطئية مقتصرة على المسابح والشواطئ السياحية. سروال قطن واسع وقميص خفيف بأكمام طويلة مثاليان 9 أشهر من السنة.',
        'للأخوات: شال خفيف في الحقيبة يخدم في كل شيء — وقاية من الشمس، تغطية عند المساجد، حماية من غبار الصحراء. للأخوة: تجنّب الفانيلة الداخلية في المدينة العتيقة، التي شيرت العادي يكفي.',
      ],
    },
    {
      heading: 'الحيل الشائعة على السياح وكيف تتصرف',
      paragraphs: [
        'هذه أربع حيل يلتقي بها كل زائر تقريبًا خلال 24 ساعة من وصول مراكش أو فاس. لا شيء منها خطير، فقط مزعج. ابتسامة وعبارة «لا، شكرًا» ومواصلة المشي تحلّ 95% من الحالات.',
      ],
      list: [
        'مرشد «مجاني» يتحوّل إلى مدفوع — شاب يسألك أين تذهب، يرافقك، ثم يطلب 200 درهم. ارفض المرافقة في المدينة العتيقة واعتمد خرائط Google.',
        '«المدابغ مغلقة اليوم» — يدّعي أحدهم أن الموقع مغلق ويعرض «بديلًا». لم تُغلق يومًا. تابع طريقك.',
        'الحناء المباغتة — امرأة تمسك بيدك وتبدأ الرسم. اتفق على السعر مسبقًا أو اسحب يدك بأدب قبل البدء.',
        'تاكسي بلا عدّاد — اطلب العدّاد دائمًا («كَومبتور من فضلك»). إن رفض، انزل واركب التالي. الحد الأدنى داخل المدينة 20 درهم.',
      ],
    },
    {
      heading: 'الأكل الحلال وسلامة الطعام',
      paragraphs: [
        'كل الأكل في المغرب حلال افتراضيًا — لا حاجة للسؤال في المطاعم العادية. اللحوم تُذبح وفق الشريعة. تجنّب فقط المطاعم الفرنسية الراقية في الفنادق الكبرى إن كانت تقدّم لحم خنزير ضمن قائمتها (ستجد إشارة واضحة).',
        'الطاجين والكسكس وحساء الحريرة آمنة جدًا لأنها تطبخ ساعات. تجنّب الفواكه المقطّعة من العربات وتشرب الماء المعدني (3 درهم/قارورة 1.5 لتر). جرّب على الأقل: البسطيلة في [فاس](/destinations/fes/)، الطنجية في [مراكش](/destinations/marrakech/)، السردين المشوي على ميناء الصويرة، والحريرة في أي مكان.',
      ],
    },
    {
      heading: 'البقشيش — كم وأين',
      paragraphs: [
        'البقشيش متوقَّع لكن مبالغ بسيطة. القاعدة: 5-10% في المطعم إذا لم يكن مضمّنًا، 5-10 درهم في المقهى، 10-20 درهم لكل حقيبة لحمّال الفندق، 20-30 درهم لخادمة الغرفة يوميًا، 10% للمرشد المرخّص. أجرة التاكسي تُقرَّب لأقرب 5 أو 10 دراهم.',
        'مرشدو المساجد، عاملو الحمام التقليدي، حرّاس المواقف يتوقعون 5-20 درهم — هذا أجرهم لا إضافة.',
      ],
    },
    {
      heading: 'أوقات الصلاة والمساجد',
      paragraphs: [
        'الأذان مسموع في كل المدن — لا حاجة لتطبيق. المساجد مغلقة أمام غير المسلمين باستثناء مسجد الحسن الثاني في الدار البيضاء (جولات إرشادية يومية، 140 درهم). للزائر المسلم، أبواب كل المساجد مفتوحة في كل الصلوات.',
        'الحمامات في الفنادق غالبًا تشير إلى القبلة على السقف بسهم. كل الرياضات والفنادق الكبيرة تقدّم سجادة صلاة عند الطلب.',
      ],
    },
    {
      heading: 'الإنترنت وشريحة الاتصال',
      paragraphs: [
        'اشترِ شريحة Maroc Telecom أو Inwi من المطار فور الوصول. بـ 50 درهم (15 ريالًا) تحصل على 10 جيجا 4G لمدة 30 يومًا — أكثر من كافٍ للخرائط وواتساب. شرائح Airalo الإلكترونية تعمل أيضًا، أغلى قليلًا لكن دون انتظار في الشباك.',
        'واي فاي الرياضات جيد في الأماكن المشتركة، أضعف في الغرف الداخلية بسبب الجدران السميكة. فنادق الدار البيضاء والرباط بشبكة فايبر سريعة.',
      ],
    },
    {
      heading: 'آداب التصوير',
      paragraphs: [
        'صوّر العمارة والطعام والأزقة — لا الأشخاص دون إذن. كبار السن خاصة يأخذون الأمر شخصيًا. «السلام عليكم، ممكن صورة؟» مع ابتسامة تكفي في 9 من 10 حالات. بعض شخصيات ساحة جامع الفنا (السقايون، مروّضو الأفاعي) يطلبون 20-50 درهم بعد الصورة — هذه قاعدة لا حيلة.',
      ],
    },
    {
      heading: 'التنقّل: مشيًا أم تاكسي أم سيارة؟',
      paragraphs: [
        'في مراكش وفاس وشفشاون، المدينة العتيقة بلا سيارات وتُمشى. سيارات الأجرة الصغيرة تغطي الأحياء الحديثة والتنقلات داخل الإقليم. لحلقة الصحراء أو الانتقال من الدار البيضاء إلى فاس فشفشاون، خذ سائقًا خاصًا أو [استأجر سيارة من مطار الدار البيضاء](/rent-a-car/casablanca-airport/) — شبكة الطرق السيارة بين الدار البيضاء والرباط وطنجة وفاس ومراكش ممتازة.',
        'لا تدخل بالسيارة إلى المدينة العتيقة. اركن خارج الأبواب (الرياض سيدلّك على الباب الصحيح) ويستقبلك الحمّالون.',
      ],
    },
  ],
  faqs: [
    {
      question: 'هل المغرب آمن لأول زيارة؟',
      answer:
        'نعم — المغرب من أكثر دول شمال أفريقيا أمانًا للسياح، مع تواجد أمني واضح في المناطق السياحية. أبرز الإزعاجات هي إلحاح بعض المرشدين غير الرسميين وحيل صغيرة، ولا علاقة لها بجرائم خطيرة.',
    },
    {
      question: 'ما الذي يجب تجنّبه في المغرب؟',
      answer:
        'لا تدخل المساجد إن لم تكن مسلمًا (باستثناء الحسن الثاني)، لا تشرب الكحول في الشارع، لا تصوّر الناس بدون إذن، ولا تساوم بحدّة على مبالغ صغيرة فهذا يفسد التجربة للطرفين.',
    },
    {
      question: 'هل أحتاج تأشيرة لدخول المغرب؟',
      answer:
        'مواطنو دول مجلس التعاون الخليجي يدخلون بدون تأشيرة لمدة تصل إلى 90 يومًا. يكفي جواز ساري المفعول لـ 6 أشهر بعد العودة.',
    },
    {
      question: 'كم أحتاج كاش لرحلة المغرب؟',
      answer:
        'لرحلة 7 أيام، خطط لسحب 1500-2500 ريال بالدرهم عند الوصول. البطاقات تعمل في الفنادق والمطاعم الكبرى؛ الأسواق والتاكسي وأكشاك الطعام نقدًا فقط.',
    },
    {
      question: 'هل ماء الصنبور صالح للشرب؟',
      answer:
        'في الدار البيضاء والرباط والفنادق الحديثة نعم. خارجها فضّل الماء المعدني (3 درهم/قارورة 1.5 لتر). معظم الزوار يلتزمون بالماء المعدني في كل الأحوال.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل تنتشر المطاعم الحلال في المغرب؟', answer: 'كل المطاعم حلال افتراضيًا. لا حاجة للسؤال إلا إذا كنت في مطعم أوروبي راقٍ بفندق دولي قد يقدّم أصنافًا غير حلال ضمن قائمته.' },
    { question: 'هل أوبر يعمل في المغرب؟', answer: 'لا، لكن Careem يعمل في الدار البيضاء والرباط. خارجهما، استخدم سيارات الأجرة الصغيرة مع تشغيل العدّاد.' },
    { question: 'هل يتحدثون العربية في المغرب؟', answer: 'نعم — الدارجة المغربية قريبة من العربية الفصحى ومفهومة. كثيرون يتحدثون الفرنسية أيضًا.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'casablanca'],
  relatedPosts: [],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);
