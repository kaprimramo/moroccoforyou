import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'dakhla-travel-guide';
const SLUG_FR = 'guide-voyage-dakhla';
const SLUG_AR = 'dalil-safar-dakhla';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(30143183);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Dakhla Travel Guide 2026 — Kitesurfing Paradise, White Dune & Real Prices',
  metaDescription: 'Complete Dakhla travel guide 2026: kitesurf lagoon spots (PK25, White Dune, Dragon Island), IKO schools, flight times, real prices, and honest advice on whether Dakhla is worth it if you do not kitesurf.',
  title: 'Dakhla Travel Guide 2026: Morocco\'s Kitesurfing Paradise on the Edge of the Sahara',
  description: 'Quick answer: Dakhla is a 40km desert peninsula 1,500 km south of Casablanca where a 25km flat-water lagoon meets the Atlantic, making it one of the world\'s top 3 kitesurf and wing-foil destinations with 300+ wind days a year. This guide covers real 2026 prices, the best lagoon spots (PK25 speed spot, White Dune, Dragon Island), flight options, and an honest answer on whether it\'s worth visiting if you don\'t kitesurf.',
  keyword: 'dakhla travel guide',
  coverImage: COVER,
  coverAlt: 'Dakhla travel guide 2026 — kitesurfer on the flat-water lagoon with the White Dune in the background',
  publishedISO: '2026-08-16',
  updatedISO: '2026-08-16',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 15,
  intro: 'Quick answer: Dakhla is a wind-blasted 40km peninsula on Morocco\'s deep-south Atlantic coast, 1,500 km south of Casablanca, where a sheltered 25km lagoon delivers flat water and steady 18-30 knot wind almost year-round — ranking it among the world\'s top 3 kitesurf and wing-foil destinations alongside spots like Tarifa and Cabarete. Beyond the lagoon: a "moving" White Dune, 3.5-billion-year-old living stromatolite pools, flamingo colonies, and some of the freshest oysters in Morocco. This guide covers exactly what makes Dakhla different from anywhere else in the country, real 2026 prices, the specific lagoon spots worth knowing, and an honest answer to whether it\'s worth the trip if kitesurfing isn\'t your thing.',
  sections: [
    {
      heading: 'Is Dakhla Worth Visiting? The Honest Answer',
      paragraphs: [
        'Direct answer: yes, if you kitesurf, wing-foil, or love raw empty nature — but Dakhla is genuinely built around wind sports, and travelers expecting a conventional beach holiday should look elsewhere first.',
        'Roughly 80% of Dakhla\'s tourism infrastructure exists to serve the lagoon\'s kite and wing-foil scene — IKO-certified schools at nearly every camp, gear rental shops, and accommodation clustered specifically around the wind. For travelers who don\'t ride, Agadir or Essaouira deliver a far more conventional beach experience with better nightlife, more restaurant variety, and an actual town to explore.',
        'What Dakhla offers that nowhere else in Morocco can match: near-guaranteed wind almost 365 days a year, a genuinely world-class flat-water lagoon, and a sense of remoteness — few tourists, raw desert-meets-ocean landscape, and one of the best fresh oyster and seafood scenes in the country.',
      ],
      callout: {
        label: '🇲🇦 Local Verdict',
        body: 'Come to Dakhla specifically for the wind, the lagoon, and the emptiness — not as a generic "Morocco beach stop." If you\'ve never kitesurfed, a 5-day beginner package (roughly €450-650) is genuinely one of the best places on earth to learn, thanks to shallow, forgiving flat water. If wind sports don\'t interest you at all, redirect to Agadir or Essaouira instead.',
      },
    },
    {
      heading: 'Dakhla Quick Facts 2026',
      paragraphs: ['Everything you need to know before you go.'],
      table: {
        caption: 'Dakhla essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Location', '40km peninsula, Dakhla-Oued Ed-Dahab region, deep southern Morocco'],
          ['Distance from Casablanca', '~1,500 km — 2-2.5 hour direct flight, or ~22 hours driving'],
          ['Lagoon length', '~25-45 km, sheltered from the open Atlantic — flat water almost year-round'],
          ['Wind', '300+ wind days/year, 15-35 knots, steady from spring through autumn'],
          ['Best season', 'April to October for peak wind; kitesurfing is possible year-round'],
          ['Recommended stay', '4-7 days minimum — most kite packages run 5+ days'],
          ['Airport', 'Dakhla Airport (VIL) — direct flights from Casablanca and Agadir, seasonal Paris/Madrid routes'],
          ['Global ranking', 'Widely considered one of the world\'s top 3 flat-water kite/wing destinations'],
          ['Car rental in Dakhla', 'From MAD 350/day (€32), Dacia Duster 4x4 recommended — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'The Lagoon — Where to Kite and Wing-Foil',
      paragraphs: [
        'Dakhla\'s lagoon isn\'t a single uniform spot — it has genuinely distinct zones suited to different skill levels and riding styles, and knowing which is which changes the whole trip.',
      ],
      table: {
        caption: 'Dakhla lagoon spots — complete guide 2026',
        headers: ['Spot', 'Character', 'Best for', 'Notes'],
        rows: [
          ['PK25 (Point Kilométrique 25)', 'Venturi-effect wind acceleration (+5-10 knots vs main lagoon), pancake-flat, often shin-deep', 'Speed runs, freestyle, kite foiling — intermediate to advanced', 'Epicenter of Dakhla\'s kite scene; has hosted speed kitesurfing world record attempts'],
          ['Main lagoon (near town/camps)', 'Flat, shallow (300m standing depth at low tide), most forgiving', 'Complete beginners, first-timers', 'Where nearly all IKO schools operate — safest learning environment'],
          ['White Dune (Dune Blanche)', 'Small ocean swells filtering through the lagoon entrance, rolling waves', 'Intermediate to advanced wave-riding', 'Downwinder from most camps (~3 hours) or by 4x4 — iconic, Instagram-famous backdrop'],
          ['Dragon Island (Île du Dragon)', 'Sandbank with a dragon-shaped silhouette', 'Boat trips, birdwatching, dolphin spotting', 'Not primarily a kite spot — scenic excursion, flamingos common'],
          ['Atlantic (ocean side)', 'Real ocean swells, wave riding, downwinders along the peninsula', 'Advanced riders only', 'Best waves September to May; strapless wave riding and hydrofoil sessions'],
        ],
      },
      callout: {
        label: '🏄 Beginner vs Advanced — Where You\'ll Actually Ride',
        body: 'If this is your first time on a kite or wing, you\'ll spend your week in the main lagoon near your camp — genuinely one of the best learning environments on earth thanks to the shallow, flat water. Advanced riders graduate to PK25 for speed and freestyle, or organize a downwinder to the White Dune. The Atlantic side and true wave riding are for experienced riders only.',
      },
    },
    {
      heading: 'Kite & Wing-Foil Schools and Prices',
      paragraphs: [
        'Nearly every camp on the lagoon runs an IKO-certified school (International Kiteboarding Organization — the global standard for instruction), so quality is consistently high across operators; the real differences come down to camp location, accommodation style, and package length.',
      ],
      table: {
        caption: 'Dakhla kitesurf/wing-foil pricing 2026',
        headers: ['Package', 'Price', 'Notes'],
        rows: [
          ['Beginner package (4h)', '~€200', 'Single introductory lesson — good for testing the sport'],
          ['5-day beginner-to-intermediate package', '€450-650', 'Standard package most first-timers book — includes gear'],
          ['Private lesson (2h)', 'From €120', 'Gear and transport included — good for those staying in town rather than a resort'],
          ['Coaching clinic (advanced)', 'From €1,500/day', 'Private coaching for competition-level riders'],
          ['Gear rental (independent)', 'From MAD 500/day (€46)', 'For certified riders who don\'t need lessons'],
        ],
      },
    },
    {
      heading: 'Beyond the Lagoon — What Else to Do in Dakhla',
      paragraphs: [
        'While the lagoon is the main draw, Dakhla\'s surrounding desert and coastline offer genuinely unique experiences found nowhere else in Morocco.',
      ],
      table: {
        caption: 'Best things to do in Dakhla beyond kitesurfing 2026',
        headers: ['Activity', 'Time needed', 'Price', 'Notes'],
        rows: [
          ['White Dune sunset visit', 'Half day', '~€30/person (shared 4x4)', 'Cross the lagoon at low tide — the dune "slides" into the water, classic photo spot'],
          ['Imlili stromatolite pools', '2-3 hours', 'Included in most excursions', 'Living 3.5-billion-year-old micro-organisms — the only such site in Morocco, a genuine geological pilgrimage'],
          ['Dragon Island boat trip', 'Half day', 'Varies by operator', 'Birdwatching, dolphin spotting, dramatic lagoon panoramas'],
          ['Sandboarding at Foum Labouir', '2-3 hours', 'Varies', '"The wave dune," about 1 hour south of town'],
          ['Whale and dolphin spotting', 'Half day', 'Varies', 'Best August to October in Dakhla Bay'],
          ['Khenifiss lagoon birdwatching', 'Half day (en route)', 'Free/self-guided', 'Flamingos and ospreys, on the road to Dakhla'],
          ['Oyster farm visit', '1-2 hours', 'Oysters MAD 5 each (€0.50)', 'Fresh Atlantic oysters at the port or at L\'Araignée Gourmande'],
        ],
      },
    },
    {
      heading: 'How to Get to Dakhla',
      paragraphs: [
        'Dakhla\'s remoteness is precisely what keeps it uncrowded — but it also means the journey requires real planning.',
      ],
      table: {
        caption: 'Getting to Dakhla — all options 2026',
        headers: ['Method', 'From', 'Time', 'Price'],
        rows: [
          ['Direct flight', 'Casablanca (CMN)', '~2-2.5 hours', 'From MAD 1,600 round trip (~€150)'],
          ['Direct flight', 'Agadir (AGA)', '~1.5-2 hours', 'Varies, often cheaper than from Casablanca'],
          ['Seasonal direct flight', 'Paris, Madrid', 'Varies', 'Seasonal — check availability by month'],
          ['Self-drive', 'Casablanca', '~22 hours (2-3 day trip)', 'For a genuine Atlantic coast road trip — not recommended as a rushed single push'],
        ],
      },
      callout: {
        label: '✈️ Flying Is the Practical Choice',
        body: 'Unless you specifically want an epic multi-day Atlantic coast drive through Agadir, Tan-Tan and Laâyoune, flying is the sensible option for most travelers — the 22-hour drive is a genuine expedition, not a shortcut. If you do drive, expect several military checkpoints south of Laâyoune; carry your passport at all times.',
      },
    },
    {
      heading: 'Where to Stay — Kite Camp vs Town',
      paragraphs: [
        'Most visitors choose a lagoon-side kite camp — bungalows or tents directly at the spot, with transfers to town organized on request (typically €10/person). Staying in Dakhla town itself means renting a car (from MAD 350/day) for the 25-30 minute drive to the lagoon each way.',
      ],
      table: {
        caption: 'Where to stay in Dakhla 2026',
        headers: ['Type', 'Vibe', 'Best for', 'Price range/night'],
        rows: [
          ['Kite camp (lagoon, shared bungalow)', 'Full board, on-site school, social', 'Kite/wing travelers, first-timers', '€70-130'],
          ['Kite camp (private/upgraded)', 'More privacy, still lagoon-side', 'Couples, comfort-focused riders', 'MAD 1,850-2,200 (~€169-200)'],
          ['Boutique hotel (adults-only)', 'Yoga, hammam, local seafood', 'Non-kiting travelers, relaxation-focused', 'From MAD 1,100 (~€100)'],
          ['Dakhla town', 'More independence, no transfers included', 'Longer stays, budget travelers with a car', 'Varies widely'],
        ],
      },
      callout: {
        label: '🏄 Local Tip',
        body: 'There is no real town nightlife in Dakhla — dinner at your camp is the social scene most evenings. Pack layers: temperatures can hit 18°C in winter and 25°C in summer, with genuinely cool nights year-round, and the peninsula is wind-blasted enough that long sleeves and a buff are essential daytime gear, not optional extras.',
      },
    },
    {
      heading: 'What to Eat in Dakhla',
      paragraphs: [
        'Dakhla\'s Atlantic position and oyster farms make seafood the clear highlight of its food scene.',
      ],
      table: {
        caption: 'What to eat in Dakhla 2026',
        headers: ['Dish/Experience', 'Where', 'Price', 'Notes'],
        rows: [
          ['Fresh oysters', 'Port, oyster farms, L\'Araignée Gourmande', 'MAD 5 each (€0.50)', 'Among the best value oysters anywhere — visit a farm directly for the freshest'],
          ['Grilled Atlantic prawns', 'Port restaurants', 'Varies', 'Gigantic prawns, grilled simply — a Dakhla specialty'],
          ['Camp dinners', 'Kite camps', 'Usually included in full-board packages', 'The primary social scene most evenings'],
        ],
      },
    },
    {
      heading: 'Rent a Car for Your Dakhla Trip',
      paragraphs: [
        'Whether you\'re staying in town and commuting to the lagoon, or want the freedom to reach Dragon Island, Foum Labouir, or the Khenifiss lagoon independently, a rental car adds real flexibility to a Dakhla trip.',
      ],
      callout: {
        label: '🚗 Book Your Dakhla Car Rental',
        body: 'We arrange rental cars for pickup in Dakhla or Casablanca Airport for travelers combining Dakhla with a wider Morocco trip. Dacia Duster 4x4 recommended for excursions beyond the paved lagoon road — from MAD 350/day (€32), unlimited mileage. See the full itinerary and hotel options on our <a href="/destinations/dakhla">Dakhla trip page</a>, or message us directly on WhatsApp: +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'Is Dakhla worth visiting if I don\'t kitesurf?',
      answer: 'Yes if you love wild, remote nature, fresh oysters, and genuine emptiness — but roughly 80% of Dakhla\'s tourism infrastructure is built around wind sports. For a conventional beach holiday, Agadir or Essaouira offer a more well-rounded experience with better nightlife and dining variety.',
    },
    {
      question: 'How do I get to Dakhla?',
      answer: 'The practical option is a direct flight from Casablanca (2-2.5 hours, from ~MAD 1,600 round trip) or Agadir (1.5-2 hours). Seasonal direct flights also run from Paris and Madrid. Driving from Casablanca takes approximately 22 hours and is a genuine multi-day expedition rather than a shortcut.',
    },
    {
      question: 'What is the best time to visit Dakhla for kitesurfing?',
      answer: 'April through October delivers the most consistent wind, but Dakhla is genuinely rideable year-round with 300+ wind days annually — a rarity among world kite destinations. Wave riding on the Atlantic side is best September to May.',
    },
    {
      question: 'How much does a kitesurfing trip to Dakhla cost?',
      answer: 'A typical 7-day trip runs MAD 8,000-15,000 (roughly €730-1,370) per person, including round-trip flights (from MAD 1,600), accommodation (from MAD 2,100), a 5-day gear/lesson package (€450-650), and food. Independent riders with their own gear can spend significantly less by skipping the lesson package.',
    },
    {
      question: 'Do I need a permit to visit Dakhla?',
      answer: 'No special permit is needed — standard Moroccan visa or visa-exempt entry covers Dakhla. There are military checkpoints south of Laâyoune, so carry your passport at all times, particularly if driving.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is Dakhla famous for?', answer: 'Dakhla is famous as one of the world\'s top flat-water kitesurfing and wing-foil destinations, thanks to a sheltered 25km lagoon with steady 15-35 knot wind on 300+ days a year. It\'s also known for the White Dune, ancient Imlili stromatolite pools, flamingo colonies, and exceptionally fresh Atlantic oysters.' },
    { question: 'How far is Dakhla from Casablanca?', answer: 'Approximately 1,500 km. The practical option is a direct flight (2-2.5 hours); driving takes around 22 hours and is typically split over 2-3 days as a coastal road trip through Agadir and Laâyoune.' },
    { question: 'Is Dakhla good for beginners at kitesurfing?', answer: 'Yes — Dakhla\'s main lagoon is widely considered one of the best places on earth to learn, thanks to shallow water (standing depth for 300m at low tide) and consistently flat, forgiving conditions. Nearly every camp runs an IKO-certified school with structured beginner packages.' },
  ],
  relatedDestinations: ['casablanca', 'agadir', 'essaouira'],
  relatedPosts: ['essaouira-travel-guide', 'agadir-travel-guide', 'casablanca-travel-guide', 'low-cost-flights-to-morocco-2026'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Dakhla 2026 — Paradis du Kitesurf, Dune Blanche et Vrais Prix',
  metaDescription: 'Guide complet Dakhla 2026 : spots kitesurf du lagon (PK25, Dune Blanche, Île du Dragon), écoles IKO, vols, vrais prix, et réponse honnête si Dakhla vaut le détour sans kitesurf.',
  title: 'Guide Voyage Dakhla 2026 : Le Paradis du Kitesurf Marocain aux Portes du Sahara',
  description: 'Réponse rapide : Dakhla est une péninsule désertique de 40km à 1 500 km au sud de Casablanca où un lagon d\'eau plate de 25km rencontre l\'Atlantique, en faisant l\'une des 3 meilleures destinations kitesurf/wing-foil au monde avec plus de 300 jours de vent par an.',
  keyword: 'guide voyage dakhla',
  coverImage: COVER,
  coverAlt: 'Guide voyage Dakhla 2026 — kitesurfeur sur le lagon d\'eau plate avec la Dune Blanche en arrière-plan',
  publishedISO: '2026-08-16',
  updatedISO: '2026-08-16',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 15,
  intro: 'Réponse rapide : Dakhla est une péninsule balayée par le vent de 40km sur la côte atlantique du grand sud marocain, à 1 500 km au sud de Casablanca, où un lagon abrité de 25km offre une eau plate et un vent constant de 18-30 nœuds presque toute l\'année — la classant parmi les 3 meilleures destinations kitesurf/wing-foil au monde, aux côtés de Tarifa et Cabarete. Au-delà du lagon : une Dune Blanche "mouvante", des bassins de stromatolites vivants vieux de 3,5 milliards d\'années, des colonies de flamants roses, et certaines des huîtres les plus fraîches du Maroc.',
  sections: [
    {
      heading: 'Dakhla Vaut-elle le Détour ? La Réponse Honnête',
      paragraphs: [
        'Réponse directe : oui, si vous pratiquez le kitesurf, le wing-foil, ou aimez la nature brute et vide — mais Dakhla est véritablement construite autour des sports de vent.',
        'Environ 80% de l\'infrastructure touristique de Dakhla existe pour servir la scène kite et wing-foil du lagon. Pour les voyageurs qui ne pratiquent pas, Agadir ou Essaouira offrent une expérience plage bien plus conventionnelle.',
        'Ce que Dakhla offre qu\'aucun autre endroit au Maroc ne peut égaler : un vent quasi-garanti presque 365 jours par an, un lagon d\'eau plate véritablement de classe mondiale, et un sentiment d\'éloignement.',
      ],
      callout: {
        label: '🇲🇦 Verdict Local',
        body: 'Venez à Dakhla spécifiquement pour le vent, le lagon et le vide — pas comme un "arrêt plage Maroc générique". Si vous n\'avez jamais fait de kitesurf, un forfait débutant 5 jours (environ 450-650€) est l\'un des meilleurs endroits au monde pour apprendre.',
      },
    },
    {
      heading: 'Dakhla en Chiffres — Infos Essentielles 2026',
      paragraphs: ['Tout ce qu\'il faut savoir avant de partir.'],
      table: {
        caption: 'Infos essentielles Dakhla 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Localisation', 'Péninsule de 40km, région Dakhla-Oued Ed-Dahab, grand sud marocain'],
          ['Distance depuis Casablanca', '~1 500 km — vol direct 2-2,5h, ou ~22h de route'],
          ['Longueur du lagon', '~25-45 km, abrité de l\'Atlantique — eau plate quasi toute l\'année'],
          ['Vent', '300+ jours de vent/an, 15-35 nœuds, constant du printemps à l\'automne'],
          ['Meilleure saison', 'Avril à octobre pour le vent maximal ; praticable toute l\'année'],
          ['Séjour recommandé', '4-7 jours minimum'],
          ['Aéroport', 'Aéroport de Dakhla (VIL) — vols directs Casablanca et Agadir, routes saisonnières Paris/Madrid'],
          ['Classement mondial', 'Largement considérée comme l\'une des 3 meilleures destinations kite/wing eau plate au monde'],
          ['Location voiture à Dakhla', 'Dès MAD 350/jour (32€), Dacia Duster 4x4 recommandé'],
        ],
      },
    },
    {
      heading: 'Le Lagon — Où Faire du Kite et du Wing-Foil',
      paragraphs: ['Le lagon de Dakhla n\'est pas un spot uniforme — il a des zones vraiment distinctes adaptées à différents niveaux.'],
      table: {
        caption: 'Spots du lagon de Dakhla — guide complet 2026',
        headers: ['Spot', 'Caractère', 'Idéal pour', 'Notes'],
        rows: [
          ['PK25 (Point Kilométrique 25)', 'Effet venturi accélérant le vent (+5-10 nœuds), plat comme une crêpe', 'Vitesse, freestyle, foil — intermédiaire à avancé', 'Épicentre de la scène kite de Dakhla ; a accueilli des tentatives de record du monde de vitesse'],
          ['Lagon principal (près ville/camps)', 'Plat, peu profond, le plus indulgent', 'Débutants complets', 'Où opèrent presque toutes les écoles IKO'],
          ['Dune Blanche', 'Petites houles océaniques filtrant par l\'entrée du lagon', 'Wave-riding intermédiaire à avancé', 'Downwinder depuis la plupart des camps (~3h) ou en 4x4'],
          ['Île du Dragon', 'Banc de sable en forme de dragon', 'Excursions bateau, observation oiseaux', 'Excursion scénique, flamants roses communs'],
          ['Atlantique (côté océan)', 'Vraies houles océaniques', 'Riders avancés uniquement', 'Meilleures vagues septembre à mai'],
        ],
      },
    },
    {
      heading: 'Écoles Kite & Wing-Foil et Prix',
      paragraphs: ['Presque chaque camp du lagon gère une école certifiée IKO.'],
      table: {
        caption: 'Tarifs kitesurf/wing-foil Dakhla 2026',
        headers: ['Forfait', 'Prix', 'Notes'],
        rows: [
          ['Forfait débutant (4h)', '~200€', 'Cours d\'introduction unique'],
          ['Forfait 5 jours débutant-intermédiaire', '450-650€', 'Forfait standard le plus réservé'],
          ['Cours privé (2h)', 'Dès 120€', 'Matériel et transport inclus'],
          ['Coaching avancé', 'Dès 1 500€/jour', 'Coaching privé niveau compétition'],
          ['Location matériel indépendant', 'Dès MAD 500/jour (46€)', 'Pour riders certifiés'],
        ],
      },
    },
    {
      heading: 'Au-delà du Lagon — Que Faire d\'Autre à Dakhla',
      paragraphs: ['Le désert et le littoral environnants offrent des expériences vraiment uniques.'],
      table: {
        caption: 'Meilleures activités à Dakhla au-delà du kitesurf 2026',
        headers: ['Activité', 'Temps', 'Prix', 'Notes'],
        rows: [
          ['Coucher de soleil Dune Blanche', 'Demi-journée', '~30€/personne', 'Traversée du lagon à marée basse'],
          ['Bassins de stromatolites d\'Imlili', '2-3 heures', 'Inclus dans excursions', 'Micro-organismes vivants de 3,5 milliards d\'années'],
          ['Excursion bateau Île du Dragon', 'Demi-journée', 'Variable', 'Observation oiseaux, dauphins'],
          ['Sandboard à Foum Labouir', '2-3 heures', 'Variable', '"La dune vague", 1h au sud'],
          ['Observation baleines/dauphins', 'Demi-journée', 'Variable', 'Meilleur août-octobre'],
          ['Visite ferme ostréicole', '1-2 heures', 'Huîtres MAD 5 pièce (0,50€)', 'Huîtres atlantiques fraîches'],
        ],
      },
    },
    {
      heading: 'Comment Rejoindre Dakhla',
      paragraphs: ['L\'éloignement de Dakhla est précisément ce qui la garde peu fréquentée.'],
      table: {
        caption: 'Rejoindre Dakhla — toutes options 2026',
        headers: ['Méthode', 'Depuis', 'Durée', 'Prix'],
        rows: [
          ['Vol direct', 'Casablanca (CMN)', '~2-2,5h', 'Dès MAD 1 600 aller-retour (~150€)'],
          ['Vol direct', 'Agadir (AGA)', '~1,5-2h', 'Variable, souvent moins cher'],
          ['Vol saisonnier', 'Paris, Madrid', 'Variable', 'Saisonnier'],
          ['Auto-conduite', 'Casablanca', '~22h (2-3 jours)', 'Pour un vrai road trip côte atlantique'],
        ],
      },
      callout: {
        label: '✈️ L\'Avion est le Choix Pratique',
        body: 'Sauf si vous voulez spécifiquement une conduite épique de plusieurs jours sur la côte atlantique, l\'avion est l\'option sensée. Si vous conduisez, attendez-vous à plusieurs points de contrôle militaires au sud de Laâyoune.',
      },
    },
    {
      heading: 'Où Dormir — Camp Kite vs Ville',
      paragraphs: ['La plupart des visiteurs choisissent un camp kite sur le lagon.'],
      table: {
        caption: 'Où dormir à Dakhla 2026',
        headers: ['Type', 'Ambiance', 'Idéal pour', 'Prix/nuit'],
        rows: [
          ['Camp kite (bungalow partagé)', 'Pension complète, école sur place', 'Voyageurs kite/wing', '70-130€'],
          ['Camp kite (privé)', 'Plus d\'intimité', 'Couples', 'MAD 1 850-2 200 (~169-200€)'],
          ['Hôtel boutique (adultes)', 'Yoga, hammam', 'Voyageurs non-kite', 'Dès MAD 1 100 (~100€)'],
        ],
      },
    },
    {
      heading: 'Que Manger à Dakhla',
      paragraphs: ['La position atlantique et les fermes ostréicoles font des fruits de mer le point fort culinaire.'],
      table: {
        caption: 'Que manger à Dakhla 2026',
        headers: ['Plat', 'Où', 'Prix', 'Notes'],
        rows: [
          ['Huîtres fraîches', 'Port, fermes ostréicoles', 'MAD 5 pièce (0,50€)', 'Parmi les meilleures huîtres au meilleur prix'],
          ['Crevettes atlantiques grillées', 'Restaurants du port', 'Variable', 'Spécialité de Dakhla'],
        ],
      },
    },
    {
      heading: 'Louez une Voiture pour Votre Voyage à Dakhla',
      paragraphs: ['Qu\'importe où vous logez, une voiture de location apporte une vraie flexibilité.'],
      callout: {
        label: '🚗 Réservez Votre Location Voiture Dakhla',
        body: 'Nous organisons des locations pour prise en charge à Dakhla ou à l\'aéroport de Casablanca. Dacia Duster 4x4 recommandé — dès MAD 350/jour (32€). Voir notre <a href="/destinations/dakhla">page voyage Dakhla</a>, ou WhatsApp : +212 634 276 534',
      },
    },
  ],
  faqs: [
    { question: 'Dakhla vaut-elle le détour sans kitesurf ?', answer: 'Oui si vous aimez la nature sauvage et les huîtres fraîches, mais 80% de l\'infrastructure touristique est construite autour des sports de vent. Pour une plage conventionnelle, Agadir ou Essaouira offrent plus de variété.' },
    { question: 'Comment rejoindre Dakhla ?', answer: 'Vol direct depuis Casablanca (2-2,5h, dès MAD 1 600 aller-retour) ou Agadir (1,5-2h). La conduite depuis Casablanca prend environ 22h.' },
    { question: 'Quelle est la meilleure période pour le kitesurf à Dakhla ?', answer: 'Avril à octobre pour le vent le plus constant, mais Dakhla est praticable toute l\'année avec 300+ jours de vent annuels.' },
    { question: 'Combien coûte un voyage kitesurf à Dakhla ?', answer: 'Un voyage type de 7 jours coûte MAD 8 000-15 000 (~730-1 370€) par personne, vols, hébergement et forfait cours inclus.' },
    { question: 'Faut-il un permis pour visiter Dakhla ?', answer: 'Aucun permis spécial n\'est requis — le visa marocain standard couvre Dakhla. Points de contrôle militaires au sud de Laâyoune.' },
  ],
  peopleAlsoAsk: [
    { question: 'Pour quoi Dakhla est-elle célèbre ?', answer: 'L\'une des meilleures destinations kitesurf/wing-foil eau plate au monde, grâce à un lagon abrité de 25km avec vent constant 300+ jours par an. Aussi célèbre pour la Dune Blanche et les stromatolites d\'Imlili.' },
    { question: 'Quelle distance entre Dakhla et Casablanca ?', answer: 'Environ 1 500 km. Vol direct 2-2,5h ; conduite environ 22h répartie sur 2-3 jours.' },
    { question: 'Dakhla convient-elle aux débutants en kitesurf ?', answer: 'Oui — le lagon principal est considéré comme l\'un des meilleurs endroits au monde pour apprendre grâce à l\'eau peu profonde et plate.' },
  ],
  relatedDestinations: ['casablanca', 'agadir', 'essaouira'],
  relatedPosts: ['guide-voyage-essaouira', 'guide-voyage-agadir', 'guide-voyage-casablanca', 'vols-low-cost-maroc-2026'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر للداخلة 2026 — جنة ركوب الأمواج الشراعية والكثيب الأبيض وأسعار حقيقية',
  metaDescription: 'دليل شامل للداخلة 2026: مواقع ركوب الأمواج بالبحيرة (PK25، الكثيب الأبيض، جزيرة التنين)، مدارس IKO، الرحلات، أسعار حقيقية، وإجابة صادقة هل تستحق الداخلة الزيارة بلا ركوب أمواج.',
  title: 'دليل السفر للداخلة 2026: جنة ركوب الأمواج الشراعية المغربية على أبواب الصحراء',
  description: 'إجابة سريعة: الداخلة شبه جزيرة صحراوية بطول 40 كم على بعد 1,500 كم جنوب الدار البيضاء، حيث تلتقي بحيرة مسطحة بطول 25 كم بالأطلسي، مما يجعلها من أفضل 3 وجهات ركوب أمواج شراعية بالعالم بأكثر من 300 يوم ريح سنوياً.',
  keyword: 'دليل السفر للداخلة',
  coverImage: COVER,
  coverAlt: 'دليل السفر للداخلة 2026 — راكب أمواج شراعي على البحيرة المسطحة مع الكثيب الأبيض بالخلفية',
  publishedISO: '2026-08-16',
  updatedISO: '2026-08-16',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 15,
  intro: 'إجابة سريعة: الداخلة شبه جزيرة تعصف بها الرياح بطول 40 كم على الساحل الأطلسي بأقصى جنوب المغرب، على بعد 1,500 كم جنوب الدار البيضاء، حيث توفر بحيرة محمية بطول 25 كم مياهاً مسطحة ورياحاً ثابتة 18-30 عقدة تقريباً طوال السنة — مصنفة من أفضل 3 وجهات ركوب أمواج شراعية بالعالم.',
  sections: [
    {
      heading: 'هل الداخلة تستحق الزيارة؟ الإجابة الصادقة',
      paragraphs: [
        'إجابة مباشرة: نعم إن كنت تمارس ركوب الأمواج الشراعية أو تحب الطبيعة البرية الفارغة — لكن الداخلة مبنية فعلاً حول رياضات الريح.',
        'حوالي 80% من البنية السياحية للداخلة موجودة لخدمة مشهد الكايت بالبحيرة. للمسافرين الذين لا يمارسون الرياضة، أكادير أو الصويرة تقدمان تجربة شاطئ تقليدية أكثر.',
        'ما تقدمه الداخلة ولا يضاهيها فيه مكان آخر بالمغرب: ريح شبه مضمونة طوال 365 يوماً تقريباً، بحيرة مياه مسطحة عالمية المستوى فعلاً، وشعور بالعزلة.',
      ],
      callout: {
        label: '🇲🇦 حكم محلي',
        body: 'تعال للداخلة تحديداً من أجل الريح والبحيرة والفراغ — لا كـ"محطة شاطئ مغربية عامة". إذا لم تركب أمواجاً شراعية من قبل، حزمة المبتدئين 5 أيام (حوالي 450-650€) من أفضل الأماكن بالعالم للتعلم.',
      },
    },
    {
      heading: 'الداخلة بالأرقام — المعلومات الأساسية 2026',
      paragraphs: ['كل ما تحتاج معرفته قبل الذهاب.'],
      table: {
        caption: 'المعلومات الأساسية عن الداخلة 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['الموقع', 'شبه جزيرة 40 كم، منطقة الداخلة-وادي الذهب'],
          ['المسافة من الدار البيضاء', '~1,500 كم — رحلة مباشرة 2-2.5 ساعة، أو ~22 ساعة قيادة'],
          ['طول البحيرة', '~25-45 كم، محمية من الأطلسي'],
          ['الريح', '+300 يوم ريح سنوياً، 15-35 عقدة'],
          ['أفضل موسم', 'أبريل حتى أكتوبر لذروة الريح'],
          ['الإقامة الموصى بها', '4-7 أيام على الأقل'],
          ['المطار', 'مطار الداخلة (VIL) — رحلات مباشرة من الدار البيضاء وأكادير'],
          ['التصنيف العالمي', 'من أفضل 3 وجهات كايت/وينغ مياه مسطحة بالعالم'],
          ['تأجير سيارة بالداخلة', 'من MAD 350/يوم (32€)، داشيا دوستر 4x4 موصى بها'],
        ],
      },
    },
    {
      heading: 'البحيرة — أين تمارس الكايت والوينغ فويل',
      paragraphs: ['بحيرة الداخلة ليست موقعاً موحداً — لديها مناطق مختلفة فعلاً تناسب مستويات مختلفة.'],
      table: {
        caption: 'مواقع بحيرة الداخلة — الدليل الكامل 2026',
        headers: ['الموقع', 'الطابع', 'الأنسب لـ', 'ملاحظات'],
        rows: [
          ['PK25', 'تأثير فينتوري يسرّع الريح (+5-10 عقدة)', 'السرعة، الفريستايل — متوسط لمتقدم', 'مركز مشهد الكايت بالداخلة'],
          ['البحيرة الرئيسية', 'مسطحة، ضحلة، الأكثر تسامحاً', 'المبتدئون الكاملون', 'حيث تعمل تقريباً كل مدارس IKO'],
          ['الكثيب الأبيض', 'أمواج محيطية صغيرة تتسرب من مدخل البحيرة', 'ركوب الأمواج متوسط-متقدم', 'داون ويندر من معظم المخيمات (~3 ساعات)'],
          ['جزيرة التنين', 'ضفة رملية بشكل تنين', 'رحلات قوارب، مراقبة طيور', 'رحلة منظرية، فلامنغو شائع'],
          ['الأطلسي (جانب المحيط)', 'أمواج محيطية حقيقية', 'الراكبون المتقدمون فقط', 'أفضل أمواج سبتمبر-مايو'],
        ],
      },
    },
    {
      heading: 'مدارس الكايت والوينغ فويل والأسعار',
      paragraphs: ['تقريباً كل مخيم بالبحيرة يدير مدرسة معتمدة IKO.'],
      table: {
        caption: 'أسعار ركوب الأمواج الشراعي/الوينغ بالداخلة 2026',
        headers: ['الباقة', 'السعر', 'ملاحظات'],
        rows: [
          ['باقة مبتدئين (4 ساعات)', '~200€', 'درس تمهيدي واحد'],
          ['باقة 5 أيام مبتدئ-متوسط', '450-650€', 'الباقة القياسية الأكثر حجزاً'],
          ['درس خاص (ساعتان)', 'من 120€', 'المعدات والنقل مشمولان'],
          ['تدريب متقدم', 'من 1,500€/يوم', 'تدريب خاص لمستوى المنافسات'],
        ],
      },
    },
    {
      heading: 'ما وراء البحيرة — ماذا تفعل أيضاً بالداخلة',
      paragraphs: ['الصحراء والساحل المحيطان يقدمان تجارب فريدة فعلاً.'],
      table: {
        caption: 'أفضل الأنشطة بالداخلة ما وراء ركوب الأمواج 2026',
        headers: ['النشاط', 'الوقت', 'السعر', 'ملاحظات'],
        rows: [
          ['زيارة الكثيب الأبيض عند الغروب', 'نصف يوم', '~30€/شخص', 'عبور البحيرة عند الجزر'],
          ['برك ستروماتوليت إمليلي', '2-3 ساعات', 'مشمولة بالرحلات', 'كائنات حية عمرها 3.5 مليار سنة'],
          ['رحلة قارب لجزيرة التنين', 'نصف يوم', 'متغير', 'مراقبة طيور، دلافين'],
          ['التزلج الرملي بفم البوير', '2-3 ساعات', 'متغير', 'ساعة جنوباً'],
          ['مراقبة الحيتان/الدلافين', 'نصف يوم', 'متغير', 'الأفضل أغسطس-أكتوبر'],
          ['زيارة مزرعة محار', '1-2 ساعة', 'محار MAD 5 للقطعة', 'محار أطلسي طازج'],
        ],
      },
    },
    {
      heading: 'كيف تصل إلى الداخلة',
      paragraphs: ['بُعد الداخلة هو بالضبط ما يبقيها غير مزدحمة.'],
      table: {
        caption: 'الوصول للداخلة — كل الخيارات 2026',
        headers: ['الطريقة', 'من', 'المدة', 'السعر'],
        rows: [
          ['رحلة مباشرة', 'الدار البيضاء (CMN)', '~2-2.5 ساعة', 'من MAD 1,600 ذهاباً وإياباً'],
          ['رحلة مباشرة', 'أكادير (AGA)', '~1.5-2 ساعة', 'متغير، غالباً أرخص'],
          ['رحلة موسمية', 'باريس، مدريد', 'متغير', 'موسمية'],
          ['القيادة الذاتية', 'الدار البيضاء', '~22 ساعة (2-3 أيام)', 'لرحلة برية حقيقية بالساحل الأطلسي'],
        ],
      },
      callout: {
        label: '✈️ الطيران هو الخيار العملي',
        body: 'ما لم ترد رحلة قيادة ملحمية على الساحل الأطلسي، الطيران هو الخيار المنطقي. إذا قدت، توقع نقاط تفتيش عسكرية جنوب العيون.',
      },
    },
    {
      heading: 'أين تقيم — مخيم كايت أم المدينة',
      paragraphs: ['معظم الزوار يختارون مخيم كايت بجانب البحيرة.'],
      table: {
        caption: 'أين تقيم بالداخلة 2026',
        headers: ['النوع', 'الأجواء', 'الأنسب لـ', 'السعر/ليلة'],
        rows: [
          ['مخيم كايت (كوخ مشترك)', 'إقامة كاملة، مدرسة موقعية', 'مسافرو الكايت', '70-130€'],
          ['مخيم كايت (خاص)', 'خصوصية أكثر', 'الأزواج', 'MAD 1,850-2,200'],
          ['فندق بوتيك (بالغون)', 'يوغا، حمام', 'مسافرون غير كايت', 'من MAD 1,100'],
        ],
      },
    },
    {
      heading: 'ماذا تأكل بالداخلة',
      paragraphs: ['الموقع الأطلسي ومزارع المحار تجعل المأكولات البحرية أبرز نقاط المطبخ.'],
      table: {
        caption: 'ماذا تأكل بالداخلة 2026',
        headers: ['الطبق', 'أين', 'السعر', 'ملاحظات'],
        rows: [
          ['محار طازج', 'الميناء، مزارع المحار', 'MAD 5 للقطعة', 'من أفضل المحار قيمة'],
          ['جمبري أطلسي مشوي', 'مطاعم الميناء', 'متغير', 'تخصص الداخلة'],
        ],
      },
    },
    {
      heading: 'استأجر سيارة لرحلتك للداخلة',
      paragraphs: ['أينما أقمت، سيارة إيجار تضيف مرونة حقيقية.'],
      callout: {
        label: '🚗 احجز تأجير سيارتك بالداخلة',
        body: 'نرتب تأجير سيارات للاستلام بالداخلة أو مطار الدار البيضاء. داشيا دوستر 4x4 موصى بها — من MAD 350/يوم (32€). راجع <a href="/destinations/dakhla">صفحة رحلة الداخلة</a>، أو واتساب: +212 634 276 534',
      },
    },
  ],
  faqs: [
    { question: 'هل الداخلة تستحق الزيارة بلا ركوب أمواج؟', answer: 'نعم إن أحببت الطبيعة البرية والمحار الطازج، لكن 80% من البنية السياحية مبنية حول رياضات الريح. لشاطئ تقليدي، أكادير أو الصويرة تقدمان تنوعاً أكثر.' },
    { question: 'كيف تصل للداخلة؟', answer: 'رحلة مباشرة من الدار البيضاء (2-2.5 ساعة، من MAD 1,600) أو أكادير (1.5-2 ساعة). القيادة من الدار البيضاء تستغرق حوالي 22 ساعة.' },
    { question: 'ما أفضل وقت لركوب الأمواج بالداخلة؟', answer: 'أبريل حتى أكتوبر لأثبت ريح، لكن الداخلة صالحة طوال السنة بـ300+ يوم ريح سنوياً.' },
    { question: 'كم تكلفة رحلة ركوب أمواج للداخلة؟', answer: 'رحلة نموذجية 7 أيام تكلف MAD 8,000-15,000 (~730-1,370€) للشخص.' },
    { question: 'هل يحتاج زيارة الداخلة تصريحاً؟', answer: 'لا تصريح خاص مطلوب — التأشيرة المغربية القياسية تغطي الداخلة. نقاط تفتيش عسكرية جنوب العيون.' },
  ],
  peopleAlsoAsk: [
    { question: 'بماذا تشتهر الداخلة؟', answer: 'من أفضل وجهات ركوب الأمواج الشراعية بالعالم، بفضل بحيرة محمية بطول 25 كم بريح ثابتة +300 يوم سنوياً. تشتهر أيضاً بالكثيب الأبيض وستروماتوليت إمليلي.' },
    { question: 'ما المسافة بين الداخلة والدار البيضاء؟', answer: 'حوالي 1,500 كم. رحلة مباشرة 2-2.5 ساعة؛ القيادة حوالي 22 ساعة.' },
    { question: 'هل الداخلة مناسبة للمبتدئين بركوب الأمواج؟', answer: 'نعم — البحيرة الرئيسية تُعد من أفضل الأماكن بالعالم للتعلم بفضل المياه الضحلة المسطحة.' },
  ],
  relatedDestinations: ['casablanca', 'agadir', 'essaouira'],
  relatedPosts: ['dalil-safar-essaouira', 'dalil-safar-agadir', 'dalil-safar-dar-al-bayda', 'rihlat-jawiya-rakhisa-ila-maghrib-2026'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);