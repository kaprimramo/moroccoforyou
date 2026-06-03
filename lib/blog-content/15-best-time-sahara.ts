import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'best-time-to-visit-sahara-morocco';
const SLUG_FR = 'meilleure-periode-visiter-sahara-maroc';
const SLUG_AR = 'afdal-wa9t-lziyarat-sahara-al-maghrib';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(1001435);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Best Time to Visit the Sahara Desert in Morocco 2026',
  metaDescription: 'When is the best time to visit the Sahara desert in Morocco? Month-by-month guide to Merzouga weather, temperatures, crowds and what to expect each season.',
  title: 'Best Time to Visit the Sahara Desert in Morocco (2026 Guide)',
  description: 'Month-by-month guide to the best time to visit the Sahara desert in Morocco: temperatures, crowds, what to wear, and when to avoid the Merzouga dunes.',
  keyword: 'best time to visit sahara morocco',
  coverImage: COVER,
  coverAlt: 'Sahara desert Morocco golden dunes at sunset near Merzouga Erg Chebbi',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro: 'The Sahara desert near Merzouga is Morocco\'s most dramatic destination — but the experience changes dramatically depending on when you go. October to April is the sweet spot: comfortable days, cold nights, and the dunes glowing in perfect light. July and August are brutal — 45°C at midday, scorching sand, and camps half-empty because most experienced travellers know to avoid it. This guide tells you exactly what to expect every month of the year.',
  sections: [
    {
      heading: 'The Best Months to Visit the Sahara in Morocco',
      paragraphs: [
        'The absolute best months are October, November, March, and April. Daytime temperatures sit between 20–28°C — warm enough to enjoy the dunes without suffering, cool enough to hike and ride camels comfortably. Nights drop to 5–12°C, which means a proper Berber blanket in the desert camp and a sky full of stars with no haze.',
        'March and October are peak season for good reason: the light is golden, the air is clear, the temperatures are perfect, and the Erg Chebbi dunes are at their most photogenic. Book desert camps 4–6 weeks in advance for these months.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'The very best Sahara experience is November — after the main tourist season but before winter cold sets in. Camp prices drop 15–20%, the dunes are quieter, and the nights are cold enough to make the campfire feel magical without being genuinely uncomfortable. MoroccoForYou can arrange November desert trips on WhatsApp.',
      },
    },
    {
      heading: 'Month-by-Month Sahara Morocco Weather Guide',
      paragraphs: [
        'Here is exactly what to expect at Merzouga every month of the year.',
      ],
      table: {
        caption: 'Merzouga Sahara temperature and conditions by month',
        headers: ['Month', 'Day temp', 'Night temp', 'Conditions', 'Verdict'],
        rows: [
          ['January', '18–22°C', '2–6°C', 'Clear, very cold nights', '✅ Good — warm days, cold nights'],
          ['February', '20–24°C', '4–8°C', 'Clear, warming up', '✅ Good — comfortable'],
          ['March', '22–28°C', '8–12°C', 'Perfect light, clear skies', '🏆 Excellent — peak season'],
          ['April', '26–32°C', '12–16°C', 'Warm, occasional wind', '✅ Very good'],
          ['May', '30–36°C', '16–20°C', 'Getting hot, less crowded', '⚠️ Acceptable — hot afternoons'],
          ['June', '36–42°C', '22–26°C', 'Very hot, harsh light', '❌ Avoid'],
          ['July', '42–46°C', '26–30°C', 'Extreme heat, sandstorms possible', '❌ Avoid — brutal'],
          ['August', '42–46°C', '26–30°C', 'Extreme heat', '❌ Avoid'],
          ['September', '36–40°C', '20–24°C', 'Still very hot', '⚠️ Marginal'],
          ['October', '28–34°C', '12–16°C', 'Excellent light, comfortable', '🏆 Excellent — peak season'],
          ['November', '22–28°C', '6–10°C', 'Quieter, great value', '🏆 Excellent — best value'],
          ['December', '18–22°C', '2–6°C', 'Cold nights, clear days', '✅ Good — bring warm layers'],
        ],
      },
    },
    {
      heading: 'What to Wear in the Sahara Desert Morocco',
      paragraphs: [
        'The temperature difference between day and night in the Sahara is extreme — sometimes 25°C difference between noon and 3am. Packing correctly is not optional.',
        'Daytime (October–April): light long-sleeve shirt, light trousers (not jeans — sand gets in everywhere), sunglasses, sun hat, sunscreen SPF50+. Evenings and nights: fleece or mid-layer, windproof jacket, warm socks. December–February nights require a proper warm jacket — temperatures can drop below zero at the highest dunes.',
      ],
      callout: {
        label: '💡 Packing Tip for the Sahara',
        body: 'The best footwear for the Sahara dunes is not sandals — it is lightweight trail shoes or even bare feet. Sand between your toes on the dunes is one of the great Moroccan experiences. Bring a spare pair of shoes to leave at the camp entrance.',
      },
    },
    {
      heading: 'Sahara Desert Morocco — High Season vs Low Season',
      paragraphs: [
        'High season (March–April, October–November): camps are full, prices are 20–40% higher, but the experience is better — more atmosphere, better-staffed camps, and the chance to share a sunset with other travellers from around the world. Book 4–6 weeks ahead.',
        'Low season (December–February): camps are quiet, prices are lower, nights are genuinely cold (bring a sleeping bag liner), and the desert feels more remote and wild. January and February are the best "shoulder cold season" months — comfortable days, cold but manageable nights, and significantly lower prices.',
        'Avoid season (June–August): daytime sand temperatures can exceed 70°C. Camel treks happen only at dawn and dusk. Many quality camps close or operate at minimal service. Not recommended for any traveller.',
      ],
    },
    {
      heading: 'How to Get to the Sahara Desert in Morocco',
      paragraphs: [
        'Merzouga is 560 km from Marrakech and 490 km from Fes — both are long drives but spectacular ones. The Marrakech route crosses the Tizi n\'Tichka pass (2,260m) and passes through Ouarzazate and the Dades Gorge. The Fes route goes through the Middle Atlas mountains and Midelt.',
        'Options: rent a car from Casablanca Airport CMN or Marrakech and drive yourself (most flexible), book a 2–3 day guided tour from Marrakech (includes driver, desert camp, and sometimes Fes drop-off), or take a CTM bus to Errachidia then grand taxi to Merzouga (cheapest, slowest).',
      ],
    },
  ],
  faqs: [
    {
      question: 'What is the best time to visit the Sahara desert in Morocco?',
      answer: 'October, November, March, and April are the best months — comfortable daytime temperatures (22–32°C), cold nights, perfect light for photography, and the most beautiful dune conditions.',
    },
    {
      question: 'Is the Sahara desert in Morocco hot all year?',
      answer: 'No — winter months (December–February) have cold nights below 5°C and comfortable days around 20°C. Only June–August is genuinely brutal, with daytime temperatures reaching 45–46°C.',
    },
    {
      question: 'Can you visit the Sahara in Morocco in winter?',
      answer: 'Yes — December to February is a good time to visit. Days are warm (18–24°C), nights are cold (2–8°C), crowds are smaller, and prices are lower. Pack a warm jacket and sleeping bag liner.',
    },
    {
      question: 'How far is the Sahara from Marrakech?',
      answer: 'Merzouga (the main Sahara dunes area) is 560 km from Marrakech — about 8–9 hours driving via the Tizi n\'Tichka pass and Ouarzazate. A 2-day guided tour from Marrakech is the most comfortable option.',
    },
    {
      question: 'Should I avoid the Sahara in summer?',
      answer: 'Yes — June, July, and August are extremely hot (42–46°C daytime). Camel rides are dangerous in midday heat, and the experience is significantly diminished. Wait for October or visit in April.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What month is best for Morocco Sahara?', answer: 'October and November for best weather + value. March and April for peak season perfection. Avoid June–August.' },
    { question: 'Is it cold in the Sahara desert Morocco at night?', answer: 'Yes — very cold in winter (below 5°C in January) and cool in spring and autumn (8–16°C). Always bring warm layers even in April.' },
    { question: 'Can you sleep in the Sahara desert in Morocco?', answer: 'Yes — desert camps at Merzouga offer Berber tents with beds, dinner and breakfast, and campfire evenings. Quality camps cost 800–1,500 MAD/person.' },
  ],
  relatedDestinations: ['sahara-merzouga', 'marrakech', 'fes'],
  relatedPosts: ['morocco-itinerary-2-weeks-first-time', 'things-to-do-in-morocco-7-days', 'driving-in-morocco-tips-for-tourists'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Meilleure période pour visiter le Sahara au Maroc 2026',
  metaDescription: 'Quelle est la meilleure période pour visiter le désert du Sahara au Maroc ? Guide mois par mois de la météo à Merzouga, températures, foules et conseils saison.',
  title: 'Meilleure période pour visiter le Sahara au Maroc (Guide 2026)',
  description: 'Guide mois par mois de la meilleure période pour visiter le Sahara marocain : températures, affluence, quoi emporter et quand éviter les dunes de Merzouga.',
  keyword: 'meilleure période visiter sahara maroc',
  coverImage: COVER,
  coverAlt: 'Dunes dorées du Sahara marocain au coucher du soleil près de Merzouga Erg Chebbi',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro: 'Le désert du Sahara près de Merzouga est la destination la plus spectaculaire du Maroc — mais l\'expérience change radicalement selon la saison. D\'octobre à avril, c\'est la période idéale : journées agréables, nuits fraîches, dunes magnifiques. Juillet et août sont brutaux — 45°C à midi, sable brûlant, et les voyageurs expérimentés l\'évitent. Ce guide vous dit exactement ce qui vous attend chaque mois de l\'année.',
  sections: [
    {
      heading: 'Les meilleurs mois pour visiter le Sahara au Maroc',
      paragraphs: [
        'Les meilleurs mois absolus sont octobre, novembre, mars et avril. Les températures diurnes oscillent entre 20 et 28°C — assez chaud pour profiter des dunes sans souffrir, assez frais pour randonner et faire du chameau confortablement. Les nuits descendent à 5–12°C, ce qui rend la couverture berbère au camp désert nécessaire et le ciel étoilé parfaitement clair.',
        'Mars et octobre sont la haute saison pour de bonnes raisons : la lumière est dorée, l\'air est pur, les températures sont idéales et les dunes de l\'Erg Chebbi sont au maximum de leur beauté photographique. Réservez les camps désert 4 à 6 semaines à l\'avance pour ces mois.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'La meilleure expérience Sahara est en novembre — après la haute saison touristique mais avant les vraies nuits d\'hiver. Les prix des camps baissent de 15 à 20%, les dunes sont plus calmes, et les nuits sont assez fraîches pour rendre le feu de camp magique sans être franchement inconfortables. MoroccoForYou peut organiser des séjours Sahara en novembre sur WhatsApp.',
      },
    },
    {
      heading: 'Guide météo Sahara Maroc mois par mois',
      paragraphs: [
        'Voici exactement ce qui vous attend à Merzouga chaque mois de l\'année.',
      ],
      table: {
        caption: 'Températures et conditions à Merzouga par mois',
        headers: ['Mois', 'Temp. jour', 'Temp. nuit', 'Conditions', 'Verdict'],
        rows: [
          ['Janvier', '18–22°C', '2–6°C', 'Clair, nuits très froides', '✅ Bien — journées chaudes, nuits froides'],
          ['Février', '20–24°C', '4–8°C', 'Clair, réchauffement', '✅ Bien — confortable'],
          ['Mars', '22–28°C', '8–12°C', 'Lumière parfaite, ciel dégagé', '🏆 Excellent — haute saison'],
          ['Avril', '26–32°C', '12–16°C', 'Chaud, vent occasionnel', '✅ Très bien'],
          ['Mai', '30–36°C', '16–20°C', 'Chaud, moins de monde', '⚠️ Acceptable — après-midis chauds'],
          ['Juin', '36–42°C', '22–26°C', 'Très chaud, lumière dure', '❌ À éviter'],
          ['Juillet', '42–46°C', '26–30°C', 'Chaleur extrême, tempêtes de sable', '❌ À éviter — brutal'],
          ['Août', '42–46°C', '26–30°C', 'Chaleur extrême', '❌ À éviter'],
          ['Septembre', '36–40°C', '20–24°C', 'Encore très chaud', '⚠️ Marginal'],
          ['Octobre', '28–34°C', '12–16°C', 'Lumière excellente, confortable', '🏆 Excellent — haute saison'],
          ['Novembre', '22–28°C', '6–10°C', 'Plus calme, excellent rapport qualité-prix', '🏆 Excellent — meilleur rapport qualité-prix'],
          ['Décembre', '18–22°C', '2–6°C', 'Nuits froides, journées claires', '✅ Bien — prévoyez des couches chaudes'],
        ],
      },
    },
    {
      heading: 'Que porter dans le désert du Sahara au Maroc',
      paragraphs: [
        'La différence de température entre le jour et la nuit au Sahara est extrême — parfois 25°C d\'écart entre midi et 3h du matin. Bien préparer sa valise n\'est pas optionnel.',
        'En journée (octobre–avril) : chemise légère à manches longues, pantalon léger (pas de jeans — le sable s\'infiltre partout), lunettes de soleil, chapeau, crème solaire SPF50+. Soirées et nuits : polaire ou couche intermédiaire, veste coupe-vent, chaussettes chaudes. Les nuits de décembre à février nécessitent une vraie veste chaude — les températures peuvent descendre sous zéro sur les dunes les plus hautes.',
      ],
      callout: {
        label: '💡 Conseil packing Sahara',
        body: 'La meilleure chaussure pour les dunes du Sahara n\'est pas les sandales — ce sont des chaussures de trail légères ou même les pieds nus. Le sable entre les orteils sur les dunes est l\'une des grandes expériences marocaines. Prenez une paire de chaussures à laisser à l\'entrée du camp.',
      },
    },
    {
      heading: 'Sahara Maroc — Haute saison vs basse saison',
      paragraphs: [
        'Haute saison (mars–avril, octobre–novembre) : les camps sont complets, les prix 20–40% plus élevés, mais l\'expérience est meilleure — plus d\'atmosphère, personnel plus nombreux, et la chance de partager un coucher de soleil avec des voyageurs du monde entier. Réservez 4 à 6 semaines à l\'avance.',
        'Basse saison (décembre–février) : les camps sont calmes, les prix plus bas, les nuits vraiment froides (prévoir une housse de sac de couchage), et le désert semble plus isolé et sauvage. Janvier et février sont les meilleurs mois de "basse saison froide" : journées confortables, nuits froides mais gérables, et prix sensiblement inférieurs.',
        'Saison à éviter (juin–août) : les températures du sable au sol peuvent dépasser 70°C. Les balades à chameau ne se font qu\'à l\'aube et au crépuscule. De nombreux camps ferment ou fonctionnent au service minimum. Déconseillé à tous les voyageurs.',
      ],
    },
    {
      heading: 'Comment rejoindre le Sahara marocain',
      paragraphs: [
        'Merzouga est à 560 km de Marrakech et 490 km de Fès — de longs trajets mais spectaculaires. La route depuis Marrakech traverse le col de Tizi n\'Tichka (2 260m) et passe par Ouarzazate et les Gorges du Dadès. La route depuis Fès traverse le Moyen Atlas et Midelt.',
        'Options : louer une voiture à l\'aéroport de Casablanca CMN ou à Marrakech et conduire soi-même (plus flexible), réserver un circuit guidé 2–3 jours depuis Marrakech (comprend chauffeur, camp désert et parfois dépôt à Fès), ou prendre un bus CTM jusqu\'à Errachidia puis grand taxi jusqu\'à Merzouga (moins cher, plus lent).',
      ],
    },
  ],
  faqs: [
    {
      question: 'Quelle est la meilleure période pour visiter le Sahara au Maroc ?',
      answer: 'Octobre, novembre, mars et avril sont les meilleurs mois — températures diurnes confortables (22–32°C), nuits fraîches, lumière parfaite pour la photographie et dunes au meilleur de leur forme.',
    },
    {
      question: 'Le Sahara marocain est-il chaud toute l\'année ?',
      answer: 'Non — les mois d\'hiver (décembre–février) ont des nuits froides sous 5°C et des journées agréables autour de 20°C. Seuls juin–août sont vraiment brutaux, avec des températures diurnes atteignant 45–46°C.',
    },
    {
      question: 'Peut-on visiter le Sahara en hiver au Maroc ?',
      answer: 'Oui — décembre à février est une bonne période. Journées chaudes (18–24°C), nuits froides (2–8°C), moins de monde, prix inférieurs. Prévoyez une veste chaude et une housse de sac de couchage.',
    },
    {
      question: 'À quelle distance se trouve le Sahara de Marrakech ?',
      answer: 'Merzouga est à 560 km de Marrakech — environ 8–9h de route via le col de Tizi n\'Tichka et Ouarzazate. Un circuit guidé 2 jours depuis Marrakech est l\'option la plus confortable.',
    },
    {
      question: 'Faut-il éviter le Sahara en été ?',
      answer: 'Oui — juin, juillet et août sont extrêmement chauds (42–46°C le jour). Les balades à chameau sont dangereuses en pleine chaleur. Attendez octobre ou visitez en avril.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Quel mois est le meilleur pour le Sahara marocain ?', answer: 'Octobre et novembre pour le meilleur rapport météo/prix. Mars et avril pour la perfection haute saison. Évitez juin–août.' },
    { question: 'Fait-il froid la nuit au Sahara marocain ?', answer: 'Oui — très froid en hiver (sous 5°C en janvier) et frais au printemps et en automne (8–16°C). Apportez toujours des couches chaudes même en avril.' },
    { question: 'Peut-on dormir dans le désert du Sahara au Maroc ?', answer: 'Oui — les camps désert à Merzouga proposent des tentes berbères avec lits, dîner et petit-déjeuner, et soirées autour du feu. Les camps de qualité coûtent 800–1 500 MAD/personne.' },
  ],
  relatedDestinations: ['sahara-merzouga', 'marrakech', 'fes'],
  relatedPosts: ['itineraire-maroc-2-semaines-premier-voyage', 'que-faire-au-maroc-7-jours', 'conduire-au-maroc-conseils-touristes'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أفضل وقت لزيارة صحراء المغرب 2026 — دليل شهري',
  metaDescription: 'ما أفضل وقت لزيارة صحراء المغرب؟ دليل شهري لطقس مرزوقة ودرجات الحرارة والازدحام وما تتوقعه في كل موسم.',
  title: 'أفضل وقت لزيارة صحراء المغرب: الدليل الشامل 2026',
  description: 'دليل شهري لأفضل وقت لزيارة صحراء المغرب: درجات الحرارة والازدحام وما ترتديه ومتى تتجنب كثبان مرزوقة.',
  keyword: 'أفضل وقت لزيارة صحراء المغرب',
  coverImage: COVER,
  coverAlt: 'كثبان صحراء المغرب الذهبية عند الغروب قرب مرزوقة وإرق الشبي',
  publishedISO: '2026-06-03',
  author: 'فريق MoroccoForYou',
  readingMinutes: 10,
  intro: 'صحراء مرزوقة هي أكثر وجهات المغرب إثارةً للإعجاب — لكن التجربة تتغير تغيراً جذرياً حسب التوقيت. من أكتوبر إلى أبريل هو الموسم المثالي: أيام مريحة وليالٍ باردة وكثبان تتلألأ بضوء مثالي. يوليو وأغسطس قاسيان — 45 درجة ظهراً ورمال حارقة والمخيمات نصف فارغة لأن المسافرين ذوي الخبرة يتجنبون الصيف. هذا الدليل يخبرك بالضبط بما تتوقعه كل شهر من السنة.',
  sections: [
    {
      heading: 'أفضل أشهر لزيارة الصحراء في المغرب',
      paragraphs: [
        'الأشهر الأفضل على الإطلاق هي أكتوبر ونوفمبر ومارس وأبريل. درجات الحرارة النهارية بين 20–28 درجة — دافئة بما يكفي للاستمتاع بالكثبان دون معاناة، وباردة بما يكفي للمشي وركوب الجمال براحة. تنخفض الليالي إلى 5–12 درجة، مما يجعل البطانية البربرية ضرورة حقيقية وسماء الصحراء المليئة بالنجوم بلا ضباب.',
        'مارس وأكتوبر موسم ذروة لأسباب وجيهة: الضوء ذهبي والهواء صافٍ ودرجات الحرارة مثالية وكثبان إرق الشبي في أعلى مستويات جمالها. احجز مخيمات الصحراء 4–6 أسابيع مسبقاً لهذين الشهرين.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'أفضل تجربة صحراوية هي في نوفمبر — بعد ذروة موسم السياحة وقبل البرد الشتوي الحقيقي. تنخفض أسعار المخيمات 15–20% والكثبان أهدأ والليالي باردة بما يكفي لجعل نار المخيم سحرية دون إزعاج حقيقي. MoroccoForYou تستطيع ترتيب رحلات الصحراء في نوفمبر عبر واتساب.',
      },
    },
    {
      heading: 'دليل طقس صحراء المغرب شهراً بشهر',
      paragraphs: [
        'إليك بالضبط ما تتوقعه في مرزوقة كل شهر من السنة.',
      ],
      table: {
        caption: 'درجات حرارة مرزوقة والأحوال الجوية شهراً بشهر',
        headers: ['الشهر', 'درجة النهار', 'درجة الليل', 'الأحوال', 'الحكم'],
        rows: [
          ['يناير', '18–22°', '2–6°', 'صافٍ، ليالٍ باردة جداً', '✅ جيد — نهارات دافئة وليالٍ باردة'],
          ['فبراير', '20–24°', '4–8°', 'صافٍ، الاحترار يبدأ', '✅ جيد — مريح'],
          ['مارس', '22–28°', '8–12°', 'ضوء مثالي وسماء صافية', '🏆 ممتاز — ذروة الموسم'],
          ['أبريل', '26–32°', '12–16°', 'دافئ، رياح أحياناً', '✅ جيد جداً'],
          ['مايو', '30–36°', '16–20°', 'يزداد الحر، أقل ازدحاماً', '⚠️ مقبول — بعد الظهر حار'],
          ['يونيو', '36–42°', '22–26°', 'حار جداً، ضوء قاسٍ', '❌ تجنّب'],
          ['يوليو', '42–46°', '26–30°', 'حر شديد، عواصف رملية', '❌ تجنّب — قاسٍ'],
          ['أغسطس', '42–46°', '26–30°', 'حر شديد', '❌ تجنّب'],
          ['سبتمبر', '36–40°', '20–24°', 'لا يزال حاراً جداً', '⚠️ هامشي'],
          ['أكتوبر', '28–34°', '12–16°', 'ضوء ممتاز ومريح', '🏆 ممتاز — ذروة الموسم'],
          ['نوفمبر', '22–28°', '6–10°', 'أهدأ، قيمة ممتازة', '🏆 ممتاز — أفضل قيمة'],
          ['ديسمبر', '18–22°', '2–6°', 'ليالٍ باردة ونهارات صافية', '✅ جيد — أحضر طبقات دافئة'],
        ],
      },
    },
    {
      heading: 'ماذا ترتدي في صحراء المغرب',
      paragraphs: [
        'الفرق في درجات الحرارة بين النهار والليل في الصحراء متطرف — أحياناً 25 درجة فرقاً بين الظهر والثالثة صباحاً. التحضير الصحيح للملابس ليس اختيارياً.',
        'نهاراً (أكتوبر–أبريل): قميص خفيف بأكمام طويلة، سروال خفيف (ليس جينز — الرمل يتسلل إلى كل مكان)، نظارة شمسية، قبعة، كريم حماية من الشمس SPF50+. المساء والليل: طبقة وسطى دافئة، جاكيت مقاوم للرياح، جوارب دافئة. ليالي ديسمبر–فبراير تحتاج جاكيتاً دافئاً حقيقياً.',
      ],
      callout: {
        label: '💡 نصيحة التجهيز للصحراء',
        body: 'أفضل حذاء لكثبان الصحراء ليس الصندل — بل أحذية خفيفة للمسالك أو حتى القدمان الحافيتان. الرمل بين أصابع قدميك على الكثبان هو من أعظم التجارب المغربية. أحضر حذاءً احتياطياً لتركه عند مدخل المخيم.',
      },
    },
    {
      heading: 'صحراء المغرب — الموسم العالي مقابل الموسم المنخفض',
      paragraphs: [
        'الموسم العالي (مارس–أبريل، أكتوبر–نوفمبر): المخيمات كاملة والأسعار أعلى بـ20–40%، لكن التجربة أفضل — أجواء أكثر حيوية وطاقم أكبر وفرصة مشاركة غروب مع مسافرين من حول العالم. احجز 4–6 أسابيع مسبقاً.',
        'الموسم المنخفض (ديسمبر–فبراير): المخيمات هادئة والأسعار أقل والليالي باردة حقاً (أحضر غطاء نوم)، والصحراء تبدو أكثر عزلة وبرية. يناير وفبراير أفضل أشهر "الموسم الشتوي": نهارات مريحة وليالٍ باردة لكن محتملة وأسعار أقل بشكل ملحوظ.',
        'الموسم الذي يجب تجنّبه (يونيو–أغسطس): درجات حرارة الرمل قد تتجاوز 70 درجة. ركوب الجمال يقتصر على الفجر والغسق. كثير من المخيمات الجيدة تُغلق أو تعمل بحد أدنى. غير موصى به لأي مسافر.',
      ],
    },
    {
      heading: 'كيف تصل إلى صحراء المغرب',
      paragraphs: [
        'مرزوقة على بُعد 560 كم من مراكش و490 كم من فاس — رحلات طويلة لكن بديعة. مسار مراكش يعبر ممر تيزي نتيشكا (2260م) ويمر بورزازات ومحاجر الدادس. مسار فاس يعبر أطلس الأوسط ومدلت.',
        'الخيارات: استئجار سيارة من مطار الدار البيضاء CMN أو مراكش والقيادة بنفسك (الأكثر مرونة)، حجز جولة موجّهة 2–3 أيام من مراكش (تشمل السائق ومخيم الصحراء وأحياناً إيصالاً لفاس)، أو أخذ حافلة CTM إلى الراشيدية ثم سيارة أجرة كبيرة إلى مرزوقة (الأرخص، الأبطأ).',
      ],
    },
  ],
  faqs: [
    {
      question: 'ما أفضل وقت لزيارة صحراء المغرب؟',
      answer: 'أكتوبر ونوفمبر ومارس وأبريل هي الأفضل — درجات حرارة نهارية مريحة (22–32°)، ليالٍ باردة، ضوء مثالي للتصوير وكثبان في أبهى حالاتها.',
    },
    {
      question: 'هل صحراء المغرب حارة طوال العام؟',
      answer: 'لا — أشهر الشتاء (ديسمبر–فبراير) لها ليالٍ باردة دون 5 درجات ونهارات مريحة حول 20 درجة. فقط يونيو–أغسطس قاسية حقاً مع درجات تصل 45–46 درجة.',
    },
    {
      question: 'هل يمكن زيارة الصحراء في المغرب شتاءً؟',
      answer: 'نعم — ديسمبر إلى فبراير وقت جيد للزيارة. نهارات دافئة (18–24°)، ليالٍ باردة (2–8°)، حشود أقل وأسعار أوفر. أحضر جاكيتاً دافئاً.',
    },
    {
      question: 'كم المسافة بين مراكش والصحراء؟',
      answer: 'مرزوقة على بُعد 560 كم من مراكش — نحو 8–9 ساعات قيادة عبر ممر تيزي نتيشكا وورزازات. جولة موجّهة يومين من مراكش هي الخيار الأكثر راحة.',
    },
    {
      question: 'هل يجب تجنّب الصحراء في الصيف؟',
      answer: 'نعم — يونيو ويوليو وأغسطس حارة للغاية (42–46° نهاراً). ركوب الجمال خطر في الحرارة الشديدة. انتظر أكتوبر أو زُر في أبريل.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'أي شهر أفضل لصحراء المغرب؟', answer: 'أكتوبر ونوفمبر لأفضل طقس وأفضل قيمة. مارس وأبريل لكمال الموسم العالي. تجنّب يونيو–أغسطس.' },
    { question: 'هل يكون البرد شديداً ليلاً في صحراء المغرب؟', answer: 'نعم — بارد جداً شتاءً (دون 5 درجات في يناير) وبارد نسبياً ربيعاً وخريفاً (8–16 درجة). أحضر طبقات دافئة حتى في أبريل.' },
    { question: 'هل يمكن النوم في صحراء المغرب؟', answer: 'نعم — مخيمات مرزوقة تقدم خياماً بربرية بأسرّة حقيقية وعشاء وإفطار وأمسيات حول النار. المخيمات الجيدة تكلف 800–1500 درهم/شخص.' },
  ],
  relatedDestinations: ['sahara-merzouga', 'marrakech', 'fes'],
  relatedPosts: ['khattat-rihlat-al-maghrib-usbuan', 'ma-tafal-fi-al-maghrib-7-ayam', 'qiyadat-al-sayyara-fi-al-maghrib'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);