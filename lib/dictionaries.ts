import type { Locale } from './i18n';

export type Dictionary = {
  nav: {
    destinations: string;
    rentACar: string;
    planMyTrip: string;
    blog: string;
    aiPlanner: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPlan: string;
    ctaRent: string;
    ctaWhatsapp: string;
    proof: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredPrice: string;
  };
  topDestinations: {
    title: string;
    subtitle: string;
    seeAll: string;
  };
  why: {
    title: string;
    subtitle: string;
  };
  trust: {
    rating: string;
    ratingSub: string;
    licensed: string;
    licensedSub: string;
    reply: string;
    replySub: string;
    cancel: string;
    cancelSub: string;
  };
  faq: {
    title: string;
  };
  bottomCta: {
    title: string;
    subtitle: string;
    start: string;
    browse: string;
  };
  destination: {
    breadcrumb: string;
    bestTime: string;
    duration: string;
    days: string;
    highlights: string;
    planCta: string;
    aiPlannerEyebrow: string;
    aiPlannerTitle: (name: string) => string;
    aiPlannerSubtitle: string;
    aiPlannerLength: string;
    aiPlannerTravelers: string;
    aiPlannerPace: string;
    aiPlannerInterests: string;
    aiPlannerSendWhatsapp: string;
    aiPlannerGenerate: string;
    aiPlannerGenerating: string;
    aiPlannerReplyNote: string;
    paceRelaxed: string;
    paceBalanced: string;
    packed: string;
    interests: string[];
    other: string;
    faqTitle: (name: string) => string;
    gallery: string;
    stayTitle: (name: string) => string;
    staySubtitle: string;
    carsTitle: (name: string) => string;
    carsSubtitle: string;
    seeAllCars: string;
    about: (name: string) => string;
    thingsToDo: (name: string) => string;
    tipsTitle: (name: string) => string;
    pricesTitle: (name: string) => string;
  };
  rentACar: {
    eyebrow: string;
    title: string;
    subtitle: string;
    features: string[];
    pickup: string;
    pickupDate: string;
    returnDate: string;
    pickupTime: string;
    returnTime: string;
    cta: string;
    note: string;
    fleetTitle: string;
    fleetSubtitle: string;
    needHelpTitle: string;
    needHelpSubtitle: string;
    needHelpCta: string;
    seeDestinations: string;
    faqTitle: string;
    seats: (n: number) => string;
    bags: (n: number) => string;
    aircon: string;
    noAircon: string;
    transmission: { manual: string; automatic: string };
    perDay: string;
    bookOnWhatsapp: string;
    locationLabel: string;
    locationName: string;
  };
  footer: {
    tagline: string;
    destinations: string;
    services: string;
    contact: string;
    languages: string;
    rights: string;
    carRental: string;
    privateDrivers: string;
    aiPlanner: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    subtitle: string;
    home: string;
  };
};

