import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'marrakech-car-rental-airport-transfer';
const SLUG_FR = 'location-voiture-marrakech-aeroport';
const SLUG_AR = 'istijar-sayyara-matar-marakish';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(8869293);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Car Rental Marrakech Airport 2026: Prices, Transfer & Booking Guide',
  metaDescription: 'Rent a car at Marrakech Menara Airport (RAK) from MAD 250/day. Real 2026 prices, taxi rates (70-100 MAD), transfer times, and why RAK is Morocco\'s closest airport-to-city-centre pairing at just 4km.',
  title: 'Car Rental Marrakech Airport 2026: Prices, Transfer Options & Complete Booking Guide',
  description: 'Quick answer: Marrakech Menara Airport (RAK) sits just 4 km from the city centre — Morocco\'s closest airport-to-downtown pairing — with regulated taxi fares of MAD 70 by day and MAD 100 at night, or car rental from MAD 250/day at local agencies (350-500 MAD at international chains). This guide covers real 2026 prices across every vehicle category, when you actually need a car versus when a taxi is enough, and how to skip the counter queue with a pre-booked pickup.',
  keyword: 'car rental marrakech airport',
  coverImage: COVER,
  coverAlt: 'Car rental Marrakech airport 2026 — rental car parked at Marrakech Menara Airport arrivals with the Atlas Mountains visible in the background',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 13,
  intro: 'Quick answer: Marrakech Menara Airport (RAK) is Morocco\'s closest major airport to a city centre — just 4 km, a 15-20 minute drive — handling over 6 million travelers annually across two terminals. A regulated taxi costs MAD 70 by day and MAD 100 at night. For most visitors, though, a rental car unlocks far more: local agencies start around MAD 250/day, with international chains at MAD 350-500/day, and it becomes essential the moment your plans include Aït Ben Haddou, Ouarzazate, Essaouira, the Sahara, or the Ourika Valley. This guide covers exactly what a car costs by category, when you genuinely need one versus when a taxi is enough, and how to skip the arrivals-hall queue entirely.',
  sections: [
    {
      heading: 'Marrakech Menara Airport (RAK) Quick Facts',
      paragraphs: ['Everything you need to know on arrival.'],
      table: {
        caption: 'Marrakech Menara Airport (RAK) essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['IATA code', 'RAK'],
          ['Annual passengers', '6+ million'],
          ['Distance to medina/city centre', '4 km — Morocco\'s closest airport-to-downtown pairing'],
          ['Terminals', 'Two — T1 (international), T2 (domestic and low-cost carriers)'],
          ['Main airlines', 'Royal Air Maroc, Air France, Ryanair, easyJet, Vueling, TUI'],
          ['Facilities', 'Free Wi-Fi, cafés, currency exchange, ATMs in arrivals'],
          ['Regulated taxi fare', 'MAD 70 daytime, MAD 100 at night (15-20 min to centre)'],
          ['Uber availability', 'Yes — MAD 40-80 to centre (set pickup point outside the official taxi zone)'],
          ['Car rental from local agencies', 'From MAD 200-250/day'],
          ['Car rental from international chains', 'MAD 350-500/day'],
        ],
      },
      callout: {
        label: '⚠️ Avoid the Taxi Touts',
        body: 'Some drivers inside the arrivals hall offer "private taxis" at inflated rates — often around MAD 200, nearly triple the regulated fare. Insist on the fixed rate (MAD 70 day / MAD 100 night) at the official taxi rank just outside arrivals, and agree the price before your luggage goes in.',
      },
    },
    {
      heading: 'Do You Actually Need a Rental Car in Marrakech?',
      paragraphs: [
        'This is worth answering honestly before you book anything, because the answer genuinely depends on your itinerary — not every Marrakech trip needs a car.',
      ],
      table: {
        caption: 'Do you need a car in Marrakech? Honest guide',
        headers: ['Your situation', 'Recommendation', 'Why'],
        rows: [
          ['Staying only in the medina, no day trips', 'Skip the rental — use taxi/Uber', 'Driving inside the medina is impossible and parking is genuinely difficult; a car is dead weight for a medina-only stay'],
          ['Planning day trips (Ourika Valley, Atlas foothills)', 'Rent for the specific days you need it', 'Public transport to these areas is slow and infrequent'],
          ['Continuing to Ouarzazate, Aït Ben Haddou, or the Sahara', 'Rent at the airport from day one', 'These routes require a car regardless — renting immediately saves a return trip to the airport later'],
          ['Multi-city Morocco road trip (Essaouira, Fes, etc.)', 'Rent at the airport, keep it for the full trip', 'Most cost-effective and flexible option for combining cities'],
        ],
      },
    },
    {
      heading: 'Marrakech Car Rental Prices by Category — Real 2026 Rates',
      paragraphs: [
        'Prices vary meaningfully between local Moroccan agencies and international chains, and by vehicle category. Here is an honest range based on current market rates.',
      ],
      table: {
        caption: 'Car rental prices at Marrakech Menara Airport 2026',
        headers: ['Category', 'Example', 'Local agencies', 'International chains'],
        rows: [
          ['Economy/Compact', 'Dacia Sandero, Hyundai i20', 'MAD 200-350/day (€18-32)', 'MAD 350-450/day (€32-41)'],
          ['Medium sedan', 'Peugeot 3008, similar', 'MAD 350-450/day (€32-41)', 'MAD 450-620/day (€41-57)'],
          ['SUV/4x4', 'Dacia Duster, Nissan Qashqai', 'MAD 350-500/day (€32-46)', 'MAD 500-900/day (€46-83)'],
          ['Luxury', 'Mercedes, BMW, premium sedans', 'MAD 960-1,600/day (€89-148)', 'MAD 1,000-1,800/day (€92-166)'],
        ],
      },
      callout: {
        label: '📅 Best Time to Book for Lower Prices',
        body: 'Book approximately 50 days ahead of your trip for below-average pricing. January and May tend to be the cheapest months to rent in Marrakech; August is consistently the most expensive, with prices running well above the yearly average due to peak summer demand.',
      },
    },
    {
      heading: 'Skip the Airport Counter — Pre-Book with Meet & Greet',
      paragraphs: [
        'International chain counters at RAK can involve real queues at peak arrival times, and local agency counters, while often cheaper, are not always located directly in the terminal. Pre-booking avoids both problems.',
      ],
      callout: {
        label: '🚗 Book Your Marrakech Car Rental',
        body: 'Confirm your car by WhatsApp before you fly, and it\'s ready with a driver waiting with your name at arrivals — no counter, no queue. Economy from MAD 250/day (€23), Dacia Duster 4x4 from MAD 350/day (€32) recommended if your route includes the Atlas Mountains, Sahara, or unpaved sections. Message us your dates: <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
    {
      heading: 'Airport Transfer Options — If You Don\'t Need a Car for the Whole Trip',
      paragraphs: [
        'Not everyone needs a rental for their entire stay. If you\'re staying centrally and only need to get from the airport, several transfer options exist beyond the taxi rank.',
      ],
      table: {
        caption: 'Marrakech airport transfer options 2026',
        headers: ['Option', 'Price', 'Time', 'Best for'],
        rows: [
          ['Regulated taxi', 'MAD 70 day / MAD 100 night', '15-20 min', 'Simple, official, no booking needed'],
          ['Uber', 'MAD 40-80', '15-20 min', 'Often cheaper than taxi, app-based convenience'],
          ['Pre-booked private transfer', '€10-25', '15-20 min', 'Guaranteed driver, fixed price, no negotiation'],
          ['Hotel shuttle', 'Varies, sometimes free', '15-20 min', 'Check with your riad/hotel directly'],
        ],
      },
    },
    {
      heading: 'What\'s Near Marrakech Menara Airport',
      paragraphs: [
        'If your flight schedule leaves you with a few extra hours, the airport sits close to several worthwhile stops even before you reach the medina proper.',
      ],
      list: [
        'The Menara Gardens are a short drive from the airport — olive groves and a reflective pool with Atlas Mountain views, a genuinely calm first stop before the medina\'s intensity.',
        'Menara Mall, on the way into town, offers a familiar option for a coffee or quick errand if you have time to kill.',
        'The medina itself (Jemaa el-Fnaa) is reachable in under 20 minutes — genuinely close by any major-city airport standard.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does it cost to rent a car at Marrakech Airport?',
      answer: 'Local Moroccan agencies start from MAD 200-250/day (€18-23) for an economy car, while international chains typically run MAD 350-500/day (€32-46). SUV and 4x4 rentals cost MAD 350-900/day depending on provider, and luxury vehicles range from MAD 960-1,800/day.',
    },
    {
      question: 'How far is Marrakech Airport from the city centre?',
      answer: 'Just 4 km — Morocco\'s closest major airport-to-downtown pairing, a 15-20 minute drive or taxi ride. This makes Marrakech genuinely convenient to reach compared to Casablanca (30km) or other Moroccan airports.',
    },
    {
      question: 'Do I need a rental car if I\'m only staying in Marrakech medina?',
      answer: 'No — driving inside the medina itself is impossible and parking is a genuine headache. If your entire stay is within the medina with no day trips or onward travel, a taxi or Uber for airport transfers is more practical; only rent if you plan day trips to the Ourika Valley, Atlas Mountains, or are continuing on to other cities.',
    },
    {
      question: 'What is the taxi fare from Marrakech Airport to the city?',
      answer: 'The regulated fare is MAD 70 during the day and MAD 100 at night, for a 15-20 minute ride to the medina, Guéliz or Hivernage. Insist on the official fixed rate at the taxi rank outside arrivals — some touts inside the terminal offer inflated "private taxi" rates around MAD 200.',
    },
    {
      question: 'When is the cheapest time to rent a car in Marrakech?',
      answer: 'January and May tend to offer the lowest rates, with booking roughly 50 days in advance also helping secure below-average pricing. August is consistently the most expensive month due to peak summer tourist demand.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I get an Uber at Marrakech Airport?', answer: 'Yes — Uber operates in Marrakech, typically costing MAD 40-80 to the city centre, often cheaper than a regulated taxi. Set your pickup point in the app just outside the official taxi parking zone, as Uber drivers sometimes cannot enter the designated taxi area directly.' },
    { question: 'What car rental companies operate at Marrakech Airport?', answer: 'Major international brands present at RAK include Hertz, Avis, Europcar, Sixt, Budget, Dollar and Green Motion, alongside numerous local Moroccan agencies offering lower rates. Some companies operate directly from the terminal while others provide a short shuttle transfer to their off-site desk.' },
    { question: 'Is it worth renting a luxury car at Marrakech Airport?', answer: 'For business travel, special occasions, or simply wanting the comfort of an executive vehicle, yes — luxury car rentals at Marrakech Airport average MAD 960-1,800/day depending on the model and provider, with February typically the cheapest month and April the most expensive.' },
  ],
  relatedDestinations: ['marrakech'],
  relatedPosts: ['marrakech-travel-guide', 'luxury-car-rental-casablanca', 'best-private-morocco-tours', 'ouarzazate-travel-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Location Voiture Aéroport Marrakech 2026 : Prix, Transfert et Guide de Réservation',
  metaDescription: 'Louez une voiture à l\'aéroport de Marrakech Menara (RAK) dès MAD 250/jour. Vrais prix 2026, tarifs taxi (70-100 MAD), temps de transfert, et pourquoi RAK est l\'aéroport le plus proche du centre-ville au Maroc à seulement 4km.',
  title: 'Location Voiture Aéroport Marrakech 2026 : Prix, Options de Transfert et Guide Complet',
  description: 'Réponse rapide : l\'aéroport Marrakech Menara (RAK) se situe à seulement 4 km du centre-ville — l\'aéroport le plus proche du centre au Maroc — avec des tarifs taxi réglementés de MAD 70 le jour et MAD 100 la nuit, ou location voiture dès MAD 250/jour chez les agences locales (350-500 MAD chez les chaînes internationales). Ce guide couvre les vrais prix 2026 par catégorie de véhicule, quand vous avez réellement besoin d\'une voiture, et comment éviter la file au comptoir.',
  keyword: 'location voiture marrakech aéroport',
  coverImage: COVER,
  coverAlt: 'Location voiture aéroport Marrakech 2026 — voiture de location garée aux arrivées de l\'aéroport Marrakech Menara avec l\'Atlas visible en arrière-plan',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 13,
  intro: 'Réponse rapide : l\'aéroport Marrakech Menara (RAK) est l\'aéroport majeur le plus proche d\'un centre-ville au Maroc — seulement 4 km, 15-20 minutes de route — traitant plus de 6 millions de voyageurs annuellement à travers deux terminaux. Un taxi réglementé coûte MAD 70 le jour et MAD 100 la nuit. Pour la plupart des visiteurs cependant, une voiture de location débloque bien plus : les agences locales démarrent autour de MAD 250/jour, les chaînes internationales à MAD 350-500/jour, et elle devient essentielle dès que vos plans incluent Aït Ben Haddou, Ouarzazate, Essaouira, le Sahara, ou la vallée de l\'Ourika.',
  sections: [
    {
      heading: 'Aéroport Marrakech Menara (RAK) — Infos Essentielles',
      paragraphs: ['Tout ce qu\'il faut savoir à l\'arrivée.'],
      table: {
        caption: 'Infos essentielles aéroport Marrakech Menara (RAK) 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Code IATA', 'RAK'],
          ['Passagers annuels', '6+ millions'],
          ['Distance médina/centre', '4 km — aéroport le plus proche du centre-ville au Maroc'],
          ['Terminaux', 'Deux — T1 (international), T2 (domestique et low-cost)'],
          ['Compagnies principales', 'Royal Air Maroc, Air France, Ryanair, easyJet, Vueling, TUI'],
          ['Équipements', 'Wi-Fi gratuit, cafés, change, distributeurs aux arrivées'],
          ['Tarif taxi réglementé', 'MAD 70 jour, MAD 100 nuit (15-20 min vers le centre)'],
          ['Disponibilité Uber', 'Oui — MAD 40-80 vers le centre'],
          ['Location voiture agences locales', 'Dès MAD 200-250/jour'],
          ['Location voiture chaînes internationales', 'MAD 350-500/jour'],
        ],
      },
      callout: {
        label: '⚠️ Évitez les Rabatteurs Taxi',
        body: 'Certains chauffeurs dans le hall des arrivées proposent des "taxis privés" à tarifs gonflés — souvent autour de MAD 200, presque le triple du tarif réglementé. Insistez sur le tarif fixe officiel (MAD 70 jour / MAD 100 nuit) à la station de taxi juste à l\'extérieur des arrivées.',
      },
    },
    {
      heading: 'Avez-Vous Vraiment Besoin d\'une Voiture de Location à Marrakech ?',
      paragraphs: ['Cela vaut la peine d\'y répondre honnêtement avant de réserver quoi que ce soit, car la réponse dépend vraiment de votre itinéraire.'],
      table: {
        caption: 'Avez-vous besoin d\'une voiture à Marrakech ? Guide honnête',
        headers: ['Votre situation', 'Recommandation', 'Pourquoi'],
        rows: [
          ['Séjour uniquement dans la médina, pas d\'excursions', 'Évitez la location — taxi/Uber', 'Conduire dans la médina est impossible et le stationnement vraiment difficile'],
          ['Excursions prévues (vallée de l\'Ourika, contreforts de l\'Atlas)', 'Louez pour les jours nécessaires', 'Les transports publics vers ces zones sont lents et peu fréquents'],
          ['Continuation vers Ouarzazate, Aït Ben Haddou, ou le Sahara', 'Louez à l\'aéroport dès le premier jour', 'Ces itinéraires nécessitent une voiture de toute façon'],
          ['Road trip multi-villes au Maroc (Essaouira, Fès, etc.)', 'Louez à l\'aéroport, gardez pour tout le voyage', 'Option la plus rentable et flexible'],
        ],
      },
    },
    {
      heading: 'Prix Location Voiture Marrakech par Catégorie — Vrais Tarifs 2026',
      paragraphs: ['Les prix varient significativement entre agences marocaines locales et chaînes internationales.'],
      table: {
        caption: 'Prix location voiture aéroport Marrakech Menara 2026',
        headers: ['Catégorie', 'Exemple', 'Agences locales', 'Chaînes internationales'],
        rows: [
          ['Économique/Compact', 'Dacia Sandero, Hyundai i20', 'MAD 200-350/jour (18-32€)', 'MAD 350-450/jour (32-41€)'],
          ['Berline moyenne', 'Peugeot 3008, similaire', 'MAD 350-450/jour (32-41€)', 'MAD 450-620/jour (41-57€)'],
          ['SUV/4x4', 'Dacia Duster, Nissan Qashqai', 'MAD 350-500/jour (32-46€)', 'MAD 500-900/jour (46-83€)'],
          ['Luxe', 'Mercedes, BMW, berlines premium', 'MAD 960-1 600/jour (89-148€)', 'MAD 1 000-1 800/jour (92-166€)'],
        ],
      },
      callout: {
        label: '📅 Meilleur Moment pour Réserver',
        body: 'Réservez environ 50 jours à l\'avance pour un prix inférieur à la moyenne. Janvier et mai sont généralement les mois les moins chers pour louer à Marrakech ; août est constamment le plus cher, en raison de la demande estivale de pointe.',
      },
    },
    {
      heading: 'Évitez le Comptoir Aéroport — Réservez avec Accueil',
      paragraphs: ['Les comptoirs des chaînes internationales à RAK peuvent impliquer de vraies files aux heures de pointe.'],
      callout: {
        label: '🚗 Réservez Votre Location Voiture Marrakech',
        body: 'Confirmez votre voiture par WhatsApp avant de voler, et elle est prête avec un chauffeur attendant avec votre nom à l\'arrivée — sans comptoir, sans file. Économique dès MAD 250/jour (23€), Dacia Duster 4x4 dès MAD 350/jour (32€) recommandé pour l\'Atlas, le Sahara, ou sections non goudronnées. Contactez-nous : <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
    {
      heading: 'Options de Transfert Aéroport — Si Vous N\'avez Pas Besoin d\'une Voiture Tout le Séjour',
      paragraphs: ['Tout le monde n\'a pas besoin d\'une location pour tout son séjour.'],
      table: {
        caption: 'Options transfert aéroport Marrakech 2026',
        headers: ['Option', 'Prix', 'Temps', 'Idéal pour'],
        rows: [
          ['Taxi réglementé', 'MAD 70 jour / MAD 100 nuit', '15-20 min', 'Simple, officiel, sans réservation'],
          ['Uber', 'MAD 40-80', '15-20 min', 'Souvent moins cher que taxi'],
          ['Transfert privé pré-réservé', '10-25€', '15-20 min', 'Chauffeur garanti, prix fixe'],
          ['Navette hôtel', 'Variable, parfois gratuite', '15-20 min', 'Vérifiez avec votre riad/hôtel'],
        ],
      },
    },
    {
      heading: 'À Proximité de l\'Aéroport Marrakech Menara',
      paragraphs: ['Si votre horaire de vol vous laisse quelques heures supplémentaires.'],
      list: [
        'Les Jardins de la Menara sont à courte distance de l\'aéroport — oliveraies et bassin réfléchissant avec vue sur l\'Atlas.',
        'Menara Mall, sur le chemin vers la ville, offre une option familière pour un café.',
        'La médina elle-même (Jemaa el-Fna) est accessible en moins de 20 minutes.',
      ],
    },
  ],
  faqs: [
    { question: 'Combien coûte la location d\'une voiture à l\'aéroport de Marrakech ?', answer: 'Les agences marocaines locales démarrent à MAD 200-250/jour (18-23€) pour une économique, tandis que les chaînes internationales tournent typiquement à MAD 350-500/jour (32-46€).' },
    { question: 'À quelle distance est l\'aéroport de Marrakech du centre-ville ?', answer: 'Seulement 4 km — l\'aéroport majeur le plus proche du centre-ville au Maroc, 15-20 minutes en voiture ou taxi.' },
    { question: 'Ai-je besoin d\'une voiture de location si je reste seulement dans la médina de Marrakech ?', answer: 'Non — conduire dans la médina elle-même est impossible et le stationnement un vrai casse-tête. Un taxi ou Uber pour les transferts aéroport est plus pratique si vous ne prévoyez pas d\'excursions.' },
    { question: 'Quel est le tarif taxi de l\'aéroport de Marrakech vers la ville ?', answer: 'Le tarif réglementé est MAD 70 le jour et MAD 100 la nuit, pour un trajet de 15-20 minutes vers la médina, Guéliz ou Hivernage.' },
    { question: 'Quel est le meilleur moment pour louer une voiture à Marrakech ?', answer: 'Janvier et mai offrent généralement les tarifs les plus bas. Août est constamment le mois le plus cher.' },
  ],
  peopleAlsoAsk: [
    { question: 'Puis-je prendre un Uber à l\'aéroport de Marrakech ?', answer: 'Oui — Uber opère à Marrakech, coûtant typiquement MAD 40-80 vers le centre-ville, souvent moins cher qu\'un taxi réglementé.' },
    { question: 'Quelles compagnies de location opèrent à l\'aéroport de Marrakech ?', answer: 'Les grandes marques internationales présentes à RAK incluent Hertz, Avis, Europcar, Sixt, Budget, Dollar et Green Motion, aux côtés de nombreuses agences marocaines locales offrant des tarifs plus bas.' },
    { question: 'Vaut-il la peine de louer une voiture de luxe à l\'aéroport de Marrakech ?', answer: 'Pour le voyage d\'affaires, les occasions spéciales, ou simplement le confort d\'un véhicule executive, oui — les locations de luxe à Marrakech moyennent MAD 960-1 800/jour.' },
  ],
  relatedDestinations: ['marrakech'],
  relatedPosts: ['guide-voyage-marrakech', 'location-voiture-luxe-casablanca', 'meilleurs-circuits-prives-maroc', 'guide-voyage-ouarzazate'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'تأجير سيارات مطار مراكش 2026: الأسعار والنقل ودليل الحجز',
  metaDescription: 'استأجر سيارة بمطار مراكش المنارة (RAK) من MAD 250/يوم. أسعار حقيقية 2026، أسعار التاكسي (70-100 درهم)، أوقات النقل، ولماذا RAK أقرب مطار لوسط المدينة بالمغرب على بعد 4 كم فقط.',
  title: 'تأجير سيارات مطار مراكش 2026: الأسعار وخيارات النقل والدليل الكامل',
  description: 'إجابة سريعة: يقع مطار مراكش المنارة (RAK) على بعد 4 كم فقط من وسط المدينة — أقرب مطار لوسط المدينة بالمغرب — بأسعار تاكسي منظمة 70 درهم نهاراً و100 درهم ليلاً، أو تأجير سيارة من MAD 250/يوم بالوكالات المحلية. يغطي هذا الدليل أسعاراً حقيقية 2026 لكل فئة مركبة، ومتى تحتاج سيارة فعلاً، وكيف تتجنب طابور المكتب.',
  keyword: 'تأجير سيارات مطار مراكش',
  coverImage: COVER,
  coverAlt: 'تأجير سيارات مطار مراكش 2026 — سيارة إيجار متوقفة بصالة وصول مطار مراكش المنارة مع جبال الأطلس بالخلفية',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 13,
  intro: 'إجابة سريعة: مطار مراكش المنارة (RAK) أقرب مطار رئيسي لوسط مدينة بالمغرب — 4 كم فقط، 15-20 دقيقة قيادة — يستقبل أكثر من 6 ملايين مسافر سنوياً عبر صالتين. التاكسي المنظم يكلف 70 درهم نهاراً و100 درهم ليلاً. لمعظم الزوار، سيارة إيجار تفتح أبواباً أكثر: الوكالات المحلية تبدأ حوالي MAD 250/يوم، والسلاسل الدولية MAD 350-500/يوم، وتصبح ضرورية بمجرد أن تشمل خططك آيت بن حدو أو ورززات أو الصويرة أو الصحراء أو وادي أوريكا.',
  sections: [
    {
      heading: 'مطار مراكش المنارة (RAK) — المعلومات الأساسية',
      paragraphs: ['كل ما تحتاج معرفته عند الوصول.'],
      table: {
        caption: 'المعلومات الأساسية لمطار مراكش المنارة (RAK) 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['رمز IATA', 'RAK'],
          ['المسافرون السنويون', '+6 ملايين'],
          ['المسافة للمدينة العتيقة/الوسط', '4 كم — أقرب مطار لوسط مدينة بالمغرب'],
          ['الصالات', 'اثنتان — T1 (دولي)، T2 (محلي ومنخفض التكلفة)'],
          ['شركات الطيران الرئيسية', 'رايال إير ماروك، إير فرانس، رايان إير، إيزي جيت'],
          ['المرافق', 'واي فاي مجاني، مقاهٍ، صرف عملات، صرافات آلية'],
          ['أجرة التاكسي المنظمة', 'MAD 70 نهاراً، MAD 100 ليلاً (15-20 دقيقة للوسط)'],
          ['توفر أوبر', 'نعم — MAD 40-80 للوسط'],
          ['تأجير سيارة من وكالات محلية', 'من MAD 200-250/يوم'],
          ['تأجير سيارة من سلاسل دولية', 'MAD 350-500/يوم'],
        ],
      },
      callout: {
        label: '⚠️ تجنب سماسرة التاكسي',
        body: 'بعض السائقين داخل صالة الوصول يعرضون "تاكسيات خاصة" بأسعار منتفخة — غالباً حوالي MAD 200. أصر على السعر الثابت الرسمي عند موقف التاكسي خارج الوصول.',
      },
    },
    {
      heading: 'هل تحتاج فعلاً سيارة إيجار بمراكش؟',
      paragraphs: ['يستحق الأمر إجابة صادقة قبل حجز أي شيء.'],
      table: {
        caption: 'هل تحتاج سيارة بمراكش؟ دليل صادق',
        headers: ['وضعك', 'التوصية', 'لماذا'],
        rows: [
          ['إقامة بالمدينة العتيقة فقط، بلا رحلات', 'تجنب التأجير — تاكسي/أوبر', 'القيادة بالمدينة العتيقة مستحيلة'],
          ['رحلات مخططة (وادي أوريكا، سفوح الأطلس)', 'استأجر للأيام المطلوبة', 'النقل العام بطيء وغير متكرر'],
          ['المتابعة لورززات أو آيت بن حدو أو الصحراء', 'استأجر بالمطار من اليوم الأول', 'هذه المسارات تتطلب سيارة على أي حال'],
          ['رحلة برية متعددة المدن (الصويرة، فاس)', 'استأجر بالمطار، احتفظ بها للرحلة كاملة', 'الخيار الأكثر مرونة'],
        ],
      },
    },
    {
      heading: 'أسعار تأجير السيارات بمراكش حسب الفئة — أسعار حقيقية 2026',
      paragraphs: ['الأسعار تتفاوت بين الوكالات المغربية المحلية والسلاسل الدولية.'],
      table: {
        caption: 'أسعار تأجير السيارات بمطار مراكش المنارة 2026',
        headers: ['الفئة', 'مثال', 'وكالات محلية', 'سلاسل دولية'],
        rows: [
          ['اقتصادية', 'داشيا ساندرو، هيونداي i20', 'MAD 200-350/يوم (18-32€)', 'MAD 350-450/يوم (32-41€)'],
          ['سيدان متوسط', 'بيجو 3008', 'MAD 350-450/يوم (32-41€)', 'MAD 450-620/يوم (41-57€)'],
          ['دفع رباعي', 'داشيا دوستر، نيسان قشقاي', 'MAD 350-500/يوم (32-46€)', 'MAD 500-900/يوم (46-83€)'],
          ['فاخرة', 'مرسيدس، BMW', 'MAD 960-1,600/يوم (89-148€)', 'MAD 1,000-1,800/يوم (92-166€)'],
        ],
      },
      callout: {
        label: '📅 أفضل وقت للحجز',
        body: 'احجز حوالي 50 يوماً مسبقاً لسعر أقل من المتوسط. يناير ومايو عادةً أرخص الأشهر بمراكش؛ أغسطس دائماً الأغلى.',
      },
    },
    {
      heading: 'تجنب مكتب المطار — احجز مع استقبال',
      paragraphs: ['مكاتب السلاسل الدولية بـRAK قد تشمل طوابير حقيقية بأوقات الذروة.'],
      callout: {
        label: '🚗 احجز تأجير سيارتك بمراكش',
        body: 'أكد سيارتك عبر واتساب قبل الطيران، وستكون جاهزة مع سائق ينتظر باسمك عند الوصول. اقتصادية من MAD 250/يوم (23€)، داشيا دوستر 4x4 من MAD 350/يوم (32€) موصى بها للأطلس والصحراء. راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
    {
      heading: 'خيارات نقل المطار — إذا لم تحتج سيارة للرحلة كاملة',
      paragraphs: ['ليس الجميع يحتاج تأجيراً لكامل الإقامة.'],
      table: {
        caption: 'خيارات نقل مطار مراكش 2026',
        headers: ['الخيار', 'السعر', 'الوقت', 'الأنسب لـ'],
        rows: [
          ['تاكسي منظم', 'MAD 70 نهاراً / MAD 100 ليلاً', '15-20 دقيقة', 'بسيط، رسمي'],
          ['أوبر', 'MAD 40-80', '15-20 دقيقة', 'غالباً أرخص من التاكسي'],
          ['نقل خاص محجوز مسبقاً', '10-25€', '15-20 دقيقة', 'سائق مضمون، سعر ثابت'],
          ['حافلة الفندق', 'متغير، أحياناً مجاني', '15-20 دقيقة', 'تحقق مع رياضك/فندقك'],
        ],
      },
    },
    {
      heading: 'بالقرب من مطار مراكش المنارة',
      paragraphs: ['إذا ترك لك جدول رحلتك بضع ساعات إضافية.'],
      list: [
        'حدائق المنارة على مسافة قصيرة من المطار — بساتين زيتون وبركة عاكسة بإطلالة على الأطلس.',
        'مركز تسوق المنارة، في الطريق للمدينة، خيار مألوف لقهوة سريعة.',
        'المدينة العتيقة نفسها (جامع الفنا) قابلة للوصول في أقل من 20 دقيقة.',
      ],
    },
  ],
  faqs: [
    { question: 'كم تكلفة استئجار سيارة بمطار مراكش؟', answer: 'الوكالات المغربية المحلية تبدأ من MAD 200-250/يوم (18-23€) للاقتصادية، بينما السلاسل الدولية عادةً MAD 350-500/يوم (32-46€).' },
    { question: 'كم تبعد مطار مراكش عن وسط المدينة؟', answer: '4 كم فقط — أقرب مطار رئيسي لوسط مدينة بالمغرب، 15-20 دقيقة بالسيارة أو التاكسي.' },
    { question: 'هل أحتاج سيارة إيجار إن أقمت بالمدينة العتيقة فقط؟', answer: 'لا — القيادة داخل المدينة العتيقة مستحيلة والركن صعب فعلاً. تاكسي أو أوبر لنقل المطار أعملي إن لم تخطط لرحلات.' },
    { question: 'ما أجرة التاكسي من مطار مراكش للمدينة؟', answer: 'الأجرة المنظمة MAD 70 نهاراً وMAD 100 ليلاً، لرحلة 15-20 دقيقة للمدينة العتيقة أو جيليز أو الحيرناج.' },
    { question: 'متى أفضل وقت لاستئجار سيارة بمراكش؟', answer: 'يناير ومايو عادةً يقدمان أرخص الأسعار. أغسطس دائماً الشهر الأغلى.' },
  ],
  peopleAlsoAsk: [
    { question: 'هل يمكن ركوب أوبر بمطار مراكش؟', answer: 'نعم — أوبر يعمل بمراكش، يكلف عادةً MAD 40-80 لوسط المدينة، غالباً أرخص من التاكسي المنظم.' },
    { question: 'أي شركات تأجير تعمل بمطار مراكش؟', answer: 'الماركات الدولية الكبرى بـRAK تشمل Hertz وAvis وEuropcar وSixt وBudget، بجانب وكالات مغربية محلية عديدة بأسعار أقل.' },
    { question: 'هل يستحق استئجار سيارة فاخرة بمطار مراكش؟', answer: 'لسفر الأعمال أو المناسبات الخاصة، نعم — متوسط السيارات الفاخرة بمطار مراكش MAD 960-1,800/يوم.' },
  ],
  relatedDestinations: ['marrakech'],
  relatedPosts: ['dalil-safar-marakish', 'istajar-sayyara-fakhira-dar-al-bayda', 'afdal-jawlat-khasa-maghrib', 'dalil-safar-warzazat'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);