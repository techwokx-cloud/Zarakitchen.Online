import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const categories = [
    { name: 'Breakfast', image: '/hero/Fried-Rice.png' },
    { name: 'Hot Breakfast', image: '/hero/Burger.png' },
    { name: 'On the Bakery', image: '/hero/Rice-Balls.png' },
    { name: 'Appetizers', image: '/hero/Fried-Rice.png' },
    { name: 'Salads', image: '/hero/Fried-Rice.png' },
    { name: 'Light Meals', image: '/hero/Burger.png' },
    { name: 'On the Grill', image: '/hero/Banku-n-Tilapia.png' },
    { name: 'Pastas', image: '/hero/Fried-Rice.png' },
    { name: 'Chinese Food', image: '/hero/Fried-Rice.png' },
    { name: 'Indian Dishes', image: '/hero/Rice-Balls.png' },
    { name: 'Rice Dishes', image: '/hero/Fried-Rice.png' },
    { name: 'Ghanaian Specialities', image: '/hero/Fully-Loaded Waatye.png' },
    { name: 'From the Grill', image: '/hero/Banku-n-Tilapia.png' },
    { name: 'Soups', image: '/hero/Fufu-Light-Soup.png' },
    { name: 'Extra Dishes', image: '/hero/Fried-Rice.png' },
    { name: 'Desserts', image: '/hero/Rice-Balls.png' },
  ];

  const platforms = [
    { name: 'Website Order Online', icon: '🌐', link: '#' },
    { name: 'WhatsApp Chat & Order', icon: '💬', link: 'https://wa.me/233591599629' },
    { name: 'Jumia Food', icon: '🍔', link: '#' },
    { name: 'Uber Eats', icon: '🚗', link: '#' },
    { name: 'Bolt Food', icon: '⚡', link: '#' },
    { name: 'Hubtel', icon: '📱', link: '#' },
  ];

  return (
    <>
      <Head>
        <title>Zara Kitchen - Authentic Ghanaian Cuisine</title>
      </Head>

      {/* HERO SECTION */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-gray-600 font-bold mb-2">Authentic Ghanaian & Continental Cuisine</p>
            <h1 className="text-6xl font-bold text-zara-red italic mb-2">Zara Kitchen</h1>
            <p className="text-2xl font-bold italic mb-4">Made with Love ❤</p>
            <p className="text-gray-700 text-lg">Fresh. Tasty. Satisfying.</p>
          </div>

          {/* Right: Image with Banner */}
          <div className="relative">
            <img 
              src="/hero/Banku-n-Tilapia.png" 
              alt="Zara Kitchen Food" 
              className="rounded-lg w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-zara-red text-white p-4 rounded-lg text-center font-bold max-w-xs transform -rotate-12 shadow-lg">
              <p className="text-lg">Delicious</p>
              <p className="text-lg">Meals</p>
              <p>Made for You ❤</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/menu?category=${cat.name}`}>
                <div className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-32 object-cover"
                  />
                  <p className="p-3 text-center text-sm font-bold text-gray-800">{cat.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER YOUR WAY */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-2 border-zara-red rounded-2xl p-8 mb-8">
            <h2 className="text-4xl font-bold text-zara-red mb-2">Order Your Way</h2>
            <p className="text-gray-700 mb-8 text-lg font-semibold">Fast • Easy • Convenient</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {platforms.map((p, idx) => (
                <a 
                  key={idx}
                  href={p.link}
                  target={p.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener"
                  className="text-center p-4 hover:bg-red-50 rounded-lg transition"
                >
                  <span className="text-4xl mb-3 block">{p.icon}</span>
                  <p className="font-bold text-xs leading-tight text-gray-800">{p.name}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="border-2 border-zara-red rounded-2xl p-8 text-center bg-gray-50">
            <h3 className="text-2xl font-bold text-zara-red mb-4">All Payments Accepted</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2">📱</span>
                <p className="font-semibold">Mobile Money (MoMo)</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2">💳</span>
                <p className="font-semibold">Bank Cards</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2">🚚</span>
                <p className="font-semibold">Pay on Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RED FOOTER */}
      <footer className="bg-zara-red text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Zara Kitchen</h4>
            <p className="text-sm">Good Food, Good Mood</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <p className="text-sm mb-2">orders@zarakitchen.online</p>
            <p className="text-sm mb-2">059 159 9629</p>
            <p className="text-sm">059 236 1289</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Opening Hours</h4>
            <p className="text-sm mb-2">Mon - Fri: 8AM - 10PM</p>
            <p className="text-sm">Sat - Sun: 8AM - 11PM</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Download App</h4>
            <div className="bg-yellow-400 text-black p-3 rounded text-center font-bold text-sm mb-4">
              📱 Install PWA<br/>Order faster
            </div>
            <div className="flex gap-4 justify-center text-lg">
              <a href="#" className="hover:opacity-80">f</a>
              <a href="#" className="hover:opacity-80">📷</a>
              <a href="#" className="hover:opacity-80">🎬</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
