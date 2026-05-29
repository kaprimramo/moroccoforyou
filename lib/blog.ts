import { SITE_URL } from './i18n';

export type BlogTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type BlogCallout = {
  /** Short label, e.g. "Local insider tip", "Astuce locale", "نصيحة محلية". */
  label: string;
  body: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: BlogTable;
  callout?: BlogCallout;
};

export type BlogLang = 'en' | 'fr' | 'ar';

export type BlogPost = {
  slug: string;
  /** Content language. Defaults to 'en'. Drives BlogPostView UI chrome,
   * date formatting, and BlogPosting / FAQ inLanguage schema fields. */
  lang?: BlogLang;
  /** Optional override for <title>. Should be 55–60 chars. Falls back to title. */
  metaTitle?: string;
  /** Optional override for <meta description>. Should be 150–160 chars. */
  metaDescription?: string;
  title: string;
  description: string;
  keyword: string;
  coverImage: string;
  /** Alt text for the cover. Required for accessibility + SEO. */
  coverAlt?: string;
  publishedISO: string;
  updatedISO?: string;
  author: string;
  readingMinutes: number;
  intro: string;
  sections: BlogSection[];
  /** FAQ section — emits FAQPage JSON-LD. 5 questions recommended. */
  faqs: { question: string; answer: string }[];
  /** "People Also Ask" — emits additional QAPage entries; rendered separately. */
  peopleAlsoAsk?: { question: string; answer: string }[];
  relatedDestinations?: string[];
  relatedPosts?: string[];
  /** Sibling slugs in other languages — drives hreflang alternates. */
  alternates?: Partial<Record<BlogLang, string>>;
};

export function pex(id: number, w = 1600): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

/** Slugs that historically live under /blog/ (no locale prefix) for backward
 * compatibility with Google Search Console-indexed URLs. */
export const LEGACY_BLOG_SLUGS_AT_ROOT = new Set<string>([
  'guide-pour-louer-une-voiture-au-maroc-pour-la-premiere-fois',
]);

/** Build the public URL for a blog post within the site, given the canonical
 * SITE_URL = www.moroccoforyou.com. EN sits at /blog/, FR at /fr/blog/, AR at /ar/blog/.
 * Legacy slugs always resolve at /blog/{slug}/ regardless of language. */
export function blogPath(lang: BlogLang, slug: string): string {
  if (LEGACY_BLOG_SLUGS_AT_ROOT.has(slug)) return `/blog/${slug}/`;
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return `${prefix}/blog/${slug}/`;
}

/** Absolute URL for a blog post — always SITE_URL + blogPath(). Never call
 * `localizedUrl(lang, blogPath(...))` because that double-prefixes legacy slugs. */
