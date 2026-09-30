import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Zara Kitchen</title>
      </Head>

      {/* HERO SECTION */}
      <section className="relative h-96 md:h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero/Fried-Rice.png)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="md:w-1/2">
            <p className="text-sm md:text-lg text-white font-bold mb-2">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white italic mb-4">
              We'd Love to<br />Hear From You ❤
            </h1>
            <p className="text-base md:text-lg text-white mb-6">
              Have a question, feedback, or need assistance?<br />
              Our team is here to help. Reach out to us today!
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="tel:+233591599629"
                className="bg-zara-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition text-center"
              >
                📞 Call Us Now
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-zara-red text-zara-red px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition text-center bg-white"
              >
                💬 Send Us a Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-zara-red mb-4">📞</div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Phone / WhatsApp</h3>
              <p className="text-gray-800 font-semibold mb-1">059 159 9629</p>
              <p className="text-gray-800 font-semibold mb-4">+233 59 159 9629</p>
              <p className="text-gray-600 text-sm">Call or WhatsApp us for quick assistance.</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-zara-red mb-4">✉️</div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Email</h3>
              <p className="text-gray-800 font-semibold mb-4">orders@zarakitchen.online</p>
              <p className="text-gray-600 text-sm">We'll get back to you as soon as possible.</p>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-zara-red mb-4">📍</div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Our Location</h3>
              <p className="text-gray-800 font-semibold mb-4">Accra, Ghana</p>
              <p className="text-gray-600 text-sm">Visit us for a great dining experience.</p>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-zara-red mb-4">⏰</div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Opening Hours</h3>
              <p className="text-gray-800 font-semibold text-sm mb-2">Mon - Fri: 8AM - 10PM</p>
              <p className="text-gray-800 font-semibold text-sm mb-4">Sat - Sun: 8AM - 11PM</p>
              <p className="text-gray-600 text-sm">We're open and ready to serve you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & MAP */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* FORM */}
            <div id="contact-form">
              <h2 className="text-4xl font-bold text-zara-red italic mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll respond as soon as possible.</p>

              {success && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 p-4 rounded-lg mb-6">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="bg-red-100 border-2 border-red-500 text-red-700 p-4 rounded-lg mb-6">
                  ❌ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zara-red focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zara-red focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 024 123 4567"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zara-red focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 font-semibold mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zara-red focus:outline-none"
                      required
                    >
                      <option>General Inquiry</option>
                      <option>Order Issue</option>
                      <option>Feedback</option>
                      <option>Catering Request</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-zara-red focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-zara-red text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition disabled:opacity-50"
                >
                  {loading ? '⏳ Sending...' : '✈️ Send Message'}
                </button>
              </form>
            </div>

            {/* MAP & LOCATION */}
            <div>
              <h3 className="text-2xl font-bold text-zara-red mb-6 flex items-center gap-2">
                📍 Find Us
              </h3>
              <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8187826815753!2d-0.20447!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sAccra!2sGhana!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="text-gray-700 font-semibold text-lg mb-2">Accra, Ghana</p>
              <p className="text-gray-600 mb-6">
                We are located in Accra and look forward to welcoming you!
              </p>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/hero/Fried-Rice.png"
                  alt="Zara Kitchen Restaurant"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATERING SECTION */}
      <section className="bg-zara-red text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="text-5xl mb-4">🍽️</div>
            <h2 className="text-3xl md:text-4xl font-bold italic mb-2">
              Good Food Brings<br />People Together ❤
            </h2>
            <p className="text-lg mb-6">
              For bookings, large orders or special events, our team is ready to help.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link href="/catering">
              <button className="bg-white text-zara-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                📅 Request Catering
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* RED FOOTER */}
      <footer className="bg-zara-red text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8">
            {/* Logo & Tagline */}
            <div>
              <h4 className="font-bold text-lg md:text-xl mb-2">🍃 Zara Kitchen</h4>
              <p className="text-xs md:text-sm font-semibold">Good Food, Good Mood</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li>✓ <Link href="/">Home</Link></li>
                <li>✓ <Link href="/menu">Menu</Link></li>
                <li>✓ <Link href="/about">About Us</Link></li>
                <li>✓ <Link href="/gallery">Gallery</Link></li>
                <li>✓ <Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Contact Us</h4>
              <p className="text-xs md:text-sm mb-2 flex items-center gap-2">
                <span>✉️</span> orders@zarakitchen.online
              </p>
              <p className="text-xs md:text-sm mb-2 flex items-center gap-2">
                <span>📞</span> 059 159 9629
              </p>
              <p className="text-xs md:text-sm flex items-center gap-2">
                <span>📱</span> 059 236 1289
              </p>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Opening Hours</h4>
              <p className="text-xs md:text-sm mb-1">Mon - Fri: 8AM - 10PM</p>
              <p className="text-xs md:text-sm">Sat - Sun: 8AM - 11PM</p>
            </div>

            {/* Download App & Social */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4">Download App</h4>
              <div className="bg-yellow-400 text-black p-2 md:p-3 rounded text-center font-bold text-xs mb-3">
                📱 Install PWA<br />
                <span className="text-xs">Order faster. Save favourites.</span>
              </div>
              <div className="flex gap-3 justify-center text-lg">
                <a href="#" className="hover:opacity-80">f</a>
                <a href="#" className="hover:opacity-80">📷</a>
                <a href="#" className="hover:opacity-80">🎵</a>
                <a href="#" className="hover:opacity-80">▶</a>
                <a href="#" className="hover:opacity-80">X</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/30 pt-4 text-center text-xs md:text-sm">
            <p>&copy; 2026 Zara Kitchen. All rights reserved. | Download. Order. Enjoy!</p>
          </div>
        </div>
      </footer>
    </>
  );
}
