import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'fes-medina-walking-tour-self-guided';
const SLUG_FR = 'medina-de-fes-visite-libre-itineraire';
const SLUG_AR = 'jawla-haura-fi-madinat-fas-al-atika';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(29595710);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Fes Medina Walking Tour Self Guided — 2026 Step-by-Step',
  metaDescription:
    'A Fes medina walking tour self guided in 2026: 4-hour route with map points, prices, and the 7 must-see stops. No tout, no detours. Plan on WhatsApp.',
  title: 'Fes Medina Walking Tour Self Guided: 2026 Step-by-Step Route',
  description:
    'A field-tested self-guided walking tour of the Fes medina (Fes el-Bali) for 2026 — 4 hours, 7 must-see stops, real prices, and how to navigate without getting lost or hassled.',
  keyword: 'fes medina walking tour self guided',
  coverImage: COVER,
  coverAlt: 'Fes medina rooftops with the Chouara tanneries below — Fes medina walking tour self guided',
  publishedISO: '2026-05-21',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro:
    'A self-guided Fes medina walking tour in 2026 is absolutely doable — and once you’ve done a half-day with a licensed guide first, often more enjoyable than a fully guided second day. The route below is a 4-hour walk down the medina’s main artery from Bab Boujloud (the blue gate) to the Chouara tanneries and back, taking in 7 must-see stops, with real 2026 entry prices and exactly when to refuse the inevitable "tannery is closed today" hustle. Save the map on your phone before you go in — GPS struggles in the alleys.',
  sections: [
    {
      heading: 'Should you do Fes medina self-guided or with a guide?',
      paragraphs: [
        'For first-time visitors to [Fes](/destinations/fes/), we recommend a 4-hour licensed guide on day 1 (MAD 250–350 / £20–28) to learn the layout, then self-guided exploration on day 2 and beyond. Going pure self-guided from day one is possible but you will lose time finding the major monuments, and you will get more attention from touts trying to "help".',
        'This guide assumes you have at least a basic sense of where the main gates are. The route is designed to be doable as a first-day self-guided walk if you’re willing to use Google Maps liberally and not panic when you get briefly lost (which you will).',
      ],
      callout: {
        label: 'Local insider tip',
        body: 'Drop a pin on your riad in Google Maps before you set off. GPS works at gates and main squares but unreliably in the alleys. When you get lost, walk uphill and you will eventually emerge at a major street or square.',
      },
    },
    {
      heading: 'The 7 must-see stops on a Fes medina walking tour',
      paragraphs: [
        'In order along the main downhill artery Talaa Kebira, from Bab Boujloud to Chouara tanneries.',
      ],
      list: [
        '1. Bab Boujloud — the iconic blue-tiled gate. Free. Start here.',
        '2. Madrasa Bou Inania (5 min from Bab Boujloud) — most ornate madrasa in Fes. Entry MAD 20.',
        '3. Souk el-Attarine — the spice and perfume souk. Free to walk through.',
        '4. Al-Qarawiyyin Mosque & University — only Muslims can enter, but the wooden doors give a glimpse. Free to view.',
        '5. Madrasa al-Attarine — the most intricate zellij tilework in Morocco. Entry MAD 20.',
        '6. Nejjarine carpenters’ square & Wood Museum. Square free; museum MAD 20.',
        '7. Chouara tanneries — view from a leather shop terrace. "Free" (small expected tip MAD 10–20).',
      ],
    },
    {
      heading: 'The 4-hour route — step by step',
      paragraphs: [
        'Start at Bab Boujloud around 9am after breakfast. Walk through the blue gate into the medina. The main artery Talaa Kebira goes downhill (left at the fork after the gate). Talaa Sghira is the parallel southern artery — slightly less crowded.',
        'Hour 1: Bab Boujloud → Madrasa Bou Inania (5 min walk, 20 min visit) → continue down Talaa Kebira past leather and copper shops. You’ll pass beautiful brass doors and the occasional mosque entrance (peek only if you’re not Muslim).',
        'Hour 2: Souk el-Attarine — spice shops, tea sellers, the pharmacy. Stop at the perfumer’s if you want amber, kohl, or argan. Negotiate. Continue 200m to the Al-Qarawiyyin complex.',
        'Hour 3: Al-Qarawiyyin (look through the doors, view the courtyards from the side), Madrasa al-Attarine (don’t skip — the tilework is the best in Morocco). Continue down towards the Chouara tanneries via Souk al-Henna (a quiet, beautiful square with henna pots).',
        'Hour 4: Tanneries view from a leather shop terrace (accept the mint sprig). Then walk back up via the parallel Talaa Sghira route to Bab Boujloud. Lunch at a rooftop café with medina views (try Café Clock or Ruined Garden).',
      ],
    },
    {
      heading: 'Real 2026 prices for the route',
      paragraphs: [
        'A self-guided walk costs almost nothing — entry fees are MAD 10–20 per monument. Compared to a guided tour at MAD 250–350, you save £20+ but lose the historical commentary and the smooth navigation.',
      ],
      table: {
        caption: 'Self-guided Fes medina walking tour — real 2026 costs',
        headers: ['Item', 'Price', 'Notes'],
        rows: [
          ['Madrasa Bou Inania entry', 'MAD 20', 'Worth it — most ornate'],
          ['Madrasa al-Attarine entry', 'MAD 20', 'Best zellij in Morocco'],
          ['Nejjarine Wood Museum', 'MAD 20', 'Skip if short on time'],
          ['Tannery terrace tip', 'MAD 10–20', 'Polite "shokran" and small tip'],
          ['Lunch at rooftop café', 'MAD 100–180', 'Café Clock, Ruined Garden, Numéro 7'],
          ['Mint tea breaks (×2)', 'MAD 20', 'Square cafés'],
          ['TOTAL (one person)', 'MAD 180–270', '~£15–25 for half a day'],
        ],
      },
    },
    {
      heading: 'How to handle the inevitable touts',
      paragraphs: [
        'In Fes el-Bali, a young man (sometimes a teenager) will probably follow you for a few minutes asking where you’re going. A friendly "la, shokran" (no, thank you) said firmly with a smile, while continuing to walk, handles 95% of cases. Do not engage in conversation. Do not accept "directions" — they will lead you to a relative’s shop.',
        'The classic line is "the tannery is closed today" or "the square you’re looking for is moved today". Both are always false. Walk on.',
      ],
    },
    {
      heading: 'Where the route gets confusing — and how to recover',
      paragraphs: [
        'Two points typically confuse first-time walkers. First, around the Al-Qarawiyyin / Karaouine area, the alleys radiate out in five directions and the signage is mostly absent. Use Google Maps — even when it’s wrong by 20 metres, it gets you within shouting distance.',
        'Second, getting back to Bab Boujloud from the tanneries means going uphill. Take the parallel Talaa Sghira (south artery) for variety. If you get truly lost, ask any shopkeeper "Bab Boujloud?" — they will point you the right way without expecting a tip.',
      ],
    },
    {
      heading: 'What to wear and pack',
      paragraphs: [
        'Closed shoes essential (alleys are uneven, damp near the tanneries, shared with mules). Loose trousers and a long-sleeve cotton shirt are the most comfortable in hot months. Bring a small backpack with: water bottle, sunglasses, sunscreen, scarf (women), MAD 200–300 in small notes, phone with offline map cached.',
      ],
    },
    {
      heading: 'Best time of day for the route',
      paragraphs: [
        'Start at 9am for the best light at the madrasas (interior courtyards are filled with sun until 11am). Avoid Friday afternoon when many shops close for prayer (12–2pm). Late afternoon is fine but you’ll lose the open-museum-courtyard light.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Can I walk the Fes medina without a guide?',
      answer:
        'Yes — a self-guided Fes medina walking tour is doable in 4 hours covering Bab Boujloud, Madrasa Bou Inania, Al-Qarawiyyin, Madrasa al-Attarine and the Chouara tanneries. For your first half-day a licensed guide is recommended for orientation; from day 2 self-guided works well.',
    },
    {
      question: 'Is the Fes medina safe to walk alone?',
      answer:
        'Yes — Fes is safe for tourists. The main annoyance is persistent touts and self-appointed "guides". A confident "la, shokran" and walking on handles them. Avoid the alleys after 10pm.',
    },
    {
      question: 'How long does a Fes medina walking tour take?',
      answer:
        'A self-guided walk covering the 7 must-see stops takes about 4 hours including monument visits and one mint-tea break. Add 1 hour for lunch at a rooftop café.',
    },
    {
      question: 'Do I need to pay to see the Chouara tanneries?',
      answer:
        'No formal entry fee. Leather shops let you onto their terraces in exchange for the implicit hope you’ll buy something. A polite "shokran" and a small tip (MAD 10–20) on the way out is enough.',
    },
    {
      question: 'Where should I start a Fes medina walking tour?',
      answer:
        'At Bab Boujloud — the iconic blue gate at the western edge of Fes el-Bali. From there the main artery Talaa Kebira goes downhill through the medina.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I visit Al-Qarawiyyin Mosque?', answer: 'Only if you are Muslim. Non-Muslims can view the courtyards through the wooden doors and admire the exterior.' },
    { question: 'Is the Fes medina the largest in the world?', answer: 'One of the largest car-free urban areas; Fes el-Bali covers about 280 hectares with around 9,500 alleys.' },
    { question: 'Can I take a stroller in the Fes medina?', answer: 'Strollers are very difficult in the alleys. A baby carrier works much better.' },
  ],
  relatedDestinations: ['fes', 'chefchaouen', 'marrakech'],
  relatedPosts: ['fes-medina-guide', 'morocco-travel-tips-first-time-visitors', 'morocco-7-days-itinerary'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Médina de Fès en visite libre — Itinéraire 2026',
  metaDescription:
    'Médina de Fès en visite libre 2026 : itinéraire 4h, 7 arrêts incontournables, prix réels, et comment éviter les rabatteurs. Demandez sur WhatsApp.',
  title: 'Médina de Fès : visite libre 2026, l’itinéraire pas à pas',
  description:
    'Un itinéraire éprouvé pour visiter la médina de Fès sans guide en 2026 — 4 heures, 7 arrêts essentiels, prix réels et comment naviguer sans se perdre ni se faire harceler.',
  keyword: 'médina de fès visite libre',
  coverImage: COVER,
  coverAlt: 'Toits de la médina de Fès avec les tanneries Chouara — médina de Fès en visite libre',
  publishedISO: '2026-05-21',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro:
    'Une visite libre de la médina de [Fès](/destinations/fes/) en 2026 est tout à fait réalisable — et souvent plus agréable au jour 2 après une demi-journée avec guide officiel le jour 1. L’itinéraire ci-dessous est une marche de 4 heures sur l’artère principale Talaa Kebira, depuis Bab Boujloud (la porte bleue) jusqu’aux tanneries Chouara et retour, avec 7 arrêts incontournables, prix réels 2026 et la phrase exacte à dire pour refuser le classique "les tanneries sont fermées aujourd’hui". Téléchargez la carte sur votre téléphone avant — le GPS rame dans les ruelles.',
  sections: [
    {
      heading: 'Visite libre ou guide officiel ?',
      paragraphs: [
        'Pour un premier voyage à Fès, nous conseillons un guide officiel 4h le jour 1 (250-350 MAD / 22-32 €) pour la mise en place, puis visite libre le jour 2 et au-delà. Tout en visite libre dès le premier jour est possible mais vous perdrez du temps et serez plus exposé aux rabatteurs.',
        'Ce guide suppose une vague idée des portes principales. L’itinéraire reste réalisable en visite libre dès le jour 1 si vous utilisez Google Maps largement et que vous ne paniquez pas en vous perdant brièvement (ce qui arrivera).',
      ],
      callout: {
        label: 'Astuce locale',
        body: 'Épinglez votre riad dans Google Maps avant de partir. Le GPS marche aux portes et grandes places mais pas dans les ruelles. Quand vous êtes perdu, marchez vers le haut — vous finissez par émerger sur une grande rue ou une place.',
      },
    },
    {
      heading: 'Les 7 arrêts incontournables',
      paragraphs: [
        'Dans l’ordre sur l’artère descendante Talaa Kebira, depuis Bab Boujloud jusqu’aux tanneries Chouara.',
      ],
      list: [
        '1. Bab Boujloud — la porte bleue iconique. Gratuit. On commence là.',
        '2. Médersa Bou Inania (5 min de Bab Boujloud) — la plus ornée. Entrée 20 MAD.',
        '3. Souk el-Attarine — épices et parfumeurs. Gratuit de traverser.',
        '4. Mosquée et Université Al-Quaraouiyine — entrée réservée aux musulmans, mais coup d’œil par les portes en bois. Vue gratuite.',
        '5. Médersa al-Attarine — les plus beaux zelliges du Maroc. Entrée 20 MAD.',
        '6. Place et Musée du bois de Nejjarine. Place gratuite, musée 20 MAD.',
        '7. Tanneries Chouara — vue depuis une terrasse de cuir. "Gratuit" (pourboire 10-20 MAD).',
      ],
    },
    {
      heading: 'L’itinéraire 4 heures pas à pas',
      paragraphs: [
        'Départ à Bab Boujloud vers 9h après le petit-déjeuner. Passez la porte bleue dans la médina. L’artère Talaa Kebira descend (à gauche après la porte). Talaa Sghira est l’artère parallèle au sud — un peu moins peuplée.',
        'Heure 1 : Bab Boujloud → Médersa Bou Inania (5 min, 20 min de visite) → on continue à descendre devant les boutiques de cuir et de cuivre. Belles portes en laiton, parfois une entrée de mosquée (regardez sans entrer si vous n’êtes pas musulman).',
        'Heure 2 : Souk el-Attarine — épiciers, vendeurs de thé, pharmacie berbère. Arrêt chez le parfumeur pour ambre, khôl ou argan. Marchandez. 200 m plus loin, le complexe d’Al-Quaraouiyine.',
        'Heure 3 : Al-Quaraouiyine (regardez par les portes, observez les cours depuis le côté), Médersa al-Attarine (à ne surtout pas manquer — les zelliges sont les plus beaux du Maroc). Continuez vers les tanneries Chouara via le Souk al-Henna (belle place tranquille avec ses pots de henné).',
        'Heure 4 : Vue des tanneries depuis une terrasse (acceptez le brin de menthe). Remontée par Talaa Sghira vers Bab Boujloud. Déjeuner dans un café-toit avec vue sur la médina (Café Clock, Ruined Garden).',
      ],
    },
    {
      heading: 'Coût réel de l’itinéraire en 2026',
      paragraphs: [
        'Une visite libre coûte presque rien — les entrées font 10-20 MAD par monument. Comparé à un guide à 250-350 MAD, vous économisez 20-30 € mais perdez le commentaire historique et la navigation fluide.',
      ],
      table: {
        caption: 'Visite libre de la médina de Fès — coûts réels 2026',
        headers: ['Poste', 'Prix', 'Notes'],
        rows: [
          ['Entrée Médersa Bou Inania', '20 MAD', 'Ça vaut le coup — la plus ornée'],
          ['Entrée Médersa al-Attarine', '20 MAD', 'Les plus beaux zelliges'],
          ['Musée du bois de Nejjarine', '20 MAD', 'À sauter si pressé'],
          ['Pourboire terrasse tanneries', '10-20 MAD', '"Shokran" et petit pourboire'],
          ['Déjeuner café-toit', '100-180 MAD', 'Café Clock, Ruined Garden, Numéro 7'],
          ['Pauses thé à la menthe (×2)', '20 MAD', 'Cafés de place'],
          ['TOTAL (1 personne)', '180-270 MAD', '~15-25 € la demi-journée'],
        ],
      },
    },
    {
      heading: 'Gérer les rabatteurs',
      paragraphs: [
        'Dans Fès el-Bali, un jeune homme (parfois adolescent) vous suivra quelques minutes en demandant où vous allez. Un "la, shokran" (non merci) ferme et souriant, en continuant à marcher, règle 95 % des cas. Pas de conversation. Pas d’"indication" — ça mène à la boutique du cousin.',
        'La phrase classique : "les tanneries sont fermées aujourd’hui" ou "la place que vous cherchez a été déplacée". Toujours faux. Continuez.',
      ],
    },
    {
      heading: 'Où l’itinéraire devient confus — et comment s’en sortir',
      paragraphs: [
        'Deux points piègent les premières fois. D’abord autour d’Al-Quaraouiyine, les ruelles partent en cinq directions, signalétique absente. Utilisez Google Maps — même à 20 m près, ça vous met à portée de voix.',
        'Ensuite, revenir à Bab Boujloud depuis les tanneries signifie monter. Variez avec Talaa Sghira (au sud). Vraiment perdu ? Demandez à n’importe quel commerçant "Bab Boujloud ?" — il pointe sans attendre de pourboire.',
      ],
    },
    {
      heading: 'Quoi porter, quoi emmener',
      paragraphs: [
        'Chaussures fermées indispensables (ruelles irrégulières, humides près des tanneries, mules). Pantalon ample et chemise coton manches longues : le plus confortable l’été. Petit sac à dos avec : bouteille d’eau, lunettes, crème solaire, écharpe (femmes), 200-300 MAD en petites coupures, téléphone avec carte hors ligne.',
      ],
    },
    {
      heading: 'Quand commencer',
      paragraphs: [
        'Départ 9h pour la meilleure lumière dans les médersas (les cours intérieures sont au soleil jusqu’à 11h). Évitez vendredi après-midi quand beaucoup ferment pour la prière (12-14h). Fin d’après-midi possible mais on perd la lumière des cours.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Peut-on visiter la médina de Fès sans guide ?',
      answer:
        'Oui — une visite libre de 4h couvre Bab Boujloud, la Médersa Bou Inania, Al-Quaraouiyine, la Médersa al-Attarine et les tanneries Chouara. Pour le premier jour, un guide officiel reste recommandé ; en visite libre à partir du jour 2 c’est très bien.',
    },
    {
      question: 'La médina de Fès est-elle sûre à pied ?',
      answer:
        'Oui — Fès est sûre pour les touristes. La principale gêne est l’insistance des rabatteurs. Un "la, shokran" ferme et la marche continue suffisent. Évitez les ruelles après 22h.',
    },
    {
      question: 'Combien de temps dure une visite libre ?',
      answer:
        'Une visite libre des 7 arrêts essentiels prend environ 4h avec les visites et une pause thé. Ajoutez 1h pour un déjeuner sur un toit.',
    },
    {
      question: 'Faut-il payer pour voir les tanneries Chouara ?',
      answer:
        'Pas d’entrée formelle. Les boutiques de cuir ouvrent leur terrasse contre l’espoir d’une vente. Un "shokran" poli et un petit pourboire (10-20 MAD) à la sortie suffisent.',
    },
    {
      question: 'Où commencer la visite ?',
      answer:
        'À Bab Boujloud — la porte bleue à l’ouest de Fès el-Bali. De là, Talaa Kebira descend dans la médina.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on visiter Al-Quaraouiyine ?', answer: 'Uniquement si vous êtes musulman. Les non-musulmans peuvent regarder par les portes et admirer l’extérieur.' },
    { question: 'La médina de Fès est-elle la plus grande au monde ?', answer: 'L’une des plus grandes zones urbaines piétonnes. Fès el-Bali couvre environ 280 hectares avec 9 500 ruelles.' },
    { question: 'Peut-on emmener une poussette en médina ?', answer: 'Très difficile. Un porte-bébé fonctionne beaucoup mieux.' },
  ],
  relatedDestinations: ['fes', 'chefchaouen', 'marrakech'],
  relatedPosts: ['conseils-premier-voyage-au-maroc', 'morocco-7-days-itinerary'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'جولة حرة في مدينة فاس العتيقة — دليل 2026',
  metaDescription:
    'جولة حرة في مدينة فاس العتيقة 2026: مسار 4 ساعات بأهم 7 محطات، أسعار حقيقية، وكيف لا تتيه. خطّط رحلتك عبر واتساب.',
  title: 'جولة حرة في مدينة فاس العتيقة: دليل خطوة بخطوة لعام 2026',
  description:
    'مسار ميداني لجولة حرة في مدينة فاس العتيقة لعام 2026 — 4 ساعات، 7 محطات لا تُفوّت، أسعار 2026 الحقيقية، وكيف تتجوّل دون أن تتيه أو يضايقك أحد.',
  keyword: 'جولة حرة في مدينة فاس العتيقة',
  coverImage: COVER,
  coverAlt: 'سطوح مدينة فاس العتيقة وأسفلها مدابغ شوارة — جولة حرة في مدينة فاس العتيقة',
  publishedISO: '2026-05-21',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 12,
  intro:
    'جولة حرة في مدينة [فاس](/destinations/fes/) العتيقة في 2026 ممكنة تمامًا — وغالبًا أمتع في اليوم الثاني بعد نصف يوم مع مرشد مرخّص في اليوم الأول. المسار التالي مشي 4 ساعات على الشريان الرئيس طلعة الكبيرة من باب بوجلود (الباب الأزرق) إلى مدابغ شوارة وعودة، بسبع محطات لا تُفوّت، وبأسعار 2026 الحقيقية، وبالعبارة الدقيقة لرفض الحيلة الشهيرة «المدابغ مغلقة اليوم». حمّل الخريطة على هاتفك قبل الدخول — GPS يضعف داخل الأزقة.',
  sections: [
    {
      heading: 'حرة أم مع مرشد؟',
      paragraphs: [
        'لزائر فاس لأول مرة، ننصح بمرشد مرخّص 4 ساعات يوم 1 (250-350 درهم / 75-105 ريالًا) للتعرف على الموقع، ثم استكشاف حر يوم 2 فأكثر. الاكتفاء بالحرية من اليوم الأول ممكن لكنه يستهلك وقتًا ويعرّضك أكثر للمضايقات.',
        'يفترض هذا الدليل أنك تعرف الأبواب الرئيسة بشكل عام. المسار قابل للتنفيذ حرًا من اليوم الأول إذا استعنت بخرائط Google بسخاء ولم تذعر عند ضياع مؤقت (وسيحدث).',
      ],
      callout: {
        label: 'نصيحة محلية',
        body: 'ضع علامة (Pin) على الرياض في خرائط Google قبل الانطلاق. الـ GPS يعمل عند الأبواب والساحات، لا في الأزقة. عند الضياع، امشِ صعودًا وستخرج إلى شارع أو ساحة كبيرة.',
      },
    },
    {
      heading: 'المحطات السبع التي لا تُفوّت',
      paragraphs: [
        'بالترتيب على شريان طلعة الكبيرة النازل، من باب بوجلود إلى مدابغ شوارة.',
      ],
      list: [
        '1. باب بوجلود — الباب الأزرق الشهير. مجاني. ابدأ من هنا.',
        '2. مدرسة بوعنانية (5 دقائق من باب بوجلود) — أكثر مدرسة زخرفًا. الدخول 20 درهمًا.',
        '3. سوق العطارين — التوابل والعطور. مجاني للعبور.',
        '4. جامع وجامعة القرويين — الدخول للمسلمين فقط، لكن إطلالة من الأبواب الخشبية. مجاني.',
        '5. مدرسة العطارين — أدق زليج في المغرب. الدخول 20 درهمًا.',
        '6. ساحة نجارين ومتحف الخشب. الساحة مجانية، المتحف 20 درهمًا.',
        '7. مدابغ شوارة — إطلالة من سطح محل جلد. "مجاني" (إكرامية 10-20 درهمًا).',
      ],
    },
    {
      heading: 'المسار خطوة بخطوة',
      paragraphs: [
        'الانطلاق من باب بوجلود نحو التاسعة بعد الإفطار. ادخل الباب الأزرق إلى المدينة. شريان طلعة الكبيرة ينزل (يسارًا بعد الباب). طلعة الصغيرة هي الشريان الموازي جنوبًا — أقل ازدحامًا.',
        'الساعة 1: باب بوجلود → مدرسة بوعنانية (5 دقائق، 20 دقيقة زيارة) → النزول على طلعة الكبيرة أمام محلات الجلد والنحاس. أبواب نحاسية جميلة، ومداخل مساجد أحيانًا (انظر فقط إن لم تكن مسلمًا).',
        'الساعة 2: سوق العطارين — توابل، باعة شاي، صيدلية بربرية. توقّف عند العطّار للعنبر والكحل والأركان. ساوم. 200م بعد ذلك مجمّع القرويين.',
        'الساعة 3: القرويين (انظر من الأبواب، شاهد الصحون من الجانب)، مدرسة العطارين (لا تتخطّها — أجمل زليج في المغرب). تابع نزولًا نحو مدابغ شوارة عبر سوق الحناء (ساحة هادئة جميلة بأقدار الحناء).',
        'الساعة 4: مشهد المدابغ من سطح محل جلد (اقبل غصن النعناع). الصعود عبر طلعة الصغيرة إلى باب بوجلود. غداء في مقهى-سطح بإطلالة على المدينة (Café Clock، Ruined Garden).',
      ],
    },
    {
      heading: 'التكلفة الحقيقية للمسار في 2026',
      paragraphs: [
        'الجولة الحرة لا تكلّف شيئًا تقريبًا — الدخول 10-20 درهمًا لكل معلم. مقارنة بمرشد بـ 250-350 درهمًا، توفّر 75-100 ريال لكنك تخسر السياق التاريخي وسهولة التنقل.',
      ],
      table: {
        caption: 'جولة حرة في مدينة فاس — التكلفة الحقيقية 2026',
        headers: ['البند', 'السعر', 'ملاحظات'],
        rows: [
          ['دخول مدرسة بوعنانية', '20 درهمًا', 'تستحق — الأكثر زخرفًا'],
          ['دخول مدرسة العطارين', '20 درهمًا', 'أفضل زليج في المغرب'],
          ['متحف الخشب بنجارين', '20 درهمًا', 'تخطّ إذا الوقت ضيق'],
          ['إكرامية سطح المدابغ', '10-20 درهمًا', '«شكرًا» وإكرامية صغيرة'],
          ['غداء بمقهى-سطح', '100-180 درهمًا', 'Café Clock، Ruined Garden، Numéro 7'],
          ['شاي نعناع (×2)', '20 درهمًا', 'مقاهي الساحات'],
          ['الإجمالي (شخص)', '180-270 درهمًا', 'نحو 60-90 ريالًا لنصف يوم'],
        ],
      },
    },
    {
      heading: 'التعامل مع المرشدين غير الرسميين',
      paragraphs: [
        'في فاس البالي، قد يلحق بك شاب (أحيانًا مراهق) لدقائق يسألك أين تذهب. عبارة «لا، شكرًا» حازمة مع ابتسامة مع متابعة المشي تحلّ 95% من الحالات. لا تدخل في حوار. لا تقبل «الإرشاد» — يقودك إلى محل ابن عم.',
        'العبارة الكلاسيكية: «المدابغ مغلقة اليوم» أو «الساحة التي تبحث عنها مغلقة اليوم». كلاهما كاذب دائمًا. تابع طريقك.',
      ],
    },
    {
      heading: 'أين يلتبس المسار — وكيف تنقذ نفسك',
      paragraphs: [
        'نقطتان عادةً تربكان الزائر لأول مرة. أولًا حول القرويين، تنشعب الأزقة في خمس اتجاهات والإرشاد غائب. استعن بخرائط Google — حتى ولو خانتك بعشرين مترًا، تضعك في مرمى الصوت.',
        'ثانيًا، الرجوع إلى باب بوجلود من المدابغ يعني الصعود. غيّر المسار بأخذ طلعة الصغيرة (جنوبًا). إذا تهت فعلًا، اسأل أي تاجر «باب بوجلود؟» — سيدلّك دون انتظار إكرامية.',
      ],
    },
    {
      heading: 'ماذا تلبس وتحمل',
      paragraphs: [
        'حذاء مغلق إلزامي (أزقة غير مستوية، رطبة قرب المدابغ، مشتركة مع البغال). سروال واسع وقميص قطن بأكمام طويلة الأكثر راحة في الأشهر الحارة. حقيبة ظهر صغيرة بها: قارورة ماء، نظارة، واقي شمسي، شال (للنساء)، 200-300 درهم بفئات صغيرة، هاتف بخريطة محفوظة.',
      ],
    },
    {
      heading: 'أفضل توقيت للبدء',
      paragraphs: [
        'الانطلاق التاسعة لأفضل ضوء بالمدارس (الصحون الداخلية مغمورة بالشمس حتى الحادية عشرة). تجنّب الجمعة بعد الظهر حيث يغلق الكثيرون للصلاة (12-14). آخر العصر ممكن لكنك تخسر ضوء الصحون.',
      ],
    },
  ],
  faqs: [
    {
      question: 'هل يمكن زيارة مدينة فاس العتيقة بدون مرشد؟',
      answer:
        'نعم — جولة حرة 4 ساعات تغطي باب بوجلود ومدرسة بوعنانية والقرويين ومدرسة العطارين ومدابغ شوارة. في أول نصف يوم يُنصح بمرشد مرخّص؛ من اليوم الثاني الجولة الحرة جيدة.',
    },
    {
      question: 'هل المدينة العتيقة آمنة للمشي وحدي؟',
      answer:
        'نعم — فاس آمنة للسياح. أبرز الإزعاج هو إلحاح بعض المرشدين غير الرسميين. عبارة حازمة «لا، شكرًا» مع مواصلة المشي تكفي. تجنّب الأزقة بعد الساعة 22.',
    },
    {
      question: 'كم تستغرق الجولة؟',
      answer:
        'جولة حرة بالمحطات السبع تستغرق نحو 4 ساعات مع الزيارات وفاصل شاي. أضف ساعة لغداء في مقهى-سطح.',
    },
    {
      question: 'هل أدفع لرؤية مدابغ شوارة؟',
      answer:
        'لا توجد رسوم رسمية. محلات الجلد تفتح سطوحها مقابل أمل البيع. عبارة «شكرًا» وإكرامية صغيرة (10-20 درهمًا) عند الخروج تكفي.',
    },
    {
      question: 'من أين تبدأ الجولة؟',
      answer:
        'من باب بوجلود — الباب الأزرق الشهير غرب فاس البالي. ومنها ينزل شريان طلعة الكبيرة في المدينة.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يمكن دخول جامع القرويين؟', answer: 'للمسلمين فقط. غير المسلمين يطلّون من الأبواب الخشبية ويستمتعون بالواجهة.' },
    { question: 'هل مدينة فاس أكبر المدن العتيقة في العالم؟', answer: 'إحدى أكبر المناطق الحضرية الخالية من السيارات. فاس البالي 280 هكتارًا وحوالي 9500 زقاق.' },
    { question: 'هل يمكنني أخذ عربة الأطفال في المدينة؟', answer: 'صعبة جدًا في الأزقة. حامل الطفل عمليّ أكثر.' },
  ],
  relatedDestinations: ['fes', 'chefchaouen', 'marrakech'],
  relatedPosts: ['nasaeh-li-ziyarat-al-maghrib-li-awwal-marra'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);
