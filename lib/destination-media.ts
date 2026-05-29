/**
 * Hero and gallery images for each destination, served from Pexels' free CDN.
 * Pexels images are free for any use under the Pexels License
 * (https://www.pexels.com/license/). IDs below were sourced directly from
 * Pexels search results for each Moroccan city, so each photo is specific to
 * the destination it represents.
 */

function p(id: number, w = 1600): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

// Atlas mountains / kasbah at sunset — Morocco wide
export const HERO_HOMEPAGE = p(10551201);

export const HERO_BY_SLUG: Record<string, string> = {
  marrakech: p(30124130),
  fes: p(5472532),
  chefchaouen: p(9422948),
  'sahara-merzouga': p(4694737),
  casablanca: p(36467138),
  essaouira: p(6655418),
  tangier: p(30355061),
  rabat: p(30532042),
  agadir: p(18841386),
  'ait-ben-haddou': p(13811651),
  ouarzazate: p(23456866),
  'atlas-imlil': p(33662300),
  dakhla: p(36770358),
};

export const GALLERY_BY_SLUG: Record<string, string[]> = {
  marrakech: [p(17649841, 1000), p(6621125, 1000), p(22711558, 1000)],
  fes: [p(5472534, 1000), p(29595710, 1000), p(20117785, 1000)],
  chefchaouen: [p(3889763, 1000), p(37764129, 1000), p(16639219, 1000)],
  'sahara-merzouga': [p(19190939, 1000), p(30099211, 1000), p(4805548, 1000)],
  casablanca: [p(1378421, 1000), p(29994223, 1000), p(30359726, 1000)],
  essaouira: [p(33539749, 1000), p(13308443, 1000), p(30326411, 1000)],
  tangier: [p(10205137, 1000), p(20890430, 1000), p(11344766, 1000)],
  rabat: [p(33202191, 1000), p(30532036, 1000), p(19084081, 1000)],
  agadir: [p(30557503, 1000), p(35166170, 1000), p(2958393, 1000)],
  'ait-ben-haddou': [p(13811656, 1000), p(13811658, 1000), p(14267612, 1000)],
  ouarzazate: [p(29595717, 1000), p(34856121, 1000), p(37700623, 1000)],
  'atlas-imlil': [p(37684069, 1000), p(37401852, 1000), p(37401857, 1000)],
  dakhla: [p(36757010, 1000), p(30142739, 1000), p(36717165, 1000)],
};

/** Car slugs recommended for the destination — references car IDs in lib/cars.ts. */
export const RECOMMENDED_CAR_IDS_BY_SLUG: Record<string, string[]> = {
  marrakech: ['renault-clio', 'dacia-duster', 'hyundai-tucson'],
  fes: ['renault-clio', 'dacia-sandero', 'mercedes-c-class'],
  chefchaouen: ['dacia-duster', 'renault-clio', 'dacia-sandero'],
  'sahara-merzouga': ['dacia-duster', 'hyundai-tucson', 'dacia-lodgy'],
  casablanca: ['renault-clio', 'mercedes-c-class', 'dacia-sandero'],
  essaouira: ['dacia-sandero', 'renault-clio', 'dacia-lodgy'],
  tangier: ['renault-clio', 'mercedes-c-class', 'dacia-sandero'],
  rabat: ['renault-clio', 'mercedes-c-class', 'dacia-sandero'],
  agadir: ['renault-clio', 'dacia-lodgy', 'mercedes-c-class'],
  'ait-ben-haddou': ['dacia-duster', 'hyundai-tucson', 'dacia-lodgy'],
  ouarzazate: ['dacia-duster', 'hyundai-tucson', 'renault-clio'],
  'atlas-imlil': ['dacia-duster', 'hyundai-tucson', 'dacia-lodgy'],
  dakhla: ['dacia-duster', 'hyundai-tucson', 'dacia-lodgy'],
};

export function getHero(slug: string): string {
  return HERO_BY_SLUG[slug] ?? HERO_HOMEPAGE;
}

export function getGallery(slug: string): string[] {
  return GALLERY_BY_SLUG[slug] ?? [];
}

export function getRecommendedCarIds(slug: string): string[] {
  return RECOMMENDED_CAR_IDS_BY_SLUG[slug] ?? [];
}
