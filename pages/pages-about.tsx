import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Zara Kitchen</title>
        <meta name="description" content="About Zara Kitchen restaurant" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1>About Zara Kitchen</h1>
          <p>Our Story and Mission</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-zara-red mb-6">Our Story</h2>
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-4">
            Zara Kitchen was founded with a simple mission: to serve good food that brings joy to our customers. 
            Located in the heart of Accra, we have been delighting food lovers with our diverse menu and exceptional service.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small operation has grown into a beloved restaurant, thanks to the support of our loyal customers 
            and the dedication of our talented team.
          </p>
          <p className="text-gray-700 mb-4">
            Our philosophy is simple: use fresh ingredients, prepare meals with care, and treat every customer like family.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-zara-red mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Quality</h3>
              <p className="text-gray-700">
                We source the finest ingredients and maintain the highest standards in food preparation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Integrity</h3>
              <p className="text-gray-700">
                We are honest about our food, transparent with our customers, and ethical in all dealings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-zara-red mb-3">Community</h3>
              <p className="text-gray-700">
                We celebrate our customers and support the local community that has made us successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-zara-red mb-6">Our Team</h2>
        <p className="text-gray-700 mb-6">
          Our team consists of passionate chefs, friendly staff, and dedicated support personnel who are committed 
          to making every visit to Zara Kitchen memorable.
        </p>
        <p className="text-gray-700">
          We believe in continuous improvement and take pride in delivering excellent service to every customer.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="bg-zara-red text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Visit Us Today</h2>
          <p className="mb-4 text-lg">Experience Zara Kitchen's delicious food and warm hospitality</p>
          <p className="mb-6">
            📍 Accra, Ghana<br/>
            📱 +233 591 599 629<br/>
            ✉️ orders@zarakitchen.online
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
