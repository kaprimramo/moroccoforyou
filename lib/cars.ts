export type Car = {
  id: string;
  name: string;
  category: 'economy' | 'compact' | 'suv' | 'premium' | 'van';
  transmission: 'manual' | 'automatic';
  seats: number;
  bags: number;
  doors: number;
  airCon: boolean;
  pricePerDayMAD: number;
  pricePerDayEUR: number;
  pricePerDayUSD: number;
  image: string;
  features: string[];
  badge?: string;
  fuelType: 'petrol' | 'diesel' | 'hybrid';
  consumption: string;
  deposit: number;
  minAge: number;
  included: string[];
};

export const CARS: Car[] = [
  {
    id: 'renault-clio',
    name: 'Renault Clio 5',
    category: 'compact',
    transmission: 'manual',
    seats: 5,
    bags: 2,
    doors: 5,
    airCon: true,
    pricePerDayMAD: 250,
    pricePerDayEUR: 23,
    pricePerDayUSD: 25,
    image: 'https://res.cloudinary.com/dmf282zfv/image/upload/v1767818261/clio_5_y5alez.png',
    badge: 'Most popular',
    fuelType: 'petrol',
    consumption: '5.5L/100km',
    deposit: 3000,
    minAge: 21,
    features: ['Air conditioning', 'Bluetooth', 'USB charging', 'Power steering'],
    included: ['Unlimited mileage', 'Basic insurance', 'Free airport meet & greet', '24/7 roadside assistance'],
  },
  {
    id: 'dacia-sandero',
    name: 'Dacia Sandero',
    category: 'economy',
    transmission: 'manual',
    seats: 5,
    bags: 2,
    doors: 5,
    airCon: true,
    pricePerDayMAD: 250,
    pricePerDayEUR: 23,
    pricePerDayUSD: 25,
    image: 'https://res.cloudinary.com/dmf282zfv/image/upload/v1767818259/hero-airport.jpg_k0l5mx.png',
    badge: 'Best value',
    fuelType: 'petrol',
    consumption: '5.8L/100km',
    deposit: 3000,
    minAge: 21,
    features: ['Air conditioning', 'Bluetooth', 'USB charging', 'Spacious boot'],
    included: ['Unlimited mileage', 'Basic insurance', 'Free airport meet & greet', '24/7 roadside assistance'],
  },
  {
    id: 'peugeot-208',
    name: 'Peugeot 208',
    category: 'compact',
    transmission: 'manual',
    seats: 5,
    bags: 2,
    doors: 5,
    airCon: true,
    pricePerDayMAD: 250,
    pricePerDayEUR: 23,
    pricePerDayUSD: 25,
    image: 'https://res.cloudinary.com/dmf282zfv/image/upload/v1767818259/car-economy.jpg_lir5oz.png',
    fuelType: 'petrol',
    consumption: '5.2L/100km',
    deposit: 3000,
    minAge: 21,
    features: ['Air conditioning', 'Touchscreen', 'USB charging', 'Modern interior'],
    included: ['Unlimited mileage', 'Basic insurance', 'Free airport meet & greet', '24/7 roadside assistance'],
  },
  {
    id: 'hyundai-accent',
    name: 'Hyundai Accent',
    category: 'compact',
    transmission: 'manual',
    seats: 5,
    bags: 2,
    doors: 4,
    airCon: true,
    pricePerDayMAD: 300,
    pricePerDayEUR: 27,
    pricePerDayUSD: 30,
    image: 'https://res.cloudinary.com/dmf282zfv/image/upload/v1767817889/hyndai_accent_rent_car_rabat_rsskd6.png',
    fuelType: 'petrol',
    consumption: '6L/100km',
    deposit: 3000,
    minAge: 21,
    features: ['Air conditioning', 'Bluetooth', 'USB charging', 'Comfortable ride'],
    included: ['Unlimited mileage', 'Basic insurance', 'Free airport meet & greet', '24/7 roadside assistance'],
  },
  {
    id: 'dacia-logan',
    name: 'Dacia Logan',
    category: 'economy',
    transmission: 'manual',
    seats: 5,
    bags: 3,
    doors: 4,
    airCon: true,
    pricePerDayMAD: 250,
    pricePerDayEUR: 23,
    pricePerDayUSD: 25,
    image: 'https://res.cloudinary.com/dmf282zfv/image/upload/v1767817889/dacia_logan_rabat_rent_car_fasoif.png',
    badge: 'Spacious',
    fuelType: 'petrol',
    consumption: '6.2L/100km',
    deposit: 3000,
    minAge: 21,
    features: ['Air conditioning', 'Large boot', 'Comfortable seats', 'Easy to drive'],
    included: ['Unlimited mileage', 'Basic insurance', 'Free airport meet & greet', '24/7 roadside assistance'],
  },
  {
    id: 'dacia-duster',
    name: 'Dacia Duster 4x4',
    category: 'suv',
    transmission: 'manual',
    seats: 5,
    bags: 3,
    doors: 5,
    airCon: true,
    pricePerDayMAD: 350,
    pricePerDayEUR: 32,
    pricePerDayUSD: 35,
    image: 'https://res.cloudinary.com/dmf282zfv/image/upload/v1767817888/dacia_duster_dw1apq.png',
    badge: 'Atlas & Sahara',
    fuelType: 'diesel',
    consumption: '6.5L/100km',
    deposit: 5000,
    minAge: 23,
    features: ['4x4 capability', 'High clearance', 'Roof bars', 'GPS available'],
    included: ['Unlimited mileage', 'Basic insurance', 'Free airport meet & greet', '24/7 roadside assistance'],
  },
];

export function getCarById(id: string): Car | undefined {
  return CARS.find((c) => c.id === id);
}