const en: Dictionary = {
  nav: { destinations: 'Destinations', rentACar: 'Rent a car', planMyTrip: 'Plan my trip', blog: 'Blog', aiPlanner: 'AI Planner', openMenu: 'Open menu', closeMenu: 'Close menu' },
  hero: {
    eyebrow: 'Morocco, designed for you',
    title: 'Your Morocco trip — planned by AI, run by locals.',
    subtitle:
      'Tell our AI planner where you’re going. Get a personalized itinerary, private driver, and car rental — all bookable on WhatsApp in under an hour.',
    ctaPlan: 'Plan my trip with AI',
    ctaRent: 'Rent a car',
    ctaWhatsapp: 'WhatsApp us',
    proof: '4.9★ from 600+ travelers · Reply in <1h · EN · FR · AR',
    featuredEyebrow: 'Featured trip',
    featuredTitle: '10 days · Imperial cities + Sahara',
    featuredPrice: 'From €1,290 / person',
  },
  topDestinations: {
    title: 'Top destinations',
    subtitle: 'From the imperial medinas to the Sahara — start with a city, we’ll build the rest.',
    seeAll: 'All destinations →',
  },
  why: {
    title: 'Why travelers choose MoroccoForYou',
    subtitle: 'One team for planning, driving, hotels, and car rental — no middlemen.',
  },
  trust: {
    rating: '4.9 / 5',
    ratingSub: '600+ traveler reviews',
    licensed: 'Licensed agency',
    licensedSub: 'Registered in Morocco',
    reply: 'Reply in <1h',
    replySub: 'EN · FR · AR support',
    cancel: 'Free cancellation',
    cancelSub: 'Up to 48h before',
  },
  faq: { title: 'Frequently asked questions' },
  bottomCta: {
    title: 'Ready to design your Morocco trip?',
    subtitle: 'Send us a message — we’ll reply with a draft itinerary within the hour.',
    start: 'Start on WhatsApp',
    browse: 'Browse destinations',
  },
  destination: {
    breadcrumb: 'Destinations',
    bestTime: 'Best time',
    duration: 'Recommended',
    days: 'days',
    highlights: 'Highlights',
    planCta: 'Plan {name} on WhatsApp',
    aiPlannerEyebrow: 'AI Trip Planner',
    aiPlannerTitle: (name) => `Plan my ${name} trip`,
    aiPlannerSubtitle: 'Tell us what you like — we’ll send a personalized itinerary on WhatsApp.',
    aiPlannerLength: 'Trip length (days)',
    aiPlannerTravelers: 'Travelers',
    aiPlannerPace: 'Pace',
    aiPlannerInterests: 'Interests',
    aiPlannerSendWhatsapp: 'Send to WhatsApp',
    aiPlannerGenerate: 'Generate AI itinerary',
    aiPlannerGenerating: 'Generating…',
    aiPlannerReplyNote: 'We typically reply within 1 hour during business hours.',
    paceRelaxed: 'relaxed',
    paceBalanced: 'balanced',
    packed: 'packed',
    interests: [
      'Culture & history',
      'Food & gastronomy',
      'Souks & shopping',
      'Hiking & nature',
      'Desert & camels',
      'Photography',
      'Beaches',
      'Wellness & hammam',
    ],
    other: 'Other Morocco destinations',
    faqTitle: (name) => `${name} — frequently asked questions`,
    gallery: 'Gallery',
    stayTitle: (name) => `Where to stay in ${name}`,
    staySubtitle: 'Hand-picked riads, kasbahs, and resorts — book direct via WhatsApp.',
    carsTitle: (name) => `Cars for your ${name} trip`,
    carsSubtitle: 'Pick up at Casablanca Airport or any major Moroccan city.',
    seeAllCars: 'See full fleet →',
    about: (name) => `About ${name}`,
    thingsToDo: (name) => `Things to do in ${name}`,
    tipsTitle: (name) => `Local tips for ${name}`,
    pricesTitle: (name) => `${name} — typical prices`,
  },
  rentACar: {
    eyebrow: 'MoroccoForYou Cars',
    title: 'Car rental at Casablanca Airport (CMN)',
    subtitle:
      'From €23 / day. Free meet & greet 24/7 at the arrivals hall, unlimited mileage, free cancellation up to 48 hours before pickup. Book and confirm directly on WhatsApp.',
    features: [
      '24/7 airport meet & greet',
      'Unlimited mileage',
      'Free cancellation 48h',
      'English / French / Arabic support',
      'Pay in MAD or EUR',
      'Newer fleet (avg. < 3 years)',
    ],
    pickup: 'Pick-up location',
    pickupDate: 'Pick-up date',
    returnDate: 'Return date',
    pickupTime: 'Pick-up time',
    returnTime: 'Return time',
    cta: 'Check on WhatsApp',
    note: 'No card needed to check availability. We confirm price and car on WhatsApp.',
    fleetTitle: 'Our fleet',
    fleetSubtitle: 'Prices include insurance, taxes, unlimited mileage, and airport meet & greet.',
    needHelpTitle: 'Need help choosing a car?',
    needHelpSubtitle:
      'Tell us your dates and trip plan — we’ll recommend the right car (e.g. a 4x4 for the Atlas or Sahara) and lock the best price.',
    needHelpCta: 'Ask on WhatsApp',
    seeDestinations: 'See destinations',
    faqTitle: 'Car rental — frequently asked questions',
    seats: (n) => `${n} seats`,
    bags: (n) => `${n} bags`,
    aircon: 'A/C',
    noAircon: 'No A/C',
    transmission: { manual: 'manual', automatic: 'automatic' },
    perDay: '/ day',
    bookOnWhatsapp: 'Book on WhatsApp',
    locationLabel: 'Pick-up location',
    locationName: 'Casablanca Airport (CMN)',
  },
  footer: {
    tagline:
      'Tailor-made trips, private drivers, and rent-a-car across Morocco — by people who live here.',
    destinations: 'Destinations',
    services: 'Services',
    contact: 'Contact',
    languages: 'Languages: EN · FR · AR',
    rights: 'All rights reserved.',
    carRental: 'Car rental — Casablanca airport',
    privateDrivers: 'Private drivers',
    aiPlanner: 'AI trip planner',
  },
  notFound: {
    eyebrow: '404',
    title: 'We couldn’t find that page',
    subtitle: 'The page may have moved. Try one of these instead:',
    home: 'Home',
  },
};

