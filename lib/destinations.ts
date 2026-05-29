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
  longDescription: LocalizedText;
  heroImage: string;
  geo: { lat: number; lng: number };
  highlights: LocalizedList;
  thingsToDo: LocalizedList;
  localTips: LocalizedList;
  prices: LocalizedText;
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
    longDescription: l(
      'Founded in 1062 by the Almoravids, Marrakech blends Berber, Andalusian and Saharan influences. Inside the salmon-pink medina walls, narrow derbs hide centuries-old riads, tiled madrasas, spice souks and storyteller squares — while the modern Gueliz and Hivernage districts add rooftop bars, designer boutiques and contemporary art. Three days lets you split your time between the historic medina, a hammam afternoon, a Majorelle garden morning, and a day trip into the High Atlas or to the Agafay desert.',
      'Fondée en 1062 par les Almoravides, Marrakech mêle influences berbères, andalouses et sahariennes. Derrière les murailles rose saumon de la médina, les derbs étroits cachent des riads centenaires, des médersas carrelées, des souks d’épices et des places de conteurs — tandis que Guéliz et l’Hivernage ajoutent bars sur les toits, boutiques de créateurs et art contemporain. Trois jours permettent de partager le temps entre la médina, un hammam, le Jardin Majorelle et une excursion dans le Haut Atlas ou au désert d’Agafay.',
      'تأسست مراكش عام 1062 على يد المرابطين، وتمزج بين تأثيرات أمازيغية وأندلسية وصحراوية. خلف أسوار المدينة الوردية تختبئ الدروب الضيقة على رياضات عمرها قرون، ومدارس مزخرفة، وأسواق توابل وساحات الحكواتية — بينما يضيف حيا كليز والحي الشتوي أسطحًا مقهية ومحلات راقية وفنًا معاصرًا. ثلاثة أيام تكفي لاستكشاف المدينة العتيقة، وأمسية في الحمام، وصباح في حديقة ماجوريل، ورحلة يومية إلى الأطلس الكبير أو صحراء أكافاي.',
    ),
    heroImage: '',
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
    thingsToDo: ll(
      [
        'Watch the sunset transform Jemaa el-Fnaa into an open-air theatre of musicians, snake charmers and food stalls.',
        'Tour the Bahia Palace, Saadian Tombs and Ben Youssef Madrasa in a single half-day cultural loop.',
        'Get lost on purpose in the souks — start at Souk Semmarine for textiles, then Souk Haddadine for ironwork.',
        'Spend a morning at Jardin Majorelle and the adjacent Yves Saint Laurent Museum, then lunch at nearby Le Studio.',
        'Book a traditional hammam at Les Bains de Marrakech or La Mamounia — black soap, kessa scrub and ghassoul clay.',
        'Drive 1h into the Atlas to the Ourika Valley for waterfalls and a tagine lunch with a Berber family.',
        'Take a hot-air balloon flight over the palm groves at sunrise (€180–€220 per person).',
        'Catch a fantasia or Chez Ali dinner show on the outskirts for an evening of horseback charges and folklore.',
        'Sip mint tea on a rooftop at Café des Épices or Nomad — best views over the medina rooftops.',
      ],
      [
        'Voir le coucher du soleil transformer Jemaa el-Fna en théâtre à ciel ouvert de musiciens, charmeurs de serpents et stands de cuisine.',
        'Enchaîner Palais Bahia, Tombeaux Saadiens et Médersa Ben Youssef en une demi-journée culturelle.',
        'Se perdre volontairement dans les souks — du Semmarine (textiles) au Haddadine (ferronnerie).',
        'Matinée au Jardin Majorelle et au musée Yves Saint Laurent, déjeuner au Studio voisin.',
        'Réserver un hammam traditionnel aux Bains de Marrakech ou à La Mamounia — savon noir, kessa, ghassoul.',
        'Filer 1h dans l’Atlas vers la vallée de l’Ourika pour cascades et tajine en famille berbère.',
        'Vol en montgolfière à l’aube au-dessus des palmeraies (180-220 € par personne).',
        'Dîner-spectacle Fantasia ou Chez Ali en périphérie pour une soirée folklore et cavaliers.',
        'Thé à la menthe sur les toits du Café des Épices ou de Nomad — les meilleures vues sur la médina.',
      ],
      [
        'مشاهدة غروب الشمس وهو يحوّل ساحة جامع الفنا إلى مسرح مفتوح من موسيقيين ومروّضي ثعابين وأكشاك طعام.',
        'جولة نصف يوم تشمل قصر الباهية وقبور السعديين ومدرسة ابن يوسف.',
        'التيه عمدًا في الأسواق — من سوق السماط للأقمشة إلى سوق الحدادين للحديد المشغول.',
        'صباح في حديقة ماجوريل ومتحف إيف سان لوران، ثم الغداء في مطعم Le Studio القريب.',
        'حجز جلسة حمام تقليدي في Les Bains de Marrakech أو La Mamounia — صابون بلدي وكيس وغاسول.',
        'الانطلاق ساعة نحو الأطلس وزيارة وادي أوريكا لشلالات وطاجين عند عائلة أمازيغية.',
        'رحلة بمنطاد هوائي فوق النخيل عند الفجر (180-220€ للشخص).',
        'حضور سهرة فانتازيا أو شي علي في الضواحي لأمسية فلكلورية مع الفرسان.',
        'احتساء شاي النعناع على سطح Café des Épices أو Nomad لأفضل إطلالة على المدينة العتيقة.',
      ],
    ),
    localTips: ll(
      [
        'Negotiate in souks — start at 30–40% of the asking price and meet in the middle. A smile beats a frown.',
        'Stay inside the medina at a riad for the experience, but pick one within 500 m of a medina gate so taxis can drop close.',
        'The "free guide" who insists the tannery is closed is steering you to his cousin’s shop — politely refuse.',
        'ATM at Bab Doukkala or Place du 16 Novembre dispenses MAD reliably; avoid airport rates.',
        'In summer (Jul–Aug) days can hit 42 °C — schedule sightseeing before 11am and after 5pm.',
      ],
      [
        'Négociez dans les souks — partez à 30-40% du prix annoncé et trouvez un milieu. Un sourire vaut mieux qu’une moue.',
        'Logez en riad dans la médina pour l’expérience, mais à moins de 500 m d’une porte pour faciliter les taxis.',
        'Le "guide gratuit" qui prétend que les tanneries sont fermées vous emmène chez son cousin — refusez poliment.',
        'Les DAB de Bab Doukkala ou de la Place du 16 Novembre distribuent fiablement en MAD; évitez les taux aéroport.',
        'En été (juil-août) jusqu’à 42 °C — visitez avant 11h et après 17h.',
      ],
      [
        'فاوض في الأسواق — ابدأ بـ 30-40% من السعر المطلوب وقابله في المنتصف. الابتسامة سلاحك.',
        'أقم في رياض داخل المدينة العتيقة للتجربة، لكن اختر واحدًا على بعد 500 م من باب لتسهيل الوصول بالتاكسي.',
        '«المرشد المجاني» الذي يدّعي أن المدابغ مغلقة يأخذك إلى محل ابن عمه — ارفض بأدب.',
        'الصراف الآلي ببَاب الدكالة أو ساحة 16 نوفمبر يقدم الدرهم بشكل موثوق، وتجنّب أسعار المطار.',
        'في الصيف (يوليوز-غشت) قد تصل الحرارة إلى 42°م — تجوّل قبل 11 صباحًا وبعد 5 مساءً.',
      ],
    ),
    prices: l(
      'Riad with rooftop: €40–€90 / night (mid-range), €150+ (luxury). Tagine in the medina: MAD 60–120 (€6–€12). Petit taxi across town: MAD 20–30 (€2–€3). Day trip private driver to Ourika or Agafay: from €70 / car. Hammam (traditional + scrub): MAD 250–600 (€23–€55).',
      'Riad avec terrasse : 40-90 €/nuit (milieu de gamme), 150 € et + (luxe). Tajine en médina : 60-120 MAD (6-12 €). Petit taxi en ville : 20-30 MAD (2-3 €). Excursion privée Ourika ou Agafay : à partir de 70 €/voiture. Hammam traditionnel + gommage : 250-600 MAD (23-55 €).',
      'رياض بسطح: 40-90€/ليلة (متوسط)، 150€+ (فاخر). طاجين في المدينة: 60-120 درهم (6-12€). تاكسي صغير داخل المدينة: 20-30 درهم (2-3€). رحلة خاصة إلى أوريكا أو أكافاي: ابتداءً من 70€/سيارة. حمام تقليدي مع كيس: 250-600 درهم (23-55€).',
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
        {
          question: 'How much does a riad cost in Marrakech?',
          answer:
            'A comfortable mid-range riad averages €40 to €90 per night including breakfast. Boutique and luxury riads start around €150 and go beyond €500.',
        },
        {
          question: 'Can I see Marrakech in 2 days?',
          answer:
            'Yes, 2 full days lets you cover Jemaa el-Fnaa, the main souks, Bahia Palace, Majorelle Garden and a rooftop sunset — but you’ll need a third day for the Atlas or Agafay.',
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
        {
          question: 'Combien coûte un riad à Marrakech ?',
          answer:
            'Un riad confortable de milieu de gamme coûte 40 à 90 € par nuit avec petit-déjeuner. Les riads boutique et luxe démarrent à 150 € et dépassent 500 €.',
        },
        {
          question: 'Peut-on visiter Marrakech en 2 jours ?',
          answer:
            'Oui, 2 jours pleins suffisent pour Jemaa el-Fna, les principaux souks, le Palais Bahia, le Jardin Majorelle et un coucher de soleil sur un toit — mais comptez 3 jours pour ajouter l’Atlas ou Agafay.',
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
        {
          question: 'كم يكلف الرياض في مراكش؟',
          answer:
            'رياض متوسط مريح يكلف 40 إلى 90€ في الليلة مع الفطور. الرياضات البوتيك والفاخرة تبدأ من 150€ وتتجاوز 500€.',
        },
        {
          question: 'هل يمكن زيارة مراكش في يومين؟',
          answer:
            'نعم، يومان كاملان يكفيان لزيارة جامع الفنا والأسواق الرئيسية وقصر الباهية وحديقة ماجوريل وغروب على سطح — لكن أضف يومًا ثالثًا للأطلس أو أكافاي.',
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
    longDescription: l(
      'Founded in 789 AD by Idris I, Fes is the oldest of Morocco’s four imperial cities and remains the country’s spiritual and intellectual heart. Fes el-Bali — the older walled medina — is a UNESCO World Heritage site of nearly 10,000 alleys, where mules still deliver goods and craftsmen work in guilds organized by trade. Plan at least 2 full days: one for the cultural medina trail (Madrasa Bou Inania, Al-Qarawiyyin, the souks of brass, leather and silk) and one for the tanneries, ramparts and a panoramic view from the Borj Sud.',
      'Fondée en 789 par Idris Ier, Fès est la plus ancienne des quatre villes impériales et reste le cœur spirituel et intellectuel du Maroc. Fès el-Bali — la médina fortifiée la plus ancienne — est un site UNESCO de près de 10 000 ruelles, où les mulets livrent encore et où les artisans travaillent en guildes par métier. Comptez au moins 2 jours pleins : un pour le circuit culturel (Médersa Bou Inania, Al-Qaraouiyine, souks du laiton, du cuir et de la soie) et un pour les tanneries, les remparts et la vue panoramique du Borj Sud.',
      'تأسست فاس عام 789م على يد إدريس الأول، وهي أقدم المدن الإمبراطورية المغربية الأربع، ولا تزال القلب الروحي والفكري للمغرب. فاس البالي — المدينة العتيقة الأقدم — موقع تراث عالمي يضم نحو 10 آلاف زقاق، تجوب فيها البغال محمّلة بالبضائع ويعمل الحرفيون في صنائعهم الموروثة. خصّص يومين كاملين على الأقل: يومًا للمسار الثقافي (مدرسة بوعنانية، القرويين، أسواق النحاس والجلد والحرير) ويومًا للمدابغ والأسوار وإطلالة بُرج الجنوب.',
    ),
    heroImage: '',
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
    thingsToDo: ll(
      [
        'Walk the medina with a licensed guide — book ahead, plan 4 hours, start at Bab Boujloud (the blue gate).',
        'View the Chouara tanneries from a leather shop terrace — accept the sprig of mint to mask the ammonia.',
        'See the courtyard of Madrasa Bou Inania and Al-Attarine — the latter has the most intricate zellij in Morocco.',
        'Browse the Nejjarine carpenters’ square and its small museum of wooden arts.',
        'Stop at a Berber pharmacy for an explanation of argan, saffron and amber — buy or not.',
        'Photograph the Royal Palace’s seven brass doors at Fes el-Jdid (Place des Alaouites).',
        'Climb to the Marinid Tombs at sunset for the panoramic view over the medina.',
        'Take a 30-minute taxi to Volubilis Roman ruins and Moulay Idriss for a half-day side trip.',
      ],
      [
        'Médina avec guide officiel — réservez à l’avance, comptez 4h, départ Bab Boujloud (porte bleue).',
        'Vue des tanneries Chouara depuis une terrasse de cuir — acceptez la branche de menthe contre l’ammoniaque.',
        'Cour de la Médersa Bou Inania et al-Attarine — celle-ci a les zelliges les plus fins du Maroc.',
        'Place des menuisiers de Nejjarine et son petit musée des arts du bois.',
        'Pharmacie berbère pour découvrir argan, safran, ambre — achetez ou non.',
        'Photographiez les sept portes en laiton du Palais Royal à Fès el-Jdid (Place des Alaouites).',
        'Montée aux Tombeaux Mérinides au coucher du soleil pour la vue panoramique.',
        '30 min en taxi vers Volubilis (ruines romaines) et Moulay Idriss pour une demi-journée.',
      ],
      [
        'جولة في المدينة العتيقة مع مرشد مرخّص — احجز مسبقًا واحسب 4 ساعات وابدأ من باب بوجلود (الباب الأزرق).',
        'مشاهدة مدابغ شوارة من شرفة محل جلد — اقبل غصن النعناع لتلطيف رائحة النشادر.',
        'صحن مدرسة بوعنانية ومدرسة العطارين — الأخيرة بأدق زليج في المغرب.',
        'ساحة نجارين النجارين ومتحفها الصغير للفنون الخشبية.',
        'صيدلية أمازيغية تشرح لك خصائص الأركان والزعفران والعنبر — اشترِ أو لا.',
        'صور الأبواب النحاسية السبعة للقصر الملكي بفاس الجديد (ساحة العلويين).',
        'اصعد إلى قبور المرينيين عند الغروب لإطلالة بانورامية على المدينة.',
        '30 دقيقة بالتاكسي إلى موقع وليلي الروماني وزرهون لزيارة نصف يوم.',
      ],
    ),
    localTips: ll(
      [
        'Hire only an official guide with the gold badge — book through your riad. €25–€35 for half a day is fair.',
        'Wear closed shoes — the medina alleys are uneven, damp near the tanneries, and shared with mules.',
        'Tanneries: don’t feel pressured to buy. A polite "shokran, just looking" and a small €1 tip on the way out is fine.',
        'Friday afternoon many shops close for prayer — schedule your tannery and souk visits earlier.',
        'Don’t expect easy GPS in Fes el-Bali — your phone is more useful for photos than navigation.',
      ],
      [
        'Prenez uniquement un guide officiel avec badge doré — passez par votre riad. 25-35 € la demi-journée est correct.',
        'Chaussures fermées — les ruelles sont irrégulières, humides près des tanneries, partagées avec les mules.',
        'Tanneries : aucune obligation d’acheter. Un "shokran, juste regarder" et 1 € de pourboire en sortant suffisent.',
        'Vendredi après-midi, beaucoup de boutiques ferment pour la prière — planifiez tanneries et souks plus tôt.',
        'Le GPS est peu fiable dans Fès el-Bali — votre téléphone sert plus aux photos qu’à la navigation.',
      ],
      [
        'لا توظّف إلا مرشدًا رسميًا ببَطاقة ذهبية — احجز عبر الرياض. 25-35€ لنصف يوم سعر معقول.',
        'ارتدِ حذاءً مغلقًا — أزقة المدينة غير مستوية ورطبة قرب المدابغ ومشتركة مع البغال.',
        'في المدابغ: لا داعي للشراء. "شكرًا، فقط أتفرج" مع إكرامية رمزية (1€) عند الخروج تكفي.',
        'يوم الجمعة بعد الظهر تغلق محلات كثيرة للصلاة — برمج المدابغ والأسواق قبلها.',
        'لا تعتمد على GPS داخل فاس البالي — هاتفك أنفع للصور من الإرشاد.',
      ],
    ),
    prices: l(
      'Riad in the medina: €35–€80 / night. Licensed half-day guide: €25–€35. Tagine or pastilla lunch: MAD 70–140 (€7–€14). Petit taxi: MAD 15–25 (€1.50–€2.50). Day trip to Volubilis & Moulay Idriss by private car: from €60.',
      'Riad en médina : 35-80 €/nuit. Guide officiel demi-journée : 25-35 €. Tajine ou pastilla : 70-140 MAD (7-14 €). Petit taxi : 15-25 MAD (1,50-2,50 €). Excursion Volubilis & Moulay Idriss en voiture privée : à partir de 60 €.',
      'رياض في المدينة العتيقة: 35-80€/ليلة. مرشد رسمي نصف يوم: 25-35€. طاجين أو بسطيلة: 70-140 درهم (7-14€). تاكسي صغير: 15-25 درهم (1.50-2.50€). رحلة وليلي وزرهون بسيارة خاصة: ابتداءً من 60€.',
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
        {
          question: 'Is Fes worth visiting after Marrakech?',
          answer:
            'Absolutely. Fes is more conservative, more medieval, and more authentic in feel. Most multi-city itineraries include both.',
        },
        {
          question: 'How do I get from Fes to Marrakech?',
          answer:
            'A direct train takes about 7 hours, a flight 1 hour, or a private car 6 hours via Beni Mellal. We recommend flying or splitting with a stop in Casablanca.',
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
        {
          question: 'Fès vaut-elle la visite après Marrakech ?',
          answer:
            'Absolument. Fès est plus conservatrice, plus médiévale et plus authentique. La plupart des circuits multi-villes incluent les deux.',
        },
        {
          question: 'Comment aller de Fès à Marrakech ?',
          answer:
            'Train direct ~7h, vol 1h, voiture privée ~6h via Béni Mellal. Nous recommandons l’avion ou un break à Casablanca.',
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
        {
          question: 'هل تستحق فاس الزيارة بعد مراكش؟',
          answer:
            'بالتأكيد. فاس أكثر محافظة وأكثر طابعًا قروسطيًا وأصالة. أغلب البرامج المتعددة المدن تشمل الاثنتين.',
        },
        {
          question: 'كيف أنتقل من فاس إلى مراكش؟',
          answer:
            'قطار مباشر حوالي 7 ساعات، طيران ساعة، أو سيارة خاصة 6 ساعات عبر بني ملال. ننصح بالطيران أو التوقف في الدار البيضاء.',
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
    longDescription: l(
      'Founded in 1471 as a refuge for Andalusian Muslims and Jews fleeing the Reconquista, Chefchaouen sits at 600 m elevation in the Rif. The famous blue wash was likely introduced in the 1930s by Jewish residents — locals re-paint twice a year so the colour stays vivid. The town is compact, walkable, and cooler in summer than the rest of Morocco. Combine 1 night in the medina with a half-day hike to the Spanish Mosque viewpoint or a full-day excursion to Akchour waterfalls and "God’s Bridge".',
      'Fondée en 1471 comme refuge pour les Andalous fuyant la Reconquista, Chefchaouen est nichée à 600 m d’altitude dans le Rif. Le célèbre bleu aurait été introduit dans les années 1930 par les habitants juifs — les locaux repeignent deux fois par an. La ville est compacte, à pied, et plus fraîche que le reste du Maroc en été. Combinez 1 nuit en médina avec une demi-journée de marche jusqu’au point de vue de la Mosquée Espagnole ou une journée complète aux cascades d’Akchour et au "Pont de Dieu".',
      'تأسست شفشاون عام 1471 ملجأً للأندلسيين الفارّين من الاسترداد، وتقع على ارتفاع 600م في جبال الريف. أُدخل اللون الأزرق الشهير على الأرجح في الثلاثينيات على يد السكان اليهود — ويعيد الأهالي طلاء البيوت مرتين سنويًا. المدينة مدمجة قابلة للمشي، وأبرد من بقية المغرب في الصيف. ادمج ليلة في المدينة مع مشي نصف يوم إلى إطلالة المسجد الإسباني أو يوم كامل إلى شلالات أقشور و«جسر الله».',
    ),
    heroImage: '',
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
    thingsToDo: ll(
      [
        'Start at Plaza Uta el-Hammam for breakfast — the 15th-century kasbah faces it across the square.',
        'Photo-walk the blue alleys at sunrise (8–9 am) before the day-trip crowds arrive from Tangier.',
        'Hike 30 minutes to the Spanish Mosque viewpoint for golden-hour panorama over the medina.',
        'Day-trip to Akchour: 1h drive, then 2–4h round-trip hike to the cascades and God’s Bridge.',
        'Try local Rif specialties — bissara soup for breakfast, goat cheese, and kefta tagine.',
        'Shop for woolen blankets and natural-dye wovens — Chefchaouen is one of Morocco’s best for textiles.',
        'Walk the ramparts at dusk above the Ras El-Maa spring — locals come here to do their laundry.',
      ],
      [
        'Petit-déjeuner Place Uta el-Hammam — la kasbah du XVe siècle est en face.',
        'Promenade photo dans les ruelles bleues au lever du jour (8h-9h) avant l’arrivée des excursionnistes.',
        'Marche 30 min jusqu’au point de vue de la Mosquée Espagnole pour le golden hour.',
        'Excursion à Akchour : 1h en voiture, 2-4h aller-retour à pied vers les cascades et le Pont de Dieu.',
        'Spécialités locales — soupe bissara au petit-déjeuner, fromage de chèvre, tajine de kefta.',
        'Couvertures de laine et tissages teints naturellement — Chefchaouen est l’une des meilleures du Maroc pour le textile.',
        'Marche sur les remparts au coucher du soleil au-dessus de la source Ras El-Maa.',
      ],
      [
        'إفطار بساحة وطا الحمام — قصبة القرن 15 تقابلها.',
        'جولة تصوير في الأزقة الزرقاء عند الشروق (8-9 صباحًا) قبل وصول الأفواج من طنجة.',
        'مشي 30 دقيقة إلى إطلالة المسجد الإسباني للساعة الذهبية.',
        'رحلة يومية إلى أقشور: ساعة بالسيارة ثم 2-4 ساعات سيرًا إلى الشلالات وجسر الله.',
        'تذوّق أكلات الريف — حساء بيصارة للفطور، جبن الماعز، طاجين الكفتة.',
        'تسوّق بطانيات صوف ومنسوجات بألوان طبيعية — شفشاون من أفضل مدن المغرب في النسيج.',
        'مشي على الأسوار وقت الغروب فوق نبع رأس الماء حيث يغسل الأهالي ملابسهم.',
      ],
    ),
    localTips: ll(
      [
        'Stay overnight — most tourists arrive 11am and leave 5pm. The town transforms at dusk.',
        'Wear flat, grippy shoes — alleys are steep and slippery when freshly washed.',
        'Cash is king — many medina shops don’t take cards. ATM at Bab el-Ain works.',
        'Be respectful of residents’ doorways when taking photos — knock before stepping into a "blue staircase" shot.',
        'Local kif (cannabis) is widely grown in the Rif but illegal — politely decline offers from "guides".',
      ],
      [
        'Dormez sur place — la majorité des touristes arrive à 11h et repart à 17h. La ville change à la tombée du jour.',
        'Chaussures plates antidérapantes — les ruelles sont pentues et glissantes après lavage.',
        'Espèces obligatoires — beaucoup de boutiques de la médina ne prennent pas la carte. DAB à Bab el-Aïn.',
        'Respectez l’intimité des habitants pour les photos — frappez avant de monter un "escalier bleu".',
        'Le kif est cultivé dans le Rif mais illégal — déclinez poliment les offres de "guides".',
      ],
      [
        'بِت ليلة — معظم السياح يصلون 11 صباحًا ويغادرون 5 مساءً. المدينة تتغيّر مع الغروب.',
        'حذاء مسطح غير زلق — الأزقة منحدرة وزلقة بعد الغسل.',
        'الكاش ضروري — كثير من محلات المدينة لا تقبل البطاقات. صراف آلي ببَاب العين.',
        'احترم خصوصية السكان عند التصوير — اطرق الباب قبل التقاط صورة على «درج أزرق».',
        'الحشيش يُزرع في الريف لكنه ممنوع قانونيًا — ارفض بأدب عروض «المرشدين».',
      ],
    ),
    prices: l(
      'Guesthouse or small riad: €25–€55 / night. Tagine: MAD 60–90 (€6–€9). Round-trip taxi to Akchour: MAD 250–400 (€23–€37). Local guide for hike: €25–€40 / day. Wool blanket souvenir: MAD 250–700 (€23–€65).',
      'Maison d’hôtes ou petit riad : 25-55 €/nuit. Tajine : 60-90 MAD (6-9 €). Taxi A/R Akchour : 250-400 MAD (23-37 €). Guide de marche local : 25-40 €/jour. Couverture de laine souvenir : 250-700 MAD (23-65 €).',
      'دار ضيافة أو رياض صغير: 25-55€/ليلة. طاجين: 60-90 درهم (6-9€). تاكسي ذهابًا وإيابًا إلى أقشور: 250-400 درهم (23-37€). مرشد محلي للمشي: 25-40€/يوم. بطانية صوف تذكارية: 250-700 درهم (23-65€).',
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
        {
          question: 'Is one day enough in Chefchaouen?',
          answer:
            'One day lets you see the highlights, but staying overnight is much better — the town is magical after the day-trip crowds leave.',
        },
        {
          question: 'Is Chefchaouen actually blue?',
          answer:
            'Yes — almost every wall and stairway in the old medina is painted in shades of blue, and locals re-paint twice a year.',
        },
        {
          question: 'Is Chefchaouen safe for solo female travelers?',
          answer:
            'Yes, very. Chefchaouen is one of the friendliest and safest towns in Morocco. Dress modestly out of respect for the conservative Rif region.',
        },
      ],
      [
        {
          question: 'Comment se rendre à Chefchaouen ?',
          answer:
            'Il n’y a pas d’aéroport à Chefchaouen. La plupart des voyageurs arrivent en voiture privée ou en bus depuis Fès (4h), Tanger (2h30) ou Casablanca (5h30).',
        },
        {
          question: 'Une journée suffit-elle à Chefchaouen ?',
          answer:
            'Une journée permet de voir l’essentiel, mais dormir sur place est nettement mieux — la ville devient magique après le départ des excursionnistes.',
        },
        {
          question: 'Chefchaouen est-elle vraiment bleue ?',
          answer:
            'Oui — presque tous les murs et escaliers de la médina sont peints en bleu, et les habitants repeignent deux fois par an.',
        },
        {
          question: 'Chefchaouen est-elle sûre pour les femmes seules ?',
          answer:
            'Oui, très. Chefchaouen est l’une des villes les plus accueillantes et sûres du Maroc. Habillez-vous sobrement par respect pour le Rif conservateur.',
        },
      ],
      [
        {
          question: 'كيف أصل إلى شفشاون؟',
          answer:
            'لا يوجد مطار في شفشاون. يصل أغلب المسافرين بالسيارة الخاصة أو الحافلة من فاس (4 ساعات)، طنجة (2.5 ساعة)، أو الدار البيضاء (5.5 ساعة).',
        },
        {
          question: 'هل يكفي يوم في شفشاون؟',
          answer:
            'يوم يكفي لرؤية الأماكن البارزة، لكن المبيت أفضل بكثير — المدينة ساحرة بعد مغادرة الأفواج اليومية.',
        },
        {
          question: 'هل شفشاون زرقاء بالفعل؟',
          answer:
            'نعم — تقريبًا كل الجدران والسلالم في المدينة العتيقة مدهونة بدرجات الأزرق، والأهالي يعيدون الطلاء مرتين سنويًا.',
        },
        {
          question: 'هل شفشاون آمنة للمسافرات منفردات؟',
          answer:
            'نعم، آمنة جدًا وودودة. ارتدي ملابس محتشمة احترامًا لطابع الريف المحافظ.',
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
    longDescription: l(
      'Erg Chebbi is a 28-km-long, 5-km-wide ridge of orange-red dunes rising up to 150 m above the surrounding hammada. Most travelers reach Merzouga as the climax of a 3-day private tour from Marrakech via Aït Ben Haddou, the Dadès Valley and the Todra Gorges. The classic arc: arrive 4 pm, camel trek 90 minutes into the dunes, sunset on a high crest, Berber dinner and drumming at camp, sunrise camel back, breakfast at the kasbah-hotel, then either return to Marrakech (long) or continue to Fes via Midelt (cooler altitude route).',
      'L’Erg Chebbi est une crête de dunes orangées de 28 km de long et 5 km de large, jusqu’à 150 m au-dessus de la hammada. La plupart des voyageurs arrivent à Merzouga en apothéose d’un circuit privé de 3 jours depuis Marrakech via Aït Ben Haddou, la vallée du Dadès et les gorges du Todra. Le scénario type : arrivée 16h, méharée 1h30 jusqu’au camp, coucher de soleil sur une crête, dîner berbère et tambours au camp, lever de soleil et retour à dos de dromadaire, petit-déjeuner au kasbah-hôtel, puis retour à Marrakech ou continuation vers Fès via Midelt.',
      'يبلغ طول عرق الشبي 28 كم وعرضه 5 كم، وترتفع كثبانه البرتقالية حتى 150م. يصل أغلب الزوار إلى مرزوكة في نهاية رحلة خاصة لمدة 3 أيام من مراكش عبر آيت بن حدّو ووادي دادس ومضيق تودرا. السيناريو المعتاد: الوصول الساعة 4 عصرًا، ركوب الجمال 90 دقيقة إلى المخيم، الغروب على قمة كثيب، عشاء أمازيغي وطبول، شروق الشمس، إفطار في الفندق-القصبة، ثم العودة إلى مراكش أو إكمال إلى فاس عبر ميدلت.',
    ),
    heroImage: '',
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
    thingsToDo: ll(
      [
        'Ride camels 60–90 min into the dunes for sunset — wear a turban (cheche), the guide will tie it for you.',
        'Sleep in a luxury Berber tent — modern desert camps have private bathrooms, plush beds, and Wi-Fi.',
        'Climb the tallest dune at 5 am for sunrise — leave camp 30 min before first light, take it slow in soft sand.',
        'Drive a 4x4 to the Algerian border at Erg Znaigui — fewer tourists, often a stop for nomad tea.',
        'Visit a Khamlia village for an evening of Gnawa music — direct descendants of sub-Saharan slave caravans.',
        'Sandboard a dune face — most camps lend boards free of charge.',
        'Spot fennec foxes, desert hares and migratory flamingos at the seasonal Dayet Srji lake (Mar–May).',
      ],
      [
        'Méharée 60-90 min vers les dunes au coucher du soleil — turban (cheche) noué par le guide.',
        'Tente berbère de luxe — les camps modernes ont salle de bain privée, lits confortables, Wi-Fi.',
        'Montée à la plus haute dune à 5h pour le lever du soleil — partez 30 min avant, doucement dans le sable.',
        '4x4 jusqu’à la frontière algérienne à Erg Znaigui — moins de touristes, souvent thé chez les nomades.',
        'Soirée musique gnawa à Khamlia — descendants directs des caravanes sub-sahariennes.',
        'Surf sur les dunes — la plupart des camps prêtent des planches gratuitement.',
        'Fennecs, lièvres et flamants migrateurs au lac saisonnier Dayet Srji (mars-mai).',
      ],
      [
        'ركوب الجمال 60-90 دقيقة نحو الكثبان عند الغروب — يلفّ المرشد العمامة (الشاش) لك.',
        'النوم في خيمة أمازيغية فاخرة — المخيمات الحديثة بحمامات خاصة وأَسرّة مريحة وواي فاي.',
        'صعود أعلى كثيب الساعة 5 صباحًا للشروق — اخرج قبل الضوء بـ 30 دقيقة وامش ببطء في الرمال.',
        'دفع رباعي إلى الحدود الجزائرية في عرق زنايقي — سياح أقل وغالبًا توقّف عند خيمة بدوية للشاي.',
        'سهرة موسيقى كناوة في خاملية — أحفاد قوافل العبيد من إفريقيا جنوب الصحراء.',
        'التزلج على الكثبان — تعير معظم المخيمات الألواح مجانًا.',
        'مراقبة الثعلب الصحراوي والأرنب والنحام المهاجر في بحيرة دايت السرجي الموسمية (مارس-ماي).',
      ],
    ),
    localTips: ll(
      [
        'Book a real desert camp ON the dunes — not a hotel "at the edge". The 90-minute camel ride matters.',
        'Pack a fleece + light down jacket — nights drop to 5–10 °C even in summer; winter nights touch zero.',
        'Headlamp is essential at camp (most camps run generator off at 11 pm).',
        'Avoid the cheap Marrakech "2N/3D" group buses — exhausting, rushed, mediocre camps. Worth paying for a private 4x4 trip.',
        'Don’t leave luggage at hotel reception in Merzouga — bring an overnight bag to the camp, leave the rest in your driver’s car.',
      ],
      [
        'Réservez un vrai camp DANS les dunes — pas un hôtel "au bord". La méharée d’1h30 fait toute l’expérience.',
        'Polaire + petite doudoune — les nuits descendent à 5-10 °C même en été, et près de zéro en hiver.',
        'Lampe frontale obligatoire au camp (générateurs souvent coupés à 23h).',
        'Évitez les bus "2N/3J" depuis Marrakech — épuisant, expéditif, camps moyens. Préférez un 4x4 privé.',
        'Ne laissez pas vos bagages à la réception de l’hôtel — sac de nuit pour le camp, le reste dans la voiture du chauffeur.',
      ],
      [
        'احجز مخيمًا حقيقيًا فوق الكثبان — لا فندقًا «عند الحافة». رحلة الجمل لمدة 90 دقيقة جزء أساسي.',
        'احمل سترة صوفية + خفيفة من الريش — تنخفض حرارة الليل إلى 5-10°م حتى صيفًا وتقترب من الصفر شتاءً.',
        'الكشّاف الأمامي ضروري في المخيم (المولّدات تنطفئ غالبًا الساعة 11 ليلًا).',
        'تجنّب حافلات "ليلتان/3 أيام" الرخيصة من مراكش — مرهقة وعجلى ومخيماتها متوسطة. ادفع للدفع الرباعي الخاص.',
        'لا تترك حقائبك في استقبال فندق مرزوكة — أحضر حقيبة ليلية للمخيم واترك الباقي في سيارة السائق.',
      ],
    ),
    prices: l(
      'Luxury desert camp (tent + dinner + camel + breakfast): €90–€180 / person / night. Mid-range camp: €55–€90. 3-day private Marrakech–Sahara trip with driver, 4x4 and 2 nights: from €350 / person (2 pax) up to €700+ (luxury). Camel sunset only (no overnight): €25–€40.',
      'Camp désert de luxe (tente + dîner + dromadaire + petit-déjeuner) : 90-180 €/pers/nuit. Milieu de gamme : 55-90 €. Circuit privé 3 jours Marrakech-Sahara avec chauffeur, 4x4, 2 nuits : à partir de 350 €/pers (à 2) jusqu’à 700 €+ (luxe). Méharée coucher du soleil sans nuit : 25-40 €.',
      'مخيم صحراوي فاخر (خيمة + عشاء + جمل + فطور): 90-180€/شخص/ليلة. متوسط: 55-90€. رحلة خاصة 3 أيام مراكش-الصحراء مع سائق ودفع رباعي وليلتين: ابتداءً من 350€/شخص (لشخصين) حتى 700€+ (فاخر). جمل غروب فقط دون مبيت: 25-40€.',
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
        {
          question: 'Is it cold in the Sahara at night?',
          answer:
            'Yes — desert nights are cold year-round. In winter (Dec–Feb) it can hit 0 °C; even in summer the difference between day (38 °C) and night (15 °C) is dramatic. Bring warm layers.',
        },
        {
          question: 'Can I drive to the desert camp myself?',
          answer:
            'No — camps are 5–10 km off-road in soft sand, accessible only by 4x4 or camel. Park at the hotel and take their transfer.',
        },
        {
          question: 'Is the desert experience suitable for kids?',
          answer:
            'Yes, from about age 6+. Children love the camel ride and the dunes. Camps offer family tents with separate sleeping areas.',
        },
      ],
      [
        {
          question: 'Combien de temps de route de Marrakech à Merzouga ?',
          answer:
            'Environ 9-10 heures en direct. Nous recommandons un circuit de 3 jours via Aït Ben Haddou, la vallée du Dadès et les gorges du Todra.',
        },
        {
          question: 'Fait-il froid la nuit dans le Sahara ?',
          answer:
            'Oui — les nuits du désert sont froides toute l’année. En hiver (déc-fév) on peut descendre à 0 °C ; même en été l’écart jour/nuit est important. Prévoyez des couches chaudes.',
        },
        {
          question: 'Peut-on rejoindre le camp en voiture seul ?',
          answer:
            'Non — les camps sont à 5-10 km en hors-piste dans le sable, accessibles uniquement en 4x4 ou dromadaire. Garez-vous à l’hôtel.',
        },
        {
          question: 'Le désert convient-il aux enfants ?',
          answer:
            'Oui, à partir de 6 ans environ. Les enfants adorent la méharée et les dunes. Tentes familiales avec espaces séparés disponibles.',
        },
      ],
      [
        {
          question: 'كم تستغرق الرحلة من مراكش إلى مرزوكة؟',
          answer:
            'حوالي 9-10 ساعات بشكل مباشر. ننصح برحلة 3 أيام تشمل آيت بن حدو ووادي دادس ومضيق تودرا.',
        },
        {
          question: 'هل تبرد ليالي الصحراء؟',
          answer:
            'نعم — ليالي الصحراء باردة على مدار السنة. في الشتاء (دجنبر-فبراير) قد تصل إلى 0°م، وحتى صيفًا الفرق بين النهار والليل كبير. أحضر طبقات دافئة.',
        },
        {
          question: 'هل يمكنني القيادة إلى المخيم بنفسي؟',
          answer:
            'لا — المخيمات على بعد 5-10 كم خارج الطريق في رمال ناعمة، يصل إليها فقط الدفع الرباعي أو الجمل. اركن في الفندق.',
        },
        {
          question: 'هل تجربة الصحراء مناسبة للأطفال؟',
          answer:
            'نعم، من سن 6 سنوات تقريبًا. يحب الأطفال ركوب الجمل والكثبان. تتوفر خيام عائلية بفواصل للنوم.',
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
    longDescription: l(
      'Morocco’s largest city and main international airport (CMN), Casablanca is the country’s economic engine — a city of 3.7 million where Art Deco façades from the French Protectorate share the skyline with the world’s 3rd-largest mosque. Most travelers use it as a 24-hour stopover before Marrakech or Fes, but a full day reveals genuine charms: the Hassan II Mosque, the Habous quarter, the elegant Mauresque downtown, and an evening on the Corniche with fresh seafood and ocean breeze.',
      'Plus grande ville du Maroc et principal aéroport international (CMN), Casablanca est le moteur économique du pays — 3,7 millions d’habitants où les façades Art déco du Protectorat français côtoient la 3e plus grande mosquée du monde. La plupart des voyageurs y passent 24h avant Marrakech ou Fès, mais une journée pleine révèle de vrais charmes : la mosquée Hassan II, le quartier des Habous, le centre-ville mauresque élégant, et une soirée sur la Corniche.',
      'أكبر مدن المغرب وعاصمته الاقتصادية ومطاره الدولي الرئيس (CMN)، تضم الدار البيضاء 3.7 مليون نسمة، وتتجاور فيها واجهات الآرت ديكو من عهد الحماية الفرنسية مع ثالث أكبر مسجد في العالم. يعبرها أغلب المسافرين في 24 ساعة قبل مراكش أو فاس، لكن يوم كامل يكشف عن سحر حقيقي: مسجد الحسن الثاني، حي الحبوس، وسط المدينة المغربي، وأمسية على الكورنيش.',
    ),
    heroImage: '',
    geo: { lat: 33.5731, lng: -7.5898 },
    highlights: ll(
      ['Hassan II Mosque', 'Corniche & Ain Diab', 'Art Deco downtown walking tour', 'Habous quarter'],
      ['Mosquée Hassan II', 'Corniche & Aïn Diab', 'Centre Art déco à pied', 'Quartier des Habous'],
      ['مسجد الحسن الثاني', 'الكورنيش وعين الذئاب', 'جولة في وسط المدينة آرت ديكو', 'حي الحبوس'],
    ),
    thingsToDo: ll(
      [
        'Tour the Hassan II Mosque — the only mosque in Morocco open to non-Muslims, with stunning interior tilework. Tickets MAD 140.',
        'Walk the Art Deco downtown — start at Place Mohammed V and Place des Nations Unies, then Rue Mohammed Smiha.',
        'Stroll the Habous quarter — a 1920s "new medina" with arcaded shops, olive sellers and the Mohammed V mosque.',
        'Sunset drinks on the Corniche at Ain Diab — Sky 28 or Rick’s Café for the Casablanca movie ambiance.',
        'Dine at Le Cabestan or La Sqala for seafood with a view.',
        'Visit Villa des Arts and the Moroccan Jewish Heritage Museum (the only Jewish museum in the Arab world).',
        'Take the new Casablanca tram between landmarks — cheap and efficient (MAD 6).',
      ],
      [
        'Mosquée Hassan II — seule mosquée du Maroc ouverte aux non-musulmans, intérieur exceptionnel. 140 MAD.',
        'Quartier Art déco à pied — départ Place Mohammed V et Place des Nations Unies, puis Rue Mohammed Smiha.',
        'Quartier des Habous — "nouvelle médina" des années 1920, arcades, marchands d’olives, mosquée Mohammed V.',
        'Apéro coucher de soleil à la Corniche, Aïn Diab — Sky 28 ou Rick’s Café pour l’ambiance du film.',
        'Dîner fruits de mer au Cabestan ou à La Sqala avec vue.',
        'Villa des Arts et Musée du judaïsme marocain (seul musée juif du monde arabe).',
        'Tramway moderne entre les sites — efficace et bon marché (6 MAD).',
      ],
      [
        'زيارة مسجد الحسن الثاني — المسجد الوحيد المفتوح لغير المسلمين في المغرب، بزخارف داخلية مذهلة. 140 درهم.',
        'مشي في وسط المدينة الآرت ديكو — البداية ساحة محمد الخامس وساحة الأمم المتحدة، ثم شارع محمد سميحة.',
        'حي الحبوس — «مدينة جديدة» من العشرينات بأقواسها وباعة الزيتون ومسجد محمد الخامس.',
        'مشروبات الغروب على كورنيش عين الذئاب — Sky 28 أو Rick’s Café لأجواء فيلم كازابلانكا.',
        'عشاء بحري في Le Cabestan أو La Sqala مع إطلالة.',
        'فيلا الفنون ومتحف التراث اليهودي المغربي (المتحف اليهودي الوحيد في العالم العربي).',
        'الترامواي بين المعالم — رخيص وفعّال (6 درهم).',
      ],
    ),
    localTips: ll(
      [
        'Casablanca airport (CMN) to downtown: take the ONCF train direct from the airport — MAD 43, every 30 min, 35 min ride.',
        'The Hassan II Mosque interior tours run 4×/day in English/French — book online or arrive 30 min early.',
        'Skip "medina of Casablanca" — it’s small and uninspired compared to Marrakech or Fes.',
        'Petit-taxi minimum fare is MAD 20 — ask for the meter ("compteur s’il vous plaît").',
        'Casablanca has Morocco’s best restaurant scene — book ahead at Le Cabestan, La Sqala, Rick’s Café.',
      ],
      [
        'Aéroport CMN — centre : train ONCF direct, 43 MAD, toutes les 30 min, 35 min de trajet.',
        'Visites guidées intérieures de la mosquée 4 fois/jour en anglais/français — réservez en ligne.',
        'Évitez la "médina de Casablanca" — petite et sans intérêt face à Marrakech ou Fès.',
        'Course minimum petit-taxi 20 MAD — exigez le compteur.',
        'Meilleure scène gastronomique du Maroc — réservez Le Cabestan, La Sqala, Rick’s Café.',
      ],
      [
        'من المطار (CMN) إلى المدينة: قطار ONCF مباشر، 43 درهم، كل 30 دقيقة، 35 دقيقة.',
        'الجولات الداخلية لمسجد الحسن الثاني 4 مرات/يوم بالإنجليزية والفرنسية — احجز عبر الإنترنت.',
        'تجاوز «المدينة العتيقة بالدار البيضاء» — صغيرة وغير مميزة مقارنة بمراكش أو فاس.',
        'الحد الأدنى للتاكسي الصغير 20 درهم — اطلب العداد ("compteur s’il vous plaît").',
        'أفضل مشهد مطاعم في المغرب — احجز مسبقًا في Le Cabestan وLa Sqala وRick’s Café.',
      ],
    ),
    prices: l(
      '4-star hotel downtown: €60–€110 / night. Hassan II Mosque guided tour: MAD 140 (€13). Seafood dinner with wine at Le Cabestan: MAD 400–700 (€37–€65). Tramway: MAD 6 (€0.55). Petit-taxi across town: MAD 25–45 (€2.50–€4.50).',
      'Hôtel 4* centre : 60-110 €/nuit. Visite mosquée Hassan II : 140 MAD (13 €). Dîner fruits de mer + vin au Cabestan : 400-700 MAD (37-65 €). Tram : 6 MAD (0,55 €). Petit taxi en ville : 25-45 MAD (2,50-4,50 €).',
      'فندق 4 نجوم وسط المدينة: 60-110€/ليلة. جولة مسجد الحسن الثاني: 140 درهم (13€). عشاء بحري مع نبيذ في Le Cabestan: 400-700 درهم (37-65€). الترامواي: 6 درهم (0.55€). تاكسي صغير: 25-45 درهم (2.50-4.50€).',
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
        {
          question: 'How do I get from Casablanca Airport to the city?',
          answer:
            'The ONCF airport train runs every 30 minutes to Casa-Voyageurs station for MAD 43 (€4). A petit-taxi costs MAD 250–300 (€23–€28) at the fixed evening rate.',
        },
        {
          question: 'Can I visit the Hassan II Mosque if I’m not Muslim?',
          answer:
            'Yes — Hassan II is the only mosque in Morocco that admits non-Muslims, on 1-hour guided tours run multiple times a day.',
        },
        {
          question: 'Is Casablanca safe at night?',
          answer:
            'The Corniche, downtown and Maarif are safe and lively in the evening. As in any large city, avoid empty side streets and keep valuables out of sight.',
        },
      ],
      [
        {
          question: 'Casablanca vaut-elle la visite ?',
          answer:
            'Casablanca se visite idéalement en 1 jour, principalement pour la mosquée Hassan II. La plupart des voyageurs atterrissent à Casablanca puis filent vers Marrakech, Fès ou Rabat.',
        },
        {
          question: 'Comment aller de l’aéroport au centre ?',
          answer:
            'Train ONCF toutes les 30 min jusqu’à Casa-Voyageurs, 43 MAD (4 €). Petit taxi : 250-300 MAD (23-28 €) au tarif fixe nuit.',
        },
        {
          question: 'Peut-on visiter Hassan II en étant non-musulman ?',
          answer:
            'Oui — Hassan II est la seule mosquée du Maroc ouverte aux non-musulmans, en visites guidées d’1h plusieurs fois par jour.',
        },
        {
          question: 'Casablanca est-elle sûre la nuit ?',
          answer:
            'La Corniche, le centre et Maârif sont sûrs et animés le soir. Évitez les rues vides et la valeur visible.',
        },
      ],
      [
        {
          question: 'هل الدار البيضاء تستحق الزيارة؟',
          answer:
            'تكفي يوم واحد، أساسًا لزيارة مسجد الحسن الثاني. يصل معظم المسافرين إلى الدار البيضاء ثم يكملون نحو مراكش أو فاس أو الرباط.',
        },
        {
          question: 'كيف أنتقل من المطار إلى وسط الدار البيضاء؟',
          answer:
            'قطار المطار ONCF كل 30 دقيقة إلى محطة كازا فوياجير، 43 درهم (4€). التاكسي الصغير: 250-300 درهم (23-28€) بسعر ثابت ليلًا.',
        },
        {
          question: 'هل يمكنني زيارة مسجد الحسن الثاني وأنا غير مسلم؟',
          answer:
            'نعم — الحسن الثاني هو المسجد الوحيد في المغرب المفتوح لغير المسلمين، بجولات إرشادية ساعة وعدة مرات يوميًا.',
        },
        {
          question: 'هل الدار البيضاء آمنة ليلًا؟',
          answer:
            'الكورنيش ووسط المدينة والمعاريف آمنة ونشطة مساءً. كأي مدينة كبرى، تجنّب الأزقة الفارغة وأخفِ الثمين.',
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
    longDescription: l(
      'Designed in 1764 by French architect Théodore Cornut for Sultan Mohammed III, Essaouira (then "Mogador") was Morocco’s most important Atlantic port for two centuries. Today it’s a 50,000-resident UNESCO city known for its Portuguese-style ramparts, blue fishing boats, gnawa music, and the steady "alizé" wind that makes it Morocco’s windsurf and kitesurf capital. Two days is ideal: one for the medina, ramparts and beach; one for Sidi Kaouki surf or a boat trip to the Iles Purpuraires.',
      'Conçue en 1764 par l’architecte français Théodore Cornut pour le sultan Mohammed III, Essaouira (alors "Mogador") fut deux siècles le principal port atlantique du Maroc. C’est aujourd’hui une ville de 50 000 habitants classée UNESCO, connue pour ses remparts à la portugaise, ses barques bleues, la musique gnawa et l’"alizé" qui en fait la capitale marocaine du windsurf et du kitesurf. Deux jours est idéal : un pour la médina, les remparts et la plage ; un pour le surf à Sidi Kaouki ou les Iles Purpuraires.',
      'صمّمها الفرنسي تيودور كورنو عام 1764 للسلطان محمد الثالث، فكانت الصويرة («موكادور» سابقًا) أهم ميناء أطلسي بالمغرب لقرنين. اليوم هي مدينة 50 ألف نسمة مصنفة من اليونسكو، تشتهر بأسوارها البرتغالية الطراز وقواربها الزرقاء وموسيقى كناوة و«ريح الصبا» التي جعلتها عاصمة المغرب لرياضات الكايت سيرف. يومان مثاليان: يوم للمدينة العتيقة والأسوار والشاطئ، ويوم لسيدي كاوكي أو جزر الأرجوان.',
    ),
    heroImage: '',
    geo: { lat: 31.5125, lng: -9.7700 },
    highlights: ll(
      ['Skala de la Ville ramparts', 'Working blue fishing port', 'Surf & windsurf at Sidi Kaouki', 'Gnawa World Music Festival'],
      ['Remparts Skala de la Ville', 'Port de pêche bleu en activité', 'Surf et windsurf à Sidi Kaouki', 'Festival Gnaoua Musiques du Monde'],
      ['أسوار سقالة المدينة', 'ميناء الصيد الأزرق', 'ركوب الأمواج في سيدي كاوكي', 'مهرجان كناوة وموسيقى العالم'],
    ),
    thingsToDo: ll(
      [
        'Walk the Skala de la Ville ramparts (Orson Welles filmed Othello here) for cannon-lined ocean views.',
        'Watch fishermen unload the catch at the port — buy fresh sardines, point at one and they grill it at portside stalls.',
        'Browse argan oil cooperatives — Essaouira is the gateway to argan country, with women’s collectives demonstrating the process.',
        'Take a windsurf or kitesurf lesson at Sidi Kaouki (25 km south) — wind reliably 15–25 knots from April to October.',
        'Boat trip to Iles Purpuraires to see Eleonora’s falcons (May–Oct, falcon-breeding season).',
        'Catch a gnawa music night at Taros or Loft — or plan around the June festival.',
        'Sunset on the city beach — long stretch with horse and camel rides for kids.',
      ],
      [
        'Remparts Skala de la Ville (Orson Welles y a tourné Othello) — vues océan ponctuées de canons.',
        'Pêcheurs au port — achetez sardines fraîches, on les grille au stand voisin.',
        'Coopératives d’huile d’argan — Essaouira est la porte du pays de l’argan, démos par collectifs de femmes.',
        'Cours de windsurf ou kitesurf à Sidi Kaouki (25 km sud) — vent 15-25 nœuds d’avril à octobre.',
        'Bateau jusqu’aux Iles Purpuraires pour voir les faucons d’Éléonore (mai-oct).',
        'Soirée gnawa au Taros ou au Loft — ou venez pendant le festival de juin.',
        'Coucher de soleil sur la plage de ville — promenades à dos de cheval et chameau.',
      ],
      [
        'مشي على أسوار سقالة المدينة (صوّر فيها أورسون ويلز فيلم عطيل) — إطلالات محيطية مع مدافع.',
        'مراقبة الصيادين عند تفريغ القارب — اشترِ سردينًا طازجًا، يُشوى أمامك في الأكشاك.',
        'تعاونيات زيت الأركان — الصويرة بوابة بلاد الأركان، عرض الإنتاج من قبل نساء التعاونية.',
        'درس كايت سيرف أو ويندسيرف في سيدي كاوكي (25 كم جنوبًا) — الرياح 15-25 عقدة من أبريل إلى أكتوبر.',
        'رحلة قارب إلى جزر الأرجوان لمشاهدة صقور إليونورا (ماي-أكتوبر).',
        'سهرة موسيقى كناوة في Taros أو Loft — أو احضر مهرجان يونيو.',
        'غروب على شاطئ المدينة — جولات بالأحصنة والجمال للأطفال.',
      ],
    ),
    localTips: ll(
      [
        'Bring a windbreaker even in summer — the "alizé" blows hard from noon onward.',
        'Best fresh seafood in Morocco — get sardines, calamar and red shrimp grilled at port stalls (MAD 80–150 / generous plate).',
        'Stay inside the medina at a Maison d’hôtes for the Mogador atmosphere; rooftop terrace recommended.',
        'Drive from Marrakech in 2h45 — stop at the argan tree where goats climb (yes, real) near Tamanar for photos.',
        'June Gnawa Festival is free and outdoors — book your riad 4–6 months ahead.',
      ],
      [
        'Coupe-vent même en été — l’alizé souffle fort à partir de midi.',
        'Meilleurs fruits de mer du Maroc — sardines, calamars, crevettes rouges grillés au port (80-150 MAD/assiette généreuse).',
        'Maison d’hôtes en médina pour l’atmosphère Mogador ; terrasse en toiture recommandée.',
        '2h45 depuis Marrakech — arrêt à l’arganier aux chèvres près de Tamanar pour la photo.',
        'Festival Gnaoua de juin gratuit et en plein air — riad à réserver 4-6 mois à l’avance.',
      ],
      [
        'احمل سترة واقية من الرياح حتى صيفًا — رياح الصبا تشتد من منتصف النهار.',
        'أفضل مأكولات بحرية في المغرب — سردين وكاليمار وقريدس أحمر يُشوى عند أكشاك الميناء (80-150 درهم/طبق وافر).',
        'أقم في دار ضيافة بالمدينة العتيقة لأجواء موكادور؛ يُفضّل ذو سطح.',
        '2:45 ساعة من مراكش — توقّف عند شجرة الأركان وعليها الماعز بالقرب من تامانار للتصوير.',
        'مهرجان كناوة في يونيو مجاني وفي الهواء الطلق — احجز الرياض قبل 4-6 أشهر.',
      ],
    ),
    prices: l(
      'Medina maison d’hôtes: €30–€70 / night. Seafood grill at the port: MAD 80–150 (€7–€14). Kitesurf lesson 2h: €60–€80. Argan oil 250ml: MAD 80–120 (€7–€11). Round-trip taxi to Sidi Kaouki: MAD 250 (€23).',
      'Maison d’hôtes médina : 30-70 €/nuit. Grillade de fruits de mer au port : 80-150 MAD (7-14 €). Cours de kite 2h : 60-80 €. Huile d’argan 250 ml : 80-120 MAD (7-11 €). Taxi A/R Sidi Kaouki : 250 MAD (23 €).',
      'دار ضيافة في المدينة العتيقة: 30-70€/ليلة. شواء بحري في الميناء: 80-150 درهم (7-14€). درس كايت سيرف ساعتان: 60-80€. زيت أركان 250 مل: 80-120 درهم (7-11€). تاكسي ذهابًا وإيابًا إلى سيدي كاوكي: 250 درهم (23€).',
    ),
    bestTimeToVisit: l('April to October', 'D’avril à octobre', 'من أبريل إلى أكتوبر'),
    durationDays: 2,
    faqs: lf(
      [
        {
          question: 'How far is Essaouira from Marrakech?',
          answer: 'About 2.5–3 hours by car or bus. A very common day or 2-day trip from Marrakech.',
        },
        {
          question: 'Is Essaouira good for kids?',
          answer:
            'Yes — small, walkable, safe medina; beach with camel rides; calm ocean swimming in the bay; relaxed vibe overall.',
        },
        {
          question: 'When is the Gnawa Festival?',
          answer:
            'The Gnaoua World Music Festival happens annually in late June for 3-4 days. Outdoor concerts are free; book hotels 4+ months ahead.',
        },
      ],
      [
        {
          question: 'À quelle distance Essaouira est-elle de Marrakech ?',
          answer: 'Environ 2h30-3h en voiture ou en bus. Une excursion très courante d’un ou deux jours depuis Marrakech.',
        },
        {
          question: 'Essaouira convient-elle aux enfants ?',
          answer:
            'Oui — petite médina sûre et à pied ; promenades à dos de chameau sur la plage ; baignade calme dans la baie.',
        },
        {
          question: 'Quand a lieu le festival Gnaoua ?',
          answer:
            'Le Festival Gnaoua a lieu chaque année fin juin sur 3-4 jours. Les concerts en plein air sont gratuits. Réservez les hôtels 4 mois à l’avance.',
        },
      ],
      [
        {
          question: 'كم تبعد الصويرة عن مراكش؟',
          answer: 'حوالي 2.5 إلى 3 ساعات بالسيارة أو الحافلة. رحلة شائعة جدًا ليوم أو يومين من مراكش.',
        },
        {
          question: 'هل الصويرة مناسبة للأطفال؟',
          answer:
            'نعم — مدينة عتيقة صغيرة آمنة قابلة للمشي، جولات الإبل على الشاطئ، سباحة هادئة في الخليج، أجواء مريحة.',
        },
        {
          question: 'متى يقام مهرجان كناوة؟',
          answer:
            'يقام مهرجان كناوة وموسيقى العالم سنويًا أواخر يونيو لمدة 3-4 أيام. الحفلات في الهواء الطلق مجانية. احجز الفنادق قبل 4 أشهر.',
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
    longDescription: l(
      'Tangier’s strategic location across from Spain has made it Phoenician, Roman, Portuguese, Spanish, an "International Zone" until 1956, and finally Moroccan. A long literary and artistic legacy — Paul Bowles, William Burroughs, Henri Matisse, Mick Jagger — lingers in shabby-chic cafés. The €10 billion Tanger Med port and new high-speed Al Boraq train have revitalized the city; new boutique riads, contemporary galleries and clean beaches make it a 2-day must on any northern Morocco itinerary.',
      'La position stratégique de Tanger face à l’Espagne en a fait phénicienne, romaine, portugaise, espagnole, "Zone internationale" jusqu’en 1956, puis marocaine. Un long héritage littéraire et artistique — Paul Bowles, William Burroughs, Matisse, Mick Jagger — survit dans les cafés. Le port Tanger Med et le TGV Al Boraq ont revitalisé la ville ; nouveaux riads boutique, galeries d’art contemporain et plages propres en font un incontournable de 2 jours pour tout circuit nord.',
      'الموقع الاستراتيجي لطنجة قبالة إسبانيا جعلها فينيقية ثم رومانية ثم برتغالية ثم إسبانية ثم «منطقة دولية» حتى 1956 ثم مغربية. إرث أدبي وفني طويل — بول بولز، ويليام بوروز، ماتيس، ميك جاغر — لا يزال حاضرًا في مقاهيها. ميناء طنجة المتوسط وقطار البراق فائق السرعة أنعشا المدينة، ورياضات بوتيك جديدة وصالات عرض فنية حديثة وشواطئ نظيفة جعلتها زيارة إلزامية ليومين في أي برنامج للشمال.',
    ),
    heroImage: '',
    geo: { lat: 35.7595, lng: -5.8340 },
    highlights: ll(
      ['Kasbah & American Legation Museum', 'Café Hafa & Cap Spartel', 'Caves of Hercules', 'Day trip to Tetouan & Asilah'],
      ['Kasbah & Musée de la Légation Américaine', 'Café Hafa & Cap Spartel', 'Grottes d’Hercule', 'Excursion à Tétouan & Asilah'],
      ['القصبة ومتحف المفوضية الأمريكية', 'مقهى حافة ورأس سبارطيل', 'مغارة هرقل', 'رحلة يومية إلى تطوان وأصيلة'],
    ),
    thingsToDo: ll(
      [
        'Climb up to the Kasbah and the Kasbah Museum (Dar el-Makhzen) for views over the Strait.',
        'Visit the American Legation Museum — the only US National Historic Landmark on foreign soil.',
        'Have mint tea at Café Hafa (since 1921) — terraced over the sea where Burroughs and Bowles wrote.',
        'Lighthouse and Cap Spartel — where the Mediterranean and Atlantic officially meet.',
        'Caves of Hercules at low tide — the "Africa-shaped" opening to the Atlantic is the photo.',
        'Day trip 35 min to Asilah — small whitewashed port town with murals and Atlantic beach.',
        'Hop the Al Boraq high-speed train to Casablanca in 2h10 — by far the easiest north-south Morocco connection.',
      ],
      [
        'Montée à la Kasbah et au musée Dar el-Makhzen pour les vues sur le détroit.',
        'Musée de la Légation Américaine — seul site historique national américain à l’étranger.',
        'Thé à la menthe au Café Hafa (depuis 1921) — terrasses sur la mer où écrivaient Burroughs et Bowles.',
        'Phare et Cap Spartel — la Méditerranée rencontre officiellement l’Atlantique.',
        'Grottes d’Hercule à marée basse — l’ouverture "en forme d’Afrique" sur l’Atlantique.',
        'Excursion 35 min à Asilah — petit port blanchi à la chaux, fresques murales et plage.',
        'TGV Al Boraq Tanger-Casa en 2h10 — la meilleure liaison nord-sud du Maroc.',
      ],
      [
        'الصعود إلى القصبة ومتحف دار المخزن لإطلالات على المضيق.',
        'متحف المفوضية الأمريكية — الموقع التاريخي الأمريكي الوحيد خارج الأراضي الأمريكية.',
        'شاي النعناع في مقهى حافة (منذ 1921) — شرفات على البحر حيث كان يكتب بوروز وبولز.',
        'منارة ورأس سبارطيل — حيث يلتقي المتوسط والأطلسي رسميًا.',
        'مغارة هرقل عند الجزر — فتحة «على شكل أفريقيا» تطل على الأطلسي.',
        'رحلة يومية 35 دقيقة إلى أصيلة — مدينة بيضاء صغيرة بجدارياتها وشاطئها الأطلسي.',
        'قطار البراق فائق السرعة طنجة-الدار البيضاء في 2:10 — أسهل ربط شمال-جنوب في المغرب.',
      ],
    ),
    localTips: ll(
      [
        'Stay in the Kasbah or Petit Socco area, not modern Tangier — atmosphere is in the old town.',
        'Café Hafa: cash only, very basic, but a literary pilgrimage.',
        'Beach: skip the city beach (Plage Municipale), drive 15 km west to Achakar for clean Atlantic sand.',
        'Don’t accept "free tours" of the kasbah from random men — kindly say "shokran, I have a guide".',
        'High-speed Al Boraq to Casablanca/Rabat from Tanger-Ville station — book on oncf.ma the day before.',
      ],
      [
        'Logez à la Kasbah ou Petit Socco, pas dans le Tanger moderne — l’ambiance est dans la vieille ville.',
        'Café Hafa : espèces uniquement, basique, mais pèlerinage littéraire.',
        'Plage : évitez la Plage Municipale, allez 15 km ouest à Achakar pour du sable atlantique propre.',
        'N’acceptez pas de "tours gratuits" d’hommes au hasard — "shokran, j’ai un guide".',
        'TGV Al Boraq vers Casa/Rabat depuis Tanger-Ville — réservez sur oncf.ma la veille.',
      ],
      [
        'أقم في القصبة أو السوق الصغير، لا في طنجة الحديثة — الأجواء في المدينة العتيقة.',
        'مقهى حافة: نقدًا فقط، بسيط، لكنه حج أدبي.',
        'الشاطئ: تجنّب شاطئ البلدية، اذهب 15 كم غربًا إلى أشقار لرمل أطلسي نظيف.',
        'لا تقبل «جولات مجانية» من أشخاص عشوائيين — قل بأدب «شكرًا، لدي مرشد».',
        'قطار البراق إلى الدار البيضاء/الرباط من محطة طنجة-المدينة — احجز على oncf.ma قبل بيوم.',
      ],
    ),
    prices: l(
      'Boutique riad in kasbah: €45–€110 / night. Al Boraq train Tangier–Casa: MAD 224 2nd class (€21). Café Hafa mint tea: MAD 12 (€1.10). Petit-taxi: MAD 15–35 (€1.50–€3.50). Ferry Tanger Med to Tarifa: €40 / passenger.',
      'Riad boutique kasbah : 45-110 €/nuit. TGV Al Boraq Tanger-Casa : 224 MAD en 2nde (21 €). Thé Café Hafa : 12 MAD (1,10 €). Petit taxi : 15-35 MAD (1,50-3,50 €). Ferry Tanger Med-Tarifa : 40 €/passager.',
      'رياض بوتيك في القصبة: 45-110€/ليلة. قطار البراق طنجة-الدار البيضاء: 224 درهم درجة 2 (21€). شاي مقهى حافة: 12 درهم (1.10€). تاكسي صغير: 15-35 درهم (1.50-3.50€). عبّارة طنجة المتوسط-طريفا: 40€/راكب.',
    ),
    bestTimeToVisit: l('April to October', 'D’avril à octobre', 'من أبريل إلى أكتوبر'),
    durationDays: 2,
    faqs: lf(
      [
        { question: 'Can I take a ferry from Tangier to Spain?', answer: 'Yes — fast ferries run from Tanger Med to Tarifa or Algeciras in about 1–1.5 hours. Tanger-Ville port handles a few seasonal connections too.' },
        { question: 'How do I get from Tangier to Chefchaouen?', answer: 'About 2.5 hours by private car, or 3 hours by CTM bus. Most northern Morocco itineraries combine the two.' },
        { question: 'Is Tangier safe?', answer: 'Yes, particularly in the kasbah and around Petit Socco. As in any port city, watch your belongings in crowds.' },
      ],
      [
        { question: 'Peut-on prendre un ferry de Tanger vers l’Espagne ?', answer: 'Oui — des ferries rapides relient Tanger Med à Tarifa ou Algésiras en 1 à 1h30. Quelques liaisons saisonnières depuis Tanger-Ville.' },
        { question: 'Comment aller de Tanger à Chefchaouen ?', answer: '2h30 en voiture privée ou 3h en bus CTM. La plupart des circuits nord les combinent.' },
        { question: 'Tanger est-elle sûre ?', answer: 'Oui, surtout dans la kasbah et autour du Petit Socco. Vigilance habituelle dans les zones très fréquentées.' },
      ],
      [
        { question: 'هل يمكن أخذ العبّارة من طنجة إلى إسبانيا؟', answer: 'نعم — عبّارات سريعة تربط طنجة المتوسط بطريفا أو الجزيرة الخضراء في 1 إلى 1.5 ساعة. وبعض الرحلات الموسمية من ميناء طنجة-المدينة.' },
        { question: 'كيف أنتقل من طنجة إلى شفشاون؟', answer: 'حوالي 2.5 ساعة بسيارة خاصة أو 3 ساعات بحافلة CTM. أغلب جولات الشمال تجمع المدينتين.' },
        { question: 'هل طنجة آمنة؟', answer: 'نعم، خصوصًا في القصبة وحول السوق الصغير. كن حذرًا من الجيوب في الأماكن المزدحمة كأي مدينة ميناء.' },
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
    longDescription: l(
      'Morocco’s capital since independence in 1956, Rabat sits at the mouth of the Bou Regreg river facing its twin city Salé. UNESCO listed Rabat in 2012 for the way modern French planning (Marshal Lyautey) fits between the 12th-century Almohad walls and a quiet, well-kept old medina. Clean, green, calm and politically central, Rabat is the easiest city in Morocco to first-time visitors — and only 1 hour from Casablanca on the Al Boraq high-speed train.',
      'Capitale du Maroc depuis 1956, Rabat est sur l’estuaire du Bou Regreg face à sa ville jumelle Salé. UNESCO l’a inscrite en 2012 pour la cohabitation entre l’urbanisme français de Lyautey et les murailles almohades du XIIe siècle, dans une médina paisible et soignée. Propre, verte, calme et au centre politique, Rabat est la ville la plus facile pour un premier voyageur — et à 1h en TGV Al Boraq de Casablanca.',
      'عاصمة المغرب منذ الاستقلال عام 1956، تقع الرباط على مصب وادي أبي رقراق قبالة توأمتها سلا. صنّفتها اليونسكو عام 2012 لتزاوج التخطيط الفرنسي (ليوطي) مع أسوار الموحدين من القرن 12 ومدينة عتيقة هادئة منظمة. نظيفة، خضراء، هادئة، ومركز سياسي، الرباط أسهل مدينة لزائر المغرب لأول مرة — وعلى بُعد ساعة بقطار البراق من الدار البيضاء.',
    ),
    heroImage: '',
    geo: { lat: 34.0209, lng: -6.8416 },
    highlights: ll(
      ['Kasbah des Oudayas', 'Hassan Tower & Mausoleum of Mohammed V', 'Chellah Roman ruins', 'Mohammed VI Museum of Modern Art'],
      ['Kasbah des Oudaïas', 'Tour Hassan & Mausolée Mohammed V', 'Site romain du Chellah', 'Musée Mohammed VI d’art moderne'],
      ['قصبة الأوداية', 'صومعة حسان وضريح محمد الخامس', 'موقع شالة الأثري', 'متحف محمد السادس للفن المعاصر'],
    ),
    thingsToDo: ll(
      [
        'Walk through the blue-and-white Kasbah des Oudayas — Andalusian Garden inside, river views over Salé from the platform.',
        'See the Hassan Tower and the Mausoleum of Mohammed V — guards in red are happy to be photographed.',
        'Explore the Chellah — Roman, then Merinid, ruins overgrown with storks’ nests and bougainvillea.',
        'Visit the Mohammed VI Museum of Modern and Contemporary Art — best modern art collection in Morocco.',
        'Browse the small, calm medina — easy first medina experience for first-timers.',
        'Cross the new pedestrian bridge to Salé for a quieter, older medina half-day.',
        'Walk the Corniche along the Atlantic — fresh, family-friendly.',
      ],
      [
        'Kasbah des Oudaïas bleue et blanche — Jardin andalou à l’intérieur, vues sur Salé depuis la plate-forme.',
        'Tour Hassan et Mausolée Mohammed V — les gardes en tunique rouge se laissent volontiers photographier.',
        'Le Chellah — ruines romaines puis mérinides, nids de cigognes et bougainvilliers.',
        'Musée Mohammed VI d’art moderne et contemporain — meilleure collection moderne du Maroc.',
        'Médina petite et calme — idéale pour une première expérience.',
        'Pont piéton vers Salé pour une médina plus ancienne et plus silencieuse, demi-journée.',
        'Corniche atlantique — fraîche et familiale.',
      ],
      [
        'مشي في قصبة الأوداية الزرقاء-البيضاء — الحديقة الأندلسية بالداخل، وإطلالات على سلا من المنصة.',
        'صومعة حسان وضريح محمد الخامس — حراس بزيهم الأحمر يُسرّون بالصور.',
        'استكشاف شالة — أطلال رومانية ثم مرينية، أعشاش لقالق وأزهار جهنمية.',
        'متحف محمد السادس للفن الحديث والمعاصر — أفضل مجموعة فن حديث في المغرب.',
        'تجوّل في المدينة العتيقة الصغيرة الهادئة — تجربة سهلة لأول مرة.',
        'عبور الجسر الجديد للمشاة إلى سلا لزيارة مدينة عتيقة أقدم وأهدأ نصف يوم.',
        'مشي على الكورنيش الأطلسي — أجواء عائلية منعشة.',
      ],
    ),
    localTips: ll(
      [
        'Take the Al Boraq high-speed train from Casablanca (Casa-Voyageurs) — 50 min, MAD 105 (€10) 2nd class.',
        'Rabat-Ville station is in the centre next to the medina — no taxi needed if you’re staying in the kasbah area.',
        'Visit Chellah late afternoon for the storks at golden hour.',
        'Rabat is the cleanest major Moroccan city — restrictions on hassle and street selling are actively enforced.',
        'Friday morning many sites and government buildings close early — schedule around it.',
      ],
      [
        'TGV Al Boraq depuis Casa-Voyageurs — 50 min, 105 MAD (10 €) 2nde.',
        'Gare Rabat-Ville en plein centre, à côté de la médina — pas de taxi nécessaire si vous logez Kasbah.',
        'Chellah en fin d’après-midi pour les cigognes au golden hour.',
        'Rabat est la grande ville la plus propre du Maroc — pas de harcèlement de rue ou vente sauvage.',
        'Vendredi matin, sites et bâtiments officiels ferment tôt — anticipez.',
      ],
      [
        'قطار البراق من الدار البيضاء (كازا فوياجير) — 50 دقيقة، 105 درهم (10€) درجة 2.',
        'محطة الرباط-المدينة في الوسط بجوار المدينة العتيقة — لا تحتاج تاكسي إذا كنت في القصبة.',
        'زيارة شالة آخر العصر لمشاهدة اللقالق في الساعة الذهبية.',
        'الرباط أنظف مدن المغرب الكبرى — قيود التحرّش والبيع العشوائي تُفرض فعلًا.',
        'صباح الجمعة كثير من المواقع والإدارات تُغلق مبكرًا — برمج وفقًا لذلك.',
      ],
    ),
    prices: l(
      'Mid-range hotel Agdal/centre: €40–€80 / night. Train Casa–Rabat 2nd class: MAD 105 (€10). Chellah entry: MAD 70 (€6.50). Museum of Modern Art: MAD 30 (€3). Petit-taxi: MAD 15–25 (€1.50–€2.50).',
      'Hôtel moyen Agdal/centre : 40-80 €/nuit. Train Casa-Rabat 2nde : 105 MAD (10 €). Chellah : 70 MAD (6,50 €). Musée d’art moderne : 30 MAD (3 €). Petit taxi : 15-25 MAD (1,50-2,50 €).',
      'فندق متوسط في أكدال/الوسط: 40-80€/ليلة. قطار الدار البيضاء-الرباط درجة 2: 105 درهم (10€). دخول شالة: 70 درهم (6.50€). متحف الفن الحديث: 30 درهم (3€). تاكسي صغير: 15-25 درهم (1.50-2.50€).',
    ),
    bestTimeToVisit: l('March to November', 'De mars à novembre', 'من مارس إلى نوفمبر'),
    durationDays: 1,
    faqs: lf(
      [
        { question: 'How far is Rabat from Casablanca?', answer: 'About 1 hour by car or 45 minutes by high-speed train (Al Boraq).' },
        { question: 'Is Rabat worth a day?', answer: 'Yes — easier and calmer than Marrakech or Fes, with the kasbah, mausoleum, Chellah and modern art museum all in a small area.' },
        { question: 'Can I see Rabat as a day trip from Casablanca?', answer: 'Easily — train is 45 min each way. Leave by 9am, return by 7pm.' },
      ],
      [
        { question: 'À quelle distance Rabat est-elle de Casablanca ?', answer: 'Environ 1 heure en voiture ou 45 minutes en TGV (Al Boraq).' },
        { question: 'Rabat mérite-t-elle une journée ?', answer: 'Oui — plus calme que Marrakech ou Fès, avec kasbah, mausolée, Chellah et musée d’art moderne sur une petite zone.' },
        { question: 'Peut-on visiter Rabat en excursion depuis Casablanca ?', answer: 'Facilement — 45 min de train chacun. Partez 9h, revenez 19h.' },
      ],
      [
        { question: 'كم تبعد الرباط عن الدار البيضاء؟', answer: 'حوالي ساعة بالسيارة أو 45 دقيقة بقطار البراق فائق السرعة.' },
        { question: 'هل تستحق الرباط يومًا؟', answer: 'نعم — أهدأ من مراكش وفاس، وقصبة الأوداية والضريح وشالة والمتحف كلها في منطقة صغيرة.' },
        { question: 'هل يمكن زيارة الرباط في رحلة يومية من الدار البيضاء؟', answer: 'بسهولة — القطار 45 دقيقة في الاتجاه. اخرج 9 صباحًا وارجع 7 مساءً.' },
      ],
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
    longDescription: l(
      'Levelled by a 1960 earthquake and rebuilt as Morocco’s flagship beach resort, Agadir has 300+ sunny days per year, a 6-km-long bay perfect for families, and warm-water Atlantic swimming. The city itself has limited "old Morocco" charm, but its surroundings are world-class: Taghazout for surf, Paradise Valley for canyon pools, the Anti-Atlas back-country for argan groves and Berber villages, Souss-Massa park for flamingos. Plan 2–3 days minimum, or 7+ for a beach holiday.',
      'Rasé par le séisme de 1960 puis reconstruit en station balnéaire phare du Maroc, Agadir compte 300+ jours de soleil par an, une baie sable de 6 km parfaite pour les familles, et une eau atlantique tempérée. La ville elle-même a peu de "vieux Maroc", mais ses environs sont exceptionnels : Taghazout pour le surf, Paradise Valley pour les piscines naturelles, l’Anti-Atlas et ses arganeraies, parc Souss-Massa et ses flamants. Prévoyez 2-3 jours, ou 7+ pour des vacances balnéaires.',
      'دمّرها زلزال 1960 ثم أُعيد بناؤها لتصير وجهة المغرب الشاطئية الأولى، تتمتع أكادير بأكثر من 300 يوم مشمس في السنة، وخليج رملي طوله 6 كم مثالي للعائلات، ومياه أطلسية معتدلة. المدينة نفسها بلا «مغرب قديم»، لكن محيطها استثنائي: تغازوت للسرف، باراديز فالي لِبِركها، الأطلس الصغير للأركان والقرى الأمازيغية، ومنتزه سوس-ماسة للنحام. خصّص 2-3 أيام كحد أدنى، أو 7+ لعطلة شاطئية.',
    ),
    heroImage: '',
    geo: { lat: 30.4278, lng: -9.5981 },
    highlights: ll(
      ['Agadir beach & marina', 'Surf at Taghazout & Anchor Point', 'Paradise Valley waterfalls', 'Argan oil cooperative visit'],
      ['Plage et marina d’Agadir', 'Surf à Taghazout & Anchor Point', 'Paradise Valley', 'Coopérative d’huile d’argan'],
      ['شاطئ ومارينا أكادير', 'ركوب الأمواج في تغازوت', 'وادي الجنة (Paradise Valley)', 'زيارة تعاونية زيت الأركان'],
    ),
    thingsToDo: ll(
      [
        'Walk the 6-km Corniche/beach promenade — café-lined, family-safe, with a marina at the north end.',
        'Surf or surf-lesson at Taghazout (20 min north) — Anchor Point and Banana Point are the classic right-handers.',
        'Drive 50 min to Paradise Valley — palm-fringed canyon with natural pools you can swim and jump from.',
        'Half-day in Souss-Massa National Park — flamingos, bald ibises, oryx; a lesser-known but rewarding stop.',
        'Visit an argan oil women’s cooperative near Tiout — see the cracking, roasting and pressing.',
        'Take the cable car (since 2023) to the Agadir Oufella kasbah for panorama over the bay.',
        'Day trip to Tafraoute and the painted blue rocks for Anti-Atlas landscapes.',
      ],
      [
        'Promenade 6 km de corniche-plage — cafés, sécurité familiale, marina au nord.',
        'Surf ou cours à Taghazout (20 min nord) — Anchor Point et Banana Point, droites classiques.',
        '50 min vers Paradise Valley — canyon palmiers et piscines naturelles où plonger.',
        'Demi-journée au parc national Souss-Massa — flamants, ibis chauves, oryx.',
        'Coopérative féminine d’huile d’argan près de Tiout — concassage, torréfaction, pressage.',
        'Téléphérique (depuis 2023) jusqu’à la kasbah Agadir Oufella, panorama sur la baie.',
        'Excursion Tafraoute et "rochers bleus" pour les paysages anti-Atlas.',
      ],
      [
        'مشي على كورنيش/شاطئ بطول 6 كم — مقاه، عائلي آمن، مارينا في الشمال.',
        'سرف أو درس في تغازوت (20 دقيقة شمالًا) — Anchor Point وBanana Point أمواج كلاسيكية.',
        '50 دقيقة إلى وادي الجنة — وادٍ بالنخيل وبِرك طبيعية للسباحة والقفز.',
        'نصف يوم في منتزه سوس-ماسة الوطني — نحام وأبو منجل ومها.',
        'زيارة تعاونية نسوية لزيت الأركان قرب تيوت — كسر وتحميص وعصر.',
        'التلفريك (منذ 2023) إلى قصبة أكادير أوفلا لإطلالة على الخليج.',
        'رحلة يومية إلى تافراوت والصخور الزرقاء المرسومة لمناظر الأطلس الصغير.',
      ],
    ),
    localTips: ll(
      [
        'Beachfront hotels in the "Secteur Touristique" are walking-distance to everything — Founty area is family-oriented.',
        'Atlantic water 17-22 °C — cooler than the Med. Surf in a 3/2 wetsuit year-round.',
        'Taghazout is the better base for surfers (cheaper, more lively); Agadir for families and pure beach.',
        'Ramadan: many traditional restaurants in the medina close until sunset; resort restaurants stay open.',
        'Argan oil from cooperatives is genuine — at souvenir shops it’s often diluted.',
      ],
      [
        'Hôtels du "Secteur Touristique" à pied de tout — Founty est familial.',
        'Eau Atlantique 17-22 °C — fraîche. Surf en combinaison 3/2 toute l’année.',
        'Taghazout pour les surfers (moins cher, animé) ; Agadir pour les familles et la plage pure.',
        'Ramadan : beaucoup de restaurants traditionnels en médina ferment jusqu’au coucher ; resorts ouverts.',
        'Argan en coopérative authentique — en boutique souvenir, souvent dilué.',
      ],
      [
        'فنادق «المنطقة السياحية» على بُعد مشي من كل شيء — منطقة فاونتي عائلية.',
        'مياه الأطلسي 17-22°م — أبرد من المتوسط. الواقي 3/2 طوال السنة.',
        'تغازوت أفضل قاعدة للسرف (أرخص وأكثر حيوية)، أكادير للعائلات والشاطئ.',
        'في رمضان: كثير من المطاعم التقليدية في المدينة تغلق حتى الغروب، والمنتجعات تبقى مفتوحة.',
        'زيت الأركان من التعاونيات أصلي — أما محلات السوفنير فغالبًا يخفّف.',
      ],
    ),
    prices: l(
      'Beachfront 4★ hotel: €70–€130 / night. Surf lesson in Taghazout: €30–€45 / 2h with board. Paradise Valley shared van: MAD 250 (€23). Argan oil 250 ml (cooperative): MAD 120 (€11). Fish lunch at the port: MAD 80–120 (€7–€11).',
      'Hôtel 4★ front de mer : 70-130 €/nuit. Cours de surf Taghazout : 30-45 €/2h planche incluse. Paradise Valley en navette partagée : 250 MAD (23 €). Huile d’argan coopérative 250 ml : 120 MAD (11 €). Déjeuner poisson au port : 80-120 MAD (7-11 €).',
      'فندق 4 نجوم على الشاطئ: 70-130€/ليلة. درس سرف في تغازوت: 30-45€/ساعتان مع اللوح. ميني فان مشترك إلى وادي الجنة: 250 درهم (23€). زيت أركان 250 مل (تعاونية): 120 درهم (11€). غداء سمك في الميناء: 80-120 درهم (7-11€).',
    ),
    bestTimeToVisit: l('Year-round; best March to November', 'Toute l’année; idéal de mars à novembre', 'طوال السنة؛ والأفضل من مارس إلى نوفمبر'),
    durationDays: 2,
    faqs: lf(
      [
        { question: 'Is Agadir good for families?', answer: 'Yes. Agadir’s safe sandy beach, calm sea, and modern hotels make it Morocco’s most family-friendly resort destination.' },
        { question: 'Does Agadir have an old medina?', answer: 'No — the 1960 earthquake destroyed the original. A small reconstructed "Medina Polizzi" exists outside town as a tourist attraction.' },
        { question: 'How far is Agadir from Marrakech?', answer: 'About 2h30 by car on the A7 motorway, or 50 min by domestic flight (Royal Air Maroc, Air Arabia).' },
      ],
      [
        { question: 'Agadir convient-elle aux familles ?', answer: 'Oui. Plage sûre, mer calme et hôtels modernes : Agadir est la destination familiale par excellence au Maroc.' },
        { question: 'Agadir a-t-elle une médina ?', answer: 'Non — le séisme de 1960 a détruit l’ancienne. Une petite "Médina Polizzi" reconstruite existe hors-ville à titre touristique.' },
        { question: 'À quelle distance Agadir est-elle de Marrakech ?', answer: 'Environ 2h30 par l’A7, ou 50 min par vol intérieur (Royal Air Maroc, Air Arabia).' },
      ],
      [
        { question: 'هل أكادير مناسبة للعائلات؟', answer: 'نعم. شاطئها الرملي الآمن وبحرها الهادئ وفنادقها الحديثة تجعلها أنسب وجهة عائلية في المغرب.' },
        { question: 'هل لأكادير مدينة عتيقة؟', answer: 'لا — دمّر زلزال 1960 الأصلية. توجد «مدينة بوليتزي» صغيرة معاد بناؤها خارج المدينة كمعلم سياحي.' },
        { question: 'كم تبعد أكادير عن مراكش؟', answer: 'حوالي 2:30 ساعة على الطريق السيار A7، أو 50 دقيقة برحلة داخلية (الخطوط الملكية المغربية، Air Arabia).' },
      ],
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
    longDescription: l(
      'Aït Ben Haddou is the most photographed ksar in Morocco — a fortified red-mud village that climbs a hillside above the Asif Ounila riverbed. Settled in the 11th century on the salt and gold caravan route between Marrakech and Timbuktu, the village houses (mostly empty today) layer up the slope to a "agadir" granary at the top. UNESCO since 1987. The village is 30 km west of Ouarzazate and the standard lunch stop on every 3-day Marrakech-to-Sahara tour.',
      'Aït Ben Haddou est le ksar le plus photographié du Maroc — village rouge en pisé qui grimpe la colline au-dessus de l’oued Asif Ounila. Implanté au XIe siècle sur la route caravanière du sel et de l’or Marrakech-Tombouctou, les maisons (majoritairement vides aujourd’hui) s’étagent jusqu’à un agadir (grenier) au sommet. UNESCO depuis 1987. Le village est à 30 km de Ouarzazate, étape déjeuner classique de tout circuit 3 jours Marrakech-Sahara.',
      'آيت بن حدّو أكثر قصر مغربي تصويرًا — قرية حمراء من الطين تتسلق التل فوق وادي أسيف أونيلا. أُنشئت في القرن الحادي عشر على طريق القوافل للملح والذهب بين مراكش وتمبكتو. تعلو بيوتها (شبه مهجورة اليوم) حتى «أكَادير» (مخزن جماعي) في الأعلى. مدرجة لدى اليونسكو منذ 1987. تبعد القرية 30 كم عن ورزازات، وهي المحطة الكلاسيكية لكل رحلة 3 أيام مراكش-الصحراء.',
    ),
    heroImage: '',
    geo: { lat: 31.0470, lng: -7.1296 },
    highlights: ll(
      ['Climb to the ksar’s agadir at sunrise', 'Cross the Asif Ounila river', 'Combine with Ouarzazate film studios', 'Stop on the Marrakech → Sahara route'],
      ['Montée à l’agadir du ksar au lever du soleil', 'Traversée de l’oued Asif Ounila', 'Combiné avec les studios de Ouarzazate', 'Étape sur la route Marrakech → Sahara'],
      ['الصعود إلى أكادير القصر عند الشروق', 'عبور وادي أسيف أونيلا', 'الجمع مع استوديوهات ورزازات', 'محطة على طريق مراكش — الصحراء'],
    ),
    thingsToDo: ll(
      [
        'Stay in a guesthouse on the "new village" side and walk into the ksar at sunrise — golden, empty, magical.',
        'Climb to the top granary for 360° desert and palm-grove views.',
        'Cross the (often dry) Asif Ounila riverbed — sometimes sandbag stepping-stones, sometimes a donkey carries you for MAD 10.',
        'Tour the Atlas and CLA film studios in Ouarzazate, then return for sunset on the ksar — the standard half-day combo.',
        'Photograph the ksar from the "Game of Thrones viewpoint" on the new-village side at golden hour.',
        'Buy a small ksar-themed painting from one of the in-village artists — pigments are real saffron, indigo, henna.',
      ],
      [
        'Logez dans une maison d’hôtes côté "village neuf" et entrez dans le ksar au lever du soleil — doré, vide, magique.',
        'Montée jusqu’au grenier sommital pour vues 360° sur le désert et la palmeraie.',
        'Traversez l’Asif Ounila (souvent à sec) — parfois passerelles de sacs, parfois un âne vous porte pour 10 MAD.',
        'Visitez les studios Atlas et CLA à Ouarzazate, puis retour pour le coucher de soleil sur le ksar.',
        'Photographiez le ksar depuis le "point de vue Game of Thrones" côté village neuf au golden hour.',
        'Petite peinture du ksar par un artiste local — pigments en safran, indigo, henné.',
      ],
      [
        'أقم في دار ضيافة من جهة «القرية الجديدة» وادخل القصر عند الشروق — ذهبي وفارغ وساحر.',
        'الصعود إلى المخزن العلوي لإطلالة 360° على الصحراء والواحة.',
        'عبور وادي أسيف أونيلا (غالبًا جاف) — أحيانًا بأكياس رمل، وأحيانًا بحمار مقابل 10 درهم.',
        'زيارة استوديوهات أطلس وCLA في ورزازات، ثم العودة لغروب على القصر.',
        'تصوير القصر من «إطلالة صراع العروش» من جهة القرية الجديدة في الساعة الذهبية.',
        'اقتناء لوحة صغيرة للقصر من فنان داخل القرية — أصباغ من الزعفران والنيلة والحناء.',
      ],
    ),
    localTips: ll(
      [
        'Stay the night — almost every group tour stops at lunch only. Sunrise and sunset are the magic moments and you’ll have the ksar to yourself.',
        'Donations to families still living inside the ksar (about 8) are appreciated; small purchases support them.',
        'There is no entrance fee for the ksar itself, only for the kasbah houses you choose to enter (MAD 10–20 each).',
        'The climb to the top granary takes 20–30 min — bring water and grippy shoes.',
        'Heat in July-August is brutal (40 °C+). Visit October-April for comfortable conditions.',
      ],
      [
        'Dormez sur place — presque tous les groupes ne s’arrêtent que pour déjeuner. Lever et coucher de soleil sont magiques, ksar à vous.',
        'Dons aux familles habitant encore le ksar (env. 8) appréciés ; petits achats les soutiennent.',
        'Pas de droit d’entrée pour le ksar lui-même, seulement pour les maisons-kasbah visitées (10-20 MAD chacune).',
        'Montée 20-30 min jusqu’au grenier — eau et chaussures adhérentes.',
        'Chaleur en juil-août brutale (40 °C+). Visitez oct-avril.',
      ],
      [
        'بِت ليلة — أغلب الجولات الجماعية تتوقّف للغداء فقط. الشروق والغروب لحظتان ساحرتان والقصر لك وحدك.',
        'تبرعات للعائلات التي لا تزال تسكن داخل القصر (نحو 8) محبّذة، والمشتريات الصغيرة تدعمها.',
        'لا توجد رسوم دخول للقصر نفسه، فقط لبيوت القصبات التي تختار دخولها (10-20 درهم لكل بيت).',
        'الصعود إلى المخزن العلوي يستغرق 20-30 دقيقة — احمل ماءً وحذاءً مناسبًا.',
        'الحرارة في يوليو-أغسطس قاسية (40°+م). الأفضل أكتوبر-أبريل.',
      ],
    ),
    prices: l(
      'Guesthouse facing the ksar: €25–€55 / night with breakfast. Tagine lunch with a view: MAD 90–120 (€8–€11). Donkey across the river: MAD 10 (€1). Half-day combined with Ouarzazate studios: from €45 / person in a small-group tour.',
      'Maison d’hôtes face au ksar : 25-55 €/nuit avec petit-déjeuner. Tajine avec vue : 90-120 MAD (8-11 €). Âne pour traverser : 10 MAD (1 €). Demi-journée combinée studios Ouarzazate : à partir de 45 €/pers en petit groupe.',
      'دار ضيافة قبالة القصر: 25-55€/ليلة مع الإفطار. طاجين بإطلالة: 90-120 درهم (8-11€). حمار لعبور النهر: 10 درهم (1€). نصف يوم مع استوديوهات ورزازات: ابتداءً من 45€/شخص في جولة صغيرة.',
    ),
    bestTimeToVisit: l('October to April', 'D’octobre à avril', 'من أكتوبر إلى أبريل'),
    durationDays: 1,
    faqs: lf(
      [
        { question: 'Can I visit Aït Ben Haddou as a day trip?', answer: 'It is doable from Marrakech (4h each way) but most travelers stop on the way to Merzouga.' },
        { question: 'Is there an entrance fee?', answer: 'No fee for the ksar itself. A few interior kasbah houses charge MAD 10-20 individually.' },
        { question: 'What movies were filmed at Aït Ben Haddou?', answer: 'Lawrence of Arabia, Gladiator, Kingdom of Heaven, Babel, Prince of Persia, Game of Thrones (as Yunkai), and many more.' },
      ],
      [
        { question: 'Aït Ben Haddou se visite-t-il en excursion d’une journée ?', answer: 'C’est possible depuis Marrakech (4h aller) mais la plupart des voyageurs y font étape en allant à Merzouga.' },
        { question: 'Y a-t-il un droit d’entrée ?', answer: 'Pas pour le ksar lui-même. Quelques maisons-kasbah intérieures demandent 10-20 MAD chacune.' },
        { question: 'Quels films ont été tournés à Aït Ben Haddou ?', answer: 'Lawrence d’Arabie, Gladiator, Kingdom of Heaven, Babel, Prince of Persia, Game of Thrones (Yunkaï), et beaucoup d’autres.' },
      ],
      [
        { question: 'هل يمكن زيارة آيت بن حدو في رحلة يومية؟', answer: 'ممكن من مراكش (4 ساعات لكل اتجاه)، لكن معظم المسافرين يتوقفون فيها في طريقهم إلى مرزوكة.' },
        { question: 'هل هناك رسم دخول؟', answer: 'لا رسوم للقصر نفسه. بعض البيوت-القصبات الداخلية تفرض 10-20 درهم لكل بيت.' },
        { question: 'ما الأفلام التي صُوّرت في آيت بن حدو؟', answer: 'لورنس العرب، جلادييتر، مملكة السماء، بابل، أمير بلاد فارس، صراع العروش (يونكاي)، وكثير غيرها.' },
      ],
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
    longDescription: l(
      'Ouarzazate ("the silent door" in Berber) is the main town south of the High Atlas — clean, modern, with one of the world’s biggest concentrations of film studios after Hollywood and Bollywood. Many travelers sleep here on a 3-day Marrakech-to-Sahara trip after crossing the Tizi-n-Tichka pass. The town itself is small (1 night), but the surrounding country is grand: the Kasbah Taourirt, the Fint oasis, the Drâa Valley palmeries south to Zagora, and the Dadès and Todra gorges east toward Merzouga.',
      'Ouarzazate ("la porte du silence" en berbère) est la principale ville au sud du Haut Atlas — propre, moderne, l’une des plus grandes concentrations mondiales de studios après Hollywood et Bollywood. Beaucoup d’itinéraires 3 jours Marrakech-Sahara y dorment après le col du Tichka. La ville est petite (1 nuit), mais ses environs sont grandioses : Kasbah Taourirt, oasis de Fint, vallée du Drâa (palmeraies vers Zagora), gorges du Dadès et du Todra vers Merzouga.',
      'ورزازات («باب الصمت» بالأمازيغية) هي المدينة الرئيسة جنوب الأطلس الكبير — نظيفة وحديثة وتضم واحدة من أكبر تجمعات استوديوهات السينما عالميًا بعد هوليوود وبوليوود. كثير من برامج 3 أيام مراكش-الصحراء تبيت فيها بعد عبور تيشكا. المدينة صغيرة (ليلة واحدة) لكن محيطها رائع: قصبة تاوريرت، واحة فينت، وادي درعة (واحات نخيل حتى زاكورة)، ومضيقا دادس وتودرا نحو مرزوكة.',
    ),
    heroImage: '',
    geo: { lat: 30.9335, lng: -6.9370 },
    highlights: ll(
      ['Atlas & CLA Film Studios', 'Kasbah Taourirt', 'Drâa Valley palm groves', 'Noor solar power plant viewpoint'],
      ['Studios Atlas & CLA', 'Kasbah Taourirt', 'Palmeraies de la vallée du Drâa', 'Centrale solaire Noor'],
      ['استوديوهات أطلس و CLA', 'قصبة تاوريرت', 'واحات وادي درعة', 'محطة نور للطاقة الشمسية'],
    ),
    thingsToDo: ll(
      [
        'Tour the Atlas Film Studios — see Gladiator and Kingdom of Heaven sets, full Roman city props (MAD 80 / €7.50).',
        'Visit Kasbah Taourirt — once home to the Glaoui pasha, now a UNESCO-supported museum.',
        'Drive 30 min into the Fint oasis — a palm grove and Berber village often used as filming location.',
        'Day trip down the Drâa Valley to Agdz and the Tamnougalt kasbah — palmeries, river, mud villages.',
        'Photograph the Noor solar plant from the road — the largest concentrated solar facility in the world.',
        'Continue 2h east to the Dadès Gorges (Monkey Fingers rock formations) and the Todra Gorges for a hike.',
      ],
      [
        'Studios Atlas — décors Gladiator et Kingdom of Heaven, ville romaine grandeur nature (80 MAD / 7,50 €).',
        'Kasbah Taourirt — ancienne demeure du pacha Glaoui, musée soutenu par l’UNESCO.',
        '30 min jusqu’à l’oasis de Fint — palmeraie et village berbère souvent utilisés au cinéma.',
        'Journée vallée du Drâa jusqu’à Agdz et la kasbah Tamnougalt — palmeraies, fleuve, villages de pisé.',
        'Photographiez la centrale solaire Noor depuis la route — la plus grande au monde par concentration.',
        '2h à l’est, gorges du Dadès ("doigts de singe") et gorges du Todra pour une marche.',
      ],
      [
        'جولة في استوديوهات أطلس — مشاهد جلادييتر ومملكة السماء، مدينة رومانية بالكامل (80 درهم / 7.50€).',
        'زيارة قصبة تاوريرت — مقر باشا الكلاوي سابقًا، متحف بدعم من اليونسكو.',
        '30 دقيقة إلى واحة فينت — نخيل وقرية أمازيغية كثيرًا ما تستخدم للتصوير.',
        'يوم في وادي درعة حتى أكدز وقصبة تامنوكَالت — نخيل ووادي وقرى طينية.',
        'تصوير محطة نور الشمسية من الطريق — أكبر محطة شمسية تركيزية في العالم.',
        'ساعتان شرقًا إلى مضيق دادس («أصابع القرود») ومضيق تودرا للمشي.',
      ],
    ),
    localTips: ll(
      [
        'Most travelers spend 1 night here on a 3-day Sahara route — Ouarzazate-Dadès-Merzouga or the reverse.',
        'The Atlas studio tour takes 1h with a guide — book through your hotel, MAD 80 plus tip.',
        'Stop at Telouet (off the Tichka pass) for the Glaoui kasbah ruins — atmospheric and uncrowded.',
        'Bring a layer — at 1,100 m altitude, evenings are cool even in summer.',
        'Don’t expect a vibrant medina — Ouarzazate is functional, not picturesque. The kasbah Taourirt is the main "old town" sight.',
      ],
      [
        'La plupart des voyageurs y dorment 1 nuit sur un circuit 3 jours — Ouarzazate-Dadès-Merzouga ou inverse.',
        'Visite des studios Atlas 1h avec guide — 80 MAD plus pourboire.',
        'Arrêt à Telouet (hors col du Tichka) pour les ruines de la kasbah Glaoui — ambiance, peu de monde.',
        'Couche supplémentaire — à 1100 m d’altitude, soirées fraîches même en été.',
        'N’attendez pas une médina vibrante — Ouarzazate est fonctionnelle, pas pittoresque. La Kasbah Taourirt est le "vieux" principal.',
      ],
      [
        'أغلب المسافرين يبيتون ليلة على طريق 3 أيام للصحراء — ورزازات-دادس-مرزوكة أو العكس.',
        'جولة استوديوهات أطلس ساعة مع مرشد — 80 درهم زائد إكرامية.',
        'توقّف في تلوات (قرب ممر تيشكا) لأطلال قصبة الكلاوي — أجواء فريدة وبلا ازدحام.',
        'أحضر طبقة إضافية — على ارتفاع 1100م، الأمسيات باردة حتى صيفًا.',
        'لا تتوقع مدينة عتيقة نابضة — ورزازات وظيفية لا تصويرية. قصبة تاوريرت هي «العتيق» الرئيس.',
      ],
    ),
    prices: l(
      '3★ hotel: €30–€60 / night. Atlas Film Studios entry: MAD 80 (€7.50). Kasbah Taourirt: MAD 30 (€3). Drâa Valley private day trip: from €70 / car. Fint oasis half-day in 4x4: from €35 / person shared.',
      'Hôtel 3★ : 30-60 €/nuit. Studios Atlas : 80 MAD (7,50 €). Kasbah Taourirt : 30 MAD (3 €). Journée privée Drâa : à partir de 70 €/voiture. Demi-journée oasis Fint en 4x4 : 35 €/pers en partagé.',
      'فندق 3 نجوم: 30-60€/ليلة. استوديوهات أطلس: 80 درهم (7.50€). قصبة تاوريرت: 30 درهم (3€). يوم خاص بوادي درعة: ابتداءً من 70€/سيارة. نصف يوم في واحة فينت بدفع رباعي: 35€/شخص مشترك.',
    ),
    bestTimeToVisit: l('October to April', 'D’octobre à avril', 'من أكتوبر إلى أبريل'),
    durationDays: 1,
    faqs: lf(
      [
        { question: 'Is Ouarzazate worth a stop?', answer: 'Yes — most Sahara itineraries from Marrakech stop overnight in Ouarzazate or nearby Skoura.' },
        { question: 'How long is the drive Marrakech to Ouarzazate?', answer: 'About 4 hours over the Tizi-n-Tichka pass (2,260 m). Roads are paved and scenic; allow extra time for photo stops.' },
        { question: 'Can I visit the film studios on a tour?', answer: 'Yes — Atlas Film Studios offer guided tours daily (1h, MAD 80). CLA Studios is open by appointment.' },
      ],
      [
        { question: 'Ouarzazate vaut-elle l’étape ?', answer: 'Oui — la plupart des circuits vers le Sahara depuis Marrakech font étape à Ouarzazate ou à Skoura.' },
        { question: 'Combien de temps Marrakech → Ouarzazate ?', answer: 'Environ 4h par le col du Tichka (2 260 m). Routes goudronnées et panoramiques ; comptez du temps pour les photos.' },
        { question: 'Peut-on visiter les studios de cinéma ?', answer: 'Oui — Atlas Studios propose des visites guidées quotidiennes (1h, 80 MAD). CLA Studios sur rendez-vous.' },
      ],
      [
        { question: 'هل ورزازات تستحق التوقّف؟', answer: 'نعم — معظم رحلات الصحراء انطلاقًا من مراكش تتوقف ليلًا في ورزازات أو سكورة المجاورة.' },
        { question: 'كم تستغرق الرحلة من مراكش إلى ورزازات؟', answer: 'حوالي 4 ساعات عبر ممر تيشكا (2260م). الطرق معبّدة وخلابة، أضف وقتًا لمحطات التصوير.' },
        { question: 'هل يمكن زيارة استوديوهات السينما في جولة؟', answer: 'نعم — استوديوهات أطلس توفر جولات إرشادية يومية (ساعة، 80 درهم). CLA بموعد.' },
      ],
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
    longDescription: l(
      'At 1,740 m and 1h45 from Marrakech, Imlil is the gateway to the High Atlas and Mt Toubkal (4,167 m, the highest peak in North Africa). The valley is lined with walnut and apple orchards, terraced fields and small Berber villages built of pisé and stone. Day-trippers come for a 2-3h walk to Aroumd village and the Sidi Chamharouch shrine; serious hikers commit 2 days to the Toubkal summit; lighter travelers stay 1 night in a kasbah, drink mint tea on a terrace, and head back.',
      'À 1 740 m et 1h45 de Marrakech, Imlil est la porte du Haut Atlas et du Toubkal (4 167 m, plus haut sommet d’Afrique du Nord). La vallée est tapissée de noyers, pommiers, terrasses et petits villages berbères en pisé. Excursionnistes : 2-3h vers Aroumd et le sanctuaire de Sidi Chamharouch. Randonneurs : 2 jours pour le Toubkal. Voyageurs plus tranquilles : 1 nuit en kasbah, thé sur terrasse, retour.',
      'على ارتفاع 1740م وعلى بُعد 1:45 من مراكش، إمليل بوابة الأطلس الكبير وقمة توبقال (4167م، الأعلى في شمال أفريقيا). الوادي مكسوّ بأشجار الجوز والتفاح والمصاطب الزراعية والقرى الأمازيغية المبنية بالطين والحجر. الرحلات اليومية: 2-3 ساعات نحو قرية أرومد ومقام سيدي شمهروش. المتسلقون الجادون: يومان للقمة. السياح الهادئون: ليلة في قصبة وشاي على سطح وعودة.',
    ),
    heroImage: '',
    geo: { lat: 31.1369, lng: -7.9197 },
    highlights: ll(
      ['Toubkal summit trek (2 days)', 'Aroumd & Tamatert Berber villages', 'Ourika Valley waterfalls', 'Mule treks with local guides'],
      ['Ascension du Toubkal (2 jours)', 'Villages d’Aroumd et Tamatert', 'Cascades de l’Ourika', 'Randonnée à dos de mulet'],
      ['تسلق قمة توبقال (يومان)', 'قريتا أرومد وتمتارت', 'شلالات أوريكا', 'رحلات بالبغال مع مرشدين محليين'],
    ),
    thingsToDo: ll(
      [
        'Day-walk Imlil to Aroumd (1h) and on to the Sidi Chamharouch shrine (3h round-trip) — a beautiful, doable first taste.',
        'Climb Mt Toubkal — 2 days, summit at sunrise from the refuge at 3,200 m. Licensed guide compulsory.',
        'Stay at Kasbah du Toubkal (Discovery channel "world’s best places to stay") or Riad Atlas Toubkal for a luxury mountain night.',
        'Visit Ourika Valley (parallel valley, 30 min away) for stepped waterfalls and Saturday Berber market.',
        'Tea on the terrace of any Berber home — your guide will arrange it; expect bread, olive oil, honey.',
        'Saturday market day in Asni (10 km below Imlil) — livestock, vegetables, spices, mountain life.',
      ],
      [
        'Marche Imlil-Aroumd (1h) puis sanctuaire Sidi Chamharouch (3h A/R) — belle première sortie accessible.',
        'Ascension du Toubkal — 2 jours, sommet au lever du soleil depuis le refuge 3 200 m. Guide officiel obligatoire.',
        'Nuit luxe à la Kasbah du Toubkal (Discovery "meilleurs hôtels du monde") ou au Riad Atlas Toubkal.',
        'Vallée parallèle de l’Ourika (30 min) pour cascades et marché berbère du samedi.',
        'Thé sur terrasse berbère — votre guide organise ; pain, huile d’olive, miel.',
        'Marché du samedi à Asni (10 km sous Imlil) — bétail, légumes, épices, vie de montagne.',
      ],
      [
        'مشي يومي من إمليل إلى أرومد (ساعة) ثم إلى مقام سيدي شمهروش (3 ساعات ذهابًا وإيابًا) — مدخل جميل وممكن.',
        'تسلق قمة توبقال — يومان، القمة عند الشروق من الملجأ على 3200م. مرشد مرخّص إلزامي.',
        'إقامة فاخرة في Kasbah du Toubkal (مصنفة من Discovery كأفضل أماكن إقامة في العالم) أو Riad Atlas Toubkal.',
        'وادي أوريكا الموازي (30 دقيقة) لشلالات متدرّجة وسوق أمازيغي السبت.',
        'شاي على سطح بيت أمازيغي — يرتّبه المرشد؛ خبز وزيت زيتون وعسل.',
        'سوق السبت في أسني (10 كم تحت إمليل) — مواشي وخضار وتوابل وحياة الجبل.',
      ],
    ),
    localTips: ll(
      [
        'Toubkal summit: by law, a licensed mountain guide is required (€60–€80 / day for the group). Don’t go alone.',
        'Best season: April-October for hiking, June for wildflowers; January-March possible with crampons and an experienced guide.',
        'Even short walks from Imlil require boots — paths are rocky and uneven.',
        'Cash only above Imlil village.',
        'Mules are available for luggage transport to Aroumd or the refuge (MAD 150–250 / day).',
      ],
      [
        'Toubkal : guide montagne agréé obligatoire (60-80 €/jour pour le groupe). Ne partez pas seul.',
        'Saison : avril-oct pour la marche, juin pour les fleurs ; janv-mars possible avec crampons et guide expérimenté.',
        'Même les balades courtes depuis Imlil nécessitent des chaussures de marche — chemins caillouteux.',
        'Espèces uniquement au-dessus du village.',
        'Mules pour les bagages vers Aroumd ou le refuge (150-250 MAD/jour).',
      ],
      [
        'توبقال: مرشد جبلي مرخّص إلزامي قانونيًا (60-80€/يوم للمجموعة). لا تذهب وحدك.',
        'الموسم: أبريل-أكتوبر للمشي، يونيو للأزهار، يناير-مارس ممكن مع كرامبونات ومرشد ذي خبرة.',
        'حتى المشيات القصيرة من إمليل تتطلب حذاء ترك — الدروب صخرية غير مستوية.',
        'الكاش فقط فوق قرية إمليل.',
        'البغال لنقل الأمتعة إلى أرومد أو الملجأ (150-250 درهم/يوم).',
      ],
    ),
    prices: l(
      'Standard kasbah-style guesthouse in Imlil: €30–€60 / night. Luxury (Kasbah du Toubkal): €200+ / night. Licensed mountain guide: €60–€80 / day. Mule + handler: MAD 250 (€23) / day. 2-day Toubkal summit (private, all-inclusive): €280–€380 / person.',
      'Maison d’hôtes type kasbah à Imlil : 30-60 €/nuit. Luxe (Kasbah du Toubkal) : 200 €+ /nuit. Guide agréé : 60-80 €/jour. Mule + muletier : 250 MAD (23 €)/jour. 2 jours Toubkal privé tout compris : 280-380 €/pers.',
      'دار ضيافة على طراز قصبة في إمليل: 30-60€/ليلة. الفاخر (Kasbah du Toubkal): 200€+/ليلة. مرشد جبلي مرخّص: 60-80€/يوم. بغل مع مرافق: 250 درهم (23€)/يوم. صعود توبقال يومين خاص شامل: 280-380€/شخص.',
    ),
    bestTimeToVisit: l(
      'April to October (Toubkal summit best May–Oct)',
      'D’avril à octobre (Toubkal de mai à octobre)',
      'من أبريل إلى أكتوبر (توبقال من مايو إلى أكتوبر)',
    ),
    durationDays: 2,
    faqs: lf(
      [
        { question: 'Do I need a guide for Mt Toubkal?', answer: 'Yes — by Moroccan law, a licensed mountain guide is required for the Toubkal summit. We arrange them.' },
        { question: 'Can I do Imlil as a day trip from Marrakech?', answer: 'Yes — 1h45 each way and a 2-3h hike fit comfortably in a day. Staying overnight is more rewarding.' },
        { question: 'How fit do I need to be for the Toubkal summit?', answer: 'Moderate fitness — the trail is non-technical, but altitude (4,167 m) and 1,000 m elevation gain from the refuge make it demanding. Plan one acclimatisation day.' },
      ],
      [
        { question: 'Faut-il un guide pour le Toubkal ?', answer: 'Oui — la loi marocaine impose un guide de montagne agréé pour le sommet. Nous l’organisons.' },
        { question: 'Imlil se visite-t-il en excursion d’une journée ?', answer: 'Oui — 1h45 chaque, marche 2-3h. Une nuit sur place est plus enrichissante.' },
        { question: 'Quelle condition physique pour le Toubkal ?', answer: 'Bonne condition — sentier non technique mais altitude (4 167 m) et 1 000 m de dénivelé depuis le refuge le rendent exigeant.' },
      ],
      [
        { question: 'هل أحتاج إلى مرشد لقمة توبقال؟', answer: 'نعم — القانون المغربي يشترط مرشدًا جبليًا مرخّصًا للقمة. نحن نتولى توفيره.' },
        { question: 'هل يمكن زيارة إمليل في رحلة يومية من مراكش؟', answer: 'نعم — 1:45 لكل اتجاه ومشية 2-3 ساعات. المبيت ليلة أكثر فائدة.' },
        { question: 'ما اللياقة المطلوبة لقمة توبقال؟', answer: 'لياقة متوسطة — المسار غير تقني، لكن الارتفاع (4167م) والصعود 1000م من الملجأ يجعلها متطلبة.' },
      ],
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
    longDescription: l(
      'A 40-km peninsula 1,500 km south of Casablanca, Dakhla is where the Atlantic meets the Sahara. A 25-km lagoon protected from the open ocean delivers flat water and steady 18-30 knot wind almost year-round — making it one of the top 3 kite/wing destinations in the world. Beyond the lagoon: the White Dune that "moves" with the wind, the Imlili stromatolite pools (living 3.5-billion-year-old micro-organisms), nomad tea houses, oyster farms. Few tourists, raw nature, and one of the best fish/oyster scenes in Morocco.',
      'Péninsule de 40 km à 1 500 km au sud de Casablanca, Dakhla est où l’Atlantique rencontre le Sahara. Une lagune de 25 km protégée de l’océan offre eau plate et vent stable 18-30 nœuds presque toute l’année — top 3 mondial du kite/wing. Au-delà : la Dune Blanche "mobile", les stromatolites d’Imlili (micro-organismes vivants de 3,5 milliards d’années), tea-houses nomades, fermes d’huîtres. Peu de touristes, nature brute, parmi la meilleure scène poissons-fruits de mer du Maroc.',
      'شبه جزيرة بطول 40 كم على بعد 1500 كم جنوب الدار البيضاء، تلتقي فيها الأطلسي بالصحراء. بحيرة 25 كم محمية من المحيط توفر مياهًا مسطحة ورياحًا 18-30 عقدة شبه دائمة — من أفضل 3 وجهات كايت/وينغ في العالم. وراءها: الكثيب الأبيض «المتحرّك»، بِرَك ستروماتوليت إمليلي (كائنات حية عمرها 3.5 مليار سنة)، خيام بدوية للشاي، مزارع المحار. سياح قلائل وطبيعة خام وأحد أفضل مشاهد السمك والمحار في المغرب.',
    ),
    heroImage: '',
    geo: { lat: 23.6848, lng: -15.9580 },
    highlights: ll(
      ['Kitesurf & wing-foil on the lagoon', 'White Dune (Dune Blanche)', 'Imlili stromatolites', 'Atlantic seafood feasts'],
      ['Kitesurf & wingfoil dans la lagune', 'Dune Blanche', 'Stromatolites d’Imlili', 'Festins de fruits de mer atlantiques'],
      ['الكايت سيرف والوينغ فويل في البحيرة', 'الكثيب الأبيض', 'ستروماتوليت إمليلي', 'مأدبات المأكولات البحرية'],
    ),
    thingsToDo: ll(
      [
        'Take 5+ days of kitesurf or wing-foil lessons on the lagoon — IKO-certified schools at every camp (about €200 / 4h beginner package).',
        'Cross the lagoon at low tide to the White Dune for sunset — dune slides into the lagoon, classic photo.',
        'Visit Imlili pools — living stromatolites and the only such site in Morocco (geological pilgrimage).',
        'Eat at L’Araignée Gourmande or at the port — fresh oysters at €0.50 each, gigantic Atlantic prawn grills.',
        'Sandboard "the wave dune" at Foum Labouir 1h south.',
        'Whale & dolphin spotting trips Aug–Oct in the Dakhla Bay.',
        'Bird-watch at the Khenifiss lagoon (en route to Dakhla) — flamingos, ospreys.',
      ],
      [
        '5+ jours de cours de kite ou wingfoil sur la lagune — écoles IKO partout (env. 200 € le pack débutant 4h).',
        'Traversée à marée basse jusqu’à la Dune Blanche au coucher du soleil — photo classique.',
        'Stromatolites vivantes d’Imlili — pèlerinage géologique unique au Maroc.',
        'L’Araignée Gourmande ou port — huîtres fraîches 0,50 €/pièce, gigantesques crevettes atlantiques grillées.',
        'Sandboard à la "dune-vague" de Foum Labouir, 1h sud.',
        'Sorties baleines/dauphins août-octobre dans la baie.',
        'Lagune de Khenifiss (sur la route) — flamants, balbuzards.',
      ],
      [
        '5+ أيام دروس كايت أو وينغ فويل في البحيرة — مدارس IKO في كل المخيمات (نحو 200€ لباقة المبتدئ 4 ساعات).',
        'عبور البحيرة عند الجزر إلى الكثيب الأبيض عند الغروب — صورة كلاسيكية.',
        'زيارة بِرَك إمليلي — ستروماتوليت حية، الموقع الوحيد في المغرب (حج جيولوجي).',
        'الأكل في L’Araignée Gourmande أو الميناء — محار طازج بنصف يورو، قريدس أطلسي مشوي ضخم.',
        'تزلج على «الكثيب الموجة» في فم لبوير ساعة جنوبًا.',
        'رحلات الحيتان والدلافين أغسطس-أكتوبر في الخليج.',
        'مراقبة الطيور في بحيرة خنيفس (في الطريق) — نحام وعقاب نسري.',
      ],
    ),
    localTips: ll(
      [
        'Most travelers fly direct Casablanca-Dakhla (2h, daily) or Paris/Madrid (seasonal). Driving from Casablanca is 22 hours.',
        'The peninsula is wind-blasted — clothing protection (long sleeves, buff, sunglasses) essential.',
        'Stay at a kite camp — Dakhla Attitude, Ocean Vagabond, PK25 — all on the lagoon with their own school.',
        'There is no real town nightlife. Dinner-at-camp is the social scene.',
        'Bring layers — the city itself can be 18 °C in winter and 25 °C in summer, with cool nights.',
      ],
      [
        'Avion direct Casa-Dakhla (2h, quotidien) ou Paris/Madrid (saisonnier). En voiture depuis Casa, comptez 22h.',
        'La péninsule est balayée par le vent — manches longues, buff, lunettes indispensables.',
        'Logez en camp kite — Dakhla Attitude, Ocean Vagabond, PK25 — tous sur la lagune, école sur place.',
        'Aucune vie nocturne — c’est le dîner au camp qui fait le social.',
        'Couches : la ville fait 18 °C en hiver et 25 °C en été, nuits fraîches.',
      ],
      [
        'الطيران المباشر من الدار البيضاء إلى الداخلة (ساعتان يوميًا) أو من باريس/مدريد موسميًا. السيارة من الدار البيضاء 22 ساعة.',
        'شبه الجزيرة تعصف بها الرياح — أكمام طويلة وعمامة ونظارات شمسية ضرورية.',
        'أقم في مخيم كايت — Dakhla Attitude, Ocean Vagabond, PK25 — كلها على البحيرة مع مدرستها.',
        'لا توجد حياة ليلية حقيقية — العشاء في المخيم هو المشهد الاجتماعي.',
        'الطبقات: المدينة 18°م شتاءً و25°م صيفًا، والليالي باردة.',
      ],
    ),
    prices: l(
      'Kite camp (full board, shared bungalow): €70–€130 / night. Kite school 5-day package: €450–€650. Direct CMN–DKH return flight: €120–€220. Fresh oysters at the port: MAD 5 each (€0.50). Lagoon excursion to White Dune by 4x4: €30 / person shared.',
      'Camp kite (pension complète, bungalow partagé) : 70-130 €/nuit. Pack école kite 5 jours : 450-650 €. Vol direct CMN-DKH A/R : 120-220 €. Huîtres au port : 5 MAD pièce (0,50 €). Excursion 4x4 à la Dune Blanche : 30 €/pers en partagé.',
      'مخيم كايت (إقامة كاملة، بنغل مشترك): 70-130€/ليلة. باقة مدرسة كايت 5 أيام: 450-650€. رحلة طيران مباشرة CMN-DKH ذهابًا وإيابًا: 120-220€. محار طازج في الميناء: 5 درهم للحبة (0.50€). جولة بدفع رباعي إلى الكثيب الأبيض: 30€/شخص مشترك.',
    ),
    bestTimeToVisit: l('March to October', 'De mars à octobre', 'من مارس إلى أكتوبر'),
    durationDays: 4,
    faqs: lf(
      [
        { question: 'How do I get to Dakhla?', answer: 'Direct flights from Casablanca (2.5h) and seasonal flights from Paris and Madrid.' },
        { question: 'Is Dakhla worth it if I don’t kitesurf?', answer: 'Yes if you love wild nature, oysters, and emptiness — but it’s 80% built around kite. For "regular" beach holiday, Agadir or Essaouira are better.' },
        { question: 'Do I need a special permit for Dakhla?', answer: 'No — Moroccan visa or visa-exempt entry covers Dakhla. Some military checkpoints south of Laâyoune; carry passport.' },
      ],
      [
        { question: 'Comment se rendre à Dakhla ?', answer: 'Vols directs depuis Casablanca (2h30) et vols saisonniers depuis Paris et Madrid.' },
        { question: 'Dakhla vaut-elle le déplacement sans kite ?', answer: 'Oui si vous aimez la nature brute, les huîtres, le vide — mais 80% de l’offre tourne autour du kite. Pour une plage classique : Agadir, Essaouira.' },
        { question: 'Faut-il un permis spécial pour Dakhla ?', answer: 'Non — le visa marocain (ou exemption) couvre Dakhla. Quelques contrôles militaires au sud de Laâyoune ; passeport sur vous.' },
      ],
      [
        { question: 'كيف أصل إلى الداخلة؟', answer: 'رحلات مباشرة من الدار البيضاء (2.5 ساعة) ورحلات موسمية من باريس ومدريد.' },
        { question: 'هل تستحق الداخلة الزيارة بدون كايت سيرف؟', answer: 'نعم إذا أحببت الطبيعة الخام والمحار والخواء — لكن 80% من العرض حول الكايت. لعطلة شاطئية تقليدية: أكادير أو الصويرة أفضل.' },
        { question: 'هل أحتاج إلى تصريح خاص للداخلة؟', answer: 'لا — التأشيرة المغربية (أو الإعفاء) تشمل الداخلة. توجد بعض الحواجز العسكرية جنوب العيون؛ احمل جواز السفر.' },
      ],
    ),
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return DESTINATIONS.map((d) => d.slug);
}
