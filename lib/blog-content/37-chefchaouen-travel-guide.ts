import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'chefchaouen-travel-guide';
const SLUG_FR = 'guide-voyage-chefchaouen';
const SLUG_AR = 'dalil-safar-shafshawan';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(9422948);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Chefchaouen Travel Guide 2026 — The Blue City: 50 Things You Need to Know',
  metaDescription: 'Complete Chefchaouen travel guide 2026: why it\'s blue, best photo spots, Spanish Mosque, Akchour waterfalls, where to stay, what to eat, how to get there by car from Casablanca, Fes & Tangier.',
  title: 'Chefchaouen Travel Guide 2026: 50 Things to Know About Morocco\'s Blue City (By Locals)',
  description: 'Everything about Chefchaouen written by people who\'ve driven there hundreds of times — why the city is really blue, the photo spots nobody shows you, where to stay inside the medina, Akchour waterfalls, the best food, and how to combine it with Fes or Tangier on a road trip.',
  keyword: 'chefchaouen travel guide',
  coverImage: COVER,
  coverAlt: 'Chefchaouen blue city Morocco travel guide — cobalt alleyways and blue-painted medina streets in the Rif Mountains',
  publishedISO: '2026-02-22',
  updatedISO: '2026-08-05',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 18,
  intro: 'Chefchaouen is unlike anywhere else on earth. A mountain town painted in a hundred shades of blue, tucked into the folds of the Rif Mountains three hours from Casablanca, surrounded by cedar forests, wild thyme, and trails that reward the people who come prepared. It is also one of the most photographed places in Africa — which means it is simultaneously breathtaking and, in the wrong hour, completely overwhelmed with day-trippers pointing cameras at cats. This guide is built on the knowledge of our Casablanca-based team who have driven clients to Chefchaouen more times than we can count. We know where the light is best, which streets are actually private, how to avoid the tour-bus rush, and what makes the difference between a rushed day trip and a stay you remember for years. Here are 50 things to know — the practical, the beautiful, the counterintuitive, and the things most guides skip entirely.',
  sections: [
    {
      heading: 'Why Is Chefchaouen Blue? The Real Answer (It\'s Complicated)',
      paragraphs: [
        'Ask ten locals why Chefchaouen is blue and you will get ten different answers. The truth, supported by historians and long-time residents, is that no single origin story is correct — the blue emerged from several overlapping forces over several centuries.',
        'The most widely cited explanation links the blue to the Jewish community that arrived in Chefchaouen after the 1492 Alhambra Decree expelled Jews from Spain. In Jewish tradition, the color blue — tekhelet — carries sacred significance, representing the divine and the heavens. Many scholars believe the Jewish residents began painting their homes and the mellah (Jewish quarter) blue as a spiritual practice. The community who fled Hitler in the 1930s reinforced this tradition further.',
        'Other explanations are more practical: locals say blue paint reflects more sunlight and keeps buildings cooler in summer, or that it repels mosquitoes by mimicking running water. Neither has been conclusively proven, but both stories persist.',
        'The most honest answer: the blue that tourists photograph today expanded dramatically during the 20th century, was reinforced during the Spanish Protectorate period (1912–1956), and is now maintained actively by local residents and even the local government, who distribute paint to keep the medina\'s signature color fresh. Every spring, residents repaint their walls, stairs, and doorways. The blue is real, alive, and maintained — but its origins are a layered conversation rather than a single story.',
      ],
      callout: {
        label: '🎨 Local Detail',
        body: 'The blue is not uniform — it ranges from pale powder blue to deep indigo to cobalt to turquoise depending on the street, the season, and when it was last painted. Early morning light (7–9am) reveals the most dramatic blues, particularly in the upper medina where tourist foot traffic is thinnest.',
      },
    },
    {
      heading: '50 Things to Know About Chefchaouen',
      paragraphs: [
        'These are the things our team tells every client before we drop them at the city gates — the practical knowledge that separates a frustrating visit from a memorable one.',
      ],
      list: [
        'Chefchaouen has no train station and no airport — the only way in is by road or bus. Plan your transport before you arrive.',
        'The medina is entirely car-free. Park outside the city gates and walk in. Guarded parking lots near the bus station cost MAD 20–30/night.',
        'Early morning (7–9am) is the best time to photograph the blue streets — empty alleys, soft light, no tour groups.',
        'Sunset at the Spanish Mosque viewpoint is the most famous view in the city. Expect a crowd. Go 30 minutes early or try sunrise for solitude.',
        'The Callejon El Asri (also called the Blue Alley or Uta el-Hammam alleyway) is the most photographed street. It\'s beautiful but overrun by 10am.',
        'Rue Bin Souk and Calle Hassan I have the most intense blue staircases and the least tourist foot traffic — better for photography.',
        'The blue is most vibrant in streets that were repainted recently. Look for the deepest indigo — these are the freshest walls.',
        'Cats are everywhere in Chefchaouen and are part of the city\'s character. Do not attempt to shoo them away for photos — you will look like the problem.',
        'Plaza Uta el-Hammam is the main square and the best orientation point. If lost, walk downhill — you will find it.',
        'The Kasbah Museum on the main square costs MAD 60 entry. Small but genuinely good — the courtyard garden is beautiful.',
        'No guide is needed to walk the medina — unlike Fes, the medina is small enough (15–20 minutes end-to-end) that you cannot really get lost. You\'ll get "lost" in a delightful way.',
        'Blue-painted cobblestones often indicate a private home courtyard. Walk through if the path seems to continue, but don\'t linger in doorways.',
        'Mint tea on a rooftop terrace with a view of the medina and Rif Mountains is the essential Chefchaouen experience. Budget 30–60 minutes and don\'t rush it.',
        'The food in Chefchaouen is mountain food — different from Marrakech or Fes. Expect fresh herbs, goat cheese, wild honey, and tajines made with Rif valley vegetables.',
        'Rif region goat cheese (jben) is sold fresh each morning in the small market near Plaza Uta el-Hammam. Eat it with local honey on warm bread — this alone is worth the trip.',
        'Chefchaouen has one of the most relaxed and low-pressure souk atmospheres in Morocco. You can browse wool blankets, djellabas, leather sandals, and ceramics without the aggressive vendor culture of Marrakech.',
        'Artisan quality here is genuinely higher than in the major cities. Hand-woven wool blankets and mountain-region textiles are Chefchaouen\'s specialty.',
        'Do not buy anything from the first vendor who approaches you in the first hour. Walk the whole medina first, note what you like, return with a sense of fair prices.',
        'Cannabis (kif) is widely available and semi-tolerated in the Rif region — but it remains technically illegal in Morocco. Foreigners have been arrested. Do not assume tolerance equals legality.',
        'Ras El-Maa is the natural spring at the eastern edge of the medina where locals do laundry and children play. It is one of the most authentic and photogenic spots in the city — and consistently overlooked by visitors who never walk that far.',
        'The Spanish Mosque is a 30-minute uphill walk from Plaza Uta el-Hammam. The walk itself — through olive groves with panoramic city views — is better than the mosque. Go slow.',
        'Akchour Waterfalls are 30 km from Chefchaouen (1-hour drive) in Talassemtane National Park. The hike to the big waterfall is 2–3 hours round trip. God\'s Bridge natural rock arch is along the same trail.',
        'Akchour has natural swimming pools fed by emerald-green mountain water. Bring a swimsuit between May and September — this is a genuine highlight.',
        'Talassemtane National Park surrounding Chefchaouen is home to the last stands of the Moroccan fir tree (Abies marocana), found nowhere else on earth.',
        'To reach Akchour, hire a grand taxi from the bus station area (negotiate MAD 100–150 round trip with waiting time) or drive yourself — the road is paved and manageable in a standard car.',
        'Jebel el-Kelaa (1,616m) and Jebel Tisouka (2,118m) are the twin peaks visible from the city that gave Chefchaouen its name — the word means "horns" in Berber.',
        'Hiking trails from the city go in multiple directions. The ridge walk above the Spanish Mosque is accessible without a guide. The longer routes into Talassemtane require one.',
        'Chefchaouen is safe. It consistently ranks among Morocco\'s safest cities for tourists. Petty theft exists as in any tourist destination — use normal urban awareness.',
        'Solo female travelers report Chefchaouen as one of Morocco\'s most comfortable cities. The harassment that can be present in Marrakech or Fes medinas is significantly less here.',
        'The best riads are inside the medina but require carrying luggage up stairs and through narrow alleys. If you have heavy rolling suitcases, book a hotel just outside the medina walls.',
        'Lina Ryad & Spa and Dar Echchaouen are consistently the two most recommended mid-range-to-luxury options. Dar Echchaouen has a pool and is just outside the medina walls — useful for car travelers.',
        'Hostel Aline and Hostal Kasbah are the best budget options — dorms from MAD 80, private rooms available, rooftop terraces, central locations.',
        'The upper medina (Ras El-Maa area) has more residential character and better views than the tourist-heavy lower medina around the main square.',
        'Book accommodation in advance for weekends (Thursday–Sunday), Moroccan holidays, and July–August when day-trippers from Tangier and Tetouan create acute pressure on rooms.',
        'Spring (March–May) and autumn (September–November) are the best seasons: temperatures 18–26°C, clear mountain skies, and manageable crowds.',
        'Summer (June–August) is hot and very busy — the medina can feel claustrophobic by 11am with tour groups. Arrive very early or embrace the chaos.',
        'Winter (December–February) can be cold and rainy — temperatures drop to 5–10°C at night. The medina is beautifully quiet and the light is dramatic.',
        'Chefchaouen sits at 600 metres altitude — noticeably cooler than the coast or Marrakech, especially in the evenings. Bring a layer even in summer.',
        'Tétouan is 60 km south (1 hour by grand taxi, MAD 30–50) — a UNESCO-listed medina with strong Andalusian architecture and almost no tourists. A genuinely rewarding half-day trip.',
        'Tangier is 120 km north (2–2.5 hours by bus or grand taxi) — good day trip, better as part of a north Morocco road trip loop.',
        'The CTM bus to Chefchaouen from Fes takes 4 hours and costs MAD 75. From Tangier: 2–2.5 hours, MAD 40–70. Book online at ctm.ma, especially Thursday–Sunday.',
        'Shared grand taxis from Tétouan are faster than buses and cost similar prices — ask at the taxi stand for Chefchaouen.',
        'There are no large international hotel chains in Chefchaouen. This is intentional. The city\'s accommodation is entirely local-owned riads, guesthouses, and small hotels.',
        'The night walking tour of the medina is underrated. The blue walls lit at night look completely different from daytime — fewer tourists and a completely different atmosphere.',
        'Photography tip: use a wide-angle lens in the narrow alleys — the streets are 1–2 metres wide and you cannot physically step back far enough with a standard lens.',
        'The best souvenir from Chefchaouen is not a photo but a hand-woven wool blanket. They are practical, authentic, genuinely local, and competitively priced here versus anywhere else in Morocco.',
        'Chefchaouen has no major historical sites beyond the Kasbah. It is primarily a sensory experience — the light, the colour, the pace, the food, the mountain air. Come with that expectation.',
        'Plan minimum 2 nights. One day is enough to see the sights. The second day is when Chefchaouen changes you — you slow down, you sit longer, you notice the small things.',
        'Getting to Chefchaouen by car from Casablanca takes 3h45–4h30 via the A1/A4 motorway to Tangier then south via Tétouan. Renting a car at Casablanca Airport (CMN) and making Chefchaouen one stop on a north Morocco loop (Rabat → Tangier → Chefchaouen → Fes) is one of the best itineraries in the country.',
        'The road from Tétouan to Chefchaouen (N2 highway) is one of the most beautiful drives in Morocco — mountain switchbacks, cedar forest, sweeping valley views. Take your time on it.',
      ],
    },
    {
      heading: 'How to Get to Chefchaouen — All Options from Major Cities',
      paragraphs: [
        'Chefchaouen has no train and no airport. Every visitor arrives by road. Here are your realistic options from Morocco\'s main cities.',
      ],
      table: {
        caption: 'Getting to Chefchaouen from major Moroccan cities — 2026',
        headers: ['From', 'Distance', 'Drive time', 'Bus time / price', 'Best option'],
        rows: [
          ['Casablanca (CMN Airport)', '~340 km', '3h45–4h30', 'No direct bus — change at Tangier or Tétouan', 'Rental car: most flexible, best views'],
          ['Tangier', '~120 km', '1h45–2h15', 'CTM bus: 2h, MAD 40–70', 'Grand taxi: MAD 30–50/seat, faster'],
          ['Fes', '~200 km', '3h00–3h45', 'CTM bus: 4h, MAD 75', 'Car: faster, allows Tétouan stop'],
          ['Rabat', '~280 km', '3h30–4h00', 'No direct bus — via Tangier', 'Car: most efficient'],
          ['Marrakech', '~550 km', '6h30–7h30', 'No direct bus — overnight via CTM', 'Car or flight Marrakech → Tangier'],
          ['Tétouan', '~60 km', '1h00–1h15', 'CTM/bus: 1h30, MAD 25–40', 'Grand taxi: MAD 25–35/seat, most common'],
        ],
      },
      callout: {
        label: '🚗 Driving to Chefchaouen: Local Advice',
        body: 'The road from Tétouan to Chefchaouen (N2) is mountain switchbacks — beautiful but slow. A standard economy car handles it easily. Allow 1h15 minimum for this 60 km section. Parking inside Chefchaouen\'s medina is impossible — use guarded parking at the city entrance (MAD 20–30/night). If you\'re renting at Casablanca Airport (CMN), we recommend the full northern loop: Casablanca → Rabat → Tangier → Chefchaouen → Fes → Casablanca. 7–10 days. Book on WhatsApp: +212 634 276 534',
      },
    },
    {
      heading: 'Best Time to Visit Chefchaouen',
      paragraphs: [
        'Chefchaouen\'s mountain location at 600 metres gives it a completely different climate from Marrakech or Casablanca. The city is pleasant year-round but with very different characters across seasons.',
      ],
      table: {
        caption: 'Best time to visit Chefchaouen — month by month 2026',
        headers: ['Season', 'Temperature', 'Crowds', 'Verdict'],
        rows: [
          ['March–May', '15–24°C, sunny, some rain', 'Medium, building', '⭐ Best — perfect light, manageable crowds, wildflowers on the trails'],
          ['June–August', '26–35°C, dry, very busy', 'Peak — overwhelming on weekends', 'Good but arrive early — medina is packed 10am–5pm'],
          ['September–October', '18–26°C, excellent', 'Medium, declining', '⭐ Second best — warm days, cool nights, September particularly perfect'],
          ['November–February', '5–15°C, rain possible', 'Low — mostly domestic', 'Beautiful and quiet — cold evenings, dramatic cloudy light, very few tourists'],
          ['Ramadan (variable)', 'Any weather', 'Local festival atmosphere', 'Interesting cultural experience — some restaurants closed daytime'],
        ],
      },
    },
    {
      heading: 'Where to Stay in Chefchaouen — Honest Guide',
      paragraphs: [
        'The choice of where to stay shapes your entire experience. Chefchaouen has no large hotel chains — every option is a riad, guesthouse, or small boutique hotel, all locally owned.',
      ],
      table: {
        caption: 'Where to stay in Chefchaouen — options by type and budget 2026',
        headers: ['Area', 'Vibe', 'Best for', 'Typical price/night'],
        rows: [
          ['Lower medina (Plaza Uta el-Hammam)', 'Central, lively, touristy', 'First-timers, short stays, Instagram shots', 'MAD 200–800 (€18–74)'],
          ['Upper medina (Ras El-Maa area)', 'Quieter, residential, better views', 'Photography, longer stays, authentic feel', 'MAD 250–600 (€23–55)'],
          ['Just outside medina walls', 'Modern comfort, car access, pool possible', 'Car travelers, families, comfort seekers', 'MAD 400–1,200 (€37–111)'],
          ['Rif Mountains (8–15 km out)', 'Complete silence, hiking access, nature', 'Hikers, couples, digital detox', 'MAD 300–700 (€28–65)'],
        ],
      },
      callout: {
        label: '🏨 Our Recommendations',
        body: 'Luxury/mid-range: Lina Ryad & Spa (inside medina, hammam, exceptional breakfast), Dar Echchaouen (just outside medina, pool, car parking). Budget: Hostel Aline (dorms MAD 80, great rooftop, central). All are 5–10 min from Plaza Uta el-Hammam. Book 2+ weeks ahead for weekends and July–August.',
      },
    },
    {
      heading: 'What to Eat in Chefchaouen — Mountain Food, Not Tourist Food',
      paragraphs: [
        'Chefchaouen\'s food is distinct from the rest of Morocco — influenced by the Rif Mountains, Andalusian heritage, and a tradition of slow, generous mountain cooking. It is, in our team\'s collective opinion, some of the best food in the country.',
        'The essential Chefchaouen food experiences are: fresh goat cheese (jben) with local honey at the morning market; a slow tajine of lamb with local herbs and wild-harvest honey on a rooftop terrace; bissara (fava bean soup) from a street stall for breakfast for MAD 5; and freshly squeezed orange juice at Ras El-Maa beside the stream.',
      ],
      table: {
        caption: 'What to eat in Chefchaouen — local specialties 2026',
        headers: ['Dish / Food', 'Where to find it', 'Price', 'Notes'],
        rows: [
          ['Jben (fresh goat cheese)', 'Morning market near Plaza Uta el-Hammam', 'MAD 15–25', 'Sold in rounds, eat with local honey and bread'],
          ['Bissara (fava bean soup)', 'Street stalls, early morning', 'MAD 5–10', 'The local breakfast — thicker and richer than elsewhere in Morocco'],
          ['Lamb tajine with Rif herbs', 'Any riad restaurant', 'MAD 60–120', 'Mountain herbs make this noticeably different from city tajines'],
          ['Kefta (minced lamb) briouats', 'Medina bakeries and stalls', 'MAD 5–15/piece', 'Fried pastry filled with spiced lamb — eat fresh, eat standing'],
          ['Sfenj (Moroccan doughnuts)', 'Street corners, mornings', 'MAD 2–3 each', 'Hot, fresh, dusted with sugar — better here than anywhere'],
          ['Mint tea with Rif mountain honey', 'Every café terrace', 'MAD 10–20', 'Order the honey on the side — the local honey is extraordinary'],
          ['Orange juice at Ras El-Maa', 'Café at the spring', 'MAD 10–15', 'Fresh-squeezed beside a mountain waterfall — one of Morocco\'s great simple pleasures'],
          ['Amlou dip with bread', 'Riad breakfasts', 'MAD 20–40', 'Argan oil, almond, honey paste — eat with fresh-baked bread'],
        ],
      },
    },
    {
      heading: 'The Best Photo Spots in Chefchaouen (With Times)',
      paragraphs: [
        'Chefchaouen is one of the most photographed cities in the world. These are the shots that matter — and the times and tactics that separate a memorable photo from a tourist-catalog image.',
      ],
      table: {
        caption: 'Best photography spots in Chefchaouen — when to go and what to expect',
        headers: ['Spot', 'Best time', 'Crowd level', 'What makes it special'],
        rows: [
          ['Blue alley staircases (upper medina)', '7–9am', 'Empty', 'Soft blue morning light, no people — the classic Chefchaouen shot'],
          ['Rue Bin Souk', '7–9am or 5–7pm', 'Light', 'Most intense blue walls in the city, narrow staircase perspective'],
          ['Calle Hassan I', '7–9am', 'Empty', 'Residential feel, cats and flower pots, color saturation highest here'],
          ['Plaza Uta el-Hammam', 'Evening (6–8pm)', 'Busy but worth it', 'Main square with Kasbah lit at dusk — the social heart of the city'],
          ['Spanish Mosque viewpoint', 'Sunset or sunrise', 'Crowded at sunset', 'Panoramic city and mountain view — unique shot of entire blue medina'],
          ['Ras El-Maa spring', 'Morning or late afternoon', 'Light', 'Locals at the spring, mountain backdrop, real life — not tourist-facing'],
          ['Rooftop terraces (various)', 'Golden hour (5–7pm)', 'Variable', 'Book a café terrace with a Rif Mountain view — the light turns everything gold'],
          ['Road into Chefchaouen from Tétouan', 'Afternoon arrival', 'None', 'The mountain descent reveals the city gradually — photograph from the car window'],
        ],
      },
    },
    {
      heading: 'Day Trips and Hikes from Chefchaouen',
      paragraphs: [
        'The city itself takes half a day to see. The reason to stay longer is what surrounds it — Talassemtane National Park, Akchour Waterfalls, God\'s Bridge, Tétouan, and trails that go for days into the Rif Mountains.',
      ],
      table: {
        caption: 'Best day trips and hikes from Chefchaouen 2026',
        headers: ['Destination', 'Distance', 'Time needed', 'How to get there', 'Highlight'],
        rows: [
          ['Akchour Waterfalls', '30 km', 'Full day', 'Grand taxi MAD 100–150 return, or rental car', 'Hike to big waterfall (2–3h), swim in emerald pools, God\'s Bridge arch'],
          ['Talassemtane National Park', '10–30 km', 'Half to full day', 'Car or guided', 'Moroccan fir forest, wildlife, scenic trails, spring wildflowers'],
          ['Spanish Mosque hike', '1 km uphill from medina', '1 hour return', 'Walk from Plaza Uta el-Hammam', 'Best panoramic view of the blue city — do at sunset or sunrise'],
          ['Jebel el-Kelaa hike', '5 km from city', 'Half day', 'Walk or taxi to trailhead', 'One of the two "horns" that give Chefchaouen its name — 1,616m views'],
          ['Tétouan', '60 km', 'Half day', 'Grand taxi MAD 30–50/seat', 'UNESCO medina, Andalusian architecture, zero tourists, Royal Palace'],
          ['Derdara village', '15 km', '2–3 hours', 'Grand taxi', 'Berber mountain village, traditional life, local market on Sundays'],
        ],
      },
      callout: {
        label: '💡 Akchour Insider Tip',
        body: 'The grand taxi to Akchour leaves from the street near the bus station — negotiate MAD 100–150 for a return trip with waiting time (1.5–2 hours at the falls). Start by 9am to avoid midday heat on the trail and to get parking near the trailhead before it fills up. Bring water, wear shoes with grip — the path gets slippery near the falls.',
      },
    },
    {
      heading: 'The North Morocco Road Trip: Chefchaouen by Car',
      paragraphs: [
        'The best way to reach Chefchaouen is by rental car, not because it is the only way, but because the road there is half the experience — and the destinations you can connect around it make one of the finest road trips Morocco offers.',
        'The classic north Morocco loop from Casablanca: CMN Airport → Rabat (1h20) → Tangier (3h) → Chefchaouen (2h) → Fes (3h) → Casablanca (3h). Total: 7–10 days. Total driving: ~900 km of Morocco\'s best-maintained roads. Highlights: Atlantic coast, Strait of Gibraltar views, blue city, imperial Fes medina.',
        'MoroccoForYou Cars at CMN Airport handles this route regularly — we know the toll booths, the mountain roads, and the parking situation at every stop. Economy car from €23/day, unlimited mileage.',
      ],
      callout: {
        label: '🚗 Plan Your Chefchaouen Road Trip',
        body: 'Rent your car at Casablanca Airport (CMN) with free meet & greet in the arrivals hall. Economy cars from 250 MAD/day (€23). We\'ll recommend the right car for the mountain roads and give you the local road notes no GPS app knows. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'How many days do you need in Chefchaouen?',
      answer: 'Minimum 2 nights. One day covers the main sights — medina walk, Kasbah Museum, Spanish Mosque, Ras El-Maa. The second day is when Chefchaouen changes your pace: slower, quieter, more rewarding. If hiking to Akchour Waterfalls, add a third day.',
    },
    {
      question: 'Why is Chefchaouen painted blue?',
      answer: 'The most historically supported explanation links the blue to Jewish refugees who settled in Chefchaouen from 1492 onwards, bringing the tradition of painting walls blue as a spiritual practice. The tradition expanded through the 20th century, was reinforced during the Spanish Protectorate, and is now maintained by local residents and the local government because the blue has become both a cultural identity and the city\'s main tourism asset. The honest answer: it is several overlapping stories, not one.',
    },
    {
      question: 'What is the best time to visit Chefchaouen?',
      answer: 'March–May and September–October are the best months: 18–26°C, clear mountain skies, and manageable crowds. Summer (June–August) is beautiful but busy — arrive early to beat the day-tripper rush. Winter is cold but hauntingly quiet and photogenic.',
    },
    {
      question: 'How do you get from Casablanca to Chefchaouen?',
      answer: 'The best option is by rental car — pick up at Casablanca Airport (CMN), drive the A1/A4 motorway to Tangier, then south via Tétouan on the N2 mountain road. Total: 3h45–4h30. The mountain section from Tétouan is one of Morocco\'s most scenic drives. Bus options exist but require connections at Tangier or Tétouan.',
    },
    {
      question: 'Is Chefchaouen safe for tourists?',
      answer: 'Yes — Chefchaouen is consistently one of Morocco\'s safest destinations. The vendor pressure that can be intense in Marrakech or Fes medinas is significantly lower here. Solo female travelers report it as one of Morocco\'s most comfortable cities. Normal urban awareness applies.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'How far is Chefchaouen from Casablanca?', answer: 'Chefchaouen is approximately 340 km from Casablanca, a drive of 3h45–4h30 via the A1/A4 motorway to Tangier and then south via Tétouan on the N2 mountain road. There is no direct bus — the bus route requires a connection at Tangier or Tétouan.' },
    { question: 'What is Chefchaouen known for?', answer: 'Chefchaouen is known globally for its blue-painted medina — a maze of cobalt, indigo, and turquoise walls, stairs, and doorways set in the Rif Mountains of northern Morocco. Beyond the photography, it is known for exceptionally relaxed atmosphere, high-quality artisan crafts, outstanding mountain food, and access to Akchour Waterfalls and Talassemtane National Park.' },
    { question: 'Can you do Chefchaouen as a day trip?', answer: 'Technically yes — it is 2 hours from Tangier and 4 hours from Fes by bus. However, most travelers who do a day trip regret not staying. The medina empties of day-trippers by 5pm and reveals a completely different, quieter character in the evenings and early mornings. Two nights is the local recommendation.' },
  ],
  relatedDestinations: ['chefchaouen', 'fes', 'tangier', 'rabat'],
  relatedPosts: ['how-to-get-from-casablanca-to-chefchaouen', 'casablanca-travel-guide', 'casablanca-to-rabat-by-car', 'best-car-to-rent-in-casablanca-morocco'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Chefchaouen 2026 — La Ville Bleue : 50 Choses à Savoir',
  metaDescription: 'Guide complet Chefchaouen 2026 : pourquoi c\'est bleu, meilleurs spots photos, Mosquée Espagnole, cascades d\'Akchour, où dormir, quoi manger, comment y aller depuis Casablanca, Fès et Tanger.',
  title: 'Guide Voyage Chefchaouen 2026 : 50 Choses à Savoir sur la Ville Bleue du Maroc (Par des Locaux)',
  description: 'Tout sur Chefchaouen écrit par des gens qui y ont conduit des centaines de fois — pourquoi la ville est vraiment bleue, les spots photos que personne ne montre, où dormir dans la médina, les cascades d\'Akchour, la meilleure nourriture, et comment la combiner avec Fès ou Tanger en road trip.',
  keyword: 'guide voyage chefchaouen',
  coverImage: COVER,
  coverAlt: 'Guide voyage Chefchaouen ville bleue Maroc — ruelles cobaltées et médina peinte en bleu dans le Rif',
  publishedISO: '2026-02-22',
  updatedISO: '2026-08-05',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 18,
  intro: 'Chefchaouen est unique au monde. Une ville de montagne peinte en cent nuances de bleu, nichée dans les plis du Rif à trois heures de Casablanca, entourée de forêts de cèdres, de thym sauvage et de sentiers qui récompensent ceux qui arrivent préparés. C\'est aussi l\'un des endroits les plus photographiés d\'Afrique — ce qui signifie qu\'il est simultanément à couper le souffle et, au mauvais moment, complètement submergé par des touristes en excursion. Ce guide est construit sur la connaissance de notre équipe casablancaise qui a conduit des clients à Chefchaouen plus de fois qu\'on ne peut compter. Nous savons où la lumière est la meilleure, quelles rues sont privées, comment éviter la ruée des cars de touristes, et ce qui fait la différence entre une excursion rapide et un séjour dont on se souvient des années. Voici 50 choses à savoir — le pratique, le beau, le contre-intuitif, et ce que la plupart des guides ignorent.',
  sections: [
    {
      heading: 'Pourquoi Chefchaouen est Bleue ? La Vraie Réponse (C\'est Compliqué)',
      paragraphs: [
        'Demandez à dix locaux pourquoi Chefchaouen est bleue et vous obtiendrez dix réponses différentes. La vérité, soutenue par les historiens et les habitants de longue date, est qu\'aucun récit d\'origine unique n\'est correct — le bleu a émergé de plusieurs forces qui se chevauchent sur plusieurs siècles.',
        'L\'explication la plus citée relie le bleu à la communauté juive arrivée à Chefchaouen après le décret de l\'Alhambra de 1492 qui expulsait les Juifs d\'Espagne. Dans la tradition juive, la couleur bleue — tekhelet — porte une signification sacrée, représentant le divin et les cieux. De nombreux historiens pensent que les résidents juifs ont commencé à peindre leurs maisons et le mellah (quartier juif) en bleu comme pratique spirituelle. La communauté fuyant Hitler dans les années 1930 a renforcé cette tradition.',
        'D\'autres explications sont plus pratiques : les locaux disent que la peinture bleue réfléchit mieux la lumière du soleil et maintient les bâtiments plus frais en été, ou qu\'elle repousse les moustiques en imitant l\'eau courante. Aucune n\'a été prouvée de manière concluante, mais les deux histoires persistent.',
        'La réponse la plus honnête : le bleu que les touristes photographient aujourd\'hui s\'est considérablement étendu au XXe siècle, renforcé pendant la période du Protectorat espagnol (1912–1956), et est maintenant activement maintenu par les résidents locaux et même le gouvernement local, qui distribuent de la peinture pour garder la couleur signature de la médina fraîche. Chaque printemps, les résidents repeignent leurs murs, escaliers et portes.',
      ],
      callout: {
        label: '🎨 Détail Local',
        body: 'Le bleu n\'est pas uniforme — il va du bleu poudre pâle à l\'indigo profond en passant par le cobalt et le turquoise selon la rue, la saison et la date du dernier repeinturage. La lumière du matin (7–9h) révèle les bleus les plus dramatiques, particulièrement dans la haute médina où le passage touristique est le plus faible.',
      },
    },
    {
      heading: '50 Choses à Savoir sur Chefchaouen',
      paragraphs: [
        'Ce sont les choses que notre équipe dit à chaque client avant de le déposer aux portes de la ville — la connaissance pratique qui fait la différence entre une visite frustrante et une mémorable.',
      ],
      list: [
        'Chefchaouen n\'a ni gare ferroviaire ni aéroport — la seule façon d\'y accéder est par la route ou le bus. Planifiez votre transport avant d\'arriver.',
        'La médina est entièrement sans voitures. Garez-vous à l\'extérieur des portes et entrez à pied. Les parkings gardés près de la gare routière coûtent MAD 20–30/nuit.',
        'Tôt le matin (7–9h) est le meilleur moment pour photographier les rues bleues — ruelles vides, lumière douce, pas de groupes touristiques.',
        'Le coucher de soleil à la Mosquée Espagnole est la vue la plus célèbre de la ville. Attendez-vous à une foule. Arrivez 30 minutes avant ou essayez le lever de soleil pour la solitude.',
        'Le Callejon El Asri (ruelle bleue) est la rue la plus photographiée. Elle est belle mais envahie dès 10h.',
        'Rue Bin Souk et Calle Hassan I ont les escaliers bleus les plus intenses et le moins de passage touristique — meilleur pour la photographie.',
        'Le bleu est le plus vif dans les rues repeintes récemment. Cherchez l\'indigo le plus profond — ce sont les murs les plus frais.',
        'Les chats sont partout à Chefchaouen et font partie du caractère de la ville. Ne tentez pas de les chasser pour vos photos.',
        'Plaza Uta el-Hammam est la place principale et le meilleur point d\'orientation. Si vous êtes perdus, descendez — vous la trouverez.',
        'Le Musée de la Kasbah sur la place principale coûte MAD 60 d\'entrée. Petit mais vraiment bon — le jardin de la cour est beau.',
        'Aucun guide n\'est nécessaire pour se promener dans la médina — contrairement à Fès, la médina est assez petite (15–20 minutes d\'un bout à l\'autre) pour qu\'on ne puisse vraiment pas se perdre.',
        'Les pavés peints en bleu indiquent souvent la cour d\'une maison privée. Passez si le chemin semble continuer, mais ne vous attardez pas dans les encadrements de porte.',
        'Le thé à la menthe sur une terrasse sur le toit avec vue sur la médina et les montagnes du Rif est l\'expérience essentielle de Chefchaouen. Prenez 30–60 minutes et ne vous précipitez pas.',
        'La nourriture à Chefchaouen est de la cuisine de montagne — différente de Marrakech ou Fès. Attendez-vous à des herbes fraîches, du fromage de chèvre, du miel sauvage et des tajines aux légumes de la vallée du Rif.',
        'Le fromage de chèvre du Rif (jben) est vendu frais chaque matin au petit marché près de Plaza Uta el-Hammam. Mangez-le avec du miel local sur du pain chaud — cela seul justifie le voyage.',
        'Chefchaouen a l\'une des atmosphères de souk les plus détendues et sans pression du Maroc. Vous pouvez parcourir couvertures en laine, djellabas, sandales en cuir et céramiques sans la culture de vendeur agressive de Marrakech.',
        'La qualité artisanale ici est authentiquement supérieure à celle des grandes villes. Les couvertures en laine tissées à la main et les textiles de la région de montagne sont la spécialité de Chefchaouen.',
        'N\'achetez rien au premier vendeur qui vous approche dans la première heure. Parcourez toute la médina d\'abord, notez ce que vous aimez, revenez avec une idée des prix justes.',
        'Le cannabis (kif) est largement disponible et semi-toléré dans la région du Rif — mais il reste techniquement illégal au Maroc. Des étrangers ont été arrêtés. Ne supposez pas que la tolérance égale la légalité.',
        'Ras El-Maa est la source naturelle à l\'extrémité est de la médina où les locaux font leur lessive et les enfants jouent. C\'est l\'un des endroits les plus authentiques et les plus photogéniques de la ville — et constamment ignoré par les visiteurs qui ne marchent jamais aussi loin.',
        'La Mosquée Espagnole est à 30 minutes de marche en montée depuis Plaza Uta el-Hammam. La marche elle-même — à travers des oliveraies avec des vues panoramiques sur la ville — est meilleure que la mosquée. Allez lentement.',
        'Les Cascades d\'Akchour sont à 30 km de Chefchaouen (1 heure de route) dans le Parc National de Talassemtane. La randonnée jusqu\'à la grande cascade dure 2–3 heures aller-retour. Le Pont de Dieu, arche rocheuse naturelle, se trouve sur le même sentier.',
        'Akchour a des piscines naturelles alimentées par une eau de montagne vert émeraude. Apportez un maillot de bain entre mai et septembre — c\'est un véritable point fort.',
        'Le Parc National de Talassemtane abrite les derniers peuplements de sapin du Maroc (Abies marocana), introuvable nulle part ailleurs sur terre.',
        'Pour rejoindre Akchour, louez un grand taxi depuis la zone de la gare routière (négociez MAD 100–150 aller-retour avec temps d\'attente) ou conduisez vous-même — la route est goudronnée.',
        'Jebel el-Kelaa (1 616 m) et Jebel Tisouka (2 118 m) sont les deux sommets visibles depuis la ville qui ont donné son nom à Chefchaouen — le mot signifie "cornes" en berbère.',
        'Des sentiers de randonnée partent de la ville dans plusieurs directions. Le sentier de crête au-dessus de la Mosquée Espagnole est accessible sans guide. Les routes plus longues dans le Talassemtane en nécessitent un.',
        'Chefchaouen est sûre. Elle se classe régulièrement parmi les villes les plus sûres du Maroc pour les touristes. Les petits vols existent comme dans toute destination touristique — exercez une vigilance urbaine normale.',
        'Les voyageuses seules rapportent que Chefchaouen est l\'une des villes les plus confortables du Maroc. Le harcèlement présent à Marrakech ou dans les médinas de Fès y est nettement moindre.',
        'Les meilleurs riads sont à l\'intérieur de la médina mais nécessitent de porter les bagages dans des escaliers et des ruelles étroites. Si vous avez de lourdes valises à roulettes, réservez un hôtel juste à l\'extérieur des murs de la médina.',
        'Lina Ryad & Spa et Dar Echchaouen sont les deux options les plus recommandées en milieu de gamme à luxe. Dar Echchaouen a une piscine et est juste à l\'extérieur des murs de la médina — utile pour les voyageurs en voiture.',
        'Hostel Aline et Hostal Kasbah sont les meilleures options budget — dortoirs à partir de MAD 80, chambres privées disponibles, terrasses sur le toit, emplacements centraux.',
        'La haute médina (quartier Ras El-Maa) a plus de caractère résidentiel et de meilleures vues que la basse médina très touristique autour de la place principale.',
        'Réservez à l\'avance pour les week-ends (jeudi–dimanche), les jours fériés marocains et juillet–août quand les excursionnistes de Tanger et Tétouan créent une pression aiguë sur les chambres.',
        'Le printemps (mars–mai) et l\'automne (septembre–novembre) sont les meilleures saisons : températures 18–26°C, ciel de montagne dégagé, et foules gérables.',
        'L\'été (juin–août) est chaud et très animé — la médina peut sembler claustrophobe vers 11h avec les groupes touristiques. Arrivez très tôt ou acceptez le chaos.',
        'L\'hiver (décembre–février) peut être froid et pluvieux — les températures descendent à 5–10°C la nuit. La médina est magnifiquement silencieuse et la lumière dramatique.',
        'Chefchaouen est à 600 mètres d\'altitude — sensiblement plus fraîche que la côte ou Marrakech, surtout le soir. Apportez une couche même en été.',
        'Tétouan est à 60 km au sud (1 heure en grand taxi, MAD 30–50) — une médina classée UNESCO avec une forte architecture andalouse et presque aucun touriste. Une excursion d\'une demi-journée vraiment enrichissante.',
        'Tanger est à 120 km au nord (2–2,5 heures en bus ou grand taxi) — bonne excursion d\'une journée, meilleur dans le cadre d\'un road trip en boucle nord Maroc.',
        'Le bus CTM vers Chefchaouen depuis Fès prend 4 heures et coûte MAD 75. Depuis Tanger : 2–2,5 heures, MAD 40–70. Réservez en ligne sur ctm.ma, surtout jeudi–dimanche.',
        'Les grands taxis partagés depuis Tétouan sont plus rapides que les bus et coûtent des prix similaires — demandez à la station de taxis pour Chefchaouen.',
        'Il n\'y a pas de grandes chaînes hôtelières internationales à Chefchaouen. C\'est intentionnel. L\'hébergement de la ville est entièrement composé de riads, maisons d\'hôtes et petits hôtels propriété locale.',
        'La visite nocturne guidée de la médina est sous-estimée. Les murs bleus éclairés la nuit semblent complètement différents de la journée — moins de touristes et une atmosphère entièrement différente.',
        'Conseil photo : utilisez un objectif grand angle dans les ruelles étroites — les rues font 1–2 mètres de large et vous ne pouvez physiquement pas reculer assez loin avec un objectif standard.',
        'Le meilleur souvenir de Chefchaouen n\'est pas une photo mais une couverture en laine tissée à la main. Elles sont pratiques, authentiques, véritablement locales et compétitives en prix ici par rapport à partout ailleurs au Maroc.',
        'Chefchaouen n\'a pas de sites historiques majeurs au-delà de la Kasbah. C\'est principalement une expérience sensorielle — la lumière, la couleur, le rythme, la nourriture, l\'air de montagne. Venez avec cette attente.',
        'Planifiez minimum 2 nuits. Une journée suffit pour voir les sites. Le deuxième jour est celui où Chefchaouen vous change — vous ralentissez, vous vous asseyez plus longtemps, vous remarquez les petites choses.',
        'Rejoindre Chefchaouen en voiture depuis Casablanca prend 3h45–4h30 via l\'autoroute A1/A4 vers Tanger puis au sud via Tétouan. Louer une voiture à l\'aéroport de Casablanca (CMN) et faire de Chefchaouen une étape d\'une boucle nord Maroc est l\'un des meilleurs itinéraires du pays.',
        'La route de Tétouan à Chefchaouen (N2) est l\'une des plus belles du Maroc — lacets de montagne, forêt de cèdres, vues panoramiques sur la vallée. Prenez votre temps.',
      ],
    },
    {
      heading: 'Comment Rejoindre Chefchaouen — Toutes les Options depuis les Grandes Villes',
      paragraphs: [
        'Chefchaouen n\'a ni train ni aéroport. Chaque visiteur arrive par la route. Voici vos options réalistes depuis les principales villes du Maroc.',
      ],
      table: {
        caption: 'Rejoindre Chefchaouen depuis les grandes villes marocaines — 2026',
        headers: ['Depuis', 'Distance', 'Temps de conduite', 'Bus / prix', 'Meilleure option'],
        rows: [
          ['Casablanca (Aéroport CMN)', '~340 km', '3h45–4h30', 'Pas de bus direct — correspondance à Tanger ou Tétouan', 'Voiture de location : le plus flexible, meilleures vues'],
          ['Tanger', '~120 km', '1h45–2h15', 'Bus CTM : 2h, MAD 40–70', 'Grand taxi : MAD 30–50/place, plus rapide'],
          ['Fès', '~200 km', '3h00–3h45', 'Bus CTM : 4h, MAD 75', 'Voiture : plus rapide, permet arrêt Tétouan'],
          ['Rabat', '~280 km', '3h30–4h00', 'Pas de bus direct — via Tanger', 'Voiture : le plus efficace'],
          ['Marrakech', '~550 km', '6h30–7h30', 'Pas de bus direct — nuit via CTM', 'Voiture ou vol Marrakech → Tanger'],
          ['Tétouan', '~60 km', '1h00–1h15', 'CTM/bus : 1h30, MAD 25–40', 'Grand taxi : MAD 25–35/place, le plus courant'],
        ],
      },
      callout: {
        label: '🚗 Conduire vers Chefchaouen : Conseils Locaux',
        body: 'La route de Tétouan à Chefchaouen (N2) est faite de lacets de montagne — magnifique mais lente. Une voiture économique standard s\'en sort très bien. Comptez 1h15 minimum pour ces 60 km. Le parking à l\'intérieur de la médina est impossible — utilisez les parkings gardés à l\'entrée de la ville (MAD 20–30/nuit). Si vous louez à l\'aéroport de Casablanca (CMN), nous recommandons la boucle nord complète : Casablanca → Rabat → Tanger → Chefchaouen → Fès → Casablanca. 7–10 jours. Réservez sur WhatsApp : +212 634 276 534',
      },
    },
    {
      heading: 'Meilleure Période pour Visiter Chefchaouen',
      paragraphs: [
        'L\'emplacement de Chefchaouen en montagne à 600 mètres lui donne un climat complètement différent de Marrakech ou Casablanca.',
      ],
      table: {
        caption: 'Meilleure période pour visiter Chefchaouen — mois par mois 2026',
        headers: ['Saison', 'Température', 'Affluence', 'Verdict'],
        rows: [
          ['Mars–Mai', '15–24°C, ensoleillé, quelques pluies', 'Moyen, croissant', '⭐ Meilleur — lumière parfaite, foules gérables, fleurs sauvages sur les sentiers'],
          ['Juin–Août', '26–35°C, sec, très animé', 'Pic — écrasant les week-ends', 'Bien mais arrivez tôt — médina bondée 10h–17h'],
          ['Septembre–Octobre', '18–26°C, excellent', 'Moyen, décroissant', '⭐ Deuxième meilleur — journées chaudes, nuits fraîches, septembre particulièrement parfait'],
          ['Novembre–Février', '5–15°C, pluies possibles', 'Faible — surtout domestique', 'Beau et calme — soirées froides, lumière nuageuse dramatique, très peu de touristes'],
          ['Ramadan (variable)', 'Toute météo', 'Ambiance de fête locale', 'Expérience culturelle intéressante — certains restaurants fermés en journée'],
        ],
      },
    },
    {
      heading: 'Où Dormir à Chefchaouen — Guide Honnête',
      paragraphs: [
        'Le choix de l\'hébergement détermine toute votre expérience. Chefchaouen n\'a pas de grandes chaînes hôtelières — chaque option est un riad, une maison d\'hôtes ou un petit hôtel boutique, tous à propriété locale.',
      ],
      table: {
        caption: 'Où dormir à Chefchaouen — options par type et budget 2026',
        headers: ['Quartier', 'Ambiance', 'Idéal pour', 'Prix typique/nuit'],
        rows: [
          ['Basse médina (Plaza Uta el-Hammam)', 'Central, animé, touristique', 'Premiers visiteurs, courts séjours, photos Instagram', 'MAD 200–800 (18–74€)'],
          ['Haute médina (quartier Ras El-Maa)', 'Plus calme, résidentiel, meilleures vues', 'Photographie, longs séjours, ambiance authentique', 'MAD 250–600 (23–55€)'],
          ['Juste à l\'extérieur des murs', 'Confort moderne, accès voiture, piscine possible', 'Voyageurs en voiture, familles, amateurs de confort', 'MAD 400–1 200 (37–111€)'],
          ['Montagnes du Rif (8–15 km)', 'Silence complet, accès randonnée, nature', 'Randonneurs, couples, détox numérique', 'MAD 300–700 (28–65€)'],
        ],
      },
      callout: {
        label: '🏨 Nos Recommandations',
        body: 'Luxe/milieu de gamme : Lina Ryad & Spa (dans la médina, hammam, petit-déjeuner exceptionnel), Dar Echchaouen (juste à l\'extérieur de la médina, piscine, parking voiture). Budget : Hostel Aline (dortoirs MAD 80, super terrasse, central). Tous à 5–10 min de Plaza Uta el-Hammam. Réservez 2+ semaines à l\'avance pour les week-ends et juillet–août.',
      },
    },
    {
      heading: 'Que Manger à Chefchaouen — Cuisine de Montagne, Pas Cuisine Touristique',
      paragraphs: [
        'La nourriture de Chefchaouen est distincte du reste du Maroc — influencée par les montagnes du Rif, l\'héritage andalou, et une tradition de cuisine de montagne lente et généreuse.',
      ],
      table: {
        caption: 'Que manger à Chefchaouen — spécialités locales 2026',
        headers: ['Plat / Aliment', 'Où le trouver', 'Prix', 'Notes'],
        rows: [
          ['Jben (fromage de chèvre frais)', 'Marché du matin près de Plaza Uta el-Hammam', 'MAD 15–25', 'Vendu en boules, mangez avec du miel local et du pain'],
          ['Bissara (soupe de fèves)', 'Étals de rue, tôt le matin', 'MAD 5–10', 'Le petit-déjeuner local — plus épais et plus riche qu\'ailleurs'],
          ['Tajine d\'agneau aux herbes du Rif', 'Tout restaurant de riad', 'MAD 60–120', 'Les herbes de montagne rendent ce plat sensiblement différent'],
          ['Briouats de kefta', 'Boulangeries et étals de la médina', 'MAD 5–15/pièce', 'Pâtisserie frite garnie d\'agneau épicé — mangez frais, debout'],
          ['Sfenj (beignets marocains)', 'Coins de rue, le matin', 'MAD 2–3 chacun', 'Chauds, frais, saupoudrés de sucre — meilleurs ici qu\'ailleurs'],
          ['Thé à la menthe au miel du Rif', 'Toute terrasse de café', 'MAD 10–20', 'Commandez le miel à part — le miel local est extraordinaire'],
          ['Jus d\'orange à Ras El-Maa', 'Café à la source', 'MAD 10–15', 'Pressé frais à côté d\'une cascade de montagne — l\'un des grands plaisirs simples du Maroc'],
          ['Trempette amlou avec pain', 'Petits-déjeuners de riad', 'MAD 20–40', 'Pâte d\'huile d\'argan, amande et miel — avec du pain fraîchement cuit'],
        ],
      },
    },
    {
      heading: 'Les Meilleurs Spots Photo à Chefchaouen (Avec Horaires)',
      paragraphs: [
        'Chefchaouen est l\'une des villes les plus photographiées au monde. Voici les shots qui comptent — et les horaires et tactiques qui séparent une photo mémorable d\'une image de catalogue touristique.',
      ],
      table: {
        caption: 'Meilleurs spots photo à Chefchaouen — quand y aller et à quoi s\'attendre',
        headers: ['Spot', 'Meilleur moment', 'Niveau d\'affluence', 'Ce qui le rend spécial'],
        rows: [
          ['Escaliers ruelles bleues (haute médina)', '7–9h', 'Vide', 'Douce lumière bleue matinale, aucune personne — le shot classique de Chefchaouen'],
          ['Rue Bin Souk', '7–9h ou 17–19h', 'Léger', 'Murs les plus intenses de la ville, perspective escalier étroit'],
          ['Calle Hassan I', '7–9h', 'Vide', 'Ambiance résidentielle, chats et pots de fleurs, saturation des couleurs maximale'],
          ['Plaza Uta el-Hammam', 'Soirée (18–20h)', 'Animé mais ça vaut le coup', 'Place principale avec la Kasbah éclairée au crépuscule'],
          ['Point de vue Mosquée Espagnole', 'Coucher ou lever de soleil', 'Bondé au coucher de soleil', 'Vue panoramique ville et montagne — shot unique de toute la médina bleue'],
          ['Source Ras El-Maa', 'Matin ou fin d\'après-midi', 'Léger', 'Locaux à la source, toile de fond montagne, vraie vie'],
          ['Terrasses sur les toits (diverses)', 'Heure dorée (17–19h)', 'Variable', 'Réservez une terrasse de café avec vue sur le Rif — la lumière dore tout'],
          ['Route vers Chefchaouen depuis Tétouan', 'Après-midi à l\'arrivée', 'Aucun', 'La descente en montagne révèle la ville progressivement'],
        ],
      },
    },
    {
      heading: 'Excursions et Randonnées depuis Chefchaouen',
      paragraphs: [
        'La ville elle-même prend une demi-journée à voir. La raison de rester plus longtemps est ce qui l\'entoure — le Parc National de Talassemtane, les Cascades d\'Akchour, le Pont de Dieu, Tétouan, et des sentiers qui s\'enfoncent des jours dans les montagnes du Rif.',
      ],
      table: {
        caption: 'Meilleures excursions et randonnées depuis Chefchaouen 2026',
        headers: ['Destination', 'Distance', 'Temps nécessaire', 'Comment y aller', 'Point fort'],
        rows: [
          ['Cascades d\'Akchour', '30 km', 'Journée complète', 'Grand taxi MAD 100–150 aller-retour, ou voiture de location', 'Randonnée grande cascade (2–3h), baignade en piscines émeraude, Pont de Dieu'],
          ['Parc National de Talassemtane', '10–30 km', 'Demi à journée complète', 'Voiture ou guidé', 'Forêt de sapins marocains, faune, sentiers panoramiques'],
          ['Randonnée Mosquée Espagnole', '1 km en montée depuis la médina', '1 heure aller-retour', 'Marche depuis Plaza Uta el-Hammam', 'Meilleure vue panoramique sur la ville bleue'],
          ['Randonnée Jebel el-Kelaa', '5 km depuis la ville', 'Demi-journée', 'Marche ou taxi jusqu\'au départ', 'L\'une des deux "cornes" qui donnent le nom à Chefchaouen — vues à 1 616m'],
          ['Tétouan', '60 km', 'Demi-journée', 'Grand taxi MAD 30–50/place', 'Médina UNESCO, architecture andalouse, zéro touriste, Palais Royal'],
          ['Village de Derdara', '15 km', '2–3 heures', 'Grand taxi', 'Village berbère de montagne, vie traditionnelle, marché local le dimanche'],
        ],
      },
      callout: {
        label: '💡 Conseil Insider Akchour',
        body: 'Le grand taxi pour Akchour part de la rue près de la gare routière — négociez MAD 100–150 pour un aller-retour avec temps d\'attente (1,5–2 heures aux cascades). Démarrez à 9h pour éviter la chaleur de midi sur le sentier. Apportez de l\'eau, portez des chaussures à grip — le chemin devient glissant près des cascades.',
      },
    },
    {
      heading: 'Le Road Trip Nord Maroc : Chefchaouen en Voiture',
      paragraphs: [
        'La meilleure façon de rejoindre Chefchaouen est en voiture de location, non pas parce que c\'est le seul moyen, mais parce que la route est la moitié de l\'expérience — et les destinations qu\'on peut connecter autour font l\'un des meilleurs road trips que le Maroc offre.',
        'La boucle classique nord Maroc depuis Casablanca : Aéroport CMN → Rabat (1h20) → Tanger (3h) → Chefchaouen (2h) → Fès (3h) → Casablanca (3h). Total : 7–10 jours. Kilométrage total : ~900 km sur les routes les mieux entretenues du Maroc. Points forts : côte atlantique, vues sur le détroit de Gibraltar, ville bleue, médina impériale de Fès.',
        'MoroccoForYou Cars à l\'aéroport CMN gère cette route régulièrement — nous connaissons les péages, les routes de montagne, et la situation de stationnement à chaque étape. Voiture économique à partir de 23€/jour, kilométrage illimité.',
      ],
      callout: {
        label: '🚗 Planifiez Votre Road Trip Chefchaouen',
        body: 'Louez votre voiture à l\'aéroport de Casablanca (CMN) avec accueil gratuit dans le hall des arrivées. Voitures économiques à partir de 250 MAD/jour (23€). Nous vous recommanderons la bonne voiture pour les routes de montagne et vous donnerons les notes de route locales qu\'aucun GPS ne connaît. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'Combien de jours faut-il à Chefchaouen ?',
      answer: 'Minimum 2 nuits. Une journée couvre les sites principaux — balade dans la médina, Musée de la Kasbah, Mosquée Espagnole, Ras El-Maa. Le deuxième jour est celui où Chefchaouen change votre rythme. Si vous randonnez aux Cascades d\'Akchour, ajoutez un troisième jour.',
    },
    {
      question: 'Pourquoi Chefchaouen est-elle peinte en bleu ?',
      answer: 'L\'explication la plus historiquement soutenue relie le bleu aux réfugiés juifs installés à Chefchaouen depuis 1492, apportant la tradition de peindre les murs en bleu comme pratique spirituelle. La tradition s\'est étendue au XXe siècle et est maintenant maintenue activement par les résidents et le gouvernement local. La réponse honnête : c\'est plusieurs histoires qui se superposent, pas une seule.',
    },
    {
      question: 'Quelle est la meilleure période pour visiter Chefchaouen ?',
      answer: 'Mars–Mai et septembre–octobre sont les meilleurs mois : 18–26°C, ciel de montagne dégagé, foules gérables. L\'été est beau mais chargé — arrivez tôt pour éviter les excursionnistes. L\'hiver est froid mais d\'une quietude envoûtante.',
    },
    {
      question: 'Comment aller de Casablanca à Chefchaouen ?',
      answer: 'La meilleure option est en voiture de location — prenez-la à l\'aéroport CMN, prenez l\'autoroute A1/A4 vers Tanger, puis au sud via Tétouan sur la route de montagne N2. Total : 3h45–4h30. La section de montagne depuis Tétouan est l\'un des plus beaux trajets du Maroc.',
    },
    {
      question: 'Est-ce que Chefchaouen est sûre pour les touristes ?',
      answer: 'Oui — Chefchaouen se classe régulièrement parmi les destinations les plus sûres du Maroc. La pression des vendeurs intense à Marrakech ou dans les médinas de Fès y est nettement moindre. Les voyageuses seules la signalent comme l\'une des villes les plus confortables du Maroc.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Quelle est la distance entre Chefchaouen et Casablanca ?', answer: 'Chefchaouen est à environ 340 km de Casablanca, un trajet de 3h45–4h30 via l\'autoroute A1/A4 vers Tanger puis au sud via Tétouan sur la route de montagne N2. Il n\'y a pas de bus direct — la liaison bus nécessite une correspondance à Tanger ou Tétouan.' },
    { question: 'Pour quoi Chefchaouen est-elle connue ?', answer: 'Chefchaouen est connue mondialement pour sa médina peinte en bleu — un labyrinthe de murs, escaliers et portes cobalt, indigo et turquoise dans les montagnes du Rif au nord du Maroc. Au-delà de la photographie, elle est réputée pour son atmosphère exceptionnellement détendue, ses produits artisanaux de qualité, sa cuisine de montagne remarquable et l\'accès aux Cascades d\'Akchour.' },
    { question: 'Peut-on faire Chefchaouen en excursion d\'une journée ?', answer: 'Techniquement oui — c\'est à 2 heures de Tanger et 4 heures de Fès en bus. Cependant, la plupart des voyageurs qui font une excursion regrettent de ne pas avoir dormi sur place. La médina se vide des excursionnistes à 17h et révèle un caractère complètement différent, plus calme, le soir et tôt le matin. Deux nuits est la recommandation locale.' },
  ],
  relatedDestinations: ['chefchaouen', 'fes', 'tangier', 'rabat'],
  relatedPosts: ['comment-aller-de-casablanca-a-chefchaouen', 'guide-voyage-casablanca', 'casablanca-rabat-en-voiture', 'meilleure-voiture-louer-casablanca-maroc'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر لشفشاون 2026 — المدينة الزرقاء: 50 شيئاً تحتاج معرفته',
  metaDescription: 'دليل شامل لشفشاون 2026: لماذا هي زرقاء، أفضل نقاط التصوير، المسجد الإسباني، شلالات أكشور، أين تقيم، ماذا تأكل، كيف تصل من الدار البيضاء وفاس وطنجة.',
  title: 'دليل السفر لشفشاون 2026: 50 شيئاً تعرفه عن المدينة الزرقاء بالمغرب (من المحليين)',
  description: 'كل شيء عن شفشاون من أناس قادوا إليها مئات المرات — لماذا المدينة زرقاء فعلاً، نقاط التصوير التي لا يريك إياها أحد، أين تقيم داخل المدينة العتيقة، شلالات أكشور، أفضل طعام، وكيف تدمجها مع فاس أو طنجة في رحلة برية.',
  keyword: 'دليل السفر لشفشاون',
  coverImage: COVER,
  coverAlt: 'دليل السفر لشفشاون المدينة الزرقاء المغرب — أزقة كوبالتية ومدينة عتيقة مطلية بالأزرق في جبال الريف',
  publishedISO: '2026-02-22',
  updatedISO: '2026-08-05',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 18,
  intro: 'شفشاون لا مثيل لها في العالم. مدينة جبلية مطلية بمئة درجة من الأزرق، محاطة بطيات جبال الريف على بعد ثلاث ساعات من الدار البيضاء، تحيط بها غابات الأرز والزعتر البري والمسارات التي تكافئ من يأتيها مستعداً. إنها أيضاً واحدة من أكثر الأماكن تصويراً في أفريقيا — مما يعني أنها في آنٍ واحد ساحرة ومزدحمة في الوقت الخاطئ بزوار يومٍ يصوّرون القطط. هذا الدليل مبني على معرفة فريقنا المقيم في الدار البيضاء الذي أوصل عملاء إلى شفشاون أكثر مما يمكن إحصاؤه. نعرف أين يكون الضوء في أفضل حالاته، أي الشوارع خاصة، كيف تتجنب حشود حافلات السياحة، وما الذي يصنع الفرق بين زيارة متسرعة وإقامة تبقى في الذاكرة لسنوات. إليك 50 شيئاً تعرفه.',
  sections: [
    {
      heading: 'لماذا شفشاون زرقاء؟ الإجابة الحقيقية (إنها معقدة)',
      paragraphs: [
        'اسأل عشرة محليين لماذا شفشاون زرقاء وستحصل على عشر إجابات مختلفة. الحقيقة، التي يدعمها المؤرخون والمقيمون القدامى، هي أن لا قصة أصل واحدة صحيحة — نشأ الأزرق من عدة قوى متداخلة عبر قرون متعددة.',
        'التفسير الأكثر استشهاداً يربط الأزرق بالمجتمع اليهودي الذي وصل إلى شفشاون بعد مرسوم الحمراء عام 1492 الذي طرد اليهود من إسبانيا. في التقليد اليهودي، اللون الأزرق — التخيلت — يحمل أهمية روحية، يمثل الإلهي والسماوات. يعتقد كثير من المؤرخين أن السكان اليهود بدأوا في طلاء منازلهم والملاح (الحي اليهودي) باللون الأزرق كممارسة روحية.',
        'تفسيرات أخرى أكثر عملية: يقول المحليون إن الطلاء الأزرق يعكس ضوء الشمس بشكل أفضل ويبقي المباني أكثر برودة في الصيف، أو أنه يطرد البعوض بتقليد مظهر المياه الجارية.',
        'الإجابة الأكثر صدقاً: الأزرق الذي يصوّره السياح اليوم توسع بشكل كبير في القرن العشرين، تعزز خلال فترة الحماية الإسبانية (1912–1956)، ويُصان الآن بنشاط من قبل السكان المحليين وحتى الحكومة المحلية، التي توزع الطلاء للحفاظ على لون المدينة المميز طازجاً. كل ربيع، يعيد السكان طلاء جدرانهم وسلالمهم وأبوابهم.',
      ],
      callout: {
        label: '🎨 تفصيل محلي',
        body: 'الأزرق ليس موحداً — يتراوح من الأزرق الباودر الفاتح إلى النيلي العميق مروراً بالكوبالت والفيروزي حسب الشارع والموسم وتاريخ آخر طلاء. ضوء الصباح الباكر (7–9 صباحاً) يكشف أكثر الأزرق دراماتيكية، خاصة في المدينة العتيقة العليا حيث حركة السياح في أدناها.',
      },
    },
    {
      heading: '50 شيئاً تعرفه عن شفشاون',
      paragraphs: [
        'هذه الأشياء التي يخبرها فريقنا كل عميل قبل أن نتركه عند بوابات المدينة — المعرفة العملية التي تفرق بين زيارة محبطة وزيارة لا تُنسى.',
      ],
      list: [
        'شفشاون لا تملك محطة قطار ولا مطار — الطريق الوحيد هو البر أو الحافلة. خطط للنقل قبل الوصول.',
        'المدينة العتيقة خالية كلياً من السيارات. اركن خارج البوابات وادخل سيراً. مواقف السيارات المحروسة قرب محطة الحافلات تكلف MAD 20–30/ليلة.',
        'الصباح الباكر (7–9 صباحاً) هو أفضل وقت لتصوير الشوارع الزرقاء — أزقة فارغة، ضوء ناعم، لا مجموعات سياحية.',
        'غروب الشمس عند نقطة مشاهدة المسجد الإسباني هو المشهد الأشهر في المدينة. توقع حشداً. اصل قبل 30 دقيقة أو جرب شروق الشمس للانفراد.',
        'الكاليخون إل أسري (الزقاق الأزرق) هو الشارع الأكثر تصويراً. جميل لكن مكتظ بحلول الساعة العاشرة.',
        'شارع بن سوق وكالي حسن الأول لديهما أكثر السلالم الزرقاء كثافة وأقل حركة سياحية — أفضل للتصوير.',
        'الأزرق أكثر حيوية في الشوارع التي أُعيد طلاؤها مؤخراً. ابحث عن النيلي الأعمق — هذه أحدث الجدران.',
        'القطط في كل مكان في شفشاون وهي جزء من طابع المدينة. لا تحاول إبعادها للتصوير.',
        'ساحة عطا الحمام هي الساحة الرئيسية وأفضل نقطة توجيه. إذا ضللت الطريق، اسر نزولاً — ستجدها.',
        'متحف القصبة في الساحة الرئيسية يكلف MAD 60 دخولاً. صغير لكن جيد حقاً — حديقة الفناء جميلة.',
        'لا تحتاج مرشداً للمشي في المدينة العتيقة — خلافاً لفاس، المدينة صغيرة كفاية (15–20 دقيقة من طرف لآخر) حتى لا تضيع فعلاً.',
        'الحجارة المطلية بالأزرق تشير غالباً إلى فناء منزل خاص. امش إذا بدا الطريق مستمراً، لكن لا تتلكأ في أطر الأبواب.',
        'الشاي بالنعناع على سطح مع إطلالة على المدينة وجبال الريف هي التجربة الأساسية في شفشاون. خصص 30–60 دقيقة ولا تتسرع.',
        'طعام شفشاون هو طعام جبلي — مختلف عن مراكش أو فاس. توقع أعشاباً طازجة وجبن الماعز والعسل البري والطواجن بخضروات وادي الريف.',
        'جبن الماعز الطازج من الريف (جبن) يُباع طازجاً كل صباح في السوق الصغير قرب ساحة عطا الحمام. اأكله مع عسل محلي على خبز دافئ — هذا وحده يستحق الرحلة.',
        'شفشاون تملك واحدة من أكثر أجواء السوق هدوءاً وأقلها ضغطاً في المغرب. يمكنك تصفح البطانيات الصوفية والجلابيات وصناديل الجلد والخزفيات دون ثقافة البائع العدوانية في مراكش.',
        'جودة الحرف هنا أعلى بالفعل من المدن الكبرى. البطانيات الصوفية المنسوجة يدوياً ومنسوجات منطقة الجبل هي تخصص شفشاون.',
        'لا تشترِ شيئاً من أول بائع يقترب منك في الساعة الأولى. تجول في المدينة كلها أولاً، لاحظ ما يعجبك، عد مع إحساس بالأسعار العادلة.',
        'القنب (الكيف) متاح على نطاق واسع ومتسامح معه نسبياً في منطقة الريف — لكنه يبقى غير قانوني تقنياً في المغرب. اعتُقل أجانب. لا تفترض أن التسامح يساوي القانونية.',
        'رأس الماء هو الينبوع الطبيعي في الطرف الشرقي من المدينة حيث يغسل السكان الملابس ويلعب الأطفال. إنه أحد أكثر الأماكن أصالةً وأجمل للتصوير في المدينة — ويُتجاهل باستمرار من قبل الزوار الذين لا يمشون بعيداً بما يكفي.',
        'المسجد الإسباني على بعد 30 دقيقة صعوداً من ساحة عطا الحمام. المشي نفسه — عبر بساتين الزيتون مع إطلالات بانورامية على المدينة — أفضل من المسجد. سر ببطء.',
        'شلالات أكشور على بعد 30 كم من شفشاون (ساعة بالسيارة) في المنتزه الوطني لتالاسمطان. يستغرق الوصول إلى الشلال الكبير سيراً 2–3 ساعات ذهاباً وإياباً. جسر الله، القوس الصخري الطبيعي، على نفس المسار.',
        'أكشور لديه بحيرات طبيعية يغذيها ماء جبلي أخضر زمردي. أحضر ملابس السباحة بين مايو وسبتمبر — هذه نقطة بارزة حقيقية.',
        'المنتزه الوطني لتالاسمطان المحيط بشفشاون يضم آخر أرواد شجرة الضربة المغربية (Abies marocana)، لا توجد في أي مكان آخر على الأرض.',
        'للوصول إلى أكشور، استأجر سيارة أجرة كبيرة من منطقة محطة الحافلات (تفاوض على MAD 100–150 ذهاباً وإياباً مع وقت انتظار) أو قُد بنفسك — الطريق معبد ومناسب لسيارة قياسية.',
        'جبل الكلاع (1,616م) وجبل تيسوكا (2,118م) هما القمتان اللتان تبدوان من المدينة وأعطتا شفشاون اسمها — الكلمة تعني "القرون" بالأمازيغية.',
        'مسارات المشي تنطلق من المدينة في اتجاهات متعددة. مسار التل فوق المسجد الإسباني متاح بدون مرشد. الطرق الأطول داخل تالاسمطان تتطلب مرشداً.',
        'شفشاون آمنة. تُصنَّف باستمرار ضمن أكثر المدن المغربية أماناً للسياح. السرقة الخفيفة موجودة كأي وجهة سياحية — استخدم اليقظة الحضرية المعتادة.',
        'المسافرات المنفردات يبلّغن عن شفشاون كواحدة من أكثر المدن راحةً في المغرب. التحرش الحاضر في مراكش أو مدينتي فاس العتيقة أقل بكثير هنا.',
        'أفضل الرياضات داخل المدينة العتيقة لكنها تتطلب حمل الأمتعة في السلالم والأزقة الضيقة. إذا كانت لديك حقائب كبيرة بعجلات، احجز فندقاً خارج أسوار المدينة مباشرة.',
        'لينا رياض وسبا ودار الشاوون هما الخياران الأكثر توصية في الفئة المتوسطة إلى الفاخرة. دار الشاوون لديه مسبح وخارج أسوار المدينة مباشرة — مفيد لمسافري السيارات.',
        'نزل أليني وهوستال القصبة هما أفضل الخيارات الاقتصادية — أسرّة مشتركة من MAD 80، غرف خاصة متاحة، أسطح مع مناظر، مواقع مركزية.',
        'المدينة العتيقة العليا (منطقة رأس الماء) لها طابع سكاني أكثر وإطلالات أفضل من المدينة السفلى السياحية المكتظة حول الساحة الرئيسية.',
        'احجز مسبقاً لعطل نهاية الأسبوع (الخميس–الأحد) والإجازات المغربية ويوليو–أغسطس عندما يضغط الزوار اليوميون من طنجة وتطوان على الغرف بشدة.',
        'الربيع (مارس–مايو) والخريف (سبتمبر–نوفمبر) أفضل المواسم: درجات حرارة 18–26°م، سماء جبلية صافية، وحشود مقبولة.',
        'الصيف (يونيو–أغسطس) حار ومزدحم جداً — يمكن أن تبدو المدينة خانقة بحلول الساعة الحادية عشرة مع المجموعات السياحية. اصل باكراً جداً أو استوعب الضجة.',
        'الشتاء (ديسمبر–فبراير) يمكن أن يكون بارداً وممطراً — تنخفض درجات الحرارة إلى 5–10°م ليلاً. المدينة هادئة جمالاً وضوء دراماتيكي.',
        'شفشاون على ارتفاع 600 متر — أبرد ملحوظ من الساحل أو مراكش، خاصة في المساء. أحضر طبقة حتى في الصيف.',
        'تطوان على بعد 60 كم جنوباً (ساعة بسيارة أجرة كبيرة، MAD 30–50) — مدينة عتيقة مدرجة في اليونسكو بعمارة أندلسية قوية وتقريباً لا سياح. نزهة نصف يوم مجدية حقاً.',
        'طنجة على بعد 120 كم شمالاً (2–2.5 ساعة بحافلة أو سيارة أجرة كبيرة) — رحلة يومية جيدة، أفضل كجزء من رحلة برية في حلقة شمال المغرب.',
        'حافلة CTM إلى شفشاون من فاس تستغرق 4 ساعات وتكلف MAD 75. من طنجة: 2–2.5 ساعة، MAD 40–70. احجز على الإنترنت في ctm.ma، خاصة الخميس–الأحد.',
        'سيارات الأجرة الكبيرة المشتركة من تطوان أسرع من الحافلات وبأسعار مماثلة — اسأل في موقف التاكسي لشفشاون.',
        'لا توجد سلاسل فنادق دولية كبرى في شفشاون. هذا مقصود. الإقامة في المدينة كلها رياضات محلية الملكية ودور ضيافة وفنادق صغيرة.',
        'جولة المشي الليلية في المدينة مقللة من قيمتها. الجدران الزرقاء مضاءة ليلاً تبدو مختلفة كلياً عن النهار — سياح أقل وأجواء مختلفة تماماً.',
        'نصيحة تصوير: استخدم عدسة زاوية واسعة في الأزقة الضيقة — الشوارع 1–2 متر عرضاً ولا يمكنك التراجع فعلياً بما يكفي بعدسة قياسية.',
        'أفضل تذكار من شفشاون ليس صورة بل بطانية صوفية منسوجة يدوياً. عملية وأصيلة ومحلية حقاً وتنافسية في السعر هنا مقارنة بأي مكان آخر في المغرب.',
        'شفشاون لا تملك مواقع تاريخية كبرى بعيداً عن القصبة. إنها أساساً تجربة حسية — الضوء، اللون، الإيقاع، الطعام، هواء الجبل. تعال بهذا التوقع.',
        'خطط لليلتين على الأقل. يوم واحد يكفي لرؤية المعالم. اليوم الثاني هو عندما تغيّرك شفشاون — تتباطأ، تجلس أطول، تلاحظ الأشياء الصغيرة.',
        'الوصول إلى شفشاون بالسيارة من الدار البيضاء يستغرق 3:45–4:30 ساعة عبر الطريق السريع A1/A4 إلى طنجة ثم جنوباً عبر تطوان. استئجار سيارة من مطار الدار البيضاء (CMN) وجعل شفشاون محطة في حلقة شمال المغرب هي أحد أفضل المسارات في البلاد.',
        'الطريق من تطوان إلى شفشاون (N2) هو أحد أجمل مسارات القيادة في المغرب — منعطفات جبلية، غابات أرز، إطلالات بانورامية على الوادي. خذ وقتك فيها.',
      ],
    },
    {
      heading: 'كيف تصل إلى شفشاون — جميع الخيارات من المدن الكبرى',
      paragraphs: [
        'شفشاون لا تملك قطاراً ولا مطاراً. كل زائر يصل بالبر. إليك خياراتك الواقعية من المدن الرئيسية بالمغرب.',
      ],
      table: {
        caption: 'الوصول إلى شفشاون من المدن المغربية الكبرى — 2026',
        headers: ['من', 'المسافة', 'وقت القيادة', 'حافلة / السعر', 'أفضل خيار'],
        rows: [
          ['الدار البيضاء (مطار CMN)', '~340 كم', '3:45–4:30 ساعة', 'لا حافلة مباشرة — تحويل في طنجة أو تطوان', 'سيارة إيجار: الأكثر مرونة، أفضل مناظر'],
          ['طنجة', '~120 كم', '1:45–2:15 ساعة', 'حافلة CTM: ساعتان، MAD 40–70', 'سيارة أجرة كبيرة: MAD 30–50/مقعد، أسرع'],
          ['فاس', '~200 كم', '3:00–3:45 ساعة', 'حافلة CTM: 4 ساعات، MAD 75', 'سيارة: أسرع، تسمح بتوقف تطوان'],
          ['الرباط', '~280 كم', '3:30–4:00 ساعة', 'لا حافلة مباشرة — عبر طنجة', 'سيارة: الأكثر كفاءة'],
          ['مراكش', '~550 كم', '6:30–7:30 ساعة', 'لا حافلة مباشرة — ليلي عبر CTM', 'سيارة أو رحلة مراكش → طنجة'],
          ['تطوان', '~60 كم', '1:00–1:15 ساعة', 'CTM/حافلة: 1:30 ساعة، MAD 25–40', 'سيارة أجرة كبيرة: MAD 25–35/مقعد، الأشيع'],
        ],
      },
      callout: {
        label: '🚗 القيادة إلى شفشاون: نصائح محلية',
        body: 'طريق تطوان إلى شفشاون (N2) منعطفات جبلية — جميل لكن بطيء. سيارة اقتصادية قياسية تتعامل معه بسهولة. خصص 1:15 ساعة على الأقل لهذه الـ60 كم. الوقوف داخل المدينة العتيقة مستحيل — استخدم المواقف المحروسة عند مدخل المدينة (MAD 20–30/ليلة). إذا استأجرت من مطار الدار البيضاء (CMN)، نوصي بحلقة الشمال الكاملة: الدار البيضاء → الرباط → طنجة → شفشاون → فاس → الدار البيضاء. 7–10 أيام. احجز على واتساب: +212 634 276 534',
      },
    },
    {
      heading: 'أفضل وقت لزيارة شفشاون',
      paragraphs: [
        'موقع شفشاون الجبلي على ارتفاع 600 متر يمنحها مناخاً مختلفاً كلياً عن مراكش أو الدار البيضاء.',
      ],
      table: {
        caption: 'أفضل وقت لزيارة شفشاون — شهراً بشهر 2026',
        headers: ['الموسم', 'درجة الحرارة', 'الازدحام', 'الحكم'],
        rows: [
          ['مارس–مايو', '15–24°م، مشمس، أمطار أحياناً', 'متوسط، متصاعد', '⭐ الأفضل — ضوء مثالي، ازدحام مقبول، أزهار برية على المسارات'],
          ['يونيو–أغسطس', '26–35°م، جاف، مزدحم جداً', 'ذروة — ساحق في عطل نهاية الأسبوع', 'جيد لكن اصل باكراً — المدينة ممتلئة 10–17'],
          ['سبتمبر–أكتوبر', '18–26°م، ممتاز', 'متوسط، متناقص', '⭐ ثاني أفضل — أيام دافئة، ليالٍ باردة، سبتمبر مثالي خاصة'],
          ['نوفمبر–فبراير', '5–15°م، أمطار ممكنة', 'منخفض — معظمه محلي', 'جميل وهادئ — أمسيات باردة، ضوء غائم دراماتيكي، سياح قليلون جداً'],
          ['رمضان (متغير)', 'أي طقس', 'أجواء احتفال محلي', 'تجربة ثقافية مثيرة — بعض المطاعم مغلقة نهاراً'],
        ],
      },
    },
    {
      heading: 'أين تقيم في شفشاون — دليل صادق',
      paragraphs: [
        'اختيار مكان الإقامة يشكل تجربتك بأكملها. شفشاون لا تملك سلاسل فنادق كبرى — كل خيار رياض أو دار ضيافة أو فندق بوتيك صغير، جميعها محلية الملكية.',
      ],
      table: {
        caption: 'أين تقيم في شفشاون — الخيارات حسب النوع والميزانية 2026',
        headers: ['المنطقة', 'الأجواء', 'الأنسب لـ', 'سعر نموذجي/ليلة'],
        rows: [
          ['المدينة السفلى (ساحة عطا الحمام)', 'مركزي، حيوي، سياحي', 'الزوار لأول مرة، الإقامات القصيرة', 'MAD 200–800 (18–74€)'],
          ['المدينة العليا (منطقة رأس الماء)', 'أهدأ، سكاني، إطلالات أفضل', 'التصوير، الإقامات الطويلة، الطابع الأصيل', 'MAD 250–600 (23–55€)'],
          ['خارج أسوار المدينة مباشرة', 'راحة حديثة، وصول سيارة، مسبح ممكن', 'مسافرو السيارات، العائلات', 'MAD 400–1,200 (37–111€)'],
          ['جبال الريف (8–15 كم)', 'صمت كامل، وصول لرحلات مشي، طبيعة', 'المشاة، الأزواج، فطام رقمي', 'MAD 300–700 (28–65€)'],
        ],
      },
      callout: {
        label: '🏨 توصياتنا',
        body: 'فاخر/متوسط: لينا رياض وسبا (داخل المدينة، حمام مغربي، فطور استثنائي)، دار الشاوون (خارج المدينة مباشرة، مسبح، موقف سيارات). اقتصادي: نزل أليني (أسرّة مشتركة MAD 80، سطح رائع، مركزي). الكل على بعد 5–10 دقائق من ساحة عطا الحمام. احجز قبل أسبوعين على الأقل لعطل نهاية الأسبوع ويوليو–أغسطس.',
      },
    },
    {
      heading: 'ماذا تأكل في شفشاون — طعام جبلي، لا طعام سياحي',
      paragraphs: [
        'طعام شفشاون مميز عن بقية المغرب — متأثر بجبال الريف والموروث الأندلسي وتقليد الطبخ الجبلي البطيء والسخي.',
      ],
      table: {
        caption: 'ماذا تأكل في شفشاون — التخصصات المحلية 2026',
        headers: ['الطبق / الطعام', 'أين تجده', 'السعر', 'ملاحظات'],
        rows: [
          ['جبن (جبن الماعز الطازج)', 'سوق الصباح قرب ساحة عطا الحمام', 'MAD 15–25', 'يُباع على شكل كرات، كله مع عسل محلي وخبز'],
          ['بيصارة (حساء الفول)', 'أكشاك الشوارع، الصباح الباكر', 'MAD 5–10', 'الفطور المحلي — أكثر سمكاً وثراءً مما في مكان آخر'],
          ['طاجين لحم الضأن بأعشاب الريف', 'أي مطعم رياض', 'MAD 60–120', 'الأعشاب الجبلية تجعل هذا الطبق مختلفاً ملحوظاً'],
          ['بريوات كفتة', 'مخابز وأكشاك المدينة', 'MAD 5–15/قطعة', 'معجنات مقلية محشوة بلحم ضأن متبل — اأكلها طازجة واقفاً'],
          ['سفنج (دونات مغربية)', 'زوايا الشوارع، الصباح', 'MAD 2–3 للقطعة', 'حار، طازج، مرش بالسكر — أفضل هنا من أي مكان'],
          ['شاي بالنعناع مع عسل الريف', 'كل مقهى سطح', 'MAD 10–20', 'اطلب العسل منفصلاً — العسل المحلي استثنائي'],
          ['عصير البرتقال عند رأس الماء', 'المقهى عند الينبوع', 'MAD 10–15', 'معصور طازج بجانب شلال جبلي — من أعظم ملذات المغرب البسيطة'],
          ['أمالو مع خبز', 'فطور الرياضات', 'MAD 20–40', 'معجون زيت أرغان ولوز وعسل — مع خبز طازج من الفرن'],
        ],
      },
    },
    {
      heading: 'أفضل نقاط التصوير في شفشاون (مع المواعيد)',
      paragraphs: [
        'شفشاون من أكثر المدن تصويراً في العالم. إليك الصور المهمة — والأوقات والتكتيكات التي تفصل صورة لا تُنسى عن صورة كتالوج سياحي.',
      ],
      table: {
        caption: 'أفضل نقاط التصوير في شفشاون — متى تذهب وماذا تتوقع',
        headers: ['النقطة', 'أفضل وقت', 'مستوى الازدحام', 'ما يجعلها مميزة'],
        rows: [
          ['سلالم الأزقة الزرقاء (المدينة العليا)', '7–9 صباحاً', 'فارغة', 'ضوء أزرق صباحي ناعم، لا أحد — الصورة الكلاسيكية لشفشاون'],
          ['شارع بن سوق', '7–9 صباحاً أو 5–7 مساءً', 'خفيف', 'أكثف الجدران الزرقاء في المدينة، منظور سلم ضيق'],
          ['كالي حسن الأول', '7–9 صباحاً', 'فارغة', 'طابع سكاني، قطط وأصص زهور، تشبع ألوان في أعلاه'],
          ['ساحة عطا الحمام', 'المساء (6–8 مساءً)', 'مزدحم لكن يستحق', 'الساحة الرئيسية مع القصبة مضاءة عند الغسق'],
          ['نقطة مشاهدة المسجد الإسباني', 'غروب أو شروق الشمس', 'مزدحم عند الغروب', 'إطلالة بانورامية على المدينة والجبل — صورة فريدة للمدينة الزرقاء كلها'],
          ['ينبوع رأس الماء', 'الصباح أو آخر النهار', 'خفيف', 'المحليون عند الينبوع، خلفية جبلية، الحياة الحقيقية'],
          ['أسطح المقاهي المختلفة', 'الساعة الذهبية (5–7 مساءً)', 'متغير', 'احجز طاولة بإطلالة على جبال الريف — الضوء يُذهّب كل شيء'],
          ['الطريق إلى شفشاون من تطوان', 'وصول بعد الظهر', 'لا أحد', 'النزول الجبلي يكشف المدينة تدريجياً — صوّر من نافذة السيارة'],
        ],
      },
    },
    {
      heading: 'الرحلات اليومية والرحلات المشي من شفشاون',
      paragraphs: [
        'المدينة نفسها تستغرق نصف يوم للمشاهدة. السبب للبقاء أطول هو ما يحيط بها — المنتزه الوطني لتالاسمطان وشلالات أكشور وجسر الله وتطوان ومسارات تمتد أياماً في جبال الريف.',
      ],
      table: {
        caption: 'أفضل الرحلات اليومية ورحلات المشي من شفشاون 2026',
        headers: ['الوجهة', 'المسافة', 'الوقت المطلوب', 'كيف تصل', 'النقطة البارزة'],
        rows: [
          ['شلالات أكشور', '30 كم', 'يوم كامل', 'سيارة أجرة كبيرة MAD 100–150 ذهاباً وإياباً، أو سيارة إيجار', 'مشي للشلال الكبير (2–3 ساعات)، سباحة في بحيرات زمردية، قوس جسر الله'],
          ['المنتزه الوطني لتالاسمطان', '10–30 كم', 'نصف إلى يوم كامل', 'سيارة أو بمرشد', 'غابة الضربة المغربية، حياة برية، مسارات بانورامية'],
          ['رحلة مشي المسجد الإسباني', '1 كم صعوداً من المدينة', 'ساعة ذهاباً وإياباً', 'مشياً من ساحة عطا الحمام', 'أفضل إطلالة بانورامية على المدينة الزرقاء'],
          ['رحلة مشي جبل الكلاع', '5 كم من المدينة', 'نصف يوم', 'مشياً أو سيارة أجرة إلى نقطة البداية', 'إحدى "القرنين" اللذين أعطيا اسمها — إطلالات على 1,616م'],
          ['تطوان', '60 كم', 'نصف يوم', 'سيارة أجرة كبيرة MAD 30–50/مقعد', 'مدينة عتيقة يونسكو، عمارة أندلسية، صفر سياح، القصر الملكي'],
          ['قرية درداره', '15 كم', '2–3 ساعات', 'سيارة أجرة كبيرة', 'قرية أمازيغية جبلية، حياة تقليدية، سوق محلي أيام الأحد'],
        ],
      },
      callout: {
        label: '💡 نصيحة داخلية عن أكشور',
        body: 'سيارة الأجرة الكبيرة لأكشور تنطلق من الشارع قرب محطة الحافلات — تفاوض على MAD 100–150 للذهاب والإياب مع وقت انتظار (1.5–2 ساعة عند الشلالات). ابدأ الساعة 9 صباحاً لتجنب حرارة منتصف النهار على المسار. أحضر ماء، ارتدِ أحذية بنعل مطاطي — الطريق يصبح زلقاً قرب الشلالات.',
      },
    },
    {
      heading: 'رحلة شمال المغرب البرية: شفشاون بالسيارة',
      paragraphs: [
        'أفضل طريقة للوصول إلى شفشاون هي بسيارة إيجار، ليس لأنها الطريقة الوحيدة، بل لأن الطريق إليها نصف التجربة — والوجهات التي يمكن ربطها تشكل واحدة من أفضل الرحلات البرية التي يقدمها المغرب.',
        'حلقة شمال المغرب الكلاسيكية من الدار البيضاء: مطار CMN → الرباط (1:20 ساعة) → طنجة (3 ساعات) → شفشاون (ساعتان) → فاس (3 ساعات) → الدار البيضاء (3 ساعات). المجموع: 7–10 أيام. إجمالي القيادة: ~900 كم على أفضل طرق المغرب. النقاط البارزة: الساحل الأطلسي، إطلالات على مضيق جبل طارق، المدينة الزرقاء، مدينة فاس الإمبراطورية العتيقة.',
        'تتعامل MoroccoForYou Cars في مطار CMN مع هذا المسار بانتظام — نعرف محطات الرسوم والطرق الجبلية وأوضاع الوقوف في كل محطة. سيارة اقتصادية من 23€/يوم، كيلومترات غير محدودة.',
      ],
      callout: {
        label: '🚗 خطط لرحلتك البرية إلى شفشاون',
        body: 'استأجر سيارتك من مطار الدار البيضاء (CMN) مع استقبال مجاني في صالة الوصول. سيارات اقتصادية من 250 درهم/يوم (23€). سنوصي بالسيارة الصحيحة للطرق الجبلية ونعطيك ملاحظات الطرق المحلية التي لا يعرفها أي GPS. +212 634 276 534',
      },
    },
  ],
  faqs: [
    {
      question: 'كم يوماً تحتاج في شفشاون؟',
      answer: 'ليلتان على الأقل. يوم واحد يغطي المعالم الرئيسية — مشي في المدينة ومتحف القصبة والمسجد الإسباني ورأس الماء. اليوم الثاني هو عندما تغيّرك شفشاون — تتباطأ، تجلس أطول، تلاحظ الأشياء الصغيرة. إذا رحلت للمشي إلى شلالات أكشور، أضف يوماً ثالثاً.',
    },
    {
      question: 'لماذا شفشاون مطلية بالأزرق؟',
      answer: 'التفسير الأكثر دعماً تاريخياً يربط الأزرق باللاجئين اليهود الذين استقروا في شفشاون منذ 1492، جالبين تقليد طلاء الجدران بالأزرق كممارسة روحية. توسع التقليد في القرن العشرين ويُصان الآن بنشاط من السكان والحكومة المحلية. الإجابة الصادقة: هي عدة قصص متداخلة، ليست واحدة.',
    },
    {
      question: 'ما أفضل وقت لزيارة شفشاون؟',
      answer: 'مارس–مايو وسبتمبر–أكتوبر أفضل الأشهر: 18–26°م، سماء جبلية صافية، ازدحام مقبول. الصيف جميل لكن مزدحم — اصل باكراً لتتجنب الزوار اليوميين. الشتاء بارد لكن هادئ بشكل ساحر.',
    },
    {
      question: 'كيف أصل من الدار البيضاء إلى شفشاون؟',
      answer: 'الخيار الأفضل بسيارة إيجار — استلمها من مطار CMN، سافر على الطريق السريع A1/A4 إلى طنجة، ثم جنوباً عبر تطوان على طريق الجبل N2. المجموع: 3:45–4:30 ساعة. قسم الجبل من تطوان هو أحد أجمل مسارات القيادة في المغرب.',
    },
    {
      question: 'هل شفشاون آمنة للسياح؟',
      answer: 'نعم — تصنَّف شفشاون باستمرار ضمن أكثر وجهات المغرب أماناً. ضغط البائعين الشديد في مراكش أو مدينتَي فاس العتيقتين أقل بكثير هنا. المسافرات المنفردات يبلّغن عنها كواحدة من أكثر المدن المغربية راحةً.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'كم المسافة بين شفشاون والدار البيضاء؟', answer: 'شفشاون على بعد حوالي 340 كم من الدار البيضاء، رحلة قيادة 3:45–4:30 ساعة عبر الطريق السريع A1/A4 إلى طنجة ثم جنوباً عبر تطوان على طريق الجبل N2. لا توجد حافلة مباشرة — الربط بالحافلة يتطلب تحويلاً في طنجة أو تطوان.' },
    { question: 'بماذا تشتهر شفشاون؟', answer: 'تشتهر شفشاون عالمياً بمدينتها العتيقة المطلية بالأزرق — متاهة من الجدران والسلالم والأبواب الكوبالتية والنيلية والفيروزية في جبال الريف شمال المغرب. بعيداً عن التصوير، تشتهر بأجوائها الهادئة الاستثنائية وحرفها الأصيلة عالية الجودة وطعامها الجبلي الممتاز والوصول إلى شلالات أكشور.' },
    { question: 'هل يمكن زيارة شفشاون في رحلة يوم واحد؟', answer: 'من الناحية التقنية نعم — إنها ساعتان من طنجة و4 ساعات من فاس بالحافلة. إلا أن معظم المسافرين الذين يقومون بزيارة يوم يندمون على عدم المبيت. المدينة تفرغ من الزوار اليوميين بحلول الساعة 5 مساءً وتكشف طابعاً مختلفاً كلياً أهدأ في المساء وفجر اليوم التالي. ليلتان هي التوصية المحلية.' },
  ],
  relatedDestinations: ['chefchaouen', 'fes', 'tangier', 'rabat'],
  relatedPosts: ['kayfiyat-at-tanaqol-min-al-dar-al-baida-ila-chefchaouen', 'dalil-safar-dar-al-bayda', 'min-dar-al-bayda-ila-al-ribat-bis-sayyara', 'afdal-sayyara-listajar-fi-dar-al-bayda'],
  alternates: ALTERNATES,
};

const legacyEN = BLOG_POSTS.find((p) => p.slug === SLUG_EN && (p.lang ?? 'en') === 'en');
if (legacyEN) {
  Object.assign(legacyEN, EN);
} else {
  BLOG_POSTS.push(EN);
}

BLOG_POSTS.push(FR, AR);