const fr: Dictionary = {
  nav: { destinations: 'Destinations', rentACar: 'Location de voiture', planMyTrip: 'Planifier mon voyage', blog: 'Blog', aiPlanner: 'Planificateur IA', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu' },
  hero: {
    eyebrow: 'Le Maroc, conçu pour vous',
    title: 'Votre voyage au Maroc — planifié par l’IA, organisé par des locaux.',
    subtitle:
      'Dites à notre planificateur IA où vous allez. Recevez un itinéraire personnalisé, un chauffeur privé et une voiture de location — tout réservable sur WhatsApp en moins d’une heure.',
    ctaPlan: 'Planifier mon voyage avec l’IA',
    ctaRent: 'Louer une voiture',
    ctaWhatsapp: 'Nous contacter sur WhatsApp',
    proof: '4,9★ par 600+ voyageurs · Réponse en moins d’1h · EN · FR · AR',
    featuredEyebrow: 'Voyage à la une',
    featuredTitle: '10 jours · Villes impériales + Sahara',
    featuredPrice: 'À partir de 1 290 € / personne',
  },
  topDestinations: {
    title: 'Destinations populaires',
    subtitle: 'Des médinas impériales au Sahara — choisissez une ville, on s’occupe du reste.',
    seeAll: 'Toutes les destinations →',
  },
  why: {
    title: 'Pourquoi les voyageurs choisissent MoroccoForYou',
    subtitle: 'Une seule équipe pour la planification, les chauffeurs, les hôtels et la location — sans intermédiaire.',
  },
  trust: {
    rating: '4,9 / 5',
    ratingSub: 'Plus de 600 avis voyageurs',
    licensed: 'Agence agréée',
    licensedSub: 'Enregistrée au Maroc',
    reply: 'Réponse en <1h',
    replySub: 'Support EN · FR · AR',
    cancel: 'Annulation gratuite',
    cancelSub: 'Jusqu’à 48h avant',
  },
  faq: { title: 'Questions fréquentes' },
  bottomCta: {
    title: 'Prêt à concevoir votre voyage au Maroc ?',
    subtitle: 'Envoyez-nous un message — nous répondons avec un itinéraire dans l’heure.',
    start: 'Démarrer sur WhatsApp',
    browse: 'Voir les destinations',
  },
  destination: {
    breadcrumb: 'Destinations',
    bestTime: 'Meilleure saison',
    duration: 'Recommandé',
    days: 'jours',
    highlights: 'À voir',
    planCta: 'Planifier {name} sur WhatsApp',
    aiPlannerEyebrow: 'Planificateur IA',
    aiPlannerTitle: (name) => `Planifier mon voyage à ${name}`,
    aiPlannerSubtitle: 'Dites-nous vos envies — on vous envoie un itinéraire personnalisé sur WhatsApp.',
    aiPlannerLength: 'Durée (jours)',
    aiPlannerTravelers: 'Voyageurs',
    aiPlannerPace: 'Rythme',
    aiPlannerInterests: 'Centres d’intérêt',
    aiPlannerSendWhatsapp: 'Envoyer sur WhatsApp',
    aiPlannerGenerate: 'Générer l’itinéraire IA',
    aiPlannerGenerating: 'Génération…',
    aiPlannerReplyNote: 'Nous répondons généralement en moins d’une heure aux horaires d’ouverture.',
    paceRelaxed: 'tranquille',
    paceBalanced: 'équilibré',
    packed: 'intense',
    interests: [
      'Culture & histoire',
      'Gastronomie',
      'Souks & shopping',
      'Randonnée & nature',
      'Désert & dromadaires',
      'Photographie',
      'Plages',
      'Bien-être & hammam',
    ],
    other: 'Autres destinations au Maroc',
    faqTitle: (name) => `${name} — questions fréquentes`,
    gallery: 'Galerie',
    stayTitle: (name) => `Où dormir à ${name}`,
    staySubtitle: 'Riads, kasbahs et resorts triés sur le volet — réservation directe sur WhatsApp.',
    carsTitle: (name) => `Voitures pour votre voyage à ${name}`,
    carsSubtitle: 'Prise en charge à l’aéroport de Casablanca ou dans toute grande ville marocaine.',
    seeAllCars: 'Voir toute la flotte →',
    about: (name) => `À propos de ${name}`,
    thingsToDo: (name) => `Que faire à ${name}`,
    tipsTitle: (name) => `Conseils locaux à ${name}`,
    pricesTitle: (name) => `${name} — prix indicatifs`,
  },
  rentACar: {
    eyebrow: 'MoroccoForYou Cars',
    title: 'Location de voiture à l’aéroport de Casablanca (CMN)',
    subtitle:
      'À partir de 23 €/jour. Accueil gratuit 24/7 dans le hall des arrivées, kilométrage illimité, annulation gratuite jusqu’à 48h avant. Réservation et confirmation directement sur WhatsApp.',
    features: [
      'Accueil aéroport 24/7',
      'Kilométrage illimité',
      'Annulation gratuite 48h',
      'Support anglais / français / arabe',
      'Paiement en MAD ou EUR',
      'Flotte récente (moy. < 3 ans)',
    ],
    pickup: 'Lieu de prise en charge',
    pickupDate: 'Date de prise en charge',
    returnDate: 'Date de retour',
    pickupTime: 'Heure de prise en charge',
    returnTime: 'Heure de retour',
    cta: 'Vérifier sur WhatsApp',
    note: 'Aucune carte requise pour vérifier la disponibilité. Confirmation prix et véhicule sur WhatsApp.',
    fleetTitle: 'Notre flotte',
    fleetSubtitle: 'Les tarifs incluent l’assurance, les taxes, le kilométrage illimité et l’accueil aéroport.',
    needHelpTitle: 'Besoin d’aide pour choisir ?',
    needHelpSubtitle:
      'Donnez-nous vos dates et votre itinéraire — on vous recommande la bonne voiture (ex. 4x4 pour l’Atlas ou le Sahara) au meilleur prix.',
    needHelpCta: 'Demander sur WhatsApp',
    seeDestinations: 'Voir les destinations',
    faqTitle: 'Location de voiture — questions fréquentes',
    seats: (n) => `${n} places`,
    bags: (n) => `${n} bagages`,
    aircon: 'Clim.',
    noAircon: 'Sans clim.',
    transmission: { manual: 'manuelle', automatic: 'automatique' },
    perDay: '/ jour',
    bookOnWhatsapp: 'Réserver sur WhatsApp',
    locationLabel: 'Lieu de prise en charge',
    locationName: 'Aéroport de Casablanca (CMN)',
  },
  footer: {
    tagline:
      'Voyages sur mesure, chauffeurs privés et location de voitures à travers le Maroc — par des gens qui y vivent.',
    destinations: 'Destinations',
    services: 'Services',
    contact: 'Contact',
    languages: 'Langues : EN · FR · AR',
    rights: 'Tous droits réservés.',
    carRental: 'Location de voiture — Aéroport de Casablanca',
    privateDrivers: 'Chauffeurs privés',
    aiPlanner: 'Planificateur IA',
  },
  notFound: {
    eyebrow: '404',
    title: 'Page introuvable',
    subtitle: 'La page a peut-être été déplacée. Essayez plutôt :',
    home: 'Accueil',
  },
};

const ar: Dictionary = {
  nav: { destinations: 'الوجهات', rentACar: 'تأجير السيارات', planMyTrip: 'خطط لرحلتي', blog: 'مدونة', aiPlanner: 'مخطط ذكي', openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة' },
  hero: {
    eyebrow: 'المغرب، مصمم من أجلك',
    title: 'رحلتك في المغرب — يخطط لها الذكاء الاصطناعي، وينظمها سكان المغرب.',
    subtitle:
      'أخبر مخططنا الذكي بوجهتك. احصل على برنامج مخصص، سائق خاص، وسيارة للإيجار — وكل ذلك قابل للحجز عبر واتساب في أقل من ساعة.',
    ctaPlan: 'خطط لرحلتي بالذكاء الاصطناعي',
    ctaRent: 'استأجر سيارة',
    ctaWhatsapp: 'تواصل عبر واتساب',
    proof: '4.9★ من أكثر من 600 مسافر · رد خلال أقل من ساعة · EN · FR · AR',
    featuredEyebrow: 'رحلة مميزة',
    featuredTitle: '10 أيام · المدن الإمبراطورية + الصحراء',
    featuredPrice: 'ابتداءً من 1290€ للشخص',
  },
  topDestinations: {
    title: 'أفضل الوجهات',
    subtitle: 'من المدن العتيقة إلى الصحراء — اختر مدينة وسنبني لك الباقي.',
    seeAll: 'كل الوجهات →',
  },
  why: {
    title: 'لماذا يختار المسافرون MoroccoForYou',
    subtitle: 'فريق واحد للتخطيط والقيادة والفنادق وتأجير السيارات — دون وسطاء.',
  },
  trust: {
    rating: '4.9 / 5',
    ratingSub: '+600 مراجعة من المسافرين',
    licensed: 'وكالة مرخصة',
    licensedSub: 'مسجلة في المغرب',
    reply: 'رد خلال أقل من ساعة',
    replySub: 'دعم بالعربية والفرنسية والإنجليزية',
    cancel: 'إلغاء مجاني',
    cancelSub: 'حتى 48 ساعة قبل الموعد',
  },
  faq: { title: 'الأسئلة الشائعة' },
  bottomCta: {
    title: 'هل أنت مستعد لتصميم رحلتك إلى المغرب؟',
    subtitle: 'راسلنا — سنرد عليك ببرنامج مقترح خلال ساعة.',
    start: 'ابدأ عبر واتساب',
    browse: 'تصفح الوجهات',
  },
  destination: {
    breadcrumb: 'الوجهات',
    bestTime: 'أفضل وقت',
    duration: 'الموصى به',
    days: 'أيام',
    highlights: 'أبرز ما يمكن مشاهدته',
    planCta: 'خطط لـ {name} عبر واتساب',
    aiPlannerEyebrow: 'مخطط الذكاء الاصطناعي',
    aiPlannerTitle: (name) => `خطط لرحلتي إلى ${name}`,
    aiPlannerSubtitle: 'أخبرنا بما تحب — وسنرسل لك برنامجًا مخصصًا عبر واتساب.',
    aiPlannerLength: 'مدة الرحلة (أيام)',
    aiPlannerTravelers: 'المسافرون',
    aiPlannerPace: 'الإيقاع',
    aiPlannerInterests: 'الاهتمامات',
    aiPlannerSendWhatsapp: 'إرسال إلى واتساب',
    aiPlannerGenerate: 'إنشاء برنامج بالذكاء الاصطناعي',
    aiPlannerGenerating: 'جاري الإنشاء…',
    aiPlannerReplyNote: 'نرد عادةً خلال ساعة خلال ساعات العمل.',
    paceRelaxed: 'هادئ',
    paceBalanced: 'متوازن',
    packed: 'مكثف',
    interests: [
      'الثقافة والتاريخ',
      'المطبخ والمأكولات',
      'الأسواق والتسوق',
      'المشي والطبيعة',
      'الصحراء والجمال',
      'التصوير',
      'الشواطئ',
      'العافية والحمام',
    ],
    other: 'وجهات أخرى في المغرب',
    faqTitle: (name) => `${name} — أسئلة شائعة`,
    gallery: 'معرض الصور',
    stayTitle: (name) => `أين تقيم في ${name}`,
    staySubtitle: 'رياضات وقصبات ومنتجعات منتقاة بعناية — احجز مباشرة عبر واتساب.',
    carsTitle: (name) => `سيارات لرحلتك إلى ${name}`,
    carsSubtitle: 'الاستلام من مطار الدار البيضاء أو من أي مدينة مغربية كبرى.',
    seeAllCars: 'عرض الأسطول كاملًا →',
    about: (name) => `عن ${name}`,
    thingsToDo: (name) => `ماذا تفعل في ${name}`,
    tipsTitle: (name) => `نصائح محلية في ${name}`,
    pricesTitle: (name) => `${name} — أسعار إرشادية`,
  },
  rentACar: {
    eyebrow: 'MoroccoForYou Cars',
    title: 'تأجير السيارات في مطار الدار البيضاء (CMN)',
    subtitle:
      'ابتداءً من 23€ في اليوم. استقبال مجاني 24/7 في صالة الوصول، عدد الكيلومترات غير محدود، إلغاء مجاني حتى 48 ساعة قبل الاستلام. الحجز والتأكيد مباشرة عبر واتساب.',
    features: [
      'استقبال بالمطار 24/7',
      'كيلومترات غير محدودة',
      'إلغاء مجاني خلال 48 ساعة',
      'دعم بالإنجليزية / الفرنسية / العربية',
      'الدفع بالدرهم أو اليورو',
      'أسطول حديث (متوسط < 3 سنوات)',
    ],
    pickup: 'مكان الاستلام',
    pickupDate: 'تاريخ الاستلام',
    returnDate: 'تاريخ الإرجاع',
    pickupTime: 'وقت الاستلام',
    returnTime: 'وقت الإرجاع',
    cta: 'تحقق عبر واتساب',
    note: 'لا حاجة لبطاقة للتحقق من التوفر. نؤكد السعر والسيارة عبر واتساب.',
    fleetTitle: 'أسطولنا',
    fleetSubtitle: 'تشمل الأسعار التأمين والضرائب والكيلومترات غير المحدودة والاستقبال بالمطار.',
    needHelpTitle: 'تحتاج مساعدة في اختيار السيارة؟',
    needHelpSubtitle:
      'أخبرنا بتواريخك وخطة رحلتك — سنقترح السيارة المناسبة (مثل دفع رباعي للأطلس أو الصحراء) بأفضل سعر.',
    needHelpCta: 'اسأل عبر واتساب',
    seeDestinations: 'عرض الوجهات',
    faqTitle: 'تأجير السيارات — أسئلة شائعة',
    seats: (n) => `${n} مقاعد`,
    bags: (n) => `${n} حقائب`,
    aircon: 'مكيف',
    noAircon: 'بدون مكيف',
    transmission: { manual: 'يدوي', automatic: 'أوتوماتيك' },
    perDay: '/ يوم',
    bookOnWhatsapp: 'احجز عبر واتساب',
    locationLabel: 'مكان الاستلام',
    locationName: 'مطار الدار البيضاء (CMN)',
  },
  footer: {
    tagline: 'رحلات مخصصة، سائقون خاصون، وتأجير سيارات في جميع أنحاء المغرب — من أناس يعيشون هنا.',
    destinations: 'الوجهات',
    services: 'الخدمات',
    contact: 'تواصل',
    languages: 'اللغات: EN · FR · AR',
    rights: 'جميع الحقوق محفوظة.',
    carRental: 'تأجير السيارات — مطار الدار البيضاء',
    privateDrivers: 'سائقون خاصون',
    aiPlanner: 'مخطط رحلة بالذكاء الاصطناعي',
  },
  notFound: {
    eyebrow: '404',
    title: 'لم نعثر على هذه الصفحة',
    subtitle: 'ربما تم نقل الصفحة. جرّب أحد الخيارات التالية:',
    home: 'الرئيسية',
  },
};

const DICTIONARIES: Record<Locale, Dictionary> = { en, fr, ar };

export function dict(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
