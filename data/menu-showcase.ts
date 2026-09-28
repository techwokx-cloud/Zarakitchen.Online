import { categories } from './site';
import { getMenuByCategory, type MenuItem } from './menu-data';

export interface ShowcasePhoto {
  src: string;
  alt: string;
}

export interface ShowcaseCategory {
  slug: string;
  name: string;
  menuCategory: string; // key into data/menu-data.ts
  tagline: string;
  promoTitle: string;
  promoText: string;
  promoImage?: string;
  photos: ShowcasePhoto[];
}

// Add a category's photos by dropping files in public/images/menu/<slug>/ and listing
// them in `photos` below (up to 6 fill the grid neatly). Until then a category shows
// its dishes from data/menu-data.ts instead.
const copy: Record<string, { tagline: string; promoTitle: string; promoText: string }> = {
  breakfast: {
    tagline: 'Fresh, wholesome and delicious ways to start your day.',
    promoTitle: 'Delicious Breakfasts',
    promoText: 'Start your day with fresh and hearty meals made with love.',
  },
  'hot-breakfast': {
    tagline: 'Hot, hearty plates to get your morning going.',
    promoTitle: 'Hot Breakfasts',
    promoText: 'Freshly cooked every morning, served piping hot.',
  },
  bakery: {
    tagline: 'Freshly baked breads, pastries and treats.',
    promoTitle: 'From Our Bakery',
    promoText: 'Warm from the oven and made with love.',
  },
  appetisers: {
    tagline: 'Tasty starters and bites to share.',
    promoTitle: 'Tasty Appetisers',
    promoText: 'The perfect way to begin any meal.',
  },
  salads: {
    tagline: 'Crisp, colourful and packed with freshness.',
    promoTitle: 'Fresh Salads',
    promoText: 'Light, vibrant and made with the freshest ingredients.',
  },
  'light-meals': {
    tagline: 'Simple, satisfying meals for any time of day.',
    promoTitle: 'Light Meals',
    promoText: 'Quick, easy and full of flavour.',
  },
  'on-the-grill': {
    tagline: 'Smoky, juicy favourites straight off the grill.',
    promoTitle: 'On the Grill',
    promoText: 'Flame-grilled to perfection.',
  },
  pastas: {
    tagline: 'Comforting pasta dishes made your way.',
    promoTitle: 'Perfect Pastas',
    promoText: 'Rich sauces, generous portions, made with love.',
  },
  chinese: {
    tagline: 'Your favourite Chinese dishes, freshly cooked.',
    promoTitle: 'Chinese Favourites',
    promoText: 'Bold flavours from the wok to your table.',
  },
  indian: {
    tagline: 'Fragrant curries and spiced classics.',
    promoTitle: 'Indian Dishes',
    promoText: 'Rich, aromatic and full of warmth.',
  },
  'rice-dishes': {
    tagline: 'Flavour-packed rice dishes for every appetite.',
    promoTitle: 'Rice Dishes',
    promoText: 'From jollof to fried rice, cooked to perfection.',
  },
  ghanaian: {
    tagline: 'Authentic Ghanaian flavours, cooked the traditional way.',
    promoTitle: 'Ghanaian Specialities',
    promoText: 'A taste of home, made with love.',
  },
  'from-the-grill': {
    tagline: 'Grilled meats and fish, seasoned to perfection.',
    promoTitle: 'From the Grill',
    promoText: 'Juicy, smoky and full of flavour.',
  },
  soups: {
    tagline: 'Warm, soulful soups and stews.',
    promoTitle: 'Comforting Soups',
    promoText: 'Slow-cooked and served with love.',
  },
  'extra-dishes': {
    tagline: 'Sides and extras to complete your meal.',
    promoTitle: 'Extra Dishes',
    promoText: 'Add a little something extra to your plate.',
  },
  desserts: {
    tagline: 'Sweet endings worth saving room for.',
    promoTitle: 'Sweet Desserts',
    promoText: 'Indulgent treats made with love.',
  },
};

