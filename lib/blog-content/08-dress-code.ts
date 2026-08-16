import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'morocco-dress-code-what-to-wear';
const SLUG_FR = 'maroc-comment-s-habiller-code-vestimentaire';
const SLUG_AR = 'libas-al-maghrib-madha-tartadi';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(5472532);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Morocco Dress Code 2026: What to Wear (Real Advice, Not Stereotypes)',
  title: 'Morocco Dress Code 2026: What to Wear (Real Advice, Not Stereotypes)',
  metaDescription: 'What to actually wear in Morocco 2026: honest, practical dress code advice for men and women, city by city, from locals who live here — not generic travel-blog guessing.',
  description:
    'The Morocco dress code in 2026, decoded — what to wear in the medinas, mosques, beaches, mountains and desert, for men and women. Packing list and seasonal notes.',
  keyword: 'morocco dress code what to wear',
  coverImage: COVER,
  coverAlt: 'Fes medina alley with traditional doors — Morocco dress code what to wear',
  publishedISO: '2026-05-20',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro:
    'The Morocco dress code in 2026 is relaxed but real: cover shoulders and knees in medinas and rural areas, anything goes at resort pools and beach clubs, and mosque visits require closed-toe shoes and modest dress (and you can only enter Hassan II in Casablanca anyway). Below is what to actually wear in [Marrakech](/destinations/marrakech/), Fes, Chefchaouen, the Sahara and the coast — by season, by gender, with a real packing list. The takeaway: think "summer in Italy plus a long-sleeve linen shirt" and you’re 90% there.',
  sections: [
    {
      heading: 'The big picture: how Moroccans actually dress in 2026',
      paragraphs: [
        'Moroccans wear a wide range of styles. In Casablanca and Rabat you’ll see jeans, dresses, blazers, hijabs and djellabas mixed in the same café. Marrakech medina is more traditional but still very mixed. Fes is the most conservative imperial city — women here mostly cover hair, men wear long trousers regardless of heat.',
        'Tourists are not expected to dress like locals. You ARE expected to cover shoulders and knees in medinas, rural villages and conservative neighbourhoods. The penalty for not doing it is mild — a few extra "bonjour gazelle" calls — not anything dangerous. But locals visibly relax when foreign visitors signal respect through dress.',
      ],
      callout: {
        label: 'Local insider tip',
        body: 'Buy a long linen shirt or kaftan on your first morning in the medina (MAD 150-300 / £12-25). It dresses any outfit up for restaurants, covers shoulders for medina walks, and works as a hammam wrap. The single most useful Morocco purchase you’ll make.',
      },
    },
    {
      heading: 'What to wear in Morocco — by setting',
      paragraphs: [
        'Different parts of the country call for different choices. Below is the practical breakdown.',
      ],
      table: {
        caption: 'Morocco dress code — what to wear in each setting',
        headers: ['Setting', 'Women', 'Men'],
        rows: [
          ['Imperial medina (Marrakech, Fes)', 'Loose trousers + long-sleeve top OR midi-dress + cardigan', 'Long trousers + t-shirt or shirt'],
          ['Modern city (Casablanca, Rabat)', 'Anything except very short or very revealing', 'Jeans + shirt; shorts only at the beach'],
          ['Blue town (Chefchaouen)', 'Loose trousers or midi-skirt + light top', 'Long trousers + t-shirt; shorts not common'],
          ['Sahara dunes / Atlas', 'Long-sleeve + trousers (sun + cold nights) + scarf', 'Long-sleeve + trousers + scarf for sand'],
          ['Hotel pool / beach club', 'Bikini or one-piece swimsuit', 'Swim shorts'],
          ['Hassan II Mosque tour', 'Long sleeves + long trousers/skirt + scarf', 'Long trousers + closed shoes; shoulders covered'],
          ['Rooftop dinner', 'Smart-casual; sundress + cardigan OK', 'Trousers + collared shirt'],
        ],
      },
    },
    {
      heading: 'What to wear in Marrakech',
      paragraphs: [
        'Marrakech is the most international Moroccan city. Riad rooftops and stylish restaurants invite a dressed-up look in the evening. During the day in the medina, loose linen trousers, a long-sleeve cotton shirt and trainers or sandals are the perfect outfit — comfortable, hot-weather friendly, and respectful.',
        'Avoid: spaghetti-strap tops, very short shorts, low-cut tops, and translucent fabrics in the medina. Hotel pool, beach club and rooftop bars: anything goes.',
      ],
    },
    {
      heading: 'What to wear in Fes',
      paragraphs: [
        'Fes is more conservative than Marrakech. Cover shoulders and knees in the medina; a scarf around the neck is useful both for sun and as instant cover if you pass an active mosque. Closed shoes are essential — the alleys are uneven and shared with mules. Women: midi-length skirts work well with leggings or tights underneath in cooler months.',
      ],
    },
    {
      heading: 'What to wear in Chefchaouen',
      paragraphs: [
        'Chefchaouen is conservative because it’s rural Rif Mountains, but the town is very tourist-friendly and visitors get a lot of latitude. Loose trousers, longer skirts, light long-sleeves, walking shoes with grip (the alleys are steep and slippery when wet). The blue alleys are paint-fresh — avoid leaning against walls in a dark outfit unless you want a Chefchaouen-blue souvenir.',
      ],
    },
    {
      heading: 'What to wear in the Sahara desert',
      paragraphs: [
        'The desert is the one place where what you wear matters more for comfort than for respect. Daytime in summer: 35-45°C; nighttime: 5-15°C. Pack a fleece + light down jacket even in summer for the camp at night. Bring a cheche (turban scarf) or buy one at your camp — your guide will tie it for the camel ride. Long sleeves protect from the sun; sand finds its way into everything so darker colours hide it better.',
      ],
    },
    {
      heading: 'What men should pack for Morocco',
      paragraphs: [
        'Men have it easy in Morocco — long trousers and a t-shirt or shirt work almost everywhere. Specific to-pack list: 2 lightweight chinos, 4 t-shirts, 2 long-sleeve cotton shirts, swim shorts, trainers + sandals, a light fleece for evenings/desert, sunglasses, a hat.',
        'Skip: short shorts for the medina (saved for the pool only), and any T-shirts with slogans that could be misread. Football jerseys are fine and locals love football conversations.',
      ],
    },
    {
      heading: 'What women should pack for Morocco',
      paragraphs: [
        'A versatile capsule: 2 pairs loose linen trousers, 1 midi-dress, 3 long-sleeve cotton tops, 1 light cardigan or kimono, leggings (cool months), 1 scarf (works as cover, sun protection, dust shield), bikini/one-piece for pool, walking shoes + sandals, sunglasses, hat.',
        'For dinner: a midi dress + cardigan or a kaftan-style tunic works in 90% of Moroccan restaurants and roofs.',
      ],
    },
    {
      heading: 'Seasonal extras — what to add by month',
      paragraphs: [
        'November–March: thermal layer for early mornings, light down jacket, waterproof shoes for Marrakech and Fes rain showers. April–June: same as core, plus extra sun protection. July–August: lightest, loosest fabrics (linen, gauze cotton), wide-brim hat. September–October: ideal — pack as for April-June.',
      ],
    },
  ],
  faqs: [
    {
      question: 'What should women wear in Morocco?',
      answer:
        'Loose trousers, long-sleeve cotton tops, midi dresses or skirts, plus a light scarf. Cover shoulders and knees in medinas and rural areas. Bikinis and shorts are fine at hotel pools, beach clubs and tourist beaches.',
    },
    {
      question: 'Do women have to cover their hair in Morocco?',
      answer:
        'No — hair coverings are not required for non-Muslim visitors. A scarf in your bag is useful for shade and as instant cover near mosques, but it is not expected.',
    },
    {
      question: 'Can I wear shorts in Morocco?',
      answer:
        'Knee-length shorts are fine for men in modern cities like Casablanca, Rabat and Agadir, and around hotels and pools everywhere. Avoid shorts in the imperial medinas (Marrakech, Fes) and rural villages.',
    },
    {
      question: 'What is the dress code for Hassan II Mosque in Casablanca?',
      answer:
        'Long trousers or a long skirt, long sleeves, closed shoes, and shoulders covered for both men and women. A headscarf for women is recommended though not strictly enforced for tourists. Hassan II is the only mosque in Morocco open to non-Muslim visitors.',
    },
    {
      question: 'What should I wear in the Sahara desert?',
      answer:
        'Long sleeves and trousers (sun + cold nights), a fleece + light down jacket for camp evenings (5-15°C), a head scarf or buy a cheche at camp, closed walking shoes, and sunglasses. Layers — temperatures swing 30°C in 12 hours.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Can I wear leggings in Morocco?', answer: 'Yes, under a long top or midi-skirt. Leggings alone are uncommon in medinas; pair with a tunic that covers the hips.' },
    { question: 'Are sandals OK in the medina?', answer: 'Yes but closed sandals or trainers are safer — the alleys are uneven and occasionally damp.' },
    { question: 'Do I need to buy traditional Moroccan clothes?', answer: 'No, but a kaftan or djellaba is the single best Marrakech souvenir and works beautifully for restaurant dinners.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga'],
  relatedPosts: ['morocco-travel-tips-first-time-visitors', 'is-morocco-safe-for-solo-female-travelers', 'morocco-7-days-itinerary'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Maroc : comment s’habiller en 2026 — Guide vestimentaire',
  metaDescription:
    'Code vestimentaire au Maroc en 2026 : médinas, mosquées, plages, dîner. Liste d’affaires hommes et femmes par saison. Demandez sur WhatsApp.',
  title: 'Maroc : comment s’habiller en 2026 — Code vestimentaire honnête',
  description:
    'Le code vestimentaire au Maroc en 2026, décodé — quoi porter en médina, à la mosquée, à la plage, en montagne et au désert, pour hommes et femmes, avec liste d’affaires par saison.',
  keyword: 'maroc comment s’habiller code vestimentaire',
  coverImage: COVER,
  coverAlt: 'Ruelle de la médina de Fès avec portes traditionnelles — Maroc comment s’habiller code vestimentaire',
  publishedISO: '2026-05-20',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro:
    'Le code vestimentaire au Maroc en 2026 est détendu mais réel : épaules et genoux couverts dans les médinas et les zones rurales, tout est permis aux piscines d’hôtel et beach clubs, et la visite des mosquées exige chaussures fermées et tenue modeste (et seul Hassan II à Casablanca est ouvert aux non-musulmans de toute façon). Voici ci-dessous ce qu’il faut vraiment porter à [Marrakech](/destinations/marrakech/), Fès, Chefchaouen, au Sahara et sur la côte — par saison, par genre, avec une vraie liste d’affaires. À retenir : pensez "été en Italie + une chemise de lin manches longues" et vous y êtes.',
  sections: [
    {
      heading: 'Vue d’ensemble : comment s’habillent vraiment les Marocains en 2026',
      paragraphs: [
        'Les Marocains portent un large éventail de styles. À Casablanca ou Rabat, vous verrez jeans, robes, blazers, hijabs et djellabas dans le même café. La médina de Marrakech est plus traditionnelle mais reste très mélangée. Fès est la ville impériale la plus conservatrice — les femmes y couvrent largement les cheveux, les hommes portent un pantalon long quelle que soit la chaleur.',
        'On n’attend pas des touristes qu’ils s’habillent comme des locaux. On attend que vous couvriez épaules et genoux en médina, dans les villages et les quartiers conservateurs. La sanction d’une tenue inadaptée est légère — quelques "bonjour gazelle" en plus — pas dangereuse. Mais les locaux se détendent visiblement quand les visiteurs signalent le respect par la tenue.',
      ],
      callout: {
        label: 'Astuce locale',
        body: 'Achetez une chemise longue en lin ou un caftan le premier matin dans la médina (150-300 MAD / 13-27 €). Cela habille toute tenue pour les restaurants, couvre les épaules en médina, et fait peignoir de hammam. L’achat le plus utile de votre voyage.',
      },
    },
    {
      heading: 'Quoi porter au Maroc — par contexte',
      paragraphs: [
        'Les différentes régions appellent à des choix différents. Voici la décomposition pratique.',
      ],
      table: {
        caption: 'Code vestimentaire au Maroc — par contexte',
        headers: ['Contexte', 'Femmes', 'Hommes'],
        rows: [
          ['Médina impériale (Marrakech, Fès)', 'Pantalon ample + haut manches longues OU robe midi + cardigan', 'Pantalon long + t-shirt ou chemise'],
          ['Ville moderne (Casa, Rabat)', 'Tout sauf très court ou très ouvert', 'Jeans + chemise ; short uniquement à la plage'],
          ['Ville bleue (Chefchaouen)', 'Pantalon ample ou jupe midi + haut léger', 'Pantalon long + t-shirt ; short rare'],
          ['Sahara / Atlas', 'Manches longues + pantalon (soleil + nuit froide) + écharpe', 'Manches longues + pantalon + chèche pour le sable'],
          ['Piscine d’hôtel / club de plage', 'Bikini ou une pièce', 'Maillot de bain'],
          ['Mosquée Hassan II', 'Manches longues + pantalon/jupe longue + écharpe', 'Pantalon long + chaussures fermées ; épaules couvertes'],
          ['Dîner sur les toits', 'Smart-casual ; robe + cardigan OK', 'Pantalon + chemise à col'],
        ],
      },
    },
    {
      heading: 'Que porter à Marrakech',
      paragraphs: [
        'Marrakech est la plus internationale des villes marocaines. Les rooftops de riad et restaurants chics appellent une tenue plus habillée le soir. En journée dans la médina, pantalon de lin large, chemise coton manches longues et baskets ou sandales sont la tenue parfaite — confortable, adapté à la chaleur, et respectueuse.',
        'Évitez : débardeurs à fines bretelles, shorts très courts, décolletés profonds, et tissus transparents en médina. Piscine, beach club et bar sur toit : tout est permis.',
      ],
    },
    {
      heading: 'Que porter à Fès',
      paragraphs: [
        'Fès est plus conservatrice que Marrakech. Couvrez épaules et genoux en médina ; une écharpe autour du cou est utile pour le soleil et comme couverture instantanée près d’une mosquée. Chaussures fermées indispensables — les ruelles sont irrégulières et partagées avec les mules. Pour les femmes, les jupes midi fonctionnent bien avec un legging dessous aux mois frais.',
      ],
    },
    {
      heading: 'Que porter à Chefchaouen',
      paragraphs: [
        'Chefchaouen est conservatrice parce qu’elle est en milieu rural du Rif, mais la ville est très accueillante pour les visiteurs et la latitude est grande. Pantalon ample, jupe plus longue, manches longues légères, chaussures de marche adhérentes (les ruelles sont pentues et glissantes mouillées). Le bleu des murs est frais — évitez de vous appuyer aux murs dans un vêtement sombre sauf si vous voulez un souvenir bleu Chefchaouen.',
      ],
    },
    {
      heading: 'Que porter au Sahara',
      paragraphs: [
        'Le désert est le seul endroit où la tenue compte plus pour le confort que pour le respect. Journée d’été : 35-45 °C ; nuit : 5-15 °C. Polaire + petite doudoune obligatoires même en été. Achetez un chèche (turban) au camp — votre guide le noue pour la méharée. Manches longues pour le soleil ; le sable s’invite partout, les couleurs sombres le cachent mieux.',
      ],
    },
    {
      heading: 'Que mettre dans la valise — hommes',
      paragraphs: [
        'Les hommes ont la vie facile au Maroc — pantalon long + t-shirt ou chemise marchent presque partout. Liste précise : 2 chinos légers, 4 t-shirts, 2 chemises coton manches longues, maillot, baskets + sandales, polaire fine pour les soirées et le désert, lunettes de soleil, chapeau.',
        'À éviter : shorts courts en médina (piscine uniquement), et t-shirts à slogans pouvant être mal interprétés. Les maillots de foot passent bien et lancent des conversations.',
      ],
    },
    {
      heading: 'Que mettre dans la valise — femmes',
      paragraphs: [
        'Capsule polyvalente : 2 pantalons lin amples, 1 robe midi, 3 hauts coton manches longues, 1 cardigan ou kimono léger, leggings (mois frais), 1 écharpe (couverture, soleil, poussière), bikini/une pièce, chaussures de marche + sandales, lunettes de soleil, chapeau.',
        'Pour le dîner : une robe midi + cardigan ou une tunique caftan fonctionne dans 90 % des restaurants et toits marocains.',
      ],
    },
    {
      heading: 'Suppléments saisonniers',
      paragraphs: [
        'Novembre-mars : sous-couche thermique pour les premières heures, petite doudoune, chaussures imperméables (Marrakech et Fès peuvent recevoir des averses). Avril-juin : base + protection solaire renforcée. Juillet-août : tissus les plus légers (lin, coton léger), chapeau large. Septembre-octobre : idéal — base d’avril-juin.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Comment s’habillent les femmes au Maroc ?',
      answer:
        'Pantalon ample, hauts en coton manches longues, robes ou jupes midi, plus une écharpe légère. Épaules et genoux couverts en médina et en zone rurale. Bikinis et shorts OK aux piscines, beach clubs et plages touristiques.',
    },
    {
      question: 'Faut-il se couvrir les cheveux au Maroc ?',
      answer:
        'Non — pas obligatoire pour les visiteuses non musulmanes. Une écharpe dans le sac est utile contre le soleil et comme couverture instantanée près d’une mosquée, mais pas attendue.',
    },
    {
      question: 'Peut-on porter un short au Maroc ?',
      answer:
        'Les bermudas (genoux) sont ok pour les hommes dans les villes modernes (Casa, Rabat, Agadir) et autour des piscines partout. Évitez en médina impériale (Marrakech, Fès) et dans les villages.',
    },
    {
      question: 'Tenue pour la mosquée Hassan II ?',
      answer:
        'Pantalon long ou jupe longue, manches longues, chaussures fermées, épaules couvertes pour hommes et femmes. Foulard recommandé pour les femmes même s’il n’est pas strictement imposé aux touristes.',
    },
    {
      question: 'Quoi porter au Sahara ?',
      answer:
        'Manches longues et pantalon (soleil + nuits froides), polaire + petite doudoune pour les soirées (5-15 °C), chèche, chaussures de marche fermées, lunettes. Couches obligatoires — l’écart jour/nuit fait 30 °C.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Peut-on mettre un legging seul au Maroc ?', answer: 'Mieux vaut sous une tunique ou jupe midi. Le legging seul est rare en médina ; associez à un haut qui couvre les hanches.' },
    { question: 'Les sandales sont-elles OK en médina ?', answer: 'Oui mais des sandales fermées ou baskets sont plus sûres — sols irréguliers et parfois humides.' },
    { question: 'Faut-il acheter des vêtements marocains ?', answer: 'Pas obligatoire, mais un caftan ou une djellaba est le meilleur souvenir et fonctionne très bien pour les dîners en restaurant.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga'],
  relatedPosts: ['conseils-premier-voyage-au-maroc', 'maroc-femme-seule-securite'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'لباس المغرب: ماذا ترتدي في 2026؟ دليل عملي',
  metaDescription:
    'دليل اللباس في المغرب 2026: المدينة العتيقة، المساجد، الشاطئ، الصحراء، الجبل. قائمة سفر للرجال والنساء حسب الفصول. خطّط رحلتك عبر واتساب.',
  title: 'لباس المغرب: ماذا ترتدي في 2026 — دليل عملي صريح',
  description:
    'دليل اللباس في المغرب لعام 2026 — ماذا ترتدي في المدن العتيقة والمساجد والشاطئ والجبل والصحراء، للرجال والنساء، مع قائمة سفر حسب الفصل.',
  keyword: 'لباس المغرب ماذا ترتدي',
  coverImage: COVER,
  coverAlt: 'زقاق فاس العتيقة بأبواب تقليدية — لباس المغرب ماذا ترتدي',
  publishedISO: '2026-05-20',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 10,
  intro:
    'قواعد اللباس في المغرب لعام 2026 معتدلة لكنها حقيقية: تغطية الأكتاف والركبتين في المدن العتيقة والقرى، حرية كاملة في مسابح الفنادق وأندية الشاطئ، وزيارة المساجد تتطلّب حذاءً مغلقًا ولباسًا محتشمًا (المسجد الوحيد المفتوح لغير المسلمين هو الحسن الثاني بالدار البيضاء على أي حال). أدناه ما يُرتدى فعلًا في [مراكش](/destinations/marrakech/) وفاس وشفشاون والصحراء والساحل — حسب الفصل والجنس، مع قائمة سفر واقعية. الخلاصة: «صيف إيطاليا + قميص كتّان بأكمام طويلة» وأنت في 90% من المطلوب.',
  sections: [
    {
      heading: 'الصورة الكبيرة: كيف يلبس المغاربة فعلًا في 2026',
      paragraphs: [
        'يرتدي المغاربة طيفًا واسعًا من الأساليب. في الدار البيضاء والرباط ستجد جينزًا وفساتين وبليزرات وحجابات وجلابات في المقهى نفسه. مدينة مراكش العتيقة أكثر تقليدية لكنها تظل مختلطة. فاس أكثر المدن الإمبراطورية محافظة — النساء يغطين الشعر في الغالب والرجال يلبسون سراويل طويلة مهما كان الحر.',
        'ليس مطلوبًا من السياح أن يلبسوا كالمحليين. لكن مطلوب تغطية الأكتاف والركبتين في المدن العتيقة والقرى والأحياء المحافظة. ثمن عدم الالتزام خفيف — بضعة نداءات إضافية لا أكثر — ليس خطيرًا. لكن المحليين يرتاحون بصريًا حين يُبدي الزائر احترامًا بلباسه.',
      ],
      callout: {
        label: 'نصيحة محلية',
        body: 'اشترِ قميص كتان طويل أو قفطانًا في أول صباح بالمدينة العتيقة (150-300 درهم / 50-90 ريالًا). يرفع أي زي للمطاعم، يغطي الأكتاف في المدينة، ويعمل كمنشفة حمام. أنفع شراء مغربي.',
      },
    },
    {
      heading: 'ماذا ترتدي حسب المكان',
      paragraphs: [
        'مناطق مختلفة تستدعي خيارات مختلفة. الجدول التالي يلخّص العملي.',
      ],
      table: {
        caption: 'لباس المغرب — بحسب المكان',
        headers: ['المكان', 'النساء', 'الرجال'],
        rows: [
          ['المدينة الإمبراطورية (مراكش، فاس)', 'سروال واسع + علوي بأكمام طويلة أو فستان متوسط + جاكيت', 'سروال طويل + تي شيرت أو قميص'],
          ['المدينة الحديثة (الدار البيضاء، الرباط)', 'كل شيء ما عدا القصير جدًا أو الكاشف', 'جينز + قميص؛ الشورت في الشاطئ فقط'],
          ['المدينة الزرقاء (شفشاون)', 'سروال واسع أو تنورة متوسطة + علوي خفيف', 'سروال طويل + تي شيرت؛ الشورت نادر'],
          ['الصحراء / الأطلس', 'أكمام طويلة + سروال (شمس + ليل بارد) + شال', 'أكمام طويلة + سروال + شاش'],
          ['مسبح الفندق / نادي الشاطئ', 'بيكيني أو قطعة واحدة أو بوركيني', 'شورت سباحة'],
          ['جولة مسجد الحسن الثاني', 'أكمام طويلة + سروال/تنورة طويلة + شال', 'سروال طويل + حذاء مغلق؛ أكتاف مغطّاة'],
          ['عشاء على سطح', 'أنيق غير رسمي؛ فستان + جاكيت', 'سروال + قميص بياقة'],
        ],
      },
    },
    {
      heading: 'لباس مراكش',
      paragraphs: [
        'مراكش أكثر مدن المغرب عالميةً. أسطح الرياضات والمطاعم الراقية تستدعي زيًا أنيقًا مساءً. نهارًا في المدينة العتيقة، سروال كتان واسع وقميص قطن بأكمام طويلة وحذاء رياضي أو صندل — مريح ومناسب للحرارة ومحترم.',
        'تجنّبي: العلويات بحمالات رفيعة، الشورت القصير جدًا، الفتحات العميقة، الأقمشة الشفافة في المدينة. حول المسبح والنادي والسطح: لا حدود.',
      ],
    },
    {
      heading: 'لباس فاس',
      paragraphs: [
        'فاس أكثر محافظة من مراكش. غطّي الأكتاف والركبتين في المدينة؛ شال حول الرقبة مفيد للشمس وكتغطية فورية عند مرور قرب مسجد. الأحذية المغلقة أساسية — الأزقة غير مستوية ومشتركة مع البغال. للسيدات، التنانير المتوسطة تعمل جيدًا مع لجن في الأشهر الباردة.',
      ],
    },
    {
      heading: 'لباس شفشاون',
      paragraphs: [
        'شفشاون محافظة لأنها في جبال الريف الريفية، لكن المدينة ودودة جدًا للزوار والهامش واسع. سروال واسع وتنورة أطول وأكمام طويلة خفيفة، حذاء مشي بمسكة جيدة (الأزقة منحدرة وزلقة عند البلل). الأزرق على الجدران طازج — لا تتّكئي عليه بزي داكن إلا إن أردت تذكارًا أزرق.',
      ],
    },
    {
      heading: 'لباس الصحراء',
      paragraphs: [
        'الصحراء هي المكان الوحيد الذي يهم فيه اللباس للراحة لا للاحترام أساسًا. النهار صيفًا: 35-45°م؛ الليل: 5-15°م. سترة صوفية + خفيفة من الريش ضرورية حتى صيفًا. شاش أو اشترِ واحدًا في المخيم — يلفّه لك المرشد قبل ركوب الجمل. الأكمام الطويلة تحمي من الشمس؛ الرمل يدخل في كل شيء، والألوان الداكنة تخفيه أحسن.',
      ],
    },
    {
      heading: 'قائمة سفر للرجال',
      paragraphs: [
        'الرجال أمرهم سهل في المغرب — سروال طويل + تي شيرت أو قميص يعملان تقريبًا في كل مكان. قائمة محددة: 2 شينو خفيف، 4 تي شيرت، قميصا قطن بأكمام طويلة، شورت سباحة، حذاء رياضي + صندل، سترة خفيفة للأمسيات والصحراء، نظارة شمسية، قبعة.',
        'احذف: الشورت القصير للمدينة العتيقة (للمسبح فقط)، والتي شيرت بشعارات قابلة للقراءة الخاطئة. قمصان كرة القدم مقبولة وتفتح أحاديث.',
      ],
    },
    {
      heading: 'قائمة سفر للنساء',
      paragraphs: [
        'كبسولة متعدّدة الاستعمال: 2 سروال كتان واسع، فستان متوسط، 3 علويات قطن بأكمام طويلة، جاكيت خفيف أو كيمونو، لجن (للأشهر الباردة)، شال (تغطية، شمس، غبار)، بيكيني/قطعة واحدة أو بوركيني، حذاء مشي + صندل، نظارة شمسية، قبعة.',
        'للعشاء: فستان متوسط + جاكيت أو تونيك قفطاني يعمل في 90% من مطاعم وأسطح المغرب.',
      ],
    },
    {
      heading: 'إضافات حسب الفصل',
      paragraphs: [
        'نوفمبر-مارس: طبقة حرارية لأول الصباح، سترة ريش خفيفة، حذاء مقاوم للماء (مراكش وفاس قد تمطران). أبريل-يونيو: الأساس + حماية شمسية معزّزة. يوليو-أغسطس: أخف الأقمشة (كتان وقطن خفيف)، قبعة عريضة. سبتمبر-أكتوبر: مثالي — أساس أبريل-يونيو.',
      ],
    },
  ],
  faqs: [
    {
      question: 'كيف ترتدي المرأة في المغرب؟',
      answer:
        'سروال واسع، علويات قطن بأكمام طويلة، فساتين أو تنانير متوسطة، وشال خفيف. غطّي الأكتاف والركبتين في المدن العتيقة والقرى. البيكيني والشورت مقبولان في المسابح وأندية الشاطئ والشواطئ السياحية.',
    },
    {
      question: 'هل تغطية الشعر إلزامية في المغرب؟',
      answer:
        'لا — غير إلزامية للزائرات غير المسلمات. شال في الحقيبة مفيد للشمس وكتغطية فورية قرب المساجد، لكنه ليس متوقّعًا.',
    },
    {
      question: 'هل يمكن للرجال لباس الشورت؟',
      answer:
        'الشورت بطول الركبة مقبول للرجال في المدن الحديثة (الدار البيضاء، الرباط، أكادير) وحول المسابح في كل مكان. تجنّبه في المدن العتيقة الإمبراطورية (مراكش، فاس) والقرى.',
    },
    {
      question: 'ما لباس مسجد الحسن الثاني؟',
      answer:
        'سروال طويل أو تنورة طويلة، أكمام طويلة، حذاء مغلق، أكتاف مغطّاة للجنسين. ينصح بغطاء رأس للسيدات وإن لم يكن مفروضًا على السائحات بصرامة. الحسن الثاني المسجد الوحيد المفتوح لغير المسلمين في المغرب.',
    },
    {
      question: 'ما لباس الصحراء؟',
      answer:
        'أكمام طويلة وسروال (شمس + ليل بارد)، سترة صوفية + خفيفة ريش لِأمسيات المخيم (5-15°م)، شاش، حذاء مشي مغلق، نظارة شمسية. الطبقات إلزامية — الفارق نهار-ليل يبلغ 30°م.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل أرتدي لجنًا فقط في المغرب؟', answer: 'الأفضل تحت تونيك أو تنورة متوسطة. اللجن منفردًا نادر في المدن العتيقة؛ اقترنيه بقطعة تغطي الوركين.' },
    { question: 'هل الصندل مقبول في المدينة العتيقة؟', answer: 'نعم لكن الصندل المغلق أو الحذاء الرياضي أأمن — الأزقة غير مستوية ورطبة أحيانًا.' },
    { question: 'هل يجب شراء لباس مغربي تقليدي؟', answer: 'لا، لكن القفطان أو الجلابة من أفضل التذكارات، وتعمل ممتازًا للعشاء في المطاعم.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'sahara-merzouga'],
  relatedPosts: ['nasaeh-li-ziyarat-al-maghrib-li-awwal-marra', 'al-maghrib-amaan-li-al-musafirat-bimufradihinna'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);
