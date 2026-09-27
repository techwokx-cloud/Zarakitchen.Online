import Head from 'next/head';
import { menuCategories } from '../data/menu-data';

export default function Gallery() {
  // Placeholder gallery items
  const galleryItems = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Delicious Dish ${i + 1}`,
    category: menuCategories[i % menuCategories.length],
  }));

  return (
    <>
      <Head>
        <title>Gallery - Zara Kitchen</title>
        <meta name="description" content="Zara Kitchen food gallery" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1>Gallery</h1>
          <p>See our delicious creations</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600 mb-12">
          Our food photography showcases the quality and presentation of each dish
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-80 flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">{item.category}</div>
                <div className="font-bold text-gray-800">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-zara-red mb-4">
            Our Food, Our Pride
          </h2>
          <p className="text-gray-700 mb-4">
            Every dish is prepared with care and attention to detail. 
            We use fresh ingredients and traditional recipes to create memorable meals.
          </p>
          <a
            href="https://wa.me/233591599629"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Order Your Favorite
          </a>
        </div>
      </section>
    </>
  );
}