const photos: Record<string, ShowcasePhoto[]> = {
  breakfast: [
    { src: '/images/menu/breakfast/1.jpg', alt: 'Scrambled eggs with fried plantain, toast and tomato' },
    { src: '/images/menu/breakfast/2.jpg', alt: 'Oatmeal bowl topped with banana, strawberries and blueberries' },
    { src: '/images/menu/breakfast/3.jpg', alt: 'Boiled eggs with beans stew and fried plantain' },
    { src: '/images/menu/breakfast/4.jpg', alt: 'Jollof rice with fried plantain and grilled chicken' },
    { src: '/images/menu/breakfast/5.jpg', alt: 'Stack of pancakes with strawberries, blueberries and syrup' },
    { src: '/images/menu/breakfast/6.jpg', alt: 'Kenkey balls with spinach stew and tomato sauce' },
  ],
  appetisers: [
    { src: '/images/menu/appetisers/chicken-wings.jpg', alt: 'Sticky glazed chicken wings with sesame seeds and coriander' },
    { src: '/images/menu/appetisers/fried-calamari.jpg', alt: 'Crispy fried calamari with grilled lemon and dipping sauce' },
    { src: '/images/menu/appetisers/guinea-fowl.jpg', alt: 'Spiced grilled guinea fowl with fresh salad' },
    { src: '/images/menu/appetisers/kelewele.jpg', alt: 'Kelewele, spicy fried plantain cubes' },
    { src: '/images/menu/appetisers/prawns.jpg', alt: 'Grilled garlic chilli prawns with lime' },
    { src: '/images/menu/appetisers/spicy-pork-ribs.jpg', alt: 'Spicy pork ribs topped with spring onion and chilli' },
    { src: '/images/menu/appetisers/vegetable-spring-roll.jpg', alt: 'Crispy vegetable spring rolls with sweet chilli sauce' },
  ],
  chinese: [
    { src: '/images/menu/chinese/beef-chop.jpg', alt: 'Beef stir-fry with broccoli, mushrooms, baby corn and carrots' },
    { src: '/images/menu/chinese/chinese-beef.jpg', alt: 'Crispy chilli beef with peppers and spring onion' },
    { src: '/images/menu/chinese/chinese-chicken.jpg', alt: 'Spicy stir-fried chicken with cauliflower, peppers and dried chillies' },
    { src: '/images/menu/chinese/chinese-pork-sauce.jpg', alt: 'Pork in sauce with peanuts, courgette and peppers' },
    { src: '/images/menu/chinese/fish-chili-sauce.jpg', alt: 'Crispy fish in chilli sauce with peppers and onion' },
    { src: '/images/menu/chinese/peking-chicken.jpg', alt: 'Chicken stir-fry with courgette, red pepper and spring onion' },
    { src: '/images/menu/chinese/sweet-sour-fish.jpg', alt: 'Sweet and sour fish with pineapple and peppers' },
  ],
};

const promoImages: Record<string, string> = {
  breakfast: '/images/menu/breakfast/promo.jpg',
  appetisers: '/images/menu/appetisers/promo.jpg',
  chinese: '/images/menu/chinese/promo.jpg',
};

export const showcase: ShowcaseCategory[] = categories.map((c) => ({
  slug: c.slug,
  name: c.name,
  menuCategory: c.menuCategory,
  tagline: copy[c.slug]?.tagline ?? '',
  promoTitle: copy[c.slug]?.promoTitle ?? `Delicious ${c.name}`,
  promoText: copy[c.slug]?.promoText ?? 'Fresh, tasty meals made with love.',
  promoImage: promoImages[c.slug],
  photos: photos[c.slug] ?? [],
}));

/** Accepts a slug (`hot-breakfast`) or a legacy menu category name (`Hot Breakfast`). */
export function findShowcase(key?: string | null): ShowcaseCategory {
  const k = (key ?? '').toLowerCase();
  return (
    showcase.find((c) => c.slug === k || c.menuCategory.toLowerCase() === k || c.name.toLowerCase() === k) ??
    showcase[0]
  );
}

export function dishesFor(c: ShowcaseCategory): MenuItem[] {
  return getMenuByCategory(c.menuCategory).filter((i) => i.available);
}
