import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'morocco-hammam-guide-tourists';
const SLUG_FR = 'guide-hammam-maroc-touristes';
const SLUG_AR = 'dalil-al-hammam-al-maghribi-lissuwwah';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3771120);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Morocco Hammam Guide for Tourists 2026 — Prices, Tips & Etiquette',
  metaDescription: 'Everything tourists need to know about the Moroccan hammam: real 2026 prices, what to expect, etiquette, best hammams in Marrakech and Fes, and how to book.',
  title: 'Morocco Hammam Guide for Tourists: Prices, Etiquette & Best Spots (2026)',
  description: 'The complete tourist guide to Moroccan hammams in 2026: what happens inside, real prices, dress code, etiquette, and the best hammams in Marrakech, Fes and Chefchaouen.',
  keyword: 'morocco hammam guide tourists',
  coverImage: COVER,
  coverAlt: 'Traditional Moroccan hammam interior with steam and tiled walls',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro: 'A Moroccan hammam is not a spa — it is a 1,000-year-old social ritual, a weekly cleansing tradition, and one of the most memorable experiences available to any visitor in Morocco. Done right, an hour in a traditional hammam leaves you feeling cleaner than any shower has ever managed, with skin that genuinely glows. Done wrong — wrong hammam, wrong timing, no idea what is happening — it can feel confusing and uncomfortable. This guide tells you exactly what to expect, what it costs, and which hammams are worth your time in 2026.',
  sections: [
    {
      heading: 'What Is a Moroccan Hammam?',
      paragraphs: [
        'A hammam (حمّام) is a traditional steam bath found across the Islamic world. In Morocco, every neighbourhood has at least one public hammam — a community bathhouse that has functioned as a place of cleansing, socialising, and relaxation for centuries. Most Moroccan families visit the hammam once or twice a week.',
        'The experience typically involves three rooms at different temperatures: a cool changing room, a warm middle room, and a hot inner room where most of the washing and scrubbing happens. The signature treatment is the kessa (scrub with a rough mitt) and ghassoul (Moroccan clay soap), which removes dead skin in a way that genuinely has to be experienced to be believed.',
      ],
      callout: {
        label: '🇲🇦 Local Insider Tip',
        body: 'The best hammam experience in Morocco is not at a tourist spa — it is at a neighbourhood public hammam (hammam beldi) where locals go. Ask your riad owner to recommend the nearest one and go at the same time as locals (mornings for women, afternoons for men in most traditional hammams). You will pay 15–30 MAD instead of 150–500 MAD, and the experience is completely authentic.',
      },
    },
    {
      heading: 'Public Hammam vs Tourist Hammam — What Is the Difference?',
      paragraphs: [
        'Morocco has two completely different hammam experiences, and understanding which one you want is the first decision to make.',
      ],
      table: {
        caption: 'Public hammam vs tourist hammam — complete comparison 2026',
        headers: ['Feature', 'Public hammam (beldi)', 'Tourist/riad hammam'],
        rows: [
          ['Price', '15–40 MAD (€1.40–3.70)', '150–600 MAD (€14–55)'],
          ['Scrub (kessa)', '20–30 MAD extra', 'Usually included'],
          ['Ghassoul clay soap', '5–10 MAD', 'Included'],
          ['Private room', 'No — shared space', 'Often private room'],
          ['English spoken', 'Rarely', 'Yes'],
          ['Appointment needed', 'No — walk in', 'Yes — book ahead'],
          ['Authenticity', 'Very high', 'Tourist-adapted'],
          ['Comfort level', 'Basic', 'High'],
          ['Best for', 'Adventurous travelers', 'First-timers, couples'],
        ],
      },
    },
    {
      heading: 'What Happens Inside a Moroccan Hammam — Step by Step',
      paragraphs: [
        'Knowing the sequence removes all anxiety. Here is exactly what happens in a traditional Moroccan hammam visit.',
      ],
      table: {
        caption: 'Step-by-step Moroccan hammam experience',
        headers: ['Step', 'What happens', 'Duration'],
        rows: [
          ['1. Entry & changing', 'Leave shoes at door, undress to underwear/swimwear in changing room', '5 min'],
          ['2. Warm room', 'Sit in the warm room to open pores and begin sweating', '10–15 min'],
          ['3. Hot room', 'Move to hot inner room — this is where the main treatment happens', '20–30 min'],
          ['4. Ghassoul soap', 'Attendant (or self) applies black soap (savon beldi) to whole body', '5 min'],
          ['5. Kessa scrub', 'Rough mitt scrub removes dead skin — dramatic amounts of grey skin rolls off', '10–15 min'],
          ['6. Rinse', 'Buckets of warm water poured over body to rinse off soap and skin', '5 min'],
          ['7. Ghassoul mask (optional)', 'Moroccan clay applied to hair and skin, left for 5 min, rinsed off', '10 min'],
          ['8. Cool down', 'Return to warm room, drink mint tea, relax', '10–15 min'],
          ['9. Moisturiser (optional)', 'Argan oil massage — available at tourist hammams, rare at public ones', '15–20 min'],
        ],
      },
    },
    {
      heading: 'Hammam Prices in Morocco 2026',
      paragraphs: [
        'Prices vary enormously between public neighbourhood hammams and tourist-oriented spa hammams. Here are the real 2026 prices across the main cities.',
      ],
      table: {
        caption: 'Hammam prices by city and type — Morocco 2026',
        headers: ['City & hammam type', 'Entry', 'Kessa scrub', 'Ghassoul', 'Full package'],
        rows: [
          ['Marrakech — public beldi', '15–25 MAD', '20–30 MAD', '5–10 MAD', '40–65 MAD total'],
          ['Marrakech — tourist/riad', '150–300 MAD', 'Included', 'Included', '150–350 MAD'],
          ['Marrakech — luxury spa', '300–600 MAD', 'Included', 'Included', '400–800 MAD'],
          ['Fes — public beldi', '10–20 MAD', '15–25 MAD', '5 MAD', '30–50 MAD total'],
          ['Fes — riad hammam', '120–250 MAD', 'Included', 'Included', '120–300 MAD'],
          ['Chefchaouen — public', '10–15 MAD', '15–20 MAD', '5 MAD', '30–40 MAD total'],
          ['Essaouira — public beldi', '10–20 MAD', '20 MAD', '5 MAD', '35–45 MAD total'],
          ['Casablanca — public', '15–25 MAD', '20–30 MAD', '5–10 MAD', '40–65 MAD total'],
        ],
      },
      callout: {
        label: '💡 Best Value Tip',
        body: 'The best hammam value in Morocco: a public beldi hammam visit (15–25 MAD entry) with a kessa scrub from the attendant (20–30 MAD). Total cost: under 60 MAD (€5.50) for a full traditional Moroccan hammam experience. Bring your own flip-flops, a towel, and a change of underwear.',
      },
    },
    {
      heading: 'Hammam Etiquette — What to Know Before You Go',
      paragraphs: [
        'Public hammams have unwritten rules that locals follow automatically. Knowing them makes you a respectful visitor and a better guest.',
        'Dress: men wear underwear or swimming shorts throughout; women wear underwear bottoms (bra optional in women-only sessions). Full nudity is not the norm in Moroccan public hammams. At riad hammams, you may be given a disposable bikini bottom.',
        'Silence is not required but loud conversation is unusual in the hot room — treat it like a quiet spa environment. Phones are not used inside. Tipping the attendant (kessala or tayeb) 10–20 MAD for the scrub is standard and appreciated.',
      ],
      table: {
        caption: 'Hammam etiquette — do\'s and don\'ts',
        headers: ['Do', 'Don\'t'],
        rows: [
          ['Bring flip-flops (floors are wet)', 'Wear outdoor shoes inside'],
          ['Bring a towel and change of underwear', 'Expect towels to be provided at public hammams'],
          ['Tip the attendant 10–20 MAD', 'Leave without tipping for a scrub'],
          ['Drink water before and after', 'Stay too long in the hot room if you feel dizzy'],
          ['Ask before photographing anything', 'Take photos inside the hammam'],
          ['Eat lightly beforehand', 'Go on a full stomach'],
          ['Arrive 30 min before closing', 'Arrive in the last 10 minutes'],
        ],
      },
    },
    {
      heading: 'Best Tourist Hammams in Marrakech 2026',
      paragraphs: [
        'For first-time visitors who want a comfortable introduction to the hammam experience, these tourist-oriented hammams in Marrakech are consistently recommended by travelers and our local team.',
        'Hammam de la Rose — located inside the medina, private rooms available, full package from 200 MAD including kessa and ghassoul. English-speaking staff. Book 24 hours ahead. Address: 130 Arset El Maach, Medina.',
        'Les Bains de Marrakech — the most famous tourist hammam in Marrakech, beautifully designed, full packages from 350 MAD. Argan oil massage addon available (250 MAD extra). Address: 2 Derb Sedra, Bab Agnaou. Book at least 2 days ahead in high season.',
        'Hammam Dar el-Bacha — the grandest public hammam in Marrakech, recently restored to its 1920s splendour. Entry 50 MAD, kessa 30 MAD. Men only on certain days — check the schedule. Address: 20 Rue Fatima Zohra, near Dar el-Bacha Palace.',
      ],
    },
    {
      heading: 'Best Public Hammams in Fes 2026',
      paragraphs: [
        'Fes has dozens of neighbourhood hammams inside the medina. The most accessible for tourists:',
        'Hammam Sidi Azzouz — one of the oldest working hammams in Fes el-Bali, near Bab Boujloud. Entry 12 MAD, kessa 20 MAD. Ask your riad for exact hours (women typically 6am–noon, men noon–10pm).',
        'Hammam R\'cif — near R\'cif square inside the medina. Local pricing (10–15 MAD entry), very authentic, no English spoken. Bring your own supplies or buy ghassoul soap at the entrance for 5 MAD.',
      ],
    },
    {
      heading: 'What to Bring to a Moroccan Hammam',
      paragraphs: [
        'Packing the right items makes the difference between a smooth, enjoyable experience and an awkward one.',
      ],
      table: {
        caption: 'What to bring to a Moroccan hammam — checklist',
        headers: ['Item', 'Public hammam', 'Tourist/riad hammam', 'Notes'],
        rows: [
          ['Flip-flops / sandals', '✅ Essential', '✅ Recommended', 'Wet floors throughout'],
          ['Towel (x2)', '✅ Essential', '⚠️ Often provided', 'One for body, one for hair'],
          ['Change of underwear', '✅ Essential', '✅ Essential', 'You will be sweaty'],
          ['Savon beldi (black soap)', '✅ Buy at entrance', '❌ Provided', '5–10 MAD at any hammam'],
          ['Kessa mitt', '✅ Buy at souks', '❌ Provided', '10–15 MAD in Marrakech souks'],
          ['Small bag for valuables', '✅ Essential', '✅ Essential', 'Leave jewellery at riad'],
          ['Water bottle', '✅ Recommended', '✅ Recommended', 'Dehydration is easy in the hot room'],
          ['Cash (small bills)', '✅ Essential', '✅ Essential', 'For tips and payment'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'How much does a hammam cost in Morocco in 2026?',
      answer: 'A public neighbourhood hammam costs 15–40 MAD (€1.40–3.70) for entry plus 20–30 MAD for a kessa scrub — total around 40–65 MAD (€3.70–6). Tourist and riad hammams cost 150–600 MAD (€14–55) for a full package including scrub and ghassoul.',
    },
    {
      question: 'What do you wear in a Moroccan hammam?',
      answer: 'In a public hammam: underwear or swimming shorts/bottoms throughout. Full nudity is not the norm. At tourist hammams, you may be given a disposable bikini bottom. Always bring flip-flops — the floors are permanently wet.',
    },
    {
      question: 'Are hammams in Morocco mixed gender?',
      answer: 'No — public hammams are strictly gender-segregated, either by separate rooms or by time slot (women in the morning, men in the afternoon at most traditional hammams). Riad and hotel hammams are usually private rooms booked by the hour, suitable for couples.',
    },
    {
      question: 'Do I need to book a hammam in advance in Morocco?',
      answer: 'Public hammams are walk-in only — no booking needed. Tourist and riad hammams require booking 24–48 hours ahead, especially in Marrakech during peak season (March–May, October–November).',
    },
    {
      question: 'What is ghassoul and why is it used in the hammam?',
      answer: 'Ghassoul is a natural Moroccan clay mineral mined in the Atlas Mountains. It has been used for centuries as a soap, hair mask, and skin conditioner. Applied during a hammam, it draws out impurities, softens skin, and leaves hair naturally shiny without stripping natural oils.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Is a Moroccan hammam safe for tourists?', answer: 'Yes — hammams are very safe. The main thing to watch is the heat: take breaks if you feel dizzy and drink water before and after. Valuables can be left with reception at tourist hammams or kept in a small bag with you.' },
    { question: 'What is a kessa in a hammam?', answer: 'A kessa is a rough exfoliating mitt used to scrub dead skin from the body during a hammam. When used correctly after steaming, it removes rolls of grey dead skin — dramatic and deeply satisfying. Available in any Moroccan souk for 10–15 MAD.' },
    { question: 'Can I go to a hammam alone in Morocco?', answer: 'Yes — solo visitors are common at both public and tourist hammams. At tourist hammams, the attendant guides you through every step. At public hammams, watch what others do and follow along.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira'],
  relatedPosts: ['morocco-travel-tips-first-time-visitors', 'morocco-itinerary-2-weeks-first-time', 'things-to-do-in-morocco-7-days'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Hammam Maroc pour Touristes 2026 — Prix, Conseils & Étiquette',
  metaDescription: 'Tout ce que les touristes doivent savoir sur le hammam marocain : prix 2026, déroulement, étiquette, meilleurs hammams à Marrakech et Fès, et comment réserver.',
  title: 'Guide Hammam Maroc pour Touristes : Prix, Étiquette & Meilleurs Endroits (2026)',
  description: 'Le guide complet du hammam marocain pour touristes en 2026 : ce qui se passe à l\'intérieur, vrais prix, code vestimentaire, étiquette et meilleurs hammams à Marrakech, Fès et Chefchaouen.',
  keyword: 'guide hammam maroc touristes',
  coverImage: COVER,
  coverAlt: 'Intérieur d\'un hammam marocain traditionnel avec vapeur et murs carrelés',
  publishedISO: '2026-06-03',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 11,
  intro: 'Un hammam marocain n\'est pas un spa — c\'est un rituel social millénaire, une tradition de purification hebdomadaire, et l\'une des expériences les plus mémorables offertes à tout visiteur au Maroc. Bien fait, une heure dans un hammam traditionnel vous laisse plus propre qu\'aucune douche ne l\'a jamais fait, avec une peau qui rayonne vraiment. Mal fait — mauvais hammam, mauvais moment, sans savoir ce qui se passe — cela peut sembler déroutant. Ce guide vous dit exactement ce qui vous attend, ce que ça coûte, et quels hammams valent votre temps en 2026.',
  sections: [
    {
      heading: 'Qu\'est-ce qu\'un hammam marocain ?',
      paragraphs: [
        'Un hammam (حمّام) est un bain de vapeur traditionnel présent dans tout le monde islamique. Au Maroc, chaque quartier possède au moins un hammam public — un bain communal qui fonctionne comme lieu de purification, de socialisation et de détente depuis des siècles. La plupart des familles marocaines fréquentent le hammam une ou deux fois par semaine.',
        'L\'expérience comprend généralement trois salles à températures différentes : une salle froide pour se déshabiller, une salle tiède, et une salle chaude où se déroule l\'essentiel du lavage et du gommage. Le traitement signature est la kessa (gommage avec un gant rugueux) et le ghassoul (argile savonnante marocaine), qui élimine les cellules mortes d\'une façon qui doit vraiment être vécue pour être appréciée.',
      ],
      callout: {
        label: '🇲🇦 Astuce locale',
        body: 'La meilleure expérience hammam au Maroc n\'est pas dans un spa touristique — c\'est dans un hammam public de quartier (hammam beldi) où vont les locaux. Demandez à votre riad de vous recommander le plus proche et allez-y aux heures locales (matins pour les femmes, après-midis pour les hommes dans la plupart des hammams traditionnels). Vous paierez 15–30 MAD au lieu de 150–500 MAD, et l\'expérience sera totalement authentique.',
      },
    },
    {
      heading: 'Hammam public vs hammam touristique — quelle différence ?',
      paragraphs: [
        'Le Maroc propose deux expériences de hammam complètement différentes. Comprendre laquelle vous souhaitez est la première décision à prendre.',
      ],
      table: {
        caption: 'Hammam public vs hammam touristique — comparatif complet 2026',
        headers: ['Critère', 'Hammam public (beldi)', 'Hammam touristique/riad'],
        rows: [
          ['Prix', '15–40 MAD (1,40–3,70€)', '150–600 MAD (14–55€)'],
          ['Gommage (kessa)', '20–30 MAD en supplément', 'Généralement inclus'],
          ['Ghassoul', '5–10 MAD', 'Inclus'],
          ['Salle privée', 'Non — espace partagé', 'Souvent salle privée'],
          ['Anglais parlé', 'Rarement', 'Oui'],
          ['Réservation', 'Non — entrée libre', 'Oui — réserver à l\'avance'],
          ['Authenticité', 'Très élevée', 'Adapté aux touristes'],
          ['Confort', 'Basique', 'Élevé'],
          ['Idéal pour', 'Voyageurs aventureux', 'Premiers visiteurs, couples'],
        ],
      },
    },
    {
      heading: 'Ce qui se passe dans un hammam marocain — étape par étape',
      paragraphs: [
        'Connaître le déroulement supprime toute anxiété. Voici exactement ce qui se passe lors d\'une visite traditionnelle au hammam marocain.',
      ],
      table: {
        caption: 'L\'expérience hammam marocain étape par étape',
        headers: ['Étape', 'Ce qui se passe', 'Durée'],
        rows: [
          ['1. Entrée & vestiaire', 'Laisser les chaussures à l\'entrée, se déshabiller jusqu\'aux sous-vêtements', '5 min'],
          ['2. Salle tiède', 'S\'asseoir dans la salle tiède pour ouvrir les pores et commencer à transpirer', '10–15 min'],
          ['3. Salle chaude', 'Passer dans la salle chaude — c\'est là que se déroule le traitement principal', '20–30 min'],
          ['4. Savon beldi', 'L\'attendant (ou soi-même) applique le savon noir (savon beldi) sur tout le corps', '5 min'],
          ['5. Gommage kessa', 'Le gant rugueux retire les cellules mortes — des rouleaux de peau grise apparaissent', '10–15 min'],
          ['6. Rinçage', 'Des seaux d\'eau chaude sont versés sur le corps pour rincer savon et peau', '5 min'],
          ['7. Masque ghassoul (opt.)', 'Argile marocaine appliquée sur cheveux et peau, laissée 5 min, rincée', '10 min'],
          ['8. Refroidissement', 'Retour en salle tiède, thé à la menthe, détente', '10–15 min'],
          ['9. Hydratation (opt.)', 'Massage à l\'huile d\'argan — disponible dans les hammams touristiques', '15–20 min'],
        ],
      },
    },
    {
      heading: 'Prix des hammams au Maroc en 2026',
      paragraphs: [
        'Les prix varient énormément entre les hammams publics de quartier et les hammams spa orientés touristes. Voici les vrais prix 2026 dans les principales villes.',
      ],
      table: {
        caption: 'Prix des hammams par ville et type — Maroc 2026',
        headers: ['Ville & type', 'Entrée', 'Gommage kessa', 'Ghassoul', 'Forfait complet'],
        rows: [
          ['Marrakech — beldi public', '15–25 MAD', '20–30 MAD', '5–10 MAD', '40–65 MAD total'],
          ['Marrakech — touristique/riad', '150–300 MAD', 'Inclus', 'Inclus', '150–350 MAD'],
          ['Marrakech — spa luxe', '300–600 MAD', 'Inclus', 'Inclus', '400–800 MAD'],
          ['Fès — beldi public', '10–20 MAD', '15–25 MAD', '5 MAD', '30–50 MAD total'],
          ['Fès — hammam riad', '120–250 MAD', 'Inclus', 'Inclus', '120–300 MAD'],
          ['Chefchaouen — public', '10–15 MAD', '15–20 MAD', '5 MAD', '30–40 MAD total'],
          ['Essaouira — beldi public', '10–20 MAD', '20 MAD', '5 MAD', '35–45 MAD total'],
          ['Casablanca — public', '15–25 MAD', '20–30 MAD', '5–10 MAD', '40–65 MAD total'],
        ],
      },
      callout: {
        label: '💡 Meilleur rapport qualité-prix',
        body: 'Le meilleur rapport qualité-prix au Maroc : un hammam beldi public (15–25 MAD l\'entrée) avec un gommage kessa par l\'attendant (20–30 MAD). Coût total : moins de 60 MAD (5,50€) pour une expérience hammam marocain traditionnel complète. Apportez vos tongs, une serviette et des sous-vêtements de rechange.',
      },
    },
    {
      heading: 'Étiquette au hammam — ce qu\'il faut savoir avant d\'y aller',
      paragraphs: [
        'Les hammams publics ont des règles non écrites que les locaux suivent instinctivement. Les connaître fait de vous un visiteur respectueux.',
        'Tenue : les hommes portent sous-vêtements ou short de bain tout au long ; les femmes portent sous-vêtements bas (soutien-gorge optionnel dans les sessions femmes). La nudité intégrale n\'est pas la norme dans les hammams publics marocains. Dans les hammams de riad, on vous remet souvent un bas de bikini jetable.',
        'Le silence n\'est pas requis mais une conversation bruyante est inhabituelle dans la salle chaude. Les téléphones ne sont pas utilisés à l\'intérieur. Donner un pourboire à l\'attendant (kessala ou tayeb) 10–20 MAD pour le gommage est la norme.',
      ],
      table: {
        caption: 'Étiquette au hammam — à faire et à ne pas faire',
        headers: ['À faire', 'À ne pas faire'],
        rows: [
          ['Apporter des tongs (sols mouillés)', 'Porter des chaussures de ville à l\'intérieur'],
          ['Apporter serviette et sous-vêts de rechange', 'S\'attendre à des serviettes dans un hammam public'],
          ['Donner 10–20 MAD de pourboire', 'Partir sans pourboire après un gommage'],
          ['Boire de l\'eau avant et après', 'Rester trop longtemps si vous vous sentez étourdi'],
          ['Demander avant de photographier', 'Prendre des photos à l\'intérieur'],
          ['Manger léger avant', 'Y aller le ventre plein'],
        ],
      },
    },
    {
      heading: 'Meilleurs hammams touristiques à Marrakech 2026',
      paragraphs: [
        'Pour les premiers visiteurs qui souhaitent une introduction confortable à l\'expérience hammam, ces hammams orientés touristes à Marrakech sont régulièrement recommandés.',
        'Hammam de la Rose — situé dans la médina, salles privées disponibles, forfait complet à partir de 200 MAD kessa et ghassoul inclus. Personnel anglophone. Réservez 24h à l\'avance. Adresse : 130 Arset El Maach, Médina.',
        'Les Bains de Marrakech — le hammam touristique le plus célèbre de Marrakech, magnifiquement aménagé, forfaits à partir de 350 MAD. Massage à l\'huile d\'argan en option (250 MAD en plus). Adresse : 2 Derb Sedra, Bab Agnaou. Réservez au moins 2 jours à l\'avance en haute saison.',
        'Hammam Dar el-Bacha — le plus grand hammam public de Marrakech, récemment restauré dans son splendeur des années 1920. Entrée 50 MAD, kessa 30 MAD. Hommes uniquement certains jours — vérifiez le programme. Adresse : 20 Rue Fatima Zohra, près du Palais Dar el-Bacha.',
      ],
    },
    {
      heading: 'Meilleurs hammams publics à Fès 2026',
      paragraphs: [
        'Fès possède des dizaines de hammams de quartier dans la médina. Les plus accessibles aux touristes :',
        'Hammam Sidi Azzouz — l\'un des plus anciens hammams en activité de Fès el-Bali, près de Bab Boujloud. Entrée 12 MAD, kessa 20 MAD. Demandez à votre riad les horaires exacts (femmes généralement 6h–12h, hommes 12h–22h).',
        'Hammam R\'cif — près de la place R\'cif dans la médina. Tarif local (10–15 MAD l\'entrée), très authentique, pas d\'anglais. Apportez vos fournitures ou achetez le savon ghassoul à l\'entrée pour 5 MAD.',
      ],
    },
    {
      heading: 'Que mettre dans son sac pour un hammam marocain',
      paragraphs: [
        'Avoir le bon équipement fait la différence entre une expérience agréable et une expérience embarrassante.',
      ],
      table: {
        caption: 'Liste de ce qu\'il faut apporter au hammam marocain',
        headers: ['Article', 'Hammam public', 'Hammam touristique', 'Notes'],
        rows: [
          ['Tongs / sandales', '✅ Indispensable', '✅ Recommandé', 'Sols mouillés partout'],
          ['Serviettes (x2)', '✅ Indispensable', '⚠️ Souvent fournie', 'Une pour le corps, une pour les cheveux'],
          ['Sous-vêtements de rechange', '✅ Indispensable', '✅ Indispensable', 'Vous serez trempé de sueur'],
          ['Savon beldi (savon noir)', '✅ Acheter à l\'entrée', '❌ Fourni', '5–10 MAD à tout hammam'],
          ['Gant kessa', '✅ Acheter aux souks', '❌ Fourni', '10–15 MAD dans les souks'],
          ['Petit sac pour objets de valeur', '✅ Indispensable', '✅ Indispensable', 'Laissez bijoux au riad'],
          ['Bouteille d\'eau', '✅ Recommandé', '✅ Recommandé', 'Déshydratation facile'],
          ['Espèces (petites coupures)', '✅ Indispensable', '✅ Indispensable', 'Pour pourboires et paiement'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Combien coûte un hammam au Maroc en 2026 ?',
      answer: 'Un hammam de quartier coûte 15–40 MAD (1,40–3,70€) l\'entrée plus 20–30 MAD pour un gommage kessa — total environ 40–65 MAD (3,70–6€). Les hammams touristiques et de riad coûtent 150–600 MAD (14–55€) pour un forfait complet.',
    },
    {
      question: 'Que porte-t-on dans un hammam marocain ?',
      answer: 'Dans un hammam public : sous-vêtements ou short de bain tout au long. La nudité intégrale n\'est pas la norme. Dans les hammams touristiques, on vous remet souvent un bas de bikini jetable. Apportez toujours des tongs — les sols sont en permanence mouillés.',
    },
    {
      question: 'Les hammams au Maroc sont-ils mixtes ?',
      answer: 'Non — les hammams publics sont strictement séparés par sexe, soit par salles distinctes soit par créneaux horaires (femmes le matin, hommes l\'après-midi dans la plupart des hammams traditionnels). Les hammams de riad et d\'hôtel sont généralement des salles privées réservées à l\'heure, adaptées aux couples.',
    },
    {
      question: 'Faut-il réserver un hammam à l\'avance au Maroc ?',
      answer: 'Les hammams publics sont sans réservation — entrée libre. Les hammams touristiques et de riad nécessitent une réservation 24–48h à l\'avance, surtout à Marrakech en haute saison (mars–mai, octobre–novembre).',
    },
    {
      question: 'Qu\'est-ce que le ghassoul et pourquoi l\'utilise-t-on au hammam ?',
      answer: 'Le ghassoul est une argile minérale marocaine naturelle extraite des montagnes de l\'Atlas. Utilisé depuis des siècles comme savon, masque capillaire et conditionneur, il élimine les impuretés, adoucit la peau et laisse les cheveux naturellement brillants sans éliminer les huiles naturelles.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Un hammam marocain est-il sûr pour les touristes ?', answer: 'Oui — les hammams sont très sûrs. L\'essentiel est de surveiller la chaleur : faites des pauses si vous vous sentez étourdi et buvez de l\'eau avant et après. Les objets de valeur peuvent être laissés à la réception dans les hammams touristiques.' },
    { question: 'Qu\'est-ce qu\'une kessa au hammam ?', answer: 'Une kessa est un gant exfoliant rugueux utilisé pour frotter les cellules mortes du corps pendant un hammam. Utilisée correctement après la vapeur, elle retire des rouleaux de peau grise morte — dramatique et profondément satisfaisant. Disponible dans tout souk marocain pour 10–15 MAD.' },
    { question: 'Puis-je aller au hammam seul au Maroc ?', answer: 'Oui — les visiteurs solo sont courants dans les hammams publics et touristiques. Dans les hammams touristiques, l\'attendant vous guide à chaque étape. Dans les hammams publics, observez ce que font les autres et suivez.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira'],
  relatedPosts: ['conseils-premier-voyage-au-maroc', 'itineraire-maroc-2-semaines-premier-voyage', 'que-faire-au-maroc-7-jours'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل الحمّام المغربي للسياح 2026 — أسعار ونصائح وآداب',
  metaDescription: 'كل ما يحتاج السياح معرفته عن الحمّام المغربي: أسعار 2026 الحقيقية، ما الذي تتوقعه، الآداب، أفضل الحمّامات في مراكش وفاس، وكيفية الحجز.',
  title: 'دليل الحمّام المغربي للسياح: أسعار وآداب وأفضل الأماكن (2026)',
  description: 'الدليل الشامل للحمّام المغربي للسياح 2026: ما يحدث بالداخل وأسعار حقيقية وقواعد اللباس والآداب وأفضل الحمّامات في مراكش وفاس وشفشاون.',
  keyword: 'دليل الحمّام المغربي للسياح',
  coverImage: COVER,
  coverAlt: 'داخل حمّام مغربي تقليدي مع البخار والجدران المبلطة',
  publishedISO: '2026-06-03',
  author: 'فريق MoroccoForYou',
  readingMinutes: 11,
  intro: 'الحمّام المغربي ليس منتجع صحي — إنه طقس اجتماعي عمره ألف عام، وتقليد أسبوعي للتطهير، وواحدة من أكثر التجارب لا تُنسى لأي زائر في المغرب. عند تجربته بالشكل الصحيح، تُغادر الحمّام بعد ساعة تشعر بنظافة لم تمنحك إياها أي دشّة من قبل، وبشرة تتوهج حقاً. هذا الدليل يخبرك بالضبط بما تتوقعه، وما يكلفه، وأي الحمّامات تستحق وقتك في 2026.',
  sections: [
    {
      heading: 'ما هو الحمّام المغربي؟',
      paragraphs: [
        'الحمّام حمّام بخاري تقليدي منتشر في العالم الإسلامي. في المغرب، كل حي يملك على الأقل حمّاماً عاماً واحداً — دار استحمام مجتمعية تعمل منذ قرون كمكان للتطهير والتواصل الاجتماعي والاسترخاء. معظم الأسر المغربية تزور الحمّام مرة أو مرتين أسبوعياً.',
        'تشمل التجربة عادةً ثلاث غرف بدرجات حرارة مختلفة: غرفة باردة لتغيير الملابس، وغرفة دافئة، وغرفة ساخنة حيث يجري معظم الغسيل والتقشير. العلاج المميز هو الكيسة (تقشير بقفاز خشن) والغاسول (طين الصابون المغربي)، الذي يزيل الخلايا الميتة بطريقة يجب تجربتها لتُصدَّق.',
      ],
      callout: {
        label: '🇲🇦 نصيحة محلية',
        body: 'أفضل تجربة حمّام في المغرب ليست في منتجع سياحي — بل في حمّام عام في الحي (حمّام بلدي) حيث يذهب السكان المحليون. اسأل صاحب الرياض أن يوصيك بأقرب واحد واذهب في نفس أوقات المحليين (الصباح للنساء، بعد الظهر للرجال في معظم الحمّامات التقليدية). ستدفع 15–30 درهم بدلاً من 150–500 درهم، والتجربة أصيلة تماماً.',
      },
    },
    {
      heading: 'الحمّام العام مقابل الحمّام السياحي — ما الفرق؟',
      paragraphs: [
        'المغرب يقدم نوعين مختلفين تماماً من تجربة الحمّام. فهم أيهما تريد هو القرار الأول الذي تتخذه.',
      ],
      table: {
        caption: 'الحمّام العام مقابل الحمّام السياحي — مقارنة شاملة 2026',
        headers: ['الميزة', 'الحمّام العام (بلدي)', 'الحمّام السياحي/الرياض'],
        rows: [
          ['السعر', '15–40 درهم (1.40–3.70€)', '150–600 درهم (14–55€)'],
          ['التقشير (كيسة)', '20–30 درهم إضافية', 'مشمول عادةً'],
          ['الغاسول', '5–10 دراهم', 'مشمول'],
          ['غرفة خاصة', 'لا — مساحة مشتركة', 'غالباً غرفة خاصة'],
          ['اللغة الإنجليزية', 'نادراً', 'نعم'],
          ['حجز مسبق', 'لا — دخول مباشر', 'نعم — احجز مسبقاً'],
          ['الأصالة', 'عالية جداً', 'مُكيَّف للسياحة'],
          ['مستوى الراحة', 'أساسي', 'مرتفع'],
          ['الأنسب لـ', 'المسافرين المغامرين', 'الزوار لأول مرة، الأزواج'],
        ],
      },
    },
    {
      heading: 'ما الذي يحدث داخل الحمّام المغربي — خطوة بخطوة',
      paragraphs: [
        'معرفة التسلسل يزيل كل قلق. إليك بالضبط ما يحدث في زيارة الحمّام المغربي التقليدية.',
      ],
      table: {
        caption: 'تجربة الحمّام المغربي خطوة بخطوة',
        headers: ['الخطوة', 'ما يحدث', 'المدة'],
        rows: [
          ['1. الدخول والخلع', 'ترك الأحذية عند الباب، خلع الملابس حتى الملابس الداخلية', '5 دقائق'],
          ['2. الغرفة الدافئة', 'الجلوس في الغرفة الدافئة لفتح المسام والبدء في التعرق', '10–15 دقيقة'],
          ['3. الغرفة الساخنة', 'الانتقال للغرفة الساخنة — هنا يجري العلاج الرئيسي', '20–30 دقيقة'],
          ['4. الصابون البلدي', 'يطبق المعالج (أو أنت) الصابون الأسود على الجسم كله', '5 دقائق'],
          ['5. تقشير الكيسة', 'القفاز الخشن يزيل الخلايا الميتة — كميات مذهلة من الجلد الرمادي', '10–15 دقيقة'],
          ['6. الشطف', 'سكب دلاء من الماء الدافئ على الجسم لإزالة الصابون والجلد', '5 دقائق'],
          ['7. قناع الغاسول (اختياري)', 'طين مغربي يُطبَّق على الشعر والبشرة، يُترك 5 دقائق ثم يُشطف', '10 دقائق'],
          ['8. التبريد', 'العودة للغرفة الدافئة، شرب الشاي بالنعناع، الاسترخاء', '10–15 دقيقة'],
          ['9. ترطيب (اختياري)', 'تدليك بزيت الأركان — في الحمّامات السياحية', '15–20 دقيقة'],
        ],
      },
    },
    {
      heading: 'أسعار الحمّامات في المغرب 2026',
      paragraphs: [
        'تتباين الأسعار بشكل كبير بين الحمّامات العامة في الأحياء والحمّامات السياحية المتخصصة. إليك الأسعار الحقيقية لعام 2026 في المدن الرئيسية.',
      ],
      table: {
        caption: 'أسعار الحمّامات حسب المدينة والنوع — المغرب 2026',
        headers: ['المدينة والنوع', 'الدخول', 'تقشير الكيسة', 'الغاسول', 'الباقة الكاملة'],
        rows: [
          ['مراكش — بلدي عام', '15–25 درهم', '20–30 درهم', '5–10 دراهم', '40–65 درهم'],
          ['مراكش — سياحي/رياض', '150–300 درهم', 'مشمول', 'مشمول', '150–350 درهم'],
          ['مراكش — سبا فاخر', '300–600 درهم', 'مشمول', 'مشمول', '400–800 درهم'],
          ['فاس — بلدي عام', '10–20 درهم', '15–25 درهم', '5 دراهم', '30–50 درهم'],
          ['فاس — حمّام رياض', '120–250 درهم', 'مشمول', 'مشمول', '120–300 درهم'],
          ['شفشاون — عام', '10–15 درهم', '15–20 درهم', '5 دراهم', '30–40 درهم'],
          ['الصويرة — بلدي عام', '10–20 درهم', '20 درهم', '5 دراهم', '35–45 درهم'],
          ['الدار البيضاء — عام', '15–25 درهم', '20–30 درهم', '5–10 دراهم', '40–65 درهم'],
        ],
      },
      callout: {
        label: '💡 أفضل قيمة مقابل المال',
        body: 'أفضل قيمة للحمّام في المغرب: حمّام بلدي عام (15–25 درهم دخول) مع تقشير كيسة من المعالج (20–30 درهم). التكلفة الإجمالية: أقل من 60 درهم (5.50€) لتجربة حمّام مغربي تقليدي كاملة. أحضر نعالك وفوطتك وملابس داخلية احتياطية.',
      },
    },
    {
      heading: 'آداب الحمّام — ما يجب معرفته قبل الذهاب',
      paragraphs: [
        'للحمّامات العامة قواعد غير مكتوبة يتبعها المحليون تلقائياً. معرفتها تجعلك زائراً محترماً.',
        'اللباس: الرجال يرتدون ملابس داخلية أو شورت سباحة طوال الوقت؛ النساء يرتدين أسفل ملابس داخلية. العري الكامل ليس المعيار في الحمّامات العامة المغربية. في حمّامات الرياض، قد يُقدَّم لك شورت بيكيني للاستخدام مرة واحدة.',
        'الهدوء غير مطلوب لكن المحادثة الصاخبة غير معتادة في الغرفة الساخنة. الهواتف لا تُستخدم بالداخل. إعطاء الكيّاس 10–20 درهم بقشيشاً معيار ومُقدَّر.',
      ],
      table: {
        caption: 'آداب الحمّام — ما يجب وما لا يجب',
        headers: ['افعل', 'لا تفعل'],
        rows: [
          ['أحضر نعالاً (الأرضيات مبللة)', 'ارتداء الأحذية الخارجية بالداخل'],
          ['أحضر فوطة وملابس داخلية بديلة', 'تتوقع توفير فوط في الحمّام العام'],
          ['أعطِ 10–20 درهم بقشيشاً', 'تغادر بدون بقشيش بعد التقشير'],
          ['اشرب ماء قبل وبعد', 'تبقى طويلاً إن شعرت بدوخة'],
          ['اسأل قبل التصوير', 'تلتقط صوراً بالداخل'],
          ['تناول وجبة خفيفة قبل', 'تذهب بمعدة ممتلئة'],
        ],
      },
    },
    {
      heading: 'أفضل الحمّامات السياحية في مراكش 2026',
      paragraphs: [
        'للزوار لأول مرة الراغبين في مقدمة مريحة لتجربة الحمّام، هذه الحمّامات الموجهة للسياح في مراكش موصى بها باستمرار.',
        'حمّام دو لا روز — داخل المدينة العتيقة، غرف خاصة متاحة، باقة كاملة من 200 درهم تشمل الكيسة والغاسول. طاقم يتحدث الإنجليزية. احجز قبل 24 ساعة. العنوان: 130 أرصت الماش، المدينة العتيقة.',
        'ليه بان دو ماراكش — أشهر حمّام سياحي في مراكش، تصميم رائع، باقات من 350 درهم. تدليك بزيت الأركان كإضافة (250 درهم إضافية). العنوان: 2 درب صدرة، باب أكناو. احجز قبل يومين على الأقل في الموسم العالي.',
        'حمّام دار الباشا — أكبر حمّام عام في مراكش، رُمِّم حديثاً لروعة عشرينيات القرن الماضي. دخول 50 درهم، كيسة 30 درهم. للرجال فقط في أيام معينة. العنوان: 20 شارع فاطمة الزهراء، قرب قصر دار الباشا.',
      ],
    },
    {
      heading: 'أفضل الحمّامات العامة في فاس 2026',
      paragraphs: [
        'فاس تملك عشرات الحمّامات في الأحياء داخل المدينة العتيقة. الأكثر سهولة للسياح:',
        'حمّام سيدي عزوز — من أقدم الحمّامات العاملة في فاس البالي، قرب باب بوجلود. دخول 12 درهم، كيسة 20 درهم. اسأل رياضك عن المواعيد الدقيقة (النساء عادةً 6 صباحاً–12 ظهراً، الرجال 12 ظهراً–10 مساءً).',
        'حمّام الرصيف — قرب ساحة الرصيف داخل المدينة العتيقة. أسعار محلية (10–15 درهم دخول)، أصيل جداً، لا إنجليزية. أحضر مستلزماتك أو اشترِ صابون الغاسول عند المدخل بـ5 دراهم.',
      ],
    },
    {
      heading: 'ما الذي تضعه في حقيبتك للحمّام المغربي',
      paragraphs: [
        'امتلاك الأدوات الصحيحة يصنع الفرق بين تجربة سلسة ممتعة وتجربة محرجة.',
      ],
      table: {
        caption: 'قائمة ما تحضره للحمّام المغربي',
        headers: ['العنصر', 'الحمّام العام', 'الحمّام السياحي', 'ملاحظات'],
        rows: [
          ['نعال / صنادل', '✅ أساسي', '✅ موصى به', 'أرضيات مبللة في كل مكان'],
          ['فوط (×2)', '✅ أساسي', '⚠️ غالباً متوفرة', 'واحدة للجسم وواحدة للشعر'],
          ['ملابس داخلية بديلة', '✅ أساسي', '✅ أساسي', 'ستكون مبللاً بالعرق'],
          ['صابون بلدي (أسود)', '✅ اشترِ عند المدخل', '❌ متوفر', '5–10 دراهم في أي حمّام'],
          ['قفاز الكيسة', '✅ اشترِ من الأسواق', '❌ متوفر', '10–15 درهم في أسواق مراكش'],
          ['حقيبة صغيرة للقيّمات', '✅ أساسي', '✅ أساسي', 'اترك المجوهرات في الرياض'],
          ['زجاجة ماء', '✅ موصى به', '✅ موصى به', 'الجفاف سهل في الغرفة الساخنة'],
          ['نقود (فئات صغيرة)', '✅ أساسي', '✅ أساسي', 'للبقشيش والدفع'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'كم يكلف الحمّام في المغرب في 2026؟',
      answer: 'الحمّام العام في الحي يكلف 15–40 درهم (1.40–3.70€) للدخول زائد 20–30 درهم لتقشير الكيسة — المجموع حوالي 40–65 درهم (3.70–6€). الحمّامات السياحية وحمّامات الرياض تكلف 150–600 درهم (14–55€) للباقة الكاملة.',
    },
    {
      question: 'ماذا يُرتدى في الحمّام المغربي؟',
      answer: 'في الحمّام العام: ملابس داخلية أو شورت سباحة طوال الوقت. العري الكامل ليس المعيار. في الحمّامات السياحية، قد يُقدَّم لك شورت للاستخدام مرة واحدة. أحضر دائماً نعالاً — الأرضيات مبللة باستمرار.',
    },
    {
      question: 'هل الحمّامات في المغرب مختلطة؟',
      answer: 'لا — الحمّامات العامة مفصولة تماماً بين الجنسين، إما بغرف منفصلة أو بأوقات مختلفة (نساء في الصباح، رجال بعد الظهر في معظم الحمّامات التقليدية). حمّامات الرياض والفنادق عادةً غرف خاصة تُحجز بالساعة، مناسبة للأزواج.',
    },
    {
      question: 'هل يجب حجز الحمّام مسبقاً في المغرب؟',
      answer: 'الحمّامات العامة بدون حجز — دخول مباشر. الحمّامات السياحية وحمّامات الرياض تتطلب حجزاً قبل 24–48 ساعة، خاصةً في مراكش خلال الموسم العالي (مارس–مايو، أكتوبر–نوفمبر).',
    },
    {
      question: 'ما هو الغاسول ولماذا يُستخدم في الحمّام؟',
      answer: 'الغاسول معدن طيني مغربي طبيعي يُستخرج من جبال الأطلس. مُستخدَم منذ قرون كصابون وقناع للشعر ومكيّف للبشرة. يُزيل الشوائب ويُلطّف البشرة ويُبقي الشعر لامعاً طبيعياً دون إزالة الزيوت الطبيعية.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'هل الحمّام المغربي آمن للسياح؟', answer: 'نعم — الحمّامات آمنة جداً. الشيء الأساسي مراقبة الحرارة: خذ استراحات إن شعرت بدوخة واشرب ماءً قبل وبعد. يمكن ترك القيّمات عند الاستقبال في الحمّامات السياحية.' },
    { question: 'ما هي الكيسة في الحمّام؟', answer: 'الكيسة قفاز تقشير خشن يُستخدم لدعك الخلايا الميتة من الجسم أثناء الحمّام. عند الاستخدام الصحيح بعد البخار، يُزيل لفّات من الجلد الرمادي الميت — مثير ومُرضٍ عميقاً. متوفر في أي سوق مغربي بـ10–15 درهم.' },
    { question: 'هل أستطيع الذهاب للحمّام وحدي في المغرب؟', answer: 'نعم — الزوار المنفردون شائعون في الحمّامات العامة والسياحية. في الحمّامات السياحية، يرشدك المعالج في كل خطوة. في الحمّامات العامة، راقب ما يفعله الآخرون واتبع.' },
  ],
  relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira'],
  relatedPosts: ['nasaeh-li-ziyarat-al-maghrib-li-awwal-marra', 'khattat-rihlat-al-maghrib-usbuan', 'ma-tafal-fi-al-maghrib-7-ayam'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);