import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';

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

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
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
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text */}
            <div>
              <p className="text-sm text-gray-600 font-bold mb-2">Get in Touch</p>
              <h1 className="text-5xl md:text-6xl font-bold text-zara-red italic mb-4">
                We'd Love to<br />Hear From You ❤
              </h1>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have a question, feedback, or need assistance?<br />
                Our team is here to help. Reach out to us today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+233591599629"
                  className="bg-zara-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition text-center"
                >
                  📞 Call Us Now
                </a>
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-zara-red text-zara-red px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition text-center"
                >
                  💬 Send Us a Message
                </button>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="hidden md:block">
              <img
                src="/hero/Fried-Rice.png"
                alt="Zara Kitchen Restaurant"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-5xl text-zara-red mb-4">📞</div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Phone / WhatsApp</h3>
              <p className="text-gray-900 font-semibold mb-1">059 159 9629</p>
              <p className="text-gray-900 font-semibold mb-4">+233 59 159 9629</p>
              <p className="text-gray-600 text-sm">Call or WhatsApp us for quick assistance.</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-5xl text-zara-red mb-4">✉️</div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Email</h3>
              <p className="text-gray-900 font-semibold mb-4">orders@zarakitchen.online</p>
              <p className="text-gray-600 text-sm">We'll get back to you as soon as possible.</p>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-5xl text-zara-red mb-4">📍</div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Our Location</h3>
              <p className="text-gray-900 font-semibold mb-4">Accra, Ghana</p>
              <p className="text-gray-600 text-sm">Visit us for a great dining experience.</p>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-5xl text-zara-red mb-4">⏰</div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Opening Hours</h3>
              <p className="text-gray-900 font-semibold text-sm mb-2">Mon - Fri: 8AM - 10PM</p>
              <p className="text-gray-900 font-semibold text-sm mb-2">Sat - Sun: 8AM - 11PM</p>
              <p className="text-gray-600 text-sm">We're open and ready to serve you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM & MAP */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* FORM */}
            <div id="contact-form">
              <h2 className="text-4xl font-bold text-zara-red italic mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll respond as soon as possible.</p>

              {success && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg mb-6">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg mb-6">
                  ❌ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:border-zara-red focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:border-zara-red focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone / WhatsApp *</label>
                    <input
