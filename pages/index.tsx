import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const categories = [
    { name: 'Breakfast', image: '/menu-images/Menu/Healthy Breakfast/Fruit Salad.png' },
    { name: 'Hot Breakfast', image: '/menu-images/Menu/Hot Breakfast/Avocago-Bacon-Egg.png' },
    { name: 'On the Bakery', image: '/menu-images/Menu/On the Bakery/Croissant.png' },
    { name: 'Appetizers', image: '/menu-images/Menu/Appetisers/Chicken Wings.png' },
    { name: 'Salads', image: '/menu-images/Menu/Salads/Ceaser Salad.png' },
    { name: 'Light Meals', image: '/menu-images/Menu/Light Meals/Chicken Wrap.png' },
    { name: 'On the Grill', image: '/menu-images/Menu/On The Grill/BBQ Chicken.png' },
    { name: 'Pastas', image: '/menu-images/Menu/Pasta/Spagetti Bolognaise.png' },
    { name: 'Chinese Food', image: '/menu-images/Menu/Chinese Food/Chinese Beef.png' },
    { name: 'Indian Dishes', image: '/menu-images/Menu/Indian Dishes/Chicken Tikka.png' },
    { name: 'Rice Dishes', image: '/menu-images/Menu/Rice Dishes/Beef Fried Rice.png' },
    { name: 'Ghanaian Specialities', image: '/menu-images/Menu/Ghanaian Specialities/Fuly loaded waakye.png' },
    { name: 'From the Grill', image: '/menu-images/Menu/From The Grill/Banku Grilled Tilapia.png' },
    { name: 'Soups', image: '/menu-images/Menu/Soaps/Red Red.png' },
    { name: 'Extra Dishes', image: '/menu-images/Menu/Extra Dishes/jollof.jpeg' },
    { name: 'Desserts', image: '/menu-images/Menu/desserts/Fruit Salad.png' },
  ];

  const platforms = [
    { name: 'Website Order Online', icon: '🌐' },
    { name: 'WhatsApp Chat & Order', icon: '💬' },
    { name: 'Jumia Food', icon: '🚚' },
    { name: 'Uber Eats', icon: '🍴' },
    { name: 'Bolt Food', icon: '⚡' },
    { name: 'Hubtel', icon: '📱' },
  ];

  return (
    <>
      <Head>
        <title>Zara Kitchen - Authentic Ghanaian Cuisine</title>
      </Head>

      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 font-bold mb-2">Authentic Ghanaian & Continental Cuisine</p>
            <h1 className="text-6xl font-bold text-zara-red italic mb-2">Zara Kitchen</h1>
            <p className="text-2xl font-bold italic mb-4">Made with Love ❤</p>
            <p className="text-gray-700">Fresh. Tasty. Satisfying.</p>
          </div>
          <div className="relative">
            <img 
              src="https://via.placeholder.com/500x400?text=Zara+Kitchen+Food" 
              alt="Zara Kitchen" 
              className="rounded-lg w-full"
            />
            <div className="absolute top-4 right-4 bg-zara-red text-white p-4 rounded-lg text-center font-bold max-w-xs skew-y-2">
              <p>Delicious</p>
              <p>Meals</p>
              <p>Made for You ❤</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/menu?category=${cat.name}`}>
                <div className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-24 object-cover"
                    onError={(e) => {e.currentTarget.src = 'https://via.placeholder.com/150?text=' + cat.name}}
                  />
                  <p className="p-2 text-center text-sm font-bold">{cat.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER YOUR WAY */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-2 border-zara-red rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-zara-red mb-2">Order Your Way</h2>
            <p className="text-gray-700 mb-8">Fast • Easy • Convenient</p>
            <div className="grid md:grid-cols-6 gap-4">
              {platforms.map((p, idx) => (
                <a 
                  key={idx}
                  href={p.name.includes('WhatsApp') ? 'https://wa.me/233591599629' : '#'} 
                  target="_blank" 
                  rel="noopener"
                  className="text-center p-4 hover:bg-gray-50 rounded"
                >
                  <span className="text-3xl mb-2 block">{p.icon}</span>
                  <p className="font-bold text-sm">{p.name}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="border-2 border-zara-red rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-zara-red mb-4">All Payments Accepted</h3>
            <p className="text-gray-700 mb-4">Mobile Money (MoMo) • Bank Cards • Pay on Delivery</p>
          </div>
        </div>
      </section>

      {/* RED FOOTER */}
      <footer className="bg-zara-red text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Zara Kitchen</h4>
            <p className="text-sm">Good Food, Good Mood</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">orders@zarakitchen.online</p>
            <p className="text-sm mb-2">059 159 9629</p>
            <p className="text-sm">Phone 059 236 1289</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Opening Hours</h4>
            <p className="text-sm mb-2">Mon - Fri: 8AM - 10PM</p>
            <p className="text-sm">Sat - Sun: 8AM - 11PM</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Download App</h4>
            <div className="bg-yellow-400 text-black p-2 rounded text-center font-bold text-sm mb-4">
              Install PWA<br/>Order faster
            </div>
            <div className="flex gap-3 justify-center text-xl">
              <a href="#">f</a>
              <a href="#">📷</a>
              <a href="#">▶</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
