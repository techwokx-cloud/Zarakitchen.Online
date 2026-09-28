// Single source of truth for contact details, navigation and home-page content.

export const site = {
  name: 'Zara Kitchen',
  tagline: 'Good Food, Good Mood',
  description:
    'Authentic Ghanaian & Continental cuisine, made with love. Fresh, tasty and satisfying meals — order online, on WhatsApp, or through your favourite delivery app.',
  url: 'https://zarakitchen.online',
  email: 'orders@zarakitchen.online',
  whatsapp: {
    display: '059 159 9629',
    href: 'https://wa.me/233591599629?text=Hello%20Zara%20Kitchen%2C%20I%27d%20like%20to%20place%20an%20order.',
  },
  phones: [
    { display: '059 236 1289', href: 'tel:+233592361289' },
    { display: '059 159 9629', href: 'tel:+233591599629' },
  ],
  hours: [
    { days: 'Mon – Fri', time: '8AM – 10PM' },
    { days: 'Sat – Sun', time: '8AM – 11PM' },
  ],
  // Fill in the real profile URLs — icons without a URL are not rendered as links.
  socials: [
    { id: 'facebook', label: 'Facebook', href: '' },
    { id: 'instagram', label: 'Instagram', href: '' },
    { id: 'tiktok', label: 'TikTok', href: '' },
    { id: 'youtube', label: 'YouTube', href: '' },
    { id: 'x', label: 'X', href: '' },
  ],
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

// `menuCategory` must match a value in menuCategories (data/menu-data.ts) so the
// tile opens the right filter on /menu. Swap `image` for real photos any time.
export const categories = [
  { name: 'Breakfast', menuCategory: 'Healthy Breakfast', image: '/images/categories/breakfast.png' },
  { name: 'Hot Breakfast', menuCategory: 'Hot Breakfast', image: '/images/categories/hot-breakfast.png' },
  { name: 'On the Bakery', menuCategory: 'Bakery', image: '/images/categories/bakery.png' },
  { name: 'Appetisers', menuCategory: 'Appetizers', image: '/images/categories/appetisers.png' },
  { name: 'Salads', menuCategory: 'Salads', image: '/images/categories/salads.png' },
  { name: 'Light Meals', menuCategory: 'Light Meals', image: '/images/categories/light-meals.png' },
  { name: 'On the Grill', menuCategory: 'On Grill', image: '/images/categories/on-the-grill.png' },
  { name: 'Pastas', menuCategory: 'Pasta', image: '/images/categories/pastas.png' },
  { name: 'Chinese Food', menuCategory: 'Chinese', image: '/images/categories/chinese.png' },
  { name: 'Indian Dishes', menuCategory: 'Indian', image: '/images/categories/indian.png' },
  { name: 'Rice Dishes', menuCategory: 'Rice Dishes', image: '/images/categories/rice-dishes.png' },
  { name: 'Ghanaian Specialities', menuCategory: 'Ghanaian', image: '/images/categories/ghanaian.png' },
  { name: 'From the Grill', menuCategory: 'From Grill', image: '/images/categories/from-the-grill.png' },
  { name: 'Soups', menuCategory: 'Soups', image: '/images/categories/soups.png' },
  { name: 'Extra Dishes', menuCategory: 'Extra Dishes', image: '/images/categories/extra-dishes.png' },
  { name: 'Desserts', menuCategory: 'Desserts', image: '/images/categories/desserts.png' },
];

// Empty href = not linked yet (rendered as a plain tile). Add your store URLs here.
export const orderChannels = [
  { id: 'website', label: ['Website', 'Order Online'], href: '/menu' },
  { id: 'whatsapp', label: ['WhatsApp', 'Chat & Order'], href: site.whatsapp.href },
  { id: 'jumia', label: ['Jumia Food'], href: '' },
  { id: 'ubereats', label: ['Uber Eats'], href: '' },
  { id: 'bolt', label: ['Bolt Food'], href: '' },
  { id: 'hubtel', label: ['Hubtel'], href: '' },
] as const;

export const paymentMethods = [
  { id: 'momo', label: 'Mobile Money (MoMo)' },
  { id: 'card', label: 'Bank Cards' },
  { id: 'cod', label: 'Pay on Delivery' },
] as const;
