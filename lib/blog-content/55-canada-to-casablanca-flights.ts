import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'canada-to-casablanca-flights-car-rental';
const SLUG_FR = 'vol-canada-casablanca-location-voiture';
const SLUG_AR = 'tayaran-kanada-dar-al-bayda-istijar-sayyara';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(6587429);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Canada to Casablanca Flights 2026: Montreal & Toronto Routes + Car Rental',
  metaDescription: 'Direct flights from Canada to Casablanca: Montreal (since 1975, 2 daily) and Toronto (new 2024 route, 3x/week). Real 2026 prices, flight times, and how to rent a car at CMN or Rabat airport on arrival.',
  title: 'Canada to Casablanca Flights 2026: Montreal & Toronto Direct Routes, Prices & Car Rental Guide',
  description: 'Quick answer: Canada has two direct routes to Morocco — Montreal (YUL) to Casablanca, running since 1975 with 2 daily Royal Air Maroc flights, and Toronto (YYZ) to Casablanca, a newer route launched December 2024 running 3 times a week. Round-trip fares typically run CAD 550-950. This guide covers real 2026 flight prices and schedules, why most Canadian travelers — both diaspora visiting family and first-time tourists — rent a car on arrival rather than relying on trains and buses, and exactly how to arrange pickup at either Casablanca or Rabat airport.',
  keyword: 'flights from canada to morocco',
  coverImage: COVER,
  coverAlt: 'Flights from Canada to Casablanca 2026 — Royal Air Maroc Boeing 787 Dreamliner at the gate',
  publishedISO: '2026-08-16',
  updatedISO: '2026-08-16',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 14,
  intro: 'Quick answer: Canada has two direct air routes to Morocco. Montreal (YUL) to Casablanca has run since 1975 — the oldest and busiest connection, currently operated twice daily by Royal Air Maroc, with round-trip fares typically CAD 550-950. Toronto (YYZ) to Casablanca launched in December 2024, three flights weekly on Royal Air Maroc\'s Boeing 787 Dreamliner, specifically "to meet the growing demand of Moroccans living in Canada, particularly in Ontario," according to the airline\'s CEO. Nearly half of all visitors to Morocco each year are members of the diaspora (MRE — Marocains Résidents à l\'Étranger) returning for family visits, weddings, and property matters, alongside a growing number of Canadian tourists discovering Morocco for the first time. This guide covers real 2026 flight details and the practical question almost everyone asks next: how to get around once you land.',
  sections: [
    {
      heading: 'Direct Flights from Canada to Casablanca — Montreal vs Toronto',
      paragraphs: [
        'Montreal has the deeper, more established connection — partly the shared French language, partly Quebec\'s large Moroccan community — while Toronto\'s newer route reflects Ontario\'s own growing diaspora population.',
      ],
      table: {
        caption: 'Canada to Casablanca direct flights 2026',
        headers: ['Route', 'Airline', 'Frequency', 'Flight time', 'Typical round-trip price'],
        rows: [
          ['Montreal (YUL) → Casablanca (CMN)', 'Royal Air Maroc', '2x daily', '~7h direct', 'CAD 550-950'],
          ['Toronto (YYZ) → Casablanca (CMN)', 'Royal Air Maroc (Boeing 787)', '3x weekly (Wed/Fri/Sun)', '~7h30 direct', 'CAD 800-1,300'],
          ['Montreal/Toronto via Europe', 'Air Canada, Air France, KLM, Turkish Airlines, and others', 'Daily, multiple options', '~11-13h with layover', 'CAD 550-850 (often cheapest)'],
        ],
      },
      callout: {
        label: '💡 Direct Answer: Which Route Should You Book?',
        body: 'If you\'re based in or near Montreal, the direct Royal Air Maroc flight is almost always the simplest choice — twice daily and no layover. From Toronto, compare the new direct Royal Air Maroc route against one-stop options via Paris, Amsterdam or Istanbul; connecting flights are sometimes cheaper despite the extra travel time. March is typically the cheapest month to fly on this route.',
      },
    },
    {
      heading: 'Why Nearly Half of Morocco\'s Visitors Are Coming Home, Not Just Visiting',
      paragraphs: [
        'This matters for how you plan your trip: Morocco\'s annual visitor numbers include a huge share of diaspora travelers, not only foreign tourists. In recent years roughly 49% of all visitors have been MRE — Moroccans resident abroad — returning for family visits, weddings, property matters, and administrative tasks, alongside holiday time. Morocco\'s annual "Operation Marhaba" program coordinates this seasonal surge: in 2026 alone it recorded 2.74 million diaspora arrivals, with more than 52% entering by sea via European ferry routes specifically so families can bring their own vehicles and heavier luggage.',
        'For Canadian-based travelers flying rather than taking a European ferry, this same logic applies differently: a rental car picked up at the airport solves the vehicle problem without needing to ship or drive one across an ocean, while still giving you the flexibility to visit multiple family members, attend a wedding in one city and stay with relatives in another, all without depending on trains and buses that don\'t reach every town.',
      ],
      callout: {
        label: '📊 The Real Cost of a Family Trip',
        body: 'According to Moroccan diaspora associations, a typical family of four traveling home for the summer budgets roughly €1,500-2,000 for round-trip flights alone. Given that expense, most families extend the ground-transport budget toward a rental car rather than relying on costlier last-minute taxis or grand taxi negotiations city to city.',
      },
    },
    {
      heading: 'Arriving at Casablanca (CMN) — Car Rental & Onward Travel',
      paragraphs: [
        'Casablanca Mohammed V Airport is Morocco\'s main international gateway and the arrival point for the large majority of flights from Montreal and Toronto — the natural first stop for both diaspora visits and first-time Canadian tourists.',
      ],
      callout: {
        label: '🚗 Rent Your Car at Casablanca Airport',
        body: 'Skip the arrivals-hall counter queue after a long transatlantic flight — confirm your car by WhatsApp before you fly, and it\'s ready with free meet & greet when you land. Economy from MAD 250/day (€23), Dacia Duster 4x4 from MAD 350/day (€32) for family trips or road trips beyond the cities. See the full <a href="/blog/casablanca-airport-guide-cmn">Casablanca Airport (CMN) Guide</a> for terminal details, or message us directly to arrange pickup: <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
    {
      heading: 'Arriving at Rabat (RBA) — A Calmer Alternative',
      paragraphs: [
        'For travelers with family based in or near Rabat, or those simply wanting a calmer, less crowded arrival than Casablanca, Rabat-Salé Airport is a genuine alternative — smaller, faster through immigration, and increasingly well-connected as Ryanair and other carriers expand routes there.',
      ],
      callout: {
        label: '🚗 Rent Your Car at Rabat Airport',
        body: 'Rabat-Salé handled roughly a fifth of Casablanca\'s passenger volume in H1 2026, which generally means shorter immigration lines and a quicker car rental pickup. Economy from MAD 250/day (€23). See the full <a href="/blog/rabat-airport-guide-rba">Rabat Airport (RBA) Guide</a>, or message us on <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a> to confirm your car before you fly.',
      },
    },
    {
      heading: 'Why Rent a Car Instead of Relying on Trains and Buses?',
      paragraphs: [
        'Morocco\'s train network, including the Al Boraq high-speed line, connects the main northern and central corridor cities well — but it does not reach the Sahara, the Atlas mountain passes, most coastal towns beyond Casablanca and Rabat, or the smaller towns where extended family often lives. For a trip that combines family visits across two or three cities with any sightseeing at all, a rental car removes the dependency on bus schedules and inter-city taxi negotiations entirely.',
      ],
      table: {
        caption: 'Self-drive vs public transport for a Canada-Morocco family trip',
        headers: ['Factor', 'Rental car', 'Train/bus'],
        rows: [
          ['Flexibility for multi-city family visits', 'High — go directly, any schedule', 'Limited to rail/bus corridors and timetables'],
          ['Luggage capacity', 'High — ideal with gifts and extra bags typical of family visits', 'Limited, especially on buses'],
          ['Reaching smaller towns/villages', 'Direct', 'Often requires a taxi transfer from the nearest station'],
          ['Cost for a family of 4+', 'Often comparable or cheaper than 4 train/bus tickets per leg', 'Per-person pricing adds up quickly for families'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Is there a direct flight from Canada to Morocco?',
      answer: 'Yes — two direct routes. Montreal (YUL) to Casablanca has operated since 1975, now twice daily on Royal Air Maroc. Toronto (YYZ) to Casablanca launched in December 2024, running three times weekly on a Boeing 787 Dreamliner, added specifically to serve Ontario\'s growing Moroccan community.',
    },
    {
      question: 'How much does a flight from Canada to Casablanca cost?',
      answer: 'Round-trip fares from Montreal typically run CAD 550-950; from Toronto, CAD 800-1,300 on the direct Royal Air Maroc route, though one-stop options via European hubs are sometimes cheaper. March is generally the cheapest month to fly this route. Family trips (a group of four) commonly budget €1,500-2,000 total for round-trip flights during peak summer travel.',
    },
    {
      question: 'Should I fly into Casablanca or Rabat from Canada?',
      answer: 'Casablanca (CMN) is Morocco\'s main international hub and receives the vast majority of direct flights from Montreal and Toronto, making it the default choice. Rabat-Salé (RBA) is a genuine alternative if your family or itinerary is based nearer the capital — it handles roughly a fifth of Casablanca\'s passenger volume, meaning generally faster immigration and pickup.',
    },
    {
      question: 'Do I need to rent a car in Morocco if I\'m visiting family?',
      answer: 'For most multi-city family visits, yes. Morocco\'s train network covers the main northern-central corridor but doesn\'t reach the Sahara, Atlas mountain passes, or many smaller towns where extended family often lives. A rental car also handles the heavier luggage typical of diaspora family visits far better than buses or trains.',
    },
    {
      question: 'What is Operation Marhaba?',
      answer: 'Operation Marhaba is Morocco\'s annual coordinated program managing the summer surge of diaspora Moroccans (MRE) returning home — in 2026 it recorded 2.74 million diaspora arrivals, with over 52% entering by sea via European ferries so families could bring their own vehicles. Canadian-based travelers typically fly rather than use the ferry routes, making a rental car on arrival the practical equivalent.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Why do so many Moroccans in Canada fly through Montreal?', answer: 'Montreal has Canada\'s strongest Morocco flight connections, largely due to Quebec\'s large, long-established Moroccan diaspora community and the shared French language, plus the historic Montreal-Casablanca route that has operated continuously since 1975 — decades before Toronto\'s December 2024 route launched.' },
    { question: 'How long is the flight from Toronto to Casablanca?', answer: 'The direct Royal Air Maroc flight takes approximately 7.5 hours. Connecting flights via European hubs (Paris, Amsterdam, Istanbul) typically take 11-13 hours including layover time, but are sometimes cheaper than the direct route.' },
    { question: 'What percentage of Morocco visitors are from the diaspora?', answer: 'Roughly 49% of Morocco\'s annual visitors are MRE (Moroccans resident abroad) returning for family visits, weddings, and administrative matters — nearly matching the 51% who are international tourists with no Moroccan family ties, reflecting Morocco\'s roughly 6 million-strong global diaspora.' },
  ],
  relatedDestinations: ['casablanca', 'rabat'],
  relatedPosts: ['casablanca-airport-guide-cmn', 'rabat-airport-guide-rba', 'casablanca-travel-guide', 'rabat-travel-guide', 'low-cost-flights-to-morocco-2026'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Vol Canada Casablanca 2026 : Montréal & Toronto + Location Voiture',
  metaDescription: 'Vols directs du Canada vers Casablanca : Montréal (depuis 1975, 2/jour) et Toronto (nouvelle route 2024, 3x/semaine). Vrais prix 2026, horaires, et comment louer une voiture à CMN ou à l\'aéroport de Rabat.',
  title: 'Vol Canada Casablanca 2026 : Montréal & Toronto, Prix Réels et Guide Location Voiture',
  description: 'Réponse rapide : le Canada a deux routes directes vers le Maroc — Montréal (YUL) vers Casablanca, en service depuis 1975 avec 2 vols quotidiens Royal Air Maroc, et Toronto (YYZ) vers Casablanca, route plus récente lancée en décembre 2024, 3 fois par semaine. Les tarifs aller-retour tournent généralement autour de 550-950 CAD. Ce guide couvre les vrais prix et horaires 2026, pourquoi la plupart des voyageurs canadiens — diaspora visitant la famille et touristes de première fois — louent une voiture à l\'arrivée, et comment organiser la prise en charge à Casablanca ou Rabat.',
  keyword: 'vol canada maroc',
  coverImage: COVER,
  coverAlt: 'Vols du Canada vers Casablanca 2026 — Boeing 787 Dreamliner de Royal Air Maroc à la porte d\'embarquement',
  publishedISO: '2026-08-16',
  updatedISO: '2026-08-16',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 14,
  intro: 'Réponse rapide : le Canada dispose de deux routes aériennes directes vers le Maroc. Montréal (YUL) vers Casablanca fonctionne depuis 1975 — la connexion la plus ancienne et la plus fréquentée, actuellement opérée deux fois par jour par Royal Air Maroc, avec des tarifs aller-retour généralement entre 550 et 950 CAD. Toronto (YYZ) vers Casablanca a été lancée en décembre 2024, trois vols hebdomadaires sur le Boeing 787 Dreamliner de Royal Air Maroc, ajoutée spécifiquement "pour répondre à la demande croissante des Marocains vivant au Canada, particulièrement en Ontario", selon le PDG de la compagnie. Près de la moitié des visiteurs annuels du Maroc sont des membres de la diaspora (MRE — Marocains Résidents à l\'Étranger) revenant pour des visites familiales, mariages et démarches immobilières, aux côtés d\'un nombre croissant de touristes canadiens découvrant le Maroc pour la première fois.',
  sections: [
    {
      heading: 'Vols Directs du Canada vers Casablanca — Montréal vs Toronto',
      paragraphs: ['Montréal a la connexion la plus ancienne et établie — en partie la langue française partagée, en partie la grande communauté marocaine du Québec — tandis que la nouvelle route de Toronto reflète la population diaspora croissante de l\'Ontario.'],
      table: {
        caption: 'Vols directs Canada vers Casablanca 2026',
        headers: ['Route', 'Compagnie', 'Fréquence', 'Durée vol', 'Prix aller-retour typique'],
        rows: [
          ['Montréal (YUL) → Casablanca (CMN)', 'Royal Air Maroc', '2x par jour', '~7h direct', '550-950 CAD'],
          ['Toronto (YYZ) → Casablanca (CMN)', 'Royal Air Maroc (Boeing 787)', '3x par semaine (mer/ven/dim)', '~7h30 direct', '800-1 300 CAD'],
          ['Montréal/Toronto via Europe', 'Air Canada, Air France, KLM, Turkish Airlines', 'Quotidien, options multiples', '~11-13h avec escale', '550-850 CAD (souvent moins cher)'],
        ],
      },
      callout: {
        label: '💡 Réponse Directe : Quelle Route Réserver ?',
        body: 'Si vous êtes basé à Montréal ou proche, le vol direct Royal Air Maroc est presque toujours le choix le plus simple — deux fois par jour, sans escale. Depuis Toronto, comparez la nouvelle route directe avec les options avec escale via Paris, Amsterdam ou Istanbul. Mars est généralement le mois le moins cher pour voler sur cette route.',
      },
    },
    {
      heading: 'Pourquoi Près de la Moitié des Visiteurs du Maroc Rentrent Chez Eux, Pas Seulement en Visite',
      paragraphs: [
        'Cela compte pour la planification de votre voyage : les chiffres annuels de visiteurs du Maroc incluent une part énorme de voyageurs de la diaspora, pas seulement des touristes étrangers. Ces dernières années, environ 49% de tous les visiteurs étaient des MRE — Marocains résidents à l\'étranger — revenant pour des visites familiales, mariages, affaires immobilières et démarches administratives, en plus du temps de vacances. Le programme annuel "Opération Marhaba" du Maroc coordonne cet afflux saisonnier : en 2026 seul, il a enregistré 2,74 millions d\'arrivées de la diaspora, plus de 52% entrant par voie maritime via les routes de ferry européennes spécifiquement pour que les familles puissent amener leurs propres véhicules.',
        'Pour les voyageurs basés au Canada qui prennent l\'avion plutôt qu\'un ferry européen, cette même logique s\'applique différemment : une voiture de location récupérée à l\'aéroport résout le problème du véhicule sans avoir besoin d\'en expédier ou d\'en conduire un à travers un océan, tout en vous donnant la flexibilité de visiter plusieurs membres de la famille, assister à un mariage dans une ville et loger chez des proches dans une autre.',
      ],
      callout: {
        label: '📊 Le Vrai Coût d\'un Voyage Familial',
        body: 'Selon les associations de la diaspora marocaine, une famille type de quatre personnes voyageant pour l\'été budgète environ 1 500-2 000€ pour les seuls vols aller-retour. Face à cette dépense, la plupart des familles étendent le budget transport terrestre vers une voiture de location plutôt que de dépendre de taxis coûteux de dernière minute.',
      },
    },
    {
      heading: 'Arrivée à Casablanca (CMN) — Location Voiture et Continuation',
      paragraphs: ['L\'aéroport Mohammed V de Casablanca est la principale porte internationale du Maroc et le point d\'arrivée pour la grande majorité des vols depuis Montréal et Toronto.'],
      callout: {
        label: '🚗 Louez Votre Voiture à l\'Aéroport de Casablanca',
        body: 'Évitez la file au comptoir d\'arrivée après un long vol transatlantique — confirmez votre voiture par WhatsApp avant de voler, et elle est prête avec accueil gratuit à l\'arrivée. Économique dès MAD 250/jour (23€), Dacia Duster 4x4 dès MAD 350/jour (32€) pour les voyages en famille. Voir notre <a href="/blog/guide-aeroport-casablanca-cmn">Guide Aéroport de Casablanca (CMN)</a>, ou contactez-nous directement : <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
    {
      heading: 'Arrivée à Rabat (RBA) — Une Alternative Plus Calme',
      paragraphs: ['Pour les voyageurs dont la famille est basée à ou près de Rabat, ou ceux voulant simplement une arrivée plus calme que Casablanca, l\'aéroport de Rabat-Salé est une véritable alternative.'],
      callout: {
        label: '🚗 Louez Votre Voiture à l\'Aéroport de Rabat',
        body: 'Rabat-Salé a traité environ un cinquième du volume de passagers de Casablanca au premier semestre 2026, ce qui signifie généralement des files d\'immigration plus courtes. Économique dès MAD 250/jour (23€). Voir notre <a href="/blog/location-voiture-aeroport-rabat-rba">Guide Aéroport de Rabat (RBA)</a>, ou contactez-nous sur <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a> pour confirmer votre voiture avant de voler.',
      },
    },
    {
      heading: 'Pourquoi Louer une Voiture Plutôt que Dépendre des Trains et Bus ?',
      paragraphs: ['Le réseau ferroviaire marocain, incluant la ligne à grande vitesse Al Boraq, relie bien les principales villes du corridor nord-central — mais n\'atteint pas le Sahara, les cols de l\'Atlas, la plupart des villes côtières au-delà de Casablanca et Rabat, ou les petites villes où vit souvent la famille élargie.'],
      table: {
        caption: 'Voiture de location vs transport public pour un voyage familial Canada-Maroc',
        headers: ['Facteur', 'Voiture de location', 'Train/bus'],
        rows: [
          ['Flexibilité visites familiales multi-villes', 'Élevée — direct, tout horaire', 'Limité aux corridors et horaires ferroviaires/bus'],
          ['Capacité bagages', 'Élevée — idéal avec cadeaux typiques des visites familiales', 'Limitée, surtout en bus'],
          ['Atteindre petites villes/villages', 'Direct', 'Nécessite souvent un transfert taxi'],
          ['Coût pour une famille de 4+', 'Souvent comparable ou moins cher que 4 billets train/bus par trajet', 'Le prix par personne s\'accumule vite pour les familles'],
        ],
      },
    },
  ],
  faqs: [
    { question: 'Y a-t-il un vol direct du Canada vers le Maroc ?', answer: 'Oui — deux routes directes. Montréal (YUL) vers Casablanca fonctionne depuis 1975, maintenant deux fois par jour sur Royal Air Maroc. Toronto (YYZ) vers Casablanca a été lancée en décembre 2024, trois fois par semaine sur un Boeing 787 Dreamliner.' },
    { question: 'Combien coûte un vol du Canada vers Casablanca ?', answer: 'Les tarifs aller-retour depuis Montréal tournent généralement autour de 550-950 CAD ; depuis Toronto, 800-1 300 CAD sur la route directe. Mars est généralement le mois le moins cher. Les voyages familiaux (groupe de quatre) budgètent souvent 1 500-2 000€ au total pour les vols aller-retour en haute saison.' },
    { question: 'Dois-je atterrir à Casablanca ou Rabat depuis le Canada ?', answer: 'Casablanca (CMN) est le principal hub international du Maroc et reçoit la grande majorité des vols directs depuis Montréal et Toronto. Rabat-Salé (RBA) est une véritable alternative si votre famille ou itinéraire est basé près de la capitale.' },
    { question: 'Dois-je louer une voiture au Maroc si je rends visite à ma famille ?', answer: 'Pour la plupart des visites familiales multi-villes, oui. Le réseau ferroviaire marocain couvre le corridor nord-central principal mais n\'atteint pas le Sahara, les cols de l\'Atlas, ou de nombreuses petites villes.' },
    { question: 'Qu\'est-ce que l\'Opération Marhaba ?', answer: 'L\'Opération Marhaba est le programme annuel coordonné du Maroc gérant l\'afflux estival de la diaspora marocaine (MRE) rentrant au pays — en 2026 il a enregistré 2,74 millions d\'arrivées de la diaspora, plus de 52% entrant par mer via les ferries européens.' },
  ],
  peopleAlsoAsk: [
    { question: 'Pourquoi tant de Marocains au Canada volent-ils via Montréal ?', answer: 'Montréal a les connexions les plus fortes du Canada vers le Maroc, en grande partie grâce à la grande communauté marocaine établie du Québec et la langue française partagée, plus la route historique Montréal-Casablanca opérant depuis 1975.' },
    { question: 'Combien de temps dure le vol de Toronto à Casablanca ?', answer: 'Le vol direct Royal Air Maroc prend environ 7h30. Les vols avec escale via les hubs européens prennent généralement 11-13 heures, mais sont parfois moins chers que la route directe.' },
    { question: 'Quel pourcentage des visiteurs du Maroc vient de la diaspora ?', answer: 'Environ 49% des visiteurs annuels du Maroc sont des MRE (Marocains résidents à l\'étranger) revenant pour des visites familiales, mariages et démarches administratives.' },
  ],
  relatedDestinations: ['casablanca', 'rabat'],
  relatedPosts: ['guide-aeroport-casablanca-cmn', 'location-voiture-aeroport-rabat-rba', 'guide-voyage-casablanca', 'guide-voyage-rabat', 'vols-low-cost-maroc-2026'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'رحلة كندا الدار البيضاء 2026: مونتريال وتورونتو + تأجير السيارات',
  metaDescription: 'رحلات مباشرة من كندا للدار البيضاء: مونتريال (منذ 1975، رحلتان يومياً) وتورونتو (مسار جديد 2024، 3 مرات أسبوعياً). أسعار حقيقية 2026، وكيفية استئجار سيارة بمطار CMN أو الرباط.',
  title: 'رحلة كندا الدار البيضاء 2026: مسارات مونتريال وتورونتو المباشرة، الأسعار ودليل تأجير السيارات',
  description: 'إجابة سريعة: كندا لديها مساران مباشران للمغرب — مونتريال (YUL) للدار البيضاء، يعمل منذ 1975 برحلتين يومياً لرايال إير ماروك، وتورونتو (YYZ) للدار البيضاء، مسار أحدث أُطلق ديسمبر 2024 يعمل 3 مرات أسبوعياً. أسعار الذهاب والإياب عادةً 550-950 دولار كندي.',
  keyword: 'رحلة كندا المغرب',
  coverImage: COVER,
  coverAlt: 'رحلات من كندا للدار البيضاء 2026 — طائرة بوينغ 787 دريملاينر لرايال إير ماروك عند البوابة',
  publishedISO: '2026-08-16',
  updatedISO: '2026-08-16',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 14,
  intro: 'إجابة سريعة: لدى كندا مساران جويان مباشران للمغرب. مونتريال (YUL) للدار البيضاء يعمل منذ 1975 — الاتصال الأقدم والأكثر ازدحاماً، تديره الآن رايال إير ماروك مرتين يومياً، بأسعار ذهاب وإياب عادةً 550-950 دولار كندي. تورونتو (YYZ) للدار البيضاء أُطلق ديسمبر 2024، ثلاث رحلات أسبوعياً على بوينغ 787 دريملاينر لرايال إير ماروك، أُضيف خصيصاً "لتلبية الطلب المتزايد من المغاربة المقيمين بكندا، خاصة بأونتاريو" وفق الرئيس التنفيذي للشركة. قرابة نصف زوار المغرب السنويين أعضاء الجالية (MRE) العائدون لزيارات عائلية وأعراس ومعاملات عقارية.',
  sections: [
    {
      heading: 'رحلات مباشرة من كندا للدار البيضاء — مونتريال مقابل تورونتو',
      paragraphs: ['مونتريال لديها الاتصال الأعمق والأكثر رسوخاً — جزئياً اللغة الفرنسية المشتركة، وجزئياً الجالية المغربية الكبيرة بكيبيك.'],
      table: {
        caption: 'رحلات مباشرة كندا للدار البيضاء 2026',
        headers: ['المسار', 'الشركة', 'التكرار', 'مدة الرحلة', 'السعر النموذجي ذهاباً وإياباً'],
        rows: [
          ['مونتريال (YUL) ← الدار البيضاء (CMN)', 'رايال إير ماروك', 'مرتان يومياً', '~7 ساعات مباشرة', '550-950$ كندي'],
          ['تورونتو (YYZ) ← الدار البيضاء (CMN)', 'رايال إير ماروك (بوينغ 787)', '3 مرات أسبوعياً', '~7:30 ساعة مباشرة', '800-1,300$ كندي'],
          ['مونتريال/تورونتو عبر أوروبا', 'إير كندا، إير فرانس، KLM، الخطوط التركية', 'يومياً، خيارات متعددة', '~11-13 ساعة مع توقف', '550-850$ كندي (غالباً أرخص)'],
        ],
      },
      callout: {
        label: '💡 إجابة مباشرة: أي مسار تحجز؟',
        body: 'إذا كنت بمونتريال أو قريباً، الرحلة المباشرة لرايال إير ماروك عادةً الخيار الأبسط. من تورونتو، قارن المسار المباشر الجديد مع خيارات التوقف عبر باريس أو أمستردام أو إسطنبول. مارس عادةً أرخص شهر للطيران.',
      },
    },
    {
      heading: 'لماذا يعود قرابة نصف زوار المغرب لبيوتهم، لا مجرد زيارة',
      paragraphs: [
        'هذا يهم لتخطيط رحلتك: أرقام زوار المغرب السنوية تشمل حصة هائلة من مسافري الجالية، لا سياح أجانب فقط. في السنوات الأخيرة، حوالي 49% من كل الزوار كانوا MRE — مغاربة مقيمين بالخارج — عائدين لزيارات عائلية وأعراس ومعاملات عقارية وإدارية. برنامج "عملية مرحبا" السنوي بالمغرب ينسق هذا التدفق الموسمي: في 2026 وحده سجل 2.74 مليون وصول للجالية، أكثر من 52% دخلوا بحراً عبر عبّارات أوروبية خصيصاً لتمكين العائلات من إحضار مركباتها.',
        'للمسافرين المقيمين بكندا الذين يطيرون بدلاً من عبّارة أوروبية، نفس المنطق ينطبق بشكل مختلف: سيارة إيجار مستلمة بالمطار تحل مشكلة المركبة دون الحاجة لشحن أو قيادة واحدة عبر محيط.',
      ],
      callout: {
        label: '📊 التكلفة الحقيقية لرحلة عائلية',
        body: 'وفق جمعيات الجالية المغربية، عائلة نموذجية من أربعة أفراد تسافر للصيف تُخطط ميزانية حوالي 1,500-2,000€ للرحلات ذهاباً وإياباً فقط.',
      },
    },
    {
      heading: 'الوصول للدار البيضاء (CMN) — تأجير السيارات والمتابعة',
      paragraphs: ['مطار محمد الخامس بالدار البيضاء البوابة الدولية الرئيسية للمغرب ونقطة وصول الغالبية العظمى من رحلات مونتريال وتورونتو.'],
      callout: {
        label: '🚗 استأجر سيارتك بمطار الدار البيضاء',
        body: 'تجنب طابور مكتب الوصول بعد رحلة عابرة للأطلسي طويلة — أكد سيارتك عبر واتساب قبل الطيران. اقتصادية من MAD 250/يوم (23€)، داشيا دوستر 4x4 من MAD 350/يوم (32€) للرحلات العائلية. راجع <a href="/blog/dalil-matar-dar-al-bayda-cmn">دليل مطار الدار البيضاء (CMN)</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
    {
      heading: 'الوصول للرباط (RBA) — بديل أهدأ',
      paragraphs: ['للمسافرين الذين عائلتهم بالرباط أو قريباً منها، مطار الرباط-سلا بديل حقيقي.'],
      callout: {
        label: '🚗 استأجر سيارتك بمطار الرباط',
        body: 'الرباط-سلا استقبل حوالي خُمس حجم مسافري الدار البيضاء بالنصف الأول من 2026. اقتصادية من MAD 250/يوم (23€). راجع <a href="/blog/dalil-matar-al-ribat-rba">دليل مطار الرباط (RBA)</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
    {
      heading: 'لماذا تستأجر سيارة بدلاً من الاعتماد على القطارات والحافلات؟',
      paragraphs: ['شبكة القطارات المغربية، بما فيها خط البراق السريع، تربط جيداً المدن الرئيسية بالممر الشمالي الأوسط — لكنها لا تصل للصحراء أو ممرات الأطلس أو معظم البلدات الساحلية أو البلدات الصغيرة حيث تعيش العائلة الممتدة غالباً.'],
      table: {
        caption: 'سيارة إيجار مقابل النقل العام لرحلة عائلية كندا-المغرب',
        headers: ['العامل', 'سيارة إيجار', 'قطار/حافلة'],
        rows: [
          ['مرونة زيارات عائلية متعددة المدن', 'عالية — مباشرة، أي جدول', 'محدودة بممرات وجداول القطار/الحافلة'],
          ['سعة الأمتعة', 'عالية — مثالية للهدايا', 'محدودة، خاصة بالحافلات'],
          ['الوصول لبلدات/قرى صغيرة', 'مباشر', 'غالباً يتطلب تحويل تاكسي'],
          ['التكلفة لعائلة من 4+', 'غالباً مماثلة أو أرخص من 4 تذاكر قطار/حافلة', 'السعر للشخص يتراكم بسرعة للعائلات'],
        ],
      },
    },
  ],
  faqs: [
    { question: 'هل توجد رحلة مباشرة من كندا للمغرب؟', answer: 'نعم — مساران مباشران. مونتريال (YUL) للدار البيضاء يعمل منذ 1975، الآن مرتان يومياً على رايال إير ماروك. تورونتو (YYZ) للدار البيضاء أُطلق ديسمبر 2024، ثلاث مرات أسبوعياً على بوينغ 787 دريملاينر.' },
    { question: 'كم تكلفة رحلة من كندا للدار البيضاء؟', answer: 'أسعار الذهاب والإياب من مونتريال عادةً 550-950 دولار كندي؛ من تورونتو 800-1,300 دولار كندي على المسار المباشر. مارس عادةً أرخص شهر.' },
    { question: 'هل أهبط بالدار البيضاء أم الرباط من كندا؟', answer: 'الدار البيضاء (CMN) المحور الدولي الرئيسي بالمغرب وتستقبل الغالبية العظمى من رحلات مونتريال وتورونتو المباشرة. الرباط-سلا (RBA) بديل حقيقي إذا كانت عائلتك أو برنامجك قرب العاصمة.' },
    { question: 'هل أحتاج استئجار سيارة بالمغرب إن كنت أزور العائلة؟', answer: 'لمعظم الزيارات العائلية متعددة المدن، نعم. شبكة القطارات المغربية تغطي الممر الشمالي الأوسط الرئيسي لكن لا تصل للصحراء أو ممرات الأطلس.' },
    { question: 'ما هي عملية مرحبا؟', answer: 'عملية مرحبا هو برنامج المغرب السنوي المنسق لإدارة تدفق الجالية المغربية الصيفي العائدة للوطن — في 2026 سجل 2.74 مليون وصول للجالية، أكثر من 52% دخلوا بحراً.' },
  ],
  peopleAlsoAsk: [
    { question: 'لماذا يطير الكثير من المغاربة بكندا عبر مونتريال؟', answer: 'مونتريال لديها أقوى اتصالات كندا بالمغرب، بفضل الجالية المغربية الراسخة الكبيرة بكيبيك واللغة الفرنسية المشتركة، بالإضافة للمسار التاريخي مونتريال-الدار البيضاء العامل منذ 1975.' },
    { question: 'كم تستغرق الرحلة من تورونتو للدار البيضاء؟', answer: 'الرحلة المباشرة لرايال إير ماروك تستغرق حوالي 7:30 ساعة. رحلات التوقف عبر المحاور الأوروبية تستغرق عادةً 11-13 ساعة.' },
    { question: 'ما نسبة زوار المغرب من الجالية؟', answer: 'حوالي 49% من زوار المغرب السنويين MRE (مغاربة مقيمون بالخارج) عائدون لزيارات عائلية وأعراس ومعاملات إدارية.' },
  ],
  relatedDestinations: ['casablanca', 'rabat'],
  relatedPosts: ['dalil-matar-dar-al-bayda-cmn', 'dalil-matar-al-ribat-rba', 'dalil-safar-dar-al-bayda', 'dalil-safar-ribat', 'rihlat-jawiya-rakhisa-ila-maghrib-2026'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);