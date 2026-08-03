import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'best-restaurants-casablanca-2026';
const SLUG_FR = 'meilleurs-restaurants-casablanca-2026';
const SLUG_AR = 'afdal-mata3im-casablanca-2026';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(4502972);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Best Restaurants in Casablanca: The Ultimate 2026 Dining Guide',
  metaDescription: 'Discover the elite dining scene in Casablanca. From high-end fine dining and ocean-view restaurants to authentic culinary gems. Prices, locations, and insider tips included.',
  title: 'Where to Eat in Casablanca: The Definitive 2026 Food Guide',
  description: 'A comprehensive, data-driven guide to Casablanca’s culinary scene. Categorized by experience, luxury levels, and neighborhood.',
  keyword: 'best fine dining casablanca, where to eat in casablanca, casablanca luxury restaurants, moroccan gourmet',
  coverImage: COVER,
  coverAlt: 'Luxury dining scene in Casablanca with ocean views',
  publishedISO: '2026-07-17',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 15,
  intro: 'Casablanca is a city of extreme culinary contrasts. This guide is your tactical map to navigating the city’s vast dining landscape. Whether you are hunting for an Art Deco fine dining experience or authentic Moroccan heritage cuisine, we have curated the best spots with local insights and vibe assessments.',
  sections: [
    {
      heading: 'Elite Fine Dining & Iconic Landmarks',
      paragraphs: [
        'These are the city’s standard-bearers. Places that have been part of Casablanca’s social fabric for decades. Ideal for business meetings, romantic dinners, or celebratory evenings.',
      ],
      table: {
        caption: 'Top Fine Dining Establishments',
        headers: ['Restaurant', 'Style', 'Vibe'],
        rows: [
          ['Rick’s Cafe', 'International', 'Legendary Cinematic'],
          ['Le Cabestan', 'Fusion/Seafood', 'Trendy Sea View'],
          ['Al Mounia', 'Authentic Moroccan', 'Heritage Oasis'],
          ['Le Doge', 'French Fine Dining', 'Art Deco Luxury'],
          ['La Mer', 'Seafood', 'Oceanfront Elegance'],
          ['La Bavaroise', 'French Country', 'Classic Chic']
        ]
      }
    },
    {
      heading: 'Casual & Trendy Modern Eateries',
      paragraphs: [
        'For travelers who want a modern atmosphere and high-quality food. These spots are perfect for stylish lunches or relaxed evening dinners.',
      ],
      table: {
        caption: 'Modern & Trendy Dining',
        headers: ['Restaurant', 'Concept', 'Best for'],
        rows: [
          ['Blend Gourmet Burger', 'Gourmet', 'Industrial Chic'],
          ['NKOA', 'Creative International', 'Modern Dinner'],
          ['Holy Brunch', 'Breakfast/Brunch', 'Weekend Vibes'],
          ['La Bodega', 'Spanish Tapas', 'Social Drinks'],
          ['Clay Oven', 'Refined Dining', 'Bd Ghandi'],
          ['Baobao', 'Asian Fusion', 'Contemporary']
        ]
      }
    }
  ],
  faqs: [
    { question: 'What are the best luxury restaurants in Casablanca?', answer: 'Rick’s Cafe and Le Cabestan are the most iconic for fine dining with unique atmospheres.' },
    { question: 'Is Casablanca good for street food?', answer: 'Yes, the Central Market is essential for fresh grilled sardines and authentic local flavors.' }
  ],
  peopleAlsoAsk: [
    { question: 'Do I need a reservation for fine dining in Casablanca?', answer: 'Yes, especially for Le Cabestan and Rick’s Cafe, booking at least 24h in advance is recommended.' }
  ],
  relatedDestinations: ['casablanca'],
  relatedPosts: ['driving-in-morocco-tips-for-tourists', 'istajar-sayyara-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Meilleurs Restaurants à Casablanca : Guide Gastronomique 2026',
  metaDescription: 'Découvrez la scène culinaire d\'élite à Casablanca. Tables gastronomiques, restaurants avec vue sur mer et pépites locales.',
  title: 'Où manger à Casablanca : Le guide gastronomique ultime 2026',
  description: 'Une sélection exhaustive des meilleures tables de Casablanca, des restaurants gastronomiques aux adresses les plus tendances.',
  keyword: 'restaurants gastronomiques casablanca, ou manger chic casablanca, cuisine marocaine raffinée',
  coverImage: COVER,
  coverAlt: 'Expérience gastronomique à Casablanca',
  publishedISO: '2026-07-17',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 15,
  intro: 'Casablanca ne se dévoile pas qu’à travers ses bâtiments, elle se goûte. Entre l’élégance des tables feutrées et les adresses les plus en vue, voici où la gastronomie casablancaise brille de mille feux.',
  sections: [
    {
      heading: 'Les Institutions Gastronomiques',
      paragraphs: ['Pour une expérience qui marie l’héritage à l’excellence. Idéal pour vos dîners d’affaires ou moments privilégiés.'],
      table: {
        caption: 'Tables de prestige',
        headers: ['Restaurant', 'Cuisine', 'Style'],
        rows: [
          ['Rick’s Cafe', 'International', 'Institutionnel'],
          ['Le Cabestan', 'Fusion', 'Vue Panoramique'],
          ['Al Mounia', 'Marocaine', 'Tradition Raffinée'],
          ['Le Doge', 'Française', 'Luxe Art Déco'],
          ['La Mer', 'Fruits de Mer', 'Raffiné'],
          ['La Bavaroise', 'Française', 'Classique Chic']
        ]
      }
    }
  ],
  faqs: [
    { question: 'Quels sont les meilleurs restaurants chics à Casablanca ?', answer: 'Le Cabestan et Rick\'s Cafe sont incontournables pour une expérience gastronomique.' }
  ],
  peopleAlsoAsk: [
    { question: 'Faut-il réserver dans les restaurants à Casablanca ?', answer: 'Oui, une réservation est fortement conseillée pour les tables prisées.' }
  ],
  relatedDestinations: ['casablanca'],
  relatedPosts: ['itineraire-maroc-2-semaines-premier-voyage', 'conduire-au-maroc-conseils-touristes'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أفضل مطاعم الدار البيضاء الفاخرة: دليل النخبة 2026',
  metaDescription: 'دليل النخبة لأفضل المطاعم في الدار البيضاء. تجارب طعام راقية، إطلالات بحرية، وخدمة استثنائية لزوارنا من دول الخليج.',
  title: 'دليل مطاعم الدار البيضاء: تجربة ذواقة تليق بك (2026)',
  description: 'قائمة مختارة بعناية لأفخم المطاعم في الدار البيضاء، تجمع بين العراقة والمذاق العصري العالمي.',
  keyword: 'مطاعم فاخرة الدار البيضاء, مطاعم راقية كازا, تجربة طعام النخبة المغرب',
  coverImage: COVER,
  coverAlt: 'تجارب طعام راقية في الدار البيضاء',
  publishedISO: '2026-07-17',
  author: 'فريق MoroccoForYou',
  readingMinutes: 15,
  intro: 'تعتبر الدار البيضاء وجهة مثالية للباحثين عن الرقي والتميز. هذا الدليل موجه لنخبة زوارنا من دول الخليج، حيث جمعنا لكم وجهات الطعام التي توفر الخصوصية، الخدمة الفائقة، والأطباق التي تمزج بين الأصالة المغربية واللمسات العالمية في أرقى الأجواء.',
  sections: [
    {
      heading: 'وجهات الذواقة: المطاعم الفاخرة والعريقة',
      paragraphs: ['إذا كنت تبحث عن الأناقة والخدمة الاستثنائية، فهذه المطاعم هي الأفضل في المملكة، وتعتبر الوجهة المفضلة لكبار الزوار.'],
      table: {
        caption: 'نخبة مطاعم الدار البيضاء',
        headers: ['المطعم', 'نوع الخدمة', 'مميزات المكان'],
        rows: [
          ['Rick’s Cafe', 'عالمي', 'طابع سينمائي تاريخي'],
          ['Le Cabestan', 'مأكولات بحرية/فيوجن', 'إطلالة بحرية ساحرة'],
          ['Al Mounia', 'مغربي ملكي', 'جلسات تراثية فاخرة'],
          ['Le Doge', 'فرنسي ذواقة', 'خصوصية وأناقة كلاسيكية'],
          ['La Mer', 'بحري', 'جلسات راقية على المحيط'],
          ['La Bavaroise', 'فرنسي كلاسيكي', 'خدمة النخبة']
        ]
      }
    }
  ],
  faqs: [
    { question: 'ما أفضل المطاعم الفاخرة في الدار البيضاء؟', answer: 'مطعم Rick’s Cafe و Le Cabestan يعتبران الأفضل لتجربة طعام راقية مع إطلالات وأجواء مميزة.' }
  ],
  peopleAlsoAsk: [
    { question: 'هل الحجز مسبقاً ضروري في مطاعم كازابلانكا؟', answer: 'نعم، ننصح بشدة بالحجز قبل 24 ساعة لضمان أفضل الطاولات خاصة في Le Cabestan.' }
  ],
  relatedDestinations: ['casablanca'],
  relatedPosts: ['khattat-rihlat-al-maghrib-usbuan', 'istajar-sayyara-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);