import { BLOG_POSTS, pex, type BlogPost } from '@/lib/blog';

const SLUG_EN = 'fes-travel-guide';
const SLUG_FR = 'guide-voyage-fes';
const SLUG_AR = 'dalil-safar-fas';
const ALTERNATES = { en: SLUG_EN, fr: SLUG_FR, ar: SLUG_AR } as const;
const COVER = pex(33514523);

const EN: BlogPost = {
  slug: SLUG_EN,
  lang: 'en',
  metaTitle: 'Fes Travel Guide 2026 — Morocco\'s Spiritual Capital: What Nobody Tells You',
  metaDescription: 'Complete Fes travel guide 2026: medina navigation, Chouara Tannery, Al-Qarawiyyin (world\'s oldest university), best riads, food, day trips to Meknes and Volubilis. Written by Morocco locals.',
  title: 'Fes Travel Guide 2026: Morocco\'s Spiritual Capital — 40 Things to Know Before You Arrive',
  description: 'The Fes guide written by people who send hundreds of travelers there from Casablanca every year. How to navigate the world\'s largest car-free urban area, the tannery secret nobody shares, why Al-Qarawiyyin matters, the honest comparison with Marrakech, and the day trips that make Fes the best base in northern Morocco.',
  keyword: 'fes travel guide',
  coverImage: COVER,
  coverAlt: 'Fes Morocco travel guide 2026 — Bab Boujloud blue gate entrance to the medina of Fes el-Bali',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'Omar L. — Casablanca Local & Morocco Road Trip Specialist',
  readingMinutes: 16,
  intro: 'If Marrakech is Morocco\'s theatrical heart, Fes is its soul. Founded in 789 AD, Fes is one of the oldest cities in the Islamic world and home to the most extraordinary living medieval city on earth — a UNESCO-listed medina of 9,000+ alleyways where donkeys still deliver goods, artisans still work in 12th-century techniques, and the world\'s oldest continuously operating university still teaches. Our Casablanca-based team has driven hundreds of clients to Fes over five years. We know what overwhelms first-timers, what gets missed, and what separates a frustrating experience from a transformative one. This is that guide.',
  sections: [
    {
      heading: 'Is Fes Worth Visiting? The Honest Answer',
      paragraphs: [
        'Fes is the most rewarding city in Morocco — and the most demanding. Unlike Marrakech, which delivers its highlights quickly, Fes reveals itself slowly. The medina is genuinely impossible to navigate without preparation on the first visit. GPS fails in the covered streets. Signs are minimal. The scale is overwhelming: 9,000 alleyways, 300 mosques, 300 hectares of medieval urban fabric.',
        'The travelers who love Fes are those who slow down, hire a guide for the first day, and give the city time to reveal its logic. By day two, the medina starts to make sense. By day three, it becomes one of the most extraordinary places you have ever walked through.',
        'The travelers who leave disappointed are usually those who tried to navigate independently on day one, got lost in the wrong part of the medina, and spent three hours being followed by persistent unofficial guides. Preparation eliminates this entirely.',
      ],
      callout: {
        label: '🇲🇦 Local Verdict',
        body: 'Our honest comparison: Marrakech impresses you immediately. Fes changes you slowly. If you only visit one Moroccan city, Marrakech is more accessible. If you visit two, Fes is the one you\'ll talk about for years. Give it 2 full days minimum — 3 is better.',
      },
    },
    {
      heading: 'Fes Quick Facts 2026',
      paragraphs: [
        'The essentials before you arrive.',
      ],
      table: {
        caption: 'Fes essential facts 2026',
        headers: ['Fact', 'Detail'],
        rows: [
          ['Founded', '789 AD by Moulay Idriss I — one of Morocco\'s oldest cities'],
          ['Population', '~1.3 million (4th largest city in Morocco)'],
          ['UNESCO status', 'Fes el-Bali medina — World Heritage Site since 1981'],
          ['Medina size', '300 hectares, 9,000+ alleyways — world\'s largest car-free urban area'],
          ['Airport', 'Fes Saïss Airport (FEZ) — 15 km from medina'],
          ['Nearest major airport', 'Casablanca CMN — 280 km, 3h30 by motorway'],
          ['Famous for', 'Al-Qarawiyyin (world\'s oldest university), Chouara Tannery, medieval medina, artisan crafts'],
          ['Best time', 'March–May and September–November'],
          ['How many days', '2 days minimum — 3 for day trips to Meknes and Volubilis'],
          ['Currency', 'MAD — 1 EUR ≈ 10.8 MAD (2026)'],
          ['Car rental from CMN', 'From 250 MAD/day (€23) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'The Three Parts of Fes — Which One Are You In?',
      paragraphs: [
        'Fes is not one city — it is three cities layered across 1,200 years of history. Understanding which part you are in changes everything about navigating it.',
      ],
      table: {
        caption: 'The three districts of Fes — complete guide 2026',
        headers: ['District', 'Founded', 'Character', 'Why go'],
        rows: [
          ['Fes el-Bali (Old Fes)', '789 AD', 'The ancient medina — 9,000 alleyways, no cars, medieval crafts, mosques, madrasas', 'The entire Fes experience — everything you came for'],
          ['Fes el-Jdid (New Fes)', '13th century', 'Medieval "new city" — Royal Palace, Mellah (Jewish quarter), gardens', 'Royal Palace gates, Mellah, transition between worlds'],
          ['Ville Nouvelle', '20th century (French)', 'Modern city — hotels, restaurants, transport hubs, banks', 'Where you arrive, where you sleep (some hotels), where taxis operate from'],
        ],
      },
      callout: {
        label: '💡 Key Navigation Fact',
        body: 'Taxis cannot enter Fes el-Bali medina — they drop you at the gates. The main gate is Bab Boujloud (the Blue Gate), the most famous and easiest entry point. From Bab Boujloud, the medina unfolds downhill toward the tanneries and Al-Qarawiyyin. Always know which gate you entered from — it is your anchor when you get disoriented.',
      },
    },
    {
      heading: 'Al-Qarawiyyin — The World\'s Oldest University (Founded 859 AD)',
      paragraphs: [
        'The University of Al-Qarawiyyin is one of the most significant buildings in human history — founded in 859 AD by Fatima al-Fihri, a woman from a wealthy Tunisian merchant family who used her inheritance to establish a mosque and school that would become the world\'s oldest continuously operating university. This is not a matter of debate but a Guinness World Record and UNESCO recognition.',
        'For over 1,200 years, Al-Qarawiyyin has been in continuous operation. It predates the University of Bologna (1088), Oxford (1096), and Cambridge (1209) by centuries. At its peak, it attracted scholars from across the Islamic world and Christian Europe — including Gerbert d\'Aurillac, who later became Pope Sylvester II and is credited with introducing Arabic numerals (the digits 0-9) to Europe after studying here.',
        'Non-Muslims cannot enter the mosque or main university buildings. However, the library — recently restored with a €800,000 investment — occasionally opens for guided visits. The surrounding alleyways, the view from leather shop terraces on Derb Mechattine, and the sound of the call to prayer emanating from this building are experiences available to all visitors. Walking the streets that scholars walked for 1,200 years is itself a form of time travel that most visitors underestimate.',
      ],
      callout: {
        label: '📚 Al-Qarawiyyin Insider Tips',
        body: 'The best view of the university courtyard is from the rooftop terraces of leather shops on Derb Mechattine — ask politely to access the terrace and the shopkeeper will usually allow it (in hope of a sale, but no obligation). The Al-Qarawiyyin Library recently restored is one of Morocco\'s hidden gems — ask at the Fes tourist office about special access tours. The timing: Friday morning, the call to prayer from Al-Qarawiyyin is one of the most powerful sounds in Morocco.',
      },
    },
    {
      heading: 'The Chouara Tannery — What Nobody Tells You',
      paragraphs: [
        'The Chouara Tannery is Fes\'s most iconic sight and one of the most photographed locations in Morocco. It has been in continuous operation since the 11th century, making it the oldest tannery in the world. The stone vats you see — filled with saffron yellow, indigo blue, poppy red, and oxidized white — are largely unchanged from medieval times. Workers stand waist-deep in the dye pits processing animal hides using methods passed down through generations.',
        'Here is what most guides skip: the tannery is technically a private business complex surrounded by leather shops. The best viewing terraces are on the upper floors of these shops — and entry to the terraces is almost always tied to a sales pitch. The shopkeepers will offer you mint to hold against your nose (the smell of the organic dyes is powerful), lead you to the terrace, show you the view, and then present the leather goods. You are under no obligation to buy. You can thank them, decline, and leave.',
        'The best time to visit is mid-morning (9–11am) when workers are most active and the natural light fills the vats. Avoid midday (dried hides, less activity) and very early morning (operations not yet in full swing). Approach from Rue Chouara from the south for the most atmospheric approach.',
      ],
      callout: {
        label: '🎨 Tannery Insider Secret',
        body: 'The three main viewing points — Terrasse de la Tannerie, El Bahja, and the unnamed terrace on the corner — all offer different angles. The highest terrace gives the widest view. The lowest gives the most intimate, smell-inclusive experience. True photography tip: shoot at 9am from the east-facing terraces when morning sun fills the vats with direct light. Afternoon light comes from behind the vats and the photos are flat.',
      },
    },
    {
      heading: 'Best Things to Do in Fes — The Essential List',
      paragraphs: [
        'Fes rewards the patient explorer. These are the experiences that matter most — with honest time estimates and local advice that most guides omit.',
      ],
      table: {
        caption: 'Best things to do in Fes 2026',
        headers: ['Experience', 'Area', 'Time', 'Price', 'Local tip'],
        rows: [
          ['Chouara Tannery viewpoint', 'Eastern medina', '1–2 hours', 'Free (from shop terraces)', 'Go 9–11am, approach from Rue Chouara south, bring your own mint leaf'],
          ['Bab Boujloud (Blue Gate)', 'Medina entrance', '30 min', 'Free', 'The most beautiful gate in Morocco — best photographed at blue hour (dusk)'],
          ['Bou Inania Madrasa', 'Near Bab Boujloud', '1 hour', 'MAD 70', 'Finest example of Marinid architecture — 14th century, recently restored'],
          ['Al-Attarine Madrasa', 'Near Al-Qarawiyyin', '45 min', 'MAD 70', 'Named for adjacent spice market — courtyard rivals Bou Inania for beauty'],
          ['Al-Qarawiyyin area (walk)', 'Central medina', '1 hour walk', 'Free', 'You cannot enter but walking the surrounding streets is the experience'],
          ['Chouara Potters\' Quarter', 'North medina', '45 min', 'Free', 'Watch traditional pottery being made and fired — more authentic than tanneries'],
          ['Nejjarine Fountain & Woodwork Museum', 'Central medina', '1 hour', 'MAD 20', 'One of the most beautiful medina squares in Morocco — the fountain is extraordinary'],
          ['Royal Palace Gates (Dar el-Makhzen)', 'Fes el-Jdid', '30 min', 'Free (exterior)', 'Seven golden gates set in a vast zellige-tiled plaza — photos at golden hour'],
          ['Mellah (Jewish Quarter)', 'Fes el-Jdid', '1 hour', 'Free', 'The former Jewish quarter — different architectural character, less tourist pressure'],
          ['Marinid Tombs viewpoint', 'Above medina north', '1 hour', 'Free', 'Best panoramic view of the entire medina — go at sunset or just before'],
          ['Place Seffarine (Coppersmiths)', 'Central medina', '30 min', 'Free', 'The only medina square where artisans work in the open — deafening and spectacular'],
          ['Jnan Sbil (Royal Gardens)', 'Between medinas', '1 hour', 'Free', 'Oldest public garden in Fes — peaceful escape from medina intensity'],
        ],
      },
    },
    {
      heading: 'Navigating the Medina — Should You Use a Guide?',
      paragraphs: [
        'This is the most contested question in Fes travel writing, and we will give you an honest answer: yes, for the first half-day. Not because you cannot manage without one, but because a licensed guide unlocks the medina in ways that take independent travelers three days to discover on their own.',
        'A good guide knows which leather shop terrace has the best tannery view, when to visit the madrasas to avoid school groups, which alleyway leads to the active coppersmiths rather than the tourist replica workshops, and how to reach Al-Qarawiyyin library on one of its rare open days. This knowledge takes independent research hours to replicate.',
        'Licensed guides wear official badges and charge MAD 300–500 for a half-day. The fee is set by the government. Anything less and you are hiring an unlicensed guide, which creates a different set of problems. Book through your riad or the Fes tourist office — both can connect you with verified licensed guides.',
      ],
      callout: {
        label: '🧭 Guide Strategy',
        body: 'Our recommendation: hire a licensed guide for the first half-day (tanneries, madrasas, Al-Qarawiyyin area) — MAD 300–400 is worth it. Then explore independently for the rest of your stay using the map and landmarks you have now learned. Download maps.me before arriving — it has Fes el-Bali mapped with alleyway-level detail and works offline.',
      },
    },
    {
      heading: 'Where to Stay in Fes — Riad vs Hotel',
      paragraphs: [
        'Like Marrakech, Fes has an extraordinary riad culture. Unlike Marrakech, the Fes medina riads are generally less touristy and better value — the city draws fewer mass-market visitors, so the accommodation market is more authentic.',
      ],
      table: {
        caption: 'Where to stay in Fes — options by area and budget 2026',
        headers: ['Area', 'Vibe', 'Best for', 'Price range/night'],
        rows: [
          ['Medina near Bab Boujloud', 'Central, convenient, some noise', 'First-timers, easy medina access', 'MAD 300–1,200 (€28–111)'],
          ['Medina near Al-Qarawiyyin', 'Deep medina, most immersive, quieter at night', 'Those wanting full medina experience, photographers', 'MAD 400–1,500 (€37–139)'],
          ['Fes el-Jdid', 'Between old and new city, quieter', 'Travelers wanting a balance of access and calm', 'MAD 250–800 (€23–74)'],
          ['Ville Nouvelle', 'Modern hotels, air conditioning, taxi access', 'Business travelers, comfort seekers, budget hotels', 'MAD 200–800 (€18–74)'],
        ],
      },
      callout: {
        label: '🏨 Riad Booking Tips Fes',
        body: 'Give your riad address to the taxi driver — medina riads are unreachable by car and drivers drop you at the nearest gate. Most good riads send someone to meet you at the gate. Book riads with rooftop terraces in Fes — the medina view from above is extraordinary. Top picks: Dar Seffarine (overlooking the coppersmiths square), Riad Fes (luxury, central), Dar Bensouda (mid-range, excellent location).',
      },
    },
    {
      heading: 'What to Eat in Fes — The Local Food Scene',
      paragraphs: [
        'Fes has a more restrained food culture than Marrakech — less theatrical, more serious. The city\'s cuisine is considered by many Moroccan food scholars to be the most refined in the country, rooted in Andalusian traditions brought by Muslim refugees from Spain in 1492.',
      ],
      table: {
        caption: 'What to eat in Fes 2026 — local specialties',
        headers: ['Dish', 'Where', 'Price', 'Notes'],
        rows: [
          ['Pastilla au pigeon', 'Traditional Fassi restaurants', 'MAD 80–150', 'Fes is the home of pastilla — sweeter, richer version than anywhere else'],
          ['Lamb mrouzia (sweet spiced lamb)', 'Riad restaurants', 'MAD 100–180', 'Fassi specialty — honey, ras el hanout, almonds and raisins'],
          ['Tagine with preserved lemon', 'Local restaurants, medina', 'MAD 50–100', 'Preserved lemon (l\'hamd mrakad) is a Fes specialty'],
          ['Harcha (semolina bread)', 'Bakeries, street stalls, morning', 'MAD 3–5', 'Fes breakfast — denser and richer than elsewhere'],
          ['Bissara (fava bean soup)', 'Street stalls, morning', 'MAD 5–10', 'Morning fuel of the medina workers — thick, olive oil on top'],
          ['Seffa (sweet couscous with chicken)', 'Traditional restaurants', 'MAD 60–120', 'Fassi specialty — cinnamon and powdered sugar over couscous'],
          ['Msemen with honey and butter', 'Street stalls, morning', 'MAD 3–5', 'Flaky square flatbread — the Fes street breakfast'],
          ['Shebakia (sesame honey cookies)', 'Pastry shops', 'MAD 30–50/250g', 'Fried honey sesame spirals — traditionally eaten during Ramadan but available year-round'],
        ],
      },
    },
    {
      heading: 'Fes vs Marrakech — The Honest Comparison',
      paragraphs: [
        'Our clients ask this question constantly. Here is our definitive answer after five years of sending travelers to both cities.',
      ],
      table: {
        caption: 'Fes vs Marrakech — complete comparison for travelers 2026',
        headers: ['Aspect', 'Fes', 'Marrakech'],
        rows: [
          ['First impression', 'Overwhelming, disorienting, intense', 'Theatrical, exciting, accessible'],
          ['Medina size', 'World\'s largest car-free urban area — 9,000 alleys', 'Large but navigable without guide after 1 day'],
          ['Tourist pressure', 'Moderate — fewer mass market tourists', 'High — one of Africa\'s most visited cities'],
          ['Authenticity', 'Highest in Morocco — genuine living medieval city', 'High but more tourist-adapted'],
          ['Cultural depth', 'Deepest in Morocco — intellectual, spiritual capital', 'Strong but more sensory than intellectual'],
          ['Day trip options', 'Meknes, Volubilis, Middle Atlas, Sahara gateway', 'Atlas Mountains, Agafay, Essaouira, Sahara gateway'],
          ['Food scene', 'Considered Morocco\'s finest cuisine by food scholars', 'Excellent but more tourist-adapted'],
          ['Weather', 'Colder winters, hotter summers than Marrakech', 'Hot summers, mild winters'],
          ['Getting there', '280 km from CMN — 3h30 by car or 3h30 by train', '240 km from CMN — 2h30 by car or 3h by train'],
          ['Who it\'s for', 'Curious, patient travelers who want Morocco\'s soul', 'First-timers, short stays, day-trippers, families'],
          ['Verdict', 'The most extraordinary city in Morocco for deep travelers', 'The most accessible great city in Morocco'],
        ],
      },
      callout: {
        label: '🎯 Our Recommendation',
        body: 'First Morocco trip, 5 days: 3 nights Marrakech + 2 nights Fes — drive between them (3h30 via Casablanca). First Morocco trip, 7–10 days: Add Chefchaouen between Fes and the return. Second Morocco trip: Prioritize Fes — it is the city most travelers say they wished they had given more time. We arrange the car rental from CMN for the full circuit: +212 634 276 534',
      },
    },
    {
      heading: 'Day Trips from Fes — The Best in Northern Morocco',
      paragraphs: [
        'Fes is the best base for day trips in northern Morocco. Within 1–3 hours, you can reach Roman ruins, a holy pilgrimage city, cedar forests with wild monkeys, and the beginning of the Sahara route.',
      ],
      table: {
        caption: 'Best day trips from Fes 2026',
        headers: ['Destination', 'Distance', 'Drive time', 'Why go', 'Car needed?'],
        rows: [
          ['Meknes', '60 km', '1 hour', 'Morocco\'s fourth imperial city — Bab Mansour (most beautiful gate in Morocco), Moulay Ismail Mausoleum', 'Recommended — public transport exists but slow'],
          ['Volubilis (Roman ruins)', '95 km', '1h30', 'Best-preserved Roman ruins in Africa — UNESCO site, mosaics, triumphal arch', 'Yes — combine with Meknes in one day'],
          ['Moulay Idriss Zerhoun', '100 km', '1h30', 'Morocco\'s holiest pilgrimage city — hilltop white village where Islam\'s founder is buried', 'Yes — combine with Volubilis/Meknes'],
          ['Ifrane', '65 km', '1h', '"Switzerland of Morocco" — European-style mountain town, cedar forest, Barbary macaques', 'Yes — beautiful drive through Middle Atlas'],
          ['Azrou cedar forest', '90 km', '1h30', 'Ancient cedar forest with wild Barbary macaques — extraordinary wildlife experience', 'Yes — combine with Ifrane'],
          ['Chefchaouen', '200 km', '3h30', 'The Blue City — combine as 2-night trip, not day trip', 'Yes — recommended overnight'],
          ['Sahara/Merzouga', '460 km', '8–9 hours', 'Erg Chebbi dunes — too far for day trip, 2–3 day tour', 'Yes — classic Morocco road trip from Fes'],
        ],
      },
      callout: {
        label: '🚗 The Perfect Fes Day Trip Circuit',
        body: 'One car, one day, three UNESCO sites: Fes → Volubilis (45 min, Roman ruins, 2 hours) → Moulay Idriss (15 min, 1 hour) → Meknes (30 min, 2 hours, Bab Mansour + lunch) → Fes (1 hour return). Total driving: ~3.5 hours. Total experience: extraordinary. Rent at CMN or book a driver through MoroccoForYou: +212 634 276 534',
      },
    },
    {
      heading: 'How to Get to Fes from Casablanca — All Options',
      paragraphs: [
        'Fes is 280 km from Casablanca Airport (CMN) — well-connected by motorway, train, and bus.',
      ],
      table: {
        caption: 'Getting to Fes from Casablanca 2026 — all options',
        headers: ['Option', 'Price', 'Time', 'Best for'],
        rows: [
          ['Rental car from CMN', 'From MAD 250/day (€23)', '3h30 via A2 motorway', 'Best — freedom for day trips, Meknes/Volubilis en route possible'],
          ['ONCF Train (CMN → Fes)', 'MAD 115 (2nd class)', '3h30', 'Budget travelers without day trip plans'],
          ['CTM Bus', 'MAD 100–130', '4h30–5h', 'Cheapest option but slowest'],
          ['From Marrakech by car', 'MAD 250/day rental', '3h30 via Casablanca A7+A2', 'Most travelers do this as part of a circuit'],
          ['From Chefchaouen by car', 'MAD 250/day rental', '3h–3h30', 'Ideal next stop after Chefchaouen on north loop'],
        ],
      },
      callout: {
        label: '🚗 Local Driving Advice CMN → Fes',
        body: 'Pick up your rental car at CMN arrivals, take the A1 north toward Rabat, then A2 east to Fes. The motorway is excellent all the way. Toll: approximately MAD 70 (€6.50). Driving time: 3h30 without stops. With a stop at Volubilis or Meknes: 5–6 hours. MoroccoForYou Cars at CMN from 250 MAD/day: +212 634 276 534',
      },
    },
    {
      heading: '40 Things to Know About Fes Before You Arrive',
      paragraphs: [
        'The practical knowledge our team shares with every client heading to Fes — what most travel guides miss.',
      ],
      list: [
        'The medina of Fes el-Bali is the largest car-free urban area in the world. No cars, no motorcycles — only pedestrians and donkeys.',
        'Al-Qarawiyyin, founded 859 AD, is the world\'s oldest continuously operating university. It predates Oxford by 237 years.',
        'GPS fails in the covered medina streets — download maps.me before arriving and use it offline.',
        'Bab Boujloud (the Blue Gate) is your anchor. If you get lost, orient toward Bab Boujloud and work from there.',
        'Licensed guides wear official government-issued badges. Always check. Unlicensed guides create problems. Fee: MAD 300–500 for half-day.',
        'The Chouara Tannery viewing terraces are inside leather shops — you\'re allowed to view without buying, but the shopkeeper will try to sell. No obligation.',
        'The mint they give you at the tanneries is to mask the organic dye smell, which is powerful. It genuinely helps.',
        'Fes is colder than Marrakech — the medina sits at 400m altitude and winters are genuinely cold (5–10°C at night in January).',
        'The medina has three kinds of streets: main commercial derbs (wide, with shops), secondary derbs (residential, medium width), and blind alleys (private — do not enter).',
        'Donkeys have right of way. Always. When you hear "balak!" (watch out!) — press against the wall immediately.',
        'The Royal Palace gates are one of the most spectacular photo subjects in Morocco. The palace itself is not open to the public.',
        'Marinid Tombs at sunset: the best free panoramic view in Morocco. 15-minute walk from Bab Boujloud, follow the signs uphill.',
        'Fes el-Jdid (the 13th-century "new city") has the Mellah — the former Jewish quarter with distinctive wooden balconies on the upper floors of houses.',
        'The Mellah synagogues and cemeteries are open to visitors — an important part of Fes history that most visitors skip entirely.',
        'Place Seffarine is the only medina square where traditional artisans (coppersmiths) work in the open. The noise and spectacle are extraordinary.',
        'Nejjarine Fountain is one of the most beautiful architectural details in the medina — a 18th-century fountain of carved cedar, tilework, and plasterwork that takes your breath away.',
        'The Bou Inania Madrasa (14th century) is the most complete example of Marinid architecture in Morocco and one of the few religious buildings in Fes open to non-Muslims.',
        'Al-Attarine Madrasa, near Al-Qarawiyyin, is equally beautiful but receives fewer visitors — the courtyard is one of the finest in North Africa.',
        'Fassi cuisine is considered Morocco\'s most refined. The local specialty is pastilla au pigeon — a sweet-savoury pastry that originated in Fes.',
        'The preserved lemon (l\'hamd mrakad) in Fassi tagines is a local specialty. They are salt-cured for months in the medina — a flavor you cannot find elsewhere.',
        'Fes has genuine working artisan quarters — not tourist replicas. The leather workshops, pottery quarter, and metalwork shops are active businesses supplying local and international markets.',
        'Shopping in Fes: quality is higher and prices are lower than Marrakech for most artisan goods. The vendors are less aggressive.',
        'The best ceramics in Morocco come from the pottery district outside the medina walls — the Ain Nokbi pottery quarter where you can watch the entire process.',
        'Smoking pipes (sebsi) and traditional Moroccan artisan goods are more authentic and better priced in Fes than anywhere else.',
        'Fes has two universities — Al-Qarawiyyin (859 AD) and the University of Fes (modern, 20,000+ students). The student population keeps the city intellectually alive in a way unique in Morocco.',
        'The medina is genuinely residential — families live in the derbs, children play, laundry hangs. You are walking through someone\'s neighborhood. Behave accordingly.',
        'Photography etiquette: always ask before photographing people. In the medina, a nod is usually enough acknowledgment. In the tanneries and craft areas, cameras are generally welcome.',
        'The Festival of World Sacred Music in Fes (usually June) is one of the world\'s great music festivals — Sufi music, gospel, sacred traditions from dozens of cultures performed in the medina.',
        'Fes has no beach. Visitors seeking coast should combine with a drive to the Atlantic (Rabat is 2h30) or Mediterranean (Tetouan is 3h).',
        'Night in the medina is safe and beautiful — the tourist pressure drops completely after 8pm and the alleyways are lit by traditional lanterns.',
        'The tannery district smells strongest in summer heat — the organic dye vats produce a powerful odor. In winter and spring it is significantly milder.',
        'Fes to Chefchaouen by car is 200 km, 3h–3h30. The most beautiful road in northern Morocco — many travelers do Fes → Chefchaouen → Tangier as their north Morocco loop.',
        'The train from Fes to Casablanca (3h30) is reliable, comfortable, and air-conditioned. An excellent option if you don\'t need a car for the return journey.',
        'Fes airport (FEZ) serves several European destinations direct — mostly France, Spain, Belgium, and Netherlands. Worth checking if flying onward from Fes.',
        'Fes to Merzouga (Sahara) is 460 km — a full day\'s drive through the stunning Ziz Gorge and Middle Atlas. Most travelers do it as a 2–3 day tour.',
        'The medina of Fes el-Bali has been continuously inhabited for 1,200 years. It is not a museum — it is a living city. The craftspeople you watch are not performing for tourists; they are working.',
        'Meknes, 60 km away, is often skipped by travelers in a hurry. This is a mistake — Meknes\'s Bab Mansour is the most beautiful single gate in Morocco, more impressive than anything in Marrakech.',
        'Volubilis, 95 km from Fes, is North Africa\'s best-preserved Roman site. The mosaics are extraordinary and largely uncovered. It is easier to access than comparable Roman sites in Tunisia or Algeria.',
        'Budget for Fes: MAD 500–800/day covers a mid-range riad, restaurant meals, and attraction entry fees. Less if you stay at a budget riad and eat street food (MAD 200–300/day is possible).',
        'The best time to arrive in Fes is late afternoon — check into your riad, walk to the Marinid Tombs for sunset, have dinner in the medina. Your first full day is then ready for the tanneries and madrasas.',
      ],
    },
  ],
  faqs: [
    {
      question: 'How many days do you need in Fes?',
      answer: '2 full days minimum. Day 1: licensed guide half-day (tanneries, Bou Inania Madrasa, Al-Qarawiyyin area), afternoon free exploration, Marinid Tombs at sunset. Day 2: Al-Attarine Madrasa, Mellah, Royal Palace gates, pottery quarter, Nejjarine Fountain. Day 3 (optional): day trip to Meknes and Volubilis. Travelers who rush Fes in one day almost always regret it.',
    },
    {
      question: 'Is the Fes medina safe to navigate alone?',
      answer: 'Yes — the medina is safe in terms of crime. The challenge is navigation, not safety. On day one, consider a licensed guide for the first half-day to learn the major landmarks and axes. From day two onwards, independent exploration is excellent. Download maps.me before arriving and use it offline — GPS accuracy decreases in the narrow covered passages but the app still works.',
    },
    {
      question: 'What is the best time to visit Fes?',
      answer: 'March–May and September–November. Spring is ideal: temperatures 18–26°C, no rain, the medina is full of natural light. Avoid August (extreme heat, 35–40°C, crowded). Winter (December–February) is cold — 5–10°C at night — but quiet and atmospheric.',
    },
    {
      question: 'Should I visit Fes or Marrakech first?',
      answer: 'Marrakech first if you have limited time — it is more accessible and delivers its highlights immediately. Fes rewards travelers who come with some Moroccan context. The ideal trip: Marrakech first (2–3 nights), then Fes (2 nights), connected by a 3h30 drive or train. Both cities are essential; choosing between them is the wrong question.',
    },
    {
      question: 'How do you get from Casablanca to Fes?',
      answer: 'By rental car: 280 km on the A2 motorway from CMN, 3h30, toll approximately MAD 70. By ONCF train: 3h30 from Casa Voyageurs station, MAD 115 second class. By CTM bus: 4h30–5h, MAD 100–130. Renting at CMN and driving gives you the option of stopping at Meknes and Volubilis en route.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'What is Fes famous for?', answer: 'Fes is famous for three things above all others: the medina of Fes el-Bali (the world\'s largest car-free urban area and a UNESCO World Heritage Site), the Chouara Tannery (the world\'s oldest tannery, in operation since the 11th century), and Al-Qarawiyyin University (founded 859 AD, the oldest continuously operating university in the world). Fes is also Morocco\'s spiritual and intellectual capital, with the finest artisan crafts in the country.' },
    { question: 'Is Fes worth visiting?', answer: 'Absolutely — Fes is the most extraordinary city in Morocco for travelers who want depth over spectacle. The medina is one of the most complete medieval urban environments surviving anywhere on earth. It requires more effort than Marrakech but rewards that effort with an experience that most visitors describe as the highlight of their Morocco trip. Give it 2 full days minimum.' },
    { question: 'How far is Fes from Marrakech?', answer: 'Fes is approximately 530 km from Marrakech — about 3h30 driving via the A7/A2 motorway through Casablanca. Most travelers do this as part of a circuit: fly into Casablanca, drive to Marrakech (2h30), then drive Marrakech to Fes (3h30 via Casablanca), then return to Casablanca (3h30) for the flight home.' },
  ],
  relatedDestinations: ['fes', 'marrakech', 'chefchaouen', 'rabat'],
  relatedPosts: ['fes-self-guided-medina-tour', 'rent-a-car-fes-airport-morocco', 'driving-from-marrakech-to-fes-self-drive', 'marrakech-travel-guide', 'chefchaouen-travel-guide', 'casablanca-travel-guide', 'casablanca-airport-guide-cmn'],
  alternates: ALTERNATES,
};

const FR: BlogPost = {
  slug: SLUG_FR,
  lang: 'fr',
  metaTitle: 'Guide Voyage Fès 2026 — La Capitale Spirituelle du Maroc : Ce Que Personne ne Vous Dit',
  metaDescription: 'Guide complet Fès 2026 : navigation médina, Tannerie Chouara, Al-Qarawiyyin (plus ancienne université du monde), meilleurs riads, gastronomie, excursions Meknès et Volubilis.',
  title: 'Guide Voyage Fès 2026 : La Capitale Spirituelle du Maroc — 40 Choses à Savoir Avant d\'Arriver',
  description: 'Le guide Fès rédigé par des gens qui y envoient des centaines de voyageurs depuis Casablanca chaque année. Comment naviguer la plus grande zone urbaine piétonne au monde, le secret de la tannerie que personne ne partage, pourquoi Al-Qarawiyyin est importante, la comparaison honnête avec Marrakech, et les excursions qui font de Fès la meilleure base du nord Maroc.',
  keyword: 'guide voyage fès',
  coverImage: COVER,
  coverAlt: 'Guide voyage Fès Maroc 2026 — Porte Bab Boujloud bleue entrée de la médina de Fès el-Bali',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'Omar L. — Local Casablancais & Spécialiste Road Trip Maroc',
  readingMinutes: 16,
  intro: 'Si Marrakech est le cœur théâtral du Maroc, Fès en est l\'âme. Fondée en 789 ap. J.-C., Fès est l\'une des plus anciennes villes du monde islamique et abrite la plus extraordinaire ville médiévale vivante sur terre — une médina classée UNESCO de 9 000+ ruelles où les ânes livrent encore des marchandises, où les artisans travaillent encore selon des techniques du 12e siècle, et où la plus ancienne université en activité continue au monde enseigne encore. Notre équipe casablancaise a conduit des centaines de clients à Fès sur cinq ans. Ce guide est le fruit de cette expérience.',
  sections: [
    {
      heading: 'Fès vaut-il le détour ? La réponse honnête',
      paragraphs: [
        'Fès est la ville la plus récompensante du Maroc — et la plus exigeante. Contrairement à Marrakech qui livre ses points forts rapidement, Fès se révèle lentement. La médina est réellement impossible à naviguer sans préparation lors de la première visite. Le GPS tombe en panne dans les rues couvertes. La signalisation est minimale. L\'échelle est écrasante : 9 000 ruelles, 300 mosquées, 300 hectares de tissu urbain médiéval.',
        'Les voyageurs qui adorent Fès sont ceux qui ralentissent, qui embauchent un guide pour la première demi-journée et qui donnent à la ville le temps de révéler sa logique. Le deuxième jour, la médina commence à avoir du sens. Le troisième, elle devient l\'un des endroits les plus extraordinaires que vous ayez jamais traversés.',
      ],
      callout: {
        label: '🇲🇦 Verdict Local',
        body: 'Notre comparaison honnête : Marrakech vous impressionne immédiatement. Fès vous change lentement. Si vous ne visitez qu\'une ville marocaine, Marrakech est plus accessible. Si vous en visitez deux, Fès est celle dont vous parlerez pendant des années. Donnez-lui 2 jours complets minimum — 3 c\'est mieux.',
      },
    },
    {
      heading: 'Fès en Chiffres — Infos Essentielles 2026',
      paragraphs: ['Les essentiels avant d\'arriver.'],
      table: {
        caption: 'Infos essentielles Fès 2026',
        headers: ['Info', 'Détail'],
        rows: [
          ['Fondée', '789 ap. J.-C. par Moulay Idriss Ier — l\'une des plus vieilles villes du Maroc'],
          ['Population', '~1,3 million (4e plus grande ville du Maroc)'],
          ['Statut UNESCO', 'Médina de Fès el-Bali — Patrimoine Mondial depuis 1981'],
          ['Taille médina', '300 hectares, 9 000+ ruelles — plus grande zone urbaine piétonne au monde'],
          ['Aéroport', 'Aéroport de Fès Saïss (FEZ) — 15 km de la médina'],
          ['Aéroport principal le plus proche', 'Casablanca CMN — 280 km, 3h30 par autoroute'],
          ['Célèbre pour', 'Al-Qarawiyyin (plus ancienne université du monde), Tannerie Chouara, médina médiévale, artisanat'],
          ['Meilleure période', 'Mars–Mai et septembre–novembre'],
          ['Durée recommandée', '2 jours minimum — 3 pour les excursions Meknès et Volubilis'],
          ['Location voiture depuis CMN', 'Dès 250 MAD/jour (23€) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'Les Trois Quartiers de Fès — Dans Lequel Êtes-Vous ?',
      paragraphs: ['Fès n\'est pas une ville — c\'est trois villes superposées sur 1 200 ans d\'histoire.'],
      table: {
        caption: 'Les trois quartiers de Fès — guide complet 2026',
        headers: ['Quartier', 'Fondé', 'Caractère', 'Pourquoi y aller'],
        rows: [
          ['Fès el-Bali (Vieille Fès)', '789 ap. J.-C.', 'La médina antique — 9 000 ruelles, sans voitures, artisanat médiéval, mosquées, mederasas', 'Toute l\'expérience Fès — ce pourquoi vous êtes venu'],
          ['Fès el-Jdid (Nouvelle Fès)', '13e siècle', 'Ville "nouvelle" médiévale — Palais Royal, Mellah (quartier juif), jardins', 'Portes du Palais Royal, Mellah, transition entre les mondes'],
          ['Ville Nouvelle', '20e siècle (français)', 'Ville moderne — hôtels, restaurants, hubs de transport, banques', 'Là où vous arrivez, où vous dormez (certains hôtels), où opèrent les taxis'],
        ],
      },
      callout: {
        label: '💡 Fait de Navigation Essentiel',
        body: 'Les taxis ne peuvent pas entrer dans la médina de Fès el-Bali — ils vous déposent aux portes. La porte principale est Bab Boujloud (la Porte Bleue), l\'entrée touristique principale avec la signalisation la plus claire. De Bab Boujloud, la médina se déploie en descendant vers les tanneries et Al-Qarawiyyin.',
      },
    },
    {
      heading: 'Al-Qarawiyyin — La Plus Ancienne Université du Monde (Fondée en 859)',
      paragraphs: [
        'L\'Université Al-Qarawiyyin est l\'un des bâtiments les plus importants de l\'histoire humaine — fondée en 859 ap. J.-C. par Fatima al-Fihri, une femme d\'une riche famille de marchands tunisiens qui utilisa son héritage pour établir une mosquée et une école qui allait devenir la plus ancienne université en activité continue au monde. C\'est un record Guinness et une reconnaissance UNESCO.',
        'Pendant plus de 1 200 ans, Al-Qarawiyyin a fonctionné sans interruption. Elle précède l\'Université de Bologne (1088), Oxford (1096) et Cambridge (1209) de plusieurs siècles. À son apogée, elle attirait des érudits du monde islamique et de l\'Europe chrétienne — dont Gerbert d\'Aurillac, qui devint plus tard le pape Sylvestre II et est crédité d\'avoir introduit les chiffres arabes (les chiffres 0-9) en Europe après avoir étudié ici.',
        'Les non-musulmans ne peuvent pas entrer dans la mosquée ou les bâtiments universitaires principaux. Cependant, la bibliothèque — récemment restaurée avec un investissement de 800 000 € — ouvre occasionnellement pour des visites guidées.',
      ],
      callout: {
        label: '📚 Conseils Insider Al-Qarawiyyin',
        body: 'La meilleure vue sur la cour de l\'université est depuis les terrasses des boutiques de cuir sur Derb Mechattine — demandez poliment à accéder à la terrasse. La bibliothèque Al-Qarawiyyin récemment restaurée est l\'un des joyaux cachés du Maroc — renseignez-vous à l\'office du tourisme de Fès. Le vendredi matin, l\'appel à la prière depuis Al-Qarawiyyin est l\'un des sons les plus puissants du Maroc.',
      },
    },
    {
      heading: 'La Tannerie Chouara — Ce Que Personne ne Vous Dit',
      paragraphs: [
        'La Tannerie Chouara est le site emblématique de Fès et l\'un des endroits les plus photographiés du Maroc. Elle est en activité continue depuis le 11e siècle, ce qui en fait la plus ancienne tannerie au monde. Les cuves en pierre que vous voyez — remplies de jaune safran, bleu indigo, rouge coquelicot et blanc oxydé — sont largement inchangées depuis l\'époque médiévale.',
        'Ce que la plupart des guides omettent : la tannerie est techniquement un complexe d\'entreprises privées entouré de boutiques de cuir. Les meilleures terrasses de vue sont aux étages supérieurs de ces boutiques — et l\'accès aux terrasses est presque toujours lié à un argumentaire de vente. Vous n\'êtes sous aucune obligation d\'acheter.',
        'Le meilleur moment pour visiter est en milieu de matinée (9h–11h) quand les travailleurs sont les plus actifs et la lumière naturelle remplit les cuves.',
      ],
      callout: {
        label: '🎨 Secret Insider Tannerie',
        body: 'Les trois principaux points de vue offrent des angles différents. La terrasse la plus haute donne la vue la plus large. Conseil photo : photographiez à 9h depuis les terrasses orientées est quand la lumière du matin remplit les cuves directement. La lumière de l\'après-midi vient de derrière les cuves et les photos sont plates.',
      },
    },
    {
      heading: 'Meilleures Choses à Faire à Fès',
      paragraphs: ['Fès récompense l\'explorateur patient. Voici les expériences essentielles avec des estimations honnêtes et des conseils locaux.'],
      table: {
        caption: 'Meilleures choses à faire à Fès 2026',
        headers: ['Expérience', 'Quartier', 'Durée', 'Prix', 'Conseil local'],
        rows: [
          ['Point de vue Tannerie Chouara', 'Médina est', '1–2 heures', 'Gratuit (terrasses boutiques)', 'Allez 9h–11h, approchez depuis Rue Chouara sud, apportez votre propre menthe'],
          ['Bab Boujloud (Porte Bleue)', 'Entrée médina', '30 min', 'Gratuit', 'La plus belle porte du Maroc — meilleures photos à l\'heure bleue (crépuscule)'],
          ['Medersa Bou Inania', 'Près Bab Boujloud', '1 heure', 'MAD 70', 'Meilleur exemple d\'architecture Marinide — 14e siècle, récemment restaurée'],
          ['Medersa Al-Attarine', 'Près Al-Qarawiyyin', '45 min', 'MAD 70', 'Nommée d\'après le marché aux épices voisin — cour rivalise avec Bou Inania'],
          ['Zone Al-Qarawiyyin (promenade)', 'Médina centrale', '1 heure', 'Gratuit', 'Vous ne pouvez pas entrer mais marcher dans les rues environnantes est l\'expérience'],
          ['Quartier des Potiers Chouara', 'Nord médina', '45 min', 'Gratuit', 'Regardez la poterie traditionnelle — plus authentique que les tanneries'],
          ['Fontaine Nejjarine & Musée Bois', 'Médina centrale', '1 heure', 'MAD 20', 'L\'une des plus belles places de médina au Maroc — la fontaine est extraordinaire'],
          ['Portes du Palais Royal', 'Fès el-Jdid', '30 min', 'Gratuit (extérieur)', 'Sept portes dorées sur une vaste place en zellige — photos à l\'heure dorée'],
          ['Mellah (Quartier Juif)', 'Fès el-Jdid', '1 heure', 'Gratuit', 'Balcons en bois distinctifs — moins de pression touristique'],
          ['Tombeaux Mérinides (vue panoramique)', 'Au-dessus médina nord', '1 heure', 'Gratuit', 'Meilleure vue panoramique sur toute la médina — allez au coucher de soleil'],
          ['Place Seffarine (Chaudronniers)', 'Médina centrale', '30 min', 'Gratuit', 'La seule place de médina où les artisans travaillent en plein air'],
          ['Jnan Sbil (Jardins Royaux)', 'Entre les médinas', '1 heure', 'Gratuit', 'Plus ancien jardin public de Fès — havre de paix'],
        ],
      },
    },
    {
      heading: 'Naviguer la Médina — Faut-il un Guide ?',
      paragraphs: [
        'Notre réponse honnête : oui, pour la première demi-journée. Un bon guide sait quelle terrasse de boutique de cuir a la meilleure vue sur les tanneries, quand visiter les mederasas pour éviter les groupes scolaires, quelle ruelle mène aux vrais chaudronniers actifs.',
        'Les guides licenciés portent des badges officiels et facturent MAD 300–500 pour une demi-journée. Réservez via votre riad ou l\'office du tourisme de Fès.',
      ],
      callout: {
        label: '🧭 Stratégie Guide',
        body: 'Notre recommandation : embauchèz un guide licencié pour la première demi-journée (tanneries, mederasas, zone Al-Qarawiyyin) — MAD 300–400 le vaut. Puis explorez indépendamment le reste de votre séjour. Téléchargez maps.me avant d\'arriver — il a Fès el-Bali cartographié avec des détails au niveau des ruelles et fonctionne hors ligne.',
      },
    },
    {
      heading: 'Où Dormir à Fès',
      paragraphs: ['Comme Marrakech, Fès a une extraordinaire culture des riads. Contrairement à Marrakech, les riads de la médina de Fès sont généralement moins touristiques et plus abordables.'],
      table: {
        caption: 'Où dormir à Fès — options par zone et budget 2026',
        headers: ['Zone', 'Ambiance', 'Idéal pour', 'Fourchette prix/nuit'],
        rows: [
          ['Médina près Bab Boujloud', 'Central, pratique, quelques bruits', 'Premiers visiteurs, accès médina facile', 'MAD 300–1 200 (28–111€)'],
          ['Médina près Al-Qarawiyyin', 'Profonde médina, plus immersif, plus calme la nuit', 'Ceux voulant l\'expérience médina complète', 'MAD 400–1 500 (37–139€)'],
          ['Fès el-Jdid', 'Entre vieille et nouvelle ville, plus calme', 'Voyageurs cherchant équilibre accès et calme', 'MAD 250–800 (23–74€)'],
          ['Ville Nouvelle', 'Hôtels modernes, climatisation, accès taxis', 'Hommes d\'affaires, amateurs de confort, hôtels budget', 'MAD 200–800 (18–74€)'],
        ],
      },
    },
    {
      heading: 'Que Manger à Fès',
      paragraphs: ['La cuisine fassi est considérée par beaucoup de spécialistes comme la plus raffinée du Maroc, ancrée dans des traditions andalouses apportées par les réfugiés musulmans d\'Espagne en 1492.'],
      table: {
        caption: 'Que manger à Fès 2026 — spécialités locales',
        headers: ['Plat', 'Où', 'Prix', 'Notes'],
        rows: [
          ['Pastilla au pigeon', 'Restaurants Fassis traditionnels', 'MAD 80–150', 'Fès est la maison de la pastilla — version plus sucrée et plus riche qu\'ailleurs'],
          ['Agneau mrouzia', 'Restaurants riads', 'MAD 100–180', 'Spécialité fassi — miel, ras el hanout, amandes et raisins'],
          ['Tagine au citron confit', 'Restaurants locaux, médina', 'MAD 50–100', 'Le citron confit (l\'hamd mrakad) est une spécialité de Fès'],
          ['Harcha (pain de semoule)', 'Boulangeries, étals, matin', 'MAD 3–5', 'Petit-déjeuner fassi — plus dense et plus riche qu\'ailleurs'],
          ['Bissara (soupe de fèves)', 'Étals de rue, matin', 'MAD 5–10', 'Carburant matin des artisans de la médina'],
          ['Seffa (couscous sucré au poulet)', 'Restaurants traditionnels', 'MAD 60–120', 'Spécialité fassi — cannelle et sucre glace sur le couscous'],
        ],
      },
    },
    {
      heading: 'Fès vs Marrakech — La Comparaison Honnête',
      paragraphs: ['Nos clients posent cette question constamment. Voici notre réponse définitive après cinq ans d\'envoi de voyageurs dans les deux villes.'],
      table: {
        caption: 'Fès vs Marrakech — comparaison complète 2026',
        headers: ['Aspect', 'Fès', 'Marrakech'],
        rows: [
          ['Première impression', 'Écrasant, désorientant, intense', 'Théâtral, excitant, accessible'],
          ['Taille médina', 'Plus grande zone urbaine piétonne au monde', 'Grande mais navigable sans guide après 1 jour'],
          ['Pression touristique', 'Modérée — moins de touristes de masse', 'Élevée — l\'une des villes les plus visitées d\'Afrique'],
          ['Authenticité', 'La plus haute du Maroc — vraie ville médiévale vivante', 'Élevée mais plus adaptée aux touristes'],
          ['Profondeur culturelle', 'La plus profonde du Maroc — capitale intellectuelle', 'Forte mais plus sensorielle qu\'intellectuelle'],
          ['Cuisine', 'Considérée comme la plus fine du Maroc', 'Excellente mais plus adaptée au tourisme'],
          ['Accès depuis CMN', '280 km — 3h30 par A2', '240 km — 2h30 par A7'],
          ['Pour qui', 'Voyageurs curieux et patients cherchant l\'âme du Maroc', 'Premiers visiteurs, courts séjours, familles'],
        ],
      },
      callout: {
        label: '🎯 Notre Recommandation',
        body: 'Premier voyage Maroc, 5 jours : 3 nuits Marrakech + 2 nuits Fès — conduisez entre les deux (3h30 via Casablanca). Premier voyage, 7–10 jours : ajoutez Chefchaouen entre Fès et le retour. Deuxième voyage : priorisez Fès. Nous arrangerons la location voiture depuis CMN pour le circuit complet : +212 634 276 534',
      },
    },
    {
      heading: 'Excursions depuis Fès — Les Meilleures du Nord Maroc',
      paragraphs: ['Fès est la meilleure base pour les excursions dans le nord du Maroc. À 1–3 heures, des ruines romaines, une ville sainte, des forêts de cèdres avec des singes sauvages, et le début de la route du Sahara.'],
      table: {
        caption: 'Meilleures excursions depuis Fès 2026',
        headers: ['Destination', 'Distance', 'Trajet', 'Pourquoi y aller', 'Voiture nécessaire ?'],
        rows: [
          ['Meknès', '60 km', '1 heure', 'Quatrième ville impériale — Bab Mansour (plus belle porte du Maroc), Mausolée Moulay Ismail', 'Recommandée — transports publics lents'],
          ['Volubilis (ruines romaines)', '95 km', '1h30', 'Meilleures ruines romaines préservées d\'Afrique — site UNESCO, mosaïques', 'Oui — combiner avec Meknès'],
          ['Moulay Idriss Zerhoun', '100 km', '1h30', 'Ville de pèlerinage la plus sainte du Maroc — village blanc sur colline', 'Oui — combiner avec Volubilis/Meknès'],
          ['Ifrane', '65 km', '1 heure', '"Suisse du Maroc" — ville de montagne style européen, forêt de cèdres, macaques de Barbarie', 'Oui — belle route dans le Moyen Atlas'],
          ['Forêt de cèdres d\'Azrou', '90 km', '1h30', 'Forêt de cèdres anciens avec macaques de Barbarie sauvages', 'Oui — combiner avec Ifrane'],
          ['Chefchaouen', '200 km', '3h–3h30', 'La Ville Bleue — combiner comme séjour 2 nuits, pas excursion', 'Oui — recommandé nuit sur place'],
          ['Sahara/Merzouga', '460 km', '8–9 heures', 'Dunes Erg Chebbi — trop loin pour excursion, tour 2–3 jours', 'Oui — route Maroc classique depuis Fès'],
        ],
      },
      callout: {
        label: '🚗 Le Circuit Parfait depuis Fès',
        body: 'Une voiture, un jour, trois sites UNESCO : Fès → Volubilis (45 min, ruines romaines, 2 heures) → Moulay Idriss (15 min, 1 heure) → Meknès (30 min, 2 heures, Bab Mansour + déjeuner) → Fès (1h retour). Conduite totale : ~3,5 heures. Expérience totale : extraordinaire. +212 634 276 534',
      },
    },
    {
      heading: 'Comment Rejoindre Fès depuis Casablanca',
      paragraphs: ['Fès est à 280 km de l\'aéroport de Casablanca (CMN) — bien connectée par autoroute, train et bus.'],
      table: {
        caption: 'Rejoindre Fès depuis Casablanca 2026 — toutes les options',
        headers: ['Option', 'Prix', 'Durée', 'Idéal pour'],
        rows: [
          ['Voiture de location depuis CMN', 'Dès MAD 250/jour (23€)', '3h30 via A2', 'Meilleur — liberté pour excursions, Meknès/Volubilis en route possible'],
          ['Train ONCF (CMN → Fès)', 'MAD 115 (2e classe)', '3h30', 'Voyageurs budget sans plans d\'excursion'],
          ['Bus CTM', 'MAD 100–130', '4h30–5h', 'Option la moins chère mais la plus lente'],
          ['Depuis Marrakech en voiture', 'MAD 250/jour location', '3h30 via Casablanca A7+A2', 'La plupart des voyageurs le font dans un circuit'],
          ['Depuis Chefchaouen en voiture', 'MAD 250/jour location', '3h–3h30', 'Étape idéale après Chefchaouen sur la boucle nord'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'Combien de jours faut-il à Fès ?',
      answer: '2 jours complets minimum. Jour 1 : guide licencié demi-journée (tanneries, Medersa Bou Inania, zone Al-Qarawiyyin), après-midi exploration libre, Tombeaux Mérinides au coucher de soleil. Jour 2 : Medersa Al-Attarine, Mellah, Portes du Palais Royal, quartier poteries, Fontaine Nejjarine. Jour 3 (optionnel) : excursion Meknès et Volubilis.',
    },
    {
      question: 'La médina de Fès est-elle sûre à naviguer seul ?',
      answer: 'Oui — la médina est sûre en termes de criminalité. Le défi est la navigation, pas la sécurité. Le premier jour, envisagez un guide licencié pour la première demi-journée. À partir du deuxième jour, l\'exploration indépendante est excellente. Téléchargez maps.me avant d\'arriver et utilisez-le hors ligne.',
    },
    {
      question: 'Quelle est la meilleure période pour visiter Fès ?',
      answer: 'Mars–Mai et septembre–novembre. Le printemps est idéal : températures 18–26°C, pas de pluie. Évitez août (chaleur extrême, 35–40°C). L\'hiver (décembre–février) est froid — 5–10°C la nuit — mais calme et atmosphérique.',
    },
    {
      question: 'Faut-il visiter Fès ou Marrakech en premier ?',
      answer: 'Marrakech en premier si vous avez peu de temps — plus accessible et livre ses points forts immédiatement. Fès récompense les voyageurs qui arrivent avec un peu de contexte marocain. Le voyage idéal : Marrakech en premier (2–3 nuits), puis Fès (2 nuits), reliées par 3h30 de route ou de train.',
    },
    {
      question: 'Comment aller de Casablanca à Fès ?',
      answer: 'En voiture de location : 280 km sur l\'A2 depuis CMN, 3h30, péage environ MAD 70. En train ONCF : 3h30 depuis Casa Voyageurs, MAD 115 en 2e classe. En bus CTM : 4h30–5h, MAD 100–130. Louer à CMN et conduire vous donne la possibilité de faire étape à Meknès et Volubilis.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'Pour quoi Fès est-elle célèbre ?', answer: 'Fès est célèbre pour trois choses avant tout : la médina de Fès el-Bali (plus grande zone urbaine piétonne au monde et Patrimoine Mondial UNESCO), la Tannerie Chouara (plus ancienne tannerie au monde, en activité depuis le 11e siècle), et l\'Université Al-Qarawiyyin (fondée en 859, la plus ancienne université en activité continue au monde). Fès est également la capitale spirituelle et intellectuelle du Maroc.' },
    { question: 'Fès vaut-il le détour ?', answer: 'Absolument — Fès est la ville la plus extraordinaire du Maroc pour les voyageurs cherchant la profondeur plutôt que le spectacle. La médina est l\'un des environnements urbains médiévaux les plus complets survivant sur terre. Elle demande plus d\'efforts que Marrakech mais récompense cet effort avec une expérience que la plupart des visiteurs décrivent comme le point culminant de leur voyage au Maroc.' },
    { question: 'Quelle est la distance entre Fès et Marrakech ?', answer: 'Fès est à environ 530 km de Marrakech — environ 3h30 de route via l\'autoroute A7/A2 par Casablanca. La plupart des voyageurs font ce trajet dans un circuit : vol vers Casablanca, conduite vers Marrakech (2h30), puis Marrakech → Fès (3h30 via Casablanca), retour à Casablanca (3h30) pour le vol retour.' },
  ],
  relatedDestinations: ['fes', 'marrakech', 'chefchaouen', 'rabat'],
  relatedPosts: ['visite-autonome-medina-fes', 'location-voiture-aeroport-fes-maroc', 'conduite-marrakech-fes', 'guide-voyage-marrakech', 'guide-voyage-chefchaouen', 'guide-voyage-casablanca', 'guide-aeroport-casablanca-cmn'],
  alternates: ALTERNATES,
};

const AR: BlogPost = {
  slug: SLUG_AR,
  lang: 'ar',
  metaTitle: 'دليل السفر لفاس 2026 — العاصمة الروحية للمغرب: ما لا يخبرك به أحد',
  metaDescription: 'دليل شامل لفاس 2026: التنقل في المدينة العتيقة، دباغة شوارة، جامعة القرويين (أقدم جامعة في العالم)، أفضل الرياضات، المطبخ، رحلات مكناس وولوبيليس.',
  title: 'دليل السفر لفاس 2026: العاصمة الروحية للمغرب — 40 شيئاً تعرفه قبل الوصول',
  description: 'دليل فاس المكتوب من أشخاص يرسلون إليها مئات المسافرين من الدار البيضاء كل عام. كيف تتنقل في أكبر منطقة حضرية خالية من السيارات في العالم، سر المدبغة الذي لا يشاركه أحد، لماذا تهم القرويين، المقارنة الصادقة مع مراكش، والرحلات اليومية التي تجعل فاس أفضل قاعدة في شمال المغرب.',
  keyword: 'دليل السفر لفاس',
  coverImage: COVER,
  coverAlt: 'دليل السفر لفاس المغرب 2026 — بوابة باب بو جلود الزرقاء مدخل مدينة فاس البالي',
  publishedISO: '2026-08-10',
  updatedISO: '2026-08-10',
  author: 'عمر ل. — مقيم في الدار البيضاء ومتخصص في الرحلات البرية بالمغرب',
  readingMinutes: 16,
  intro: 'إذا كانت مراكش قلب المغرب المسرحي، فإن فاس روحه. تأسست عام 789 ميلادي، وهي من أقدم مدن العالم الإسلامي وتضم أكثر المدن القروسطية الحية استثنائيةً على وجه الأرض — مدينة عتيقة مدرجة في اليونسكو بأكثر من 9,000 زقاق حيث لا تزال الحمير تُسلِّم البضائع، ولا يزال الحرفيون يعملون بتقنيات القرن الثاني عشر، ولا تزال أقدم جامعة مستمرة في العالم تُدرِّس. فريقنا المقيم في الدار البيضاء أوصل مئات العملاء إلى فاس على مدى خمس سنوات. هذا هو الدليل الناتج عن تلك التجربة.',
  sections: [
    {
      heading: 'هل فاس تستحق الزيارة؟ الإجابة الصادقة',
      paragraphs: [
        'فاس هي أكثر مدن المغرب مكافأةً — وأكثرها تطلباً. خلافاً لمراكش التي تقدم نقاطها البارزة بسرعة، تنكشف فاس ببطء. المدينة العتيقة مستحيلة التنقل فعلياً دون تحضير في الزيارة الأولى. GPS يفشل في الشوارع المغطاة. اللافتات شحيحة. الحجم ساحق: 9,000 زقاق، 300 مسجد، 300 هكتار من النسيج العمراني القروسطي.',
        'المسافرون الذين يحبون فاس هم أولئك الذين يتباطؤون، يستأجرون مرشداً لنصف اليوم الأول، ويعطون المدينة وقتاً لتكشف منطقها. في اليوم الثاني، تبدأ المدينة بالمعنى. في اليوم الثالث، تصبح واحدة من أكثر الأماكن استثنائيةً التي عبرتَ فيها.',
      ],
      callout: {
        label: '🇲🇦 حكم محلي',
        body: 'مقارنتنا الصادقة: مراكش تبهرك فوراً. فاس تغيّرك ببطء. إذا زرت مدينة مغربية واحدة، مراكش أكثر وصولاً. إذا زرت اثنتين، فاس هي التي ستتحدث عنها لسنوات. أعطها يومين كاملين على الأقل — 3 أفضل.',
      },
    },
    {
      heading: 'فاس بالأرقام — المعلومات الأساسية 2026',
      paragraphs: ['الأساسيات قبل الوصول.'],
      table: {
        caption: 'المعلومات الأساسية عن فاس 2026',
        headers: ['المعلومة', 'التفصيل'],
        rows: [
          ['تأسست', '789 ميلادي على يد مولاي إدريس الأول — من أقدم مدن المغرب'],
          ['السكان', '~1.3 مليون (رابع أكبر مدينة في المغرب)'],
          ['وضع اليونسكو', 'مدينة فاس البالي — تراث عالمي منذ 1981'],
          ['مساحة المدينة', '300 هكتار، +9,000 زقاق — أكبر منطقة حضرية خالية من السيارات في العالم'],
          ['المطار', 'مطار فاس سايس (FEZ) — 15 كم من المدينة العتيقة'],
          ['أقرب مطار رئيسي', 'CMN الدار البيضاء — 280 كم، 3:30 ساعة بالطريق السريع'],
          ['اشتهرت بـ', 'القرويين (أقدم جامعة في العالم)، دباغة شوارة، المدينة العتيقة، الحرف اليدوية'],
          ['أفضل وقت', 'مارس–مايو وسبتمبر–نوفمبر'],
          ['المدة الموصى بها', 'يومان على الأقل — 3 للرحلات اليومية لمكناس وولوبيليس'],
          ['تأجير سيارة من CMN', 'من 250 درهم/يوم (23€) — MoroccoForYou Cars'],
        ],
      },
    },
    {
      heading: 'الأحياء الثلاثة لفاس — في أيها أنت؟',
      paragraphs: ['فاس ليست مدينة واحدة — إنها ثلاث مدن متراكمة عبر 1,200 سنة من التاريخ.'],
      table: {
        caption: 'الأحياء الثلاثة لفاس — الدليل الكامل 2026',
        headers: ['الحي', 'تأسس', 'الطابع', 'لماذا تذهب'],
        rows: [
          ['فاس البالي (فاس القديمة)', '789 م', 'المدينة العتيقة القديمة — +9,000 زقاق، بلا سيارات، حرف قروسطية، مساجد ومدارس', 'كل تجربة فاس — كل ما جئت من أجله'],
          ['فاس الجديد', 'القرن 13م', 'المدينة "الجديدة" القروسطية — القصر الملكي، الملاح (الحي اليهودي)، حدائق', 'بوابات القصر الملكي، الملاح، الانتقال بين العالمين'],
          ['المدينة الجديدة', 'القرن 20 (فرنسي)', 'مدينة حديثة — فنادق، مطاعم، محاور النقل، بنوك', 'حيث تصل، حيث تنام، حيث تعمل التاكسيات'],
        ],
      },
      callout: {
        label: '💡 حقيقة تنقل جوهرية',
        body: 'التاكسيات لا تستطيع دخول مدينة فاس البالي — تتركك عند البوابات. البوابة الرئيسية هي باب بو جلود (البوابة الزرقاء)، نقطة الدخول السياحية الأسهل. من باب بو جلود، تمتد المدينة نزولاً نحو المدابغ والقرويين.',
      },
    },
    {
      heading: 'جامعة القرويين — أقدم جامعة في العالم (تأسست 859م)',
      paragraphs: [
        'جامعة القرويين واحدة من أهم المباني في تاريخ البشرية — تأسست عام 859 ميلادي على يد فاطمة الفهرية، امرأة من عائلة تاجر تونسي ثرية استخدمت ميراثها لإنشاء مسجد ومدرسة ستصبح أقدم جامعة مستمرة في العالم. هذه ليست مسألة جدل بل سجل غينيس واعتراف يونسكو.',
        'لأكثر من 1,200 سنة، تعمل القرويين باستمرار. إنها تسبق جامعة بولونيا (1088) وأكسفورد (1096) وكامبريدج (1209) بقرون. في أوج ازدهارها، استقطبت علماء من العالم الإسلامي وأوروبا المسيحية.',
        'غير المسلمين لا يستطيعون دخول المسجد أو مباني الجامعة الرئيسية. إلا أن المكتبة — المُرممة مؤخراً باستثمار 800,000 يورو — تفتح أحياناً لجولات إرشادية.',
      ],
      callout: {
        label: '📚 نصائح داخلية عن القرويين',
        body: 'أفضل منظر لفناء الجامعة من شرفات محلات الجلود في درب المشاطين — اطلب بأدب الوصول للشرفة. مكتبة القرويين المُرممة حديثاً من جواهر المغرب المخفية — استفسر في مكتب سياحة فاس. الجمعة صباحاً، الأذان من القرويين من أقوى الأصوات في المغرب.',
      },
    },
    {
      heading: 'دباغة شوارة — ما لا يخبرك به أحد',
      paragraphs: [
        'دباغة شوارة هي المعلم الأيقوني لفاس وأحد أكثر المواقع تصويراً في المغرب. في عملية مستمرة منذ القرن الحادي عشر، تجعلها أقدم مدبغة في العالم. الحجارة التي تراها — مملوءة بالأصفر الزعفراني والأزرق النيلي والأحمر الخشخاش والأبيض المؤكسد — لم تتغير جوهرياً منذ العصور الوسطى.',
        'ما تتجاهله معظم الأدلة: المدبغة تقنياً مجمع أعمال خاص محاط بمحلات الجلود. أفضل شرفات المشاهدة في الطوابق العليا من هذه المحلات — والوصول مرتبط دائماً تقريباً بعرض بيع. أنت غير ملزم بالشراء.',
        'أفضل وقت للزيارة: منتصف الصباح (9–11 صباحاً) حين يكون العمال في أكثر نشاطهم.',
      ],
      callout: {
        label: '🎨 سر داخلي عن المدبغة',
        body: 'نصيحة تصوير: صوّر الساعة 9 صباحاً من الشرفات الشرقية حين يملأ ضوء الصباح الأحواض مباشرة. ضوء الظهيرة يأتي من خلف الأحواض والصور تبدو مسطحة.',
      },
    },
    {
      heading: 'أفضل الأشياء للقيام بها في فاس',
      paragraphs: ['فاس تكافئ المستكشف الصبور. إليك التجارب الأكثر أهمية.'],
      table: {
        caption: 'أفضل الأشياء للقيام بها في فاس 2026',
        headers: ['التجربة', 'المنطقة', 'الوقت', 'السعر', 'نصيحة محلية'],
        rows: [
          ['نقطة مشاهدة دباغة شوارة', 'شرق المدينة', '1–2 ساعة', 'مجاني (شرفات المحلات)', 'اذهب 9–11 صباحاً، اقترب من شارع شوارة جنوباً، أحضر نعناعاً'],
          ['باب بو جلود (البوابة الزرقاء)', 'مدخل المدينة', '30 دقيقة', 'مجاني', 'أجمل بوابة في المغرب — أفضل تصوير عند الغسق'],
          ['مدرسة بو عنانية', 'قرب باب بو جلود', 'ساعة', 'MAD 70', 'أفضل مثال للعمارة المرينية — القرن 14، مُرممة حديثاً'],
          ['مدرسة العطارين', 'قرب القرويين', '45 دقيقة', 'MAD 70', 'سُميت بسوق التوابل المجاور — فناؤها يضاهي بو عنانية'],
          ['منطقة القرويين (مشياً)', 'وسط المدينة', 'ساعة', 'مجاني', 'لا تستطيع الدخول لكن المشي في الشوارع المحيطة هو التجربة'],
          ['حي الفخارين (شوارة)', 'شمال المدينة', '45 دقيقة', 'مجاني', 'شاهد صنع الفخار التقليدي — أكثر أصالةً من المدابغ'],
          ['نافورة النجارين ومتحف الخشب', 'وسط المدينة', 'ساعة', 'MAD 20', 'من أجمل ساحات المدينة العتيقة في المغرب'],
          ['بوابات القصر الملكي', 'فاس الجديد', '30 دقيقة', 'مجاني (خارجياً)', 'سبع بوابات ذهبية على ساحة زليج واسعة — صور عند الساعة الذهبية'],
          ['الملاح (الحي اليهودي)', 'فاس الجديد', 'ساعة', 'مجاني', 'شرفات خشبية مميزة — ضغط سياحي أقل'],
          ['المقابر المرينية (منظر بانورامي)', 'فوق شمال المدينة', 'ساعة', 'مجاني', 'أفضل إطلالة بانورامية على المدينة كلها — اذهب عند الغروب'],
          ['ساحة الصفارين (النحاسيون)', 'وسط المدينة', '30 دقيقة', 'مجاني', 'الساحة الوحيدة حيث يعمل الحرفيون في الهواء الطلق'],
          ['جنان السبيل (الحديقة الملكية)', 'بين المدينتين', 'ساعة', 'مجاني', 'أقدم حديقة عامة في فاس — ملاذ هادئ'],
        ],
      },
    },
    {
      heading: 'التنقل في المدينة — هل تحتاج مرشداً؟',
      paragraphs: [
        'إجابتنا الصادقة: نعم، لنصف اليوم الأول. مرشد جيد يعرف أي شرفة محل جلود لديها أفضل منظر للمدابغ، ومتى يزور المدارس لتجنب المجموعات، وأي زقاق يؤدي لنحاسيي المدينة الفعليين.',
        'المرشدون المرخصون يرتدون شارات حكومية رسمية ويتقاضون MAD 300–500 للنصف يوم. احجز عبر رياضك أو مكتب سياحة فاس.',
      ],
      callout: {
        label: '🧭 استراتيجية المرشد',
        body: 'توصيتنا: استأجر مرشداً مرخصاً لنصف اليوم الأول (المدابغ والمدارس ومنطقة القرويين) — MAD 300–400 تستحق. ثم استكشف باستقلالية بقية الزيارة. حمّل maps.me قبل الوصول — لديه فاس البالي مرسومة بمستوى الأزقة وتعمل دون إنترنت.',
      },
    },
    {
      heading: 'أين تقيم في فاس',
      paragraphs: ['كمراكش، فاس لديها ثقافة رياضات استثنائية. خلافاً لمراكش، رياضات مدينة فاس العتيقة أقل سياحيةً وأفضل قيمةً عموماً.'],
      table: {
        caption: 'أين تقيم في فاس — الخيارات حسب المنطقة والميزانية 2026',
        headers: ['المنطقة', 'الأجواء', 'الأنسب لـ', 'نطاق السعر/ليلة'],
        rows: [
          ['المدينة قرب باب بو جلود', 'مركزي، مريح، بعض الضوضاء', 'الزوار للمرة الأولى، وصول سهل للمدينة', 'MAD 300–1,200 (28–111€)'],
          ['المدينة قرب القرويين', 'أعمق في المدينة، أكثر غمراً، أهدأ ليلاً', 'من يريد تجربة المدينة الكاملة', 'MAD 400–1,500 (37–139€)'],
          ['فاس الجديد', 'بين المدينتين القديمة والجديدة، أهدأ', 'مسافرون يريدون توازن الوصول والهدوء', 'MAD 250–800 (23–74€)'],
          ['المدينة الجديدة', 'فنادق حديثة، تكييف، وصول للتاكسيات', 'رجال أعمال، باحثون عن الراحة', 'MAD 200–800 (18–74€)'],
        ],
      },
    },
    {
      heading: 'ماذا تأكل في فاس',
      paragraphs: ['المطبخ الفاسي يُعدّ من كثير من علماء الطعام المغاربة الأكثر رقياً في البلاد، متجذراً في التقاليد الأندلسية التي جلبها اللاجئون المسلمون من إسبانيا عام 1492.'],
      table: {
        caption: 'ماذا تأكل في فاس 2026 — التخصصات المحلية',
        headers: ['الطبق', 'أين', 'السعر', 'ملاحظات'],
        rows: [
          ['بستيلة الحمام', 'مطاعم فاسية تقليدية', 'MAD 80–150', 'فاس مهد البستيلة — نسخة أحلى وأغنى مما في أي مكان آخر'],
          ['مروزية الضأن', 'مطاعم الرياضات', 'MAD 100–180', 'تخصص فاسي — عسل ورأس الحانوت ولوز وزبيب'],
          ['طاجين بالليمون المخلل', 'مطاعم محلية، المدينة', 'MAD 50–100', 'الليمون المخلل (الحامض مرقد) تخصص فاسي'],
          ['حرشة (خبز السميد)', 'مخابز، أكشاك، الصباح', 'MAD 3–5', 'فطور فاس — أكثف وأغنى مما في مكان آخر'],
          ['بيصارة (حساء الفول)', 'أكشاك الشوارع، الصباح', 'MAD 5–10', 'وقود صباح حرفيي المدينة'],
          ['سفة (كسكس حلو بالدجاج)', 'مطاعم تقليدية', 'MAD 60–120', 'تخصص فاسي — قرفة وسكر ناعم فوق الكسكس'],
        ],
      },
    },
    {
      heading: 'فاس مقابل مراكش — المقارنة الصادقة',
      paragraphs: ['عملاؤنا يطرحون هذا السؤال باستمرار. إليك إجابتنا النهائية بعد خمس سنوات.'],
      table: {
        caption: 'فاس مقابل مراكش — مقارنة كاملة للمسافرين 2026',
        headers: ['الجانب', 'فاس', 'مراكش'],
        rows: [
          ['الانطباع الأول', 'ساحق، مُربك، حاد', 'مسرحي، مثير، في متناول اليد'],
          ['حجم المدينة', 'أكبر منطقة حضرية خالية من السيارات في العالم', 'كبيرة لكن قابلة للتنقل دون مرشد بعد يوم'],
          ['الضغط السياحي', 'معتدل — سياح أقل من قطاع الكميات', 'عالٍ — من أكثر مدن أفريقيا زيارةً'],
          ['الأصالة', 'الأعلى في المغرب — مدينة قروسطية حية حقيقية', 'عالية لكن أكثر تكيفاً للسياحة'],
          ['العمق الثقافي', 'الأعمق في المغرب — العاصمة الفكرية الروحية', 'قوي لكن أكثر حسيةً من فكريةً'],
          ['المطبخ', 'يُعدّ الأرقى في المغرب', 'ممتاز لكن أكثر تكيفاً للسياحة'],
          ['الوصول من CMN', '280 كم — 3:30 ساعة بـA2', '240 كم — 2:30 ساعة بـA7'],
          ['لمن هي', 'مسافرون فضوليون صبورون يريدون روح المغرب', 'الزوار للمرة الأولى، الإقامات القصيرة، العائلات'],
        ],
      },
      callout: {
        label: '🎯 توصيتنا',
        body: 'أول رحلة مغرب، 5 أيام: 3 ليالٍ مراكش + ليلتان فاس — قُد بينهما (3:30 عبر الدار البيضاء). أول رحلة، 7–10 أيام: أضف شفشاون بين فاس والعودة. ثاني رحلة: اجعل فاس أولويتك. نرتب تأجير السيارة من CMN للحلقة الكاملة: +212 634 276 534',
      },
    },
    {
      heading: 'الرحلات اليومية من فاس — الأفضل في شمال المغرب',
      paragraphs: ['فاس هي أفضل قاعدة للرحلات اليومية في شمال المغرب. في غضون 1–3 ساعات، تصل لأطلال رومانية ومدينة زيارة مقدسة وغابات أرز بقرود برية وبداية طريق الصحراء.'],
      table: {
        caption: 'أفضل الرحلات اليومية من فاس 2026',
        headers: ['الوجهة', 'المسافة', 'وقت القيادة', 'لماذا تذهب', 'سيارة مطلوبة؟'],
        rows: [
          ['مكناس', '60 كم', 'ساعة', 'المدينة الإمبراطورية الرابعة — باب المنصور (أجمل بوابة في المغرب)، ضريح مولاي إسماعيل', 'موصى بها — وسائل النقل بطيئة'],
          ['ولوبيليس (الأطلال الرومانية)', '95 كم', '1:30 ساعة', 'أفضل أطلال رومانية محفوظة في أفريقيا — موقع يونسكو، فسيفساء', 'نعم — ادمجها مع مكناس'],
          ['مولاي إدريس زرهون', '100 كم', '1:30 ساعة', 'أقدس مدينة حج في المغرب — قرية بيضاء على تل', 'نعم — ادمجها مع ولوبيليس/مكناس'],
          ['إفران', '65 كم', 'ساعة', '"سويسرا المغرب" — مدينة جبلية بطراز أوروبي، غابة أرز، قرود البربر', 'نعم — طريق جميل عبر الأطلس المتوسط'],
          ['غابة أرز أزرو', '90 كم', '1:30 ساعة', 'غابة أرز قديمة مع قرود البربر البرية', 'نعم — ادمجها مع إفران'],
          ['شفشاون', '200 كم', '3–3:30 ساعة', 'المدينة الزرقاء — ادمجها كرحلة ليلتين لا رحلة يوم', 'نعم — موصى بالمبيت'],
          ['الصحراء/مرزوقة', '460 كم', '8–9 ساعات', 'كثبان عرق الشبي — بعيد للرحلة اليومية، جولة 2–3 أيام', 'نعم — مسار المغرب الكلاسيكي من فاس'],
        ],
      },
      callout: {
        label: '🚗 الحلقة المثالية ليوم من فاس',
        body: 'سيارة واحدة، يوم واحد، ثلاثة مواقع يونسكو: فاس ← ولوبيليس (45 دقيقة، أطلال رومانية، ساعتان) ← مولاي إدريس (15 دقيقة، ساعة) ← مكناس (30 دقيقة، ساعتان، باب المنصور + غداء) ← فاس (ساعة عودة). إجمالي القيادة: ~3.5 ساعات. إجمالي التجربة: استثنائية. +212 634 276 534',
      },
    },
    {
      heading: 'كيف تصل إلى فاس من الدار البيضاء',
      paragraphs: ['فاس على بعد 280 كم من مطار الدار البيضاء (CMN) — متصلة جيداً بالطريق السريع والقطار والحافلة.'],
      table: {
        caption: 'الوصول إلى فاس من الدار البيضاء 2026 — كل الخيارات',
        headers: ['الخيار', 'السعر', 'المدة', 'الأنسب لـ'],
        rows: [
          ['سيارة إيجار من CMN', 'من MAD 250/يوم (23€)', '3:30 ساعة بـA2', 'الأفضل — حرية لرحلات يومية، مكناس/ولوبيليس ممكنة في الطريق'],
          ['قطار ONCF (CMN ← فاس)', 'MAD 115 (درجة 2)', '3:30 ساعة', 'مسافرو الميزانية بلا خطط رحلات يومية'],
          ['حافلة CTM', 'MAD 100–130', '4:30–5 ساعات', 'أرخص الخيارات لكن الأبطأ'],
          ['من مراكش بالسيارة', 'MAD 250/يوم إيجار', '3:30 عبر الدار البيضاء A7+A2', 'معظم المسافرين يفعلون هذا كجزء من حلقة'],
          ['من شفشاون بالسيارة', 'MAD 250/يوم إيجار', '3–3:30 ساعة', 'محطة مثالية بعد شفشاون في الحلقة الشمالية'],
        ],
      },
    },
    {
      heading: '40 شيئاً تعرفه عن فاس قبل الوصول',
      paragraphs: ['المعرفة العملية التي يشاركها فريقنا مع كل عميل متجه لفاس.'],
      list: [
        'مدينة فاس البالي هي أكبر منطقة حضرية خالية من السيارات في العالم. لا سيارات، لا دراجات نارية — فقط المشاة والحمير.',
        'جامعة القرويين، تأسست 859 ميلادي، هي أقدم جامعة مستمرة في العالم. إنها تسبق أكسفورد بـ237 سنة.',
        'GPS يفشل في الشوارع المغطاة للمدينة — حمّل maps.me قبل الوصول واستخدمه دون إنترنت.',
        'باب بو جلود (البوابة الزرقاء) هو نقطة ارتكازك. إذا ضللت، اتجه نحو باب بو جلود وابدأ منها.',
        'المرشدون المرخصون يرتدون شارات حكومية رسمية. تحقق دائماً. المرشدون غير المرخصين يسببون مشاكل. الأتعاب: MAD 300–500 لنصف يوم.',
        'شرفات مشاهدة دباغة شوارة داخل محلات الجلود — يُسمح لك بالمشاهدة دون شراء، لكن صاحب المحل سيحاول البيع. لا إلزام.',
        'النعناع الذي يعطونك إياه في المدابغ لإخفاء رائحة الصبغات العضوية، وهي قوية. يساعد فعلاً.',
        'فاس أبرد من مراكش — المدينة على ارتفاع 400م والشتاء بارد فعلياً (5–10°م ليلاً في يناير).',
        'للمدينة ثلاثة أنواع من الشوارع: دروب تجارية رئيسية (واسعة، بمحلات)، دروب ثانوية سكنية (متوسطة العرض)، وأزقة مسدودة (خاصة — لا تدخلها).',
        'للحمير الأولوية. دائماً. حين تسمع "بالك!" (انتبه!) — اضغط على الجدار فوراً.',
        'بوابات القصر الملكي من أروع مواضيع التصوير في المغرب. القصر نفسه لا يُفتح للعامة.',
        'المقابر المرينية عند الغروب: أفضل منظر بانورامي مجاني في المغرب. 15 دقيقة مشياً من باب بو جلود، اتبع اللافتات صعوداً.',
        'الملاح في فاس الجديد له شرفات خشبية مميزة — طابع معماري مختلف، ضغط سياحي أقل.',
        'الكُنس والمقابر اليهودية مفتوحة للزوار — جزء مهم من تاريخ فاس يتجاهله معظم الزوار.',
        'ساحة الصفارين هي الساحة الوحيدة في المدينة حيث يعمل الحرفيون التقليديون (نحاسيون) في الهواء الطلق.',
        'نافورة النجارين من أجمل التفاصيل المعمارية في المدينة — نافورة من القرن 18 من خشب الأرز المنحوت والزليج والجص.',
        'مدرسة بو عنانية (القرن 14) أكمل مثال للعمارة المرينية في المغرب وأحد المباني الدينية القليلة في فاس المفتوحة لغير المسلمين.',
        'مدرسة العطارين، قرب القرويين، جميلة بالقدر ذاته لكن تستقبل زواراً أقل — فناؤها من أرقى ما في شمال أفريقيا.',
        'المطبخ الفاسي يُعدّ الأرقى في المغرب. التخصص المحلي هو البستيلة بالحمام — معجنات حلوة مالحة نشأت في فاس.',
        'الليمون المخلل (الحامض مرقد) في طواجن فاس تخصص محلي. يُعالج بالملح لأشهر في المدينة — نكهة لا تجدها في مكان آخر.',
        'فاس لديها أحياء حرفية فعلية — ليست نسخاً سياحية. محلات الجلود وحي الفخار ومحلات الأعمال المعدنية أعمال نشطة.',
        'التسوق في فاس: الجودة أعلى والأسعار أقل من مراكش لمعظم المنتجات الحرفية. البائعون أقل عدوانيةً.',
        'أفضل خزفيات المغرب تأتي من حي الفخار خارج أسوار المدينة — حي فخار عين نقبي حيث يمكنك مشاهدة العملية كاملة.',
        'فاس لديها جامعتان — القرويين (859 م) وجامعة فاس الحديثة (+20,000 طالب). الجمهور الطلابي يبقي المدينة حيّةً فكرياً بطريقة فريدة.',
        'المدينة سكنية حقاً — العائلات تسكن في الدروب، الأطفال يلعبون، الغسيل معلق. أنت تمشي في حي شخص ما. تصرف وفق ذلك.',
        'آداب التصوير: اسأل دائماً قبل تصوير الناس. في المدينة، إيماءة الرأس عادةً كافية. في المدابغ والمناطق الحرفية، الكاميرات مرحب بها عموماً.',
        'مهرجان الموسيقى الروحية العالمية في فاس (عادةً يونيو) أحد أعظم مهرجانات الموسيقى في العالم — موسيقى صوفية وإنجيلية وتقاليد مقدسة من عشرات الثقافات في المدينة.',
        'فاس لا تملك شاطئاً. الزوار الباحثون عن الساحل يجمعونها مع رحلة للأطلسي (الرباط 2:30) أو المتوسط (تطوان 3 ساعات).',
        'فاس ليلاً آمنة وجميلة — الضغط السياحي ينخفض كلياً بعد الثامنة والأزقة مضاءة بفوانيس تقليدية.',
        'حي المدابغ يفوح برائحة أشد في حرارة الصيف. في الشتاء والربيع أخف بكثير.',
        'فاس إلى شفشاون بالسيارة 200 كم، 3–3:30 ساعة. أجمل طريق في شمال المغرب — كثير من المسافرين يسلكون فاس ← شفشاون ← طنجة.',
        'القطار من فاس للدار البيضاء (3:30 ساعة) موثوق ومريح ومكيف. خيار ممتاز إذا لم تحتج السيارة للرحلة العودة.',
        'مطار فاس (FEZ) يخدم وجهات أوروبية عدة مباشرةً — أساساً فرنسا وإسبانيا وبلجيكا وهولندا.',
        'فاس إلى مرزوقة (الصحراء) 460 كم — يوم قيادة كامل عبر زقاق زيز الخلاب والأطلس المتوسط. معظم المسافرين يفعلونها كجولة 2–3 أيام.',
        'المدينة العتيقة لفاس البالي مأهولة باستمرار منذ 1,200 سنة. إنها ليست متحفاً — إنها مدينة حية.',
        'مكناس، 60 كم، غالباً ما يتجاهلها المسافرون المتسرعون. هذا خطأ — باب المنصور بمكناس أجمل بوابة منفردة في المغرب.',
        'ولوبيليس، 95 كم من فاس، من أفضل مواقع الحقبة الرومانية محفوظاً في أفريقيا. الفسيفساء استثنائية.',
        'ميزانية فاس: MAD 500–800/يوم يغطي رياضاً متوسطاً ووجبات مطعم ورسوم دخول. أقل إذا أقمت في رياض اقتصادي وأكلت طعام الشوارع (MAD 200–300/يوم ممكن).',
        'أفضل وقت للوصول إلى فاس هو بعد الظهر — استعمر رياضك، امشِ للمقابر المرينية للغروب، تعشَّ في المدينة. يومك الأول الكامل جاهز للمدابغ والمدارس.',
      ],
    },
  ],
  faqs: [
    {
      question: 'كم يوماً تحتاج في فاس؟',
      answer: 'يومان كاملان على الأقل. اليوم 1: مرشد مرخص نصف يوم (مدابغ، مدرسة بو عنانية، منطقة القرويين)، بعد الظهر استكشاف حر، المقابر المرينية عند الغروب. اليوم 2: مدرسة العطارين، الملاح، بوابات القصر الملكي، حي الفخار، نافورة النجارين. اليوم 3 (اختياري): رحلة يومية لمكناس وولوبيليس.',
    },
    {
      question: 'هل المدينة العتيقة لفاس آمنة للتنقل المنفرد؟',
      answer: 'نعم — المدينة آمنة من حيث الجريمة. التحدي هو التنقل لا الأمان. في اليوم الأول، فكر في مرشد مرخص لنصف اليوم الأول. من اليوم الثاني، الاستكشاف المستقل ممتاز. حمّل maps.me قبل الوصول واستخدمه دون إنترنت.',
    },
    {
      question: 'ما أفضل وقت لزيارة فاس؟',
      answer: 'مارس–مايو وسبتمبر–نوفمبر. الربيع مثالي: درجات حرارة 18–26°م، لا مطر. تجنب أغسطس (حرارة شديدة، 35–40°م). الشتاء (ديسمبر–فبراير) بارد — 5–10°م ليلاً — لكن هادئ وذو أجواء.',
    },
    {
      question: 'هل أزور فاس أم مراكش أولاً؟',
      answer: 'مراكش أولاً إذا كان وقتك محدوداً — أكثر وصولاً وتقدم نقاطها البارزة فوراً. فاس تكافئ المسافرين الذين يأتون ببعض السياق المغربي. الرحلة المثالية: مراكش أولاً (2–3 ليالٍ)، ثم فاس (ليلتان)، مربوطتان بـ3:30 ساعة قيادة أو قطار.',
    },
    {
      question: 'كيف تصل من الدار البيضاء إلى فاس؟',
      answer: 'بسيارة إيجار: 280 كم على A2 من CMN، 3:30 ساعة، رسوم حوالي MAD 70. بقطار ONCF: 3:30 ساعة من محطة الدار البيضاء المسافرين، MAD 115 درجة ثانية. بحافلة CTM: 4:30–5 ساعات، MAD 100–130. الاستئجار من CMN والقيادة يمنحك إمكانية التوقف في مكناس وولوبيليس في الطريق.',
    },
  ],
  peopleAlsoAsk: [
    { question: 'بماذا تشتهر فاس؟', answer: 'تشتهر فاس بثلاثة أشياء قبل كل شيء: مدينة فاس البالي العتيقة (أكبر منطقة حضرية خالية من السيارات في العالم وتراث عالمي يونسكو)، دباغة شوارة (أقدم مدبغة في العالم، تعمل منذ القرن الحادي عشر)، وجامعة القرويين (تأسست 859م، أقدم جامعة مستمرة في العالم). فاس أيضاً العاصمة الروحية والفكرية للمغرب.' },
    { question: 'هل فاس تستحق الزيارة؟', answer: 'بالتأكيد — فاس هي أكثر مدن المغرب استثنائيةً للمسافرين الذين يريدون العمق على الاستعراض. المدينة العتيقة من أكمل البيئات العمرانية القروسطية الباقية على وجه الأرض. تتطلب جهداً أكثر من مراكش لكن تكافئ ذلك الجهد بتجربة يصفها معظم الزوار بأنها ذروة رحلتهم المغربية.' },
    { question: 'ما المسافة بين فاس ومراكش؟', answer: 'فاس على بعد حوالي 530 كم من مراكش — حوالي 3:30 ساعة قيادة عبر الطريق السريع A7/A2 عبر الدار البيضاء. معظم المسافرين يفعلون هذا كجزء من حلقة: طيران للدار البيضاء، قيادة لمراكش (2:30)، ثم مراكش لفاس (3:30 عبر الدار البيضاء)، عودة للدار البيضاء (3:30) للطيران للعودة.' },
  ],
  relatedDestinations: ['fes', 'marrakech', 'chefchaouen', 'rabat'],
  relatedPosts: ['dalil-jiwal-madhati-madina-fas', 'istajar-sayyara-matar-fas-al-maghrib', 'al-qiyadah-min-marakish-ila-fas', 'dalil-safar-marakish', 'dalil-safar-shafshawan', 'dalil-safar-dar-al-bayda', 'dalil-matar-dar-al-bayda-cmn'],
  alternates: ALTERNATES,
};

BLOG_POSTS.push(EN, FR, AR);