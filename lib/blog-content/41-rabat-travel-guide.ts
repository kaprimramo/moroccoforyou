import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'rabat-travel-guide';
const SLUG_FR = 'guide-voyage-rabat';
const SLUG_AR = 'dalil-safar-ribat';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(3889929);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Rabat Travel Guide 2026 — Morocco\'s Underrated Capital: UNESCO Sites, Prices & Tips',
  metaDescription: 'Complete Rabat travel guide 2026: Kasbah des Oudayas, Hassan Tower, Chellah Necropolis, UNESCO status explained, Mohammed VI Tower, driving distances, real prices, and honest comparison with Casablanca and Marrakech.',
  title: 'Rabat Travel Guide 2026: Morocco\'s Capital Nobody Talks About — And Should',
  description: 'The complete Rabat guide written by a Casablanca-based team that drives clients through the capital regularly. Why Rabat is Morocco\'s calmest imperial city, the full 2012 UNESCO story, Chellah\'s storks and Roman ruins, the new Mohammed VI Tower, Rabat-Salé Airport car rental, and honest distances from every Moroccan city.',
  keyword: 'rabat travel guide',
  coverImage: COVER,
  coverAlt: 'Rabat travel guide 2026 — Hassan Tower and Kasbah des Oudayas overlooking the Bou Regreg River and Atlantic Ocean',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 17,
  intro: 'Rabat is the city most Morocco itineraries skip — and the one nearly every traveler who visits wishes they had given more time. As Morocco\'s political capital since 1912 and a UNESCO World Heritage Site since 2012, Rabat offers imperial monuments, a fortified 12th-century kasbah, Roman ruins inhabited by storks, and an Atlantic coastline — all without the tour-bus crowds of Marrakech or Fes. Our Casablanca-based team drives through Rabat constantly, often as the first or last stop of a Morocco road trip. This is the honest, practical guide we give clients — including exact prices, distances, and why the capital deserves more than a rushed half-day stop.',
  sections: [
    {
      heading: 'Is Rabat Worth Visiting? The Honest Answer',
      paragraphs: [
        'Rabat is consistently the most underrated stop on a Morocco itinerary, and the reason is almost entirely about pace, not substance. Where Marrakech overwhelms with sensory intensity and Fes demands navigational patience, Rabat is compact, walkable, and calm — a city where locals genuinely outnumber tourists and daily Moroccan life continues undisturbed around the monuments.',
        'The travelers who love Rabat are those who want to experience Morocco without constant vendor pressure, understand how modern Moroccans actually live, or simply need a breather between the intensity of Fes and Marrakech. The 12th-century Hassan Tower, the fortified Kasbah des Oudayas, and the atmospheric Chellah Necropolis deliver genuine imperial-city substance without the crowds.',
        'The honest caveat: Rabat will disappoint travelers looking for a dramatic souk experience or a maze-like medina to get lost in — its medina is smaller and calmer than Fes or Marrakech. Come to Rabat for its monuments, its coastal calm, and its status as a living, working capital city — not for souk theater.',
      ],
      callout: {
        label: '🇲🇦 Local Verdict',
        body: 'If you have one day between Fes and Marrakech, or between Casablanca Airport and your next stop, Rabat deserves it more than a highway service station. Give it a full day if possible: the Kasbah des Oudayas alone, with its Andalusian Gardens and Atlantic viewpoint, justifies the stop — and Chellah\'s storks nesting on Roman ruins is unlike anything else in Morocco.',
      },
    },
    {
      heading: 'Rabat Quick Facts 2026',
      paragraphs: ['The essentials before you arrive.'],
      table: {
        caption: 'Rabat essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Status', 'Capital of Morocco since 1912 — seat of Parliament and the Royal Palace'],
          ['Population', '~580,000 (city), ~2 million metro area including Salé'],
          ['UNESCO status', 'Inscribed 2012 as "Rabat, Modern Capital and Historic City: a Shared Heritage"'],
          ['Airport', 'Rabat–Salé Airport (RBA) — ~10 km / 20–25 min from city centre'],
          ['Nearest major airport', 'Casablanca CMN — 95 km, 1h05–1h20 by motorway'],
          ['Famous for', 'Hassan Tower, Kasbah des Oudayas, Chellah Necropolis, Royal Palace, Mohammed VI Tower'],
          ['Best time to visit', 'March–May and September–November'],
          ['How many days needed', '1 full day minimum — 2 days to add Chellah, museums and Salé'],
          ['Currency', 'MAD — 1 EUR ≈ 10.8 MAD (2026)'],
          ['Getting around', 'Modern two-line tramway — cleanest, easiest public transport of any Moroccan city'],
          ['Car rental from Rabat-Salé (RBA)', 'From MAD 250/day (€23) — book via our partner agency in Rabat'],
        ],
      },
    },
    {
      heading: 'What Does Rabat\'s UNESCO Status Actually Mean?',
      paragraphs: [
        'Most guides mention Rabat is "a UNESCO World Heritage Site" without explaining why — and the reason is genuinely unusual. In 2012, UNESCO inscribed Rabat under the title "Rabat, Modern Capital and Historic City: a Shared Heritage" — recognizing not a single monument but the entire city\'s exceptional blend of 20th-century French colonial urban planning layered directly onto the historic Almohad and Merinid city.',
        'This is a rare distinction: Rabat is one of very few UNESCO sites recognized specifically for successfully merging a planned modern capital with an intact historic core, rather than for an ancient monument in isolation. The wide, tree-lined Avenue Mohammed V with its Art Deco buildings — including the Rabat Ville train station and Central Post Office — sits directly alongside the 12th-century Kasbah des Oudayas and the Hassan Tower.',
        'Practically, this means Rabat rewards travelers who appreciate architecture and urban history as much as ancient monuments — the contrast between colonial-era Art Deco and medieval Almohad fortifications, walking distance apart, is the city\'s defining character.',
      ],
    },
    {
      heading: 'Top Attractions in Rabat',
      paragraphs: [
        'Rabat\'s major sites cluster into two compact areas — the Hassan Tower/Chellah axis and the Kasbah des Oudayas by the river mouth — making it genuinely possible to see the essentials in a single well-planned day.',
      ],
      table: {
        caption: 'Best things to do in Rabat 2026',
        headers: ['Attraction', 'Area', 'Time needed', 'Price', 'Notes'],
        rows: [
          ['Hassan Tower & Mausoleum of Mohammed V', 'City centre, riverside', '1–1.5 hours', 'Free', 'Unfinished 12th-century minaret (44m) beside the ornate marble mausoleum guarded by mounted Royal Guards'],
          ['Kasbah des Oudayas', 'River mouth, Atlantic edge', '1.5–2 hours', 'Free (Andalusian Gardens free; museum small fee)', 'Blue-and-white 11th-century fortress with Andalusian Gardens and Café Maure — enter via Bab Oudaia early morning'],
          ['Chellah Necropolis', 'South of medina', '1–1.5 hours', 'MAD 70', 'Roman ruins layered with Merinid royal tombs — famous for its stork nests and biodiversity (100+ bird species)'],
          ['Royal Palace (Dar al-Makhzen)', 'Ville Nouvelle', '20–30 min (exterior)', 'Free (exterior only)', 'Working royal palace — not open inside, but the grand gates and plaza are worth the visit'],
          ['Rabat Medina', 'Central', '1–1.5 hours', 'Free', 'Smaller and calmer than Fes or Marrakech — genuine local shopping, less tourist pressure'],
          ['Mohammed VI Museum of Modern Art', 'Ville Nouvelle', '1–1.5 hours', 'MAD 40', 'Morocco\'s premier contemporary art museum — African and international artists'],
          ['Mohammed VI Tower', 'Bouregreg Valley', '1 hour', 'MAD 250 (viewing deck)', 'Morocco\'s tallest tower (250m), opened for visitors 2026 — panoramic city and Atlantic views'],
          ['Avenue Mohammed V (Art Deco walk)', 'City centre', '30–45 min', 'Free', 'Rabat Ville train station, Central Post Office — some of Morocco\'s finest Art Deco architecture'],
          ['National Museum of Jewellery & Adornment', 'Within Kasbah', '30–45 min', 'MAD 20–30', 'Traditional Moroccan jewellery and clothing, adjacent to the Andalusian Gardens'],
        ],
      },
      callout: {
        label: '💡 The One-Day Rabat Circuit',
        body: 'Start at Hassan Tower and the Mausoleum (morning, before tour groups), walk or taxi to Chellah (1–1.5 hours, storks and Roman ruins), then finish at Kasbah des Oudayas for sunset over the Atlantic — mint tea at Café Maure is the perfect close to the day.',
      },
    },
    {
      heading: 'Chellah Necropolis — Rabat\'s Most Atmospheric Site',
      paragraphs: [
        'Chellah deserves special attention because it is unlike anything else in Morocco: a walled necropolis where 3rd-century-BC Roman ruins sit directly beneath 14th-century Merinid royal tombs, all overgrown with fig trees and blooming oleanders, and inhabited by nesting storks whose enormous nests top the ancient minarets and walls.',
        'The site was originally the Roman settlement of Sala Colonia, later became a Merinid royal burial ground under Sultan Abu al-Hassan in the 14th century, and today functions as both a historic site and a genuine biodiversity haven — over 100 bird species have been recorded here, and the stork colony is one of the most photographed sights in Rabat.',
      ],
      callout: {
        label: '🦢 Chellah Visitor Tips',
        body: 'Visit in late afternoon for the best light on the ruins and active stork nests. New interpretive panels and multilingual audio guides were added in 2026, making independent visits easier than before. Wear comfortable shoes — the site includes uneven ancient stonework and garden paths.',
      },
    },
    {
      heading: 'Rabat vs Casablanca vs Marrakech vs Fes',
      paragraphs: [
        'Clients constantly ask how to prioritize Rabat against Morocco\'s other major cities. Here is the honest comparison.',
      ],
      table: {
        caption: 'Rabat vs other Moroccan cities — honest comparison 2026',
        headers: ['City', 'Character', 'Crowds', 'Best for'],
        rows: [
          ['Rabat', 'Calm administrative capital, UNESCO modern+historic blend', 'Low — locals outnumber tourists', 'Architecture, Art Deco, monuments without crowds, a breather'],
          ['Casablanca', 'Modern business capital, Atlantic corniche, nightlife', 'Medium — mostly business travelers', 'Hassan II Mosque, restaurants, cosmopolitan energy'],
          ['Marrakech', 'Theatrical medina, souks, Jemaa el-Fnaa spectacle', 'High — Morocco\'s most visited city', 'Souks, nightlife, day trips into the Atlas'],
          ['Fes', 'World\'s largest car-free medina, deep tradition', 'Medium-high — growing tourist numbers', 'Medieval depth, artisan crafts, intellectual capital'],
        ],
      },
      callout: {
        label: '🗺️ Where Rabat Fits in Your Itinerary',
        body: 'Rabat works best as a connector, not a standalone destination: pair it with Casablanca (1 hour away) as an easy day trip, or use it as a calm overnight stop between Fes and Chefchaouen or Tangier on a north Morocco loop. It rarely needs more than a full day unless you specifically love museums and architecture.',
      },
    },
    {
      heading: 'Best Time to Visit Rabat',
      paragraphs: [
        'Rabat\'s Atlantic coastal position gives it one of Morocco\'s mildest, most consistent climates — genuinely comfortable nearly year-round, without the extremes of Marrakech or the Sahara-adjacent cities.',
      ],
      table: {
        caption: 'Best time to visit Rabat — month by month 2026',
        headers: ['Period', 'Temperature', 'Character', 'Verdict'],
        rows: [
          ['March–May', '16–24°C', 'Mild, occasional rain, fresh Atlantic air', '⭐ Ideal — comfortable walking weather, gardens in bloom'],
          ['June–August', '20–26°C (rarely above 28°C)', 'Warm but rarely hot — Atlantic breeze moderates heat', '⭐ Excellent — one of Morocco\'s most comfortable summer cities'],
          ['September–November', '18–25°C', 'Mild, clear, fewer crowds than summer', '⭐ Excellent alternative — often the best-value season'],
          ['December–February', '10–17°C, rain more frequent', 'Cool and occasionally wet', 'Fine for museums and monuments — pack a light rain layer'],
        ],
      },
    },
    {
      heading: 'How to Get to Rabat — Distances From Every Major City',
      paragraphs: [
        'Rabat sits on Morocco\'s main north-south motorway corridor, making it easily reachable from virtually anywhere in the country.',
      ],
      table: {
        caption: 'Driving distances and times to Rabat 2026',
        headers: ['From', 'Distance', 'Driving time', 'Route', 'Toll'],
        rows: [
          ['Casablanca (CMN Airport)', '~112–120 km', '1h05–1h20', 'A1 motorway direct', '~MAD 33 (€3)'],
          ['Casablanca city centre', '~95 km', '1h00–1h15', 'A1 motorway', '~MAD 30 (€2.8)'],
          ['Fes', '~200 km', '2h15–2h30', 'A2 motorway direct', '~MAD 70 (€6.5)'],
          ['Marrakech', '~330 km', '3h30–4h00', 'A7 motorway via Casablanca', '~MAD 110 (€10)'],
          ['Tangier', '~250 km', '2h30–3h00', 'A1 motorway direct', '~MAD 90 (€8)'],
          ['Chefchaouen', '~280 km', '3h30–4h00', 'A1 to Tangier area then N2 south', '~MAD 100 (€9)'],
          ['Rabat-Salé Airport (RBA) to city centre', '~10 km', '20–25 min', 'N6 direct road', 'No toll'],
        ],
      },
      callout: {
        label: '🚗 Car Rental at Rabat-Salé Airport (RBA)',
        body: 'Rabat-Salé Airport (RBA) handles around 1 million passengers a year through a single terminal — small, fast, and far less congested than Casablanca CMN. We now work with a trusted local partner agency directly at RBA for travelers landing in the capital or continuing north toward Chefchaouen and Tangier. Economy cars from MAD 250/day, unlimited mileage, quick arrivals-hall handover. Message us on WhatsApp to confirm your Rabat-Salé pickup: +212 634 276 534',
      },
    },
    {
      heading: 'Getting Around Rabat and Day Trips',
      paragraphs: [
        'Rabat is Morocco\'s easiest major city to navigate — a genuine two-line modern tramway, wide well-signposted streets, and noticeably calmer traffic than Casablanca or Marrakech.',
      ],
      table: {
        caption: 'Getting around Rabat and best day trips 2026',
        headers: ['Option/Destination', 'Distance/Cost', 'Notes'],
        rows: [
          ['Tramway (2 lines)', 'MAD 6–8/ride', 'Clean, modern, covers most major sites and Salé — the easiest transport in any Moroccan city'],
          ['Petit taxi', 'MAD 15–30/ride', 'Short hops — insist on the meter'],
          ['Rental car', 'From MAD 250/day (€23)', 'Useful for day trips beyond the tram network'],
          ['Salé (across the river)', '10–15 min by tram/taxi', 'Historic sister city with its own medina and Great Mosque — far fewer tourists'],
          ['Exotic Gardens of Bouknadel', '18 km, 25–30 min', 'Botanical garden founded 1950s, notable plant collection from around the world'],
          ['Casablanca day trip', '95–120 km, 1h–1h20', 'Hassan II Mosque, Corniche, restaurants — very doable as a day trip or onward leg'],
          ['Meknes day trip', '135 km, 1h30–2h', 'Fourth imperial city, Bab Mansour gate — often combined with Fes'],
        ],
      },
    },
    {
      heading: 'Where to Stay in Rabat',
      paragraphs: [
        'Rabat offers a genuine mix of riads within the compact medina, mid-range business hotels in Ville Nouvelle, and a smaller but growing boutique scene near the Kasbah.',
      ],
      table: {
        caption: 'Where to stay in Rabat 2026',
        headers: ['Area', 'Vibe', 'Best for', 'Price range/night'],
        rows: [
          ['Medina / near Kasbah des Oudayas', 'Historic, riverside, walkable to major sites', 'First-timers, atmosphere seekers', 'MAD 350–1,500 (€32–139)'],
          ['Ville Nouvelle (Agdal/Hassan)', 'Modern, business hotels, good restaurants', 'Business travelers, comfort, tram access', 'MAD 400–1,800 (€37–167)'],
          ['Near the tramway line', 'Practical, connected, mid-range', 'Travelers prioritizing easy transport access', 'MAD 300–900 (€28–83)'],
        ],
      },
    },
    {
      heading: 'What to Eat in Rabat',
      paragraphs: [
        'Rabat\'s coastal location and cosmopolitan population — diplomats, civil servants, students — support a food scene that blends traditional Moroccan cooking with genuinely good French and international dining.',
      ],
      table: {
        caption: 'What to eat in Rabat 2026',
        headers: ['Dish/Experience', 'Where', 'Price', 'Notes'],
        rows: [
          ['Fresh seafood', 'Restaurants near the Kasbah and Salé fishing port', 'MAD 100–200', 'Atlantic catch, landed nearby — genuinely fresh'],
          ['Mint tea at Café Maure', 'Inside the Andalusian Gardens, Kasbah', 'MAD 15–25', 'The classic Rabat experience — riverside views over Salé'],
          ['Tagine and couscous', 'Medina restaurants', 'MAD 50–100', 'Standard Moroccan staples, well executed'],
          ['French/international dining', 'Ville Nouvelle', 'MAD 150–350', 'Reflects Rabat\'s diplomatic, cosmopolitan population'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Is Rabat worth visiting?',
      answer: 'Yes — Rabat is Morocco\'s most underrated major city. It lacks the souk theater of Marrakech or the medieval intensity of Fes, but offers the 12th-century Hassan Tower, the Kasbah des Oudayas, the extraordinary Chellah Necropolis, and a UNESCO-recognized blend of modern and historic urban planning — all with far fewer tourists than Morocco\'s more famous cities.',
    },
    {
      question: 'Why is Rabat a UNESCO World Heritage Site?',
      answer: 'Rabat was inscribed in 2012 under the title "Rabat, Modern Capital and Historic City: a Shared Heritage" — recognized specifically for its exceptional blend of early 20th-century planned modern capital (French colonial-era Art Deco architecture) directly layered onto the historic Almohad and Merinid city, rather than for a single ancient monument.',
    },
    {
      question: 'How far is Rabat from Casablanca?',
      answer: 'Rabat is approximately 95–120 km from Casablanca depending on your exact start and end points, taking 1h00–1h20 via the A1 motorway. This makes it one of the easiest and most popular day trips from Casablanca, or a natural first/last stop for travelers using Casablanca Airport (CMN).',
    },
    {
      question: 'How many days do you need in Rabat?',
      answer: '1 full day covers Hassan Tower, Chellah Necropolis and the Kasbah des Oudayas — Rabat\'s three essential sites. 2 days allows time to add the Mohammed VI Museum of Modern Art, the new Mohammed VI Tower viewing deck, a walk across to Salé, and a more relaxed pace overall.',
    },
    {
      question: 'Can I rent a car at Rabat-Salé Airport?',
      answer: 'Yes — Rabat-Salé Airport (RBA) has a single terminal with rental desks and handles around 1 million passengers annually, far less congested than Casablanca. We work with a trusted local partner agency directly at RBA — economy cars from MAD 250/day. Message us on WhatsApp to arrange pickup: +212 634 276 534.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is Rabat known for?', answer: 'Rabat is known as Morocco\'s political capital, its UNESCO World Heritage status (inscribed 2012 for blending modern and historic urban planning), the unfinished 12th-century Hassan Tower and adjacent Mausoleum of Mohammed V, the fortified Kasbah des Oudayas overlooking the Atlantic, and the Chellah Necropolis where storks nest atop Roman and Merinid ruins.' },
    { question: 'Is Rabat safer than Marrakech?', answer: 'Both cities are generally safe for tourists, but Rabat is noticeably calmer — as the seat of government and a city with more locals than tourists, it has less aggressive vendor pressure and touting than Marrakech\'s medina. Many travelers, particularly solo women, describe Rabat as one of Morocco\'s most relaxed cities to explore independently.' },
    { question: 'What is the distance between Rabat and Fes?', answer: 'Rabat is approximately 200 km from Fes via the A2 motorway, taking around 2h15–2h30 to drive. This makes Rabat a natural stop between Casablanca and Fes, or the starting point for a north Morocco loop toward Chefchaouen and Tangier.' },
  ],
  relatedDestinations: ['casablanca', 'fes', 'chefchaouen'],
  relatedPosts: ['casablanca-to-rabat-by-car', 'casablanca-travel-guide', 'fes-travel-guide', 'chefchaouen-travel-guide', 'casablanca-airport-guide-cmn'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Rabat 2026 — La Capitale Sous-Estimée du Maroc : Sites UNESCO et Prix',
  metaDescription: 'Guide complet Rabat 2026 : Kasbah des Oudayas, Tour Hassan, Nécropole de Chellah, statut UNESCO expliqué, Tour Mohammed VI, distances, vrais prix, comparaison honnête avec Casablanca et Marrakech.',
  title: 'Guide Voyage Rabat 2026 : La Capitale du Maroc dont Personne ne Parle — Et Devrait',
  description: 'Le guide Rabat complet rédigé par une équipe casablancaise qui traverse la capitale régulièrement. Pourquoi Rabat est la ville impériale la plus calme du Maroc, l\'histoire complète UNESCO 2012, les cigognes de Chellah et ruines romaines, la nouvelle Tour Mohammed VI, location voiture à l\'aéroport Rabat-Salé.',
  keyword: 'guide voyage rabat',
  coverImage: COVER,
  coverAlt: 'Guide voyage Rabat 2026 — Tour Hassan et Kasbah des Oudayas surplombant le fleuve Bouregreg et l\'océan Atlantique',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 17,
  intro: 'Rabat est la ville que la plupart des itinéraires marocains ignorent — et celle que presque tous les voyageurs qui la visitent regrettent de ne pas avoir mieux explorée. Capitale politique du Maroc depuis 1912 et site du patrimoine mondial UNESCO depuis 2012, Rabat offre des monuments impériaux, une kasbah fortifiée du 12e siècle, des ruines romaines habitées par des cigognes, et un littoral atlantique — le tout sans les foules de cars touristiques de Marrakech ou Fès. Notre équipe casablancaise traverse Rabat constamment, souvent comme premier ou dernier arrêt d\'un road trip marocain.',
  sections: [
    {
      heading: 'Rabat Vaut-elle le Détour ? La Réponse Honnête',
      paragraphs: [
        'Rabat est systématiquement l\'étape la plus sous-estimée d\'un itinéraire marocain, et la raison tient presque entièrement au rythme, pas à la substance. Là où Marrakech submerge par son intensité sensorielle et Fès exige de la patience pour se repérer, Rabat est compacte, praticable à pied, et calme.',
        'Les voyageurs qui adorent Rabat sont ceux qui veulent découvrir le Maroc sans pression constante des vendeurs, comprendre comment vivent réellement les Marocains modernes, ou simplement respirer entre l\'intensité de Fès et Marrakech.',
        'La réserve honnête : Rabat décevra les voyageurs cherchant une expérience de souk dramatique ou une médina labyrinthique où se perdre — sa médina est plus petite et calme que Fès ou Marrakech. Venez à Rabat pour ses monuments, son calme côtier et son statut de capitale vivante et active.',
      ],
      callout: {
        label: '🇲🇦 Verdict Local',
        body: 'Si vous avez un jour entre Fès et Marrakech, ou entre l\'aéroport de Casablanca et votre prochaine étape, Rabat le mérite plus qu\'une station-service d\'autoroute. Donnez-lui une journée complète si possible.',
      },
    },
    {
      heading: 'Rabat en Chiffres — Infos Essentielles 2026',
      paragraphs: ['Les essentiels avant d\'arriver.'],
      table: {
        caption: 'Infos essentielles Rabat 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Statut', 'Capitale du Maroc depuis 1912 — siège du Parlement et du Palais Royal'],
          ['Population', '~580 000 (ville), ~2 millions zone métro incluant Salé'],
          ['Statut UNESCO', 'Inscrite en 2012 sous "Rabat, capitale moderne et ville historique : un patrimoine en partage"'],
          ['Aéroport', 'Aéroport Rabat–Salé (RBA) — ~10 km / 20–25 min du centre'],
          ['Aéroport principal le plus proche', 'Casablanca CMN — 95 km, 1h05–1h20 par autoroute'],
          ['Célèbre pour', 'Tour Hassan, Kasbah des Oudayas, Nécropole de Chellah, Palais Royal, Tour Mohammed VI'],
          ['Meilleure période', 'Mars–Mai et septembre–novembre'],
          ['Durée recommandée', '1 jour complet minimum — 2 jours pour ajouter Chellah, musées et Salé'],
          ['Se déplacer', 'Tramway moderne à deux lignes — transport public le plus simple de toutes les villes marocaines'],
          ['Location voiture depuis Rabat-Salé (RBA)', 'Dès MAD 250/jour (23€) — via notre agence partenaire à Rabat'],
        ],
      },
    },
    {
      heading: 'Que Signifie Réellement le Statut UNESCO de Rabat ?',
      paragraphs: [
        'La plupart des guides mentionnent que Rabat est "un site UNESCO" sans expliquer pourquoi — et la raison est réellement inhabituelle. En 2012, l\'UNESCO a inscrit Rabat sous le titre "Rabat, capitale moderne et ville historique : un patrimoine en partage" — reconnaissant non pas un monument unique mais la fusion exceptionnelle de la ville entre l\'urbanisme colonial français du 20e siècle et le noyau historique almohade et mérinide.',
        'C\'est une distinction rare : Rabat est l\'un des très rares sites UNESCO reconnus spécifiquement pour avoir réussi à fusionner une capitale moderne planifiée avec un cœur historique intact.',
      ],
    },
    {
      heading: 'Meilleures Attractions à Rabat',
      paragraphs: ['Les principaux sites de Rabat se regroupent en deux zones compactes — l\'axe Tour Hassan/Chellah et la Kasbah des Oudayas à l\'embouchure du fleuve.'],
      table: {
        caption: 'Meilleures choses à faire à Rabat 2026',
        headers: ['Attraction', 'Zone', 'Temps', 'Prix', 'Notes'],
        rows: [
          ['Tour Hassan & Mausolée Mohammed V', 'Centre-ville, bord de fleuve', '1–1,5 heure', 'Gratuit', 'Minaret inachevé du 12e siècle (44m) à côté du mausolée en marbre gardé par la Garde Royale à cheval'],
          ['Kasbah des Oudayas', 'Embouchure du fleuve, bord Atlantique', '1,5–2 heures', 'Gratuit (jardins ; musée petit tarif)', 'Forteresse bleue et blanche du 11e siècle avec Jardins Andalous et Café Maure'],
          ['Nécropole de Chellah', 'Sud de la médina', '1–1,5 heure', 'MAD 70', 'Ruines romaines superposées aux tombeaux royaux mérinides — célèbre pour ses nids de cigognes'],
          ['Palais Royal (Dar al-Makhzen)', 'Ville Nouvelle', '20–30 min (extérieur)', 'Gratuit (extérieur uniquement)', 'Palais royal en fonction — pas ouvert à l\'intérieur, mais les grandes portes valent la visite'],
          ['Médina de Rabat', 'Centrale', '1–1,5 heure', 'Gratuit', 'Plus petite et calme que Fès ou Marrakech'],
          ['Musée Mohammed VI d\'Art Moderne', 'Ville Nouvelle', '1–1,5 heure', 'MAD 40', 'Premier musée d\'art contemporain du Maroc'],
          ['Tour Mohammed VI', 'Vallée du Bouregreg', '1 heure', 'MAD 250 (plateforme)', 'Plus haute tour du Maroc (250m), ouverte aux visiteurs 2026'],
          ['Avenue Mohammed V (Art Déco)', 'Centre-ville', '30–45 min', 'Gratuit', 'Gare de Rabat Ville, Poste Centrale — architecture Art Déco parmi les plus belles du Maroc'],
        ],
      },
      callout: {
        label: '💡 Le Circuit d\'Une Journée à Rabat',
        body: 'Commencez par la Tour Hassan et le Mausolée (matin, avant les groupes), marchez ou taxi vers Chellah (1–1,5h, cigognes et ruines romaines), puis terminez à la Kasbah des Oudayas pour le coucher de soleil sur l\'Atlantique — thé à la menthe au Café Maure pour clôturer.',
      },
    },
    {
      heading: 'Nécropole de Chellah — Le Site le Plus Atmosphérique de Rabat',
      paragraphs: [
        'Chellah mérite une attention particulière car elle est unique au Maroc : une nécropole fortifiée où des ruines romaines du 3e siècle avant J.-C. se trouvent directement sous des tombeaux royaux mérinides du 14e siècle, envahies par des figuiers et des lauriers-roses en fleurs, et habitées par des cigognes nicheuses.',
      ],
      callout: {
        label: '🦢 Conseils Visite Chellah',
        body: 'Visitez en fin d\'après-midi pour la meilleure lumière sur les ruines et les nids actifs de cigognes. De nouveaux panneaux interprétatifs et audioguides multilingues ont été ajoutés en 2026.',
      },
    },
    {
      heading: 'Rabat vs Casablanca vs Marrakech vs Fès',
      paragraphs: ['Les clients demandent constamment comment prioriser Rabat par rapport aux autres grandes villes du Maroc.'],
      table: {
        caption: 'Rabat vs autres villes marocaines — comparaison honnête 2026',
        headers: ['Ville', 'Caractère', 'Affluence', 'Idéal pour'],
        rows: [
          ['Rabat', 'Capitale administrative calme, fusion UNESCO moderne+historique', 'Faible — plus de locaux que de touristes', 'Architecture, Art Déco, monuments sans foule'],
          ['Casablanca', 'Capitale économique moderne, corniche atlantique, nightlife', 'Moyenne — surtout voyageurs d\'affaires', 'Mosquée Hassan II, restaurants, énergie cosmopolite'],
          ['Marrakech', 'Médina théâtrale, souks, spectacle Jemaa el-Fnaa', 'Élevée — ville la plus visitée du Maroc', 'Souks, vie nocturne, excursions dans l\'Atlas'],
          ['Fès', 'Plus grande médina piétonne au monde, tradition profonde', 'Moyenne-élevée', 'Profondeur médiévale, artisanat, capitale intellectuelle'],
        ],
      },
      callout: {
        label: '🗺️ Où Rabat S\'Intègre dans Votre Itinéraire',
        body: 'Rabat fonctionne mieux comme connecteur que comme destination autonome : associez-la à Casablanca (à 1h) comme excursion facile, ou utilisez-la comme escale calme entre Fès et Chefchaouen ou Tanger sur une boucle nord Maroc.',
      },
    },
    {
      heading: 'Meilleure Période pour Visiter Rabat',
      paragraphs: ['La position côtière atlantique de Rabat lui donne l\'un des climats les plus doux et constants du Maroc.'],
      table: {
        caption: 'Meilleure période pour visiter Rabat — mois par mois 2026',
        headers: ['Période', 'Température', 'Caractère', 'Verdict'],
        rows: [
          ['Mars–Mai', '16–24°C', 'Doux, pluies occasionnelles, air atlantique frais', '⭐ Idéal — temps de marche confortable, jardins en fleurs'],
          ['Juin–Août', '20–26°C (rarement plus de 28°C)', 'Chaud mais rarement caniculaire', '⭐ Excellent — l\'une des villes d\'été les plus confortables du Maroc'],
          ['Septembre–Novembre', '18–25°C', 'Doux, clair, moins de foule qu\'en été', '⭐ Excellente alternative'],
          ['Décembre–Février', '10–17°C, pluies plus fréquentes', 'Frais et occasionnellement humide', 'Bien pour musées et monuments'],
        ],
      },
    },
    {
      heading: 'Comment Rejoindre Rabat — Distances Depuis Chaque Grande Ville',
      paragraphs: ['Rabat se situe sur le corridor autoroutier nord-sud principal du Maroc, la rendant facilement accessible depuis presque partout dans le pays.'],
      table: {
        caption: 'Distances et temps de trajet vers Rabat 2026',
        headers: ['Depuis', 'Distance', 'Temps de conduite', 'Itinéraire', 'Péage'],
        rows: [
          ['Casablanca (Aéroport CMN)', '~112–120 km', '1h05–1h20', 'Autoroute A1 directe', '~MAD 33 (3€)'],
          ['Casablanca centre-ville', '~95 km', '1h00–1h15', 'A1', '~MAD 30 (2,8€)'],
          ['Fès', '~200 km', '2h15–2h30', 'A2 directe', '~MAD 70 (6,5€)'],
          ['Marrakech', '~330 km', '3h30–4h00', 'A7 via Casablanca', '~MAD 110 (10€)'],
          ['Tanger', '~250 km', '2h30–3h00', 'A1 directe', '~MAD 90 (8€)'],
          ['Chefchaouen', '~280 km', '3h30–4h00', 'A1 vers Tanger puis N2 sud', '~MAD 100 (9€)'],
          ['Aéroport Rabat-Salé (RBA) au centre', '~10 km', '20–25 min', 'Route N6 directe', 'Pas de péage'],
        ],
      },
      callout: {
        label: '🚗 Location Voiture à l\'Aéroport Rabat-Salé (RBA)',
        body: 'L\'aéroport Rabat-Salé (RBA) traite environ 1 million de passagers par an via un seul terminal — petit, rapide, bien moins congestionné que Casablanca CMN. Nous travaillons désormais avec une agence partenaire locale de confiance directement à RBA. Voitures économiques dès MAD 250/jour. Contactez-nous sur WhatsApp : +212 634 276 534',
      },
    },
    {
      heading: 'Se Déplacer à Rabat et Excursions',
      paragraphs: ['Rabat est la grande ville marocaine la plus facile à naviguer — un vrai tramway moderne à deux lignes, des rues larges bien signalées, et une circulation nettement plus calme que Casablanca ou Marrakech.'],
      table: {
        caption: 'Se déplacer à Rabat et meilleures excursions 2026',
        headers: ['Option/Destination', 'Distance/Coût', 'Notes'],
        rows: [
          ['Tramway (2 lignes)', 'MAD 6–8/trajet', 'Propre, moderne, couvre la plupart des sites majeurs et Salé'],
          ['Petit taxi', 'MAD 15–30/course', 'Courts trajets — insistez sur le compteur'],
          ['Voiture de location', 'Dès MAD 250/jour (23€)', 'Utile pour les excursions au-delà du réseau tram'],
          ['Salé (traversée du fleuve)', '10–15 min tram/taxi', 'Ville sœur historique avec sa propre médina'],
          ['Jardins Exotiques de Bouknadel', '18 km, 25–30 min', 'Jardin botanique fondé dans les années 1950'],
          ['Excursion Casablanca', '95–120 km, 1h–1h20', 'Mosquée Hassan II, Corniche, restaurants'],
          ['Excursion Meknès', '135 km, 1h30–2h', 'Quatrième ville impériale, porte Bab Mansour'],
        ],
      },
    },
    {
      heading: 'Où Dormir à Rabat',
      paragraphs: ['Rabat offre un vrai mélange de riads dans la médina compacte, hôtels d\'affaires en Ville Nouvelle, et une scène boutique croissante près de la Kasbah.'],
      table: {
        caption: 'Où dormir à Rabat 2026',
        headers: ['Zone', 'Ambiance', 'Idéal pour', 'Fourchette prix/nuit'],
        rows: [
          ['Médina / près Kasbah des Oudayas', 'Historique, bord de fleuve, praticable à pied', 'Premiers visiteurs', 'MAD 350–1 500 (32–139€)'],
          ['Ville Nouvelle (Agdal/Hassan)', 'Moderne, hôtels d\'affaires, bons restaurants', 'Voyageurs d\'affaires, confort', 'MAD 400–1 800 (37–167€)'],
          ['Près de la ligne de tram', 'Pratique, connecté, milieu de gamme', 'Voyageurs priorisant le transport facile', 'MAD 300–900 (28–83€)'],
        ],
      },
    },
    {
      heading: 'Que Manger à Rabat',
      paragraphs: ['La position côtière et la population cosmopolite de Rabat — diplomates, fonctionnaires, étudiants — soutiennent une scène culinaire mêlant cuisine marocaine traditionnelle et bonne table française et internationale.'],
      table: {
        caption: 'Que manger à Rabat 2026',
        headers: ['Plat/Expérience', 'Où', 'Prix', 'Notes'],
        rows: [
          ['Fruits de mer frais', 'Restaurants près de la Kasbah et port de pêche de Salé', 'MAD 100–200', 'Pêche atlantique locale'],
          ['Thé à la menthe au Café Maure', 'Jardins Andalous, Kasbah', 'MAD 15–25', 'L\'expérience classique de Rabat'],
          ['Tagine et couscous', 'Restaurants médina', 'MAD 50–100', 'Classiques marocains bien exécutés'],
          ['Cuisine française/internationale', 'Ville Nouvelle', 'MAD 150–350', 'Reflète la population diplomatique cosmopolite'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Rabat vaut-elle le détour ?',
      answer: 'Oui — Rabat est la grande ville la plus sous-estimée du Maroc. Elle manque du théâtre des souks de Marrakech ou de l\'intensité médiévale de Fès, mais offre la Tour Hassan du 12e siècle, la Kasbah des Oudayas, l\'extraordinaire Nécropole de Chellah, et une fusion urbaine moderne-historique reconnue UNESCO — avec bien moins de touristes.',
    },
    {
      question: 'Pourquoi Rabat est-elle un site du patrimoine mondial UNESCO ?',
      answer: 'Rabat a été inscrite en 2012 sous le titre "Rabat, capitale moderne et ville historique : un patrimoine en partage" — reconnue spécifiquement pour sa fusion exceptionnelle entre la capitale moderne planifiée du début du 20e siècle (architecture Art Déco coloniale française) et la ville historique almohade et mérinide.',
    },
    {
      question: 'À quelle distance est Rabat de Casablanca ?',
      answer: 'Rabat est à environ 95–120 km de Casablanca selon vos points de départ et d\'arrivée exacts, soit 1h00–1h20 via l\'autoroute A1. C\'est l\'une des excursions d\'une journée les plus faciles et populaires depuis Casablanca.',
    },
    {
      question: 'Combien de jours faut-il à Rabat ?',
      answer: '1 jour complet couvre la Tour Hassan, la Nécropole de Chellah et la Kasbah des Oudayas — les trois sites essentiels de Rabat. 2 jours permettent d\'ajouter le Musée Mohammed VI d\'Art Moderne, la plateforme de la Tour Mohammed VI, et une traversée vers Salé.',
    },
    {
      question: 'Puis-je louer une voiture à l\'aéroport de Rabat-Salé ?',
      answer: 'Oui — l\'aéroport Rabat-Salé (RBA) a un seul terminal avec comptoirs de location et traite environ 1 million de passagers par an, bien moins congestionné que Casablanca. Nous travaillons avec une agence partenaire locale de confiance directement à RBA — voitures économiques dès MAD 250/jour. Contactez-nous sur WhatsApp : +212 634 276 534.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Pour quoi Rabat est-elle connue ?', answer: 'Rabat est connue comme la capitale politique du Maroc, son statut UNESCO (inscrite 2012 pour la fusion urbanisme moderne et historique), la Tour Hassan inachevée du 12e siècle et le Mausolée de Mohammed V adjacent, la Kasbah des Oudayas fortifiée surplombant l\'Atlantique, et la Nécropole de Chellah où nichent des cigognes sur des ruines romaines et mérinides.' },
    { question: 'Rabat est-elle plus sûre que Marrakech ?', answer: 'Les deux villes sont généralement sûres pour les touristes, mais Rabat est nettement plus calme — en tant que siège du gouvernement avec plus de locaux que de touristes, elle a moins de pression agressive des vendeurs que la médina de Marrakech.' },
    { question: 'Quelle est la distance entre Rabat et Fès ?', answer: 'Rabat est à environ 200 km de Fès via l\'autoroute A2, soit environ 2h15–2h30 de conduite. Cela fait de Rabat une étape naturelle entre Casablanca et Fès, ou le point de départ d\'une boucle nord Maroc vers Chefchaouen et Tanger.' },
  ],
  relatedDestinations: ['casablanca', 'fes', 'chefchaouen'],
  relatedPosts: ['casablanca-rabat-en-voiture', 'guide-voyage-casablanca', 'guide-voyage-fes', 'guide-voyage-chefchaouen', 'guide-aeroport-casablanca-cmn'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر للرباط 2026 — عاصمة المغرب غير المُقدَّرة: مواقع يونسكو والأسعار',
  metaDescription: 'دليل شامل للرباط 2026: قصبة الأوداية، صومعة حسان، مقبرة شالة، شرح وضع اليونسكو، برج محمد السادس، المسافات، أسعار حقيقية، مقارنة صادقة مع الدار البيضاء ومراكش.',
  title: 'دليل السفر للرباط 2026: عاصمة المغرب التي لا يتحدث عنها أحد — ويجب أن يفعل',
  description: 'دليل الرباط الشامل من فريق مقيم في الدار البيضاء يعبر العاصمة بانتظام. لماذا الرباط أهدأ مدينة إمبراطورية في المغرب، قصة اليونسكو 2012 كاملة، لقالق شالة والأطلال الرومانية، برج محمد السادس الجديد، تأجير سيارة مطار الرباط-سلا.',
  keyword: 'دليل السفر للرباط',
  coverImage: COVER,
  coverAlt: 'دليل السفر للرباط 2026 — صومعة حسان وقصبة الأوداية تطلان على نهر أبي رقراق والمحيط الأطلسي',
  publishedISO: '2026-08-11',
  updatedISO: '2026-08-11',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 17,
  intro: 'الرباط هي المدينة التي تتجاهلها معظم برامج المغرب — والتي يتمنى تقريباً كل مسافر زارها لو أعطاها وقتاً أكثر. كعاصمة سياسية للمغرب منذ 1912 وموقع تراث عالمي يونسكو منذ 2012، تقدم الرباط معالم إمبراطورية وقصبة محصنة من القرن 12 وأطلالاً رومانية يسكنها اللقالق وساحلاً أطلسياً — كل هذا بلا حشود حافلات مراكش أو فاس. فريقنا المقيم في الدار البيضاء يعبر الرباط باستمرار، غالباً كأول أو آخر محطة في رحلة مغربية برية. هذا هو الدليل الصادق والعملي الذي نعطيه للعملاء.',
  sections: [
    {
      heading: 'هل الرباط تستحق الزيارة؟ الإجابة الصادقة',
      paragraphs: [
        'الرباط باستمرار هي المحطة الأقل تقديراً في برنامج مغربي، والسبب يتعلق بالإيقاع تقريباً كلياً لا بالمضمون. حيث تُغرق مراكش بكثافتها الحسية وتتطلب فاس صبراً في التوجه، الرباط مدمجة وقابلة للمشي وهادئة — مدينة يفوق فيها المحليون السياح فعلياً.',
        'المسافرون الذين يحبون الرباط هم أولئك الذين يريدون اختبار المغرب دون ضغط بائعين مستمر، أو فهم كيف يعيش المغاربة المعاصرون فعلاً، أو ببساطة يحتاجون استراحة بين حدة فاس ومراكش.',
        'التحفظ الصادق: الرباط ستُخيِّب المسافرين الباحثين عن تجربة سوق درامية أو مدينة عتيقة متاهية ليضيعوا فيها — مدينتها العتيقة أصغر وأهدأ من فاس أو مراكش. تعال للرباط من أجل معالمها وهدوئها الساحلي ومكانتها كعاصمة حية عاملة.',
      ],
      callout: {
        label: '🇲🇦 حكم محلي',
        body: 'إذا كان لديك يوم بين فاس ومراكش، أو بين مطار الدار البيضاء ومحطتك التالية، الرباط تستحقه أكثر من محطة خدمة على الطريق السريع. أعطها يوماً كاملاً إن أمكن.',
      },
    },
    {
      heading: 'الرباط بالأرقام — المعلومات الأساسية 2026',
      paragraphs: ['الأساسيات قبل الوصول.'],
      table: {
        caption: 'المعلومات الأساسية عن الرباط 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['الوضع', 'عاصمة المغرب منذ 1912 — مقر البرلمان والقصر الملكي'],
          ['السكان', '~580,000 (المدينة)، ~2 مليون المنطقة الكبرى شاملة سلا'],
          ['وضع اليونسكو', 'أُدرجت 2012 تحت "الرباط، العاصمة الحديثة والمدينة التاريخية: تراث مشترك"'],
          ['المطار', 'مطار الرباط-سلا (RBA) — ~10 كم / 20–25 دقيقة من وسط المدينة'],
          ['أقرب مطار رئيسي', 'CMN الدار البيضاء — 95 كم، 1:05–1:20 ساعة بالطريق السريع'],
          ['اشتهرت بـ', 'صومعة حسان، قصبة الأوداية، مقبرة شالة، القصر الملكي، برج محمد السادس'],
          ['أفضل وقت', 'مارس–مايو وسبتمبر–نوفمبر'],
          ['المدة الموصى بها', 'يوم كامل على الأقل — يومان لإضافة شالة والمتاحف وسلا'],
          ['التنقل', 'ترامواي حديث بخطين — أسهل نقل عام في أي مدينة مغربية'],
          ['تأجير سيارة من الرباط-سلا (RBA)', 'من MAD 250/يوم (23€) — عبر وكالتنا الشريكة في الرباط'],
        ],
      },
    },
    {
      heading: 'ماذا يعني وضع اليونسكو للرباط فعلاً؟',
      paragraphs: [
        'معظم الأدلة تذكر أن الرباط "موقع يونسكو" دون تفسير السبب — والسبب غير عادي فعلاً. في 2012، أدرجت اليونسكو الرباط تحت عنوان "الرباط، العاصمة الحديثة والمدينة التاريخية: تراث مشترك" — معترفةً ليس بمعلم واحد بل بمزيج المدينة الاستثنائي بين التخطيط الحضري الاستعماري الفرنسي من القرن 20 والنواة التاريخية الموحدية والمرينية.',
        'هذا تمييز نادر: الرباط من مواقع اليونسكو القليلة جداً المعترف بها تحديداً لنجاحها في دمج عاصمة حديثة مخططة مع نواة تاريخية سليمة.',
      ],
    },
    {
      heading: 'أفضل معالم الرباط',
      paragraphs: ['تتجمع مواقع الرباط الرئيسية في منطقتين مدمجتين — محور صومعة حسان/شالة وقصبة الأوداية عند مصب النهر.'],
      table: {
        caption: 'أفضل الأشياء للقيام بها في الرباط 2026',
        headers: ['المعلم', 'المنطقة', 'الوقت', 'السعر', 'ملاحظات'],
        rows: [
          ['صومعة حسان وضريح محمد الخامس', 'وسط المدينة، ضفة النهر', '1–1.5 ساعة', 'مجاني', 'مئذنة غير مكتملة من القرن 12 (44م) بجانب الضريح الرخامي المحروس بالحرس الملكي الفرسان'],
          ['قصبة الأوداية', 'مصب النهر، حافة الأطلسي', '1.5–2 ساعة', 'مجاني (الحدائق؛ المتحف رسم صغير)', 'حصن أزرق وأبيض من القرن 11 مع حدائق أندلسية ومقهى المغربي'],
          ['مقبرة شالة', 'جنوب المدينة العتيقة', '1–1.5 ساعة', 'MAD 70', 'أطلال رومانية متراكمة مع مقابر ملكية مرينية — شهيرة بأعشاش اللقالق'],
          ['القصر الملكي (دار المخزن)', 'المدينة الجديدة', '20–30 دقيقة (خارجياً)', 'مجاني (خارجياً فقط)', 'قصر ملكي عامل — غير مفتوح داخلياً لكن البوابات الكبرى تستحق الزيارة'],
          ['مدينة الرباط العتيقة', 'مركزية', '1–1.5 ساعة', 'مجاني', 'أصغر وأهدأ من فاس أو مراكش'],
          ['متحف محمد السادس للفن المعاصر', 'المدينة الجديدة', '1–1.5 ساعة', 'MAD 40', 'متحف الفن المعاصر الأول في المغرب'],
          ['برج محمد السادس', 'وادي أبي رقراق', 'ساعة', 'MAD 250 (منصة المشاهدة)', 'أطول برج في المغرب (250م)، فُتح للزوار 2026'],
          ['شارع محمد الخامس (نزهة آر ديكو)', 'وسط المدينة', '30–45 دقيقة', 'مجاني', 'محطة قطار الرباط المدينة، البريد المركزي'],
        ],
      },
      callout: {
        label: '💡 حلقة الرباط ليوم واحد',
        body: 'ابدأ بصومعة حسان والضريح (صباحاً، قبل المجموعات)، امشِ أو تاكسي لشالة (1–1.5 ساعة، لقالق وأطلال رومانية)، ثم انهِ عند قصبة الأوداية للغروب على الأطلسي.',
      },
    },
    {
      heading: 'مقبرة شالة — أكثر مواقع الرباط أجواءً',
      paragraphs: [
        'شالة تستحق اهتماماً خاصاً لأنها فريدة في المغرب: مقبرة مسورة حيث تجلس أطلال رومانية من القرن 3 ق.م مباشرة تحت مقابر ملكية مرينية من القرن 14، غامرة بأشجار التين ونباتات الدفلى المزهرة، ويسكنها اللقالق المُعشِّشة.',
      ],
      callout: {
        label: '🦢 نصائح زيارة شالة',
        body: 'زر في آخر بعد الظهر لأفضل ضوء على الأطلال وأعشاش اللقالق النشطة. أُضيفت لوحات تفسيرية جديدة وأدلة صوتية متعددة اللغات في 2026.',
      },
    },
    {
      heading: 'الرباط مقابل الدار البيضاء ومراكش وفاس',
      paragraphs: ['العملاء يسألون باستمرار كيف يرتبون أولويات الرباط مقابل مدن المغرب الكبرى الأخرى.'],
      table: {
        caption: 'الرباط مقابل مدن مغربية أخرى — مقارنة صادقة 2026',
        headers: ['المدينة', 'الطابع', 'الازدحام', 'الأنسب لـ'],
        rows: [
          ['الرباط', 'عاصمة إدارية هادئة، مزيج يونسكو حديث+تاريخي', 'منخفض — المحليون يفوقون السياح', 'العمارة، آر ديكو، معالم بلا حشود'],
          ['الدار البيضاء', 'عاصمة اقتصادية حديثة، كورنيش أطلسي، حياة ليلية', 'متوسط — غالباً مسافرو أعمال', 'مسجد الحسن الثاني، مطاعم، طاقة عالمية'],
          ['مراكش', 'مدينة عتيقة مسرحية، أسواق، مشهد جامع الفنا', 'عالٍ — أكثر مدن المغرب زيارةً', 'أسواق، حياة ليلية، رحلات الأطلس'],
          ['فاس', 'أكبر مدينة عتيقة خالية من السيارات في العالم', 'متوسط-عالٍ', 'عمق قروسطي، حرف، عاصمة فكرية'],
        ],
      },
      callout: {
        label: '🗺️ أين تناسب الرباط برنامجك',
        body: 'الرباط تعمل بشكل أفضل كموصل لا كوجهة مستقلة: اجمعها مع الدار البيضاء (على بعد ساعة) كرحلة يومية سهلة، أو استخدمها كمحطة مبيت هادئة بين فاس وشفشاون أو طنجة.',
      },
    },
    {
      heading: 'أفضل وقت لزيارة الرباط',
      paragraphs: ['موقع الرباط الساحلي الأطلسي يمنحها أحد أكثر مناخات المغرب اعتدالاً وثباتاً.'],
      table: {
        caption: 'أفضل وقت لزيارة الرباط — شهراً بشهر 2026',
        headers: ['الفترة', 'درجة الحرارة', 'الطابع', 'الحكم'],
        rows: [
          ['مارس–مايو', '16–24°م', 'معتدل، أمطار أحياناً، هواء أطلسي منعش', '⭐ مثالي — طقس مشي مريح، حدائق مزهرة'],
          ['يونيو–أغسطس', '20–26°م (نادراً فوق 28°م)', 'دافئ لكن نادراً حار', '⭐ ممتاز — من أكثر مدن المغرب راحة صيفاً'],
          ['سبتمبر–نوفمبر', '18–25°م', 'معتدل، صافٍ، ازدحام أقل من الصيف', '⭐ بديل ممتاز'],
          ['ديسمبر–فبراير', '10–17°م، أمطار أكثر تكراراً', 'بارد وأحياناً ممطر', 'جيد للمتاحف والمعالم'],
        ],
      },
    },
    {
      heading: 'كيف تصل إلى الرباط — المسافات من كل مدينة كبرى',
      paragraphs: ['تقع الرباط على ممر الطريق السريع الرئيسي شمال-جنوب في المغرب، مما يجعلها سهلة الوصول من أي مكان تقريباً في البلاد.'],
      table: {
        caption: 'المسافات وأوقات القيادة للرباط 2026',
        headers: ['من', 'المسافة', 'وقت القيادة', 'المسار', 'الرسوم'],
        rows: [
          ['الدار البيضاء (مطار CMN)', '~112–120 كم', '1:05–1:20 ساعة', 'طريق سريع A1 مباشر', '~MAD 33 (3€)'],
          ['وسط الدار البيضاء', '~95 كم', '1:00–1:15 ساعة', 'A1', '~MAD 30 (2.8€)'],
          ['فاس', '~200 كم', '2:15–2:30 ساعة', 'A2 مباشر', '~MAD 70 (6.5€)'],
          ['مراكش', '~330 كم', '3:30–4:00 ساعة', 'A7 عبر الدار البيضاء', '~MAD 110 (10€)'],
          ['طنجة', '~250 كم', '2:30–3:00 ساعة', 'A1 مباشر', '~MAD 90 (8€)'],
          ['شفشاون', '~280 كم', '3:30–4:00 ساعة', 'A1 لطنجة ثم N2 جنوباً', '~MAD 100 (9€)'],
          ['مطار الرباط-سلا (RBA) لوسط المدينة', '~10 كم', '20–25 دقيقة', 'طريق N6 مباشر', 'بلا رسوم'],
        ],
      },
      callout: {
        label: '🚗 تأجير سيارة في مطار الرباط-سلا (RBA)',
        body: 'يتعامل مطار الرباط-سلا (RBA) مع حوالي مليون مسافر سنوياً عبر صالة واحدة — صغير وسريع وأقل ازدحاماً بكثير من الدار البيضاء CMN. نعمل الآن مع وكالة شريكة محلية موثوقة مباشرة في RBA. سيارات اقتصادية من MAD 250/يوم. راسلنا على واتساب: +212 634 276 534',
      },
    },
    {
      heading: 'التنقل في الرباط والرحلات اليومية',
      paragraphs: ['الرباط أسهل مدينة مغربية كبرى للتنقل فيها — ترامواي حديث فعلي بخطين، شوارع واسعة موضحة جيداً، وحركة مرور أهدأ ملحوظاً من الدار البيضاء أو مراكش.'],
      table: {
        caption: 'التنقل في الرباط وأفضل الرحلات اليومية 2026',
        headers: ['الخيار/الوجهة', 'المسافة/التكلفة', 'ملاحظات'],
        rows: [
          ['الترامواي (خطان)', 'MAD 6–8/رحلة', 'نظيف، حديث، يغطي معظم المواقع الرئيسية وسلا'],
          ['تاكسي صغير', 'MAD 15–30/رحلة', 'رحلات قصيرة — أصر على العداد'],
          ['سيارة إيجار', 'من MAD 250/يوم (23€)', 'مفيدة للرحلات اليومية خارج شبكة الترامواي'],
          ['سلا (عبر النهر)', '10–15 دقيقة ترامواي/تاكسي', 'مدينة شقيقة تاريخية بمدينتها العتيقة الخاصة'],
          ['حدائق بوقنادل الغريبة', '18 كم، 25–30 دقيقة', 'حديقة نباتية تأسست في الخمسينيات'],
          ['رحلة الدار البيضاء اليومية', '95–120 كم، 1–1:20 ساعة', 'مسجد الحسن الثاني، الكورنيش، مطاعم'],
          ['رحلة مكناس اليومية', '135 كم، 1:30–2 ساعة', 'رابع مدينة إمبراطورية، بوابة باب المنصور'],
        ],
      },
    },
    {
      heading: 'أين تقيم في الرباط',
      paragraphs: ['تقدم الرباط مزيجاً حقيقياً من الرياضات في المدينة العتيقة المدمجة، وفنادق أعمال متوسطة في المدينة الجديدة، ومشهد بوتيك أصغر لكن متنامٍ قرب القصبة.'],
      table: {
        caption: 'أين تقيم في الرباط 2026',
        headers: ['المنطقة', 'الأجواء', 'الأنسب لـ', 'نطاق السعر/ليلة'],
        rows: [
          ['المدينة العتيقة / قرب قصبة الأوداية', 'تاريخية، ضفة النهر، قابلة للمشي', 'الزوار للمرة الأولى', 'MAD 350–1,500 (32–139€)'],
          ['المدينة الجديدة (أكدال/حسان)', 'حديثة، فنادق أعمال، مطاعم جيدة', 'مسافرو الأعمال، الراحة', 'MAD 400–1,800 (37–167€)'],
          ['قرب خط الترامواي', 'عملي، متصل، متوسط', 'مسافرون يفضلون سهولة النقل', 'MAD 300–900 (28–83€)'],
        ],
      },
    },
    {
      heading: 'ماذا تأكل في الرباط',
      paragraphs: ['موقع الرباط الساحلي وسكانها العالميون — دبلوماسيون وموظفون وطلاب — يدعمون مشهد طعام يمزج الطبخ المغربي التقليدي مع طعام فرنسي ودولي جيد فعلاً.'],
      table: {
        caption: 'ماذا تأكل في الرباط 2026',
        headers: ['الطبق/التجربة', 'أين', 'السعر', 'ملاحظات'],
        rows: [
          ['مأكولات بحرية طازجة', 'مطاعم قرب القصبة وميناء صيد سلا', 'MAD 100–200', 'صيد أطلسي محلي طازج فعلاً'],
          ['شاي بالنعناع في مقهى المغربي', 'داخل الحدائق الأندلسية، القصبة', 'MAD 15–20', 'تجربة الرباط الكلاسيكية'],
          ['طاجين وكسكس', 'مطاعم المدينة العتيقة', 'MAD 50–100', 'أطباق مغربية أساسية منفذة جيداً'],
          ['طعام فرنسي/دولي', 'المدينة الجديدة', 'MAD 150–350', 'يعكس السكان الدبلوماسيين العالميين'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'هل الرباط تستحق الزيارة؟',
      answer: 'نعم — الرباط هي أكثر مدن المغرب الكبرى إغفالاً. تفتقر لمسرحية أسواق مراكش أو حدة فاس القروسطية، لكن تقدم صومعة حسان من القرن 12، قصبة الأوداية، مقبرة شالة الاستثنائية، ومزيجاً حضرياً حديثاً-تاريخياً معترفاً به من اليونسكو — بسياح أقل بكثير.',
    },
    {
      question: 'لماذا الرباط موقع تراث عالمي يونسكو؟',
      answer: 'أُدرجت الرباط عام 2012 تحت عنوان "الرباط، العاصمة الحديثة والمدينة التاريخية: تراث مشترك" — معترفاً بها تحديداً لمزيجها الاستثنائي بين العاصمة الحديثة المخططة من أوائل القرن 20 (عمارة آر ديكو استعمارية فرنسية) والمدينة التاريخية الموحدية والمرينية.',
    },
    {
      question: 'كم تبعد الرباط عن الدار البيضاء؟',
      answer: 'الرباط على بعد حوالي 95–120 كم من الدار البيضاء حسب نقاط البداية والنهاية بالضبط، بـ1:00–1:20 ساعة عبر الطريق السريع A1. هذا يجعلها من أسهل وأشهر الرحلات اليومية من الدار البيضاء.',
    },
    {
      question: 'كم يوماً تحتاج في الرباط؟',
      answer: 'يوم كامل يغطي صومعة حسان ومقبرة شالة وقصبة الأوداية — المواقع الأساسية الثلاثة للرباط. يومان يتيحان إضافة متحف محمد السادس للفن المعاصر ومنصة برج محمد السادس ونزهة إلى سلا.',
    },
    {
      question: 'هل يمكنني استئجار سيارة في مطار الرباط-سلا؟',
      answer: 'نعم — مطار الرباط-سلا (RBA) لديه صالة واحدة بمكاتب تأجير ويتعامل مع حوالي مليون مسافر سنوياً، أقل ازدحاماً بكثير من الدار البيضاء. نعمل مع وكالة شريكة محلية موثوقة مباشرة في RBA — سيارات اقتصادية من MAD 250/يوم. راسلنا على واتساب: +212 634 276 534.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'بماذا تشتهر الرباط؟', answer: 'تشتهر الرباط كعاصمة سياسية للمغرب، ووضعها كتراث عالمي يونسكو (أُدرجت 2012 لمزج التخطيط الحضري الحديث والتاريخي)، وصومعة حسان غير المكتملة من القرن 12 وضريح محمد الخامس المجاور، وقصبة الأوداية المحصنة المطلة على الأطلسي، ومقبرة شالة حيث تُعشِّش اللقالق فوق أطلال رومانية ومرينية.' },
    { question: 'هل الرباط أكثر أماناً من مراكش؟', answer: 'كلتا المدينتين آمنتان عموماً للسياح، لكن الرباط أهدأ ملحوظاً — كمقر للحكومة ومدينة بمحليين أكثر من السياح، لديها ضغط بائعين أقل عدوانية من مدينة مراكش العتيقة.' },
    { question: 'ما المسافة بين الرباط وفاس؟', answer: 'الرباط على بعد حوالي 200 كم من فاس عبر الطريق السريع A2، حوالي 2:15–2:30 ساعة قيادة. هذا يجعل الرباط محطة طبيعية بين الدار البيضاء وفاس، أو نقطة انطلاق لحلقة شمال المغرب نحو شفشاون وطنجة.' },
  ],
  relatedDestinations: ['casablanca', 'fes', 'chefchaouen'],
  relatedPosts: ['min-dar-al-bayda-ila-al-ribat-bis-sayyara', 'dalil-safar-dar-al-bayda', 'dalil-safar-fas', 'dalil-safar-shafshawan', 'dalil-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);