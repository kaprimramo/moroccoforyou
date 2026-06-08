import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'casablanca-airport-to-marrakech-by-car';
const SLUG_FR = 'aeroport-casablanca-marrakech-en-voiture';
const SLUG_AR = 'min-matar-dar-al-bayda-ila-marrakesh-bis-sayyara';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(6587429);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Casablanca Airport to Marrakech by Car 2026 — Complete Guide',
  metaDescription: 'Drive from Casablanca Airport (CMN) to Marrakech in 2026: real driving time, toll costs, motorway tips, and how to rent a car at CMN from 320 MAD/day.',
  title: 'Casablanca Airport to Marrakech by Car: Complete 2026 Guide',
  description: 'Everything you need to drive from Casablanca Mohammed V Airport (CMN) to Marrakech in 2026 — driving time, route, tolls, fuel costs, and car rental options.',
  keyword: 'casablanca airport to marrakech by car',
  coverImage: COVER,
  coverAlt: 'Casablanca Mohammed V Airport CMN — drive to Marrakech by car',
  publishedISO: '2026-06-08',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'Driving from Casablanca Mohammed V Airport (CMN) to Marrakech is the single most popular self-drive route in Morocco — 240 km of motorway, 2h30 in normal traffic, and one of the smoothest drives in the country. Whether you are picking up a rental car at arrivals or have your own vehicle, this guide gives you the exact route, real 2026 toll costs, fuel prices, and everything to watch out for on the A7 motorway.',
  sections: [
    {
      heading: 'How Long Does It Take to Drive from Casablanca Airport to Marrakech?',
      paragraphs: [
        'The drive from CMN to Marrakech covers 240 km on the A7 motorway and takes 2h15 to 2h45 depending on traffic. The road is dual carriageway the entire way — no mountain passes, no single-lane sections. In normal conditions outside rush hour, budget 2h30.',
        'The only variable is the Casablanca bypass (contournement) — follow signs for "Marrakech / Autoroute A7" not "Casablanca Centre" and you will be on the open motorway within 15 minutes of leaving the airport car park.',
      ],
      table: {
        caption: 'CMN to Marrakech by car — key facts 2026',
        headers: ['Detail', 'Information'],
        rows: [
          ['Distance', '240 km'],
          ['Drive time (normal)', '2h15–2h30'],
          ['Drive time (peak hours)', '2h45–3h15'],
          ['Motorway toll', '78 MAD (€7.10)'],
          ['Fuel cost (economy car)', '~130 MAD (€12)'],
          ['Total cost (toll + fuel)', '~208 MAD (€19)'],
          ['Road type', 'Full motorway A7 — no mountain sections'],
          ['Best departure time', '7am–9am or after 7pm'],
        ],
      },
    },
    {
      heading: 'The Route: CMN Airport to Marrakech Step by Step',
      paragraphs: [
        'Exit the airport car park and follow signs for "Autoroute / A7 / Marrakech". You will join the motorway within 5 minutes. The A7 runs south from Casablanca directly to Marrakech — no junctions to worry about, no confusion. Set Google Maps to "Marrakech Medina" before you leave.',
        'The first toll plaza appears about 20 km from the airport. Pay in cash — 78 MAD total (you may pay in two instalments at separate toll booths). Keep small bills: 50 MAD and 100 MAD notes are ideal. The motorway ends at the Marrakech Nord junction — follow "Centre Ville" or your riad address from there.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'Avoid driving this route between 5pm and 7pm on Fridays — trucks and families returning to Marrakech for the weekend create the worst jams of the week on the A7. Leave CMN before 3pm or after 8pm on Fridays for a smooth drive.',
      },
    },
    {
      heading: 'Fuel and Toll Costs — CMN to Marrakech 2026',
      paragraphs: [
        'The total cost of driving from CMN to Marrakech for an economy car in 2026 is around 200–220 MAD (€18–20) including tolls and fuel. Here is the full breakdown.',
      ],
      table: {
        caption: 'Full cost breakdown — CMN to Marrakech by car 2026',
        headers: ['Cost item', 'MAD', 'EUR', 'Notes'],
        rows: [
          ['Motorway toll (A7)', '78 MAD', '€7.10', 'Paid in cash at toll plazas'],
          ['Fuel — economy car (Clio/Sandero)', '~130 MAD', '€12', 'Based on 6L/100km at 14 MAD/litre'],
          ['Fuel — SUV (Dacia Duster)', '~180 MAD', '€16', 'Based on 8L/100km'],
          ['Fuel — 7-seater (Lodgy)', '~200 MAD', '€18', 'Based on 9L/100km'],
          ['Parking in Marrakech medina', '20–30 MAD/night', '€2–3', 'Guarded car parks near Bab Doukkala'],
          ['TOTAL (economy car)', '~208 MAD', '€19', 'Toll + fuel, excluding car rental'],
        ],
      },
    },
    {
      heading: 'Car Rental at CMN for the Marrakech Drive',
      paragraphs: [
        'CMN is Morocco\'s cheapest car rental hub — consistently 10–20% cheaper than Marrakech RAK for the same vehicle. If your itinerary ends in Marrakech, pick up at CMN and drop off at RAK — the one-way fee (400–600 MAD) is usually less than the price difference between airports.',
        'International desks (Hertz, Avis, Europcar, Sixt) are in the arrivals hall, open 24/7. MoroccoForYou Cars delivers to CMN on a meet-and-greet basis — economy cars from 320 MAD/day (€29), Dacia Duster SUV from 450 MAD/day (€41). Book on WhatsApp for instant confirmation.',
      ],
      table: {
        caption: 'Car rental options at CMN for Marrakech drive — 2026',
        headers: ['Car type', 'Price/day (MAD)', 'Price/day (€)', 'Best for'],
        rows: [
          ['Economy (Clio, Sandero)', '320–420', '€29–38', 'Solo or couple, motorway only'],
          ['Compact SUV (Duster)', '450–620', '€41–56', 'Family, or if doing Atlas day trips'],
          ['7-seater (Lodgy)', '480–650', '€44–59', 'Groups of 4–7'],
          ['Automatic (Mercedes A)', '700–950', '€64–86', 'Comfort-focused travelers'],
        ],
      },
      callout: {
        label: '💡 MoroccoForYou Car Rental Tip',
        body: 'Book your CMN airport car rental on WhatsApp with MoroccoForYou Cars — from 320 MAD/day (€29), free airport meet and greet, and all-inclusive pricing with no hidden airport surcharge. Reply within 1 hour guaranteed.',
      },
    },
    {
      heading: 'Driving Tips for the A7 Casablanca–Marrakech Motorway',
      paragraphs: [
        'The A7 is one of Morocco\'s best motorways — wide, well-maintained, and clearly signed. Speed limit is 120 km/h. Fixed speed cameras are placed at regular intervals and fines are issued on the spot (MAD 400–1,500). Do not exceed 120 km/h.',
        'Overtaking trucks on the right is illegal. The left lane is for overtaking only — do not cruise in it. Fuel at major brand stations (Afriquia, Total, Shell) on the motorway — there are service areas every 60–80 km with fuel, coffee, and toilets.',
      ],
      table: {
        caption: 'A7 motorway driving rules — what to do and avoid',
        headers: ['Do This', 'Avoid This'],
        rows: [
          ['Follow signs for "A7 / Marrakech" from airport', 'Follow signs for "Casablanca Centre"'],
          ['Keep small bills for toll booths (50, 100 MAD)', 'Arriving at toll with only 200 MAD notes'],
          ['Fuel at Afriquia / Total / Shell service areas', 'Fuelling at independent roadside stations'],
          ['Drive at 110–120 km/h max', 'Speeding — fixed cameras every 30 km'],
          ['Leave early morning or evening', 'Driving Friday 5pm–8pm (worst traffic)'],
          ['Keep rental contract + licence accessible', 'Leaving documents in the boot'],
        ],
      },
    },
    {
      heading: 'Arriving in Marrakech — Where to Park',
      paragraphs: [
        'The motorway ends at Marrakech Nord. From here, follow signs for "Centre Ville" or "Médina". Most riads are inside the pedestrian medina — you cannot drive to the door. The closest guarded car parks are at Bab Doukkala (north medina), Bab Laksour, and the Place Batha car park near Bab Boujloud.',
        'Parking costs 20–30 MAD per night in guarded lots. Your riad will send a porter to meet you at the nearest gate — call ahead with your arrival time. If you are staying in Guéliz (the new town), parking is easier and many hotels have their own car park.',
      ],
      callout: {
        label: '🇲🇦 Marrakech Parking Tip',
        body: 'Never leave valuables visible in a parked car in Marrakech — not even a bag on the back seat. Use the guarded car parks (gardien) even for short stops. The fee is 5–10 MAD for a few hours and 20–30 MAD overnight.',
      },
    },
  ],
  faqs: [
    {
      question: 'How long is the drive from Casablanca Airport to Marrakech?',
      answer: '2h15 to 2h30 in normal traffic on the A7 motorway. During peak hours (Friday evenings, weekend mornings) allow up to 3 hours. The route is 240 km of full motorway — no mountains or difficult sections.',
    },
    {
      question: 'How much does it cost to drive from Casablanca Airport to Marrakech?',
      answer: 'Motorway toll: 78 MAD (€7.10). Fuel for an economy car: approximately 130 MAD (€12). Total driving cost: around 208 MAD (€19), excluding car rental.',
    },
    {
      question: 'Is it easy to drive from Casablanca Airport to Marrakech?',
      answer: 'Yes — it is one of the easiest drives in Morocco. Full motorway the entire way, well-signposted, no mountain roads. Follow signs for "A7 / Marrakech" from the airport exit and stay on the motorway for 2h30.',
    },
    {
      question: 'Can I rent a car at Casablanca Airport for the drive to Marrakech?',
      answer: 'Yes — CMN has desks for Hertz, Avis, Europcar, Sixt, and Budget in arrivals. Local agencies including MoroccoForYou Cars deliver on a meet-and-greet basis from 320 MAD/day. One-way drop-off in Marrakech costs 400–600 MAD extra.',
    },
    {
      question: 'What is the best time to drive from Casablanca to Marrakech?',
      answer: 'Leave CMN between 7am and 9am for the smoothest drive. Avoid Friday afternoon (5pm–8pm) when the motorway is busiest with weekend traffic. Night driving is safe on the A7 but avoid arriving in the medina after 10pm.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is there a train from Casablanca Airport to Marrakech?', answer: 'Yes — change at Casa-Voyageurs. Total journey approximately 3h15, price around 138 MAD (€12.50). The car is faster (2h30) and more flexible for onward travel.' },
    { question: 'What is the speed limit on the Casablanca–Marrakech motorway?', answer: '120 km/h on the A7 motorway. Fixed speed cameras are placed regularly — fines are 400–1,500 MAD and issued on the spot.' },
    { question: 'Do I need cash for the motorway tolls?', answer: 'Yes — toll booths on the A7 accept cash (MAD). Keep 100 MAD in small bills. Some booths now accept cards but cash is more reliable.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['casablanca-airport-car-rental', 'driving-from-marrakech-to-fes-self-drive', 'morocco-travel-tips-first-time-visitors'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Aéroport Casablanca à Marrakech en voiture 2026 — Guide complet',
  metaDescription: 'Conduire de l\'aéroport CMN à Marrakech en 2026 : durée réelle, péages, conseils autoroute et location voiture à CMN dès 320 MAD/jour.',
  title: 'Aéroport de Casablanca à Marrakech en voiture : guide complet 2026',
  description: 'Tout pour conduire de l\'aéroport Mohammed V (CMN) à Marrakech en 2026 — durée, itinéraire, péages, carburant et location voiture.',
  keyword: 'aéroport casablanca marrakech en voiture',
  coverImage: COVER,
  coverAlt: 'Aéroport Mohammed V CMN — conduire jusqu\'à Marrakech en voiture',
  publishedISO: '2026-06-08',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 9,
  intro: 'Conduire de l\'aéroport Mohammed V de Casablanca (CMN) à Marrakech est l\'itinéraire self-drive le plus emprunté du Maroc — 240 km d\'autoroute, 2h30 en conditions normales, et l\'une des routes les plus fluides du pays. Que vous récupériez une voiture de location aux arrivées ou que vous ayez votre propre véhicule, ce guide vous donne l\'itinéraire exact, les vrais coûts de péage 2026, les prix du carburant, et tout ce qu\'il faut surveiller sur l\'autoroute A7.',
  sections: [
    {
      heading: 'Combien de temps dure le trajet de l\'aéroport de Casablanca à Marrakech ?',
      paragraphs: [
        'Le trajet de CMN à Marrakech couvre 240 km sur l\'autoroute A7 et prend 2h15 à 2h45 selon le trafic. La route est en 2×2 voies sur tout le parcours — pas de cols de montagne, pas de sections à voie unique. En conditions normales hors heure de pointe, comptez 2h30.',
        'La seule variable est le contournement de Casablanca — suivez les panneaux "Marrakech / Autoroute A7" et non "Casablanca Centre" et vous serez sur l\'autoroute dégagée en 15 minutes depuis le parking de l\'aéroport.',
      ],
      table: {
        caption: 'CMN à Marrakech en voiture — chiffres clés 2026',
        headers: ['Détail', 'Information'],
        rows: [
          ['Distance', '240 km'],
          ['Durée (conditions normales)', '2h15–2h30'],
          ['Durée (heures de pointe)', '2h45–3h15'],
          ['Péage autoroute', '78 MAD (7,10€)'],
          ['Carburant (voiture économique)', '~130 MAD (12€)'],
          ['Coût total (péage + carburant)', '~208 MAD (19€)'],
          ['Type de route', 'Autoroute A7 complète — pas de sections montagneuses'],
          ['Meilleure heure de départ', '7h–9h ou après 19h'],
        ],
      },
    },
    {
      heading: 'L\'itinéraire : aéroport CMN à Marrakech étape par étape',
      paragraphs: [
        'Sortez du parking de l\'aéroport et suivez les panneaux "Autoroute / A7 / Marrakech". Vous rejoindrez l\'autoroute en 5 minutes. L\'A7 descend directement vers le sud de Casablanca à Marrakech — pas d\'échangeurs compliqués. Programmez "Marrakech Médina" sur Google Maps avant de partir.',
        'Le premier péage apparaît environ 20 km après l\'aéroport. Payez en espèces — 78 MAD au total (en deux fois sur deux péages distincts). Gardez des petites coupures : billets de 50 et 100 MAD idéaux. L\'autoroute se termine à l\'échangeur Marrakech Nord — suivez "Centre Ville" ou l\'adresse de votre riad.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'Évitez ce trajet entre 17h et 19h le vendredi — les camions et les familles qui rentrent à Marrakech pour le week-end créent les pires bouchons de la semaine sur l\'A7. Quittez CMN avant 15h ou après 20h le vendredi pour rouler tranquillement.',
      },
    },
    {
      heading: 'Carburant et péages — CMN à Marrakech 2026',
      paragraphs: [
        'Le coût total du trajet CMN–Marrakech pour une voiture économique en 2026 est d\'environ 200–220 MAD (18–20€) péages et carburant inclus. Voici le détail complet.',
      ],
      table: {
        caption: 'Détail complet des coûts — CMN à Marrakech en voiture 2026',
        headers: ['Poste de dépense', 'MAD', 'EUR', 'Notes'],
        rows: [
          ['Péage autoroute (A7)', '78 MAD', '7,10€', 'Payé en espèces aux gares de péage'],
          ['Carburant — voiture éco (Clio/Sandero)', '~130 MAD', '12€', 'Base 6L/100km à 14 MAD/litre'],
          ['Carburant — SUV (Dacia Duster)', '~180 MAD', '16€', 'Base 8L/100km'],
          ['Carburant — 7 places (Lodgy)', '~200 MAD', '18€', 'Base 9L/100km'],
          ['Parking à Marrakech médina', '20–30 MAD/nuit', '2–3€', 'Parkings gardés près de Bab Doukkala'],
          ['TOTAL (voiture économique)', '~208 MAD', '19€', 'Péage + carburant, hors location'],
        ],
      },
    },
    {
      heading: 'Location voiture à CMN pour le trajet Marrakech',
      paragraphs: [
        'CMN est le hub de location le moins cher du Maroc — systématiquement 10–20% moins cher que Marrakech RAK pour le même véhicule. Si votre itinéraire se termine à Marrakech, prenez à CMN et rendez à RAK — le supplément aller simple (400–600 MAD) est généralement inférieur à l\'écart de prix entre les deux aéroports.',
        'Les comptoirs internationaux (Hertz, Avis, Europcar, Sixt) sont dans le hall des arrivées, ouverts 24h/24. MoroccoForYou Cars livre à CMN en meet & greet — voitures économiques dès 320 MAD/jour (29€), Dacia Duster SUV dès 450 MAD/jour (41€). Réservez sur WhatsApp pour confirmation immédiate.',
      ],
      table: {
        caption: 'Options location voiture à CMN pour Marrakech — 2026',
        headers: ['Type de voiture', 'Prix/jour (MAD)', 'Prix/jour (€)', 'Idéal pour'],
        rows: [
          ['Économique (Clio, Sandero)', '320–420', '29–38€', 'Solo ou couple, autoroute uniquement'],
          ['SUV compact (Duster)', '450–620', '41–56€', 'Famille ou excursions Atlas'],
          ['7 places (Lodgy)', '480–650', '44–59€', 'Groupes de 4 à 7'],
          ['Automatique (Mercedes A)', '700–950', '64–86€', 'Voyageurs confort'],
        ],
      },
      callout: {
        label: '💡 Conseil MoroccoForYou',
        body: 'Réservez votre location voiture à l\'aéroport CMN sur WhatsApp avec MoroccoForYou Cars — dès 320 MAD/jour (29€), accueil gratuit à l\'aéroport, tarif tout compris sans surcharge cachée. Réponse garantie sous 1 heure.',
      },
    },
    {
      heading: 'Conseils de conduite sur l\'autoroute A7 Casablanca–Marrakech',
      paragraphs: [
        'L\'A7 est l\'une des meilleures autoroutes du Maroc — large, bien entretenue et bien signalisée. Vitesse limite 120 km/h. Des radars fixes sont placés à intervalles réguliers et les amendes sont remises sur place (400–1 500 MAD). Ne dépassez pas 120 km/h.',
        'Il est interdit de dépasser par la droite. La voie de gauche est réservée au dépassement. Faites le plein dans les stations de marque (Afriquia, Total, Shell) sur l\'autoroute — des aires de service sont disponibles tous les 60–80 km.',
      ],
      table: {
        caption: 'Conduite sur l\'A7 — à faire et à éviter',
        headers: ['À faire', 'À éviter'],
        rows: [
          ['Suivre panneaux "A7 / Marrakech" depuis l\'aéroport', 'Suivre "Casablanca Centre"'],
          ['Garder petites coupures pour les péages', 'Arriver au péage avec seulement des billets de 200 MAD'],
          ['Carburant chez Afriquia / Total / Shell', 'Stations indépendantes en bord de route'],
          ['Rouler à 110–120 km/h max', 'Excès de vitesse — radars tous les 30 km'],
          ['Partir tôt le matin ou en soirée', 'Vendredi 17h–20h (pire trafic)'],
          ['Garder contrat + permis accessibles', 'Documents dans le coffre'],
        ],
      },
    },
    {
      heading: 'Arriver à Marrakech — où se garer',
      paragraphs: [
        'L\'autoroute se termine à Marrakech Nord. De là, suivez "Centre Ville" ou "Médina". La plupart des riads sont dans la médina piétonne — vous ne pouvez pas conduire jusqu\'à la porte. Les parkings gardés les plus proches sont à Bab Doukkala, Bab Laksour et la place Batha près de Bab Boujloud.',
        'Le stationnement coûte 20–30 MAD par nuit dans les parkings gardés. Votre riad enverra un porteur vous accueillir à la porte la plus proche — appelez à l\'avance avec votre heure d\'arrivée.',
      ],
      callout: {
        label: '🇲🇦 Conseil parking Marrakech',
        body: 'Ne laissez jamais d\'objets de valeur visibles dans une voiture garée à Marrakech. Utilisez les parkings gardés même pour de courts arrêts — 5–10 MAD pour quelques heures, 20–30 MAD la nuit.',
      },
    },
  ],
  faqs: [
    {
      question: 'Combien de temps dure le trajet de l\'aéroport de Casablanca à Marrakech en voiture ?',
      answer: '2h15 à 2h30 en conditions normales sur l\'autoroute A7. Aux heures de pointe (vendredi soir, matins de week-end), comptez jusqu\'à 3 heures. Le parcours est 240 km d\'autoroute complète — pas de montagne ni de sections difficiles.',
    },
    {
      question: 'Combien coûte le trajet de l\'aéroport de Casablanca à Marrakech en voiture ?',
      answer: 'Péage autoroute : 78 MAD (7,10€). Carburant pour une voiture économique : environ 130 MAD (12€). Coût total de conduite : environ 208 MAD (19€), hors location de voiture.',
    },
    {
      question: 'Est-il facile de conduire de l\'aéroport de Casablanca à Marrakech ?',
      answer: 'Oui — c\'est l\'un des trajets les plus faciles du Maroc. Autoroute complète sur tout le parcours, bien signalisée, pas de routes de montagne. Suivez "A7 / Marrakech" depuis la sortie de l\'aéroport.',
    },
    {
      question: 'Puis-je louer une voiture à l\'aéroport de Casablanca pour Marrakech ?',
      answer: 'Oui — CMN dispose de comptoirs Hertz, Avis, Europcar, Sixt et Budget aux arrivées. MoroccoForYou Cars livre en meet & greet dès 320 MAD/jour. L\'aller simple Marrakech coûte 400–600 MAD de supplément.',
    },
    {
      question: 'Quelle est la meilleure heure pour conduire de Casablanca à Marrakech ?',
      answer: 'Quittez CMN entre 7h et 9h pour le trajet le plus fluide. Évitez le vendredi après-midi (17h–20h). La conduite de nuit est sûre sur l\'A7 mais évitez d\'arriver dans la médina après 22h.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Y a-t-il un train de l\'aéroport de Casablanca à Marrakech ?', answer: 'Oui — avec changement à Casa-Voyageurs. Durée totale environ 3h15, prix environ 138 MAD (12,50€). La voiture est plus rapide (2h30) et plus flexible.' },
    { question: 'Quelle est la limite de vitesse sur l\'autoroute Casablanca–Marrakech ?', answer: '120 km/h sur l\'A7. Des radars fixes sont placés régulièrement — amendes de 400–1 500 MAD remises sur place.' },
    { question: 'Faut-il des espèces pour les péages d\'autoroute ?', answer: 'Oui — les péages sur l\'A7 acceptent les espèces (MAD). Gardez 100 MAD en petites coupures. Certains péages acceptent désormais les cartes mais les espèces restent plus fiables.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['casablanca-airport-car-rental', 'driving-from-marrakech-to-fes-self-drive', 'morocco-travel-tips-first-time-visitors'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'من مطار الدار البيضاء إلى مراكش بالسيارة 2026 — دليل شامل',
  metaDescription: 'القيادة من مطار محمد الخامس (CMN) إلى مراكش 2026: وقت القيادة الحقيقي وتكاليف الطريق السريع ونصائح وتأجير سيارة من 320 درهم/يوم.',
  title: 'من مطار الدار البيضاء إلى مراكش بالسيارة: الدليل الشامل 2026',
  description: 'كل ما تحتاجه للقيادة من مطار محمد الخامس (CMN) إلى مراكش 2026 — وقت القيادة والمسار والرسوم وتكاليف الوقود وتأجير السيارة.',
  keyword: 'من مطار الدار البيضاء إلى مراكش بالسيارة',
  coverImage: COVER,
  coverAlt: 'مطار محمد الخامس CMN — القيادة إلى مراكش بالسيارة',
  publishedISO: '2026-06-08',
  author: 'فريق MoroccoForYou',
  readingMinutes: 9,
  intro: 'القيادة من مطار محمد الخامس بالدار البيضاء (CMN) إلى مراكش هي أكثر مسارات القيادة الذاتية شعبية في المغرب — 240 كم على الطريق السريع، 2.5 ساعة في ظروف عادية، وواحدة من أسلس الطرق في البلاد. سواء كنت تستلم سيارة مستأجرة عند الوصول أو تملك سيارتك، هذا الدليل يعطيك المسار الدقيق وتكاليف الرسوم الحقيقية لعام 2026 وأسعار الوقود وكل ما يجب مراقبته على الطريق السريع A7.',
  sections: [
    {
      heading: 'كم يستغرق القيادة من مطار الدار البيضاء إلى مراكش؟',
      paragraphs: [
        'يغطي المسار من CMN إلى مراكش 240 كم على الطريق السريع A7 ويستغرق 2.15 إلى 2.45 ساعة حسب حركة المرور. الطريق ازدواجي طوال الرحلة — بدون ممرات جبلية أو أقسام بمسار واحد. في الأوضاع الطبيعية خارج ساعات الذروة، خصص 2.5 ساعة.',
        'المتغير الوحيد هو الطريق الدائري للدار البيضاء — اتبع لافتات "مراكش / الطريق السريع A7" وليس "وسط الدار البيضاء" وستكون على الطريق السريع المفتوح في 15 دقيقة من مواقف المطار.',
      ],
      table: {
        caption: 'CMN إلى مراكش بالسيارة — أرقام أساسية 2026',
        headers: ['التفصيل', 'المعلومة'],
        rows: [
          ['المسافة', '240 كم'],
          ['وقت القيادة (عادي)', '2.15–2.30 ساعة'],
          ['وقت القيادة (ذروة)', '2.45–3.15 ساعة'],
          ['رسوم الطريق السريع', '78 درهم (7.10€)'],
          ['الوقود (سيارة اقتصادية)', '~130 درهم (12€)'],
          ['التكلفة الإجمالية (رسوم + وقود)', '~208 درهم (19€)'],
          ['نوع الطريق', 'طريق سريع A7 كامل — بدون أقسام جبلية'],
          ['أفضل وقت للمغادرة', '7 صباحاً–9 صباحاً أو بعد 7 مساءً'],
        ],
      },
    },
    {
      heading: 'المسار: مطار CMN إلى مراكش خطوة بخطوة',
      paragraphs: [
        'اخرج من مواقف المطار واتبع لافتات "طريق سريع / A7 / مراكش". ستنضم للطريق السريع في 5 دقائق. A7 يمتد جنوباً مباشرةً من الدار البيضاء إلى مراكش — بدون تقاطعات معقدة. برمج "مراكش المدينة" على خرائط Google قبل المغادرة.',
        'أول نقطة دفع الرسوم تظهر بعد حوالي 20 كم من المطار. ادفع نقداً — 78 درهم إجمالاً. احتفظ بأوراق نقدية صغيرة: أوراق 50 و100 درهم مثالية. ينتهي الطريق السريع عند مفترق مراكش الشمال — اتبع "وسط المدينة" أو عنوان رياضك.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'تجنّب هذا المسار بين 5 و7 مساءً أيام الجمعة — الشاحنات والعائلات العائدة إلى مراكش للعطلة الأسبوعية تخلق أسوأ ازدحامات الأسبوع على A7. غادر CMN قبل 3 مساءً أو بعد 8 مساءً أيام الجمعة.',
      },
    },
    {
      heading: 'تكاليف الوقود والرسوم — CMN إلى مراكش 2026',
      paragraphs: [
        'التكلفة الإجمالية للقيادة من CMN إلى مراكش لسيارة اقتصادية في 2026 حوالي 200–220 درهم (18–20€) شاملة الرسوم والوقود. إليك التفصيل الكامل.',
      ],
      table: {
        caption: 'تفصيل كامل للتكاليف — CMN إلى مراكش بالسيارة 2026',
        headers: ['بند التكلفة', 'درهم', 'يورو', 'ملاحظات'],
        rows: [
          ['رسوم الطريق السريع (A7)', '78 درهم', '7.10€', 'تُدفع نقداً عند نقاط الدفع'],
          ['الوقود — سيارة اقتصادية (كليو/ساندرو)', '~130 درهم', '12€', 'بمعدل 6 لتر/100كم بـ14 درهم/لتر'],
          ['الوقود — SUV (داشيا دوستر)', '~180 درهم', '16€', 'بمعدل 8 لتر/100كم'],
          ['الوقود — 7 ركاب (لودجي)', '~200 درهم', '18€', 'بمعدل 9 لتر/100كم'],
          ['إيقاف في مراكش المدينة', '20–30 درهم/ليلة', '2–3€', 'مواقف محروسة قرب باب الدكالة'],
          ['الإجمالي (سيارة اقتصادية)', '~208 درهم', '19€', 'رسوم + وقود، دون تأجير السيارة'],
        ],
      },
    },
    {
      heading: 'تأجير سيارة في CMN للقيادة إلى مراكش',
      paragraphs: [
        'CMN هو أرخص مركز تأجير سيارات في المغرب — أرخص باستمرار بـ10–20% من مراكش RAK لنفس السيارة. إذا كان مسارك ينتهي في مراكش، استلم من CMN وسلّم في RAK — رسوم الذهاب فقط (400–600 درهم) عادةً أقل من فارق السعر بين المطارين.',
        'طاولات دولية (هيرتز، أفيس، يوروبكار، سيكست) في صالة الوصول، مفتوحة 24/7. MoroccoForYou Cars توصل إلى CMN بنظام الاستقبال — سيارات اقتصادية من 320 درهم/يوم (29€)، داشيا دوستر SUV من 450 درهم/يوم (41€). احجز عبر واتساب للتأكيد الفوري.',
      ],
      table: {
        caption: 'خيارات تأجير السيارة في CMN للقيادة إلى مراكش — 2026',
        headers: ['نوع السيارة', 'السعر/يوم (درهم)', 'السعر/يوم (€)', 'الأنسب لـ'],
        rows: [
          ['اقتصادية (كليو، ساندرو)', '320–420', '29–38€', 'منفرد أو زوجان، طريق سريع فقط'],
          ['SUV مدمج (دوستر)', '450–620', '41–56€', 'عائلة أو رحلات أطلس'],
          ['7 ركاب (لودجي)', '480–650', '44–59€', 'مجموعات من 4 إلى 7'],
          ['أوتوماتيك (مرسيدس A)', '700–950', '64–86€', 'المسافرون الباحثون عن الراحة'],
        ],
      },
      callout: {
        label: '💡 نصيحة MoroccoForYou',
        body: 'احجز تأجير سيارتك في مطار CMN عبر واتساب مع MoroccoForYou Cars — من 320 درهم/يوم (29€)، استقبال مجاني في المطار، تسعير شامل بدون رسوم خفية. رد مضمون خلال ساعة.',
      },
    },
    {
      heading: 'نصائح القيادة على طريق A7 الدار البيضاء–مراكش',
      paragraphs: [
        'A7 من أفضل الطرق السريعة في المغرب — واسع وصيانته جيدة وإشاراته واضحة. حد السرعة 120 كم/س. رادارات ثابتة موزعة بانتظام والغرامات تُسلَّم في الحال (400–1500 درهم). لا تتجاوز 120 كم/س.',
        'التجاوز من اليمين محظور. المسار الأيسر للتجاوز فقط. أعد الوقود في محطات ماركات معروفة (أفريقيا، توتال، شيل) على الطريق السريع — محطات خدمة كل 60–80 كم.',
      ],
      table: {
        caption: 'القيادة على A7 — ما يجب فعله وتجنبه',
        headers: ['افعل هذا', 'تجنب هذا'],
        rows: [
          ['اتبع لافتات "A7 / مراكش" من المطار', 'اتباع "وسط الدار البيضاء"'],
          ['احتفظ بأوراق صغيرة لنقاط الدفع', 'الوصول بأوراق 200 درهم فقط'],
          ['الوقود من أفريقيا / توتال / شيل', 'محطات مستقلة على جانب الطريق'],
          ['القيادة بـ110–120 كم/س كحد أقصى', 'السرعة الزائدة — رادارات كل 30 كم'],
          ['المغادرة صباحاً باكراً أو مساءً', 'الجمعة 5–8 مساءً (أسوأ ازدحام)'],
          ['إبقاء العقد والرخصة في متناول اليد', 'وضع الوثائق في الصندوق الخلفي'],
        ],
      },
    },
    {
      heading: 'الوصول إلى مراكش — أين تركن السيارة',
      paragraphs: [
        'ينتهي الطريق السريع عند مراكش الشمال. من هناك اتبع "وسط المدينة" أو "المدينة العتيقة". معظم الرياضات داخل المدينة العتيقة للمشاة — لا يمكنك القيادة للباب. أقرب المواقف المحروسة عند باب الدكالة وباب لقصور وساحة باحة قرب باب بوجلود.',
        'الإيقاف يكلف 20–30 درهم/ليلة في المواقف المحروسة. رياضك سيرسل حمّالاً لاستقبالك عند أقرب باب — اتصل مسبقاً بوقت وصولك.',
      ],
      callout: {
        label: '🇲🇦 نصيحة إيقاف مراكش',
        body: 'لا تترك أبداً أغراضاً ثمينة ظاهرة في سيارة مركونة بمراكش. استخدم المواقف المحروسة حتى للتوقفات القصيرة — 5–10 درهم لبضع ساعات، 20–30 درهم ليلاً.',
      },
    },
  ],
  faqs: [
    {
      question: 'كم يستغرق القيادة من مطار الدار البيضاء إلى مراكش؟',
      answer: '2.15 إلى 2.30 ساعة في الأوضاع الطبيعية على طريق A7 السريع. في ساعات الذروة (مساء الجمعة، صباح عطل نهاية الأسبوع) خصص حتى 3 ساعات. المسار 240 كم من الطريق السريع الكامل — بدون جبال أو أقسام صعبة.',
    },
    {
      question: 'كم يكلف القيادة من مطار الدار البيضاء إلى مراكش؟',
      answer: 'رسوم الطريق السريع: 78 درهم (7.10€). الوقود لسيارة اقتصادية: حوالي 130 درهم (12€). إجمالي تكلفة القيادة: حوالي 208 درهم (19€)، دون تأجير السيارة.',
    },
    {
      question: 'هل من السهل القيادة من مطار الدار البيضاء إلى مراكش؟',
      answer: 'نعم — إنه من أسهل المسارات في المغرب. طريق سريع كامل طوال الرحلة، إشارات واضحة، لا طرق جبلية. اتبع "A7 / مراكش" من مخرج المطار.',
    },
    {
      question: 'هل يمكنني تأجير سيارة من مطار الدار البيضاء للقيادة إلى مراكش؟',
      answer: 'نعم — CMN يملك طاولات هيرتز وأفيس ويوروبكار وسيكست وبدجيت في الوصول. MoroccoForYou Cars توصل بنظام الاستقبال من 320 درهم/يوم. ذهاب فقط لمراكش يكلف 400–600 درهم إضافية.',
    },
    {
      question: 'ما أفضل وقت للقيادة من الدار البيضاء إلى مراكش؟',
      answer: 'غادر CMN بين 7 و9 صباحاً للرحلة الأسلس. تجنّب مساء الجمعة (5–8 مساءً). القيادة الليلية آمنة على A7 لكن تجنّب الوصول للمدينة العتيقة بعد 10 مساءً.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يوجد قطار من مطار الدار البيضاء إلى مراكش؟', answer: 'نعم — مع تغيير في كازا-فواياجور. المدة الإجمالية حوالي 3.15 ساعة، السعر حوالي 138 درهم (12.50€). السيارة أسرع (2.30 ساعة) وأكثر مرونة.' },
    { question: 'ما حد السرعة على طريق الدار البيضاء–مراكش السريع؟', answer: '120 كم/س على A7. رادارات ثابتة موزعة بانتظام — غرامات 400–1500 درهم تُسلَّم في الحال.' },
    { question: 'هل أحتاج نقوداً لرسوم الطريق السريع؟', answer: 'نعم — نقاط الدفع على A7 تقبل النقد (درهم). احتفظ بـ100 درهم في أوراق صغيرة. بعض النقاط تقبل البطاقات الآن لكن النقد أكثر موثوقية.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'rabat'],
  relatedPosts: ['casablanca-airport-car-rental', 'driving-from-marrakech-to-fes-self-drive', 'morocco-travel-tips-first-time-visitors'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);