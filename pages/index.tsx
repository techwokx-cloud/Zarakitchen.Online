import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://via.placeholder.com/1400x600?text=Zara+Kitchen+1',
    'https://via.placeholder.com/1400x600?text=Zara+Kitchen+2',
    'https://via.placeholder.com/1400x600?text=Zara+Kitchen+3',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Zara Kitchen</title>
      </Head>

      {/* Carousel */}
      <section className="relative h-96 bg-gray-900">
        <img src={slides[currentSlide]} alt="Zara Kitchen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Zara Kitchen</h1>
          <p className="text-2xl">Made with Love</p>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
