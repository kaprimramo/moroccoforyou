import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'is-morocco-safe-for-solo-female-travelers';
const SLUG_FR = 'maroc-femme-seule-securite';
const SLUG_AR = 'al-maghrib-amaan-li-al-musafirat-bimufradihinna';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(9422948);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Is Morocco Safe for Solo Female Travelers? 2026 Honest Guide',
  metaDescription:
    'Is Morocco safe for solo female travelers in 2026? An honest answer from women guides on the ground — street harassment, dress, accommodation, transport, where to go.',
  title: 'Is Morocco Safe for Solo Female Travelers? The 2026 Honest Answer',
  description:
    'Solo female travelers ask us this every week. Here is the honest 2026 answer, written with input from women guides in Morocco — what to expect on the street, in riads, in taxis, and the cities that work best.',
  keyword: 'is morocco safe for solo female travelers',
  coverImage: COVER,
  coverAlt: 'Chefchaouen blue medina alley — is Morocco safe for solo female travelers',
  publishedISO: '2026-05-15',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro:
    'Yes, Morocco is broadly safe for solo female travelers, and tens of thousands of women visit alone every year without incident. But "safe" is not the same as "hassle-free": street harassment in Marrakech and Fes medinas exists, and the rhythm of solo travel as a woman here requires a few specific habits — choosing the right riad, knowing how to dress, picking taxis carefully, and walking with the kind of confident body language locals immediately read as "she knows the city". This guide is written with input from our women drivers and licensed guides who live in Morocco. It is not "watch out, you’re in danger". It is "here is what to expect and how to enjoy yourself".',
  sections: [
    {
      heading: 'The short answer — and the honest caveats',
      paragraphs: [
        'Violent crime against tourists is rare. The Moroccan tourism police presence in Marrakech, Fes, Rabat, Casablanca and Chefchaouen is visible and effective. In 2025 the country was ranked among the safer tourist destinations in MENA by major travel insurers.',
        'The reality you should plan for is verbal street attention: "bonjour gazelle", "where you from?", "I love you", whistles. It is more annoying than threatening, more frequent in Marrakech and Fes medinas than in Chefchaouen, Rabat or Essaouira, and it stops almost entirely once you’re inside your riad, on a beach club lounger, or with a guide.',
      ],
      callout: {
        label: 'Local insider tip',
        body: 'Sunglasses + headphones (no music necessary) act as social armour in the medina. They short-circuit eye contact and most catcalls stop before they start. Locals use this same trick.',
      },
    },
    {
      heading: 'Where to stay — riads as a safety choice',
      paragraphs: [
        'For solo women, the single best decision you make is your accommodation. Pick a small riad (4–10 rooms) inside the medina that includes a free arrival meet-and-greet at the nearest gate. This solves three problems at once: you’re met by someone who knows you, the porter walks you through the alleys with your luggage, and from day two you’re a face the neighbourhood recognises.',
        'Specifically recommended for solo women: riads with a female host or female front-of-house team (very common in [Marrakech](/destinations/marrakech/) and [Chefchaouen](/destinations/chefchaouen/)), a hammam on site, and an enclosed rooftop. Examples mentioned by our female guests: Riad Yasmine and Riad Star in Marrakech, Riad Be Marrakech, Dar Antonio in Chefchaouen.',
      ],
    },
    {
      heading: 'Cities ranked for solo female ease',
      paragraphs: [
        'Not all Moroccan cities feel the same when you are a woman walking alone. This rough ranking is based on hundreds of conversations with returning travellers.',
      ],
      table: {
        caption: 'How Moroccan cities feel for solo female travelers',
        headers: ['City', 'Solo female experience', 'Vibe'],
        rows: [
          ['Chefchaouen', 'Easiest — quiet, friendly, low harassment', 'Mountain town, mostly walking'],
          ['Rabat', 'Very easy — clean, modern, low hassle', 'Capital, well-kept'],
          ['Essaouira', 'Easy — laid-back, breezy, mixed crowds', 'Atlantic port, surf town'],
          ['Casablanca', 'Easy — big-city anonymity', 'Cosmopolitan, Art Deco'],
          ['Fes', 'Moderate — best with a licensed guide first day', 'Dense medieval medina'],
          ['Marrakech', 'Moderate — friendly but persistent hustle', 'High-energy red city'],
          ['Tangier', 'Easy in the kasbah, moderate downtown', 'Port city, cosmopolitan'],
        ],
      },
    },
    {
      heading: 'What to wear — dress as a safety lever',
      paragraphs: [
        'You do not need to dress conservatively. You should dress relaxed. Loose linen trousers, a light long-sleeve shirt, a scarf in your bag, sandals or trainers. Showing shoulders or knees is fine in modern cities like Casablanca and Rabat, less common in Fes medina and rural villages. Beach attire is fine on beach club loungers and hotel pools, not on public city streets.',
        'You will get less street attention dressed like a Moroccan thirty-something on her way to work than dressed in stereotypical "tourist". This is also why women guides recommend a third small purchase on day one: a kaftan or a long simple djellaba from the medina. Free street-attention insurance for the rest of your trip.',
      ],
    },
    {
      heading: 'Taxis, drivers and intercity transport',
      paragraphs: [
        'Petit-taxis are the everyday workhorse — red in Casablanca, beige in Marrakech, blue in Fes, turquoise in Chefchaouen, etc. Always insist on the meter ("compteur s’il vous plaît"). If the driver refuses, get out and take another. Minimum daytime fare is MAD 20; night fare is 50% higher and that’s legitimate. Female solo travellers can prefer the front passenger seat (more legroom, easier to see the meter) or the rear if they want more privacy.',
        'For longer trips (Marrakech → Sahara, Fes → Chefchaouen), use a vetted private driver booked through your riad or [MoroccoForYou Cars](/rent-a-car/casablanca-airport/). The same agency drivers do hundreds of trips a year and accountability is built in. We have female drivers on request.',
      ],
    },
    {
      heading: 'Walking the medina — practical habits',
      paragraphs: [
        'Use Google Maps openly — locals do. Choose a wide alley over a narrow one when both lead the same place. Walk briskly with a purpose, even if you are wandering. If a young man insists on guiding you, point at the nearest shop and say "I’m meeting my friend there" — works every time.',
        'Avoid medina alleys after 11pm. Not because of crime risk specifically, but because shops close, lighting drops, and orientation gets harder. Travel back from dinner by petit-taxi to the medina gate, and walk the last block.',
      ],
    },
    {
      heading: 'Cafés, restaurants and the "women’s seating" question',
      paragraphs: [
        'You will notice in Casablanca and Rabat that working-class cafés on a Monday afternoon are mostly men. This is cultural rather than restrictive — women can absolutely sit, the staff will serve you politely, but you may prefer mid-range and tourist cafés where the gender mix is balanced. Restaurants in tourist areas are universally mixed and welcoming.',
        'Eating alone in [Marrakech](/destinations/marrakech/) at a Jemaa el-Fnaa food stall is fine and common. Sit at one of the busier stalls (queue = good), order what the table next to you ordered, and enjoy.',
      ],
    },
    {
      heading: 'Hammam, spa and "female-only" experiences',
      paragraphs: [
        'Traditional public hammams are gender-segregated by time slot (mornings women, afternoons men, or by separate rooms). Riad and hotel hammams are usually private rooms by booking, where you are alone with one female attendant — these are an excellent solo experience and a defining Morocco memory.',
        'For yoga retreats, women-focused tours, and women-led desert camps, ask us on WhatsApp — there is a small but growing scene of women-led travel businesses in Morocco, especially around Essaouira, Imlil and Chefchaouen.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is Morocco safe for solo female travelers in 2026?',
      answer:
        'Yes — Morocco is broadly safe for solo female travelers, with low rates of violent crime against tourists. The main issue is verbal street attention in Marrakech and Fes medinas, which is annoying but rarely threatening. Most solo women report excellent overall trips.',
    },
    {
      question: 'What should a solo female traveler wear in Morocco?',
      answer:
        'Loose linen trousers, a long-sleeve shirt, a scarf in your bag. Shoulders and knees covered in medinas and rural villages. Beach attire only at pools and beach clubs, not on city streets.',
    },
    {
      question: 'Is it safe to walk alone in the Marrakech medina at night?',
      answer:
        'Until about 10–11pm yes, when shops are open and alleys are lit. After that, take a petit-taxi to the medina gate and walk the last 50 metres to your riad. Avoid empty alleys late at night.',
    },
    {
      question: 'Which Moroccan city is best for solo female travelers?',
      answer:
        'Chefchaouen is the easiest — quiet, friendly, very low harassment. Rabat, Essaouira and Casablanca are also relaxed. Marrakech and Fes are wonderful but require slightly more energy on day one.',
    },
    {
      question: 'Should I book a tour or travel solo independently?',
      answer:
        'Both work. Many solo women combine independent stays in riads with a 2–4 day private driver-guided desert loop. This gives you company and context for the long Atlas drives while keeping the medina days flexible.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Do I have to cover my hair in Morocco?', answer: 'No — hair coverings are optional for non-Muslim visitors. Modest dress (shoulders, knees) is what locals notice.' },
    { question: 'Can I drink alcohol as a solo female traveler?', answer: 'Yes, in licensed hotels, riad bars and tourist restaurants. Drinking alone in a working-class café would feel out of place.' },
    { question: 'What if I’m harassed in the medina?', answer: 'Walk into the nearest shop or café and say "this man is bothering me". Local staff will intervene immediately — protecting female visitors is a point of professional pride.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira'],
  relatedPosts: ['morocco-travel-tips-first-time-visitors', 'morocco-7-days-itinerary', 'best-riads-marrakech'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Maroc femme seule — Sécurité et conseils 2026',
  metaDescription:
    'Le Maroc est-il sûr pour une femme seule en 2026 ? Réponse honnête d’une équipe locale : harcèlement de rue, tenue, riads, taxis, villes où aller.',
  title: 'Maroc en solo femme : sécurité, tenue, riads et conseils 2026',
  description:
    'Voyager seule au Maroc en 2026 : la réponse franche d’une équipe basée à Casablanca — ce qui se passe vraiment dans la médina, comment s’habiller, quels riads choisir, quels taxis prendre, et les villes qui marchent le mieux.',
  keyword: 'maroc femme seule sécurité',
  coverImage: COVER,
  coverAlt: 'Ruelle bleue de Chefchaouen — Maroc en solo femme sécurité',
  publishedISO: '2026-05-15',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro:
    'Oui, le Maroc est globalement sûr pour une femme voyageant seule, et des dizaines de milliers de Françaises, Belges et Suisses le visitent chaque année sans incident. Mais "sûr" ne veut pas dire "tranquille" : le harcèlement de rue dans les médinas de Marrakech et de Fès existe, et voyager en solo demande quelques réflexes — choisir le bon riad, savoir comment s’habiller, prendre les taxis avec compteur, et marcher avec l’assurance que les locaux reconnaissent immédiatement comme "elle connaît la ville". Ce guide est rédigé avec l’aide de nos chauffeuses et guides femmes basées au Maroc. Ce n’est pas "attention, danger", c’est "voici à quoi t’attendre et comment en profiter".',
  sections: [
    {
      heading: 'La réponse courte — et les nuances honnêtes',
      paragraphs: [
        'Les crimes violents contre les touristes sont rares. La police touristique marocaine est très visible et efficace à Marrakech, Fès, Rabat, Casablanca et Chefchaouen. Le pays est régulièrement classé parmi les destinations MENA les plus sûres par les grands assureurs voyage.',
        'La réalité à anticiper, c’est l’attention verbale dans la rue : "bonjour gazelle", "tu viens d’où ?", sifflements. C’est plus pénible que dangereux, plus fréquent dans les médinas de Marrakech et Fès qu’à Chefchaouen, Rabat ou Essaouira, et ça cesse complètement une fois dans votre riad, au club de plage ou avec un guide.',
      ],
      callout: {
        label: 'Astuce locale',
        body: 'Lunettes de soleil + écouteurs (même sans musique) servent d’armure sociale dans la médina. Ils court-circuitent le contact visuel et la plupart des "bonjour gazelle" n’aboutissent même pas. Les Marocaines elles-mêmes utilisent cette technique.',
      },
    },
    {
      heading: 'Où dormir — le riad comme choix de sécurité',
      paragraphs: [
        'Pour une voyageuse solo, votre meilleure décision est l’hébergement. Choisissez un petit riad (4 à 10 chambres) dans la médina, qui inclut une prise en charge gratuite à la porte la plus proche. Trois problèmes résolus d’un coup : vous êtes accueillie par quelqu’un qui vous attend, un porteur vous guide jusqu’au riad avec vos bagages, et dès le deuxième jour vous êtes un visage que le quartier reconnaît.',
        'Recommandé pour les femmes seules : riads avec hôtesse ou équipe féminine en accueil (très courant à [Marrakech](/destinations/marrakech/) et [Chefchaouen](/destinations/chefchaouen/)), hammam sur place et terrasse fermée. Exemples cités par nos clientes : Riad Yasmine et Riad Star à Marrakech, Riad Be Marrakech, Dar Antonio à Chefchaouen.',
      ],
    },
    {
      heading: 'Les villes classées pour le voyage solo féminin',
      paragraphs: [
        'Toutes les villes marocaines ne se ressemblent pas quand on marche seule. Ce classement est issu de centaines de retours de voyageuses.',
      ],
      table: {
        caption: 'Comment se vivent les villes marocaines en solo féminin',
        headers: ['Ville', 'Expérience solo femme', 'Ambiance'],
        rows: [
          ['Chefchaouen', 'La plus facile — calme, amicale, peu de harcèlement', 'Petite ville de montagne, à pied'],
          ['Rabat', 'Très facile — propre, moderne, peu de rabatteurs', 'Capitale soignée'],
          ['Essaouira', 'Facile — décontractée, brise atlantique', 'Port, ambiance surf'],
          ['Casablanca', 'Facile — anonymat de grande ville', 'Cosmopolite, Art déco'],
          ['Fès', 'Modérée — premier jour avec guide officiel', 'Médina médiévale très dense'],
          ['Marrakech', 'Modérée — chaleureuse mais insistante', 'Énergie de la Ville Rouge'],
          ['Tanger', 'Facile dans la kasbah, modérée en centre-ville', 'Port cosmopolite'],
        ],
      },
    },
    {
      heading: 'Comment s’habiller au Maroc en solo',
      paragraphs: [
        'Inutile de se déguiser. Misez sur le détendu : pantalon en lin large, chemise légère manches longues, foulard dans le sac, sandales ou baskets. Épaules et genoux couverts dans les médinas et en milieu rural ; les tenues décolletées passent à Casablanca, Rabat et dans les hôtels. Plage et piscine uniquement aux clubs et hôtels, pas dans la rue.',
        'Vous attirez moins d’attention vêtue comme une trentenaire marocaine en route pour le bureau qu’en "tourisme stéréotypé". C’est aussi pourquoi nos guides femmes recommandent un troisième petit achat au premier jour : un caftan ou une djellaba simple à la médina. Assurance "tranquillité de rue" pour le reste du séjour.',
      ],
    },
    {
      heading: 'Taxis, chauffeurs et trajets longue distance',
      paragraphs: [
        'Les petits taxis sont le quotidien — rouges à Casablanca, beiges à Marrakech, bleus à Fès, turquoise à Chefchaouen. Exigez toujours le compteur. Si le chauffeur refuse, descendez et prenez le suivant. Course minimum de jour 20 MAD ; nuit majorée de 50 %, c’est légal. En solo, beaucoup de femmes préfèrent l’avant (plus de place, compteur visible) ou l’arrière pour plus d’intimité — les deux conviennent.',
        'Pour les trajets longs (Marrakech → Sahara, Fès → Chefchaouen), passez par un chauffeur privé vérifié via votre riad ou [MoroccoForYou Cars](/rent-a-car/casablanca-airport/). Les mêmes chauffeurs font des centaines de trajets/an et la traçabilité est intégrée. Chauffeures femmes disponibles sur demande.',
      ],
    },
    {
      heading: 'Marcher dans la médina — les habitudes utiles',
      paragraphs: [
        'Utilisez Google Maps ouvertement, les locales le font aussi. Préférez une ruelle large à une étroite quand les deux mènent au même endroit. Marchez d’un pas vif comme si vous saviez où vous allez. Si un jeune insiste pour "vous guider", désignez la boutique la plus proche et dites "je retrouve mon amie là-bas" — fonctionne toujours.',
        'Évitez les ruelles de médina après 23h. Pas par crainte du crime précisément, mais parce que les boutiques ferment, l’éclairage chute et l’orientation devient compliquée. Rentrez en petit taxi jusqu’à la porte, puis marchez les derniers mètres.',
      ],
    },
    {
      heading: 'Cafés, restaurants et la "question des terrasses"',
      paragraphs: [
        'À Casablanca ou Rabat, les cafés populaires sont majoritairement masculins en semaine. C’est culturel et non restrictif — vous pouvez vous y asseoir, le serveur sera correct, mais beaucoup de voyageuses préfèrent les cafés milieu de gamme et touristiques où la mixité est meilleure. Tous les restaurants des zones touristiques sont parfaitement mixtes.',
        'Manger seule à Jemaa el-Fna à [Marrakech](/destinations/marrakech/) est tout à fait courant. Asseyez-vous à un stand où des Marocains font la queue, commandez ce que mange la table à côté, et profitez.',
      ],
    },
    {
      heading: 'Hammam, spa et expériences "entre femmes"',
      paragraphs: [
        'Les hammams publics traditionnels sont séparés par créneau horaire (matin femmes, après-midi hommes) ou par salle. Les hammams de riad et d’hôtel sont des salles privées sur réservation, où vous êtes seule avec une employée — excellente expérience solo et grand souvenir marocain.',
        'Pour les retraites yoga, les circuits "féminins" et les camps désert dirigés par des femmes, demandez-nous sur WhatsApp — il existe un petit mais réel écosystème de travel businesses au féminin au Maroc, surtout autour d’Essaouira, Imlil et Chefchaouen.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Le Maroc est-il sûr pour une femme seule en 2026 ?',
      answer:
        'Oui — globalement sûr, avec une criminalité violente très faible envers les touristes. Le principal désagrément est l’attention verbale de rue dans les médinas de Marrakech et Fès, pénible mais rarement menaçante. La plupart des voyageuses solo en gardent un excellent souvenir.',
    },
    {
      question: 'Comment s’habille une femme seule au Maroc ?',
      answer:
        'Pantalon de lin large, chemise légère manches longues, foulard dans le sac. Épaules et genoux couverts en médina et dans les villages. Plage uniquement aux piscines et clubs, pas dans la rue.',
    },
    {
      question: 'Peut-on marcher seule la nuit dans la médina de Marrakech ?',
      answer:
        'Jusqu’à 22h-23h oui, quand les boutiques sont ouvertes et les ruelles éclairées. Au-delà, prenez un petit taxi jusqu’à la porte de la médina et marchez les 50 derniers mètres. Évitez les ruelles vides tard le soir.',
    },
    {
      question: 'Quelle ville marocaine est la plus facile pour une voyageuse solo ?',
      answer:
        'Chefchaouen — calme, accueillante, peu de harcèlement. Rabat, Essaouira et Casablanca sont aussi détendues. Marrakech et Fès sont merveilleuses mais demandent un peu plus d’énergie le premier jour.',
    },
    {
      question: 'Vaut-il mieux un tour organisé ou voyager en solo ?',
      answer:
        'Les deux fonctionnent. Beaucoup de voyageuses solo combinent des nuits indépendantes en riad avec une boucle Sahara de 2-4 jours avec chauffeur privé. Cela apporte compagnie et contexte pour les longues routes de l’Atlas tout en gardant la flexibilité en médina.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Faut-il se couvrir les cheveux au Maroc ?', answer: 'Non — le voile est optionnel pour les visiteuses non musulmanes. Ce qui compte, c’est la tenue (épaules, genoux).' },
    { question: 'Peut-on boire de l’alcool en solo ?', answer: 'Oui, en hôtels licenciés et bars de riad. Boire seule dans un café populaire est en revanche très inhabituel.' },
    { question: 'Que faire si on est harcelée dans la médina ?', answer: 'Entrez dans la boutique ou le café le plus proche et dites "cet homme me dérange". Le personnel intervient immédiatement — protéger les visiteuses est une fierté professionnelle.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira'],
  relatedPosts: ['conseils-premier-voyage-au-maroc', 'morocco-7-days-itinerary'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'هل المغرب آمن للمسافرات بمفردهن؟ دليل 2026',
  metaDescription:
    'هل المغرب آمن للمسافرات بمفردهن في 2026؟ إجابة صريحة من فريق نسائي محلي حول اللباس والتنقل والأمن والمدن الأنسب. خطّطي رحلتك عبر واتساب.',
  title: 'هل المغرب آمن للمسافرات بمفردهن؟ الإجابة الصريحة لعام 2026',
  description:
    'هل المغرب آمن لرحلة منفردة للمرأة في 2026؟ نصائح من مرشدات وسائقات يعشن في المغرب: ماذا تتوقعين فعلًا في الأزقة، اللباس المناسب، الرياضات، التاكسي، والمدن الأسهل.',
  keyword: 'هل المغرب آمن للمسافرات بمفردهن',
  coverImage: COVER,
  coverAlt: 'زقاق أزرق في شفشاون — هل المغرب آمن للمسافرات بمفردهن',
  publishedISO: '2026-05-15',
  updatedISO: '2026-05-29',
  author: 'فريق MoroccoForYou',
  readingMinutes: 11,
  intro:
    'الإجابة المختصرة: نعم، المغرب آمن عمومًا للمسافرات بمفردهن، وعشرات الآلاف من الخليجيات والسعوديات والمغربيات المقيمات بالخارج يزرنه سنويًا دون حوادث تذكر. لكن «آمن» لا يعني «بدون إزعاج»: التحرّش اللفظي في أزقة مراكش وفاس موجود، والسفر منفردة يتطلب عادات بسيطة — اختيار الرياض الصحيح، معرفة اللباس المناسب، استخدام سيارات الأجرة بعدّاد، والمشي بطريقة يقرأها المحليون فورًا على أنها «تعرف المدينة». هذا الدليل كُتب بمشاركة مرشدات وسائقات يعشن هنا. ليس «احذري الخطر»، بل «هذا ما ستجدينه وهذه طريقة الاستمتاع».',
  sections: [
    {
      heading: 'الإجابة السريعة — والتفاصيل الصريحة',
      paragraphs: [
        'الجرائم العنيفة ضد السياح نادرة. الشرطة السياحية المغربية حاضرة وفعالة في مراكش وفاس والرباط والدار البيضاء وشفشاون. صنّفت كبرى شركات تأمين السفر المغرب ضمن أكثر دول الشرق الأوسط وشمال أفريقيا أمانًا.',
        'الواقع الذي يجب توقّعه هو التحرّش اللفظي في الشارع: تعليقات، صفير، نداءات «غزال». مزعج لا مخيف، أكثر شيوعًا في مراكش وفاس منه في شفشاون والرباط والصويرة، ويتوقف فور دخولك إلى الرياض أو نادي الشاطئ أو رفقة مرشد.',
      ],
      callout: {
        label: 'نصيحة محلية',
        body: 'النظارة الشمسية + السماعات (حتى دون موسيقى) درع اجتماعي في المدينة العتيقة. تقطعان التواصل البصري وتُنهيان معظم النداءات قبل أن تبدأ. حتى المغربيات يستعملن هذه الحيلة.',
      },
    },
    {
      heading: 'أين تقيمين — الرياض كقرار أمان',
      paragraphs: [
        'القرار الأهم للمسافرة منفردة هو السكن. اختاري رياضًا صغيرًا (4-10 غرف) داخل المدينة العتيقة، يشمل استقبالًا مجانيًا عند أقرب باب. ثلاث مشكلات تُحَل دفعة واحدة: شخص يعرفك ينتظرك، حمّال يرافقك بالحقائب عبر الأزقة، ومن اليوم الثاني تصبحين وجهًا يعرفه أهل الحي.',
        'موصى به للمسافرات منفردات: رياضات بإدارة نسائية أو فريق استقبال نسائي (شائعة في [مراكش](/destinations/marrakech/) و[شفشاون](/destinations/chefchaouen/))، مع حمّام داخلي وسطح مغلق. أمثلة ذكرتها زائراتنا: Riad Yasmine وRiad Star بمراكش، وDar Antonio بشفشاون.',
      ],
    },
    {
      heading: 'ترتيب المدن المغربية من حيث الراحة للمسافرة منفردة',
      paragraphs: [
        'المدن المغربية لا تتشابه عند المشي بمفردها. الجدول التالي مبني على مئات الحوارات مع زائرات عدن للمغرب.',
      ],
      table: {
        caption: 'تجربة المسافرة منفردة في المدن المغربية',
        headers: ['المدينة', 'التجربة', 'الأجواء'],
        rows: [
          ['شفشاون', 'الأسهل — هادئة وودودة وقليلة المضايقة', 'مدينة جبلية مشي'],
          ['الرباط', 'سهلة جدًا — نظيفة وحديثة', 'عاصمة منظّمة'],
          ['الصويرة', 'سهلة — متحررة هواء أطلسي', 'ميناء وأجواء سرف'],
          ['الدار البيضاء', 'سهلة — أجواء مدينة كبيرة', 'كوزموبوليتانية، آرت ديكو'],
          ['فاس', 'متوسطة — اليوم الأول مع مرشد مرخّص', 'مدينة عتيقة كثيفة'],
          ['مراكش', 'متوسطة — حارة لكن ودودة بإلحاح', 'طاقة المدينة الحمراء'],
          ['طنجة', 'سهلة بالقصبة، متوسطة بالوسط', 'ميناء كوزموبوليتاني'],
        ],
      },
    },
    {
      heading: 'ماذا أرتدي — اللباس كأداة راحة',
      paragraphs: [
        'لا تحتاجين زيًا متشددًا. اختاري الراحة: سروال قطن واسع، قميص خفيف بأكمام طويلة، شال في الحقيبة، صندل أو حذاء رياضي. تغطية الأكتاف والركبتين في المدن العتيقة والقرى؛ أزياء الشاطئ مقبولة فقط في المسابح وأندية الشاطئ.',
        'لباس يشبه مغربية ثلاثينية في طريقها إلى عملها يجذب اهتمامًا أقل بكثير من «مظهر السائحة الكلاسيكي». لذلك يُنصح اقتناء قفطان أو جلابة بسيطة في اليوم الأول من المدينة العتيقة. تأمين سفر مريح لما تبقى من الرحلة.',
      ],
    },
    {
      heading: 'سيارات الأجرة والسائقون والتنقلات الطويلة',
      paragraphs: [
        'سيارات الأجرة الصغيرة هي اليومي — حمراء بالدار البيضاء، بيج بمراكش، زرقاء بفاس، فيروزية بشفشاون. اطلبي العدّاد دائمًا. إن رفض السائق، انزلي وخذي التالي. الحد الأدنى نهارًا 20 درهم؛ بالليل زيادة 50% وذلك قانوني. منفردة، كثيرات يفضّلن الجلوس أمامًا (مساحة أكبر، رؤية العداد) أو خلفًا للخصوصية.',
        'للرحلات الطويلة (مراكش → الصحراء، فاس → شفشاون)، استعملي سائقًا خاصًا موصى به عبر الرياض أو [MoroccoForYou Cars](/rent-a-car/casablanca-airport/). نفس السائقين ينجزون مئات الرحلات سنويًا والمسؤولية واضحة. سائقات نساء متاحات عند الطلب.',
      ],
    },
    {
      heading: 'المشي في المدينة العتيقة — عادات عملية',
      paragraphs: [
        'استعملي خرائط Google علنًا — المحليات يفعلن ذلك. اختاري الزقاق الواسع على الضيق إذا أوصلا للمكان نفسه. سيري بخطوة واثقة كأنك تعرفين الوجهة. إن أصرّ شاب على «إرشادك»، أشيري إلى أقرب محل وقولي «أنا في موعد مع صديقتي هناك» — تنجح دائمًا.',
        'تجنّبي أزقة المدينة العتيقة بعد الساعة 11 ليلًا. ليس بسبب جرائم، بل لأن المحلات تُغلق والإضاءة تنخفض والاتجاه يصبح صعبًا. عودي بسيارة أجرة إلى الباب، ثم امشي الأمتار الأخيرة.',
      ],
    },
    {
      heading: 'المقاهي والمطاعم وأسئلة الجلوس',
      paragraphs: [
        'ستلاحظين في الدار البيضاء أو الرباط أن المقاهي الشعبية يومًا اثنين بعد الزوال غالبها رجال. هذا ثقافي لا تقييدي — يمكنك الجلوس وسيخدمك النادل باحترام، لكن كثير من الزائرات يفضّلن المقاهي السياحية والمتوسطة حيث المزيج بين الجنسين متوازن. مطاعم المناطق السياحية كلها مختلطة وودودة.',
        'الأكل منفردة في ساحة جامع الفنا ب[مراكش](/destinations/marrakech/) عادي وشائع. اجلسي عند كشك يصطف فيه المغاربة، اطلبي ما تطلبه الطاولة المجاورة، واستمتعي.',
      ],
    },
    {
      heading: 'الحمّام والسبا والتجارب «النسائية»',
      paragraphs: [
        'الحمّامات الشعبية التقليدية مفصولة بالجنس عبر التوقيت (صباحًا نساء، بعد الزوال رجال) أو بقاعات منفصلة. حمّامات الرياضات والفنادق غرف خاصة بالحجز، وحدك مع عاملة — تجربة منفردة ممتازة وذكرى مغربية لا تُنسى.',
        'لِملاذات اليوغا والجولات الموجهة للنساء والمخيمات التي تديرها سيدات، اسأليينا عبر واتساب — هناك نظام بيئي صغير لكنه نامٍ من شركات السياحة بقيادة نساء، خاصة حول الصويرة وإمليل وشفشاون.',
      ],
    },
  ],
  faqs: [
    {
      question: 'هل المغرب آمن للمسافرات بمفردهن في 2026؟',
      answer:
        'نعم — آمن عمومًا، بمعدل جرائم عنيفة منخفض جدًا ضد السياح. الإزعاج الأبرز هو التحرش اللفظي في أزقة مراكش وفاس، مزعج لكن نادرًا ما يكون مخيفًا. معظم الزائرات منفردات يصفن الرحلة بأنها ممتازة.',
    },
    {
      question: 'كيف ترتدي المسافرة منفردة في المغرب؟',
      answer:
        'سروال قطن واسع، قميص خفيف بأكمام طويلة، شال في الحقيبة. الأكتاف والركبتان مغطّاة في المدينة العتيقة والقرى. لباس الشاطئ فقط في المسابح وأندية الشاطئ.',
    },
    {
      question: 'هل يُسمح بالمشي ليلًا في مدينة مراكش العتيقة؟',
      answer:
        'حتى الساعة 22:00-23:00 نعم، عندما تكون المحلات مفتوحة والأزقة مضاءة. بعد ذلك، خذي سيارة أجرة إلى باب المدينة وامشي الأمتار الأخيرة. تجنّبي الأزقة الفارغة في وقت متأخر.',
    },
    {
      question: 'أي مدينة مغربية أنسب للمسافرة منفردة؟',
      answer:
        'شفشاون — هادئة، ودودة، تحرّش منخفض. الرباط والصويرة والدار البيضاء أيضًا مريحة. مراكش وفاس رائعتان لكنهما تتطلبان طاقة أكبر في اليوم الأول.',
    },
    {
      question: 'هل أحجز جولة منظمة أم أسافر بحرية؟',
      answer:
        'كلاهما ينجح. كثير من المسافرات منفردات يجمعن بين الإقامة المستقلة في رياض وحلقة صحراوية 2-4 أيام بسائق خاص. هذا يوفر رفقة وسياقًا للطرق الطويلة في الأطلس مع الحفاظ على المرونة في المدينة العتيقة.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل يجب تغطية الشعر في المغرب؟', answer: 'لا، تغطية الشعر اختيارية للزائرات غير المسلمات. المهم هو الاحتشام (أكتاف، ركبتان).' },
    { question: 'هل تنتشر المساجد المفتوحة لغير المسلمين؟', answer: 'لا، المسجد الوحيد المفتوح هو الحسن الثاني بالدار البيضاء. للمسلمات، كل المساجد مفتوحة وقت الصلوات.' },
    { question: 'ماذا أفعل إن تعرّضت لمضايقة في المدينة العتيقة؟', answer: 'ادخلي أقرب محل أو مقهى وقولي «هذا الرجل يضايقني». الموظفون يتدخلون فورًا — حماية الزائرات مصدر فخر مهني.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira'],
  relatedPosts: ['nasaeh-li-ziyarat-al-maghrib-li-awwal-marra'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);
