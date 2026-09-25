// Auto-generated menu data for Zara Kitchen
// 84 items across 16 categories

export interface MenuItem {
  id: string
  name: string
  image: string
  category: string
}

export interface MenuCategory {
  id: string
  name: string
  displayName: string
  emoji: string
  items: MenuItem[]
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Hot Breakfast",
    displayName: "Hot Breakfast",
    emoji: "🍳",
    items: [
      { id: "hb-1", name: "Avocado Bacon Egg", image: "/menu-images/hot-breakfast/avocado-bacon-egg.jpg", category: "breakfast" },
      { id: "hb-2", name: "Bacon Benedict", image: "/menu-images/hot-breakfast/bacon-benedict.jpg", category: "breakfast" },
      { id: "hb-3", name: "Omelette", image: "/menu-images/hot-breakfast/omelette.jpg", category: "breakfast" },
      { id: "hb-4", name: "Zara Full Breakfast", image: "/menu-images/hot-breakfast/zara-full-breakfast.jpg", category: "breakfast" },
    ]
  },
  {
    id: "healthy-breakfast",
    name: "Healthy Breakfast",
    displayName: "Healthy Breakfast",
    emoji: "🥗",
    items: [
      { id: "hb-1", name: "Cereal Bowl", image: "/menu-images/healthy-breakfast/cereal-bowl.jpg", category: "healthy-breakfast" },
      { id: "hb-2", name: "Fruit Salad", image: "/menu-images/healthy-breakfast/fruit-salad.jpg", category: "healthy-breakfast" },
      { id: "hb-3", name: "Granola Bowl", image: "/menu-images/healthy-breakfast/granola-bowl.jpg", category: "healthy-breakfast" },
      { id: "hb-4", name: "Full Breakfast", image: "/menu-images/healthy-breakfast/full-breakfast.jpg", category: "healthy-breakfast" },
    ]
  },
  {
    id: "bakery",
    name: "On the Bakery",
    displayName: "On the Bakery",
    emoji: "🥐",
    items: [
      { id: "bk-1", name: "Assorted Muffins", image: "/menu-images/bakery/assorted-muffins.jpg", category: "bakery" },
      { id: "bk-2", name: "Croissant", image: "/menu-images/bakery/croissant.jpg", category: "bakery" },
      { id: "bk-3", name: "Pan Cake", image: "/menu-images/bakery/pan-cake.jpg", category: "bakery" },
      { id: "bk-4", name: "Scones", image: "/menu-images/bakery/scones.jpg", category: "bakery" },
      { id: "bk-5", name: "Waffles", image: "/menu-images/bakery/waffles.jpg", category: "bakery" },
    ]
  },
  {
    id: "appetizers",
    name: "Appetisers",
    displayName: "Appetisers",
    emoji: "🍤",
    items: [
      { id: "ap-1", name: "Chicken Wings", image: "/menu-images/appetizers/chicken-wings.jpg", category: "appetizers" },
      { id: "ap-2", name: "Fried Calamari", image: "/menu-images/appetizers/fried-calamari.jpg", category: "appetizers" },
      { id: "ap-3", name: "Guinea Fowl", image: "/menu-images/appetizers/guinea-fowl.jpg", category: "appetizers" },
      { id: "ap-4", name: "Kelewele", image: "/menu-images/appetizers/kelewele.jpg", category: "appetizers" },
      { id: "ap-5", name: "Prawns", image: "/menu-images/appetizers/prawns.jpg", category: "appetizers" },
      { id: "ap-6", name: "Spicy Pork Ribs", image: "/menu-images/appetizers/spicy-pork-ribs.jpg", category: "appetizers" },
      { id: "ap-7", name: "Vegetable Spring Roll", image: "/menu-images/appetizers/vegetable-spring-roll.jpg", category: "appetizers" },
    ]
  },
  {
    id: "light-meals",
    name: "Light Meals",
    displayName: "Light Meals",
    emoji: "🥙",
    items: [
      { id: "lm-1", name: "Bacon Avo", image: "/menu-images/light-meals/bacon-avo.jpg", category: "light-meals" },
      { id: "lm-2", name: "Beef Wrap", image: "/menu-images/light-meals/beef-wrap.jpg", category: "light-meals" },
      { id: "lm-3", name: "Boss Lady", image: "/menu-images/light-meals/boss-lady.jpg", category: "light-meals" },
      { id: "lm-4", name: "Chicken Wrap", image: "/menu-images/light-meals/chicken-wrap.jpg", category: "light-meals" },
      { id: "lm-5", name: "Gourmet Beef", image: "/menu-images/light-meals/gourmet-beef.jpg", category: "light-meals" },
      { id: "lm-6", name: "Miss Tuna", image: "/menu-images/light-meals/miss-tuna.jpg", category: "light-meals" },
      { id: "lm-7", name: "Zara Chic", image: "/menu-images/light-meals/zara-chic.jpg", category: "light-meals" },
    ]
  },
  {
    id: "ghanaian",
    name: "Ghanaian Specialities",
    displayName: "Ghanaian Specialities",
    emoji: "🍲",
    items: [
      { id: "gh-1", name: "Ampase Palava Sauce", image: "/menu-images/ghanaian/ampase-palava-sauce.jpg", category: "ghanaian" },
      { id: "gh-2", name: "Asakna Kotomire", image: "/menu-images/ghanaian/asakna-kotomire.jpg", category: "ghanaian" },
      { id: "gh-3", name: "Fully Loaded Waakye", image: "/menu-images/ghanaian/fully-loaded-waakye.jpg", category: "ghanaian" },
    ]
  },
  {
    id: "soups",
    name: "Soups",
    displayName: "Soups",
    emoji: "🍛",
    items: [
      { id: "sp-1", name: "Fufu Light Soup", image: "/menu-images/soups/fufu-light-soup.jpg", category: "soups" },
      { id: "sp-2", name: "Groundnut Soup with Rice Balls", image: "/menu-images/soups/groundnut-soup-rice-balls.jpg", category: "soups" },
      { id: "sp-3", name: "Red Red", image: "/menu-images/soups/red-red.jpg", category: "soups" },
    ]
  },
  {
    id: "extra-dishes",
    name: "Extra Dishes",
    displayName: "Extra Dishes",
    emoji: "🍚",
    items: [
      { id: "ed-1", name: "Eba Akple Banku", image: "/menu-images/extra-dishes/eba-akple-banku.jpg", category: "extra-dishes" },
      { id: "ed-2", name: "Extra Ga or Fante Kenkey", image: "/menu-images/extra-dishes/extra-kenkey.jpg", category: "extra-dishes" },
      { id: "ed-3", name: "Fufu Only", image: "/menu-images/extra-dishes/fufu-only.jpg", category: "extra-dishes" },
      { id: "ed-4", name: "Ga or Fante Kenkey", image: "/menu-images/extra-dishes/kenkey.jpg", category: "extra-dishes" },
      { id: "ed-5", name: "Goat 250g", image: "/menu-images/extra-dishes/goat-250g.jpg", category: "extra-dishes" },
      { id: "ed-6", name: "Jollof Rice", image: "/menu-images/extra-dishes/jollof-rice.jpg", category: "extra-dishes" },
      { id: "ed-7", name: "Steamed Rice", image: "/menu-images/extra-dishes/steamed-rice.jpg", category: "extra-dishes" },
      { id: "ed-8", name: "Yam Chips", image: "/menu-images/extra-dishes/yam-chips.jpg", category: "extra-dishes" },
    ]
  },
  {
    id: "rice-dishes",
    name: "Rice Dishes",
    displayName: "Rice Dishes",
    emoji: "🍛",
    items: [
      { id: "rd-1", name: "Beef Fried Rice", image: "/menu-images/rice-dishes/beef-fried-rice.jpg", category: "rice-dishes" },
      { id: "rd-2", name: "Chicken Fried Rice", image: "/menu-images/rice-dishes/chicken-fried-rice.jpg", category: "rice-dishes" },
      { id: "rd-3", name: "Egg Fried Rice", image: "/menu-images/rice-dishes/egg-fried-rice.jpg", category: "rice-dishes" },
      { id: "rd-4", name: "Zara Special", image: "/menu-images/rice-dishes/zara-special.jpg", category: "rice-dishes" },
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    displayName: "Pasta",
    emoji: "🍝",
    items: [
      { id: "ps-1", name: "Fettucini Polo", image: "/menu-images/pasta/fettucini-polo.jpg", category: "pasta" },
      { id: "ps-2", name: "Grilled Creamy", image: "/menu-images/pasta/grilled-creamy.jpg", category: "pasta" },
      { id: "ps-3", name: "Mac Cheese", image: "/menu-images/pasta/mac-cheese.jpg", category: "pasta" },
      { id: "ps-4", name: "Mushroom Pasta", image: "/menu-images/pasta/mushroom-pasta.jpg", category: "pasta" },
      { id: "ps-5", name: "Penne Arabbiata", image: "/menu-images/pasta/penne-arabbiata.jpg", category: "pasta" },
      { id: "ps-6", name: "Sea Food Pasta", image: "/menu-images/pasta/seafood-pasta.jpg", category: "pasta" },
      { id: "ps-7", name: "Spaghetti Bolognaise", image: "/menu-images/pasta/spaghetti-bolognaise.jpg", category: "pasta" },
    ]
  },
  {
    id: "salads",
    name: "Salads",
    displayName: "Salads",
    emoji: "🥗",
    items: [
      { id: "sl-1", name: "Asian Salad", image: "/menu-images/salads/asian-salad.jpg", category: "salads" },
      { id: "sl-2", name: "Avocado Salad", image: "/menu-images/salads/avocado-salad.jpg", category: "salads" },
      { id: "sl-3", name: "Caesar Salad", image: "/menu-images/salads/caesar-salad.jpg", category: "salads" },
      { id: "sl-4", name: "Green Salad", image: "/menu-images/salads/green-salad.jpg", category: "salads" },
    ]
  },
  {
    id: "chinese",
    name: "Chinese Food",
    displayName: "Chinese Food",
    emoji: "🥢",
    items: [
      { id: "ch-1", name: "Beef Chop", image: "/menu-images/chinese/beef-chop.jpg", category: "chinese" },
      { id: "ch-2", name: "Chinese Beef", image: "/menu-images/chinese/chinese-beef.jpg", category: "chinese" },
      { id: "ch-3", name: "Chinese Chicken", image: "/menu-images/chinese/chinese-chicken.jpg", category: "chinese" },
      { id: "ch-4", name: "Chinese Pork Sauce", image: "/menu-images/chinese/chinese-pork-sauce.jpg", category: "chinese" },
      { id: "ch-5", name: "Fish Chili Sauce", image: "/menu-images/chinese/fish-chili-sauce.jpg", category: "chinese" },
      { id: "ch-6", name: "Peking Chicken Sauce", image: "/menu-images/chinese/peking-chicken-sauce.jpg", category: "chinese" },
      { id: "ch-7", name: "Sweet & Sour Fish", image: "/menu-images/chinese/sweet-sour-fish.jpg", category: "chinese" },
    ]
  },
  {
    id: "from-grill",
    name: "From The Grill",
    displayName: "From The Grill",
    emoji: "🔥",
    items: [
      { id: "fg-1", name: "Banku Grilled Snapper", image: "/menu-images/from-grill/banku-grilled-snapper.jpg", category: "from-grill" },
      { id: "fg-2", name: "Banku Grilled Cassava Fish", image: "/menu-images/from-grill/banku-grilled-cassava-fish.jpg", category: "from-grill" },
      { id: "fg-3", name: "Banku Grilled Tilapia", image: "/menu-images/from-grill/banku-grilled-tilapia.jpg", category: "from-grill" },
      { id: "fg-4", name: "Charcoal Grilled Tilapia", image: "/menu-images/from-grill/charcoal-grilled-tilapia.jpg", category: "from-grill" },
    ]
  },
  {
    id: "on-grill",
    name: "On The Grill",
    displayName: "On The Grill",
    emoji: "🍖",
    items: [
      { id: "og-1", name: "BBQ Chicken", image: "/menu-images/on-grill/bbq-chicken.jpg", category: "on-grill" },
      { id: "og-2", name: "Beef Tenderloin", image: "/menu-images/on-grill/beef-tenderloin.jpg", category: "on-grill" },
      { id: "og-3", name: "Grilled Salmon", image: "/menu-images/on-grill/grilled-salmon.jpg", category: "on-grill" },
      { id: "og-4", name: "Lamb Chop", image: "/menu-images/on-grill/lamb-chop.jpg", category: "on-grill" },
      { id: "og-5", name: "Surf & Turf", image: "/menu-images/on-grill/surf-turf.jpg", category: "on-grill" },
    ]
  },
  {
    id: "indian",
    name: "Indian Dishes",
    displayName: "Indian Dishes",
    emoji: "🍛",
    items: [
      { id: "in-1", name: "Chicken Biryani", image: "/menu-images/indian/chicken-biryani.jpg", category: "indian" },
      { id: "in-2", name: "Chicken Tikka", image: "/menu-images/indian/chicken-tikka.jpg", category: "indian" },
      { id: "in-3", name: "Spicy Chicken", image: "/menu-images/indian/spicy-chicken.jpg", category: "indian" },
      { id: "in-4", name: "Vegetable Korma", image: "/menu-images/indian/vegetable-korma.jpg", category: "indian" },
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    displayName: "Desserts",
    emoji: "🍰",
    items: [
      { id: "ds-1", name: "Chef of the Day", image: "/menu-images/desserts/chef-of-the-day.jpg", category: "desserts" },
      { id: "ds-2", name: "Chocolate Pudding", image: "/menu-images/desserts/chocolate-pudding.jpg", category: "desserts" },
      { id: "ds-3", name: "Fruit Salad", image: "/menu-images/desserts/fruit-salad.jpg", category: "desserts" },
      { id: "ds-4", name: "Vanilla Ice Cream", image: "/menu-images/desserts/vanilla-ice-cream.jpg", category: "desserts" },
    ]
  },
]

export const DEFAULT_CATEGORY = MENU_CATEGORIES[0].id

export function getCategoryById(id: string): MenuCategory | undefined {
  return MENU_CATEGORIES.find(cat => cat.id === id)
}

export function getItemsByCategory(categoryId: string): MenuItem[] {
  const category = getCategoryById(categoryId)
  return category?.items || []
}
