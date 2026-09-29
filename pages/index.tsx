import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  // Hero Carousel Images from /public/images/hero
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

  // Auto-slide hero images every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Categories mapped to exact repository folders inside /public/images/categories/
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* TOP NAVIGATION */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-extrabold text-[#d32f2f] italic tracking-wider font-serif">Zara Kitchen</span>
          </div>
          <nav className="hidden md:flex space-x-8 font-semibold text-gray-700 text-sm">
            <Link href="/" className="text-[#d32f2f] border-b-2 border-[#d32f2f] pb-1">Home</Link>
            <Link href="/menu" className="hover:text-[#d32f2f] transition">Menu</Link>
            <Link href="/about" className="hover:text-[#d32f2f] transition">About</Link>
            <Link href="/gallery" className="hover:text-[#d32f2f] transition">Gallery</Link>
            <Link href="/contact" className="hover:text-[#d32f2f] transition">Contact</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/menu" className="bg-[#d32f2f] text-white px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-md hover:bg-red-700 transition">
              🛒 Order Online
            </Link>
            <a href="https://wa.me/233591599629" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-md hover:bg-green-600 transition">
              💬 WhatsApp Order
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH IMAGE SLIDESHOW */}
      <section className="bg-[#FAF7F2] py-8 lg:py-12 overflow-hidden border-b border-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-8 items-center">
          
          {/* Hero Branding */}
          <div className="md:col-span-5 z-10">
            <p className="text-gray-800 font-semibold text-base md:text-lg mb-1 tracking-wide">
              Authentic Ghanaian & Continental Cuisine
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#d32f2f] italic font-serif leading-none tracking-tight">
              Zara Kitchen
            </h1>
            <p className="text-3xl md:text-4xl text-gray-900 font-bold mt-1 mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
              Made with Love <span className="text-[#d32f2f]">♡</span>
            </p>
            <p className="text-gray-700 text-lg md:text-xl font-medium tracking-wide">
              Fresh. Tasty. Satisfying.
            </p>
          </div>

          {/* Hero Slideshow Container */}
          <div className="md:col-span-7 relative flex justify-end">
            <div className="relative w-full max-w-2xl h-[320px] sm:h-[400px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-stone-900">
              {heroImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Zara Kitchen Dish ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentHeroIdx ? 'opacity-100 scale-105 transition-transform duration-[4000ms]' : 'opacity-0 scale-100'
                  }`}
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero/hero.jpg';
                  }}
                />
              ))}

              {/* Floating Red Badge Overlay */}
              <div className="absolute bottom-4 right-4 bg-[#d32f2f] text-white p-4 px-6 rounded-2xl shadow-2xl transform -rotate-3 text-center border-2 border-white/20">
                <p className="text-2xl font-bold leading-tight" style={{ fontFamily: 'Caveat, cursive' }}>
                  Delicious<br />
                  Meals<br />
                  <span className="text-lg">Made for You ♡</span>
                </p>
              </div>

              {/* Slideshow Dots Indicator */}
              <div className="absolute bottom-4 left-4 flex space-x-1.5 z-20">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHeroIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentHeroIdx ? 'bg-[#d32f2f] w-6' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat, idx) => {
              const imagePath = `/images/categories/${cat.folder}/${cat.image}`;
              return (
                <Link key={idx} href={`/menu?category=${encodeURIComponent(cat.name)}`}>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-stone-100 p-1 shadow-sm border border-stone-200/60 group-hover:shadow-md group-hover:scale-105 transition-all duration-200 overflow-hidden flex items-center justify-center">
                      <img
                        src={imagePath}
                        alt={cat.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.src = '/images/hero/hero.jpg';
                        }}
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

      {/* ORDER YOUR WAY & PAYMENT SECTION */}
      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Platforms Card */}
            <div className="md:col-span-8 border-2 border-[#d32f2f] rounded-2xl p-5 sm:p-6">
              <h2 className="text-2xl font-extrabold text-[#d32f2f]">Order Your Way</h2>
              <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-5">
                Fast • Easy • Convenient
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                <Link href="/menu" className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center hover:border-[#d32f2f] hover:bg-red-50/30 transition">
                  <span className="text-2xl mb-1">🌐</span>
                  <span className="text-xs font-bold text-gray-800">Website</span>
                  <span className="text-[10px] text-gray-500">Order Online</span>
                </Link>

                <a href="https://wa.me/233591599629" target="_blank" rel="noreferrer" className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center hover:border-green-500 hover:bg-green-50/30 transition">
                  <span className="text-2xl mb-1">💬</span>
                  <span className="text-xs font-bold text-gray-800">WhatsApp</span>
                  <span className="text-[10px] text-gray-500">Chat & Order</span>
                </a>

                <div className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center justify-center">
                  <span className="text-xs font-black text-orange-600 tracking-tight">Jumia Food</span>
                </div>

                <div className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center justify-center">
                  <span className="text-xs font-black text-black tracking-tight">Uber Eats</span>
                </div>

                <div className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center justify-center">
                  <span className="text-xs font-black text-emerald-500 tracking-tight">Bolt Food</span>
                </div>

                <div className="p-2 border border-gray-200 rounded-xl flex flex-col items-center text-center justify-center">
                  <span className="text-xs font-black text-red-600 tracking-tight">Hubtel</span>
                </div>
              </div>
            </div>

            {/* Payment Options Card */}
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

      {/* FOOTER */}
      <footer className="bg-[#d32f2f] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="text-2xl font-extrabold italic font-serif mb-1">Zara Kitchen</h4>
            <p className="text-xs text-red-100">Good Food, Good Mood</p>
          </div>
          <div>
            <h5 className="font-bold mb-3 border-b border-red-400/50 pb-1">Quick Links</h5>
            <ul className="space-y-1.5 text-xs text-red-100">
              <li><Link href="/" className="hover:underline">› Home</Link></li>
              <li><Link href="/menu" className="hover:underline">› Menu</Link></li>
              <li><Link href="/about" className="hover:underline">› About Us</Link></li>
              <li><Link href="/gallery" className="hover:underline">› Gallery</Link></li>
              <li><Link href="/contact" className="hover:underline">› Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3 border-b border-red-400/50 pb-1">Contact Us</h5>
            <p className="text-xs text-red-100 mb-1">✉ orders@zarakitchen.online</p>
            <p className="text-xs text-red-100 mb-1">📞 059 159 9629</p>
            <p className="text-xs text-red-100">📞 Phone 059 236 1289 / 059 159 9629</p>
          </div>
          <div>
            <h5 className="font-bold mb-3 border-b border-red-400/50 pb-1">Opening Hours</h5>
            <p className="text-xs text-red-100 mb-1">🕒 Mon – Fri: 8AM – 10PM</p>
            <p className="text-xs text-red-100">🕒 Sat – Sun: 8AM – 11PM</p>
          </div>
          <div>
            <h5 className="font-bold mb-3 border-b border-red-400/50 pb-1">Download App</h5>
            <div className="bg-yellow-400 text-black p-2 rounded-lg text-center font-bold text-xs">
              Install PWA<br />
              <span className="font-normal text-[10px]">Order faster. Save favorites.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
