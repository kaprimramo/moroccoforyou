import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'morocco-itinerary-10-days-with-budget';
const SLUG_FR = 'itineraire-maroc-10-jours-avec-budget';
const SLUG_AR = 'barnamej-al-maghrib-10-ayyam-mae-mizania';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(30099211);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Morocco Itinerary 10 Days with Budget — 2026 Cost Breakdown',
  metaDescription:
    'A real Morocco itinerary 10 days with budget for 2026 — day-by-day route, accommodation, transport and food costs in £/€. Plan your trip on WhatsApp.',
  title: 'Morocco Itinerary 10 Days with Budget: 2026 Real-Cost Plan',
  description:
    'A field-tested 10-day Morocco itinerary with real 2026 prices for budget, mid-range and luxury travellers — Marrakech, the Sahara, Fes and Chefchaouen with day-by-day spend.',
  keyword: 'morocco itinerary 10 days with budget',
  coverImage: COVER,
  coverAlt: 'Sahara dunes at sunrise — Morocco itinerary 10 days with budget',
  publishedISO: '2026-05-17',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 13,
  intro:
    'A 10-day Morocco itinerary in 2026 costs between £550 and £2,400 per person excluding flights, depending on whether you travel budget, mid-range or luxury. The route below — Marrakech → Sahara at Merzouga → Fes → [Chefchaouen](/destinations/chefchaouen/) → fly home from Tangier — is the one we plan most often for UK, US and Australian travellers. Below is the day-by-day plan plus a transparent cost breakdown in each budget tier so you can pick what fits.',
  sections: [
    {
      heading: 'The 10-day Morocco route at a glance',
      paragraphs: [
        'Fly into Marrakech (RAK), out of Tangier (TNG) or Fes (FEZ) to avoid backtracking. The route covers two imperial cities, the desert and the blue town, with one full rest day in the middle and no day repeated. Driving is via a private driver (recommended) or a self-driven [rental from Casablanca Airport](/rent-a-car/casablanca-airport/) if you’re confident on the mountain roads.',
      ],
      list: [
        'Day 1: Land Marrakech (RAK). Riad check-in. Sunset on Jemaa el-Fnaa.',
        'Day 2: Marrakech — Bahia Palace, Saadian Tombs, souks, rooftop dinner.',
        'Day 3: Marrakech → Aït Ben Haddou → Ouarzazate (1 night).',
        'Day 4: Ouarzazate → Dadès Valley → Todra Gorges → Merzouga camp (1 night in dunes).',
        'Day 5: Sahara sunrise → Erfoud → Midelt → Fes (long drive, 8 hours).',
        'Day 6: Fes medina with a licensed guide. Marinid Tombs at sunset.',
        'Day 7: Fes — independent exploration + half-day Volubilis Roman ruins.',
        'Day 8: Fes → Chefchaouen (4 hours). Evening blue medina walk.',
        'Day 9: Chefchaouen — Akchour waterfalls hike or Spanish Mosque viewpoint.',
        'Day 10: Chefchaouen → Tangier (2.5h). Kasbah, Café Hafa, fly home from TNG.',
      ],
    },
    {
      heading: 'Real-cost comparison — budget vs mid-range vs luxury',
      paragraphs: [
        'These are 2026 per-person costs in pounds sterling, double occupancy, excluding international flights. Add £80–£200 per person for the internal flight if you fly Fes → Marrakech rather than driving (we don’t recommend that for this route).',
      ],
      table: {
        caption: 'Morocco itinerary 10 days with budget — total cost per person in 2026',
        headers: ['Item', 'Budget', 'Mid-range', 'Luxury'],
        rows: [
          ['Accommodation (9 nights)', '£25–40 / night', '£60–110 / night', '£200–500 / night'],
          ['Private driver + car', 'shared CTM bus', '£60–80 / day', '£90–130 / day'],
          ['Desert camp (1 night)', '£40 (basic)', '£100 (luxury)', '£180+ (premium)'],
          ['Licensed Fes guide (half day)', '£15', '£25', '£35'],
          ['Meals (3/day)', '£10–15 / day', '£25–40 / day', '£60–100 / day'],
          ['Entry fees + activities', '£40 total', '£70 total', '£120 total'],
          ['Local SIM + sundries', '£25', '£25', '£25'],
          ['TOTAL per person', '£550–£780', '£1,090–£1,650', '£2,100–£2,400+'],
        ],
      },
      callout: {
        label: 'Local insider tip',
        body: 'The single biggest budget lever is the desert camp. A "luxury" Saharan camp at £180/night is a defining memory and most travellers say it is the part of the trip not to scrimp on, even on a budget plan.',
      },
    },
    {
      heading: 'Day 1 — Marrakech arrival (£25–£250)',
      paragraphs: [
        'Land at Marrakech Menara (RAK). The cheapest way into the city is the #19 airport bus (MAD 30, every 20 minutes to Jemaa el-Fnaa). A petit-taxi costs MAD 100–150 day, MAD 200 at night. A pre-booked riad transfer is free at almost every mid-range and luxury riad.',
        'Drop bags, decompress, walk to Jemaa el-Fnaa for sunset. Eat at a numbered stall (#14 or #31 are reliable) for MAD 80–120, or splurge on a rooftop dinner at Nomad (MAD 350 per person including a glass of wine).',
      ],
    },
    {
      heading: 'Days 2–3 — Marrakech and the road south',
      paragraphs: [
        'Day 2 stays in Marrakech: Bahia Palace (MAD 70), Saadian Tombs (MAD 70), Ben Youssef Madrasa (MAD 50), then souks. Afternoon rest at the riad and a hammam (MAD 250–600 depending on standard) before a rooftop dinner.',
        'Day 3 starts at 8am crossing the Tichka pass to [Aït Ben Haddou](/destinations/marrakech/) (4 hours including photo stops). Lunch facing the ksar, climb to the top granary, then 30 minutes to Ouarzazate for the night. Stay at Le Berbère Palace or a kasbah in Skoura.',
      ],
    },
    {
      heading: 'Day 4 — into the Sahara',
      paragraphs: [
        'The most spectacular driving day. Ouarzazate → Dadès Valley (3h) for lunch, → Todra Gorges (1h walk between the cliffs), → Erfoud → Merzouga (arrive 4–5pm). Camel trek 60–90 minutes into the dunes to camp. Dinner, drumming, sleep under the stars.',
        'Budget tier: stay at Kasbah Mohayut on the edge of the dunes (£60/night) and book a basic camp (£40). Luxury tier: Erg Chebbi Luxury Desert Camp (£180+ per person including transfer + dinner + breakfast).',
      ],
    },
    {
      heading: 'Day 5 — the long drive to Fes',
      paragraphs: [
        'Sunrise on a high dune (5:30–6:30am depending on season), camels back, breakfast at the hotel, on the road by 9am. Erfoud → Midelt (lunch stop with mountain views) → Ifrane (the "Switzerland of Morocco") → [Fes](/destinations/fes/). Arrive 6–7pm. Long but scenic. Share the driving if you self-drive.',
      ],
    },
    {
      heading: 'Days 6–7 — Fes medina, Volubilis',
      paragraphs: [
        'Day 6 with a licensed guide (£25–35 for 4 hours) covering Madrasa Bou Inania, Al-Qarawiyyin, the Chouara tanneries (view from a shop terrace), Nejjarine carpenters’ square, the spice and slipper souks. Dinner at Restaurant Numéro 7 or The Ruined Garden.',
        'Day 7 morning: independent souk exploration (silver, ceramics, leather babouches). Afternoon: 30-minute taxi to Volubilis Roman ruins (MAD 70 entry) + Moulay Idriss village.',
      ],
    },
    {
      heading: 'Day 8 — Fes to Chefchaouen',
      paragraphs: [
        'A 4-hour drive north into the Rif Mountains. CTM bus is MAD 75 (£6) one way; a shared private transfer is MAD 1,200 (£100, split). Arrive Chefchaouen early afternoon and walk the blue alleys before the day-trip crowds leave at 5pm — the magic kicks in at dusk.',
      ],
    },
    {
      heading: 'Day 9 — Chefchaouen full day',
      paragraphs: [
        'Either a half-day hike to the Akchour waterfalls (1h taxi + 2–4h walk) or a slow medina day: morning photo walk, lunch in Plaza Uta el-Hammam, Spanish Mosque viewpoint at golden hour, dinner at Sofia or Bab Ssour.',
      ],
    },
    {
      heading: 'Day 10 — Chefchaouen to Tangier and home',
      paragraphs: [
        '2h30 drive to Tangier. If your flight is afternoon/evening, do the Kasbah and Café Hafa in the morning, lunch in the Petit Socco, then airport. If early flight, transfer overnight to Tangier the previous evening.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a 10-day trip to Morocco cost?',
      answer:
        'In 2026, a 10-day Morocco trip costs £550–£780 per person on a budget plan, £1,090–£1,650 mid-range, and £2,100–£2,400+ luxury — excluding international flights, double occupancy.',
    },
    {
      question: 'Is 10 days enough to see Morocco?',
      answer:
        'Yes — 10 days is the most comfortable length for a first Morocco trip, allowing Marrakech, the Sahara, Fes and Chefchaouen with one rest day. Anything longer is generous; anything shorter requires cutting a destination.',
    },
    {
      question: 'Can I do this 10-day Morocco trip on a budget?',
      answer:
        'Yes — using CTM buses between cities, basic riads (£25–40/night), one shared basic desert camp (£40) and meals at souks (£10/day), a backpacker can do this trip for £550–£780 per person.',
    },
    {
      question: 'Is it better to fly or drive between Marrakech and Fes?',
      answer:
        'For this 10-day itinerary, drive — you pass Aït Ben Haddou and the Sahara, which is the point. If you skip the Sahara, the train (7h) or a 1h flight is fine.',
    },
    {
      question: 'When is the best month for a 10-day Morocco trip?',
      answer:
        'April–May and October–November are ideal. The Sahara is comfortable, the imperial cities are not too hot, and Chefchaouen and the Atlas are at their best.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I add Essaouira to this 10-day plan?', answer: 'Only by removing Chefchaouen or shortening Fes. Essaouira works better on a 12–14 day itinerary.' },
    { question: 'What is the best riad in Marrakech under £100?', answer: 'Riad Be Marrakech, Riad Idra, and Riad Anjar are all consistently rated mid-range options inside the medina.' },
    { question: 'How much should I tip my driver?', answer: 'For a 10-day private driver: MAD 1,000–1,500 (£80–£120) for excellent service, split among travellers in the car.' },
  ],
  relatedDestinations: ['marrakech', 'sahara-merzouga', 'fes', 'chefchaouen', 'ait-ben-haddou'],
  relatedPosts: ['morocco-7-days-itinerary', 'morocco-road-trip-guide', 'best-riads-marrakech'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Itinéraire Maroc 10 jours avec budget — Plan détaillé 2026',
  metaDescription:
    'Itinéraire Maroc 10 jours avec budget 2026 : prix réels en euros par catégorie (sac à dos, milieu de gamme, luxe), jour par jour. Demandez votre devis sur WhatsApp.',
  title: 'Itinéraire Maroc 10 jours avec budget : le plan 2026',
  description:
    'Un itinéraire 10 jours au Maroc éprouvé sur le terrain, avec budgets réels 2026 en euros — Marrakech, Sahara, Fès, Chefchaouen, et la décomposition du coût en sac à dos, milieu de gamme et luxe.',
  keyword: 'itinéraire maroc 10 jours avec budget',
  coverImage: COVER,
  coverAlt: 'Dunes du Sahara au lever du soleil — itinéraire Maroc 10 jours avec budget',
  publishedISO: '2026-05-17',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 13,
  intro:
    'Un itinéraire Maroc 10 jours avec budget en 2026 coûte entre 650 € et 2 800 € par personne hors vol, selon que vous voyagez sac à dos, milieu de gamme ou luxe. L’itinéraire ci-dessous — [Marrakech](/destinations/marrakech/) → Sahara à Merzouga → [Fès](/destinations/fes/) → [Chefchaouen](/destinations/chefchaouen/) → vol retour depuis Tanger — est celui que nous concevons le plus souvent pour les voyageurs français, belges et suisses. Vous trouverez ci-dessous le plan jour par jour et une ventilation transparente en trois budgets pour choisir le vôtre.',
  sections: [
    {
      heading: 'Le parcours 10 jours en un coup d’œil',
      paragraphs: [
        'Arrivée à Marrakech (RAK), départ depuis Tanger (TNG) ou Fès (FEZ) pour éviter le retour à vide. Le circuit couvre deux villes impériales, le désert et la ville bleue, avec une vraie journée de repos au milieu et aucun jour doublé. Trajets en chauffeur privé (conseillé) ou en [location de voiture depuis l’aéroport de Casablanca](/rent-a-car/casablanca-airport/) si vous êtes à l’aise sur les routes de montagne.',
      ],
      list: [
        'Jour 1 : Arrivée Marrakech (RAK). Installation au riad. Coucher de soleil sur Jemaa el-Fna.',
        'Jour 2 : Marrakech — Palais Bahia, Tombeaux Saadiens, souks, dîner sur les toits.',
        'Jour 3 : Marrakech → Aït Ben Haddou → Ouarzazate (1 nuit).',
        'Jour 4 : Ouarzazate → Vallée du Dadès → Gorges du Todra → Merzouga (1 nuit dans les dunes).',
        'Jour 5 : Lever de soleil au Sahara → Erfoud → Midelt → Fès (route longue, 8h).',
        'Jour 6 : Médina de Fès avec guide officiel. Tombeaux Mérinides au coucher du soleil.',
        'Jour 7 : Fès — exploration libre + demi-journée à Volubilis (ruines romaines).',
        'Jour 8 : Fès → Chefchaouen (4h). Médina bleue en soirée.',
        'Jour 9 : Chefchaouen — Cascades d’Akchour ou Mosquée Espagnole.',
        'Jour 10 : Chefchaouen → Tanger (2h30). Kasbah, Café Hafa, vol depuis TNG.',
      ],
    },
    {
      heading: 'Comparatif coût réel — sac à dos, milieu de gamme, luxe',
      paragraphs: [
        'Coûts 2026 par personne en euros, base double, hors vol international. Ajoutez 80-200 € par personne si vous prenez un vol interne Fès → Marrakech (nous ne le recommandons pas pour ce parcours).',
      ],
      table: {
        caption: 'Itinéraire Maroc 10 jours avec budget — coût total par personne en 2026',
        headers: ['Poste', 'Sac à dos', 'Milieu de gamme', 'Luxe'],
        rows: [
          ['Hébergement (9 nuits)', '30-50 €/nuit', '70-130 €/nuit', '230-580 €/nuit'],
          ['Chauffeur privé + voiture', 'bus CTM partagé', '70-95 €/jour', '105-150 €/jour'],
          ['Camp désert (1 nuit)', '45 € (basique)', '115 € (luxe)', '210 €+ (premium)'],
          ['Guide officiel Fès (½ journée)', '18 €', '30 €', '40 €'],
          ['Repas (3/jour)', '12-18 €/jour', '30-45 €/jour', '70-115 €/jour'],
          ['Entrées + activités', '45 € total', '80 € total', '140 € total'],
          ['SIM locale + divers', '30 €', '30 €', '30 €'],
          ['TOTAL par personne', '650 €–900 €', '1 250 €–1 900 €', '2 400 €–2 800 €+'],
        ],
      },
      callout: {
        label: 'Astuce locale',
        body: 'Le poste où il vaut le plus la peine de monter en gamme est le camp du désert. Un camp "luxe" à 200 €/nuit reste un souvenir-clé du voyage, même sur un budget global serré.',
      },
    },
    {
      heading: 'Jour 1 — Arrivée à Marrakech (25 €-250 €)',
      paragraphs: [
        'Atterrissage à Marrakech Menara (RAK). Le moins cher pour rejoindre la ville : bus #19 (30 MAD, toutes les 20 min vers Jemaa el-Fna). Un petit taxi coûte 100-150 MAD de jour, 200 de nuit. Un transfert riad pré-réservé est gratuit dans presque tous les établissements milieu de gamme et luxe.',
        'Dépôt des bagages, douche, Jemaa el-Fna pour le coucher du soleil. Dîner à un stand numéroté (#14 ou #31 fiables) pour 80-120 MAD, ou rooftop chez Nomad (350 MAD/pers avec un verre de vin).',
      ],
    },
    {
      heading: 'Jours 2-3 — Marrakech et la route du sud',
      paragraphs: [
        'Jour 2 à Marrakech : Palais Bahia (70 MAD), Tombeaux Saadiens (70 MAD), Médersa Ben Youssef (50 MAD), puis souks. Sieste au riad et hammam (250-600 MAD selon standing) avant un dîner sur les toits.',
        'Jour 3 départ 8h, traversée du col du Tichka jusqu’à Aït Ben Haddou (4h avec arrêts photo). Déjeuner face au ksar, montée à l’agadir, puis 30 min vers Ouarzazate. Nuit au Berbère Palace ou dans une kasbah à Skoura.',
      ],
    },
    {
      heading: 'Jour 4 — entrée au Sahara',
      paragraphs: [
        'La plus belle journée de route. Ouarzazate → vallée du Dadès (3h) pour le déjeuner, → gorges du Todra (1h de marche), → Erfoud → Merzouga (arrivée 16-17h). Méharée 60-90 min vers le camp. Dîner, tambours, sommeil sous les étoiles.',
        'Sac à dos : Kasbah Mohayut au bord des dunes (60 €/nuit) + camp basique (45 €). Luxe : Erg Chebbi Luxury Desert Camp (210 €+/pers avec transfert + dîner + petit-déjeuner).',
      ],
    },
    {
      heading: 'Jour 5 — la longue route vers Fès',
      paragraphs: [
        'Lever du soleil sur une dune (5h30-6h30 selon saison), retour à dos de dromadaire, douche, départ 9h. Erfoud → Midelt (déjeuner avec vue sur les montagnes) → Ifrane (la "Suisse marocaine") → [Fès](/destinations/fes/). Arrivée 18-19h. Longue mais magnifique. Alternez la conduite si vous êtes en voiture de location.',
      ],
    },
    {
      heading: 'Jours 6-7 — médina de Fès, Volubilis',
      paragraphs: [
        'Jour 6 avec guide officiel (250-350 MAD pour 4h) : Médersa Bou Inania, Al-Quaraouiyine, tanneries Chouara (vue depuis une terrasse de cuir), place des menuisiers de Nejjarine, souks aux épices et babouches. Dîner au Restaurant Numéro 7 ou au Ruined Garden.',
        'Jour 7 matin : souks libres (argent, céramique, babouches). Après-midi : 30 min en taxi vers Volubilis (70 MAD) + Moulay Idriss.',
      ],
    },
    {
      heading: 'Jour 8 — Fès vers Chefchaouen',
      paragraphs: [
        '4h de route nord vers le Rif. Bus CTM 75 MAD (7 €) aller ; transfert privé partagé 1 200 MAD (100 €, à diviser). Arrivée Chefchaouen en début d’après-midi, balade dans la médina bleue avant le départ des excursionnistes à 17h — la magie commence à la tombée du jour.',
      ],
    },
    {
      heading: 'Jour 9 — journée Chefchaouen',
      paragraphs: [
        'Au choix : randonnée demi-journée aux cascades d’Akchour (1h en taxi + 2-4h de marche) ou journée lente médina : promenade photo matinale, déjeuner Place Uta el-Hammam, point de vue de la Mosquée Espagnole au coucher du soleil, dîner au Sofia ou Bab Ssour.',
      ],
    },
    {
      heading: 'Jour 10 — Chefchaouen vers Tanger',
      paragraphs: [
        '2h30 de route. Si vol après-midi/soir, Kasbah et Café Hafa le matin, déjeuner au Petit Socco, puis aéroport. Si vol matinal, transfert la veille au soir vers Tanger.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Combien coûte un voyage de 10 jours au Maroc ?',
      answer:
        'En 2026, un séjour de 10 jours au Maroc coûte 650-900 € par personne en sac à dos, 1 250-1 900 € en milieu de gamme et 2 400-2 800 €+ en luxe — hors vol international, base double.',
    },
    {
      question: '10 jours, est-ce assez pour le Maroc ?',
      answer:
        'Oui — 10 jours est la durée la plus confortable pour un premier voyage, permettant Marrakech, le Sahara, Fès et Chefchaouen avec une journée de repos. Plus long est généreux ; plus court oblige à couper une destination.',
    },
    {
      question: 'Peut-on faire ce voyage en sac à dos ?',
      answer:
        'Oui — en bus CTM entre les villes, riads basiques (30-50 €/nuit), un camp désert partagé basique (45 €) et repas dans les souks (12 €/jour), un backpacker fait ce voyage pour 650-900 € par personne.',
    },
    {
      question: 'Vaut-il mieux voler ou rouler entre Marrakech et Fès ?',
      answer:
        'Pour cet itinéraire 10 jours, rouler — on passe par Aït Ben Haddou et le Sahara, c’est tout l’intérêt. Si vous sautez le Sahara, le train (7h) ou un vol d’1h conviennent.',
    },
    {
      question: 'Quel est le meilleur mois pour ce circuit ?',
      answer:
        'Avril-mai et octobre-novembre sont idéaux. Le Sahara est tempéré, les médinas impériales ne sont pas trop chaudes, et Chefchaouen et l’Atlas sont au mieux.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on ajouter Essaouira à ce circuit 10 jours ?', answer: 'Uniquement en retirant Chefchaouen ou en raccourcissant Fès. Essaouira fonctionne mieux sur 12-14 jours.' },
    { question: 'Quel riad à Marrakech sous 100 € ?', answer: 'Riad Be Marrakech, Riad Idra et Riad Anjar sont des valeurs sûres milieu de gamme dans la médina.' },
    { question: 'Combien laisser au chauffeur en pourboire ?', answer: 'Pour 10 jours en chauffeur privé : 1 000-1 500 MAD (95-145 €) pour un excellent service, à diviser entre les voyageurs.' },
  ],
  relatedDestinations: ['marrakech', 'sahara-merzouga', 'fes', 'chefchaouen', 'ait-ben-haddou'],
  relatedPosts: ['morocco-7-days-itinerary', 'morocco-road-trip-guide'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'برنامج 10 أيام في المغرب بميزانية — دليل 2026',
  metaDescription:
    'برنامج 10 أيام في المغرب مع ميزانية مفصّلة بالدرهم والريال لعام 2026: مراكش، الصحراء، فاس، شفشاون. ثلاثة مستويات: اقتصادي، متوسط، وفاخر.',
  title: 'برنامج 10 أيام في المغرب بميزانية مفصّلة لعام 2026',
  description:
    'برنامج 10 أيام في المغرب مع تكلفة حقيقية بالدرهم والريال لعام 2026 — مراكش، الصحراء، فاس، شفشاون، وتقسيم التكلفة على ثلاثة مستويات: اقتصادي، متوسط، وفاخر.',
  keyword: 'برنامج 10 أيام في المغرب',
  coverImage: COVER,
  coverAlt: 'كثبان الصحراء عند الشروق — برنامج 10 أيام في المغرب مع ميزانية',
  publishedISO: '2026-05-17',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 13,
  intro:
    'برنامج 10 أيام في المغرب لعام 2026 يكلّف بين 2700 و 11500 ريال للفرد دون تذكرة الطيران، حسب اختيارك بين الاقتصادي والمتوسط والفاخر. المسار التالي — [مراكش](/destinations/marrakech/) → الصحراء في مرزوكة → [فاس](/destinations/fes/) → [شفشاون](/destinations/chefchaouen/) → العودة من طنجة — هو الأكثر طلبًا لدى زوارنا الخليجيين والسعوديين. تجد أدناه الخطة يومًا بيوم وتقسيمًا شفافًا للتكلفة بثلاثة مستويات.',
  sections: [
    {
      heading: 'مسار 10 أيام بنظرة سريعة',
      paragraphs: [
        'الوصول إلى مراكش (RAK)، المغادرة من طنجة (TNG) أو فاس (FEZ) لتفادي الرجوع. يشمل المسار مدينتين إمبراطوريتين والصحراء والمدينة الزرقاء، مع يوم راحة كامل في المنتصف وبدون تكرار. التنقل بسائق خاص (موصى به) أو [استئجار سيارة من مطار الدار البيضاء](/rent-a-car/casablanca-airport/) إن كنت مرتاحًا في الطرق الجبلية.',
      ],
      list: [
        'اليوم 1: الوصول إلى مراكش (RAK). تسجيل دخول الرياض. غروب في ساحة جامع الفنا.',
        'اليوم 2: مراكش — قصر الباهية، قبور السعديين، الأسواق، عشاء على سطح.',
        'اليوم 3: مراكش → آيت بن حدّو → ورزازات (مبيت).',
        'اليوم 4: ورزازات → وادي دادس → مضيق تودرا → مرزوكة (ليلة في الكثبان).',
        'اليوم 5: شروق الصحراء → الرشيدية → ميدلت → فاس (طريق طويل، 8 ساعات).',
        'اليوم 6: مدينة فاس العتيقة مع مرشد مرخّص. قبور المرينيين عند الغروب.',
        'اليوم 7: فاس — تجوّل حر + نصف يوم في وليلي الأثرية.',
        'اليوم 8: فاس → شفشاون (4 ساعات). جولة في المدينة الزرقاء مساء.',
        'اليوم 9: شفشاون — شلالات أقشور أو إطلالة المسجد الإسباني.',
        'اليوم 10: شفشاون → طنجة (2:30). القصبة، مقهى حافة، طيران من TNG.',
      ],
    },
    {
      heading: 'مقارنة التكلفة الحقيقية — اقتصادي ومتوسط وفاخر',
      paragraphs: [
        'الأسعار للفرد بالريال السعودي، أساس مزدوج، دون تذكرة الطيران الدولي. أضف 400-1000 ريال للفرد لرحلة طيران داخلية فاس → مراكش (لا ننصح بها لهذا المسار).',
      ],
      table: {
        caption: 'برنامج 10 أيام في المغرب — التكلفة الإجمالية للفرد في 2026',
        headers: ['البند', 'اقتصادي', 'متوسط', 'فاخر'],
        rows: [
          ['الإقامة (9 ليالٍ)', '125-200 ريال/ليلة', '300-550 ريال/ليلة', '1000-2500 ريال/ليلة'],
          ['سائق + سيارة', 'حافلة CTM مشتركة', '300-400 ريال/يوم', '450-650 ريال/يوم'],
          ['مخيم صحراء (ليلة)', '200 ريال (بسيط)', '500 ريال (فاخر)', '900+ ريال (متميّز)'],
          ['مرشد فاس مرخّص (½ يوم)', '75 ريال', '125 ريال', '175 ريال'],
          ['الوجبات (3/يوم)', '50-75 ريال/يوم', '130-200 ريال/يوم', '300-500 ريال/يوم'],
          ['الرسوم والأنشطة', '200 ريال إجمالًا', '350 ريال إجمالًا', '600 ريال إجمالًا'],
          ['شريحة وأدوات', '125 ريال', '125 ريال', '125 ريال'],
          ['الإجمالي للفرد', '2700-3900 ريال', '5400-8200 ريال', '10500-12000 ريال'],
        ],
      },
      callout: {
        label: 'نصيحة محلية',
        body: 'البند الذي يستحق ترفيعًا حتى في الميزانية المنخفضة هو مخيم الصحراء. الترقية إلى مخيم فاخر بـ 900 ريال للّيلة تتحوّل إلى ذكرى مركزية للرحلة كلها، ولا يحبّذ معظم الزوار توفيرها.',
      },
    },
    {
      heading: 'اليوم 1 — الوصول إلى مراكش',
      paragraphs: [
        'الهبوط بمطار مراكش المنارة (RAK). أرخص وسيلة إلى المدينة هي حافلة #19 (30 درهم، كل 20 دقيقة إلى جامع الفنا). التاكسي الصغير 100-150 درهم نهارًا، 200 ليلًا. النقل من الرياض مجاني في معظم رياضات المستوى المتوسط والفاخر بحجز مسبق.',
        'تسجيل الدخول، استراحة، الذهاب لساحة جامع الفنا عند الغروب. العشاء عند كشك مرقّم (14 أو 31 موثوقان) بـ 80-120 درهم، أو سطح Nomad بـ 350 درهم للفرد.',
      ],
    },
    {
      heading: 'اليومان 2-3 — مراكش وطريق الجنوب',
      paragraphs: [
        'اليوم 2 في مراكش: قصر الباهية (70 درهم)، قبور السعديين (70 درهم)، مدرسة ابن يوسف (50 درهم)، ثم الأسواق. قيلولة في الرياض وحمّام (250-600 درهم حسب المستوى) قبل العشاء على السطح.',
        'اليوم 3 الانطلاق الساعة 8 صباحًا، عبور ممر تيشكا إلى آيت بن حدّو (4 ساعات مع توقفات تصوير). غداء قبالة القصر، الصعود إلى الأكَادير، ثم 30 دقيقة إلى ورزازات. مبيت في Le Berbère Palace أو قصبة في سكورة.',
      ],
    },
    {
      heading: 'اليوم 4 — دخول الصحراء',
      paragraphs: [
        'أجمل يوم قيادة. ورزازات → وادي دادس (3 ساعات) للغداء، → مضيق تودرا (مشي ساعة)، → الرشيدية → مرزوكة (الوصول 4-5 عصرًا). جمل 60-90 دقيقة إلى المخيم. عشاء وطبول ونوم تحت النجوم.',
        'الاقتصادي: قصبة موحيوط على حافة الكثبان (300 ريال/ليلة) + مخيم بسيط (200 ريال). الفاخر: Erg Chebbi Luxury Desert Camp (900+ ريال للفرد مع النقل + العشاء + الإفطار).',
      ],
    },
    {
      heading: 'اليوم 5 — الطريق الطويل إلى فاس',
      paragraphs: [
        'شروق الشمس على كثيب (5:30-6:30 حسب الموسم)، عودة بالجمل، إفطار في الفندق، الانطلاق التاسعة. الرشيدية → ميدلت (غداء بإطلالة جبلية) → إفران («سويسرا المغرب») → [فاس](/destinations/fes/). الوصول 6-7 مساء. طويل لكن خلاب. تناوب على القيادة إن استأجرت سيارة.',
      ],
    },
    {
      heading: 'اليومان 6-7 — مدينة فاس وَوليلي',
      paragraphs: [
        'اليوم 6 مع مرشد مرخّص (250-350 درهم لـ 4 ساعات): مدرسة بوعنانية، القرويين، مدابغ شوارة (إطلالة من سطح محل جلد)، ساحة نجارين، أسواق التوابل والبلاغي. عشاء في Restaurant Numéro 7 أو The Ruined Garden.',
        'اليوم 7 صباحًا: تسوق حر (فضة، خزف، بلغة). بعد الزوال: 30 دقيقة بالتاكسي إلى أطلال وليلي الرومانية (70 درهم) + قرية مولاي إدريس.',
      ],
    },
    {
      heading: 'اليوم 8 — فاس إلى شفشاون',
      paragraphs: [
        '4 ساعات شمالًا نحو الريف. حافلة CTM 75 درهم (25 ريالًا) للاتجاه؛ نقل خاص مشترك 1200 درهم (400 ريال، يقسم). الوصول شفشاون مطلع العصر، جولة في الأزقة الزرقاء قبل مغادرة الأفواج الساعة 17 — السحر يبدأ مع الغسق.',
      ],
    },
    {
      heading: 'اليوم 9 — يوم كامل في شفشاون',
      paragraphs: [
        'خيار: نصف يوم مشي إلى شلالات أقشور (ساعة بالتاكسي + 2-4 ساعات مشي)، أو يوم هادئ بالمدينة: تصوير صباحي، غداء ساحة وطا الحمام، إطلالة المسجد الإسباني عند الساعة الذهبية، عشاء في Sofia أو Bab Ssour.',
      ],
    },
    {
      heading: 'اليوم 10 — شفشاون إلى طنجة',
      paragraphs: [
        '2:30 ساعة طريقًا. إن كانت رحلتك العصر/المساء، القصبة ومقهى حافة صباحًا، غداء في السوق الصغير، ثم المطار. إن كانت مبكرة، انتقل ليلًا إلى طنجة.',
      ],
    },
  ],
  faqs: [
    {
      question: 'كم تكلفة رحلة 10 أيام إلى المغرب؟',
      answer:
        'في 2026، رحلة 10 أيام في المغرب تكلّف 2700-3900 ريال للفرد اقتصاديًا، 5400-8200 متوسطًا، 10500-12000+ ريال للفاخر — دون تذكرة الطيران الدولي وعلى أساس مزدوج.',
    },
    {
      question: 'هل تكفي 10 أيام لزيارة المغرب؟',
      answer:
        'نعم — 10 أيام هي المدة الأكثر راحة لأول زيارة، تشمل مراكش والصحراء وفاس وشفشاون مع يوم راحة. أطول من ذلك سخاء؛ أقصر منه يفرض حذف وجهة.',
    },
    {
      question: 'هل يمكنني تنفيذ هذا البرنامج بميزانية محدودة؟',
      answer:
        'نعم — بحافلات CTM بين المدن، رياضات بسيطة (125-200 ريال/ليلة)، مخيم صحراء بسيط (200 ريال)، ووجبات في الأسواق (50-75 ريال/يوم)، يمكن لمسافر بميزانية إنجاز الرحلة بـ 2700-3900 ريال للفرد.',
    },
    {
      question: 'هل الأفضل الطيران أم السيارة بين مراكش وفاس؟',
      answer:
        'لهذا البرنامج، السيارة — تمر بآيت بن حدّو والصحراء وهذا هو المقصود. إذا حذفت الصحراء، فالقطار (7 ساعات) أو رحلة طيران ساعة مناسبتان.',
    },
    {
      question: 'ما أفضل شهر لرحلة 10 أيام في المغرب؟',
      answer:
        'أبريل-ماي وأكتوبر-نوفمبر مثاليان. الصحراء معتدلة، المدن العتيقة ليست حارة جدًا، وشفشاون والأطلس في أفضل حال.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يمكن إضافة الصويرة لهذا البرنامج؟', answer: 'فقط بحذف شفشاون أو اختصار فاس. الصويرة تنجح أكثر في برامج 12-14 يومًا.' },
    { question: 'ما أفضل رياض بمراكش تحت 400 ريال؟', answer: 'Riad Be Marrakech وRiad Idra وRiad Anjar خيارات متوسطة موثوقة داخل المدينة العتيقة.' },
    { question: 'كم بقشيش السائق؟', answer: 'لِسائق خاص 10 أيام: 1000-1500 درهم (300-450 ريالًا) لخدمة ممتازة، تقسم بين الركّاب.' },
  ],
  relatedDestinations: ['marrakech', 'sahara-merzouga', 'fes', 'chefchaouen', 'ait-ben-haddou'],
  relatedPosts: ['nasaeh-li-ziyarat-al-maghrib-li-awwal-marra'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);
