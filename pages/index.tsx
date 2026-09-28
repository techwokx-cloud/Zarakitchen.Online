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
        <title>Zara Kitchen - Authentic Ghanaian Cuisine</title>
      </Head>

      <section className="relative h-96 bg-gray-900">
        <img src={slides[slide]} alt="Zara Kitchen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Zara Kitchen</h1>
            <p className="text-xl">Good Food, Good Mood</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-zara-red mb-12">Our Menu Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <Link href="/menu"><div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white transition"><span className="text-4xl">🌅</span><p className="text-sm font-bold mt-2">Breakfast</p></div></Link>
          <Link href="/menu"><div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white transition"><span className="text-4xl">🍳</span><p className="text-sm font-bold mt-2">Hot Breakfast</p></div></Link>
          <Link href="/menu"><div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white transition"><span className="text-4xl">🥐</span><p className="text-sm font-bold mt-2">Bakery</p></div></Link>
          <Link href="/menu"><div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white transition"><span className="text-4xl">🍗</span><p className="text-sm font-bold mt-2">Appetizers</p></div></Link>
          <Link href="/menu"><div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white transition"><span className="text-4xl">🥗</span><p className="text-sm font-bold mt-2">Salads</p></div></Link>
          <Link href="/menu"><div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white transition"><span className="text-4xl">🥪</span><p className="text-sm font-bold mt-2">Light Meals</p></div></Link>
          <Link href="/menu"><div className="bg-white border-2 border-zara-red rounded-lg p-4 text-center cursor-pointer hover:bg-zara-red hover:text-white transition"><span className="text-4xl">🔥</span><p className="text-sm font-bold mt-2">Grill</p></div></Link>
          <Link href="/menu"><div className="bg-white border-2 border-zara-red
