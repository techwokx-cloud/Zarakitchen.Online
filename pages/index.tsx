import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Category metadata with fallback SVG icons
const CATEGORIES = [
  { name: 'Breakfast', slug: 'Breakfast', icon: '🍳' },
  { name: 'Hot Breakfast', slug: 'Hot Breakfast', icon: '☕' },
  { name: 'On the Bakery', slug: 'On the Bakery', icon: '🥐' },
  { name: 'Appetisers', slug: 'Appetisers', icon: '🥗' },
  { name: 'Salads', slug: 'Salads', icon: '🥬' },
  { name: 'Light Meals', slug: 'Light Meals', icon: '🥪' },
  { name: 'On the Grill', slug: 'On the Grill', icon: '🥩' },
  { name: 'Pastas', slug: 'Pastas', icon: '🍝' },
  { name: 'Chinese Food', slug: 'Chinese Food', icon: '🍜' },
  { name: 'Indian Dishes', slug: 'Indian Dishes', icon: '🍛' },
  { name: 'Rice Dishes', slug: 'Rice Dishes', icon: '🍚' },
  { name: 'Ghanaian Specialities', slug: 'Ghanaian Specialities', icon: '🍲' },
  { name: 'From the Grill', slug: 'From the Grill', icon: '🍗' },
  { name: 'Soups', slug: 'Soups', icon: '🥣' },
  { name: 'Extra Dishes', slug: 'Extra Dishes', icon: '🍟' },
  { name: 'Desserts', slug: 'Desserts', icon: '🍰' },
];

// Sample items displayed when a category is revealed
const CATEGORY_ITEMS: Record<string, Array<{ id: string; name: string; price: string; description: string; image: string }>> = {
  'Ghanaian Specialities': [
    { id: 'g1', name: 'Banku & Tilapia', price: 'GH₵ 120.00', description: 'Grilled tilapia served with hot banku and fresh pepper', image: '/images/hero/Banku-n-Tilapia.png' },
    { id: 'g2', name: 'Fufu & Ebunubunu Soup', price: 'GH₵ 110.00', description: 'Traditional green soup with fresh snail and goat meat', image: '/images/hero/Fufu-Ebunubunu-Soup.png' },
    { id: 'g3', name: 'Fully Loaded Waakye', price: 'GH₵ 95.00', description: 'Served with wele, egg, fish, beef, plantain & gari', image: '/images/hero/Fully-Loaded%20Waatye.png' },
    { id: 'g4', name: 'Red Red (Gari & Beans)', price: 'GH₵ 65.00', description: 'Rich fried plantains with seasoned beans stew', image: '/images/hero/Red-%20Red.png' },
  ],
  'Rice Dishes': [
    { id: 'r1', name: 'Special Fried Rice', price: 'GH₵ 80.00', description: 'Wok-fried rice mixed with veggies, eggs and chicken bits', image: '/images/hero/Fried-Rice.png' },
    { id: 'r2', name: 'Rice Balls (Omo Tuo)', price: 'GH₵ 90.00', description: 'Soft rice balls served with rich groundnut or palm nut soup', image: '/images/hero/Rice-Balls.png' },
  ],
};

