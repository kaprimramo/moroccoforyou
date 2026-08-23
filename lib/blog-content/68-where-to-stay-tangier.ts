import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'where-to-stay-tangier-best-hotels';
const SLUG_FR = 'ou-dormir-tanger-meilleurs-hotels';
const SLUG_AR = 'ayna-tuqim-tanja';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(11344766);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Where to Stay in Tangier 2026: Best Hotels (Barcelo, Hilton & More)',
  metaDescription: 'Complete guide to the best hotels in Tangier 2026: Barcelo Tanger, Hilton Tangier City Center, Hilton Al Houara Resort, Kenzi Solazur and more. Real prices from $86-194/night, ratings, and which area to pick.',
  title: 'Where to Stay in Tangier 2026: Best Hotels Compared',
  description: 'Quick answer: Tangier has over 3,500 hotel options ranging from beachfront resorts 20 minutes outside the city to city-centre chains steps from the medina. This guide compares the top-rated properties — Barcelo Tanger, Hilton Tangier City Center, Hilton Tangier Al Houara Resort & Spa, Hilton Garden Inn and Kenzi Solazur — with real 2026 prices and honest notes on each.',
  keyword: 'where to stay tangier',
  coverImage: COVER,
  coverAlt: 'Where to stay in Tangier 2026 — hotel pool terrace overlooking the Strait of Gibraltar at sunset',
  publishedISO: '2026-08-23',
  updatedISO: '2026-08-23',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 13,
  intro: 'Quick answer: Tangier has more than 3,500 hotel options as of March 2026, split clearly between city-centre chains within walking distance of the medina and beachfront resorts 20-25 minutes outside town. Barcelo Tanger and Hilton Tangier City Center consistently post the strongest guest scores (8.8-9/10) for a central base, while Hilton Tangier Al Houara Resort & Spa delivers a genuine beach resort experience on 60 acres of protected forest, 15 minutes from the airport. This guide compares real 2026 prices and ratings so you can book with confidence.',
  sections: [
    {
      heading: 'Tangier Accommodation Areas — Quick Overview',
      paragraphs: ['Tangier splits clearly into two accommodation zones with very different characters.'],
      table: {
        caption: 'Where to stay in Tangier — areas compared 2026',
        headers: ['Area', 'Character', 'Best for'],
        rows: [
          ['City Centre / Medina', 'Walkable to the Kasbah, American Legation Museum, Grand Socco', 'First-timers wanting maximum walkability and sightseeing convenience'],
          ['Malabata', 'Beachfront, modern hotels, further from the old city', 'Beach-priority travelers wanting resort comfort with reasonable city access'],
          ['Al Houara / Hjar Ennhal (south of city)', '15-25 minutes from centre, private beach, protected forest setting', 'Genuine resort escape, families, golf'],
        ],
      },
    },
    {
      heading: 'Best Hotels in Tangier — Compared',
      paragraphs: [
        'Tangier\'s highest-rated properties span central 5-star chains to beachfront resort escapes.',
      ],
      table: {
        caption: 'Best hotels in Tangier 2026',
        headers: ['Hotel', 'Rating', 'Price/night', 'Character'],
        rows: [
          ['Hilton Tangier City Center', '9/10 (530-535 reviews)', 'From $111-158', 'Luxury hotel in the city centre, outdoor pool, free WiFi and parking — consistently the highest-rated central option'],
          ['Barcelo Tanger', '8.8/10 (385-393 reviews)', 'From $137-194', '5-star, full-service spa, free breakfast included — guests repeatedly praise breakfast quality and staff'],
          ['Hilton Garden Inn Tanger City Center', '8.6/10 (850-879 reviews)', 'From $90-117', '4-star, direct beach access, family-friendly with kids club and window guards — the largest review sample among central hotels'],
          ['Hilton Tangier Al Houara Resort & Spa', '8.6/10 (333-372 reviews)', 'From $121-178', '5-star beachfront resort on 60 acres of protected forest, 3 pools, 18-hole golf course, kids club — 15-25 min from the airport and city centre'],
          ['Kenzi Solazur Hotel', '7/10 (1,001 reviews)', 'From $86-100', '4.5-star, city centre, largest review sample of any Tangier hotel, elegant relaxation-focused property'],
        ],
      },
      callout: {
        label: '💡 Which One Should You Book?',
        body: 'For the highest-rated central option: Hilton Tangier City Center. For a full 5-star experience with excellent breakfast: Barcelo Tanger. For families wanting beach access and a kids club without leaving the centre: Hilton Garden Inn. For a genuine resort escape with golf and multiple pools: Hilton Tangier Al Houara Resort & Spa, though budget 15-25 minutes of travel time to reach the old city.',
      },
    },
    {
      heading: 'Real 2026 Prices by Budget',
      paragraphs: ['Tangier offers a genuinely wide range across both city-centre and resort options.'],
      table: {
        caption: 'Tangier accommodation prices by budget 2026',
        headers: ['Budget', 'Price/night', 'What to expect'],
        rows: [
          ['Budget', '$32-59 (from Tripadvisor listings)', 'Guesthouses and smaller properties, city centre'],
          ['Mid-range', '$86-117', 'Kenzi Solazur, Hilton Garden Inn — reliable 4-star comfort'],
          ['Upscale', '$121-194', 'Barcelo Tanger, Hilton City Center, Hilton Al Houara Resort'],
        ],
      },
    },
    {
      heading: 'Booking Tips for Tangier',
      paragraphs: ['A handful of practical notes that make the difference between a smooth stay and a frustrating one.'],
      list: [
        'If choosing Hilton Al Houara Resort or another Malabata/Al Houara property, factor in the 15-25 minute drive to reach the medina and Kasbah — genuinely worth it for the beach and resort amenities, but not a walkable base for daily sightseeing.',
        'City-centre hotels near the medina offer the most practical base if your priority is walking to the Kasbah, American Legation Museum, and Grand Socco without relying on taxis.',
        'Several resort properties (Hilton Al Houara) offer complimentary airport shuttles — confirm this directly when booking to avoid a separate taxi cost.',
        'June is high season at beachfront properties — book resort-style hotels further ahead if traveling in early-to-mid summer.',
      ],
    },
    {
      heading: 'Getting to Tangier and Your Hotel',
      paragraphs: ['For the full picture on reaching Tangier — by ferry from Spain, flight, or the Al Boraq high-speed train — see our complete guides.'],
      callout: {
        label: '🚗 Renting a Car for Your Tangier Trip',
        body: 'If you\'re combining Tangier with Chefchaouen or a wider north Morocco loop, we arrange rental cars with free meet & greet at Tangier or Casablanca Airport — economy from MAD 250/day (€23). See our full <a href="/blog/tangier-travel-guide">Tangier Travel Guide</a>, or message us on WhatsApp: <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    {
      question: 'What is the best hotel to stay at in Tangier?',
      answer: 'Hilton Tangier City Center posts the strongest guest ratings among central options (9/10 from 530+ reviews). For a full 5-star resort experience with beach access, Hilton Tangier Al Houara Resort & Spa (8.6/10) offers 60 acres of protected forest and multiple pools, 15-25 minutes from the city.',
    },
    {
      question: 'How much does a hotel cost in Tangier?',
      answer: 'Budget guesthouses start around $32-59/night, mid-range 4-star hotels like Kenzi Solazur or Hilton Garden Inn cost $86-117/night, and upscale properties like Barcelo Tanger or Hilton Al Houara Resort range $121-194/night.',
    },
    {
      question: 'Should I stay in Tangier city centre or at a beach resort?',
      answer: 'For walkability to the Kasbah, medina and American Legation Museum, city-centre hotels are the practical choice. For a genuine beach resort experience with pools and golf, properties in Al Houara or Malabata deliver this, at the cost of a 15-25 minute drive into the old city for daily sightseeing.',
    },
    {
      question: 'Is Hilton Tangier Al Houara Resort worth staying at?',
      answer: 'Yes, for travelers prioritizing a genuine resort escape — it sits on 60 acres of protected forest with a private beach, 3 pools, an 18-hole golf course, and a kids club, rated 8.6/10 from 333+ reviews. It is 15-25 minutes from central Tangier, so factor in travel time if daily sightseeing is a priority.',
    },
    {
      question: 'Which Tangier hotel has the most reviews?',
      answer: 'Kenzi Solazur Hotel has the largest review sample among Tangier properties at over 1,000 reviews (7/10 rating), followed by Hilton Garden Inn Tanger City Center with 850-879 reviews (8.6/10).',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is Barcelo Tanger a good hotel?', answer: 'Yes — Barcelo Tanger is a well-regarded 5-star property in central Tangier, rated 8.8/10 from nearly 400 reviews, with guests consistently praising the included breakfast, full-service spa, and staff.' },
    { question: 'How far is Tangier Airport from the main hotels?', answer: 'City-centre hotels like Barcelo Tanger and Hilton City Center sit approximately 7 miles (11 km) from Tangier Ibn Battouta Airport. Hilton Tangier Al Houara Resort is closer at roughly 5 miles (8 km), around a 15-20 minute drive.' },
    { question: 'Are there all-inclusive hotels in Tangier?', answer: 'Yes — several beachfront resorts, particularly around Malabata and Al Houara, offer all-inclusive packages, though the classic city-centre business hotels (Hilton, Barcelo) more typically operate on a bed-and-breakfast or room-only basis.' },
  ],
  relatedDestinations: ['tangier', 'chefchaouen'],
  relatedPosts: ['tangier-travel-guide', 'tangier-private-tours', 'chefchaouen-travel-guide', 'best-private-morocco-tours'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Où Dormir à Tanger 2026 : Meilleurs Hôtels (Barcelo, Hilton et Plus)',
  metaDescription: 'Guide complet des meilleurs hôtels à Tanger 2026 : Barcelo Tanger, Hilton Tangier City Center, Hilton Al Houara Resort, Kenzi Solazur et plus. Vrais prix dès 86-194$/nuit, notes, et quel quartier choisir.',
  title: 'Où Dormir à Tanger 2026 : Meilleurs Hôtels Comparés',
  description: 'Réponse rapide : Tanger compte plus de 3 500 options d\'hôtels allant de resorts en bord de mer à 20 minutes de la ville à des chaînes centre-ville à quelques pas de la médina. Ce guide compare les propriétés les mieux notées avec vrais prix 2026.',
  keyword: 'où dormir tanger',
  coverImage: COVER,
  coverAlt: 'Où dormir à Tanger 2026 — terrasse piscine d\'hôtel surplombant le détroit de Gibraltar au coucher du soleil',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 13,
  intro: 'Réponse rapide : Tanger compte plus de 3 500 options d\'hôtels en mars 2026, divisées clairement entre chaînes centre-ville à distance de marche de la médina et resorts en bord de mer à 20-25 minutes de la ville. Barcelo Tanger et Hilton Tangier City Center affichent constamment les meilleures notes clients (8,8-9/10) pour une base centrale, tandis que Hilton Tangier Al Houara Resort & Spa offre une véritable expérience resort plage sur 60 hectares de forêt protégée, à 15 minutes de l\'aéroport.',
  sections: [
    {
      heading: 'Zones d\'Hébergement à Tanger — Aperçu Rapide',
      paragraphs: ['Tanger se divise clairement en deux zones d\'hébergement avec des caractères très différents.'],
      table: {
        caption: 'Où dormir à Tanger — zones comparées 2026',
        headers: ['Zone', 'Caractère', 'Idéal pour'],
        rows: [
          ['Centre-ville / Médina', 'Praticable à pied vers la Kasbah, le Musée de la Légation Américaine, le Grand Socco', 'Premiers visiteurs voulant marchabilité maximale'],
          ['Malabata', 'Bord de mer, hôtels modernes, plus loin de la vieille ville', 'Voyageurs privilégiant la plage avec accès ville raisonnable'],
          ['Al Houara / Hjar Ennhal (sud de la ville)', '15-25 minutes du centre, plage privée, cadre forestier protégé', 'Véritable évasion resort, familles, golf'],
        ],
      },
    },
    {
      heading: 'Meilleurs Hôtels à Tanger — Comparés',
      paragraphs: ['Les propriétés les mieux notées de Tanger vont des chaînes 5 étoiles centrales aux évasions resort bord de mer.'],
      table: {
        caption: 'Meilleurs hôtels à Tanger 2026',
        headers: ['Hôtel', 'Note', 'Prix/nuit', 'Caractère'],
        rows: [
          ['Hilton Tangier City Center', '9/10 (530-535 avis)', 'Dès 111-158$', 'Hôtel de luxe centre-ville, piscine extérieure — constamment le mieux noté'],
          ['Barcelo Tanger', '8,8/10 (385-393 avis)', 'Dès 137-194$', '5 étoiles, spa complet, petit-déjeuner gratuit inclus'],
          ['Hilton Garden Inn Tanger City Center', '8,6/10 (850-879 avis)', 'Dès 90-117$', '4 étoiles, accès plage direct, familial'],
          ['Hilton Tangier Al Houara Resort & Spa', '8,6/10 (333-372 avis)', 'Dès 121-178$', 'Resort 5 étoiles bord de mer sur 60 hectares, 3 piscines, golf 18 trous'],
          ['Kenzi Solazur Hotel', '7/10 (1 001 avis)', 'Dès 86-100$', '4,5 étoiles, centre-ville, plus grand échantillon d\'avis'],
        ],
      },
      callout: {
        label: '💡 Lequel Réserver ?',
        body: 'Pour l\'option centrale la mieux notée : Hilton Tangier City Center. Pour une expérience 5 étoiles complète : Barcelo Tanger. Pour familles voulant accès plage sans quitter le centre : Hilton Garden Inn. Pour une véritable évasion resort : Hilton Al Houara Resort, mais comptez 15-25 minutes vers la vieille ville.',
      },
    },
    {
      heading: 'Vrais Prix 2026 par Budget',
      paragraphs: ['Tanger offre une gamme vraiment large entre options centre-ville et resort.'],
      table: {
        caption: 'Prix hébergement Tanger par budget 2026',
        headers: ['Budget', 'Prix/nuit', 'À quoi s\'attendre'],
        rows: [
          ['Économique', '32-59$', 'Maisons d\'hôtes, centre-ville'],
          ['Milieu de gamme', '86-117$', 'Kenzi Solazur, Hilton Garden Inn'],
          ['Haut de gamme', '121-194$', 'Barcelo Tanger, Hilton City Center, Hilton Al Houara'],
        ],
      },
    },
    {
      heading: 'Conseils de Réservation pour Tanger',
      paragraphs: ['Quelques notes pratiques qui font la différence.'],
      list: [
        'Si vous choisissez Hilton Al Houara Resort, comptez 15-25 minutes vers la médina et la Kasbah.',
        'Les hôtels centre-ville offrent la base la plus pratique pour la marche vers la Kasbah et le Grand Socco.',
        'Plusieurs resorts offrent des navettes aéroport gratuites — confirmez directement à la réservation.',
        'Juin est haute saison dans les propriétés bord de mer — réservez plus à l\'avance.',
      ],
    },
    {
      heading: 'Rejoindre Tanger et Votre Hôtel',
      paragraphs: ['Pour le tableau complet sur comment rejoindre Tanger, voir nos guides complets.'],
      callout: {
        label: '🚗 Louer une Voiture pour Votre Voyage à Tanger',
        body: 'Nous organisons des locations avec accueil gratuit à l\'aéroport de Tanger ou Casablanca — économique dès MAD 250/jour (23€). Voir notre <a href="/blog/guide-voyage-tanger">Guide Voyage Tanger</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Quel est le meilleur hôtel où dormir à Tanger ?', answer: 'Hilton Tangier City Center affiche les meilleures notes parmi les options centrales (9/10 sur 530+ avis). Pour une expérience resort complète, Hilton Al Houara Resort & Spa (8,6/10).' },
    { question: 'Combien coûte un hôtel à Tanger ?', answer: 'Maisons d\'hôtes économiques dès 32-59$/nuit, hôtels 4 étoiles milieu de gamme 86-117$/nuit, propriétés haut de gamme 121-194$/nuit.' },
    { question: 'Dois-je dormir au centre-ville de Tanger ou dans un resort plage ?', answer: 'Pour la marchabilité vers la Kasbah, les hôtels centre-ville sont le choix pratique. Pour une vraie expérience resort, les propriétés d\'Al Houara ou Malabata livrent cela.' },
    { question: 'Hilton Tangier Al Houara Resort vaut-il le séjour ?', answer: 'Oui, pour ceux privilégiant une véritable évasion resort — 60 hectares de forêt protégée, plage privée, 3 piscines, golf 18 trous, noté 8,6/10.' },
    { question: 'Quel hôtel de Tanger a le plus d\'avis ?', answer: 'Kenzi Solazur Hotel a le plus grand échantillon d\'avis parmi les propriétés de Tanger avec plus de 1 000 avis.' },
  ],
  peopleAlsoAsk: [
    { question: 'Barcelo Tanger est-il un bon hôtel ?', answer: 'Oui — propriété 5 étoiles bien considérée au centre de Tanger, notée 8,8/10 sur près de 400 avis.' },
    { question: 'À quelle distance est l\'aéroport de Tanger des principaux hôtels ?', answer: 'Les hôtels centre-ville comme Barcelo Tanger et Hilton City Center se situent à environ 11 km de l\'aéroport.' },
    { question: 'Y a-t-il des hôtels tout compris à Tanger ?', answer: 'Oui — plusieurs resorts bord de mer, particulièrement autour de Malabata et Al Houara, offrent des forfaits tout compris.' },
  ],
  relatedDestinations: ['tangier', 'chefchaouen'],
  relatedPosts: ['guide-voyage-tanger', 'excursions-privees-tanger', 'guide-voyage-chefchaouen', 'meilleurs-circuits-prives-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أين تقيم بطنجة 2026: أفضل الفنادق (بارسيلو، هيلتون والمزيد)',
  metaDescription: 'دليل شامل لأفضل الفنادق بطنجة 2026: بارسيلو طنجة، هيلتون طنجة سيتي سنتر، هيلتون الحوارة ريزورت، كنزي سولازور والمزيد. أسعار حقيقية من 86-194$/ليلة.',
  title: 'أين تقيم بطنجة 2026: أفضل الفنادق مقارنة',
  description: 'إجابة سريعة: تضم طنجة أكثر من 3,500 خيار فندقي من منتجعات بحرية على بعد 20 دقيقة للمدينة لسلاسل وسط المدينة على خطوات من المدينة العتيقة. هيلتون طنجة سيتي سنتر وبارسيلو طنجة يحققان باستمرار أقوى تقييمات (8.8-9/10).',
  keyword: 'أين تقيم طنجة',
  coverImage: COVER,
  coverAlt: 'أين تقيم بطنجة 2026 — تراس مسبح فندق يطل على مضيق جبل طارق عند الغروب',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 13,
  intro: 'إجابة سريعة: تضم طنجة أكثر من 3,500 خيار فندقي بمارس 2026، مقسمة بوضوح بين سلاسل وسط المدينة على مسافة مشي من المدينة العتيقة ومنتجعات بحرية على بعد 20-25 دقيقة من المدينة. بارسيلو طنجة وهيلتون طنجة سيتي سنتر يحققان باستمرار أقوى تقييمات ضيوف (8.8-9/10) لقاعدة مركزية، بينما هيلتون طنجة الحوارة ريزورت يقدم تجربة منتجع بحري حقيقية على 60 فداناً من غابة محمية.',
  sections: [
    {
      heading: 'مناطق الإقامة بطنجة — نظرة سريعة',
      paragraphs: ['تنقسم طنجة بوضوح لمنطقتي إقامة بطابعين مختلفين جداً.'],
      table: {
        caption: 'أين تقيم بطنجة — المناطق مقارنة 2026',
        headers: ['المنطقة', 'الطابع', 'الأنسب لـ'],
        rows: [
          ['وسط المدينة/المدينة العتيقة', 'قابل للمشي للقصبة ومتحف السفارة الأمريكية والسوق الكبير', 'الزوار الأوائل'],
          ['مالاباتا', 'بحرية، فنادق حديثة، أبعد عن المدينة القديمة', 'المسافرون الباحثون عن الشاطئ'],
          ['الحوارة (جنوب المدينة)', '15-25 دقيقة من المركز، شاطئ خاص، غابة محمية', 'هروب منتجع حقيقي، عائلات، غولف'],
        ],
      },
    },
    {
      heading: 'أفضل الفنادق بطنجة — مقارنة',
      paragraphs: ['عقارات طنجة الأعلى تقييماً تمتد من سلاسل 5 نجوم مركزية لهروب منتجع بحري.'],
      table: {
        caption: 'أفضل الفنادق بطنجة 2026',
        headers: ['الفندق', 'التقييم', 'السعر/ليلة', 'الطابع'],
        rows: [
          ['هيلتون طنجة سيتي سنتر', '9/10 (530+ تقييم)', 'من 111-158$', 'فندق فاخر بوسط المدينة، مسبح خارجي'],
          ['بارسيلو طنجة', '8.8/10 (385+ تقييم)', 'من 137-194$', '5 نجوم، سبا كامل، فطور مجاني مشمول'],
          ['هيلتون غاردن إن طنجة سيتي سنتر', '8.6/10 (850+ تقييم)', 'من 90-117$', '4 نجوم، وصول مباشر للشاطئ، عائلي'],
          ['هيلتون طنجة الحوارة ريزورت', '8.6/10 (333+ تقييم)', 'من 121-178$', 'منتجع 5 نجوم بحري على 60 فداناً غابة محمية'],
          ['فندق كنزي سولازور', '7/10 (1,001 تقييم)', 'من 86-100$', '4.5 نجوم، وسط المدينة، أكبر عينة تقييمات'],
        ],
      },
      callout: {
        label: '💡 أيها تحجز؟',
        body: 'للخيار المركزي الأعلى تقييماً: هيلتون سيتي سنتر. لتجربة 5 نجوم كاملة: بارسيلو طنجة. للعائلات: هيلتون غاردن إن. لهروب منتجع حقيقي: هيلتون الحوارة، لكن احسب 15-25 دقيقة للمدينة القديمة.',
      },
    },
    {
      heading: 'أسعار حقيقية 2026 حسب الميزانية',
      paragraphs: ['طنجة تقدم نطاقاً واسعاً فعلاً بين خيارات وسط المدينة والمنتجع.'],
      table: {
        caption: 'أسعار إقامة طنجة حسب الميزانية 2026',
        headers: ['الميزانية', 'السعر/ليلة', 'ماذا تتوقع'],
        rows: [
          ['اقتصادية', '32-59$', 'دور ضيافة، وسط المدينة'],
          ['متوسطة', '86-117$', 'كنزي سولازور، هيلتون غاردن إن'],
          ['راقية', '121-194$', 'بارسيلو طنجة، هيلتون سيتي سنتر، الحوارة'],
        ],
      },
    },
    {
      heading: 'نصائح حجز لطنجة',
      paragraphs: ['بعض الملاحظات العملية التي تصنع الفرق.'],
      list: [
        'إن اخترت هيلتون الحوارة، احسب 15-25 دقيقة للمدينة العتيقة والقصبة.',
        'فنادق وسط المدينة القاعدة الأعملية للمشي للقصبة.',
        'بعض المنتجعات تقدم حافلات مطار مجانية.',
        'يونيو ذروة الموسم بالعقارات البحرية.',
      ],
    },
    {
      heading: 'الوصول لطنجة وفندقك',
      paragraphs: ['للصورة الكاملة عن الوصول لطنجة، راجع أدلتنا الشاملة.'],
      callout: {
        label: '🚗 استأجر سيارة لرحلتك لطنجة',
        body: 'نرتب تأجير سيارات باستقبال مجاني بمطار طنجة أو الدار البيضاء — من MAD 250/يوم (23€). راجع <a href="/blog/dalil-safar-tanja">دليل السفر لطنجة</a>، أو راسلنا: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'ما أفضل فندق للإقامة بطنجة؟', answer: 'هيلتون طنجة سيتي سنتر يحقق أقوى تقييمات بين الخيارات المركزية (9/10 من +530 تقييم).' },
    { question: 'كم تكلفة فندق بطنجة؟', answer: 'دور ضيافة اقتصادية من 32-59$/ليلة، فنادق 4 نجوم متوسطة 86-117$/ليلة، راقية 121-194$/ليلة.' },
    { question: 'هل أقيم بوسط طنجة أم منتجع بحري؟', answer: 'للمشي للقصبة، فنادق وسط المدينة الخيار العملي. لتجربة منتجع حقيقية، عقارات الحوارة أو مالاباتا.' },
    { question: 'هل يستحق هيلتون طنجة الحوارة الإقامة؟', answer: 'نعم، لمن يفضل هروباً منتجعياً حقيقياً — 60 فداناً غابة محمية، شاطئ خاص، 3 مسابح، غولف.' },
    { question: 'أي فندق بطنجة لديه أكثر تقييمات؟', answer: 'فندق كنزي سولازور لديه أكبر عينة تقييمات بأكثر من 1,000 تقييم.' },
  ],
  peopleAlsoAsk: [
    { question: 'هل بارسيلو طنجة فندق جيد؟', answer: 'نعم — عقار 5 نجوم محترم بوسط طنجة، مقيّم 8.8/10 من قرابة 400 تقييم.' },
    { question: 'كم يبعد مطار طنجة عن الفنادق الرئيسية؟', answer: 'فنادق وسط المدينة كبارسيلو وهيلتون سيتي سنتر على بعد حوالي 11 كم من المطار.' },
    { question: 'هل توجد فنادق شاملة كلياً بطنجة؟', answer: 'نعم — عدة منتجعات بحرية، خاصة حول مالاباتا والحوارة، تقدم باقات شاملة كلياً.' },
  ],
  relatedDestinations: ['tangier', 'chefchaouen'],
  relatedPosts: ['dalil-safar-tanja', 'jawlat-khasa-tanja', 'dalil-safar-shafshawan', 'afdal-jawlat-khasa-maghrib'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);