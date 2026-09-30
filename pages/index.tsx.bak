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
                        // Fallback placeholder if image isn't in public folder yet
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

      {/* ORDER YOUR WAY & ALL PAYMENTS ACCEPTED */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            
            {/* Order Your Way Box */}
            <div className="md:col-span-8 border-2 border-red-600 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#c02626]">
                  Order Your Way
                </h2>
                <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-6 mt-0.5">
                  FAST • EASY • CONVENIENT
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {/* Website */}
                  <Link
                    href="/menu"
                    className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 flex flex-col items-center text-center justify-center hover:bg-gray-100 transition min-h-[110px]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center mb-2 font-bold text-xs">
                      🌐
                    </div>
                    <span className="text-xs font-bold text-gray-900">Website</span>
                    <span className="text-[10px] text-gray-400 font-medium mt-0.5">Order Online</span>
                  </Link>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/233591599629"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 flex flex-col items-center text-center justify-center hover:bg-gray-100 transition min-h-[110px]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center mb-2 font-bold text-xs">
                      💬
                    </div>
                    <span className="text-xs font-bold text-gray-900">WhatsApp</span>
                    <span className="text-[10px] text-gray-400 font-medium mt-0.5">Chat & Order</span>
                  </a>

                  {/* Jumia Food */}
                  <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 flex items-center justify-center text-center min-h-[110px]">
                    <span className="text-xs font-extrabold text-[#ea580c] leading-tight">
                      Jumia Food
                    </span>
                  </div>

                  {/* Uber Eats */}
                  <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 flex items-center justify-center text-center min-h-[110px]">
                    <span className="text-xs font-extrabold text-black leading-tight">
                      Uber Eats
                    </span>
                  </div>

                  {/* Bolt Food */}
                  <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 flex items-center justify-center text-center min-h-[110px]">
                    <span className="text-xs font-extrabold text-[#10b981] leading-tight">
                      Bolt Food
                    </span>
                  </div>

                  {/* Hubtel */}
                  <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 flex items-center justify-center text-center min-h-[110px]">
                    <span className="text-xs font-extrabold text-[#dc2626] leading-tight">
                      Hubtel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* All Payments Accepted Box */}
            <div className="md:col-span-4 border-2 border-red-600 rounded-2xl p-6 sm:p-8 flex flex-col">
              <h3 className="text-center text-xs font-bold text-[#c02626] uppercase tracking-wider mb-6">
                ALL PAYMENTS ACCEPTED
              </h3>
              <div className="grid grid-cols-3 gap-3 my-auto">
                <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-3 text-center flex flex-col justify-center min-h-[90px]">
                  <span className="block text-xs font-extrabold text-gray-900">MoMo</span>
                  <span className="text-[10px] text-gray-400 font-medium mt-1">Mobile Money</span>
                </div>
                <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-3 text-center flex flex-col justify-center min-h-[90px]">
                  <span className="block text-xs font-extrabold text-gray-900">Cards</span>
                  <span className="text-[10px] text-gray-400 font-medium mt-1">Bank Cards</span>
                </div>
                <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-3 text-center flex flex-col justify-center min-h-[90px]">
                  <span className="block text-xs font-extrabold text-gray-900">Cash</span>
                  <span className="text-[10px] text-gray-400 font-medium mt-1">Pay on Delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
