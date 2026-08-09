import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'casablanca-airport-guide-cmn';
const SLUG_FR = 'guide-aeroport-casablanca-cmn';
const SLUG_AR = 'dalil-matar-dar-al-bayda-cmn';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(36467138);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Casablanca Airport Guide (CMN) 2026 — Terminals, Transport & Insider Tips',
  metaDescription: 'Complete Casablanca Mohammed V Airport (CMN) guide 2026: terminals, train vs taxi vs car rental prices, hotels near CMN, lounges, Wi-Fi, and what to do on arrival.',
  title: 'Casablanca Airport (CMN) Complete Guide 2026 — Everything You Need to Know Before You Land',
  description: 'The only CMN airport guide written by people who work there. Real 2026 prices for trains, taxis and car rental, which terminal your flight uses, where to find the ONCF train, how to avoid the taxi touts, hotels near the airport, and why renting a car at CMN is usually the smartest first decision of your Morocco trip.',
  keyword: 'casablanca airport guide cmn',
  coverImage: COVER,
  coverAlt: 'Casablanca Mohammed V Airport CMN arrivals hall — complete guide to terminals, transport and car rental',
  publishedISO: '2026-08-09',
  author: 'Omar L. — Casablanca Airport Car Rental Specialist',
  readingMinutes: 14,
  intro: 'Casablanca Mohammed V International Airport (CMN) is Morocco\'s busiest and most important gateway — handling over 10 million passengers per year and connecting the country to more than 110 destinations across Europe, Africa, North America, and the Middle East. It is also, for most international visitors, the very first place they encounter Morocco. This guide covers everything you need: which terminal you\'ll arrive in, exactly how to get to the city or start your road trip, real 2026 prices for every transport option, how to handle the taxi situation (important), hotels near the airport, and the facilities available inside. Written by our Casablanca-based team who operates from CMN daily.',
  sections: [
    {
      heading: 'Casablanca Airport (CMN) — Key Facts',
      paragraphs: [
        'Mohammed V International Airport is located 30 km southeast of Casablanca city centre, in the Nouaceur municipality. Its IATA code is CMN. The airport operates 24 hours a day, 7 days a week, and is the primary hub for Royal Air Maroc.',
      ],
      table: {
        caption: 'CMN Airport essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Official name', 'Mohammed V International Airport'],
          ['IATA code', 'CMN'],
          ['Location', 'Nouaceur, 30 km south of Casablanca city centre'],
          ['Coordinates', '33.3675°N, 7.5898°W'],
          ['Annual passengers', '10+ million'],
          ['Destinations served', '110+ (June 2026)'],
          ['Operating hours', '24/7'],
          ['Main airline hub', 'Royal Air Maroc (Oneworld member)'],
          ['Other major airlines', 'Air France, Emirates, Turkish Airlines, Ryanair, Transavia, Qatar Airways, Air Arabia'],
          ['Distance to city centre', '30 km — 35 min by train, 45–60 min by taxi'],
          ['Distance to Marrakech', '240 km — 2h30 by motorway'],
          ['Distance to Rabat', '120 km — 1h20 by motorway'],
        ],
      },
    },
    {
      heading: 'CMN Terminals — Which One Is Yours?',
      paragraphs: [
        'CMN has three terminal buildings. Terminal 1 and Terminal 2 handle the vast majority of passenger traffic. Terminal 3 is currently reserved for special or seasonal operations.',
      ],
      table: {
        caption: 'Casablanca Airport terminals guide 2026',
        headers: ['Terminal', 'What it handles', 'Key feature', 'Train access'],
        rows: [
          ['Terminal 1 (T1)', 'Most international flights — the largest and most modern terminal', 'Duty-free shops, restaurants, international lounges, immigration', 'ONCF train station on Level -1 ✅'],
          ['Terminal 2 (T2)', 'Royal Air Maroc hub, domestic + some international', 'Main RAM check-in, connected to T1 by walkway', 'Connected to T1 train ✅'],
          ['Terminal 3 (T3)', 'Low-cost carriers and seasonal/charter flights', 'Basic facilities, separate building', 'Shuttle bus to train ⚠️'],
        ],
      },
      callout: {
        label: '💡 Which terminal will you use?',
        body: 'Check your boarding pass for the terminal number. Most European, Middle Eastern, and long-haul flights use Terminal 1. Royal Air Maroc domestic and connecting flights mostly use Terminal 2. If in doubt, check your airline\'s website before arriving.',
      },
    },
    {
      heading: 'Getting from CMN Airport to Casablanca City — All Options Compared',
      paragraphs: [
        'You have four realistic options from CMN to Casablanca city centre. Here is the honest comparison — including the taxi situation that catches most first-time visitors off guard.',
      ],
      table: {
        caption: 'CMN to Casablanca city centre — all transport options 2026',
        headers: ['Option', 'Price', 'Time', 'Best for', 'Verdict'],
        rows: [
          ['ONCF Train', 'MAD 50–70 (€4.60–6.50)', '35 min to Casa Voyageurs', 'Budget travelers, solo, light luggage', '⭐ Best value — fast, reliable, no traffic'],
          ['Grand Taxi (shared)', 'MAD 250–300 (€23–28)', '45–70 min', 'Groups of 3–4, direct hotel drop', 'Good but negotiate BEFORE luggage goes in'],
          ['Private Transfer (pre-booked)', 'MAD 400–600 (€37–55)', '45–60 min', 'Families, first-timers, late arrivals', 'Most stress-free — driver waits with name sign'],
          ['Rental Car (MoroccoForYou)', 'From MAD 250/day (€23)', '35–45 min to motorway', 'Travelers continuing beyond Casablanca', '⭐ Best if driving onward — on road in 20 min'],
          ['Bus (CTM/local)', 'MAD 40–60 (€3.70–5.50)', '60–90 min', 'Budget, flexible schedule', 'Slowest — multiple stops, not recommended with luggage'],
        ],
      },
    },
    {
      heading: 'The ONCF Airport Train — Everything You Need to Know',
      paragraphs: [
        'The ONCF train is the smartest option for most travelers arriving at CMN who are heading to Casablanca city centre. The station is located on Level -1 of Terminal 1 — follow the burgundy "Train/ONCF" signs from the arrivals hall. It is the most reliable, fastest, and cheapest way into the city, and completely immune to Casablanca\'s notorious rush-hour traffic.',
      ],
      table: {
        caption: 'ONCF airport train from CMN — complete guide 2026',
        headers: ['Route', 'Price (2nd class)', 'Journey time', 'Frequency', 'Notes'],
        rows: [
          ['CMN → Casa Voyageurs (main station)', 'MAD 50 (€4.60)', '35 minutes', 'Every 30–60 min', 'Central station — best for most hotels'],
          ['CMN → Casa Port (port/old medina)', 'MAD 60 (€5.50)', '55 minutes', 'Every 30–60 min', 'Useful for medina/port area hotels'],
          ['CMN → Rabat Ville', 'MAD 80–100 (€7.40–9.25)', '1h15 min', 'Direct trains available', 'Best train option for reaching Rabat directly'],
        ],
      },
      callout: {
        label: '🚆 Train Insider Tips',
        body: 'Buy your ticket at the machines on Level -1 before boarding — they accept cash and cards. Do not buy from anyone on the platform. The train runs 24 hours. First train is around 5:30am, last around midnight — confirm exact times on ONCF app. From Casa Voyageurs, a petit taxi to most Casablanca hotels costs MAD 20–50 additional.',
      },
    },
    {
      heading: 'Taxis at CMN Airport — The Honest Guide',
      paragraphs: [
        'Taxis at Casablanca Airport are a source of genuine confusion for many first-time visitors. Here is what you need to know to avoid overpaying.',
        'Official grand taxis (white, beige or cream colored) operate from the dedicated rank outside the arrivals halls. The regulated fare from CMN to central Casablanca is MAD 250–300 for a daytime ride. Night rates (after 8pm) are legally 50% higher. However, many drivers will quote inflated flat rates to foreigners — particularly those with large luggage who look uncertain.',
        'Three rules that will save you money: agree on the total price before your luggage goes in the boot; clarify the price is for the whole vehicle ("toute la course") not per person; and if a quote seems far above MAD 300 for city centre, walk away and try the next driver. The ONCF train is always the alternative if negotiations fail.',
      ],
      callout: {
        label: '⚠️ Taxi Warning',
        body: 'Unofficial taxi touts operate inside and immediately outside the arrivals hall — they approach you before you reach the official taxi rank. Do not follow them. Walk past them, exit the arrivals hall fully, and use the official metered taxi rank or your pre-booked transfer. Grand taxis are white/beige and have a taxi registration displayed. Unofficial cars do not.',
      },
    },
    {
      heading: 'Car Rental at CMN Airport — Why It\'s the Best First Decision',
      paragraphs: [
        'If your Morocco itinerary takes you beyond Casablanca — to Marrakech, Fes, Chefchaouen, Agadir, the Atlas Mountains, or the Sahara — picking up a rental car directly at CMN is almost always the most efficient first move. You land, your car is ready, and within 20–30 minutes you are on Morocco\'s motorway network heading wherever you need to go.',
        'CMN has car rental counters from international chains (Hertz, Avis, Europcar, Sixt) on the ground floor of the terminals. These involve counter queues — 30–60 minutes at peak times — and counter prices typically include undisclosed surcharges added on the spot.',
        'MoroccoForYou Cars operates a free meet-and-greet service directly in the arrivals hall — your driver is waiting with a sign when you land, no queue, no counter. Economy cars from MAD 250/day (€23), Dacia Duster 4x4 from MAD 350/day (€32), unlimited mileage, 24/7 support.',
      ],
      table: {
        caption: 'Driving distances and times from CMN Airport 2026',
        headers: ['Destination', 'Distance', 'Drive time', 'Toll', 'Car needed'],
        rows: [
          ['Casablanca city centre', '30 km', '35–45 min', 'No toll', 'Any car'],
          ['Rabat', '120 km', '1h20–1h45', 'MAD 33', 'Any car'],
          ['Marrakech', '240 km', '2h30–3h00', 'MAD 78', 'Any car'],
          ['Fes', '280 km', '3h30–4h00', 'MAD 70', 'Any car'],
          ['Tangier', '360 km', '3h45–4h30', 'MAD 153', 'Any car'],
          ['Chefchaouen', '350 km', '4h00–4h30', 'MAD 120', 'Any car'],
          ['Agadir', '480 km', '5h00–5h30', 'MAD 164', 'Any car'],
          ['Ouarzazate (via Tichka)', '360 km', '5h00–6h00', 'MAD 78 + mountain', 'Duster 4x4'],
          ['Merzouga/Sahara', '600 km', '8h00–9h00', 'MAD 78 + desert', 'Duster 4x4'],
        ],
      },
      callout: {
        label: '🚗 Book Your CMN Car Rental',
        body: 'Reserve on WhatsApp before landing — economy from €23/day, Duster 4x4 from €32/day. Free meet & greet in arrivals, confirmation in 1 hour, no hidden fees. +212 634 276 534',
      },
    },
    {
      heading: 'CMN Airport Facilities — What\'s Inside',
      paragraphs: [
        'CMN is a functional airport rather than a luxury one. The facilities are adequate but not exceptional — useful to know before you arrive so you set the right expectations.',
      ],
      table: {
        caption: 'CMN Airport facilities guide 2026',
        headers: ['Facility', 'Location', 'Details', 'Tip'],
        rows: [
          ['Wi-Fi', 'Both terminals', 'Free — password at info desk or on signs', 'Speeds vary, can be slow at peak times'],
          ['ATMs', 'Arrivals halls, both terminals', 'CIH, Attijariwafa, BMCE available', 'Withdraw MAD on arrival — better rates than exchange'],
          ['Currency exchange', 'Arrivals + departures', 'Multiple booths — rates are not great', 'Use ATM instead for better rates'],
          ['SIM cards', 'Marjane/shops near arrivals', 'Maroc Telecom, Orange, Inwi available', 'Maroc Telecom has best coverage outside cities'],
          ['Duty-free', 'T1 departures', 'Standard international duty-free', 'Alcohol purchases here before entering Morocco'],
          ['Restaurants/cafés', 'Both terminals', 'Starbucks, local cafés, restaurants', 'Prices 30–50% higher than city — eat in city if possible'],
          ['Lounges', 'T1', 'RAM Business Lounge, Pearl Lounge, Primeclass Lounge', 'Day passes available — useful for long layovers'],
          ['Prayer rooms', 'Both terminals', 'Available — follow signs', 'Well-maintained, clean'],
          ['Power outlets', 'Both terminals', 'European round-pin (Type C/E)', 'Bring adapter if from UK/US — outlets limited'],
          ['Left luggage', 'T1 ground floor', 'Paid storage available', 'Useful if arriving before hotel check-in'],
          ['Pharmacy', 'T1 arrivals', 'Basic medications available', 'Open during flight hours'],
          ['Hotels in terminal', 'T1 adjacent', 'ONOMO Hotel — free shuttle 24/7', 'Expensive but convenient for very early/late flights'],
        ],
      },
    },
    {
      heading: 'Hotels Near Casablanca Airport (CMN)',
      paragraphs: [
        'Most travelers use CMN as a departure point rather than a destination — but if you have an early morning flight, a very late arrival, or a long layover, staying near the airport makes sense.',
      ],
      table: {
        caption: 'Best hotels near Casablanca Airport (CMN) 2026',
        headers: ['Hotel', 'Distance to CMN', 'Shuttle', 'Price range/night', 'Best for'],
        rows: [
          ['ONOMO Hotel Casablanca Airport', 'Walking distance (5 min)', 'Free 24/7', 'MAD 600–1,200 (€55–111)', 'Best overall — modern, reliable, convenient'],
          ['Atlas Sky Airport', '5 min by shuttle', 'Free every 30 min, 24/7', 'MAD 500–900 (€46–83)', 'Good value, well-maintained'],
          ['Relax Airport Hotel', '8 min by shuttle', 'Free on-demand', 'MAD 400–700 (€37–65)', 'Budget option — confirm room condition on arrival'],
          ['Ibis Casablanca City Center', '35 min by taxi', 'None', 'MAD 450–750 (€41–69)', 'If you want to see the city too'],
        ],
      },
      callout: {
        label: '💡 Airport Hotel Tip',
        body: 'ONOMO Hotel is the best-managed near-airport option and includes free shuttle. For flights before 7am, staying near CMN saves significant stress. For arrivals after midnight, the 30-minute train to the city followed by a petit taxi is usually still easier than staying at the airport — unless your hotel charges a night supplement for late check-in.',
      },
    },
    {
      heading: 'CMN Airport — Practical Tips from Our Local Team',
      paragraphs: [
        'These are the things our drivers and local team tell every client before they land at CMN — the practical knowledge that makes the difference between a stressful arrival and a smooth one.',
      ],
      list: [
        'Immigration queues at CMN can be long — 20–45 minutes at peak times (summer, holidays, Friday afternoons). Don\'t schedule tight connections under 2 hours for international flights.',
        'The ONCF train station is on Level -1 of Terminal 1. Follow burgundy signs. Buy tickets at machines, not from people on the platform.',
        'Grand taxi negotiation: agree price BEFORE luggage goes in. MAD 250–300 is fair for city centre. Night rate (after 8pm) is higher — this is legal.',
        'Unofficial taxi touts operate inside arrivals. Walk past them completely before looking for transport.',
        'Free Wi-Fi is available but requires a password — ask at the information desk or look for signs in arrivals.',
        'ATMs are more reliable than currency exchange booths — better rates and no commission.',
        'If you are renting a car: MoroccoForYou Cars meets you in arrivals with a name sign — no counter queue, no waiting. Book on WhatsApp before landing.',
        'Power outlets at CMN are European round-pin (Type C). UK and US travelers need an adapter.',
        'Duty-free alcohol can only be purchased in the departures area — you cannot buy it on arrival.',
        'The airport duty-free shop sells argan oil, Moroccan spices, and traditional crafts — better prices and guaranteed authenticity versus medina souks for these specific items.',
        'If your flight is delayed into CMN after midnight, the ONCF train still runs — check the last departure time on the ONCF app (usually around midnight–1am).',
        'Casablanca Airport is the hub for Royal Air Maroc connecting flights to West and Central Africa. If you are transiting, CMN handles transfers reasonably efficiently — allow 90 minutes minimum for international to international.',
      ],
    },
    {
      heading: 'Leaving CMN — Departures Guide',
      paragraphs: [
        'Arriving early for international departures from CMN is strongly recommended. Security and immigration queues can be significant, particularly on Royal Air Maroc\'s peak departure banks.',
      ],
      table: {
        caption: 'CMN Airport departure recommendations 2026',
        headers: ['Flight type', 'Recommended arrival time', 'Reason'],
        rows: [
          ['Long-haul international (Europe, Americas, Gulf)', '3 hours before departure', 'Security, immigration, and potential queues'],
          ['Short-haul international (Morocco neighbors)', '2 hours before', 'Faster but still allow buffer'],
          ['Domestic Morocco (RAM)', '1h30 before', 'Shorter queues, no immigration'],
          ['Low-cost carriers (Ryanair, Transavia) from T3', '2h30 before', 'T3 is further — allow transfer time'],
        ],
      },
      callout: {
        label: '🚕 Getting to CMN for Departure',
        body: 'ONCF train from Casa Voyageurs to CMN: MAD 50–70, 35 minutes. Last train usually around midnight. Petit taxi from city to train station: MAD 20–50. Grand taxi direct from city to CMN: MAD 250–300. MoroccoForYou Cars can arrange return drop-off at CMN — confirm when booking your rental.',
      },
    },
  ],
  faqs: [
    {
      question: 'How far is Casablanca Airport (CMN) from the city centre?',
      answer: 'CMN is approximately 30 km south of Casablanca city centre. By ONCF train it takes 35 minutes to Casa Voyageurs station. By grand taxi it is 45–70 minutes depending on traffic. By rental car on the motorway it is 35–45 minutes.',
    },
    {
      question: 'How much does a taxi from Casablanca Airport to the city cost?',
      answer: 'Official grand taxis from CMN to central Casablanca charge MAD 250–300 (€23–28) during the day. Night rates (after 8pm) are legally 50% higher. Always agree the total price before your luggage goes in. The ONCF train at MAD 50–70 is significantly cheaper.',
    },
    {
      question: 'Is there a train from Casablanca Airport to the city?',
      answer: 'Yes — the ONCF train station is on Level -1 of Terminal 1 (follow burgundy signs from arrivals). Trains run every 30–60 minutes to Casa Voyageurs station (35 min, MAD 50 second class) and Casa Port (55 min, MAD 60). The train runs approximately 5:30am to midnight.',
    },
    {
      question: 'Which terminal does my flight use at CMN?',
      answer: 'Terminal 1 handles most international flights and has the ONCF train station on Level -1. Terminal 2 is the main Royal Air Maroc hub for domestic and connecting flights. Terminal 3 serves low-cost and charter carriers. Check your boarding pass or airline website for your specific terminal.',
    },
    {
      question: 'Can I rent a car at Casablanca Airport without queuing at a counter?',
      answer: 'Yes — MoroccoForYou Cars offers a free meet-and-greet service directly in the CMN arrivals hall. Your driver is waiting with a sign when you land. No counter queue, no waiting, no hidden fees. Economy cars from MAD 250/day (€23). Book on WhatsApp: +212 634 276 534.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Does Casablanca Airport have free Wi-Fi?', answer: 'Yes — CMN provides free Wi-Fi in both terminals. Ask at the information desk for the password or look for the network name on signs in the arrivals hall. Speeds can be slow during peak hours.' },
    { question: 'Are there hotels at Casablanca Airport?', answer: 'Yes — ONOMO Hotel Casablanca Airport is the closest option with a free 24/7 shuttle. Atlas Sky Airport and Relax Airport Hotel also provide free shuttles. Prices range from MAD 400–1,200/night (€37–111). Most travelers find the 35-minute train into the city more practical unless they have a very early departure or late arrival.' },
    { question: 'Is Uber available at Casablanca Airport?', answer: 'No — Uber does not operate in Morocco. Use the ONCF train (cheapest), official grand taxis from the airport taxi rank (negotiate price before loading luggage), or pre-book a private transfer through your hotel or MoroccoForYou.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'rabat'],
  relatedPosts: ['casablanca-airport-car-rental', 'how-to-get-from-casablanca-airport-to-city-centre', 'casablanca-travel-guide', 'casablanca-to-rabat-by-car'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Aéroport Casablanca CMN 2026 — Terminaux, Transport & Conseils',
  metaDescription: 'Guide complet aéroport Mohammed V Casablanca (CMN) 2026 : terminaux, train vs taxi vs location voiture, hôtels près de CMN, salons, Wi-Fi et que faire à l\'arrivée.',
  title: 'Guide Complet Aéroport de Casablanca (CMN) 2026 — Tout Savoir Avant d\'Atterrir',
  description: 'Le seul guide CMN écrit par des gens qui y travaillent. Prix 2026 réels pour trains, taxis et location voiture, quel terminal utilise votre vol, où trouver le train ONCF, comment éviter les arnaques taxi, hôtels près de l\'aéroport, et pourquoi louer une voiture à CMN est souvent la meilleure première décision de votre voyage.',
  keyword: 'guide aéroport casablanca cmn',
  coverImage: COVER,
  coverAlt: 'Hall des arrivées aéroport Casablanca Mohammed V CMN — guide complet terminaux transport et location voiture',
  publishedISO: '2026-08-09',
  author: 'Omar L. — Spécialiste Location Voiture Aéroport Casablanca',
  readingMinutes: 14,
  intro: 'L\'aéroport International Mohammed V de Casablanca (CMN) est la porte d\'entrée la plus fréquentée du Maroc — plus de 10 millions de passagers par an et plus de 110 destinations desservies à travers l\'Europe, l\'Afrique, l\'Amérique du Nord et le Moyen-Orient. C\'est aussi, pour la plupart des visiteurs internationaux, le tout premier endroit où ils découvrent le Maroc. Ce guide couvre tout : quel terminal vous accueille, comment rejoindre la ville ou démarrer votre road trip, les vrais tarifs 2026 de chaque option de transport, comment gérer les taxis (important), les hôtels proches et les équipements disponibles. Rédigé par notre équipe casablancaise qui opère depuis CMN au quotidien.',
  sections: [
    {
      heading: 'Aéroport de Casablanca (CMN) — Chiffres Clés',
      paragraphs: [
        'L\'aéroport Mohammed V est situé à 30 km au sud-est du centre de Casablanca, dans la commune de Nouaceur. Son code IATA est CMN. L\'aéroport fonctionne 24h/24, 7j/7, et constitue le principal hub de Royal Air Maroc.',
      ],
      table: {
        caption: 'Infos essentielles aéroport CMN 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Nom officiel', 'Aéroport International Mohammed V'],
          ['Code IATA', 'CMN'],
          ['Localisation', 'Nouaceur, 30 km au sud du centre de Casablanca'],
          ['Passagers annuels', '10+ millions'],
          ['Destinations desservies', '110+ (juin 2026)'],
          ['Horaires', '24h/24, 7j/7'],
          ['Compagnie principale', 'Royal Air Maroc (membre Oneworld)'],
          ['Autres compagnies majeures', 'Air France, Emirates, Turkish Airlines, Ryanair, Transavia, Qatar Airways'],
          ['Distance centre-ville', '30 km — 35 min en train, 45–60 min en taxi'],
          ['Distance Marrakech', '240 km — 2h30 par autoroute'],
          ['Distance Rabat', '120 km — 1h20 par autoroute'],
        ],
      },
    },
    {
      heading: 'Les Terminaux de CMN — Lequel Vous Concerne ?',
      paragraphs: [
        'CMN dispose de trois bâtiments terminaux. Les terminaux 1 et 2 gèrent la grande majorité du trafic passagers. Le terminal 3 est réservé aux opérations spéciales ou saisonnières.',
      ],
      table: {
        caption: 'Guide des terminaux aéroport Casablanca 2026',
        headers: ['Terminal', 'Vols gérés', 'Caractéristique principale', 'Accès train'],
        rows: [
          ['Terminal 1 (T1)', 'La plupart des vols internationaux — le plus grand et moderne', 'Duty-free, restaurants, salons internationaux, immigration', 'Gare ONCF au Niveau -1 ✅'],
          ['Terminal 2 (T2)', 'Hub Royal Air Maroc, domestique + certains internationaux', 'Check-in RAM principal, relié à T1 par passerelle', 'Connecté au train T1 ✅'],
          ['Terminal 3 (T3)', 'Compagnies low-cost et vols charter/saisonniers', 'Équipements basiques, bâtiment séparé', 'Navette bus vers le train ⚠️'],
        ],
      },
      callout: {
        label: '💡 Quel terminal allez-vous utiliser ?',
        body: 'Vérifiez votre carte d\'embarquement pour le numéro de terminal. La plupart des vols européens, moyen-orientaux et long-courriers utilisent le Terminal 1. Les vols domestiques et de connexion Royal Air Maroc utilisent principalement le Terminal 2. En cas de doute, vérifiez sur le site de votre compagnie avant d\'arriver.',
      },
    },
    {
      heading: 'Rejoindre le Centre-Ville depuis CMN — Toutes les Options Comparées',
      paragraphs: [
        'Quatre options réalistes s\'offrent à vous depuis CMN. Voici la comparaison honnête — incluant la situation taxi qui piège la plupart des premiers visiteurs.',
      ],
      table: {
        caption: 'CMN vers centre-ville Casablanca — toutes les options 2026',
        headers: ['Option', 'Prix', 'Durée', 'Idéal pour', 'Verdict'],
        rows: [
          ['Train ONCF', 'MAD 50–70 (4,60–6,50€)', '35 min vers Casa Voyageurs', 'Voyageurs budget, solo, bagages légers', '⭐ Meilleur rapport qualité-prix — rapide, fiable, sans trafic'],
          ['Grand taxi (partagé)', 'MAD 250–300 (23–28€)', '45–70 min', 'Groupes 3–4, dépôt direct à l\'hôtel', 'Bien mais négociez AVANT que les bagages entrent'],
          ['Transfert privé (pré-réservé)', 'MAD 400–600 (37–55€)', '45–60 min', 'Familles, premiers visiteurs, arrivées tardives', 'Moins de stress — chauffeur attend avec pancarte'],
          ['Location voiture (MoroccoForYou)', 'Dès MAD 250/jour (23€)', '35–45 min vers l\'autoroute', 'Voyageurs continuant au-delà de Casablanca', '⭐ Meilleur si vous conduisez — sur la route en 20 min'],
          ['Bus (CTM/local)', 'MAD 40–60 (3,70–5,50€)', '60–90 min', 'Budget, horaires flexibles', 'Le plus lent — plusieurs arrêts, déconseillé avec bagages'],
        ],
      },
    },
    {
      heading: 'Le Train ONCF depuis l\'Aéroport — Tout Ce Qu\'il Faut Savoir',
      paragraphs: [
        'Le train ONCF est l\'option la plus intelligente pour la plupart des voyageurs arrivant à CMN et se dirigeant vers le centre de Casablanca. La gare est au Niveau -1 du Terminal 1 — suivez les panneaux bordeaux "Train/ONCF" depuis le hall des arrivées.',
      ],
      table: {
        caption: 'Train ONCF depuis CMN — guide complet 2026',
        headers: ['Trajet', 'Prix (2e classe)', 'Durée', 'Fréquence', 'Notes'],
        rows: [
          ['CMN → Casa Voyageurs (gare principale)', 'MAD 50 (4,60€)', '35 minutes', 'Toutes les 30–60 min', 'Gare centrale — meilleure option pour la plupart des hôtels'],
          ['CMN → Casa Port (port/médina)', 'MAD 60 (5,50€)', '55 minutes', 'Toutes les 30–60 min', 'Utile pour les hôtels médina/port'],
          ['CMN → Rabat Ville', 'MAD 80–100 (7,40–9,25€)', '1h15', 'Trains directs disponibles', 'Meilleure option train pour rejoindre Rabat directement'],
        ],
      },
      callout: {
        label: '🚆 Conseils Train Insider',
        body: 'Achetez votre billet aux distributeurs du Niveau -1 avant d\'embarquer — ils acceptent espèces et cartes. N\'achetez pas à quelqu\'un sur le quai. Le train circule 24h/24. Premier train vers 5h30, dernier vers minuit — vérifiez les horaires exacts sur l\'appli ONCF. Depuis Casa Voyageurs, un petit taxi vers la plupart des hôtels coûte MAD 20–50 supplémentaires.',
      },
    },
    {
      heading: 'Les Taxis à l\'Aéroport CMN — Le Guide Honnête',
      paragraphs: [
        'Les taxis à l\'aéroport de Casablanca sont source de confusion réelle pour beaucoup de premiers visiteurs. Voici ce qu\'il faut savoir pour ne pas surpayer.',
        'Les grands taxis officiels (blancs, beiges ou crème) opèrent depuis le rang dédié à l\'extérieur des halls d\'arrivées. Le tarif réglementé de CMN vers le centre de Casablanca est de MAD 250–300 de jour. Les tarifs de nuit (après 20h) sont légalement 50% plus élevés. Cependant, beaucoup de chauffeurs proposent des tarifs forfaitaires gonflés aux étrangers.',
        'Trois règles qui vous feront économiser de l\'argent : négociez le prix total avant que vos bagages entrent dans le coffre ; précisez que le prix est pour l\'ensemble du véhicule ("toute la course") et non par personne ; si un devis dépasse largement MAD 300 pour le centre-ville, passez votre chemin.',
      ],
      callout: {
        label: '⚠️ Attention aux Taxis',
        body: 'Des rabatteurs non officiels opèrent à l\'intérieur et juste à l\'extérieur du hall des arrivées — ils vous abordent avant que vous atteigniez le rang officiel. Ne les suivez pas. Passez devant eux, sortez complètement du hall des arrivées, et utilisez le rang officiel ou votre transfert pré-réservé.',
      },
    },
    {
      heading: 'Location Voiture à l\'Aéroport CMN — Pourquoi C\'est Souvent la Meilleure Première Décision',
      paragraphs: [
        'Si votre itinéraire marocain vous emmène au-delà de Casablanca — vers Marrakech, Fès, Chefchaouen, Agadir, l\'Atlas ou le Sahara — récupérer une voiture directement à CMN est presque toujours le premier geste le plus efficace. Vous atterrissez, votre voiture est prête, et en 20–30 minutes vous êtes sur le réseau autoroutier marocain.',
        'CMN dispose de comptoirs de location des chaînes internationales (Hertz, Avis, Europcar, Sixt) au rez-de-chaussée des terminaux. Ces comptoirs impliquent des files d\'attente — 30–60 minutes aux heures de pointe — et des prix comptoir incluant souvent des suppléments non déclarés.',
        'MoroccoForYou Cars propose un service d\'accueil gratuit directement dans le hall des arrivées — votre chauffeur vous attend avec une pancarte à votre atterrissage, sans file, sans comptoir. Voitures économiques dès MAD 250/jour (23€), Dacia Duster 4x4 dès MAD 350/jour (32€), kilométrage illimité, support 24/7.',
      ],
      table: {
        caption: 'Distances et temps de trajet depuis l\'aéroport CMN 2026',
        headers: ['Destination', 'Distance', 'Temps de trajet', 'Péage', 'Voiture'],
        rows: [
          ['Centre de Casablanca', '30 km', '35–45 min', 'Pas de péage', 'Toute voiture'],
          ['Rabat', '120 km', '1h20–1h45', 'MAD 33', 'Toute voiture'],
          ['Marrakech', '240 km', '2h30–3h00', 'MAD 78', 'Toute voiture'],
          ['Fès', '280 km', '3h30–4h00', 'MAD 70', 'Toute voiture'],
          ['Tanger', '360 km', '3h45–4h30', 'MAD 153', 'Toute voiture'],
          ['Chefchaouen', '350 km', '4h00–4h30', 'MAD 120', 'Toute voiture'],
          ['Agadir', '480 km', '5h00–5h30', 'MAD 164', 'Toute voiture'],
          ['Ouarzazate (via Tichka)', '360 km', '5h00–6h00', 'MAD 78 + montagne', 'Duster 4x4'],
          ['Merzouga/Sahara', '600 km', '8h00–9h00', 'MAD 78 + désert', 'Duster 4x4'],
        ],
      },
      callout: {
        label: '🚗 Réservez Votre Location à CMN',
        body: 'Réservez sur WhatsApp avant d\'atterrir — économique dès 23€/jour, Duster 4x4 dès 32€/jour. Accueil gratuit aux arrivées, confirmation en 1 heure, sans frais cachés. +212 634 276 534',
      },
    },
    {
      heading: 'Équipements à l\'Aéroport CMN — Ce Qu\'il Y a à l\'Intérieur',
      paragraphs: [
        'CMN est un aéroport fonctionnel plutôt que luxueux. Les équipements sont adéquats mais pas exceptionnels — utile à savoir avant d\'arriver pour avoir les bonnes attentes.',
      ],
      table: {
        caption: 'Guide des équipements aéroport CMN 2026',
        headers: ['Équipement', 'Emplacement', 'Détails', 'Conseil'],
        rows: [
          ['Wi-Fi', 'Les deux terminaux', 'Gratuit — mot de passe au bureau d\'info ou sur panneaux', 'Débit variable, peut être lent aux heures de pointe'],
          ['Distributeurs (ATM)', 'Halls d\'arrivées, deux terminaux', 'CIH, Attijariwafa, BMCE disponibles', 'Retirez des MAD à l\'arrivée — meilleurs taux qu\'au change'],
          ['Change de devises', 'Arrivées + départs', 'Plusieurs bureaux — taux pas excellents', 'Utilisez un ATM pour de meilleurs taux'],
          ['SIM mobile', 'Boutiques près des arrivées', 'Maroc Telecom, Orange, Inwi disponibles', 'Maroc Telecom a la meilleure couverture hors villes'],
          ['Duty-free', 'Départs T1', 'Duty-free international standard', 'Achat alcool ici avant d\'entrer au Maroc'],
          ['Restaurants/cafés', 'Les deux terminaux', 'Starbucks, cafés locaux, restaurants', 'Prix 30–50% plus chers qu\'en ville'],
          ['Salons', 'T1', 'RAM Business Lounge, Pearl Lounge, Primeclass Lounge', 'Day pass disponible — utile pour longues escales'],
          ['Salles de prière', 'Les deux terminaux', 'Disponibles — suivez les panneaux', 'Bien entretenues, propres'],
          ['Prises électriques', 'Les deux terminaux', 'Type C/E (ronde européenne)', 'Adaptateur nécessaire UK/US — prises limitées'],
          ['Consigne bagages', 'Rez-de-chaussée T1', 'Stockage payant disponible', 'Utile si vous arrivez avant le check-in hôtel'],
          ['Pharmacie', 'Arrivées T1', 'Médicaments basiques disponibles', 'Ouverte aux horaires de vol'],
          ['Hôtel en terminal', 'Adjacent T1', 'ONOMO Hotel — navette gratuite 24/7', 'Cher mais pratique pour vols très tôt/tard'],
        ],
      },
    },
    {
      heading: 'Hôtels Près de l\'Aéroport de Casablanca (CMN)',
      paragraphs: [
        'La plupart des voyageurs utilisent CMN comme point de départ plutôt que de séjour — mais si vous avez un vol très tôt, une arrivée très tardive ou une longue escale, séjourner près de l\'aéroport peut s\'avérer judicieux.',
      ],
      table: {
        caption: 'Meilleurs hôtels près de l\'aéroport de Casablanca (CMN) 2026',
        headers: ['Hôtel', 'Distance CMN', 'Navette', 'Fourchette prix/nuit', 'Idéal pour'],
        rows: [
          ['ONOMO Hotel Casablanca Airport', 'À pied (5 min)', 'Gratuite 24/7', 'MAD 600–1 200 (55–111€)', 'Meilleur choix global — moderne, fiable, pratique'],
          ['Atlas Sky Airport', '5 min en navette', 'Gratuite toutes les 30 min, 24/7', 'MAD 500–900 (46–83€)', 'Bon rapport qualité-prix, bien entretenu'],
          ['Relax Airport Hotel', '8 min en navette', 'Gratuite sur demande', 'MAD 400–700 (37–65€)', 'Option budget — vérifiez la chambre à l\'arrivée'],
          ['Ibis Casablanca Centre-Ville', '35 min en taxi', 'Aucune', 'MAD 450–750 (41–69€)', 'Si vous voulez aussi voir la ville'],
        ],
      },
    },
    {
      heading: 'Conseils Pratiques de Notre Équipe Locale',
      paragraphs: [
        'Ce sont les conseils que nos chauffeurs et notre équipe locale donnent à chaque client avant qu\'il atterrisse à CMN.',
      ],
      list: [
        'Les files d\'immigration à CMN peuvent être longues — 20 à 45 minutes aux heures de pointe (été, jours fériés, vendredi après-midi). Ne planifiez pas de correspondances de moins de 2 heures pour les vols internationaux.',
        'La gare ONCF est au Niveau -1 du Terminal 1. Suivez les panneaux bordeaux. Achetez les billets aux distributeurs, pas à des particuliers sur le quai.',
        'Négociation taxi : convenez du prix AVANT que les bagages entrent dans le coffre. MAD 250–300 est un tarif juste pour le centre-ville. Tarif de nuit (après 20h) plus élevé — c\'est légal.',
        'Des rabatteurs non officiels opèrent dans les arrivées. Passez devant eux complètement avant de chercher un transport.',
        'Le Wi-Fi gratuit nécessite un mot de passe — demandez au bureau d\'information ou cherchez les panneaux dans les arrivées.',
        'Les ATM sont plus fiables que les bureaux de change — meilleurs taux et pas de commission.',
        'Si vous louez une voiture : MoroccoForYou Cars vous attend dans les arrivées avec une pancarte — pas de file, pas d\'attente. Réservez sur WhatsApp avant d\'atterrir.',
        'Les prises électriques à CMN sont de type C (ronde européenne). Les voyageurs UK et US ont besoin d\'un adaptateur.',
        'L\'alcool duty-free ne peut être acheté qu\'en zone départs — pas à l\'arrivée.',
        'Si votre vol arrive à CMN après minuit, le train ONCF circule encore — vérifiez le dernier départ sur l\'appli ONCF (généralement vers minuit–1h).',
      ],
    },
    {
      heading: 'Partir de CMN — Guide des Départs',
      paragraphs: [
        'Arriver tôt pour les départs internationaux depuis CMN est fortement recommandé. Les files de sécurité et d\'immigration peuvent être significatives, particulièrement sur les banques de départ de Royal Air Maroc.',
      ],
      table: {
        caption: 'Recommandations de départ aéroport CMN 2026',
        headers: ['Type de vol', 'Heure d\'arrivée recommandée', 'Raison'],
        rows: [
          ['Long-courrier international (Europe, Amériques, Golfe)', '3 heures avant', 'Sécurité, immigration, files potentielles'],
          ['Court-courrier international (voisins Maroc)', '2 heures avant', 'Plus rapide mais gardez une marge'],
          ['Domestique Maroc (RAM)', '1h30 avant', 'Files plus courtes, pas d\'immigration'],
          ['Low-cost (Ryanair, Transavia) depuis T3', '2h30 avant', 'T3 plus loin — prévoir temps de transfert'],
        ],
      },
      callout: {
        label: '🚕 Rejoindre CMN pour Vos Départs',
        body: 'Train ONCF depuis Casa Voyageurs vers CMN : MAD 50–70, 35 minutes. Dernier train vers minuit. Petit taxi depuis la ville vers la gare : MAD 20–50. Grand taxi direct ville vers CMN : MAD 250–300. MoroccoForYou Cars peut organiser un retour à CMN — à confirmer à la réservation.',
      },
    },
  ],
  faqs: [
    {
      question: 'À quelle distance se trouve l\'aéroport de Casablanca (CMN) du centre-ville ?',
      answer: 'CMN est à environ 30 km au sud du centre de Casablanca. En train ONCF, il faut 35 minutes jusqu\'à la gare Casa Voyageurs. En grand taxi, 45 à 70 minutes selon la circulation. En voiture de location sur l\'autoroute, 35 à 45 minutes.',
    },
    {
      question: 'Combien coûte un taxi depuis l\'aéroport de Casablanca vers le centre-ville ?',
      answer: 'Les grands taxis officiels depuis CMN vers le centre de Casablanca facturent MAD 250–300 (23–28€) de jour. Les tarifs de nuit (après 20h) sont légalement 50% plus élevés. Convenez toujours du prix total avant que vos bagages entrent dans le coffre. Le train ONCF à MAD 50–70 est bien moins cher.',
    },
    {
      question: 'Y a-t-il un train depuis l\'aéroport de Casablanca vers la ville ?',
      answer: 'Oui — la gare ONCF est au Niveau -1 du Terminal 1 (suivez les panneaux bordeaux depuis les arrivées). Les trains circulent toutes les 30 à 60 minutes vers Casa Voyageurs (35 min, MAD 50 en 2e classe) et Casa Port (55 min, MAD 60). Le train circule environ de 5h30 à minuit.',
    },
    {
      question: 'Quel terminal utilise mon vol à CMN ?',
      answer: 'Le Terminal 1 gère la plupart des vols internationaux et dispose de la gare ONCF au Niveau -1. Le Terminal 2 est le hub principal de Royal Air Maroc pour les vols domestiques et de connexion. Le Terminal 3 accueille les low-cost et les charters. Vérifiez votre carte d\'embarquement ou le site de votre compagnie.',
    },
    {
      question: 'Puis-je louer une voiture à l\'aéroport de Casablanca sans faire la queue au comptoir ?',
      answer: 'Oui — MoroccoForYou Cars propose un accueil gratuit directement dans le hall des arrivées de CMN. Votre chauffeur vous attend avec une pancarte à l\'atterrissage. Pas de file, pas d\'attente, pas de frais cachés. Voitures économiques dès MAD 250/jour (23€). Réservez sur WhatsApp : +212 634 276 534.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'L\'aéroport de Casablanca a-t-il le Wi-Fi gratuit ?', answer: 'Oui — CMN propose le Wi-Fi gratuit dans les deux terminaux. Demandez le mot de passe au bureau d\'information ou cherchez le nom du réseau sur les panneaux dans le hall des arrivées. Les débits peuvent être lents aux heures de pointe.' },
    { question: 'Y a-t-il des hôtels à l\'aéroport de Casablanca ?', answer: 'Oui — l\'ONOMO Hotel Casablanca Airport est l\'option la plus proche avec une navette gratuite 24/7. Atlas Sky Airport et Relax Airport Hotel proposent également des navettes gratuites. Les prix vont de MAD 400 à 1 200 la nuit (37–111€).' },
    { question: 'Uber est-il disponible à l\'aéroport de Casablanca ?', answer: 'Non — Uber ne fonctionne pas au Maroc. Utilisez le train ONCF (moins cher), les grands taxis officiels depuis le rang de l\'aéroport (négociez le prix avant de charger les bagages), ou pré-réservez un transfert via votre hôtel ou MoroccoForYou.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'rabat'],
  relatedPosts: ['location-voiture-aeroport-casablanca-cmn', 'comment-aller-aeroport-casablanca-centre-ville', 'guide-voyage-casablanca', 'casablanca-rabat-en-voiture'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل مطار الدار البيضاء CMN 2026 — الصالات والنقل ونصائح من المحليين',
  metaDescription: 'دليل شامل لمطار محمد الخامس الدار البيضاء (CMN) 2026: الصالات، القطار مقابل التاكسي مقابل تأجير السيارة، فنادق قرب CMN، الصالات، Wi-Fi وماذا تفعل عند الوصول.',
  title: 'دليل مطار الدار البيضاء (CMN) الشامل 2026 — كل ما تحتاج معرفته قبل الهبوط',
  description: 'الدليل الوحيد لـCMN المكتوب من أشخاص يعملون هناك. أسعار 2026 الحقيقية للقطارات والتاكسيات وتأجير السيارة، أي صالة تستخدم رحلتك، أين تجد قطار ONCF، كيف تتجنب نصابي التاكسي، فنادق قرب المطار، ولماذا استئجار سيارة في CMN هو في الغالب أفضل قرار أول في رحلتك.',
  keyword: 'دليل مطار الدار البيضاء cmn',
  coverImage: COVER,
  coverAlt: 'صالة الوصول مطار الدار البيضاء محمد الخامس CMN — دليل شامل للصالات والنقل وتأجير السيارة',
  publishedISO: '2026-08-09',
  author: 'عمر ل. — متخصص تأجير السيارات مطار الدار البيضاء',
  readingMinutes: 14,
  intro: 'مطار محمد الخامس الدولي بالدار البيضاء (CMN) هو البوابة الأكثر ازدحاماً في المغرب — أكثر من 10 ملايين مسافر سنوياً وأكثر من 110 وجهة عبر أوروبا وأفريقيا وأمريكا الشمالية والشرق الأوسط. هو أيضاً، بالنسبة لمعظم الزوار الدوليين، أول مكان يلتقون فيه بالمغرب. يغطي هذا الدليل كل شيء: أي صالة تستقبلك، كيف تصل للمدينة أو تبدأ رحلتك البرية، أسعار 2026 الحقيقية لكل خيار نقل، كيف تتعامل مع التاكسيات (مهم)، الفنادق القريبة والمرافق المتاحة. كُتب من فريقنا المقيم في الدار البيضاء الذي يعمل من CMN يومياً.',
  sections: [
    {
      heading: 'مطار الدار البيضاء (CMN) — الأرقام الأساسية',
      paragraphs: [
        'يقع مطار محمد الخامس على بعد 30 كم جنوب شرق وسط مدينة الدار البيضاء، في بلدية نواصر. رمزه IATA هو CMN. يعمل المطار 24 ساعة يومياً 7 أيام أسبوعياً، وهو المحطة الرئيسية للخطوط الملكية المغربية.',
      ],
      table: {
        caption: 'المعلومات الأساسية لمطار CMN 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['الاسم الرسمي', 'مطار محمد الخامس الدولي'],
          ['رمز IATA', 'CMN'],
          ['الموقع', 'نواصر، 30 كم جنوب وسط الدار البيضاء'],
          ['المسافرون السنويون', 'أكثر من 10 ملايين'],
          ['الوجهات المخدومة', 'أكثر من 110 (يونيو 2026)'],
          ['ساعات العمل', '24/7'],
          ['الشركة الرئيسية', 'الخطوط الملكية المغربية (عضو Oneworld)'],
          ['شركات أخرى رئيسية', 'إير فرانس، طيران الإمارات، التركية، رايان إير، ترانسافيا، قطر، إير عربية'],
          ['المسافة لوسط المدينة', '30 كم — 35 دقيقة بالقطار، 45–60 دقيقة بالتاكسي'],
          ['المسافة لمراكش', '240 كم — 2:30 ساعة بالطريق السريع'],
          ['المسافة للرباط', '120 كم — 1:20 ساعة بالطريق السريع'],
        ],
      },
    },
    {
      heading: 'صالات مطار CMN — أيها يخصك؟',
      paragraphs: [
        'يملك CMN ثلاثة مباني للصالات. الصالة 1 والصالة 2 تتعاملان مع الغالبية العظمى من حركة المسافرين. الصالة 3 محجوزة للعمليات الخاصة أو الموسمية.',
      ],
      table: {
        caption: 'دليل صالات مطار الدار البيضاء 2026',
        headers: ['الصالة', 'الرحلات التي تتعامل معها', 'الميزة الرئيسية', 'وصول القطار'],
        rows: [
          ['الصالة 1 (T1)', 'معظم الرحلات الدولية — الأكبر والأحدث', 'دوتي فري، مطاعم، صالات دولية، هجرة', 'محطة ONCF في الطابق -1 ✅'],
          ['الصالة 2 (T2)', 'محطة الخطوط الملكية، داخلي + بعض الدولي', 'تسجيل RAM الرئيسي، متصلة بـT1 بجسر مشاة', 'متصلة بقطار T1 ✅'],
          ['الصالة 3 (T3)', 'شركات منخفضة التكلفة والشارتر/الموسمي', 'مرافق أساسية، مبنى منفصل', 'حافلة مكوك للقطار ⚠️'],
        ],
      },
      callout: {
        label: '💡 أي صالة ستستخدم؟',
        body: 'تحقق من بطاقة صعودك للطائرة لرقم الصالة. معظم الرحلات الأوروبية وطويلة المدى تستخدم الصالة 1. رحلات الخطوط الملكية الداخلية والتوصيل تستخدم أساساً الصالة 2. في حال الشك، تحقق من موقع شركتك الجوية قبل الوصول.',
      },
    },
    {
      heading: 'الانتقال من مطار CMN لوسط المدينة — كل الخيارات مقارنة',
      paragraphs: [
        'أمامك أربعة خيارات واقعية من CMN. إليك المقارنة الصادقة — بما فيها وضع التاكسي الذي يفاجئ معظم الزوار للمرة الأولى.',
      ],
      table: {
        caption: 'CMN لوسط الدار البيضاء — كل خيارات النقل 2026',
        headers: ['الخيار', 'السعر', 'المدة', 'الأنسب لـ', 'الحكم'],
        rows: [
          ['قطار ONCF', 'MAD 50–70 (4.60–6.50€)', '35 دقيقة لـCasa Voyageurs', 'مسافرو الميزانية، منفردون، أمتعة خفيفة', '⭐ أفضل قيمة — سريع، موثوق، بلا ازدحام'],
          ['تاكسي كبير (مشترك)', 'MAD 250–300 (23–28€)', '45–70 دقيقة', 'مجموعات 3–4، توصيل مباشر للفندق', 'جيد لكن تفاوض قبل وضع الأمتعة'],
          ['نقل خاص (محجوز مسبقاً)', 'MAD 400–600 (37–55€)', '45–60 دقيقة', 'عائلات، زوار للمرة الأولى، وصول متأخر', 'الأقل توتراً — السائق ينتظر بلافتة'],
          ['سيارة إيجار (MoroccoForYou)', 'من MAD 250/يوم (23€)', '35–45 دقيقة للطريق السريع', 'مسافرون متابعون لما وراء الدار البيضاء', '⭐ الأفضل للقيادة المتابعة — على الطريق في 20 دقيقة'],
          ['حافلة (CTM/محلية)', 'MAD 40–60 (3.70–5.50€)', '60–90 دقيقة', 'ميزانية، مواعيد مرنة', 'الأبطأ — محطات متعددة، غير موصى به مع أمتعة'],
        ],
      },
    },
    {
      heading: 'قطار ONCF من المطار — كل ما تحتاج معرفته',
      paragraphs: [
        'قطار ONCF هو الخيار الأذكى لمعظم المسافرين الواصلين إلى CMN والمتجهين لوسط الدار البيضاء. المحطة في الطابق -1 من الصالة 1 — اتبع اللافتات البرغندية "Train/ONCF" من صالة الوصول.',
      ],
      table: {
        caption: 'قطار ONCF من CMN — الدليل الكامل 2026',
        headers: ['المسار', 'السعر (درجة 2)', 'مدة الرحلة', 'التكرار', 'ملاحظات'],
        rows: [
          ['CMN ← Casa Voyageurs (المحطة الرئيسية)', 'MAD 50 (4.60€)', '35 دقيقة', 'كل 30–60 دقيقة', 'المحطة المركزية — الأفضل لمعظم الفنادق'],
          ['CMN ← Casa Port (الميناء/المدينة العتيقة)', 'MAD 60 (5.50€)', '55 دقيقة', 'كل 30–60 دقيقة', 'مفيد لفنادق منطقة الميناء/المدينة'],
          ['CMN ← الرباط المدينة', 'MAD 80–100 (7.40–9.25€)', '1:15 ساعة', 'قطارات مباشرة متاحة', 'أفضل خيار قطار للوصول للرباط مباشرة'],
        ],
      },
      callout: {
        label: '🚆 نصائح داخلية للقطار',
        body: 'اشترِ تذكرتك من الآلات في الطابق -1 قبل الركوب — تقبل النقد والبطاقات. لا تشترِ من أي شخص على الرصيف. القطار يعمل 24 ساعة. أول قطار حوالي 5:30 صباحاً، آخر حوالي منتصف الليل — أكد المواعيد في تطبيق ONCF. من Casa Voyageurs، تاكسي صغير لمعظم فنادق الدار البيضاء يكلف MAD 20–50 إضافية.',
      },
    },
    {
      heading: 'التاكسيات في مطار CMN — الدليل الصادق',
      paragraphs: [
        'التاكسيات في مطار الدار البيضاء مصدر إرباك حقيقي لكثير من الزوار للمرة الأولى. إليك ما تحتاج معرفته لتجنب الدفع الزائد.',
        'التاكسيات الكبيرة الرسمية (بيضاء، بيج أو كريمية) تعمل من الموقف المخصص خارج صالات الوصول. الأجرة المنظمة من CMN لوسط الدار البيضاء هي MAD 250–300 للرحلة النهارية. أسعار الليل (بعد 8 مساءً) أعلى قانونياً بـ50%. إلا أن كثيراً من السائقين يقترحون أسعاراً مبالغاً فيها للأجانب.',
        'ثلاث قواعد ستوفر لك المال: اتفق على السعر الإجمالي قبل أن تدخل الأمتعة في الصندوق؛ وضّح أن السعر للمركبة كلها ("toute la course") وليس بالشخص؛ وإذا كان العرض أعلى بكثير من MAD 300 لوسط المدينة، انصرف وجرب السائق التالي.',
      ],
      callout: {
        label: '⚠️ تحذير التاكسي',
        body: 'سماسرة غير رسميين يعملون داخل وخارج صالة الوصول مباشرة — يقتربون منك قبل وصولك لموقف التاكسيات الرسمي. لا تتبعهم. تجاوزهم كلياً، اخرج من صالة الوصول بالكامل، واستخدم موقف التاكسيات الرسمي أو نقلك المحجوز مسبقاً.',
      },
    },
    {
      heading: 'استئجار سيارة في مطار CMN — لماذا هو في الغالب أفضل قرار أول',
      paragraphs: [
        'إذا كان مسارك المغربي يأخذك لما وراء الدار البيضاء — مراكش أو فاس أو شفشاون أو أكادير أو الأطلس أو الصحراء — استلام سيارة إيجار مباشرة من CMN هو تقريباً الخطوة الأولى الأكثر كفاءة. تهبط، سيارتك جاهزة، وفي 20–30 دقيقة أنت على شبكة الطرق السريعة المغربية.',
        'CMN لديه طاولات شركات تأجير دولية (Hertz وAvis وEuropcar وSixt) في الطابق الأرضي من الصالات. هذه الطاولات تعني طوابير — 30–60 دقيقة في أوقات الذروة — وأسعار الطاولة تتضمن في الغالب رسوماً إضافية غير معلنة.',
        'تقدم MoroccoForYou Cars خدمة استقبال مجانية مباشرة في صالة الوصول — سائقك ينتظرك بلافتة عند هبوطك، بلا طابور، بلا طاولة. سيارات اقتصادية من MAD 250/يوم (23€)، داشيا دوستر 4x4 من MAD 350/يوم (32€)، كيلومترات غير محدودة، دعم 24/7.',
      ],
      table: {
        caption: 'المسافات وأوقات القيادة من مطار CMN 2026',
        headers: ['الوجهة', 'المسافة', 'وقت القيادة', 'الرسوم', 'السيارة'],
        rows: [
          ['وسط الدار البيضاء', '30 كم', '35–45 دقيقة', 'بلا رسوم', 'أي سيارة'],
          ['الرباط', '120 كم', '1:20–1:45 ساعة', 'MAD 33', 'أي سيارة'],
          ['مراكش', '240 كم', '2:30–3:00 ساعة', 'MAD 78', 'أي سيارة'],
          ['فاس', '280 كم', '3:30–4:00 ساعة', 'MAD 70', 'أي سيارة'],
          ['طنجة', '360 كم', '3:45–4:30 ساعة', 'MAD 153', 'أي سيارة'],
          ['شفشاون', '350 كم', '4:00–4:30 ساعة', 'MAD 120', 'أي سيارة'],
          ['أكادير', '480 كم', '5:00–5:30 ساعة', 'MAD 164', 'أي سيارة'],
          ['ورززات (عبر تيشكا)', '360 كم', '5:00–6:00 ساعة', 'MAD 78 + جبلي', 'دوستر 4x4'],
          ['مرزوقة/الصحراء', '600 كم', '8:00–9:00 ساعة', 'MAD 78 + صحراء', 'دوستر 4x4'],
        ],
      },
      callout: {
        label: '🚗 احجز سيارتك في CMN',
        body: 'احجز على واتساب قبل الهبوط — اقتصادية من 23€/يوم، دوستر 4x4 من 32€/يوم. استقبال مجاني في صالة الوصول، تأكيد خلال ساعة، بلا رسوم خفية. +212 634 276 534',
      },
    },
    {
      heading: 'مرافق مطار CMN — ما يوجد بالداخل',
      paragraphs: [
        'CMN مطار وظيفي أكثر منه فاخر. المرافق مناسبة لكن ليست استثنائية — مفيد معرفته قبل الوصول لتضبط توقعاتك الصحيحة.',
      ],
      table: {
        caption: 'دليل مرافق مطار CMN 2026',
        headers: ['المرفق', 'الموقع', 'التفاصيل', 'نصيحة'],
        rows: [
          ['Wi-Fi', 'الصالتان', 'مجاني — كلمة المرور عند مكتب المعلومات أو على اللافتات', 'السرعات متغيرة، قد تكون بطيئة في أوقات الذروة'],
          ['أجهزة الصراف (ATM)', 'صالات الوصول، الصالتان', 'CIH، اتيجاريوافا، BMCE متاحة', 'اسحب دراهم عند الوصول — أسعار أفضل من الصرف'],
          ['صرف العملات', 'الوصول + المغادرة', 'عدة نوافذ — الأسعار ليست جيدة', 'استخدم ATM للحصول على أسعار أفضل'],
          ['شرائح SIM', 'متاجر قرب الوصول', 'Maroc Telecom وOrange وInwi متاحة', 'Maroc Telecom لديها أفضل تغطية خارج المدن'],
          ['دوتي فري', 'مغادرات T1', 'دوتي فري دولي قياسي', 'شراء الكحول هنا قبل دخول المغرب'],
          ['مطاعم/مقاهي', 'الصالتان', 'ستاربكس، مقاهي محلية، مطاعم', 'أسعار أعلى بـ30–50% من المدينة'],
          ['الصالات', 'T1', 'صالة RAM Business، Pearl Lounge، Primeclass', 'تصريح يومي متاح — مفيد للرحلات الطويلة'],
          ['غرف الصلاة', 'الصالتان', 'متاحة — اتبع اللافتات', 'مُصانة جيداً، نظيفة'],
          ['مآخذ الكهرباء', 'الصالتان', 'نوع C/E أوروبي مستدير', 'محول مطلوب لـUK/US — مآخذ محدودة'],
          ['أمانات الأمتعة', 'الطابق الأرضي T1', 'تخزين مدفوع متاح', 'مفيد إذا وصلت قبل تسجيل الوصول للفندق'],
          ['صيدلية', 'وصول T1', 'أدوية أساسية متاحة', 'مفتوحة خلال ساعات الرحلات'],
          ['فندق في الصالة', 'مجاور T1', 'ONOMO Hotel — مكوك مجاني 24/7', 'مكلف لكن مريح للرحلات المبكرة/المتأخرة جداً'],
        ],
      },
    },
    {
      heading: 'الفنادق القريبة من مطار الدار البيضاء (CMN)',
      paragraphs: [
        'معظم المسافرين يستخدمون CMN كنقطة انطلاق لا وجهة — لكن إذا كانت رحلتك تبدأ مبكراً جداً أو تصل متأخراً جداً، الإقامة قرب المطار منطقية.',
      ],
      table: {
        caption: 'أفضل فنادق قرب مطار الدار البيضاء (CMN) 2026',
        headers: ['الفندق', 'المسافة من CMN', 'المكوك', 'نطاق السعر/ليلة', 'الأنسب لـ'],
        rows: [
          ['ONOMO Hotel Casablanca Airport', 'مسافة مشي (5 دقائق)', 'مجاني 24/7', 'MAD 600–1,200 (55–111€)', 'الأفضل إجمالاً — حديث، موثوق، مريح'],
          ['Atlas Sky Airport', '5 دقائق بالمكوك', 'مجاني كل 30 دقيقة، 24/7', 'MAD 500–900 (46–83€)', 'قيمة جيدة، مُصان جيداً'],
          ['Relax Airport Hotel', '8 دقائق بالمكوك', 'مجاني عند الطلب', 'MAD 400–700 (37–65€)', 'خيار اقتصادي — أكد حالة الغرفة عند الوصول'],
          ['Ibis Casablanca وسط المدينة', '35 دقيقة بالتاكسي', 'لا مكوك', 'MAD 450–750 (41–69€)', 'إذا أردت رؤية المدينة أيضاً'],
        ],
      },
    },
    {
      heading: 'نصائح عملية من فريقنا المحلي',
      paragraphs: [
        'هذه الأشياء التي يخبرها سائقونا وفريقنا المحلي كل عميل قبل هبوطه في CMN.',
      ],
      list: [
        'طوابير الهجرة في CMN يمكن أن تكون طويلة — 20 إلى 45 دقيقة في أوقات الذروة (الصيف والإجازات وأمسيات الجمعة). لا تخطط لترانزيت أقل من ساعتين للرحلات الدولية.',
        'محطة قطار ONCF في الطابق -1 من الصالة 1. اتبع اللافتات البرغندية. اشترِ التذاكر من الآلات، ليس من أشخاص على الرصيف.',
        'التفاوض مع التاكسي: اتفق على السعر قبل دخول الأمتعة في الصندوق. MAD 250–300 سعر عادل لوسط المدينة. سعر الليل (بعد 8 مساءً) أعلى — هذا قانوني.',
        'سماسرة تاكسي غير رسميين يعملون داخل الوصول. تجاوزهم كلياً قبل البحث عن وسيلة نقل.',
        'Wi-Fi المجاني يتطلب كلمة مرور — اسأل في مكتب المعلومات أو ابحث عن اللافتات في صالة الوصول.',
        'أجهزة الصراف أكثر موثوقية من نوافذ الصرف — أسعار أفضل وبلا عمولة.',
        'إذا استأجرت سيارة: MoroccoForYou Cars ينتظرك في الوصول بلافتة — بلا طابور، بلا انتظار. احجز على واتساب قبل الهبوط.',
        'مآخذ الكهرباء في CMN من نوع C أوروبي مستدير. المسافرون من UK وUS يحتاجون محولاً.',
        'الكحول في الدوتي فري لا يمكن شراؤه إلا في منطقة المغادرة — ليس عند الوصول.',
        'إذا وصلت رحلتك إلى CMN بعد منتصف الليل، قطار ONCF لا يزال يعمل — تحقق من آخر مغادرة في تطبيق ONCF (عادةً حوالي منتصف الليل إلى 1 صباحاً).',
      ],
    },
    {
      heading: 'المغادرة من CMN — دليل الرحلات الصادرة',
      paragraphs: [
        'الوصول مبكراً للرحلات الدولية من CMN موصى به بشدة. طوابير الأمن والهجرة يمكن أن تكون كبيرة، خاصة على موجات المغادرة الرئيسية للخطوط الملكية المغربية.',
      ],
      table: {
        caption: 'توصيات المغادرة من مطار CMN 2026',
        headers: ['نوع الرحلة', 'وقت الوصول الموصى به', 'السبب'],
        rows: [
          ['دولي بعيد المدى (أوروبا، الأمريكتان، الخليج)', '3 ساعات قبل', 'أمن وهجرة وطوابير محتملة'],
          ['دولي قصير المدى (جيران المغرب)', 'ساعتان قبل', 'أسرع لكن احتفظ بهامش'],
          ['محلي مغربي (RAM)', '1:30 ساعة قبل', 'طوابير أقصر، لا هجرة'],
          ['منخفض التكلفة (Ryanair، Transavia) من T3', '2:30 ساعة قبل', 'T3 أبعد — خصص وقت للتنقل'],
        ],
      },
      callout: {
        label: '🚕 الوصول لـCMN للمغادرة',
        body: 'قطار ONCF من Casa Voyageurs لـCMN: MAD 50–70، 35 دقيقة. آخر قطار عادةً حوالي منتصف الليل. تاكسي صغير من المدينة للمحطة: MAD 20–50. تاكسي كبير مباشر من المدينة لـCMN: MAD 250–300. يمكن لـMoroccoForYou Cars ترتيب إعادة السيارة في CMN — أكد عند الحجز.',
      },
    },
  ],
  faqs: [
    {
      question: 'كم تبعد مطار الدار البيضاء (CMN) عن وسط المدينة؟',
      answer: 'CMN على بعد حوالي 30 كم جنوب وسط الدار البيضاء. بقطار ONCF يستغرق 35 دقيقة لمحطة Casa Voyageurs. بسيارة أجرة كبيرة 45 إلى 70 دقيقة حسب الازدحام. بسيارة إيجار على الطريق السريع 35 إلى 45 دقيقة.',
    },
    {
      question: 'كم يكلف التاكسي من مطار الدار البيضاء لوسط المدينة؟',
      answer: 'التاكسيات الكبيرة الرسمية من CMN لوسط الدار البيضاء تتقاضى MAD 250–300 (23–28€) نهاراً. أسعار الليل (بعد 8 مساءً) أعلى قانونياً بـ50%. اتفق دائماً على السعر الإجمالي قبل دخول الأمتعة في الصندوق. قطار ONCF بـMAD 50–70 أرخص بكثير.',
    },
    {
      question: 'هل يوجد قطار من مطار الدار البيضاء للمدينة؟',
      answer: 'نعم — محطة قطار ONCF في الطابق -1 من الصالة 1 (اتبع اللافتات البرغندية من صالة الوصول). القطارات تسير كل 30–60 دقيقة لـCasa Voyageurs (35 دقيقة، MAD 50 درجة ثانية) وCasa Port (55 دقيقة، MAD 60). القطار يعمل حوالي من 5:30 صباحاً حتى منتصف الليل.',
    },
    {
      question: 'أي صالة تستخدم رحلتي في CMN؟',
      answer: 'الصالة 1 تتعامل مع معظم الرحلات الدولية ولديها محطة قطار ONCF في الطابق -1. الصالة 2 هي المحطة الرئيسية للخطوط الملكية للرحلات الداخلية والتوصيل. الصالة 3 تخدم منخفضي التكلفة والشارتر. تحقق من بطاقة صعودك أو موقع شركتك الجوية.',
    },
    {
      question: 'هل يمكنني استئجار سيارة في مطار الدار البيضاء دون الوقوف في طابور؟',
      answer: 'نعم — تقدم MoroccoForYou Cars استقبالاً مجانياً مباشرة في صالة وصول CMN. سائقك ينتظرك بلافتة عند هبوطك. بلا طابور، بلا انتظار، بلا رسوم خفية. سيارات اقتصادية من MAD 250/يوم (23€). احجز على واتساب: +212 634 276 534.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يتوفر Wi-Fi مجاني في مطار الدار البيضاء؟', answer: 'نعم — CMN يوفر Wi-Fi مجانياً في الصالتين. اسأل عن كلمة المرور في مكتب المعلومات أو ابحث عن اسم الشبكة على اللافتات في صالة الوصول. يمكن أن تكون السرعات بطيئة خلال أوقات الذروة.' },
    { question: 'هل تتوفر فنادق في مطار الدار البيضاء؟', answer: 'نعم — ONOMO Hotel Casablanca Airport هو الخيار الأقرب مع مكوك مجاني 24/7. Atlas Sky Airport وRelax Airport Hotel يوفران أيضاً مكوكات مجانية. الأسعار من MAD 400 إلى 1,200 الليلة (37–111€).' },
    { question: 'هل يعمل أوبر في مطار الدار البيضاء؟', answer: 'لا — أوبر لا يعمل في المغرب. استخدم قطار ONCF (الأرخص)، أو التاكسيات الكبيرة الرسمية من موقف المطار (تفاوض على السعر قبل تحميل الأمتعة)، أو احجز مسبقاً نقلاً خاصاً عبر فندقك أو MoroccoForYou.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'rabat'],
  relatedPosts: ['istajar-sayyara-matar-dar-al-bayda-cmn', 'kayfa-tasil-min-matar-al-dar-al-bayda-ila-al-madina', 'dalil-safar-dar-al-bayda', 'min-dar-al-bayda-ila-al-ribat-bis-sayyara'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);