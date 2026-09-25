// src/app/menu/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MENU_CATEGORIES, getCategoryById } from '@/data/menu-data'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id)
  
  const category = getCategoryById(activeCategory)
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-black italic text-red-600">Our Menu</h1>
          <p className="text-gray-600 mt-2">Delicious meals made for you • Fresh • Tasty • Satisfying</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* LEFT: Sidebar with Categories */}
          <aside className="w-56 flex-shrink-0">
            <div className="bg-red-50 rounded-2xl p-4 sticky top-20">
              <h2 className="text-sm font-bold text-gray-900 mb-3 px-2">Categories</h2>
              
              <nav className="space-y-1">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 text-sm font-medium ${
                      activeCategory === cat.id
                        ? 'bg-red-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-red-100'
                    }`}
                  >
                    <span className="text-xl">{cat.emoji}</span>
                    <span className="flex-1">{cat.displayName}</span>
                    <span className="text-xs opacity-75">→</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* CENTER: Menu Items Grid */}
          <div className="flex-1">
            {category && (
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-3xl">
                      {category.emoji}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-red-600">{category.displayName}</h2>
                      <p className="text-gray-600 text-sm">
                        {category.name === 'Hot Breakfast' && 'Fresh, wholesome and delicious ways to start your day.'}
                        {category.name === 'Healthy Breakfast' && 'Nutritious and delicious breakfast options.'}
                        {category.name === 'On the Bakery' && 'Freshly baked treats and pastries.'}
                        {category.name === 'Appetisers' && 'Start your meal with our delicious appetizers.'}
                        {category.name === 'Light Meals' && 'Perfect for a quick and satisfying meal.'}
                        {category.name === 'Ghanaian Specialities' && 'Authentic Ghanaian flavors and traditions.'}
                        {category.name === 'Soups' && 'Warm and comforting soups.'}
                        {category.name === 'Extra Dishes' && 'Complement your meal with sides.'}
                        {category.name === 'Rice Dishes' && 'Flavorful rice preparations.'}
                        {category.name === 'Pasta' && 'Italian-inspired pasta dishes.'}
                        {category.name === 'Salads' && 'Fresh and healthy salad options.'}
                        {category.name === 'Chinese Food' && 'Delicious Asian cuisine.'}
                        {category.name === 'From The Grill' && 'Grilled specialties with fish and seafood.'}
                        {category.name === 'On The Grill' && 'Premium grilled meats and proteins.'}
                        {category.name === 'Indian Dishes' && 'Aromatic Indian flavors.'}
                        {category.name === 'Desserts' && 'Sweet treats to end your meal.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {category.items.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48 bg-gray-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 1024px) 100vw, 400px"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-xs text-gray-600 mb-4">Fresh • Delicious • Made with Love ❤️</p>
                        <button className="w-full bg-red-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-red-700 transition-colors">
                          Order Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show all if more than 6 items */}
                {category.items.length > 6 && (
                  <div className="mt-8 text-center">
                    <p className="text-gray-600 text-sm">
                      Showing 6 of {category.items.length} items in {category.displayName}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: Category Card */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-red-50 rounded-2xl overflow-hidden sticky top-20">
              <div className="relative h-64 bg-gray-200">
                {category && (
                  <Image
                    src={category.items[0]?.image || '/placeholder.jpg'}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-black italic text-red-600 mb-3">
                  {category?.displayName}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Start your day with fresh and hearty meals made with love.
                </p>
                <p className="text-lg font-bold text-red-600 italic">
                  Good Food<br />Good Mood ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black italic mb-4">Hungry for More? 🍴</h2>
          <p className="text-lg mb-6 text-red-100">
            Order your favorite meals now from our menu
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/233591599629"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
            >
              📱 WhatsApp Order
            </a>
            <a
              href="tel:0591599629"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
