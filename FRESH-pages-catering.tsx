import Head from 'next/head';
import Link from 'next/link';

export default function Catering() {
  return (
    <>
      <Head>
        <title>Catering Services - Zara Kitchen</title>
        <meta name="description" content="Professional catering services by Zara Kitchen" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1>Catering Services</h1>
          <p>Perfect for your events and celebrations</p>
        </div>
      </section>

      {/* Catering Info */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-zara-red mb-6">
              Professional Catering for Your Event
            </h2>
            <p className="text-gray-700 mb-4">
              Let Zara Kitchen cater your next event. Whether it's a corporate gathering, wedding, birthday party, 
              or any special occasion, we provide delicious food and excellent service.
            </p>
            <p className="text-gray-700 mb-4">
              Our experienced team will work with you to create a customized menu that suits your needs and budget.
            </p>
          </div>
          <div className="bg-gradient-to-br from-zara-red to-red-700 h-80 rounded-lg flex items-center justify-center text-white text-xl font-bold">
            Catering Image
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zara-red mb-12">
            Our Catering Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Corporate Events</h3>
              <p className="text-gray-700">
                Impress your clients and employees with professional catering for meetings, conferences, and team building events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Weddings</h3>
              <p className="text-gray-700">
                Make your special day memorable with our customized wedding menus and professional service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Parties & Celebrations</h3>
              <p className="text-gray-700">
                Birthdays, anniversaries, and celebrations - we create the perfect menu for your party.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Family Gatherings</h3>
              <p className="text-gray-700">
                Bring families together with our delicious food. Perfect for reunions and family celebrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Buffet Service</h3>
              <p className="text-gray-700">
                Choose from our buffet options or let us create a custom menu for your event.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Delivery & Setup</h3>
              <p className="text-gray-700">
                We handle delivery, setup, and service so you can focus on your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-zara-red mb-8">
          Catering Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-zara-red rounded-lg p-6">
            <h3 className="text-2xl font-bold text-zara-red mb-4">Starter</h3>
            <p className="text-gray-700 mb-4">
              Perfect for smaller gatherings of 20-50 people
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✓ 3-course meal</li>
              <li>✓ Beverages included</li>
              <li>✓ Basic setup</li>
            </ul>
            <p className="text-zara-red font-bold mb-4">Custom pricing</p>
          </div>

          <div className="border-4 border-zara-red rounded-lg p-6 bg-red-50">
            <h3 className="text-2xl font-bold text-zara-red mb-4">Standard</h3>
            <p className="text-gray-700 mb-4">
              Great choice for 50-150 people
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✓ 4-course meal</li>
              <li>✓ Premium beverages</li>
              <li>✓ Professional service</li>
              <li>✓ Full setup & cleanup</li>
            </ul>
            <p className="text-zara-red font-bold mb-4">Custom pricing</p>
          </div>

          <div className="border-2 border-zara-red rounded-lg p-6">
            <h3 className="text-2xl font-bold text-zara-red mb-4">Premium</h3>
            <p className="text-gray-700 mb-4">
              For larger events of 150+ people
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✓ 5-course meal</li>
              <li>✓ Customized menu</li>
              <li>✓ Full bar service</li>
              <li>✓ Professional staff</li>
              <li>✓ Complete event support</li>
            </ul>
            <p className="text-zara-red font-bold mb-4">Custom pricing</p>
          </div>
        </div>
      </section>

      {/* Menu Selection */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-zara-red mb-6">
            Browse Our Full Menu
          </h2>
          <p className="text-gray-700 mb-8">
            All our regular menu items are available for catering. Choose your favorites or let us suggest a custom menu.
          </p>
          <Link href="/menu" className="btn btn-primary text-lg">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-zara-red text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Cater Your Event?</h2>
          <p className="mb-6 text-lg">
            Contact us today to discuss your catering needs and get a custom quote
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+233591599629"
              className="btn btn-secondary text-lg"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/233591599629?text=I'm interested in catering services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg"
            >
              WhatsApp
            </a>
            <Link href="/contact" className="btn btn-secondary text-lg">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
