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
    { src: '/images/menu/breakfast/cereal-bowl.jpg', alt: 'Cereal bowl with cornflakes, bran flakes, oats, banana, strawberries and blueberries' },
    { src: '/images/menu/breakfast/fruit-salad.jpg', alt: 'Creamy fruit salad with strawberries, kiwi, pineapple, orange and blueberries' },
    { src: '/images/menu/breakfast/full-breakfast.jpg', alt: 'Full breakfast with fried eggs, sausages, bacon, baked beans, mushrooms and chips' },
    { src: '/images/menu/breakfast/granola-bowl.jpg', alt: 'Granola bowl with yoghurt, chia seeds and fresh berries' },
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
  desserts: [
    { src: '/images/menu/desserts/assorted-pastries.jpg', alt: 'Assorted macarons, fruit tarts, brownies and tiramisu on a tiered stand' },
    { src: '/images/menu/desserts/chocolate-pudding.jpg', alt: 'Warm chocolate pudding with chocolate sauce and a scoop of vanilla ice cream' },
    { src: '/images/menu/desserts/fruit-salad.jpg', alt: 'Creamy fruit salad with strawberries, kiwi, pineapple, orange and blueberries' },
    { src: '/images/menu/desserts/vanilla-ice-cream.jpg', alt: 'Scoops of vanilla, chocolate and strawberry ice cream' },
  ],
  'extra-dishes': [
    { src: '/images/menu/extra-dishes/eba-akple-banku.jpg', alt: 'Plate of eba, akple and banku' },
    { src: '/images/menu/extra-dishes/extra-kenkey.jpg', alt: 'Extra Ga or Fante kenkey wrapped in leaves and husks in a basket' },
    { src: '/images/menu/extra-dishes/fufu.jpg', alt: 'Plain fufu on a white plate' },
    { src: '/images/menu/extra-dishes/kenkey-fish.jpg', alt: 'Kenkey plate with grilled fish, pepper sauce, shito and sliced onions' },
    { src: '/images/menu/extra-dishes/goat.jpg', alt: 'Grilled goat meat portion with rosemary' },
    { src: '/images/menu/extra-dishes/jollof.jpg', alt: 'Plate of Ghana-style jollof rice' },
    { src: '/images/menu/extra-dishes/steamed-rice.jpg', alt: 'Steamed rice with fresh coriander and lime' },
    { src: '/images/menu/extra-dishes/yam-chips.jpg', alt: 'Golden yam chips in a tray' },
    { src: '/images/menu/extra-dishes/yam-boiled-fried.jpg', alt: 'Boiled yam and fried yam on white plates' },
  ],
  'from-the-grill': [
    { src: '/images/menu/from-the-grill/banku-snapper.jpg', alt: 'Banku with grilled fish topped with sautéed peppers and onions, served with pepper sauces' },
    { src: '/images/menu/from-the-grill/banku-tilapia.jpg', alt: 'Banku with charcoal-grilled tilapia, cucumber, red onion, green pepper and pepper sauces' },
    { src: '/images/menu/from-the-grill/plantain-kontomire-fish.jpg', alt: 'Boiled plantain with kontomire stew, avocado, boiled egg and fish in tomato stew' },
    { src: '/images/menu/from-the-grill/charcoal-tilapia-chicken.jpg', alt: 'Charcoal-grilled tilapia and spiced chicken with kenkey, pepper sauce and slaw' },
    { src: '/images/menu/from-the-grill/palava-fish-yam.jpg', alt: 'Fish in palava stew with boiled eggs and wedges of boiled yam' },
  ],
  ghanaian: [
    { src: '/images/menu/ghanaian/palava-yam.jpg', alt: 'Palava sauce with whole fish, assorted fish and smoked meat, served with boiled yam' },
    { src: '/images/menu/ghanaian/kontomire-yam.jpg', alt: 'Kontomire stew with boiled yam, avocado, eggs, beef and fish' },
    { src: '/images/menu/ghanaian/waakye.jpg', alt: 'Fully loaded waakye with gari, spaghetti, beef stew, boiled egg, coleslaw and fried fish' },
  ],
  'hot-breakfast': [
    { src: '/images/menu/hot-breakfast/avocado-bacon-egg.jpg', alt: 'Avocado toast topped with fried eggs and crispy bacon' },
    { src: '/images/menu/hot-breakfast/eggs-benedict.jpg', alt: 'Eggs Benedict on toasted muffins with smoked salmon and hollandaise sauce' },
    { src: '/images/menu/hot-breakfast/omelette.jpg', alt: 'Folded omelette filled with ham, peppers and cheese, with tomato and avocado' },
    { src: '/images/menu/hot-breakfast/zara-full-breakfast.jpg', alt: 'Zara full breakfast with fried eggs, sausages, bacon, grilled tomato, baked beans, mushrooms and hash browns' },
  ],
  indian: [
    { src: '/images/menu/indian/chicken-biryani.jpg', alt: 'Chicken biryani with fresh coriander, served with raita' },
    { src: '/images/menu/indian/chicken-tikka.jpg', alt: 'Chicken tikka masala served with basmati rice' },
    { src: '/images/menu/indian/spicy-chicken.jpg', alt: 'Spicy chicken curry with green chillies and peppers' },
    { src: '/images/menu/indian/vegetable-korma.jpg', alt: 'Creamy vegetable korma with cashews and raisins' },
  ],
  'light-meals': [
    { src: '/images/menu/light-meals/bacon-avo.jpg', alt: 'Bacon and avocado baguette with cream cheese, tomato, cucumber and rocket' },
    { src: '/images/menu/light-meals/beef-wrap.jpg', alt: 'Beef wraps with peppers, onions, lettuce and creamy sauce' },
    { src: '/images/menu/light-meals/tuna-sandwich.jpg', alt: 'Tuna sandwich on wholemeal bread with cheese and lettuce, served with crisps' },
    { src: '/images/menu/light-meals/chicken-wrap.jpg', alt: 'Chicken wraps with lettuce, peppers and creamy dressing' },
    { src: '/images/menu/light-meals/gourmet-beef-burger.jpg', alt: 'Gourmet beef burger with cheese, bacon and caramelised onions, served with seasoned fries' },
    { src: '/images/menu/light-meals/chicken-club.jpg', alt: 'Toasted chicken club sandwich with lettuce and tomato, served with crisps' },
  ],
  bakery: [
    { src: '/images/menu/bakery/assorted-muffins.jpg', alt: 'Assorted muffins including double chocolate, blueberry, mixed berry and vanilla' },
    { src: '/images/menu/bakery/croissant.jpg', alt: 'Plain and filled croissants with ham, cheese and tomato' },
    { src: '/images/menu/bakery/pancakes.jpg', alt: 'Stack of pancakes with whipped cream and maple syrup' },
    { src: '/images/menu/bakery/scones.jpg', alt: 'Fresh scones served with butter and berry jam' },
    { src: '/images/menu/bakery/waffle-chocolate-banana.jpg', alt: 'Waffle topped with sliced banana and chocolate drizzle' },
    { src: '/images/menu/bakery/waffle-chocolate-walnut.jpg', alt: 'Waffles topped with chocolate sauce, honey and walnuts' },
  ],
  'on-the-grill': [
    { src: '/images/menu/on-the-grill/bbq-chicken-ribs.jpg', alt: 'BBQ chicken and ribs with seasoned fries and salad' },
    { src: '/images/menu/on-the-grill/beef-tenderloin.jpg', alt: 'Grilled beef tenderloin with herb butter, mashed potato and salad' },
    { src: '/images/menu/on-the-grill/grilled-salmon.jpg', alt: 'Grilled salmon fillet with mashed potato and grilled vegetables' },
    { src: '/images/menu/on-the-grill/lamb-chops.jpg', alt: 'Grilled lamb chops with fries, salad and dipping sauce' },
    { src: '/images/menu/on-the-grill/surf-and-turf.jpg', alt: 'Surf and turf with grilled steak, shrimp and seasoned fries' },
  ],
  pastas: [
    { src: '/images/menu/pastas/fettuccine-alfredo-chicken.jpg', alt: 'Fettuccine alfredo with grilled chicken and mushrooms' },
    { src: '/images/menu/pastas/pesto-penne-chicken.jpg', alt: 'Pesto penne with grilled chicken, mushrooms and parmesan' },
    { src: '/images/menu/pastas/mac-and-cheese.jpg', alt: 'Baked mac and cheese with cheddar' },
    { src: '/images/menu/pastas/mushroom-pappardelle.jpg', alt: 'Creamy mushroom pappardelle with parmesan' },
    { src: '/images/menu/pastas/penne-arrabbiata.jpg', alt: 'Penne arrabbiata with olives and parmesan' },
    { src: '/images/menu/pastas/seafood-linguine.jpg', alt: 'Seafood linguine with shrimp, calamari and mussels' },
    { src: '/images/menu/pastas/spaghetti-bolognaise.jpg', alt: 'Spaghetti bolognaise topped with parmesan' },
  ],
};

const promoImages: Record<string, string> = {
  breakfast: '/images/menu/breakfast/promo.jpg',
  appetisers: '/images/menu/appetisers/promo.jpg',
  chinese: '/images/menu/chinese/promo.jpg',
  desserts: '/images/menu/desserts/promo.jpg',
  'extra-dishes': '/images/menu/extra-dishes/promo.jpg',
  'from-the-grill': '/images/menu/from-the-grill/promo.jpg',
  ghanaian: '/images/menu/ghanaian/promo.jpg',
  'hot-breakfast': '/images/menu/hot-breakfast/promo.jpg',
  indian: '/images/menu/indian/promo.jpg',
  'light-meals': '/images/menu/light-meals/promo.jpg',
  bakery: '/images/menu/bakery/promo.jpg',
  'on-the-grill': '/images/menu/on-the-grill/promo.jpg',
  pastas: '/images/menu/pastas/promo.jpg',
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
