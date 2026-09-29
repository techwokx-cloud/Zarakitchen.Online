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

  // Auto-slide hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Categories mapped to exact image files
  const categories = [
    { name: 'Breakfast', folder: 'breakfast', image: 'fruit-salad.png' },
    { name: 'Hot Breakfast', folder: 'hot-breakfast', image: 'Avocado-Bacon-Egg.png' },
    { name: 'On the Bakery', folder: 'bakery', image: 'Croissant.png' },
    { name: 'Appetisers', folder: 'appetisers', image: 'Chicken Wings.png' },
    { name: 'Salads', folder: 'salads', image: 'Ceaser Salad.png' },
    { name: 'Light Meals', folder: 'light-meals', image: 'Chicken Wrap.png' },
    { name: 'On the Grill', folder: 'on-the-grill', image: 'BBQ Chicken.png' },
    { name: 'Pastas', folder: 'pastas', image: 'Spagetti Bolognaise.png' },
    { name: 'Chinese Food', folder: 'chinese', image: 'Chinese Beef.png' },
    { name: 'Indian Dishes', folder: 'indian', image: 'Chicken Tikka.png' },
    { name: 'Rice Dishes', folder: 'rice-dishes', image: 'Beef Fried Rice.png' },
    { name: 'Ghanaian Specialities', folder: 'ghanaian', image: 'Fuly loaded waakye.png' },
    { name: 'From the Grill', folder: 'from-the-grill', image: 'Banku Grilled Tilapia.png' },
    { name: 'Soups', folder: 'soups', image: 'Red Red.png' },
    { name: 'Extra Dishes', folder: 'extra-dishes', image: 'jollof.jpeg' },
    { name: 'Desserts', folder: 'desserts', image: 'Fruit Salad.png' },
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
        {/* Background Slideshow */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Zara Kitchen Dish ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-right transition-opacity duration-1000 ease-in-out ${
                index === currentHeroIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/85 to-transparent w-full md:w-1/2 z-10" />
        </div>

        {/* Hero Text */}
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

        {/* Dots */}
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

      {/* CATEGORIES GRID (No Circular Borders / Unique Images) */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((cat, idx) => {
              const imagePath = `/images/categories/${cat.folder}/${cat.image}`;
              return (
                <Link key={idx} href={`/menu?category=${encodeURIComponent(cat.name)}`}>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
                      <img
                        src={imagePath}
                        alt={cat.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm font-bold text-center text-gray-800 group-hover:text-[#d32f2f] transition">
                      {cat.name}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORDER OPTIONS & PAYMENTS */}
      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 border-2 border-[#d32f2f] rounded-2xl p-5 sm:p-6">
              <h2 className="text-2xl font-extrabold text-[#d32f2f]">Order Your Way</h2>
              <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-5">
                Fast • Easy • Convenient
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                <Link
                  href="/menu"
                  className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center hover:border-[#d32f2f] hover:bg-red-50/30 transition"
                >
                  <span className="text-2xl mb-1">🌐</span>
                  <span className="text-xs font-bold text-gray-800">Website</span>
                  <span className="text-[10px] text-gray-500">Order Online</span>
                </Link>

                <a
                  href="https://wa.me/233591599629"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center hover:border-green-500 hover:bg-green-50/30 transition"
                >
                  <span className="text-2xl mb-1">💬</span>
                  <span className="text-xs font-bold text-gray-800">WhatsApp</span>
                  <span className="text-[10px] text-gray-500">Chat & Order</span>
                </a>

                <div className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center justify-center">
                  <span className="text-xs font-black text-orange-600 tracking-tight">
                    Jumia Food
                  </span>
                </div>

                <div className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center justify-center">
                  <span className="text-xs font-black text-black tracking-tight">Uber Eats</span>
                </div>

                <div className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center justify-center">
                  <span className="text-xs font-black text-emerald-500 tracking-tight">
                    Bolt Food
                  </span>
                </div>

                <div className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center justify-center">
                  <span className="text-xs font-black text-red-600 tracking-tight">Hubtel</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 border-2 border-[#d32f2f] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-center text-xs font-bold text-[#d32f2f] uppercase tracking-wider mb-4">
                  All Payments Accepted
                </h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-800">MoMo</span>
                    <span className="text-[10px] text-gray-500">Mobile Money</span>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-800">Cards</span>
                    <span className="text-[10px] text-gray-500">Bank Cards</span>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-800">Cash</span>
                    <span className="text-[10px] text-gray-500">Pay on Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
