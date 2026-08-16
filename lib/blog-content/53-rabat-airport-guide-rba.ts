import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'rabat-airport-guide-rba';
const SLUG_FR = 'location-voiture-aeroport-rabat-rba';
const SLUG_AR = 'dalil-matar-al-ribat-rba';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889929);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Rabat Airport (RBA) Car Rental 2026 — Prices, Taxi Costs & Why Fly Here',
  metaDescription: 'Complete Rabat-Sale Airport (RBA) guide 2026: car rental from MAD 234/day, taxi prices (MAD 150-200), faster immigration than Casablanca, and why 2026 is being called "Rabat\'s moment" by National Geographic.',
  title: 'Rabat Airport (RBA) Guide 2026: Car Rental, Taxi Prices & Why Landing Here Beats Casablanca',
  description: 'Quick answer: Rabat-Sale Airport (RBA) handled 1.22 million passengers in the first half of 2026, up 14.8% year-on-year — a fraction of Casablanca\'s 5.76 million, which means shorter immigration queues, faster car rental pickup, and a genuinely calmer first hour in Morocco. National Geographic named 2026 "Rabat\'s moment," and with Ryanair\'s new dedicated base bringing direct routes from France, Spain, Poland and Sweden, RBA has stopped being a secondary option. This guide covers real car rental prices, every transport option, and why our team increasingly recommends this airport over Casablanca for capital and north-Morocco itineraries.',
  keyword: 'rabat airport car rental',
  coverImage: COVER,
  coverAlt: 'Rabat Airport RBA guide 2026 — modern terminal building at Rabat-Sale International Airport with car rental counters',
  publishedISO: '2026-08-15',
  updatedISO: '2026-08-15',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 13,
  intro: 'Quick answer: Rabat-Sale Airport (RBA) is Morocco\'s fifth-busiest airport, but its smaller size is precisely its appeal — 1.22 million passengers in the first half of 2026 compared to Casablanca\'s 5.76 million means immigration typically clears faster, the single terminal is easy to navigate without signage confusion, and car rental pickup avoids the counter queues that build up at CMN during peak hours. National Geographic named 2026 "Rabat\'s moment," and the airport itself is expanding as part of Morocco\'s $4 billion airport investment program, with a new terminal targeting completion ahead of the 2030 World Cup. Here is everything practical about arriving here — real car rental prices, transport options, and the honest case for choosing RBA over Casablanca.',
  sections: [
    {
      heading: 'Rabat-Sale Airport (RBA) Quick Facts 2026',
      paragraphs: ['Everything you need to know before you land.'],
      table: {
        caption: 'Rabat-Sale Airport (RBA) essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['IATA / ICAO code', 'RBA / GMME'],
          ['Passengers H1 2026', '1.22 million, up 14.8% year-on-year — Morocco\'s 5th busiest airport'],
          ['Location', '~8 km northeast of Rabat city centre, in Salé'],
          ['Terminal', 'Single modern terminal, two levels (arrivals ground floor, departures upper)'],
          ['Destinations served', '34 destinations across 11 countries'],
          ['Main source markets', 'France, Spain, Belgium, Germany, UK — plus new 2026 routes to Poland and Sweden'],
          ['Airlines', 'Ryanair (new dedicated base, April 2026), Air France, easyJet, Air Arabia, Royal Air Maroc'],
          ['Expansion', 'New terminal under construction, targeting 4 million annual capacity ahead of the 2030 World Cup'],
          ['Immigration speed', 'Typically faster than Casablanca or Marrakech — smaller passenger volume, fewer queues'],
          ['Car rental from RBA', 'From MAD 234/day (€22) — MoroccoForYou Cars partner agency'],
        ],
      },
    },
    {
      heading: 'Why Fly Into Rabat Instead of Casablanca?',
      paragraphs: [
        'This is the question we increasingly hear from clients planning capital or north-Morocco itineraries, and the honest answer is: it depends on your route, but RBA has genuine, measurable advantages worth knowing.',
      ],
      table: {
        caption: 'Rabat-Salé vs Casablanca airport — honest comparison 2026',
        headers: ['Factor', 'Rabat-Salé (RBA)', 'Casablanca (CMN)'],
        rows: [
          ['H1 2026 passenger volume', '1.22 million', '5.76 million'],
          ['Immigration wait', 'Typically fast — smaller crowds', 'Can be long during peak season (July-August, December)'],
          ['Terminal navigation', 'Single compact terminal, hard to get lost', 'Larger, more complex, requires more transfer time'],
          ['Car rental queue', 'Short — fewer agencies but fewer travelers competing for them', 'Can be long at peak arrival banks'],
          ['International route network', 'Growing fast (+14.8% YoY) — 34 destinations, 11 countries', 'Morocco\'s largest — most European and intercontinental routes'],
          ['Best for', 'Rabat-based trips, north Morocco loops, travelers prioritizing a calm arrival', 'Multi-region road trips, widest onward flight/rail connections'],
        ],
      },
      callout: {
        label: '📍 National Geographic Called It: "2026 Is Rabat\'s Moment"',
        body: 'Rabat is also 2026\'s UNESCO World Book Capital (from April 23), adding cultural programming and international visibility on top of its aviation growth. Combined with faster immigration and a more manageable terminal, more travelers are choosing to start their Morocco trip here rather than treating Rabat as a Casablanca-adjacent afterthought.',
      },
    },
    {
      heading: 'Getting from RBA to Rabat City Centre — All Options',
      paragraphs: [
        'RBA has no direct train or tram link — every ground option runs through the airport road into Salé and across to Rabat.',
      ],
      table: {
        caption: 'RBA to Rabat city centre — transport options 2026',
        headers: ['Option', 'Price', 'Time', 'Notes'],
        rows: [
          ['Taxi (day)', 'MAD 150 (€14)', '15-25 min', 'Fixed rate, agree fare before luggage goes in — no meter used'],
          ['Taxi (night)', 'MAD 200 (€19)', '15-25 min', 'Higher night rate is standard, legal practice'],
          ['Airport shuttle bus', 'MAD 25 (€2.40)', '30-40 min', 'Connects to Rabat-Ville and Rabat-Agdal (TGV/Al Boraq) train stations'],
          ['Pre-booked private transfer', '€14-25', '~20 min', 'Guaranteed driver waiting, fixed price, no negotiation'],
          ['Rental car (pre-arranged)', 'From MAD 234/day (€22)', 'Drive yourself', 'Skip taxi negotiation entirely — car ready at arrivals'],
        ],
      },
    },
    {
      heading: 'Car Rental at Rabat-Sale Airport — Real 2026 Prices',
      paragraphs: [
        'RBA\'s compact size means fewer competing rental counters but also shorter queues — a genuine advantage during peak arrival times when Casablanca\'s counters back up.',
      ],
      table: {
        caption: 'Car rental prices at Rabat-Sale Airport 2026',
        headers: ['Category', 'Example', 'Price/day'],
        rows: [
          ['Small/economy', 'Dacia Sandero or similar', 'MAD 234-400 (€22-37)'],
          ['SUV', 'Various models', 'MAD 583+ (€54+)'],
          ['People carrier/van', 'Various models', 'MAD 511+ (€47+)'],
        ],
      },
      callout: {
        label: '🚗 Skip the Counter — Pre-Book with Free Meet & Greet',
        body: 'Confirm your car by WhatsApp before you fly, and it\'s waiting at arrivals when you land — no queue, no counter negotiation. Economy from MAD 250/day (€23), Dacia Duster 4x4 from MAD 350/day (€32) if you\'re continuing toward Chefchaouen or the Middle Atlas. Message us to confirm: +212 634 276 534',
      },
    },
    {
      heading: 'Where to Go from RBA',
      paragraphs: [
        'RBA\'s central-north position makes it a genuinely efficient launch point, particularly for capital-focused or north Morocco itineraries.',
      ],
      table: {
        caption: 'Driving from Rabat-Sale Airport — key destinations 2026',
        headers: ['Destination', 'Distance', 'Drive time'],
        rows: [
          ['Rabat city centre', '8 km', '15-25 min'],
          ['Casablanca (CMN)', '~112-120 km', '1h05-1h20'],
          ['Chefchaouen', '~280 km', '3h30-4h'],
          ['Fes', '~200 km', '2h15-2h30'],
          ['Tangier', '~250 km', '2h30-3h'],
        ],
      },
      callout: {
        label: '🗺️ Full Rabat Guide',
        body: 'For everything to see once you land — the Kasbah des Oudayas, Hassan Tower, and Chellah Necropolis — see our complete <a href="/blog/rabat-travel-guide">Rabat Travel Guide</a>.',
      },
    },
    {
      heading: 'Which Countries Fly Direct to Rabat?',
      paragraphs: [
        'Europe supplies the bulk of RBA\'s traffic, with France historically the dominant source market through Air France and long-standing cultural and linguistic ties, followed by Spain, Belgium, Germany, and the UK. Ryanair\'s new 2026 base has added fresh direct connections to Poland (Krakow) and Sweden (Stockholm), broadening the airport\'s reach beyond its traditional Western European base.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much is a taxi from Rabat Airport to the city centre?',
      answer: 'MAD 150 (€14) during the day and MAD 200 (€19) at night. Airport taxis do not use meters, so agree the fare before your luggage goes in the boot.',
    },
    {
      question: 'Is Rabat airport better than Casablanca?',
      answer: 'It depends on your itinerary, but RBA offers genuine advantages: faster immigration due to lower passenger volume (1.22 million vs Casablanca\'s 5.76 million in H1 2026), a simpler single terminal, and shorter car rental queues. Casablanca remains better for the widest onward flight connections and multi-region road trips.',
    },
    {
      question: 'Can I rent a car at Rabat Airport?',
      answer: 'Yes — RBA has on-site car rental from MAD 234/day. We arrange direct WhatsApp booking with a trusted local partner for free meet & greet at arrivals, avoiding counter queues entirely.',
    },
    {
      question: 'Which airlines fly to Rabat-Sale Airport?',
      answer: 'Ryanair (which opened a dedicated base here in April 2026), Air France, easyJet, Air Arabia, and Royal Air Maroc, serving 34 destinations across 11 countries, with France, Spain, Belgium, Germany and the UK as the main source markets.',
    },
    {
      question: 'Why is 2026 being called "Rabat\'s moment"?',
      answer: 'National Geographic named 2026 Rabat\'s year, citing rising visitor numbers, Rabat\'s status as 2026 UNESCO World Book Capital (from April 23), and the airport\'s rapid passenger growth (+14.8% year-on-year in H1 2026) as the city moves from a Casablanca-adjacent stopover to a destination in its own right.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is immigration faster at Rabat airport?', answer: 'Generally yes — with roughly a fifth of Casablanca\'s passenger volume (1.22 million vs 5.76 million in H1 2026), Rabat-Sale typically has shorter immigration queues, particularly outside peak summer months.' },
    { question: 'How far is Rabat airport from the city?', answer: 'Approximately 8 km northeast of central Rabat, in Salé — a 15-25 minute taxi or transfer.' },
    { question: 'Does Ryanair fly to Rabat?', answer: 'Yes — Ryanair opened a dedicated base at Rabat-Sale Airport in April 2026 with two based aircraft, adding new direct routes including Stockholm and Krakow.' },
  ],
  relatedDestinations: ['casablanca', 'chefchaouen'],
  relatedPosts: ['rabat-travel-guide', 'low-cost-flights-to-morocco-2026', 'casablanca-airport-guide-cmn', 'chefchaouen-travel-guide'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Location Voiture Aéroport Rabat 2026 — Prix, Taxi et Pourquoi Choisir RBA',
  metaDescription: 'Guide complet aéroport Rabat-Salé (RBA) 2026 : location voiture dès MAD 234/jour, prix taxi (MAD 150-200), immigration plus rapide qu\'à Casablanca, et pourquoi National Geographic appelle 2026 "le moment de Rabat".',
  title: 'Aéroport de Rabat (RBA) 2026 : Location Voiture, Prix Taxi et Pourquoi Atterrir Ici Plutôt qu\'à Casablanca',
  description: 'Réponse rapide : l\'aéroport de Rabat-Salé (RBA) a accueilli 1,22 million de passagers au premier semestre 2026, en hausse de 14,8% sur un an — une fraction des 5,76 millions de Casablanca, ce qui signifie des files d\'immigration plus courtes, une récupération de voiture de location plus rapide, et une première heure au Maroc réellement plus calme. National Geographic a désigné 2026 "le moment de Rabat", et avec la nouvelle base dédiée de Ryanair apportant des liaisons directes depuis la France, l\'Espagne, la Pologne et la Suède, RBA n\'est plus une option secondaire.',
  keyword: 'location voiture aéroport rabat',
  coverImage: COVER,
  coverAlt: 'Guide aéroport Rabat RBA 2026 — bâtiment terminal moderne à l\'aéroport international de Rabat-Salé avec comptoirs de location de voiture',
  publishedISO: '2026-08-15',
  updatedISO: '2026-08-15',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 13,
  intro: 'Réponse rapide : l\'aéroport de Rabat-Salé (RBA) est le cinquième aéroport du Maroc en fréquentation, mais sa taille plus modeste est précisément son atout — 1,22 million de passagers au premier semestre 2026 contre 5,76 millions pour Casablanca signifie que l\'immigration se dégage généralement plus vite, le terminal unique se navigue sans confusion de signalétique, et la récupération de voiture de location évite les files qui s\'accumulent à CMN aux heures de pointe. National Geographic a désigné 2026 "le moment de Rabat", et l\'aéroport lui-même s\'agrandit dans le cadre du programme d\'investissement aéroportuaire de 4 milliards de dollars du Maroc, avec un nouveau terminal visant une finition avant la Coupe du Monde 2030. Voici tout ce qu\'il faut savoir pour arriver ici — vrais prix de location voiture, options de transport, et le plaidoyer honnête pour choisir RBA plutôt que Casablanca.',
  sections: [
    {
      heading: 'Aéroport de Rabat-Salé (RBA) — Infos Essentielles 2026',
      paragraphs: ['Tout ce qu\'il faut savoir avant d\'atterrir.'],
      table: {
        caption: 'Infos essentielles aéroport Rabat-Salé (RBA) 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Code IATA / OACI', 'RBA / GMME'],
          ['Passagers S1 2026', '1,22 million, +14,8% sur un an — 5e aéroport du Maroc'],
          ['Localisation', '~8 km au nord-est du centre de Rabat, à Salé'],
          ['Terminal', 'Terminal unique moderne, deux niveaux'],
          ['Destinations desservies', '34 destinations dans 11 pays'],
          ['Principaux marchés source', 'France, Espagne, Belgique, Allemagne, Royaume-Uni — plus nouvelles routes 2026 vers la Pologne et la Suède'],
          ['Compagnies aériennes', 'Ryanair (nouvelle base dédiée, avril 2026), Air France, easyJet, Air Arabia, Royal Air Maroc'],
          ['Expansion', 'Nouveau terminal en construction, visant 4 millions de passagers annuels avant la Coupe du Monde 2030'],
          ['Vitesse immigration', 'Généralement plus rapide qu\'à Casablanca ou Marrakech'],
          ['Location voiture depuis RBA', 'Dès MAD 234/jour (22€) — agence partenaire MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'Pourquoi Atterrir à Rabat Plutôt qu\'à Casablanca ?',
      paragraphs: [
        'C\'est la question que nous entendons de plus en plus de la part de clients planifiant des itinéraires axés sur la capitale ou le nord du Maroc, et la réponse honnête est : cela dépend de votre itinéraire, mais RBA a de vrais avantages mesurables à connaître.',
      ],
      table: {
        caption: 'Rabat-Salé vs aéroport de Casablanca — comparaison honnête 2026',
        headers: ['Facteur', 'Rabat-Salé (RBA)', 'Casablanca (CMN)'],
        rows: [
          ['Volume passagers S1 2026', '1,22 million', '5,76 millions'],
          ['Attente immigration', 'Généralement rapide — moins de foule', 'Peut être longue en haute saison (juillet-août, décembre)'],
          ['Navigation terminal', 'Terminal unique compact, difficile de se perdre', 'Plus grand, plus complexe'],
          ['File location voiture', 'Courte — moins d\'agences mais moins de concurrence', 'Peut être longue aux heures d\'arrivée de pointe'],
          ['Réseau de routes internationales', 'Croissance rapide (+14,8% sur un an) — 34 destinations', 'Le plus grand du Maroc'],
          ['Idéal pour', 'Séjours basés à Rabat, boucles nord Maroc, arrivée calme', 'Road trips multi-régions, connexions les plus larges'],
        ],
      },
      callout: {
        label: '📍 National Geographic l\'a Dit : "2026 Est le Moment de Rabat"',
        body: 'Rabat est aussi Capitale Mondiale du Livre UNESCO 2026 (à partir du 23 avril), ajoutant une programmation culturelle et une visibilité internationale à sa croissance aéronautique. Combiné à une immigration plus rapide et un terminal plus gérable, de plus en plus de voyageurs choisissent de commencer leur voyage marocain ici.',
      },
    },
    {
      heading: 'Rejoindre le Centre de Rabat depuis RBA — Toutes les Options',
      paragraphs: ['RBA n\'a pas de liaison train ou tram directe.'],
      table: {
        caption: 'RBA au centre de Rabat — options de transport 2026',
        headers: ['Option', 'Prix', 'Durée', 'Notes'],
        rows: [
          ['Taxi (jour)', 'MAD 150 (14€)', '15-25 min', 'Tarif fixe, convenez du prix avant que les bagages entrent — pas de compteur'],
          ['Taxi (nuit)', 'MAD 200 (19€)', '15-25 min', 'Tarif de nuit plus élevé, pratique standard et légale'],
          ['Navette aéroport', 'MAD 25 (2,40€)', '30-40 min', 'Relie les gares Rabat-Ville et Rabat-Agdal (TGV/Al Boraq)'],
          ['Transfert privé pré-réservé', '14-25€', '~20 min', 'Chauffeur garanti, prix fixe, sans négociation'],
          ['Voiture de location (pré-arrangée)', 'Dès MAD 234/jour (22€)', 'Conduisez vous-même', 'Évitez complètement la négociation taxi'],
        ],
      },
    },
    {
      heading: 'Location Voiture à l\'Aéroport de Rabat-Salé — Vrais Prix 2026',
      paragraphs: ['La taille compacte de RBA signifie moins de comptoirs de location concurrents mais aussi des files plus courtes.'],
      table: {
        caption: 'Prix location voiture aéroport Rabat-Salé 2026',
        headers: ['Catégorie', 'Exemple', 'Prix/jour'],
        rows: [
          ['Petite/économique', 'Dacia Sandero ou similaire', 'MAD 234-400 (22-37€)'],
          ['SUV', 'Divers modèles', 'MAD 583+ (54€+)'],
          ['Monospace/van', 'Divers modèles', 'MAD 511+ (47€+)'],
        ],
      },
      callout: {
        label: '🚗 Évitez le Comptoir — Réservez avec Accueil Gratuit',
        body: 'Confirmez votre voiture par WhatsApp avant de voler, et elle vous attend à l\'arrivée — sans file, sans négociation comptoir. Économique dès MAD 250/jour (23€), Dacia Duster 4x4 dès MAD 350/jour (32€) si vous continuez vers Chefchaouen ou le Moyen Atlas. Contactez-nous : +212 634 276 534',
      },
    },
    {
      heading: 'Où Aller depuis RBA',
      paragraphs: ['La position centre-nord de RBA en fait un point de départ vraiment efficace.'],
      table: {
        caption: 'Conduire depuis l\'aéroport de Rabat-Salé — destinations clés 2026',
        headers: ['Destination', 'Distance', 'Temps de conduite'],
        rows: [
          ['Centre de Rabat', '8 km', '15-25 min'],
          ['Casablanca (CMN)', '~112-120 km', '1h05-1h20'],
          ['Chefchaouen', '~280 km', '3h30-4h'],
          ['Fès', '~200 km', '2h15-2h30'],
          ['Tanger', '~250 km', '2h30-3h'],
        ],
      },
      callout: {
        label: '🗺️ Guide Complet de Rabat',
        body: 'Pour tout voir une fois arrivé — la Kasbah des Oudayas, la Tour Hassan, la Nécropole de Chellah — voir notre <a href="/blog/guide-voyage-rabat">Guide Voyage Rabat</a> complet.',
      },
    },
    {
      heading: 'Quels Pays Volent Directement vers Rabat ?',
      paragraphs: [
        'L\'Europe fournit l\'essentiel du trafic de RBA, la France étant historiquement le marché source dominant grâce à Air France et aux liens culturels et linguistiques anciens, suivie par l\'Espagne, la Belgique, l\'Allemagne et le Royaume-Uni. La nouvelle base 2026 de Ryanair a ajouté de nouvelles liaisons directes vers la Pologne (Cracovie) et la Suède (Stockholm).',
      ],
    },
  ],
  faqs: [
    { question: 'Combien coûte un taxi de l\'aéroport de Rabat au centre-ville ?', answer: 'MAD 150 (14€) le jour et MAD 200 (19€) la nuit. Les taxis n\'utilisent pas de compteur, convenez du prix avant que les bagages entrent dans le coffre.' },
    { question: 'L\'aéroport de Rabat est-il meilleur que Casablanca ?', answer: 'Cela dépend de votre itinéraire, mais RBA offre de vrais avantages : immigration plus rapide grâce à un volume de passagers plus faible (1,22 million contre 5,76 millions pour Casablanca au S1 2026), un terminal unique plus simple, et des files de location voiture plus courtes.' },
    { question: 'Puis-je louer une voiture à l\'aéroport de Rabat ?', answer: 'Oui — RBA a une location voiture sur place dès MAD 234/jour. Nous organisons une réservation directe par WhatsApp avec un partenaire local de confiance pour un accueil gratuit à l\'arrivée.' },
    { question: 'Quelles compagnies aériennes desservent l\'aéroport de Rabat-Salé ?', answer: 'Ryanair (nouvelle base dédiée depuis avril 2026), Air France, easyJet, Air Arabia et Royal Air Maroc, desservant 34 destinations dans 11 pays.' },
    { question: 'Pourquoi 2026 est-il appelé "le moment de Rabat" ?', answer: 'National Geographic a désigné 2026 comme l\'année de Rabat, citant la hausse du nombre de visiteurs, le statut de Capitale Mondiale du Livre UNESCO 2026, et la croissance rapide des passagers de l\'aéroport (+14,8% sur un an).' },
  ],
  peopleAlsoAsk: [
    { question: 'L\'immigration est-elle plus rapide à l\'aéroport de Rabat ?', answer: 'Généralement oui — avec environ un cinquième du volume de passagers de Casablanca, Rabat-Salé a généralement des files d\'immigration plus courtes.' },
    { question: 'À quelle distance est l\'aéroport de Rabat de la ville ?', answer: 'Environ 8 km au nord-est du centre de Rabat, à Salé — 15-25 minutes en taxi.' },
    { question: 'Ryanair vole-t-il vers Rabat ?', answer: 'Oui — Ryanair a ouvert une base dédiée à l\'aéroport de Rabat-Salé en avril 2026 avec deux avions basés, ajoutant de nouvelles routes directes dont Stockholm et Cracovie.' },
  ],
  relatedDestinations: ['casablanca', 'chefchaouen'],
  relatedPosts: ['guide-voyage-rabat', 'vols-low-cost-maroc-2026', 'guide-aeroport-casablanca-cmn', 'guide-voyage-chefchaouen'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'تأجير سيارات مطار الرباط سلا 2026 — الأسعار والتاكسي ولماذا تختار RBA',
  metaDescription: 'دليل شامل لمطار الرباط-سلا (RBA) 2026: تأجير سيارات من MAD 234/يوم، أسعار التاكسي (MAD 150-200)، هجرة أسرع من الدار البيضاء، ولماذا وصفت ناشيونال جيوغرافيك 2026 بـ"لحظة الرباط".',
  title: 'مطار الرباط (RBA) 2026: تأجير السيارات، أسعار التاكسي ولماذا الهبوط هنا أفضل من الدار البيضاء',
  description: 'إجابة سريعة: استقبل مطار الرباط-سلا (RBA) 1.22 مليون مسافر في النصف الأول من 2026، بزيادة 14.8% سنوياً — جزء بسيط من 5.76 مليون بالدار البيضاء، ما يعني طوابير هجرة أقصر واستلام سيارة إيجار أسرع وساعة أولى أهدأ فعلاً بالمغرب. وصفت ناشيونال جيوغرافيك 2026 بـ"لحظة الرباط".',
  keyword: 'تأجير سيارات مطار الرباط سلا',
  coverImage: COVER,
  coverAlt: 'دليل مطار الرباط RBA 2026 — مبنى الصالة الحديث بمطار الرباط-سلا الدولي مع مكاتب تأجير السيارات',
  publishedISO: '2026-08-15',
  updatedISO: '2026-08-15',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 13,
  intro: 'إجابة سريعة: مطار الرباط-سلا (RBA) خامس أكثر مطارات المغرب ازدحاماً، لكن حجمه الأصغر هو ميزته بالضبط — 1.22 مليون مسافر بالنصف الأول من 2026 مقابل 5.76 مليون بالدار البيضاء يعني أن الهجرة تتخلص عادةً أسرع، والصالة الواحدة سهلة التنقل، واستلام السيارة المؤجرة يتجنب الطوابير. وصفت ناشيونال جيوغرافيك 2026 بـ"لحظة الرباط"، ومع قاعدة رايان إير الجديدة المخصصة التي تجلب مسارات مباشرة من فرنسا وإسبانيا وبولندا والسويد، لم يعد RBA خياراً ثانوياً.',
  sections: [
    {
      heading: 'مطار الرباط-سلا (RBA) — المعلومات الأساسية 2026',
      paragraphs: ['كل ما تحتاج معرفته قبل الهبوط.'],
      table: {
        caption: 'المعلومات الأساسية لمطار الرباط-سلا (RBA) 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['رمز IATA / ICAO', 'RBA / GMME'],
          ['المسافرون النصف الأول 2026', '1.22 مليون، +14.8% سنوياً — خامس أكثر مطارات المغرب ازدحاماً'],
          ['الموقع', '~8 كم شمال شرق وسط الرباط، بسلا'],
          ['الصالة', 'صالة واحدة حديثة، طابقان'],
          ['الوجهات المخدومة', '34 وجهة عبر 11 دولة'],
          ['الأسواق المصدر الرئيسية', 'فرنسا، إسبانيا، بلجيكا، ألمانيا، بريطانيا — بالإضافة لمسارات 2026 الجديدة لبولندا والسويد'],
          ['شركات الطيران', 'رايان إير (قاعدة جديدة مخصصة، أبريل 2026)، إير فرانس، إيزي جيت، العربية للطيران، الخطوط الملكية المغربية'],
          ['التوسع', 'صالة جديدة قيد الإنشاء، تستهدف 4 ملايين مسافر سنوياً قبل كأس العالم 2030'],
          ['سرعة الهجرة', 'عادةً أسرع من الدار البيضاء أو مراكش'],
          ['تأجير سيارة من RBA', 'من MAD 234/يوم (22€) — وكالة شريكة MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'لماذا تهبط بالرباط بدلاً من الدار البيضاء؟',
      paragraphs: ['هذا السؤال الذي نسمعه أكثر فأكثر من عملاء يخططون لبرامج تركز على العاصمة أو شمال المغرب.'],
      table: {
        caption: 'الرباط-سلا مقابل مطار الدار البيضاء — مقارنة صادقة 2026',
        headers: ['العامل', 'الرباط-سلا (RBA)', 'الدار البيضاء (CMN)'],
        rows: [
          ['حجم المسافرين النصف الأول 2026', '1.22 مليون', '5.76 مليون'],
          ['انتظار الهجرة', 'عادةً سريع — حشود أقل', 'قد يطول بموسم الذروة'],
          ['التنقل بالصالة', 'صالة واحدة مدمجة، صعب الضياع', 'أكبر وأكثر تعقيداً'],
          ['طابور تأجير السيارات', 'قصير — وكالات أقل لكن منافسة أقل', 'قد يطول بأوقات الذروة'],
          ['شبكة المسارات الدولية', 'نمو سريع (+14.8% سنوياً) — 34 وجهة', 'الأكبر بالمغرب'],
          ['الأنسب لـ', 'رحلات قائمة على الرباط، حلقات شمال المغرب', 'رحلات برية متعددة المناطق'],
        ],
      },
      callout: {
        label: '📍 ناشيونال جيوغرافيك قالتها: "2026 لحظة الرباط"',
        body: 'الرباط أيضاً عاصمة الكتاب العالمية يونسكو 2026 (من 23 أبريل)، مضيفة برمجة ثقافية ورؤية دولية فوق نموها الطيراني.',
      },
    },
    {
      heading: 'التنقل من RBA لوسط الرباط — كل الخيارات',
      paragraphs: ['RBA بلا اتصال قطار أو ترامواي مباشر.'],
      table: {
        caption: 'RBA لوسط الرباط — خيارات النقل 2026',
        headers: ['الخيار', 'السعر', 'الوقت', 'ملاحظات'],
        rows: [
          ['تاكسي (نهار)', 'MAD 150 (14€)', '15-25 دقيقة', 'سعر ثابت، اتفق قبل وضع الأمتعة — بلا عداد'],
          ['تاكسي (ليل)', 'MAD 200 (19€)', '15-25 دقيقة', 'سعر ليلي أعلى، ممارسة قياسية وقانونية'],
          ['حافلة المطار', 'MAD 25 (2.40€)', '30-40 دقيقة', 'تربط بمحطتي الرباط المدينة والرباط أكدال'],
          ['نقل خاص محجوز مسبقاً', '14-25€', '~20 دقيقة', 'سائق مضمون، سعر ثابت'],
          ['سيارة إيجار (مرتبة مسبقاً)', 'من MAD 234/يوم (22€)', 'قُد بنفسك', 'تجنب مفاوضة التاكسي تماماً'],
        ],
      },
    },
    {
      heading: 'تأجير السيارات بمطار الرباط-سلا — أسعار حقيقية 2026',
      paragraphs: ['حجم RBA المدمج يعني مكاتب تأجير منافسة أقل لكن أيضاً طوابير أقصر.'],
      table: {
        caption: 'أسعار تأجير السيارات بمطار الرباط-سلا 2026',
        headers: ['الفئة', 'مثال', 'السعر/يوم'],
        rows: [
          ['صغيرة/اقتصادية', 'داشيا ساندرو أو مشابه', 'MAD 234-400 (22-37€)'],
          ['دفع رباعي', 'موديلات متنوعة', 'MAD 583+ (54€+)'],
          ['فان', 'موديلات متنوعة', 'MAD 511+ (47€+)'],
        ],
      },
      callout: {
        label: '🚗 تجنب المكتب — احجز مسبقاً مع استقبال مجاني',
        body: 'أكد سيارتك عبر واتساب قبل الطيران، وستكون بانتظارك عند الوصول — بلا طابور، بلا مفاوضة. اقتصادية من MAD 250/يوم (23€)، داشيا دوستر 4x4 من MAD 350/يوم (32€). راسلنا: +212 634 276 534',
      },
    },
    {
      heading: 'إلى أين من RBA',
      paragraphs: ['موقع RBA الأوسط الشمالي يجعله نقطة انطلاق فعالة فعلاً.'],
      table: {
        caption: 'القيادة من مطار الرباط-سلا — الوجهات الرئيسية 2026',
        headers: ['الوجهة', 'المسافة', 'وقت القيادة'],
        rows: [
          ['وسط الرباط', '8 كم', '15-25 دقيقة'],
          ['الدار البيضاء (CMN)', '~112-120 كم', '1:05-1:20 ساعة'],
          ['شفشاون', '~280 كم', '3:30-4 ساعات'],
          ['فاس', '~200 كم', '2:15-2:30 ساعة'],
          ['طنجة', '~250 كم', '2:30-3 ساعات'],
        ],
      },
      callout: {
        label: '🗺️ دليل الرباط الكامل',
        body: 'راجع <a href="/blog/dalil-safar-ribat">دليل السفر للرباط</a> الشامل لقصبة الأوداية وصومعة حسان ومقبرة شالة.',
      },
    },
    {
      heading: 'أي دول تطير مباشرة للرباط؟',
      paragraphs: [
        'أوروبا تزود معظم حركة RBA، وفرنسا تاريخياً السوق المصدر المهيمن عبر إير فرانس والروابط الثقافية واللغوية العريقة، تليها إسبانيا وبلجيكا وألمانيا وبريطانيا. قاعدة رايان إير الجديدة 2026 أضافت روابط مباشرة جديدة لبولندا (كراكوف) والسويد (ستوكهولم).',
      ],
    },
  ],
  faqs: [
    { question: 'كم تكلفة التاكسي من مطار الرباط لوسط المدينة؟', answer: 'MAD 150 (14€) نهاراً وMAD 200 (19€) ليلاً. التاكسيات بلا عداد، اتفق على السعر قبل وضع الأمتعة.' },
    { question: 'هل مطار الرباط أفضل من الدار البيضاء؟', answer: 'يعتمد على برنامجك، لكن RBA يقدم مزايا حقيقية: هجرة أسرع بفضل حجم مسافرين أقل (1.22 مليون مقابل 5.76 مليون بالدار البيضاء)، صالة واحدة أبسط، وطوابير تأجير سيارات أقصر.' },
    { question: 'هل يمكن استئجار سيارة بمطار الرباط؟', answer: 'نعم — RBA لديه تأجير سيارات موقعي من MAD 234/يوم. نرتب حجزاً مباشراً عبر واتساب مع شريك محلي موثوق لاستقبال مجاني.' },
    { question: 'أي شركات طيران تخدم مطار الرباط-سلا؟', answer: 'رايان إير (قاعدة جديدة مخصصة منذ أبريل 2026)، إير فرانس، إيزي جيت، العربية للطيران، والخطوط الملكية المغربية، تخدم 34 وجهة عبر 11 دولة.' },
    { question: 'لماذا يُسمى 2026 "لحظة الرباط"؟', answer: 'وصفت ناشيونال جيوغرافيك 2026 بعام الرباط، مستشهدة بارتفاع الزوار ووضع عاصمة الكتاب العالمية يونسكو ونمو المطار السريع (+14.8% سنوياً).' },
  ],
  peopleAlsoAsk: [
    { question: 'هل الهجرة أسرع بمطار الرباط؟', answer: 'عموماً نعم — بحوالي خُمس حجم مسافري الدار البيضاء، الرباط-سلا عادةً لديه طوابير هجرة أقصر.' },
    { question: 'كم تبعد مطار الرباط عن المدينة؟', answer: 'حوالي 8 كم شمال شرق وسط الرباط، بسلا — 15-25 دقيقة بالتاكسي.' },
    { question: 'هل رايان إير تطير للرباط؟', answer: 'نعم — فتحت رايان إير قاعدة مخصصة بمطار الرباط-سلا في أبريل 2026 بطائرتين، مضيفة مسارات مباشرة جديدة منها ستوكهولم وكراكوف.' },
  ],
  relatedDestinations: ['casablanca', 'chefchaouen'],
  relatedPosts: ['dalil-safar-ribat', 'rihlat-jawiya-rakhisa-ila-maghrib-2026', 'dalil-matar-dar-al-bayda-cmn', 'dalil-safar-shafshawan'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);