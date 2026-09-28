import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Authentic Ghanaian & Continental Cuisine',
      subtitle: 'Zara Kitchen - Made with Love ❤',
      image: 'https://via.placeholder.com/1400x600?text=Zara+Kitchen+Grilled+Chicken',
    },
    {
      title: 'Fresh. Tasty. Satisfying.',
      subtitle: 'Delicious Meals Made for You',
      image: 'https://via.placeholder.com/1400x600?text=Zara+Kitchen+Food',
    },
    {
      title: 'Order Your Favorite',
      subtitle: 'Good Food, Good Mood',
      image: 'https://via.placeholder.com/1400x600?text=Zara+Kitchen+Meals',
    },
  ];

  const categories = [
    { name: 'Breakfast', icon: '🌅' },
    { name: 'Hot Breakfast', icon: '🍳' },
    { name: 'On the Bakery', icon: '🥐' },
    { name: 'Appetizers', icon: '🍗' },
    { name: 'Salads', icon: '🥗' },
    { name: 'Light Meals', icon: '🥪' },
    { name: 'On the Grill', icon: '🔥' },
    { name: 'Pastas', icon: '🍝' },
    { name: 'Chinese Food', icon: '🥢' },
    { name: 'Indian Dishes', icon: '🍛' },
    { name: 'Rice Dishes', icon: '🍚' },
    { name: 'Ghanaian Specialities', icon: '🍲' },
    { name: 'From The Grill', icon: '🐟' },
    { name: 'Soups', icon: '🥘' },
    { name: 'Extra Dishes', icon: '🥔' },
    { name: 'Desserts', icon: '🍰' },
  ];

  const orderMethods = [
    { name: 'Website Order Online', icon: '🌐', link: '#' },
    { name: 'WhatsApp Chat & Order', icon: '💬', link: 'https://wa.me/233591599629' },
    { name: 'Jumia Food', icon: '🚚', link: '#' },
    { name: 'Uber Eats', icon: '🍴', link: '#' },
    { name: 'Bolt Food', icon: '⚡', link: '#' },
    { name: 'Hubtel', icon: '📱', link: '#' },
  ];

  const paymentMethods = [
    { name: 'Mobile Money (MoMo)', icon: '📱' },
    { name: 'Bank Cards', icon: '💳' },
    { name: 'Pay on Delivery', icon: '🚚' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <>
      <Head>
        <title>Zara Kitchen - Authentic Ghanaian & Continental Cuisine</title>
        <meta name="description" content="Good Food, Good Mood - Authentic Ghanaian and Continental Cuisine in Accra, Ghana" />
      </Head>

      {/* HERO CAROUSEL */}
      <section className="relative h-96 md:h-96 bg-gray-900 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
              <p className="text-sm md:text-base mb-2 text-gray-200">Authentic Ghanaian & Continental Cuisine</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Zara Kitchen</h1>
              <p className="text-lg md:text-2xl italic mb-4">Made with Love ❤</p>
              <p className="text-base md:text-lg">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-zara-red' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10"
        >
          ❯
        </button>
      </section>

      {/* CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-zara-red mb-2">
          Explore Our Menu
        </h2>
        <p className="text-center text-gray-600 mb-12">16 Categories of Authentic & Delicious Cuisine</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <Link key={index} href={`/menu?category=${category.name}`}>
              <div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white transition transform hover:scale-105">
                <div className="text-4xl mb-2">{category.icon}</div>
                <p className="text-sm font-bold">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ORDER YOUR WAY SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zara-red mb-4">
            Order Your Way
          </h2>
          <p className="text-center text-gray-600 mb-12">Fast • Easy • Convenient</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Order Methods */}
            <div className="bg-white p-8 rounded-lg border-l-4 border-zara-red">
              <h3 className="text-xl font-bold text-zara-red mb-4">Order Methods</h3>
              <div className="space-y-3">
                {orderMethods.map((method, index) => (
                  
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 hover:bg-red-50 rounded text-gray-700 hover:text-zara-red transition"
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-medium">{method.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white p-8 rounded-lg border-l-4 border-zara-green">
              <h3 className="text-xl font-bold text-zara-green mb-4">All Payments Accepted</h3>
              <div className="space-y-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3 p-3">
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-medium text-gray-700">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-zara-red text-white p-8 rounded-lg flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">Ready to Order?</h3>
              <p className="mb-6">Join thousands of happy customers enjoying delicious meals</p>
              
                href="https://wa.me/233591599629"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zara-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-zara-red mb-4">Opening Hours</h3>
            <p className="text-gray-700 mb-2">📅 Mon - Fri: <span className="font-bold">8AM - 10PM</span></p>
            <p className="text-gray-700">📅 Sat - Sun: <span className="font-bold">8AM - 11PM</span></p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-zara-red mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-2">📞 <a href="tel:+233591599629" className="text-zara-red hover:underline">+233 591 599 629</a></p>
            <p className="text-gray-700">📧 <a href="mailto:orders@zarakitchen.online" className="text-zara-red hover:underline">orders@zarakitchen.online</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-zara-red mb-4">Location</h3>
            <p className="text-gray-700">📍 Accra, Ghana</p>
            <p className="text-gray-700 text-sm mt-2">Bringing authentic Ghanaian cuisine to your table</p>
          </div>
        </div>
      </section>
    </>
  );
}
