import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'casablanca-to-agadir-by-car';
const SLUG_FR = 'casablanca-agadir-en-voiture';
const SLUG_AR = 'min-dar-al-bayda-ila-agadir-bis-sayyara';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889928);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Casablanca to Agadir by Car: Complete 2026 Guide — Route, Time, Cost',
  metaDescription: 'Driving from Casablanca to Agadir in 2026: distance, motorway route via Marrakech, tolls, driving time, best stops (Essaouira, El Jadida) and car rental tips.',
  title: 'Casablanca to Agadir by Car: Complete 2026 Guide',
  description: 'Everything you need to drive from Casablanca to Agadir in 2026 — distance, motorway route, toll costs, driving time, scenic stops, and car rental recommendations.',
  keyword: 'casablanca to agadir by car',
  coverImage: COVER,
  coverAlt: 'Highway from Casablanca to Agadir through the Atlas foothills, Morocco',
  publishedISO: '2026-06-12',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'Casablanca to Agadir is one of Morocco\'s great road trips — a 460–500 km journey south along the A7 motorway, passing through (or near) Marrakech and skirting the foothills of the High Atlas before reaching Morocco\'s premier beach resort city. Drive it in one push (under 5 hours) or turn it into a 2–3 day coastal adventure via Essaouira. This guide covers the route, tolls, driving time, and the best stops along the way.',
  sections: [
    {
      heading: 'Casablanca to Agadir — Quick Facts',
      paragraphs: [
        'The direct distance from Casablanca to Agadir is approximately 460–466 km via the A7 motorway through Marrakech, taking around 4 hours 45 minutes to 5 hours of pure driving time. The coastal route via El Jadida, Safi and Essaouira is slightly longer in distance but offers far more scenic stops.',
      ],
      table: {
        caption: 'Casablanca to Agadir — quick facts 2026',
        headers: ['Detail', 'Information'],
        rows: [
          ['Distance (A7 motorway via Marrakech)', '~460–466 km'],
          ['Driving time (motorway, no stops)', '4h45 – 5h00'],
          ['Distance (coastal route via Essaouira)', '~500 km'],
          ['Driving time (coastal route, no stops)', '6h30 – 7h00'],
          ['Toll cost (Class 1 car, full A7)', 'MAD 164 (€15)'],
          ['Fuel cost (economy car, one way)', 'MAD 280–320 (€26–29)'],
          ['Road type', 'A7 motorway — paved, 2 lanes each direction'],
        ],
      },
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'The A7 motorway via Marrakech is the fastest and safest option — fully paved dual carriageway with overtaking lanes throughout. The coastal road (via El Jadida and Essaouira) is more scenic but has slower sections through towns. Most travelers do the motorway south and the coast on the way back, or vice versa.',
      },
    },
    {
      heading: 'Route Option 1 — A7 Motorway via Marrakech (Fastest)',
      paragraphs: [
        'The A7 motorway runs from Casablanca through Settat, Marrakech, and over the High Atlas foothills down to Agadir. It is a fully tolled dual carriageway with overtaking lanes everywhere — comparable to a European motorway. This is the route to choose if your priority is arriving quickly, or if you want to break the journey with a night in Marrakech.',
        'The most scenic section is south of Marrakech, where the motorway climbs through the Atlas foothills before descending toward the Souss plain and Agadir — a dramatic change of landscape from red-earth mountains to palm groves and the Atlantic coast.',
      ],
      table: {
        caption: 'A7 motorway route — Casablanca to Agadir via Marrakech',
        headers: ['Segment', 'Distance', 'Toll (Class 1)'],
        rows: [
          ['Casablanca → Marrakech', '~240 km', 'MAD 110 (€10)'],
          ['Marrakech → Agadir', '~220–250 km', 'MAD 54 (€5)'],
          ['Total Casablanca → Agadir', '~460–466 km', 'MAD 164 (€15)'],
        ],
      },
    },
    {
      heading: 'Route Option 2 — Coastal Road via Essaouira (Most Scenic)',
      paragraphs: [
        'The coastal route follows the Atlantic south through El Jadida, Safi, and Essaouira before continuing to Agadir. It is slightly longer (~500 km, around 6h30–7h driving) but turns the journey into a proper road trip with three of Morocco\'s best coastal towns along the way.',
        'El Jadida — a Portuguese-built fortified port city (UNESCO World Heritage), 1.5 hours from Casablanca. Worth a 1-hour stop to walk the cisterns and ramparts.',
        'Safi — an authentic working port city famous for pottery workshops, about 3 hours from Casablanca. Less touristy, good for a coffee stop and pottery shopping.',
        'Essaouira — the top priority stop on this route. A walled medina (UNESCO site), windswept beach, and excellent seafood. Most travelers spend at least one night here before continuing to Agadir (2.5 hours further south).',
      ],
      table: {
        caption: 'Coastal route — Casablanca to Agadir via Essaouira',
        headers: ['Segment', 'Distance', 'Driving time'],
        rows: [
          ['Casablanca → El Jadida', '~95 km', '1h15'],
          ['El Jadida → Safi', '~135 km', '1h45'],
          ['Safi → Essaouira', '~135 km', '1h45'],
          ['Essaouira → Agadir', '~175 km', '2h15'],
          ['Total (with no stops)', '~540 km', '~7h00'],
        ],
      },
      callout: {
        label: '💡 Recommended Plan',
        body: 'Drive the coastal route southbound with an overnight in Essaouira (day 1: Casablanca → Essaouira, ~4 hours with stops; day 2: Essaouira → Agadir, ~2h15). This turns a long single drive into a relaxed 2-day trip with one of Morocco\'s best towns as the highlight.',
      },
    },
    {
      heading: '1-Day, 2-Day and 3-Day Itinerary Options',
      paragraphs: [
        'How you split the Casablanca–Agadir drive depends on your time budget. Here are three realistic plans.',
      ],
      table: {
        caption: 'Casablanca to Agadir — itinerary options',
        headers: ['Itinerary', 'Route', 'Stops', 'Total time'],
        rows: [
          ['1-day (direct)', 'A7 motorway via Marrakech', 'Coffee/fuel stop near Marrakech', '~5–6 hours'],
          ['2-day (coastal)', 'Coastal road via Essaouira', 'Overnight in Essaouira', '~7 hours driving + 1 night'],
          ['3-day (full coastal)', 'Coastal road via El Jadida, Safi, Essaouira', 'Overnight El Jadida or Safi + overnight Essaouira', '~7 hours driving + 2 nights'],
        ],
      },
    },
    {
      heading: 'Driving Tips for the Casablanca–Agadir Route',
      paragraphs: [
        'Tolls: the A7 motorway is tolled — total around MAD 164 (€15) for a standard car for the full Casablanca–Agadir stretch via Marrakech. All toll plazas accept cash; card lanes are available at major interchanges. Keep small denomination notes handy.',
        'Fuel: budget MAD 280–320 (€26–29) for fuel one-way in an economy car (6L/100km average). Petrol stations are frequent along the A7 — no need to worry about running low.',
        'Driving conditions: the A7 is well-maintained and safe, comparable to European motorways, with two lanes each direction and regular service areas. The High Atlas foothills section south of Marrakech has some gentle curves but nothing technical — any car handles it fine. Avoid driving the coastal route at night, as it passes through several towns with reduced visibility and local traffic.',
        'Speed limits: 120 km/h on the motorway, 60 km/h through towns and villages — radar enforcement is common, especially around Marrakech and Agadir approaches.',
      ],
      table: {
        caption: 'Casablanca-Agadir — practical checklist',
        headers: ['Item', 'Detail'],
        rows: [
          ['Toll budget (one-way)', 'MAD 164 (€15) via A7/Marrakech'],
          ['Fuel budget (one-way)', 'MAD 280–320 (€26–29), economy car'],
          ['Speed limit (motorway)', '120 km/h'],
          ['Speed limit (towns)', '60 km/h'],
          ['Best departure time', 'Early morning (7–8am) to arrive in daylight'],
          ['Petrol stations', 'Frequent along A7 — no planning needed'],
        ],
      },
    },
    {
      heading: 'Renting a Car for the Casablanca–Agadir Drive',
      paragraphs: [
        'For the A7 motorway route, an economy car (Renault Clio, Dacia Sandero, Dacia Logan) is perfectly sufficient — the road is fully paved with no rough sections. MoroccoForYou Cars rents these from 250 MAD/day (€23) at Casablanca Airport, with unlimited mileage and free airport meet-and-greet.',
        'If you plan a one-way trip (drop off in Agadir rather than returning to Casablanca), confirm one-way availability and any drop-off fee when booking. MoroccoForYou Cars can arrange one-way drops to Agadir on request — message us on WhatsApp with your dates and we will confirm pricing within an hour.',
      ],
      callout: {
        label: '💡 MoroccoForYou Tip',
        body: 'Pick up your car at Casablanca Airport (CMN) from 250 MAD/day (€23), unlimited mileage, free meet-and-greet 24/7. For the Atlas foothills section south of Marrakech, an economy car is fine on the A7 — you only need the Dacia Duster 4x4 if you plan to leave the motorway for mountain tracks. Book on WhatsApp for instant confirmation.',
      },
    },
  ],
  faqs: [
    {
      question: 'How far is Casablanca from Agadir by car?',
      answer: 'The direct distance via the A7 motorway through Marrakech is approximately 460–466 km, taking around 4h45–5h00 of driving. The coastal route via Essaouira is approximately 500–540 km and takes around 6h30–7h00.',
    },
    {
      question: 'What is the toll cost from Casablanca to Agadir?',
      answer: 'The full A7 motorway toll for a standard Class 1 passenger car is approximately MAD 164 (€15) one way, covering Casablanca to Marrakech (MAD 110) and Marrakech to Agadir (MAD 54).',
    },
    {
      question: 'Is it better to drive via Marrakech or via the coast to Agadir?',
      answer: 'Via Marrakech (A7 motorway) is faster — about 5 hours — and best if you want to arrive quickly or stop in Marrakech overnight. The coastal route via Essaouira takes longer (around 7 hours) but passes three of Morocco\'s best coastal towns: El Jadida, Safi and Essaouira.',
    },
    {
      question: 'Can I rent a car in Casablanca and drop it off in Agadir?',
      answer: 'Yes — one-way rentals from Casablanca to Agadir are available with most agencies including MoroccoForYou Cars, usually with a drop-off fee. Confirm availability and pricing when booking.',
    },
    {
      question: 'Is the road from Casablanca to Agadir safe to drive?',
      answer: 'Yes — the A7 motorway is fully paved, well-maintained and comparable to European motorways. The High Atlas foothills section has gentle curves but is not technical. Avoid driving the coastal road at night due to town traffic and reduced visibility.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'How long does it take to drive from Casablanca to Agadir?', answer: 'About 4h45–5h00 via the A7 motorway through Marrakech, or around 6h30–7h00 via the coastal road through Essaouira.' },
    { question: 'Should I stop in Marrakech on the way to Agadir?', answer: 'It is a natural stopping point if driving the A7 — Marrakech sits roughly halfway. Many travelers spend a night there before continuing south to Agadir.' },
    { question: 'What is the best stop between Casablanca and Agadir?', answer: 'Essaouira, on the coastal route, is the top recommendation — a walled UNESCO medina with beaches and excellent seafood, about 2h15 from Agadir.' },
  ],
  relatedDestinations: ['casablanca', 'agadir', 'essaouira', 'marrakech'],
  relatedPosts: ['best-car-to-rent-in-casablanca-morocco', 'driving-in-morocco-tips-for-tourists', 'casablanca-airport-to-marrakech-by-car'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Casablanca Agadir en Voiture 2026 : Distance, Prix Péage & Temps Réel',
  metaDescription: 'Casablanca à Agadir en voiture : 460 km, 4h45-5h de route, péage ~164 MAD (15€). Itinéraire complet A7, arrêts recommandés, prix carburant et location de voiture depuis Casablanca.',
  title: 'Casablanca à Agadir en Voiture : Guide Complet 2026',
  description: 'Tout pour conduire de Casablanca à Agadir en 2026 — distance, itinéraire autoroute, coût des péages, durée du trajet, arrêts pittoresques et conseils de location de voiture.',
  keyword: 'casablanca agadir en voiture',
  coverImage: COVER,
  coverAlt: 'Autoroute de Casablanca à Agadir à travers les contreforts de l\'Atlas, Maroc',
  publishedISO: '2026-06-12',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'Casablanca à Agadir est l\'un des grands road trips du Maroc — un trajet de 460–500 km vers le sud via l\'autoroute A7, passant par (ou près de) Marrakech et longeant les contreforts du Haut Atlas avant d\'atteindre la première ville balnéaire du Maroc. Faites-le en une traite (moins de 5 heures) ou transformez-le en une aventure côtière de 2–3 jours via Essaouira. Ce guide couvre l\'itinéraire, les péages, la durée du trajet et les meilleurs arrêts en route.',
  sections: [
    {
      heading: 'Casablanca à Agadir — Infos rapides',
      paragraphs: [
        'La distance directe de Casablanca à Agadir est d\'environ 460–466 km via l\'autoroute A7 par Marrakech, soit environ 4h45–5h00 de conduite pure. La route côtière via El Jadida, Safi et Essaouira est légèrement plus longue mais offre bien plus d\'arrêts pittoresques.',
      ],
      table: {
        caption: 'Casablanca à Agadir — infos rapides 2026',
        headers: ['Détail', 'Information'],
        rows: [
          ['Distance (autoroute A7 via Marrakech)', '~460–466 km'],
          ['Durée (autoroute, sans arrêt)', '4h45 – 5h00'],
          ['Distance (route côtière via Essaouira)', '~500 km'],
          ['Durée (route côtière, sans arrêt)', '6h30 – 7h00'],
          ['Coût péage (voiture Classe 1, A7 complet)', '164 MAD (15€)'],
          ['Coût carburant (voiture économique, aller)', '280–320 MAD (26–29€)'],
          ['Type de route', 'Autoroute A7 — goudronnée, 2 voies par sens'],
        ],
      },
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'L\'autoroute A7 via Marrakech est l\'option la plus rapide et la plus sûre — voie rapide entièrement goudronnée avec voies de dépassement partout. La route côtière (via El Jadida et Essaouira) est plus pittoresque mais comporte des sections plus lentes dans les villes. La plupart des voyageurs font l\'autoroute à l\'aller et la côte au retour, ou inversement.',
      },
    },
    {
      heading: 'Option 1 — Autoroute A7 via Marrakech (la plus rapide)',
      paragraphs: [
        'L\'autoroute A7 va de Casablanca à travers Settat, Marrakech, puis franchit les contreforts du Haut Atlas jusqu\'à Agadir. C\'est une voie rapide entièrement à péage avec des voies de dépassement partout — comparable à une autoroute européenne. C\'est l\'itinéraire à choisir si votre priorité est d\'arriver rapidement, ou si vous voulez couper le trajet par une nuit à Marrakech.',
        'La section la plus pittoresque est au sud de Marrakech, où l\'autoroute monte à travers les contreforts de l\'Atlas avant de descendre vers la plaine du Souss et Agadir — un changement de paysage spectaculaire, des montagnes de terre rouge aux palmeraies et à la côte atlantique.',
      ],
      table: {
        caption: 'Itinéraire autoroute A7 — Casablanca à Agadir via Marrakech',
        headers: ['Segment', 'Distance', 'Péage (Classe 1)'],
        rows: [
          ['Casablanca → Marrakech', '~240 km', '110 MAD (10€)'],
          ['Marrakech → Agadir', '~220–250 km', '54 MAD (5€)'],
          ['Total Casablanca → Agadir', '~460–466 km', '164 MAD (15€)'],
        ],
      },
    },
    {
      heading: 'Option 2 — Route côtière via Essaouira (la plus pittoresque)',
      paragraphs: [
        'La route côtière suit l\'Atlantique vers le sud à travers El Jadida, Safi et Essaouira avant de continuer vers Agadir. Elle est légèrement plus longue (~500 km, environ 6h30–7h de conduite) mais transforme le trajet en véritable road trip avec trois des plus belles villes côtières du Maroc en chemin.',
        'El Jadida — cité portuaire fortifiée construite par les Portugais (patrimoine UNESCO), à 1h30 de Casablanca. Vaut un arrêt d\'une heure pour visiter les citernes et les remparts.',
        'Safi — ville portuaire authentique célèbre pour ses ateliers de poterie, à environ 3h de Casablanca. Moins touristique, bon arrêt café et shopping poterie.',
        'Essaouira — l\'arrêt prioritaire de cet itinéraire. Une médina fortifiée (site UNESCO), une plage balayée par le vent et d\'excellents fruits de mer. La plupart des voyageurs y passent au moins une nuit avant de continuer vers Agadir (2h30 plus au sud).',
      ],
      table: {
        caption: 'Route côtière — Casablanca à Agadir via Essaouira',
        headers: ['Segment', 'Distance', 'Durée'],
        rows: [
          ['Casablanca → El Jadida', '~95 km', '1h15'],
          ['El Jadida → Safi', '~135 km', '1h45'],
          ['Safi → Essaouira', '~135 km', '1h45'],
          ['Essaouira → Agadir', '~175 km', '2h15'],
          ['Total (sans arrêt)', '~540 km', '~7h00'],
        ],
      },
      callout: {
        label: '💡 Plan recommandé',
        body: 'Faites la route côtière vers le sud avec une nuit à Essaouira (jour 1 : Casablanca → Essaouira, ~4h avec arrêts ; jour 2 : Essaouira → Agadir, ~2h15). Cela transforme un long trajet en une escapade de 2 jours avec l\'une des meilleures villes du Maroc comme point fort.',
      },
    },
    {
      heading: 'Options d\'itinéraire 1, 2 et 3 jours',
      paragraphs: [
        'Comment répartir le trajet Casablanca–Agadir dépend de votre budget temps. Voici trois plans réalistes.',
      ],
      table: {
        caption: 'Casablanca à Agadir — options d\'itinéraire',
        headers: ['Itinéraire', 'Route', 'Arrêts', 'Durée totale'],
        rows: [
          ['1 jour (direct)', 'Autoroute A7 via Marrakech', 'Pause café/essence près de Marrakech', '~5–6 heures'],
          ['2 jours (côtier)', 'Route côtière via Essaouira', 'Nuit à Essaouira', '~7h de conduite + 1 nuit'],
          ['3 jours (côtier complet)', 'Route côtière via El Jadida, Safi, Essaouira', 'Nuit El Jadida ou Safi + nuit Essaouira', '~7h de conduite + 2 nuits'],
        ],
      },
    },
    {
      heading: 'Conseils de conduite pour le trajet Casablanca–Agadir',
      paragraphs: [
        'Péages : l\'autoroute A7 est à péage — environ 164 MAD (15€) au total pour une voiture standard sur tout le trajet Casablanca-Agadir via Marrakech. Tous les péages acceptent les espèces ; les voies carte sont disponibles aux principaux échangeurs. Gardez des petites coupures.',
        'Carburant : prévoyez 280–320 MAD (26–29€) de carburant à l\'aller pour une voiture économique (6L/100km en moyenne). Les stations sont fréquentes sur l\'A7.',
        'Conditions de conduite : l\'A7 est bien entretenue et sûre, comparable aux autoroutes européennes, avec deux voies par sens et des aires de service régulières. La section des contreforts du Haut Atlas au sud de Marrakech comporte quelques virages doux mais rien de technique. Évitez de conduire la route côtière de nuit.',
        'Limitations de vitesse : 120 km/h sur autoroute, 60 km/h dans les villes et villages — les radars sont fréquents, notamment près de Marrakech et d\'Agadir.',
      ],
      table: {
        caption: 'Casablanca-Agadir — checklist pratique',
        headers: ['Élément', 'Détail'],
        rows: [
          ['Budget péage (aller)', '164 MAD (15€) via A7/Marrakech'],
          ['Budget carburant (aller)', '280–320 MAD (26–29€), voiture économique'],
          ['Limite vitesse (autoroute)', '120 km/h'],
          ['Limite vitesse (villes)', '60 km/h'],
          ['Meilleure heure de départ', 'Tôt le matin (7h–8h) pour arriver de jour'],
          ['Stations-service', 'Fréquentes sur l\'A7'],
        ],
      },
    },
    {
      heading: 'Louer une voiture pour le trajet Casablanca–Agadir',
      paragraphs: [
        'Pour l\'itinéraire autoroute A7, une voiture économique (Renault Clio, Dacia Sandero, Dacia Logan) est parfaitement suffisante — la route est entièrement goudronnée sans section difficile. MoroccoForYou Cars les loue dès 250 MAD/jour (23€) à l\'aéroport de Casablanca, kilométrage illimité et accueil gratuit inclus.',
        'Si vous prévoyez un trajet aller simple (restitution à Agadir plutôt qu\'un retour à Casablanca), confirmez la disponibilité et les frais éventuels lors de la réservation. MoroccoForYou Cars peut organiser des restitutions à Agadir sur demande — contactez-nous sur WhatsApp avec vos dates.',
      ],
      callout: {
        label: '💡 Conseil MoroccoForYou',
        body: 'Récupérez votre voiture à l\'aéroport de Casablanca (CMN) dès 250 MAD/jour (23€), kilométrage illimité, accueil gratuit 24h/24. Pour la section des contreforts de l\'Atlas au sud de Marrakech, une voiture économique convient sur l\'A7 — le Dacia Duster 4x4 n\'est nécessaire que si vous quittez l\'autoroute pour des pistes de montagne. Réservez sur WhatsApp.',
      },
    },
  ],
  faqs: [
    {
      question: 'Quelle est la distance entre Casablanca et Agadir en voiture ?',
      answer: 'La distance directe via l\'autoroute A7 par Marrakech est d\'environ 460–466 km, soit environ 4h45–5h00 de conduite. La route côtière via Essaouira fait environ 500–540 km et prend environ 6h30–7h00.',
    },
    {
      question: 'Quel est le coût du péage de Casablanca à Agadir ?',
      answer: 'Le péage complet de l\'autoroute A7 pour une voiture Classe 1 standard est d\'environ 164 MAD (15€) à l\'aller, couvrant Casablanca-Marrakech (110 MAD) et Marrakech-Agadir (54 MAD).',
    },
    {
      question: 'Vaut-il mieux passer par Marrakech ou par la côte pour aller à Agadir ?',
      answer: 'Via Marrakech (autoroute A7) est plus rapide — environ 5 heures — idéal pour arriver vite ou s\'arrêter une nuit à Marrakech. La route côtière via Essaouira prend plus de temps (environ 7 heures) mais traverse trois des plus belles villes côtières du Maroc.',
    },
    {
      question: 'Puis-je louer une voiture à Casablanca et la restituer à Agadir ?',
      answer: 'Oui — les locations aller simple Casablanca-Agadir sont disponibles chez la plupart des agences dont MoroccoForYou Cars, généralement avec des frais de restitution. Confirmez la disponibilité et le prix lors de la réservation.',
    },
    {
      question: 'La route de Casablanca à Agadir est-elle sûre ?',
      answer: 'Oui — l\'autoroute A7 est entièrement goudronnée, bien entretenue et comparable aux autoroutes européennes. La section des contreforts du Haut Atlas comporte des virages doux mais rien de technique. Évitez la route côtière de nuit.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Combien de temps pour aller de Casablanca à Agadir en voiture ?', answer: 'Environ 4h45–5h00 via l\'autoroute A7 par Marrakech, ou environ 6h30–7h00 via la route côtière par Essaouira.' },
    { question: 'Faut-il s\'arrêter à Marrakech en route vers Agadir ?', answer: 'C\'est un point d\'arrêt naturel sur l\'A7 — Marrakech se trouve à mi-chemin environ. Beaucoup de voyageurs y passent une nuit avant de continuer vers Agadir.' },
    { question: 'Quel est le meilleur arrêt entre Casablanca et Agadir ?', answer: 'Essaouira, sur la route côtière, est la principale recommandation — une médina fortifiée classée UNESCO avec plages et excellents fruits de mer, à environ 2h15 d\'Agadir.' },
  ],
  relatedDestinations: ['casablanca', 'agadir', 'essaouira', 'marrakech'],
  relatedPosts: ['meilleure-voiture-louer-casablanca-maroc', 'conduire-au-maroc-conseils-touristes', 'aeroport-casablanca-marrakech-en-voiture'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'من الدار البيضاء إلى أكادير بالسيارة: الدليل الشامل 2026',
  metaDescription: 'القيادة من الدار البيضاء إلى أكادير 2026: المسافة، طريق الطريق السريع عبر مراكش، الرسوم، مدة القيادة، أفضل المحطات (الصويرة، الجديدة) ونصائح استئجار السيارات.',
  title: 'من الدار البيضاء إلى أكادير بالسيارة: الدليل الشامل 2026',
  description: 'كل ما تحتاجه للقيادة من الدار البيضاء إلى أكادير 2026 — المسافة، طريق الطريق السريع، تكلفة الرسوم، مدة القيادة، محطات جميلة وتوصيات استئجار السيارات.',
  keyword: 'من الدار البيضاء إلى أكادير بالسيارة',
  coverImage: COVER,
  coverAlt: 'الطريق السريع من الدار البيضاء إلى أكادير عبر سفوح الأطلس، المغرب',
  publishedISO: '2026-06-12',
  author: 'فريق MoroccoForYou',
  readingMinutes: 9,
  intro: 'الدار البيضاء إلى أكادير هي إحدى أعظم الرحلات البرية في المغرب — مسافة 460–500 كم جنوباً عبر الطريق السريع A7، تمر عبر (أو قرب) مراكش وتحاذي سفوح جبال الأطلس الكبير قبل الوصول إلى أهم مدينة شاطئية في المغرب. اقطعها دفعة واحدة (أقل من 5 ساعات) أو حوّلها لمغامرة ساحلية من 2–3 أيام عبر الصويرة. يغطي هذا الدليل المسار والرسوم ومدة القيادة وأفضل المحطات في الطريق.',
  sections: [
    {
      heading: 'الدار البيضاء إلى أكادير — معلومات سريعة',
      paragraphs: [
        'المسافة المباشرة من الدار البيضاء إلى أكادير حوالي 460–466 كم عبر الطريق السريع A7 من خلال مراكش، تستغرق حوالي 4 ساعات و45 دقيقة إلى 5 ساعات قيادة صافية. الطريق الساحلي عبر الجديدة وآسفي والصويرة أطول قليلاً لكنه يوفر محطات أكثر جمالاً.',
      ],
      table: {
        caption: 'الدار البيضاء إلى أكادير — معلومات سريعة 2026',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['المسافة (طريق سريع A7 عبر مراكش)', '~460–466 كم'],
          ['مدة القيادة (طريق سريع، بدون توقف)', '4:45 – 5:00'],
          ['المسافة (طريق ساحلي عبر الصويرة)', '~500 كم'],
          ['مدة القيادة (طريق ساحلي، بدون توقف)', '6:30 – 7:00'],
          ['تكلفة الرسوم (سيارة فئة 1، A7 كامل)', '164 درهم (15€)'],
          ['تكلفة الوقود (سيارة اقتصادية، اتجاه واحد)', '280–320 درهم (26–29€)'],
          ['نوع الطريق', 'طريق سريع A7 — معبّد، حارتان في كل اتجاه'],
        ],
      },
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'الطريق السريع A7 عبر مراكش هو الأسرع والأكثر أماناً — طريق سريع معبّد بالكامل مع حارات تجاوز في كل مكان. الطريق الساحلي (عبر الجديدة والصويرة) أكثر جمالاً لكن به أقسام أبطأ عبر المدن. معظم المسافرين يأخذون الطريق السريع في الذهاب والساحل في العودة، أو العكس.',
      },
    },
    {
      heading: 'الخيار 1 — الطريق السريع A7 عبر مراكش (الأسرع)',
      paragraphs: [
        'يمتد الطريق السريع A7 من الدار البيضاء عبر سطات ومراكش، ثم يعبر سفوح الأطلس الكبير نزولاً إلى أكادير. إنه طريق سريع مدفوع بالكامل مع حارات تجاوز في كل مكان — يشبه الطرق السريعة الأوروبية. هذا هو المسار المختار إذا كانت أولويتك الوصول بسرعة، أو إذا أردت تقسيم الرحلة بليلة في مراكش.',
        'القسم الأكثر جمالاً هو جنوب مراكش، حيث يصعد الطريق السريع عبر سفوح الأطلس قبل النزول نحو سهل سوس وأكادير — تغيير مناظر طبيعية مذهل من جبال التراب الأحمر إلى بساتين النخيل والساحل الأطلسي.',
      ],
      table: {
        caption: 'مسار الطريق السريع A7 — الدار البيضاء إلى أكادير عبر مراكش',
        headers: ['القسم', 'المسافة', 'الرسوم (فئة 1)'],
        rows: [
          ['الدار البيضاء → مراكش', '~240 كم', '110 درهم (10€)'],
          ['مراكش → أكادير', '~220–250 كم', '54 درهم (5€)'],
          ['الإجمالي الدار البيضاء → أكادير', '~460–466 كم', '164 درهم (15€)'],
        ],
      },
    },
    {
      heading: 'الخيار 2 — الطريق الساحلي عبر الصويرة (الأكثر جمالاً)',
      paragraphs: [
        'يتبع الطريق الساحلي المحيط الأطلسي جنوباً عبر الجديدة وآسفي والصويرة قبل الاستمرار إلى أكادير. هو أطول قليلاً (~500 كم، حوالي 6:30–7 ساعات قيادة) لكنه يحوّل الرحلة إلى رحلة برية حقيقية مع ثلاث من أفضل المدن الساحلية المغربية في الطريق.',
        'الجديدة — مدينة ميناء محصنة بناها البرتغاليون (تراث عالمي لليونسكو)، على 1.5 ساعة من الدار البيضاء. تستحق توقفاً لساعة لزيارة الصهاريج والأسوار.',
        'آسفي — مدينة ميناء أصيلة مشهورة بورش الفخار، على حوالي 3 ساعات من الدار البيضاء. أقل سياحية، جيدة لتوقف قهوة وتسوق الفخار.',
        'الصويرة — المحطة الأولى في هذا المسار. مدينة عتيقة محصنة (موقع يونسكو)، شاطئ تعصف به الرياح، ومأكولات بحرية ممتازة. يقضي معظم المسافرين ليلة واحدة على الأقل هنا قبل الاستمرار إلى أكادير (2:30 ساعة جنوباً).',
      ],
      table: {
        caption: 'الطريق الساحلي — الدار البيضاء إلى أكادير عبر الصويرة',
        headers: ['القسم', 'المسافة', 'مدة القيادة'],
        rows: [
          ['الدار البيضاء → الجديدة', '~95 كم', '1:15'],
          ['الجديدة → آسفي', '~135 كم', '1:45'],
          ['آسفي → الصويرة', '~135 كم', '1:45'],
          ['الصويرة → أكادير', '~175 كم', '2:15'],
          ['الإجمالي (بدون توقف)', '~540 كم', '~7:00'],
        ],
      },
      callout: {
        label: '💡 الخطة الموصى بها',
        body: 'قُد الطريق الساحلي جنوباً مع ليلة في الصويرة (اليوم 1: الدار البيضاء → الصويرة، ~4 ساعات مع توقفات؛ اليوم 2: الصويرة → أكادير، ~2:15). هذا يحوّل قيادة طويلة واحدة إلى رحلة مريحة من يومين مع إحدى أفضل مدن المغرب كنقطة بارزة.',
      },
    },
    {
      heading: 'خيارات برنامج 1 و2 و3 أيام',
      paragraphs: [
        'كيفية تقسيم رحلة الدار البيضاء-أكادير تعتمد على ميزانية وقتك. إليك ثلاث خطط واقعية.',
      ],
      table: {
        caption: 'الدار البيضاء إلى أكادير — خيارات البرنامج',
        headers: ['البرنامج', 'المسار', 'التوقفات', 'الوقت الإجمالي'],
        rows: [
          ['يوم واحد (مباشر)', 'طريق سريع A7 عبر مراكش', 'توقف قهوة/وقود قرب مراكش', '~5–6 ساعات'],
          ['يومان (ساحلي)', 'طريق ساحلي عبر الصويرة', 'ليلة في الصويرة', '~7 ساعات قيادة + ليلة واحدة'],
          ['3 أيام (ساحلي كامل)', 'طريق ساحلي عبر الجديدة وآسفي والصويرة', 'ليلة الجديدة أو آسفي + ليلة الصويرة', '~7 ساعات قيادة + ليلتان'],
        ],
      },
    },
    {
      heading: 'نصائح القيادة لمسار الدار البيضاء-أكادير',
      paragraphs: [
        'الرسوم: الطريق السريع A7 مدفوع — حوالي 164 درهم (15€) إجمالاً لسيارة عادية لكل مسار الدار البيضاء-أكادير عبر مراكش. جميع محطات الرسوم تقبل النقد؛ حارات البطاقة متاحة في التقاطعات الكبرى.',
        'الوقود: خصص 280–320 درهم (26–29€) للوقود ذهاباً لسيارة اقتصادية (6 لتر/100كم متوسط). محطات البنزين متكررة على A7.',
        'ظروف القيادة: A7 معبّد جيداً وآمن، يشبه الطرق السريعة الأوروبية، بحارتين في كل اتجاه ومناطق خدمة منتظمة. قسم سفوح الأطلس الكبير جنوب مراكش به منحنيات خفيفة لكن لا شيء تقني. تجنب قيادة الطريق الساحلي ليلاً.',
        'حدود السرعة: 120 كم/س على الطريق السريع، 60 كم/س في المدن والقرى — الرادارات شائعة، خاصة قرب مراكش وأكادير.',
      ],
      table: {
        caption: 'الدار البيضاء-أكادير — قائمة تحقق عملية',
        headers: ['العنصر', 'التفصيل'],
        rows: [
          ['ميزانية الرسوم (اتجاه واحد)', '164 درهم (15€) عبر A7/مراكش'],
          ['ميزانية الوقود (اتجاه واحد)', '280–320 درهم (26–29€)، سيارة اقتصادية'],
          ['حد السرعة (طريق سريع)', '120 كم/س'],
          ['حد السرعة (مدن)', '60 كم/س'],
          ['أفضل وقت انطلاق', 'الصباح الباكر (7–8) للوصول نهاراً'],
          ['محطات البنزين', 'متكررة على A7'],
        ],
      },
    },
    {
      heading: 'استئجار سيارة لرحلة الدار البيضاء-أكادير',
      paragraphs: [
        'لمسار الطريق السريع A7، سيارة اقتصادية (رينو كليو، داشيا ساندرو، داشيا لوغان) كافية تماماً — الطريق معبّد بالكامل بدون أقسام وعرة. MoroccoForYou Cars تؤجرها من 250 درهم/يوم (23€) في مطار الدار البيضاء، مع كيلومترات غير محدودة واستقبال مجاني.',
        'إذا كنت تخطط لرحلة اتجاه واحد (التسليم في أكادير بدلاً من العودة للدار البيضاء)، أكد التوفر وأي رسوم تسليم عند الحجز. يمكن لـMoroccoForYou Cars ترتيب تسليم في أكادير عند الطلب — راسلنا عبر واتساب بتواريخك.',
      ],
      callout: {
        label: '💡 نصيحة MoroccoForYou',
        body: 'استلم سيارتك من مطار الدار البيضاء (CMN) من 250 درهم/يوم (23€)، كيلومترات غير محدودة، استقبال مجاني 24/7. لقسم سفوح الأطلس جنوب مراكش، سيارة اقتصادية كافية على A7 — تحتاج داشيا دوستر 4x4 فقط إذا غادرت الطريق السريع لمسارات جبلية. احجز عبر واتساب.',
      },
    },
  ],
  faqs: [
    {
      question: 'كم تبلغ المسافة بين الدار البيضاء وأكادير بالسيارة؟',
      answer: 'المسافة المباشرة عبر الطريق السريع A7 من خلال مراكش حوالي 460–466 كم، تستغرق حوالي 4:45–5:00 قيادة. الطريق الساحلي عبر الصويرة حوالي 500–540 كم ويستغرق حوالي 6:30–7:00.',
    },
    {
      question: 'ما تكلفة رسوم الطريق من الدار البيضاء إلى أكادير؟',
      answer: 'رسوم الطريق السريع A7 الكاملة لسيارة فئة 1 عادية حوالي 164 درهم (15€) ذهاباً، تشمل الدار البيضاء-مراكش (110 درهم) ومراكش-أكادير (54 درهم).',
    },
    {
      question: 'هل الأفضل القيادة عبر مراكش أم الساحل إلى أكادير؟',
      answer: 'عبر مراكش (طريق سريع A7) أسرع — حوالي 5 ساعات — مثالي للوصول بسرعة أو التوقف ليلة في مراكش. الطريق الساحلي عبر الصويرة يستغرق أطول (حوالي 7 ساعات) لكنه يمر بثلاث من أفضل المدن الساحلية المغربية.',
    },
    {
      question: 'هل يمكنني استئجار سيارة من الدار البيضاء وتسليمها في أكادير؟',
      answer: 'نعم — التأجير في اتجاه واحد من الدار البيضاء إلى أكادير متاح لدى معظم الوكالات بما فيها MoroccoForYou Cars، عادة برسوم تسليم. أكد التوفر والسعر عند الحجز.',
    },
    {
      question: 'هل الطريق من الدار البيضاء إلى أكادير آمن للقيادة؟',
      answer: 'نعم — الطريق السريع A7 معبّد بالكامل وجيد الصيانة ويشبه الطرق السريعة الأوروبية. قسم سفوح الأطلس الكبير به منحنيات خفيفة لكن لا شيء تقني. تجنب الطريق الساحلي ليلاً.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'كم تستغرق القيادة من الدار البيضاء إلى أكادير؟', answer: 'حوالي 4:45–5:00 عبر الطريق السريع A7 من خلال مراكش، أو حوالي 6:30–7:00 عبر الطريق الساحلي عبر الصويرة.' },
    { question: 'هل يجب التوقف في مراكش في الطريق إلى أكادير؟', answer: 'هي نقطة توقف طبيعية على A7 — تقع مراكش في منتصف المسافة تقريباً. يقضي كثير من المسافرين ليلة هناك قبل الاستمرار جنوباً إلى أكادير.' },
    { question: 'ما أفضل توقف بين الدار البيضاء وأكادير؟', answer: 'الصويرة، على الطريق الساحلي، هي التوصية الأولى — مدينة عتيقة محصنة مصنفة يونسكو مع شواطئ ومأكولات بحرية ممتازة، على حوالي 2:15 من أكادير.' },
  ],
  relatedDestinations: ['casablanca', 'agadir', 'essaouira', 'marrakech'],
  relatedPosts: ['afdal-sayyara-listajar-fi-dar-al-bayda', 'min-matar-dar-al-bayda-ila-marrakesh-bis-sayyara', 'rihlat-marrakesh-fas-bis-sayyara'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);