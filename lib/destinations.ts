import type { Locale } from './i18n';

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;
export type LocalizedFAQs = Record<Locale, { question: string; answer: string }[]>;

export type Destination = {
  slug: string;
  region: LocalizedText;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  heroImage: string;
  geo: { lat: number; lng: number };
  highlights: LocalizedList;
  bestTimeToVisit: LocalizedText;
  durationDays: number;
  faqs: LocalizedFAQs;
};

function l(en: string, fr: string, ar: string): LocalizedText {
  return { en, fr, ar };
}
function ll(en: string[], fr: string[], ar: string[]): LocalizedList {
  return { en, fr, ar };
}
function lf(
  en: { question: string; answer: string }[],
  fr: { question: string; answer: string }[],
  ar: { question: string; answer: string }[],
): LocalizedFAQs {
  return { en, fr, ar };
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'marrakech',
    region: l('Marrakech-Safi', 'Marrakech-Safi', 'مراكش-آسفي'),
    name: l('Marrakech', 'Marrakech', 'مراكش'),
    tagline: l(
      'The Red City — souks, palaces & desert gateway',
      'La Ville Rouge — souks, palais et porte du désert',
      'المدينة الحمراء — أسواق وقصور وبوابة الصحراء',
    ),
    description: l(
      'Discover Marrakech, the imperial Red City of Morocco. Wander Jemaa el-Fnaa, get lost in the souks of the medina, admire the Bahia Palace and Majorelle Garden, and use the city as your gateway to the Atlas Mountains and Sahara.',
      'Découvrez Marrakech, la Ville Rouge impériale du Maroc. Flânez sur Jemaa el-Fna, perdez-vous dans les souks de la médina, admirez le Palais Bahia et le Jardin Majorelle, et partez à la découverte de l’Atlas et du Sahara.',
      'اكتشف مراكش، المدينة الحمراء الإمبراطورية في المغرب. تجوّل في ساحة جامع الفنا، وأبحر في أزقة الأسواق العتيقة، واستمتع بقصر الباهية وحديقة ماجوريل، واستخدم المدينة كبوابة للأطلس والصحراء.',
    ),
    heroImage: '/images/destinations/marrakech.jpg',
    geo: { lat: 31.6295, lng: -7.9811 },
    highlights: ll(
      [
        'Jemaa el-Fnaa square at sunset',
        'Bahia Palace & Saadian Tombs',
        'Majorelle Garden & YSL Museum',
        'Medina souks & artisan workshops',
        'Day trips to the Atlas Mountains',
      ],
      [
        'Place Jemaa el-Fna au coucher du soleil',
        'Palais Bahia & Tombeaux Saadiens',
        'Jardin Majorelle & Musée YSL',
        'Souks de la médina & artisans',
        'Excursions dans l’Atlas',
      ],
      [
        'ساحة جامع الفنا عند الغروب',
        'قصر الباهية وقبور السعديين',
        'حديقة ماجوريل ومتحف إيف سان لوران',
        'أسواق المدينة العتيقة',
        'رحلات يومية إلى جبال الأطلس',
      ],
    ),
    bestTimeToVisit: l(
      'March to May, and September to November',
      'De mars à mai et de septembre à novembre',
      'من مارس إلى مايو، ومن سبتمبر إلى نوفمبر',
    ),
    durationDays: 3,
    faqs: lf(
      [
        {
          question: 'How many days do I need in Marrakech?',
          answer:
            'Most travelers spend 3 to 4 days in Marrakech to cover the medina, palaces, gardens, and a day trip into the Atlas Mountains.',
        },
        {
          question: 'Is Marrakech safe for tourists?',
          answer:
            'Yes. Marrakech is generally safe for tourists. Use common-sense precautions in crowded areas of the medina and prefer official taxis or trusted private drivers.',
        },
        {
          question: 'What is the best way to get from Marrakech to the Sahara?',
          answer:
            'The most popular route is a 2- or 3-day private trip via Aït Ben Haddou and the Dadès Valley to Merzouga. MoroccoForYou can plan the itinerary and arrange a private driver.',
        },
      ],
      [
        {
          question: 'Combien de jours faut-il à Marrakech ?',
          answer:
            'La plupart des voyageurs passent 3 à 4 jours à Marrakech pour visiter la médina, les palais, les jardins et faire une excursion dans l’Atlas.',
        },
        {
          question: 'Marrakech est-elle sûre pour les touristes ?',
          answer:
            'Oui. Marrakech est globalement sûre. Restez prudent dans la médina aux heures d’affluence et préférez les taxis officiels ou chauffeurs privés de confiance.',
        },
        {
          question: 'Comment aller de Marrakech au Sahara ?',
          answer:
            'L’itinéraire classique est un circuit privé de 2 à 3 jours via Aït Ben Haddou et la vallée du Dadès jusqu’à Merzouga. MoroccoForYou organise tout.',
        },
      ],
      [
        {
          question: 'كم يومًا أحتاج في مراكش؟',
          answer:
            'يقضي معظم المسافرين من 3 إلى 4 أيام في مراكش لزيارة المدينة العتيقة والقصور والحدائق ورحلة يومية إلى جبال الأطلس.',
        },
        {
          question: 'هل مراكش آمنة للسياح؟',
          answer:
            'نعم، مراكش آمنة بشكل عام. خذ احتياطاتك في المدينة العتيقة المزدحمة، وفضّل سيارات الأجرة الرسمية أو السائقين الموثوقين.',
        },
        {
          question: 'ما أفضل طريقة للذهاب من مراكش إلى الصحراء؟',
          answer:
            'الطريقة الأشهر هي رحلة خاصة لمدة 2-3 أيام عبر آيت بن حدو ووادي دادس إلى مرزوكة. نتولى التنظيم بالكامل.',
        },
      ],
    ),
  },
  {
    slug: 'fes',
    region: l('Fès-Meknès', 'Fès-Meknès', 'فاس-مكناس'),
    name: l('Fes', 'Fès', 'فاس'),
    tagline: l(
      'The spiritual & cultural capital',
      'La capitale spirituelle et culturelle',
      'العاصمة الروحية والثقافية',
    ),
    description: l(
      'Fes is home to the world’s oldest continuously operating university and one of the largest car-free medieval medinas on earth. Lose yourself in Fes el-Bali, watch the tanneries from a leather shop’s terrace, and explore the imperial heritage of Morocco’s cultural capital.',
      'Fès abrite la plus ancienne université encore en activité au monde et l’une des plus vastes médinas piétonnes médiévales. Perdez-vous dans Fès el-Bali, observez les tanneries depuis une terrasse, et découvrez l’héritage impérial de la capitale culturelle marocaine.',
      'تضم فاس أقدم جامعة لا تزال تعمل في العالم وواحدة من أكبر المدن العتيقة الخالية من السيارات. تجوّل في فاس البالي، وشاهد المدابغ من شرفات محلات الجلد، واستكشف الإرث الإمبراطوري للعاصمة الثقافية للمغرب.',
    ),
    heroImage: '/images/destinations/fes.jpg',
    geo: { lat: 34.0181, lng: -5.0078 },
    highlights: ll(
      [
        'Medina of Fes el-Bali (UNESCO)',
        'Chouara tanneries',
        'Al-Qarawiyyin University & mosque',
        'Bou Inania & Al-Attarine Madrasas',
        'Royal Palace gates of Fes el-Jdid',
      ],
      [
        'Médina de Fès el-Bali (UNESCO)',
        'Tanneries Chouara',
        'Université et mosquée Al-Quaraouiyine',
        'Médersas Bou Inania et al-Attarine',
        'Portes du Palais Royal à Fès el-Jdid',
      ],
      [
        'المدينة العتيقة فاس البالي (يونسكو)',
        'مدابغ شوارة',
        'جامعة وجامع القرويين',
        'مدرستا بوعنانية والعطارين',
        'أبواب القصر الملكي بفاس الجديد',
      ],
    ),
    bestTimeToVisit: l(
      'April to June, and September to October',
      'D’avril à juin et septembre à octobre',
      'من أبريل إلى يونيو، ومن سبتمبر إلى أكتوبر',
    ),
    durationDays: 2,
    faqs: lf(
      [
        {
          question: 'Do I need a guide in the Fes medina?',
          answer:
            'A licensed guide is highly recommended for a first visit — the medina has thousands of alleys and a guide will save time and add context.',
        },
        {
          question: 'How far is Fes from Chefchaouen?',
          answer:
            'About 4 hours by private car. Many travelers combine Fes and Chefchaouen in a northern Morocco loop.',
        },
      ],
      [
        {
          question: 'Faut-il un guide dans la médina de Fès ?',
          answer:
            'Un guide officiel est vivement conseillé pour une première visite — la médina compte des milliers de ruelles et un guide vous fait gagner du temps.',
        },
        {
          question: 'Combien de temps entre Fès et Chefchaouen ?',
          answer:
            'Environ 4 heures en voiture privée. De nombreux voyageurs combinent Fès et Chefchaouen lors d’un circuit dans le nord.',
        },
      ],
      [
        {
          question: 'هل أحتاج إلى مرشد في مدينة فاس العتيقة؟',
          answer:
            'يُنصح بشدة باستئجار مرشد مرخّص في أول زيارة — لأن المدينة تضم آلاف الأزقة، وسيوفّر المرشد عليك الوقت ويثري التجربة.',
        },
        {
          question: 'كم تبعد فاس عن شفشاون؟',
          answer:
            'حوالي 4 ساعات بالسيارة الخاصة. يجمع الكثير من المسافرين بين فاس وشفشاون في جولة شمالية.',
        },
      ],
    ),
  },
  {
    slug: 'chefchaouen',
    region: l(
      'Tanger-Tétouan-Al Hoceïma',
      'Tanger-Tétouan-Al Hoceïma',
      'طنجة-تطوان-الحسيمة',
    ),
    name: l('Chefchaouen', 'Chefchaouen', 'شفشاون'),
    tagline: l(
      'The Blue Pearl of the Rif',
      'La Perle Bleue du Rif',
      'لؤلؤة الريف الزرقاء',
    ),
    description: l(
      'Tucked into the Rif Mountains, Chefchaouen is famous for its blue-washed medina, relaxed pace, and mountain hiking. A perfect 1–2 day stop between Fes and Tangier.',
      'Nichée dans le Rif, Chefchaouen est célèbre pour sa médina bleue, son rythme paisible et ses randonnées. Une halte parfaite de 1 à 2 jours entre Fès et Tanger.',
      'تقع شفشاون في جبال الريف، وتشتهر بمدينتها الزرقاء وإيقاعها الهادئ والمشي الجبلي. محطة مثالية لمدة 1-2 يوم بين فاس وطنجة.',
    ),
    heroImage: '/images/destinations/chefchaouen.jpg',
    geo: { lat: 35.1715, lng: -5.2697 },
    highlights: ll(
      [
        'Blue medina photo walks',
        'Spanish Mosque viewpoint at sunset',
        'Plaza Uta el-Hammam',
        'Akchour waterfalls day hike',
      ],
      [
        'Promenades photo dans la médina bleue',
        'Point de vue de la Mosquée Espagnole au coucher du soleil',
        'Place Uta el-Hammam',
        'Randonnée aux cascades d’Akchour',
      ],
      [
        'جولات تصوير في المدينة الزرقاء',
        'إطلالة المسجد الإسباني وقت الغروب',
        'ساحة وطا الحمام',
        'رحلة يومية لشلالات أقشور',
      ],
    ),
    bestTimeToVisit: l(
      'April to June, and September to October',
      'D’avril à juin et septembre à octobre',
      'من أبريل إلى يونيو، ومن سبتمبر إلى أكتوبر',
    ),
    durationDays: 2,
    faqs: lf(
      [
        {
          question: 'How do I get to Chefchaouen?',
          answer:
            'There is no airport in Chefchaouen. Most travelers arrive by private car or bus from Fes (4h), Tangier (2.5h), or Casablanca (5.5h).',
        },
      ],
      [
        {
          question: 'Comment se rendre à Chefchaouen ?',
          answer:
            'Il n’y a pas d’aéroport à Chefchaouen. La plupart des voyageurs arrivent en voiture privée ou en bus depuis Fès (4h), Tanger (2h30) ou Casablanca (5h30).',
        },
      ],
      [
        {
          question: 'كيف أصل إلى شفشاون؟',
          answer:
            'لا يوجد مطار في شفشاون. يصل أغلب المسافرين بالسيارة الخاصة أو الحافلة من فاس (4 ساعات)، طنجة (2.5 ساعة)، أو الدار البيضاء (5.5 ساعة).',
        },
      ],
    ),
  },
  {
    slug: 'sahara-merzouga',
    region: l('Drâa-Tafilalet', 'Drâa-Tafilalet', 'درعة-تافيلالت'),
    name: l('Sahara — Merzouga', 'Sahara — Merzouga', 'الصحراء — مرزوكة'),
    tagline: l(
      'Erg Chebbi dunes & desert camps',
      'Dunes de l’Erg Chebbi & camps du désert',
      'كثبان عرق الشبي ومخيمات الصحراء',
    ),
    description: l(
      'The dunes of Erg Chebbi at Merzouga are Morocco’s most accessible Sahara experience. Ride camels to a luxury desert camp, watch the stars from the dunes, and witness one of the world’s most beautiful sunrises.',
      'Les dunes de l’Erg Chebbi à Merzouga offrent l’expérience la plus accessible du Sahara marocain. Méharée vers un camp de luxe, ciel étoilé sur les dunes, et l’un des plus beaux levers de soleil au monde.',
      'تُعد كثبان عرق الشبي في مرزوكة أكثر تجارب الصحراء المغربية إتاحةً. رحلة جمال إلى مخيم فاخر، نجوم تتلألأ فوق الكثبان، وأحد أجمل شروقات الشمس في العالم.',
    ),
    heroImage: '/images/destinations/merzouga.jpg',
    geo: { lat: 31.0996, lng: -4.0136 },
    highlights: ll(
      [
        'Camel trek into Erg Chebbi',
        'Overnight in a luxury desert camp',
        'Sunrise over the dunes',
        'Berber music around the fire',
        '4x4 dune adventures',
      ],
      [
        'Méharée dans l’Erg Chebbi',
        'Nuit dans un camp de luxe',
        'Lever de soleil sur les dunes',
        'Musique berbère autour du feu',
        'Excursions 4x4 dans les dunes',
      ],
      [
        'رحلة جمال في عرق الشبي',
        'مبيت في مخيم صحراوي فاخر',
        'شروق الشمس فوق الكثبان',
        'موسيقى أمازيغية حول النار',
        'مغامرات 4×4 بين الكثبان',
      ],
    ),
    bestTimeToVisit: l(
      'October to April',
      'D’octobre à avril',
      'من أكتوبر إلى أبريل',
    ),
    durationDays: 2,
    faqs: lf(
      [
        {
          question: 'How long is the drive from Marrakech to Merzouga?',
          answer:
            'About 9–10 hours direct. We recommend a 3-day trip stopping at Aït Ben Haddou, the Dadès Valley, and the Todra Gorges along the way.',
        },
      ],
      [
        {
          question: 'Combien de temps de route de Marrakech à Merzouga ?',
          answer:
            'Environ 9-10 heures en direct. Nous recommandons un circuit de 3 jours via Aït Ben Haddou, la vallée du Dadès et les gorges du Todra.',
        },
      ],
      [
        {
          question: 'كم تستغرق الرحلة من مراكش إلى مرزوكة؟',
          answer:
            'حوالي 9-10 ساعات بشكل مباشر. ننصح برحلة 3 أيام تشمل آيت بن حدو ووادي دادس ومضيق تودرا.',
        },
      ],
    ),
  },
  {
    slug: 'casablanca',
    region: l(
      'Casablanca-Settat',
      'Casablanca-Settat',
      'الدار البيضاء-سطات',
    ),
    name: l('Casablanca', 'Casablanca', 'الدار البيضاء'),
    tagline: l(
      'Morocco’s economic capital by the Atlantic',
      'La capitale économique du Maroc sur l’Atlantique',
      'العاصمة الاقتصادية للمغرب على الأطلسي',
    ),
    description: l(
      'Casablanca blends modern Morocco with Art Deco heritage and ocean-front landmarks like the Hassan II Mosque — one of the largest mosques in the world.',
      'Casablanca marie le Maroc moderne au patrimoine Art déco et à des monuments en bord de mer comme la mosquée Hassan II — l’une des plus grandes au monde.',
      'تجمع الدار البيضاء بين المغرب الحديث وتراث الآرت ديكو ومعالم على الواجهة البحرية مثل مسجد الحسن الثاني، أحد أكبر مساجد العالم.',
    ),
    heroImage: '/images/destinations/casablanca.jpg',
    geo: { lat: 33.5731, lng: -7.5898 },
    highlights: ll(
      ['Hassan II Mosque', 'Corniche & Ain Diab', 'Art Deco downtown walking tour', 'Habous quarter'],
      ['Mosquée Hassan II', 'Corniche & Aïn Diab', 'Centre Art déco à pied', 'Quartier des Habous'],
      ['مسجد الحسن الثاني', 'الكورنيش وعين الذئاب', 'جولة في وسط المدينة آرت ديكو', 'حي الحبوس'],
    ),
    bestTimeToVisit: l('Year-round', 'Toute l’année', 'طوال السنة'),
    durationDays: 1,
    faqs: lf(
      [
        {
          question: 'Is Casablanca worth visiting?',
          answer:
            'Casablanca is best as a 1-day stop, mainly for the Hassan II Mosque. Most travelers fly into Casablanca and continue to Marrakech, Fes, or Rabat.',
        },
      ],
      [
        {
          question: 'Casablanca vaut-elle la visite ?',
          answer:
            'Casablanca se visite idéalement en 1 jour, principalement pour la mosquée Hassan II. La plupart des voyageurs atterrissent à Casablanca puis filent vers Marrakech, Fès ou Rabat.',
        },
      ],
      [
        {
          question: 'هل الدار البيضاء تستحق الزيارة؟',
          answer:
            'تكفي يوم واحد، أساسًا لزيارة مسجد الحسن الثاني. يصل معظم المسافرين إلى الدار البيضاء ثم يكملون نحو مراكش أو فاس أو الرباط.',
        },
      ],
    ),
  },
  {
    slug: 'essaouira',
    region: l('Marrakech-Safi', 'Marrakech-Safi', 'مراكش-آسفي'),
    name: l('Essaouira', 'Essaouira', 'الصويرة'),
    tagline: l(
      'Atlantic winds, blue boats & gnawa music',
      'Vents atlantiques, barques bleues et gnawa',
      'رياح الأطلسي والقوارب الزرقاء وموسيقى كناوة',
    ),
    description: l(
      'A breezy UNESCO port city on the Atlantic, Essaouira pairs ramparts and a relaxed medina with the world’s biggest gnawa festival. The perfect 2-day escape from Marrakech.',
      'Ville portuaire ventée classée UNESCO, Essaouira marie remparts et médina paisible au plus grand festival gnawa du monde. L’escapade parfaite de 2 jours depuis Marrakech.',
      'مدينة ساحلية هادئة على الأطلسي مصنفة من اليونسكو، تجمع بين الأسوار والمدينة العتيقة وأكبر مهرجان كناوة في العالم. هروب مثالي ليومين من مراكش.',
    ),
    heroImage: '/images/destinations/essaouira.jpg',
    geo: { lat: 31.5125, lng: -9.7700 },
    highlights: ll(
      ['Skala de la Ville ramparts', 'Working blue fishing port', 'Surf & windsurf at Sidi Kaouki', 'Gnawa World Music Festival'],
      ['Remparts Skala de la Ville', 'Port de pêche bleu en activité', 'Surf et windsurf à Sidi Kaouki', 'Festival Gnaoua Musiques du Monde'],
      ['أسوار سقالة المدينة', 'ميناء الصيد الأزرق', 'ركوب الأمواج في سيدي كاوكي', 'مهرجان كناوة وموسيقى العالم'],
    ),
    bestTimeToVisit: l('April to October', 'D’avril à octobre', 'من أبريل إلى أكتوبر'),
    durationDays: 2,
    faqs: lf(
      [
        {
          question: 'How far is Essaouira from Marrakech?',
          answer: 'About 2.5–3 hours by car or bus. A very common day or 2-day trip from Marrakech.',
        },
      ],
      [
        {
          question: 'À quelle distance Essaouira est-elle de Marrakech ?',
          answer: 'Environ 2h30-3h en voiture ou en bus. Une excursion très courante d’un ou deux jours depuis Marrakech.',
        },
      ],
      [
        {
          question: 'كم تبعد الصويرة عن مراكش؟',
          answer: 'حوالي 2.5 إلى 3 ساعات بالسيارة أو الحافلة. رحلة شائعة جدًا ليوم أو يومين من مراكش.',
        },
      ],
    ),
  },
  {
    slug: 'tangier',
    region: l(
      'Tanger-Tétouan-Al Hoceïma',
      'Tanger-Tétouan-Al Hoceïma',
      'طنجة-تطوان-الحسيمة',
    ),
    name: l('Tangier', 'Tanger', 'طنجة'),
    tagline: l(
      'Where Africa meets the Mediterranean',
      'Là où l’Afrique rencontre la Méditerranée',
      'حيث تلتقي أفريقيا بالمتوسط',
    ),
    description: l(
      'Tangier is Morocco’s window onto the Strait of Gibraltar — a cosmopolitan port city that has inspired writers and painters from Matisse to Bowles. Walk the kasbah, sip mint tea at Café Hafa, and ferry over to Spain.',
      'Tanger est la fenêtre du Maroc sur le détroit de Gibraltar — port cosmopolite qui a inspiré Matisse ou Bowles. Promenade dans la kasbah, thé à la menthe au Café Hafa, et ferry vers l’Espagne.',
      'طنجة هي نافذة المغرب على مضيق جبل طارق — مدينة مرفئية كوزموبوليتية ألهمت كتّابًا ورسامين من ماتيس إلى بولز. تجوّل في القصبة، واحتسِ شاي النعناع في مقهى حافة، واركب العبّارة إلى إسبانيا.',
    ),
    heroImage: '/images/destinations/tangier.jpg',
    geo: { lat: 35.7595, lng: -5.8340 },
    highlights: ll(
      ['Kasbah & American Legation Museum', 'Café Hafa & Cap Spartel', 'Caves of Hercules', 'Day trip to Tetouan & Asilah'],
      ['Kasbah & Musée de la Légation Américaine', 'Café Hafa & Cap Spartel', 'Grottes d’Hercule', 'Excursion à Tétouan & Asilah'],
      ['القصبة ومتحف المفوضية الأمريكية', 'مقهى حافة ورأس سبارطيل', 'مغارة هرقل', 'رحلة يومية إلى تطوان وأصيلة'],
    ),
    bestTimeToVisit: l('April to October', 'D’avril à octobre', 'من أبريل إلى أكتوبر'),
    durationDays: 2,
    faqs: lf(
      [
        { question: 'Can I take a ferry from Tangier to Spain?', answer: 'Yes — fast ferries run from Tanger Med to Tarifa or Algeciras in about 1–1.5 hours.' },
      ],
      [
        { question: 'Peut-on prendre un ferry de Tanger vers l’Espagne ?', answer: 'Oui — des ferries rapides relient Tanger Med à Tarifa ou Algésiras en 1 à 1h30.' },
      ],
      [
        { question: 'هل يمكن أخذ العبّارة من طنجة إلى إسبانيا؟', answer: 'نعم — عبّارات سريعة تربط طنجة المتوسط بطريفا أو الجزيرة الخضراء في حوالي 1 إلى 1.5 ساعة.' },
      ],
    ),
  },
  {
    slug: 'rabat',
    region: l(
      'Rabat-Salé-Kénitra',
      'Rabat-Salé-Kénitra',
      'الرباط-سلا-القنيطرة',
    ),
    name: l('Rabat', 'Rabat', 'الرباط'),
    tagline: l(
      'Morocco’s elegant administrative capital',
      'La capitale administrative élégante du Maroc',
      'العاصمة الإدارية الأنيقة للمغرب',
    ),
    description: l(
      'Often overlooked, Rabat is one of Morocco’s most rewarding cities — a UNESCO-listed capital with a stunning kasbah, royal mausoleum, and the unfinished Hassan Tower.',
      'Souvent éclipsée, Rabat est l’une des plus belles villes du Maroc — capitale classée UNESCO avec sa kasbah, la Tour Hassan et le mausolée royal.',
      'كثيرًا ما يتم تجاهلها، لكن الرباط من أجمل المدن المغربية — عاصمة مصنفة من اليونسكو تضم قصبة رائعة وضريحًا ملكيًا وصومعة حسان غير المكتملة.',
    ),
    heroImage: '/images/destinations/rabat.jpg',
    geo: { lat: 34.0209, lng: -6.8416 },
    highlights: ll(
      ['Kasbah des Oudayas', 'Hassan Tower & Mausoleum of Mohammed V', 'Chellah Roman ruins', 'Mohammed VI Museum of Modern Art'],
      ['Kasbah des Oudaïas', 'Tour Hassan & Mausolée Mohammed V', 'Site romain du Chellah', 'Musée Mohammed VI d’art moderne'],
      ['قصبة الأوداية', 'صومعة حسان وضريح محمد الخامس', 'موقع شالة الأثري', 'متحف محمد السادس للفن المعاصر'],
    ),
    bestTimeToVisit: l('March to November', 'De mars à novembre', 'من مارس إلى نوفمبر'),
    durationDays: 1,
    faqs: lf(
      [{ question: 'How far is Rabat from Casablanca?', answer: 'About 1 hour by car or 45 minutes by high-speed train (Al Boraq).' }],
      [{ question: 'À quelle distance Rabat est-elle de Casablanca ?', answer: 'Environ 1 heure en voiture ou 45 minutes en TGV (Al Boraq).' }],
      [{ question: 'كم تبعد الرباط عن الدار البيضاء؟', answer: 'حوالي ساعة بالسيارة أو 45 دقيقة بقطار البراق فائق السرعة.' }],
    ),
  },
  {
    slug: 'agadir',
    region: l('Souss-Massa', 'Souss-Massa', 'سوس-ماسة'),
    name: l('Agadir', 'Agadir', 'أكادير'),
    tagline: l(
      'Atlantic beach resort & gateway to the south',
      'Station balnéaire de l’Atlantique, porte du sud',
      'منتجع شاطئي على الأطلسي وبوابة الجنوب',
    ),
    description: l(
      'Agadir is Morocco’s sunniest beach destination — wide sandy bay, modern resorts, and an easy base for Paradise Valley, Taghazout surf, and the Souss-Massa national park.',
      'Agadir est la destination balnéaire la plus ensoleillée du Maroc — grande baie de sable, complexes modernes, base idéale pour Paradise Valley, Taghazout et le parc national du Souss-Massa.',
      'أكادير الوجهة الشاطئية الأكثر شمسًا في المغرب — خليج رملي واسع، منتجعات حديثة، وقاعدة مثالية لباراديز فالي وتغازوت ومنتزه سوس-ماسة الوطني.',
    ),
    heroImage: '/images/destinations/agadir.jpg',
    geo: { lat: 30.4278, lng: -9.5981 },
    highlights: ll(
      ['Agadir beach & marina', 'Surf at Taghazout & Anchor Point', 'Paradise Valley waterfalls', 'Argan oil cooperative visit'],
      ['Plage et marina d’Agadir', 'Surf à Taghazout & Anchor Point', 'Paradise Valley', 'Coopérative d’huile d’argan'],
      ['شاطئ ومارينا أكادير', 'ركوب الأمواج في تغازوت', 'وادي الجنة (Paradise Valley)', 'زيارة تعاونية زيت الأركان'],
    ),
    bestTimeToVisit: l('Year-round; best March to November', 'Toute l’année; idéal de mars à novembre', 'طوال السنة؛ والأفضل من مارس إلى نوفمبر'),
    durationDays: 2,
    faqs: lf(
      [{ question: 'Is Agadir good for families?', answer: 'Yes. Agadir’s safe sandy beach, calm sea, and modern hotels make it Morocco’s most family-friendly resort destination.' }],
      [{ question: 'Agadir convient-elle aux familles ?', answer: 'Oui. Plage sûre, mer calme et hôtels modernes : Agadir est la destination familiale par excellence au Maroc.' }],
      [{ question: 'هل أكادير مناسبة للعائلات؟', answer: 'نعم. شاطئها الرملي الآمن وبحرها الهادئ وفنادقها الحديثة تجعلها أنسب وجهة عائلية في المغرب.' }],
    ),
  },
  {
    slug: 'ait-ben-haddou',
    region: l('Drâa-Tafilalet', 'Drâa-Tafilalet', 'درعة-تافيلالت'),
    name: l('Aït Ben Haddou', 'Aït Ben Haddou', 'آيت بن حدّو'),
    tagline: l(
      'The Hollywood ksar — UNESCO mud-brick fortress',
      'Le ksar “hollywoodien” — forteresse de pisé UNESCO',
      'قصر هوليوود — حصن طيني مصنف من اليونسكو',
    ),
    description: l(
      'A fortified mud-brick village on the old caravan route, Aït Ben Haddou is a UNESCO site and one of cinema’s most iconic backdrops — Gladiator, Game of Thrones, and many more.',
      'Village fortifié en pisé sur l’ancienne route caravanière, Aït Ben Haddou est classé UNESCO et l’un des décors de cinéma les plus emblématiques — Gladiator, Game of Thrones, etc.',
      'قرية محصّنة من الطين على طريق القوافل القديم، آيت بن حدّو مصنفة من اليونسكو وواحدة من أشهر مواقع التصوير السينمائي — جلادييتر، صراع العروش، وغيرها.',
    ),
    heroImage: '/images/destinations/ait-ben-haddou.jpg',
    geo: { lat: 31.0470, lng: -7.1296 },
    highlights: ll(
      ['Climb to the ksar’s agadir at sunrise', 'Cross the Asif Ounila river', 'Combine with Ouarzazate film studios', 'Stop on the Marrakech → Sahara route'],
      ['Montée à l’agadir du ksar au lever du soleil', 'Traversée de l’oued Asif Ounila', 'Combiné avec les studios de Ouarzazate', 'Étape sur la route Marrakech → Sahara'],
      ['الصعود إلى أكادير القصر عند الشروق', 'عبور وادي أسيف أونيلا', 'الجمع مع استوديوهات ورزازات', 'محطة على طريق مراكش — الصحراء'],
    ),
    bestTimeToVisit: l('October to April', 'D’octobre à avril', 'من أكتوبر إلى أبريل'),
    durationDays: 1,
    faqs: lf(
      [{ question: 'Can I visit Aït Ben Haddou as a day trip?', answer: 'It is doable from Marrakech (4h each way) but most travelers stop on the way to Merzouga.' }],
      [{ question: 'Aït Ben Haddou se visite-t-il en excursion d’une journée ?', answer: 'C’est possible depuis Marrakech (4h aller) mais la plupart des voyageurs y font étape en allant à Merzouga.' }],
      [{ question: 'هل يمكن زيارة آيت بن حدو في رحلة يومية؟', answer: 'ممكن من مراكش (4 ساعات لكل اتجاه)، لكن معظم المسافرين يتوقفون فيها في طريقهم إلى مرزوكة.' }],
    ),
  },
  {
    slug: 'ouarzazate',
    region: l('Drâa-Tafilalet', 'Drâa-Tafilalet', 'درعة-تافيلالت'),
    name: l('Ouarzazate', 'Ouarzazate', 'ورزازات'),
    tagline: l(
      'Morocco’s desert film capital',
      'La capitale marocaine du cinéma du désert',
      'عاصمة سينما الصحراء في المغرب',
    ),
    description: l(
      'Once a French Foreign Legion garrison, Ouarzazate is now home to Morocco’s biggest film studios (Atlas, CLA) and the gateway to the Drâa and Dadès valleys.',
      'Ancienne garnison de la Légion étrangère, Ouarzazate abrite aujourd’hui les plus grands studios de cinéma du Maroc (Atlas, CLA) et la porte des vallées du Drâa et du Dadès.',
      'كانت ثكنة للفيلق الأجنبي الفرنسي، أما اليوم فهي تضم أكبر استوديوهات سينما في المغرب (أطلس و CLA)، وبوابة وادي درعة ووادي دادس.',
    ),
    heroImage: '/images/destinations/ouarzazate.jpg',
    geo: { lat: 30.9335, lng: -6.9370 },
    highlights: ll(
      ['Atlas & CLA Film Studios', 'Kasbah Taourirt', 'Drâa Valley palm groves', 'Noor solar power plant viewpoint'],
      ['Studios Atlas & CLA', 'Kasbah Taourirt', 'Palmeraies de la vallée du Drâa', 'Centrale solaire Noor'],
      ['استوديوهات أطلس و CLA', 'قصبة تاوريرت', 'واحات وادي درعة', 'محطة نور للطاقة الشمسية'],
    ),
    bestTimeToVisit: l('October to April', 'D’octobre à avril', 'من أكتوبر إلى أبريل'),
    durationDays: 1,
    faqs: lf(
      [{ question: 'Is Ouarzazate worth a stop?', answer: 'Yes — most Sahara itineraries from Marrakech stop overnight in Ouarzazate or nearby Skoura.' }],
      [{ question: 'Ouarzazate vaut-elle l’étape ?', answer: 'Oui — la plupart des circuits vers le Sahara depuis Marrakech font étape à Ouarzazate ou à Skoura.' }],
      [{ question: 'هل ورزازات تستحق التوقّف؟', answer: 'نعم — معظم رحلات الصحراء انطلاقًا من مراكش تتوقف ليلًا في ورزازات أو سكورة المجاورة.' }],
    ),
  },
  {
    slug: 'atlas-imlil',
    region: l('Marrakech-Safi', 'Marrakech-Safi', 'مراكش-آسفي'),
    name: l(
      'Atlas Mountains — Imlil',
      'Haut Atlas — Imlil',
      'جبال الأطلس — إمليل',
    ),
    tagline: l(
      'Berber villages & the trail to Mt Toubkal',
      'Villages berbères et accès au Toubkal',
      'قرى أمازيغية وممر نحو قمة توبقال',
    ),
    description: l(
      'Imlil is the trailhead for Mt Toubkal, North Africa’s highest peak, and a great 1- or 2-day escape from Marrakech with Berber villages, waterfalls, and walnut valleys.',
      'Imlil est le départ vers le Toubkal, plus haut sommet d’Afrique du Nord, et une belle escapade de 1 à 2 jours depuis Marrakech : villages berbères, cascades, vallées de noyers.',
      'إمليل هي نقطة انطلاق الصعود إلى توبقال، أعلى قمة في شمال أفريقيا، ووجهة رائعة ليوم أو يومين من مراكش بين قرى أمازيغية وشلالات ووديان الجوز.',
    ),
    heroImage: '/images/destinations/imlil.jpg',
    geo: { lat: 31.1369, lng: -7.9197 },
    highlights: ll(
      ['Toubkal summit trek (2 days)', 'Aroumd & Tamatert Berber villages', 'Ourika Valley waterfalls', 'Mule treks with local guides'],
      ['Ascension du Toubkal (2 jours)', 'Villages d’Aroumd et Tamatert', 'Cascades de l’Ourika', 'Randonnée à dos de mulet'],
      ['تسلق قمة توبقال (يومان)', 'قريتا أرومد وتمتارت', 'شلالات أوريكا', 'رحلات بالبغال مع مرشدين محليين'],
    ),
    bestTimeToVisit: l(
      'April to October (Toubkal summit best May–Oct)',
      'D’avril à octobre (Toubkal de mai à octobre)',
      'من أبريل إلى أكتوبر (توبقال من مايو إلى أكتوبر)',
    ),
    durationDays: 2,
    faqs: lf(
      [{ question: 'Do I need a guide for Mt Toubkal?', answer: 'Yes — by Moroccan law, a licensed mountain guide is required for the Toubkal summit. We arrange them.' }],
      [{ question: 'Faut-il un guide pour le Toubkal ?', answer: 'Oui — la loi marocaine impose un guide de montagne agréé pour le sommet. Nous l’organisons.' }],
      [{ question: 'هل أحتاج إلى مرشد لقمة توبقال؟', answer: 'نعم — القانون المغربي يشترط مرشدًا جبليًا مرخّصًا للقمة. نحن نتولى توفيره.' }],
    ),
  },
  {
    slug: 'dakhla',
    region: l('Dakhla-Oued Ed-Dahab', 'Dakhla-Oued Ed-Dahab', 'الداخلة-وادي الذهب'),
    name: l('Dakhla', 'Dakhla', 'الداخلة'),
    tagline: l(
      'Kitesurfing & desert lagoons in the deep south',
      'Kitesurf et lagunes du désert dans le grand sud',
      'كايت سيرف وبحيرات صحراوية في أقصى الجنوب',
    ),
    description: l(
      'A wind-blessed peninsula between Atlantic ocean and Sahara dunes, Dakhla is a world-class kitesurf and wing-foil destination — and one of Morocco’s last true frontiers.',
      'Péninsule ventée entre Atlantique et dunes du Sahara, Dakhla est une destination kitesurf et wingfoil de classe mondiale — et l’une des dernières vraies frontières du Maroc.',
      'شبه جزيرة عاتية الرياح بين الأطلسي وكثبان الصحراء، تعد الداخلة من أفضل وجهات الكايت سيرف والوينغ فويل عالميًا — وأحد آخر التخوم الحقيقية في المغرب.',
    ),
    heroImage: '/images/destinations/dakhla.jpg',
    geo: { lat: 23.6848, lng: -15.9580 },
    highlights: ll(
      ['Kitesurf & wing-foil on the lagoon', 'White Dune (Dune Blanche)', 'Imlili stromatolites', 'Atlantic seafood feasts'],
      ['Kitesurf & wingfoil dans la lagune', 'Dune Blanche', 'Stromatolites d’Imlili', 'Festins de fruits de mer atlantiques'],
      ['الكايت سيرف والوينغ فويل في البحيرة', 'الكثيب الأبيض', 'ستروماتوليت إمليلي', 'مأدبات المأكولات البحرية'],
    ),
    bestTimeToVisit: l('March to October', 'De mars à octobre', 'من مارس إلى أكتوبر'),
    durationDays: 4,
    faqs: lf(
      [{ question: 'How do I get to Dakhla?', answer: 'Direct flights from Casablanca (2.5h) and seasonal flights from Paris and Madrid.' }],
      [{ question: 'Comment se rendre à Dakhla ?', answer: 'Vols directs depuis Casablanca (2h30) et vols saisonniers depuis Paris et Madrid.' }],
      [{ question: 'كيف أصل إلى الداخلة؟', answer: 'رحلات مباشرة من الدار البيضاء (2.5 ساعة) ورحلات موسمية من باريس ومدريد.' }],
    ),
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return DESTINATIONS.map((d) => d.slug);
}
