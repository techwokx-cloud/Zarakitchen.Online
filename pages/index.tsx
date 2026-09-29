import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  LuGlobe, 
  LuMessageCircle, 
  LuUtensils, 
  LuCoffee, 
  LuSandwich, 
  LuBeef, 
  LuSalad, 
  LuFlame, 
  LuSoup, 
  LuPizza, 
  LuIceCream 
} from 'react-icons/lu';

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

  // Categories list with Lucide Icons (prevents missing image 404s)
  const categories = [
    { name: 'Breakfast', icon: LuCoffee },
    { name: 'Hot Breakfast', icon: LuCoffee },
    { name: 'On the Bakery', icon: LuSandwich },
    { name: 'Appetisers', icon: LuUtensils },
    { name: 'Salads', icon: LuSalad },
    { name: 'Light Meals', icon: LuSandwich },
    { name: 'On the Grill', icon: LuFlame },
    { name: 'Pastas', icon: LuPizza },
    { name: 'Chinese Food', icon: LuUtensils },
    { name: 'Indian Dishes', icon: LuBeef },
    { name: 'Rice Dishes', icon: LuUtensils },
    { name: 'Ghanaian Specialities', icon: LuSoup },
    { name: 'From the Grill', icon: LuFlame },
    { name: 'Soups', icon: LuSoup },
    { name: 'Extra Dishes', icon: LuUtensils },
    { name: 'Desserts', icon: LuIceCream },
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
            {categories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <Link key={idx} href={`/menu?category=${encodeURIComponent(cat.name)}`}>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 text-gray-700 group-hover:text-[#d32f2f]">
                      <IconComponent className="w-10 h-10 stroke-[1.5]" />
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
                    <LuGlobe className="w-8 h-8 text-[#38bdf8] mb-2" />
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
                    <LuMessageCircle className="w-8 h-8 text-[#a855f7] mb-2" />
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
