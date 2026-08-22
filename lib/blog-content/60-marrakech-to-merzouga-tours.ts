import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'marrakech-to-merzouga-tours-compared';
const SLUG_FR = 'excursion-marrakech-merzouga-circuits';
const SLUG_AR = 'rihla-marakish-mirzuqa-jawlat-fakhira';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(5614643);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Marrakech to Merzouga Tours 2026: 3, 4 & 5 Days Compared, Real Prices',
  metaDescription: 'Compare Marrakech to Merzouga desert tours 2026: 3-day, 4-day and 5-day itineraries, real prices, what each includes, and how to choose between shared group and private options.',
  title: 'Marrakech to Merzouga Tours 2026: 3, 4 & 5 Days Compared',
  description: 'Quick answer: Marrakech to Merzouga tours typically run 3, 4, or 5 days, following the same core route through Ait Ben Haddou and the Dades or Todra Gorges before reaching the Erg Chebbi dunes — the difference between durations is pace, not destinations. This guide compares real 2026 pricing and itineraries so you can pick the right length for your trip.',
  keyword: 'marrakech to merzouga',
  coverImage: COVER,
  coverAlt: 'Marrakech to Merzouga tour 2026 — 4x4 vehicle driving through the Atlas Mountains toward the Sahara desert',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 12,
  intro: 'Quick answer: every Marrakech to Merzouga tour follows essentially the same route — Ait Ben Haddou, the Tizi n\'Tichka pass, Dades or Todra Gorges, and the Erg Chebbi dunes for a desert camp night — the real difference between a 3, 4 or 5-day version is how rushed or relaxed the pace feels. This guide compares real 2026 pricing and what each duration actually includes, so you can choose based on your available time rather than guesswork.',
  sections: [
    {
      heading: 'Marrakech to Merzouga — Duration Comparison',
      paragraphs: ['The core route is fixed; duration determines how many stops you make and how much driving you do per day.'],
      table: {
        caption: 'Marrakech to Merzouga tour durations compared 2026',
        headers: ['Duration', 'Typical price/person', 'Pace', 'Best for'],
        rows: [
          ['3 days / 2 nights', 'From $250-350', 'Fast — long driving days, one desert night', 'Limited time, want the essential Sahara experience'],
          ['4 days / 3 nights', 'From $350-450', 'Balanced — includes Todra or Dades Gorge properly', 'Most popular choice — genuine balance of pace and content'],
          ['5 days / 4 nights', 'From $450-600', 'Relaxed — extra stops, more time in each location', 'Travelers wanting to see more without rushing'],
        ],
      },
      callout: {
        label: '💡 Direct Answer',
        body: 'For most travelers, the 4-day version offers the best balance — enough time to properly see Ait Ben Haddou, both gorges, and the desert without excessive driving fatigue. Choose 3 days only if genuinely time-constrained.',
      },
    },
    {
      heading: 'What Every Itinerary Includes',
      paragraphs: ['Regardless of duration, these elements appear in nearly every tour.'],
      list: [
        'Private or shared 4x4/minivan transport',
        'Ait Ben Haddou kasbah stop',
        'Crossing the Tizi n\'Tichka pass',
        'Dades and/or Todra Gorge',
        'Sunset camel trek into Erg Chebbi dunes',
        'One night in a desert camp (dinner + breakfast included)',
        'Sunrise view over the dunes',
      ],
    },
    {
      heading: 'Private vs Shared Group',
      paragraphs: ['This affects price more than duration does.'],
      table: {
        caption: 'Private vs shared Marrakech-Merzouga tours',
        headers: ['Type', 'Price impact', 'Best for'],
        rows: [
          ['Shared group', 'Lowest cost per person', 'Solo travelers, budget-conscious'],
          ['Private', '2-3x shared price', 'Couples, families wanting flexibility'],
        ],
      },
      callout: {
        label: '🎫 Book Your Tour',
        body: 'See verified private and shared options with real reviews in our <a href="/blog/best-private-morocco-tours">Best Private Morocco Tours guide</a>, several of which follow this exact Merzouga route.',
      },
    },
    {
      heading: 'Self-Drive Alternative',
      paragraphs: ['If you\'d rather drive yourself, this same route is fully doable independently.'],
      callout: {
        label: '🚗 Rent a Car for This Route',
        body: 'A Dacia Duster 4x4 handles the mountain passes and desert approaches well — MAD 350/day (€32). Pick up in Marrakech or at Casablanca Airport. See our full <a href="/blog/sahara-desert-morocco-travel-guide">Sahara Desert Travel Guide</a> for self-drive logistics, or message us: <a href="https://wa.me/212634276534">WhatsApp +212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'How many days do I need for Marrakech to Merzouga?', answer: '3 days is the minimum for a genuine Sahara experience, 4 days offers the best balance of pace and content, and 5 days suits travelers wanting a relaxed trip with extra stops.' },
    { question: 'How much does a Marrakech to Merzouga tour cost?', answer: 'Shared group tours start around $250-350 for 3 days; private tours run 2-3x higher. 4-day tours typically cost $350-450, 5-day tours $450-600 per person.' },
    { question: 'What is included in a Marrakech to Merzouga tour?', answer: 'Nearly all tours include transport, Ait Ben Haddou, the Tizi n\'Tichka pass, at least one gorge (Dades or Todra), a camel trek, and one night in a desert camp with dinner and breakfast.' },
  ],
  peopleAlsoAsk: [
    { question: 'Is 3 days enough for Marrakech to Merzouga?', answer: 'Yes for the essentials, though it means longer driving days and less time at each stop compared to 4 or 5-day versions.' },
  ],
  relatedDestinations: ['marrakech'],
  relatedPosts: ['sahara-desert-morocco-travel-guide', 'best-private-morocco-tours', 'ouarzazate-travel-guide', 'marrakech-car-rental-airport-transfer'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Excursion Marrakech Merzouga 2026 : 3, 4 & 5 Jours Comparés, Vrais Prix',
  metaDescription: 'Comparez les circuits désert Marrakech Merzouga 2026 : itinéraires 3, 4 et 5 jours, vrais prix, ce qui est inclus, et comment choisir entre groupe partagé et option privée.',
  title: 'Excursion Marrakech Merzouga 2026 : 3, 4 & 5 Jours Comparés',
  description: 'Réponse rapide : les circuits Marrakech-Merzouga durent généralement 3, 4 ou 5 jours, suivant le même itinéraire via Ait Ben Haddou et les gorges du Dadès ou Todra avant d\'atteindre les dunes de l\'Erg Chebbi.',
  keyword: 'excursion marrakech merzouga',
  coverImage: COVER,
  coverAlt: 'Excursion Marrakech Merzouga 2026 — véhicule 4x4 traversant l\'Atlas vers le désert du Sahara',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 12,
  intro: 'Réponse rapide : chaque excursion Marrakech-Merzouga suit essentiellement le même itinéraire — Ait Ben Haddou, le col du Tizi n\'Tichka, les gorges du Dadès ou Todra, et les dunes de l\'Erg Chebbi pour une nuit en camp désert.',
  sections: [
    {
      heading: 'Marrakech à Merzouga — Comparaison des Durées',
      paragraphs: ['L\'itinéraire principal est fixe ; la durée détermine le nombre d\'arrêts.'],
      table: {
        caption: 'Durées excursion Marrakech-Merzouga comparées 2026',
        headers: ['Durée', 'Prix typique/personne', 'Rythme', 'Idéal pour'],
        rows: [
          ['3 jours / 2 nuits', 'Dès 250-350$', 'Rapide', 'Temps limité'],
          ['4 jours / 3 nuits', 'Dès 350-450$', 'Équilibré', 'Choix le plus populaire'],
          ['5 jours / 4 nuits', 'Dès 450-600$', 'Détendu', 'Voyageurs voulant plus de temps'],
        ],
      },
      callout: {
        label: '💡 Réponse Directe',
        body: 'Pour la plupart des voyageurs, la version 4 jours offre le meilleur équilibre.',
      },
    },
    {
      heading: 'Ce que Chaque Itinéraire Inclut',
      paragraphs: ['Quelle que soit la durée, ces éléments apparaissent dans presque chaque circuit.'],
      list: [
        'Transport privé ou partagé 4x4/minivan',
        'Arrêt kasbah Ait Ben Haddou',
        'Traversée du col Tizi n\'Tichka',
        'Gorges du Dadès et/ou Todra',
        'Trek chameau coucher de soleil dans les dunes',
        'Une nuit en camp désert',
      ],
    },
    {
      heading: 'Privé vs Groupe Partagé',
      paragraphs: ['Cela affecte le prix plus que la durée.'],
      callout: {
        label: '🎫 Réservez Votre Circuit',
        body: 'Voir options privées et partagées vérifiées dans notre <a href="/blog/meilleurs-circuits-prives-maroc">guide Meilleurs Circuits Privés au Maroc</a>.',
      },
    },
    {
      heading: 'Alternative Autoconduite',
      paragraphs: ['Si vous préférez conduire vous-même, cet itinéraire est faisable indépendamment.'],
      callout: {
        label: '🚗 Louez une Voiture',
        body: 'Un Dacia Duster 4x4 dès MAD 350/jour (32€). Voir notre <a href="/blog/guide-voyage-sahara-maroc">Guide Voyage Sahara</a>, ou WhatsApp : <a href="https://wa.me/212634276534">+212 634 276 534</a>',
      },
    },
  ],
  faqs: [
    { question: 'Combien de jours faut-il de Marrakech à Merzouga ?', answer: '3 jours minimum, 4 jours offre le meilleur équilibre, 5 jours pour un rythme détendu.' },
    { question: 'Combien coûte un circuit Marrakech-Merzouga ?', answer: 'Circuits partagés dès 250-350$ pour 3 jours ; circuits privés 2-3x plus.' },
  ],
  peopleAlsoAsk: [
    { question: '3 jours suffisent-ils pour Marrakech-Merzouga ?', answer: 'Oui pour l\'essentiel, mais journées de conduite plus longues.' },
  ],
  relatedDestinations: ['marrakech'],
  relatedPosts: ['guide-voyage-sahara-maroc', 'meilleurs-circuits-prives-maroc', 'guide-voyage-ouarzazate', 'location-voiture-marrakech-aeroport'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'رحلة فاخرة من مراكش إلى مرزوقة 2026: جولات خاصة للصحراء، أسعار وتفاصيل',
  metaDescription: 'أفضل رحلات صحراوية فاخرة من مراكش إلى مرزوقة 2026 للمسافرين من الرياض وجدة ودبي والدوحة والكويت: سائق خاص، سيارة فاخرة، مخيم صحراوي راقٍ، 3-5 أيام، حجز مباشر عبر واتساب.',
  title: 'رحلة فاخرة من مراكش إلى مرزوقة 2026: جولات خاصة للصحراء مع سائق',
  description: 'إجابة سريعة: تستغرق الرحلة الفاخرة من مراكش إلى مرزوقة عادةً 3-5 أيام، عبر آيت بن حدو وممر تيزي نتيشكا ومحاجر دادس أو تودرا وصولاً لكثبان عرق الشبي. للمسافرين القادمين من مطارات الرياض (RUH) وجدة (JED) ودبي (DXB) والدوحة (DOH) والكويت (KWI) عبر مطار الدار البيضاء أو مراكش، هذا الدليل يقارن الخيارات الفاخرة الحقيقية بأسعارها ومحتواها الكامل.',
  keyword: 'رحلة فاخرة مراكش مرزوقة',
  coverImage: COVER,
  coverAlt: 'رحلة فاخرة من مراكش إلى مرزوقة 2026 — سيارة دفع رباعي فاخرة تعبر جبال الأطلس نحو الصحراء الكبرى',
  publishedISO: '2026-08-19',
  updatedISO: '2026-08-19',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 12,
  intro: 'إجابة سريعة: تتبع كل رحلة من مراكش إلى مرزوقة نفس المسار الأساسي فعلياً — آيت بن حدو، ممر تيزي نتيشكا، محاجر دادس أو تودرا، وكثبان عرق الشبي لليلة في مخيم صحراوي — والفرق الحقيقي بين نسخة 3 أو 4 أو 5 أيام هو مدى الاسترخاء في الوتيرة. للمسافرين المقيمين بالخليج والقادمين عبر مطارات الرياض أو جدة أو دبي أو أبوظبي أو الدوحة أو الكويت، نقدم هنا مقارنة صادقة بالأسعار الحقيقية لعام 2026 وما تشمله كل رحلة، مع خيارات السيارات الفاخرة والسائق الخاص التي يفضلها معظم زوارنا من دول الخليج.',
  sections: [
    {
      heading: 'من مراكش إلى مرزوقة — مقارنة المدد',
      paragraphs: ['المسار الأساسي ثابت؛ المدة تحدد عدد التوقفات ووتيرة الرحلة. لمسافري الخليج الباحثين عن تجربة مريحة وخاصة، نوصي بالخيار الفاخر مع سائق خاص وسيارة دفع رباعي حديثة.'],
      table: {
        caption: 'مقارنة مدد رحلة مراكش-مرزوقة 2026',
        headers: ['المدة', 'السعر النموذجي/شخص', 'الوتيرة', 'الأنسب لـ'],
        rows: [
          ['3 أيام / ليلتان', 'من 250-350$ (خيار خاص فاخر: أعلى)', 'سريعة', 'الوقت المحدود'],
          ['4 أيام / 3 ليالٍ', 'من 350-450$', 'متوازنة', 'الخيار الأكثر شعبية — الأنسب لزوار الخليج'],
          ['5 أيام / 4 ليالٍ', 'من 450-600$', 'مسترخية', 'المسافرون الباحثون عن وقت أكثر براحة'],
        ],
      },
      callout: {
        label: '💡 إجابة مباشرة',
        body: 'لمعظم المسافرين من الخليج، نسخة 4 أيام بسيارة فاخرة وسائق خاص تقدم أفضل توازن بين الراحة والاستكشاف — وقت كافٍ لرؤية آيت بن حدو والمحاجر والصحراء دون إرهاق قيادة مفرط.',
      },
    },
    {
      heading: 'ماذا يشمل كل برنامج',
      paragraphs: ['بغض النظر عن المدة، هذه العناصر تظهر في تقريباً كل رحلة — ويمكن ترقيتها لتجربة فاخرة بالكامل.'],
      list: [
        'سيارة دفع رباعي فاخرة خاصة مع سائق محترف',
        'توقف قصبة آيت بن حدو',
        'عبور ممر تيزي نتيشكا',
        'محاجر دادس و/أو تودرا',
        'رحلة جمل عند الغروب نحو كثبان عرق الشبي',
        'ليلة في مخيم صحراوي فاخر (عشاء وفطور مشمولان)',
        'مشاهدة شروق الشمس فوق الكثبان',
      ],
    },
    {
      heading: 'الخيار الخاص الفاخر مقابل المجموعة المشتركة',
      paragraphs: ['هذا يؤثر على السعر أكثر من المدة. لمسافري الخليج، نوصي دائماً بالخيار الخاص للخصوصية والمرونة الكاملة في الجدول.'],
      table: {
        caption: 'خاص فاخر مقابل مشترك — رحلات مراكش-مرزوقة',
        headers: ['النوع', 'تأثير السعر', 'الأنسب لـ'],
        rows: [
          ['مجموعة مشتركة', 'أقل تكلفة للشخص', 'المسافرون المنفردون'],
          ['خاص فاخر مع سائق', '2-3 أضعاف سعر المشترك', 'العائلات والأزواج من الخليج الباحثين عن الخصوصية والمرونة'],
        ],
      },
      callout: {
        label: '🎫 احجز رحلتك',
        body: 'راجع خيارات خاصة وفاخرة موثقة بتقييمات حقيقية في <a href="/blog/afdal-jawlat-khasa-maghrib">دليل أفضل الجولات الخاصة بالمغرب</a>، والعديد منها يتبع نفس مسار مرزوقة هذا بالضبط.',
      },
    },
    {
      heading: 'بديل السيارة الفاخرة مع سائق خاص',
      paragraphs: ['لمسافري الخليج الذين يفضلون سيارة فاخرة مخصصة بدلاً من جولة جماعية، نرتب هذا الخيار مباشرة.'],
      callout: {
        label: '🚗 احجز سيارتك الفاخرة لهذه الرحلة',
        body: 'سيارة دفع رباعي فاخرة (رنج روفر أو مرسيدس GLE) مع سائق محترف تناسب ممرات الجبال ومداخل الصحراء. استلام من مطار مراكش أو الدار البيضاء (CMN) — نستقبل الوافدين من الرياض وجدة والدمام ودبي وأبوظبي والدوحة والكويت. راجع <a href="/blog/dalil-safar-sahara-maghrib">دليل السفر للصحراء الشامل</a>، أو راسلنا مباشرة: <a href="https://wa.me/212634276534">واتساب 212 634 276 534+</a>',
      },
    },
  ],
  faqs: [
    { question: 'كم يوماً أحتاج من مراكش لمرزوقة؟', answer: '3 أيام الحد الأدنى لتجربة صحراوية حقيقية، 4 أيام تقدم أفضل توازن، و5 أيام تناسب المسافرين الباحثين عن رحلة مسترخية بتوقفات إضافية.' },
    { question: 'كم تكلفة رحلة فاخرة من مراكش لمرزوقة؟', answer: 'الجولات الجماعية المشتركة تبدأ من 250-350$ لـ3 أيام؛ الجولات الخاصة الفاخرة بسائق تتراوح 2-3 أضعاف ذلك. تكلفة 4 أيام عادةً 350-450$ للشخص، و5 أيام 450-600$.' },
    { question: 'ماذا تشمل رحلة مراكش-مرزوقة الفاخرة؟', answer: 'تشمل تقريباً كل الرحلات: سيارة فاخرة بسائق، آيت بن حدو، ممر تيزي نتيشكا، محجر واحد على الأقل، رحلة جمل، وليلة في مخيم صحراوي فاخر بعشاء وفطور.' },
    { question: 'هل يمكن الحجز من الرياض أو دبي أو جدة مباشرة؟', answer: 'نعم — نستقبل حجوزات من مسافري دول الخليج مباشرة عبر واتساب، مع ترتيب الاستلام من مطار الدار البيضاء أو مراكش فور الوصول، وتنسيق كامل لبرنامج فاخر يناسب تفضيلاتكم.' },
  ],
  peopleAlsoAsk: [
    { question: 'هل 3 أيام كافية من مراكش لمرزوقة؟', answer: 'نعم للأساسيات، لكن يعني أياماً أطول بالقيادة ووقتاً أقل بكل توقف مقارنة بنسخ 4 أو 5 أيام.' },
    { question: 'هل تتوفر سيارات فاخرة بسائق يتحدث العربية؟', answer: 'نعم، نرتب سائقين محترفين للرحلات الفاخرة، ويمكن تنسيق التواصل بالعربية عند الحجز عبر واتساب.' },
  ],
  relatedDestinations: ['marrakech'],
  relatedPosts: ['dalil-safar-sahara-maghrib', 'afdal-jawlat-khasa-maghrib', 'dalil-safar-warzazat', 'istijar-sayyara-matar-marakish'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);