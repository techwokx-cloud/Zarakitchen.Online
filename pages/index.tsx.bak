import Head from 'next/head';
import Link from 'next/link';
import { menuCategories } from '../data/menu-data';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zara Kitchen - Good Food, Good Mood</title>
        <meta name="description" content="Zara Kitchen - Best restaurant in Accra serving delicious food" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1>Zara Kitchen</h1>
          <p className="text-xl mb-6">Good Food, Good Mood</p>
          <p className="text-lg mb-8">
            Delicious meals served fresh daily in Accra, Ghana
          </p>
          <a
            href="https://wa.me/233591599629"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-lg"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-zara-red mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Zara Kitchen, your go-to destination for authentic and delicious meals in Accra. 
              We pride ourselves on serving fresh, high-quality food prepared with passion.
            </p>
            <p className="text-gray-700 mb-4">
              From traditional Ghanaian dishes to international cuisine, our diverse menu has something for everyone.
            </p>
            <Link href="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className="bg-gradient-to-br from-zara-red to-red-700 h-80 rounded-lg flex items-center justify-center text-white text-xl font-bold">
            Restaurant Image
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zara-red mb-12">
            Our Menu Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {menuCategories.map((category) => (
              <Link key={category} href={`/menu?category=${category}`}>
                <div className="category-circle">
                  {category}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-zara-red mb-8">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p>
              <a href="tel:+233591599629" className="text-zara-red hover:underline">
                +233 591 599 629
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>
              <a href="mailto:orders@zarakitchen.online" className="text-zara-red hover:underline">
                orders@zarakitchen.online
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p>Mon-Fri: 8AM - 10PM</p>
            <p>Sat-Sun: 8AM - 11PM</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zara-red text-white py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="mb-6 text-lg">Browse our full menu and order your favorite meals</p>
          <Link href="/menu" className="btn btn-secondary inline-block">
            View Full Menu
          </Link>
        </div>
      </section>
    </>
  );
}
