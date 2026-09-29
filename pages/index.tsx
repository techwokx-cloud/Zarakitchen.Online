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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'Breakfast', image: '/menu-images/Menu/Healthy Breakfast/breakfast-1.jpg' },
    { name: 'Hot Breakfast', image: '/menu-images/Menu/Hot Breakfast/breakfast-2.jpg' },
    { name: 'On the Bakery', image: '/menu-images/Menu/On the Bakery/bakery-1.jpg' },
    { name: 'Appetizers', image: '/menu-images/Menu/Appetisers/appetizers-1.jpg' },
    { name: 'Salads', image: '/menu-images/Menu/Salads/salad-1.jpg' },
    { name: 'Light Meals', image: '/menu-images/Menu/Light Meals/light-1.jpg' },
    { name: 'On the Grill', image: '/menu-images/Menu/On The Grill/grill-1.jpg' },
    { name: 'Pastas', image: '/menu-images/Menu/Pasta/pasta-1.jpg' },
    { name: 'Chinese Food', image: '/menu-images/Menu/Chinese Food/chinese-1.jpg' },
    { name: 'Indian Dishes', image: '/menu-images/Menu/Indian Dishes/indian-1.jpg' },
    { name: 'Rice Dishes', image: '/menu-images/Menu/Rice Dishes/rice-1.jpg' },
    { name: 'Ghanaian Specialities', image: '/menu-images/Menu/Ghanaian Specialities/ghanaian-1.jpg' },
    { name: 'From the Grill', image: '/menu-images/Menu/From The Grill/grill-2.jpg' },
    { name: 'Soups', image: '/menu-images/Menu/Soaps/soup-1.jpg' },
    { name: 'Extra Dishes', image: '/menu-images/Menu/Extra Dishes/extra-1.jpg' },
    { name: 'Desserts', image: '/menu-images/Menu/desserts/dessert-1.jpg' },
  ];

  const platforms = [
    { name: 'Website', sub: 'Order Online', icon: '🌐', color: 'text-red-600', link: '#' },
    { name: 'WhatsApp', sub: 'Chat & Order', icon: '💬', color: 'text-green-600', link: 'https://wa.me/233591599629' },
    { name: 'Jumia Food', icon: '🍔', bgColor: 'bg-orange-500', link: '#' },
    { name: 'Uber Eats', icon: '🚗', bgColor: 'bg-black', link: '#' },
    { name: 'Bolt Food', icon: '⚡', bgColor: 'bg-green-500', link: '#' },
    { name: 'Hubtel', icon: '📱', bgColor: 'bg-gray-800', link: '#' },
  ];

  return (
    <>
      <Head>
        <title>Zara Kitchen - Authentic Ghanaian Cuisine</title>
      </Head>

      {/* HERO CAROUSEL */}
      <section className="relative h-screen w-full overflow-hidden">
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

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 max-w-3xl">
          <p className="text-sm md:text-lg text-white font-bold mb-2">Authentic Ghanaian & Continental Cuisine</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white italic mb-2">Zara Kitchen</h1>
          <p className="text-2xl md:text-3xl font-bold text-white italic mb-4">Made with Love ❤</p>
          <p className="text-lg md:text-2xl text-white font-semibold">Fresh. Tasty. Satisfying.</p>
        </div>

        <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-zara-red text-white p-4 md:p-6 rounded-lg text-center font-bold transform -rotate-12 shadow-2xl max-w-xs">
          <p className="text-lg md:text-xl">Delicious</p>
          <p className="text-lg md:text-xl">Meals</p>
          <p className="text-sm md:text-base">Made for You ❤</p>
        </div>

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

      {/* CATEGORY CARDS WITH FOOD IMAGES */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/menu?category=${cat.name}`}>
                <div className="text-center cursor-pointer group">
                  {/* Circular Bowl Image */}
                  <div className="relative w-full aspect-square mb-4 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg group-hover:shadow-xl transition transform group-hover:scale-105">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/hero/Fried-Rice.png'; // Fallback
                      }}
                    />
                  </div>
                  {/* Category Name */}
                  <p className="font-bold text-xs md:text-sm text-gray-800">{cat.name}</p>
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
            <div className="border-4 border-zara-red rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-zara-red mb-1">Order Your Way</h2>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 font-semibold">Fast • Easy • Convenient</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {platforms.map((p, idx) => (
                  <a 
                    key={idx}
                    href={p.link}
                    target={p.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener"
                    className="flex flex-col items-center p-3 md:p-4 hover:bg-red-50 rounded-lg transition"
                  >
                    {p.bgColor ? (
                      <div className={`${p.bgColor} text-white p-3 rounded-full mb-2`}>
                        <span className="text-lg md:text-2xl">{p.icon}</span>
                      </div>
                    ) : (
                      <span className={`text-3xl md:text-4xl mb-2 ${p.color}`}>{p.icon}</span>
                    )}
                    <p className="font-bold text-xs md:text-sm text-gray-800 text-center">{p.name}</p>
                    {p.sub && <p className="text-xs text-gray-500">{p.sub}</p>}
                  </a>
                ))}
              </div>
            </div>

            {/* ALL PAYMENTS ACCEPTED */}
            <div className="border-4 border-zara-red rounded-3xl p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-center text-xl md:text-2xl font-bold text-zara-red mb-6">All Payments Accepted</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-red-600 text-3xl md:text-4xl mb-2">📱</div>
                  <p className="font-bold text-xs md:text-sm text-gray-800">Mobile Money</p>
                  <p className="text-xs text-gray-600">(MoMo)</p>
                </div>
                <div className="text-center">
                  <div className="text-red-600 text-3xl md:text-4xl mb-2">💳</div>
                  <p className="font-bold text-xs md:text-sm text-gray-800">Bank Cards</p>
                </div>
                <div className="text-center">
                  <div className="text-red-600 text-3xl md:text-4xl mb-2">🚚</div>
                  <p className="font-bold text-xs md:text-sm text-gray-800">Pay on</p>
                  <p className="text-xs text-gray-600">Delivery</p>
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
            {/* Logo & Tagline */}
            <div>
              <h4 className="font-bold text-lg md:text-xl mb-2">🍃 Zara Kitchen</h4>
              <p className="text-xs md:text-sm font-semibold">Good Food, Good Mood</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li>✓ <Link href="/">Home</Link></li>
                <li>✓ <Link href="/menu">Menu</Link></li>
                <li>✓ <Link href="/about">About Us</Link></li>
                <li>✓ <Link href="/gallery">Gallery</Link></li>
                <li>✓ <Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Contact Us</h4>
              <p className="text-xs md:text-sm mb-2 flex items-center gap-2">
                <span>✉️</span> orders@zarakitchen.online
              </p>
              <p className="text-xs md:text-sm mb-2 flex items-center gap-2">
                <span>📞</span> 059 159 9629
              </p>
              <p className="text-xs md:text-sm flex items-center gap-2">
                <span>📱</span> 059 236 1289
              </p>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Opening Hours</h4>
              <p className="text-xs md:text-sm mb-1">Mon - Fri: 8AM - 10PM</p>
              <p className="text-xs md:text-sm">Sat - Sun: 8AM - 11PM</p>
            </div>

            {/* Download App & Social */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Download App</h4>
              <div className="bg-yellow-400 text-black p-2 md:p-3 rounded text-center font-bold text-xs mb-3">
                📱 Install PWA<br/>
                <span className="text-xs">Order faster. Save favourites.</span>
              </div>
              <div className="flex gap-3 justify-center text-lg">
                <a href="#" className="hover:opacity-80">f</a>
                <a href="#" className="hover:opacity-80">📷</a>
                <a href="#" className="hover:opacity-80">🎵</a>
                <a href="#" className="hover:opacity-80">▶</a>
                <a href="#" className="hover:opacity-80">X</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/30 pt-4 text-center text-xs md:text-sm">
            <p>&copy; 2026 Zara Kitchen. All rights reserved. | Download. Order. Enjoy!</p>
          </div>
        </div>
      </footer>
    </>
  );
}
