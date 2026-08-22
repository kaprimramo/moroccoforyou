import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'where-to-stay-chefchaouen-best-riads';
const SLUG_FR = 'ou-dormir-chefchaouen-meilleurs-riads';
const SLUG_AR = 'ayna-tuqim-shafshawan';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(18487344);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Where to Stay in Chefchaouen 2026: Best Riads & Hotels (Dar Jasmine, Casa Hassan & More)',
  metaDescription: 'Complete guide to the best riads and hotels in Chefchaouen 2026: Dar Jasmine, Casa Sabila, Casa Hassan, Dar Echchaouen and more. Real prices from $56-223/night, ratings, and which area of the Blue City to pick.',
  title: 'Where to Stay in Chefchaouen 2026: Best Riads & Hotels Compared',
  description: 'Quick answer: Chefchaouen\'s best riads cluster around three spots — Ras El Ma (near the waterfall, hilltop views, a short walk from the centre), the Old Medina (steps from Plaza Uta el-Hammam), and the quieter Andalusian Quarter. This guide compares the top-rated options — Dar Jasmine, Casa Sabila, Casa Hassan, Dar Echchaouen and more — with real 2026 prices, ratings, and honest notes on what each is actually like to stay at, written for travelers planning their Blue City trip.',
  keyword: 'where to stay chefchaouen',
  coverImage: COVER,
  coverAlt: 'Where to stay in Chefchaouen 2026 — traditional blue riad courtyard with terracotta tiles and blue-painted walls',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 14,
  intro: 'Quick answer: Chefchaouen has around 55+ hotels and riads packed into a compact blue-washed medina, and where you stay genuinely shapes the trip — a hillside riad near Ras El Ma delivers panoramic views and a short climb, while a medina-centre guesthouse puts you steps from Plaza Uta el-Hammam and the best photo streets. This guide covers the top-rated, most-searched properties in Chefchaouen — real 2026 prices, what guests consistently say, and which type of traveler each suits — so you can book with confidence rather than scrolling endless listings.',
  sections: [
    {
      heading: 'Chefchaouen Accommodation Areas — Quick Overview',
      paragraphs: [
        'Chefchaouen\'s compact medina means every area is walkable, but the character shifts noticeably depending on where you land.',
      ],
      table: {
        caption: 'Where to stay in Chefchaouen — areas compared 2026',
        headers: ['Area', 'Character', 'Best for'],
        rows: [
          ['Ras El Ma / hillside', 'Hilltop riads with panoramic Blue City views, near the waterfall, some involve a steep climb (100+ steps at the highest properties)', 'Travelers prioritizing views and a quieter atmosphere, willing to climb stairs'],
          ['Old Medina / near Plaza Uta el-Hammam', 'Central, steps from the main square, souks and restaurants', 'First-timers wanting maximum walkability and easy exploration'],
          ['Andalusian Quarter', 'Quieter residential streets, still central', 'Travelers wanting a calmer base without sacrificing location'],
        ],
      },
    },
    {
      heading: 'Best Riads and Hotels in Chefchaouen — Compared',
      paragraphs: [
        'Chefchaouen\'s highest-rated properties span budget guesthouses to boutique hilltop riads with pools. Here is an honest comparison of the most consistently well-reviewed options.',
      ],
      table: {
        caption: 'Best riads and hotels in Chefchaouen 2026',
        headers: ['Property', 'Rating', 'Price/night', 'Character'],
        rows: [
          ['Dar Jasmine', '4.6/5 (170+ reviews)', 'From $186-223', 'Hilltop 4-star with infinity-style seasonal pool, spa, and panoramic Blue City views — expect a climb of roughly 150+ steps, but guests consistently call the view worth it'],
          ['Casa Sabila', '4.8/5 (320+ reviews) — often the highest-rated property in town', 'From $46-67', 'Centrally located in the historic district, rooftop terrace, home-cooked breakfast, warm hospitality repeatedly praised in reviews'],
          ['Casa Hassan', '4.0/5 (425+ reviews)', 'From $62-109', 'Historic riad 2 minutes from the main square, on-site restaurant, classic Moroccan courtyard design'],
          ['Dar Echchaouen', '4.5/5 (940+ reviews) — the most-reviewed property in Chefchaouen', 'Mid-range', 'Large, well-established guesthouse with consistently strong ratings across nearly 1,000 reviews'],
          ['Riad Alhambra', '4.4/5 (25+ reviews)', 'From $54-67', 'Budget-friendly, rooftop terrace, free breakfast, in the Andalusian Quarter'],
          ['Dar Meziana', '4.5/5 (290+ reviews)', 'From $81', 'Solid mid-range option, consistently good reviews'],
          ['Dar Hannan Hotel Riad', '4.0/5 (90+ reviews)', 'From $56', 'Budget-friendly, well-located'],
        ],
      },
      callout: {
        label: '💡 Which One Should You Book?',
        body: 'For the best view and a special-occasion stay: Dar Jasmine, but confirm you can manage the steps. For the best overall value with genuinely warm hospitality: Casa Sabila — Chefchaouen\'s highest and most consistently rated property. For central convenience with historic character: Casa Hassan, two minutes from the main square. For the safest bet with the largest review base: Dar Echchaouen.',
      },
    },
    {
      heading: 'Real 2026 Prices by Budget',
      paragraphs: [
        'Chefchaouen remains one of Morocco\'s better-value destinations for accommodation compared to Marrakech or Fes.',
      ],
      table: {
        caption: 'Chefchaouen accommodation prices by budget 2026',
        headers: ['Budget', 'Price/night', 'What to expect'],
        rows: [
          ['Budget', '$46-67 (€42-62)', 'Casa Sabila, Riad Alhambra, Dar Hannan — clean rooms, rooftop terraces, home-cooked breakfast, genuine hospitality'],
          ['Mid-range', '$67-110 (€62-101)', 'Casa Hassan, Dar Meziana — historic riads with on-site restaurants, central locations'],
          ['Upscale', '$186-223 (€172-206)', 'Dar Jasmine — hilltop 4-star with pool, spa, panoramic views'],
        ],
      },
      callout: {
        label: '💰 Practical Note',
        body: 'Chefchaouen charges a city tourist tax of approximately €3 per person per night, not included in most quoted rates — factor this into your budget. Many hillside riads (including Dar Jasmine) involve genuine staircases to reach the property; if mobility is a concern, choose a medina-centre option instead.',
      },
    },
    {
      heading: 'Near the Waterfall — Ras El Ma',
      paragraphs: [
        'Several of Chefchaouen\'s best-rated properties, including Dar Jasmine, sit within a short walk of Ras El Ma — the natural spring and small waterfall on the edge of the medina where locals wash wool and clothes, and where the water genuinely appears to run turquoise-blue against the rock. Staying nearby means an easy early-morning or sunset visit before the crowds.',
      ],
    },
    {
      heading: 'Booking Tips for Chefchaouen',
      paragraphs: [
        'A handful of practical notes that make the difference between a smooth stay and a frustrating one.',
      ],
      list: [
        'Ask about stairs before booking a hillside riad — several of the best-viewed properties involve 100-150+ steps with no elevator, genuinely worth confirming if you have heavy luggage or mobility concerns.',
        'Most riads offer porter service to help with luggage up the stairs, particularly at hillside properties — don\'t hesitate to ask.',
        'Book directly with the riad by WhatsApp where possible; many offer better rates than third-party booking platforms and can arrange airport or bus station pickup.',
        'Confirm your riad\'s exact location with a pinned map location before arrival — Chefchaouen\'s narrow blue streets are notoriously hard for taxi drivers and mapping apps to navigate precisely.',
        'Breakfast is included at nearly every property in Chefchaouen and is consistently praised in reviews — expect fresh bread, local honey, olive oil, and mint tea.',
      ],
    },
    {
      heading: 'Getting to Chefchaouen and Your Riad',
      paragraphs: [
        'For the full picture on reaching Chefchaouen from Marrakech, Fes, Tangier, Casablanca or Rabat, see our complete route guides — most riads can arrange pickup from the CTM bus station or a nearby drop-off point once you confirm your booking.',
      ],
      callout: {
        label: '🚗 Renting a Car for Your Chefchaouen Trip',
        body: 'If you\'re combining Chefchaouen with a wider Morocco road trip, we arrange rental cars with free meet & greet at Casablanca or Tangier Airport — economy from MAD 250/day (€23). See our <a href="/blog/chefchaouen-travel-guide">Chefchaouen Travel Guide</a> for what to see, or message us on WhatsApp to arrange pickup: <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    {
      question: 'What is the best riad to stay at in Chefchaouen?',
      answer: 'Casa Sabila is Chefchaouen\'s highest and most consistently rated property (4.8/5 from 320+ reviews), praised for genuine hospitality and central location, from roughly $46-67/night. For the best views, Dar Jasmine (4.6/5) offers a hilltop pool and panoramic Blue City vistas from $186-223/night, though it requires climbing significant stairs.',
    },
    {
      question: 'How much does a hotel cost in Chefchaouen?',
      answer: 'Budget riads run $46-67/night, mid-range historic riads with restaurants cost $67-110/night, and upscale hilltop properties with pools reach $186-223/night. Most rates don\'t include the roughly €3/person/night city tourist tax.',
    },
    {
      question: 'Which area of Chefchaouen should I stay in?',
      answer: 'For maximum walkability and easy exploration, stay near Plaza Uta el-Hammam in the Old Medina. For panoramic views (with a genuine climb), choose a hillside riad near Ras El Ma. For a quieter base still close to the centre, the Andalusian Quarter is a good middle ground.',
    },
    {
      question: 'Do Chefchaouen riads have stairs?',
      answer: 'Many do, particularly hillside properties like Dar Jasmine, which involves roughly 150+ steps with no elevator to reach the hotel — guests consistently say the view is worth it, but this genuinely matters if you have heavy luggage or mobility concerns. Medina-centre riads are typically more accessible.',
    },
    {
      question: 'Is breakfast included at Chefchaouen riads?',
      answer: 'Yes, at nearly every property, and it is consistently one of the most praised aspects in guest reviews — expect fresh bread, local honey, olive oil, eggs, and mint tea, often served on a rooftop terrace with city views.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is the highest rated hotel in Chefchaouen?', answer: 'Casa Sabila consistently ranks as one of the highest-rated properties in Chefchaouen, at 4.8/5 from over 320 reviews, praised particularly for its home-cooked breakfast and genuinely warm staff.' },
    { question: 'How many hotels are there in Chefchaouen?', answer: 'Chefchaouen has approximately 55-59 hotels and riads listed across major booking platforms, ranging from budget guesthouses at $46/night to boutique hilltop properties over $200/night.' },
    { question: 'Is Dar Jasmine worth the climb?', answer: 'Guest reviews consistently say yes — despite roughly 150+ steps to reach the hotel with no elevator, reviewers repeatedly describe the panoramic Blue City views, seasonal pool, and hammam experience as worth the effort, particularly for stays of 2+ nights.' },
  ],
  relatedDestinations: ['chefchaouen', 'tangier'],
  relatedPosts: ['chefchaouen-travel-guide', 'marrakech-to-chefchaouen-by-car', 'tangier-travel-guide', 'best-private-morocco-tours'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Où Dormir à Chefchaouen 2026 : Meilleurs Riads & Hôtels (Dar Jasmine, Casa Hassan)',
  metaDescription: 'Guide complet des meilleurs riads et hôtels à Chefchaouen 2026 : Dar Jasmine, Casa Sabila, Casa Hassan, Dar Echchaouen et plus. Vrais prix dès 46-223$/nuit, notes, et quel quartier de la Ville Bleue choisir.',
  title: 'Où Dormir à Chefchaouen 2026 : Meilleurs Riads & Hôtels Comparés',
  description: 'Réponse rapide : les meilleurs riads de Chefchaouen se regroupent autour de trois zones — Ras El Ma (près de la cascade, vues en hauteur), la Médina Ancienne (à quelques pas de la Place Uta el-Hammam), et le quartier andalou plus calme. Ce guide compare les options les mieux notées — Dar Jasmine, Casa Sabila, Casa Hassan, Dar Echchaouen et plus — avec vrais prix 2026, notes, et avis honnêtes sur chacune.',
  keyword: 'où dormir chefchaouen',
  coverImage: COVER,
  coverAlt: 'Où dormir à Chefchaouen 2026 — cour de riad traditionnel bleu avec carreaux terracotta et murs peints en bleu',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 14,
  intro: 'Réponse rapide : Chefchaouen compte environ 55+ hôtels et riads dans une médina bleue compacte, et l\'endroit où vous dormez façonne vraiment le voyage — un riad de colline près de Ras El Ma offre des vues panoramiques et une montée, tandis qu\'une maison d\'hôtes centre-médina vous place à quelques pas de la Place Uta el-Hammam et des meilleures rues photo. Ce guide couvre les propriétés les mieux notées et les plus recherchées à Chefchaouen — vrais prix 2026, ce que disent constamment les voyageurs, et quel type de voyageur convient à chacune.',
  sections: [
    {
      heading: 'Zones d\'Hébergement à Chefchaouen — Aperçu Rapide',
      paragraphs: ['La médina compacte de Chefchaouen signifie que chaque zone est praticable à pied, mais le caractère change notablement selon où vous atterrissez.'],
      table: {
        caption: 'Où dormir à Chefchaouen — zones comparées 2026',
        headers: ['Zone', 'Caractère', 'Idéal pour'],
        rows: [
          ['Ras El Ma / colline', 'Riads en hauteur avec vues panoramiques sur la Ville Bleue, près de la cascade, certains impliquent une montée raide (100+ marches)', 'Voyageurs privilégiant les vues et une ambiance plus calme'],
          ['Médina Ancienne / près Place Uta el-Hammam', 'Central, à quelques pas de la place principale, souks et restaurants', 'Premiers visiteurs voulant marchabilité maximale'],
          ['Quartier Andalou', 'Rues résidentielles plus calmes, toujours central', 'Voyageurs voulant une base plus calme sans sacrifier l\'emplacement'],
        ],
      },
    },
    {
      heading: 'Meilleurs Riads et Hôtels à Chefchaouen — Comparés',
      paragraphs: ['Les propriétés les mieux notées de Chefchaouen vont des maisons d\'hôtes budget aux riads boutique en hauteur avec piscine.'],
      table: {
        caption: 'Meilleurs riads et hôtels à Chefchaouen 2026',
        headers: ['Propriété', 'Note', 'Prix/nuit', 'Caractère'],
        rows: [
          ['Dar Jasmine', '4,6/5 (170+ avis)', 'Dès 186-223$', 'Hôtel 4 étoiles en hauteur avec piscine saisonnière style infinity, spa, vues panoramiques — comptez environ 150+ marches'],
          ['Casa Sabila', '4,8/5 (320+ avis) — souvent la propriété la mieux notée de la ville', 'Dès 46-67$', 'Centrale dans le quartier historique, terrasse sur le toit, petit-déjeuner maison, hospitalité chaleureuse'],
          ['Casa Hassan', '4,0/5 (425+ avis)', 'Dès 62-109$', 'Riad historique à 2 minutes de la place principale, restaurant sur place'],
          ['Dar Echchaouen', '4,5/5 (940+ avis) — la propriété la plus commentée', 'Milieu de gamme', 'Grande maison d\'hôtes bien établie'],
          ['Riad Alhambra', '4,4/5 (25+ avis)', 'Dès 54-67$', 'Économique, terrasse sur le toit, petit-déjeuner gratuit'],
          ['Dar Meziana', '4,5/5 (290+ avis)', 'Dès 81$', 'Bonne option milieu de gamme'],
          ['Dar Hannan Hotel Riad', '4,0/5 (90+ avis)', 'Dès 56$', 'Économique, bien situé'],
        ],
      },
      callout: {
        label: '💡 Lequel Réserver ?',
        body: 'Pour la meilleure vue et un séjour spécial : Dar Jasmine, mais confirmez que vous pouvez gérer les marches. Pour le meilleur rapport qualité-prix avec une hospitalité chaleureuse : Casa Sabila. Pour la commodité centrale avec caractère historique : Casa Hassan. Pour le pari le plus sûr avec la plus grande base d\'avis : Dar Echchaouen.',
      },
    },
    {
      heading: 'Vrais Prix 2026 par Budget',
      paragraphs: ['Chefchaouen reste l\'une des destinations les plus abordables du Maroc pour l\'hébergement comparé à Marrakech ou Fès.'],
      table: {
        caption: 'Prix hébergement Chefchaouen par budget 2026',
        headers: ['Budget', 'Prix/nuit', 'À quoi s\'attendre'],
        rows: [
          ['Économique', '46-67$ (42-62€)', 'Casa Sabila, Riad Alhambra, Dar Hannan — chambres propres, terrasses sur le toit'],
          ['Milieu de gamme', '67-110$ (62-101€)', 'Casa Hassan, Dar Meziana — riads historiques avec restaurants'],
          ['Haut de gamme', '186-223$ (172-206€)', 'Dar Jasmine — 4 étoiles en hauteur avec piscine, spa, vues panoramiques'],
        ],
      },
      callout: {
        label: '💰 Note Pratique',
        body: 'Chefchaouen applique une taxe de séjour d\'environ 3€ par personne par nuit, non incluse dans la plupart des tarifs affichés. De nombreux riads de colline (dont Dar Jasmine) impliquent de vraies escaliers pour atteindre la propriété.',
      },
    },
    {
      heading: 'Près de la Cascade — Ras El Ma',
      paragraphs: ['Plusieurs des propriétés les mieux notées de Chefchaouen, dont Dar Jasmine, se trouvent à courte distance de Ras El Ma — la source naturelle et petite cascade en bordure de la médina où les habitants lavent laine et vêtements.'],
    },
    {
      heading: 'Conseils de Réservation pour Chefchaouen',
      paragraphs: ['Quelques notes pratiques qui font la différence entre un séjour fluide et frustrant.'],
      list: [
        'Demandez au sujet des escaliers avant de réserver un riad de colline — plusieurs des propriétés les mieux vues impliquent 100-150+ marches sans ascenseur.',
        'La plupart des riads offrent un service de porteur pour les bagages dans les escaliers.',
        'Réservez directement avec le riad par WhatsApp quand possible ; beaucoup offrent de meilleurs tarifs.',
        'Confirmez l\'emplacement exact de votre riad avec une localisation épinglée avant l\'arrivée.',
        'Le petit-déjeuner est inclus dans presque chaque propriété et constamment loué dans les avis.',
      ],
    },
    {
      heading: 'Rejoindre Chefchaouen et Votre Riad',
      paragraphs: ['Pour le tableau complet sur comment rejoindre Chefchaouen, voir nos guides d\'itinéraires complets.'],
      callout: {
        label: '🚗 Louer une Voiture pour Votre Voyage à Chefchaouen',
        body: 'Si vous combinez Chefchaouen avec un road trip plus large au Maroc, nous organisons des locations avec accueil gratuit à l\'aéroport de Casablanca ou Tanger — économique dès MAD 250/jour (23€). Voir notre <a href="/blog/guide-voyage-chefchaouen">Guide Voyage Chefchaouen</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Quel est le meilleur riad où dormir à Chefchaouen ?', answer: 'Casa Sabila est la propriété la plus haute et constamment notée de Chefchaouen (4,8/5 sur 320+ avis), louée pour son hospitalité authentique, dès environ 46-67$/nuit.' },
    { question: 'Combien coûte un hôtel à Chefchaouen ?', answer: 'Les riads économiques coûtent 46-67$/nuit, les riads historiques milieu de gamme avec restaurants 67-110$/nuit, et les propriétés haut de gamme en hauteur avec piscine atteignent 186-223$/nuit.' },
    { question: 'Dans quelle zone de Chefchaouen dois-je dormir ?', answer: 'Pour la marchabilité maximale, dormez près de la Place Uta el-Hammam dans la Médina Ancienne. Pour des vues panoramiques, choisissez un riad de colline près de Ras El Ma.' },
    { question: 'Les riads de Chefchaouen ont-ils des escaliers ?', answer: 'Beaucoup oui, particulièrement les propriétés de colline comme Dar Jasmine qui implique environ 150+ marches sans ascenseur.' },
    { question: 'Le petit-déjeuner est-il inclus dans les riads de Chefchaouen ?', answer: 'Oui, dans presque chaque propriété, et c\'est constamment l\'un des aspects les plus loués dans les avis clients.' },
  ],
  peopleAlsoAsk: [
    { question: 'Quel est l\'hôtel le mieux noté à Chefchaouen ?', answer: 'Casa Sabila se classe constamment parmi les propriétés les mieux notées de Chefchaouen, à 4,8/5 sur plus de 320 avis.' },
    { question: 'Combien y a-t-il d\'hôtels à Chefchaouen ?', answer: 'Chefchaouen compte environ 55-59 hôtels et riads listés sur les principales plateformes de réservation.' },
    { question: 'Dar Jasmine vaut-il la montée ?', answer: 'Les avis clients disent constamment oui — malgré environ 150+ marches, les vues panoramiques et la piscine saisonnière valent l\'effort selon les avis.' },
  ],
  relatedDestinations: ['chefchaouen', 'tangier'],
  relatedPosts: ['guide-voyage-chefchaouen', 'marrakech-a-chefchaouen-en-voiture', 'guide-voyage-tanger', 'meilleurs-circuits-prives-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'أين تقيم بشفشاون 2026: أفضل الرياضات والفنادق',
  metaDescription: 'دليل شامل لأفضل الرياضات والفنادق بشفشاون 2026: دار جاسمين، كازا سابيلا، كازا حسن، دار الشاون والمزيد. أسعار حقيقية، تقييمات، وأي حي من المدينة الزرقاء تختار.',
  title: 'أين تقيم بشفشاون 2026: أفضل الرياضات والفنادق مقارنة',
  description: 'إجابة سريعة: أفضل رياضات شفشاون تتجمع حول ثلاثة مواقع — رأس الماء (قرب الشلال، إطلالات مرتفعة)، المدينة العتيقة القديمة (خطوات من ساحة أوطة الحمام)، والحي الأندلسي الأهدأ. يقارن هذا الدليل أفضل الخيارات تقييماً — دار جاسمين وكازا سابيلا وكازا حسن ودار الشاون والمزيد — بأسعار حقيقية 2026 وتقييمات وملاحظات صادقة.',
  keyword: 'أين تقيم شفشاون',
  coverImage: COVER,
  coverAlt: 'أين تقيم بشفشاون 2026 — فناء رياض أزرق تقليدي ببلاط تراكوتا وجدران مطلية بالأزرق',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 14,
  intro: 'إجابة سريعة: تضم شفشاون حوالي 55+ فندقاً ورياضاً بمدينة عتيقة زرقاء مدمجة، ومكان إقامتك يشكل الرحلة فعلاً — رياض على تل قرب رأس الماء يقدم إطلالات بانورامية وصعوداً، بينما دار ضيافة بوسط المدينة العتيقة يضعك خطوات من ساحة أوطة الحمام. يغطي هذا الدليل أعلى العقارات تقييماً وبحثاً بشفشاون — أسعار حقيقية 2026 وما يقوله الضيوف باستمرار.',
  sections: [
    {
      heading: 'مناطق الإقامة بشفشاون — نظرة سريعة',
      paragraphs: ['المدينة العتيقة المدمجة لشفشاون تعني أن كل منطقة قابلة للمشي، لكن الطابع يتغير ملحوظاً حسب أين تنزل.'],
      table: {
        caption: 'أين تقيم بشفشاون — المناطق مقارنة 2026',
        headers: ['المنطقة', 'الطابع', 'الأنسب لـ'],
        rows: [
          ['رأس الماء / التل', 'رياضات على تل بإطلالات بانورامية، قرب الشلال، بعضها يتضمن صعوداً حاداً', 'المسافرون الذين يفضلون الإطلالات'],
          ['المدينة العتيقة القديمة / قرب ساحة أوطة الحمام', 'مركزي، خطوات من الساحة الرئيسية', 'الزوار للمرة الأولى'],
          ['الحي الأندلسي', 'شوارع سكنية أهدأ، لا يزال مركزياً', 'المسافرون الباحثون عن قاعدة أهدأ'],
        ],
      },
    },
    {
      heading: 'أفضل الرياضات والفنادق بشفشاون — مقارنة',
      paragraphs: ['عقارات شفشاون الأعلى تقييماً تمتد من دور ضيافة اقتصادية لرياضات بوتيك على تل بمسبح.'],
      table: {
        caption: 'أفضل الرياضات والفنادق بشفشاون 2026',
        headers: ['العقار', 'التقييم', 'السعر/ليلة', 'الطابع'],
        rows: [
          ['دار جاسمين', '4.6/5 (+170 تقييم)', 'من 186-223$', 'فندق 4 نجوم على تل بمسبح موسمي وسبا وإطلالات بانورامية — توقع حوالي 150+ درجة'],
          ['كازا سابيلا', '4.8/5 (+320 تقييم) — غالباً الأعلى تقييماً بالمدينة', 'من 46-67$', 'مركزية بالحي التاريخي، تراس بالسطح، فطور منزلي'],
          ['كازا حسن', '4.0/5 (+425 تقييم)', 'من 62-109$', 'رياض تاريخي على بعد دقيقتين من الساحة الرئيسية'],
          ['دار الشاون', '4.5/5 (+940 تقييم) — الأكثر تقييماً بشفشاون', 'متوسط', 'دار ضيافة كبيرة راسخة'],
          ['رياض الحمراء', '4.4/5 (+25 تقييم)', 'من 54-67$', 'اقتصادي، تراس بالسطح، فطور مجاني'],
          ['دار مزيانة', '4.5/5 (+290 تقييم)', 'من 81$', 'خيار متوسط جيد'],
        ],
      },
      callout: {
        label: '💡 أيها تحجز؟',
        body: 'لأفضل إطلالة: دار جاسمين، لكن أكد قدرتك على الدرجات. لأفضل قيمة بضيافة دافئة فعلاً: كازا سابيلا. للراحة المركزية بطابع تاريخي: كازا حسن. للخيار الأكثر أماناً بأكبر قاعدة تقييمات: دار الشاون.',
      },
    },
    {
      heading: 'أسعار حقيقية 2026 حسب الميزانية',
      paragraphs: ['تبقى شفشاون من أكثر وجهات المغرب قيمةً للإقامة مقارنة بمراكش أو فاس.'],
      table: {
        caption: 'أسعار إقامة شفشاون حسب الميزانية 2026',
        headers: ['الميزانية', 'السعر/ليلة', 'ماذا تتوقع'],
        rows: [
          ['اقتصادية', '46-67$ (42-62€)', 'كازا سابيلا، رياض الحمراء — غرف نظيفة، تراسات بالسطح'],
          ['متوسطة', '67-110$ (62-101€)', 'كازا حسن، دار مزيانة — رياضات تاريخية بمطاعم'],
          ['راقية', '186-223$ (172-206€)', 'دار جاسمين — 4 نجوم على تل بمسبح وسبا'],
        ],
      },
      callout: {
        label: '💰 ملاحظة عملية',
        body: 'تفرض شفشاون ضريبة سياحة مدينة حوالي 3€ للشخص لكل ليلة، غير مشمولة بمعظم الأسعار المعروضة.',
      },
    },
    {
      heading: 'قرب الشلال — رأس الماء',
      paragraphs: ['عدة من عقارات شفشاون الأعلى تقييماً، بما فيها دار جاسمين، تقع على مسافة قصيرة من رأس الماء.'],
    },
    {
      heading: 'نصائح حجز لشفشاون',
      paragraphs: ['بعض الملاحظات العملية التي تصنع الفرق.'],
      list: [
        'اسأل عن الدرجات قبل حجز رياض على تل.',
        'معظم الرياضات تقدم خدمة حمّال للأمتعة.',
        'احجز مباشرة مع الرياض عبر واتساب متى أمكن.',
        'أكد موقع رياضك الدقيق قبل الوصول.',
        'الفطور مشمول في تقريباً كل عقار.',
      ],
    },
    {
      heading: 'الوصول لشفشاون ورياضك',
      paragraphs: ['للصورة الكاملة عن الوصول لشفشاون، راجع أدلة مساراتنا الشاملة.'],
      callout: {
        label: '🚗 استأجر سيارة لرحلتك لشفشاون',
        body: 'إذا كنت تجمع شفشاون مع رحلة برية أوسع بالمغرب، نرتب تأجير سيارات باستقبال مجاني بمطار الدار البيضاء أو طنجة — اقتصادية من MAD 250/يوم (23€). راجع <a href="/blog/dalil-safar-shafshawan">دليل السفر لشفشاون</a>، أو واتساب: <a href="https://wa.me/212634276534">212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'ما أفضل رياض للإقامة بشفشاون؟', answer: 'كازا سابيلا العقار الأعلى والأكثر تقييماً باستمرار بشفشاون (4.8/5 من +320 تقييم)، من حوالي 46-67$/ليلة.' },
    { question: 'كم تكلفة فندق بشفشاون؟', answer: 'الرياضات الاقتصادية تكلف 46-67$/ليلة، المتوسطة 67-110$/ليلة، والراقية بمسبح تصل 186-223$/ليلة.' },
    { question: 'أي منطقة بشفشاون أقيم بها؟', answer: 'للمشي الأقصى، أقم قرب ساحة أوطة الحمام. للإطلالات البانورامية، اختر رياضاً على تل قرب رأس الماء.' },
    { question: 'هل رياضات شفشاون لديها درجات؟', answer: 'كثير منها نعم، خاصة العقارات على التل كدار جاسمين التي تتضمن حوالي 150+ درجة بلا مصعد.' },
    { question: 'هل الفطور مشمول برياضات شفشاون؟', answer: 'نعم، في تقريباً كل عقار، وهو باستمرار من أكثر الجوانب المحمودة بالتقييمات.' },
  ],
  peopleAlsoAsk: [
    { question: 'ما الفندق الأعلى تقييماً بشفشاون؟', answer: 'كازا سابيلا تُصنَّف باستمرار من أعلى العقارات تقييماً بشفشاون، 4.8/5 من أكثر من 320 تقييماً.' },
    { question: 'كم عدد الفنادق بشفشاون؟', answer: 'تضم شفشاون حوالي 55-59 فندقاً ورياضاً مدرجة عبر منصات الحجز الرئيسية.' },
    { question: 'هل يستحق دار جاسمين الصعود؟', answer: 'تقييمات الضيوف تقول نعم باستمرار — رغم حوالي 150+ درجة، الإطلالات البانورامية والمسبح الموسمي تستحق الجهد.' },
  ],
  relatedDestinations: ['chefchaouen', 'tangier'],
  relatedPosts: ['dalil-safar-shafshawan', 'min-marakish-ila-shafshawan-bis-sayyara', 'dalil-safar-tanja', 'afdal-jawlat-khasa-maghrib'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);