export function blogUrl(lang: BlogLang, slug: string): string {
  return `${SITE_URL}${blogPath(lang, slug)}`;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'rent-a-car-marrakech-airport',
    title: 'Rent a Car at Marrakech Airport (RAK): 2026 Guide & Real Prices',
    description:
      'Complete 2026 guide to renting a car at Marrakech Menara Airport (RAK): real prices, the best companies, what documents you need, common pitfalls, and how to drive to the medina.',
    keyword: 'rent a car marrakech airport',
    coverImage: pex(30124130),
    publishedISO: '2026-04-12',
    updatedISO: '2026-05-20',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 9,
    intro:
      'Marrakech Menara Airport (RAK) is the busiest international gateway to southern Morocco — and the cheapest place in the country to pick up a rental car for a road trip into the Atlas, the Sahara, or down the Atlantic coast to Essaouira. This guide explains what to expect at the rental counters, real 2026 prices, the documents you need, and how to actually drive out of the airport and into the medina without losing your mind.',
    sections: [
      {
        heading: 'How much does it cost to rent a car at Marrakech Airport in 2026?',
        paragraphs: [
          'Economy cars (Dacia Sandero, Renault Clio, Hyundai i10) start at €18–€25 per day in low season (November–March) and €30–€45 per day in high season (Easter, summer, Christmas). A compact SUV suitable for the Atlas (Dacia Duster, Hyundai Tucson) runs €40–€70 per day. A 7-seater family car (Dacia Lodgy) starts at €45.',
          'Prices include unlimited mileage and basic insurance with a deposit hold of MAD 5,000–15,000 (€450–€1,400) on a credit card. "Zero-excess" full coverage adds €8–€15 per day. Booking 2 to 4 weeks ahead through a Marrakech-based agency typically beats walk-up prices by 30–50%.',
        ],
      },
      {
        heading: 'The rental companies at RAK',
        paragraphs: [
          'Big international brands (Hertz, Avis, Europcar, Sixt, Budget) have desks in the arrivals hall. Their advertised online rates are competitive but the in-airport price for one-way drop-offs, additional driver, and child seats is often higher than at city offices.',
          'Local Moroccan companies (Medloc, Sara Car, Top Cars, MoroccoForYou Cars) usually deliver to the airport on a meet-and-greet basis at a lower all-in price. They’re less famous online but are the default choice for travelers who book through a Moroccan agency. Service quality varies — ask for a recent review or use a curated booking partner.',
        ],
      },
      {
        heading: 'What documents do I need to rent a car in Marrakech?',
        paragraphs: [
          'You need three things: a valid passport, a driving licence held for at least 1 year, and an international or local credit card in the driver’s name for the deposit. An International Driving Permit (IDP) is technically required by Moroccan law but in practice EU, UK, US, Canadian and most Gulf licences are accepted without one. If your licence is in a non-Latin alphabet (Chinese, Russian, Arabic), bring an IDP.',
        ],
        list: [
          'Passport (originals, not copies)',
          'Driving licence — held for at least 1 year',
          'Credit card in driver’s name for deposit (debit cards rarely accepted)',
          'International Driving Permit (recommended, sometimes requested)',
          'Booking confirmation (printed or on your phone)',
        ],
      },
      {
        heading: 'Pickup and drop-off: how the airport actually works',
        paragraphs: [
          'After clearing customs, you exit into the arrivals hall. International desks (Hertz, Avis, Europcar) are immediately to the right. Local-agency drivers wait at the meeting point with signs bearing your name — look for the MoroccoForYou Cars sign at door 2.',
          'The car park is a 2-minute walk and accessible via a covered crosswalk. The agent walks the car with you, marks any existing scratches on a paper diagram (keep a copy), and you sign the contract. The whole process takes 20–30 minutes if everything is in order.',
          'Drop-off is the reverse. You return to the same car park, hand over keys, the agent checks fuel and condition, and you walk back into the terminal. Allow 30 minutes before your flight check-in.',
        ],
      },
      {
        heading: 'Driving from RAK airport to the Marrakech medina',
        paragraphs: [
          'The airport is 6 km southwest of the medina and the drive takes 15–25 minutes depending on traffic. Follow signs for "Centre Ville". The road is wide, well-marked and easy for the first 4 km. The last kilometre approaching the medina is where it gets tight — alleys narrow and motorbikes weave aggressively.',
          'Do not try to drive into the medina itself. Most riads are inside pedestrian-only zones; they’ll either send a porter to meet you at the nearest gate (Bab Doukkala, Bab Laksour, Bab Aghmat) or direct you to a guarded car park (€2–€4 per night). Tell your riad your arrival time so they can be there.',
        ],
      },
      {
        heading: 'Should I rent in Marrakech or in Casablanca?',
        paragraphs: [
          'Casablanca Airport (CMN) is cheaper for one-way trips ending in Casablanca and offers a wider fleet of automatic transmissions. Marrakech Airport (RAK) is the natural pickup if your itinerary stays south (Atlas, Sahara, Essaouira, Agadir). One-way Marrakech-to-Casablanca drop-offs add €40–€70 to the rental.',
          'If you’re landing in Marrakech and only doing day trips, you don’t need a car at all — taxis and private drivers are cheap enough. Rent a car only if you plan to do the Atlas circuit, drive to Essaouira, or run the Marrakech-to-Sahara loop yourself.',
        ],
      },
      {
        heading: 'Common pitfalls and how to avoid them',
        paragraphs: [
          'The classic trap is the "extra fee" surprise at pickup — airport surcharge, "tourist tax", forced full insurance. Insist on an all-inclusive written quote before you fly. Photograph every existing scratch and dent before driving off; the agency may try to charge for it on return. Check the spare tyre and the jack — Moroccan country roads have plenty of debris.',
          'Refuel at major-brand stations (Afriquia, Shell, Total) and keep receipts. Some smaller stations sell adulterated fuel. Return the car with the same fuel level as you received it, or pay a high per-litre top-up fee.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to rent a car at Marrakech Airport per day?',
        answer:
          'In 2026, economy cars start at €18–€25 per day in low season and €30–€45 in high season. A 4x4 suitable for the Atlas runs €40–€70 per day. Prices include unlimited mileage and basic insurance.',
      },
      {
        question: 'Can I rent a car at Marrakech Airport without a credit card?',
        answer:
          'Almost all agencies require a credit card in the driver’s name to authorize the security deposit (MAD 5,000–15,000). A few local agencies accept a cash deposit on prior arrangement.',
      },
      {
        question: 'Do I need an International Driving Permit in Morocco?',
        answer:
          'Technically yes, but in practice EU, UK, US, Canadian and Gulf state licences are accepted without one. Bring an IDP if your licence is in a non-Latin alphabet to avoid issues.',
      },
      {
        question: 'Is it safe to drive from Marrakech to the Sahara on my own?',
        answer:
          'Yes, the route via Aït Ben Haddou, the Dadès Valley and the Todra Gorges is paved and well-marked. Plan 3 days, drive only in daylight, and respect speed limits — there are radar traps.',
      },
      {
        question: 'Where do I drop off the car at Marrakech Airport?',
        answer:
          'In the same airport car park where you picked it up. An agent meets you, walks the car for damage, and verifies fuel level. Allow 30 minutes before flight check-in.',
      },
    ],
    relatedDestinations: ['marrakech', 'sahara-merzouga', 'atlas-imlil', 'essaouira'],
    relatedPosts: ['morocco-7-days-itinerary', 'morocco-road-trip-guide', 'casablanca-airport-car-rental'],
  },

  {
    slug: 'morocco-7-days-itinerary',
    title: 'Morocco in 7 Days: The Perfect Itinerary (2026 Edition)',
    description:
      'A field-tested 7-day Morocco itinerary covering Marrakech, the Sahara, Aït Ben Haddou and Fes — with real driving times, costs, and local tips you won’t find in guidebooks.',
    keyword: 'morocco 7 days itinerary',
    coverImage: pex(10551201),
    publishedISO: '2026-03-08',
    updatedISO: '2026-05-15',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 12,
    intro:
      'Seven days is the sweet spot for a first Morocco trip — long enough to combine an imperial city, the Sahara, and a contrasting second city, but short enough to keep travel time manageable. Below is the itinerary we recommend most often to first-time travelers: Marrakech-to-Fes via Aït Ben Haddou and Merzouga, with optional add-ons for travelers who have an extra day.',
    sections: [
      {
        heading: 'Day 1: Marrakech — arrive, decompress, sunset at Jemaa el-Fnaa',
        paragraphs: [
          'Fly into Marrakech Menara (RAK). Transfer to your riad in the medina (€10–€15 by taxi, free meet-and-greet if you’ve booked through an agency). Drop bags, shower, then a short walk to Jemaa el-Fnaa as the sun sets. Eat at one of the numbered food stalls (start with #14 or #31 for the cleanest setups) or at Nomad for a sit-down rooftop dinner.',
          'Don’t over-plan today. Jet lag plus the sensory overload of the medina is enough.',
        ],
      },
      {
        heading: 'Day 2: Marrakech medina — palaces, souks, hammam',
        paragraphs: [
          'Morning: Bahia Palace (open 9am, MAD 70), then Saadian Tombs and Ben Youssef Madrasa. Lunch on a rooftop near Place des Épices.',
          'Afternoon: Get lost on purpose in the souks. Start at Souk Semmarine for textiles, then Souk des Teinturiers for the dyer’s alley. Late afternoon: traditional hammam at Les Bains de Marrakech (€40 with scrub).',
          'Evening: rooftop drinks at La Mamounia or El Fenn, dinner at Le Jardin or Café des Épices.',
        ],
      },
      {
        heading: 'Day 3: Marrakech → Aït Ben Haddou → Ouarzazate',
        paragraphs: [
          'Today you cross the High Atlas via the Tizi-n-Tichka pass (2,260 m). Leave at 8am, take 4 hours including photo stops. Lunch at Aït Ben Haddou — choose a restaurant with a view of the ksar across the river.',
          'Walk into the ksar after lunch, climb to the top for the panorama, then drive 30 km to Ouarzazate. Sleep at a hotel overlooking the Atlas studios or, better, in nearby Skoura’s palm grove (Dar Ahlam or Les Jardins de Skoura).',
        ],
      },
      {
        heading: 'Day 4: Ouarzazate → Dadès Valley → Merzouga (Sahara)',
        paragraphs: [
          'A long but stunning driving day. Leave 8am via Skoura (1000 kasbahs road), the Dadès Valley (lunch stop), the Todra Gorges (1-hour walk between the cliffs), then push east to Merzouga, arriving 4-5pm.',
          'Check into your "front-of-house" hotel. Camel trek 60-90 minutes into the dunes to your desert camp at sunset. Berber dinner, drumming around the fire, and a sky of stars without light pollution.',
        ],
      },
      {
        heading: 'Day 5: Sahara sunrise → Fes',
        paragraphs: [
          'Sunrise from the top of a dune (5:30-6:30am depending on season), camels back to the hotel, breakfast, shower. Hit the road by 9am toward Fes via Erfoud, Midelt (lunch) and Ifrane (the "Switzerland of Morocco"). Arrive Fes 6-7pm. Long day at the wheel — share driving if you can.',
        ],
      },
      {
        heading: 'Day 6: Fes — the medina with a guide',
        paragraphs: [
          'Hire a licensed guide through your riad (€30 for half a day). Walk Fes el-Bali from Bab Boujloud: Madrasa Bou Inania, Al-Qarawiyyin, the Chouara tanneries (terrace view, accept the mint sprig), Nejjarine carpenters’ square, the spice and slipper souks. Plan 4 hours minimum.',
          'Afternoon: independent exploration or the Marinid Tombs at sunset for a panoramic view over the medina. Dinner at Restaurant Numéro 7 or The Ruined Garden.',
        ],
      },
      {
        heading: 'Day 7: Fes → Casablanca (fly home) or extend',
        paragraphs: [
          'Drive Fes → Casablanca in 3h30 on the toll motorway, or take the train (4h, MAD 130 in 2nd class). Fly home from CMN airport. If you have one extra day, add Chefchaouen between Day 4 and Day 5 (the "blue town" stop) — but you’ll then need to cut Ouarzazate or Aït Ben Haddou.',
        ],
      },
      {
        heading: 'How much does this itinerary cost?',
        paragraphs: [
          'Per person, double occupancy, in mid-range comfort (4-star riads, private driver, luxury desert camp, English-speaking guide in Fes): €1,150–€1,450 excluding flights. Two-star budget version with shared transport: from €550 / person. Luxury (5-star riads, Dar Ahlam, helicopter day in the Atlas): from €2,800 / person.',
          'A private driver with a comfortable car for the 7-day route costs €600–€900 total, split between travelers. Fuel and tolls add €120–€160.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 7 days enough for Morocco?',
        answer:
          'Yes — 7 days is the most common Morocco itinerary length and lets you combine one imperial city, the Sahara, and a second city. 10 days lets you add Chefchaouen or Essaouira; 5 days is too rushed if you also want the desert.',
      },
      {
        question: 'Should I rent a car or hire a driver for 7 days in Morocco?',
        answer:
          'For the Marrakech-Sahara-Fes route, hire a driver. The drive over the Atlas, through the gorges and on to the desert is more enjoyable when you can look out the window, and a driver-guide adds local context at every stop.',
      },
      {
        question: 'When is the best time of year for a 7-day Morocco trip?',
        answer:
          'March–May and September–November. The Sahara is too hot in July–August (40°C+) and the High Atlas can have snow in January–February.',
      },
      {
        question: 'Can I do this itinerary in the reverse direction?',
        answer:
          'Yes — Fes-to-Marrakech via Merzouga and Aït Ben Haddou is equally common. Choose based on your arrival airport: RAK is cheaper to fly into; CMN connects to Fes by train in 4 hours.',
      },
    ],
    relatedDestinations: ['marrakech', 'sahara-merzouga', 'ait-ben-haddou', 'fes', 'ouarzazate'],
    relatedPosts: ['morocco-road-trip-guide', 'merzouga-desert-tour', 'fes-medina-guide'],
  },

  {
    slug: 'chefchaouen-travel-guide',
    title: 'Chefchaouen Travel Guide: The Blue Pearl in 2 Days (2026)',
    description:
      'Everything you need for Chefchaouen, Morocco’s blue town: when to visit, where to stay, the best photo spots, day-trip to Akchour, and how to combine it with Fes or Tangier.',
    keyword: 'chefchaouen travel guide',
    coverImage: pex(9422948),
    publishedISO: '2026-02-22',
    updatedISO: '2026-05-10',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 8,
    intro:
      'Chefchaouen — the "blue town" of the Rif Mountains — is one of the most photographed places in Morocco for good reason. This 2-day travel guide covers when to go, where to stay inside the blue medina, the photo walks you can’t miss, and how to get there from Fes, Tangier and Casablanca.',
    sections: [
      {
        heading: 'When to visit Chefchaouen',
        paragraphs: [
          'April–June and September–October are ideal: 18–26°C, blue skies, fewer crowds than July–August. Winter (December–February) is cold (5–14°C) and occasionally snowy; summer (July–August) is comfortable in town (28–32°C, cooler than Marrakech) but Akchour waterfalls are at their peak in spring.',
          'Avoid Fridays and Saturdays if you’re sensitive to crowds — day-trippers from Tangier flood the medina from 11am to 5pm.',
        ],
      },
      {
        heading: 'How to get to Chefchaouen',
        paragraphs: [
          'There is no airport in Chefchaouen. The four common arrival routes are: from Tangier (2h30 drive, 200 km), Fes (4h, 200 km), Casablanca (5h30, 360 km) or Rabat (4h, 290 km). CTM bus runs the main routes daily; private car or shared grand taxi gets you there faster.',
          'A common northern Morocco loop is Tangier → Chefchaouen (1 night) → Fes (2 nights) → Tangier, total 4–5 days.',
        ],
      },
      {
        heading: 'Where to stay in Chefchaouen',
        paragraphs: [
          'Stay inside the medina at a small dar (3–8 rooms). The atmosphere is everything here — the moment you cross Bab el-Aïn into the blue alleys, you’re in another world.',
          'Recommended: Dar Echchaouen (rooftop pool, hotel-style service), Lina Ryad & Spa, Dar Antonio (literary feel), or budget-friendly Hostel Aline. All are 5–10 minutes from Plaza Uta el-Hammam.',
        ],
      },
      {
        heading: 'Top things to do in Chefchaouen',
        paragraphs: [
          'Day 1 morning: photo-walk the blue alleys before 10am, before the day-trippers arrive. Start at Plaza Uta el-Hammam, work your way uphill through the Rif neighbourhood to the Place el-Haouta. Best blue staircases: Rue Bin Souk and Calle Hassan I.',
        ],
        list: [
          'Plaza Uta el-Hammam and the 15th-century Kasbah Museum (entry MAD 60).',
          'Spanish Mosque viewpoint at sunset — 30-minute walk uphill, panoramic view.',
          'Ras El-Maa spring — locals do their laundry in the cool water; great photo spot.',
          'Akchour waterfalls day hike — 1h drive, 2–4h round-trip walk to the cascades and "God’s Bridge".',
          'Wool blanket and natural-dye textile shopping — Chefchaouen is one of Morocco’s best for textiles.',
        ],
      },
      {
        heading: 'Akchour: the must-do day hike',
        paragraphs: [
          'A 45-minute taxi or shared grand taxi (MAD 150–250 return) takes you to the parking area. From there, two trails: the easier 90-minute walk to the lower waterfalls, and the harder 2-hour walk to "God’s Bridge", a natural stone arch over a gorge. Both end at small café-restaurants on the river. Plan a full day, bring water, walking shoes are essential.',
        ],
      },
      {
        heading: 'Food and what to eat',
        paragraphs: [
          'Bissara soup (split-pea, served at breakfast with olive oil and cumin), goat cheese (the Rif is famous for it), kefta tagine with eggs, and fresh fruit juices. Standout restaurants: Sofia (rooftop dinner), Bab Ssour (best fish tagine), Cafetería Sofía (people-watching on the main square).',
          'Don’t expect haute cuisine — Chefchaouen does simple, hearty food well, and Morocco’s coastal seafood does not reach this far inland.',
        ],
      },
      {
        heading: 'Practical tips',
        paragraphs: [
          'Cash-first town: many shops don’t take cards. There is an ATM at Bab el-Aïn and the BMCE branch on Av. Hassan II — both work reliably.',
          'Respect residents’ doorways for photos — knock or ask before posing on someone’s blue staircase. A polite refusal of 10–20 MAD for a photo is fine; pushy children asking for money should be ignored.',
          'The Rif is Morocco’s main cannabis-growing region. Possession is illegal regardless of what "guides" tell you. Politely decline offers.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Chefchaouen worth visiting?',
        answer:
          'Yes — it’s the most visually distinctive small town in Morocco, with a relaxed pace, friendly locals and easy day-hikes nearby. Most travelers stay 1–2 nights as part of a northern Morocco loop.',
      },
      {
        question: 'How long do I need in Chefchaouen?',
        answer:
          'One day for the highlights (medina walk, Spanish Mosque viewpoint, dinner), two days if you want to add the Akchour waterfalls hike or a Sunday market day in the Rif countryside.',
      },
      {
        question: 'Is Chefchaouen really painted blue?',
        answer:
          'Yes — nearly every wall, stairway and door in the old medina is painted in shades of blue, and locals re-paint twice a year to keep the colour vivid.',
      },
      {
        question: 'Can I visit Chefchaouen as a day trip from Fes?',
        answer:
          'Technically yes (4h each way), but it’s rushed. Most travelers spend at least one night to experience the town after the day-trip crowds leave.',
      },
      {
        question: 'Is Chefchaouen safe for solo female travelers?',
        answer:
          'Yes, very. Chefchaouen is one of the safest and friendliest towns in Morocco. Dress modestly out of respect for the conservative Rif region — covered shoulders and knees.',
      },
    ],
    relatedDestinations: ['chefchaouen', 'fes', 'tangier'],
    relatedPosts: ['morocco-travel-tips', 'fes-medina-guide', 'morocco-7-days-itinerary'],
  },

  {
    slug: 'things-to-do-casablanca',
    title: '15 Things to Do in Casablanca: A 24-Hour Local Guide',
    description:
      'From the Hassan II Mosque to the Art Deco downtown, the Habous quarter and a sunset on the Corniche — the 15 best things to do in Casablanca, with prices and tips.',
    keyword: 'things to do casablanca',
    coverImage: pex(36467138),
    publishedISO: '2026-01-30',
    updatedISO: '2026-05-12',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 9,
    intro:
      'Casablanca isn’t the postcard Morocco you came for — but it has a magnetic Art Deco soul, the third-largest mosque on earth, and the country’s best restaurant scene. If you have 24 hours between flights, here are the 15 things to do that will make Casablanca worth your day, ranked by priority.',
    sections: [
      {
        heading: 'The Hassan II Mosque — the one thing you absolutely must do',
        paragraphs: [
          'The 210-metre minaret of the Hassan II Mosque rises over the Atlantic on a platform partly built into the sea. It’s the only mosque in Morocco open to non-Muslims, and the only way to see the interior is on a 1-hour guided tour (MAD 140, four times a day in English/French/Spanish/German). Book online or arrive 30 minutes early.',
          'The interior is staggering — hand-carved cedar ceilings, 53,000 m² of marble, a retractable roof. Sunset photography from the seafront esplanade is included free.',
        ],
      },
      {
        heading: 'Walk the Art Deco downtown',
        paragraphs: [
          'Casablanca has the largest concentration of Art Deco and Mauresque architecture in Africa, built during the French Protectorate (1912–1956). Start at Place Mohammed V (the cathedral square), walk Rue Mohammed Smiha for the best facades, then the central market (Marché Central) for lunch.',
          'Free walking tours run from Place des Nations Unies on weekends at 10am — check Casamémoire for schedules.',
        ],
      },
      {
        heading: 'Explore the Habous quarter',
        paragraphs: [
          'A 1920s "new medina" designed in the French style with arcaded shops, the quarter sells olives, mountains of dates, books, traditional clothing and the famous Pâtisserie Bennis Habous (Moroccan pastries since 1930). Quieter and easier than a chaotic medina; the Royal Palace gates are nearby.',
        ],
      },
      {
        heading: 'Sunset on the Corniche at Ain Diab',
        paragraphs: [
          'The Corniche is Casablanca’s seaside promenade, lined with beach clubs, restaurants and rooftop bars. Best spots for a sunset drink: Sky 28 (top of the Kenzi Tower for a city panorama), Rick’s Café (homage to the 1942 movie, expensive but atmospheric), or Le Cabestan (cliff-edge fine dining with Atlantic views).',
        ],
      },
      {
        heading: 'Eat your way through Casablanca',
        paragraphs: [
          'Casablanca has Morocco’s best restaurant scene. Notable: Le Cabestan (seafood + view), La Sqala (traditional Moroccan in a fortress), Restaurant Riad Zamane (couscous done right), Paul (best brunch), and Pâtisserie Amour (best chocolate éclair in Africa, no exaggeration). Reserve ahead for dinner.',
        ],
      },
      {
        heading: 'Museums and culture',
        paragraphs: [
          'The Villa des Arts hosts rotating contemporary exhibitions in a beautifully restored 1934 villa. The Moroccan Jewish Heritage Museum (the only Jewish museum in the Arab world) tells the 2,000-year story of Morocco’s Jewish community. Both small, both worth an hour.',
        ],
      },
      {
        heading: 'The 15 must-do list',
        paragraphs: [
          'For a 1-day visit, focus on these 15 things in order of priority:',
        ],
        list: [
          '1. Hassan II Mosque guided interior tour',
          '2. Walk the Art Deco downtown (Place Mohammed V → Marché Central)',
          '3. Habous quarter and Pâtisserie Bennis',
          '4. Sunset cocktail on the Corniche',
          '5. Dinner at Le Cabestan or La Sqala',
          '6. Villa des Arts gallery visit',
          '7. Morocco Mall (largest in Africa) for shopping',
          '8. Friday couscous lunch at a traditional restaurant',
          '9. Mosque esplanade walk at golden hour',
          '10. Petit-déjeuner at Paul or Café Maure',
          '11. Beach club afternoon at Tahiti Beach Club (Ain Diab)',
          '12. Cathedral of the Sacred Heart (Église du Sacré-Cœur, abandoned and atmospheric)',
          '13. Casablanca Twin Center observation deck',
          '14. Moroccan Jewish Heritage Museum',
          '15. Rooftop drinks at Sky 28 to close the night',
        ],
      },
      {
        heading: 'Getting around Casablanca',
        paragraphs: [
          'Casablanca has a modern tram network (MAD 6 per ride) and abundant red petit-taxis (MAD 20 minimum, always insist on the meter — "compteur s’il vous plaît"). Driving in the city is stressful and parking is hard; don’t bother with a rental for the day. From the airport (CMN), the ONCF train (MAD 43, every 30 min) drops you at Casa-Voyageurs in 35 minutes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Casablanca worth visiting?',
        answer:
          'For 24 hours, yes — primarily for the Hassan II Mosque, the Art Deco architecture, and the food scene. Most travelers use Casablanca as a 1-day stop before heading to Marrakech, Fes or Rabat.',
      },
      {
        question: 'How long do I need in Casablanca?',
        answer:
          'One full day is enough to cover the highlights: morning mosque tour, Art Deco walking tour, Habous quarter in the afternoon, Corniche sunset and dinner.',
      },
      {
        question: 'Is Casablanca like the movie?',
        answer:
          'Not really — the 1942 film was shot on a Hollywood backlot. The city today is Morocco’s economic capital, much larger and more modern than the film depicts. Rick’s Café (opened 2004) is a deliberate tribute.',
      },
      {
        question: 'Is the Hassan II Mosque open to non-Muslims?',
        answer:
          'Yes — it’s the only mosque in Morocco open to non-Muslims, on a 1-hour guided tour. Tickets MAD 140; four tours daily.',
      },
      {
        question: 'How do I get from Casablanca Airport to the city centre?',
        answer:
          'The ONCF airport train runs every 30 minutes to Casa-Voyageurs station for MAD 43 (€4) in 35 minutes. A petit-taxi costs MAD 250–300 at the fixed evening rate.',
      },
    ],
    relatedDestinations: ['casablanca', 'rabat', 'marrakech'],
    relatedPosts: ['casablanca-airport-car-rental', 'morocco-travel-tips', 'morocco-7-days-itinerary'],
  },

  {
    slug: 'merzouga-desert-tour',
    title: 'Merzouga Desert Tour from Marrakech: The Honest Guide (2026)',
    description:
      'A no-fluff guide to the Merzouga (Erg Chebbi) desert tour: 2 vs 3 day options, what a luxury camp really looks like, real 2026 prices, and how to avoid the tourist traps.',
    keyword: 'merzouga desert tour',
    coverImage: pex(4694737),
    publishedISO: '2026-03-19',
    updatedISO: '2026-05-18',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 11,
    intro:
      'Sleeping in the Sahara is the single most-asked-for experience in Moroccan tourism — and the Erg Chebbi dunes at Merzouga deliver it better than anywhere else in the country. But the tour scene has two very different worlds: the €120 group bus and the €600+ private 4x4 trip. This guide explains what you actually get for your money, what a "luxury camp" really looks like in 2026, and how to plan a desert tour without regret.',
    sections: [
      {
        heading: 'The route: 9-10 hours from Marrakech, so plan 3 days',
        paragraphs: [
          'Merzouga is 560 km from Marrakech — about 9-10 hours of driving on paved but slow mountain roads. No one does it in a day. The standard tour is 3 days, 2 nights, with stops along the way.',
          'Day 1: Marrakech → Tizi-n-Tichka pass → Aït Ben Haddou (UNESCO ksar) → Ouarzazate (lunch) → Skoura palm grove → Dadès Valley (overnight in a hotel).',
          'Day 2: Dadès → Todra Gorges (1-hour walk) → Erfoud → Merzouga (3pm) → camel trek into the dunes (4-5pm) → desert camp overnight.',
          'Day 3: Sunrise on the dunes → breakfast at the hotel → drive back to Marrakech (or onward to Fes — slightly easier and shorter).',
        ],
      },
      {
        heading: '2-day desert tour: don’t do it unless you have to',
        paragraphs: [
          'The 2-day option exists (long day to Merzouga, overnight in dunes, long day back) but it’s exhausting and you miss the best landscapes — the Aït Ben Haddou stop is rushed, the gorges are skipped, and you spend 18+ hours of 2 days in a vehicle. Only consider it if you cannot do 3 days.',
        ],
      },
      {
        heading: 'Group bus vs private 4x4: the real difference',
        paragraphs: [
          'The €120–€180 group "Marrakech to Sahara" bus runs daily in tourist season. You share a minibus with 12-16 strangers, stop at the same souvenir shops as 50 other buses, and sleep in a basic camp (small tents, shared squat toilets, lukewarm dinner). It’s an OK budget option if you’re flexible and young.',
          'The €350–€800 per-person private 4x4 trip gets you a flexible driver-guide, a comfortable SUV with AC, your choice of luxury camp (private bathroom, plush bed, multi-course dinner), and the freedom to add stops (e.g. a Berber lunch in a family home). For a 30+ traveler or a couple, this is what we recommend.',
        ],
      },
      {
        heading: 'What a luxury Sahara camp actually looks like in 2026',
        paragraphs: [
          'A modern luxury camp is a permanent installation of 8–20 large canvas tents in a hollow between the dunes. Each tent has a king-size or twin bed (real bed, not a mat), an en-suite bathroom with rainfall shower and flush toilet, Persian rugs, brass lanterns, and a small private deck. Solar power runs lights and USB charging; generators are off after 11pm. Wi-Fi is now common in the main lounge tent.',
          'Examples: Erg Chebbi Luxury Desert Camp, Sahara Stars Camp, Madu Luxury Desert Camp. Prices €120–€220 per person, full board (camel ride + dinner + bed + breakfast). Basic camps without ensuite bathrooms are €40–€70.',
        ],
      },
      {
        heading: 'The camel ride: what to expect',
        paragraphs: [
          'You leave the kasbah-hotel at the dune’s edge around 4pm. Camels are loaded by a Berber guide (cheche turban included), and you ride 60–90 minutes deep into the dunes to your camp. The pace is slow and oddly comforting; the dunes get bigger and the sky bigger still. Sunset from a high dune at camp is the photo.',
          'In the morning, the camels return you the same way at sunrise. Sore inner thighs are guaranteed. Wear long trousers.',
        ],
      },
      {
        heading: 'When to go: avoid summer',
        paragraphs: [
          'October–April is the season. The desert is comfortable (15–28°C by day, 5–15°C at night) and the camps are full. November–February nights are cold — sleep with the wool blanket.',
          'May is the last comfortable month; June–September are brutal (38–45°C by day) and camp operators close or run skeleton crews. Don’t plan a desert tour in midsummer.',
        ],
      },
      {
        heading: 'What to pack for the desert',
        paragraphs: [
          'A small overnight bag (the rest of your luggage stays in the driver’s car), a fleece + light down jacket even in summer, a head torch, sunscreen and lip balm, a buff or scarf for the camel ride, sunglasses, refillable water bottle, and a paperback book — there’s no light pollution and no Netflix.',
        ],
      },
      {
        heading: 'Real 2026 prices, all-inclusive per person',
        paragraphs: [
          'Budget group bus (3 days, basic camp): €120–€180.',
          'Mid-range private trip (3 days, comfortable hotel + good camp): €300–€450.',
          'Luxury private (3 days, premium kasbahs + luxury camp): €600–€950.',
          'Add €80–€120 per person for the one-way Marrakech → Sahara → Fes ending in Fes (saves you the return drive).',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long is the Merzouga desert tour from Marrakech?',
        answer:
          'The standard tour is 3 days and 2 nights. A 2-day version exists but is exhausting and skips most of the scenic stops. A 4-day version with extra time in the desert is the most relaxed option.',
      },
      {
        question: 'How much does a Merzouga desert tour cost in 2026?',
        answer:
          'Budget group tours start at €120–€180 per person. A private 3-day tour with a comfortable car, driver and luxury camp costs €300–€700 per person depending on accommodation choices.',
      },
      {
        question: 'Is sleeping in the Sahara desert safe?',
        answer:
          'Yes — established camps have full-time staff, mobile-phone signal nearby, and a 4x4 on standby. The most common issues are sand in your shoes and cold nights, not safety.',
      },
      {
        question: 'Can I do Merzouga without going through Marrakech?',
        answer:
          'Yes — you can fly to Fes and do Fes → Merzouga → Marrakech (or the reverse). The Fes route is slightly shorter (8 hours direct) and avoids the Tichka pass.',
      },
      {
        question: 'Is the camel ride hard?',
        answer:
          'No — it’s slow and stable. Most people manage easily; pregnant travelers and those with back issues can take a 4x4 directly to camp instead.',
      },
    ],
    relatedDestinations: ['sahara-merzouga', 'ait-ben-haddou', 'ouarzazate', 'marrakech'],
    relatedPosts: ['morocco-7-days-itinerary', 'morocco-road-trip-guide', 'rent-a-car-marrakech-airport'],
  },

  {
    slug: 'fes-medina-guide',
    title: 'Fes Medina Guide: Navigate the World’s Largest Car-Free City',
    description:
      'A practical Fes medina guide: how to walk Fes el-Bali without getting lost, the must-see madrasas, the tanneries demystified, and where to eat and sleep inside the walls.',
    keyword: 'fes medina guide',
    coverImage: pex(5472532),
    publishedISO: '2026-02-05',
    updatedISO: '2026-05-08',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 10,
    intro:
      'Fes el-Bali, the old walled medina of Fes, has around 9,500 alleys and zero cars — making it one of the largest car-free urban areas on earth, and the most intense walking experience in Morocco. This guide explains how to navigate it, what to prioritize, how the tanneries actually work, and the etiquette that will get you better prices and warmer welcomes.',
    sections: [
      {
        heading: 'Should I hire a guide in Fes?',
        paragraphs: [
          'For your first half-day, yes. A licensed Fes guide (gold badge from the Ministry of Tourism) costs €25–€35 for half a day and is the only way you’ll find the major monuments efficiently. Without one, expect to spend 2 hours just locating Al-Qarawiyyin.',
          'After the half-day with a guide, you’ll have your bearings and can explore solo for a second day. Book through your riad — they vet quality and you won’t get a touts-and-tanneries circuit.',
        ],
      },
      {
        heading: 'The two medinas: Fes el-Bali vs Fes el-Jdid',
        paragraphs: [
          'Fes el-Bali ("old Fes") is the 9th-century walled medina with the souks, madrasas, and the Al-Qarawiyyin. This is where you spend 90% of your time.',
          'Fes el-Jdid ("new Fes") is a 13th-century Merinid extension with the Royal Palace, the Mellah (Jewish quarter), and the Bab Boujloud area. It’s flatter, easier to navigate, and a logical second-day visit.',
        ],
      },
      {
        heading: 'The classic medina trail',
        paragraphs: [
          'Start at Bab Boujloud (the iconic blue gate). The main downhill artery is Talaa Kebira; the parallel Talaa Sghira runs to its south. Follow Talaa Kebira and you’ll pass:',
        ],
        list: [
          'Madrasa Bou Inania — the most ornate of Fes’s madrasas, MAD 20 entry',
          'Nejjarine carpenters’ square + the small Wood Museum (Foundouk Nejjarine)',
          'Souk el-Attarine — spice souk, then the perfumers',
          'Al-Qarawiyyin University & Mosque — non-Muslims can only peek through the doors',
          'Madrasa al-Attarine — the most intricate zellij tilework in Morocco',
          'Chouara tanneries — viewed from the terrace of a leather shop',
        ],
      },
      {
        heading: 'The Chouara tanneries: what really happens up there',
        paragraphs: [
          'The Chouara tanneries are the postcard image of Fes — circular stone vats filled with bright pigments and white pigeon-droppings-and-lime mix used to soften the leather. They’ve been operating since at least the 14th century.',
          'Access is via leather shop terraces (mostly free if you’re polite, MAD 20 if there’s pressure). Accept the offered mint sprig — the ammonia smell is fierce. Don’t feel pressured to buy a jacket; a polite "shokran, I am only looking" with a small tip on the way out (MAD 10–20) is perfectly acceptable.',
        ],
      },
      {
        heading: 'Where to stay inside the medina',
        paragraphs: [
          'Stay in a riad — a traditional courtyard house converted to a small hotel. The atmosphere is incomparable: tiled fountains, cedarwood balconies, rooftop terraces. The trade-off is that most riads are in narrow alleys that mules and porters can reach but cars cannot. Your riad arranges a porter to meet you at the nearest gate.',
          'Recommended: Riad Fes (luxury, member of Relais & Châteaux), Palais Amani (boutique, garden courtyard), Dar Roumana (small, intimate, French chef), Dar Bensouda (mid-range, central). All within 5 minutes of the major sights.',
        ],
      },
      {
        heading: 'Eating in the Fes medina',
        paragraphs: [
          'Fes is the home of Moroccan haute cuisine: pastilla (sweet-savoury pigeon or chicken pie), méchoui (slow-roasted lamb), and the freshest mint tea you’ll have anywhere. Standout restaurants: Restaurant Numéro 7 (modern Moroccan), The Ruined Garden (English-run, beautiful courtyard), Dar Hatim (family-style traditional), Café Clock (camel burger + cultural events).',
          'Eat where Moroccans eat for lunch — small "Snack" stalls near Bab Boujloud serve harira soup and grilled kebabs for MAD 30–50.',
        ],
      },
      {
        heading: 'Etiquette and survival tips',
        paragraphs: [
          'Wear closed shoes — the alleys are uneven, occasionally damp, and shared with overloaded mules. Don’t flatten yourself against a wall when a mule comes; step into the nearest doorway. Photography of people requires permission. Friday afternoon many shops close for prayer — schedule tannery and souk visits earlier.',
          'GPS doesn’t work reliably inside Fes el-Bali — too many narrow alleys block satellites. Memorize a few key gates (Bab Boujloud, Bab Rcif, Bab Guissa) and you can always navigate back to a main road.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How big is the Fes medina?',
        answer:
          'Fes el-Bali covers about 280 hectares with approximately 9,500 alleys — one of the largest car-free urban areas in the world. It’s a UNESCO World Heritage site.',
      },
      {
        question: 'Is it safe to walk the Fes medina alone?',
        answer:
          'Yes — Fes is safe for tourists. You may get hassled by self-appointed "guides" or shop touts; a polite firm "la, shokran" (no, thank you) and continued walking works. Avoid the medina alleys after 10pm when shops close.',
      },
      {
        question: 'How long do I need in Fes?',
        answer:
          'Two full days minimum: one with a guide for the major sights, one solo for the souks, viewpoints and a half-day to Volubilis or Meknes.',
      },
      {
        question: 'Can I see the tanneries for free?',
        answer:
          'Yes — the terrace view from leather shops is mostly free, though shop owners hope you’ll buy something. Tipping the host MAD 10–20 on the way out is appreciated and good karma.',
      },
      {
        question: 'Is the Fes medina suitable for kids?',
        answer:
          'It can be — but expect a workout. Strollers are useless on the alleys; a baby carrier works. Best for kids aged 6+ who can walk 3–4 hours with breaks.',
      },
    ],
    relatedDestinations: ['fes', 'chefchaouen', 'marrakech'],
    relatedPosts: ['chefchaouen-travel-guide', 'morocco-7-days-itinerary', 'morocco-travel-tips'],
  },

  {
    slug: 'morocco-road-trip-guide',
    title: 'Morocco Road Trip Guide: Routes, Driving Rules & 2026 Costs',
    description:
      'Everything you need for a Morocco road trip: the 4 classic routes, real driving times, fuel and toll costs, what to expect on the road, and how to rent the right car.',
    keyword: 'morocco road trip guide',
    coverImage: pex(33662300),
    publishedISO: '2026-03-26',
    updatedISO: '2026-05-22',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 11,
    intro:
      'Morocco is one of the world’s great road-trip countries — paved roads, good signage, dramatic scenery and short driving times between iconic stops. This guide covers the four classic routes, real driving times in 2026, fuel and toll costs, the driving rules that catch foreigners out, and how to choose the right rental car.',
    sections: [
      {
        heading: 'Should I road-trip Morocco or hire a driver?',
        paragraphs: [
          'Both are valid. A driver-guide costs €70–€110 per day (€500–€800 for a week), splits across travelers, and means you can actually look out the window on the long Atlas drives. A rental car costs €25–€60 per day plus fuel, but gives total flexibility.',
          'For first-time travelers doing the Marrakech-to-Sahara loop with a stop in Aït Ben Haddou, we recommend a driver. For travelers with time, returning Morocco visitors, or those doing the Atlantic coast (Casablanca-Rabat-Tangier or Agadir-Essaouira-Marrakech), a rental car is great.',
        ],
      },
      {
        heading: 'The 4 classic Morocco road trip routes',
        paragraphs: [
          'Route 1: The Imperial Cities (4–6 days). Casablanca → Rabat → Fes → Meknes/Volubilis → back to Casablanca. Mostly motorway, easy driving, perfect first road trip.',
        ],
        list: [
          'Route 2: Marrakech → Sahara → Fes (7-10 days). Tichka pass, Aït Ben Haddou, Dadès Valley, Merzouga camp, return via Midelt. The classic.',
          'Route 3: The Atlantic Coast (5-7 days). Casablanca → Rabat → Tangier → Asilah → Essaouira → Agadir. Beaches, fishing ports, fresh seafood.',
          'Route 4: Northern loop (4-5 days). Tangier → Chefchaouen → Fes → Meknes/Volubilis → back. The "blue town" + medieval Fes in one trip.',
        ],
      },
      {
        heading: 'Driving times and distances (real, not optimistic)',
        paragraphs: [
          'Distances look short but speeds are moderate. The legal national-road limit is 100 km/h; motorways are 120 km/h. Realistic average speeds: 80 km/h on motorways, 60 km/h on national roads, 40 km/h in the mountains.',
        ],
        list: [
          'Marrakech → Aït Ben Haddou: 200 km / 4 hours over Tichka pass',
          'Aït Ben Haddou → Merzouga: 360 km / 7 hours via Dadès & Todra',
          'Merzouga → Fes: 470 km / 8 hours via Midelt',
          'Fes → Chefchaouen: 200 km / 4 hours',
          'Chefchaouen → Tangier: 110 km / 2.5 hours',
          'Tangier → Casablanca: 340 km / 3.5 hours on motorway',
          'Casablanca → Marrakech: 240 km / 2.5 hours on motorway',
          'Marrakech → Essaouira: 190 km / 2.5 hours',
        ],
      },
      {
        heading: 'Fuel, tolls and motorway costs',
        paragraphs: [
          'Petrol (essence) costs around MAD 14–16 per litre (€1.30–€1.50). Diesel (gasoil) is MAD 13–15 per litre. A 1,500-km Morocco road trip in an economy car burns about €120–€160 of fuel.',
          'Motorway tolls (Autoroute du Maroc) are paid in cash or by app at toll plazas. Examples: Casablanca → Marrakech MAD 78 (€7.30), Casa → Tangier MAD 153 (€14), Casa → Fes MAD 88 (€8.20). Keep small bills.',
        ],
      },
      {
        heading: 'Driving rules and police checks',
        paragraphs: [
          'Drive on the right. Seatbelts mandatory. Phone use while driving is illegal and enforced. Speed cameras (fixed and mobile) on all major roads — €15–€60 fines on the spot. Police checkpoints at city entrances are routine; have your passport, licence and rental contract ready and you’ll pass in 30 seconds.',
          'Alcohol limit is 0.0 — do not drive after drinking. Mules, sheep flocks and pedestrians are normal on rural roads; reduce speed in villages.',
        ],
      },
      {
        heading: 'What car should I rent?',
        paragraphs: [
          'For the Atlantic coast and imperial cities: an economy car (Dacia Sandero, Renault Clio) is perfect, MAD 250–400 per day (€23–€37).',
          'For the Sahara loop, the Atlas, or any unpaved-road exploration: a compact SUV (Dacia Duster, Hyundai Tucson) at MAD 400–700 per day (€37–€65). Diesel preferred for the long-distance legs.',
          'For 4+ travelers with luggage: a 7-seater (Dacia Lodgy, Volkswagen Caddy) at MAD 450 per day.',
        ],
      },
      {
        heading: 'Where to sleep when road-tripping',
        paragraphs: [
          'Mix riads in cities (Marrakech, Fes, Chefchaouen, Essaouira) with kasbah-hotels or guesthouses in rural areas. Book ahead 2–4 weeks in spring/autumn high season; same-day booking works in low season. Booking.com is widely accepted; many small kasbah owners prefer WhatsApp.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Morocco safe to road-trip?',
        answer:
          'Yes — Morocco has good roads, low crime against drivers, and friendly police. The main risks are aggressive overtaking on rural roads, mules/sheep at dusk, and pickpockets if you leave bags visible in a parked car.',
      },
      {
        question: 'Do I need a 4x4 in Morocco?',
        answer:
          'No — most classic routes (imperial cities, Atlantic coast, Marrakech → Sahara on the paved road) are fine in an economy car. A 4x4 is useful only for off-road exploration into the deep Atlas or to remote kasbahs.',
      },
      {
        question: 'Can I take my Morocco rental car to Spain or Mauritania?',
        answer:
          'No. Moroccan rental contracts forbid crossing the border. You must return the car in Morocco.',
      },
      {
        question: 'Is petrol expensive in Morocco?',
        answer:
          'Petrol in 2026 is MAD 14–16 per litre (€1.30–€1.50), cheaper than Western Europe. Budget €120–€160 of fuel for a typical 1,500-km Morocco road trip.',
      },
      {
        question: 'Are the roads paved in Morocco?',
        answer:
          'Yes — all roads on a standard tourist route are paved, including the High Atlas crossings, the Dadès/Todra gorges and the road to Merzouga. The last 5–10 km to some desert camps are unpaved sand tracks (4x4 or camel only).',
      },
    ],
    relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'essaouira', 'agadir'],
    relatedPosts: ['rent-a-car-marrakech-airport', 'casablanca-airport-car-rental', 'morocco-7-days-itinerary'],
  },

  {
    slug: 'best-riads-marrakech',
    title: 'The 12 Best Riads in Marrakech for 2026 (Budget to Luxury)',
    description:
      'Hand-picked riads in Marrakech across every budget — from €40 maisons d’hôtes inside the medina to legendary palace riads. Real reviews, real prices, real photos.',
    keyword: 'best riads marrakech',
    coverImage: pex(17649841),
    publishedISO: '2026-04-02',
    updatedISO: '2026-05-19',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 9,
    intro:
      'A riad — a traditional courtyard house with an open central patio — is the only way to truly experience the Marrakech medina. Step through an unassuming wooden door and you’re in another world: tiled fountains, cedarwood balconies, a roof terrace overlooking the Atlas. Here are the 12 best riads in Marrakech for 2026, from €40 nights to €700 nights, all personally vetted.',
    sections: [
      {
        heading: 'How to pick the right riad in Marrakech',
        paragraphs: [
          'Three things matter: location, the courtyard, and the staff. Location should be within 500 m of a medina gate (Bab Doukkala, Bab Laksour, Bab Aghmat) so taxis can drop you close — drag-your-luggage walks through the alleys at midnight are not romantic. A central garden courtyard with an orange tree or fountain is the soul of a riad. And the manager/host makes or breaks the stay: ask "Will I be met at the gate by a porter?" if you have luggage.',
        ],
      },
      {
        heading: 'Luxury riads (€250+ per night)',
        paragraphs: [
          'Royal Mansour — the King of Morocco’s own hotel, with private 3-storey riads, 24/7 butler, two-Michelin-starred restaurant. From €1,000/night and worth every dirham if you can.',
          'La Mamounia — not strictly a riad but a 1923 palace-garden hotel; if "Marrakech glamour" is the brief, this is it. Spa is the best in Morocco.',
          'El Fenn — co-owned by Vanessa Branson, 9 connecting houses, art-filled, gorgeous rooftop terraces with infinity pool. From €450.',
          'Riad Yasmine — Instagram-famous green tile pool, intimate (7 rooms), boutique experience. From €280.',
        ],
      },
      {
        heading: 'Mid-range riads (€80–€200 per night)',
        paragraphs: [
          'Riad Be Marrakech — modern boutique design with a small pool, central medina, English-speaking staff. From €120.',
          'Riad Idra — minimalist Scandinavian-meets-Moroccan, quiet courtyard, walking distance to Jemaa el-Fnaa. From €110.',
          'Dar Kawa — German-Moroccan owners, art-filled, beautiful rooftop. From €130.',
          'Riad Jardin Secret — historic riad with a hammam, located near the Secret Garden. From €95.',
        ],
      },
      {
        heading: 'Budget and mid-budget riads (€40–€80 per night)',
        paragraphs: [
          'Riad Star — owned by author Pamela Windo, themed around Josephine Baker who lived here. From €70.',
          'Equity Point Hostel Marrakech — hostel inside a riad, dorm beds from €15, private rooms from €45. Best budget option.',
          'Riad Anjar — friendly family-run, small but lovely, walking distance to all the main sights. From €60.',
          'Dar Anika — boutique-budget hybrid with a stunning rooftop and just 4 rooms. From €75.',
        ],
      },
      {
        heading: 'What every Marrakech riad should include',
        paragraphs: [
          'Free Moroccan breakfast (msemen, beghrir, honey, eggs, mint tea), Wi-Fi throughout, airport/gate transfer (most riads include free pickup), rooftop terrace access, a dinner on request (€25–€40 per person for a 3-course Moroccan menu), and a porter to meet you at the medina gate.',
          'Extras that distinguish the best: an on-site hammam, a small pool (rare but possible), a cocktail bar (alcohol licences are uncommon — only some riads have them).',
        ],
      },
      {
        heading: 'How to book',
        paragraphs: [
          'Booking.com lists most riads with real reviews. For the luxury tier, book direct via the riad’s website to get welcome amenities (rose-petal bath, in-room massage credit). For groups of 4+, contact via WhatsApp — riads often have whole-house rentals at 15-20% off the per-room rate.',
        ],
      },
      {
        heading: 'Riad red flags',
        paragraphs: [
          'Be wary of: riads that describe themselves as "5 minutes from Jemaa el-Fnaa" but are actually a 15-minute alley walk; riads with no recent reviews; "boutique hotels" outside the medina (you lose all atmosphere); listings without a courtyard photo. Always insist on seeing the actual room photo, not just "lifestyle" shots.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a riad in Marrakech?',
        answer:
          'A riad is a traditional Moroccan house with a central courtyard or garden, typically with 4–12 rooms. Most riads in Marrakech have been converted into small boutique hotels. The courtyard, rooftop terrace, and small intimate scale are what make them special.',
      },
      {
        question: 'Is it better to stay in a riad or hotel in Marrakech?',
        answer:
          'For most travelers, a riad inside the medina is the better choice — more authentic, more atmospheric, walking distance to the souks. Modern hotels in Gueliz or Hivernage suit travelers who want pools, gyms and bar scenes.',
      },
      {
        question: 'How much does a riad in Marrakech cost?',
        answer:
          'In 2026, comfortable mid-range riads cost €60–€150 per night including breakfast. Budget riads start at €40; luxury riads go from €200 to €1,000+ per night.',
      },
      {
        question: 'Do riads in Marrakech serve dinner?',
        answer:
          'Yes — most riads will prepare a 3-course Moroccan dinner on request for €25–€40 per person, served in the courtyard or on the roof. Order before noon on the day.',
      },
      {
        question: 'Will taxis drop me directly at my riad?',
        answer:
          'No — most riads are inside pedestrian-only medina alleys. Taxis drop you at the nearest gate; your riad sends a porter (with a wheeled trolley) to meet you. Tell your riad your arrival time.',
      },
    ],
    relatedDestinations: ['marrakech', 'fes', 'essaouira'],
    relatedPosts: ['morocco-7-days-itinerary', 'morocco-travel-tips', 'rent-a-car-marrakech-airport'],
  },

  {
    slug: 'morocco-travel-tips',
    title: '25 Morocco Travel Tips Locals Wish You Knew (2026)',
    description:
      'Cut the tourist mistakes: 25 Morocco travel tips from local guides — money, dress code, scams, tipping, food, Ramadan, mint tea etiquette and more.',
    keyword: 'morocco travel tips',
    coverImage: pex(30355061),
    publishedISO: '2026-01-15',
    updatedISO: '2026-05-05',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 10,
    intro:
      'Morocco is famously friendly to travelers, but a few small mistakes — wearing shorts in a medina, ignoring the mint tea ritual, accepting an "offered" tour from a stranger — can sour an otherwise great trip. Here are 25 Morocco travel tips that locals (taxi drivers, guides, riad owners) wish every visitor knew.',
    sections: [
      {
        heading: 'Money and payments',
        paragraphs: [
          '1. The Moroccan dirham (MAD) is a closed currency — you can’t buy it abroad. Withdraw from ATMs at the airport on arrival; rates are competitive.',
          '2. Bring small bills (MAD 20, 50, 100). Petit-taxis and souk vendors rarely have change for MAD 200 notes.',
          '3. Many small shops, riads in rural areas, and food stalls are cash-only. Carry MAD 500–1,000 in cash even if you mostly pay by card.',
          '4. ATM withdrawal fees are typically MAD 30 (€2.80) per transaction. Maximum per withdrawal is usually MAD 2,000 (€185).',
          '5. Don’t exchange money on the street — always use a bank or official "Cambio" booth.',
        ],
      },
      {
        heading: 'Dress code and respect',
        paragraphs: [
          '6. Cover shoulders and knees in medinas, mosques and rural villages. Loose linen trousers and a light long-sleeve shirt are perfect.',
          '7. Bikinis are fine at hotel pools and beach clubs but not on public city beaches. Agadir’s tourist beach is mixed; Tangier and Casablanca beaches are conservative.',
          '8. Hammam etiquette: most public hammams are gender-segregated and you should wear underwear (men) or a swimsuit bottom (women). A private hammam at a riad is mixed and you wear a towel.',
          '9. Don’t enter mosques unless you are Muslim — the Hassan II Mosque in Casablanca is the only exception, and only on guided tours.',
        ],
      },
      {
        heading: 'The "free" tour and other scams',
        paragraphs: [
          '10. Anyone offering "free help" in the medina (especially Fes and Marrakech) will lead you to a relative’s shop and expect a tip. A polite firm "la, shokran" and continued walking works.',
          '11. The "the tannery is closed today" or "the square is moved today" lines are setups to steer you elsewhere. Trust Google Maps, not strangers.',
          '12. Henna painters in Jemaa el-Fnaa will grab your hand and start painting; agree on a price upfront or politely say no before they touch you.',
          '13. Don’t take photos of people without permission — especially women, and especially in rural areas. Asking "Hello, may I?" goes a long way.',
        ],
      },
      {
        heading: 'Food, water and the mint tea ritual',
        paragraphs: [
          '14. Tap water is safe to drink in Casablanca, Rabat and modern hotels, but most travelers stick to bottled. €0.30 for a 1.5L bottle.',
          '15. Try the local specialty in each city: pastilla in Fes, tangia in Marrakech, fresh sardines in Essaouira, oysters in Dakhla, harira soup anywhere.',
          '16. Mint tea is offered everywhere — from the carpet seller to the hotel manager. Accept it; refusal can be slightly rude. You don’t have to buy anything afterwards.',
          '17. Friday lunch is couscous day for most Moroccan families. Restaurants serve their best couscous on Fridays.',
          '18. Ramadan: restaurants outside tourist areas may be closed in daytime. Touristic restaurants stay open. Be discreet about eating in the street during Ramadan.',
        ],
      },
      {
        heading: 'Tipping (how much, when, where)',
        paragraphs: [
          '19. Restaurants: 5–10% if not already on the bill. Cafes: round up to the nearest MAD 5–10.',
          '20. Petit-taxi: round up the metered fare (MAD 25 → 30).',
          '21. Hotel porter: MAD 10–20 per bag. Housekeeping: MAD 20–30 per day.',
          '22. Licensed guide: 10% of the day rate (typically MAD 30–50). Mosque tour guides who do a great job: MAD 50.',
        ],
      },
      {
        heading: 'Bargaining and souks',
        paragraphs: [
          '23. Bargaining is expected in souks but not in stores with price tags. Start at 30–40% of the asking price, smile, walk away if needed.',
          '24. The "first sale of the day" is considered good luck and prices can be better at 9–10am.',
          '25. The asking-then-counter game is social — vendors enjoy it when you play it well. A handshake at the end seals the deal.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Morocco safe for tourists in 2026?',
        answer:
          'Yes — Morocco is one of the safest countries in North Africa for tourism, with a strong police presence in tourist areas and low rates of violent crime. The most common issues are persistent street touts and minor scams.',
      },
      {
        question: 'Can women travel alone in Morocco?',
        answer:
          'Yes, and many do. Expect some street attention (whistles, "hello, beautiful") but rarely anything serious. Dress modestly, walk confidently, avoid the medina alleys after 10pm, and trust your instincts.',
      },
      {
        question: 'Do I need to speak Arabic or French in Morocco?',
        answer:
          'No — English is widely spoken in hotels, restaurants and major sights. French is the second working language and useful in shops and with police. A few words of Arabic (salaam, shokran, la shokran) is always appreciated.',
      },
      {
        question: 'How much cash should I bring to Morocco?',
        answer:
          'For a 7-day trip, plan €200–€400 in cash withdrawals from ATMs upon arrival (or local equivalent). Cards work in most hotels and bigger restaurants but the souks, taxis and small cafés are cash-only.',
      },
      {
        question: 'When is the best time to visit Morocco?',
        answer:
          'March–May and September–November. March–May is the most popular; September–November has slightly fewer crowds and equally great weather. Avoid July–August unless you’re heading north or to the coast.',
      },
    ],
    relatedDestinations: ['marrakech', 'fes', 'chefchaouen', 'casablanca'],
    relatedPosts: ['morocco-7-days-itinerary', 'best-riads-marrakech', 'fes-medina-guide'],
  },

  {
    slug: 'casablanca-airport-car-rental',
    title: 'Casablanca Airport Car Rental (CMN): The Complete 2026 Guide',
    description:
      'Renting a car at Casablanca Mohammed V Airport (CMN): real 2026 prices, all the major companies, what documents you need, and how to drive into the city or onward to Marrakech.',
    keyword: 'casablanca airport car rental',
    coverImage: pex(36467138),
    publishedISO: '2026-02-12',
    updatedISO: '2026-05-21',
    author: 'MoroccoForYou Editorial',
    readingMinutes: 9,
    intro:
      'Casablanca Mohammed V Airport (CMN) is Morocco’s largest airport and the cheapest place in the country to rent a car for a long road trip. This 2026 guide explains the rental companies on-site, real prices in MAD and EUR, the documents and credit-card requirements, and how to drive straight from arrivals onto the motorway toward Marrakech, Fes or Tangier.',
    sections: [
      {
        heading: 'CMN car rental prices in 2026',
        paragraphs: [
          'Economy cars (Dacia Sandero, Renault Clio): MAD 250–400 per day (€23–€37). Compact (Hyundai Accent, Peugeot 208): MAD 300–500 (€28–€47). Compact SUV (Dacia Duster, Hyundai Tucson): MAD 400–700 (€37–€65). Mid-size automatic (Mercedes A-class, BMW Série 1): MAD 700–1,100 (€65–€100). 7-seater family (Dacia Lodgy): MAD 450–650.',
          'All prices include unlimited mileage and basic insurance with a deposit hold of MAD 5,000–15,000 on a credit card. Adding the "zero-excess" coverage costs €8–€15 per day. One-way drop-off in Marrakech, Fes or Tangier adds €40–€90.',
        ],
      },
      {
        heading: 'Who rents cars at CMN?',
        paragraphs: [
          'In the arrivals hall: Hertz, Avis, Europcar, Sixt, Budget, Thrifty, Goldcar, Enterprise. All have 24/7 desks. Their online rates are usually 25–40% cheaper than walk-up rates.',
          'Local Moroccan companies (Medloc, Sara Car, MoroccoForYou Cars, BSP Auto) deliver to the airport on a meet-and-greet basis. They are not in the terminal — their agent waits in arrivals with a sign. Often €5–€15 per day cheaper than international brands for the same car, with better all-in pricing (no hidden fees).',
        ],
      },
      {
        heading: 'Documents and credit-card requirements',
        paragraphs: [
          'Required: a valid passport, a driving licence held for at least 1 year, a credit card in the driver’s name. Recommended: an International Driving Permit (technically required by Moroccan law but rarely demanded in practice).',
        ],
        list: [
          'Driver must be 21+ (some companies 23+, with a young-driver fee of €5–€10/day under 25).',
          'Licence must be ≥ 1 year old. EU, UK, US, Canadian and Gulf licences accepted directly.',
          'Credit card (Visa/Mastercard/Amex) in driver’s name. Debit cards rarely accepted for deposit.',
          'Booking confirmation (email or app).',
          'Cash deposit accepted only with prior agreement at some local agencies.',
        ],
      },
      {
        heading: 'Pickup process: what to expect',
        paragraphs: [
          'After customs, you exit into the arrivals hall. International desks are to your right behind a glass partition. Take a queue number and wait — 15–30 minutes at peak times.',
          'Local-agency drivers wait at the meeting point near door 2 with name boards. The agent walks you to the car park (3–5 minutes), inspects the vehicle with you and marks any existing damage on a paper diagram. Photograph the car from all four corners and the dashboard. Sign the contract, get the keys, and you’re out in 20–30 minutes from landing.',
        ],
      },
      {
        heading: 'Driving from CMN airport',
        paragraphs: [
          'CMN is 35 km southeast of central Casablanca and connected by motorway. From the airport car park, follow signs for "Sortie / A7" and you’re on the toll motorway within 5 minutes. From there:',
        ],
        list: [
          'Casablanca city centre: 35 min, 35 km, no toll.',
          'Rabat: 1h20, 120 km, MAD 33 toll.',
          'Marrakech: 2h30, 240 km, MAD 78 toll.',
          'Fes: 3h30, 280 km, MAD 70 toll.',
          'Tangier: 3h45, 360 km, MAD 153 toll.',
          'El Jadida: 1h45, 120 km, MAD 20 toll.',
        ],
      },
      {
        heading: 'Should I rent in Casablanca or Marrakech?',
        paragraphs: [
          'Rent in Casablanca if: you’re flying into CMN and want to drive straight to a destination; you want the widest fleet of automatics; you plan to do a Casablanca-Fes-Tangier loop; you’re budget-conscious (CMN is consistently 10–20% cheaper than Marrakech for the same car).',
          'Rent in Marrakech if: you’re flying into RAK directly; your itinerary stays south (Atlas, Sahara, Essaouira); you’re only doing a 2-3 day rental for day-trips from Marrakech.',
        ],
      },
      {
        heading: 'Common pitfalls and how to avoid them',
        paragraphs: [
          'The biggest trap is the "extra fee at pickup" — airport surcharge, "young driver fee", "additional insurance" pushed at the counter. Insist on a single all-inclusive price in writing before you fly. Photograph every existing scratch with a date/timestamp; agencies sometimes try to bill for pre-existing damage on return.',
          'Refuel only at major-brand stations (Afriquia, Shell, Total, Vivo). Return the car with the same fuel level as you received it, or pay a high per-litre top-up. Check that the spare tyre, jack and warning triangle are all in the boot before driving off.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to rent a car at Casablanca Airport per day?',
        answer:
          'In 2026, economy cars start at MAD 250–400 per day (€23–€37). A compact SUV runs €37–€65 per day. Prices include unlimited mileage and basic insurance.',
      },
      {
        question: 'What are the best car rental companies at Casablanca Airport?',
        answer:
          'For international consistency: Hertz, Europcar and Sixt. For best prices and personal service: local companies like MoroccoForYou Cars, Medloc and Sara Car, which deliver to the airport on a meet-and-greet basis.',
      },
      {
        question: 'Do I need a credit card to rent a car at Casablanca Airport?',
        answer:
          'Yes — almost all agencies require a credit card in the driver’s name for the security deposit (MAD 5,000–15,000). A few local agencies accept a cash deposit on prior arrangement.',
      },
      {
        question: 'Can I drop off the car in Marrakech or Fes?',
        answer:
          'Yes — one-way drop-offs in Marrakech, Fes, Tangier or Agadir are standard with most agencies and add €40–€90 to the rental cost.',
      },
      {
        question: 'How long does the pickup take at CMN?',
        answer:
          'Allow 30 minutes from landing. The arrivals hall is small; international desks may queue at peak times. Local-agency drivers meet you in arrivals and walk you to the car park.',
      },
    ],
    relatedDestinations: ['casablanca', 'marrakech', 'fes', 'rabat'],
    relatedPosts: ['rent-a-car-marrakech-airport', 'morocco-road-trip-guide', 'morocco-7-days-itinerary'],
  },
];

// French-language entry. Lives at /blog/{slug}/ alongside the English posts.
// The BlogPostView renders FR UI chrome and FR JSON-LD when `lang === 'fr'`.
BLOG_POSTS.push({
  slug: 'guide-pour-louer-une-voiture-au-maroc-pour-la-premiere-fois',
  lang: 'fr',
  title: 'Louer une voiture au Maroc pour la première fois — Le guide 2026',
  description:
    'Le guide complet pour louer une voiture au Maroc en 2026 : prix réels par catégorie, où prendre la voiture (aéroport ou ville), documents, assurances, conduite, pièges à éviter et meilleurs itinéraires.',
  keyword: 'louer une voiture au maroc',
  coverImage: pex(30124130),
  publishedISO: '2026-04-22',
  updatedISO: '2026-05-29',
  author: 'MoroccoForYou Editorial',
  readingMinutes: 10,
  intro:
    'Louer une voiture au Maroc est sans doute le moyen le plus libre — et souvent le plus économique — de visiter le pays : routes goudronnées, bonne signalisation, distances raisonnables et essence à 1,40 € le litre. Mais c’est aussi une expérience que les premiers voyageurs ratent parfois (sur-assurance imposée, dépôt bloqué deux mois, ou pire). Ce guide 2026 répond à toutes les questions qu’on nous pose sur WhatsApp avant un premier road trip marocain.',
  sections: [
    {
      heading: 'Où louer sa voiture : aéroport ou ville ?',
      paragraphs: [
        'Les deux grands points de retrait sont l’aéroport de Casablanca Mohammed V (CMN) et l’aéroport Marrakech Menara (RAK). CMN est globalement 10 à 20 % moins cher pour le même véhicule, propose plus d’automatiques et permet les allers simples vers Marrakech, Fès ou Tanger. RAK est le bon choix si votre itinéraire reste au sud (Atlas, Sahara, Essaouira, Agadir).',
        'Louer en centre-ville (Marrakech-Guéliz, Casablanca-Maârif) coûte moins cher qu’au comptoir aéroport, mais l’écart se réduit quand on passe par une agence marocaine qui livre gratuitement à l’aéroport en meet & greet.',
      ],
    },
    {
      heading: 'Combien ça coûte en 2026 ?',
      paragraphs: [
        'Les tarifs incluent toujours le kilométrage illimité et une assurance de base. Comptez un dépôt de 5 000 à 15 000 MAD bloqué sur la carte de crédit du conducteur. L’option "tous risques zéro franchise" ajoute 8 à 15 € par jour.',
      ],
      list: [
        'Économique (Dacia Sandero, Hyundai i10) : 23-35 €/jour en basse saison, 30-45 € en haute saison.',
        'Compacte (Renault Clio, Peugeot 208) : 28-45 €/jour.',
        'SUV compact (Dacia Duster, Hyundai Tucson) : 37-65 €/jour — indispensable pour l’Atlas ou les pistes vers les ksars.',
        'Berline automatique (Mercedes Classe A, BMW Série 1) : 65-100 €/jour.',
        'Monospace 7 places (Dacia Lodgy) : 45-65 €/jour.',
      ],
    },
    {
      heading: 'Les documents indispensables',
      paragraphs: [
        'Pour louer au Maroc en 2026, vous avez besoin de trois choses : un passeport en cours de validité, un permis de conduire détenu depuis au moins 1 an, et une carte de crédit (Visa/Mastercard/Amex) au nom du conducteur pour le dépôt. Les cartes de débit sont rarement acceptées pour le dépôt.',
        'Le permis international (IDP) est techniquement exigé par la loi marocaine, mais les permis européens, britanniques, américains, canadiens et du Golfe sont acceptés directement par toutes les agences. L’IDP est recommandé si votre permis est en alphabet non latin (arabe, cyrillique, chinois).',
      ],
    },
    {
      heading: 'Le piège classique : l’assurance "obligatoire" au comptoir',
      paragraphs: [
        'L’arnaque numéro un des comptoirs aéroport au Maroc consiste à présenter au moment du retrait une "assurance obligatoire" supplémentaire de 12 à 18 € par jour, en affirmant que la franchise standard est de 1 500 à 3 000 €. C’est techniquement vrai — il y a bien une franchise — mais l’assurance proposée n’est pas obligatoire. Vous pouvez la refuser à condition d’accepter le risque, ou la souscrire à l’avance via un comparateur tiers (Allianz, AXA) à 4-6 € par jour.',
        'Exigez toujours un devis tout compris par écrit avant votre vol. Si le prix au retrait est plus élevé que le prix de réservation, demandez à voir la grille tarifaire officielle.',
      ],
    },
    {
      heading: 'Conduire au Maroc : règles, contrôles, radars',
      paragraphs: [
        'On conduit à droite. Ceintures obligatoires à l’avant et à l’arrière. Téléphone au volant interdit et contrôlé. Vitesse limitée à 60 km/h en ville, 100 km/h sur route nationale et 120 km/h sur autoroute. Les radars (fixes et mobiles) sont nombreux sur les axes Casa-Marrakech, Casa-Tanger et Casa-Agadir. Les amendes (15 à 60 €) se règlent sur place auprès de la gendarmerie.',
        'Tolérance d’alcool : 0,0. Ne conduisez jamais après avoir bu. Les contrôles de police à l’entrée des villes sont routiniers — préparez passeport, permis et contrat de location, le contrôle dure 30 secondes.',
      ],
    },
    {
      heading: 'Les 4 itinéraires de road trip les plus populaires',
      paragraphs: [
        'Si vous louez pour la première fois, choisissez l’un de ces 4 circuits éprouvés :',
      ],
      list: [
        'Villes impériales (4-6 jours) : Casablanca → Rabat → Fès → Meknès/Volubilis → retour. Autoroute en grande partie, conduite facile, idéal pour une première fois.',
        'Marrakech → Sahara → Fès (7-10 jours) : col du Tichka, Aït Ben Haddou, vallée du Dadès, nuit dans les dunes à Merzouga. Le classique. Prenez un SUV.',
        'Côte atlantique (5-7 jours) : Casablanca → Rabat → Tanger → Asilah → Essaouira → Agadir. Plages, ports de pêche, fruits de mer. Voiture économique suffit.',
        'Boucle nord (4-5 jours) : Tanger → Chefchaouen → Fès → Meknès → retour. La ville bleue + la médina médiévale de Fès en un seul circuit.',
      ],
    },
    {
      heading: 'Carburant, péages et stationnement',
      paragraphs: [
        'L’essence sans plomb coûte 14-16 MAD le litre (1,30-1,50 €), le diesel 13-15 MAD. Un road trip de 1 500 km consomme environ 120-160 € de carburant en voiture économique. Faites le plein uniquement chez les marques nationales (Afriquia, Shell, Total, Vivo) — quelques stations indépendantes vendent du carburant frelaté.',
        'Les péages d’autoroute (Autoroute du Maroc) se règlent en espèces ou par app aux gares. Exemples : Casa-Marrakech 78 MAD (7,30 €), Casa-Tanger 153 MAD (14 €), Casa-Fès 88 MAD (8,20 €). Gardez de la petite monnaie.',
        'Stationnement en ville : un "gardien" (gilet jaune) vous indique une place, vous lui donnez 2-5 MAD à la sortie. C’est informel mais sûr.',
      ],
    },
    {
      heading: 'Restitution : les détails qui coûtent cher',
      paragraphs: [
        'Rendez la voiture avec le même niveau de carburant qu’à la prise. Un appoint au comptoir est facturé 3 à 5 fois le prix à la pompe. Lavez le pare-brise et l’intérieur si possible — certains contrats prévoient des frais de "nettoyage spécial" si la voiture est trop poussiéreuse au retour (typique après le Sahara).',
        'Au retour, photographiez à nouveau les quatre faces du véhicule et le compteur. Demandez un PV de restitution signé attestant qu’il n’y a aucun dommage. Sans ce document, l’agence peut prélever sur votre dépôt 30 jours plus tard pour "rayures découvertes après lavage".',
      ],
    },
  ],
  faqs: [
    {
      question: 'Quel âge minimum pour louer une voiture au Maroc ?',
      answer:
        '21 ans avec permis détenu depuis au moins 1 an chez la plupart des agences locales. Les compagnies internationales (Hertz, Avis, Europcar) exigent souvent 23 ans, avec un supplément "jeune conducteur" de 5-10 € par jour pour les moins de 25 ans.',
    },
    {
      question: 'Faut-il un permis international pour conduire au Maroc ?',
      answer:
        'Techniquement oui selon la loi marocaine, mais en pratique les permis européens, britanniques, américains et canadiens sont acceptés sans IDP par toutes les agences de location et la police. Le permis international est recommandé uniquement si votre permis est en alphabet non latin.',
    },
    {
      question: 'Combien coûte la location d’une voiture au Maroc par jour en 2026 ?',
      answer:
        'À partir de 23 €/jour pour une économique en basse saison, 37-65 €/jour pour un SUV adapté à l’Atlas et au Sahara, et 65-100 €/jour pour une berline automatique premium. Le kilométrage illimité et l’assurance de base sont inclus.',
    },
    {
      question: 'Puis-je louer une voiture sans carte de crédit ?',
      answer:
        'Très rarement. Presque toutes les agences exigent une carte de crédit au nom du conducteur principal pour bloquer le dépôt (5 000 à 15 000 MAD). Quelques agences locales acceptent un dépôt en espèces sur arrangement préalable.',
    },
    {
      question: 'Les routes du Maroc sont-elles goudronnées et sûres ?',
      answer:
        'Oui — toutes les routes des itinéraires touristiques classiques (villes impériales, côte atlantique, route de Marrakech au Sahara) sont goudronnées et bien entretenues. Les derniers 5 à 10 km vers certains camps du désert sont des pistes accessibles uniquement en 4x4 ou à dos de dromadaire.',
    },
    {
      question: 'Puis-je passer la frontière vers l’Espagne ou la Mauritanie ?',
      answer:
        'Non. Les contrats de location marocains interdisent formellement le passage des frontières. Vous devez restituer le véhicule au Maroc.',
    },
    {
      question: 'Quelle voiture choisir pour aller dans le désert ?',
      answer:
        'Un SUV type Dacia Duster ou Hyundai Tucson est suffisant pour aller jusqu’aux hôtels-kasbah de Merzouga. La piste finale vers le camp dans les dunes se fait en 4x4 fourni par le camp ou à dos de dromadaire — n’y allez jamais avec une voiture de location.',
    },
  ],
  relatedDestinations: ['marrakech', 'casablanca', 'sahara-merzouga', 'essaouira'],
  relatedPosts: ['rent-a-car-marrakech-airport', 'casablanca-airport-car-rental', 'morocco-road-trip-guide'],
});

/** All posts with `lang === 'en'` (or no lang declared — legacy posts default to en). */
export function getEnglishBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => (p.lang ?? 'en') === 'en');
}

/** Posts written for a specific locale. */
export function getBlogPostsByLang(lang: BlogLang): BlogPost[] {
  if (lang === 'en') return getEnglishBlogPosts();
  return BLOG_POSTS.filter((p) => p.lang === lang);
}

/** All slugs for a locale — drives `generateStaticParams`. Excludes legacy
 * slugs that live at /blog/ (no prefix) regardless of language. */
export function getBlogSlugsByLang(lang: BlogLang): string[] {
  return getBlogPostsByLang(lang)
    .filter((p) => !LEGACY_BLOG_SLUGS_AT_ROOT.has(p.slug))
    .map((p) => p.slug);
}

/** Slugs that live under /blog/ at the root: all English posts + any legacy
 * slugs that point there regardless of language. */
export function getRootBlogSlugs(): string[] {
  const en = getEnglishBlogPosts().map((p) => p.slug);
  const legacy = BLOG_POSTS.filter((p) => LEGACY_BLOG_SLUGS_AT_ROOT.has(p.slug)).map((p) => p.slug);
  return Array.from(new Set([...en, ...legacy]));
}

/** Legacy: all EN slugs. */
export function getAllBlogSlugs(): string[] {
  return getEnglishBlogPosts().map((p) => p.slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Find a post by slug within a specific locale (slugs may collide otherwise).
 * For routes mounted at /blog/ (no locale prefix) we also fall back to legacy
 * posts in other languages stored at that path. */
export function getBlogPostInLang(slug: string, lang: BlogLang): BlogPost | undefined {
  const direct = BLOG_POSTS.find((p) => p.slug === slug && (p.lang ?? 'en') === lang);
  if (direct) return direct;
  // Special-case: the EN-mounted route also serves legacy non-EN posts.
  if (lang === 'en' && LEGACY_BLOG_SLUGS_AT_ROOT.has(slug)) {
    return BLOG_POSTS.find((p) => p.slug === slug);
  }
  return undefined;
}

export function getRecentBlogPosts(limit = 6, lang: BlogLang = 'en'): BlogPost[] {
  return [...getBlogPostsByLang(lang)]
    .sort((a, b) => b.publishedISO.localeCompare(a.publishedISO))
    .slice(0, limit);
}

export function blogPostingJsonLd(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    inLanguage: post.lang ?? 'en',
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'MoroccoForYou',
      logo: { '@type': 'ImageObject', url: 'https://www.moroccoforyou.com/logo.svg' },
    },
    datePublished: post.publishedISO,
    dateModified: post.updatedISO ?? post.publishedISO,
    mainEntityOfPage: url,
    keywords: post.keyword,
  };
}

// NOTE: Content registration lives in `lib/blog-content/index.ts`. ESM hoists
// import statements to the top of the file, so we cannot trigger it from here
// without hitting a Temporal Dead Zone when content files try to push into
// BLOG_POSTS. Every consumer (page, view, sitemap) must import
// `'@/lib/blog-content'` BEFORE reading from this module.
