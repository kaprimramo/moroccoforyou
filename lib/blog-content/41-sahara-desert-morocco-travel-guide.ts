import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'sahara-desert-morocco-travel-guide';
const SLUG_FR = 'guide-voyage-sahara-maroc';
const SLUG_AR = 'dalil-safar-sahara-maghrib';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(4869960);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Sahara Desert Morocco Travel Guide 2026 — Merzouga, Erg Chebbi, Zagora, Prices & Safety',
  metaDescription: 'Complete Sahara Desert Morocco guide 2026: Merzouga vs Zagora, real prices, safety, best time to visit, distances from every Moroccan city, camel treks, desert camps, and how to get there by car or tour.',
  title: 'Sahara Desert Morocco Travel Guide 2026: Everything You Need to Know Before You Go',
  description: 'The complete Sahara guide written by a Casablanca-based team that sends travelers to Merzouga and Zagora year-round. Real 2026 prices, honest safety answer, Merzouga vs Zagora, distances from every major Moroccan city, camel trek tips, desert camp guide, and how to plan the trip whether you drive yourself or book a tour.',
  keyword: 'sahara desert morocco travel guide',
  coverImage: COVER,
  coverAlt: 'Sahara Desert Morocco travel guide 2026 — golden dunes of Erg Chebbi near Merzouga at sunset',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 17,
  intro: 'The Sahara is the reason many travelers come to Morocco in the first place — and it is also the part of the trip most people get wrong. Which dunes: Merzouga or Zagora? Do you need a 4x4? Is it safe, especially traveling solo or as a woman? How much should it actually cost? Our Casablanca-based team has sent hundreds of clients into the Sahara over the years, whether self-driving from Casablanca Airport or connecting them with trusted desert camps. This guide answers every question honestly, with real 2026 prices and distances from every major Moroccan city — no vague "book with us, it will be amazing" filler.',
  sections: [
    {
      heading: 'Merzouga vs Zagora — Which Sahara Should You Visit?',
      paragraphs: [
        'Morocco does not have one "Sahara" — it has two very different desert experiences, and choosing the right one for your trip matters more than almost any other decision in your itinerary.',
        'Merzouga sits at the edge of Erg Chebbi, Morocco\'s tallest and most photogenic dune field — golden dunes reaching 150 metres, with the famous Lala Lallia star dune standing about 100m tall and 700m wide. This is the "postcard Sahara" most travelers picture. Zagora sits near Erg Chigaga, a larger but lower and more remote dune field reached via M\'Hamid, generally requiring a 4x4 for the final stretch.',
      ],
      table: {
        caption: 'Merzouga vs Zagora — honest comparison 2026',
        headers: ['Factor', 'Merzouga (Erg Chebbi)', 'Zagora (Erg Chigaga)'],
        rows: [
          ['Dune height', 'Up to 150m — Morocco\'s tallest', '40–100m — lower, more spread out'],
          ['Distance from Marrakech', '~560 km, 9–10 hours', '~370 km (to M\'Hamid), 8–9 hours'],
          ['Distance from Fes', '~460 km, 7–8 hours', 'Not practical — Merzouga is the Fes route'],
          ['Access', 'Paved road all the way to camp edge', 'Requires 4x4 for final stretch to Erg Chigaga'],
          ['Crowds', 'Busier — more camps, more tourists', 'Quieter, more remote, fewer other travelers'],
          ['Best for', 'First Sahara trip, photography, convenience', 'Travelers wanting solitude and a wilder experience'],
          ['Typical route', 'Fes or Marrakech → Ouarzazate → Merzouga', 'Marrakech → Ouarzazate → Zagora → M\'Hamid'],
        ],
      },
      callout: {
        label: '🏜️ Our Honest Recommendation',
        body: 'For a first Sahara trip: Merzouga. The dunes are taller, more accessible, and the road infrastructure is better. For a second Morocco trip or travelers who specifically want fewer crowds and a 4x4 adventure: Zagora/Erg Chigaga. Most Fes-based itineraries naturally lead to Merzouga; most Marrakech-based ones can do either.',
      },
    },
    {
      heading: 'Distances and Driving Times to the Sahara — From Every Major City',
      paragraphs: [
        'This is the table most Sahara guides get wrong or oversimplify. Here are the real 2026 driving distances and times from Morocco\'s main cities to Merzouga, the most common Sahara gateway.',
      ],
      table: {
        caption: 'Distance to Merzouga (Sahara/Erg Chebbi) from major Moroccan cities 2026',
        headers: ['From', 'Distance', 'Driving time', 'Typical route'],
        rows: [
          ['Casablanca (CMN Airport)', '~560 km', '8h–9h (2-day trip recommended)', 'Via Marrakech or via Fes — CMN → Marrakech → Ouarzazate → Merzouga'],
          ['Marrakech', '~560 km', '9h–10h', 'Marrakech → Ouarzazate (4h) → Erfoud/Rissani → Merzouga (5h)'],
          ['Fes', '~460 km', '7h–8h', 'Fes → Midelt → Errachidia → Merzouga — via Ziz Gorge (spectacular)'],
          ['Rabat', '~530 km', '8h–9h', 'Rabat → Fes → Midelt → Merzouga'],
          ['Ouarzazate', '~360 km', '5h–5h30', 'Ouarzazate → Boumalne Dades → Tinghir → Erfoud → Merzouga'],
          ['Zagora (Erg Chigaga)', '~370 km from Marrakech', '8h–9h', 'Marrakech → Ouarzazate → Agdz → Zagora → M\'Hamid (4x4 needed final leg)'],
          ['Chefchaouen', '~750 km', '11h+ (split into 2–3 days)', 'Chefchaouen → Fes → Midelt → Merzouga — not a direct route'],
        ],
      },
      callout: {
        label: '⚠️ The One Mistake Everyone Makes',
        body: 'Doing the Sahara as a single long drive in one day is technically possible but genuinely miserable — 8-10 hours of driving through mountain passes leaves no energy to enjoy the dunes. Split it: Day 1 drive to Ouarzazate or Dades Gorge (breaking the journey at Aït Ben Haddou), Day 2 continue to Merzouga arriving in time for the sunset camel trek. This is what every experienced local operator recommends, and what we tell every client.',
      },
    },
    {
      heading: 'Best Time to Visit the Sahara — Month by Month',
      paragraphs: [
        'The Sahara has one of the most extreme climates in Morocco — summer daytime temperatures regularly exceed 45°C, while winter nights can drop close to 0°C. Timing your trip correctly is not optional.',
      ],
      table: {
        caption: 'Best time to visit the Sahara Desert Morocco — month by month 2026',
        headers: ['Period', 'Day temp', 'Night temp', 'Crowds', 'Verdict'],
        rows: [
          ['October–April', '20–28°C', '0–15°C (cold at night)', 'High (peak season)', '⭐ Best overall window — comfortable days, clear skies'],
          ['December–February', '18–22°C', 'Near 0°C, sometimes below', 'Medium', 'Cold nights but camps provide heavy blankets — clearest stargazing'],
          ['March–May', '25–32°C', '10–18°C', 'High', '⭐ Excellent — warm days without extreme heat'],
          ['June–August', '40–48°C', '22–28°C', 'Low', 'Genuinely dangerous midday heat — activities shift to dawn/dusk only'],
          ['September', '30–36°C', '15–20°C', 'Medium, rising', 'Good transition month — check forecasts, still hot'],
        ],
      },
      callout: {
        label: '🌡️ Temperature Reality Check',
        body: 'Even in comfortable months like May or September, expect a 15–20°C temperature swing between day and night. Layered clothing is essential year-round — a t-shirt at 2pm and a fleece at 2am is completely normal, even in July. Camps provide blankets, but bring your own layers.',
      },
    },
    {
      heading: 'Is the Sahara Desert Safe? The Honest 2026 Answer',
      paragraphs: [
        'Yes — the Sahara region around Merzouga and Zagora is genuinely safe for tourists. Violent crime against travelers in the desert region is extremely rare. The real risks are environmental (heat, dehydration, sun exposure) and a small number of avoidable booking scams — not personal safety threats.',
        'For solo female travelers specifically: the Sahara consistently ranks as one of the more comfortable parts of a Morocco trip. Desert camps are managed environments with staff whose job is guest wellbeing, tents are private, and the transition from town noise to desert silence is often described as the calmest part of the whole trip. The main practical concern reported is not danger but the transfer moment from village to camp at dusk — mention any nervousness to your guide, who will position you comfortably within the group.',
      ],
      table: {
        caption: 'Sahara Desert safety guide — real risks and how to manage them 2026',
        headers: ['Risk', 'Reality', 'How to manage it'],
        rows: [
          ['Heat/dehydration', 'The genuine #1 risk — 40°C+ in summer', 'Carry 2+ litres of water, avoid midday sun June–August, wear a wide hat'],
          ['Fake tour operators/scams', 'Bait-and-switch camps, surprise fees', 'Book with operators who own their camels/camps directly — avoid street touts in medinas'],
          ['Solo female harassment', 'Low in desert camps, some unwanted attention in towns en route', 'Book through a licensed operator; dress modestly in towns; camps are family-run and welcoming'],
          ['Medical access', 'Merzouga has basic clinics only', 'Serious issues require transfer to Erfoud or Errachidia — travel insurance with medical evacuation is worth it'],
          ['Getting lost/disoriented in dunes', 'Real risk if wandering alone at night', 'Never leave the marked camp area alone after dark without a guide'],
          ['Vehicle breakdown on remote roads', 'Low but real, especially Zagora/Erg Chigaga route', 'Rent a well-maintained car, keep fuel above half tank, carry extra water'],
        ],
      },
    },
    {
      heading: 'Sahara Tour Prices — What You Should Actually Pay in 2026',
      paragraphs: [
        'Sahara tour pricing varies enormously depending on group size, camp quality, and route. Here is an honest 2026 price breakdown so you know what is fair.',
      ],
      table: {
        caption: 'Sahara Desert Morocco tour prices 2026 — real ranges',
        headers: ['Type', 'Price range', 'What\'s included', 'Notes'],
        rows: [
          ['Shared group 3-day tour (Marrakech↔Merzouga)', '€100–180/person', 'Transport, driver-guide, standard camp, some meals', 'Most economical — shared minivan with other travelers'],
          ['Private 3–4 day tour', '€350–800/car', 'Private 4x4, driver-guide, flexible stops', 'Better for families/groups, more control over pace'],
          ['Luxury desert camp', '€180–250/night', 'En-suite tent, private bathroom, upgraded dining', 'Worth it for a special-occasion desert night'],
          ['Standard desert camp', '€30–65/night', 'Shared or private tent, basic bathroom, dinner + breakfast', 'Perfectly comfortable for most travelers'],
          ['Overnight camel trek only', 'From €65', 'Camel to camp, dinner, sunrise trek back', 'Add-on if you already have your own transport'],
          ['Camel ride (sunset, no overnight)', 'Included in most tours', 'Usually bundled into the desert camp package', 'Rarely sold standalone at Merzouga'],
          ['2-day/1-night budget option', '€45–90/person', 'Faster route, one night in camp, less scenic stops', 'For travelers with very limited time'],
        ],
      },
      callout: {
        label: '💰 Daily Budget Guide',
        body: 'Budget travelers: €85–120/day covering transport, accommodation, meals and desert activities. Mid-range: €140–200/day. Luxury: €250–400+/day. These figures include the whole multi-day trip, not just the desert night.',
      },
    },
    {
      heading: 'Self-Drive to the Sahara — Do You Need a 4x4?',
      paragraphs: [
        'The route to Merzouga is fully paved — you do not need a 4x4 to reach the edge of Erg Chebbi in an economy car. However, the mountain sections (Tichka Pass toward Ouarzazate, and the Dadès/Todra Gorges detour) are demanding on a small engine, and if your route includes Zagora/Erg Chigaga, the final stretch to the dunes genuinely requires a 4x4.',
        'For a self-drive Sahara trip picked up at Casablanca Airport (CMN): an economy car is sufficient for the Merzouga route via the direct road, but we strongly recommend the Dacia Duster 4x4 for anyone planning to include the Tichka Pass, Dadès Gorge, Todra Gorge, or any Zagora/Erg Chigaga extension. The extra 100 MAD/day is a small price for genuine peace of mind on mountain roads and sandy approaches.',
      ],
      table: {
        caption: 'Which car for your Sahara route — 2026',
        headers: ['Your route includes...', 'Car needed', 'Price at CMN'],
        rows: [
          ['Direct paved route to Merzouga (via Errachidia)', 'Economy car sufficient', 'MAD 250/day (€23)'],
          ['Tichka Pass (Marrakech route)', 'Dacia Duster 4x4 recommended', 'MAD 350/day (€32)'],
          ['Dadès or Todra Gorges detour', 'Dacia Duster 4x4', 'MAD 350/day (€32)'],
          ['Zagora / Erg Chigaga (M\'Hamid final stretch)', 'Dacia Duster 4x4 required', 'MAD 350/day (€32)'],
          ['Merzouga dune-edge approach (sandy)', 'Economy fine to village; 4x4 for camp transfer (usually arranged by camp)', 'MAD 250–350/day'],
        ],
      },
      callout: {
        label: '🚗 Rent Your Sahara Car at CMN',
        body: 'Pick up at Casablanca Airport with free meet & greet in arrivals — economy from MAD 250/day (€23), Dacia Duster 4x4 from MAD 350/day (€32), unlimited mileage. Send us your Sahara itinerary on WhatsApp and we\'ll confirm the right car for your exact route, free of charge. +212 634 276 534',
      },
    },
    {
      heading: 'The Camel Trek — What to Actually Expect',
      paragraphs: [
        'The sunset camel trek into the dunes is the single most iconic Sahara experience and included in nearly every Merzouga desert camp package. Here is what genuinely happens and how to prepare.',
        'You mount in the late afternoon at the edge of the dunes. The camel used in Morocco is a dromedary (one hump), not a Bactrian camel. Mounting can feel abrupt — the camel rises back legs first, so lean back and hold the saddle handle. The trek to camp typically takes 45 minutes to 1.5 hours, ending as the sun sets over Erg Chebbi in orange and pink light. Sunrise treks back the next morning follow the same route in reverse.',
      ],
      callout: {
        label: '🐫 Camel Trek Practical Tips',
        body: 'Wear long trousers to prevent chafing against the saddle. Closed shoes, not sandals — sand gets extremely hot. Bring a scarf (chèche) to protect against wind-blown sand — most camps provide one. 1–2 hours is comfortable for first-timers; longer treks exist for experienced riders. Children aged 4+ can ride with an adult; 8+ can typically ride solo with supervision. Don\'t stand directly behind a camel and keep food sealed away from curious animals.',
      },
    },
    {
      heading: 'Desert Camps — What Kind Should You Book?',
      paragraphs: [
        'Desert camps range from basic shared tents to genuinely luxurious accommodations with en-suite bathrooms and hotel-level service. The gap between "luxury camp" marketing photos and the reality can be significant with less reputable operators — this is the single most common source of disappointment in Sahara trip reviews.',
      ],
      table: {
        caption: 'Sahara desert camp types — what to expect 2026',
        headers: ['Camp type', 'Price/night', 'What to expect', 'Best for'],
        rows: [
          ['Budget/standard camp', '€30–65', 'Shared or basic private tent, shared bathroom facilities, simple dinner and breakfast', 'Most travelers — perfectly comfortable and authentic'],
          ['Mid-range camp', '€65–130', 'Private tent, better bedding, sometimes en-suite, upgraded meals', 'Couples wanting more comfort without luxury pricing'],
          ['Luxury camp', '€180–250+', 'En-suite tent with private bathroom, hot showers, restaurant-quality dining, sometimes a pool', 'Special occasions, honeymoons, travelers prioritizing comfort'],
        ],
      },
      callout: {
        label: '⚠️ How to Avoid the Camp Scam',
        body: 'Book with an operator based directly in Merzouga or Zagora who owns their own camels and camps — not a "middleman" agency in Marrakech that subcontracts to unknown local partners. Ask for recent photos and reviews specific to the camp you\'ll actually stay at, not generic marketing images. If a deal seems dramatically cheaper than everyone else\'s for the same "luxury" description, that gap usually shows up as a downgrade on arrival.',
      },
    },
    {
      heading: 'What to Pack for the Sahara',
      paragraphs: [
        'The desert punishes unprepared packing more than almost anywhere else in Morocco — extreme heat by day, cold by night, sun, and wind-blown sand all need planning for.',
      ],
      list: [
        'Layered clothing — t-shirt/shorts for daytime, warm fleece or jacket for night, even in summer.',
        'Wide-brimmed hat and high-SPF sunscreen — the Sahara sun is significantly stronger than coastal Morocco.',
        'A large cotton scarf (chèche) for wind-blown sand protection — most camps provide one but bringing your own is more comfortable.',
        'Closed-toe shoes for the camel trek and camp — sand gets very hot and occasional insects are best avoided barefoot.',
        'Sunglasses — glare off the dunes is intense, especially midday.',
        'A headlamp or torch — camps often have limited lighting after dark.',
        'A portable power bank — most camps run on solar and outlets can be limited.',
        'Reusable water bottle — carry 2+ litres per person per day, more in summer.',
        'Basic first aid kit including rehydration salts — useful for heat-related discomfort.',
        'A light sleeping layer even in summer camps — desert nights cool rapidly after sunset.',
      ],
    },
    {
      heading: 'Sahara Cities and Towns — A Quick Guide',
      paragraphs: [
        'The Sahara route passes through several towns that are destinations in their own right, not just fuel stops.',
      ],
      table: {
        caption: 'Key towns on the way to the Sahara — what to know 2026',
        headers: ['Town', 'Distance from Marrakech', 'Why it matters', 'Worth stopping?'],
        rows: [
          ['Aït Ben Haddou', '190 km, ~3h', 'UNESCO kasbah, filmed in Gladiator and Game of Thrones', 'Yes — essential stop, 1–2 hours'],
          ['Ouarzazate', '200 km, ~3h15', '"Hollywood of Africa" — Atlas Studios, Taourirt Kasbah, good overnight stop', 'Yes — ideal overnight break point'],
          ['Dadès Gorge', '280 km, ~4h30', 'Dramatic rock valley, "Road of 1000 Kasbahs" begins here', 'Yes if time allows — spectacular scenery'],
          ['Todra Gorge', '330 km, ~5h', 'Narrow canyon with 300m rock walls — popular rock climbing spot', 'Yes if time allows — combine with Dadès'],
          ['Erfoud', '480 km, ~7h30', 'Fossil trade town — final major town before Merzouga', 'Brief stop for fuel/supplies'],
          ['Rissani', '520 km, ~8h', 'Traditional souk town, closest to Merzouga', 'Brief stop — interesting Monday/Thursday market'],
          ['Zagora', '370 km, ~6h', 'Gateway to Erg Chigaga, famous "Timbuktu 52 days" sign', 'Yes if heading to Erg Chigaga route'],
        ],
      },
    },
    {
      heading: 'World Cup 2030 and the Sahara Route',
      paragraphs: [
        'While the Sahara itself is not a host city, the route to Merzouga passes through or near several 2030 World Cup host cities — Marrakech and, further afield via connecting roads, Agadir. Travelers combining a World Cup match with a Sahara extension should plan for the 8–10 hour drive as a genuine 2-day addition to their trip, not a rushed side trip.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is Merzouga or Zagora better for a Sahara trip?',
      answer: 'For a first Sahara trip, Merzouga is generally better — the Erg Chebbi dunes are taller (up to 150m), the road is fully paved, and there is more camp infrastructure. Zagora/Erg Chigaga is quieter and more remote but requires a 4x4 for the final stretch and is further from Fes-based itineraries. Choose Merzouga for accessibility and photography, Zagora for solitude and adventure.',
    },
    {
      question: 'How far is the Sahara Desert from Marrakech?',
      answer: 'Merzouga (Erg Chebbi) is approximately 560 km from Marrakech — 9 to 10 hours of driving, typically split into a 2-day journey with an overnight stop in Ouarzazate or the Dadès Gorge. Doing it in one day is possible but genuinely exhausting and not recommended by any experienced local operator.',
    },
    {
      question: 'Is the Sahara Desert in Morocco safe to visit?',
      answer: 'Yes — the Sahara region around Merzouga and Zagora is safe for tourists, including solo female travelers. Violent crime is extremely rare. The genuine risks are environmental (extreme heat, dehydration) and a small number of avoidable booking scams involving misrepresented camps. Booking with a reputable, locally-based operator eliminates most of these concerns.',
    },
    {
      question: 'Do I need a 4x4 to visit the Sahara?',
      answer: 'Not for the direct paved route to Merzouga — an economy car is sufficient. A 4x4 (like the Dacia Duster) is strongly recommended if your route includes the Tichka Pass, Dadès or Todra Gorges, or any extension to Zagora/Erg Chigaga, where the final approach to the dunes is unpaved.',
    },
    {
      question: 'What is the best time of year to visit the Sahara?',
      answer: 'October through April is the best overall window, with comfortable daytime temperatures (18–28°C) and clear night skies for stargazing. March–May is excellent for warm days without extreme heat. Avoid June–August unless you can commit to shifting all activities to dawn and dusk — daytime temperatures regularly exceed 40°C.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'How much does a Sahara Desert tour cost from Marrakech?', answer: 'A shared 3-day group tour from Marrakech to Merzouga costs €100–180 per person, including transport, driver-guide, standard desert camp, and some meals. Private tours range €350–800 per car depending on group size and duration. Luxury desert camp upgrades add €150–250 per night.' },
    { question: 'Can I drive myself to the Sahara Desert in Morocco?', answer: 'Yes — self-driving to Merzouga is common and the roads are fully paved from major cities. Pick up a rental car at Casablanca Airport (CMN), split the journey over 2 days with an overnight stop at Ouarzazate or the Dadès Gorge, and arrange your desert camp and camel trek on arrival or in advance. An economy car is sufficient for the direct route; a 4x4 is recommended for mountain pass or Zagora extensions.' },
    { question: 'What is the closest Sahara desert to Marrakech?', answer: 'Zagora and the Erg Chigaga dunes via M\'Hamid are the closest true Sahara sand dune experience to Marrakech, at approximately 370 km (8–9 hours). Merzouga and Erg Chebbi, Morocco\'s most famous and tallest dunes, are further at approximately 560 km (9–10 hours) but offer more accessible infrastructure and taller, more photogenic dunes.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'casablanca'],
  relatedPosts: ['best-time-to-visit-sahara-morocco', 'marrakech-travel-guide', 'fes-travel-guide', 'driving-from-marrakech-to-fes-self-drive', 'casablanca-travel-guide', 'casablanca-airport-guide-cmn'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Sahara Maroc 2026 — Merzouga, Erg Chebbi, Zagora, Prix et Sécurité',
  metaDescription: 'Guide complet du Sahara marocain 2026 : Merzouga vs Zagora, prix réels, sécurité, meilleure période, distances depuis toutes les villes du Maroc, treks à dos de chameau, camps du désert.',
  title: 'Guide Voyage Sahara Maroc 2026 : Tout Ce Qu\'il Faut Savoir Avant de Partir',
  description: 'Le guide Sahara complet rédigé par une équipe basée à Casablanca qui envoie des voyageurs à Merzouga et Zagora toute l\'année. Prix réels 2026, réponse honnête sur la sécurité, Merzouga vs Zagora, distances depuis toutes les grandes villes marocaines, conseils trek à dos de chameau, guide des camps du désert.',
  keyword: 'guide voyage sahara maroc',
  coverImage: COVER,
  coverAlt: 'Guide voyage Sahara Maroc 2026 — dunes dorées de l\'Erg Chebbi près de Merzouga au coucher du soleil',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 17,
  intro: 'Le Sahara est souvent la raison première pour laquelle les voyageurs viennent au Maroc — et c\'est aussi la partie du voyage la plus souvent mal préparée. Merzouga ou Zagora ? Faut-il un 4x4 ? Est-ce sûr, en solo ou en tant que femme ? Combien cela devrait-il vraiment coûter ? Notre équipe casablancaise a envoyé des centaines de clients dans le Sahara au fil des années. Ce guide répond honnêtement à chaque question, avec des prix réels 2026 et des distances depuis toutes les grandes villes marocaines.',
  sections: [
    {
      heading: 'Merzouga vs Zagora — Quel Sahara Visiter ?',
      paragraphs: [
        'Le Maroc n\'a pas un seul "Sahara" — il a deux expériences désertiques très différentes, et choisir la bonne compte plus que presque toute autre décision de votre itinéraire.',
        'Merzouga se situe au bord de l\'Erg Chebbi, le champ de dunes le plus haut et le plus photogénique du Maroc — dunes dorées atteignant 150 mètres. Zagora se situe près de l\'Erg Chigaga, un champ de dunes plus vaste mais plus bas, atteint via M\'Hamid, nécessitant généralement un 4x4 pour le dernier tronçon.',
      ],
      table: {
        caption: 'Merzouga vs Zagora — comparaison honnête 2026',
        headers: ['Facteur', 'Merzouga (Erg Chebbi)', 'Zagora (Erg Chigaga)'],
        rows: [
          ['Hauteur des dunes', 'Jusqu\'à 150m — les plus hautes du Maroc', '40–100m — plus basses, plus étalées'],
          ['Distance depuis Marrakech', '~560 km, 9–10 heures', '~370 km (jusqu\'à M\'Hamid), 8–9 heures'],
          ['Distance depuis Fès', '~460 km, 7–8 heures', 'Peu pratique — Merzouga est l\'itinéraire depuis Fès'],
          ['Accès', 'Route goudronnée jusqu\'au bord du camp', '4x4 nécessaire pour le dernier tronçon vers l\'Erg Chigaga'],
          ['Affluence', 'Plus fréquenté — plus de camps, plus de touristes', 'Plus calme, plus reculé'],
          ['Idéal pour', 'Premier voyage Sahara, photographie, praticité', 'Voyageurs cherchant solitude et aventure 4x4'],
        ],
      },
      callout: {
        label: '🏜️ Notre Recommandation Honnête',
        body: 'Pour un premier voyage au Sahara : Merzouga. Les dunes sont plus hautes, plus accessibles, et les infrastructures routières meilleures. Pour un second voyage au Maroc ou pour les voyageurs cherchant spécifiquement moins de foule : Zagora/Erg Chigaga.',
      },
    },
    {
      heading: 'Distances et Temps de Trajet vers le Sahara — Depuis Chaque Grande Ville',
      paragraphs: [
        'Voici les vraies distances et temps de trajet 2026 depuis les principales villes du Maroc vers Merzouga, la porte d\'entrée la plus courante du Sahara.',
      ],
      table: {
        caption: 'Distance vers Merzouga (Sahara/Erg Chebbi) depuis les grandes villes marocaines 2026',
        headers: ['Depuis', 'Distance', 'Temps de conduite', 'Itinéraire typique'],
        rows: [
          ['Casablanca (Aéroport CMN)', '~560 km', '8h–9h (voyage 2 jours recommandé)', 'Via Marrakech ou via Fès — CMN → Marrakech → Ouarzazate → Merzouga'],
          ['Marrakech', '~560 km', '9h–10h', 'Marrakech → Ouarzazate (4h) → Erfoud/Rissani → Merzouga (5h)'],
          ['Fès', '~460 km', '7h–8h', 'Fès → Midelt → Errachidia → Merzouga — via les gorges du Ziz'],
          ['Rabat', '~530 km', '8h–9h', 'Rabat → Fès → Midelt → Merzouga'],
          ['Ouarzazate', '~360 km', '5h–5h30', 'Ouarzazate → Boumalne Dades → Tinghir → Erfoud → Merzouga'],
          ['Zagora (Erg Chigaga)', '~370 km depuis Marrakech', '8h–9h', 'Marrakech → Ouarzazate → Agdz → Zagora → M\'Hamid (4x4 nécessaire)'],
          ['Chefchaouen', '~750 km', '11h+ (à répartir sur 2–3 jours)', 'Chefchaouen → Fès → Midelt → Merzouga'],
        ],
      },
      callout: {
        label: '⚠️ L\'Erreur que Tout le Monde Fait',
        body: 'Faire le trajet Sahara en une seule longue journée est techniquement possible mais réellement épuisant. Divisez-le : Jour 1 conduite jusqu\'à Ouarzazate ou les gorges du Dadès (avec pause à Aït Ben Haddou), Jour 2 continuez vers Merzouga en arrivant à temps pour le trek en chameau au coucher du soleil.',
      },
    },
    {
      heading: 'Meilleure Période pour Visiter le Sahara — Mois par Mois',
      paragraphs: [
        'Le Sahara a l\'un des climats les plus extrêmes du Maroc — les températures diurnes estivales dépassent régulièrement 45°C, tandis que les nuits d\'hiver peuvent approcher 0°C.',
      ],
      table: {
        caption: 'Meilleure période pour visiter le Sahara Maroc — mois par mois 2026',
        headers: ['Période', 'Temp. jour', 'Temp. nuit', 'Affluence', 'Verdict'],
        rows: [
          ['Octobre–Avril', '20–28°C', '0–15°C (froid la nuit)', 'Élevée (haute saison)', '⭐ Meilleure fenêtre globale'],
          ['Décembre–Février', '18–22°C', 'Proche de 0°C, parfois moins', 'Moyenne', 'Nuits froides mais camps bien équipés — meilleure observation des étoiles'],
          ['Mars–Mai', '25–32°C', '10–18°C', 'Élevée', '⭐ Excellent — journées chaudes sans chaleur extrême'],
          ['Juin–Août', '40–48°C', '22–28°C', 'Faible', 'Chaleur de midi réellement dangereuse — activités décalées à l\'aube/crépuscule'],
          ['Septembre', '30–36°C', '15–20°C', 'Moyenne, croissante', 'Bon mois de transition — encore chaud'],
        ],
      },
      callout: {
        label: '🌡️ Vérité sur les Températures',
        body: 'Même en mai ou septembre, attendez-vous à un écart de 15–20°C entre le jour et la nuit. Les vêtements en couches sont essentiels toute l\'année.',
      },
    },
    {
      heading: 'Le Sahara Est-il Sûr ? La Réponse Honnête 2026',
      paragraphs: [
        'Oui — la région du Sahara autour de Merzouga et Zagora est réellement sûre pour les touristes. La criminalité violente contre les voyageurs y est extrêmement rare. Les vrais risques sont environnementaux (chaleur, déshydratation) et un petit nombre d\'arnaques de réservation évitables.',
        'Pour les voyageuses seules en particulier : le Sahara se classe régulièrement parmi les parties les plus confortables d\'un voyage au Maroc. Les camps du désert sont des environnements gérés avec un personnel dédié au bien-être des invités.',
      ],
      table: {
        caption: 'Guide de sécurité Sahara — vrais risques et gestion 2026',
        headers: ['Risque', 'Réalité', 'Comment le gérer'],
        rows: [
          ['Chaleur/déshydratation', 'Le vrai risque n°1 — 40°C+ en été', 'Portez 2L+ d\'eau, évitez le soleil de midi juin–août'],
          ['Faux opérateurs/arnaques', 'Camps trompeurs, frais surprise', 'Réservez avec des opérateurs possédant directement leurs chameaux/camps'],
          ['Harcèlement femmes seules', 'Faible dans les camps, un peu dans les villes', 'Réservez via un opérateur licencié ; camps familiaux accueillants'],
          ['Accès médical', 'Merzouga a seulement des cliniques de base', 'Assurance voyage avec évacuation médicale recommandée'],
          ['Se perdre dans les dunes', 'Risque réel seul la nuit', 'Ne quittez jamais le camp seul la nuit sans guide'],
        ],
      },
    },
    {
      heading: 'Prix des Tours Sahara — Ce Que Vous Devriez Vraiment Payer en 2026',
      paragraphs: ['Voici une répartition honnête des prix 2026 pour savoir ce qui est juste.'],
      table: {
        caption: 'Prix des tours Sahara Maroc 2026 — fourchettes réelles',
        headers: ['Type', 'Fourchette prix', 'Inclus', 'Notes'],
        rows: [
          ['Tour groupe partagé 3 jours (Marrakech↔Merzouga)', '100–180€/personne', 'Transport, chauffeur-guide, camp standard, quelques repas', 'Le plus économique'],
          ['Tour privé 3–4 jours', '350–800€/voiture', '4x4 privé, chauffeur-guide, arrêts flexibles', 'Meilleur pour familles/groupes'],
          ['Camp de luxe', '180–250€/nuit', 'Tente en-suite, salle de bain privée, restauration améliorée', 'Vaut le coup pour une nuit spéciale'],
          ['Camp standard', '30–65€/nuit', 'Tente partagée ou privée, salle de bain basique, dîner + petit-déjeuner', 'Parfaitement confortable'],
          ['Trek chameau nuit seule', 'Dès 65€', 'Chameau jusqu\'au camp, dîner, trek retour lever du soleil', 'Complément si transport déjà organisé'],
        ],
      },
      callout: {
        label: '💰 Guide Budget Journalier',
        body: 'Voyageurs budget : 85–120€/jour couvrant transport, hébergement, repas et activités désert. Milieu de gamme : 140–200€/jour. Luxe : 250–400€+/jour.',
      },
    },
    {
      heading: 'Autoconduite vers le Sahara — Faut-il un 4x4 ?',
      paragraphs: [
        'La route vers Merzouga est entièrement goudronnée — pas besoin de 4x4 pour atteindre le bord de l\'Erg Chebbi en voiture économique. Cependant, les sections montagneuses (col du Tichka, détour Dadès/Todra) sont exigeantes, et si votre itinéraire inclut Zagora/Erg Chigaga, le dernier tronçon nécessite réellement un 4x4.',
      ],
      table: {
        caption: 'Quelle voiture pour votre itinéraire Sahara — 2026',
        headers: ['Votre itinéraire inclut...', 'Voiture nécessaire', 'Prix à CMN'],
        rows: [
          ['Route directe goudronnée vers Merzouga', 'Économique suffisante', 'MAD 250/jour (23€)'],
          ['Col du Tichka (itinéraire Marrakech)', 'Dacia Duster 4x4 recommandé', 'MAD 350/jour (32€)'],
          ['Détour Gorges Dadès ou Todra', 'Dacia Duster 4x4', 'MAD 350/jour (32€)'],
          ['Zagora / Erg Chigaga (M\'Hamid final)', 'Dacia Duster 4x4 requis', 'MAD 350/jour (32€)'],
        ],
      },
      callout: {
        label: '🚗 Louez Votre Voiture Sahara à CMN',
        body: 'Prise en charge à l\'aéroport de Casablanca avec accueil gratuit — économique dès MAD 250/jour (23€), Dacia Duster 4x4 dès MAD 350/jour (32€), kilométrage illimité. Envoyez-nous votre itinéraire Sahara sur WhatsApp. +212 634 276 534',
      },
    },
    {
      heading: 'Le Trek à Dos de Chameau — À Quoi S\'Attendre Vraiment',
      paragraphs: [
        'Le trek en chameau au coucher du soleil dans les dunes est l\'expérience Sahara la plus emblématique, incluse dans presque tous les forfaits camp désert de Merzouga. Vous montez en fin d\'après-midi au bord des dunes — le chameau utilisé au Maroc est un dromadaire, pas un chameau à deux bosses.',
      ],
      callout: {
        label: '🐫 Conseils Pratiques Trek Chameau',
        body: 'Portez un pantalon long pour éviter les frottements contre la selle. Chaussures fermées, pas de sandales — le sable devient très chaud. Apportez un foulard (chèche) pour la protection contre le sable — la plupart des camps en fournissent un.',
      },
    },
    {
      heading: 'Camps du Désert — Quel Type Réserver ?',
      paragraphs: ['Les camps du désert vont des tentes partagées basiques à des hébergements réellement luxueux avec salles de bain en-suite.'],
      table: {
        caption: 'Types de camps du désert Sahara — à quoi s\'attendre 2026',
        headers: ['Type de camp', 'Prix/nuit', 'À attendre', 'Idéal pour'],
        rows: [
          ['Camp budget/standard', '30–65€', 'Tente partagée ou basique privée, salle de bain commune', 'La plupart des voyageurs'],
          ['Camp milieu de gamme', '65–130€', 'Tente privée, literie améliorée, parfois en-suite', 'Couples voulant plus de confort'],
          ['Camp de luxe', '180–250€+', 'Tente en-suite, douches chaudes, restauration niveau restaurant', 'Occasions spéciales, lunes de miel'],
        ],
      },
      callout: {
        label: '⚠️ Comment Éviter l\'Arnaque du Camp',
        body: 'Réservez avec un opérateur basé directement à Merzouga ou Zagora qui possède ses propres chameaux et camps — pas une agence intermédiaire à Marrakech. Demandez des photos et avis récents spécifiques au camp où vous séjournerez réellement.',
      },
    },
    {
      heading: 'Que Emporter pour le Sahara',
      paragraphs: ['Le désert punit un emballage mal préparé plus que presque partout ailleurs au Maroc.'],
      list: [
        'Vêtements en couches — t-shirt/short le jour, polaire ou veste chaude la nuit, même en été.',
        'Chapeau à large bord et crème solaire haute protection.',
        'Un grand foulard en coton (chèche) pour la protection contre le sable.',
        'Chaussures fermées pour le trek en chameau et le camp.',
        'Lunettes de soleil — l\'éblouissement des dunes est intense.',
        'Une lampe frontale ou torche.',
        'Une batterie externe portable.',
        'Bouteille d\'eau réutilisable — 2L+ par personne par jour.',
      ],
    },
    {
      heading: 'Villes du Sahara — Guide Rapide',
      paragraphs: ['L\'itinéraire du Sahara traverse plusieurs villes qui sont des destinations à part entière, pas seulement des arrêts.'],
      table: {
        caption: 'Villes clés vers le Sahara — à savoir 2026',
        headers: ['Ville', 'Distance depuis Marrakech', 'Pourquoi c\'est important', 'Vaut l\'arrêt ?'],
        rows: [
          ['Aït Ben Haddou', '190 km, ~3h', 'Ksar UNESCO, filmé dans Gladiator et Game of Thrones', 'Oui — arrêt essentiel'],
          ['Ouarzazate', '200 km, ~3h15', '"Hollywood d\'Afrique" — studios Atlas, bon arrêt nuit', 'Oui — point d\'arrêt nuit idéal'],
          ['Gorges du Dadès', '280 km, ~4h30', 'Vallée rocheuse spectaculaire, "Route des 1000 Kasbahs"', 'Oui si le temps permet'],
          ['Gorges du Todra', '330 km, ~5h', 'Canyon étroit avec parois de 300m — escalade populaire', 'Oui si le temps permet'],
          ['Erfoud', '480 km, ~7h30', 'Ville du commerce de fossiles — dernière grande ville avant Merzouga', 'Bref arrêt carburant'],
          ['Zagora', '370 km, ~6h', 'Porte d\'entrée vers l\'Erg Chigaga', 'Oui si route Erg Chigaga'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Merzouga ou Zagora, quel est le meilleur pour un voyage au Sahara ?',
      answer: 'Pour un premier voyage au Sahara, Merzouga est généralement meilleur — les dunes de l\'Erg Chebbi sont plus hautes (jusqu\'à 150m), la route est entièrement goudronnée, et il y a plus d\'infrastructure de camps. Zagora/Erg Chigaga est plus calme et plus reculé mais nécessite un 4x4 pour le dernier tronçon.',
    },
    {
      question: 'À quelle distance est le Sahara depuis Marrakech ?',
      answer: 'Merzouga (Erg Chebbi) est à environ 560 km de Marrakech — 9 à 10 heures de conduite, généralement réparties sur un voyage de 2 jours avec une nuit d\'arrêt à Ouarzazate ou dans les gorges du Dadès.',
    },
    {
      question: 'Le désert du Sahara au Maroc est-il sûr à visiter ?',
      answer: 'Oui — la région du Sahara autour de Merzouga et Zagora est sûre pour les touristes, y compris les voyageuses seules. La criminalité violente y est extrêmement rare. Les vrais risques sont environnementaux et un petit nombre d\'arnaques de réservation évitables.',
    },
    {
      question: 'Faut-il un 4x4 pour visiter le Sahara ?',
      answer: 'Pas pour la route directe goudronnée vers Merzouga — une voiture économique suffit. Un 4x4 (comme le Dacia Duster) est fortement recommandé si votre itinéraire inclut le col du Tichka, les gorges du Dadès ou Todra, ou toute extension vers Zagora/Erg Chigaga.',
    },
    {
      question: 'Quelle est la meilleure période de l\'année pour visiter le Sahara ?',
      answer: 'Octobre à avril est la meilleure fenêtre globale, avec des températures diurnes confortables (18–28°C) et un ciel nocturne dégagé pour l\'observation des étoiles. Évitez juin–août sauf si vous pouvez décaler toutes les activités à l\'aube et au crépuscule.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Combien coûte un tour Sahara depuis Marrakech ?', answer: 'Un tour de groupe partagé de 3 jours depuis Marrakech vers Merzouga coûte 100–180€ par personne, incluant transport, chauffeur-guide, camp standard et quelques repas. Les tours privés vont de 350 à 800€ par voiture selon la taille du groupe et la durée.' },
    { question: 'Puis-je conduire moi-même jusqu\'au désert du Sahara au Maroc ?', answer: 'Oui — l\'autoconduite vers Merzouga est courante et les routes sont entièrement goudronnées depuis les grandes villes. Louez une voiture à l\'aéroport de Casablanca (CMN), répartissez le trajet sur 2 jours avec une nuit d\'arrêt à Ouarzazate ou dans les gorges du Dadès.' },
    { question: 'Quel est le Sahara le plus proche de Marrakech ?', answer: 'Zagora et les dunes de l\'Erg Chigaga via M\'Hamid sont l\'expérience de dunes de sable saharien la plus proche de Marrakech, à environ 370 km (8–9 heures). Merzouga et l\'Erg Chebbi, les dunes les plus célèbres et les plus hautes du Maroc, sont plus loin à environ 560 km (9–10 heures).' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'casablanca'],
  relatedPosts: ['meilleur-moment-visiter-sahara-maroc', 'guide-voyage-marrakech', 'guide-voyage-fes', 'conduite-marrakech-fes', 'guide-voyage-casablanca', 'guide-aeroport-casablanca-cmn'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر للصحراء المغربية 2026 — مرزوقة، عرق الشبي، زاكورة، الأسعار والأمان',
  metaDescription: 'دليل شامل للصحراء المغربية 2026: مرزوقة مقابل زاكورة، أسعار حقيقية، الأمان، أفضل وقت للزيارة، المسافات من كل مدينة مغربية، رحلات الجمال، مخيمات الصحراء.',
  title: 'دليل السفر للصحراء المغربية 2026: كل ما تحتاج معرفته قبل الذهاب',
  description: 'دليل الصحراء الشامل من فريق مقيم في الدار البيضاء يرسل مسافرين لمرزوقة وزاكورة على مدار السنة. أسعار حقيقية 2026، إجابة صادقة عن الأمان، مرزوقة مقابل زاكورة، المسافات من كل مدينة مغربية كبرى، نصائح رحلة الجمال، دليل مخيمات الصحراء.',
  keyword: 'دليل السفر للصحراء المغربية',
  coverImage: COVER,
  coverAlt: 'دليل السفر للصحراء المغربية 2026 — كثبان عرق الشبي الذهبية قرب مرزوقة عند الغروب',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 17,
  intro: 'الصحراء هي السبب الذي يدفع كثيراً من المسافرين للمجيء إلى المغرب أساساً — وهي أيضاً الجزء الذي يخطئ فيه معظم الناس في التخطيط. مرزوقة أم زاكورة؟ هل تحتاج دفعاً رباعياً؟ هل هي آمنة، خاصة للمسافرات المنفردات؟ كم يجب أن تكلف فعلاً؟ فريقنا المقيم في الدار البيضاء أرسل مئات العملاء للصحراء على مر السنين. هذا الدليل يجيب بصدق على كل سؤال، بأسعار حقيقية 2026 ومسافات من كل مدينة مغربية كبرى.',
  sections: [
    {
      heading: 'مرزوقة مقابل زاكورة — أي صحراء تزور؟',
      paragraphs: [
        'المغرب لا يملك "صحراء" واحدة — بل تجربتين صحراويتين مختلفتين جداً، واختيار المناسبة لرحلتك يهم أكثر من أي قرار آخر تقريباً في برنامجك.',
        'مرزوقة تقع عند حافة عرق الشبي، أعلى وأجمل حقل كثبان في المغرب — كثبان ذهبية تصل 150 متراً. زاكورة تقع قرب عرق الشيغاكة، حقل كثبان أوسع لكن أقل ارتفاعاً وأكثر بعداً، يُصل إليه عبر مَحاميد، ويتطلب عموماً دفعاً رباعياً للمسافة الأخيرة.',
      ],
      table: {
        caption: 'مرزوقة مقابل زاكورة — مقارنة صادقة 2026',
        headers: ['العامل', 'مرزوقة (عرق الشبي)', 'زاكورة (عرق الشيغاكة)'],
        rows: [
          ['ارتفاع الكثبان', 'حتى 150م — الأعلى في المغرب', '40–100م — أقل، أكثر انتشاراً'],
          ['المسافة من مراكش', '~560 كم، 9–10 ساعات', '~370 كم (لمحاميد)، 8–9 ساعات'],
          ['المسافة من فاس', '~460 كم، 7–8 ساعات', 'غير عملي — مرزوقة هي المسار من فاس'],
          ['الوصول', 'طريق معبد حتى حافة المخيم', 'دفع رباعي مطلوب للمسافة الأخيرة'],
          ['الازدحام', 'أكثر ازدحاماً — مخيمات وسياح أكثر', 'أهدأ، أبعد'],
          ['الأنسب لـ', 'أول رحلة صحراء، التصوير، الراحة', 'مسافرون يريدون العزلة ومغامرة دفع رباعي'],
        ],
      },
      callout: {
        label: '🏜️ توصيتنا الصادقة',
        body: 'لأول رحلة صحراء: مرزوقة. الكثبان أعلى، أسهل وصولاً، والبنية التحتية للطرق أفضل. لرحلة مغرب ثانية أو للمسافرين الباحثين عن ازدحام أقل: زاكورة/عرق الشيغاكة.',
      },
    },
    {
      heading: 'المسافات وأوقات القيادة للصحراء — من كل مدينة كبرى',
      paragraphs: ['إليك المسافات وأوقات القيادة الحقيقية 2026 من المدن المغربية الرئيسية لمرزوقة، البوابة الأكثر شيوعاً للصحراء.'],
      table: {
        caption: 'المسافة لمرزوقة (الصحراء/عرق الشبي) من المدن المغربية الكبرى 2026',
        headers: ['من', 'المسافة', 'وقت القيادة', 'المسار النموذجي'],
        rows: [
          ['الدار البيضاء (مطار CMN)', '~560 كم', '8–9 ساعات (رحلة يومين موصى بها)', 'عبر مراكش أو فاس'],
          ['مراكش', '~560 كم', '9–10 ساعات', 'مراكش ← ورززات (4 ساعات) ← أرفود/الريصاني ← مرزوقة (5 ساعات)'],
          ['فاس', '~460 كم', '7–8 ساعات', 'فاس ← ميدلت ← الراشيدية ← مرزوقة — عبر وادي زيز'],
          ['الرباط', '~530 كم', '8–9 ساعات', 'الرباط ← فاس ← ميدلت ← مرزوقة'],
          ['ورززات', '~360 كم', '5–5:30 ساعة', 'ورززات ← بومالن دادس ← تنغير ← أرفود ← مرزوقة'],
          ['زاكورة (عرق الشيغاكة)', '~370 كم من مراكش', '8–9 ساعات', 'مراكش ← ورززات ← أگدز ← زاكورة ← محاميد (دفع رباعي للمسافة الأخيرة)'],
          ['شفشاون', '~750 كم', '11+ ساعة (على 2–3 أيام)', 'شفشاون ← فاس ← ميدلت ← مرزوقة'],
        ],
      },
      callout: {
        label: '⚠️ الخطأ الذي يقع فيه الجميع',
        body: 'القيادة للصحراء في يوم واحد طويل ممكنة تقنياً لكنها متعبة فعلاً. قسّمها: اليوم 1 قيادة لورززات أو محاجر دادس (مع توقف في أيت بن حدو)، اليوم 2 استمر لمرزوقة بوصول يسمح برحلة الجمال عند الغروب.',
      },
    },
    {
      heading: 'أفضل وقت لزيارة الصحراء — شهراً بشهر',
      paragraphs: ['الصحراء لديها أحد أكثر مناخات المغرب تطرفاً — درجات حرارة الصيف نهاراً تتجاوز 45°م بانتظام، بينما ليالي الشتاء يمكن أن تقترب من 0°م.'],
      table: {
        caption: 'أفضل وقت لزيارة الصحراء المغربية — شهراً بشهر 2026',
        headers: ['الفترة', 'حرارة النهار', 'حرارة الليل', 'الازدحام', 'الحكم'],
        rows: [
          ['أكتوبر–أبريل', '20–28°م', '0–15°م (بارد ليلاً)', 'عالٍ (موسم الذروة)', '⭐ أفضل نافذة عامة'],
          ['ديسمبر–فبراير', '18–22°م', 'قرب 0°م، أحياناً أقل', 'متوسط', 'ليالٍ باردة لكن المخيمات مجهزة جيداً — أفضل مشاهدة نجوم'],
          ['مارس–مايو', '25–32°م', '10–18°م', 'عالٍ', '⭐ ممتاز — أيام دافئة بلا حرارة شديدة'],
          ['يونيو–أغسطس', '40–48°م', '22–28°م', 'منخفض', 'حرارة الظهيرة خطيرة فعلاً — الأنشطة تنتقل للفجر/الغسق فقط'],
          ['سبتمبر', '30–36°م', '15–20°م', 'متوسط، متصاعد', 'شهر انتقال جيد — لا يزال حاراً'],
        ],
      },
      callout: {
        label: '🌡️ حقيقة درجات الحرارة',
        body: 'حتى في الأشهر المريحة كمايو أو سبتمبر، توقع فرقاً 15–20°م بين النهار والليل. الملابس المتعددة الطبقات ضرورية طوال السنة.',
      },
    },
    {
      heading: 'هل الصحراء آمنة؟ الإجابة الصادقة 2026',
      paragraphs: [
        'نعم — منطقة الصحراء حول مرزوقة وزاكورة آمنة فعلاً للسياح. الجريمة العنيفة ضد المسافرين نادرة جداً هناك. المخاطر الحقيقية بيئية (الحرارة، الجفاف) وعدد صغير من عمليات نصب حجز يمكن تجنبها.',
        'للمسافرات المنفردات تحديداً: الصحراء تُصنَّف باستمرار كأحد أكثر أجزاء رحلة المغرب راحةً. مخيمات الصحراء بيئات مُدارة بموظفين مهمتهم راحة الضيوف.',
      ],
      table: {
        caption: 'دليل أمان الصحراء — المخاطر الحقيقية وكيفية إدارتها 2026',
        headers: ['الخطر', 'الواقع', 'كيفية الإدارة'],
        rows: [
          ['الحرارة/الجفاف', 'الخطر الحقيقي الأول — 40°م+ صيفاً', 'احمل 2 لتر+ ماء، تجنب شمس الظهيرة يونيو–أغسطس'],
          ['وكلاء مزيفون/نصب', 'مخيمات مضللة، رسوم مفاجئة', 'احجز مع مشغلين يملكون جمالهم/مخيماتهم مباشرة'],
          ['مضايقة المسافرات', 'منخفضة في المخيمات', 'احجز عبر مشغل مرخص'],
          ['الوصول الطبي', 'مرزوقة لديها عيادات أساسية فقط', 'تأمين سفر مع إخلاء طبي موصى به'],
          ['الضياع في الكثبان', 'خطر حقيقي إن تجولت وحدك ليلاً', 'لا تغادر منطقة المخيم المحددة وحدك بعد الظلام بلا مرشد'],
        ],
      },
    },
    {
      heading: 'أسعار جولات الصحراء — ما يجب أن تدفعه فعلاً 2026',
      paragraphs: ['إليك تفصيل أسعار صادق 2026 لتعرف ما هو عادل.'],
      table: {
        caption: 'أسعار جولات الصحراء المغربية 2026 — نطاقات حقيقية',
        headers: ['النوع', 'نطاق السعر', 'ما يشمله', 'ملاحظات'],
        rows: [
          ['جولة جماعية مشتركة 3 أيام (مراكش↔مرزوقة)', '100–180€/شخص', 'نقل، سائق-مرشد، مخيم قياسي، بعض الوجبات', 'الأكثر اقتصادية'],
          ['جولة خاصة 3–4 أيام', '350–800€/سيارة', 'دفع رباعي خاص، سائق-مرشد، توقفات مرنة', 'أفضل للعائلات/المجموعات'],
          ['مخيم فاخر', '180–250€/ليلة', 'خيمة إن-سويت، حمام خاص، طعام محسّن', 'يستحق لليلة مميزة'],
          ['مخيم قياسي', '30–65€/ليلة', 'خيمة مشتركة أو خاصة، حمام أساسي، عشاء + فطور', 'مريح تماماً لمعظم المسافرين'],
          ['رحلة جمل ليلة واحدة فقط', 'من 65€', 'جمل للمخيم، عشاء، رحلة عودة الفجر', 'إضافة إذا كان لديك نقلك الخاص'],
        ],
      },
      callout: {
        label: '💰 دليل الميزانية اليومية',
        body: 'مسافرو الميزانية: 85–120€/يوم يغطي النقل والإقامة والوجبات والأنشطة. متوسط: 140–200€/يوم. فاخر: 250–400€+/يوم.',
      },
    },
    {
      heading: 'القيادة الذاتية للصحراء — هل تحتاج دفعاً رباعياً؟',
      paragraphs: [
        'الطريق لمرزوقة معبد بالكامل — لا تحتاج دفعاً رباعياً للوصول لحافة عرق الشبي بسيارة اقتصادية. لكن الأقسام الجبلية (ممر تيشكا، انحراف دادس/تودرا) صعبة، وإذا شمل مسارك زاكورة/عرق الشيغاكة، المسافة الأخيرة تتطلب دفعاً رباعياً فعلاً.',
      ],
      table: {
        caption: 'أي سيارة لمسار صحرائك — 2026',
        headers: ['مسارك يتضمن...', 'السيارة المطلوبة', 'السعر في CMN'],
        rows: [
          ['طريق مباشر معبد لمرزوقة', 'اقتصادية كافية', 'MAD 250/يوم (23€)'],
          ['ممر تيشكا (مسار مراكش)', 'داشيا دوستر 4x4 موصى بها', 'MAD 350/يوم (32€)'],
          ['انحراف محاجر دادس أو تودرا', 'داشيا دوستر 4x4', 'MAD 350/يوم (32€)'],
          ['زاكورة / عرق الشيغاكة (محاميد الأخير)', 'داشيا دوستر 4x4 مطلوبة', 'MAD 350/يوم (32€)'],
        ],
      },
      callout: {
        label: '🚗 استأجر سيارة الصحراء من CMN',
        body: 'استلام من مطار الدار البيضاء مع استقبال مجاني — اقتصادية من MAD 250/يوم (23€)، داشيا دوستر 4x4 من MAD 350/يوم (32€). أرسل لنا برنامج صحرائك على واتساب. +212 634 276 534',
      },
    },
    {
      heading: 'رحلة الجمل — ماذا تتوقع فعلاً',
      paragraphs: ['رحلة الجمل عند الغروب في الكثبان هي أشهر تجربة صحراوية، مشمولة في تقريباً كل باقة مخيم مرزوقة. تركب في وقت متأخر بعد الظهر عند حافة الكثبان — الجمل المستخدم في المغرب هو دروميدير (سنام واحد) لا جمل بكتيري.'],
      callout: {
        label: '🐫 نصائح عملية لرحلة الجمل',
        body: 'ارتدِ بنطالاً طويلاً لتجنب الاحتكاك بالسرج. أحذية مغلقة لا صنادل — الرمل يصبح ساخناً جداً. أحضر وشاحاً (شش) للحماية من الرمل المتطاير.',
      },
    },
    {
      heading: 'مخيمات الصحراء — أي نوع تحجز؟',
      paragraphs: ['مخيمات الصحراء تتراوح من خيام مشتركة أساسية إلى إقامات فاخرة فعلاً بحمامات إن-سويت وخدمة بمستوى فندقي.'],
      table: {
        caption: 'أنواع مخيمات الصحراء — ماذا تتوقع 2026',
        headers: ['نوع المخيم', 'السعر/ليلة', 'ماذا تتوقع', 'الأنسب لـ'],
        rows: [
          ['مخيم اقتصادي/قياسي', '30–65€', 'خيمة مشتركة أو خاصة أساسية، حمام مشترك', 'معظم المسافرين'],
          ['مخيم متوسط', '65–130€', 'خيمة خاصة، فراش أفضل، أحياناً إن-سويت', 'أزواج يريدون راحة أكثر'],
          ['مخيم فاخر', '180–250€+', 'خيمة إن-سويت مع حمام خاص، دشات ساخنة', 'مناسبات خاصة، أعراس'],
        ],
      },
      callout: {
        label: '⚠️ كيف تتجنب نصب المخيم',
        body: 'احجز مع مشغل مقيم مباشرة في مرزوقة أو زاكورة يملك جماله ومخيماته الخاصة — ليس وكالة وسيطة في مراكش. اطلب صوراً وتقييمات حديثة خاصة بالمخيم الذي ستقيم فيه فعلاً.',
      },
    },
    {
      heading: 'ماذا تحضر للصحراء',
      paragraphs: ['الصحراء تعاقب التحضير غير الجيد أكثر من أي مكان آخر تقريباً في المغرب.'],
      list: [
        'ملابس متعددة الطبقات — قميص/شورت نهاراً، صوف أو سترة دافئة ليلاً، حتى في الصيف.',
        'قبعة واسعة الحواف وواقي شمس عالي الحماية.',
        'وشاح قطني كبير (شش) للحماية من الرمل المتطاير.',
        'أحذية مغلقة لرحلة الجمل والمخيم.',
        'نظارات شمسية — الوهج من الكثبان قوي.',
        'مصباح رأسي أو كشاف.',
        'شاحن طاقة محمول.',
        'زجاجة ماء قابلة لإعادة الاستخدام — 2 لتر+ للشخص يومياً.',
      ],
    },
    {
      heading: 'مدن الصحراء — دليل سريع',
      paragraphs: ['مسار الصحراء يمر بعدة بلدات هي وجهات بحد ذاتها لا مجرد محطات وقود.'],
      table: {
        caption: 'البلدات الرئيسية في الطريق للصحراء — ما تعرفه 2026',
        headers: ['البلدة', 'المسافة من مراكش', 'لماذا تهم', 'يستحق التوقف؟'],
        rows: [
          ['أيت بن حدو', '190 كم، ~3 ساعات', 'قصبة يونسكو، صُور فيها Gladiator وGame of Thrones', 'نعم — توقف أساسي'],
          ['ورززات', '200 كم، ~3:15 ساعة', '"هوليوود أفريقيا" — أستوديوهات الأطلس', 'نعم — نقطة توقف ليلية مثالية'],
          ['محاجر دادس', '280 كم، ~4:30 ساعة', 'وادي صخري خلاب، "طريق 1000 قصبة"', 'نعم إن سمح الوقت'],
          ['محاجر تودرا', '330 كم، ~5 ساعات', 'وادٍ ضيق بجدران صخرية 300م', 'نعم إن سمح الوقت'],
          ['أرفود', '480 كم، ~7:30 ساعة', 'بلدة تجارة الأحافير — آخر بلدة كبيرة قبل مرزوقة', 'توقف وجيز للوقود'],
          ['زاكورة', '370 كم، ~6 ساعات', 'بوابة عرق الشيغاكة', 'نعم إن كان المسار عرق الشيغاكة'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'هل مرزوقة أم زاكورة أفضل لرحلة الصحراء؟',
      answer: 'لأول رحلة صحراء، مرزوقة عموماً أفضل — كثبان عرق الشبي أعلى (حتى 150م)، والطريق معبد بالكامل، وبنية المخيمات أكثر. زاكورة/عرق الشيغاكة أهدأ وأبعد لكن تتطلب دفعاً رباعياً للمسافة الأخيرة.',
    },
    {
      question: 'كم تبعد الصحراء عن مراكش؟',
      answer: 'مرزوقة (عرق الشبي) على بعد حوالي 560 كم من مراكش — 9 إلى 10 ساعات قيادة، عادةً موزعة على رحلة يومين مع توقف ليلي في ورززات أو محاجر دادس.',
    },
    {
      question: 'هل صحراء المغرب آمنة للزيارة؟',
      answer: 'نعم — منطقة الصحراء حول مرزوقة وزاكورة آمنة للسياح، بما فيهم المسافرات المنفردات. الجريمة العنيفة نادرة جداً هناك. المخاطر الحقيقية بيئية وعدد صغير من عمليات نصب حجز يمكن تجنبها.',
    },
    {
      question: 'هل أحتاج دفعاً رباعياً لزيارة الصحراء؟',
      answer: 'ليس للطريق المباشر المعبد لمرزوقة — سيارة اقتصادية كافية. دفع رباعي (كداشيا دوستر) موصى به بشدة إذا شمل مسارك ممر تيشكا أو محاجر دادس أو تودرا، أو أي امتداد لزاكورة/عرق الشيغاكة.',
    },
    {
      question: 'ما أفضل وقت في السنة لزيارة الصحراء؟',
      answer: 'أكتوبر حتى أبريل أفضل نافذة عامة، بدرجات حرارة نهارية مريحة (18–28°م) وسماء ليلية صافية لمشاهدة النجوم. تجنب يونيو–أغسطس إلا إذا استطعت تحويل كل الأنشطة للفجر والغسق.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'كم تكلف جولة الصحراء من مراكش؟', answer: 'جولة جماعية مشتركة 3 أيام من مراكش لمرزوقة تكلف 100–180€ للشخص، تشمل النقل والسائق-المرشد والمخيم القياسي وبعض الوجبات. الجولات الخاصة تتراوح 350–800€ للسيارة حسب حجم المجموعة والمدة.' },
    { question: 'هل يمكنني القيادة بنفسي لصحراء المغرب؟', answer: 'نعم — القيادة الذاتية لمرزوقة شائعة والطرق معبدة بالكامل من المدن الكبرى. استأجر سيارة من مطار الدار البيضاء (CMN)، وزّع الرحلة على يومين مع توقف ليلي في ورززات أو محاجر دادس.' },
    { question: 'ما أقرب صحراء لمراكش؟', answer: 'زاكورة وكثبان عرق الشيغاكة عبر محاميد هي أقرب تجربة كثبان صحراوية حقيقية لمراكش، على بعد حوالي 370 كم (8–9 ساعات). مرزوقة وعرق الشبي، أشهر وأعلى كثبان في المغرب، أبعد بحوالي 560 كم (9–10 ساعات).' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'casablanca'],
  relatedPosts: ['afdal-waqt-liziyarat-sahara-maghrib', 'dalil-safar-marakish', 'dalil-safar-fas', 'al-qiyadah-min-marakish-ila-fas', 'dalil-safar-dar-al-bayda', 'dalil-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);