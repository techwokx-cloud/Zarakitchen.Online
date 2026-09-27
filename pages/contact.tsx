import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact - Zara Kitchen</title>
        <meta name="description" content="Contact Zara Kitchen" />
      </Head>

      <section className="hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-zara-red mb-6">Get in Touch</h2>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <a href="tel:+233591599629" className="text-zara-red hover:underline">
                +233 591 599 629
              </a>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:orders@zarakitchen.online" className="text-zara-red hover:underline">
                orders@zarakitchen.online
              </a>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              
                href="https://wa.me/233591599629"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zara-red hover:underline"
              >
                Chat with us on WhatsApp
              </a>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-700">Accra, Ghana</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 8:00 AM - 10:00 PM<br/>
                Saturday - Sunday: 8:00 AM - 11:00 PM
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zara-red mb-6">Send us a Message</h2>

            {submitted && (
              <div className="bg-zara-green text-white p-4 rounded-lg mb-6">
                ✅ Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
                ❌ {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="mb-6">
                <label className="block font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-2 border-gray-300 rounded-lg p-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full text-lg font-bold disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-zara-red mb-8">
            Visit Our Restaurant
          </h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map placeholder - Accra, Ghana</p>
          </div>
        </div>
      </section>
    </>
  );
}
