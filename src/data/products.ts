export type Category =
  | 'washbasin-designer'
  | 'washbasin-root'
  | 'washbasin-stone'
  | 'countertop'
  | 'cabinet'
  | 'mirror'
  | 'bath-accessory'
  | 'home-accessory';

export interface Product {
  id: number;
  category: Category;
  badge?: 'bestseller' | 'new' | '';
  name_en: string;
  name_id: string;
  material_en: string;
  material_id: string;
  price: number;
  img: string;
}

export const products: Product[] = [
  {
    id: 1,
    category: 'washbasin-designer',
    badge: 'bestseller',
    name_en: 'Teak Designer Basin',
    name_id: 'Wastafel Desainer Jati',
    material_en: 'Solid Teak',
    material_id: 'Jati Solid',
    price: 12500000,
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  },
  {
    id: 2,
    category: 'washbasin-root',
    badge: '',
    name_en: 'Root Wood Basin',
    name_id: 'Wastafel Akar Kayu',
    material_en: 'Root Teak',
    material_id: 'Akar Jati',
    price: 15800000,
    img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&q=80',
  },
  {
    id: 3,
    category: 'washbasin-stone',
    badge: 'new',
    name_en: 'River Stone Basin',
    name_id: 'Wastafel Batu Sungai',
    material_en: 'Natural Stone',
    material_id: 'Batu Alam',
    price: 9800000,
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
  },
  {
    id: 4,
    category: 'countertop',
    badge: '',
    name_en: 'Live Edge Countertop',
    name_id: 'Meja Wastafel Live Edge',
    material_en: 'Live Edge Teak',
    material_id: 'Jati Live Edge',
    price: 8200000,
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    id: 5,
    category: 'cabinet',
    badge: '',
    name_en: 'Teak Vanity Cabinet',
    name_id: 'Lemari Vanity Jati',
    material_en: 'Solid Teak',
    material_id: 'Jati Solid',
    price: 11500000,
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  },
  {
    id: 6,
    category: 'mirror',
    badge: '',
    name_en: 'Carved Wood Mirror',
    name_id: 'Cermin Kayu Ukir',
    material_en: 'Teak Frame',
    material_id: 'Bingkai Jati',
    price: 3200000,
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
  },
  {
    id: 7,
    category: 'bath-accessory',
    badge: 'bestseller',
    name_en: 'Teak Soap & Towel Set',
    name_id: 'Set Sabun & Handuk Jati',
    material_en: 'Solid Teak',
    material_id: 'Jati Solid',
    price: 1800000,
    img: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=600&q=80',
  },
  {
    id: 8,
    category: 'home-accessory',
    badge: 'new',
    name_en: 'Driftwood Sculpture',
    name_id: 'Patung Kayu Apung',
    material_en: 'Driftwood',
    material_id: 'Kayu Apung',
    price: 2500000,
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  },
  {
    id: 9,
    category: 'washbasin-designer',
    badge: '',
    name_en: 'Trough Washbasin',
    name_id: 'Wastafel Palung',
    material_en: 'Solid Teak',
    material_id: 'Jati Solid',
    price: 18500000,
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  },
  {
    id: 10,
    category: 'cabinet',
    badge: '',
    name_en: 'Tall Storage Cabinet',
    name_id: 'Lemari Tinggi',
    material_en: 'Solid Teak',
    material_id: 'Jati Solid',
    price: 14200000,
    img: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=600&q=80',
  },
  {
    id: 11,
    category: 'countertop',
    badge: '',
    name_en: 'Slab Countertop',
    name_id: 'Meja Slab',
    material_en: 'Teak Slab',
    material_id: 'Slab Jati',
    price: 6800000,
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    id: 12,
    category: 'home-accessory',
    badge: '',
    name_en: 'Carved Wall Panel',
    name_id: 'Panel Dinding Ukir',
    material_en: 'Solid Teak',
    material_id: 'Jati Solid',
    price: 4500000,
    img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600&q=80',
  },
];

export const categories: { id: Category; img: string; spanX?: boolean; spanY?: boolean }[] = [
  {
    id: 'washbasin-designer',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    spanX: true,
    spanY: true,
  },
  {
    id: 'washbasin-root',
    img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&q=80',
  },
  {
    id: 'washbasin-stone',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
  },
  {
    id: 'countertop',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    id: 'cabinet',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  },
  {
    id: 'mirror',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
  },
  {
    id: 'bath-accessory',
    img: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=600&q=80',
  },
  {
    id: 'home-accessory',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    spanX: true,
  },
];
