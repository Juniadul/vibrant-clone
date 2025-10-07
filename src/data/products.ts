import { Product } from '@/context/CartContext';

export const products: Product[] = [
  // Paper Invitations
  {
    id: 'paper-1',
    name: 'Floral Elegance Wedding Card',
    price: 250,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
    category: 'paper',
    description: 'Beautiful purple and blue watercolor floral design on premium paper',
  },
  {
    id: 'paper-2',
    name: 'Classic Romance Invitation',
    price: 220,
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500',
    category: 'paper',
    description: 'Elegant red rose design with blue ribbon accents',
  },
  {
    id: 'paper-3',
    name: 'Royal Purple Suite',
    price: 280,
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500',
    category: 'paper',
    description: 'Luxury purple invitation with gold foil details',
  },
  {
    id: 'paper-4',
    name: 'Blue Botanical Card',
    price: 240,
    image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=500',
    category: 'paper',
    description: 'Modern blue botanical patterns with clean typography',
  },

  // Acrylic Invitations
  {
    id: 'acrylic-1',
    name: 'Modern Acrylic Invitation',
    price: 450,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500',
    category: 'acrylic',
    description: 'Clear acrylic with purple and gold printing',
  },
  {
    id: 'acrylic-2',
    name: 'Blue Elegance Acrylic',
    price: 480,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500',
    category: 'acrylic',
    description: 'Frosted acrylic with deep blue design',
  },
  {
    id: 'acrylic-3',
    name: 'Red Romance Acrylic',
    price: 500,
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=500',
    category: 'acrylic',
    description: 'Premium clear acrylic with red floral artwork',
  },

  // Favor Boxes
  {
    id: 'favor-1',
    name: 'Purple Dream Box',
    price: 120,
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500',
    category: 'favor-box',
    description: 'Elegant purple gift box with gold ribbon',
  },
  {
    id: 'favor-2',
    name: 'Royal Blue Favor Box',
    price: 130,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500',
    category: 'favor-box',
    description: 'Luxurious blue favor box with custom printing',
  },
  {
    id: 'favor-3',
    name: 'Red Velvet Box',
    price: 140,
    image: 'https://images.unsplash.com/photo-1515168833906-accb5a2b5be0?w=500',
    category: 'favor-box',
    description: 'Premium red velvet finish favor box',
  },

  // Goody Bags
  {
    id: 'bag-1',
    name: 'Purple Elegance Bag',
    price: 80,
    image: 'https://images.unsplash.com/photo-1549492423-400259a2e574?w=500',
    category: 'goody-bag',
    description: 'Stylish purple goody bag with handle',
  },
  {
    id: 'bag-2',
    name: 'Blue & White Favor Bag',
    price: 75,
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=500',
    category: 'goody-bag',
    description: 'Classic blue and white striped favor bag',
  },
  {
    id: 'bag-3',
    name: 'Red Premium Bag',
    price: 90,
    image: 'https://images.unsplash.com/photo-1550639524-a6c8f8866333?w=500',
    category: 'goody-bag',
    description: 'Luxury red goody bag with gold accents',
  },
];

export const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'paper', name: 'Paper Invitations', slug: 'paper' },
  { id: 'acrylic', name: 'Acrylic Invitations', slug: 'acrylic' },
  { id: 'favor-box', name: 'Favor Boxes', slug: 'favor-box' },
  { id: 'goody-bag', name: 'Goody Bags', slug: 'goody-bag' },
];
