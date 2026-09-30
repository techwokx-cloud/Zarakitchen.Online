import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  // Hero Carousel Images
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Categories with dish image paths
  const categories = [
    { name: 'Breakfast', image: '/images/categories/breakfast.png' },
    { name: 'Hot Breakfast', image: '/images/categories/hot-breakfast.png' },
    { name: 'On the Bakery', image: '/images/categories/bakery.png' },
    { name: 'Appetisers', image: '/images/categories/appetisers.png' },
    { name: 'Salads', image: '/images/categories/salads.png' },
    { name: 'Light Meals', image: '/images/categories/light-meals.png' },
    { name: 'On the Grill', image: '/images/categories/on-the-grill.png' },
    { name: 'Pastas', image: '/images/categories/pastas.png' },
    { name: 'Chinese Food', image: '/images/categories/chinese-food.png' },
    { name: 'Indian Dishes', image: '/images/categories/indian-dishes.png' },
    { name: 'Rice Dishes', image: '/images/categories/rice-dishes.png' },
    { name: 'Ghanaian Specialities', image: '/images/categories/ghanaian-specialities.png' },
    { name: 'From the Grill', image: '/images/categories/from-the-grill.png' },
    { name: 'Soups', image: '/images/categories/soups.png' },
    { name: 'Extra Dishes', image: '/images/categories/extra-dishes.png' },
    { name: 'Desserts', image: '/images/categories/desserts.png' },
  ];

  return (
    <>
      <Head>
        <title>Zara Kitchen - Authentic Ghanaian Cuisine</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#d32f2f] italic font-serif leading-none tracking-tight">
              Zara Kitchen
            </h1>
            <p
              className="text-3xl sm:text-4xl text-gray-900 font-bold mt-1 mb-2"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Made with Love <span className="text-[#d32f2f]">♡</span>
            </p>
            <p className="text-gray-700 text-lg sm:text-xl font-medium tracking-wide">
              Fresh. Tasty. Satisfying.
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-20 flex space-x-1.5">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentHeroIdx ? 'bg-[#d32f2f] w-6' : 'bg-stone-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-4">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/menu?category=${encodeURIComponent(cat.name)}`}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain drop-shadow-sm"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/100?text=' + encodeURIComponent(cat.name);
                      }}
                    />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-bold text-center text-gray-900 group-hover:text-[#d32f2f] transition">
                    {cat.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER YOUR WAY - IMAGE REPLACEMENT */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full flex justify-center">
            <img
              src="/images/order-your-way.png"
              alt="Order Your Way & All Payments Accepted"
              className="w-full h-auto max-w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
