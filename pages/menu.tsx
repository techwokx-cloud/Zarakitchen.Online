import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { findShowcase } from '../data/menu-showcase';

const CATEGORIES = [
  'Starters',
  'Signature',
  'Seafood',
  'Dry Pot',
  'Fish',
  'Chicken',
  'Lamb',
  'Beef',
  'Soup',
  'Ghanaian Specialities',
  'Rice Dishes',
  'Breakfast',
  'Vegetable / Vegan',
  'Pork',
  'Staple',
];

export default function Menu() {
  const router = useRouter();
  const raw = router.query.category;
  const initialCategoryName = Array.isArray(raw) ? raw[0] : raw;

  const [activeCategory, setActiveCategory] = useState<string>('Ghanaian Specialities');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  useEffect(() => {
    if (initialCategoryName) {
      setActiveCategory(initialCategoryName);
      setIsExpanded(true);
    }
  }, [initialCategoryName]);

  const activeShowcase = findShowcase(activeCategory);

  // Safely extract dishes array matching ShowcaseCategory interface
  const showcaseItems =
    (activeShowcase as any)?.dishes ||
    (activeShowcase as any)?.items ||
    [];

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setIsExpanded(!isExpanded);
    } else {
      setActiveCategory(categoryName);
      setIsExpanded(true);
      router.push(`/menu?category=${encodeURIComponent(categoryName)}`, undefined, { shallow: true });
    }
  };

  return (
    <>
      <Head>
        <title>{`${activeShowcase.name} Menu — Zara Kitchen`}</title>
        <meta
          name="description"
          content={`${activeShowcase.name} at Zara Kitchen. ${activeShowcase.tagline} Authentic Ghanaian & Continental cuisine, made with love.`}
        />
      </Head>

      <div className="bg-[#FAF7F2] min-h-screen">
        {/* TOP HORIZONTAL CATEGORY BAR ("ORDER & BOOK") */}
        <section className="bg-[#FAF7F2] border-b border-stone-200 sticky top-0 z-30 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-xl sm:text-2xl font-black text-[#991b1b] tracking-tight uppercase mb-3">
              ORDER & BOOK
            </h1>
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-300">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat && isExpanded;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-gray-900 shadow-md font-bold ring-1 ring-stone-200'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-stone-200/60'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* COLLAPSIBLE 4-COLUMN DISH GRID WITH PRICES */}
        {isExpanded ? (
          <section className="bg-white py-10 min-h-[600px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* Category Header */}
              <div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {activeShowcase.name}
                  </h2>
                  <p className="text-stone-500 text-sm mt-1">{activeShowcase.tagline}</p>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-xs font-bold text-stone-500 hover:text-[#991b1b] uppercase tracking-wider transition"
                >
                  ▲ Collapse Section
                </button>
              </div>

              {/* 4 COLUMNS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {showcaseItems.length > 0 ? (
                  showcaseItems.map((item: any) => (
                    <div
                      key={item.id || item.name}
                      className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-48 bg-stone-100 overflow-hidden">
                        <img
                          src={item.image || '/images/hero/Fried-Rice.png'}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Zara+Kitchen';
                          }}
                        />
                        {/* PRICE BADGE OVER IMAGE */}
                        {item.price && (
                          <div className="absolute bottom-3 right-3 bg-[#c02626] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                            {item.price}
                          </div>
                        )}
                      </div>

                      {/* Content Container */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900 text-base mb-1">{item.name}</h3>
                          <p className="text-stone-500 text-xs line-clamp-2 mb-4">
                            {item.description || 'Prepared fresh daily with authentic Ghanaian ingredients and spices.'}
                          </p>
                        </div>
                        <button className="w-full bg-[#c02626] hover:bg-[#a02020] text-white text-xs font-bold py-2.5 rounded-xl transition">
                          Add to Order
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center text-stone-400">
                    No items currently available in this category.
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : (
          <div className="text-center py-12">
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-white border border-stone-200 text-stone-700 px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-stone-50"
            >
              ▼ Expand {activeShowcase.name} Menu
            </button>
          </div>
        )}
      </div>
    </>
  );
}
