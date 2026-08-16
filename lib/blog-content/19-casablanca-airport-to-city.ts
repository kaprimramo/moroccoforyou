import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'how-to-get-from-casablanca-airport-to-city-centre';
const SLUG_FR = 'comment-aller-aeroport-casablanca-centre-ville';
const SLUG_AR = 'kayfa-tasil-min-matar-al-dar-al-bayda-ila-al-madina';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(36467138);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Casablanca Airport to City Centre 2026: Train, Taxi & Car Prices Compared',
  title: 'Casablanca Airport to City Centre 2026: Train, Taxi & Car Prices Compared',
  metaDescription: 'CMN to Casablanca city centre: ONCF train MAD 50 (35 min), taxi MAD 250-300, or rent a car with free meet & greet. Real 2026 prices and honest advice for every option.',
  description: 'Complete guide to getting from Casablanca Mohammed V Airport (CMN) to the city centre in 2026: train, taxi, car rental, and bus — real prices, real times, and which option is right for you.',
  keyword: 'how to get from casablanca airport to city centre',
  coverImage: COVER,
  coverAlt: 'Casablanca Mohammed V Airport CMN arrivals hall — transport to city centre',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'You have just landed at Casablanca Mohammed V Airport (CMN) — Morocco\'s largest and busiest international gateway. Now you need to get to your hotel in the city centre, or perhaps straight onto the motorway toward Marrakech, Fes or Rabat. The good news: CMN has four reliable transport options and none of them are complicated. The bad news: taxi drivers at CMN are among the most persistent in Morocco. This guide gives you the real 2026 prices, exact journey times, and tells you which option to take for your specific situation.',
  sections: [
    {
      heading: 'Casablanca Airport to City Centre — Quick Comparison',
      paragraphs: [
        'Before diving into the detail, here is the honest comparison of all four options at a glance.',
      ],
      table: {
        caption: 'CMN airport to Casablanca city centre — all options compared 2026',
        headers: ['Option', 'Price (MAD)', 'Price (€)', 'Journey time', 'Best for'],
        rows: [
          ['ONCF Train', '43 MAD', '€4', '35 min', 'Budget travellers, no luggage hassle'],
          ['Petit taxi (metered)', '250–350 MAD', '€23–32', '35–50 min', 'Small groups, door to door'],
          ['Grand taxi (shared)', '60–80 MAD/seat', '€5.50–7.50', '45–60 min', 'Solo budget travellers'],
          ['Car rental (MoroccoForYou)', 'From 320 MAD/day', 'From €29/day', 'Self-drive', 'Road trip, flexibility'],
          ['Private transfer (pre-booked)', '300–450 MAD', '€27–41', '35–50 min', 'Families, heavy luggage'],
        ],
      },
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'The ONCF train is the single best option for 95% of travelers arriving at CMN. It costs 43 MAD (€4), takes exactly 35 minutes to Casa-Voyageurs station, runs every 30 minutes from 6am to 11pm, and has air-conditioning and luggage racks. Skip the taxi queue entirely — follow the "Train" signs from arrivals.',
      },
    },
    {
      heading: 'Option 1: ONCF Train — The Best Way',
      paragraphs: [
        'The ONCF airport train (Al Bidaoui) is Morocco\'s best-kept transport secret. A dedicated rail link connects CMN arrivals directly to Casa-Voyageurs station in the city centre, running every 30 minutes throughout the day. The journey takes exactly 35 minutes and costs 43 MAD (€4) in second class or 70 MAD (€6.50) in first class.',
        'The station entrance is a 3-minute walk from the arrivals hall — follow the "Train / Gare" signs. Trains run from approximately 6:00am to 11:00pm. Buy your ticket at the station booth or from the vending machine (accepts cards). No reservation needed — just turn up and board.',
      ],
      table: {
        caption: 'ONCF airport train schedule and prices — CMN to Casablanca 2026',
        headers: ['Detail', 'Information'],
        rows: [
          ['Departure station', 'Aéroport Mohammed V (CMN)'],
          ['Arrival station', 'Casa-Voyageurs (city centre)'],
          ['Journey time', '35 minutes'],
          ['Frequency', 'Every 30 minutes, 6am–11pm'],
          ['2nd class price', '43 MAD (€4)'],
          ['1st class price', '70 MAD (€6.50)'],
          ['Onward connections', 'Rabat (1h20), Fes (3h30), Marrakech (2h30)'],
          ['Luggage policy', 'Free — large racks available'],
          ['Air conditioning', 'Yes'],
        ],
      },
      callout: {
        label: '💡 Train Connection Tip',
        body: 'Casa-Voyageurs is the main train hub — from here you can connect directly to Rabat (1h20, 55 MAD), Fes (3h30, 115 MAD), or Marrakech (2h30, 95 MAD) without going into the city centre at all. If you are heading straight to another Moroccan city, buy a through-ticket at the airport station.',
      },
    },
    {
      heading: 'Option 2: Petit Taxi — Door to Door',
      paragraphs: [
        'Casablanca petit taxis are red and metered. The official fixed fare from CMN to city centre is 250–350 MAD (€23–32) depending on your exact destination and whether it is day or night. Night rates (after 8pm) are 50% higher — this is legal and displayed on the meter.',
        'The taxi rank is outside the arrivals hall, to the left. Always insist on the meter — "compteur s\'il vous plaît". If a driver refuses the meter, walk to the next taxi. Fixed-price "official" taxi services at CMN charge 300–400 MAD and are legitimate but overpriced compared to a metered taxi.',
      ],
      table: {
        caption: 'Petit taxi fares CMN to Casablanca destinations — 2026',
        headers: ['Destination', 'Day fare (MAD)', 'Night fare (MAD)', 'Journey time'],
        rows: [
          ['Casa-Voyageurs (train station)', '200–250', '300–375', '30–40 min'],
          ['Boulevard Mohammed V (centre)', '250–300', '375–450', '35–45 min'],
          ['Corniche Ain Diab', '300–380', '450–570', '40–55 min'],
          ['Habous quarter', '270–320', '405–480', '35–45 min'],
          ['Casa Port (north)', '300–400', '450–600', '40–55 min'],
        ],
      },
    },
    {
      heading: 'Option 3: Grand Taxi — Budget Option',
      paragraphs: [
        'Grand taxis (large shared taxis, usually Mercedes) operate from a dedicated rank outside arrivals. They take up to 6 passengers and charge per seat — typically 60–80 MAD per person to the city centre. They leave when full, which means waiting 10–30 minutes depending on demand.',
        'Grand taxis are the cheapest motorised option after the train, but they drop you at a fixed terminus (usually near Casa-Voyageurs or Place de la Victoire) rather than at your hotel. Recommended for solo budget travellers who know the city.',
      ],
    },
    {
      heading: 'Option 4: Rent a Car at CMN — Best for Road Trips',
      paragraphs: [
        'If you are planning to drive anywhere in Morocco — Marrakech, Fes, Essaouira, the Sahara — picking up your rental car at CMN is the most logical option. You drive straight out of the airport onto the A7 motorway and you are in Marrakech in 2h30 or Rabat in 45 minutes.',
        'International desks (Hertz, Avis, Europcar, Sixt) are in the arrivals hall, open 24/7. Local agencies including MoroccoForYou Cars deliver to CMN on a meet-and-greet basis — often 15–20% cheaper than the international desks with no hidden airport surcharges. Economy cars from 320 MAD/day (€29), Dacia Duster 4x4 from 450 MAD/day (€41). Book on WhatsApp for instant confirmation.',
      ],
      table: {
        caption: 'Driving from CMN airport — journey times and toll costs 2026',
        headers: ['Destination', 'Distance', 'Drive time', 'Motorway toll (MAD)'],
        rows: [
          ['Casablanca city centre', '35 km', '35–45 min', 'No toll'],
          ['Rabat', '120 km', '1h20', '33 MAD (€3)'],
          ['Marrakech', '240 km', '2h30', '78 MAD (€7)'],
          ['Fes', '280 km', '3h30', '70 MAD (€6.50)'],
          ['Tangier', '360 km', '3h45', '153 MAD (€14)'],
          ['Agadir', '460 km', '4h30', '110 MAD (€10)'],
        ],
      },
      callout: {
        label: '💡 Car Rental Tip',
        body: 'CMN is consistently 10–20% cheaper than Marrakech RAK for the same car category. If your itinerary includes both cities, pick up at CMN and drop off at RAK (or vice versa) — the one-way fee of 400–600 MAD is usually cheaper than renting from the more expensive airport. MoroccoForYou Cars offers airport meet-and-greet from 320 MAD/day — book on WhatsApp.',
      },
    },
    {
      heading: 'Option 5: Pre-Booked Private Transfer',
      paragraphs: [
        'A private transfer (booked in advance through your hotel, riad, or a service like MoroccoForYou) sends a driver with a name board to meet you in arrivals. Price: 300–450 MAD (€27–41) for a standard saloon, 500–700 MAD for a minivan (up to 8 passengers). Journey time: same as taxi, 35–50 minutes.',
        'Best for: families with children, travelers with heavy luggage, elderly passengers, or anyone arriving late at night who wants guaranteed pickup without negotiating. Book 24 hours ahead — same-day booking usually available via WhatsApp.',
      ],
    },
    {
      heading: 'CMN Airport Practical Information',
      paragraphs: [
        'Know these before you land to avoid confusion in the arrivals hall.',
      ],
      table: {
        caption: 'Casablanca Mohammed V Airport (CMN) — essential practical info 2026',
        headers: ['Item', 'Detail'],
        rows: [
          ['Full name', 'Aéroport Mohammed V de Casablanca (CMN)'],
          ['Distance from city', '35 km southeast of Casablanca centre'],
          ['Terminals', '1 main terminal — all arrivals together'],
          ['ATMs', 'Available in arrivals hall — withdraw MAD on arrival'],
          ['Currency exchange', 'Available but rates are worse than ATMs — use ATM'],
          ['SIM cards', 'Inwi, Maroc Telecom, Orange — available in arrivals'],
          ['Left luggage', 'Available near arrivals, 30–50 MAD/item/day'],
          ['Wi-Fi', 'Free in terminal — "CMN Free WiFi"'],
          ['Taxi rank', 'Exit arrivals, turn left'],
          ['Train station', '3-minute walk from arrivals — follow "Train" signs'],
          ['Car rental desks', 'In arrivals hall, right side'],
          ['Tourist police', 'Present in arrivals — approachable for help'],
        ],
      },
    },
    {
      heading: 'Avoiding the CMN Taxi Scams',
      paragraphs: [
        'CMN has a well-documented problem with unofficial taxi touts — men in the arrivals hall (not in uniform) who approach you before you reach the official taxi rank. They quote 600–1,000 MAD for a city centre ride. The correct price is 250–350 MAD on the meter. Simply ignore them, walk past, and go to the official rank or the train station.',
        'The other common scam: a "hotel transfer" service that claims your pre-booked driver has cancelled and offers an alternative at twice the price. If you have pre-booked a transfer, look for your name on a board — do not talk to anyone who approaches you first.',
      ],
      callout: {
        label: '⚠️ Important — avoid this mistake',
        body: 'Never exchange currency with individuals in the arrivals hall — it is illegal and the rate will be terrible. Use the ATMs (Attijariwafa, CIH, BMCE) in the terminal. Withdraw 1,000 MAD minimum on arrival — you will need small bills for taxis and tips.',
      },
    },
  ],
  faqs: [
    {
      question: 'How do I get from Casablanca airport to the city centre?',
      answer: 'The best option is the ONCF train: 43 MAD (€4), 35 minutes, every 30 minutes from 6am to 11pm. Alternatively, metered petit taxi costs 250–350 MAD (€23–32) and takes 35–50 minutes door to door.',
    },
    {
      question: 'How much is a taxi from Casablanca airport to city centre?',
      answer: 'A metered petit taxi costs 250–350 MAD (€23–32) during the day and 375–500 MAD at night (50% night surcharge). Always insist on the meter — "compteur s\'il vous plaît".',
    },
    {
      question: 'Is there a train from Casablanca airport to the city?',
      answer: 'Yes — the ONCF Al Bidaoui train runs every 30 minutes from CMN to Casa-Voyageurs station. Journey time 35 minutes, price 43 MAD (€4) second class. The station is a 3-minute walk from arrivals.',
    },
    {
      question: 'How far is Casablanca airport from the city centre?',
      answer: 'CMN is 35 km southeast of Casablanca city centre — about 35–50 minutes by train or taxi depending on traffic.',
    },
    {
      question: 'Should I rent a car at Casablanca airport?',
      answer: 'Yes — if you plan to drive anywhere in Morocco. CMN is Morocco\'s cheapest car rental hub. Economy cars start at 320 MAD/day (€29) with MoroccoForYou Cars. If you are staying only in Casablanca, take the train — parking in the city is challenging.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I take the train from Casablanca airport to Marrakech?', answer: 'Yes — change at Casa-Voyageurs. Total journey approximately 3h15, price around 138 MAD (€12.50) in second class. Faster by car: 2h30 on the motorway.' },
    { question: 'How long does it take to get from CMN to Casablanca city?', answer: '35 minutes by ONCF train. 35–50 minutes by taxi in normal traffic. Up to 70 minutes during morning or evening rush hour.' },
    { question: 'Is Uber available at Casablanca airport?', answer: 'No — Uber does not operate in Morocco. Use the ONCF train, official metered taxis, or pre-book a transfer through your hotel or MoroccoForYou.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['casablanca-airport-car-rental', 'driving-in-morocco-tips-for-tourists', 'morocco-travel-tips-first-time-visitors'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Comment aller de l\'aéroport de Casablanca au centre-ville 2026',
  metaDescription: 'Aéroport de Casablanca (CMN) au centre-ville : train, taxi, location voiture et bus comparés avec vrais prix 2026, durées et conseils locaux.',
  title: 'Comment aller de l\'aéroport de Casablanca au centre-ville : toutes les options (2026)',
  description: 'Guide complet pour rejoindre le centre de Casablanca depuis l\'aéroport Mohammed V (CMN) en 2026 : train, taxi, location voiture — vrais prix, durées réelles et quelle option choisir.',
  keyword: 'comment aller aéroport casablanca centre ville',
  coverImage: COVER,
  coverAlt: 'Aéroport Mohammed V de Casablanca CMN — transport vers le centre-ville',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'Vous venez d\'atterrir à l\'aéroport Mohammed V de Casablanca (CMN) — la plus grande et la plus fréquentée des portes d\'entrée internationales du Maroc. Il vous faut maintenant rejoindre votre hôtel en centre-ville, ou peut-être directement l\'autoroute vers Marrakech, Fès ou Rabat. La bonne nouvelle : CMN dispose de quatre options de transport fiables et aucune n\'est compliquée. La mauvaise nouvelle : les chauffeurs de taxi à CMN sont parmi les plus insistants du Maroc. Ce guide vous donne les vrais prix 2026, les durées exactes et vous dit quelle option prendre selon votre situation.',
  sections: [
    {
      heading: 'Aéroport de Casablanca au centre-ville — comparaison rapide',
      paragraphs: [
        'Avant d\'entrer dans les détails, voici la comparaison honnête des quatre options en un coup d\'œil.',
      ],
      table: {
        caption: 'CMN aéroport au centre de Casablanca — toutes options comparées 2026',
        headers: ['Option', 'Prix (MAD)', 'Prix (€)', 'Durée', 'Idéal pour'],
        rows: [
          ['Train ONCF', '43 MAD', '4€', '35 min', 'Voyageurs budget, pas de galère bagages'],
          ['Petit taxi (compteur)', '250–350 MAD', '23–32€', '35–50 min', 'Petits groupes, porte-à-porte'],
          ['Grand taxi (partagé)', '60–80 MAD/place', '5,50–7,50€', '45–60 min', 'Voyageurs solo budget'],
          ['Location voiture (MoroccoForYou)', 'Dès 320 MAD/jour', 'Dès 29€/jour', 'Conduite perso', 'Road trip, flexibilité'],
          ['Transfert privé (pré-réservé)', '300–450 MAD', '27–41€', '35–50 min', 'Familles, gros bagages'],
        ],
      },
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'Le train ONCF est la meilleure option pour 95% des voyageurs arrivant à CMN. Il coûte 43 MAD (4€), met exactement 35 minutes jusqu\'à la gare Casa-Voyageurs, passe toutes les 30 minutes de 6h à 23h, et dispose de la climatisation et de porte-bagages. Évitez complètement la file de taxis — suivez les panneaux "Train" depuis les arrivées.',
      },
    },
    {
      heading: 'Option 1 : Train ONCF — Le meilleur choix',
      paragraphs: [
        'Le train aéroport ONCF (Al Bidaoui) est le meilleur secret transport du Maroc. Une liaison ferroviaire dédiée relie directement les arrivées de CMN à la gare Casa-Voyageurs en centre-ville, toutes les 30 minutes. Le trajet dure exactement 35 minutes et coûte 43 MAD (4€) en 2e classe ou 70 MAD (6,50€) en 1re classe.',
        'L\'entrée de la gare est à 3 minutes à pied du hall des arrivées — suivez les panneaux "Train / Gare". Les trains circulent d\'environ 6h à 23h. Achetez votre billet au guichet ou au distributeur automatique (accepte les cartes). Pas de réservation nécessaire — présentez-vous et montez.',
      ],
      table: {
        caption: 'Train ONCF aéroport — horaires et tarifs CMN vers Casablanca 2026',
        headers: ['Détail', 'Information'],
        rows: [
          ['Gare de départ', 'Aéroport Mohammed V (CMN)'],
          ['Gare d\'arrivée', 'Casa-Voyageurs (centre-ville)'],
          ['Durée du trajet', '35 minutes'],
          ['Fréquence', 'Toutes les 30 min, 6h–23h'],
          ['Tarif 2e classe', '43 MAD (4€)'],
          ['Tarif 1re classe', '70 MAD (6,50€)'],
          ['Correspondances', 'Rabat (1h20), Fès (3h30), Marrakech (2h30)'],
          ['Politique bagages', 'Gratuit — grands porte-bagages'],
          ['Climatisation', 'Oui'],
        ],
      },
      callout: {
        label: '💡 Astuce correspondance',
        body: 'Casa-Voyageurs est le hub ferroviaire principal — de là vous pouvez rejoindre directement Rabat (1h20, 55 MAD), Fès (3h30, 115 MAD) ou Marrakech (2h30, 95 MAD) sans entrer en centre-ville. Si vous rejoignez directement une autre ville, achetez un billet direct à la gare de l\'aéroport.',
      },
    },
    {
      heading: 'Option 2 : Petit taxi — Porte à porte',
      paragraphs: [
        'Les petits taxis de Casablanca sont rouges et équipés d\'un compteur. Le tarif officiel de CMN au centre-ville est de 250–350 MAD (23–32€) selon votre destination exacte et l\'heure. Les tarifs de nuit (après 20h) sont 50% plus élevés — c\'est légal et affiché sur le compteur.',
        'La station de taxis est à l\'extérieur du hall des arrivées, à gauche. Insistez toujours sur le compteur — "compteur s\'il vous plaît". Si un chauffeur refuse le compteur, passez au taxi suivant.',
      ],
      table: {
        caption: 'Tarifs petit taxi CMN vers destinations Casablanca — 2026',
        headers: ['Destination', 'Tarif jour (MAD)', 'Tarif nuit (MAD)', 'Durée'],
        rows: [
          ['Casa-Voyageurs (gare)', '200–250', '300–375', '30–40 min'],
          ['Boulevard Mohammed V (centre)', '250–300', '375–450', '35–45 min'],
          ['Corniche Ain Diab', '300–380', '450–570', '40–55 min'],
          ['Quartier Habous', '270–320', '405–480', '35–45 min'],
          ['Casa Port (nord)', '300–400', '450–600', '40–55 min'],
        ],
      },
    },
    {
      heading: 'Option 3 : Grand taxi — Option budget',
      paragraphs: [
        'Les grands taxis (taxis partagés, généralement des Mercedes) opèrent depuis une station dédiée à l\'extérieur des arrivées. Ils prennent jusqu\'à 6 passagers et facturent par place — généralement 60–80 MAD par personne jusqu\'au centre-ville. Ils partent quand ils sont pleins, soit 10–30 minutes d\'attente.',
        'Les grands taxis sont l\'option motorisée la moins chère après le train, mais ils vous déposent à un terminus fixe (généralement près de Casa-Voyageurs) plutôt qu\'à votre hôtel. Recommandé aux voyageurs solo budget qui connaissent la ville.',
      ],
    },
    {
      heading: 'Option 4 : Location voiture à CMN — Idéal pour les road trips',
      paragraphs: [
        'Si vous prévoyez de conduire n\'importe où au Maroc — Marrakech, Fès, Essaouira, le Sahara — récupérer votre voiture de location à CMN est l\'option la plus logique. Vous sortez directement de l\'aéroport sur l\'autoroute A7 et vous êtes à Marrakech en 2h30 ou à Rabat en 45 minutes.',
        'Les comptoirs internationaux (Hertz, Avis, Europcar, Sixt) sont dans le hall des arrivées, ouverts 24h/24. Les agences locales dont MoroccoForYou Cars livrent à CMN en meet & greet — souvent 15–20% moins chères que les comptoirs internationaux. Voitures économiques dès 320 MAD/jour (29€), Dacia Duster 4x4 dès 450 MAD/jour (41€). Réservez sur WhatsApp pour confirmation immédiate.',
      ],
      table: {
        caption: 'Conduire depuis l\'aéroport CMN — durées et péages 2026',
        headers: ['Destination', 'Distance', 'Durée', 'Péage autoroute (MAD)'],
        rows: [
          ['Centre de Casablanca', '35 km', '35–45 min', 'Pas de péage'],
          ['Rabat', '120 km', '1h20', '33 MAD (3€)'],
          ['Marrakech', '240 km', '2h30', '78 MAD (7€)'],
          ['Fès', '280 km', '3h30', '70 MAD (6,50€)'],
          ['Tanger', '360 km', '3h45', '153 MAD (14€)'],
          ['Agadir', '460 km', '4h30', '110 MAD (10€)'],
        ],
      },
      callout: {
        label: '💡 Conseil location voiture',
        body: 'CMN est systématiquement 10–20% moins cher que Marrakech RAK pour la même catégorie de véhicule. Si votre itinéraire inclut les deux villes, prenez à CMN et rendez à RAK (ou l\'inverse) — le supplément aller simple de 400–600 MAD est souvent moins cher que louer depuis l\'aéroport le plus onéreux. MoroccoForYou Cars propose le meet & greet aéroport dès 320 MAD/jour — réservez sur WhatsApp.',
      },
    },
    {
      heading: 'Option 5 : Transfert privé pré-réservé',
      paragraphs: [
        'Un transfert privé (réservé à l\'avance via votre hôtel, riad ou un service comme MoroccoForYou) envoie un chauffeur avec un panneau nominatif vous accueillir aux arrivées. Prix : 300–450 MAD (27–41€) pour une berline standard, 500–700 MAD pour un minivan (jusqu\'à 8 passagers). Durée : identique au taxi, 35–50 minutes.',
        'Idéal pour : familles avec enfants, voyageurs avec gros bagages, personnes âgées, ou toute personne arrivant tard la nuit qui souhaite un retrait garanti sans négociation. Réservez 24h à l\'avance — réservation le jour même généralement disponible sur WhatsApp.',
      ],
    },
    {
      heading: 'Informations pratiques sur l\'aéroport CMN',
      paragraphs: [
        'À connaître avant d\'atterrir pour éviter toute confusion dans le hall des arrivées.',
      ],
      table: {
        caption: 'Aéroport Mohammed V de Casablanca (CMN) — infos pratiques essentielles 2026',
        headers: ['Élément', 'Détail'],
        rows: [
          ['Nom complet', 'Aéroport Mohammed V de Casablanca (CMN)'],
          ['Distance du centre-ville', '35 km au sud-est du centre de Casablanca'],
          ['Terminaux', '1 terminal principal — toutes les arrivées ensemble'],
          ['Distributeurs (DAB)', 'Disponibles dans le hall des arrivées — retirez des MAD à l\'arrivée'],
          ['Change de devises', 'Disponible mais taux inférieurs aux DAB — utilisez un DAB'],
          ['Cartes SIM', 'Inwi, Maroc Telecom, Orange — disponibles aux arrivées'],
          ['Consigne bagages', 'Disponible près des arrivées, 30–50 MAD/bagage/jour'],
          ['Wi-Fi', 'Gratuit dans le terminal — "CMN Free WiFi"'],
          ['Station de taxis', 'Sortie arrivées, tourner à gauche'],
          ['Gare ferroviaire', '3 minutes à pied des arrivées — suivre panneaux "Train"'],
          ['Comptoirs location voiture', 'Dans le hall des arrivées, côté droit'],
          ['Police touristique', 'Présente aux arrivées — accessible pour demander de l\'aide'],
        ],
      },
    },
    {
      heading: 'Éviter les arnaques taxi à CMN',
      paragraphs: [
        'CMN a un problème bien documenté de rabatteurs taxi non officiels — des hommes dans le hall des arrivées (pas en uniforme) qui vous approchent avant que vous n\'atteigniez la station officielle. Ils citent 600–1 000 MAD pour une course en centre-ville. Le prix correct est 250–350 MAD au compteur. Ignorez-les simplement, passez votre chemin et allez à la station officielle ou à la gare.',
        'L\'autre arnaque courante : un service de "transfert hôtel" qui prétend que votre chauffeur pré-réservé a annulé et propose une alternative au double du prix. Si vous avez pré-réservé un transfert, cherchez votre nom sur un panneau — ne parlez pas à quelqu\'un qui vous approche en premier.',
      ],
      callout: {
        label: '⚠️ Important — évitez cette erreur',
        body: 'Ne changez jamais de devises avec des particuliers dans le hall des arrivées — c\'est illégal et le taux sera désastreux. Utilisez les DAB (Attijariwafa, CIH, BMCE) dans le terminal. Retirez 1 000 MAD minimum à l\'arrivée — vous aurez besoin de petites coupures pour les taxis et les pourboires.',
      },
    },
  ],
  faqs: [
    {
      question: 'Comment aller de l\'aéroport de Casablanca au centre-ville ?',
      answer: 'La meilleure option est le train ONCF : 43 MAD (4€), 35 minutes, toutes les 30 minutes de 6h à 23h. Alternativement, le petit taxi à compteur coûte 250–350 MAD (23–32€) et prend 35–50 minutes porte à porte.',
    },
    {
      question: 'Combien coûte un taxi de l\'aéroport de Casablanca au centre-ville ?',
      answer: 'Un petit taxi à compteur coûte 250–350 MAD (23–32€) de jour et 375–500 MAD de nuit (majoration de nuit 50%). Insistez toujours sur le compteur — "compteur s\'il vous plaît".',
    },
    {
      question: 'Y a-t-il un train de l\'aéroport de Casablanca vers la ville ?',
      answer: 'Oui — le train ONCF Al Bidaoui passe toutes les 30 minutes de CMN à la gare Casa-Voyageurs. Durée 35 minutes, prix 43 MAD (4€) en 2e classe. La gare est à 3 minutes à pied des arrivées.',
    },
    {
      question: 'À quelle distance l\'aéroport de Casablanca est-il du centre-ville ?',
      answer: 'CMN est à 35 km au sud-est du centre de Casablanca — environ 35–50 minutes en train ou taxi selon le trafic.',
    },
    {
      question: 'Dois-je louer une voiture à l\'aéroport de Casablanca ?',
      answer: 'Oui — si vous prévoyez de conduire n\'importe où au Maroc. CMN est le hub de location le moins cher du Maroc. Voitures économiques dès 320 MAD/jour (29€) avec MoroccoForYou Cars. Si vous restez uniquement à Casablanca, prenez le train — le stationnement en ville est difficile.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on prendre le train de l\'aéroport de Casablanca à Marrakech ?', answer: 'Oui — avec changement à Casa-Voyageurs. Durée totale environ 3h15, prix autour de 138 MAD (12,50€) en 2e classe. Plus rapide en voiture : 2h30 sur l\'autoroute.' },
    { question: 'Combien de temps met-on de CMN au centre de Casablanca ?', answer: '35 minutes en train ONCF. 35–50 minutes en taxi en conditions normales. Jusqu\'à 70 minutes aux heures de pointe.' },
    { question: 'Uber est-il disponible à l\'aéroport de Casablanca ?', answer: 'Non — Uber ne fonctionne pas au Maroc. Utilisez le train ONCF, les taxis officiels à compteur, ou pré-réservez un transfert via votre hôtel ou MoroccoForYou.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['conduire-au-maroc-conseils-touristes', 'location-voiture-aeroport-fes-maroc', 'conseils-premier-voyage-au-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'كيف تصل من مطار الدار البيضاء إلى وسط المدينة 2026',
  metaDescription: 'مطار الدار البيضاء (CMN) إلى وسط المدينة: القطار والتاكسي وتأجير السيارات مقارنة بأسعار حقيقية 2026 وأوقات الرحلة ونصائح محلية.',
  title: 'كيف تصل من مطار الدار البيضاء إلى وسط المدينة: كل الخيارات (2026)',
  description: 'دليل شامل للانتقال من مطار محمد الخامس (CMN) إلى وسط الدار البيضاء في 2026: قطار وتاكسي وتأجير سيارة — أسعار حقيقية وأوقات فعلية وأي خيار يناسبك.',
  keyword: 'كيف تصل من مطار الدار البيضاء إلى وسط المدينة',
  coverImage: COVER,
  coverAlt: 'صالة وصول مطار محمد الخامس CMN — النقل إلى وسط المدينة',
  publishedISO: '2026-06-03',
  author: 'فريق MoroccoForYou',
  readingMinutes: 9,
  intro: 'لقد هبطت للتو في مطار محمد الخامس بالدار البيضاء (CMN) — أكبر وأكثر بوابات المغرب الدولية ازدحاماً. تحتاج الآن للوصول إلى فندقك في وسط المدينة، أو ربما مباشرةً إلى الطريق السريع نحو مراكش أو فاس أو الرباط. البشرى السارة: CMN يملك أربعة خيارات نقل موثوقة ولا شيء منها معقد. البشرى السيئة: سائقو سيارات الأجرة في CMN من بين الأكثر إلحاحاً في المغرب. هذا الدليل يعطيك الأسعار الحقيقية لعام 2026 وأوقات الرحلة الدقيقة ويخبرك بالخيار الأنسب لوضعك.',
  sections: [
    {
      heading: 'من مطار الدار البيضاء إلى وسط المدينة — مقارنة سريعة',
      paragraphs: [
        'قبل الغوص في التفاصيل، إليك المقارنة الصادقة لجميع الخيارات الأربعة دفعة واحدة.',
      ],
      table: {
        caption: 'مطار CMN إلى وسط الدار البيضاء — جميع الخيارات مقارنة 2026',
        headers: ['الخيار', 'السعر (درهم)', 'السعر (€)', 'وقت الرحلة', 'الأنسب لـ'],
        rows: [
          ['قطار ONCF', '43 درهم', '4€', '35 دقيقة', 'المسافرون الاقتصاديون، بدون ضغط الأمتعة'],
          ['سيارة أجرة صغيرة (عداد)', '250–350 درهم', '23–32€', '35–50 دقيقة', 'مجموعات صغيرة، من الباب للباب'],
          ['سيارة أجرة كبيرة (مشتركة)', '60–80 درهم/مقعد', '5.50–7.50€', '45–60 دقيقة', 'المسافرون المنفردون ذوو الميزانية'],
          ['تأجير سيارة (MoroccoForYou)', 'من 320 درهم/يوم', 'من 29€/يوم', 'قيادة ذاتية', 'الرحلات البرية، المرونة'],
          ['نقل خاص (محجوز مسبقاً)', '300–450 درهم', '27–41€', '35–50 دقيقة', 'العائلات، الأمتعة الثقيلة'],
        ],
      },
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'قطار ONCF هو أفضل خيار لـ95% من المسافرين القادمين إلى CMN. يكلف 43 درهم (4€)، يستغرق 35 دقيقة بالضبط إلى محطة كازا-فواياجور، يمر كل 30 دقيقة من 6 صباحاً إلى 11 مساءً، ومكيّف الهواء وبه أرفف للأمتعة. تجنّب طابور التاكسي كلياً — اتبع لافتات "Train" من صالة الوصول.',
      },
    },
    {
      heading: 'الخيار 1: قطار ONCF — الأفضل على الإطلاق',
      paragraphs: [
        'قطار مطار ONCF (البيضاوي) أفضل سر نقل في المغرب. خط سكة حديد مخصص يربط مباشرةً بين صالة وصول CMN ومحطة كازا-فواياجور في وسط المدينة، كل 30 دقيقة. مدة الرحلة 35 دقيقة بالضبط، السعر 43 درهم (4€) في الدرجة الثانية أو 70 درهم (6.50€) في الأولى.',
        'مدخل المحطة على بُعد 3 دقائق سيراً من صالة الوصول — اتبع لافتات "Train / Gare". القطارات تعمل من حوالي 6 صباحاً إلى 11 مساءً. اشترِ تذكرتك من الشباك أو من آلة التذاكر (تقبل البطاقات). لا حجز مسبق — اظهر فحسب وركب.',
      ],
      table: {
        caption: 'جدول قطار مطار ONCF وأسعاره — CMN إلى الدار البيضاء 2026',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['محطة المغادرة', 'مطار محمد الخامس (CMN)'],
          ['محطة الوصول', 'كازا-فواياجور (وسط المدينة)'],
          ['مدة الرحلة', '35 دقيقة'],
          ['التكرار', 'كل 30 دقيقة، 6 صباحاً–11 مساءً'],
          ['سعر الدرجة الثانية', '43 درهم (4€)'],
          ['سعر الدرجة الأولى', '70 درهم (6.50€)'],
          ['اتصالات أخرى', 'الرباط (1س20د)، فاس (3س30د)، مراكش (2س30د)'],
          ['سياسة الأمتعة', 'مجاني — أرفف كبيرة متاحة'],
          ['تكييف الهواء', 'نعم'],
        ],
      },
      callout: {
        label: '💡 نصيحة الاتصال بالقطار',
        body: 'كازا-فواياجور هي المحطة المركزية الرئيسية — منها يمكنك الاتصال مباشرةً بالرباط (1س20د، 55 درهم) أو فاس (3س30د، 115 درهم) أو مراكش (2س30د، 95 درهم) دون دخول وسط المدينة. إذا كنت متجهاً مباشرةً لمدينة أخرى، اشترِ تذكرة مباشرة من محطة المطار.',
      },
    },
    {
      heading: 'الخيار 2: سيارة الأجرة الصغيرة — من الباب للباب',
      paragraphs: [
        'سيارات الأجرة الصغيرة في الدار البيضاء حمراء ومزودة بعداد. الأجرة الرسمية من CMN إلى وسط المدينة 250–350 درهم (23–32€) حسب وجهتك الدقيقة وتوقيت الرحلة. أسعار الليل (بعد الساعة 8 مساءً) أعلى بـ50% — هذا قانوني ويظهر على العداد.',
        'موقف التاكسي خارج صالة الوصول، على اليسار. أصِرّ دائماً على العداد. إن رفض السائق، انتقل للتاكسي التالي.',
      ],
      table: {
        caption: 'أجرة سيارة الأجرة الصغيرة من CMN إلى وجهات الدار البيضاء — 2026',
        headers: ['الوجهة', 'أجرة النهار (درهم)', 'أجرة الليل (درهم)', 'المدة'],
        rows: [
          ['كازا-فواياجور (المحطة)', '200–250', '300–375', '30–40 دقيقة'],
          ['شارع محمد الخامس (الوسط)', '250–300', '375–450', '35–45 دقيقة'],
          ['كورنيش عين الذئاب', '300–380', '450–570', '40–55 دقيقة'],
          ['حي الحبوس', '270–320', '405–480', '35–45 دقيقة'],
          ['الدار البيضاء ميناء (شمال)', '300–400', '450–600', '40–55 دقيقة'],
        ],
      },
    },
    {
      heading: 'الخيار 3: سيارة الأجرة الكبيرة — الخيار الاقتصادي',
      paragraphs: [
        'سيارات الأجرة الكبيرة (تاكسي مشترك، عادةً مرسيدس) تعمل من موقف مخصص خارج صالة الوصول. تأخذ حتى 6 ركاب وتحسب بالمقعد — عادةً 60–80 درهم للشخص إلى وسط المدينة. تغادر حين تمتلئ، مما يعني انتظار 10–30 دقيقة.',
        'سيارات الأجرة الكبيرة هي الخيار المحرّك الأرخص بعد القطار، لكنها تنزلك في محطة ثابتة (عادةً قرب كازا-فواياجور) لا عند فندقك. موصى بها للمسافرين المنفردين ذوي الميزانية المحدودة الذين يعرفون المدينة.',
      ],
    },
    {
      heading: 'الخيار 4: تأجير سيارة من CMN — الأفضل للرحلات البرية',
      paragraphs: [
        'إذا كنت تخطط للقيادة في أي مكان بالمغرب — مراكش أو فاس أو الصويرة أو الصحراء — استلام سيارتك المستأجرة في CMN هو الخيار الأكثر منطقية. تخرج مباشرةً من المطار على الطريق السريع A7 وتكون في مراكش خلال ساعتين ونصف أو في الرباط خلال 45 دقيقة.',
        'طاولات دولية (هيرتز، أفيس، يوروبكار، سيكست) في صالة الوصول، مفتوحة 24/7. الوكالات المحلية بما فيها MoroccoForYou Cars توصل إلى CMN بنظام الاستقبال — غالباً أرخص بـ15–20% من الطاولات الدولية. سيارات اقتصادية من 320 درهم/يوم (29€)، داشيا دوستر 4×4 من 450 درهم/يوم (41€). احجز عبر واتساب لتأكيد فوري.',
      ],
      table: {
        caption: 'القيادة من مطار CMN — أوقات الرحلة والرسوم 2026',
        headers: ['الوجهة', 'المسافة', 'وقت القيادة', 'رسوم الطريق السريع (درهم)'],
        rows: [
          ['وسط الدار البيضاء', '35 كم', '35–45 دقيقة', 'بدون رسوم'],
          ['الرباط', '120 كم', '1س20د', '33 درهم (3€)'],
          ['مراكش', '240 كم', '2س30د', '78 درهم (7€)'],
          ['فاس', '280 كم', '3س30د', '70 درهم (6.50€)'],
          ['طنجة', '360 كم', '3س45د', '153 درهم (14€)'],
          ['أغادير', '460 كم', '4س30د', '110 درهم (10€)'],
        ],
      },
      callout: {
        label: '💡 نصيحة تأجير السيارة',
        body: 'CMN أرخص باستمرار بـ10–20% من مراكش RAK لنفس الفئة. إذا كان مسارك يشمل المدينتين، استلم من CMN وسلّم في RAK (أو العكس) — رسوم الذهاب فقط (400–600 درهم) أرخص عادةً من الاستئجار من المطار الأغلى. MoroccoForYou Cars تقدم الاستقبال بالمطار من 320 درهم/يوم — احجز عبر واتساب.',
      },
    },
    {
      heading: 'الخيار 5: نقل خاص محجوز مسبقاً',
      paragraphs: [
        'نقل خاص (محجوز مسبقاً عبر فندقك أو رياضك أو خدمة كـMoroccoForYou) يرسل سائقاً بلافتة بالاسم لاستقبالك في صالة الوصول. السعر: 300–450 درهم (27–41€) لسيدان عادية، 500–700 درهم لميكروباص (حتى 8 ركاب). المدة: مطابقة للتاكسي، 35–50 دقيقة.',
        'الأنسب لـ: العائلات مع أطفال، المسافرين بأمتعة ثقيلة، أو أي شخص يصل متأخراً ليلاً ويريد استقبالاً مضموناً. احجز قبل 24 ساعة — الحجز في نفس اليوم متاح عادةً عبر واتساب.',
      ],
    },
    {
      heading: 'معلومات عملية عن مطار CMN',
      paragraphs: [
        'اعرفها قبل الهبوط لتجنّب الارتباك في صالة الوصول.',
      ],
      table: {
        caption: 'مطار محمد الخامس بالدار البيضاء (CMN) — معلومات عملية أساسية 2026',
        headers: ['العنصر', 'التفصيل'],
        rows: [
          ['الاسم الكامل', 'مطار محمد الخامس بالدار البيضاء (CMN)'],
          ['المسافة من المدينة', '35 كم جنوب شرق وسط الدار البيضاء'],
          ['المحطات', 'محطة رئيسية واحدة — جميع الوصولات معاً'],
          ['أجهزة ATM', 'متوفرة في صالة الوصول — اسحب درهماً عند الوصول'],
          ['صرف العملات', 'متوفر لكن أسعاره أسوأ من ATM — استخدم ATM'],
          ['شرائح SIM', 'إنوي، اتصالات المغرب، أورنج — متوفرة في الوصول'],
          ['أمانات', 'متوفرة قرب الوصول، 30–50 درهم/أمانة/يوم'],
          ['Wi-Fi', 'مجاني في المحطة — "CMN Free WiFi"'],
          ['موقف التاكسي', 'اخرج من صالة الوصول، اتجه لليسار'],
          ['المحطة القطارية', '3 دقائق سيراً من الوصول — اتبع لافتات "Train"'],
          ['طاولات تأجير السيارات', 'في صالة الوصول، الجانب الأيمن'],
          ['الشرطة السياحية', 'موجودة في الوصول — يمكن التواصل معها للمساعدة'],
        ],
      },
    },
    {
      heading: 'تجنّب عمليات نصب التاكسي في CMN',
      paragraphs: [
        'CMN يعاني من مشكلة موثّقة مع سماسرة التاكسي غير الرسميين — رجال في صالة الوصول (ليسوا بزيّ رسمي) يقتربون منك قبل وصولك للموقف الرسمي. يطلبون 600–1000 درهم للذهاب لوسط المدينة. السعر الصحيح 250–350 درهم بالعداد. تجاهلهم ببساطة وتوجّه للموقف الرسمي أو محطة القطار.',
        'النصب الآخر الشائع: خدمة "نقل فندقي" تدّعي أن سائقك المحجوز مسبقاً ألغى وتعرض بديلاً بضعف السعر. إذا حجزت نقلاً مسبقاً، ابحث عن اسمك على لافتة — لا تتكلم مع من يقترب منك أولاً.',
      ],
      callout: {
        label: '⚠️ مهم — تجنّب هذا الخطأ',
        body: 'لا تصرف العملة أبداً مع أفراد في صالة الوصول — هذا غير قانوني والسعر سيكون كارثياً. استخدم أجهزة ATM (التجاري وفا بنك، CIH، BMCE) في المحطة. اسحب 1000 درهم على الأقل عند الوصول — ستحتاج أوراقاً صغيرة للتاكسيات والبقشيش.',
      },
    },
  ],
  faqs: [
    {
      question: 'كيف أصل من مطار الدار البيضاء إلى وسط المدينة؟',
      answer: 'أفضل خيار هو قطار ONCF: 43 درهم (4€)، 35 دقيقة، كل 30 دقيقة من 6 صباحاً إلى 11 مساءً. بديلاً، سيارة الأجرة الصغيرة بالعداد تكلف 250–350 درهم (23–32€) وتستغرق 35–50 دقيقة من الباب للباب.',
    },
    {
      question: 'كم تكلف سيارة الأجرة من مطار الدار البيضاء إلى وسط المدينة؟',
      answer: 'سيارة أجرة صغيرة بعداد تكلف 250–350 درهم (23–32€) نهاراً و375–500 درهم ليلاً (زيادة ليلية 50%). أصِرّ دائماً على العداد.',
    },
    {
      question: 'هل يوجد قطار من مطار الدار البيضاء إلى المدينة؟',
      answer: 'نعم — قطار ONCF البيضاوي يمر كل 30 دقيقة من CMN إلى محطة كازا-فواياجور. مدة الرحلة 35 دقيقة، سعر 43 درهم (4€) في الدرجة الثانية. المحطة على بُعد 3 دقائق سيراً من الوصول.',
    },
    {
      question: 'كم المسافة بين مطار الدار البيضاء ووسط المدينة؟',
      answer: 'CMN على بُعد 35 كم جنوب شرق وسط الدار البيضاء — حوالي 35–50 دقيقة بالقطار أو التاكسي حسب حركة المرور.',
    },
    {
      question: 'هل أستأجر سيارة من مطار الدار البيضاء؟',
      answer: 'نعم — إذا كنت تخطط للقيادة في أي مكان بالمغرب. CMN هو مركز تأجير السيارات الأرخص في المغرب. سيارات اقتصادية من 320 درهم/يوم (29€) مع MoroccoForYou Cars. إذا كنت ستبقى فقط في الدار البيضاء، خذ القطار — الإيقاف في المدينة صعب.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يمكن أخذ القطار من مطار الدار البيضاء إلى مراكش؟', answer: 'نعم — مع تغيير في كازا-فواياجور. إجمالي مدة الرحلة حوالي 3 ساعات و15 دقيقة، بسعر حوالي 138 درهم (12.50€) في الدرجة الثانية. أسرع بالسيارة: 2.5 ساعة على الطريق السريع.' },
    { question: 'كم يستغرق الانتقال من CMN إلى وسط الدار البيضاء؟', answer: '35 دقيقة بقطار ONCF. 35–50 دقيقة بالتاكسي في الأوضاع الطبيعية. حتى 70 دقيقة في ساعات الذروة.' },
    { question: 'هل أوبر متوفر في مطار الدار البيضاء؟', answer: 'لا — أوبر لا يعمل في المغرب. استخدم قطار ONCF أو سيارات الأجرة الرسمية بعداد، أو احجز نقلاً مسبقاً عبر فندقك أو MoroccoForYou.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['qiyadat-al-sayyara-fi-al-maghrib', 'istajar-sayyara-matar-fas-al-maghrib', 'nasaeh-li-ziyarat-al-maghrib-li-awwal-marra'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);