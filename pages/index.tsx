import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    '/hero/Banku-n-Tilapia.png',
    '/hero/Fried-Rice.png',
    '/hero/Burger.png',
    '/hero/Fufu-Light-Soup.png',
    '/hero/Rice-Balls.png',
    '/hero/Fully-Loaded Waatye.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'Breakfast', icon: '☕' },
    { name: 'Hot Breakfast', icon: '🍳' },
    { name: 'On the Bakery', icon: '🥐' },
    { name: 'Appetizers', icon: '🥟' },
    { name: 'Salads', icon: '🥗' },
    { name: 'Light Meals', icon: '🥪' },
    { name: 'On the Grill', icon: '🍖' },
    { name: 'Pastas', icon: '🍝' },
    { name: 'Chinese Food', icon: '🥡' },
    { name: 'Indian Dishes', icon: '🍛' },
    { name: 'Rice Dishes', icon: '🍚' },
    { name: 'Ghanaian Specialities', icon: '🥘' },
    { name: 'From the Grill', icon: '🐟' },
    { name: 'Soups', icon: '🍲' },
    { name: 'Extra Dishes', icon: '🥔' },
    { name: 'Desserts', icon: '🍰' },
  ];

  const platforms = [
    { name: 'Website', sub: 'Order Online', icon: '🌐', link: '#' },
    { name: 'WhatsApp', sub: 'Chat & Order', icon: '💬', link: 'https://wa.me/233591599629' },
    { name: 'Jumia Food', icon: '🍔', link: '#' },
    { name: 'Uber Eats', icon: '🚗', link: '#' },
    { name: 'Bolt Food', icon: '⚡', link: '#' },
    { name: 'Hubtel', icon: '📱', link: '#' },
  ];

  return (
    <>
      <Head>
        <title>Zara Kitchen - Authentic Ghanaian Cuisine</title>
      </Head>

      {/* HERO CAROUSEL */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image Carousel */}
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt="Hero" className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content - Centered/Left */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 max-w-3xl">
          <p className="text-sm md:text-lg text-white font-bold mb-2">Authentic Ghanaian & Continental Cuisine</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white italic mb-2">Zara Kitchen</h1>
          <p className="text-2xl md:text-3xl font-bold text-white italic mb-4">Made with Love ❤</p>
          <p className="text-lg md:text-2xl text-white font-semibold">Fresh. Tasty. Satisfying.</p>
        </div>

        {/* Red Banner - Top Right */}
        <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-zara-red text-white p-4 md:p-6 rounded-lg text-center font-bold transform -rotate-12 shadow-2xl max-w-xs">
          <p className="text-lg md:text-xl">Delicious</p>
          <p className="text-lg md:text-xl">Meals</p>
          <p className="text-sm md:text-base">Made for You ❤</p>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
                idx === currentHeroIndex ? 'bg-zara-red' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/menu?category=${cat.name}`}>
                <div className="bg-white border-2 border-gray-100 rounded-xl p-4 md:p-6 text-center cursor-pointer hover:border-zara-red hover:shadow-lg transition-all h-full flex flex-col items-center justify-center hover:scale-105">
                  <span className="text-4xl md:text-5xl mb-2">{cat.icon}</span>
                  <p className="text-xs md:text-sm font-bold text-gray-800 leading-tight">{cat.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER YOUR WAY & PAYMENTS */}
      <section className="bg-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* ORDER YOUR WAY */}
            <div className="border-2 border-zara-red rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-zara-red mb-2">Order Your Way</h2>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">Fast • Easy • Convenient</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {platforms.map((p, idx) => (
                  <a 
                    key={idx}
                    href={p.link}
                    target={p.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener"
                    className="text-center p-3 md:p-4 hover:bg-red-50 rounded-lg transition"
                  >
                    <span className="text-3xl md:text-4xl mb-2 block">{p.icon}</span>
                    <p className="font-bold text-xs md:text-sm text-gray-800">{p.name}</p>
                    {p.sub && <p className="text-xs text-gray-500">{p.sub}</p>}
                  </a>
                ))}
              </div>
            </div>

            {/* ALL PAYMENTS ACCEPTED */}
            <div className="border-2 border-zara-red rounded-2xl p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-center text-lg md:text-xl font-bold text-zara-red mb-6">ALL PAYMENTS ACCEPTED</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="text-3xl md:text-4xl mb-2 block">📱</span>
                  <p className="font-semibold text-xs md:text-sm">MoMo</p>
                  <p className="text-xs text-gray-600">Mobile Money</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl md:text-4xl mb-2 block">💳</span>
                  <p className="font-semibold text-xs md:text-sm">Cards</p>
                  <p className="text-xs text-gray-600">Bank Cards</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl md:text-4xl mb-2 block">🚚</span>
                  <p className="font-semibold text-xs md:text-sm">Cash</p>
                  <p className="text-xs text-gray-600">Pay on Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RED FOOTER */}
      <footer className="bg-zara-red text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8">
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Zara Kitchen</h4>
              <p className="text-xs md:text-sm">Good Food, Good Mood</p>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contact Us</h4>
              <p className="text-xs md:text-sm mb-1 md:mb-2">orders@zarakitchen.online</p>
              <p className="text-xs md:text-sm mb-1 md:mb-2">059 159 9629</p>
              <p className="text-xs md:text-sm">059 236 1289</p>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Opening Hours</h4>
              <p className="text-xs md:text-sm mb-1">Mon-Fri: 8AM-10PM</p>
              <p className="text-xs md:text-sm">Sat-Sun: 8AM-11PM</p>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Download App</h4>
              <div className="bg-yellow-400 text-black p-2 rounded text-center font-bold text-xs mb-3">
                📱 Install App
              </div>
              <div className="flex gap-2 justify-center text-lg">
                <a href="#" className="hover:opacity-80">f</a>
                <a href="#" className="hover:opacity-80">📷</a>
                <a href="#" className="hover:opacity-80">▶</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-4 text-center text-xs md:text-sm">
            <p>&copy; 2026 Zara Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
