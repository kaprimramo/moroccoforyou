import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'morocco-itinerary-2-weeks-first-time';
const SLUG_FR = 'itineraire-maroc-2-semaines-premier-voyage';
const SLUG_AR = 'khattat-rihlat-al-maghrib-usbuan';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889843);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Morocco Itinerary 2 Weeks First Time — Perfect 2026 Guide',
  metaDescription: 'Planning your first trip to Morocco for 2 weeks? This complete itinerary covers Marrakech, Fes, Chefchaouen, Sahara & more. Day-by-day guide with budget tips.',
  title: 'Morocco Itinerary 2 Weeks: The Perfect First-Timer\'s Guide (2026)',
  description: 'The ultimate 2-week Morocco itinerary for first-time visitors: day-by-day plan covering Marrakech, the Sahara, Fes, Chefchaouen and the Atlantic coast with real budget tips.',
  keyword: 'morocco itinerary 2 weeks first time',
  coverImage: COVER,
  coverAlt: 'Morocco 2 weeks itinerary — Chefchaouen blue streets and Sahara dunes collage',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 14,
  intro: 'Two weeks is the sweet spot for a first trip to Morocco. Long enough to experience the imperial cities, the Sahara desert, and the Atlantic coast — short enough to keep the pace comfortable. This day-by-day itinerary has been refined through hundreds of MoroccoForYou trips: it avoids the rookie mistakes (too many cities, not enough desert), includes real 2026 prices, and tells you exactly when to rent a car and when to take a train.',
  sections: [
    {
      heading: 'Is 2 Weeks Enough for Morocco?',
      paragraphs: [
        'Yes — two weeks is ideal for a first visit. You can comfortably see Marrakech, the Sahara desert, Fes, Chefchaouen, and one Atlantic coast town without feeling rushed. Morocco is compact enough that distances are manageable, but diverse enough that two weeks flies by.',
        'The biggest mistake first-timers make is trying to see everything in 10 days. Two weeks lets you slow down, get lost in a medina, spend two nights under the stars in the Sahara, and actually enjoy the hammam instead of rushing to the next city.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'Fly into Casablanca (CMN) and out of Marrakech — or vice versa. This open-jaw routing eliminates backtracking and lets you follow a logical loop. Pick up your rental car at CMN and drop it in Marrakech for maximum flexibility.',
      },
    },
    {
      heading: 'The 2-Week Morocco Itinerary — Day by Day',
      paragraphs: [
        'This route follows a classic anticlockwise loop starting in Casablanca, heading north to Fes and Chefchaouen, cutting south through the Sahara, and finishing in Marrakech. It works whether you rent a car or use a mix of trains and private drivers.',
      ],
      table: {
        caption: '14-day Morocco itinerary overview',
        headers: ['Days', 'Location', 'Highlights', 'Transport'],
        rows: [
          ['Day 1', 'Casablanca', 'Hassan II Mosque, Art Deco corniche, seafood dinner', 'Arrive CMN, rent a car'],
          ['Day 2', 'Rabat', 'Chellah ruins, Kasbah des Oudaias, Mohammed V Mausoleum', 'Drive 1h from Casablanca'],
          ['Day 3–4', 'Fes', 'Fes el-Bali medina, tanneries, Bou Inania madrasa', 'Drive 3h or train'],
          ['Day 5–6', 'Chefchaouen', 'Blue medina, Ras el-Maa waterfall, mountain hike', 'Drive 3h from Fes'],
          ['Day 7', 'Meknes / Volubilis', 'Roman ruins, Bab Mansour gate, medina', 'Drive 3h from Chefchaouen'],
          ['Day 8–9', 'Merzouga / Sahara', 'Erg Chebbi dunes, camel trek, desert camp', 'Drive 6h or guided tour'],
          ['Day 10', 'Dades Gorge', 'Rose Valley, Gorges du Dadès, kasbahs', 'Drive 3h from Merzouga'],
          ['Day 11', 'Ouarzazate', 'Atlas Film Studios, Kasbah Taourirt, Ait Ben Haddou', 'Drive 2h'],
          ['Day 12–13', 'Marrakech', 'Jemaa el-Fnaa, souks, Bahia Palace, Majorelle Garden', 'Drive 3h via Tizi n\'Tichka'],
          ['Day 14', 'Essaouira', 'Blue boats, ramparts, argan souk, Atlantic breeze', 'Day trip or drive 3h'],
        ],
      },
    },
    {
      heading: 'Day 1–2: Casablanca and Rabat',
      paragraphs: [
        'Most visitors rush through Casablanca — don\'t. The Hassan II Mosque is genuinely one of the world\'s great buildings, built partly over the Atlantic. Allow two hours including the guided interior tour (70 MAD, worth every dirham). The Art Deco Corniche and the Central Market are worth an afternoon. Stay one night, then drive an hour north to Rabat.',
        'Rabat is Morocco\'s most liveable city and criminally underrated. The Chellah — a 13th-century necropolis where storks nest on Roman columns — is magical at golden hour. The Kasbah des Oudaias, with its blue-and-white streets and café overlooking the Atlantic, is Chefchaouen without the crowds.',
      ],
      callout: {
        label: '💡 Car Rental Tip',
        body: 'Pick up your car at Casablanca Airport CMN on arrival. MoroccoForYou Cars offers airport pickup from 320 MAD/day (€29) — book on WhatsApp for instant confirmation. A car gives you the freedom this itinerary needs, especially for the Sahara leg.',
      },
    },
    {
      heading: 'Day 3–4: Fes — Morocco\'s Spiritual Capital',
      paragraphs: [
        'Fes el-Bali is the world\'s largest living medieval city — 9,400 streets, zero cars, and the smell of fresh bread from clay ovens at every corner. Hire a licensed guide for your first morning (250–350 MAD, 3 hours) — it is money well spent. The tanneries seen from a rooftop terrace above the leather dyeing vats is the iconic Morocco image. The Bou Inania madrasa is the most beautiful Islamic building in the country.',
        'Stay in a riad inside the medina. Breakfast on the rooftop is the best meal of any Morocco trip. On day two, visit the mellah (Jewish quarter) and the brass souk in the morning, then take the afternoon slowly — get deliberately lost, which is how Fes works.',
      ],
    },
    {
      heading: 'Day 5–6: Chefchaouen — The Blue City',
      paragraphs: [
        'Chefchaouen is as photogenic as Instagram suggests and less crowded than you fear — if you arrive before 10am or after 4pm. The blue-painted medina takes two to three hours to explore properly. Climb to the Spanish Mosque above the city at sunset for the best view in Morocco. Ras el-Maa waterfall, a 10-minute walk from the main square, is where locals do their laundry and children swim — genuinely lovely.',
        'Two nights here is ideal. The second day, hike the Rif Mountains trail above the city (ask your riad for the trailhead) or simply sit in Plaza Uta el-Hammam and watch the world pass.',
      ],
    },
    {
      heading: 'Day 8–9: The Sahara Desert — Merzouga',
      paragraphs: [
        'This is why you came. The Erg Chebbi dunes near Merzouga rise to 150 metres and glow orange-red at sunset. The classic experience: arrive in late afternoon, ride a camel to your desert camp (30–45 minutes), watch the sunset from the dunes, sleep under extraordinary stars, wake at 5am for sunrise. Budget 800–1,500 MAD per person for a quality desert camp including dinner and breakfast.',
        'Do not rush this. Two nights in the desert (one in a camp, one in a Merzouga kasbah hotel) allows you to see the dunes in three different lights — afternoon, golden hour, and early morning — and each is completely different.',
      ],
    },
    {
      heading: 'Day 12–13: Marrakech — The Red City',
      paragraphs: [
        'After two weeks of road-tripping, Marrakech feels almost cosmopolitan. Jemaa el-Fnaa square is best at dusk when the food stalls set up and snake charmers, storytellers, and acrobats perform simultaneously. The Bahia Palace (free entry) and Saadian Tombs (70 MAD) are genuinely beautiful. The Majorelle Garden (200 MAD) is worth it for the YSL Museum attached.',
        'Day two in Marrakech: get deliberately lost in the souks in the morning. Lunch at a rooftop restaurant overlooking the medina. Afternoon at a hammam (100–300 MAD for a proper scrub). Evening cocktails at a rooftop bar watching the sun set over the Atlas.',
      ],
    },
    {
      heading: '2 Weeks Morocco Budget Guide',
      paragraphs: [
        'Morocco is excellent value for money — but only if you know where to spend and where to save. The desert camp and the hammam are worth the splurge; the taxis are worth negotiating.',
      ],
      table: {
        caption: 'Morocco 2-week budget breakdown per person',
        headers: ['Category', 'Budget (€)', 'Mid-range (€)', 'Luxury (€)'],
        rows: [
          ['Accommodation (14 nights)', '280–420', '560–840', '1,400–2,800'],
          ['Food & drink', '140–210', '280–420', '560–840'],
          ['Transport (car rental + fuel)', '400–500', '400–500', '600–800'],
          ['Activities & entrance fees', '80–120', '150–200', '250–400'],
          ['Desert camp (2 nights)', '80–120', '150–200', '250–400'],
          ['Total (2 weeks)', '980–1,370', '1,540–2,160', '3,060–5,240'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Is 2 weeks enough time for Morocco?',
      answer: 'Yes — two weeks is the ideal duration for a first trip. You can comfortably cover Marrakech, Fes, Chefchaouen, the Sahara, and the Atlantic coast without feeling rushed.',
    },
    {
      question: 'Should I rent a car for a 2-week Morocco trip?',
      answer: 'Yes, for maximum flexibility. Rent at Casablanca Airport CMN, drive the loop, and drop in Marrakech. MoroccoForYou Cars offers airport pickup from €29/day with unlimited mileage.',
    },
    {
      question: 'What is the best time of year for a 2-week Morocco trip?',
      answer: 'March–May and September–November are ideal: comfortable temperatures everywhere, including the Sahara. July–August is very hot in inland cities and the desert.',
    },
    {
      question: 'How much does a 2-week Morocco trip cost?',
      answer: 'Budget €980–1,370 per person for a backpacker trip, €1,540–2,160 for mid-range comfort, or €3,000+ for luxury. The main variable is accommodation.',
    },
    {
      question: 'Do I need a visa to visit Morocco?',
      answer: 'Citizens of the EU, UK, USA, Canada, and Australia do not need a visa for stays under 90 days. Check your country\'s requirements before booking.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I do Morocco in 2 weeks without a tour?', answer: 'Absolutely — Morocco is very easy to travel independently with a rental car. The main highways are excellent and all tourist sites are well-signposted.' },
    { question: 'What should I not miss in Morocco?', answer: 'The Fes medina, the Sahara dunes at sunset, Chefchaouen\'s blue streets, and Jemaa el-Fnaa square in Marrakech at dusk — these are non-negotiable.' },
    { question: 'Is Morocco safe for first-time visitors?', answer: 'Yes — Morocco is one of the safer destinations in Africa and the Arab world. Standard travel precautions apply: keep valuables safe, use metered taxis, book accommodation in advance.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga', 'casablanca', 'essaouira'],
  relatedPosts: ['how-many-days-in-morocco-is-enough', 'morocco-travel-tips-first-time-visitors', 'driving-in-morocco-tips-for-tourists'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Itinéraire Maroc 2 semaines premier voyage — Guide 2026',
  metaDescription: 'Planifiez votre premier voyage au Maroc sur 2 semaines : itinéraire jour par jour, Marrakech, Fès, Chefchaouen, Sahara, côte atlantique. Budget et conseils pratiques.',
  title: 'Itinéraire Maroc 2 semaines : le guide parfait pour un premier voyage (2026)',
  description: 'L\'itinéraire idéal pour 2 semaines au Maroc en première visite : plan jour par jour couvrant Marrakech, le Sahara, Fès, Chefchaouen et la côte atlantique, avec budgets réels.',
  keyword: 'itinéraire maroc 2 semaines premier voyage',
  coverImage: COVER,
  coverAlt: 'Itinéraire Maroc 2 semaines — rues bleues de Chefchaouen et dunes du Sahara',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 14,
  intro: 'Deux semaines, c\'est la durée idéale pour un premier voyage au Maroc. Assez longtemps pour découvrir les villes impériales, le désert du Sahara et la côte atlantique — assez court pour garder un rythme confortable. Cet itinéraire jour par jour a été affiné à travers des centaines de voyages MoroccoForYou : il évite les erreurs de débutants (trop de villes, pas assez de désert), inclut les vrais prix 2026, et vous dit exactement quand louer une voiture et quand prendre le train.',
  sections: [
    {
      heading: 'Deux semaines suffisent-elles pour le Maroc ?',
      paragraphs: [
        'Oui — deux semaines, c\'est parfait pour une première visite. Vous pouvez voir confortablement Marrakech, le désert du Sahara, Fès, Chefchaouen et une ville côtière atlantique sans vous sentir bousculé. Le Maroc est assez compact pour que les distances restent gérables, mais assez diversifié pour que deux semaines passent en un éclair.',
        'La grande erreur des premiers voyageurs : vouloir tout voir en 10 jours. Deux semaines vous permettent de ralentir, de vous perdre dans une médina, de passer deux nuits sous les étoiles au Sahara, et de profiter vraiment du hammam au lieu de courir vers la prochaine ville.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'Arrivez à Casablanca (CMN) et repartez de Marrakech — ou l\'inverse. Cet itinéraire en boucle ouverte évite les allers-retours et suit une logique géographique naturelle. Louez une voiture à CMN et rendez-la à Marrakech pour une liberté maximale.',
      },
    },
    {
      heading: 'L\'itinéraire 2 semaines — Jour par jour',
      paragraphs: [
        'Cet itinéraire suit une boucle classique dans le sens antihoraire depuis Casablanca, remontant vers le nord jusqu\'à Fès et Chefchaouen, plongeant vers le sud pour le Sahara, et finissant à Marrakech. Il fonctionne que vous louiez une voiture ou que vous combiniez train et chauffeurs privés.',
      ],
      table: {
        caption: 'Vue d\'ensemble de l\'itinéraire 14 jours au Maroc',
        headers: ['Jours', 'Étape', 'Points forts', 'Transport'],
        rows: [
          ['Jour 1', 'Casablanca', 'Mosquée Hassan II, corniche Art déco, dîner fruits de mer', 'Arrivée CMN, location voiture'],
          ['Jour 2', 'Rabat', 'Chellah, Kasbah des Oudaias, Mausolée Mohammed V', 'Voiture 1h'],
          ['Jours 3–4', 'Fès', 'Médina Fès el-Bali, tanneries, medersa Bou Inania', 'Voiture 3h ou train'],
          ['Jours 5–6', 'Chefchaouen', 'Médina bleue, cascade Ras el-Maa, randonnée', 'Voiture 3h depuis Fès'],
          ['Jour 7', 'Meknès / Volubilis', 'Ruines romaines, porte Bab Mansour, médina', 'Voiture 3h depuis Chefchaouen'],
          ['Jours 8–9', 'Merzouga / Sahara', 'Erg Chebbi, balade à dos de dromadaire, camp désert', 'Voiture 6h ou tour guidé'],
          ['Jour 10', 'Gorges du Dadès', 'Vallée des Roses, gorges, kasbahs', 'Voiture 3h depuis Merzouga'],
          ['Jour 11', 'Ouarzazate', 'Studios de cinéma, Kasbah Taourirt, Aït Ben Haddou', 'Voiture 2h'],
          ['Jours 12–13', 'Marrakech', 'Jemaa el-Fna, souks, Palais Bahia, Jardin Majorelle', 'Voiture 3h via Tizi n\'Tichka'],
          ['Jour 14', 'Essaouira', 'Barques bleues, remparts, souk argan, brise atlantique', 'Excursion ou voiture 3h'],
        ],
      },
    },
    {
      heading: 'Jours 1–2 : Casablanca et Rabat',
      paragraphs: [
        'La plupart des voyageurs traversent Casablanca en vitesse — à tort. La mosquée Hassan II est l\'un des plus beaux édifices au monde, construite en partie sur l\'Atlantique. Prévoyez deux heures avec la visite guidée intérieure (70 MAD, ça vaut chaque dirham). La corniche Art déco et le marché central méritent un après-midi. Une nuit, puis cap au nord vers Rabat.',
        'Rabat est la ville la plus agréable à vivre du Maroc et terriblement sous-estimée. Le Chellah — nécropole du XIIIe siècle où des cigognes nichent sur des colonnes romaines — est magique à l\'heure dorée. La Kasbah des Oudaias, avec ses ruelles bleu et blanc et son café donnant sur l\'Atlantique, c\'est Chefchaouen sans la foule.',
      ],
      callout: {
        label: '💡 Conseil location voiture',
        body: 'Récupérez votre voiture à l\'aéroport de Casablanca CMN à l\'arrivée. MoroccoForYou Cars propose le retrait aéroport dès 320 MAD/jour (29€) — réservez sur WhatsApp pour une confirmation immédiate. La voiture vous donne la liberté qu\'exige cet itinéraire, surtout pour la boucle Sahara.',
      },
    },
    {
      heading: 'Jours 3–4 : Fès — la capitale spirituelle du Maroc',
      paragraphs: [
        'Fès el-Bali est la plus grande ville médiévale vivante du monde — 9 400 ruelles, zéro voiture, et l\'odeur du pain frais cuit dans des fours en argile à chaque coin. Engagez un guide officiel pour votre première matinée (250–350 MAD, 3h) — c\'est de l\'argent bien dépensé. Les tanneries vues depuis une terrasse au-dessus des cuves de teinture, c\'est l\'image iconique du Maroc. La medersa Bou Inania est le plus beau bâtiment islamique du pays.',
        'Logez dans un riad dans la médina. Le petit-déjeuner sur la terrasse est le meilleur repas de tout voyage au Maroc. Le deuxième jour, visitez le mellah (quartier juif) et le souk des cuivres le matin, puis ralentissez l\'après-midi — perdez-vous volontairement, c\'est ainsi que Fès fonctionne.',
      ],
    },
    {
      heading: 'Jours 5–6 : Chefchaouen — la ville bleue',
      paragraphs: [
        'Chefchaouen est aussi photogénique qu\'Instagram le suggère et moins bondée que vous ne le craignez — si vous arrivez avant 10h ou après 16h. La médina aux murs bleus se visite en deux à trois heures. Montez à la mosquée espagnole au-dessus de la ville au coucher du soleil pour le meilleur panorama du Maroc. La cascade Ras el-Maa, à 10 minutes à pied de la grande place, où les habitants font leur lessive et les enfants se baignent — vraiment charmant.',
        'Deux nuits ici, c\'est idéal. Le deuxième jour, randonnée dans les montagnes du Rif au-dessus de la ville (demandez à votre riad le départ du sentier) ou installez-vous simplement sur la Plaza Uta el-Hammam et regardez le monde passer.',
      ],
    },
    {
      heading: 'Jours 8–9 : Le Sahara — Merzouga',
      paragraphs: [
        'C\'est pour ça que vous êtes venu. Les dunes de l\'Erg Chebbi près de Merzouga s\'élèvent à 150 mètres et rougeoient à l\'orange au coucher du soleil. L\'expérience classique : arriver en fin d\'après-midi, monter à dos de dromadaire jusqu\'au camp désert (30–45 min), regarder le coucher de soleil depuis les dunes, dormir sous un ciel extraordinairement étoilé, se lever à 5h pour le lever du soleil. Prévoyez 800–1 500 MAD par personne pour un camp désert de qualité incluant dîner et petit-déjeuner.',
        'Ne vous pressez pas. Deux nuits dans le désert (une en camp, une dans un hôtel-kasbah de Merzouga) vous permettent de voir les dunes sous trois lumières différentes — après-midi, heure dorée, petit matin — et chacune est complètement différente.',
      ],
    },
    {
      heading: 'Budget 2 semaines au Maroc',
      paragraphs: [
        'Le Maroc offre un excellent rapport qualité-prix — mais seulement si vous savez où dépenser et où économiser. Le camp désert et le hammam méritent le budget ; les taxis méritent la négociation.',
      ],
      table: {
        caption: 'Budget 2 semaines Maroc par personne',
        headers: ['Poste', 'Économique (€)', 'Confort (€)', 'Luxe (€)'],
        rows: [
          ['Hébergement (14 nuits)', '280–420', '560–840', '1 400–2 800'],
          ['Repas et boissons', '140–210', '280–420', '560–840'],
          ['Transport (voiture + carburant)', '400–500', '400–500', '600–800'],
          ['Activités et droits d\'entrée', '80–120', '150–200', '250–400'],
          ['Camp désert (2 nuits)', '80–120', '150–200', '250–400'],
          ['Total (2 semaines)', '980–1 370', '1 540–2 160', '3 060–5 240'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Deux semaines suffisent-elles pour le Maroc ?',
      answer: 'Oui — deux semaines est la durée idéale pour une première visite. Vous pouvez couvrir Marrakech, Fès, Chefchaouen, le Sahara et la côte atlantique confortablement.',
    },
    {
      question: 'Faut-il louer une voiture pour 2 semaines au Maroc ?',
      answer: 'Oui, pour une liberté maximale. Louez à l\'aéroport de Casablanca CMN, faites la boucle, et rendez la voiture à Marrakech. MoroccoForYou Cars propose le retrait aéroport dès 29€/jour.',
    },
    {
      question: 'Quelle est la meilleure période pour 2 semaines au Maroc ?',
      answer: 'Mars–mai et septembre–novembre sont idéaux : températures agréables partout, y compris au Sahara. Juillet–août est très chaud dans les villes de l\'intérieur.',
    },
    {
      question: 'Quel budget prévoir pour 2 semaines au Maroc ?',
      answer: 'Comptez 980–1 370€ par personne en voyageur économique, 1 540–2 160€ en confort, ou 3 000€+ en luxe. La variable principale est l\'hébergement.',
    },
    {
      question: 'Faut-il un visa pour visiter le Maroc ?',
      answer: 'Les ressortissants UE, Suisse, Canada et USA n\'ont pas besoin de visa pour des séjours inférieurs à 90 jours. Vérifiez les exigences de votre pays avant de réserver.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on visiter le Maroc en 2 semaines sans circuit organisé ?', answer: 'Absolument — le Maroc est très facile à parcourir en indépendant avec une voiture de location. Les routes principales sont excellentes et tous les sites touristiques sont bien indiqués.' },
    { question: 'Que ne pas manquer au Maroc ?', answer: 'La médina de Fès, les dunes du Sahara au coucher du soleil, les ruelles bleues de Chefchaouen, et la place Jemaa el-Fna à Marrakech au crépuscule — incontournables.' },
    { question: 'Le Maroc est-il sûr pour les premiers voyageurs ?', answer: 'Oui — le Maroc est l\'une des destinations les plus sûres d\'Afrique. Les précautions habituelles s\'appliquent : gardez vos objets de valeur en sécurité, utilisez des taxis à compteur.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga', 'casablanca', 'essaouira'],
  relatedPosts: ['combien-de-jours-prevoir-au-maroc', 'conseils-premier-voyage-au-maroc', 'conduire-au-maroc-conseils-touristes'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'خطة رحلة المغرب أسبوعان — دليل المبتدئين 2026',
  metaDescription: 'خطة رحلة كاملة للمغرب لمدة أسبوعين للمبتدئين: يوم بيوم من مراكش إلى الصحراء وفاس وشفشاون والساحل الأطلسي. ميزانية وأسعار حقيقية 2026.',
  title: 'خطة رحلة المغرب أسبوعان: الدليل المثالي للزيارة الأولى (2026)',
  description: 'الخطة المثالية لرحلة أسبوعين في المغرب للمبتدئين: برنامج يومي يغطي مراكش والصحراء وفاس وشفشاون والساحل الأطلسي مع ميزانيات وأسعار حقيقية.',
  keyword: 'خطة رحلة المغرب أسبوعان للمبتدئين',
  coverImage: COVER,
  coverAlt: 'خطة رحلة المغرب أسبوعان — شوارع شفشاون الزرقاء ودروب الصحراء',
  publishedISO: '2026-06-03',
  author: 'فريق MoroccoForYou',
  readingMinutes: 14,
  intro: 'أسبوعان هما المدة المثالية للزيارة الأولى للمغرب. كافيان لاكتشاف المدن الإمبراطورية وصحراء الساحرة والساحل الأطلسي — وقصيران بما يكفي للحفاظ على وتيرة مريحة. هذا البرنامج اليومي نتاج مئات من رحلات MoroccoForYou: يتجنب أخطاء المبتدئين (كثرة المدن وقلة الصحراء)، ويتضمن أسعاراً حقيقية لعام 2026، ويخبرك بالضبط متى تستأجر سيارة ومتى تركب القطار.',
  sections: [
    {
      heading: 'هل يكفي أسبوعان لزيارة المغرب؟',
      paragraphs: [
        'نعم — أسبوعان مدة مثالية للزيارة الأولى. يمكنك رؤية مراكش وصحراء الساحرة وفاس وشفشاون ومدينة ساحلية أطلسية دون أن تشعر بالضغط. المغرب مدمج بما يكفي لتكون المسافات قابلة للإدارة، ومتنوع بما يكفي لتمر أسبوعان كلمح البصر.',
        'أكبر خطأ يرتكبه المبتدئون: محاولة رؤية كل شيء في 10 أيام. أسبوعان يتيحان لك التمهّل، والضياع في مدينة عتيقة، وقضاء ليلتين تحت النجوم في الصحراء، والاستمتاع الحقيقي بالحمّام بدلاً من الاندفاع نحو المدينة التالية.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'اصل عبر الدار البيضاء (CMN) وغادر من مراكش — أو العكس. هذا المسار الحلقي المفتوح يلغي التنقل ذهاباً وإياباً ويتبع منطقاً جغرافياً طبيعياً. استأجر سيارة من CMN وأعدها في مراكش لأقصى قدر من الحرية.',
      },
    },
    {
      heading: 'برنامج أسبوعين — يوم بيوم',
      paragraphs: [
        'يتبع هذا المسار حلقة كلاسيكية عكس اتجاه عقارب الساعة انطلاقاً من الدار البيضاء، صعوداً شمالاً نحو فاس وشفشاون، ثم جنوباً نحو الصحراء، وانتهاءً في مراكش. يناسب سواء استأجرت سيارة أو مزجت بين القطار والسائقين الخاصين.',
      ],
      table: {
        caption: 'نظرة عامة على برنامج 14 يوماً في المغرب',
        headers: ['الأيام', 'الوجهة', 'أبرز المعالم', 'التنقل'],
        rows: [
          ['اليوم 1', 'الدار البيضاء', 'مسجد الحسن الثاني، كورنيش آرت ديكو، عشاء بحري', 'وصول CMN، استئجار سيارة'],
          ['اليوم 2', 'الرباط', 'شالة، قصبة الأوداية، ضريح محمد الخامس', 'سيارة ساعة من الدار البيضاء'],
          ['الأيام 3–4', 'فاس', 'مدينة فاس العتيقة، المدابغ، مدرسة بو عنانية', 'سيارة 3 ساعات أو قطار'],
          ['الأيام 5–6', 'شفشاون', 'المدينة الزرقاء، شلال رأس الماء، رحلة جبلية', 'سيارة 3 ساعات من فاس'],
          ['اليوم 7', 'مكناس / وليلي', 'آثار رومانية، باب المنصور، المدينة العتيقة', 'سيارة 3 ساعات من شفشاون'],
          ['الأيام 8–9', 'مرزوقة / الصحراء', 'كثبان إرق الشبي، رحلة جمال، مخيم صحراوي', 'سيارة 6 ساعات أو جولة منظمة'],
          ['اليوم 10', 'وادي الدادس', 'وادي الورود، محاجر الدادس، قصبات', 'سيارة 3 ساعات من مرزوقة'],
          ['اليوم 11', 'ورزازات', 'استوديوهات السينما، قصبة تاوريرت، أيت بن حدو', 'سيارة ساعتان'],
          ['الأيام 12–13', 'مراكش', 'جامع الفنا، الأسواق، قصر البهية، حديقة ماجوريل', 'سيارة 3 ساعات عبر تيزي نتيشكا'],
          ['اليوم 14', 'الصويرة', 'القوارب الزرقاء، الأسوار، سوق الأركان، النسيم الأطلسي', 'رحلة يومية أو سيارة 3 ساعات'],
        ],
      },
    },
    {
      heading: 'الأيام 1–2: الدار البيضاء والرباط',
      paragraphs: [
        'معظم الزوار يمرون عبر الدار البيضاء مسرعين — لا تفعل ذلك. مسجد الحسن الثاني واحد من أعظم المباني في العالم، مبني جزئياً فوق المحيط الأطلسي. خصص ساعتين بما فيها الجولة الداخلية المصحوبة بمرشد (70 درهم، تستحق كل درهم). كورنيش آرت ديكو والسوق المركزي يستحقان بعد الظهر. ليلة واحدة، ثم ساعة شمالاً نحو الرباط.',
        'الرباط أكثر مدن المغرب قابلية للعيش وأكثرها إهمالاً من السياح. شالة — مقبرة من القرن الثالث عشر حيث تعشش اللقالق على الأعمدة الرومانية — ساحرة في الضوء الذهبي. قصبة الأوداية بأزقتها الزرقاء والبيضاء ومقهاها المطل على الأطلسي، هي شفشاون دون الازدحام.',
      ],
      callout: {
        label: '💡 نصيحة استئجار السيارة',
        body: 'استلم سيارتك من مطار الدار البيضاء CMN عند الوصول. تقدم MoroccoForYou Cars استلام المطار ابتداءً من 320 درهم/يوم (29€) — احجز عبر واتساب لتأكيد فوري. السيارة تمنحك الحرية التي يتطلبها هذا البرنامج، خاصةً في رحلة الصحراء.',
      },
    },
    {
      heading: 'الأيام 3–4: فاس — العاصمة الروحية للمغرب',
      paragraphs: [
        'فاس البالي أكبر مدينة وسطية حية في العالم — 9400 زقاق، صفر سيارات، ورائحة الخبز الطازج من الأفران الطينية في كل زاوية. استأجر مرشداً مرخصاً لصباحك الأول (250–350 درهم، 3 ساعات) — مال يستحق الإنفاق. المدابغ كما تُرى من تراس فوق أحواض الصباغة هي الصورة الأيقونية للمغرب. مدرسة بو عنانية أجمل مبنى إسلامي في البلاد.',
        'أقم في رياض داخل المدينة العتيقة. الإفطار على السطح هو أفضل وجبة في أي رحلة مغربية. في اليوم الثاني، زُر الملاح (الحي اليهودي) وسوق النحاس صباحاً، ثم تمهّل بعد الظهر — ضِع عن قصد، فهكذا تعمل فاس.',
      ],
    },
    {
      heading: 'الأيام 5–6: شفشاون — المدينة الزرقاء',
      paragraphs: [
        'شفشاون بالقدر الذي تصوّره إنستغرام، وأقل ازدحاماً مما تخشى — إن وصلت قبل العاشرة صباحاً أو بعد الرابعة مساءً. المدينة المطلية بالأزرق تستغرق ساعتين إلى ثلاث لاستكشافها بشكل جيد. اصعد إلى المسجد الإسباني فوق المدينة عند الغروب للحصول على أفضل منظر في المغرب. شلال رأس الماء، على بُعد 10 دقائق سيراً من الساحة الرئيسية، حيث يغسل السكان ملابسهم ويسبح الأطفال — جميل حقاً.',
        'ليلتان هنا مثاليتان. في اليوم الثاني، تنزّه في جبال الريف فوق المدينة (اسأل رياضك عن نقطة انطلاق المسار) أو اجلس ببساطة في ساحة أوطا الحمام وراقب العالم يمر.',
      ],
    },
    {
      heading: 'الأيام 8–9: صحراء الساحرة — مرزوقة',
      paragraphs: [
        'هذا هو السبب الذي جئت من أجله. كثبان إرق الشبي قرب مرزوقة يصل ارتفاعها إلى 150 متراً وتتوهج بالبرتقالي الأحمر عند الغروب. التجربة الكلاسيكية: الوصول في أواخر الظهر، ركوب الجمال إلى المخيم الصحراوي (30–45 دقيقة)، مشاهدة الغروب من الكثبان، النوم تحت سماء مرصّعة بالنجوم، الاستيقاظ الخامسة صباحاً لمشاهدة الشروق. خصص 800–1500 درهم للشخص لمخيم صحراوي جيد يشمل العشاء والإفطار.',
        'لا تتسرّع. ليلتان في الصحراء (ليلة في المخيم وليلة في فندق قصبة بمرزوقة) تتيحان لك رؤية الكثبان في ثلاثة أضواء مختلفة — بعد الظهر، الساعة الذهبية، الفجر — وكل واحدة مختلفة تماماً.',
      ],
    },
    {
      heading: 'ميزانية أسبوعين في المغرب',
      paragraphs: [
        'المغرب يقدم قيمة ممتازة مقابل المال — لكن فقط إذا عرفت أين تنفق وأين توفّر. المخيم الصحراوي والحمّام يستحقان الإنفاق، أما سيارات الأجرة فتستحق التفاوض.',
      ],
      table: {
        caption: 'ميزانية أسبوعين في المغرب للشخص الواحد',
        headers: ['البند', 'اقتصادي (€)', 'متوسط (€)', 'فاخر (€)'],
        rows: [
          ['الإقامة (14 ليلة)', '280–420', '560–840', '1400–2800'],
          ['الطعام والشراب', '140–210', '280–420', '560–840'],
          ['التنقل (سيارة + وقود)', '400–500', '400–500', '600–800'],
          ['الأنشطة ورسوم الدخول', '80–120', '150–200', '250–400'],
          ['المخيم الصحراوي (ليلتان)', '80–120', '150–200', '250–400'],
          ['المجموع (أسبوعان)', '980–1370', '1540–2160', '3060–5240'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'هل يكفي أسبوعان لزيارة المغرب؟',
      answer: 'نعم — أسبوعان المدة المثالية للزيارة الأولى. يمكنك تغطية مراكش وفاس وشفشاون والصحراء والساحل الأطلسي بشكل مريح.',
    },
    {
      question: 'هل أحتاج سيارة لرحلة أسبوعين في المغرب؟',
      answer: 'نعم، لأقصى قدر من الحرية. استأجر من مطار الدار البيضاء CMN واتبع الحلقة وأعد السيارة في مراكش. MoroccoForYou Cars تقدم الاستلام من المطار ابتداءً من 29€/يوم.',
    },
    {
      question: 'ما أفضل موسم لرحلة أسبوعين في المغرب؟',
      answer: 'مارس–مايو وسبتمبر–نوفمبر مثاليان: درجات حرارة مريحة في كل مكان بما فيه الصحراء. يوليو–أغسطس حار جداً في مدن الداخل.',
    },
    {
      question: 'كم تكلف رحلة أسبوعين في المغرب؟',
      answer: 'خصص 980–1370€ للشخص في رحلة اقتصادية، 1540–2160€ في مستوى متوسط، أو 3000€+ للفخامة. المتغير الرئيسي هو الإقامة.',
    },
    {
      question: 'هل أحتاج تأشيرة لزيارة المغرب؟',
      answer: 'مواطنو الخليج العربي وأغلب الدول العربية لا يحتاجون تأشيرة لإقامات أقل من 90 يوماً. تحقق من متطلبات بلدك قبل الحجز.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يمكن زيارة المغرب أسبوعين بدون جولة منظمة؟', answer: 'بالتأكيد — المغرب سهل جداً للسفر المستقل بسيارة مستأجرة. الطرق الرئيسية ممتازة وجميع المواقع السياحية موضحة بإشارات جيدة.' },
    { question: 'ما الذي يجب ألا يفوتني في المغرب؟', answer: 'مدينة فاس العتيقة، وكثبان الصحراء عند الغروب، وأزقة شفشاون الزرقاء، وساحة جامع الفنا في مراكش عند الغسق — هذه لا غنى عنها.' },
    { question: 'هل المغرب آمن للزوار لأول مرة؟', answer: 'نعم — المغرب من أكثر الوجهات أماناً في أفريقيا. تنطبق الاحتياطات المعتادة: حافظ على أغراضك الثمينة، استخدم سيارات الأجرة بعداد.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga', 'casablanca', 'essaouira'],
  relatedPosts: ['kam-yawman-tahtaj-fi-al-maghrib', 'nasaeh-li-ziyarat-al-maghrib-li-awwal-marra', 'qiyadat-al-sayyara-fi-al-maghrib'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);