export default function Home() {
  const heroImages = [
    '/images/hero/Banku-n-Tilapia.png',
    '/images/hero/Burger.png',
    '/images/hero/Fried-Rice.png',
    '/images/hero/Fufu-Ebunubunu-Soup.png',
    '/images/hero/Fufu-Light-Soup.png',
    '/images/hero/Fully-Loaded Waatye.png',
    '/images/hero/Red- Red.png',
    '/images/hero/Rice-Balls.png',
  ];

  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null); // Collapse if clicking the same open category
    } else {
      setActiveCategory(categoryName); // Expand menu for selected category
    }
  };

  const handleImageError = (categoryName: string) => {
    setImageErrorMap((prev) => ({ ...prev, [categoryName]: true }));
  };

  const activeItems = activeCategory
    ? CATEGORY_ITEMS[activeCategory] || [
        { id: '1', name: `${activeCategory} Special 1`, price: 'GH₵ 75.00', description: 'Freshly prepared delicious meal made with love.', image: '/images/hero/Fried-Rice.png' },
        { id: '2', name: `${activeCategory} Special 2`, price: 'GH₵ 90.00', description: 'Traditional recipe crafted with premium ingredients.', image: '/images/hero/Burger.png' },
        { id: '3', name: `${activeCategory} Combo`, price: 'GH₵ 110.00', description: 'Chef special dish served hot and satisfying.', image: '/images/hero/Banku-n-Tilapia.png' },
        { id: '4', name: `${activeCategory} Deluxe`, price: 'GH₵ 130.00', description: 'Full portion served with custom toppings and sauces.', image: '/images/hero/Fully-Loaded%20Waatye.png' },
      ]
    : [];

  return (
    <>
      <Head>
        <title>Zara Kitchen - Authentic Ghanaian Cuisine</title>
        <meta name="description" content="Authentic Ghanaian & Continental Cuisine made with love." />
      </Head>

      {/* HERO SECTION */}
      <section className="relative w-full bg-[#FAF7F2] min-h-[480px] lg:min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Zara Kitchen Dish ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-right transition-opacity duration-1000 ease-in-out ${
                index === currentHeroIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/85 to-transparent w-full md:w-1/2 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full py-12">
          <div className="max-w-xl">
            <p className="text-gray-800 font-semibold text-base sm:text-lg mb-1 tracking-wide">
              Authentic Ghanaian & Continental Cuisine
            </p>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#c02626] italic font-serif leading-none tracking-tight">
              Zara Kitchen
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-900 font-bold mt-1 mb-2">
              Made with Love <span className="text-[#c02626]">♡</span>
            </p>
            <p className="text-gray-700 text-lg sm:text-xl font-medium tracking-wide">
              Fresh. Tasty. Satisfying.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY BOWLS WITH FALLBACK ICON FIX */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-4">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.name;
              const hasImgError = imageErrorMap[cat.name];
              const imagePath = `/images/categories/${cat.name.toLowerCase().replace(/ /g, '-')}.png`;

              return (
                <div
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`flex flex-col items-center group cursor-pointer p-2 rounded-2xl transition-all duration-200 ${
                    isSelected ? 'bg-red-50/60 ring-2 ring-red-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {!hasImgError ? (
                      <img
                        src={imagePath}
                        alt={cat.name}
                        className="w-full h-full object-contain drop-shadow-sm"
                        onError={() => handleImageError(cat.name)}
                      />
                    ) : (
                      /* FALLBACK CONTAINER WHEN IMAGE IS MISSING */
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-amber-100 to-red-100 border border-amber-200 rounded-full flex items-center justify-center text-3xl shadow-sm">
                        {cat.icon}
                      </div>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-xs sm:text-sm font-bold text-center transition ${
                      isSelected ? 'text-[#c02626]' : 'text-gray-900 group-hover:text-[#c02626]'
                    }`}
                  >
                    {cat.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLAPSIBLE MENU REVEAL SECTION */}
      {activeCategory && (
        <section className="bg-stone-50 border-y border-stone-200 py-8 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-black text-gray-900">{activeCategory}</h3>
                <p className="text-xs text-stone-500 font-medium mt-0.5">Click any food item to order directly</p>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  href={`/menu?category=${encodeURIComponent(activeCategory)}`}
                  className="text-xs font-bold text-[#c02626] hover:underline"
                >
                  View Full Menu Page →
                </Link>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-xs font-bold text-stone-500 hover:text-black uppercase tracking-wider bg-white border border-stone-200 px-3 py-1.5 rounded-full"
                >
                  ▲ Close Preview
                </button>
              </div>
            </div>

            {/* 4 COLUMNS DISH GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {activeItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div className="relative w-full h-44 bg-stone-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Zara+Kitchen';
                      }}
                    />
                    <div className="absolute bottom-2.5 right-2.5 bg-[#c02626] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.name}</h4>
                      <p className="text-stone-500 text-xs line-clamp-2 mb-3">{item.description}</p>
                    </div>
                    <button className="w-full bg-[#c02626] hover:bg-[#a02020] text-white text-xs font-bold py-2 rounded-xl transition">
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ORDER YOUR WAY IMAGE SECTION WITH SAFE FALLBACK */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full flex justify-center">
            <img
              src="/images/order-your-way.png"
              alt="Order Your Way & All Payments Accepted"
              className="w-full h-auto max-w-full object-contain"
              onError={(e) => {
                // If static image file path isn't present, show fallback banner without breaking layout
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://via.placeholder.com/1200x120/fff0f0/c02626?text=Order+Your+Way+%E2%80%A2+Website+%E2%80%A2+WhatsApp+%E2%80%A2+Jumia+%E2%80%A2+UberEats+%E2%80%A2+BoltFood';
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
