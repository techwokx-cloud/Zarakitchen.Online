import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MenuGrid from '../components/MenuGrid';
import { menuItems, menuCategories, getMenuByCategory } from '../data/menu-data';

export default function Menu() {
  const router = useRouter();
  const { category } = router.query;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayItems, setDisplayItems] = useState(menuItems);

  useEffect(() => {
    if (category && typeof category === 'string') {
      setSelectedCategory(category);
      setDisplayItems(getMenuByCategory(category));
    } else {
      setSelectedCategory(null);
      setDisplayItems(menuItems);
    }
  }, [category]);

  const handleCategoryChange = (cat: string | null) => {
    if (cat === null) {
      router.push('/menu');
      setSelectedCategory(null);
      setDisplayItems(menuItems);
    } else {
      router.push(`/menu?category=${cat}`);
      setSelectedCategory(cat);
      setDisplayItems(getMenuByCategory(cat));
    }
  };

  return (
    <>
      <Head>
        <title>Menu - Zara Kitchen</title>
        <meta name="description" content="Zara Kitchen full menu with delicious food items" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1>Our Menu</h1>
          <p>Delicious dishes prepared fresh daily</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Filter by Category</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-lg font-bold transition-colors ${
              selectedCategory === null
                ? 'bg-zara-red text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                selectedCategory === cat
                  ? 'bg-zara-red text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">
          {selectedCategory ? `${selectedCategory} Menu` : 'All Menu Items'}
        </h2>
        <MenuGrid items={displayItems} />
      </section>

      {/* Order CTA */}
      <section className="bg-zara-red text-white py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="mb-6 text-lg">
            Contact us or order directly on WhatsApp for quick service
          </p>
          <a
            href="https://wa.me/233591599629"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary inline-block"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
