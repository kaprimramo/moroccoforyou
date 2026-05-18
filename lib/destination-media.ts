/**
 * Image URLs hotlink to Unsplash's public CDN. Free for any use under the
 * Unsplash License (https://unsplash.com/license). Photo IDs were chosen to
 * roughly match each destination — replace any that don't fit your brand.
 *
 * The width query param controls served resolution. We default to 1600 for
 * heroes and 800 for gallery thumbs.
 */

function u(id: string, w = 1600): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export const HERO_HOMEPAGE = u('1489493512598-d08130f49bea');

export const HERO_BY_SLUG: Record<string, string> = {
  marrakech: u('1597212618440-806262de4f6b'),
  fes: u('1539020140153-e479b8c22e70'),
  chefchaouen: u('1548013146-72479768bada'),
  'sahara-merzouga': u('1547235001-d703406d3a89'),
  casablanca: u('1577084219074-7e3691e6ab50'),
  essaouira: u('1591012040290-3c12dcf41a91'),
  tangier: u('1576081793525-7e8c1be51d65'),
  rabat: u('1583062828094-fb7d70d75f3c'),
  agadir: u('1572252009286-268acec5ca0a'),
  'ait-ben-haddou': u('1585129777188-94600bc7ee76'),
  ouarzazate: u('1542340000-3ed10c5db8f1'),
  'atlas-imlil': u('1545569341-9eb8b30979d9'),
  dakhla: u('1604999333679-b86d54738315'),
};

export const GALLERY_BY_SLUG: Record<string, string[]> = {
  marrakech: [
    u('1531232073976-d4f0c8f10c75', 800),
    u('1539650116574-75c0c6d73cbe', 800),
    u('1517825738774-7de9363ef735', 800),
  ],
  fes: [
    u('1583062828094-fb7d70d75f3c', 800),
    u('1582719508461-905c673771fd', 800),
    u('1539020140153-e479b8c22e70', 800),
  ],
  chefchaouen: [
    u('1577515693946-d6f2f8a14a06', 800),
    u('1591289009723-aef022f3b69d', 800),
    u('1559339352-11d035aa65de', 800),
  ],
  'sahara-merzouga': [
    u('1489493512598-d08130f49bea', 800),
    u('1568556547011-3b80b8e07e07', 800),
    u('1574236170880-faf57f5ce2c6', 800),
  ],
  casablanca: [
    u('1597212720291-936f7c9c4d6a', 800),
    u('1611140284444-2c6cb6e7af44', 800),
    u('1596895114632-6e1c0bbb4cb6', 800),
  ],
  essaouira: [
    u('1592509255531-1c93e69fdab0', 800),
    u('1571907483089-c8cbf9c0c9d5', 800),
    u('1602941525421-8f8b81d3edbb', 800),
  ],
  tangier: [
    u('1581952976147-5a2d15560349', 800),
    u('1564677527e64-7a04e3d3c2e0', 800),
    u('1577086664693-894d8405334a', 800),
  ],
  rabat: [
    u('1578321709308-9ca5fdc92e96', 800),
    u('1576081793525-7e8c1be51d65', 800),
    u('1583062828094-fb7d70d75f3c', 800),
  ],
  agadir: [
    u('1561501900-3701fa6a0864', 800),
    u('1551918120-9739cb430c6d', 800),
    u('1593628891891-e90c456f7e30', 800),
  ],
  'ait-ben-haddou': [
    u('1542340000-3ed10c5db8f1', 800),
    u('1604999333679-b86d54738315', 800),
    u('1539635278303-d4002c07eae3', 800),
  ],
  ouarzazate: [
    u('1585129777188-94600bc7ee76', 800),
    u('1604999333679-b86d54738315', 800),
    u('1547235001-d703406d3a89', 800),
  ],
  'atlas-imlil': [
    u('1547489432-cf93fa6c71ec', 800),
    u('1531366936337-7c912a4589a7', 800),
    u('1490480340985-23a4bc6b8c44', 800),
  ],
  dakhla: [
    u('1559827260-dc66d52bef19', 800),
    u('1572252009286-268acec5ca0a', 800),
    u('1518837695005-2083093ee35b', 800),
  ],
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
