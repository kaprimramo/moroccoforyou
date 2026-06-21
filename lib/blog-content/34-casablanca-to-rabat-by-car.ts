import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'casablanca-to-rabat-by-car';
const SLUG_FR = 'casablanca-rabat-en-voiture';
const SLUG_AR = 'min-dar-al-bayda-ila-al-ribat-bis-sayyara';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(33662300);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Casablanca to Rabat by Car: Distance, Time & Best Route (2026)',
  metaDescription: 'Casablanca to Rabat distance, driving time, and the best route — plus stops along the way, train vs car comparison, and how to rent a car at Casablanca Airport.',
  title: 'Casablanca to Rabat by Car: Distance, Driving Time, Route & Stops (2026 Guide)',
  description: 'Everything you need for the Casablanca to Rabat drive: real distance and driving time, the best route via the A1 motorway, worthwhile stops along the way, how it compares to the train, and where to rent a car.',
  keyword: 'casablanca to rabat by car',
  coverImage: COVER,
  coverAlt: 'A1 motorway between Casablanca and Rabat Morocco — Atlantic coast road trip route',
  publishedISO: '2026-06-19',
  author: 'MoroccoForYou Editorial — Casablanca',
  readingMinutes: 10,
  intro: 'Casablanca to Rabat is the shortest and easiest drive on Morocco\'s entire motorway network — a straight shot up the Atlantic coast that takes under an hour on a good day. It is also one of the most-searched Morocco travel routes, because so many visitors land at Casablanca Mohammed V Airport (CMN) and need to know exactly how to reach the capital. This guide gives you the real distance and driving time (not the optimistic ones), the best route, worthwhile stops along the way, how driving compares to the train, and how to rent a car for the trip.',
  sections: [
    {
      heading: 'Casablanca to Rabat Distance',
      paragraphs: [
        'The driving distance from Casablanca to Rabat is approximately 87–93 km (54–58 miles), depending on your exact start and end points within each city. The straight-line ("as the crow flies") distance is shorter, around 86 km (53 miles), but the actual road distance via the A1 motorway is what matters for trip planning.',
        'If you start from Casablanca Mohammed V Airport (CMN) rather than the city centre, the distance to Rabat is slightly longer — around 120 km — since the airport sits southeast of Casablanca, adding extra motorway time before you even reach the city.',
      ],
    },
    {
      heading: 'Casablanca to Rabat Driving Time',
      paragraphs: [
        'The real driving time from Casablanca to Rabat is 1 hour to 1 hour 20 minutes via the A1 motorway, depending on traffic — not the 49 minutes some distance calculators suggest at unrealistic average speeds. This is one of the few routes in Morocco where online estimates are reasonably close to reality, since it is entirely motorway with no mountain passes or town traffic to slow you down.',
        'From Casablanca Airport (CMN) specifically, budget 1 hour 30 minutes to 1 hour 45 minutes, accounting for the drive out of the airport zone and onto the A1.',
      ],
      table: {
        caption: 'Casablanca to Rabat — distance and driving time summary 2026',
        headers: ['From', 'Distance', 'Driving time', 'Route'],
        rows: [
          ['Casablanca city centre', '87–93 km', '1h00–1h20', 'A1 motorway'],
          ['Casablanca Airport (CMN)', '~120 km', '1h30–1h45', 'A7 to A1 motorway'],
          ['Casablanca to Rabat by train', '87 km', '0h50–1h00', 'ONCF direct train'],
          ['Casablanca to Rabat by bus', '87 km', '1h15', 'CTM bus'],
        ],
      },
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'The Casablanca to Rabat A1 motorway is one of the few routes in Morocco where the posted driving time is genuinely accurate — no mountain switchbacks, no medina traffic. The only variable is rush hour congestion entering or leaving each city (7-9am and 5-7pm), which can add 15-20 minutes.',
      },
    },
    {
      heading: 'How to Get from Casablanca to Rabat — All Options Compared',
      paragraphs: [
        'There are four practical ways to travel between Casablanca and Rabat, each with different trade-offs depending on your priorities.',
      ],
      table: {
        caption: 'Casablanca to Rabat — transport options compared 2026',
        headers: ['Method', 'Time', 'Price', 'Best for'],
        rows: [
          ['Rental car (A1 motorway)', '1h00–1h20', 'From 250 MAD/day (€23) + ~MAD 33 toll', 'Flexibility, stops along the way, onward travel'],
          ['ONCF train', '0h50–1h00', 'MAD 35–90 (€3.20–8.30)', 'Fastest, no traffic risk, city-centre to city-centre'],
          ['CTM bus', '1h15', 'MAD 50–75 (€4.60–7)', 'Budget travelers, no driving needed'],
          ['Grand taxi (shared)', '1h00–1h15', 'MAD 60–80 (€5.50–7.40)', 'Quick, flexible departure times'],
          ['Private taxi (one-way)', '1h00', 'MAD 400–600 (€37–55)', 'Direct door-to-door, no transfers'],
        ],
      },
    },
    {
      heading: 'Is It Better to Drive or Take the Train from Casablanca to Rabat?',
      paragraphs: [
        'For a same-day round trip or a one-city visit, the train is genuinely faster and less stressful — Casablanca Voyageurs to Rabat Ville runs roughly every 30 minutes, takes under an hour, costs €3–8, and drops you in the heart of Rabat without parking concerns.',
        'A rental car becomes the better choice the moment your trip is not just Casablanca-to-Rabat-and-back. If Rabat is one stop on a longer route (continuing to Tangier, Chefchaouen, or Fes), or if you want to stop at the beaches and small towns along the way, a car gives you flexibility the train cannot. Most travelers doing a multi-city Morocco itinerary rent a car at Casablanca Airport for the whole loop rather than mixing trains and rentals.',
      ],
    },
    {
      heading: 'The Best Route: Driving the A1 Motorway',
      paragraphs: [
        'The standard route is entirely on the A1 toll motorway (Autoroute du Maroc), connecting Casablanca directly to Rabat with no significant turns or navigation challenges. From central Casablanca, follow signs for "Rabat / A1" to join the motorway, then it is a straight run north along the Atlantic coast.',
        'The toll for this stretch is approximately MAD 33 (€3) for a standard car. Payment is cash or via the Jawaz electronic toll tag at dedicated lanes. Keep small bills handy if paying cash.',
      ],
    },
    {
      heading: 'Best Stops Between Casablanca and Rabat',
      paragraphs: [
        'Although the drive takes only an hour, several worthwhile stops sit directly along or just off the A1 route — useful if you want to break up the trip or are doing a slower coastal exploration rather than a direct city-to-city run.',
      ],
      table: {
        caption: 'Best stops between Casablanca and Rabat',
        headers: ['Stop', 'Distance from Casablanca', 'Why stop here'],
        rows: [
          ['Mohammedia', '~25 km', 'Coastal town with beaches, a working fishing port, and the Samir refinery skyline — a relaxed first stop'],
          ['Skhirat', '~50 km', 'Quiet beach town popular with Rabat residents; good seaside lunch stop'],
          ['Témara', '~70 km', 'Coastal suburb of Rabat with the Port of Témara and El Harhoura beach nearby, set against a forested backdrop'],
          ['Salé', '~85 km', 'Rabat\'s historic twin city across the Bou Regreg river — old medina, less touristy than Rabat itself'],
          ['Morocco Mall (Casablanca)', '0 km (before departure)', 'Africa\'s largest mall, worth a stop before leaving Casablanca if shopping is on your list'],
        ],
      },
    },
    {
      heading: 'What to See in Rabat When You Arrive',
      paragraphs: [
        'Rabat is Morocco\'s political capital and a UNESCO World Heritage City, with a noticeably calmer, more orderly feel than Casablanca or Marrakech. The essential stops, all within a compact area, are the Hassan Tower and the Mausoleum of Mohammed V (an unfinished 12th-century minaret beside the royal mausoleum), the Kasbah of the Udayas (a fortified, blue-and-white painted quarter overlooking the river mouth), and the Chellah — a medieval fortified necropolis built on earlier Roman ruins, now home to storks nesting among the walls.',
        'Plan 1 full day in Rabat to cover these sites comfortably, with lunch in the Udayas kasbah gardens or along the Rabat-Salé waterfront.',
      ],
    },
    {
      heading: 'Casablanca to Rabat Day Trip — Is It Possible?',
      paragraphs: [
        'Yes — Casablanca to Rabat is one of the easiest day trips in Morocco given the short driving time. A typical day-trip schedule: depart Casablanca by 8:30am, arrive Rabat by 9:30-10am, spend 4-5 hours covering the Hassan Tower, Kasbah of the Udayas, and Chellah with lunch in between, then drive back to Casablanca by early evening.',
        'If renting a car for the day trip, factor in parking near the main sites (the Kasbah and Hassan Tower areas have designated paid parking, typically MAD 10-20) and keep the return trip before the 5-7pm rush hour into Casablanca if possible.',
      ],
      callout: {
        label: '💡 Day Trip Tip',
        body: 'For a Casablanca-to-Rabat day trip, the train is often more relaxing than driving — no parking to find, no rush-hour traffic to time around, and you can read or rest during the hour-long ride instead of focusing on the road. Save the rental car for when Rabat is part of a longer multi-city itinerary.',
      },
    },
    {
      heading: 'Renting a Car for the Casablanca to Rabat Drive',
      paragraphs: [
        'For travelers continuing past Rabat — to Tangier, Chefchaouen, Fes, or a full northern Morocco loop — picking up a rental car at Casablanca Airport (CMN) before driving to Rabat is the most efficient option. MoroccoForYou Cars offers free meet & greet directly in the CMN arrivals hall, so you can be on the A1 motorway toward Rabat within 20-30 minutes of landing.',
        'An economy car (Renault Clio, Dacia Sandero) is entirely sufficient for the Casablanca-Rabat drive and any extension north along the coast — no 4x4 needed for this route. Prices start at 250 MAD/day (€23) with unlimited mileage.',
      ],
      callout: {
        label: '🚗 Book Your Car for the Casablanca–Rabat Route',
        body: 'Reserve your rental car on WhatsApp before landing at CMN — economy cars from €23/day, perfect for Casablanca to Rabat and onward north. Free airport pickup, confirmation within 1 hour. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'What is the distance from Casablanca to Rabat?',
      answer: 'The driving distance from Casablanca to Rabat is approximately 87–93 km (54–58 miles) via the A1 motorway. The straight-line distance is slightly shorter at around 86 km (53 miles).',
    },
    {
      question: 'How long does it take to drive from Casablanca to Rabat?',
      answer: 'The driving time from Casablanca to Rabat is 1 hour to 1 hour 20 minutes via the A1 motorway, depending on traffic. From Casablanca Airport (CMN) specifically, budget 1 hour 30 to 1 hour 45 minutes.',
    },
    {
      question: 'How do I get from Casablanca to Rabat without a car?',
      answer: 'The ONCF train is the best option without a car — it runs roughly every 30 minutes between Casablanca Voyageurs and Rabat Ville, takes under an hour, and costs MAD 35–90 (€3.20–8.30). CTM buses and shared grand taxis are also available.',
    },
    {
      question: 'Can I visit Rabat as a day trip from Casablanca?',
      answer: 'Yes — Casablanca to Rabat is one of the easiest day trips in Morocco. Depart by 8:30am, spend 4-5 hours seeing the Hassan Tower, Kasbah of the Udayas, and Chellah, and return to Casablanca by early evening. The train is often more relaxing than driving for a same-day round trip.',
    },
    {
      question: 'Is it better to take the train or drive from Casablanca to Rabat?',
      answer: 'The train is faster and less stressful for a direct Casablanca-Rabat trip (50-60 minutes, no parking needed). A rental car is better if Rabat is one stop on a longer route continuing to Tangier, Chefchaouen, or Fes, or if you want to stop at coastal towns like Mohammedia or Skhirat along the way.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What towns are between Casablanca and Rabat?', answer: 'The main towns along the A1 route between Casablanca and Rabat are Mohammedia (25 km, coastal town with beaches), Skhirat (50 km, quiet beach town), Témara (70 km, Rabat\'s coastal suburb), and Salé (85 km, Rabat\'s historic twin city across the river).' },
    { question: 'How much is the toll from Casablanca to Rabat?', answer: 'The A1 motorway toll from Casablanca to Rabat is approximately MAD 33 (€3) for a standard car, payable in cash or via electronic toll tag at the toll plaza.' },
    { question: 'Can I rent a car in Casablanca and drop it off in Rabat?', answer: 'Yes — one-way rentals from Casablanca to Rabat are available with most agencies, though given the short 1-hour distance, most travelers simply keep the car for their full Morocco itinerary rather than doing a one-way drop-off this close.' },
  ],
  relatedDestinations: ['casablanca', 'rabat'],
  relatedPosts: ['casablanca-airport-car-rental', 'casablanca-to-agadir-by-car', 'best-car-to-rent-in-casablanca-morocco'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Casablanca à Rabat en Voiture : Distance, Temps & Meilleure Route 2026',
  metaDescription: 'Distance Casablanca-Rabat, temps de trajet et meilleure route — arrêts en chemin, comparaison train vs voiture, et comment louer une voiture à l\'aéroport de Casablanca.',
  title: 'Casablanca à Rabat en Voiture : Distance, Temps de Trajet, Route & Arrêts (Guide 2026)',
  description: 'Tout ce qu\'il faut savoir pour le trajet Casablanca-Rabat : distance et temps réels, meilleure route via l\'autoroute A1, arrêts intéressants en chemin, comparaison avec le train, et où louer une voiture.',
  keyword: 'casablanca rabat en voiture',
  coverImage: COVER,
  coverAlt: 'Autoroute A1 entre Casablanca et Rabat Maroc — itinéraire road trip côte atlantique',
  publishedISO: '2026-06-19',
  author: 'MoroccoForYou Editorial — Casablanca',
  readingMinutes: 10,
  intro: 'Casablanca à Rabat est le trajet le plus court et le plus simple de tout le réseau autoroutier marocain — une ligne droite le long de la côte atlantique qui prend moins d\'une heure par beau temps. C\'est aussi l\'un des itinéraires de voyage les plus recherchés au Maroc, car de nombreux visiteurs atterrissent à l\'aéroport Mohammed V de Casablanca (CMN) et ont besoin de savoir exactement comment rejoindre la capitale. Ce guide vous donne la vraie distance et le vrai temps de trajet, la meilleure route, les arrêts intéressants en chemin, la comparaison avec le train, et comment louer une voiture pour le trajet.',
  sections: [
    {
      heading: 'Distance Casablanca-Rabat',
      paragraphs: [
        'La distance routière entre Casablanca et Rabat est d\'environ 87–93 km, selon vos points de départ et d\'arrivée exacts dans chaque ville. La distance à vol d\'oiseau est légèrement plus courte, environ 86 km, mais c\'est la distance routière via l\'autoroute A1 qui compte pour la planification.',
        'Si vous partez de l\'aéroport Mohammed V de Casablanca (CMN) plutôt que du centre-ville, la distance jusqu\'à Rabat est légèrement plus longue — environ 120 km — puisque l\'aéroport se situe au sud-est de Casablanca.',
      ],
    },
    {
      heading: 'Temps de trajet Casablanca-Rabat',
      paragraphs: [
        'Le temps de trajet réel entre Casablanca et Rabat est de 1h00 à 1h20 via l\'autoroute A1, selon le trafic — pas les 49 minutes que suggèrent certains calculateurs de distance à des vitesses moyennes irréalistes. C\'est l\'un des rares trajets au Maroc où les estimations en ligne sont raisonnablement proches de la réalité, car il s\'agit entièrement d\'autoroute sans col de montagne ni trafic urbain.',
        'Depuis l\'aéroport de Casablanca (CMN) spécifiquement, prévoyez 1h30 à 1h45, en tenant compte de la sortie de la zone aéroportuaire et de l\'entrée sur l\'A1.',
      ],
      table: {
        caption: 'Casablanca à Rabat — résumé distance et temps de trajet 2026',
        headers: ['Depuis', 'Distance', 'Temps de trajet', 'Route'],
        rows: [
          ['Centre de Casablanca', '87–93 km', '1h00–1h20', 'Autoroute A1'],
          ['Aéroport de Casablanca (CMN)', '~120 km', '1h30–1h45', 'A7 puis A1'],
          ['Casablanca à Rabat en train', '87 km', '0h50–1h00', 'Train direct ONCF'],
          ['Casablanca à Rabat en bus', '87 km', '1h15', 'Bus CTM'],
        ],
      },
      callout: {
        label: '🇲🇦 Conseil Local',
        body: 'L\'autoroute A1 Casablanca-Rabat est l\'un des rares trajets au Maroc où le temps de trajet annoncé est vraiment exact — pas de lacets de montagne, pas de trafic de médina. La seule variable est l\'embouteillage aux heures de pointe en entrant ou sortant de chaque ville (7h-9h et 17h-19h), qui peut ajouter 15-20 minutes.',
      },
    },
    {
      heading: 'Comment aller de Casablanca à Rabat — Toutes les options comparées',
      paragraphs: [
        'Il existe quatre façons pratiques de voyager entre Casablanca et Rabat, chacune avec des compromis différents selon vos priorités.',
      ],
      table: {
        caption: 'Casablanca à Rabat — options de transport comparées 2026',
        headers: ['Méthode', 'Temps', 'Prix', 'Idéal pour'],
        rows: [
          ['Voiture de location (autoroute A1)', '1h00–1h20', 'Dès 250 MAD/jour (23€) + ~MAD 33 péage', 'Flexibilité, arrêts en chemin, suite du voyage'],
          ['Train ONCF', '0h50–1h00', 'MAD 35–90 (3,20–8,30€)', 'Le plus rapide, sans risque de trafic, centre-ville à centre-ville'],
          ['Bus CTM', '1h15', 'MAD 50–75 (4,60–7€)', 'Voyageurs au budget serré, sans conduite'],
          ['Grand taxi (partagé)', '1h00–1h15', 'MAD 60–80 (5,50–7,40€)', 'Rapide, horaires de départ flexibles'],
          ['Taxi privé (aller simple)', '1h00', 'MAD 400–600 (37–55€)', 'Direct porte-à-porte, sans correspondance'],
        ],
      },
    },
    {
      heading: 'Vaut-il mieux conduire ou prendre le train de Casablanca à Rabat ?',
      paragraphs: [
        'Pour un aller-retour dans la journée ou une visite d\'une seule ville, le train est vraiment plus rapide et moins stressant — Casablanca Voyageurs à Rabat Ville circule environ toutes les 30 minutes, prend moins d\'une heure, coûte 3-8€, et vous dépose au cœur de Rabat sans souci de stationnement.',
        'Une voiture de location devient le meilleur choix dès que votre voyage n\'est pas seulement Casablanca-Rabat aller-retour. Si Rabat est une étape d\'un itinéraire plus long (vers Tanger, Chefchaouen ou Fès), ou si vous voulez vous arrêter aux plages et petites villes en chemin, une voiture offre une flexibilité que le train ne peut pas offrir.',
      ],
    },
    {
      heading: 'La meilleure route : conduire sur l\'autoroute A1',
      paragraphs: [
        'L\'itinéraire standard est entièrement sur l\'autoroute à péage A1, reliant directement Casablanca à Rabat sans virages significatifs ni défis de navigation. Depuis le centre de Casablanca, suivez les panneaux "Rabat / A1" pour rejoindre l\'autoroute, puis c\'est une ligne droite vers le nord le long de la côte atlantique.',
        'Le péage pour ce tronçon est d\'environ MAD 33 (3€) pour une voiture standard. Paiement en espèces ou via le badge télépéage Jawaz aux voies dédiées.',
      ],
    },
    {
      heading: 'Meilleurs arrêts entre Casablanca et Rabat',
      paragraphs: [
        'Bien que le trajet ne prenne qu\'une heure, plusieurs arrêts intéressants se trouvent directement sur ou juste à côté de la route A1 — utiles si vous voulez fractionner le trajet ou faire une exploration côtière plus lente.',
      ],
      table: {
        caption: 'Meilleurs arrêts entre Casablanca et Rabat',
        headers: ['Arrêt', 'Distance depuis Casablanca', 'Pourquoi s\'arrêter ici'],
        rows: [
          ['Mohammedia', '~25 km', 'Ville côtière avec plages, port de pêche actif, et silhouette de la raffinerie Samir — un premier arrêt détendu'],
          ['Skhirat', '~50 km', 'Ville balnéaire calme prisée des habitants de Rabat ; bon arrêt déjeuner en bord de mer'],
          ['Témara', '~70 km', 'Banlieue côtière de Rabat avec le Port de Témara et la plage El Harhoura à proximité, dans un cadre forestier'],
          ['Salé', '~85 km', 'Ville jumelle historique de Rabat de l\'autre côté du fleuve Bou Regreg — médina ancienne, moins touristique que Rabat elle-même'],
          ['Morocco Mall (Casablanca)', '0 km (avant départ)', 'Plus grand centre commercial d\'Afrique, vaut un arrêt avant de quitter Casablanca'],
        ],
      },
    },
    {
      heading: 'Que voir à Rabat à l\'arrivée',
      paragraphs: [
        'Rabat est la capitale politique du Maroc et une ville classée au patrimoine mondial de l\'UNESCO, avec une atmosphère nettement plus calme et ordonnée que Casablanca ou Marrakech. Les arrêts essentiels, tous dans une zone compacte, sont la Tour Hassan et le Mausolée de Mohammed V (un minaret inachevé du 12e siècle à côté du mausolée royal), la Kasbah des Oudayas (un quartier fortifié peint en bleu et blanc surplombant l\'embouchure du fleuve), et la Chellah — une nécropole fortifiée médiévale construite sur d\'anciennes ruines romaines, aujourd\'hui habitée par des cigognes nichant dans les murs.',
        'Prévoyez 1 journée complète à Rabat pour couvrir confortablement ces sites, avec déjeuner dans les jardins de la kasbah des Oudayas ou le long du front de mer Rabat-Salé.',
      ],
    },
    {
      heading: 'Excursion d\'une journée Casablanca-Rabat — est-ce possible ?',
      paragraphs: [
        'Oui — Casablanca à Rabat est l\'une des excursions d\'une journée les plus faciles au Maroc compte tenu du court temps de trajet. Programme typique : départ de Casablanca à 8h30, arrivée à Rabat vers 9h30-10h, 4-5 heures pour la Tour Hassan, la Kasbah des Oudayas et la Chellah avec déjeuner entre les deux, puis retour à Casablanca en début de soirée.',
        'Si vous louez une voiture pour l\'excursion, prévoyez le stationnement près des sites principaux (zones de la Kasbah et de la Tour Hassan ont un stationnement payant désigné, généralement MAD 10-20) et essayez de revenir avant les heures de pointe de 17h-19h vers Casablanca.',
      ],
      callout: {
        label: '💡 Conseil Excursion d\'une journée',
        body: 'Pour une excursion Casablanca-Rabat dans la journée, le train est souvent plus relaxant que la conduite — pas de stationnement à trouver, pas d\'heures de pointe à éviter, et vous pouvez lire ou vous reposer pendant le trajet d\'une heure. Gardez la voiture de location pour quand Rabat fait partie d\'un itinéraire multi-villes plus long.',
      },
    },
    {
      heading: 'Louer une voiture pour le trajet Casablanca-Rabat',
      paragraphs: [
        'Pour les voyageurs continuant au-delà de Rabat — vers Tanger, Chefchaouen, Fès, ou une boucle complète du nord du Maroc — prendre une voiture de location à l\'aéroport de Casablanca (CMN) avant de conduire vers Rabat est l\'option la plus efficace. MoroccoForYou Cars propose un accueil gratuit directement dans le hall des arrivées de CMN, pour être sur l\'A1 vers Rabat dans les 20-30 minutes suivant l\'atterrissage.',
        'Une voiture économique (Renault Clio, Dacia Sandero) est entièrement suffisante pour le trajet Casablanca-Rabat et toute extension vers le nord le long de la côte — pas besoin de 4x4 pour cette route. Prix dès 250 MAD/jour (23€) avec kilométrage illimité.',
      ],
      callout: {
        label: '🚗 Réservez Votre Voiture pour le Trajet Casablanca–Rabat',
        body: 'Réservez votre voiture de location sur WhatsApp avant d\'atterrir à CMN — économique dès 23€/jour, parfait pour Casablanca à Rabat et au-delà vers le nord. Prise en charge gratuite à l\'aéroport, confirmation sous 1 heure. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'Quelle est la distance entre Casablanca et Rabat ?',
      answer: 'La distance routière entre Casablanca et Rabat est d\'environ 87–93 km via l\'autoroute A1. La distance à vol d\'oiseau est légèrement plus courte, environ 86 km.',
    },
    {
      question: 'Combien de temps faut-il pour conduire de Casablanca à Rabat ?',
      answer: 'Le temps de trajet entre Casablanca et Rabat est de 1h00 à 1h20 via l\'autoroute A1, selon le trafic. Depuis l\'aéroport de Casablanca (CMN) spécifiquement, prévoyez 1h30 à 1h45.',
    },
    {
      question: 'Comment aller de Casablanca à Rabat sans voiture ?',
      answer: 'Le train ONCF est la meilleure option sans voiture — il circule environ toutes les 30 minutes entre Casablanca Voyageurs et Rabat Ville, prend moins d\'une heure, et coûte MAD 35–90 (3,20–8,30€). Les bus CTM et les grands taxis partagés sont aussi disponibles.',
    },
    {
      question: 'Puis-je visiter Rabat en excursion d\'une journée depuis Casablanca ?',
      answer: 'Oui — Casablanca à Rabat est l\'une des excursions d\'une journée les plus faciles au Maroc. Partez à 8h30, passez 4-5 heures à voir la Tour Hassan, la Kasbah des Oudayas et la Chellah, et revenez à Casablanca en début de soirée. Le train est souvent plus relaxant que la conduite pour un aller-retour dans la journée.',
    },
    {
      question: 'Vaut-il mieux prendre le train ou conduire de Casablanca à Rabat ?',
      answer: 'Le train est plus rapide et moins stressant pour un trajet direct Casablanca-Rabat (50-60 minutes, pas de stationnement nécessaire). Une voiture de location est meilleure si Rabat est une étape d\'un itinéraire plus long continuant vers Tanger, Chefchaouen ou Fès, ou si vous voulez vous arrêter aux villes côtières comme Mohammedia ou Skhirat en chemin.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Quelles villes se trouvent entre Casablanca et Rabat ?', answer: 'Les principales villes le long de la route A1 entre Casablanca et Rabat sont Mohammedia (25 km, ville côtière avec plages), Skhirat (50 km, ville balnéaire calme), Témara (70 km, banlieue côtière de Rabat), et Salé (85 km, ville jumelle historique de Rabat de l\'autre côté du fleuve).' },
    { question: 'Combien coûte le péage de Casablanca à Rabat ?', answer: 'Le péage de l\'autoroute A1 de Casablanca à Rabat est d\'environ MAD 33 (3€) pour une voiture standard, payable en espèces ou via badge télépéage électronique au péage.' },
    { question: 'Puis-je louer une voiture à Casablanca et la rendre à Rabat ?', answer: 'Oui — les locations aller simple de Casablanca à Rabat sont disponibles avec la plupart des agences, bien que vu la courte distance d\'1 heure, la plupart des voyageurs gardent simplement la voiture pour tout leur itinéraire marocain plutôt que de faire une restitution aller simple si proche.' },
  ],
  relatedDestinations: ['casablanca', 'rabat'],
  relatedPosts: ['location-voiture-aeroport-casablanca-cmn', 'casablanca-agadir-en-voiture', 'meilleure-voiture-louer-casablanca-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'من الدار البيضاء إلى الرباط بالسيارة: المسافة والوقت وأفضل طريق 2026',
  metaDescription: 'المسافة من الدار البيضاء إلى الرباط، وقت القيادة وأفضل طريق — محطات في الطريق، مقارنة القطار بالسيارة، وكيفية استئجار سيارة من مطار الدار البيضاء.',
  title: 'من الدار البيضاء إلى الرباط بالسيارة: المسافة، وقت القيادة، الطريق والمحطات (دليل 2026)',
  description: 'كل ما تحتاجه لرحلة الدار البيضاء-الرباط: المسافة والوقت الحقيقيان، أفضل طريق عبر الطريق السريع A1، محطات تستحق التوقف، مقارنة مع القطار، وأين تستأجر سيارة.',
  keyword: 'من الدار البيضاء إلى الرباط بالسيارة',
  coverImage: COVER,
  coverAlt: 'الطريق السريع A1 بين الدار البيضاء والرباط المغرب — مسار رحلة برية على الساحل الأطلسي',
  publishedISO: '2026-06-19',
  author: 'فريق MoroccoForYou — الدار البيضاء',
  readingMinutes: 10,
  intro: 'الدار البيضاء إلى الرباط هي أقصر وأسهل رحلة قيادة على شبكة الطرق السريعة المغربية بأكملها — خط مستقيم على طول الساحل الأطلسي يستغرق أقل من ساعة في يوم جيد. إنها أيضاً واحدة من أكثر مسارات السفر بحثاً بالمغرب، لأن العديد من الزوار يهبطون في مطار محمد الخامس بالدار البيضاء (CMN) ويحتاجون معرفة كيفية الوصول للعاصمة بالضبط. يقدم هذا الدليل المسافة والوقت الحقيقيين، أفضل طريق، محطات تستحق التوقف في الطريق، مقارنة مع القطار، وكيفية استئجار سيارة للرحلة.',
  sections: [
    {
      heading: 'المسافة من الدار البيضاء إلى الرباط',
      paragraphs: [
        'مسافة القيادة من الدار البيضاء إلى الرباط حوالي 87–93 كم، حسب نقطتي البداية والنهاية الدقيقتين في كل مدينة. المسافة المستقيمة أقصر قليلاً، حوالي 86 كم، لكن المسافة الفعلية عبر الطريق السريع A1 هي ما يهم لتخطيط الرحلة.',
        'إذا انطلقت من مطار محمد الخامس بالدار البيضاء (CMN) بدلاً من وسط المدينة، المسافة إلى الرباط أطول قليلاً — حوالي 120 كم — لأن المطار يقع جنوب شرق الدار البيضاء.',
      ],
    },
    {
      heading: 'وقت القيادة من الدار البيضاء إلى الرباط',
      paragraphs: [
        'وقت القيادة الحقيقي من الدار البيضاء إلى الرباط هو ساعة إلى ساعة و20 دقيقة عبر الطريق السريع A1، حسب حركة المرور — وليس الـ49 دقيقة التي تقترحها بعض حاسبات المسافة بسرعات متوسطة غير واقعية. هذا أحد المسارات القليلة بالمغرب حيث التقديرات على الإنترنت قريبة بشكل معقول من الواقع، لأنه طريق سريع بالكامل دون ممرات جبلية أو ازدحام مدن.',
        'من مطار الدار البيضاء (CMN) تحديداً، خصص ساعة و30 دقيقة إلى ساعة و45 دقيقة، مع مراعاة الخروج من منطقة المطار والدخول إلى A1.',
      ],
      table: {
        caption: 'الدار البيضاء إلى الرباط — ملخص المسافة ووقت القيادة 2026',
        headers: ['من', 'المسافة', 'وقت القيادة', 'الطريق'],
        rows: [
          ['وسط الدار البيضاء', '87–93 كم', '1:00–1:20 ساعة', 'الطريق السريع A1'],
          ['مطار الدار البيضاء (CMN)', '~120 كم', '1:30–1:45 ساعة', 'A7 ثم A1'],
          ['الدار البيضاء إلى الرباط بالقطار', '87 كم', '0:50–1:00 ساعة', 'قطار ONCF مباشر'],
          ['الدار البيضاء إلى الرباط بالحافلة', '87 كم', '1:15 ساعة', 'حافلة CTM'],
        ],
      },
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'الطريق السريع A1 الدار البيضاء-الرباط أحد المسارات القليلة بالمغرب حيث وقت القيادة المعلن دقيق فعلاً — لا منعطفات جبلية، لا ازدحام مدينة عتيقة. المتغير الوحيد هو ازدحام ساعة الذروة عند دخول أو مغادرة كل مدينة (7-9 صباحاً و5-7 مساءً)، الذي قد يضيف 15-20 دقيقة.',
      },
    },
    {
      heading: 'كيف تصل من الدار البيضاء إلى الرباط — كل الخيارات مقارنة',
      paragraphs: [
        'توجد أربع طرق عملية للسفر بين الدار البيضاء والرباط، لكل منها مفاضلات مختلفة حسب أولوياتك.',
      ],
      table: {
        caption: 'الدار البيضاء إلى الرباط — خيارات النقل مقارنة 2026',
        headers: ['الطريقة', 'الوقت', 'السعر', 'الأنسب لـ'],
        rows: [
          ['سيارة إيجار (طريق A1)', '1:00–1:20 ساعة', 'من MAD 250/يوم (23€) + ~MAD 33 رسوم', 'المرونة، التوقف في الطريق، متابعة السفر'],
          ['قطار ONCF', '0:50–1:00 ساعة', 'MAD 35–90 (3.20–8.30€)', 'الأسرع، بلا خطر ازدحام، من وسط لوسط المدينة'],
          ['حافلة CTM', '1:15 ساعة', 'MAD 50–75 (4.60–7€)', 'المسافرون بميزانية، بلا قيادة'],
          ['تاكسي كبير (مشترك)', '1:00–1:15 ساعة', 'MAD 60–80 (5.50–7.40€)', 'سريع، أوقات مغادرة مرنة'],
          ['تاكسي خاص (اتجاه واحد)', '1:00 ساعة', 'MAD 400–600 (37–55€)', 'مباشر من باب لباب، بلا تبديل'],
        ],
      },
    },
    {
      heading: 'هل من الأفضل القيادة أم أخذ القطار من الدار البيضاء إلى الرباط؟',
      paragraphs: [
        'لرحلة ذهاب وإياب في نفس اليوم أو زيارة مدينة واحدة، القطار أسرع وأقل توتراً فعلاً — الدار البيضاء المسافرين إلى الرباط المدينة يسير كل 30 دقيقة تقريباً، يستغرق أقل من ساعة، يكلف 3-8 يورو، ويتركك في قلب الرباط دون قلق الوقوف.',
        'سيارة الإيجار تصبح الخيار الأفضل بمجرد أن لا تكون رحلتك مجرد ذهاب وإياب الدار البيضاء-الرباط. إذا كانت الرباط محطة واحدة في مسار أطول (متابعة إلى طنجة أو شفشاون أو فاس)، أو إذا أردت التوقف عند الشواطئ والبلدات الصغيرة في الطريق، السيارة تعطيك مرونة لا يستطيع القطار توفيرها.',
      ],
    },
    {
      heading: 'أفضل طريق: القيادة على الطريق السريع A1',
      paragraphs: [
        'المسار القياسي بالكامل على الطريق السريع برسوم A1، يربط الدار البيضاء مباشرة بالرباط دون منعطفات كبيرة أو تحديات ملاحية. من وسط الدار البيضاء، اتبع لافتات "الرباط / A1" للانضمام للطريق السريع، ثم خط مستقيم شمالاً على طول الساحل الأطلسي.',
        'رسوم هذا القسم حوالي MAD 33 (3 يورو) لسيارة قياسية. الدفع نقداً أو عبر بطاقة الرسوم الإلكترونية Jawaz في الممرات المخصصة.',
      ],
    },
    {
      heading: 'أفضل المحطات بين الدار البيضاء والرباط',
      paragraphs: [
        'رغم أن الرحلة تستغرق ساعة فقط، توجد عدة محطات تستحق التوقف مباشرة على أو بالقرب من طريق A1 — مفيدة إذا أردت تقسيم الرحلة أو استكشافاً ساحلياً أبطأ.',
      ],
      table: {
        caption: 'أفضل المحطات بين الدار البيضاء والرباط',
        headers: ['المحطة', 'المسافة من الدار البيضاء', 'لماذا التوقف هنا'],
        rows: [
          ['المحمدية', '~25 كم', 'مدينة ساحلية بشواطئ وميناء صيد عامل وأفق مصفاة السمير — أول توقف مريح'],
          ['الصخيرات', '~50 كم', 'بلدة شاطئية هادئة مفضلة لدى سكان الرباط؛ توقف غداء جيد على الساحل'],
          ['تمارة', '~70 كم', 'ضاحية ساحلية للرباط بميناء تمارة وشاطئ الحرحورة قريباً، على خلفية غابية'],
          ['سلا', '~85 كم', 'المدينة التوأم التاريخية للرباط عبر نهر أبي رقراق — مدينة عتيقة قديمة، أقل سياحية من الرباط نفسها'],
          ['Morocco Mall (الدار البيضاء)', '0 كم (قبل المغادرة)', 'أكبر مركز تسوق بأفريقيا، يستحق التوقف قبل مغادرة الدار البيضاء'],
        ],
      },
    },
    {
      heading: 'ماذا ترى في الرباط عند الوصول',
      paragraphs: [
        'الرباط هي العاصمة السياسية للمغرب ومدينة مدرجة في التراث العالمي لليونسكو، بأجواء أكثر هدوءاً ونظاماً بشكل ملحوظ من الدار البيضاء أو مراكش. المحطات الأساسية، كلها في منطقة مدمجة، هي صومعة حسان وضريح محمد الخامس (مئذنة من القرن الثاني عشر غير مكتملة بجانب الضريح الملكي)، قصبة الأوداية (حي محصن مطلي بالأزرق والأبيض يطل على مصب النهر)، والشالة — مدينة أموات محصنة من العصور الوسطى مبنية على أنقاض رومانية أقدم، تأوي اليوم طيور اللقلق المعششة بين الجدران.',
        'خطط ليوم كامل في الرباط لتغطية هذه المواقع بشكل مريح، مع الغداء في حدائق قصبة الأوداية أو على طول واجهة الرباط-سلا المائية.',
      ],
    },
    {
      heading: 'رحلة يوم واحد الدار البيضاء-الرباط — هل ممكنة؟',
      paragraphs: [
        'نعم — الدار البيضاء إلى الرباط واحدة من أسهل رحلات اليوم الواحد بالمغرب نظراً لقصر وقت القيادة. جدول رحلة يوم نموذجي: المغادرة من الدار البيضاء الساعة 8:30 صباحاً، الوصول للرباط حوالي 9:30-10 صباحاً، قضاء 4-5 ساعات في صومعة حسان وقصبة الأوداية والشالة مع غداء بينهما، ثم القيادة عودة للدار البيضاء في المساء الباكر.',
        'إذا استأجرت سيارة لرحلة اليوم، احسب الوقوف قرب المواقع الرئيسية (مناطق القصبة وصومعة حسان لديها وقوف مخصص مدفوع، عادة MAD 10-20) وحاول العودة قبل ساعة الذروة 5-7 مساءً نحو الدار البيضاء إن أمكن.',
      ],
      callout: {
        label: '💡 نصيحة رحلة اليوم الواحد',
        body: 'لرحلة يوم واحد الدار البيضاء-الرباط، القطار غالباً أكثر استرخاءً من القيادة — لا وقوف للبحث عنه، لا ازدحام ذروة للتوقيت حوله، ويمكنك القراءة أو الراحة خلال رحلة الساعة بدلاً من التركيز على الطريق. احتفظ بسيارة الإيجار لوقت كون الرباط جزءاً من مسار أطول متعدد المدن.',
      },
    },
    {
      heading: 'استئجار سيارة لرحلة الدار البيضاء-الرباط',
      paragraphs: [
        'للمسافرين المتابعين بعد الرباط — إلى طنجة أو شفشاون أو فاس أو دائرة شمال المغرب الكاملة — استلام سيارة إيجار من مطار الدار البيضاء (CMN) قبل القيادة إلى الرباط هو الخيار الأكثر كفاءة. تقدم MoroccoForYou Cars استقبالاً مجانياً مباشرة في صالة وصول CMN، لتكون على الطريق السريع A1 نحو الرباط خلال 20-30 دقيقة من الهبوط.',
        'سيارة اقتصادية (رينو كليو، داشيا ساندرو) كافية تماماً لرحلة الدار البيضاء-الرباط وأي امتداد شمالاً على الساحل — لا حاجة لـ4x4 لهذا المسار. الأسعار من MAD 250/يوم (23€) مع كيلومترات غير محدودة.',
      ],
      callout: {
        label: '🚗 احجز سيارتك لمسار الدار البيضاء–الرباط',
        body: 'احجز سيارة الإيجار على واتساب قبل الهبوط في CMN — اقتصادية من 23€/يوم، مثالية للدار البيضاء إلى الرباط وما بعدها شمالاً. استلام مجاني في المطار، تأكيد خلال ساعة. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'ما المسافة بين الدار البيضاء والرباط؟',
      answer: 'مسافة القيادة بين الدار البيضاء والرباط حوالي 87–93 كم عبر الطريق السريع A1. المسافة المستقيمة أقصر قليلاً، حوالي 86 كم.',
    },
    {
      question: 'كم يستغرق القيادة من الدار البيضاء إلى الرباط؟',
      answer: 'وقت القيادة من الدار البيضاء إلى الرباط هو ساعة إلى ساعة و20 دقيقة عبر الطريق السريع A1، حسب حركة المرور. من مطار الدار البيضاء (CMN) تحديداً، خصص ساعة و30 إلى ساعة و45 دقيقة.',
    },
    {
      question: 'كيف أصل من الدار البيضاء إلى الرباط بدون سيارة؟',
      answer: 'قطار ONCF هو أفضل خيار بدون سيارة — يسير كل 30 دقيقة تقريباً بين الدار البيضاء المسافرين والرباط المدينة، يستغرق أقل من ساعة، ويكلف MAD 35–90 (3.20–8.30€). حافلات CTM وسيارات الأجرة الكبيرة المشتركة متاحة أيضاً.',
    },
    {
      question: 'هل يمكنني زيارة الرباط في رحلة يوم واحد من الدار البيضاء؟',
      answer: 'نعم — الدار البيضاء إلى الرباط واحدة من أسهل رحلات اليوم الواحد بالمغرب. غادر الساعة 8:30 صباحاً، اقضِ 4-5 ساعات في رؤية صومعة حسان وقصبة الأوداية والشالة، وعد للدار البيضاء في المساء الباكر. القطار غالباً أكثر استرخاءً من القيادة لرحلة ذهاب وإياب في نفس اليوم.',
    },
    {
      question: 'هل من الأفضل أخذ القطار أم القيادة من الدار البيضاء إلى الرباط؟',
      answer: 'القطار أسرع وأقل توتراً لرحلة مباشرة الدار البيضاء-الرباط (50-60 دقيقة، لا حاجة لوقوف). سيارة الإيجار أفضل إذا كانت الرباط محطة في مسار أطول متابع إلى طنجة أو شفشاون أو فاس، أو إذا أردت التوقف عند بلدات ساحلية كالمحمدية أو الصخيرات في الطريق.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'ما البلدات بين الدار البيضاء والرباط؟', answer: 'البلدات الرئيسية على طول طريق A1 بين الدار البيضاء والرباط هي المحمدية (25 كم، مدينة ساحلية بشواطئ)، الصخيرات (50 كم، بلدة شاطئية هادئة)، تمارة (70 كم، ضاحية ساحلية للرباط)، وسلا (85 كم، المدينة التوأم التاريخية للرباط عبر النهر).' },
    { question: 'كم رسوم الطريق من الدار البيضاء إلى الرباط؟', answer: 'رسوم الطريق السريع A1 من الدار البيضاء إلى الرباط حوالي MAD 33 (3 يورو) لسيارة قياسية، تُدفع نقداً أو عبر بطاقة رسوم إلكترونية عند محطة الرسوم.' },
    { question: 'هل يمكنني استئجار سيارة من الدار البيضاء وإعادتها في الرباط؟', answer: 'نعم — الإيجارات أحادية الاتجاه من الدار البيضاء إلى الرباط متاحة مع معظم الوكالات، رغم أنه نظراً للمسافة القصيرة ساعة واحدة، معظم المسافرين يحتفظون بالسيارة لكامل برنامجهم المغربي بدلاً من إعادة أحادية الاتجاه قريبة هكذا.' },
  ],
  relatedDestinations: ['casablanca', 'rabat'],
  relatedPosts: ['istajar-sayyara-matar-dar-al-bayda-cmn', 'min-dar-al-bayda-ila-agadir-bis-sayyara', 'afdal-sayyara-listajar-fi-dar-al-bayda'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);