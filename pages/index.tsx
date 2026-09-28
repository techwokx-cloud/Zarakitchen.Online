import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [slide, setSlide] = useState(0);

  const slides = [
    'https://via.placeholder.com/1400x600?text=Zara+Kitchen',
    'https://via.placeholder.com/1400x600?text=Good+Food',
    'https://via.placeholder.com/1400x600?text=Good+Mood',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(s => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Zara Kitchen</title>
      </Head>

      <section className="relative h-96 bg-gray-900">
        <img 
          src={slides[slide]} 
          alt="Zara Kitchen" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Zara Kitchen</h1>
            <p className="text-xl">Good Food, Good Mood</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-zara-red mb-12">
          Menu Categories
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <CategoryCard icon="🌅" name="Breakfast" />
          <CategoryCard icon="🍳" name="Hot Breakfast" />
          <CategoryCard icon="🥐" name="Bakery" />
          <CategoryCard icon="🍗" name="Appetizers" />
          <CategoryCard icon="🥗" name="Salads" />
          <CategoryCard icon="🥪" name="Light Meals" />
          <CategoryCard icon="🔥" name="Grill" />
          <CategoryCard icon="🍝" name="Pasta" />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-zara-red mb-12">
            Order Your Way
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <OrderCard />
            <PaymentCard />
            <CTACard />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <InfoCard 
            title="Opening Hours" 
            content={<><p><strong>Mon-Fri:</strong> 8AM-10PM</p><p><strong>Sat-Sun:</strong> 8AM-11PM</p></>} 
          />
          <InfoCard 
            title="Contact" 
            content={<><p><a href="tel:+233591599629" className="text-zara-red">+233 591 599 629</a></p><p><a href="mailto:orders@zarakitchen.online" className="text-zara-red">orders@zarakitchen.online</a></p></>} 
          />
          <InfoCard 
            title="Location" 
            content={<p>Accra, Ghana</p>} 
          />
        </div>
      </section>
    </>
  );
}

function CategoryCard({ icon, name }: { icon: string; name: string }) {
  return (
    <Link href="/menu">
      <div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white">
        <span className="text-4xl">{icon}</span>
        <p className="text-sm font-bold mt-2">{name}</p>
      </div>
    </Link>
  );
}

function OrderCard() {
  return (
    <div className="bg-white p-8 rounded-lg shadow border-l-4 border-zara-red">
      <h3 className="text-xl font-bold text-zara-red mb-6">Order Methods</h3>
      <ul className="space-y-3">
        <li><a href="https://wa.me/233591599629" className="text-zara-red hover:underline">WhatsApp</a></li>
        <li><a href="#" className="text-zara-red hover:underline">Jumia Food</a></li>
        <li><a href="#" className="text-zara-red hover:underline">Uber Eats</a></li>
      </ul>
    </div>
  );
}

function PaymentCard() {
  return (
    <div className="bg-white p-8 rounded-lg shadow border-l-4 border-zara-green">
      <h3 className="text-xl font-bold text-zara-green mb-6">Payment</h3>
      <ul className="space-y-3 text-gray-700">
        <li>Mobile Money</li>
        <li>Bank Cards</li>
        <li>Pay on Delivery</li>
      </ul>
    </div>
  );
}

function CTACard() {
  return (
    <div className="bg-zara-red text-white p-8 rounded-lg shadow flex flex-col justify-center">
      <h3 className="text-xl font-bold mb-4">Ready to Order?</h3>
      <a 
        href="https://wa.me/233591599629" 
        className="bg-zara-green text-white font-bold py-3 px-6 rounded-lg text-center"
      >
        Order Now
      </a>
    </div>
  );
}

function InfoCard({ title, content }: { title: string; content: JSX.Element }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-zara-red mb-4">{title}</h3>
      <div className="text-gray-700">{content}</div>
    </div>
  );
}
