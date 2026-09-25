// src/app/gallery/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

// Gallery data with categories
const galleryImages = [
  { id: 1, src: '/menu-images/hot-breakfast/avocado-bacon-egg.jpg', category: 'food', title: 'Avocado Bacon Egg' },
  { id: 2, src: '/menu-images/chinese/chinese-chicken.jpg', category: 'food', title: 'Chinese Chicken' },
  { id: 3, src: '/menu-images/rice-dishes/chicken-fried-rice.jpg', category: 'food', title: 'Chicken Fried Rice' },
  { id: 4, src: '/menu-images/pasta/seafood-pasta.jpg', category: 'food', title: 'Seafood Pasta' },
  { id: 5, src: '/menu-images/hot-breakfast/bacon-benedict.jpg', category: 'food', title: 'Bacon Benedict' },
  { id: 6, src: '/menu-images/on-grill/grilled-salmon.jpg', category: 'food', title: 'Grilled Salmon' },
  { id: 7, src: '/menu-images/ghanaian/fully-loaded-waakye.jpg', category: 'food', title: 'Waakye' },
  { id: 8, src: '/menu-images/indian/chicken-biryani.jpg', category: 'food', title: 'Chicken Biryani' },
  { id: 9, src: '/menu-images/appetizers/kelewele.jpg', category: 'food', title: 'Kelewele' },
  { id: 10, src: '/menu-images/desserts/chocolate-pudding.jpg', category: 'drinks', title: 'Dessert' },
  { id: 11, src: '/menu-images/salads/caesar-salad.jpg', category: 'food', title: 'Caesar Salad' },
  { id: 12, src: '/menu-images/from-grill/banku-grilled-snapper.jpg', category: 'food', title: 'Grilled Snapper' },
  { id: 13, src: '/menu-images/bakery/assorted-muffins.jpg', category: 'food', title: 'Muffins' },
  { id: 14, src: '/menu-images/soups/fufu-light-soap.jpg', category: 'food', title: 'Fufu Light Soup' },
  { id: 15, src: '/menu-images/light-meals/beef-wrap.jpg', category: 'food', title: 'Beef Wrap' },
  { id: 16, src: '/menu-images/extra-dishes/jollof-rice.jpg', category: 'food', title: 'Jollof Rice' },
]

const filters = [
  { id: 'all', label: 'All', emoji: '📸' },
  { id: 'food', label: 'Food', emoji: '🍽️' },
  { id: 'drinks', label: 'Drinks', emoji: '🍹' },
  { id: 'indoor', label: 'Indoor Dining', emoji: '🏠' },
  { id: 'events', label: 'Events & Catering', emoji: '🎉' },
  { id: 'kitchen', label: 'Our Kitchen', emoji: '👨‍🍳' },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm text-gray-600 mb-2">Our Gallery</p>
          <h1 className="text-5xl font-black italic text-red-600 mb-4">
            Good Food.<br />Great Moments. ❤️
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Take a look at our delicious meals, beautiful settings and happy moments at Zara Kitchen.
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white py-6 border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all flex items-center gap-2 text-sm ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{filter.emoji}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="font-semibold text-sm">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found for this filter</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl">🍽️</span>
          </div>
          <h2 className="text-3xl font-black italic mb-3">Hungry for More?</h2>
          <p className="text-lg mb-6 text-red-100">
            Enjoy our delicious meals, great service and a warm atmosphere.
          </p>
          <a
            href="/menu"
            className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
          >
            🔍 Order Online
          </a>
        </div>
      </section>
    </div>
  )
}
