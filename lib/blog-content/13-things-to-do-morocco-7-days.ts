import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'things-to-do-in-morocco-7-days';
const SLUG_FR = 'que-faire-au-maroc-7-jours';
const SLUG_AR = 'ma-tafal-fi-al-maghrib-7-ayam';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889843);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Things to Do in Morocco in 7 Days — Perfect 2026 Itinerary',
  metaDescription: 'Best things to do in Morocco in 7 days: Marrakech souks, Sahara desert, Fes medina, Chefchaouen blue streets. Day-by-day itinerary with real 2026 tips.',
  title: 'Things to Do in Morocco in 7 Days: The Perfect One-Week Itinerary (2026)',
  description: 'The best things to do in Morocco in 7 days: a day-by-day plan covering Marrakech, the Sahara, Fes and Chefchaouen with real prices and local tips.',
  keyword: 'things to do in morocco in 7 days',
  coverImage: COVER,
  coverAlt: 'Things to do in Morocco — Marrakech medina souks and Sahara dunes',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro: 'Seven days in Morocco is enough to experience the highlights without feeling rushed — if you plan smart. This itinerary skips the rookie mistakes (spending too long in Casablanca, missing the Sahara because it looks far on the map) and focuses on the experiences that make Morocco unforgettable: the chaos and magic of a medina at night, the silence of the Sahara at dawn, the blue streets of Chefchaouen at golden hour.',
  sections: [
    {
      heading: 'Can You See Morocco in 7 Days?',
      paragraphs: [
        'Yes — one week is enough to see the best of Morocco if you focus. You cannot do everything, so this itinerary makes a choice: Marrakech, the Sahara desert, and either Fes or Chefchaouen (not both — that is a two-week trip). The result is a week that feels full but not exhausting.',
        'The key is transport: rent a car at Marrakech airport or Casablanca CMN, and you control the pace. Train and bus are fine between major cities, but the Sahara leg needs either a rental car or a guided tour from Marrakech.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'The Marrakech–Sahara–Marrakech loop is 1,100 km of driving over 3 days — doable but tiring. Many visitors prefer a 2-day guided tour from Marrakech to the desert (driver included), then explore Marrakech and Chefchaouen independently. MoroccoForYou can arrange both options on WhatsApp.',
      },
    },
    {
      heading: '7 Days in Morocco — Day by Day',
      paragraphs: [
        'This itinerary starts and ends in Marrakech — the most common entry point for international flights. It focuses on the classic trio: Marrakech, the Sahara, and Chefchaouen.',
      ],
      table: {
        caption: '7-day Morocco itinerary overview',
        headers: ['Day', 'Location', 'Top things to do', 'Transport'],
        rows: [
          ['Day 1', 'Marrakech', 'Jemaa el-Fnaa at sunset, medina walk, rooftop dinner', 'Arrive RAK airport'],
          ['Day 2', 'Marrakech', 'Bahia Palace, Majorelle Garden, souks, hammam', 'On foot + petit taxi'],
          ['Day 3', 'Sahara drive', 'Ait Ben Haddou, Ouarzazate Atlas Studios, drive to desert', 'Car or guided tour'],
          ['Day 4', 'Merzouga Sahara', 'Erg Chebbi dunes, camel trek, desert camp overnight', 'Car or guided tour'],
          ['Day 5', 'Fes', 'Fes medina, tanneries, Bou Inania madrasa', 'Drive 6h or fly'],
          ['Day 6', 'Chefchaouen', 'Blue city walk, Ras el-Maa waterfall, Spanish mosque', 'Drive 3h from Fes'],
          ['Day 7', 'Marrakech', 'Return via Meknes or direct flight, final souk shopping', 'Drive or fly'],
        ],
      },
    },
    {
      heading: 'Day 1–2: Marrakech — Where Morocco Begins',
      paragraphs: [
        'Land in Marrakech, drop your bags at your riad, and walk straight to Jemaa el-Fnaa square before sunset. This is the best first hour in Morocco: storytellers, acrobats, snake charmers, and the smell of grilled meat all hitting at once. Eat at one of the food stalls (pick one where locals are eating, not the ones with touts at the front — stalls 1 and 2 from the left side are consistently good).',
        'Day two: Bahia Palace (free, genuinely beautiful), Majorelle Garden (200 MAD, worth it for the YSL Museum), then the souks in the afternoon. The spice souk, the leather souk, and the lamp souk are all within 10 minutes of Jemaa el-Fnaa. End the day at a hammam — ask your riad to book one. Hammam de la Rose (200 MAD) or Les Bains de Marrakech (350 MAD) are both excellent for tourists.',
      ],
    },
    {
      heading: 'Day 3–4: The Sahara Desert — The Highlight of Any Morocco Trip',
      paragraphs: [
        'Leave Marrakech early on day 3 and drive south over the Tizi n\'Tichka mountain pass (2,260m) — one of the most dramatic drives in Africa. Stop at Ait Ben Haddou, the UNESCO-listed kasbah used in Game of Thrones, Lawrence of Arabia, and Gladiator (entry 30 MAD). Lunch in Ouarzazate, then continue east to Merzouga, arriving around sunset.',
        'Day 4 is the Sahara. Ride a camel to your desert camp (30–45 minutes), watch the sun set over the Erg Chebbi dunes (150m high, deep orange-red at sunset), eat dinner under the stars, and sleep in a Berber tent. Wake before dawn for sunrise — the dunes turn gold and the silence is absolute. Budget 800–1,500 MAD per person for a quality camp with dinner and breakfast.',
      ],
      callout: {
        label: '💡 Desert Camp Tip',
        body: 'Book a mid-range camp rather than the cheapest option. The difference between a 400 MAD camp and an 800 MAD camp is dramatic: proper beds vs foam mats, real Moroccan dinner vs packaged food, and a private tent vs dormitory. MoroccoForYou can recommend vetted camps for every budget — ask on WhatsApp.',
      },
    },
    {
      heading: 'Day 5: Fes — Morocco\'s Most Intense Medina',
      paragraphs: [
        'Drive or fly to Fes from Merzouga (flying is faster — Royal Air Maroc has the route). Fes el-Bali is the world\'s largest living medieval city and the most disorienting place in Morocco in the best possible way. Book a licensed guide for your first three hours (250–350 MAD) — the tanneries, Bou Inania madrasa, and brass souk make much more sense with context. After the guided section, explore alone.',
        'Stay one night in a riad inside the medina. Dinner on a rooftop terrace overlooking the old city is the best meal of the week.',
      ],
    },
    {
      heading: 'Day 6: Chefchaouen — The Blue City',
      paragraphs: [
        'Drive three hours west from Fes into the Rif Mountains to reach Chefchaouen, Morocco\'s most photogenic town. Every alley is painted blue — the effect is genuinely otherworldly. Walk the medina for two hours, climb to the Spanish Mosque above the city for the panorama, and visit Ras el-Maa waterfall at the edge of the medina. Arrive before 10am or after 4pm to avoid tour group crowds.',
        'One night here is enough for a 7-day trip. The medina is small and walkable — you can see everything in an afternoon and evening.',
      ],
    },
    {
      heading: 'Best Things to Do in Morocco — By Category',
      paragraphs: [
        'If your 7 days allow flexibility, here are the best experiences by category to help you prioritise.',
      ],
      table: {
        caption: 'Best things to do in Morocco by category',
        headers: ['Category', 'Best experience', 'Location', 'Budget'],
        rows: [
          ['Desert', 'Erg Chebbi camel trek + overnight camp', 'Merzouga', '800–1,500 MAD/person'],
          ['Culture', 'Fes medina guided tour', 'Fes', '250–350 MAD (guide)'],
          ['Photography', 'Chefchaouen blue medina at dawn', 'Chefchaouen', 'Free'],
          ['Food', 'Jemaa el-Fnaa food stalls at night', 'Marrakech', '50–100 MAD'],
          ['Wellness', 'Traditional hammam scrub', 'Marrakech or Fes', '100–350 MAD'],
          ['History', 'Ait Ben Haddou kasbah', 'Near Ouarzazate', '30 MAD entry'],
          ['Nature', 'Tizi n\'Tichka mountain pass drive', 'Atlas Mountains', 'Free (fuel only)'],
          ['Shopping', 'Marrakech leather souk + spice souk', 'Marrakech', 'Variable'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'What are the best things to do in Morocco in 7 days?',
      answer: 'Marrakech medina and Jemaa el-Fnaa, the Sahara desert at Merzouga, Ait Ben Haddou kasbah, Fes medina with a guide, and Chefchaouen blue city. These five experiences cover the best of Morocco in one week.',
    },
    {
      question: 'Is 7 days enough for Morocco?',
      answer: 'Yes — one week is enough to see the highlights if you plan efficiently. You can do Marrakech, the Sahara, and either Fes or Chefchaouen comfortably in 7 days.',
    },
    {
      question: 'How do I get to the Sahara desert from Marrakech in 7 days?',
      answer: 'Drive over the Tizi n\'Tichka pass (3 hours to Ouarzazate, then 3 more hours to Merzouga). Or book a 2-day guided tour from Marrakech with a private driver — MoroccoForYou can arrange this on WhatsApp.',
    },
    {
      question: 'Should I rent a car for 7 days in Morocco?',
      answer: 'Yes for maximum flexibility. Rent at Marrakech or Casablanca Airport CMN from €29/day with MoroccoForYou Cars. A car makes the Sahara loop much more flexible than a guided tour.',
    },
    {
      question: 'What is the best time of year to visit Morocco for 7 days?',
      answer: 'March–May and September–November are ideal: pleasant temperatures in the cities and the Sahara. Avoid July–August for the desert — temperatures exceed 45°C at midday.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I see Marrakech and the Sahara in 7 days?', answer: 'Yes — this is the classic 7-day Morocco itinerary. Two days in Marrakech, two days for the Sahara loop, one day in Fes, one in Chefchaouen, and return.' },
    { question: 'Is Morocco safe for tourists in 2026?', answer: 'Yes — Morocco is one of the safer destinations in Africa. Standard precautions apply: use metered taxis, keep valuables safe, book accommodation in advance.' },
    { question: 'What should I pack for 7 days in Morocco?', answer: 'Lightweight layers (hot days, cool nights in the desert), comfortable walking shoes, a scarf (for mosques and sun protection), and a power bank. Pharmacies are everywhere so basics are easy to find.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga', 'casablanca'],
  relatedPosts: ['morocco-itinerary-2-weeks-first-time', 'driving-in-morocco-tips-for-tourists', 'is-morocco-safe-for-solo-female-travelers'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Que faire au Maroc en 7 jours — Itinéraire parfait 2026',
  metaDescription: 'Que faire au Maroc en 7 jours : souks de Marrakech, désert du Sahara, médina de Fès, rues bleues de Chefchaouen. Itinéraire jour par jour avec vrais conseils 2026.',
  title: 'Que faire au Maroc en 7 jours : l\'itinéraire parfait une semaine (2026)',
  description: 'Les meilleures choses à faire au Maroc en 7 jours : plan jour par jour couvrant Marrakech, le Sahara, Fès et Chefchaouen avec prix réels et conseils locaux.',
  keyword: 'que faire au maroc en 7 jours',
  coverImage: COVER,
  coverAlt: 'Que faire au Maroc — souks de Marrakech et dunes du Sahara',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro: 'Sept jours au Maroc suffisent pour vivre les moments inoubliables — si vous planifiez intelligemment. Cet itinéraire évite les erreurs classiques (passer trop de temps à Casablanca, rater le Sahara parce qu\'il paraît loin sur la carte) et se concentre sur les expériences qui font du Maroc un voyage hors du commun : le chaos magnétique d\'une médina de nuit, le silence du Sahara à l\'aube, les ruelles bleues de Chefchaouen à l\'heure dorée.',
  sections: [
    {
      heading: 'Peut-on voir le Maroc en 7 jours ?',
      paragraphs: [
        'Oui — une semaine suffit pour voir l\'essentiel du Maroc si vous vous concentrez. Vous ne pouvez pas tout faire, alors cet itinéraire fait un choix : Marrakech, le désert du Sahara, et soit Fès soit Chefchaouen (pas les deux — c\'est un voyage de deux semaines). Le résultat : une semaine qui semble riche sans être épuisante.',
        'La clé, c\'est le transport : louez une voiture à l\'aéroport de Marrakech ou à Casablanca CMN, et vous contrôlez le rythme. Train et bus conviennent entre les grandes villes, mais la boucle Sahara nécessite soit une voiture de location, soit un circuit organisé depuis Marrakech.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'La boucle Marrakech–Sahara–Marrakech représente 1 100 km de conduite sur 3 jours — faisable mais fatigant. Beaucoup de voyageurs préfèrent un circuit guidé 2 jours depuis Marrakech jusqu\'au désert (chauffeur inclus), puis explorer Marrakech et Chefchaouen en indépendant. MoroccoForYou peut organiser les deux options sur WhatsApp.',
      },
    },
    {
      heading: '7 jours au Maroc — Jour par jour',
      paragraphs: [
        'Cet itinéraire commence et se termine à Marrakech — le point d\'entrée le plus courant pour les vols internationaux. Il se concentre sur le trio classique : Marrakech, le Sahara, et Chefchaouen.',
      ],
      table: {
        caption: 'Vue d\'ensemble de l\'itinéraire 7 jours au Maroc',
        headers: ['Jour', 'Étape', 'À faire', 'Transport'],
        rows: [
          ['Jour 1', 'Marrakech', 'Jemaa el-Fna au coucher du soleil, médina, dîner en terrasse', 'Arrivée aéroport RAK'],
          ['Jour 2', 'Marrakech', 'Palais Bahia, Jardin Majorelle, souks, hammam', 'À pied + petit taxi'],
          ['Jour 3', 'Route Sahara', 'Aït Ben Haddou, Studios d\'Ouarzazate, route désert', 'Voiture ou circuit guidé'],
          ['Jour 4', 'Merzouga Sahara', 'Erg Chebbi, balade chameau, camp désert nuit', 'Voiture ou circuit guidé'],
          ['Jour 5', 'Fès', 'Médina, tanneries, medersa Bou Inania', 'Conduite 6h ou vol'],
          ['Jour 6', 'Chefchaouen', 'Ville bleue, cascade Ras el-Maa, mosquée espagnole', 'Voiture 3h depuis Fès'],
          ['Jour 7', 'Marrakech', 'Retour via Meknès ou vol direct, shopping final', 'Voiture ou vol'],
        ],
      },
    },
    {
      heading: 'Jours 1–2 : Marrakech — là où commence le Maroc',
      paragraphs: [
        'Posez vos bagages dans votre riad et marchez directement vers la place Jemaa el-Fna avant le coucher du soleil. C\'est la meilleure première heure au Maroc : conteurs, acrobates, charmeurs de serpents, et l\'odeur de la viande grillée, tout en même temps. Mangez à l\'un des stands de nourriture — choisissez ceux où mangent les locaux, pas ceux avec des rabatteurs à l\'entrée.',
        'Deuxième jour : Palais Bahia (gratuit, genuinement beau), Jardin Majorelle (200 MAD, ça vaut le Musée YSL), puis les souks l\'après-midi. Finissez par un hammam — demandez à votre riad de réserver. Hammam de la Rose (200 MAD) ou Les Bains de Marrakech (350 MAD) sont excellents pour les touristes.',
      ],
    },
    {
      heading: 'Jours 3–4 : Le Sahara — le clou du spectacle',
      paragraphs: [
        'Partez de Marrakech tôt le jour 3 et conduisez vers le sud via le col de Tizi n\'Tichka (2 260m) — l\'un des trajets les plus spectaculaires d\'Afrique. Arrêtez-vous à Aït Ben Haddou, la kasbah classée UNESCO utilisée dans Game of Thrones et Lawrence d\'Arabie (entrée 30 MAD). Déjeuner à Ouarzazate, puis continuez vers Merzouga en arrivant au coucher du soleil.',
        'Jour 4, c\'est le Sahara. Montez à dos de dromadaire jusqu\'au camp désert (30–45 min), regardez le coucher de soleil sur les dunes de l\'Erg Chebbi (150m de haut, orange-rouge profond au coucher), dînez sous les étoiles, dormez sous une tente berbère. Réveillez-vous avant l\'aube pour le lever du soleil — les dunes se teintent d\'or et le silence est absolu.',
      ],
      callout: {
        label: '💡 Conseil camp désert',
        body: 'Choisissez un camp milieu de gamme plutôt que le moins cher. La différence entre un camp à 400 MAD et un à 800 MAD est spectaculaire : vrais lits vs matelas en mousse, vrai dîner marocain vs nourriture emballée, tente privée vs dortoir. MoroccoForYou peut recommander des camps vérifiés pour chaque budget — demandez sur WhatsApp.',
      },
    },
    {
      heading: 'Jour 5 : Fès — la médina la plus intense du Maroc',
      paragraphs: [
        'Conduisez ou volez vers Fès depuis Merzouga. Fès el-Bali est la plus grande ville médiévale vivante du monde — la plus déroutante du Maroc, dans le bon sens. Réservez un guide officiel pour vos trois premières heures (250–350 MAD) — les tanneries, la medersa Bou Inania et le souk des cuivres ont beaucoup plus de sens avec du contexte.',
        'Une nuit dans un riad dans la médina. Dîner en terrasse avec vue sur la vieille ville — le meilleur repas de la semaine.',
      ],
    },
    {
      heading: 'Jour 6 : Chefchaouen — la ville bleue',
      paragraphs: [
        'Conduisez trois heures à l\'ouest de Fès dans les montagnes du Rif pour rejoindre Chefchaouen, la ville la plus photogénique du Maroc. Chaque ruelle est peinte en bleu — l\'effet est genuinement hors du monde. Parcourez la médina pendant deux heures, montez à la mosquée espagnole pour le panorama, et visitez la cascade Ras el-Maa.',
        'Une nuit ici suffit pour un voyage de 7 jours. La médina est petite et se visite à pied.',
      ],
    },
    {
      heading: 'Les meilleures choses à faire au Maroc — par catégorie',
      paragraphs: [
        'Si vos 7 jours offrent de la flexibilité, voici les meilleures expériences par catégorie pour vous aider à prioriser.',
      ],
      table: {
        caption: 'Meilleures choses à faire au Maroc par catégorie',
        headers: ['Catégorie', 'Meilleure expérience', 'Lieu', 'Budget'],
        rows: [
          ['Désert', 'Balade chameau + nuit camp Erg Chebbi', 'Merzouga', '800–1 500 MAD/pers'],
          ['Culture', 'Visite guidée médina de Fès', 'Fès', '250–350 MAD (guide)'],
          ['Photo', 'Chefchaouen bleue à l\'aube', 'Chefchaouen', 'Gratuit'],
          ['Gastronomie', 'Stands Jemaa el-Fna la nuit', 'Marrakech', '50–100 MAD'],
          ['Bien-être', 'Hammam traditionnel', 'Marrakech ou Fès', '100–350 MAD'],
          ['Histoire', 'Kasbah Aït Ben Haddou', 'Près d\'Ouarzazate', '30 MAD entrée'],
          ['Nature', 'Col de Tizi n\'Tichka en voiture', 'Atlas', 'Gratuit (carburant)'],
          ['Shopping', 'Souk du cuir + souk des épices', 'Marrakech', 'Variable'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Que faire au Maroc en 7 jours ?',
      answer: 'La médina de Marrakech et Jemaa el-Fna, le désert du Sahara à Merzouga, la kasbah Aït Ben Haddou, la médina de Fès avec un guide, et la ville bleue de Chefchaouen. Ces cinq expériences couvrent l\'essentiel du Maroc en une semaine.',
    },
    {
      question: '7 jours suffisent-ils pour le Maroc ?',
      answer: 'Oui — une semaine suffit pour voir les incontournables si vous planifiez efficacement. Vous pouvez faire Marrakech, le Sahara, et soit Fès soit Chefchaouen confortablement en 7 jours.',
    },
    {
      question: 'Comment aller au Sahara depuis Marrakech en 7 jours ?',
      answer: 'Conduisez via le col de Tizi n\'Tichka (3h jusqu\'à Ouarzazate, puis 3h jusqu\'à Merzouga). Ou réservez un circuit guidé 2 jours depuis Marrakech avec chauffeur privé — MoroccoForYou peut organiser cela sur WhatsApp.',
    },
    {
      question: 'Faut-il louer une voiture pour 7 jours au Maroc ?',
      answer: 'Oui pour une liberté maximale. Louez à l\'aéroport de Marrakech ou Casablanca CMN dès 29€/jour avec MoroccoForYou Cars. La voiture rend la boucle Sahara beaucoup plus flexible.',
    },
    {
      question: 'Quelle est la meilleure période pour visiter le Maroc 7 jours ?',
      answer: 'Mars–mai et septembre–novembre sont idéaux. Évitez juillet–août pour le désert — les températures dépassent 45°C à midi.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on voir Marrakech et le Sahara en 7 jours ?', answer: 'Oui — c\'est l\'itinéraire classique 7 jours au Maroc. Deux jours à Marrakech, deux jours pour la boucle Sahara, un jour à Fès, un à Chefchaouen, retour.' },
    { question: 'Le Maroc est-il sûr pour les touristes en 2026 ?', answer: 'Oui — le Maroc est l\'une des destinations les plus sûres d\'Afrique. Précautions habituelles : taxis avec compteur, objets de valeur en sécurité, hébergement réservé à l\'avance.' },
    { question: 'Que mettre dans sa valise pour 7 jours au Maroc ?', answer: 'Vêtements légers en couches (journées chaudes, nuits fraîches au désert), chaussures de marche confortables, foulard, et une batterie externe. Les pharmacies sont partout.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga'],
  relatedPosts: ['itineraire-maroc-2-semaines-premier-voyage', 'conduire-au-maroc-conseils-touristes', 'maroc-femme-seule-securite'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'ماذا تفعل في المغرب في 7 أيام — برنامج مثالي 2026',
  metaDescription: 'أفضل الأنشطة في المغرب في 7 أيام: أسواق مراكش، صحراء الساحرة، مدينة فاس العتيقة، شوارع شفشاون الزرقاء. برنامج يومي مع نصائح حقيقية 2026.',
  title: 'ماذا تفعل في المغرب في 7 أيام: البرنامج المثالي لأسبوع كامل (2026)',
  description: 'أفضل الأنشطة في المغرب في 7 أيام: برنامج يومي يغطي مراكش والصحراء وفاس وشفشاون مع أسعار حقيقية ونصائح محلية.',
  keyword: 'ماذا تفعل في المغرب 7 أيام',
  coverImage: COVER,
  coverAlt: 'ماذا تفعل في المغرب — أسواق مراكش وكثبان الصحراء',
  publishedISO: '2026-06-03',
  author: 'فريق MoroccoForYou',
  readingMinutes: 11,
  intro: 'سبعة أيام في المغرب كافية لتعيش أبرز التجارب دون أن تشعر بالضغط — إذا خططت بذكاء. يتجنب هذا البرنامج الأخطاء الشائعة (إضاعة الوقت في الدار البيضاء، وتفويت الصحراء لأنها تبدو بعيدة على الخريطة) ويركز على التجارب التي تجعل المغرب رحلة لا تُنسى: فوضى وسحر المدينة العتيقة ليلاً، وصمت الصحراء عند الفجر، وأزقة شفشاون الزرقاء في الضوء الذهبي.',
  sections: [
    {
      heading: 'هل يمكن رؤية المغرب في 7 أيام؟',
      paragraphs: [
        'نعم — أسبوع واحد يكفي لرؤية أفضل ما في المغرب إذا ركّزت. لا يمكنك فعل كل شيء، لذا يختار هذا البرنامج: مراكش، وصحراء الساحرة، وإما فاس أو شفشاون (ليس الاثنتين — فذلك رحلة أسبوعين). النتيجة: أسبوع يبدو ثرياً دون إرهاق.',
        'المفتاح هو التنقل: استأجر سيارة من مطار مراكش أو الدار البيضاء CMN وأنت تتحكم في الإيقاع. القطار والحافلة مناسبان بين المدن الكبيرة، لكن رحلة الصحراء تحتاج إما سيارة مستأجرة أو جولة منظمة من مراكش.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'حلقة مراكش–الصحراء–مراكش تعني 1100 كم من القيادة على 3 أيام — ممكنة لكن مرهقة. كثير من الزوار يفضلون جولة منظمة يومين من مراكش إلى الصحراء (مع سائق)، ثم استكشاف مراكش وشفشاون باستقلالية. MoroccoForYou تستطيع ترتيب كلا الخيارين عبر واتساب.',
      },
    },
    {
      heading: '7 أيام في المغرب — يوم بيوم',
      paragraphs: [
        'يبدأ هذا البرنامج وينتهي في مراكش — نقطة الدخول الأكثر شيوعاً للرحلات الدولية. يركز على الثلاثي الكلاسيكي: مراكش، والصحراء، وشفشاون.',
      ],
      table: {
        caption: 'نظرة عامة على برنامج 7 أيام في المغرب',
        headers: ['اليوم', 'الوجهة', 'أبرز الأنشطة', 'التنقل'],
        rows: [
          ['اليوم 1', 'مراكش', 'جامع الفنا عند الغروب، جولة المدينة، عشاء على السطح', 'وصول مطار RAK'],
          ['اليوم 2', 'مراكش', 'قصر البهية، حديقة ماجوريل، الأسواق، الحمّام', 'سيراً + سيارة أجرة'],
          ['اليوم 3', 'طريق الصحراء', 'أيت بن حدو، استوديوهات ورزازات، طريق الصحراء', 'سيارة أو جولة منظمة'],
          ['اليوم 4', 'مرزوقة الصحراء', 'كثبان إرق الشبي، جمال، مخيم صحراوي', 'سيارة أو جولة منظمة'],
          ['اليوم 5', 'فاس', 'المدينة العتيقة، المدابغ، مدرسة بو عنانية', 'قيادة 6 ساعات أو طيران'],
          ['اليوم 6', 'شفشاون', 'المدينة الزرقاء، شلال رأس الماء، المسجد الإسباني', 'سيارة 3 ساعات من فاس'],
          ['اليوم 7', 'مراكش', 'العودة عبر مكناس أو رحلة مباشرة، تسوق أخير', 'سيارة أو طيران'],
        ],
      },
    },
    {
      heading: 'الأيام 1–2: مراكش — حيث يبدأ المغرب',
      paragraphs: [
        'ضع حقائبك في الرياض وتوجّه مباشرة إلى ساحة جامع الفنا قبيل الغروب. هذه أفضل ساعة أولى في المغرب: قصّاصو الحكايات، والبهلوانيون، ومروّضو الأفاعي، ورائحة اللحم المشوي، كل ذلك في آنٍ واحد. تناول الطعام في أحد أكشاك الطعام — اختر التي يأكل فيها المحليون.',
        'اليوم الثاني: قصر البهية (مجاني وجميل حقاً)، حديقة ماجوريل (200 درهم تستحق متحف YSL)، ثم الأسواق بعد الظهر. انهِ اليوم بحمّام — اطلب من رياضك الحجز. حمّام دو لا روز (200 درهم) أو Les Bains de Marrakech (350 درهم) ممتازان للسياح.',
      ],
    },
    {
      heading: 'الأيام 3–4: صحراء الساحرة — قمة أي رحلة إلى المغرب',
      paragraphs: [
        'انطلق من مراكش مبكراً في اليوم الثالث واقود جنوباً عبر ممر تيزي نتيشكا (2260م) — من أكثر الطرق دراماتيكية في أفريقيا. توقف عند أيت بن حدو، القصبة المصنّفة يونسكو التي استُخدمت في مسلسل Game of Thrones وفيلم Lawrence of Arabia (دخول 30 درهم). غداء في ورزازات، ثم تابع شرقاً نحو مرزوقة لتصل عند الغروب.',
        'اليوم الرابع للصحراء. اركب جملاً إلى المخيم الصحراوي (30–45 دقيقة)، شاهد الغروب على كثبان إرق الشبي (150م ارتفاعاً، برتقالية حمراء عند الغروب)، تناول العشاء تحت النجوم، وانم في خيمة بربرية. استيقظ قبل الفجر لمشاهدة الشروق — تتحول الكثبان إلى ذهبي والصمت مطلق.',
      ],
      callout: {
        label: '💡 نصيحة المخيم الصحراوي',
        body: 'اختر مخيماً متوسطاً لا الأرخص. الفرق بين مخيم بـ400 درهم وآخر بـ800 درهم كبير: أسرّة حقيقية مقابل فرشات إسفنجية، عشاء مغربي حقيقي مقابل طعام معلّب، خيمة خاصة مقابل سكن جماعي. MoroccoForYou تستطيع التوصية بمخيمات موثوقة لكل ميزانية — اسأل عبر واتساب.',
      },
    },
    {
      heading: 'اليوم 5: فاس — أكثر مدن المغرب العتيقة حدةً',
      paragraphs: [
        'قُد أو اطِر إلى فاس من مرزوقة. فاس البالي أكبر مدينة وسطية حية في العالم — والأكثر إرباكاً في المغرب بأحلى معنى. استأجر مرشداً مرخصاً لساعاتك الثلاث الأولى (250–350 درهم) — المدابغ ومدرسة بو عنانية وسوق النحاس أكثر منطقية مع السياق.',
        'ليلة واحدة في رياض داخل المدينة العتيقة. عشاء على تراس مع إطلالة على المدينة القديمة — أفضل وجبة في الأسبوع.',
      ],
    },
    {
      heading: 'اليوم 6: شفشاون — المدينة الزرقاء',
      paragraphs: [
        'قُد ثلاث ساعات غرباً من فاس في جبال الريف للوصول إلى شفشاون، أكثر مدن المغرب جاذبيةً للتصوير. كل زقاق مطلي بالأزرق — التأثير بالغ الجمال. تجوّل في المدينة العتيقة ساعتين، اصعد إلى المسجد الإسباني للبانوراما، وزُر شلال رأس الماء.',
        'ليلة واحدة هنا كافية لرحلة 7 أيام. المدينة العتيقة صغيرة ويمكن استكشافها سيراً.',
      ],
    },
    {
      heading: 'أفضل الأنشطة في المغرب — حسب الفئة',
      paragraphs: [
        'إذا أتاحت أيامك السبعة مرونة، إليك أفضل التجارب حسب الفئة لمساعدتك على تحديد الأولويات.',
      ],
      table: {
        caption: 'أفضل الأنشطة في المغرب حسب الفئة',
        headers: ['الفئة', 'أفضل تجربة', 'الموقع', 'الميزانية'],
        rows: [
          ['الصحراء', 'جمال + ليلة مخيم إرق الشبي', 'مرزوقة', '800–1500 درهم/شخص'],
          ['الثقافة', 'جولة موجّهة مدينة فاس', 'فاس', '250–350 درهم (مرشد)'],
          ['التصوير', 'شفشاون الزرقاء عند الفجر', 'شفشاون', 'مجاني'],
          ['الطعام', 'أكشاك جامع الفنا ليلاً', 'مراكش', '50–100 درهم'],
          ['العافية', 'حمّام تقليدي', 'مراكش أو فاس', '100–350 درهم'],
          ['التاريخ', 'قصبة أيت بن حدو', 'قرب ورزازات', '30 درهم دخول'],
          ['الطبيعة', 'قيادة عبر ممر تيزي نتيشكا', 'الأطلس', 'مجاني (وقود فقط)'],
          ['التسوق', 'سوق الجلد + سوق التوابل', 'مراكش', 'متغير'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'ما أفضل الأنشطة في المغرب في 7 أيام؟',
      answer: 'مدينة مراكش العتيقة وساحة جامع الفنا، وصحراء الساحرة في مرزوقة، وقصبة أيت بن حدو، ومدينة فاس العتيقة مع مرشد، ومدينة شفشاون الزرقاء. هذه التجارب الخمس تغطي أفضل ما في المغرب في أسبوع.',
    },
    {
      question: 'هل 7 أيام كافية للمغرب؟',
      answer: 'نعم — أسبوع كافٍ لرؤية المعالم الرئيسية إذا خططت بكفاءة. يمكنك الجمع بين مراكش والصحراء وإما فاس أو شفشاون في 7 أيام.',
    },
    {
      question: 'كيف أذهب إلى الصحراء من مراكش في 7 أيام؟',
      answer: 'قُد عبر ممر تيزي نتيشكا (3 ساعات حتى ورزازات ثم 3 ساعات حتى مرزوقة). أو احجز جولة منظمة يومين من مراكش مع سائق خاص — MoroccoForYou تستطيع ترتيب ذلك عبر واتساب.',
    },
    {
      question: 'هل أحتاج سيارة لرحلة 7 أيام في المغرب؟',
      answer: 'نعم لأقصى مرونة. استأجر من مطار مراكش أو الدار البيضاء CMN من 29€/يوم مع MoroccoForYou Cars.',
    },
    {
      question: 'ما أفضل موسم لزيارة المغرب 7 أيام؟',
      answer: 'مارس–مايو وسبتمبر–نوفمبر مثاليان. تجنّب يوليو–أغسطس للصحراء — درجات الحرارة تتجاوز 45 درجة ظهراً.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يمكن رؤية مراكش والصحراء في 7 أيام؟', answer: 'نعم — هذا هو البرنامج الكلاسيكي لأسبوع في المغرب. يومان في مراكش، يومان لحلقة الصحراء، يوم في فاس، يوم في شفشاون، والعودة.' },
    { question: 'هل المغرب آمن للسياح في 2026؟', answer: 'نعم — المغرب من أكثر الوجهات أماناً في أفريقيا. احتياطات عادية: سيارات أجرة بعداد، أغراض ثمينة محفوظة، حجز الإقامة مسبقاً.' },
    { question: 'ماذا أضع في حقيبتي لـ7 أيام في المغرب؟', answer: 'ملابس خفيفة متعددة الطبقات (نهارات حارة وليالٍ باردة في الصحراء)، حذاء مريح للمشي، شال، وبطارية محمولة. الصيدليات في كل مكان.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga'],
  relatedPosts: ['khattat-rihlat-al-maghrib-usbuan', 'nasaeh-li-ziyarat-al-maghrib-li-awwal-marra', 'al-maghrib-amaan-li-al-musafirat-bimufradihinna'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);