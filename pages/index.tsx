import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Authentic Ghanaian & Continental Cuisine',
      subtitle: 'Zara Kitchen - Made with Love',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return
