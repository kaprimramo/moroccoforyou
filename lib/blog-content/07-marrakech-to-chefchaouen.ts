import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'how-to-get-from-marrakech-to-chefchaouen';
const SLUG_FR = 'comment-aller-de-marrakech-a-chefchaouen';
const SLUG_AR = 'kayfa-tantaqil-min-marrakesh-ila-shafshawan';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889763);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Marrakech to Chefchaouen 2026: Distance, Route & Real Driving Time',
  title: 'Marrakech to Chefchaouen 2026: Distance, Route & Real Driving Time',
  metaDescription: 'Marrakech to Chefchaouen: 560-580 km via motorway, 7-7.5 hours driving. Complete route guide, toll costs, and why splitting the drive over 2 days beats one long day.',
  description: 'The four ways to get from Marrakech to Chefchaouen in 2026 — direct overnight CTM bus, train + bus combo, private car, or fly-to-Fes-then-drive. Real prices, times, pros and cons.',
  keyword: 'how to get from marrakech to chefchaouen',
  coverImage: COVER,
  coverAlt: 'Blue medina alley in Chefchaouen — how to get from Marrakech to Chefchaouen',
  publishedISO: '2026-05-19',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro:
    'The most popular way to get from [Marrakech](/destinations/marrakech/) to [Chefchaouen](/destinations/chefchaouen/) in 2026 is the overnight CTM bus (11 hours, £20, 1 transfer) or a private car with stop in Fes (12+ hours driving spread over 2 days, £180–£240 split). There is no direct flight, and no direct train. The 580 km journey crosses three regions of Morocco, and the best route depends on whether you have the time to break it up. Below is the honest comparison of all four ways, with 2026 prices and what travellers actually choose.',
  sections: [
    {
      heading: 'The 4 ways to get from Marrakech to Chefchaouen',
      paragraphs: [
        'The route is 580 km via Casablanca / Rabat / Fes, or 700 km via the inland Beni Mellal road. Below is the 2026 comparison.',
      ],
      table: {
        caption: 'Marrakech to Chefchaouen — all options in 2026',
        headers: ['Option', 'Total time', 'Cost / person', 'Best for'],
        rows: [
          ['Direct CTM overnight bus', '11h (overnight)', '£20', 'Budget; sleeping through the journey'],
          ['Train Marrakech→Tangier + bus to Chefchaouen', '8–9h with transfer', '£35–55', 'Comfort, daylight scenery'],
          ['Private car with overnight Fes', '2 days', '£180–240 (split 2 pax)', 'Adding a city — most popular'],
          ['Fly Marrakech→Fes + private car', '4h flying + 4h drive', '£140 + £80', 'Saving the southern Atlas drive'],
        ],
      },
      callout: {
        label: 'Local insider tip',
        body: 'No one should do this transfer in a single day. Either sleep on the night bus or split with a stop in Fes — the medina is worth 2 nights anyway. Day-driving Marrakech-Chefchaouen in one go means 11 hours behind the wheel, arriving exhausted.',
      },
    },
    {
      heading: 'Option 1: The CTM overnight bus (£20, 11 hours)',
      paragraphs: [
        'CTM runs one direct overnight Marrakech → Chefchaouen service, departing around 7pm and arriving 6–7am the next morning. Book online at ctm.ma 2–3 days ahead. The buses are comfortable Mercedes coaches with reclining seats, AC, one 20-minute meal break around midnight, and luggage stored below in a locked compartment (you get a baggage ticket).',
        'Best for budget travellers, solo travellers (it’s safe), and anyone whose schedule lets them sleep through the journey. Worst for light sleepers, families with young kids, and anyone prone to motion sickness on winding roads.',
      ],
    },
    {
      heading: 'Option 2: Train to Tangier + bus to Chefchaouen',
      paragraphs: [
        'The Al Boraq high-speed train (TGV) doesn’t go to Marrakech yet — there is only the standard ONCF day train Marrakech → Casablanca → Rabat → Tangier (8 hours, MAD 200–350 / £18–32 first class). From Tangier-Ville station, a CTM bus to Chefchaouen takes 2.5 hours (MAD 50 / £4).',
        'Slow, but the scenery is excellent and you arrive in Chefchaouen by 6pm in time for the blue alley sunset. Best for travellers who want to use the train day to relax and write postcards.',
      ],
    },
    {
      heading: 'Option 3: Private car with a stop in Fes (recommended)',
      paragraphs: [
        'The most popular option among our travellers. Day 1: Marrakech → Fes (5h on the motorway via Casablanca, £80–100 split, including the toll), 2 nights in Fes. Day 2 onwards: explore the [Fes medina](/destinations/fes/) with a guide. Day 3 or later: Fes → Chefchaouen (4h, £80–100 split). Total driving 9 hours spread over 3 days; you also get the second imperial city for free.',
        'You can do this with a private driver from [MoroccoForYou Cars](/rent-a-car/casablanca-airport/) or self-driven in a rental. Motorway driving Marrakech-Fes is easy; the Fes-Chefchaouen leg climbs into the Rif mountains and is more demanding.',
      ],
    },
    {
      heading: 'Option 4: Fly to Fes, then drive',
      paragraphs: [
        'Royal Air Maroc and Air Arabia operate Marrakech → Fes daily (1h, £80–140). From Fes airport (FEZ), a private transfer to Chefchaouen takes 4h (£80–100). Total under £250 if you book ahead.',
        'Best for time-poor travellers who don’t want the Marrakech-Fes drive but still want Chefchaouen in their itinerary. Worst if you wanted to see the imperial cities corridor (Casablanca / Rabat) en route — the flight cuts that out.',
      ],
    },
    {
      heading: 'Best time of day, week, year to travel',
      paragraphs: [
        'For the night bus: book a Sunday-Tuesday departure if you can. Friday-Saturday is busier and louder. For the train, the 8am Marrakech departure puts you in Tangier by 4pm and Chefchaouen by 7pm, perfect timing.',
        'Year-wise, avoid driving Fes-Chefchaouen in heavy winter rain (Dec-Feb) — the Rif roads can flood. Summer (Jul-Aug) is fine but the night bus is hot until midnight.',
      ],
    },
    {
      heading: 'What to do with luggage and timing',
      paragraphs: [
        'On the night bus, keep your passport and valuables in your daypack inside the cabin. Hand luggage goes overhead, big bags below. Bring a thin fleece — the AC is aggressive. On the train, big bags go on the rack at the carriage end (visible from most seats).',
        'For private cars and rentals, fuel up before leaving Marrakech (the motorway service stations are pricier) and break the drive at Casablanca services (Aire de Berrechid) or in Rabat for lunch.',
      ],
    },
    {
      heading: 'Once you arrive in Chefchaouen',
      paragraphs: [
        'Chefchaouen’s medina is car-free. The bus drops you at the main station 10 minutes’ walk from Bab el-Aïn (the main medina gate). Petit-taxi from station to gate costs MAD 15. Your riad will have a porter ready at the gate to walk you and your bags through the blue alleys.',
        'Plan at least one full night in Chefchaouen — most day-trippers arrive 11am and leave 5pm, so the magic starts at dusk when the alleys empty.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does it take to get from Marrakech to Chefchaouen?',
      answer:
        'About 11 hours by direct CTM overnight bus, 8–9 hours by train + connecting bus during the day, or 2 days if you split the journey with a night in Fes (which we recommend).',
    },
    {
      question: 'Is there a direct bus from Marrakech to Chefchaouen?',
      answer:
        'Yes — CTM runs one direct overnight service, departing around 7pm and arriving Chefchaouen at 6–7am next morning. Tickets cost MAD 230–280 (£20–25). Book on ctm.ma.',
    },
    {
      question: 'Can I take a train from Marrakech to Chefchaouen?',
      answer:
        'No — Chefchaouen has no train station. You can take the train to Tangier and connect by bus (2.5 hours) or Casablanca/Fes and connect from there. The journey is at least 8 hours total.',
    },
    {
      question: 'Should I fly from Marrakech to Chefchaouen?',
      answer:
        'There is no direct flight to Chefchaouen — no airport. You can fly Marrakech → Fes (1h) and then drive 4h to Chefchaouen. Total time around 7 hours including airport time.',
    },
    {
      question: 'What is the cheapest way from Marrakech to Chefchaouen?',
      answer:
        'The direct CTM overnight bus at MAD 230–280 (£20–25) is the cheapest. Supratours runs occasional alternative buses. Hitchhiking is not recommended.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is it safe to take the night bus in Morocco?', answer: 'Yes — CTM is the national operator with safe, modern buses and a strong safety record. Solo female travellers commonly use it.' },
    { question: 'Can I rent a car to drive Marrakech to Chefchaouen?', answer: 'Yes — see our [Casablanca Airport car rental guide](/rent-a-car/casablanca-airport/). Most rentals allow Morocco-wide driving and one-way drop-off in Fes or Tangier for a fee.' },
    { question: 'What is the best stop between Marrakech and Chefchaouen?', answer: 'Fes — the most beautiful medieval city in Morocco. Spend at least 2 nights there.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'tangier'],
  relatedPosts: ['morocco-7-days-itinerary', 'morocco-road-trip-guide', 'chefchaouen-travel-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Marrakech à Chefchaouen 2026 : Distance, Itinéraire & Temps Réel',
  title: 'Marrakech à Chefchaouen 2026 : Distance, Itinéraire & Temps Réel',
  metaDescription: 'Marrakech à Chefchaouen : 560-580 km, 7-7,5h de route via autoroute. Guide complet de l\'itinéraire, coûts de péage, et pourquoi diviser le trajet sur 2 jours.',description: 'Les 4 façons d’aller de Marrakech à Chefchaouen en 2026 — bus CTM de nuit, train + bus, voiture privée avec étape à Fès, ou vol + route. Comparatif honnête en euros.',
  keyword: 'comment aller de marrakech à chefchaouen',
  coverImage: COVER,
  coverAlt: 'Ruelle bleue de Chefchaouen — comment aller de Marrakech à Chefchaouen',
  publishedISO: '2026-05-19',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro:
    'L’option la plus populaire pour aller de [Marrakech](/destinations/marrakech/) à [Chefchaouen](/destinations/chefchaouen/) en 2026 est le bus CTM de nuit (11 heures, 22 €, 1 trajet) ou la voiture privée avec étape à Fès (12 heures de route réparties sur 2 jours, 180-240 € à partager). Pas de vol direct, pas de train direct. Les 580 km traversent trois régions du Maroc et le bon choix dépend de votre temps. Voici la comparaison honnête des quatre options, avec prix 2026 et ce que choisissent vraiment nos voyageurs.',
  sections: [
    {
      heading: 'Les 4 façons d’aller de Marrakech à Chefchaouen',
      paragraphs: [
        'Le trajet fait 580 km via Casablanca / Rabat / Fès, ou 700 km via la route intérieure par Beni Mellal. Comparatif 2026 ci-dessous.',
      ],
      table: {
        caption: 'Marrakech à Chefchaouen — toutes les options en 2026',
        headers: ['Option', 'Durée totale', 'Coût / pers', 'Pour qui'],
        rows: [
          ['Bus CTM de nuit direct', '11h (nuit)', '22 €', 'Petit budget ; dormir pendant le trajet'],
          ['Train Marrakech→Tanger + bus', '8-9h avec correspondance', '40-60 €', 'Confort, paysages de jour'],
          ['Voiture privée avec nuit Fès', '2 jours', '180-240 € (à 2)', 'Ajouter une ville — le plus populaire'],
          ['Vol Marrakech→Fès + voiture', '4h vol + 4h route', '140 € + 80 €', 'Économiser la route Atlas sud'],
        ],
      },
      callout: {
        label: 'Astuce locale',
        body: 'Personne ne devrait faire ce transfert en une seule journée. Soit on dort dans le bus de nuit, soit on coupe à Fès — la médina vaut 2 nuits de toute façon. Conduire Marrakech-Chefchaouen en une journée, c’est 11 heures au volant, arrivée épuisée.',
      },
    },
    {
      heading: 'Option 1 : Bus CTM de nuit (22 €, 11 heures)',
      paragraphs: [
        'CTM exploite un Marrakech → Chefchaouen direct de nuit, départ vers 19h, arrivée 6h-7h du matin. Réservez sur ctm.ma 2-3 jours à l’avance. Les bus sont des Mercedes confortables avec sièges inclinables, clim, une pause repas de 20 min vers minuit, et bagages en soute fermée (vous recevez un ticket).',
        'Pour petits budgets, voyageurs solo (c’est sûr), et tous ceux dont l’emploi du temps permet de dormir. À éviter pour le sommeil léger, les familles avec petits enfants et le mal des transports.',
      ],
    },
    {
      heading: 'Option 2 : Train pour Tanger + bus pour Chefchaouen',
      paragraphs: [
        'Le TGV Al Boraq ne dessert pas encore Marrakech — seul le train ONCF classique part vers Casablanca → Rabat → Tanger (8h, 200-350 MAD / 18-32 € en 1re). Depuis Tanger-Ville, un bus CTM vers Chefchaouen prend 2h30 (50 MAD / 4,50 €).',
        'Lent, mais paysages superbes et arrivée à Chefchaouen vers 18h, à temps pour le coucher de soleil sur les ruelles bleues. Pour ceux qui veulent une journée de train pour souffler et écrire des cartes postales.',
      ],
    },
    {
      heading: 'Option 3 : Voiture privée avec étape à Fès (recommandé)',
      paragraphs: [
        'L’option la plus choisie par nos voyageurs. Jour 1 : Marrakech → Fès (5h sur autoroute par Casablanca, 80-100 € à partager, péage inclus), 2 nuits à Fès. Jour 2 : médina de [Fès](/destinations/fes/) avec guide. Jour 3 ou plus : Fès → Chefchaouen (4h, 80-100 € à partager). Total 9h de route sur 3 jours, et la deuxième ville impériale en cadeau.',
        'Possible avec chauffeur privé via [MoroccoForYou Cars](/rent-a-car/casablanca-airport/) ou en location de voiture. La portion Marrakech-Fès se fait facilement sur autoroute ; Fès-Chefchaouen grimpe dans le Rif et demande plus d’attention.',
      ],
    },
    {
      heading: 'Option 4 : Vol vers Fès puis route',
      paragraphs: [
        'Royal Air Maroc et Air Arabia opèrent Marrakech → Fès quotidiennement (1h, 80-140 €). Depuis l’aéroport de Fès (FEZ), transfert privé 4h vers Chefchaouen (80-100 €). Total moins de 250 € avec réservation à l’avance.',
        'Pour les voyageurs pressés qui ne veulent pas la route Marrakech-Fès mais veulent Chefchaouen dans leur itinéraire. Pas idéal si vous vouliez voir le corridor impérial (Casablanca / Rabat) au passage — le vol coupe ça.',
      ],
    },
    {
      heading: 'Quand voyager',
      paragraphs: [
        'Pour le bus de nuit : départ dimanche-mardi si possible. Vendredi-samedi est plus rempli et bruyant. Pour le train, le départ 8h de Marrakech vous met à Tanger 16h et Chefchaouen 19h, timing parfait.',
        'Évitez de conduire Fès-Chefchaouen en hiver pluvieux (déc-fév) — les routes du Rif peuvent inonder. L’été (juil-août) est ok mais le bus de nuit chauffe jusqu’à minuit.',
      ],
    },
    {
      heading: 'Bagages et timing pratique',
      paragraphs: [
        'Dans le bus de nuit, gardez passeport et valeurs dans votre sac à dos en cabine. Bagages à main en porte-bagages, gros en soute. Apportez une polaire fine — la clim est agressive. Dans le train, les gros sacs vont sur le rack au bout du wagon (visible de la plupart des sièges).',
        'Pour voitures privées et locations, pleinez à Marrakech avant le départ (les stations d’autoroute sont plus chères) et coupez aux aires de Berrechid ou à Rabat pour le déjeuner.',
      ],
    },
    {
      heading: 'À l’arrivée à Chefchaouen',
      paragraphs: [
        'La médina de Chefchaouen est piétonne. Le bus arrête à la gare routière, à 10 min à pied de Bab el-Aïn (porte principale). Petit taxi gare-porte 15 MAD. Votre riad enverra un porteur à la porte pour vous guider à travers les ruelles bleues.',
        'Prévoyez au moins une nuit complète — les excursionnistes arrivent 11h et repartent 17h, et la magie commence à la tombée du jour quand les ruelles se vident.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Combien de temps pour aller de Marrakech à Chefchaouen ?',
      answer:
        'Environ 11h en bus CTM direct de nuit, 8-9h en train + bus dans la journée, ou 2 jours en coupant avec une nuit à Fès (ce que nous recommandons).',
    },
    {
      question: 'Y a-t-il un bus direct Marrakech-Chefchaouen ?',
      answer:
        'Oui — CTM opère un service direct de nuit, départ vers 19h, arrivée 6-7h le lendemain. Billets 230-280 MAD (20-25 €). Réservation sur ctm.ma.',
    },
    {
      question: 'Peut-on prendre le train de Marrakech à Chefchaouen ?',
      answer:
        'Non — Chefchaouen n’a pas de gare. Vous pouvez prendre le train pour Tanger et continuer en bus (2h30) ou pour Casablanca/Fès et y prendre une correspondance. Total minimum 8h.',
    },
    {
      question: 'Faut-il prendre l’avion ?',
      answer:
        'Aucun vol direct vers Chefchaouen — pas d’aéroport. Vous pouvez voler Marrakech → Fès (1h) et conduire 4h. Total environ 7h avec l’aéroport.',
    },
    {
      question: 'Quel est le moyen le moins cher ?',
      answer:
        'Le bus CTM de nuit direct à 230-280 MAD (20-25 €) est le moins cher. Supratours propose parfois des alternatives. L’autostop n’est pas recommandé.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Le bus de nuit est-il sûr au Maroc ?', answer: 'Oui — CTM est l’opérateur national, modernes, sûrs, bon historique. Les voyageuses solo le prennent couramment.' },
    { question: 'Peut-on louer une voiture pour ce trajet ?', answer: 'Oui — voir notre [guide location à l’aéroport de Casablanca](/rent-a-car/casablanca-airport/). La plupart des locations permettent toute conduite au Maroc et rendu à Fès ou Tanger moyennant frais.' },
    { question: 'Quelle est la meilleure étape entre Marrakech et Chefchaouen ?', answer: 'Fès — la plus belle ville médiévale du Maroc. Comptez 2 nuits minimum.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'tangier'],
  relatedPosts: ['morocco-7-days-itinerary', 'morocco-road-trip-guide'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'كيف تنتقل من مراكش إلى شفشاون — دليل 2026',
  metaDescription:
    'كيف تنتقل من مراكش إلى شفشاون في 2026: الحافلة الليلية، القطار، السيارة الخاصة، أو الطيران ثم القيادة. مقارنة بالأسعار والأوقات الحقيقية.',
  title: 'كيف تنتقل من مراكش إلى شفشاون: دليل 2026 الكامل',
  description:
    'الطرق الأربع للانتقال من مراكش إلى شفشاون في 2026 — حافلة CTM ليلية، قطار + حافلة، سيارة خاصة بمبيت في فاس، أو طيران ثم قيادة. مقارنة صريحة بالدرهم والريال.',
  keyword: 'كيف تنتقل من مراكش إلى شفشاون',
  coverImage: COVER,
  coverAlt: 'زقاق أزرق في شفشاون — كيف تنتقل من مراكش إلى شفشاون',
  publishedISO: '2026-05-19',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 9,
  intro:
    'الخيار الأكثر شعبية للانتقال من [مراكش](/destinations/marrakech/) إلى [شفشاون](/destinations/chefchaouen/) في 2026 هو حافلة CTM الليلية المباشرة (11 ساعة، نحو 90 ريالًا) أو سيارة خاصة بمبيت في فاس (12 ساعة قيادة موزّعة على يومين، 700-950 ريالًا تُقسَم). لا يوجد طيران مباشر ولا قطار مباشر. الرحلة 580 كم تمر بثلاث جهات مغربية، والخيار الأنسب يعتمد على وقتك. هنا مقارنة صريحة للخيارات الأربعة بأسعار 2026.',
  sections: [
    {
      heading: 'الطرق الأربع للانتقال',
      paragraphs: [
        'الرحلة 580 كم عبر الدار البيضاء / الرباط / فاس، أو 700 كم عبر الطريق الداخلي ببني ملال. المقارنة كالتالي.',
      ],
      table: {
        caption: 'مراكش إلى شفشاون — كل الخيارات في 2026',
        headers: ['الخيار', 'المدة الكلية', 'التكلفة/شخص', 'الأنسب لمن'],
        rows: [
          ['حافلة CTM ليلية مباشرة', '11 ساعة (ليلًا)', '90 ريالًا', 'ميزانية محدودة؛ النوم في الرحلة'],
          ['قطار مراكش→طنجة + حافلة', '8-9 ساعات بتحويل', '180-250 ريالًا', 'الراحة والمشاهد نهارًا'],
          ['سيارة خاصة بمبيت في فاس', 'يومان', '700-950 ريالًا (لشخصين)', 'إضافة مدينة — الأكثر شعبية'],
          ['طيران مراكش→فاس + سيارة', '4 ساعات طيران + 4 ساعات قيادة', '550 + 320 ريالًا', 'تجنّب طريق جنوب الأطلس'],
        ],
      },
      callout: {
        label: 'نصيحة محلية',
        body: 'لا أحد يحبّذ هذا الانتقال في يوم واحد. إما النوم في الحافلة الليلية، أو التقسيم بمبيت في فاس — المدينة العتيقة تستحق ليلتين على أي حال. القيادة مراكش-شفشاون في يوم واحد تعني 11 ساعة وراء العجلة ووصولًا منهكًا.',
      },
    },
    {
      heading: 'الخيار 1: حافلة CTM الليلية (90 ريال، 11 ساعة)',
      paragraphs: [
        'تشغّل CTM رحلة مباشرة ليلية واحدة مراكش → شفشاون، تنطلق نحو السابعة مساءً وتصل 6-7 صباحًا. احجز عبر ctm.ma قبل 2-3 أيام. الحافلات مرسيدس مريحة بمقاعد تستلقي، مكيّفة، توقف وجبة 20 دقيقة نحو منتصف الليل، وأمتعة في صندوق مغلق (تتلقّى بطاقة أمتعة).',
        'الأفضل للميزانية المحدودة، المسافرين منفردين (آمنة)، ومن يستطيع النوم خلال الرحلة. غير مناسبة للنوم الخفيف، العائلات بأطفال صغار، أو من يتعب من السير في الطرق الجبلية.',
      ],
    },
    {
      heading: 'الخيار 2: قطار إلى طنجة + حافلة',
      paragraphs: [
        'قطار البراق فائق السرعة لم يصل بعد إلى مراكش — فقط القطار العادي ONCF: مراكش → الدار البيضاء → الرباط → طنجة (8 ساعات، 200-350 درهم / 60-110 ريالًا في الدرجة الأولى). من محطة طنجة-المدينة، حافلة CTM إلى شفشاون 2:30 ساعة (50 درهم / 15 ريالًا).',
        'بطيء لكن المشاهد رائعة والوصول إلى شفشاون نحو السادسة مساءً مناسب لغروب الأزقة الزرقاء. مناسب لمن يريد يومًا هادئًا في القطار.',
      ],
    },
    {
      heading: 'الخيار 3: سيارة خاصة بمبيت في فاس (موصى به)',
      paragraphs: [
        'الأكثر اختيارًا عند زوارنا. اليوم 1: مراكش → فاس (5 ساعات على الطريق السيار عبر الدار البيضاء، 320-400 ريالًا تُقسَم، شاملة العبور)، ليلتان في فاس. اليوم 2: مدينة [فاس](/destinations/fes/) العتيقة مع مرشد. اليوم 3 فأكثر: فاس → شفشاون (4 ساعات، 320-400 ريالًا تُقسَم). الإجمالي 9 ساعات قيادة موزّعة على 3 أيام، وتحصل على المدينة الإمبراطورية الثانية مجانًا.',
        'يمكن ذلك مع سائق خاص من [MoroccoForYou Cars](/rent-a-car/casablanca-airport/) أو بسيارة مستأجرة. الطريق السيار مراكش-فاس سهل؛ فاس-شفشاون يصعد في الريف ويحتاج تركيزًا أكبر.',
      ],
    },
    {
      heading: 'الخيار 4: الطيران إلى فاس ثم القيادة',
      paragraphs: [
        'الخطوط الملكية المغربية وAir Arabia تشغّلان مراكش → فاس يوميًا (ساعة، 320-560 ريالًا). من مطار فاس (FEZ)، نقل خاص 4 ساعات إلى شفشاون (320-400 ريالًا). الإجمالي أقل من 1000 ريال بالحجز المسبق.',
        'مناسب لمن يضيق وقته ولا يريد طريق مراكش-فاس لكنه يريد شفشاون في برنامجه. غير مناسب إن أردت رؤية الممر الإمبراطوري (الدار البيضاء / الرباط) في الطريق — الطيران يقطع ذلك.',
      ],
    },
    {
      heading: 'أفضل توقيت',
      paragraphs: [
        'للحافلة الليلية: ادفع لرحلة أحد-ثلاثاء إن أمكن. الجمعة-السبت أكثر ازدحامًا وضوضاء. للقطار، انطلاق الساعة 8 من مراكش يوصلك إلى طنجة 16 وشفشاون 19، توقيت مثالي.',
        'تجنّب قيادة فاس-شفشاون في شتاء ممطر (دجنبر-فبراير) — طرق الريف قد تفيض. الصيف (يوليوز-غشت) جيد لكن الحافلة الليلية حارة حتى منتصف الليل.',
      ],
    },
    {
      heading: 'الأمتعة والتوقيت',
      paragraphs: [
        'في الحافلة الليلية، احفظ جواز السفر والثمين في حقيبة الظهر داخل المقصورة. الحقيبة اليدوية أعلى المقعد، الكبيرة أسفل. احمل سترة خفيفة — التكييف قوي. في القطار، الحقائب الكبيرة على الرفوف بطرف العربة (مرئية من معظم المقاعد).',
        'للسيارات الخاصة والإيجار، املأ الخزان في مراكش قبل المغادرة (محطات الطريق السيار أغلى) ووقفة في برشيد أو الرباط للغداء.',
      ],
    },
    {
      heading: 'فور الوصول إلى شفشاون',
      paragraphs: [
        'مدينة شفشاون العتيقة بلا سيارات. الحافلة تنزلك في المحطة المركزية، على بعد 10 دقائق مشيًا من باب العين (الباب الرئيس). تاكسي صغير من المحطة إلى الباب 15 درهم. سيرسل الرياض حمّالًا إلى الباب يدلّك عبر الأزقة الزرقاء.',
        'خصّص ليلة كاملة على الأقل — الأفواج اليومية تصل 11 وتغادر 17، والسحر يبدأ مع الغسق عندما تخلو الأزقة.',
      ],
    },
  ],
  faqs: [
    {
      question: 'كم تستغرق الرحلة من مراكش إلى شفشاون؟',
      answer:
        'حوالي 11 ساعة بحافلة CTM المباشرة الليلية، أو 8-9 ساعات بالقطار + حافلة نهارًا، أو يومين بالتقسيم مع ليلة في فاس (ما نوصي به).',
    },
    {
      question: 'هل توجد حافلة مباشرة من مراكش إلى شفشاون؟',
      answer:
        'نعم — CTM لها رحلة مباشرة ليلية، تنطلق نحو 19 وتصل شفشاون 6-7 صباحًا. التذاكر 230-280 درهم (70-90 ريالًا). الحجز عبر ctm.ma.',
    },
    {
      question: 'هل يوجد قطار من مراكش إلى شفشاون؟',
      answer:
        'لا — شفشاون بلا محطة قطار. يمكن أخذ القطار إلى طنجة والاستئناف بالحافلة (2:30) أو إلى الدار البيضاء/فاس والتحويل. الإجمالي 8 ساعات على الأقل.',
    },
    {
      question: 'هل أطير من مراكش إلى شفشاون؟',
      answer:
        'لا توجد رحلات مباشرة — لا مطار في شفشاون. يمكنك الطيران مراكش → فاس (ساعة) ثم القيادة 4 ساعات. الإجمالي نحو 7 ساعات مع وقت المطار.',
    },
    {
      question: 'ما أرخص طريقة من مراكش إلى شفشاون؟',
      answer:
        'حافلة CTM الليلية المباشرة بـ 230-280 درهم (70-90 ريالًا) هي الأرخص. Supratours تشغّل أحيانًا بدائل. التوقّف على الطريق ليس مستحسنًا.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل الحافلة الليلية آمنة في المغرب؟', answer: 'نعم — CTM المشغّل الوطني بحافلات حديثة آمنة وسجل قوي. المسافرات منفردات يستعملنها بكثرة.' },
    { question: 'هل أستطيع استئجار سيارة للرحلة؟', answer: 'نعم — انظر [دليلنا لإيجار السيارة من مطار الدار البيضاء](/rent-a-car/casablanca-airport/). معظم العقود تتيح القيادة في كل المغرب والتسليم في فاس أو طنجة برسم.' },
    { question: 'ما أفضل محطة بين مراكش وشفشاون؟', answer: 'فاس — أجمل مدينة قروسطية في المغرب. خصّص لها ليلتين على الأقل.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'tangier'],
  relatedPosts: ['nasaeh-li-ziyarat-al-maghrib-li-awwal-marra'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);
