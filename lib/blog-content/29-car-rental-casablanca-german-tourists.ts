import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'car-rental-casablanca-airport-german-tourists';
const SLUG_FR = 'location-voiture-casablanca-aeroport-touristes-allemands';
const SLUG_AR = 'istajar-sayyara-matar-dar-al-bayda-suwwah-alman';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(36467138);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Car Rental Casablanca Airport for German Tourists — 2026 Guide',
  metaDescription: 'Complete guide for German tourists renting a car at Casablanca Mohammed V Airport (CMN) in 2026. Prices in MAD and EUR, documents, routes and tips — also in Deutsch.',
  title: 'Car Rental at Casablanca Airport (CMN) for German Tourists: Complete 2026 Guide',
  description: 'Everything German tourists need to know about renting a car at Casablanca Mohammed V Airport (CMN) — documents accepted from Germany, prices in EUR, best routes for German travelers, and answers to the most common German tourist questions about driving in Morocco.',
  keyword: 'car rental casablanca airport german tourists',
  coverImage: COVER,
  coverAlt: 'Mietwagen am Flughafen Casablanca CMN — car rental for German tourists at Mohammed V Airport Morocco',
  publishedISO: '2026-06-14',
  author: 'Omar L. — Morocco Car Rental Specialist, Casablanca',
  readingMinutes: 11,
  intro: 'Germany is consistently one of Morocco\'s top 5 source markets for tourists — and German travelers are among the most likely to rent a car and explore independently. Known in German travel circles as "Mietwagen Casablanca Flughafen," car rental at Casablanca Mohammed V Airport (CMN) is the most practical starting point for a Morocco road trip from Europe. This guide covers everything German tourists specifically need to know: which documents are accepted from Germany, whether your German driving licence is valid, prices in EUR, the best Morocco routes for German travelers, and answers to the 12 most common questions we receive from German-speaking clients — answered in both English and Deutsch.',
  sections: [
    {
      heading: 'Is a German Driving Licence Valid in Morocco? (Deutsches Führerschein)',
      paragraphs: [
        'Yes — a standard German driving licence (Führerschein) is fully valid in Morocco without any additional permit. Morocco accepts EU driving licences directly, so your German Führerschein is sufficient for renting and driving a car throughout Morocco. You do not need an international driving permit (Internationaler Führerschein) if you hold a German EU licence.',
        'The licence must be the current EU format pink card — older paper German licences may require an international permit as backup. If your German licence was issued before 2013 in the older format, bring an international driving permit (available from ADAC for approximately €17) as a precaution.',
      ],
      table: {
        caption: 'German driving licence validity in Morocco — 2026',
        headers: ['Document', 'Valid in Morocco?', 'Notes'],
        rows: [
          ['EU Führerschein (current pink card format)', '✅ Yes — fully valid', 'No international permit needed'],
          ['Older paper German licence (pre-2013)', '⚠️ Bring IDP as backup', 'ADAC issues IDP for ~€17'],
          ['Internationaler Führerschein (IDP)', '✅ Yes — accepted', 'Optional if you have EU format'],
          ['German ID card (Personalausweis)', '✅ Yes — accepted for identity', 'Bring passport too for car rental deposit'],
        ],
      },
      callout: {
        label: '🇩🇪 Für deutsche Reisende — Führerschein Information',
        body: 'Ihr deutscher EU-Führerschein ist in Marokko vollständig gültig. Sie brauchen keinen internationalen Führerschein. Bringen Sie Ihren Führerschein, Reisepass und eine Kreditkarte für die Kaution. MoroccoForYou Cars akzeptiert alle deutschen Führerscheine und spricht Englisch und Französisch am Flughafen CMN.',
      },
    },
    {
      heading: 'Documents Required from Germany for Car Rental at CMN',
      paragraphs: [
        'German tourists renting a car at Casablanca Airport (CMN) need three documents: a valid German driving licence (Führerschein), a valid passport (Reisepass) or German ID card (Personalausweis), and a credit card in the driver\'s name for the security deposit (Kaution).',
        'The security deposit (Kaution) is typically 3,000–5,000 MAD (approximately €270–450) blocked on the credit card — this is standard across all Moroccan rental agencies and is released within 7–14 days after return. Debit cards (Girokarte/EC-Karte) are accepted at MoroccoForYou Cars on prior arrangement — contact us on WhatsApp before arrival to confirm.',
      ],
      table: {
        caption: 'Documents for German tourists renting a car at CMN — checklist',
        headers: ['Document', 'German equivalent', 'Required?'],
        rows: [
          ['Driving licence', 'Führerschein (EU format)', '✅ Essential'],
          ['Passport', 'Reisepass', '✅ Essential'],
          ['German ID card', 'Personalausweis', '✅ Accepted as alternative to passport'],
          ['Credit card (driver\'s name)', 'Kreditkarte auf den Fahrernamen', '✅ Essential for deposit (Kaution)'],
          ['International driving permit', 'Internationaler Führerschein', '⚠️ Optional — only if older licence format'],
          ['Travel insurance docs', 'Reiseversicherungsunterlagen', '⚠️ Recommended — check Morocco coverage'],
        ],
      },
    },
    {
      heading: 'Car Rental Prices at Casablanca Airport — in EUR for German Tourists',
      paragraphs: [
        'All MoroccoForYou Cars prices are set in Moroccan Dirhams (MAD) — here we convert to EUR for German tourists planning their Morocco budget. Exchange rate used: 1 EUR = approximately 10.8 MAD (June 2026 — verify current rate before travel).',
      ],
      table: {
        caption: 'Mietwagen Casablanca Flughafen CMN — Preise 2026 in EUR und MAD',
        headers: ['Fahrzeug / Car', 'Preis pro Tag / Price per day (MAD)', 'Preis pro Tag (EUR)', 'Empfehlung / Best for'],
        rows: [
          ['Renault Clio 5', 'MAD 250/Tag', '~€23/day', 'Städte + Autobahn / City + motorway'],
          ['Dacia Sandero', 'MAD 250/Tag', '~€23/day', 'Beste Wirtschaftlichkeit / Best value'],
          ['Peugeot 208', 'MAD 250/Tag', '~€23/day', 'Modernes Interieur / Modern interior'],
          ['Dacia Logan', 'MAD 250/Tag', '~€23/day', 'Familie mit viel Gepäck / Family with luggage'],
          ['Hyundai Accent', 'MAD 300/Tag', '~€28/day', 'Komfort Autobahn / Motorway comfort'],
          ['Dacia Duster 4x4', 'MAD 350/Tag', '~€32/day', 'Atlas + Sahara + Bergstraßen / Mountain routes'],
          ['7-Sitzer / 7-seater', 'Ab MAD 450/Tag', 'From ~€42/day', 'Gruppen / Groups — auf Anfrage / on request'],
        ],
      },
      callout: {
        label: '💰 Preis-Tipp für deutsche Reisende',
        body: 'Im Vergleich zu deutschen Mietwagenpreisen sind Mietwagen in Marokko sehr günstig — ein Kompaktwagen für €23/Tag mit unbegrenzter Kilometerleistung ist in Deutschland nicht verfügbar. Buchen Sie direkt über WhatsApp bei MoroccoForYou Cars für den besten Preis ohne Warteschlange am Flughafen.',
      },
    },
    {
      heading: 'Best Morocco Road Trip Routes for German Tourists',
      paragraphs: [
        'German tourists in Morocco tend to favor thorough, well-planned road trips that cover significant distances — a style that suits Morocco\'s geography perfectly. Here are the routes that our German-speaking clients most frequently request, with driving times corrected by our local team (AI planning tools consistently underestimate Morocco driving times by 30–40%).',
      ],
      table: {
        caption: 'Beliebte Marokko-Rundreisen für deutsche Touristen — Fahrzeiten und Empfehlungen',
        headers: ['Route / Strecke', 'Dauer / Duration', 'Empfohlenes Auto', 'Preis Mietwagen'],
        rows: [
          ['Casablanca → Rabat → Fès → Chefchaouen → Casablanca', '7–10 Tage / days', 'Dacia Sandero', 'MAD 250/Tag (€23)'],
          ['Casablanca → Marrakech → Sahara → Fès → Casablanca (Rundreise)', '10–14 Tage / days', 'Dacia Duster 4x4', 'MAD 350/Tag (€32)'],
          ['Casablanca → Küste → Essaouira → Agadir (Atlantikküste)', '7 Tage / days', 'Dacia Sandero', 'MAD 250/Tag (€23)'],
          ['Marrakech → Atlas → Ouarzazate → Gorges → Sahara (Wüstenroute)', '5–7 Tage / days', 'Dacia Duster 4x4', 'MAD 350/Tag (€32)'],
          ['Kaiserliche Städte: Casa → Rabat → Meknès → Fès → Casablanca', '5–7 Tage / days', 'Hyundai Accent', 'MAD 300/Tag (€28)'],
        ],
      },
    },
    {
      heading: 'Driving in Morocco — What German Tourists Need to Know',
      paragraphs: [
        'Morocco drives on the right side of the road — same as Germany (Rechtsverkehr). Speed limits are 120 km/h on motorways (Autobahn equivalent), 100 km/h on national roads, and 40–60 km/h in towns. Speed cameras (Radarkontrollen) are common, especially near Marrakech, Casablanca and Rabat.',
        'The A7 motorway (Casablanca–Marrakech–Agadir) is Morocco\'s main highway and is comparable to a German Bundesautobahn — well-maintained, dual carriageway, with rest areas. Toll fees (Mautgebühren) apply: approximately MAD 110 (€10) for Casablanca to Marrakech, MAD 164 (€15) for the full Casablanca to Agadir route.',
        'German tourists often note that Moroccan city driving — particularly in Casablanca and Marrakech medina areas — requires more attention than German city driving. Pedestrian crossings are not always observed, motorbikes filter through traffic, and GPS navigation sometimes struggles with medina alley networks. Our recommendation: park outside medinas and explore on foot.',
      ],
      table: {
        caption: 'Verkehrsregeln in Marokko für deutsche Fahrer — Vergleich Deutschland vs. Marokko',
        headers: ['Regelung / Rule', 'Deutschland / Germany', 'Marokko / Morocco'],
        rows: [
          ['Straßenseite / Road side', 'Rechts / Right', 'Rechts / Right ✅ Same'],
          ['Autobahn / Motorway speed', '130 km/h (empfohlen)', '120 km/h (Limit)'],
          ['Innerorts / In towns', '50 km/h', '40–60 km/h'],
          ['Mautpflicht / Toll roads', 'Keine Vignette', 'Mautgebühren auf A7/A1/A2'],
          ['Alkohol am Steuer', '0,5 Promille', '0,0 Promille — Null-Toleranz'],
          ['Telefonieren / Mobile phone', 'Freisprechanlage erlaubt', 'Verboten ohne Freisprechanlage'],
          ['Pannenweste / Reflective vest', 'Pflicht im Auto', 'Empfohlen'],
        ],
      },
      callout: {
        label: '🚗 Wichtiger Hinweis für deutsche Fahrer',
        body: 'In Marokko gilt Null-Toleranz für Alkohol am Steuer (0,0 Promille) — strenger als in Deutschland. Tragen Sie immer Ihren Führerschein und Reisepass mit sich beim Fahren. Halten Sie immer an Polizeikontrollen an — diese sind häufig und routinemäßig. MoroccoForYou Cars stellt alle notwendigen Fahrzeugdokumente bereit.',
      },
    },
    {
      heading: 'German Tourist FAQ — Häufig gestellte Fragen (in Deutsch und English)',
      paragraphs: [
        'These are the 8 questions we most frequently receive from German-speaking clients, answered in both German and English.',
        'Frage 1: Ist mein ADAC-Schutzbrief in Marokko gültig? / Is my ADAC breakdown cover valid in Morocco? — ADAC Auslandsschutzbrief covers Morocco for roadside assistance. However, always confirm with ADAC before departure as coverage details may vary. MoroccoForYou Cars also provides 24/7 roadside assistance as part of all rentals.',
        'Frage 2: Kann ich mit dem Mietwagen nach Spanien fahren? / Can I take the rental car to Spain? — No. Morocco rental cars may not be taken to Spain (via Ceuta or Melilla) or any other country without specific written permission and additional insurance. MoroccoForYou Cars rentals are for Morocco use only.',
        'Frage 3: Welche Kreditkarte wird für die Kaution akzeptiert? / Which credit card is accepted for the deposit? — Visa, Mastercard and American Express are accepted. The Kaution (deposit) of MAD 3,000–5,000 (€270–450) is blocked (not charged) and released after return.',
        'Frage 4: Gibt es eine Mindestmietdauer? / Is there a minimum rental period? — The minimum rental period at MoroccoForYou Cars is 1 day. For airport pickups, we recommend a minimum of 3 days to make the most of the meet-and-greet service.',
        'Frage 5: Kann ich den Wagen in einer anderen Stadt abgeben? / Can I return the car in a different city? — Yes — one-way rentals (Einwegmiete) are available to Marrakech, Fes, Agadir, Tangier and other cities. A drop-off fee (Rückgabegebühr) applies depending on the route — confirm when booking.',
      ],
    },
    {
      heading: 'How to Book Your Mietwagen at Casablanca Airport from Germany',
      paragraphs: [
        'The simplest booking method for German tourists is WhatsApp — send your arrival date, flight number, car preference and number of passengers to MoroccoForYou Cars. We confirm within 1 hour with price, car details and pickup instructions. Our driver meets you in the arrivals hall at CMN with a sign showing your name — no queue, no counter, no waiting.',
        'Book at least 48 hours before arrival for economy cars, and at least 1 week ahead for the Dacia Duster 4x4 (high demand) or automatic transmission vehicles. In peak German holiday season (July–August, Christmas, Easter), book 2–3 weeks ahead to guarantee availability.',
      ],
      table: {
        caption: 'Buchungsprozess — Mietwagen Casablanca Flughafen von Deutschland aus',
        headers: ['Schritt / Step', 'Was tun / What to do', 'Zeitrahmen / Timeframe'],
        rows: [
          ['1. Kontakt / Contact', 'WhatsApp an MoroccoForYou Cars senden', 'Mindestens 48h vor Ankunft'],
          ['2. Bestätigung / Confirm', 'Ankunftsdatum, Flugnummer, Fahrzeugwunsch angeben', 'Antwort innerhalb 1 Stunde'],
          ['3. Ankunft / Arrival', 'Fahrer mit Namensschild im Ankunftsbereich CMN', 'Sofort nach Gepäckabholung'],
          ['4. Dokumente / Documents', 'Führerschein, Reisepass, Kreditkarte vorzeigen', 'Am Flughafen, 10 Minuten'],
          ['5. Abfahrt / Departure', 'Fahrzeugübergabe + Dokumentencheck', 'Sofort nach Check'],
        ],
      },
      callout: {
        label: '🇩🇪 Buchung auf Deutsch — WhatsApp',
        body: 'Sie können MoroccoForYou Cars auch auf Deutsch kontaktieren. Schreiben Sie uns einfach auf WhatsApp mit Ihrem Ankunftsdatum und Ihrer Flugnummer — wir antworten auf Englisch oder Französisch innerhalb einer Stunde. Wirtschaftswagen ab MAD 250/Tag (€23), Dacia Duster 4x4 ab MAD 350/Tag (€32), kostenloser Empfang am Flughafen CMN rund um die Uhr.',
      },
    },
    {
      heading: 'Morocco Travel Tips Specifically for German Tourists',
      paragraphs: [
        'Based on the feedback and questions we receive from German clients, here are the Morocco travel insights that German tourists specifically find most useful — things that differ significantly from German travel norms.',
        'Bargaining (Feilschen): unlike Germany, fixed prices are rare in Moroccan souks. Bargaining is expected and part of the cultural experience. Start at 40–50% of the asking price and negotiate from there. At MoroccoForYou Cars, we use fixed transparent prices — no negotiation needed.',
        'Tipping (Trinkgeld): tipping is expected in Morocco in ways that differ from Germany. Budget 10–20 MAD (€1–2) for parking attendants, 20–50 MAD (€2–5) for restaurant service, and 50–100 MAD (€5–9) for guided tours. Unlike Germany, service charges are rarely included.',
        'Tap water (Leitungswasser): do not drink tap water in Morocco. Buy bottled water (Mineralwasser) — widely available at 3–8 MAD for 1.5L. German travelers often underestimate this — even brushing teeth with tap water can cause stomach issues.',
        'German travel insurance for Morocco: most German Reisekrankenversicherung and Reiserücktrittsversicherung covers Morocco as a travel destination. Check with your provider (HanseMerkur, Allianz, ERGO) before departure. Morocco does not have a European Health Insurance Card (EHIC) agreement with Germany.',
      ],
      table: {
        caption: 'Deutschland vs. Marokko — wichtige Unterschiede für deutsche Reisende',
        headers: ['Thema / Topic', 'In Deutschland', 'In Marokko / In Morocco'],
        rows: [
          ['Preise / Prices', 'Festpreise überall', 'Märkte: Feilschen erwartet / Bargaining expected'],
          ['Trinkgeld / Tips', 'Optional, selten', 'Erwartet / Expected: 10–50 MAD standard'],
          ['Leitungswasser / Tap water', 'Trinkbar / Drinkable', 'Nicht trinken / Do not drink'],
          ['Krankenversicherung / Health insurance', 'EHIC gilt in EU', 'Keine EHIC — private Versicherung nötig'],
          ['Öffnungszeiten / Opening hours', 'Gesetzlich geregelt', 'Variabel — Freitag oft geschlossen'],
          ['ADAC-Schutzbrief', 'Gilt in Europa', 'Gilt auch in Marokko ✅'],
          ['Alkohol / Alcohol', 'Überall verfügbar', 'Nur in lizenzierten Restaurants und Hotels'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Is a German driving licence (Führerschein) valid in Morocco?',
      answer: 'Yes — the current EU-format German Führerschein is fully valid in Morocco. No international driving permit is needed. If your German licence is in the older pre-2013 paper format, bring an ADAC international driving permit (approximately €17) as backup.',
    },
    {
      question: 'How much does car rental at Casablanca Airport cost for German tourists?',
      answer: 'Economy cars (Renault Clio, Dacia Sandero, Peugeot 208) start at MAD 250/day (approximately €23) at MoroccoForYou Cars, with unlimited mileage included. Dacia Duster 4x4 from MAD 350/day (€32) for Atlas and Sahara routes. All prices include free airport meet-and-greet at CMN.',
    },
    {
      question: 'Gilt mein ADAC-Schutzbrief in Marokko? / Is ADAC breakdown cover valid in Morocco?',
      answer: 'Yes — ADAC Auslandsschutzbrief covers Morocco. Confirm the specific coverage details with ADAC before departure. MoroccoForYou Cars also provides 24/7 roadside assistance included in all rentals as an additional safety net.',
    },
    {
      question: 'Can I pay in EUR at Casablanca Airport car rental?',
      answer: 'Yes — MoroccoForYou Cars accepts payment in EUR. Prices are set in MAD (Moroccan Dirham) and converted at the current exchange rate. The security deposit (Kaution) is blocked on your credit card in MAD and released after return.',
    },
    {
      question: 'What is the best car for a German tourist doing a Morocco road trip?',
      answer: 'For a classic Morocco circuit (Casablanca, Marrakech, Fes, Chefchaouen): Dacia Sandero or Renault Clio at MAD 250/day (€23). For routes including Atlas mountains, Ouarzazate or Sahara: Dacia Duster 4x4 at MAD 350/day (€32). Send your itinerary on WhatsApp — we will confirm the right car.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Brauche ich einen internationalen Führerschein für Marokko? / Do I need an international driving licence for Morocco?', answer: 'No — German EU-format driving licences are accepted in Morocco without an international permit. Only older pre-2013 paper format German licences should be accompanied by an ADAC international driving permit as backup.' },
    { question: 'Wie viel kostet ein Mietwagen in Casablanca? / How much is car rental in Casablanca?', answer: 'Economy cars start at MAD 250/day (approximately €23) at MoroccoForYou Cars at Casablanca Airport CMN. This includes unlimited mileage, basic insurance, and free airport meet-and-greet. The Dacia Duster 4x4 for mountain and desert routes is MAD 350/day (€32).' },
    { question: 'Is Morocco safe for German tourists driving independently?', answer: 'Yes — Morocco is safe for independent driving, particularly on the A7 motorway network (Casablanca, Marrakech, Agadir) and the main northern routes. Exercise normal caution in city traffic and avoid driving mountain or desert routes at night. German tourists regularly complete Morocco road trips independently.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'agadir'],
  relatedPosts: ['best-car-to-rent-in-casablanca-morocco', 'driving-in-morocco-tips-for-tourists', 'casablanca-airport-to-marrakech-by-car'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Location Voiture Casablanca Aéroport pour Touristes Allemands — 2026',
  metaDescription: 'Guide complet pour touristes allemands louant une voiture à l\'aéroport de Casablanca Mohammed V (CMN) 2026. Prix en EUR, documents, routes et FAQ en Deutsch.',
  title: 'Location Voiture Aéroport Casablanca pour Touristes Allemands : Guide Complet 2026',
  description: 'Tout ce que les touristes allemands doivent savoir pour louer une voiture à l\'aéroport Mohammed V de Casablanca (CMN) — permis allemand valide, prix en EUR, meilleures routes et FAQ en allemand et français.',
  keyword: 'location voiture casablanca aeroport touristes allemands',
  coverImage: COVER,
  coverAlt: 'Mietwagen am Flughafen Casablanca CMN — location voiture pour touristes allemands à l\'aéroport Mohammed V Maroc',
  publishedISO: '2026-06-14',
  author: 'Omar L. — Spécialiste Location Voiture Maroc, Casablanca',
  readingMinutes: 11,
  intro: 'L\'Allemagne est régulièrement l\'un des 5 premiers marchés source de touristes pour le Maroc — et les voyageurs allemands comptent parmi les plus susceptibles de louer une voiture et d\'explorer de manière indépendante. Connu dans les cercles de voyage allemands sous le nom de "Mietwagen Casablanca Flughafen", la location de voiture à l\'aéroport Mohammed V de Casablanca (CMN) est le point de départ le plus pratique pour un road trip au Maroc depuis l\'Europe. Ce guide couvre tout ce que les touristes allemands doivent spécifiquement savoir : quels documents sont acceptés d\'Allemagne, si votre permis de conduire allemand est valide, les prix en EUR, et les réponses aux questions les plus fréquentes de nos clients germanophones.',
  sections: [
    {
      heading: 'Le permis de conduire allemand (Führerschein) est-il valide au Maroc ?',
      paragraphs: [
        'Oui — un permis de conduire allemand standard (Führerschein) est entièrement valide au Maroc sans permis supplémentaire. Le Maroc accepte les permis de conduire européens directement, donc votre Führerschein allemand suffit pour louer et conduire une voiture au Maroc. Vous n\'avez pas besoin d\'un permis de conduire international (Internationaler Führerschein) si vous possédez un permis EU allemand.',
        'Le permis doit être au format carte rose EU actuel. Si votre permis allemand a été délivré avant 2013 dans l\'ancien format papier, apportez un permis international (disponible à l\'ADAC pour environ 17€) par précaution.',
      ],
      table: {
        caption: 'Validité du permis allemand au Maroc — 2026',
        headers: ['Document', 'Valide au Maroc ?', 'Notes'],
        rows: [
          ['Führerschein EU (format carte rose actuel)', '✅ Oui — entièrement valide', 'Aucun permis international nécessaire'],
          ['Ancien permis papier allemand (avant 2013)', '⚠️ Apporter IDP par sécurité', 'L\'ADAC délivre un IDP pour ~17€'],
          ['Internationaler Führerschein (IDP)', '✅ Oui — accepté', 'Optionnel si format EU'],
          ['Carte d\'identité allemande (Personalausweis)', '✅ Oui — acceptée pour l\'identité', 'Apportez aussi le passeport pour le dépôt'],
        ],
      },
      callout: {
        label: '🇩🇪 Für deutsche Reisende — Führerschein Information',
        body: 'Ihr deutscher EU-Führerschein ist in Marokko vollständig gültig. Sie brauchen keinen internationalen Führerschein. Bringen Sie Ihren Führerschein, Reisepass und eine Kreditkarte für die Kaution. MoroccoForYou Cars akzeptiert alle deutschen Führerscheine.',
      },
    },
    {
      heading: 'Documents requis d\'Allemagne pour louer une voiture à CMN',
      paragraphs: [
        'Les touristes allemands louant une voiture à l\'aéroport de Casablanca (CMN) ont besoin de trois documents : un permis de conduire allemand valide (Führerschein), un passeport valide (Reisepass) ou carte d\'identité allemande (Personalausweis), et une carte de crédit au nom du conducteur pour la caution (Kaution).',
        'La caution (Kaution) est généralement de 3 000–5 000 MAD (environ 270–450€) bloquée sur la carte de crédit — standard dans toutes les agences marocaines et libérée 7–14 jours après le retour. Les cartes de débit (Girokarte/EC-Karte) sont acceptées chez MoroccoForYou Cars sur arrangement préalable.',
      ],
      table: {
        caption: 'Documents pour touristes allemands louant à CMN — checklist',
        headers: ['Document', 'Équivalent allemand', 'Requis ?'],
        rows: [
          ['Permis de conduire', 'Führerschein (format EU)', '✅ Indispensable'],
          ['Passeport', 'Reisepass', '✅ Indispensable'],
          ['Carte d\'identité allemande', 'Personalausweis', '✅ Acceptée en alternative au passeport'],
          ['Carte de crédit (nom du conducteur)', 'Kreditkarte auf den Fahrernamen', '✅ Indispensable pour la caution'],
          ['Permis international', 'Internationaler Führerschein', '⚠️ Optionnel — uniquement si ancien format'],
          ['Docs assurance voyage', 'Reiseversicherungsunterlagen', '⚠️ Recommandé — vérifiez couverture Maroc'],
        ],
      },
    },
    {
      heading: 'Prix de location voiture à l\'aéroport de Casablanca — en EUR pour touristes allemands',
      paragraphs: [
        'Tous les prix MoroccoForYou Cars sont fixés en dirhams marocains (MAD) — nous convertissons ici en EUR pour les touristes allemands planifiant leur budget Maroc. Taux utilisé : 1 EUR = environ 10,8 MAD (juin 2026).',
      ],
      table: {
        caption: 'Mietwagen Casablanca Flughafen CMN — Preise 2026 in EUR und MAD',
        headers: ['Fahrzeug / Voiture', 'Preis / Prix (MAD)', 'Prix (EUR)', 'Empfehlung / Idéal pour'],
        rows: [
          ['Renault Clio 5', 'MAD 250/Tag', '~23€/jour', 'Villes + autoroute / Stadt + Autobahn'],
          ['Dacia Sandero', 'MAD 250/Tag', '~23€/jour', 'Meilleur rapport qualité-prix / Bestes Preis-Leistung'],
          ['Peugeot 208', 'MAD 250/Tag', '~23€/jour', 'Intérieur moderne / Modernes Interieur'],
          ['Dacia Logan', 'MAD 250/Tag', '~23€/jour', 'Familles avec bagages / Familie mit Gepäck'],
          ['Hyundai Accent', 'MAD 300/Tag', '~28€/jour', 'Confort autoroute / Komfort Autobahn'],
          ['Dacia Duster 4x4', 'MAD 350/Tag', '~32€/jour', 'Atlas + Sahara / Bergstraßen + Wüste'],
          ['7 places / 7-Sitzer', 'Ab MAD 450/Tag', 'From ~42€/jour', 'Groupes / Gruppen — sur demande'],
        ],
      },
      callout: {
        label: '💰 Preis-Tipp für deutsche Reisende',
        body: 'Im Vergleich zu deutschen Mietwagenpreisen sind Mietwagen in Marokko sehr günstig — ein Kompaktwagen für €23/Tag mit unbegrenzter Kilometerleistung ist in Deutschland nicht verfügbar. Buchen Sie direkt über WhatsApp bei MoroccoForYou Cars für den besten Preis ohne Warteschlange am Flughafen.',
      },
    },
    {
      heading: 'Meilleures routes road trip au Maroc pour touristes allemands',
      paragraphs: [
        'Les touristes allemands au Maroc privilégient généralement des road trips bien planifiés couvrant des distances significatives — un style qui convient parfaitement à la géographie du Maroc. Voici les routes que nos clients germanophones demandent le plus fréquemment.',
      ],
      table: {
        caption: 'Beliebte Marokko-Rundreisen für deutsche Touristen — Empfehlungen',
        headers: ['Route', 'Dauer / Durée', 'Voiture recommandée', 'Prix location'],
        rows: [
          ['Casablanca → Rabat → Fès → Chefchaouen → Casablanca', '7–10 jours', 'Dacia Sandero', 'MAD 250/jour (23€)'],
          ['Casablanca → Marrakech → Sahara → Fès → Casablanca (circuit)', '10–14 jours', 'Dacia Duster 4x4', 'MAD 350/jour (32€)'],
          ['Casablanca → Côte → Essaouira → Agadir (route atlantique)', '7 jours', 'Dacia Sandero', 'MAD 250/jour (23€)'],
          ['Marrakech → Atlas → Ouarzazate → Gorges → Sahara', '5–7 jours', 'Dacia Duster 4x4', 'MAD 350/jour (32€)'],
          ['Villes impériales : Casa → Rabat → Meknès → Fès', '5–7 jours', 'Hyundai Accent', 'MAD 300/jour (28€)'],
        ],
      },
    },
    {
      heading: 'Conduire au Maroc — ce que les touristes allemands doivent savoir',
      paragraphs: [
        'Le Maroc conduit à droite — comme en Allemagne (Rechtsverkehr). Les limitations de vitesse sont 120 km/h sur autoroute, 100 km/h sur routes nationales, et 40–60 km/h en ville. Les radars (Radarkontrollen) sont fréquents, notamment près de Marrakech, Casablanca et Rabat.',
        'L\'autoroute A7 (Casablanca–Marrakech–Agadir) est comparable à une Bundesautobahn allemande — bien entretenue, double voie, avec aires de service. Les péages (Mautgebühren) s\'appliquent : environ MAD 110 (10€) de Casablanca à Marrakech.',
        'Les touristes allemands notent souvent que la conduite urbaine marocaine — particulièrement dans les médinas de Casablanca et Marrakech — demande plus d\'attention. Notre recommandation : garez-vous en dehors des médinas et explorez à pied.',
      ],
      table: {
        caption: 'Verkehrsregeln in Marokko — Vergleich Deutschland vs. Marokko',
        headers: ['Regelung', 'Deutschland', 'Marokko'],
        rows: [
          ['Straßenseite', 'Rechts', 'Rechts ✅ Gleich'],
          ['Autobahn-Tempo', '130 km/h (empfohlen)', '120 km/h (Limit)'],
          ['Innerorts', '50 km/h', '40–60 km/h'],
          ['Maut', 'Keine Vignette', 'Mautgebühren auf A7/A1'],
          ['Alkohol', '0,5 Promille', '0,0 Promille — Null-Toleranz'],
          ['ADAC-Schutzbrief', 'Gilt in Europa', 'Gilt auch in Marokko ✅'],
        ],
      },
      callout: {
        label: '🚗 Wichtiger Hinweis für deutsche Fahrer',
        body: 'In Marokko gilt Null-Toleranz für Alkohol am Steuer (0,0 Promille) — strenger als in Deutschland. Tragen Sie immer Ihren Führerschein und Reisepass mit sich beim Fahren. MoroccoForYou Cars stellt alle notwendigen Fahrzeugdokumente bereit.',
      },
    },
    {
      heading: 'FAQ für deutsche Touristen — Häufig gestellte Fragen (Deutsch + Français)',
      paragraphs: [
        'Voici les 8 questions que nous recevons le plus fréquemment de nos clients germanophones, répondues en allemand et en français.',
        'Frage 1 / Question 1 : Ist mein ADAC-Schutzbrief in Marokko gültig? / Mon ADAC est-il valide au Maroc ? — Oui. L\'ADAC Auslandsschutzbrief couvre le Maroc pour l\'assistance routière. Confirmez les détails de couverture avec l\'ADAC avant le départ. MoroccoForYou Cars fournit également une assistance routière 24h/24 incluse dans toutes les locations.',
        'Frage 2 / Question 2 : Kann ich mit dem Mietwagen nach Spanien fahren? / Puis-je emmener la voiture de location en Espagne ? — Non. Les voitures de location marocaines ne peuvent pas être amenées en Espagne (via Ceuta ou Melilla) sans autorisation écrite spécifique. Les locations MoroccoForYou Cars sont pour usage Maroc uniquement.',
        'Frage 3 / Question 3 : Welche Kreditkarte wird akzeptiert? / Quelle carte de crédit est acceptée ? — Visa, Mastercard et American Express sont acceptées. La Kaution (caution) de MAD 3 000–5 000 (270–450€) est bloquée (non débitée) et libérée après retour.',
        'Frage 4 / Question 4 : Gibt es Einwegmiete? / Location aller simple disponible ? — Oui — locations aller simple disponibles vers Marrakech, Fès, Agadir, Tanger. Des frais de retour (Rückgabegebühr) s\'appliquent selon la route — confirmez à la réservation.',
        'Frage 5 / Question 5 : Kann ich auf Deutsch kommunizieren? / Puis-je communiquer en allemand ? — Notre équipe répond en anglais et en français. Vous pouvez nous écrire en allemand sur WhatsApp — nous comprendrons et répondrons en anglais ou français.',
      ],
    },
    {
      heading: 'Comment réserver votre Mietwagen à l\'aéroport de Casablanca depuis l\'Allemagne',
      paragraphs: [
        'La méthode de réservation la plus simple pour les touristes allemands est WhatsApp — envoyez votre date d\'arrivée, numéro de vol, préférence de voiture et nombre de passagers à MoroccoForYou Cars. Nous confirmons sous 1 heure avec prix, détails voiture et instructions de prise en charge.',
        'Réservez au moins 48 heures avant l\'arrivée pour les économiques, et au moins 1 semaine à l\'avance pour le Dacia Duster 4x4 ou les véhicules à boîte automatique. En haute saison allemande (juillet–août, Noël, Pâques), réservez 2–3 semaines à l\'avance.',
      ],
      callout: {
        label: '🇩🇪 Buchung auf Deutsch — So geht\'s',
        body: 'Schreiben Sie uns einfach auf WhatsApp mit Ihrem Ankunftsdatum, Ihrer Flugnummer und Ihrem Fahrzeugwunsch. Wir antworten auf Englisch oder Französisch innerhalb einer Stunde. Wirtschaftswagen ab MAD 250/Tag (€23), Dacia Duster 4x4 ab MAD 350/Tag (€32), kostenloser Empfang am Flughafen CMN rund um die Uhr.',
      },
    },
  ],
  faqs: [
    {
      question: 'Le permis de conduire allemand est-il valide au Maroc ?',
      answer: 'Oui — le Führerschein EU format actuel est entièrement valide au Maroc. Aucun permis international n\'est nécessaire. Si votre permis allemand est dans l\'ancien format papier d\'avant 2013, apportez un permis international ADAC (environ 17€) en backup.',
    },
    {
      question: 'Combien coûte la location de voiture à l\'aéroport de Casablanca pour les touristes allemands ?',
      answer: 'Les voitures économiques (Renault Clio, Dacia Sandero, Peugeot 208) démarrent à MAD 250/jour (environ 23€) chez MoroccoForYou Cars, kilométrage illimité inclus. Dacia Duster 4x4 dès MAD 350/jour (32€) pour les routes Atlas et Sahara.',
    },
    {
      question: 'Ist mein ADAC-Schutzbrief in Marokko gültig ?',
      answer: 'Ja — der ADAC Auslandsschutzbrief gilt in Marokko. Bestätigen Sie die genauen Leistungen mit dem ADAC vor der Abreise. MoroccoForYou Cars bietet zusätzlich 24/7 Pannenhilfe in allen Mietverträgen.',
    },
    {
      question: 'Kann ich in EUR bezahlen bei der Autovermietung in Casablanca ?',
      answer: 'Ja — MoroccoForYou Cars akzeptiert Zahlung in EUR. Die Preise sind in MAD festgelegt und zum aktuellen Wechselkurs umgerechnet. Die Kaution wird in MAD auf Ihrer Kreditkarte blockiert und nach Rückgabe freigegeben.',
    },
    {
      question: 'Quelle est la meilleure voiture pour un touriste allemand en road trip au Maroc ?',
      answer: 'Pour un circuit classique Maroc (Casablanca, Marrakech, Fès, Chefchaouen) : Dacia Sandero ou Renault Clio à MAD 250/jour (23€). Pour les routes incluant l\'Atlas, Ouarzazate ou le Sahara : Dacia Duster 4x4 à MAD 350/jour (32€).',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Brauche ich einen internationalen Führerschein für Marokko ?', answer: 'Nein — deutsche EU-Führerscheine werden in Marokko ohne internationalen Führerschein akzeptiert. Nur ältere Papierführerscheine im Vor-2013-Format sollten von einem ADAC-Internationalen Führerschein begleitet werden.' },
    { question: 'Wie viel kostet ein Mietwagen in Casablanca ?', answer: 'Wirtschaftswagen ab MAD 250/Tag (ca. €23) bei MoroccoForYou Cars am Flughafen Casablanca CMN. Dies beinhaltet unbegrenzte Kilometerleistung, Grundversicherung und kostenlosen Flughafenempfang. Der Dacia Duster 4x4 für Berg- und Wüstenrouten kostet MAD 350/Tag (€32).' },
    { question: 'Is Morocco safe for German tourists driving independently ?', answer: 'Yes — Morocco is safe for independent driving, particularly on the A7 motorway network. German tourists regularly complete Morocco road trips independently. Exercise normal caution in city traffic and avoid mountain or desert routes at night.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'agadir'],
  relatedPosts: ['location-voiture-aeroport-fes-maroc', 'meilleure-voiture-louer-casablanca-maroc', 'casablanca-agadir-en-voiture'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'استئجار سيارة مطار الدار البيضاء للسياح الألمان — 2026',
  metaDescription: 'دليل شامل للسياح الألمان لاستئجار سيارة في مطار الدار البيضاء محمد الخامس (CMN) 2026. أسعار باليورو، الوثائق، المسارات وأسئلة شائعة بالألمانية.',
  title: 'استئجار سيارة في مطار الدار البيضاء (CMN) للسياح الألمان: الدليل الشامل 2026',
  description: 'كل ما يحتاجه السياح الألمان لاستئجار سيارة في مطار محمد الخامس بالدار البيضاء (CMN) — رخصة القيادة الألمانية، أسعار باليورو، أفضل المسارات وأسئلة شائعة بالألمانية والعربية.',
  keyword: 'استئجار سيارة مطار الدار البيضاء للسياح الألمان',
  coverImage: COVER,
  coverAlt: 'Mietwagen am Flughafen Casablanca CMN — استئجار سيارة للسياح الألمان في مطار محمد الخامس المغرب',
  publishedISO: '2026-06-14',
  author: 'عمر ل. — متخصص تأجير السيارات بالمغرب، الدار البيضاء',
  readingMinutes: 11,
  intro: 'ألمانيا من أكبر 5 أسواق مصدر للسياحة في المغرب باستمرار — والمسافرون الألمان من أكثر من يستأجرون سيارات للاستكشاف المستقل. المعروف في دوائر السفر الألمانية بـ"Mietwagen Casablanca Flughafen"، يُعد استئجار السيارة في مطار محمد الخامس بالدار البيضاء (CMN) نقطة الانطلاق الأنسب لرحلة برية في المغرب من أوروبا. يغطي هذا الدليل كل ما يحتاجه السياح الألمان تحديداً: الوثائق المقبولة من ألمانيا، صحة رخصة القيادة الألمانية، الأسعار باليورو، وإجابات على الأسئلة الأكثر شيوعاً من عملائنا الناطقين بالألمانية.',
  sections: [
    {
      heading: 'هل رخصة القيادة الألمانية (Führerschein) صالحة في المغرب؟',
      paragraphs: [
        'نعم — رخصة القيادة الألمانية القياسية (Führerschein) صالحة تماماً في المغرب دون أي تصريح إضافي. المغرب يقبل رخص القيادة الأوروبية مباشرةً، لذا رخصتك الألمانية كافية لاستئجار وقيادة سيارة في المغرب. لا تحتاج إلى رخصة قيادة دولية (Internationaler Führerschein) إذا كنت تملك رخصة ألمانية بصيغة الاتحاد الأوروبي.',
        'يجب أن تكون الرخصة بصيغة البطاقة الوردية الأوروبية الحالية. إذا صدرت رخصتك الألمانية قبل 2013 بالصيغة الورقية القديمة، أحضر رخصة قيادة دولية من ADAC (بحوالي 17 يورو) احتياطاً.',
      ],
      table: {
        caption: 'صحة رخصة القيادة الألمانية في المغرب — 2026',
        headers: ['الوثيقة', 'صالحة في المغرب؟', 'ملاحظات'],
        rows: [
          ['Führerschein الاتحاد الأوروبي (صيغة البطاقة الوردية الحالية)', '✅ نعم — صالحة تماماً', 'لا حاجة لرخصة دولية'],
          ['الرخصة الورقية الألمانية القديمة (قبل 2013)', '⚠️ أحضر رخصة دولية احتياطاً', 'ADAC تصدر رخصة دولية بـ~17 يورو'],
          ['Internationaler Führerschein (رخصة دولية)', '✅ نعم — مقبولة', 'اختيارية إذا كنت تملك صيغة الاتحاد الأوروبي'],
          ['بطاقة الهوية الألمانية (Personalausweis)', '✅ نعم — مقبولة للهوية', 'أحضر جواز السفر أيضاً لوديعة الإيجار'],
        ],
      },
      callout: {
        label: '🇩🇪 Für deutsche Reisende — Führerschein Information',
        body: 'Ihr deutscher EU-Führerschein ist in Marokko vollständig gültig. Sie brauchen keinen internationalen Führerschein. Bringen Sie Ihren Führerschein, Reisepass und eine Kreditkarte für die Kaution. MoroccoForYou Cars akzeptiert alle deutschen Führerscheine.',
      },
    },
    {
      heading: 'الوثائق المطلوبة من ألمانيا لاستئجار سيارة في CMN',
      paragraphs: [
        'يحتاج السياح الألمان المستأجرون سيارة في مطار الدار البيضاء (CMN) ثلاث وثائق: رخصة قيادة ألمانية سارية (Führerschein)، وجواز سفر ساري (Reisepass) أو بطاقة هوية ألمانية (Personalausweis)، وبطاقة ائتمان باسم السائق للوديعة الأمانية (Kaution).',
        'الوديعة الأمانية (Kaution) عادةً 3,000–5,000 درهم (حوالي 270–450 يورو) مجمّدة على بطاقة الائتمان — معيار في جميع وكالات التأجير المغربية وتُحرَّر خلال 7–14 يوماً بعد الإعادة. بطاقات الخصم (Girokarte/EC-Karte) مقبولة في MoroccoForYou Cars بترتيب مسبق.',
      ],
      table: {
        caption: 'الوثائق للسياح الألمان المستأجرين في CMN — قائمة تحقق',
        headers: ['الوثيقة', 'المكافئ الألماني', 'مطلوب؟'],
        rows: [
          ['رخصة القيادة', 'Führerschein (صيغة الاتحاد الأوروبي)', '✅ ضروري'],
          ['جواز السفر', 'Reisepass', '✅ ضروري'],
          ['بطاقة الهوية الألمانية', 'Personalausweis', '✅ مقبولة كبديل لجواز السفر'],
          ['بطاقة ائتمان (باسم السائق)', 'Kreditkarte auf den Fahrernamen', '✅ ضروري للوديعة (Kaution)'],
          ['رخصة قيادة دولية', 'Internationaler Führerschein', '⚠️ اختيارية — فقط إذا كانت رخصة قديمة'],
          ['وثائق التأمين السياحي', 'Reiseversicherungsunterlagen', '⚠️ موصى به — تحقق من تغطية المغرب'],
        ],
      },
    },
    {
      heading: 'أسعار استئجار السيارة في مطار الدار البيضاء — باليورو للسياح الألمان',
      paragraphs: [
        'جميع أسعار MoroccoForYou Cars محددة بالدرهم المغربي (MAD) — نحوّلها هنا إلى يورو للسياح الألمان المخططين لميزانية المغرب. سعر الصرف المستخدم: 1 يورو = حوالي 10.8 درهم (يونيو 2026).',
      ],
      table: {
        caption: 'Mietwagen Casablanca Flughafen CMN — Preise 2026 بالدرهم واليورو',
        headers: ['السيارة / Fahrzeug', 'السعر/يوم (درهم)', 'السعر (يورو)', 'الأنسب لـ / Empfehlung'],
        rows: [
          ['رينو كليو 5', 'MAD 250/يوم', '~23€/يوم', 'مدن + طريق سريع / Stadt + Autobahn'],
          ['داشيا ساندرو', 'MAD 250/يوم', '~23€/يوم', 'أفضل قيمة / Bestes Preis-Leistung'],
          ['بيجو 208', 'MAD 250/يوم', '~23€/يوم', 'داخلية حديثة / Modernes Interieur'],
          ['داشيا لوغان', 'MAD 250/يوم', '~23€/يوم', 'عائلات بأمتعة / Familie mit Gepäck'],
          ['هيونداي أكسنت', 'MAD 300/يوم', '~28€/يوم', 'راحة طريق سريع / Komfort Autobahn'],
          ['داشيا دوستر 4x4', 'MAD 350/يوم', '~32€/يوم', 'أطلس + صحراء / Berg + Wüste'],
          ['7 مقاعد / 7-Sitzer', 'من MAD 450/يوم', 'من ~42€/يوم', 'مجموعات / Gruppen'],
        ],
      },
      callout: {
        label: '💰 Preis-Tipp für deutsche Reisende',
        body: 'Im Vergleich zu deutschen Mietwagenpreisen sind Mietwagen in Marokko sehr günstig — ein Kompaktwagen für €23/Tag mit unbegrenzter Kilometerleistung ist in Deutschland nicht verfügbar. Buchen Sie direkt über WhatsApp bei MoroccoForYou Cars.',
      },
    },
    {
      heading: 'أفضل مسارات الرحلة البرية بالمغرب للسياح الألمان',
      paragraphs: [
        'يميل السياح الألمان في المغرب إلى الرحلات البرية المنظمة جيداً التي تغطي مسافات كبيرة — أسلوب يناسب جغرافية المغرب تماماً. إليك المسارات التي يطلبها عملاؤنا الناطقون بالألمانية في أغلب الأحيان.',
      ],
      table: {
        caption: 'Beliebte Marokko-Rundreisen für deutsche Touristen — أفضل الدورات السياحية',
        headers: ['المسار / Route', 'المدة / Dauer', 'السيارة الموصى بها', 'سعر الإيجار'],
        rows: [
          ['الدار البيضاء → الرباط → فاس → شفشاون → الدار البيضاء', '7–10 أيام', 'داشيا ساندرو', 'MAD 250/يوم (23€)'],
          ['الدار البيضاء → مراكش → الصحراء → فاس → الدار البيضاء (دائرة)', '10–14 أيام', 'داشيا دوستر 4x4', 'MAD 350/يوم (32€)'],
          ['الدار البيضاء → الساحل → الصويرة → أكادير (طريق الأطلسي)', '7 أيام', 'داشيا ساندرو', 'MAD 250/يوم (23€)'],
          ['مراكش → الأطلس → ورززات → المحاجر → الصحراء', '5–7 أيام', 'داشيا دوستر 4x4', 'MAD 350/يوم (32€)'],
          ['المدن الإمبراطورية: دار بيضاء → الرباط → مكناس → فاس', '5–7 أيام', 'هيونداي أكسنت', 'MAD 300/يوم (28€)'],
        ],
      },
    },
    {
      heading: 'القيادة في المغرب — ما يحتاج السياح الألمان معرفته',
      paragraphs: [
        'المغرب يسير على اليمين — كألمانيا (Rechtsverkehr). حدود السرعة: 120 كم/س على الطرق السريعة، 100 كم/س على الطرق الوطنية، و40–60 كم/س في المدن. الرادارات (Radarkontrollen) شائعة، خاصة قرب مراكش والدار البيضاء والرباط.',
        'الطريق السريع A7 (الدار البيضاء–مراكش–أكادير) مماثل للـBundesautobahn الألمانية — جيد الصيانة، ازدواجي، مع مناطق خدمة. رسوم الطريق (Mautgebühren) تُطبَّق: حوالي MAD 110 (10 يورو) من الدار البيضاء إلى مراكش.',
        'يلاحظ السياح الألمان أن القيادة الحضرية المغربية — خاصة في مدن الدار البيضاء ومراكش — تتطلب انتباهاً أكثر. توصيتنا: اركن خارج المدن العتيقة واستكشفها سيراً على الأقدام.',
      ],
      table: {
        caption: 'Verkehrsregeln — مقارنة ألمانيا والمغرب',
        headers: ['القاعدة / Regelung', 'ألمانيا / Deutschland', 'المغرب / Marokko'],
        rows: [
          ['جانب الطريق / Straßenseite', 'يمين / Rechts', 'يمين ✅ نفس الشيء'],
          ['طريق سريع / Autobahn', '130 كم/س (موصى)', '120 كم/س (حد)'],
          ['داخل المدن / Innerorts', '50 كم/س', '40–60 كم/س'],
          ['رسوم طريق / Maut', 'لا توجد', 'على A7/A1/A2'],
          ['الكحول / Alkohol', '0.5 بالمئة', '0.0 — صفر تساهل'],
          ['ADAC', 'يسري في أوروبا', 'يسري في المغرب أيضاً ✅'],
        ],
      },
      callout: {
        label: '🚗 Wichtiger Hinweis für deutsche Fahrer',
        body: 'In Marokko gilt Null-Toleranz für Alkohol am Steuer (0,0 Promille) — strenger als in Deutschland. Tragen Sie immer Ihren Führerschein und Reisepass mit sich beim Fahren. MoroccoForYou Cars stellt alle notwendigen Fahrzeugdokumente bereit.',
      },
    },
    {
      heading: 'أسئلة شائعة للسياح الألمان — Häufig gestellte Fragen (بالألمانية والعربية)',
      paragraphs: [
        'إليك الأسئلة الـ8 الأكثر شيوعاً من عملائنا الناطقين بالألمانية، مع إجابات بالألمانية والعربية.',
        'Frage 1 / السؤال 1: Ist mein ADAC-Schutzbrief in Marokko gültig? / هل تأمين ADAC ساري في المغرب؟ — نعم. ADAC Auslandsschutzbrief يغطي المغرب لخدمة الطريق. أكد تفاصيل التغطية مع ADAC قبل المغادرة. MoroccoForYou Cars يوفر أيضاً مساعدة طريق 24/7 مشمولة في جميع الإيجارات.',
        'Frage 2 / السؤال 2: Kann ich mit dem Mietwagen nach Spanien fahren? / هل يمكنني أخذ سيارة الإيجار إلى إسبانيا؟ — لا. سيارات الإيجار المغربية لا يمكن أخذها إلى إسبانيا (عبر سبتة أو مليلية) دون إذن كتابي محدد. إيجارات MoroccoForYou Cars للاستخدام داخل المغرب فقط.',
        'Frage 3 / السؤال 3: Welche Kreditkarte wird akzeptiert? / أي بطاقة ائتمان مقبولة؟ — فيزا وماستركارد وأمريكان إكسبريس مقبولة. الوديعة (Kaution) من MAD 3,000–5,000 (270–450 يورو) مجمّدة (لا مُحمَّلة) وتُحرَّر بعد الإعادة.',
        'Frage 4 / السؤال 4: Gibt es Einwegmiete? / هل التأجير في اتجاه واحد متاح؟ — نعم — التأجير في اتجاه واحد متاح إلى مراكش وفاس وأكادير وطنجة. رسوم الإعادة (Rückgabegebühr) تُطبَّق حسب المسار — أكدها عند الحجز.',
        'Frage 5 / السؤال 5: Kann ich auf Deutsch kommunizieren? / هل يمكنني التواصل بالألمانية؟ — فريقنا يرد بالإنجليزية والفرنسية. يمكنك الكتابة لنا بالألمانية على واتساب — سنفهم ونرد بالإنجليزية أو الفرنسية.',
      ],
    },
    {
      heading: 'كيفية حجز سيارتك في مطار الدار البيضاء من ألمانيا',
      paragraphs: [
        'أبسط طريقة حجز للسياح الألمان هي واتساب — أرسل تاريخ وصولك ورقم رحلتك وتفضيل السيارة وعدد الركاب إلى MoroccoForYou Cars. نؤكد خلال ساعة بالسعر وتفاصيل السيارة وتعليمات الاستلام.',
        'احجز قبل 48 ساعة على الأقل من الوصول للسيارات الاقتصادية، وأسبوع على الأقل مسبقاً لداشيا دوستر 4x4 أو سيارات الأوتوماتيك. في موسم الإجازات الألمانية (يوليو–أغسطس، عيد الميلاد، عيد الفصح)، احجز 2–3 أسابيع مسبقاً.',
      ],
      callout: {
        label: '🇩🇪 Buchung auf Deutsch — So geht\'s / كيفية الحجز',
        body: 'Schreiben Sie uns einfach auf WhatsApp mit Ihrem Ankunftsdatum, Ihrer Flugnummer und Ihrem Fahrzeugwunsch. Wir antworten auf Englisch oder Französisch innerhalb einer Stunde. سيارات اقتصادية من MAD 250/يوم (23 يورو)، داشيا دوستر 4x4 من MAD 350/يوم (32 يورو)، استقبال مجاني في مطار CMN 24/7.',
      },
    },
  ],
  faqs: [
    {
      question: 'هل رخصة القيادة الألمانية صالحة في المغرب؟',
      answer: 'نعم — Führerschein بصيغة الاتحاد الأوروبي الحالية صالحة تماماً في المغرب. لا حاجة لرخصة دولية. إذا كانت رخصتك الألمانية بالصيغة الورقية القديمة قبل 2013، أحضر رخصة دولية من ADAC (حوالي 17 يورو) احتياطاً.',
    },
    {
      question: 'كم يكلف استئجار سيارة في مطار الدار البيضاء للسياح الألمان؟',
      answer: 'السيارات الاقتصادية (رينو كليو، داشيا ساندرو، بيجو 208) تبدأ من MAD 250/يوم (حوالي 23 يورو) في MoroccoForYou Cars، مع كيلومترات غير محدودة مشمولة. داشيا دوستر 4x4 من MAD 350/يوم (32 يورو) لمسارات الأطلس والصحراء.',
    },
    {
      question: 'Ist mein ADAC-Schutzbrief in Marokko gültig?',
      answer: 'Ja — der ADAC Auslandsschutzbrief gilt in Marokko. Bestätigen Sie die genauen Leistungen mit dem ADAC vor der Abreise. MoroccoForYou Cars bietet zusätzlich 24/7 Pannenhilfe in allen Mietverträgen an.',
    },
    {
      question: 'هل يمكن الدفع باليورو في وكالة تأجير السيارات بالدار البيضاء؟',
      answer: 'نعم — MoroccoForYou Cars يقبل الدفع باليورو. الأسعار محددة بالدرهم ومحوّلة بسعر الصرف الحالي. الوديعة مجمّدة بالدرهم على بطاقتك وتُحرَّر بعد الإعادة.',
    },
    {
      question: 'ما أفضل سيارة للسائح الألماني في رحلة برية بالمغرب؟',
      answer: 'للدائرة الكلاسيكية (الدار البيضاء، مراكش، فاس، شفشاون): داشيا ساندرو أو رينو كليو بـMAD 250/يوم (23 يورو). للمسارات التي تشمل الأطلس أو ورززات أو الصحراء: داشيا دوستر 4x4 بـMAD 350/يوم (32 يورو).',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Brauche ich einen internationalen Führerschein für Marokko?', answer: 'Nein — deutsche EU-Führerscheine werden in Marokko ohne internationalen Führerschein akzeptiert. Nur ältere Papierführerscheine im Vor-2013-Format sollten von einem ADAC internationalen Führerschein begleitet werden.' },
    { question: 'Wie viel kostet ein Mietwagen in Casablanca?', answer: 'Wirtschaftswagen ab MAD 250/Tag (ca. €23) bei MoroccoForYou Cars am Flughafen Casablanca CMN. Inklusive unbegrenzte Kilometer, Grundversicherung und kostenloser Flughafenempfang. Dacia Duster 4x4 für Berg- und Wüstenrouten kostet MAD 350/Tag (€32).' },
    { question: 'هل المغرب آمن للسياح الألمان الذين يقودون السيارة بشكل مستقل؟', answer: 'نعم — المغرب آمن للقيادة المستقلة، خاصة على شبكة الطرق السريعة A7. السياح الألمان يكملون الرحلات البرية بالمغرب بشكل مستقل بانتظام. احرص على الانتباه في حركة المرور الحضرية وتجنب مسارات الجبال والصحراء ليلاً.' },
  ],
  relatedDestinations: ['casablanca', 'marrakech', 'fes', 'agadir'],
  relatedPosts: ['istajar-sayyara-matar-fas-al-maghrib', 'afdal-sayyara-listajar-fi-dar-al-bayda', 'min-dar-al-bayda-ila-agadir-bis-sayyara'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);