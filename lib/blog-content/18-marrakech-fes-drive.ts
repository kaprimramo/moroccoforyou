import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'driving-from-marrakech-to-fes-self-drive';
const SLUG_FR = 'route-marrakech-fes-voiture';
const SLUG_AR = 'rihlat-marrakesh-fas-bis-sayyara';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889843);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Driving from Marrakech to Fes Self Drive 2026 — Complete Route Guide',
  metaDescription: 'Self-drive guide from Marrakech to Fes in 2026: 3 routes compared, real driving times, stops at Ait Ben Haddou and Merzouga, costs and tips from local drivers.',
  title: 'Driving from Marrakech to Fes: The Complete Self-Drive Guide (2026)',
  description: 'Complete guide to driving from Marrakech to Fes in 2026: 3 routes compared with real driving times, must-stop destinations, fuel and toll costs, and insider tips.',
  keyword: 'driving from marrakech to fes self drive',
  coverImage: COVER,
  coverAlt: 'Road through Atlas mountains Morocco — driving from Marrakech to Fes self drive',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro: 'The drive from Marrakech to Fes is one of the great road trips of North Africa. Whether you take the direct motorway (5.5 hours, easy), the scenic Atlas and Sahara loop (3–4 days, spectacular), or the middle route via Midelt and Ifrane (7 hours, beautiful), this journey across the spine of Morocco reveals a country that no bus window can adequately show you. This guide compares all three routes with real 2026 driving times, stops worth making, fuel costs, toll costs, and the decisions you need to make before you leave Marrakech.',
  sections: [
    {
      heading: 'The 3 Routes from Marrakech to Fes — Which One to Choose?',
      paragraphs: [
        'There is no single "best" route — the right choice depends entirely on how much time you have and what you want to see. Here is the honest comparison.',
      ],
      table: {
        caption: 'Marrakech to Fes — 3 routes compared (2026)',
        headers: ['Route', 'Distance', 'Drive time', 'Days needed', 'Best for'],
        rows: [
          ['Direct motorway (A7 + A2)', '530 km', '5h30–6h', '1 day', 'Short on time, budget-conscious'],
          ['Middle Atlas via Midelt', '620 km', '7–8h', '1–2 days', 'Mountain scenery, cedar forests'],
          ['Sahara loop via Merzouga', '1,100+ km', '3–4 days driving', '4–6 days total', 'The classic Morocco road trip'],
        ],
      },
    },
    {
      heading: 'Route 1: Direct Motorway — Marrakech to Fes in One Day',
      paragraphs: [
        'The fastest route follows the A7 motorway north from Marrakech to Casablanca (2h30), then the A2 east to Fes (3h). Total distance 530 km, total driving time 5h30–6h including fuel stop. This is the route coaches use and it is genuinely fast — dual carriageway the whole way, good service stations, clear signage.',
        'The scenery is not dramatic — mostly flat agricultural plain between Casa and Fes. The value is speed: if you need to be in Fes the same day you leave Marrakech, this is the only sensible option.',
      ],
      table: {
        caption: 'Direct motorway route: Marrakech to Fes — costs and times',
        headers: ['Segment', 'Distance', 'Drive time', 'Toll cost (MAD)'],
        rows: [
          ['Marrakech → Casablanca (A7)', '240 km', '2h30', '78 MAD (€7)'],
          ['Casablanca → Rabat (A1)', '90 km', '1h', '33 MAD (€3)'],
          ['Rabat → Fes (A2)', '200 km', '2h', '70 MAD (€6.50)'],
          ['Total', '530 km', '5h30–6h', '181 MAD (€16.50)'],
        ],
      },
      callout: {
        label: '💡 Motorway Tip',
        body: 'The Casablanca bypass (contournement) is the trickiest section — follow signs for "Rabat" not "Casa Centre" to stay on the motorway. Keep small bills for toll booths — MAD 20 and 50 notes are ideal. Fuel at Afriquia or Total stations; avoid unbranded stops on this route.',
      },
    },
    {
      heading: 'Route 2: Middle Atlas via Midelt — Marrakech to Fes Through the Mountains',
      paragraphs: [
        'This route heads north from Marrakech on the N9, then turns east at Beni Mellal into the Middle Atlas mountains, passing through Azilal, the Cascades d\'Ouzoud (Morocco\'s most beautiful waterfalls, worth a 2-hour stop), Khenifra, and Midelt before dropping down to Fes. Total distance around 620 km, 7–8 hours driving.',
        'The scenery on this route is stunning — cedar forests around Midelt, Barbary macaques by the roadside near Ifrane, and the dramatic descent into the Fes plain. If you have two days, stop overnight in Midelt or Ifrane and arrive in Fes refreshed.',
      ],
      table: {
        caption: 'Middle Atlas route: Marrakech to Fes via Midelt',
        headers: ['Stop', 'Distance from prev.', 'Cumulative', 'Highlight'],
        rows: [
          ['Marrakech → Beni Mellal', '180 km', '180 km', 'Foothills, olive groves'],
          ['Beni Mellal → Cascades d\'Ouzoud', '25 km', '205 km', '110m waterfall — stop 2 hours'],
          ['Ouzoud → Khenifra', '120 km', '325 km', 'Middle Atlas plateau'],
          ['Khenifra → Midelt', '115 km', '440 km', 'Cedar forest, lunch stop'],
          ['Midelt → Ifrane', '110 km', '550 km', 'Cedar forest, Barbary macaques'],
          ['Ifrane → Fes', '70 km', '620 km', 'The "Switzerland of Morocco"'],
        ],
      },
    },
    {
      heading: 'Route 3: Sahara Loop — The Classic Morocco Road Trip',
      paragraphs: [
        'This is the route most travelers dream of: Marrakech south over the Tizi n\'Tichka pass (2,260m), through Ouarzazate, past Ait Ben Haddou, through the Dades and Todra gorges, overnight in the Sahara at Merzouga, then north through Midelt and Ifrane to Fes. Total distance over 1,100 km, 3–4 days of driving, 4–6 days total with overnight stops.',
        'This route has everything: mountain passes, UNESCO kasbahs, canyon gorges, Sahara dunes, and medieval Fes as the grand finale. It is the reason most travelers rent a car in Morocco. Plan it as a minimum of 4 days to avoid exhaustion.',
      ],
      table: {
        caption: 'Sahara loop: Marrakech to Fes via Merzouga — day by day',
        headers: ['Day', 'Route', 'Distance', 'Key stops', 'Sleep'],
        rows: [
          ['Day 1', 'Marrakech → Ouarzazate', '205 km / 4h', 'Tizi n\'Tichka pass (2,260m), Ait Ben Haddou', 'Ouarzazate or Skoura'],
          ['Day 2', 'Ouarzazate → Merzouga', '355 km / 6h', 'Dades Gorge, Todra Gorge, Erfoud', 'Desert camp at Merzouga'],
          ['Day 3', 'Merzouga → Midelt', '310 km / 5h', 'Sahara sunrise, drive north via Errachidia', 'Midelt or Ifrane'],
          ['Day 4', 'Midelt → Fes', '180 km / 3h', 'Cedar forest, Ifrane, Fes arrival', 'Fes medina riad'],
        ],
      },
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'The Tizi n\'Tichka pass is spectacular but takes time — 4 hours from Marrakech to Ouarzazate with stops. Leave Marrakech by 7am on Day 1 to arrive in Ouarzazate before sunset and visit Ait Ben Haddou in good light. MoroccoForYou can provide a private driver for this route — ask on WhatsApp for a quote.',
      },
    },
    {
      heading: 'Fuel and Toll Costs — Marrakech to Fes',
      paragraphs: [
        'Here are the real fuel and toll costs for each route in 2026, calculated for an economy car (Renault Clio / Dacia Sandero) averaging 6L/100km, with petrol at 14 MAD/litre.',
      ],
      table: {
        caption: 'Fuel and toll costs by route — Marrakech to Fes 2026',
        headers: ['Route', 'Distance', 'Fuel cost (MAD)', 'Toll cost (MAD)', 'Total cost (MAD)', 'Total (€)'],
        rows: [
          ['Direct motorway', '530 km', '446', '181', '627', '~57€'],
          ['Middle Atlas via Midelt', '620 km', '521', '78', '599', '~55€'],
          ['Sahara loop (4 days)', '1,100 km', '924', '250', '1,174', '~107€'],
        ],
      },
    },
    {
      heading: 'Must-Stop Destinations on the Marrakech–Fes Road',
      paragraphs: [
        'Whichever route you take, these stops are worth the extra time.',
        'Ait Ben Haddou (Sahara route): UNESCO-listed ksar used in Game of Thrones, Gladiator, and Lawrence of Arabia. Entry 30 MAD, allow 2 hours. Best light for photography: early morning or late afternoon.',
        'Cascades d\'Ouzoud (Middle Atlas route): Morocco\'s most beautiful waterfall, dropping 110 metres into an emerald pool. Barbary macaques in the trees above. Entry free, guides offer at 30–50 MAD. Allow 2–3 hours.',
        'Todra Gorge (Sahara route): 300-metre high canyon walls, 10 metres apart at the narrowest point. A 1-hour walk into the gorge is free. Rock climbers from across Europe come here. Small cafés at the gorge entrance.',
        'Ifrane (Middle Atlas route): Morocco\'s "Switzerland" — French colonial mountain town at 1,650m, clean streets, red-roofed chalets, cedar forests. Coffee stop only unless you want to stay a night.',
      ],
    },
    {
      heading: 'Driving Tips for the Marrakech–Fes Route',
      paragraphs: [
        'The Tizi n\'Tichka pass (Sahara route): the road is paved and in good condition but the pass has tight hairpin bends. Speed limit 60 km/h on the mountain sections — enforced by radar. Trucks are slow on the climbs. Allow 1h30 for the 50 km of mountain road.',
        'Mountain road safety: the Atlas and Rif roads have no barriers on many sections. Drive at the speed of the hairpins, not the limit. Fog can appear suddenly above 1,500m between October and April.',
        'Night driving: avoid driving after dark on any mountain route or the desert road to Merzouga. Unlit trucks, livestock, and speed bumps without warning make night driving genuinely dangerous.',
      ],
      table: {
        caption: 'Driving conditions by route segment',
        headers: ['Segment', 'Road quality', 'Difficulty', 'Night driving'],
        rows: [
          ['Marrakech → Casa (motorway)', 'Excellent', 'Easy', '✅ Fine'],
          ['Casa → Fes (motorway)', 'Excellent', 'Easy', '✅ Fine'],
          ['Marrakech → Ait Ben Haddou', 'Good', 'Moderate (mountain)', '⚠️ Avoid'],
          ['Ait Ben Haddou → Merzouga', 'Good', 'Moderate (desert road)', '❌ Avoid'],
          ['Merzouga → Midelt', 'Good', 'Easy–moderate', '⚠️ Avoid'],
          ['Midelt → Fes via Ifrane', 'Good', 'Easy', '✅ Fine'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'How long does it take to drive from Marrakech to Fes?',
      answer: 'Via the direct motorway: 5h30–6h. Via the Middle Atlas (Midelt): 7–8h. Via the Sahara (Merzouga): 3–4 days driving spread over 4–6 days total. The motorway is the fastest; the Sahara loop is the most spectacular.',
    },
    {
      question: 'What is the best route from Marrakech to Fes?',
      answer: 'For scenic beauty: the Sahara loop via Ait Ben Haddou, Dades Gorge, Merzouga, and Ifrane. For speed: the direct A7/A2 motorway. For mountain scenery without the full desert loop: the Middle Atlas route via Cascades d\'Ouzoud and Midelt.',
    },
    {
      question: 'Is it safe to drive from Marrakech to Fes?',
      answer: 'Yes — all three routes are on paved roads. The mountain sections (Tichka pass, Atlas roads) require careful driving but are not dangerous if you respect speed limits and avoid night driving. The desert road to Merzouga is paved all the way.',
    },
    {
      question: 'How much does the drive from Marrakech to Fes cost?',
      answer: 'Direct motorway: approximately 627 MAD (€57) in fuel and tolls for an economy car. Middle Atlas route: approximately 599 MAD (€55). Sahara loop: approximately 1,174 MAD (€107) for fuel and tolls only — accommodation adds significantly more.',
    },
    {
      question: 'Should I hire a driver or self-drive from Marrakech to Fes?',
      answer: 'Self-drive if you are confident driving on mountain roads and want total flexibility. Hire a driver if you want to look out the window and have local context at every stop. A private driver for the 4-day Sahara loop costs approximately 800–1,200 MAD/day (€73–109), split across passengers.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I drive from Marrakech to Fes in one day?', answer: 'Yes — via the direct motorway (A7 + A2) in 5h30–6h. Via the Middle Atlas in 7–8h. Not recommended via the Sahara — that route needs at least 3–4 days.' },
    { question: 'Is there a train from Marrakech to Fes?', answer: 'No direct train — you need to change in Casablanca. Total journey 7–8h by train vs 5h30 by car on the motorway. The car is faster and more flexible.' },
    { question: 'What is Ait Ben Haddou and is it worth stopping?', answer: 'Ait Ben Haddou is a UNESCO-listed fortified village (ksar) used in dozens of Hollywood films. It is absolutely worth stopping — allow 2 hours and go early morning for the best photos.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'sahara-merzouga', 'chefchaouen'],
  relatedPosts: ['driving-in-morocco-tips-for-tourists', 'morocco-itinerary-2-weeks-first-time', 'rent-a-car-fes-airport-morocco'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Route Marrakech Fès en Voiture 2026 — Guide Complet Self Drive',
  metaDescription: 'Guide self-drive Marrakech–Fès en 2026 : 3 routes comparées, durées réelles, arrêts à Aït Ben Haddou et Merzouga, coûts et conseils de conducteurs locaux.',
  title: 'Conduire de Marrakech à Fès : Le Guide Complet Self-Drive (2026)',
  description: 'Guide complet pour conduire de Marrakech à Fès en 2026 : 3 routes comparées avec durées réelles, étapes incontournables, coûts carburant et péages, et conseils locaux.',
  keyword: 'route marrakech fes voiture',
  coverImage: COVER,
  coverAlt: 'Route à travers les montagnes de l\'Atlas au Maroc — conduire de Marrakech à Fès',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro: 'Le trajet de Marrakech à Fès est l\'un des grands road trips d\'Afrique du Nord. Que vous preniez l\'autoroute directe (5h30, facile), la boucle panoramique via l\'Atlas et le Sahara (3–4 jours, spectaculaire) ou la route du milieu par Midelt et Ifrane (7 heures, magnifique), ce voyage à travers la colonne vertébrale du Maroc révèle un pays qu\'aucune fenêtre de bus ne peut vous montrer correctement. Ce guide compare les trois routes avec les vraies durées 2026, les étapes qui valent le détour, les coûts de carburant et péages, et les décisions à prendre avant de quitter Marrakech.',
  sections: [
    {
      heading: 'Les 3 routes de Marrakech à Fès — laquelle choisir ?',
      paragraphs: [
        'Il n\'y a pas de "meilleure" route unique — le bon choix dépend entièrement du temps disponible et de ce que vous voulez voir. Voici la comparaison honnête.',
      ],
      table: {
        caption: 'Marrakech à Fès — 3 routes comparées (2026)',
        headers: ['Route', 'Distance', 'Durée conduite', 'Jours nécessaires', 'Idéal pour'],
        rows: [
          ['Autoroute directe (A7 + A2)', '530 km', '5h30–6h', '1 jour', 'Peu de temps, budget serré'],
          ['Moyen Atlas via Midelt', '620 km', '7–8h', '1–2 jours', 'Paysages de montagne, forêts de cèdres'],
          ['Boucle Sahara via Merzouga', '1 100+ km', '3–4 jours conduite', '4–6 jours total', 'Le road trip classique du Maroc'],
        ],
      },
    },
    {
      heading: 'Route 1 : Autoroute directe — Marrakech à Fès en une journée',
      paragraphs: [
        'L\'itinéraire le plus rapide suit l\'autoroute A7 vers le nord depuis Marrakech jusqu\'à Casablanca (2h30), puis l\'A2 vers l\'est jusqu\'à Fès (3h). Distance totale 530 km, durée totale 5h30–6h avec arrêt carburant. C\'est la route des autocars — 2×2 voies sur tout le trajet, bonnes stations-service, signalisation claire.',
        'Les paysages ne sont pas dramatiques — plaine agricole entre Casa et Fès. La valeur c\'est la rapidité : si vous devez être à Fès le jour même de votre départ de Marrakech, c\'est la seule option raisonnable.',
      ],
      table: {
        caption: 'Route autoroute directe : Marrakech à Fès — coûts et durées',
        headers: ['Tronçon', 'Distance', 'Durée', 'Péage (MAD)'],
        rows: [
          ['Marrakech → Casablanca (A7)', '240 km', '2h30', '78 MAD (7€)'],
          ['Casablanca → Rabat (A1)', '90 km', '1h', '33 MAD (3€)'],
          ['Rabat → Fès (A2)', '200 km', '2h', '70 MAD (6,50€)'],
          ['Total', '530 km', '5h30–6h', '181 MAD (16,50€)'],
        ],
      },
      callout: {
        label: '💡 Conseil autoroute',
        body: 'Le contournement de Casablanca est la section la plus délicate — suivez les panneaux "Rabat" et non "Casa Centre" pour rester sur l\'autoroute. Gardez de la petite monnaie pour les péages — billets de 20 et 50 MAD idéaux. Faites le plein chez Afriquia ou Total ; évitez les stations sans marque sur ce trajet.',
      },
    },
    {
      heading: 'Route 2 : Moyen Atlas via Midelt — Marrakech à Fès par les montagnes',
      paragraphs: [
        'Cette route remonte vers le nord depuis Marrakech sur la N9, puis tourne à l\'est à Béni Mellal dans les montagnes du Moyen Atlas, en passant par Azilal, les Cascades d\'Ouzoud (les plus belles chutes du Maroc, un arrêt de 2h s\'impose), Khénifra et Midelt avant de descendre sur Fès. Distance totale environ 620 km, 7–8h de conduite.',
        'Les paysages sont magnifiques — forêts de cèdres autour de Midelt, singes magots au bord de la route près d\'Ifrane, et la descente spectaculaire dans la plaine de Fès. Si vous avez deux jours, dormez à Midelt ou Ifrane et arrivez à Fès reposé.',
      ],
      table: {
        caption: 'Route Moyen Atlas : Marrakech à Fès via Midelt',
        headers: ['Étape', 'Dist. précédente', 'Cumulé', 'Point fort'],
        rows: [
          ['Marrakech → Béni Mellal', '180 km', '180 km', 'Piémonts, oliveraies'],
          ['Béni Mellal → Cascades d\'Ouzoud', '25 km', '205 km', 'Chutes de 110m — arrêt 2h'],
          ['Ouzoud → Khénifra', '120 km', '325 km', 'Plateau du Moyen Atlas'],
          ['Khénifra → Midelt', '115 km', '440 km', 'Forêt de cèdres, déjeuner'],
          ['Midelt → Ifrane', '110 km', '550 km', 'Cèdres, singes magots'],
          ['Ifrane → Fès', '70 km', '620 km', 'La "Suisse du Maroc"'],
        ],
      },
    },
    {
      heading: 'Route 3 : Boucle Sahara — Le road trip classique du Maroc',
      paragraphs: [
        'C\'est l\'itinéraire dont rêvent la plupart des voyageurs : Marrakech vers le sud via le col du Tizi n\'Tichka (2 260m), Ouarzazate, Aït Ben Haddou, les gorges du Dadès et du Todra, nuit dans le Sahara à Merzouga, puis remontée via Midelt et Ifrane jusqu\'à Fès. Distance totale plus de 1 100 km, 3–4 jours de conduite, 4–6 jours au total avec les nuits.',
        'Cet itinéraire a tout : cols de montagne, ksars classés UNESCO, gorges de canyon, dunes sahariennes, et Fès la médiévale en apothéose. C\'est la raison pour laquelle la plupart des voyageurs louent une voiture au Maroc. Prévoyez un minimum de 4 jours pour éviter l\'épuisement.',
      ],
      table: {
        caption: 'Boucle Sahara : Marrakech à Fès via Merzouga — jour par jour',
        headers: ['Jour', 'Itinéraire', 'Distance', 'Étapes clés', 'Nuit'],
        rows: [
          ['Jour 1', 'Marrakech → Ouarzazate', '205 km / 4h', 'Col Tizi n\'Tichka (2 260m), Aït Ben Haddou', 'Ouarzazate ou Skoura'],
          ['Jour 2', 'Ouarzazate → Merzouga', '355 km / 6h', 'Gorges du Dadès, Gorges du Todra, Erfoud', 'Camp désert à Merzouga'],
          ['Jour 3', 'Merzouga → Midelt', '310 km / 5h', 'Lever de soleil sur les dunes, route nord via Errachidia', 'Midelt ou Ifrane'],
          ['Jour 4', 'Midelt → Fès', '180 km / 3h', 'Forêt de cèdres, Ifrane, arrivée à Fès', 'Riad médina de Fès'],
        ],
      },
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'Le col du Tizi n\'Tichka est spectaculaire mais prend du temps — 4h de Marrakech à Ouarzazate avec arrêts. Partez de Marrakech à 7h au Jour 1 pour arriver à Ouarzazate avant le coucher du soleil et visiter Aït Ben Haddou dans une belle lumière. MoroccoForYou peut fournir un chauffeur privé pour cette route — demandez un devis sur WhatsApp.',
      },
    },
    {
      heading: 'Carburant et péages — Marrakech à Fès',
      paragraphs: [
        'Voici les vrais coûts de carburant et péages pour chaque route en 2026, calculés pour une voiture économique (Renault Clio / Dacia Sandero) consommant 6L/100km, avec l\'essence à 14 MAD/litre.',
      ],
      table: {
        caption: 'Coûts carburant et péages par route — Marrakech à Fès 2026',
        headers: ['Route', 'Distance', 'Carburant (MAD)', 'Péages (MAD)', 'Total (MAD)', 'Total (€)'],
        rows: [
          ['Autoroute directe', '530 km', '446', '181', '627', '~57€'],
          ['Moyen Atlas via Midelt', '620 km', '521', '78', '599', '~55€'],
          ['Boucle Sahara (4 jours)', '1 100 km', '924', '250', '1 174', '~107€'],
        ],
      },
    },
    {
      heading: 'Étapes incontournables sur la route Marrakech–Fès',
      paragraphs: [
        'Quelle que soit la route choisie, ces étapes valent le temps supplémentaire.',
        'Aït Ben Haddou (route Sahara) : ksar classé UNESCO utilisé dans Game of Thrones, Gladiator et Lawrence d\'Arabie. Entrée 30 MAD, prévoyez 2h. Meilleure lumière photo : tôt le matin ou fin d\'après-midi.',
        'Cascades d\'Ouzoud (route Moyen Atlas) : les plus belles chutes du Maroc, 110m de hauteur dans une vasque émeraude. Singes magots dans les arbres. Entrée gratuite, guides proposés à 30–50 MAD. Prévoyez 2–3h.',
        'Gorges du Todra (route Sahara) : parois de 300m de haut, 10m d\'écart au point le plus étroit. Balade d\'1h gratuite dans les gorges. Cafés à l\'entrée.',
        'Ifrane (route Moyen Atlas) : la "Suisse du Maroc" — ville de montagne coloniale française à 1 650m, rues propres, chalets à toits rouges, forêts de cèdres. Simple arrêt café ou nuit si vous voulez.',
      ],
    },
    {
      heading: 'Conseils de conduite pour la route Marrakech–Fès',
      paragraphs: [
        'Le col du Tizi n\'Tichka (route Sahara) : la route est goudronnée et en bon état mais le col a de virages serrés en épingle. Limitation à 60 km/h dans les sections de montagne — respectée par radar. Les camions sont lents dans les montées. Comptez 1h30 pour les 50 km de route de montagne.',
        'Sécurité routes de montagne : les routes de l\'Atlas et du Rif n\'ont pas de glissières sur de nombreuses sections. Conduisez à la vitesse des virages, pas à la limite. Le brouillard peut apparaître soudainement au-dessus de 1 500m entre octobre et avril.',
        'Conduite de nuit : évitez de conduire après la tombée de la nuit sur tout itinéraire de montagne ou la route désertique vers Merzouga. Camions sans éclairage, animaux et dos-d\'âne sans avertissement rendent la conduite de nuit franchement dangereuse.',
      ],
      table: {
        caption: 'Conditions de conduite par tronçon',
        headers: ['Tronçon', 'Qualité route', 'Difficulté', 'Conduite de nuit'],
        rows: [
          ['Marrakech → Casa (autoroute)', 'Excellente', 'Facile', '✅ OK'],
          ['Casa → Fès (autoroute)', 'Excellente', 'Facile', '✅ OK'],
          ['Marrakech → Aït Ben Haddou', 'Bonne', 'Modérée (montagne)', '⚠️ Éviter'],
          ['Aït Ben Haddou → Merzouga', 'Bonne', 'Modérée (route désert)', '❌ Éviter'],
          ['Merzouga → Midelt', 'Bonne', 'Facile–modérée', '⚠️ Éviter'],
          ['Midelt → Fès via Ifrane', 'Bonne', 'Facile', '✅ OK'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Combien de temps dure le trajet de Marrakech à Fès en voiture ?',
      answer: 'Via l\'autoroute directe : 5h30–6h. Via le Moyen Atlas (Midelt) : 7–8h. Via le Sahara (Merzouga) : 3–4 jours de conduite répartis sur 4–6 jours au total. L\'autoroute est la plus rapide ; la boucle Sahara est la plus spectaculaire.',
    },
    {
      question: 'Quelle est la meilleure route de Marrakech à Fès ?',
      answer: 'Pour la beauté des paysages : la boucle Sahara via Aït Ben Haddou, gorges du Dadès, Merzouga et Ifrane. Pour la rapidité : l\'autoroute directe A7/A2. Pour la montagne sans le désert : la route du Moyen Atlas via les Cascades d\'Ouzoud et Midelt.',
    },
    {
      question: 'Est-il sûr de conduire de Marrakech à Fès ?',
      answer: 'Oui — les trois routes sont sur des routes goudronnées. Les sections de montagne (col du Tichka, routes de l\'Atlas) demandent une conduite attentive mais ne sont pas dangereuses si vous respectez les limitations et évitez la conduite de nuit.',
    },
    {
      question: 'Combien coûte le trajet de Marrakech à Fès ?',
      answer: 'Autoroute directe : environ 627 MAD (57€) en carburant et péages pour une voiture économique. Route Moyen Atlas : environ 599 MAD (55€). Boucle Sahara : environ 1 174 MAD (107€) en carburant et péages uniquement.',
    },
    {
      question: 'Vaut-il mieux prendre un chauffeur ou conduire soi-même ?',
      answer: 'Self-drive si vous êtes à l\'aise sur les routes de montagne et voulez une liberté totale. Chauffeur si vous voulez profiter des paysages et avoir un contexte local à chaque étape. Un chauffeur privé pour la boucle de 4 jours coûte environ 800–1 200 MAD/jour (73–109€), à diviser entre les passagers.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on faire Marrakech–Fès en une journée ?', answer: 'Oui — via l\'autoroute directe (A7 + A2) en 5h30–6h. Via le Moyen Atlas en 7–8h. Déconseillé via le Sahara — cet itinéraire nécessite au moins 3–4 jours.' },
    { question: 'Y a-t-il un train de Marrakech à Fès ?', answer: 'Pas de train direct — changement à Casablanca nécessaire. Durée totale 7–8h en train vs 5h30 en voiture sur l\'autoroute. La voiture est plus rapide et plus flexible.' },
    { question: 'Qu\'est-ce qu\'Aït Ben Haddou et vaut-il la peine de s\'y arrêter ?', answer: 'Aït Ben Haddou est un ksar fortifié classé UNESCO utilisé dans des dizaines de films hollywoodiens. Absolument incontournable — prévoyez 2h et partez tôt le matin pour les meilleures photos.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'sahara-merzouga', 'chefchaouen'],
  relatedPosts: ['conduire-au-maroc-conseils-touristes', 'itineraire-maroc-2-semaines-premier-voyage', 'location-voiture-aeroport-fes-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'رحلة مراكش فاس بالسيارة 2026 — دليل القيادة الذاتية الشامل',
  metaDescription: 'دليل القيادة الذاتية من مراكش إلى فاس 2026: 3 طرق مقارنة وأوقات قيادة حقيقية وتوقف في أيت بن حدو ومرزوقة والتكاليف ونصائح من سائقين محليين.',
  title: 'رحلة مراكش إلى فاس بالسيارة: الدليل الشامل للقيادة الذاتية (2026)',
  description: 'دليل شامل للقيادة من مراكش إلى فاس في 2026: 3 طرق مقارنة بأوقات قيادة حقيقية ووجهات يجب التوقف عندها وتكاليف الوقود والرسوم ونصائح محلية.',
  keyword: 'رحلة مراكش فاس بالسيارة قيادة ذاتية',
  coverImage: COVER,
  coverAlt: 'طريق عبر جبال الأطلس المغربية — رحلة مراكش فاس بالسيارة',
  publishedISO: '2026-06-03',
  author: 'فريق MoroccoForYou',
  readingMinutes: 12,
  intro: 'رحلة القيادة من مراكش إلى فاس واحدة من أعظم الرحلات البرية في شمال أفريقيا. سواء اخترت الطريق السريع المباشر (5.5 ساعات، سهل)، أو الحلقة الخلابة عبر الأطلس والصحراء (3–4 أيام، مذهلة)، أو الطريق الوسطى عبر ميدلت وإفران (7 ساعات، جميلة)، هذه الرحلة عبر عمود المغرب الفقري تكشف بلداً لا تستطيع نافذة حافلة أن تريك إياه بحق. هذا الدليل يقارن الطرق الثلاثة بأوقات القيادة الحقيقية لعام 2026 والتوقفات التي تستحق والتكاليف والقرارات التي تحتاج اتخاذها قبل مغادرة مراكش.',
  sections: [
    {
      heading: 'الطرق الثلاثة من مراكش إلى فاس — أيها تختار؟',
      paragraphs: [
        'لا يوجد طريق "أفضل" واحد — الاختيار الصحيح يعتمد كلياً على الوقت المتاح وما تريد رؤيته. إليك المقارنة الصادقة.',
      ],
      table: {
        caption: 'مراكش إلى فاس — 3 طرق مقارنة (2026)',
        headers: ['الطريق', 'المسافة', 'وقت القيادة', 'الأيام اللازمة', 'الأنسب لـ'],
        rows: [
          ['الطريق السريع المباشر (A7 + A2)', '530 كم', '5.5–6 ساعات', 'يوم واحد', 'قصيري الوقت، الميزانية المحدودة'],
          ['أطلس الأوسط عبر ميدلت', '620 كم', '7–8 ساعات', '1–2 يوم', 'مناظر جبلية، غابات الأرز'],
          ['حلقة الصحراء عبر مرزوقة', '+1100 كم', '3–4 أيام قيادة', '4–6 أيام إجمالاً', 'الرحلة البرية الكلاسيكية للمغرب'],
        ],
      },
    },
    {
      heading: 'الطريق 1: الطريق السريع المباشر — مراكش إلى فاس في يوم واحد',
      paragraphs: [
        'أسرع مسار يتبع الطريق السريع A7 شمالاً من مراكش إلى الدار البيضاء (2.5 ساعة)، ثم A2 شرقاً إلى فاس (3 ساعات). إجمالي المسافة 530 كم، إجمالي وقت القيادة 5.5–6 ساعات مع توقف للوقود. هذا هو طريق الحافلات — ازدواجي طوال الطريق، محطات وقود جيدة، إشارات واضحة.',
        'المناظر ليست درامية — معظمها سهل زراعي مسطح بين الدار البيضاء وفاس. القيمة هي السرعة: إذا كنت بحاجة للوصول لفاس نفس يوم مغادرتك مراكش، هذا هو الخيار الوحيد المنطقي.',
      ],
      table: {
        caption: 'الطريق السريع المباشر: مراكش إلى فاس — التكاليف والأوقات',
        headers: ['القطعة', 'المسافة', 'وقت القيادة', 'رسوم الطريق (درهم)'],
        rows: [
          ['مراكش → الدار البيضاء (A7)', '240 كم', '2.5 ساعة', '78 درهم (7€)'],
          ['الدار البيضاء → الرباط (A1)', '90 كم', '1 ساعة', '33 درهم (3€)'],
          ['الرباط → فاس (A2)', '200 كم', '2 ساعة', '70 درهم (6.50€)'],
          ['المجموع', '530 كم', '5.5–6 ساعات', '181 درهم (16.50€)'],
        ],
      },
      callout: {
        label: '💡 نصيحة الطريق السريع',
        body: 'الطريق الدائري للدار البيضاء هو أصعب قطعة — اتبع لافتات "الرباط" وليس "وسط الدار البيضاء" للبقاء على الطريق السريع. احتفظ بأوراق نقدية صغيرة لنقاط الدفع — أوراق 20 و50 درهم مثالية. أعد الوقود في محطات أفريقيا أو توتال.',
      },
    },
    {
      heading: 'الطريق 2: أطلس الأوسط عبر ميدلت — مراكش إلى فاس عبر الجبال',
      paragraphs: [
        'هذا الطريق يتجه شمالاً من مراكش على N9، ثم يتجه شرقاً عند بني ملال إلى جبال أطلس الأوسط، مروراً بأزيلال وشلالات أوزود (أجمل شلالات المغرب، تستحق توقف ساعتين)، وخنيفرة وميدلت قبل النزول إلى فاس. المسافة الإجمالية حوالي 620 كم، 7–8 ساعات قيادة.',
        'المناظر على هذا الطريق مذهلة — غابات الأرز حول ميدلت، وقردة المغرب الأطلسي (مكاك) على جانب الطريق قرب إفران، والنزول الدرامي إلى سهل فاس. إذا كان لديك يومان، بِت في ميدلت أو إفران وصِل لفاس منتعشاً.',
      ],
      table: {
        caption: 'طريق أطلس الأوسط: مراكش إلى فاس عبر ميدلت',
        headers: ['التوقف', 'المسافة من السابق', 'الإجمالي', 'أبرز المعالم'],
        rows: [
          ['مراكش → بني ملال', '180 كم', '180 كم', 'تلال، بساتين الزيتون'],
          ['بني ملال → شلالات أوزود', '25 كم', '205 كم', 'شلال 110م — توقف ساعتان'],
          ['أوزود → خنيفرة', '120 كم', '325 كم', 'هضبة أطلس الأوسط'],
          ['خنيفرة → ميدلت', '115 كم', '440 كم', 'غابة أرز، توقف غداء'],
          ['ميدلت → إفران', '110 كم', '550 كم', 'غابة أرز، قردة مكاك'],
          ['إفران → فاس', '70 كم', '620 كم', '"سويسرا المغرب"'],
        ],
      },
    },
    {
      heading: 'الطريق 3: حلقة الصحراء — الرحلة البرية الكلاسيكية للمغرب',
      paragraphs: [
        'هذا هو الطريق الذي يحلم به معظم المسافرين: مراكش جنوباً عبر ممر تيزي نتيشكا (2260م)، عبر ورزازات، وأيت بن حدو، وعبر وادي الدادس ومحاجر تودرا، بيتوتة في الصحراء بمرزوقة، ثم شمالاً عبر ميدلت وإفران إلى فاس. إجمالي المسافة أكثر من 1100 كم، 3–4 أيام قيادة، 4–6 أيام إجمالاً مع التوقفات.',
        'هذا الطريق يملك كل شيء: ممرات جبلية وقصبات مصنّفة يونسكو ووديان ضيقة وكثبان صحراوية وفاس الوسطوية كختام رائع. خطط لحد أدنى 4 أيام لتجنب الإجهاد.',
      ],
      table: {
        caption: 'حلقة الصحراء: مراكش إلى فاس عبر مرزوقة — يوم بيوم',
        headers: ['اليوم', 'المسار', 'المسافة', 'التوقفات الرئيسية', 'المبيت'],
        rows: [
          ['اليوم 1', 'مراكش → ورزازات', '205 كم / 4 ساعات', 'ممر تيزي نتيشكا (2260م)، أيت بن حدو', 'ورزازات أو سكورة'],
          ['اليوم 2', 'ورزازات → مرزوقة', '355 كم / 6 ساعات', 'وادي الدادس، محاجر تودرا، أرفود', 'مخيم صحراوي في مرزوقة'],
          ['اليوم 3', 'مرزوقة → ميدلت', '310 كم / 5 ساعات', 'شروق الشمس على الصحراء، طريق الشمال عبر الراشيدية', 'ميدلت أو إفران'],
          ['اليوم 4', 'ميدلت → فاس', '180 كم / 3 ساعات', 'غابة الأرز، إفران، وصول فاس', 'رياض بالمدينة العتيقة'],
        ],
      },
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'ممر تيزي نتيشكا مذهل لكنه يأخذ وقتاً — 4 ساعات من مراكش إلى ورزازات مع توقفات. غادر مراكش في السابعة صباحاً في اليوم الأول للوصول إلى ورزازات قبل الغروب وزيارة أيت بن حدو في ضوء جيد. MoroccoForYou تستطيع توفير سائق خاص لهذا المسار — اسأل عن عرض السعر عبر واتساب.',
      },
    },
    {
      heading: 'تكاليف الوقود والرسوم — مراكش إلى فاس',
      paragraphs: [
        'إليك تكاليف الوقود والرسوم الحقيقية لكل طريق في 2026، محسوبة لسيارة اقتصادية (رينو كليو / داشيا ساندرو) بمعدل 6 لتر/100كم، والبنزين بـ14 درهم/لتر.',
      ],
      table: {
        caption: 'تكاليف الوقود والرسوم حسب الطريق — مراكش إلى فاس 2026',
        headers: ['الطريق', 'المسافة', 'تكلفة الوقود (درهم)', 'الرسوم (درهم)', 'المجموع (درهم)', 'المجموع (€)'],
        rows: [
          ['الطريق السريع المباشر', '530 كم', '446', '181', '627', '~57€'],
          ['أطلس الأوسط عبر ميدلت', '620 كم', '521', '78', '599', '~55€'],
          ['حلقة الصحراء (4 أيام)', '1100 كم', '924', '250', '1174', '~107€'],
        ],
      },
    },
    {
      heading: 'وجهات يجب التوقف عندها على طريق مراكش–فاس',
      paragraphs: [
        'أياً كان الطريق الذي تختاره، هذه التوقفات تستحق الوقت الإضافي.',
        'أيت بن حدو (طريق الصحراء): قصر مصنّف يونسكو استُخدم في Game of Thrones وGladiator وLawrence of Arabia. دخول 30 درهم، خصص ساعتين. أفضل ضوء للتصوير: الصباح الباكر أو آخر العصر.',
        'شلالات أوزود (طريق أطلس الأوسط): أجمل شلالات المغرب، ارتفاع 110 أمتار. دخول مجاني، مرشدون بـ30–50 درهم. خصص 2–3 ساعات.',
        'محاجر تودرا (طريق الصحراء): جدران بارتفاع 300 متر على بُعد 10 أمتار في الأضيق. نزهة ساعة مجانية. مقاهٍ صغيرة عند المدخل.',
        'إفران (طريق أطلس الأوسط): "سويسرا المغرب" — مدينة جبلية استعمارية فرنسية على ارتفاع 1650م، شوارع نظيفة وغابات أرز. توقف قهوة أو بيتوتة اختيارية.',
      ],
    },
    {
      heading: 'نصائح القيادة على طريق مراكش–فاس',
      paragraphs: [
        'ممر تيزي نتيشكا (طريق الصحراء): الطريق مُعبَّد وبحالة جيدة لكن الممر يملك منعطفات حادة. حد السرعة 60 كم/س في الأقسام الجبلية — رادار يراقب. الشاحنات بطيئة في الصعود. خصص 1.5 ساعة لـ50 كم من الطريق الجبلي.',
        'سلامة الطرق الجبلية: طرق الأطلس والريف لا تملك حواجز في مقاطع عديدة. قُد بسرعة المنعطفات لا الحد المسموح. الضباب يظهر فجأة فوق 1500م بين أكتوبر وأبريل.',
        'القيادة ليلاً: تجنّب القيادة بعد الظلام على أي طريق جبلي أو طريق الصحراء نحو مرزوقة. شاحنات غير مضاءة ومواشٍ ومطبّات بلا إنذار تجعل القيادة الليلية خطيرة حقاً.',
      ],
      table: {
        caption: 'أحوال القيادة حسب قطعة الطريق',
        headers: ['القطعة', 'جودة الطريق', 'الصعوبة', 'القيادة ليلاً'],
        rows: [
          ['مراكش → الدار البيضاء (طريق سريع)', 'ممتاز', 'سهل', '✅ مناسب'],
          ['الدار البيضاء → فاس (طريق سريع)', 'ممتاز', 'سهل', '✅ مناسب'],
          ['مراكش → أيت بن حدو', 'جيد', 'متوسط (جبال)', '⚠️ تجنّب'],
          ['أيت بن حدو → مرزوقة', 'جيد', 'متوسط (طريق صحراوي)', '❌ تجنّب'],
          ['مرزوقة → ميدلت', 'جيد', 'سهل–متوسط', '⚠️ تجنّب'],
          ['ميدلت → فاس عبر إفران', 'جيد', 'سهل', '✅ مناسب'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'كم يستغرق السفر من مراكش إلى فاس بالسيارة؟',
      answer: 'عبر الطريق السريع المباشر: 5.5–6 ساعات. عبر أطلس الأوسط (ميدلت): 7–8 ساعات. عبر الصحراء (مرزوقة): 3–4 أيام قيادة موزعة على 4–6 أيام إجمالاً.',
    },
    {
      question: 'ما أفضل طريق من مراكش إلى فاس؟',
      answer: 'للجمال الطبيعي: حلقة الصحراء عبر أيت بن حدو ووادي الدادس ومرزوقة وإفران. للسرعة: الطريق السريع المباشر A7/A2. للجبال دون الصحراء الكاملة: طريق أطلس الأوسط عبر شلالات أوزود وميدلت.',
    },
    {
      question: 'هل القيادة من مراكش إلى فاس آمنة؟',
      answer: 'نعم — الطرق الثلاثة معبّدة. الأقسام الجبلية (ممر تيشكا، طرق الأطلس) تتطلب قيادة حذرة لكنها غير خطيرة إذا احترمت حدود السرعة وتجنّبت القيادة ليلاً.',
    },
    {
      question: 'كم تكلف رحلة مراكش إلى فاس بالسيارة؟',
      answer: 'الطريق السريع المباشر: حوالي 627 درهم (57€) في الوقود والرسوم لسيارة اقتصادية. طريق أطلس الأوسط: حوالي 599 درهم (55€). حلقة الصحراء: حوالي 1174 درهم (107€) للوقود والرسوم فقط.',
    },
    {
      question: 'هل أستأجر سائقاً أم أقود بنفسي من مراكش إلى فاس؟',
      answer: 'قيادة ذاتية إذا كنت واثقاً على الطرق الجبلية وتريد مرونة كاملة. سائق إذا أردت الاستمتاع بالمناظر والحصول على سياق محلي في كل توقف. سائق خاص لحلقة 4 أيام يكلف حوالي 800–1200 درهم/يوم (73–109€)، تُقسَّم بين الركاب.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يمكن قطع مسافة مراكش–فاس في يوم واحد؟', answer: 'نعم — عبر الطريق السريع المباشر (A7 + A2) في 5.5–6 ساعات. عبر أطلس الأوسط في 7–8 ساعات. غير موصى به عبر الصحراء — هذا المسار يحتاج 3–4 أيام على الأقل.' },
    { question: 'هل يوجد قطار من مراكش إلى فاس؟', answer: 'لا يوجد قطار مباشر — تحتاج للتغيير في الدار البيضاء. المدة الإجمالية 7–8 ساعات بالقطار مقابل 5.5 ساعة بالسيارة على الطريق السريع. السيارة أسرع وأكثر مرونة.' },
    { question: 'ما هو أيت بن حدو وهل يستحق التوقف؟', answer: 'أيت بن حدو قصر محصّن مصنّف يونسكو استُخدم في عشرات الأفلام الهوليودية. يستحق التوقف حتماً — خصص ساعتين واذهب صباحاً الباكر لأفضل الصور.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'sahara-merzouga', 'chefchaouen'],
  relatedPosts: ['qiyadat-al-sayyara-fi-al-maghrib', 'khattat-rihlat-al-maghrib-usbuan', 'istajar-sayyara-matar-fas-al-maghrib'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);