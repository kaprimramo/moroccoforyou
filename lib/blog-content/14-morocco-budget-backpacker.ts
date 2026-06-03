import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'morocco-travel-budget-backpacker';
const SLUG_FR = 'maroc-voyage-budget-routard';
const SLUG_AR = 'al-maghrib-bi-mizaniyya-muhduda';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(2387793);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Morocco Travel Budget Backpacker Guide 2026 — Real Costs',
  metaDescription: 'How much does Morocco cost for backpackers in 2026? Real daily budgets, cheapest hostels, free things to do, budget food and transport tips from locals.',
  title: 'Morocco Travel Budget for Backpackers: Real Costs in 2026',
  description: 'The honest backpacker budget guide for Morocco 2026: daily costs, cheapest accommodation, free activities, budget food, and how to travel Morocco for under €35/day.',
  keyword: 'morocco travel budget backpacker',
  coverImage: COVER,
  coverAlt: 'Backpacker traveler in Marrakech medina alley with budget travel tips Morocco',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro: 'Morocco is one of the best value destinations in the world for backpackers — and one of the most misunderstood. Yes, you can sleep in a medina hostel for €8/night and eat a full tagine for €3. But Morocco also has tourist traps that drain budgets faster than anywhere in Europe: overpriced mint tea "invitations", unofficial guides who demand payment, and taxi drivers who invent special rates. This guide gives you the real 2026 numbers — what things actually cost, where to sleep, what to eat, and how to travel between cities without getting ripped off.',
  sections: [
    {
      heading: 'How Much Does Morocco Cost Per Day for Backpackers?',
      paragraphs: [
        'The honest answer: a careful backpacker can do Morocco for €25–35/day including accommodation, food, transport, and one activity. A comfortable budget traveller spending without overthinking pays €45–65/day. Here is where that money goes.',
      ],
      table: {
        caption: 'Morocco daily budget breakdown for backpackers (2026)',
        headers: ['Category', 'Shoestring (€)', 'Budget (€)', 'Notes'],
        rows: [
          ['Hostel dorm / cheap guesthouse', '7–12', '15–25', 'Medina hostels cheapest'],
          ['Food (3 meals)', '5–8', '10–15', 'Local restaurants only'],
          ['Local transport', '2–5', '5–10', 'Buses + petit taxis'],
          ['Activities', '0–3', '5–15', 'Many free sights'],
          ['Water + snacks', '1–2', '2–4', 'Buy at supermarkets'],
          ['Total per day', '15–30', '37–69', 'Realistic range'],
        ],
      },
    },
    {
      heading: 'Where to Sleep — Budget Accommodation in Morocco',
      paragraphs: [
        'Morocco has excellent hostels in every major city, mostly located inside or just outside the medina walls. Hostel dorm beds range from 70–120 MAD/night (€6–11). Private rooms in budget guesthouses (called maisons d\'hôtes) run 150–300 MAD/night (€14–27) including breakfast — often the best value in Morocco because breakfast is enormous.',
        'The best budget cities for accommodation: Fes has the cheapest decent medina hostels. Chefchaouen has great value small guesthouses. Marrakech hostels are slightly pricier but still affordable. Essaouira has excellent budget surf guesthouses near the beach.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'The cheapest way to sleep well in Morocco is a small family-run guesthouse (maison d\'hôtes) just outside the medina walls — not the budget chain hotels on the main avenues. These family places charge 150–200 MAD/night, include a proper Moroccan breakfast, and the owners give you honest local tips that save you money all day.',
      },
    },
    {
      heading: 'What to Eat on a Budget in Morocco',
      paragraphs: [
        'Moroccan street food and local restaurant food is genuinely delicious and very cheap. The key rule: eat where Moroccans eat, not where tourists are handed a laminated menu with photos.',
        'Best budget meals: harira soup (a bowl costs 5–8 MAD), msemen or meloui flatbread with honey (3–5 MAD per piece at a bakery), merguez sausage sandwich (10–15 MAD), chicken tagine at a local restaurant (35–55 MAD), and couscous on Fridays (40–60 MAD at neighbourhood restaurants). Fresh orange juice from the Jemaa el-Fnaa stalls in Marrakech costs 5 MAD — the most famous bargain in Morocco.',
      ],
      table: {
        caption: 'Budget food prices in Morocco 2026',
        headers: ['Food', 'Price (MAD)', 'Price (€)', 'Where to find'],
        rows: [
          ['Harira soup', '5–8', '0.45–0.75', 'Street stalls, local cafés'],
          ['Msemen flatbread', '3–5', '0.28–0.45', 'Bakeries (fouran)'],
          ['Merguez sandwich', '10–15', '0.90–1.35', 'Street grills'],
          ['Chicken tagine', '35–55', '3.20–5.00', 'Local restaurants'],
          ['Fresh orange juice', '5–8', '0.45–0.75', 'Jemaa el-Fnaa, markets'],
          ['Café au lait + croissant', '12–18', '1.10–1.65', 'Moroccan cafés'],
          ['Supermarket water (1.5L)', '4–6', '0.35–0.55', 'Carrefour, Marjane'],
          ['Full restaurant meal', '40–70', '3.60–6.35', 'Neighbourhood restaurants'],
        ],
      },
    },
    {
      heading: 'Budget Transport Between Cities',
      paragraphs: [
        'CTM and Supratours buses are the best budget option between major cities — comfortable, punctual, and very cheap. Casablanca to Marrakech by CTM costs 110–130 MAD (€10–12). Marrakech to Fes takes 8 hours by bus for 150–180 MAD (€14–16). Train (ONCF) is faster and similar price — Casablanca to Marrakech in 2.5 hours for 95 MAD (€8.50) in second class.',
        'Grand taxis (shared long-distance taxis) are the cheapest option for shorter routes — Fes to Meknes costs around 25 MAD per seat. They leave when full (usually 6 passengers) from the grand taxi station. Within cities, petit taxis are metered and cheap — maximum fare within a city is rarely more than 20–25 MAD.',
      ],
      callout: {
        label: '💡 Budget Transport Tip',
        body: 'Never take a petit taxi without insisting on the meter ("compteur s\'il vous plaît"). Night rates (after 8pm) are 50% higher — this is legal. Agree the price before getting in if the driver refuses the meter, or take the next taxi. Uber does not operate in Morocco; Bolt operates in Casablanca and Marrakech.',
      },
    },
    {
      heading: 'Free and Cheap Things to Do in Morocco',
      paragraphs: [
        'Some of Morocco\'s best experiences cost nothing. Walking the Fes medina is free (just get lost). Chefchaouen\'s blue streets cost nothing to explore. Jemaa el-Fnaa square in Marrakech is free entertainment from morning to midnight. Watching the sunset from the Kasbah des Oudaias in Rabat is free. The beaches at Essaouira, Agadir, and Mirleft are free.',
        'Cheap paid activities: Hassan II Mosque guided tour in Casablanca (70 MAD — one of the world\'s greatest buildings), Bahia Palace Marrakech (free), Saadian Tombs (70 MAD), Chellah in Rabat (70 MAD), Volubilis Roman ruins (70 MAD). Most medina sights have no entrance fee.',
      ],
    },
    {
      heading: 'The 5 Biggest Budget Mistakes in Morocco',
      paragraphs: [
        'These are the ways tourists lose money in Morocco — avoid all five and your budget stays intact.',
      ],
      table: {
        caption: 'How to avoid the most common tourist budget traps in Morocco',
        headers: ['Trap', 'What happens', 'How to avoid'],
        rows: [
          ['Unofficial guides', 'Young man offers to help, demands payment', 'Politely decline all unsolicited help'],
          ['Mint tea "invitation"', 'Free tea leads to aggressive carpet sales', 'Decline tea in carpet shop doorways'],
          ['Medina taxi overcharge', 'Driver quotes 10x the meter fare', 'Always insist on meter or agree price first'],
          ['Airport exchange rate', 'Bureau de change at airport is 15–20% worse', 'Use ATM on arrival, withdraw 1,000+ MAD'],
          ['Restaurant tourist menu', 'Menu in English with no prices shown', 'Ask for the price before ordering anything'],
        ],
      },
    },
    {
      heading: 'Sample 7-Day Morocco Backpacker Budget',
      paragraphs: [
        'This is what a real careful backpacker budget looks like for 7 days in Morocco, covering Marrakech, Fes, and Chefchaouen by bus.',
      ],
      table: {
        caption: 'Real 7-day Morocco backpacker budget (per person)',
        headers: ['Expense', 'MAD', '€'],
        rows: [
          ['7 nights hostel dorm', '700', '64'],
          ['7 days food (local restaurants)', '630', '57'],
          ['Bus Marrakech → Fes', '160', '14.50'],
          ['Bus Fes → Chefchaouen', '45', '4'],
          ['Bus Chefchaouen → Marrakech', '170', '15.50'],
          ['City petit taxis (7 days)', '140', '12.75'],
          ['Activities + entrance fees', '280', '25.50'],
          ['Water + snacks (7 days)', '105', '9.55'],
          ['Total 7 days', '2,230', '203'],
          ['Per day average', '319', '29'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'How much money do I need per day in Morocco as a backpacker?',
      answer: 'A careful backpacker can manage on €20–30/day including hostel dorm, local food, and buses. A comfortable budget traveller spending normally pays €40–60/day. The Sahara desert camp is the one splurge worth budgeting separately (€70–135/night).',
    },
    {
      question: 'What is the cheapest way to travel between cities in Morocco?',
      answer: 'CTM and Supratours buses are the best value — comfortable, punctual, and much cheaper than taxis. Train (ONCF) is faster for Casablanca–Marrakech and similar price. Grand taxis are cheapest for short routes between nearby towns.',
    },
    {
      question: 'Is Morocco cheap for backpackers?',
      answer: 'Yes — Morocco is one of the best value destinations in the world. Hostel dorms from €7/night, full restaurant meals from €3, city bus rides for €0.30. The main budget risk is tourist traps, not genuine high prices.',
    },
    {
      question: 'Can I visit Morocco on €30 per day?',
      answer: 'Yes — €30/day is realistic if you stay in hostel dorms, eat at local restaurants, and travel by bus. The Sahara desert camp is the one night that breaks this budget, but it is worth every euro.',
    },
    {
      question: 'Do I need to tip in Morocco?',
      answer: 'Tipping is appreciated but not mandatory. Round up taxi fares, leave 5–10 MAD for café service, tip guides 30–50 MAD for a half-day tour, and tip desert camp staff 20–30 MAD. Restaurant service charge is sometimes included — check the bill.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is Morocco expensive for tourists?', answer: 'No — Morocco is very affordable by European standards. The main costs are accommodation and the desert camp. Daily food and transport are extremely cheap.' },
    { question: 'What currency is used in Morocco?', answer: 'Moroccan Dirham (MAD). €1 ≈ 11 MAD (mid-2026). ATMs are widely available. Card payments accepted in most hotels and restaurants but carry cash for markets and taxis.' },
    { question: 'Can I use euros in Morocco?', answer: 'No — Moroccan dirhams are required for all local transactions. Change euros at bank ATMs on arrival (best rate) or at official bureaux de change. Avoid airport exchange counters.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira', 'casablanca'],
  relatedPosts: ['morocco-itinerary-2-weeks-first-time', 'things-to-do-in-morocco-7-days', 'morocco-travel-tips-first-time-visitors'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Maroc Voyage Budget Routard 2026 — Vrais Coûts',
  metaDescription: 'Combien coûte le Maroc pour un routard en 2026 ? Budgets journaliers réels, auberges les moins chères, activités gratuites, nourriture et transport pas cher.',
  title: 'Maroc en voyage budget : le guide routard avec vrais coûts 2026',
  description: 'Le guide honnête du voyage budget au Maroc 2026 : coûts journaliers, hébergements pas chers, activités gratuites, nourriture et transport économique.',
  keyword: 'maroc voyage budget routard',
  coverImage: COVER,
  coverAlt: 'Routard dans une ruelle de la médina de Marrakech — voyage budget Maroc',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro: 'Le Maroc est l\'une des meilleures destinations au monde pour les voyageurs à petit budget — et l\'une des plus mal comprises. Oui, vous pouvez dormir dans une auberge de jeunesse de la médina pour 8€/nuit et manger un tajine complet pour 3€. Mais le Maroc a aussi des pièges à touristes qui ruinent les budgets plus vite qu\'en Europe. Ce guide vous donne les vrais chiffres 2026 : ce que les choses coûtent vraiment, où dormir, quoi manger, et comment voyager entre les villes sans se faire arnaquer.',
  sections: [
    {
      heading: 'Combien coûte le Maroc par jour pour un routard ?',
      paragraphs: [
        'La réponse honnête : un routard attentif peut faire le Maroc pour 25–35€/jour tout compris (hébergement, nourriture, transport, une activité). Un voyageur budget qui dépense sans trop réfléchir paie 45–65€/jour.',
      ],
      table: {
        caption: 'Budget journalier au Maroc pour un routard (2026)',
        headers: ['Catégorie', 'Minimaliste (€)', 'Budget (€)', 'Notes'],
        rows: [
          ['Dortoir hostel / chambre bon marché', '7–12', '15–25', 'Hostels médina = moins chers'],
          ['Nourriture (3 repas)', '5–8', '10–15', 'Restaurants locaux uniquement'],
          ['Transport local', '2–5', '5–10', 'Bus + petits taxis'],
          ['Activités', '0–3', '5–15', 'Beaucoup de sites gratuits'],
          ['Eau + snacks', '1–2', '2–4', 'Achetez en supermarché'],
          ['Total par jour', '15–30', '37–69', 'Fourchette réaliste'],
        ],
      },
    },
    {
      heading: 'Où dormir pas cher au Maroc',
      paragraphs: [
        'Le Maroc a d\'excellentes auberges de jeunesse dans chaque grande ville, situées dans ou juste à l\'extérieur des murailles de la médina. Les dortoirs vont de 70 à 120 MAD/nuit (6–11€). Les chambres privées dans les maisons d\'hôtes budget coûtent 150–300 MAD/nuit (14–27€) petit-déjeuner inclus — souvent le meilleur rapport qualité-prix au Maroc.',
        'Les meilleures villes pour l\'hébergement pas cher : Fès a les hostels de médina les moins chers. Chefchaouen offre de très bonnes petites maisons d\'hôtes. Marrakech est légèrement plus cher mais reste abordable. Essaouira a d\'excellentes maisons d\'hôtes surf près de la plage.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'Le moyen le moins cher de bien dormir au Maroc : une petite maison d\'hôtes familiale juste à l\'extérieur des remparts de la médina. Ces maisons familiales pratiquent 150–200 MAD/nuit, incluent un vrai petit-déjeuner marocain, et les propriétaires vous donnent des conseils locaux honnêtes qui vous font économiser toute la journée.',
      },
    },
    {
      heading: 'Manger pas cher au Maroc',
      paragraphs: [
        'La street food marocaine et les restaurants locaux sont authentiquement délicieux et très bon marché. La règle clé : mangez où mangent les Marocains, pas là où on vous tend un menu plastifié avec photos.',
        'Les meilleurs repas budget : soupe harira (5–8 MAD le bol), msemen ou meloui avec miel (3–5 MAD à la boulangerie), sandwich merguez (10–15 MAD), tajine de poulet dans un restaurant local (35–55 MAD), couscous du vendredi (40–60 MAD). Le jus d\'orange frais des stands de Jemaa el-Fna à Marrakech vaut 5 MAD — le bargain le plus célèbre du Maroc.',
      ],
      table: {
        caption: 'Prix des repas budget au Maroc 2026',
        headers: ['Aliment', 'Prix (MAD)', 'Prix (€)', 'Où trouver'],
        rows: [
          ['Soupe harira', '5–8', '0,45–0,75', 'Stands rue, cafés locaux'],
          ['Msemen crêpe', '3–5', '0,28–0,45', 'Boulangeries (four)'],
          ['Sandwich merguez', '10–15', '0,90–1,35', 'Grillades de rue'],
          ['Tajine poulet', '35–55', '3,20–5,00', 'Restaurants locaux'],
          ['Jus d\'orange frais', '5–8', '0,45–0,75', 'Jemaa el-Fna, marchés'],
          ['Café au lait + croissant', '12–18', '1,10–1,65', 'Cafés marocains'],
          ['Eau supermarché (1,5L)', '4–6', '0,35–0,55', 'Carrefour, Marjane'],
          ['Repas complet restaurant', '40–70', '3,60–6,35', 'Restaurants de quartier'],
        ],
      },
    },
    {
      heading: 'Transport budget entre les villes',
      paragraphs: [
        'Les bus CTM et Supratours sont la meilleure option budget entre les grandes villes — confortables, ponctuels et très bon marché. Casablanca–Marrakech en CTM coûte 110–130 MAD (10–12€). Marrakech–Fès en bus prend 8h pour 150–180 MAD (14–16€). Le train (ONCF) est plus rapide et au prix similaire — Casablanca–Marrakech en 2h30 pour 95 MAD (8,50€) en 2e classe.',
        'Les grands taxis partagés sont l\'option la moins chère pour les trajets courts — Fès–Meknès coûte environ 25 MAD par place. Ils partent quand ils sont pleins (6 passagers généralement) depuis la gare routière des grands taxis. En ville, les petits taxis ont un compteur et sont bon marché.',
      ],
      callout: {
        label: '💡 Astuce transport budget',
        body: 'N\'acceptez jamais un petit taxi sans insister sur le compteur. Les tarifs de nuit (après 20h) sont 50% plus élevés — c\'est légal. Si le chauffeur refuse le compteur, négociez le prix avant de monter ou prenez le taxi suivant. Uber ne fonctionne pas au Maroc ; Bolt opère à Casablanca et Marrakech.',
      },
    },
    {
      heading: 'Activités gratuites et bon marché au Maroc',
      paragraphs: [
        'Certaines des meilleures expériences marocaines ne coûtent rien. Se perdre dans la médina de Fès est gratuit. Les ruelles bleues de Chefchaouen ne coûtent rien à explorer. La place Jemaa el-Fna à Marrakech est gratuite de l\'aube à minuit. Le coucher de soleil depuis la Kasbah des Oudaias à Rabat est gratuit. Les plages d\'Essaouira et d\'Agadir sont gratuites.',
        'Activités payantes pas chères : visite guidée de la mosquée Hassan II à Casablanca (70 MAD — l\'un des plus beaux édifices du monde), Palais Bahia Marrakech (gratuit), Tombeaux Saadiens (70 MAD), Chellah Rabat (70 MAD), ruines romaines de Volubilis (70 MAD).',
      ],
    },
    {
      heading: 'Les 5 grandes erreurs budget au Maroc',
      paragraphs: [
        'Voici comment les touristes perdent de l\'argent au Maroc — évitez les cinq et votre budget reste intact.',
      ],
      table: {
        caption: 'Comment éviter les pièges à touristes budget les plus fréquents',
        headers: ['Piège', 'Ce qui se passe', 'Comment éviter'],
        rows: [
          ['Guides non officiels', 'Un jeune propose son aide, réclame un paiement', 'Déclinez poliment toute aide non sollicitée'],
          ['"Invitation" au thé', 'Thé gratuit mène à vente agressive de tapis', 'Refusez le thé dans les boutiques de tapis'],
          ['Taxi médina surfacturé', 'Le chauffeur annonce 10x le prix au compteur', 'Insistez toujours sur le compteur'],
          ['Change aéroport', 'Bureau de change 15–20% moins avantageux', 'Utilisez un DAB à l\'arrivée'],
          ['Menu restaurant "touristique"', 'Menu en français sans prix affiché', 'Demandez le prix avant de commander'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Combien faut-il prévoir par jour au Maroc en routard ?',
      answer: 'Un routard attentif peut s\'en sortir avec 20–30€/jour incluant dortoir hostel, nourriture locale et bus. Un voyageur budget qui dépense normalement paie 40–60€/jour. Le camp désert au Sahara est la seule nuit à budgéter à part (70–135€).',
    },
    {
      question: 'Quel est le moyen de transport le moins cher entre les villes au Maroc ?',
      answer: 'Les bus CTM et Supratours offrent le meilleur rapport qualité-prix — confortables, ponctuels et bien moins chers que les taxis. Le train ONCF est plus rapide pour Casablanca–Marrakech à prix similaire.',
    },
    {
      question: 'Le Maroc est-il bon marché pour les routards ?',
      answer: 'Oui — le Maroc est l\'une des meilleures destinations au monde en termes de rapport qualité-prix. Dortoirs hostel dès 7€/nuit, repas complet en restaurant dès 3€, bus urbain pour 0,30€. Le principal risque budget ce sont les arnaques, pas les vrais prix élevés.',
    },
    {
      question: 'Peut-on visiter le Maroc avec 30€ par jour ?',
      answer: 'Oui — 30€/jour est réaliste si vous dormez en dortoir, mangez dans les restaurants locaux et voyagez en bus. Le camp désert au Sahara est la seule nuit qui dépasse ce budget, mais ça vaut chaque euro.',
    },
    {
      question: 'Faut-il laisser des pourboires au Maroc ?',
      answer: 'Le pourboire est apprécié mais pas obligatoire. Arrondissez les tarifs de taxi, laissez 5–10 MAD pour un service en café, donnez 30–50 MAD à un guide pour une demi-journée, et 20–30 MAD au personnel du camp désert.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Le Maroc est-il cher pour les touristes ?', answer: 'Non — le Maroc est très abordable par rapport aux standards européens. Les principaux postes de dépenses sont l\'hébergement et le camp désert. La nourriture et le transport quotidiens sont extrêmement bon marché.' },
    { question: 'Quelle monnaie au Maroc ?', answer: 'Le dirham marocain (MAD). 1€ ≈ 11 MAD (mi-2026). Les DAB sont accessibles partout. Paiement par carte accepté dans la plupart des hôtels et restaurants, mais ayez du liquide pour les marchés et taxis.' },
    { question: 'Peut-on payer en euros au Maroc ?', answer: 'Non — les dirhams marocains sont requis pour toutes les transactions locales. Changez vos euros aux DAB bancaires à l\'arrivée (meilleur taux) ou dans les bureaux de change officiels.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira', 'casablanca'],
  relatedPosts: ['itineraire-maroc-2-semaines-premier-voyage', 'que-faire-au-maroc-7-jours', 'conseils-premier-voyage-au-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'السفر إلى المغرب بميزانية محدودة — دليل 2026 بأسعار حقيقية',
  metaDescription: 'كم تكلف رحلة المغرب بميزانية محدودة في 2026؟ الأسعار اليومية الحقيقية، أرخص الإقامات، الأنشطة المجانية، والطعام والنقل الاقتصادي.',
  title: 'السفر إلى المغرب بميزانية محدودة: الدليل الشامل بأسعار حقيقية 2026',
  description: 'الدليل الصادق للسفر إلى المغرب بميزانية محدودة 2026: التكاليف اليومية والإقامة الرخيصة والأنشطة المجانية والطعام والنقل الاقتصادي.',
  keyword: 'السفر إلى المغرب بميزانية محدودة',
  coverImage: COVER,
  coverAlt: 'مسافر بميزانية محدودة في أزقة مدينة مراكش العتيقة',
  publishedISO: '2026-06-03',
  author: 'فريق MoroccoForYou',
  readingMinutes: 12,
  intro: 'المغرب من أفضل وجهات العالم للمسافرين بميزانية محدودة — ومن أكثرها سوء فهم. نعم، يمكنك النوم في نُزُل المدينة العتيقة بـ8€ الليلة وأكل طاجين كامل بـ3€. لكن في المغرب أيضاً فخاخ سياحية تستنزف الميزانية أسرع من أوروبا. هذا الدليل يعطيك الأرقام الحقيقية لعام 2026: ما تكلف الأشياء فعلاً، أين تنام، ماذا تأكل، وكيف تتنقل بين المدن دون أن تُستغل.',
  sections: [
    {
      heading: 'كم تكلف رحلة المغرب يومياً بميزانية محدودة؟',
      paragraphs: [
        'الإجابة الصادقة: مسافر حذر يستطيع قضاء وقته في المغرب بـ25–35€ يومياً شاملاً الإقامة والطعام والنقل ونشاطاً واحداً. مسافر مرتاح ينفق دون تحسيب يدفع 45–65€ يومياً.',
      ],
      table: {
        caption: 'توزيع الميزانية اليومية في المغرب للمسافر الاقتصادي (2026)',
        headers: ['الفئة', 'اقتصادي (€)', 'متوسط (€)', 'ملاحظات'],
        rows: [
          ['سكن مشترك / غرفة رخيصة', '7–12', '15–25', 'نزل المدينة العتيقة = أرخص'],
          ['طعام (3 وجبات)', '5–8', '10–15', 'مطاعم محلية فقط'],
          ['نقل محلي', '2–5', '5–10', 'حافلات + سيارات أجرة صغيرة'],
          ['أنشطة', '0–3', '5–15', 'كثير من المواقع مجانية'],
          ['ماء + وجبات خفيفة', '1–2', '2–4', 'اشترِ من السوبرماركت'],
          ['المجموع يومياً', '15–30', '37–69', 'النطاق الواقعي'],
        ],
      },
    },
    {
      heading: 'أين تنام رخيصاً في المغرب',
      paragraphs: [
        'يوجد في المغرب نزل ممتازة في كل مدينة رئيسية، معظمها داخل أسوار المدينة العتيقة أو بالقرب منها. أسرّة الغرف المشتركة تتراوح بين 70–120 درهم/ليلة (6–11€). الغرف الخاصة في المنازل السياحية الاقتصادية (maisons d\'hôtes) تكلف 150–300 درهم/ليلة (14–27€) مع الإفطار — وهو في الغالب أفضل قيمة مقابل المال في المغرب لأن الإفطار ضخم.',
        'أفضل مدن الإقامة الاقتصادية: فاس تملك أرخص نزل المدينة العتيقة. شفشاون تقدم منازل سياحية صغيرة ذات قيمة ممتازة. مراكش أغلى قليلاً لكنها لا تزال بأسعار معقولة. الصويرة تملك منازل سياحية رخيصة ممتازة قرب الشاطئ.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'أرخص طريقة للنوم جيداً في المغرب: منزل سياحي عائلي صغير خارج أسوار المدينة العتيقة مباشرةً. هذه المنازل العائلية تتقاضى 150–200 درهم/ليلة وتشمل إفطاراً مغربياً حقيقياً، وأصحابها يعطونك نصائح محلية صادقة تُوفّر لك المال طوال اليوم.',
      },
    },
    {
      heading: 'الأكل الرخيص في المغرب',
      paragraphs: [
        'الطعام الشعبي والمطاعم المحلية في المغرب لذيذة حقاً ورخيصة جداً. القاعدة الأساسية: كُل حيث يأكل المغاربة، لا حيث يُقدَّم لك قائمة طعام مُلصَّقة بصور.',
        'أفضل وجبات اقتصادية: شوربة الحريرة (5–8 دراهم للطبق)، المسمن أو الملوي بالعسل (3–5 دراهم القطعة من المخبز)، ساندويش مرقيز (10–15 درهم)، طاجين الدجاج في مطعم محلي (35–55 درهم)، الكسكس يوم الجمعة (40–60 درهم). عصير البرتقال الطازج من أكشاك ساحة جامع الفنا في مراكش بـ5 دراهم — أشهر صفقة في المغرب.',
      ],
      table: {
        caption: 'أسعار الطعام الاقتصادي في المغرب 2026',
        headers: ['الطعام', 'السعر (درهم)', 'السعر (€)', 'أين تجده'],
        rows: [
          ['شوربة الحريرة', '5–8', '0.45–0.75', 'أكشاك الشارع، المقاهي المحلية'],
          ['المسمن', '3–5', '0.28–0.45', 'المخابز'],
          ['ساندويش مرقيز', '10–15', '0.90–1.35', 'مشاوي الشارع'],
          ['طاجين دجاج', '35–55', '3.20–5.00', 'المطاعم المحلية'],
          ['عصير برتقال طازج', '5–8', '0.45–0.75', 'جامع الفنا، الأسواق'],
          ['قهوة بالحليب + كرواسون', '12–18', '1.10–1.65', 'المقاهي المغربية'],
          ['ماء سوبرماركت (1.5 ل)', '4–6', '0.35–0.55', 'كارفور، مرجان'],
          ['وجبة كاملة في مطعم', '40–70', '3.60–6.35', 'مطاعم الأحياء'],
        ],
      },
    },
    {
      heading: 'النقل الاقتصادي بين المدن',
      paragraphs: [
        'حافلات CTM وSupratours هي أفضل خيار اقتصادي بين المدن الكبيرة — مريحة ومنضبطة ورخيصة جداً. الدار البيضاء–مراكش بـCTM تكلف 110–130 درهم (10–12€). مراكش–فاس بالحافلة 8 ساعات بـ150–180 درهم (14–16€). القطار (ONCF) أسرع وبسعر مماثل — الدار البيضاء–مراكش في ساعتين ونصف بـ95 درهم (8.50€) الدرجة الثانية.',
        'سيارات الأجرة الكبيرة المشتركة (grands taxis) هي الأرخص للمسافات القصيرة — فاس–مكناس حوالي 25 درهم للمقعد. داخل المدن، سيارات الأجرة الصغيرة مزودة بعداد والحد الأقصى للأجرة داخل المدينة نادراً ما يتجاوز 20–25 درهم.',
      ],
      callout: {
        label: '💡 نصيحة النقل الاقتصادي',
        body: 'لا تقبل أبداً سيارة أجرة صغيرة دون الإصرار على العداد. أسعار الليل (بعد الساعة 8 مساءً) أعلى بـ50% — وهذا قانوني. إن رفض السائق العداد، اتفق على السعر مسبقاً أو خذ التالي. Uber لا يعمل في المغرب؛ Bolt يعمل في الدار البيضاء ومراكش.',
      },
    },
    {
      heading: 'أنشطة مجانية ورخيصة في المغرب',
      paragraphs: [
        'بعض أفضل تجارب المغرب لا تكلف شيئاً. التجوال في مدينة فاس العتيقة مجاني. أزقة شفشاون الزرقاء لا تكلف شيئاً. ساحة جامع الفنا في مراكش ترفيه مجاني من الصباح حتى منتصف الليل. مشاهدة الغروب من قصبة الأوداية في الرباط مجانية. شواطئ الصويرة وأغادير مجانية.',
        'أنشطة مدفوعة رخيصة: جولة مسجد الحسن الثاني بالدار البيضاء (70 درهم)، قصر البهية مراكش (مجاني)، الأضرحة السعدية (70 درهم)، شالة بالرباط (70 درهم)، أطلال وليلي الرومانية (70 درهم).',
      ],
    },
    {
      heading: 'أكبر 5 أخطاء ميزانية في المغرب',
      paragraphs: [
        'هذه هي الطرق التي يخسر بها السياح المال في المغرب — تجنّبها جميعاً وتبقى ميزانيتك سليمة.',
      ],
      table: {
        caption: 'كيف تتجنب أكثر الفخاخ السياحية شيوعاً في المغرب',
        headers: ['الفخ', 'ما يحدث', 'كيف تتجنبه'],
        rows: [
          ['المرشدون غير الرسميين', 'شاب يعرض المساعدة ثم يطلب مالاً', 'ارفض بلطف أي مساعدة غير مطلوبة'],
          ['"دعوة" الشاي', 'شاي مجاني يقود لبيع سجاد قسري', 'ارفض الشاي عند أبواب محلات السجاد'],
          ['سيارة أجرة مبالغ فيها', 'السائق يطلب 10 أضعاف السعر العادي', 'أصِرّ دائماً على العداد'],
          ['صرف المطار', 'مكتب الصرف بالمطار أسوأ بـ15–20%', 'استخدم ATM عند الوصول'],
          ['قائمة طعام سياحية', 'قائمة بدون أسعار', 'اسأل عن السعر قبل الطلب'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'كم أحتاج يومياً في المغرب بميزانية محدودة؟',
      answer: 'مسافر حذر يستطيع الاكتفاء بـ20–30€ يومياً شاملاً سكن مشترك وطعام محلي وحافلات. مسافر متوسط ينفق عادةً 40–60€ يومياً. مخيم الصحراء هو الليلة الوحيدة التي تحتاج ميزانية منفصلة (70–135€).',
    },
    {
      question: 'ما أرخص وسيلة نقل بين مدن المغرب؟',
      answer: 'حافلات CTM وSupratours هي الأفضل قيمةً — مريحة ومنضبطة وأرخص بكثير من سيارات الأجرة. القطار ONCF أسرع لمسار الدار البيضاء–مراكش وبسعر مماثل.',
    },
    {
      question: 'هل المغرب رخيص للمسافرين بميزانية محدودة؟',
      answer: 'نعم — المغرب من أفضل وجهات العالم من حيث القيمة مقابل المال. سكن مشترك من 7€/ليلة، وجبة كاملة في مطعم من 3€، رحلة بالحافلة الداخلية بـ0.30€. المخاطرة الرئيسية على الميزانية هي الفخاخ السياحية لا الأسعار الحقيقية.',
    },
    {
      question: 'هل يمكن زيارة المغرب بـ30€ يومياً؟',
      answer: 'نعم — 30€ يومياً واقعي إذا نمت في غرف مشتركة وأكلت في مطاعم محلية وسافرت بالحافلة. مخيم الصحراء هو الليلة الوحيدة التي تكسر هذه الميزانية، لكنها تستحق كل يورو.',
    },
    {
      question: 'هل الإكرامية إلزامية في المغرب؟',
      answer: 'الإكرامية مُقدَّرة لكن ليست إلزامية. أضف بضعة دراهم لأجرة التاكسي، اترك 5–10 دراهم للخدمة في المقهى، أعطِ 30–50 درهماً للمرشد لجولة نصف يوم، و20–30 درهماً لطاقم مخيم الصحراء.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل المغرب غالٍ على السياح؟', answer: 'لا — المغرب اقتصادي جداً بمعايير أوروبية. التكاليف الرئيسية هي الإقامة ومخيم الصحراء. الطعام والنقل اليوميان رخيصان للغاية.' },
    { question: 'ما عملة المغرب؟', answer: 'الدرهم المغربي (MAD). 1€ ≈ 11 درهم (منتصف 2026). أجهزة الصراف الآلي متوفرة في كل مكان. الدفع بالبطاقة مقبول في معظم الفنادق والمطاعم لكن احمل نقداً للأسواق وسيارات الأجرة.' },
    { question: 'هل يمكن الدفع باليورو في المغرب؟', answer: 'لا — الدرهم المغربي مطلوب لجميع المعاملات المحلية. غيّر يوروهاتك في أجهزة الصراف الآلي البنكية عند الوصول (أفضل سعر) أو في مكاتب الصرف الرسمية.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira', 'casablanca'],
  relatedPosts: ['khattat-rihlat-al-maghrib-usbuan', 'ma-tafal-fi-al-maghrib-7-ayam', 'nasaeh-li-ziyarat-al-maghrib-li-awwal-marra'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);