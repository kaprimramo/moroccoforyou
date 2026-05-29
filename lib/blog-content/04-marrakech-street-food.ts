import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'what-to-eat-in-marrakech-street-food-guide';
const SLUG_FR = 'cuisine-de-rue-marrakech-guide';
const SLUG_AR = 'akl-shari-fi-marrakesh-dalil';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(17649841);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'What to Eat in Marrakech: 2026 Street Food Guide & Prices',
  metaDescription:
    'What to eat in Marrakech — the 2026 street food guide. Jemaa el-Fnaa stalls, real prices, what to order, what to skip and how to eat safely. Plan on WhatsApp.',
  title: 'What to Eat in Marrakech: A Street Food Guide for 2026',
  description:
    'A field-tested Marrakech street food guide for 2026 — what to order at Jemaa el-Fnaa, the best snail seller, real prices in dirhams, and how to eat from a stall without getting sick.',
  keyword: 'what to eat in marrakech street food guide',
  coverImage: COVER,
  coverAlt: 'Marrakech medina spice and food stall — what to eat in Marrakech street food guide',
  publishedISO: '2026-05-16',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro:
    'The best place to eat in [Marrakech](/destinations/marrakech/) is not the rooftop restaurant your hotel will recommend — it’s the numbered food stalls of Jemaa el-Fnaa at sunset, where steam, lanterns and the call of competing vendors turn dinner into theatre. This 2026 street food guide tells you exactly what to order in Marrakech, which stalls are safe (most of them), what to skip, and how much it really costs. Prices below are real, gathered on a normal Tuesday in May 2026.',
  sections: [
    {
      heading: 'The 8 things you must try in Marrakech',
      paragraphs: [
        'Marrakech’s signature dishes split between hearty cooked food (tagines, tangia, harira), snacks and grills (msemen, kebabs, snails) and sweets (sfenj, chebakia, mint tea). Aim to try each of the eight below at least once during a 3–4 day visit. Many overlap; you can knock off four in one Jemaa el-Fnaa dinner.',
      ],
      list: [
        'Tangia — slow-cooked beef in a clay urn, the Marrakech-only signature. Order at lunch at Mechoui Alley.',
        'Tajine — lamb-prune, chicken-lemon-olive, or kefta-egg. Best on a rooftop with a view.',
        'Mechoui — slow-roasted lamb shoulder, sold by weight at Mechoui Alley off the main square.',
        'Bessara — fava-bean soup with cumin and olive oil, the breakfast of working Marrakech.',
        'Snails (boubbouche) — small sea-snails in a peppery broth, sold at numbered stalls 1, 31, 14. MAD 15 a bowl.',
        'Msemen — flaky square pancake, eaten with honey and cheese or stuffed savoury.',
        'Sfenj — Moroccan ring doughnut, hot from the oil, MAD 2–3 each.',
        'Mint tea — sugared green tea with fresh mint, the constant background music of any meal.',
      ],
    },
    {
      heading: 'Jemaa el-Fnaa stall by stall — the practical map',
      paragraphs: [
        'Around 7pm the square transforms: cooking stalls roll out, smoke rises, numbered signs go up. Don’t commit to one too fast — walk the full square first, then double back to whatever looked busy. Locals queue at the busy stalls; that’s your signal.',
      ],
      table: {
        caption: 'Jemaa el-Fnaa stalls — what to order and how much it costs in 2026',
        headers: ['Stall type', 'What to order', 'Price', 'How to spot it'],
        rows: [
          ['Snail soup carts (#1, 14, 31)', 'Bowl of snails + broth', 'MAD 15 (£1.20)', 'Crowd standing, clay bowls, toothpicks'],
          ['Grill stalls (#14, 32)', 'Brochettes (kebabs) + bread + salad', 'MAD 60–90', 'Hot grill, mixed vegetables, locals at benches'],
          ['Tagine stalls (#31, 117)', 'Tagine of the day', 'MAD 50–80', 'Conical clay pots, slow simmer'],
          ['Fish stalls (#14)', 'Fried sardines + chips', 'MAD 40–60', 'Big platter of small whole fish'],
          ['Sheep’s head stall (#26)', 'Boiled head + tea', 'MAD 30–50', 'For the brave — order half not full'],
          ['Juice carts (#1, 16)', 'Fresh OJ', 'MAD 4–8', 'Pyramid of oranges, hand-press'],
        ],
      },
      callout: {
        label: 'Local insider tip',
        body: 'Eat at the stall opposite where the head waiter wants to seat you. Waiters are paid to steer tourists to specific stalls. Pick by looking at who is eating there — Moroccans, families, or only tourists with cameras.',
      },
    },
    {
      heading: 'Street food safety — what really matters',
      paragraphs: [
        'Marrakech street food is far safer than internet horror stories suggest. The food cooks at 200°C, the turnover is fast, and the busy stalls would not survive a single dirty week. Real risks are minor.',
      ],
      list: [
        'Skip pre-cut fruit from carts — slicing in advance is the only common bacterial risk.',
        'Drink bottled water (€0.30 / 1.5L) or fresh juice from a hand-press, not water from a cup.',
        'Choose the stall where locals queue. Empty stalls have empty stalls for a reason.',
        'Bring hand sanitiser — handwashing facilities at stalls are limited.',
      ],
    },
    {
      heading: 'Outside the square — the best non-tourist food',
      paragraphs: [
        'Locals don’t eat at Jemaa el-Fnaa every night. For where Marrakech actually eats, walk 5 minutes south from the square to the Souk Semmarine area and take a left into the Mellah (Jewish quarter). The little corner restaurants serve harira, tangia and grilled liver to families and shopkeepers from MAD 30 a plate.',
        'For an upmarket but still local experience, book Mechoui Alley for lunch (MAD 80 for a generous slab of lamb shoulder with cumin and bread) or Café Clock for camel burgers and modern Moroccan cooking. We also love Henna Café, a tiny vegetarian place by the Ben Youssef Madrasa.',
      ],
    },
    {
      heading: 'Sweets, pastries and the mint tea ritual',
      paragraphs: [
        'Moroccan sweets are dense, sticky and dangerously good. The medina’s pastry shops (look for the steel trays in shop windows) sell briouats (sweet samosas), gazelle horns (almond-paste crescents), and chebakia (sesame-and-honey twists, peak during Ramadan).',
        'Mint tea is the universal welcome, the universal closer, and a small ritual: the pourer holds the teapot a metre above the glass, sugar is dosed by the host, and the first cup is "bitter as death". Always accept at least one.',
      ],
    },
    {
      heading: 'Cooking classes — the best souvenir',
      paragraphs: [
        'A 4-hour cooking class is the best Marrakech souvenir under €50. The classic format: meet at the market, choose meat and vegetables with the chef, return to a riad kitchen, cook one tagine and two salads, eat with mint tea on the terrace. Recommended: La Maison Arabe, Souk Cuisine, Café Clock cooking class.',
        'Bring a notebook — the spice ratios are the part you’ll forget by the time you’re home.',
      ],
    },
    {
      heading: 'Vegetarian, vegan and dietary needs',
      paragraphs: [
        'Vegetarian travellers eat very well in Marrakech. Vegetable tagine, zaalouk (aubergine-tomato salad), taktouka (pepper-tomato salad), msemen with cheese, hummus, harira (often meat-free), couscous (ask "sans viande"). Vegans need to flag "no butter" since most pastries and breads include it.',
        'Coeliac travellers should be careful — wheat is in almost everything (bread is sacred). Tagines without bread, grilled fish, rice with vegetables work. Most riads will adapt with a day’s notice.',
      ],
    },
    {
      heading: 'Best time of day to eat where',
      paragraphs: [
        'Morning: breakfast at your riad, then a msemen and mint tea from a medina stall around 10am for the second breakfast everyone in Morocco has. Lunch: Mechoui Alley before 2pm (they sell out). Afternoon: pastries and mint tea on a rooftop. Evening: Jemaa el-Fnaa from 7pm to 10pm — start before sunset for the best stall choice.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is street food in Marrakech safe to eat?',
      answer:
        'Yes — Marrakech street food is broadly safe. The cooking temperatures, fast turnover and the visible competition for repeat customers keep standards high at busy stalls. Avoid pre-cut fruit from carts and choose stalls where locals are queuing.',
    },
    {
      question: 'How much does street food cost in Marrakech?',
      answer:
        'A full street-food dinner at Jemaa el-Fnaa costs MAD 80–150 per person (£6–£12), including snails, brochettes, tagine and bread. Tangia at Mechoui Alley is MAD 80 (£6.50). A fresh orange juice from the square is MAD 4–8.',
    },
    {
      question: 'What food is Marrakech famous for?',
      answer:
        'Tangia (slow-cooked beef in a clay urn) is Marrakech-specific. The city is also famous for tagines, mechoui (slow-roasted lamb), bessara soup, snails, msemen and the freshest orange juice in Morocco.',
    },
    {
      question: 'Is it OK to drink the orange juice at Jemaa el-Fnaa?',
      answer:
        'Yes — the juice is freshly squeezed by hand on demand from whole oranges. Make sure the vendor uses a fresh cup or a paper one, not glass that may have been rinsed in tap water.',
    },
    {
      question: 'Where do locals actually eat in Marrakech?',
      answer:
        'Working Marrakech eats lunch in the Mellah (Jewish quarter) and the streets behind the Bahia Palace, where small "snack" restaurants serve harira, tangia and grilled liver from MAD 30. For dinner, locals do go to Jemaa el-Fnaa but stick to specific stalls they trust.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can you drink alcohol with street food in Marrakech?', answer: 'No — Jemaa el-Fnaa stalls are alcohol-free. For wine or beer with dinner, book a rooftop licensed restaurant (Café Arabe, El Fenn, Le Salama).' },
    { question: 'What is the best food market in Marrakech?', answer: 'For ingredients, the Mellah market (Place des Ferblantiers) for spices and the souks around Souk Semmarine for produce. For prepared food, Jemaa el-Fnaa stalls in the evening.' },
    { question: 'How spicy is Moroccan food?', answer: 'Surprisingly mild. Heat comes from harissa served on the side, not from the dish itself. Ginger, cumin, saffron and preserved lemon do most of the work.' },
  ],
  relatedDestinations: ['marrakech', 'essaouira', 'fes'],
  relatedPosts: ['best-riads-marrakech', 'morocco-7-days-itinerary', 'morocco-travel-tips'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Cuisine de rue à Marrakech : guide complet 2026',
  metaDescription:
    'Que manger à Marrakech ? Le guide de la cuisine de rue 2026 — stands de Jemaa el-Fna, prix réels, plats à goûter, et comment manger en sécurité.',
  title: 'Cuisine de rue Marrakech : guide complet pour 2026',
  description:
    'Le guide de la cuisine de rue à Marrakech : que goûter sur la place Jemaa el-Fna, quels stands choisir, les prix réels en dirhams en 2026, et comment manger dans la médina sans tomber malade.',
  keyword: 'cuisine de rue marrakech',
  coverImage: COVER,
  coverAlt: 'Stand d’épices et de cuisine dans la médina de Marrakech — cuisine de rue à Marrakech',
  publishedISO: '2026-05-16',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro:
    'Le meilleur endroit pour manger à [Marrakech](/destinations/marrakech/) n’est pas le rooftop conseillé par votre hôtel — ce sont les stands numérotés de Jemaa el-Fna au coucher du soleil, quand la vapeur, les lanternes et les cris concurrents transforment le dîner en spectacle. Ce guide 2026 de la cuisine de rue à Marrakech vous dit exactement quoi commander, quels stands éviter et combien tout cela coûte vraiment. Tous les prix mentionnés ont été relevés un mardi normal de mai 2026.',
  sections: [
    {
      heading: 'Les 8 plats à goûter absolument à Marrakech',
      paragraphs: [
        'Les spécialités marrakchies se répartissent entre plats mijotés (tajines, tangia, harira), grillades et snacks (msemen, brochettes, escargots) et sucreries (sfenj, chebakia, thé à la menthe). Visez les huit ci-dessous au moins une fois sur un séjour de 3-4 jours. Certains peuvent s’enchaîner dans un même dîner sur Jemaa el-Fna.',
      ],
      list: [
        'Tangia — bœuf longuement mijoté dans une jarre en terre, spécialité de Marrakech. À déjeuner aux brochetteries de Mechoui Alley.',
        'Tajine — agneau-pruneaux, poulet-citron-olives, ou kefta-œufs. Idéal sur un rooftop avec vue.',
        'Méchoui — épaule d’agneau rôtie lentement, vendue au poids à Mechoui Alley.',
        'Bessara — soupe aux fèves cassées, cumin et huile d’olive, le petit-déjeuner du Marrakech qui travaille.',
        'Escargots — petits escargots de mer dans un bouillon poivré, stands numérotés 1, 31 et 14. 15 MAD le bol.',
        'Msemen — galette carrée feuilletée, avec miel et fromage ou salée fourrée.',
        'Sfenj — beignet en anneau, chaud sorti du bain de friture. 2-3 MAD pièce.',
        'Thé à la menthe — vert sucré avec menthe fraîche, musique de fond constante de tout repas.',
      ],
    },
    {
      heading: 'Jemaa el-Fna stand par stand — la carte pratique',
      paragraphs: [
        'Vers 19h la place se transforme : les stands se déploient, la fumée monte, les pancartes numérotées s’allument. Ne vous engagez pas trop vite — faites le tour complet, puis revenez à celui qui semblait plein. Les Marocains font la queue aux meilleurs : c’est votre signal.',
      ],
      table: {
        caption: 'Stands de Jemaa el-Fna — que commander et combien ça coûte en 2026',
        headers: ['Type de stand', 'À commander', 'Prix', 'Comment le repérer'],
        rows: [
          ['Escargots (#1, 14, 31)', 'Bol d’escargots + bouillon', '15 MAD (1,40 €)', 'Foule debout, bols, cure-dents'],
          ['Brochetteries (#14, 32)', 'Brochettes + pain + salade', '60-90 MAD', 'Grill chaud, légumes mixtes, bancs locaux'],
          ['Tajines (#31, 117)', 'Tajine du jour', '50-80 MAD', 'Cônes en terre, mijotage lent'],
          ['Friture de poisson (#14)', 'Sardines frites + frites', '40-60 MAD', 'Grand plat de petits poissons entiers'],
          ['Tête de mouton (#26)', 'Demi-tête + thé', '30-50 MAD', 'Pour les courageux'],
          ['Jus d’oranges (#1, 16)', 'Jus pressé', '4-8 MAD', 'Pyramide d’oranges, presse à main'],
        ],
      },
      callout: {
        label: 'Astuce locale',
        body: 'Mangez au stand en face de celui où le rabatteur veut vous emmener. Les rabatteurs sont payés pour vous diriger vers certains stands. Choisissez en regardant qui mange : Marocains, familles, ou seulement touristes avec appareil photo.',
      },
    },
    {
      heading: 'Hygiène de rue — ce qui compte vraiment',
      paragraphs: [
        'La cuisine de rue à Marrakech est nettement plus sûre que ce que racontent les histoires d’internet. Le feu monte à 200 °C, la rotation est rapide, et les stands fréquentés ne survivraient pas à une semaine d’hygiène douteuse. Les vrais risques sont mineurs.',
      ],
      list: [
        'Évitez les fruits prédécoupés des chariots — la découpe en avance est le seul vrai risque bactérien.',
        'Buvez en bouteille (3 MAD le 1,5L) ou un jus pressé devant vous, pas l’eau du verre du stand.',
        'Choisissez le stand où les locaux font la queue. Les stands vides sont vides pour une raison.',
        'Gel hydroalcoolique en sac — les lavabos sont limités.',
      ],
    },
    {
      heading: 'Hors de la place — où Marrakech mange vraiment',
      paragraphs: [
        'Les Marrakchis ne dînent pas tous les soirs à Jemaa el-Fna. Pour la vraie cuisine du quotidien, marchez 5 minutes au sud, prenez à gauche dans le Mellah (quartier juif). Les petits "snacks" du coin servent harira, tangia et foie grillé aux familles et aux commerçants à partir de 30 MAD l’assiette.',
        'Pour une étape un peu plus haut de gamme mais toujours locale, réservez à Mechoui Alley pour le déjeuner (80 MAD pour une généreuse part d’épaule d’agneau au cumin) ou au Café Clock pour les burgers de chameau et la cuisine marocaine moderne. Henna Café, petit végétarien près de la Médersa Ben Youssef, vaut aussi le détour.',
      ],
    },
    {
      heading: 'Pâtisseries et rituel du thé',
      paragraphs: [
        'Les pâtisseries marocaines sont denses, sucrées et redoutables. Les boutiques de la médina (cherchez les plateaux en inox en vitrine) vendent briouats sucrés, cornes de gazelle (amandes), chebakia (torsades miel-sésame, omniprésentes pendant le Ramadan).',
        'Le thé à la menthe est l’accueil universel et la conclusion universelle, avec un petit rituel : le théier tient la théière à un mètre du verre, le sucre est dosé par l’hôte, et le premier verre est "amer comme la mort". Acceptez toujours au moins un.',
      ],
    },
    {
      heading: 'Cours de cuisine — le meilleur souvenir',
      paragraphs: [
        'Un cours de 4 heures est le meilleur souvenir à moins de 50 €. Format classique : rendez-vous au marché, choix des viandes et légumes avec le chef, retour dans la cuisine d’un riad, préparation d’un tajine et de deux salades, dégustation au thé à la menthe sur la terrasse. Adresses : La Maison Arabe, Souk Cuisine, Café Clock.',
        'Apportez un carnet — les dosages d’épices, c’est ce que vous oublierez de retour chez vous.',
      ],
    },
    {
      heading: 'Végétarien, végan, intolérances',
      paragraphs: [
        'Les végétariens mangent très bien à Marrakech. Tajine de légumes, zaalouk (aubergines-tomates), taktouka (poivrons-tomates), msemen au fromage, houmous, harira (souvent sans viande), couscous "sans viande". Les véganes doivent préciser "sans beurre" car la plupart des pains et pâtisseries en contiennent.',
        'Coeliaques : attention, le blé est partout (le pain est sacré). Tajines sans pain, poisson grillé, riz aux légumes fonctionnent. Les riads s’adaptent avec un jour de préavis.',
      ],
    },
    {
      heading: 'Quand manger où',
      paragraphs: [
        'Matin : petit-déjeuner au riad, puis msemen + thé à la menthe vers 10h dans la médina pour le deuxième petit-déjeuner que tous les Marocains prennent. Déjeuner : Mechoui Alley avant 14h (ça part). Après-midi : pâtisseries et thé sur un rooftop. Soir : Jemaa el-Fna de 19h à 22h — arrivez avant le coucher du soleil pour bien choisir les stands.',
      ],
    },
  ],
  faqs: [
    {
      question: 'La cuisine de rue à Marrakech est-elle sûre ?',
      answer:
        'Oui — globalement sûre. Les températures de cuisson, la rotation rapide et la concurrence visible entre stands maintiennent les standards. Évitez les fruits prédécoupés des chariots et choisissez les stands où les locaux font la queue.',
    },
    {
      question: 'Combien coûte un repas de rue à Marrakech ?',
      answer:
        'Un dîner complet sur Jemaa el-Fna coûte 80-150 MAD par personne (7-14 €), incluant escargots, brochettes, tajine et pain. Une tangia à Mechoui Alley : 80 MAD (7 €). Un jus d’orange frais : 4-8 MAD.',
    },
    {
      question: 'Quelle est la spécialité de Marrakech ?',
      answer:
        'La tangia (bœuf longuement mijoté dans une jarre en terre) est la signature unique à Marrakech. La ville est aussi réputée pour le méchoui, la harira, les escargots, le msemen et le meilleur jus d’oranges pressées du Maroc.',
    },
    {
      question: 'Peut-on boire les jus d’orange de Jemaa el-Fna ?',
      answer:
        'Oui — le jus est pressé devant vous à partir d’oranges entières. Vérifiez que le vendeur utilise un gobelet propre ou en carton, pas un verre rincé à l’eau du robinet.',
    },
    {
      question: 'Où mangent vraiment les Marrakchis ?',
      answer:
        'À déjeuner dans le Mellah et les rues derrière le Palais Bahia, où les petits "snacks" servent harira, tangia et foie grillé à partir de 30 MAD. Au dîner, ils vont aussi à Jemaa el-Fna mais aux stands qu’ils connaissent personnellement.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on boire de l’alcool avec les stands de rue ?', answer: 'Non — Jemaa el-Fna est sans alcool. Pour un vin ou une bière au dîner, réservez un rooftop licencié (Café Arabe, El Fenn, Le Salama).' },
    { question: 'Quel est le meilleur marché alimentaire de Marrakech ?', answer: 'Pour les ingrédients, le marché du Mellah pour les épices et Souk Semmarine pour les produits frais. Pour le prêt à manger, les stands de Jemaa el-Fna en soirée.' },
    { question: 'La cuisine marocaine est-elle épicée ?', answer: 'Étonnamment douce. Le piquant vient de la harissa servie à part, pas du plat lui-même. Gingembre, cumin, safran et citron confit font le travail.' },
  ],
  relatedDestinations: ['marrakech', 'essaouira', 'fes'],
  relatedPosts: ['best-riads-marrakech', 'morocco-7-days-itinerary'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أكل الشارع في مراكش — دليل 2026 والأسعار',
  metaDescription:
    'دليل أكل الشارع في مراكش 2026: أكشاك جامع الفنا، الأسعار الحقيقية بالدرهم، ماذا تطلب وماذا تتجنّب، الحلال. خطّط رحلتك عبر واتساب.',
  title: 'أكل الشارع في مراكش: دليل المسافر لعام 2026',
  description:
    'دليل ميداني لأكل الشارع في مراكش — ماذا تطلب في ساحة جامع الفنا، الأكشاك الموصى بها، الأسعار الحقيقية بالدرهم في 2026، والأماكن التي يأكل فيها أهل مراكش فعلًا.',
  keyword: 'أكل الشارع في مراكش',
  coverImage: COVER,
  coverAlt: 'كشك توابل وطعام في مدينة مراكش العتيقة — أكل الشارع في مراكش',
  publishedISO: '2026-05-16',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 11,
  intro:
    'أفضل مكان لتذوّق الطعام في [مراكش](/destinations/marrakech/) ليس مطعم السطح الذي يوصي به فندقك — بل أكشاك ساحة جامع الفنا الترقيمية عند الغروب، حيث البخار والفوانيس وأصوات الباعة تحوّل العشاء إلى مسرح. كل الطعام في الأكشاك حلال افتراضيًا (المغرب بلد مسلم). في هذا الدليل 2026 ستجد ما تطلبه في مراكش، الأكشاك التي ينصح بها أهل المدينة، الأسعار الحقيقية بالدرهم، والحيل لتأكل بأمان. الأسعار جُمعت يوم ثلاثاء عادي من ماي 2026.',
  sections: [
    {
      heading: 'ثمانية أطباق لا بد من تجربتها في مراكش',
      paragraphs: [
        'تتنوّع أكلات مراكش بين طبخ بطيء (طاجين، طنجية، حريرة)، شواء وخفائف (مسمن، قطبان، حلزون)، وحلويات (سفنج، شباكية، شاي نعناع). جرّب الثمانية على الأقل مرة خلال 3-4 أيام. كثير منها يمكن جمعه في عشاء واحد بالساحة.',
      ],
      list: [
        'طنجية — لحم بقري يطبخ ببطء في جرة فخارية، توقيع مراكش الحصري. تُقدَّم وقت الغداء عند مشاوي الزقاق.',
        'طاجين — لحم بالبرقوق، دجاج بالحامض والزيتون، أو كفتة بالبيض. يُؤكل أفضل على سطح بإطلالة.',
        'مشوي — كتف غنم مشوي ببطء، يُباع بالوزن في زقاق المشاوي بالساحة.',
        'بصارة — حساء الفول المجروش بالكمون وزيت الزيتون، فطور مراكش العامل.',
        'الحلزون (بوبوش) — قواقع صغيرة في مرق فلفلي، أكشاك 1 و31 و14. 15 درهم للكأس.',
        'مسمن — خبز مربع رقائقي، يُؤكل بالعسل والجبن أو محشوًّا.',
        'سفنج — كعك مقلي حلقي، يُقدّم ساخنًا. 2-3 درهم للحبة.',
        'شاي بالنعناع — أخضر بالسكر مع نعناع طازج، صوت خلفية لكل وجبة.',
      ],
    },
    {
      heading: 'جامع الفنا كشكًا كشكًا — الخريطة العملية',
      paragraphs: [
        'حوالي السابعة مساءً تتحوّل الساحة: تُنصب الأكشاك، يصعد الدخان، تضاء اللوحات المرقّمة. لا تختر بسرعة — قم بدورة كاملة أولًا ثم ارجع لما بدا مزدحمًا. المغاربة يصطفون عند الأفضل — هذه إشارتك.',
      ],
      table: {
        caption: 'أكشاك جامع الفنا — ماذا تطلب وكم يكلف في 2026',
        headers: ['نوع الكشك', 'ما تطلبه', 'السعر', 'كيف تتعرّفه'],
        rows: [
          ['الحلزون (1، 14، 31)', 'كأس قواقع + مرق', '15 درهم (15 ريالًا)', 'حشد واقف، صحون فخارية، أعواد'],
          ['الشواء (14، 32)', 'قطبان + خبز + سلطة', '60-90 درهم', 'شواية ساخنة، خضار مشكّلة'],
          ['الطاجين (31، 117)', 'طاجين اليوم', '50-80 درهم', 'أوانٍ مخروطية، طبخ بطيء'],
          ['السمك المقلي (14)', 'سردين + بطاطس', '40-60 درهم', 'طبق كبير من السمك الصغير'],
          ['رأس الغنم (26)', 'نصف رأس + شاي', '30-50 درهم', 'للجريء — اطلب نصفًا لا كاملًا'],
          ['عصير البرتقال (1، 16)', 'عصير طازج', '4-8 درهم', 'هرم برتقال، عصارة يدوية'],
        ],
      },
      callout: {
        label: 'نصيحة محلية',
        body: 'كل في الكشك المقابل لمن يحاول النادل أن يدلّك عليه. النوادل يأخذون عمولة لتوجيه السياح. اختر بالنظر إلى من يأكل هناك: مغاربة، عائلات، أم سياح فقط بكاميرات.',
      },
    },
    {
      heading: 'سلامة الطعام في الشارع — ما يهم فعلًا',
      paragraphs: [
        'الطعام في شوارع مراكش أأمن مما تقوله قصص الإنترنت المخيفة. النار 200°م، الزبائن متتابعون بسرعة، والأكشاك المزدحمة لا تنجو من أسبوع واحد بمعايير ضعيفة. المخاطر الحقيقية قليلة.',
      ],
      list: [
        'تجنّب الفواكه المقطّعة مسبقًا في العربات — التقطيع المسبق هو الخطر البكتيري الوحيد الحقيقي.',
        'اشرب الماء المعدني (3 درهم/قارورة 1.5L) أو عصيرًا طازجًا أمامك، لا الماء من كأس الكشك.',
        'اختر الكشك حيث يصطف المغاربة. الأكشاك الفارغة فارغة لسبب.',
        'احمل معقّمًا لليدين — مرافق غسل اليدين محدودة.',
      ],
    },
    {
      heading: 'خارج الساحة — أين يأكل أهل مراكش',
      paragraphs: [
        'المراكشي لا يأكل كل ليلة في جامع الفنا. لِترى مراكش اليومية، امش 5 دقائق جنوبًا من الساحة، ادخل سوق السماط ثم انعطف يسارًا إلى الملاح. مطاعم الزوايا الصغيرة تقدّم الحريرة والطنجية والكبدة المشوية للعائلات والتجار ابتداءً من 30 درهم للطبق.',
        'لتجربة أرقى لكنها لا تزال محلية، احجز في زقاق المشاوي للغداء (80 درهم لقطعة كتف غنم وافرة بالكمون) أو في Café Clock لبرغر الجمل والمطبخ المغربي الحديث. ونحبّ أيضًا Henna Café، نباتي صغير قرب مدرسة ابن يوسف.',
      ],
    },
    {
      heading: 'الحلويات والشاي بالنعناع',
      paragraphs: [
        'الحلويات المغربية كثيفة لزجة وخطيرة بمذاقها. متاجر الحلويات في المدينة العتيقة (انظر إلى الصواني الفولاذية في الواجهة) تبيع بريوات حلوة، كعب الغزال (لب اللوز)، وشباكية (السمسم والعسل، تتألق رمضان).',
        'الشاي بالنعناع هو الترحيب الكوني والختام الكوني، مع طقس صغير: يحمل الصابب الإبريق على بعد متر من الكأس، ويُقدّر السكر صاحب البيت، والكأس الأول «مر كالموت». اقبل دائمًا واحدًا على الأقل.',
      ],
    },
    {
      heading: 'دروس الطبخ — أفضل تذكار',
      paragraphs: [
        'درس 4 ساعات هو أفضل تذكار مراكشي بأقل من 500 درهم. الصيغة الكلاسيكية: لقاء بالسوق، اختيار اللحم والخضار مع الطاهي، عودة إلى مطبخ الرياض، طبخ طاجين وسلطتين، تذوّق على السطح. موصى به: La Maison Arabe، Souk Cuisine، Café Clock.',
        'احمل دفترًا — نسب التوابل هي ما ستنساه عند العودة.',
      ],
    },
    {
      heading: 'نباتيون، فيغان، وحساسيات',
      paragraphs: [
        'يأكل النباتيون جيدًا في مراكش. طاجين خضار، زعلوك (باذنجان طماطم)، تكتوكة (فلفل طماطم)، مسمن بالجبن، حمص، حريرة (غالبًا بلا لحم)، كسكس "بلا لحم". الفيغان يجب أن يذكروا "بلا زبدة" لأن أغلب الخبز والحلويات تحتوي على الزبدة.',
        'مرضى السيلياك: انتبهوا، القمح في كل شيء (الخبز مقدّس). الطاجين بلا خبز، السمك المشوي، الأرز بالخضار تنجح. الرياضات تتكيّف بإشعار يوم.',
      ],
    },
    {
      heading: 'أفضل توقيت لكل أكلة',
      paragraphs: [
        'الصباح: فطور بالرياض ثم مسمن وشاي نعناع نحو العاشرة من كشك المدينة العتيقة لفطور ثانٍ يأكله كل مغربي. الغداء: زقاق المشاوي قبل الثانية (تنفد). العصر: حلويات وشاي على سطح. المساء: جامع الفنا من السابعة إلى العاشرة — وصلْ قبل الغروب لاختيار الكشك الأفضل.',
      ],
    },
  ],
  faqs: [
    {
      question: 'هل أكل الشارع في مراكش حلال؟',
      answer:
        'نعم، كل اللحوم في المغرب حلال افتراضيًا. لا حاجة لطرح السؤال على أكشاك جامع الفنا أو المطاعم الشعبية. ينطبق الاستثناء فقط على بعض مطاعم الفنادق الدولية الراقية التي قد تقدّم أصنافًا بلحم خنزير معلومة.',
    },
    {
      question: 'هل أكل الشارع في مراكش آمن؟',
      answer:
        'نعم — آمن عمومًا. درجة حرارة الطهي والإقبال السريع والمنافسة الواضحة بين الأكشاك تحافظ على المعايير. تجنّب الفواكه المقطّعة في العربات وفضّل الأكشاك التي يصطف عندها المغاربة.',
    },
    {
      question: 'كم يكلف عشاء في جامع الفنا؟',
      answer:
        'عشاء كامل في جامع الفنا يكلف 80-150 درهم للفرد (25-45 ريالًا)، يشمل حلزون وقطبان وطاجين وخبز. طنجية في زقاق المشاوي 80 درهم (25 ريالًا). عصير برتقال طازج من الساحة 4-8 دراهم.',
    },
    {
      question: 'ما الأكلة الأشهر في مراكش؟',
      answer:
        'الطنجية (لحم بقر يطبخ ببطء في جرة فخارية) هي توقيع مراكش الحصري. المدينة مشهورة أيضًا بالطاجين والمشوي والحريرة والحلزون والمسمن وأفضل عصير برتقال طازج في المغرب.',
    },
    {
      question: 'أين يأكل أهل مراكش فعلًا؟',
      answer:
        'في الغداء، حي الملاح والشوارع خلف قصر الباهية حيث «السناك» الصغير يقدّم الحريرة والطنجية والكبدة من 30 درهم. مساءً، يذهبون أيضًا إلى جامع الفنا لكنهم يلتزمون بأكشاك يعرفونها شخصيًا.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يُباع الكحول في أكشاك جامع الفنا؟', answer: 'لا — كلها بلا كحول. لمن يبحث عن نبيذ أو بيرة مع العشاء، يحجز في مطعم سطح مرخّص (Café Arabe، El Fenn، Le Salama).' },
    { question: 'ما أفضل سوق طعام في مراكش؟', answer: 'لِلتسوّق، سوق الملاح للتوابل وأسواق سوق السماط للخضار والفواكه. للأكل الجاهز، أكشاك جامع الفنا مساءً.' },
    { question: 'هل المطبخ المغربي حار؟', answer: 'معتدل عمومًا. الحرارة تأتي من الهريسة المقدَّمة جانبًا، لا من الطبق نفسه. الزنجبيل والكمون والزعفران والليمون المخلّل تقوم بالعمل.' },
  ],
  relatedDestinations: ['marrakech', 'essaouira', 'fes'],
  relatedPosts: ['nasaeh-li-ziyarat-al-maghrib-li-awwal-marra'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);
