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
  image: string;
  features: string[];
};

const carImg = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format&fit=crop`;

export const CARS: Car[] = [
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
    image: carImg('1502877338535-766e1452684a'),
    features: ['Air conditioning', 'Bluetooth', 'Unlimited mileage'],
  },
  {
    id: 'renault-clio',
    name: 'Renault Clio',
    category: 'compact',
    transmission: 'manual',
    seats: 5,
    bags: 2,
    doors: 5,
    airCon: true,
    pricePerDayMAD: 320,
    pricePerDayEUR: 29,
    image: carImg('1541899481282-d53bffe3c35d'),
    features: ['Air conditioning', 'USB', 'Unlimited mileage'],
  },
  {
    id: 'hyundai-tucson',
    name: 'Hyundai Tucson',
    category: 'suv',
    transmission: 'automatic',
    seats: 5,
    bags: 4,
    doors: 5,
    airCon: true,
    pricePerDayMAD: 650,
    pricePerDayEUR: 60,
    image: carImg('1606664515524-ed2f786a0bd6'),
    features: ['Automatic', 'GPS available', 'CarPlay / Android Auto'],
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
    pricePerDayMAD: 480,
    pricePerDayEUR: 44,
    image: carImg('1533473359331-0135ef1b58bf'),
    features: ['4x4 capability', 'Roof bars', 'Good for Atlas & desert roads'],
  },
  {
    id: 'mercedes-c-class',
    name: 'Mercedes C-Class',
    category: 'premium',
    transmission: 'automatic',
    seats: 5,
    bags: 3,
    doors: 4,
    airCon: true,
    pricePerDayMAD: 1100,
    pricePerDayEUR: 100,
    image: carImg('1618843479313-40f8afb4b4d8'),
    features: ['Automatic', 'Leather interior', 'Premium audio'],
  },
  {
    id: 'dacia-lodgy',
    name: 'Dacia Lodgy (7 seats)',
    category: 'van',
    transmission: 'manual',
    seats: 7,
    bags: 4,
    doors: 5,
    airCon: true,
    pricePerDayMAD: 550,
    pricePerDayEUR: 50,
    image: carImg('1609520505218-7421df17fb5d'),
    features: ['7 seats', 'Large boot', 'Family-friendly'],
  },
];

export function getCarById(id: string): Car | undefined {
  return CARS.find((c) => c.id === id);
}
