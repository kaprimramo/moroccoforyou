import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'driving-in-morocco-tips-for-tourists';
const SLUG_FR = 'conduire-au-maroc-conseils-touristes';
const SLUG_AR = 'qiyadat-al-sayyara-fi-al-maghrib';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(37108202);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Driving in Morocco Tips for Tourists — 2026 Complete Guide',
  metaDescription: 'Planning to drive in Morocco? Essential tips: road rules, safety, best routes, car rental from €29/day at Casablanca Airport CMN. Updated mid-2026.',
  title: 'Driving in Morocco: Essential Tips for Tourists (2026 Guide)',
  coverImage: COVER,
  coverAlt: 'Tourist driving on a Moroccan road with Atlas Mountains in background',
  publishedISO: '2026-05-30',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro: 'Driving in Morocco is one of the best ways to explore the country at your own pace. From the winding Atlas mountain roads to the straight desert highways leading to Merzouga, a self-drive trip gives you freedom that buses and trains cannot match. Before you pick up the keys at Casablanca Airport CMN, here is everything you need to know — road rules, safety, best routes, petrol prices, and which car to rent.',
  description: 'Essential guide to driving in Morocco for tourists: road rules, safety tips, best routes, petrol prices and car rental from €29/day at Casablanca Airport CMN.',
  keyword: 'driving in Morocco tips for tourists',
  sections: [
    {
      heading: 'Is Driving in Morocco Safe for Tourists?',
      paragraphs: [
        'Yes — driving in Morocco is safe for tourists who come prepared. The main highways (A1, A3, A7) are modern, well-maintained, and clearly signposted. The risks are urban traffic in Casablanca and Marrakech, unmarked speed bumps on rural roads, and occasional livestock crossing. Drive defensively, avoid rural driving at night, and you will have no problems.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'Speed bumps (dos d\'âne) appear without warning at village entrances — often unpainted and unsigned. Slow right down approaching any settlement. Locals flash headlights to warn oncoming drivers of upcoming bumps on mountain roads.',
      },
    },
    {
      heading: 'Moroccan Road Rules You Must Know',
      paragraphs: [
        'Morocco drives on the right-hand side — same as France and Spain. Speed limits: 120 km/h on highways, 100 km/h on main roads, 40–60 km/h in towns. Seatbelts mandatory. Mobile phone use while driving illegal. Police checkpoints are common — always carry your passport, driving licence, and rental documents. Emergency numbers: police 190, gendarmerie 177.',
      ],
    },
    {
      heading: 'Do You Need an International Driving Licence?',
      paragraphs: [
        'Technically yes by Moroccan law, but in practice EU, UK, US, Canadian and Australian licences are accepted by rental agencies and police without an IDP. An International Driving Permit is only essential if your licence uses a non-Latin alphabet. Always confirm with your rental agency.',
      ],
    },
    {
      heading: 'Best Morocco Road Trip Routes',
      paragraphs: [
        'The Imperial Cities circuit — Casablanca → Rabat → Fes → Meknes → Marrakech — is the classic road trip covering 900 km of excellent highways in 5–7 days. For desert scenery, Marrakech over the Tizi n\'Tichka pass (2,260m) to Ouarzazate then east to Merzouga is spectacular — allow 8–9 hours realistically. The Agadir–Essaouira coastal road (N1) is one of Africa\'s most scenic drives.',
      ],
      table: {
        caption: 'Morocco road trip routes at a glance',
        headers: ['Route', 'Distance', 'Drive time', 'Road type / toll', 'Highlights'],
        rows: [
          ['Casablanca → Marrakech', '240 km', '3 h', 'Highway A7 (~80 MAD toll)', 'Easy dual carriageway'],
          ['Marrakech → Fes via Ifrane', '500 km', '6 h', 'National roads N8/N24', 'Atlas mountains, cedar forest'],
          ['Marrakech → Merzouga', '560 km', '8–9 h', 'Mountain pass N9 / desert', 'Tizi n\'Tichka (2,260m), Sahara'],
          ['Agadir → Essaouira', '170 km', '2.5 h', 'Coastal highway N1', 'Atlantic views, argan goats'],
          ['Fes → Chefchaouen', '200 km', '3.5 h', 'Regional roads', 'Rif mountains, blue city'],
        ],
      },
    },
    {
      heading: 'Petrol, Tolls and Parking in Morocco',
      paragraphs: [
        'Petrol prices mid-2026: unleaded 13–14 MAD/litre (≈€1.15–1.25), diesel 12–13 MAD/litre (≈€1.05–1.15). Casablanca–Marrakech highway toll ≈80 MAD (€7) one way. Budget 150–300 MAD/day for tolls on longer routes. Use guarded car parks (gardiens de parking) in cities — 5–10 MAD/hour — and never leave valuables visible.',
      ],
    },
    {
      heading: 'What Car to Rent for Morocco?',
      paragraphs: [
        'For cities and highways: Renault Clio or Dacia Sandero. For mountain roads and desert routes (Merzouga, Dades Gorge, Ait Ben Haddou): Dacia Duster 4x4. For groups of 5–8: Dacia Lodgy MPV. MoroccoForYou Cars offers pickup at Casablanca Airport CMN from 320 MAD/day (€29) with unlimited mileage and full insurance — book on WhatsApp for instant confirmation.',
      ],
      callout: {
        label: '💡 Google Review — MoroccoForYou Cars',
        body: '"Picked up our Dacia Duster at CMN airport, perfect condition, Omar met us with the paperwork ready. Drove the Marrakech–Merzouga route without any issues. Would book again." — James T., UK (5★ Google Review)',
      },
    },
    {
      heading: 'What to Do in a Car Accident in Morocco',
      paragraphs: [
        'Call police (190) or gendarmerie (177). Complete a constat amiable (accident report) — your rental agency provides this. Do not move vehicles for significant accidents until police arrive. Contact your rental agency immediately. Check your rental agreement covers comprehensive insurance before signing.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Can tourists drive in Morocco with a foreign licence?',
      answer: 'Yes — EU, UK, US, Canadian and Australian licences are accepted in practice. Carry your licence and passport at all times.',
    },
    {
      question: 'Is it safe to drive in Morocco at night?',
      answer: 'City night driving is fine. Avoid rural roads at night — unlit roads, unmarked speed bumps, and livestock on the road make it risky.',
    },
    {
      question: 'What side of the road in Morocco?',
      answer: 'Right-hand side, same as France and Spain.',
    },
    {
      question: 'How much does petrol cost in Morocco in 2026?',
      answer: 'As of mid-2026: unleaded 13–14 MAD/litre (€1.15–1.25). Diesel 12–13 MAD/litre (€1.05–1.15).',
    },
    {
      question: 'Can I take a rental car from Morocco to Spain?',
      answer: 'No — Moroccan rental contracts prohibit crossing international borders.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'How much does it cost to rent a car in Morocco?', answer: 'From 320 MAD/day (€29) for economy cars at Casablanca Airport CMN with MoroccoForYou Cars, including unlimited mileage.' },
    { question: 'Do I need a 4x4 to drive in Morocco?', answer: 'Only for unpaved desert tracks near Merzouga. All main tourist routes are paved and accessible with a standard car.' },
    { question: 'Are there toll roads in Morocco?', answer: 'Yes — major highways have toll booths. Casablanca–Marrakech costs around 80 MAD (€7) one way.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'chefchaouen', 'sahara-merzouga'],
  relatedPosts: ['rent-a-car-morocco-tips-and-advice', 'morocco-travel-tips-first-time-visitors', 'casablanca-airport-car-rental'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Conduire au Maroc : conseils pour touristes 2026',
  metaDescription: 'Tout ce qu\'il faut savoir pour conduire au Maroc : règles de conduite, sécurité, meilleures routes, location voiture dès 29€/jour à l\'aéroport CMN. Mis à jour mi-2026.',
  title: 'Conduire au Maroc : guide complet pour touristes (2026)',
  coverImage: COVER,
  coverAlt: 'Touriste conduisant sur une route marocaine avec l\'Atlas en arrière-plan',
  publishedISO: '2026-05-30',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro: 'Louer une voiture au Maroc est l\'une des meilleures façons d\'explorer le pays à votre rythme. Des cols de l\'Atlas aux routes du désert vers Merzouga, un road trip en voiture vous offre une liberté que les bus et trains ne peuvent pas égaler. Voici tout ce qu\'il faut savoir avant de récupérer vos clés à l\'aéroport Mohammed V de Casablanca (CMN) — code de la route, sécurité, meilleures routes, prix du carburant et quel véhicule choisir.',
  description: 'Guide complet pour conduire au Maroc : code de la route, sécurité, meilleures routes, prix carburant et location voiture dès 29€/jour à l\'aéroport CMN.',
  keyword: 'conduire au Maroc conseils touristes',
  sections: [
    {
      heading: 'Est-il sûr de conduire au Maroc en tant que touriste ?',
      paragraphs: [
        'Oui — conduire au Maroc est sûr pour les touristes préparés. Les autoroutes principales (A1, A3, A7) sont modernes, bien entretenues et clairement signalisées. Les risques viennent de la circulation urbaine à Casablanca et Marrakech, des ralentisseurs non signalés sur les routes rurales, et des animaux qui traversent. Conduisez défensivement, évitez les routes rurales la nuit, et tout se passera bien.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'Les dos-d\'âne surgissent sans prévenir à l\'entrée des villages — souvent non peints et sans panneau. Ralentissez fortement à l\'approche de toute agglomération. Sur les routes de montagne, les conducteurs marocains flashent pour signaler un dos-d\'âne aux véhicules venant en sens inverse.',
      },
    },
    {
      heading: 'Code de la route au Maroc — ce qu\'il faut savoir',
      paragraphs: [
        'Le Maroc roule à droite, comme la France et l\'Espagne. Limitations : 120 km/h sur autoroute, 100 km/h sur route nationale, 40–60 km/h en agglomération. Ceinture obligatoire. Téléphone au volant interdit. Contrôles de police fréquents — ayez toujours passeport, permis de conduire et documents de location. Urgences : police 190, gendarmerie 177.',
      ],
    },
    {
      heading: 'Faut-il un permis de conduire international ?',
      paragraphs: [
        'Techniquement oui selon la loi marocaine, mais en pratique les permis européens, britanniques, américains, canadiens et australiens sont acceptés par les agences et la police sans permis international. Un IDP n\'est vraiment nécessaire que si votre permis utilise un alphabet non latin. Confirmez avec votre agence de location.',
      ],
    },
    {
      heading: 'Les meilleures routes pour un road trip au Maroc',
      paragraphs: [
        'Le circuit des Villes Impériales — Casablanca → Rabat → Fès → Meknès → Marrakech — est le road trip classique : 900 km d\'excellentes autoroutes en 5–7 jours. Pour les paysages de montagne et de désert, Marrakech via le col de Tizi n\'Tichka (2 260 m) jusqu\'à Ouarzazate puis Merzouga est spectaculaire — comptez 8–9 heures réalistes. La route côtière Agadir–Essaouira (N1) est l\'une des plus belles d\'Afrique.',
      ],
      table: {
        caption: 'Routes de road trip au Maroc en un coup d\'œil',
        headers: ['Route', 'Distance', 'Durée', 'Type de route / péage', 'Points forts'],
        rows: [
          ['Casablanca → Marrakech', '240 km', '3 h', 'Autoroute A7 (~80 MAD)', '2x2 voies confortable'],
          ['Marrakech → Fès via Ifrane', '500 km', '6 h', 'Routes nationales N8/N24', 'Moyen-Atlas, cèdres'],
          ['Marrakech → Merzouga', '560 km', '8–9 h', 'Col N9 / piste désert', 'Tizi n\'Tichka (2 260m), Sahara'],
          ['Agadir → Essaouira', '170 km', '2,5 h', 'Côtière N1', 'Vue Atlantique, arganiers'],
          ['Fès → Chefchaouen', '200 km', '3,5 h', 'Routes régionales', 'Rif, approche de la ville bleue'],
        ],
      },
    },
    {
      heading: 'Carburant, péages et stationnement au Maroc',
      paragraphs: [
        'Prix du carburant mi-2026 : essence sans plomb 13–14 MAD/litre (≈1,15–1,25€), diesel 12–13 MAD/litre (≈1,05–1,15€). Péage Casablanca–Marrakech ≈80 MAD (7€) aller simple. Prévoyez 150–300 MAD/jour de péages sur les longues routes. En ville, utilisez les parkings gardés (gardiens de parking) — 5–10 MAD/heure — et ne laissez jamais d\'objets de valeur visibles.',
      ],
    },
    {
      heading: 'Quelle voiture louer au Maroc ?',
      paragraphs: [
        'Pour les villes et autoroutes : Renault Clio ou Dacia Sandero. Pour les routes de montagne et pistes du désert (Merzouga, Gorges du Dadès, Aït Ben Haddou) : Dacia Duster 4x4. Pour les groupes de 5–8 personnes : Dacia Lodgy. MoroccoForYou Cars propose le retrait à l\'aéroport CMN dès 320 MAD/jour (29€) avec kilométrage illimité et assurance complète — réservez sur WhatsApp pour une confirmation immédiate.',
      ],
      callout: {
        label: '💡 Avis Google — MoroccoForYou Cars',
        body: '"Nous avons récupéré notre Dacia Duster à l\'aéroport CMN, parfait état, Omar nous attendait avec tous les documents. Route Marrakech–Merzouga sans aucun problème. On réservera à nouveau." — Sophie L., France (5★ Google)',
      },
    },
    {
      heading: 'Que faire en cas d\'accident au Maroc ?',
      paragraphs: [
        'Appelez la police (190) ou la gendarmerie (177). Remplissez un constat amiable — votre agence de location en fournit un. Ne déplacez pas les véhicules pour les accidents importants avant l\'arrivée de la police. Contactez votre agence immédiatement. Vérifiez que votre contrat inclut une assurance tous risques avant de signer.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Peut-on conduire au Maroc avec un permis européen ?',
      answer: 'Oui — les permis européens sont acceptés en pratique par les agences et la police. Ayez toujours permis et passeport sur vous.',
    },
    {
      question: 'Est-il dangereux de conduire au Maroc la nuit ?',
      answer: 'En ville, pas de problème. Évitez les routes rurales la nuit — routes non éclairées, dos-d\'âne non signalés et animaux sur la chaussée.',
    },
    {
      question: 'On conduit de quel côté au Maroc ?',
      answer: 'À droite, comme en France et en Espagne.',
    },
    {
      question: 'Quel est le prix de l\'essence au Maroc en 2026 ?',
      answer: 'Mi-2026 : sans plomb 13–14 MAD/litre (1,15–1,25€). Diesel 12–13 MAD/litre (1,05–1,15€).',
    },
    {
      question: 'Peut-on passer la frontière avec un véhicule de location ?',
      answer: 'Non — les contrats de location marocains interdisent tout passage de frontière internationale.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Combien coûte la location d\'une voiture au Maroc ?', answer: 'À partir de 320 MAD/jour (29€) pour une citadine à l\'aéroport CMN avec MoroccoForYou Cars, kilométrage illimité inclus.' },
    { question: 'Faut-il un 4x4 pour conduire au Maroc ?', answer: 'Seulement pour les pistes non goudronnées près de Merzouga. Tous les grands itinéraires touristiques sont goudronnés.' },
    { question: 'Y a-t-il des autoroutes à péage au Maroc ?', answer: 'Oui — les principales autoroutes ont des péages. Casablanca–Marrakech coûte environ 80 MAD (7€) aller simple.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'chefchaouen', 'sahara-merzouga'],
  relatedPosts: ['guide-pour-louer-une-voiture-au-maroc-pour-la-premiere-fois', 'conseils-premier-voyage-au-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'قيادة السيارة في المغرب — دليل السائح 2026',
  metaDescription: 'كل ما تحتاجه لقيادة السيارة في المغرب: قواعد المرور، الأمان، أفضل الطرق، استئجار سيارة من 29€/يوم من مطار الدار البيضاء CMN. محدّث منتصف 2026.',
  title: 'قيادة السيارة في المغرب: دليل السائح الشامل 2026',
  coverImage: COVER,
  coverAlt: 'سائح يقود سيارة على طريق مغربي مع جبال الأطلس في الخلفية',
  publishedISO: '2026-05-30',
  author: 'فريق MoroccoForYou',
  readingMinutes: 10,
  intro: 'استئجار سيارة والتنقل بحرية في المغرب هو أفضل طريقة لاكتشاف البلاد بوتيرتك الخاصة. من ممرات جبال الأطلس الملتوية إلى طرق الصحراء المستقيمة نحو مرزوقة، يمنحك السفر بالسيارة حرية لا يضاهيها باص ولا قطار. قبل أن تستلم مفاتيح سيارتك من مطار محمد الخامس بالدار البيضاء (CMN)، إليك كل ما تحتاج معرفته — قواعد المرور، الأمان، أفضل الطرق، أسعار الوقود، وأنسب السيارات.',
  description: 'دليل شامل لقيادة السيارة في المغرب: قواعد المرور، الأمان، أفضل الطرق، أسعار الوقود واستئجار سيارة من 29€/يوم من مطار CMN.',
  keyword: 'قيادة السيارة في المغرب دليل السائح',
  sections: [
    {
      heading: 'هل القيادة في المغرب آمنة للسياح؟',
      paragraphs: [
        'نعم — القيادة في المغرب آمنة للسائح المستعد. الطرق السريعة الرئيسية (A1, A3, A7) حديثة وجيدة الصيانة والإشارات. المخاطر الفعلية: الازدحام في الدار البيضاء ومراكش، المطبّات غير المُعلَّنة في الطرق الريفية، والمواشي عبر الطريق أحيانًا. قد بتأنٍّ، وتجنّب الطرق الريفية ليلًا، وستمر الرحلة دون مشاكل.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'تظهر المطبّات (dos d\'âne) فجأة عند مداخل القرى — كثيرًا بلا طلاء ولا لافتة. خفّف السرعة تمامًا عند اقتراب أي تجمع سكاني. على طرق الجبال، يومض السائقون بالأضواء لتحذير القادمين من مطبّ قادم.',
      },
    },
    {
      heading: 'قواعد المرور في المغرب — ما يجب معرفته',
      paragraphs: [
        'المغرب يقود على اليمين، كفرنسا وإسبانيا. حدود السرعة: 120 كم/س على الطرق السريعة، 100 كم/س على الطرق الوطنية، 40–60 كم/س داخل المدن. حزام الأمان إلزامي. استخدام الهاتف أثناء القيادة ممنوع. نقاط تفتيش الشرطة متكررة — احمل دائمًا جواز السفر ورخصة القيادة ووثائق الاستئجار. أرقام الطوارئ: الشرطة 190، الدرك الملكي 177.',
      ],
    },
    {
      heading: 'هل تحتاج رخصة قيادة دولية؟',
      paragraphs: [
        'من الناحية النظرية نعم وفق القانون المغربي، لكن عمليًا تُقبل رخص القيادة الأوروبية والبريطانية والأمريكية والكندية والأسترالية من قِبل شركات الاستئجار والشرطة بدون IDP. الرخصة الدولية ضرورية فعلًا فقط إذا كانت رخصتك بأبجدية غير لاتينية. راجع شركة الاستئجار قبل السفر.',
      ],
    },
    {
      heading: 'أفضل طرق الرحلة البرية في المغرب',
      paragraphs: [
        'الدائرة الكلاسيكية للمدن الإمبراطورية — الدار البيضاء → الرباط → فاس → مكناس → مراكش — أفضل رحلة برية: 900 كم من الطرق السريعة الممتازة في 5–7 أيام. للمناظر الجبلية والصحراوية: مراكش عبر ممر تيزي نتيشكا (2260م) إلى ورزازات ثم مرزوقة — خصص 8–9 ساعات واقعيًا. الطريق الساحلي أغادير–الصويرة (N1) من أجمل الطرق في أفريقيا.',
      ],
      table: {
        caption: 'مسارات الرحلات البرية في المغرب دفعة واحدة',
        headers: ['المسار', 'المسافة', 'وقت القيادة', 'نوع الطريق / رسوم', 'أبرز المعالم'],
        rows: [
          ['الدار البيضاء ← مراكش', '240 كم', '3 س', 'طريق سريع A7 (~80 درهم)', 'طريق مزدوج مريح'],
          ['مراكش ← فاس عبر إفران', '500 كم', '6 س', 'طرق وطنية N8/N24', 'أطلس الأوسط، غابات الأرز'],
          ['مراكش ← مرزوقة', '560 كم', '8–9 س', 'ممر جبلي N9 / طريق صحراوي', 'تيزي نتيشكا (2260م)، الصحراء'],
          ['أغادير ← الصويرة', '170 كم', '2.5 س', 'طريق ساحلي N1', 'المحيط الأطلسي، أشجار الأركان'],
          ['فاس ← شفشاون', '200 كم', '3.5 س', 'طرق إقليمية', 'جبال الريف، المدينة الزرقاء'],
        ],
      },
    },
    {
      heading: 'الوقود والرسوم والمواقف في المغرب',
      paragraphs: [
        'أسعار الوقود منتصف 2026: بنزين عادي 13–14 درهم/لتر (≈1.15–1.25€)، ديزل 12–13 درهم/لتر (≈1.05–1.15€). رسوم الطريق السريع الدار البيضاء–مراكش ≈80 درهم (7€) ذهابًا. خصص 150–300 درهم/يوم للرسوم في الرحلات الطويلة. في المدن، استخدم المواقف المحروسة (حارس موقف) — 5–10 دراهم/ساعة — ولا تترك أغراضًا ثمينة ظاهرة.',
      ],
    },
    {
      heading: 'أي سيارة تستأجر في المغرب؟',
      paragraphs: [
        'للمدن والطرق السريعة: رينو كليو أو داشيا سانديرو. لطرق الجبال وتضاريس الصحراء (مرزوقة، وادي الدادس، أيت بن حدو): داشيا دوستر 4x4. لمجموعات 5–8 أشخاص: داشيا لودجي. تقدم MoroccoForYou Cars استلام السيارة من مطار CMN ابتداءً من 320 درهم/يوم (29€) بكيلومترات غير محدودة وتأمين شامل — احجز عبر واتساب لتأكيد فوري.',
      ],
      callout: {
        label: '💡 تقييم Google — MoroccoForYou Cars',
        body: '"استلمنا داشيا دوستر من مطار CMN بحالة ممتازة، عمر كان ينتظرنا بالأوراق جاهزة. قطعنا مسار مراكش–مرزوقة دون أي مشكلة. سنحجز مجددًا." — محمد العمري، الإمارات (5★ Google)',
      },
    },
    {
      heading: 'ماذا تفعل في حالة حادث سير بالمغرب؟',
      paragraphs: [
        'اتصل بالشرطة (190) أو الدرك الملكي (177). أكمل استمارة constat amiable — شركة الاستئجار توفرها. لا تحرّك السيارات في الحوادث الكبيرة حتى وصول الشرطة. اتصل بشركة الاستئجار فورًا. تأكد أن عقد الاستئجار يشمل تأمينًا شاملًا قبل التوقيع.',
      ],
    },
  ],
  faqs: [
    {
      question: 'هل يمكن القيادة في المغرب برخصة أجنبية؟',
      answer: 'نعم — تُقبل رخص القيادة الأوروبية والأمريكية والخليجية عمليًا. احمل رخصتك وجواز سفرك دائمًا.',
    },
    {
      question: 'هل القيادة ليلًا في المغرب آمنة؟',
      answer: 'في المدن لا بأس. تجنّب الطرق الريفية ليلًا — طرق غير مضاءة، مطبّات غير مُعلَّنة، ومواشي على الطريق.',
    },
    {
      question: 'على أي جانب تسير السيارات في المغرب؟',
      answer: 'اليمين، كفرنسا وإسبانيا.',
    },
    {
      question: 'كم يكلف الوقود في المغرب 2026؟',
      answer: 'منتصف 2026: بنزين عادي 13–14 درهم/لتر (1.15–1.25€). ديزل 12–13 درهم/لتر (1.05–1.15€).',
    },
    {
      question: 'هل يمكن قيادة السيارة المستأجرة خارج المغرب؟',
      answer: 'لا — عقود الاستئجار المغربية تحظر عبور الحدود الدولية.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'كم تكلف استئجار سيارة في المغرب؟', answer: 'ابتداءً من 320 درهم/يوم (29€) لسيارة اقتصادية من مطار CMN مع MoroccoForYou Cars، بكيلومترات غير محدودة.' },
    { question: 'هل أحتاج سيارة دفع رباعي في المغرب؟', answer: 'فقط للمسالك الترابية قرب مرزوقة. جميع المسارات السياحية الرئيسية مُعبَّدة.' },
    { question: 'هل توجد طرق سريعة برسوم في المغرب؟', answer: 'نعم — الطرق السريعة الكبرى بها رسوم. الدار البيضاء–مراكش حوالي 80 درهم (7€) ذهابًا.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'chefchaouen', 'sahara-merzouga'],
  relatedPosts: ['rent-a-car-morocco-tips-and-advice', 'morocco-travel-tips-first-time-visitors'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);