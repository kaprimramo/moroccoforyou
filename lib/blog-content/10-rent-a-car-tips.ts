import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'rent-a-car-morocco-tips-and-advice';
const SLUG_FR = 'guide-pour-louer-une-voiture-au-maroc-pour-la-premiere-fois';
const SLUG_AR = 'nasaeh-istajar-sayyara-fi-al-maghrib';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(37684069);

// NOTE: the FR slug above intentionally re-uses the legacy URL
// /blog/guide-pour-louer-une-voiture-au-maroc-pour-la-premiere-fois/
// which was created earlier and is already indexed by Google. We mark that
// post as the FR sibling of this keyword (alternates), and re-export EN/AR
// new content alongside.

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Rent a Car Morocco Tips and Advice — Honest 2026 Guide',
  metaDescription:
    'Rent a car Morocco tips and advice for 2026 — real prices, insurance traps, the best companies, what to drive where, and Morocco-specific road rules. Plan on WhatsApp.',
  title: 'Rent a Car Morocco: Tips and Advice for 2026 First-Timers',
  description:
    'Twenty practical rent-a-car-Morocco tips for 2026 — real prices, the insurance trap, which company to choose, what to drive on the Atlas vs the coast, and the documents you actually need.',
  keyword: 'rent a car morocco tips and advice',
  coverImage: COVER,
  coverAlt: 'Empty paved road through the Moroccan Atlas Mountains — rent a car Morocco tips and advice',
  publishedISO: '2026-05-22',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 12,
  intro:
    'The most important rent-a-car Morocco tip in 2026: book through a Morocco-based agency, not an international comparator, and refuse the "obligatory" extra insurance at the counter. Below are 20 practical tips covering what to drive, how to handle police checkpoints, what documents to bring, how to refuel, what the deposit hold actually means, and the single biggest mistake first-timers make (clue: it’s about insurance). All prices and rules are real for May 2026. If you only read one section, read the insurance one.',
  sections: [
    {
      heading: 'Real 2026 car rental prices in Morocco',
      paragraphs: [
        'Average prices in low season (Nov–Mar) and high season (Easter, summer, Christmas). Booking 2–4 weeks ahead saves 30–50% over walk-up rates.',
      ],
      table: {
        caption: 'Morocco car rental prices in 2026',
        headers: ['Category', 'Example', 'Low season (£/day)', 'High season (£/day)', 'Best for'],
        rows: [
          ['Economy', 'Dacia Sandero', '£18–25', '£30–45', 'Cities, coast, short trips'],
          ['Compact', 'Renault Clio, Peugeot 208', '£25–35', '£35–50', 'Couples, mixed cities'],
          ['Compact SUV', 'Dacia Duster, Hyundai Tucson', '£37–55', '£50–80', 'Atlas, Sahara, kasbah roads'],
          ['Premium auto', 'Mercedes A-class, BMW 1', '£65–90', '£90–130', 'Comfort on long motorway runs'],
          ['7-seater', 'Dacia Lodgy, VW Caddy', '£45–60', '£55–80', 'Families, group of 4+'],
        ],
      },
      callout: {
        label: 'Local insider tip',
        body: 'For trips that include the Tichka pass or the Sahara route, pay the extra £10–20/day for a Dacia Duster or Hyundai Tucson rather than an economy. The higher seat, better suspension and 4x2 capability transform the experience on the mountain switchbacks.',
      },
    },
    {
      heading: 'The insurance trap — the #1 thing to know',
      paragraphs: [
        'Almost every Morocco rental contract includes basic third-party insurance but with a high "excess" (deductible) of MAD 5,000–15,000 (£450–£1,400). The agency holds this amount on your credit card as a deposit. At the counter on pickup, you’ll be offered "Super CDW" or "Zero Excess" for £8–£15 per day — this reduces your liability to zero but is optional.',
        'Many travellers buy zero-excess from third-party providers (Allianz, AXA Travel, RentalCover) BEFORE arriving for £3–£6 per day, which is half the agency price. The agency may insist their insurance is "compulsory" — it is not, technically. You can refuse, accept the deposit hold, and use your third-party policy if there’s damage. Always insist on the agency declining your refusal in writing if they push it.',
      ],
    },
    {
      heading: 'Pick the right company — local vs international',
      paragraphs: [
        'International brands at airports: Hertz, Avis, Europcar, Sixt, Enterprise, Budget. Predictable, English-speaking, slightly more expensive, with consistent insurance terms.',
        'Local Moroccan agencies: Medloc, Sara Car, [MoroccoForYou Cars](/rent-a-car/casablanca-airport/), BSP Auto. Cheaper, often deliver to your airport or hotel free, and personal service. Quality varies; book through a referrer (your riad, a vetted travel agency) to avoid amateurs.',
      ],
    },
    {
      heading: 'Documents you actually need',
      paragraphs: [
        'You need three documents at the counter, every time:',
      ],
      list: [
        'Valid passport (original, not a copy).',
        'Driving licence held for at least 1 year. EU, UK, US, Canadian and most Gulf state licences are accepted directly. Arabic-script licences are required by law to be accompanied by an IDP.',
        'Credit card (Visa/Mastercard/Amex) in the driver’s name. Debit cards are rarely accepted for the deposit hold.',
        'Optional but recommended: International Driving Permit (IDP), printed booking confirmation.',
      ],
    },
    {
      heading: 'Driving in Morocco — rules and police checks',
      paragraphs: [
        'Drive on the right. Seatbelts mandatory front AND back. Phone use while driving is illegal and enforced. Speed limits: 60 km/h in towns, 100 km/h on national roads, 120 km/h on motorways. Fines (£15–£60) are paid on the spot to the gendarmes — keep small bills handy.',
        'Police checkpoints at city entrances and key intersections are routine. They want to see passport, driving licence and rental contract. The whole stop takes 30 seconds if you have everything ready in the glove box.',
      ],
    },
    {
      heading: 'Fuel, tolls and motorways',
      paragraphs: [
        'Petrol (essence) costs MAD 14–16 per litre (£1.10–£1.30); diesel (gasoil) MAD 13–15. Major chains (Afriquia, Shell, Total, Vivo) are reliable; small independent stations occasionally sell low-quality fuel. Keep receipts in case of a return-fuel-level dispute.',
        'Toll motorways (Autoroute du Maroc) link the main cities — pay in cash or by app at each toll plaza. Casa → Marrakech £7, Casa → Tangier £14, Casa → Fes £8. Keep small bills.',
      ],
    },
    {
      heading: 'What to drive where',
      paragraphs: [
        'Economy car: imperial cities (Marrakech, Fes, Casablanca, Rabat), Atlantic coast (Essaouira, Casablanca, Tangier), motorway road trips. No problem.',
        'Compact SUV (Duster, Tucson): the Tichka pass (Marrakech → Aït Ben Haddou), the Sahara route (Ouarzazate → Merzouga), the Dadès and Todra gorges, kasbah back-roads, the High Atlas trails to Imlil. Strongly recommended.',
        '4x4 with full off-road capability: only needed for deep desert exploration off paved roads. The classic tourist route to Merzouga is paved — your standard 2WD Duster is fine.',
      ],
    },
    {
      heading: 'Pickup process — what happens at the counter',
      paragraphs: [
        'Counter agent walks through the contract (1–2 pages). You sign, they hold your credit card for the deposit (you can sometimes get away with a "pre-auth" rather than a charge — ask). You walk the car together for damage: take photos of every panel, the wheels, the dashboard fuel level, and the spare tyre. Email the photos to yourself with a timestamp.',
        'Get the agent to mark even the tiniest scratches on the damage diagram before driving off. This single habit prevents 90% of return disputes.',
      ],
    },
    {
      heading: 'Return — what to watch for',
      paragraphs: [
        'Return with the same fuel level (or pay the agency’s top-up rate, which is 3–5× pump price). Photograph the car at return, in the same angles, before handing over the keys. Get a signed return acknowledgement noting "no damage" if applicable.',
        'Some agencies process credit-card holds slowly. The deposit can take 5–15 working days to release after return. This is normal but worth checking your card balance.',
      ],
    },
    {
      heading: '20 quick tips for first-time renters',
      paragraphs: ['Bonus list of the rapid-fire stuff that doesn’t fit anywhere else.'],
      list: [
        'Book 2–4 weeks ahead for best prices.',
        'Take photos of all damage, with timestamps, on pickup.',
        'Refuse "obligatory" insurance — it is optional.',
        'Never drive into the medina. Park outside.',
        'Avoid driving at night on rural roads (livestock, no streetlights).',
        'Keep MAD 100 cash in the glove box for tolls and small fines.',
        'Lock everything in the boot, not on the seats.',
        'Mules and sheep flocks have right of way in villages.',
        'In Marrakech and Fes, park at supervised car parks ("gardien") for MAD 20/night.',
        'GPS works fine on rural roads; struggles in medinas (no need — don’t drive in).',
        'Always refuel at major brands (Afriquia, Shell, Total, Vivo).',
        'Don’t cross the border — rental contracts forbid it.',
        'A 4x4 is overkill unless you’re going off-road in the desert.',
        'For families, pre-book a child seat (£3–5/day).',
        'Drive defensively — Moroccan drivers overtake liberally on national roads.',
        'Use motorway services (Aire de Berrechid) for clean toilets and meals.',
        'Carry a paper road map as a backup (offline Google Maps also works).',
        'Don’t trust "officials" stopping you without uniforms.',
        'Watch out for the "fixed-price airport taxi" scam at CMN — your booked rental is cheaper.',
        'If you decide mid-trip you’d rather have a driver, swap — most agencies can match you with one for the Sahara leg only.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is it safe to rent a car in Morocco?',
      answer:
        'Yes — Morocco is safe to road-trip, with well-paved roads and a friendly police presence. The main risks are aggressive overtaking on rural roads and mules/sheep at dusk. Avoid night driving outside cities.',
    },
    {
      question: 'How much is car rental in Morocco per day?',
      answer:
        'In 2026, economy cars start at £18–25/day in low season, £30–45 in high season. A compact SUV suitable for the Atlas is £37–65/day. All prices include unlimited mileage and basic insurance.',
    },
    {
      question: 'Do I need an International Driving Permit for Morocco?',
      answer:
        'Technically yes by Moroccan law, but in practice EU, UK, US, Canadian and most Gulf state licences are accepted without an IDP. Bring an IDP only if your licence is in a non-Latin alphabet.',
    },
    {
      question: 'Can I cross from Morocco into Spain with a rental?',
      answer:
        'No — Moroccan rental contracts forbid border crossing into Spain (ferry), Mauritania (south) or Algeria (closed). The car must be returned in Morocco.',
    },
    {
      question: 'Should I rent a 4x4 in Morocco?',
      answer:
        'Most travellers don’t need a true 4x4. A compact SUV (Dacia Duster, Hyundai Tucson) handles all the paved tourist routes including the Sahara. A genuine 4x4 is only needed for deep desert off-road exploration.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Where should I rent — Marrakech or Casablanca?', answer: 'Casablanca Airport (CMN) is cheaper and has more automatics. Marrakech Airport (RAK) is better if your trip stays in the south.' },
    { question: 'Can I rent without a credit card?', answer: 'Rarely. Almost all agencies require a credit card in the driver’s name to authorise the deposit (£450–£1,400).' },
    { question: 'Is petrol expensive in Morocco?', answer: 'Cheaper than Western Europe. Petrol is MAD 14–16/litre (£1.10–£1.30) in 2026.' },
  ],
  relatedDestinations: ['marrakech', 'sahara-merzouga', 'fes', 'chefchaouen', 'essaouira'],
  relatedPosts: ['rent-a-car-marrakech-airport', 'casablanca-airport-car-rental', 'morocco-road-trip-guide'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'نصائح استئجار سيارة في المغرب — دليل 2026',
  metaDescription:
    'نصائح استئجار سيارة في المغرب 2026: الأسعار الحقيقية، فخّ التأمين، أفضل الشركات، أي سيارة لأي طريق، والوثائق المطلوبة. خطّط رحلتك عبر واتساب.',
  title: 'نصائح استئجار سيارة في المغرب: دليل صريح للمسافر 2026',
  description:
    'دليل ميداني لاستئجار سيارة في المغرب 2026 — الأسعار الحقيقية، فخّ التأمين عند الاستلام، الشركات الموثوقة، نوع السيارة المناسب لكل طريق، والوثائق المطلوبة.',
  keyword: 'نصائح استئجار سيارة في المغرب',
  coverImage: COVER,
  coverAlt: 'طريق فارغ معبَّد في جبال الأطلس المغربية — نصائح استئجار سيارة في المغرب',
  publishedISO: '2026-05-22',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 12,
  intro:
    'أهم نصيحة لاستئجار سيارة في المغرب لعام 2026: احجز عبر وكالة محلية مغربية لا عبر مقارن دولي، وارفض التأمين «الإلزامي» الإضافي عند الاستلام. أدناه 20 نصيحة عملية تشمل أي سيارة تختار، كيف تتعامل مع نقاط التفتيش، الوثائق المطلوبة، التعبئة، معنى الضمان المحتجز فعلًا، وأكبر خطأ يرتكبه الزائر لأول مرة (تلميح: متعلق بالتأمين). كل الأسعار والقواعد سارية لشهر ماي 2026.',
  sections: [
    {
      heading: 'أسعار استئجار السيارات الحقيقية في المغرب 2026',
      paragraphs: [
        'متوسطات الأسعار في الموسم المنخفض (نوفمبر-مارس) والذروة (الفصح، الصيف، عيد الميلاد). الحجز قبل أسبوعين إلى أربعة يوفّر 30-50% مقارنة بالاستلام الفوري.',
      ],
      table: {
        caption: 'أسعار تأجير السيارات في المغرب 2026',
        headers: ['الفئة', 'مثال', 'موسم منخفض (ريال/يوم)', 'ذروة (ريال/يوم)', 'الأنسب لـ'],
        rows: [
          ['اقتصادية', 'Dacia Sandero', '85-120', '140-210', 'المدن والساحل ورحلات قصيرة'],
          ['كومباكت', 'Renault Clio، Peugeot 208', '120-165', '165-235', 'الأزواج، التنقل بين المدن'],
          ['كروس أوفر SUV', 'Dacia Duster، Hyundai Tucson', '170-260', '235-375', 'الأطلس والصحراء وطرق القصبات'],
          ['أوتوماتيك راقٍ', 'Mercedes A، BMW 1', '305-425', '425-610', 'الراحة في رحلات طريق سيار'],
          ['7 مقاعد', 'Dacia Lodgy، VW Caddy', '210-280', '260-375', 'العائلات ومجموعة 4+'],
        ],
      },
      callout: {
        label: 'نصيحة محلية',
        body: 'لرحلات تشمل ممر تيشكا أو طريق الصحراء، ادفع 40-90 ريالًا إضافية/يوم لـ Dacia Duster أو Hyundai Tucson بدل اقتصادية. الارتفاع الأعلى والتعليق الأفضل ودفع 4×2 تحوّل التجربة على المنعطفات الجبلية.',
      },
    },
    {
      heading: 'فخّ التأمين — الأهم على الإطلاق',
      paragraphs: [
        'تقريبًا كل عقد إيجار في المغرب يشمل تأمين الطرف الثالث الأساسي لكن بـ «حد ذاتي» مرتفع (5000-15000 درهم / 1700-5000 ريال). تحتجز الوكالة هذا المبلغ على بطاقتك الائتمانية كضمان. عند الاستلام، يُعرض عليك «Super CDW» أو «Zero Excess» مقابل 30-60 ريالًا/يوم — تخفض مسؤوليتك إلى الصفر لكنها اختيارية.',
        'كثير من المسافرين يشترون «صفر فرنشيز» من شركات خارجية (Allianz، AXA Travel) قبل السفر مقابل 10-22 ريالًا/يوم، نصف سعر الوكالة. قد تصرّ الوكالة على أن تأمينها «إلزامي» — قانونيًا ليس كذلك. يمكنك رفضه، قبول الضمان المحتجز، واستخدام بوليصتك الخارجية في حال الضرر. اطلب توثيق رفض الوكالة لرفضك خطيًا إن ضغطت.',
      ],
    },
    {
      heading: 'اختيار الشركة — محلية أم دولية',
      paragraphs: [
        'العلامات الدولية في المطارات: Hertz، Avis، Europcar، Sixt، Enterprise، Budget. متوقعة، تتحدث الإنجليزية، أغلى قليلًا، بشروط تأمين موحّدة.',
        'الوكالات المغربية المحلية: Medloc، Sara Car، [MoroccoForYou Cars](/rent-a-car/casablanca-airport/)، BSP Auto. أرخص، تسلّم عادةً في المطار أو الفندق مجانًا، وخدمة شخصية. الجودة تتفاوت؛ احجز عبر وسيط (الرياض، وكالة سفر موصى بها) لتجنّب الهواة.',
      ],
    },
    {
      heading: 'الوثائق المطلوبة فعلًا',
      paragraphs: [
        'ثلاث وثائق عند الاستلام دائمًا:',
      ],
      list: [
        'جواز سفر ساري (الأصل لا نسخة).',
        'رخصة قيادة سارية منذ سنة على الأقل. رخص الخليج وأوروبا وأمريكا الشمالية مقبولة. الرخص بالعربية فقط يشترط القانون أن يصاحبها IDP.',
        'بطاقة ائتمان Visa/Mastercard/Amex باسم السائق. بطاقات الخصم نادرًا ما تُقبَل للضمان.',
        'موصى به: رخصة دولية (IDP)، تأكيد الحجز مطبوعًا.',
      ],
    },
    {
      heading: 'القيادة في المغرب — قواعد ونقاط تفتيش',
      paragraphs: [
        'القيادة على اليمين. حزام الأمان إلزامي أمامًا وخلفًا. الهاتف ممنوع وملاحَق. السرعات: 60 كم/س في المدن، 100 على الوطنية، 120 على الطريق السيار. الغرامات (50-220 ريالًا) تُدفع فورًا للدركيين — احتفظ بفئات صغيرة.',
        'نقاط تفتيش الشرطة عند مداخل المدن والتقاطعات الرئيسة روتينية. يريدون: جواز، رخصة، عقد الإيجار. التوقف 30 ثانية إن كان كل شيء جاهزًا في علبة القفازات.',
      ],
    },
    {
      heading: 'الوقود والعبور والطريق السيار',
      paragraphs: [
        'البنزين بـ 14-16 درهمًا/لتر (4.5-5 ريال)، الديزل 13-15 درهمًا. الشبكات الكبرى (Afriquia، Shell، Total، Vivo) موثوقة؛ بعض المحطات المستقلة تبيع وقودًا مغشوشًا أحيانًا. احتفظ بالإيصالات تحسّبًا للنزاع حول مستوى الوقود عند الإرجاع.',
        'الطرق السيارة (Autoroute du Maroc) تربط المدن الكبرى — الدفع نقدًا أو عبر تطبيق في كل بوابة. الدار البيضاء-مراكش 78 درهم (25 ريالًا)، الدار البيضاء-طنجة 153 درهم (50)، الدار البيضاء-فاس 88 درهم (28). احتفظ بفئات صغيرة.',
      ],
    },
    {
      heading: 'أي سيارة لأي طريق',
      paragraphs: [
        'اقتصادية: المدن الإمبراطورية (مراكش، فاس، الدار البيضاء، الرباط)، الساحل الأطلسي (الصويرة، طنجة، الدار البيضاء)، رحلات الطريق السيار. لا مشكلة.',
        'SUV كومباكت (Duster، Tucson): ممر تيشكا (مراكش → آيت بن حدّو)، طريق الصحراء (ورزازات → مرزوكة)، مضائق دادس وتودرا، طرق القصبات، مسارات الأطلس إلى إمليل. موصى به بقوة.',
        '4x4 كامل التضاريس: لاستكشاف الصحراء العميقة خارج الطرق المعبدة فقط. المسار السياحي الكلاسيكي إلى مرزوكة معبَّد — Duster 2WD يكفي.',
      ],
    },
    {
      heading: 'عملية الاستلام — ماذا يحدث عند الشباك',
      paragraphs: [
        'يمر بك الموظف على العقد (صفحتان). توقّع، يحتجز بطاقتك الائتمانية للضمان (في بعض الحالات «pre-auth» بدل خصم فعلي — اطلب). تمرّون معًا على السيارة لِفحص الأضرار: صور لكل لوحة وللعجلات ومستوى الوقود وعجلة الاحتياط. أرسل الصور بالبريد لنفسك مع طابع زمني.',
        'اطلب من الموظف أن يدوّن حتى أصغر الخدوش على رسم الأضرار قبل الانطلاق. هذه العادة الواحدة تمنع 90% من نزاعات الإرجاع.',
      ],
    },
    {
      heading: 'الإرجاع — ما يجب مراقبته',
      paragraphs: [
        'أرجِع السيارة بنفس مستوى الوقود (أو ادفع سعر إعادة التعبئة عند الوكالة، 3-5 أضعاف سعر المضخة). صوّر السيارة عند الإرجاع، بنفس الزوايا، قبل تسليم المفاتيح. احصل على إقرار إرجاع موقّع يفيد بـ «لا ضرر» إن أمكن.',
        'بعض الوكالات تفك حجز البطاقة ببطء. الضمان قد يستغرق 5-15 يوم عمل لِيُحَرَّر بعد الإرجاع. هذا طبيعي لكن راقب رصيدك.',
      ],
    },
    {
      heading: '20 نصيحة سريعة لِأول مرة',
      paragraphs: ['قائمة سريعة لما لم يدخل في الأقسام السابقة.'],
      list: [
        'احجز قبل أسبوعين إلى أربعة لأفضل الأسعار.',
        'صوّر كل الأضرار مع طابع زمني عند الاستلام.',
        'ارفض التأمين «الإلزامي» — هو اختياري.',
        'لا تدخل بالسيارة المدينة العتيقة. اركن خارجها.',
        'تجنّب القيادة ليلًا على الطرق الريفية (مواشٍ، لا إنارة).',
        'احتفظ بـ 100 درهم في علبة القفازات للعبور والغرامات الصغيرة.',
        'أغلق كل شيء في الصندوق لا على المقاعد.',
        'البغال والقطعان لها الأولوية في القرى.',
        'في مراكش وفاس، اركن في مواقف بحارس (gardien) مقابل 20 درهمًا/ليلة.',
        'GPS يعمل جيدًا في الريف؛ يضعف في المدن العتيقة (لا تدخل أصلًا).',
        'املأ دائمًا في العلامات الكبرى (Afriquia، Shell، Total، Vivo).',
        'لا تعبر الحدود — العقود تمنع ذلك صراحة.',
        '4x4 مبالغة إلا للذهاب خارج الطرق في الصحراء.',
        'للعائلات، احجز كرسي طفل مسبقًا (10-20 ريالًا/يوم).',
        'قِد دفاعيًا — السائقون المغاربة يتجاوزون بحرية في الطرق الوطنية.',
        'استخدم استراحات الطريق السيار (Aire de Berrechid) للحمامات النظيفة والوجبات.',
        'احمل خريطة ورقية كاحتياط (Google Maps أوفلاين يعمل أيضًا).',
        'لا تثق بـ«مسؤولين» يوقفونك بلا أزياء رسمية.',
        'احذر «التاكسي بسعر ثابت» في مطار CMN — إيجارك المحجوز أرخص.',
        'إن قرّرت في منتصف الرحلة أنك تفضّل سائقًا، استبدل — معظم الوكالات توفّر سائقًا لمرحلة الصحراء فقط.',
      ],
    },
  ],
  faqs: [
    {
      question: 'هل آمن استئجار سيارة في المغرب؟',
      answer:
        'نعم — المغرب آمن لرحلات الطريق، طرق معبّدة جيدًا وحضور أمني ودود. أبرز المخاطر هي التجاوز الجريء في الطرق الوطنية والمواشي عند الغسق. تجنّب القيادة ليلًا خارج المدن.',
    },
    {
      question: 'كم تكلفة إيجار سيارة في المغرب يوميًا؟',
      answer:
        'في 2026، اقتصادية ابتداءً من 85-120 ريالًا/يوم في الموسم المنخفض، 140-210 في الذروة. SUV كومباكت مناسبة للأطلس 170-310 ريالًا/يوم. كل الأسعار تشمل كيلومترات غير محدودة وتأمينًا أساسيًا.',
    },
    {
      question: 'هل أحتاج رخصة دولية للقيادة في المغرب؟',
      answer:
        'قانونيًا نعم، لكن عمليًا رخص الخليج وأوروبا وأمريكا الشمالية مقبولة دون IDP. أحضر IDP إذا كانت رخصتك بالعربية فقط أو بأبجدية غير لاتينية.',
    },
    {
      question: 'هل يمكن العبور من المغرب إلى إسبانيا بسيارة الإيجار؟',
      answer:
        'لا — العقود تمنع عبور الحدود إلى إسبانيا (العبّارة)، موريتانيا (جنوبًا) أو الجزائر (مغلقة). يجب إرجاع السيارة في المغرب.',
    },
    {
      question: 'هل أستأجر 4x4 في المغرب؟',
      answer:
        'معظم الزوار لا يحتاجون 4x4 حقيقيًا. SUV كومباكت (Dacia Duster، Hyundai Tucson) يكفي لكل المسارات السياحية المعبّدة بما فيها الصحراء. 4x4 فعلي مطلوب فقط لاستكشاف الصحراء العميقة خارج الطرق.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'أستأجر من مراكش أم الدار البيضاء؟', answer: 'مطار الدار البيضاء (CMN) أرخص وفيه أوتوماتيك أكثر. مراكش (RAK) أفضل إن بقيت رحلتك في الجنوب.' },
    { question: 'هل أستطيع الاستئجار بدون بطاقة ائتمان؟', answer: 'نادرًا. معظم الوكالات تتطلب بطاقة ائتمان باسم السائق لاحتجاز الضمان (1700-5000 ريال).' },
    { question: 'هل البنزين غالٍ في المغرب؟', answer: 'أرخص من أوروبا الغربية. البنزين 14-16 درهمًا/لتر (4.5-5 ريال) في 2026.' },
  ],
  relatedDestinations: ['marrakech', 'sahara-merzouga', 'fes', 'chefchaouen', 'essaouira'],
  relatedPosts: ['nasaeh-li-ziyarat-al-maghrib-li-awwal-marra', 'kayfa-tantaqil-min-marrakesh-ila-shafshawan'],
  alternates: ALTERNATES,
};

// Wire up the legacy French rent-a-car post (already in BLOG_POSTS) as the
// FR sibling for this keyword so hreflang triangulates between all three URLs.
const legacyFr = BLOG_POSTS.find((p) => p.slug === SLUG_FR && p.lang === 'fr');
if (legacyFr) {
  legacyFr.alternates = ALTERNATES;
}

BLOG_POSTS.push(EN, AR);
