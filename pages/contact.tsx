import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Select a subject',
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
        setFormData({ fullName: '', email: '', phone: '', subject: 'Select a subject', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Failed to send message.');
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
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">Get in Touch</p>
              <h1 className="text-5xl md:text-6xl font-bold text-zara-red italic leading-tight mb-4">
                We'd Love to<br />Hear From You ❤
              </h1>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Have a question, feedback, or need assistance?<br />
                Our team is here to help. Reach out to us today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+233591599629"
                  className="bg-zara-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  <span className="text-xl">☎️</span> Call Us Now
                </a>
                <button
                  onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-zara-red text-zara-red bg-white px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition flex items-center justify-center gap-2"
                >
                  <span className="text-xl">💬</span> Send Us a Message
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block">
              <img
                src="/hero/Fried-Rice.png"
                alt="Zara Kitchen Restaurant"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-zara-red rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                ☎️
              </div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Phone / WhatsApp</h3>
              <p className="text-gray-900 font-semibold text-sm mb-1">059 159 9629</p>
              <p className="text-gray-900 font-semibold text-sm mb-4">+233 59 159 9629</p>
              <p className="text-gray-600 text-sm">Call or WhatsApp us for quick assistance.</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-zara-red rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                ✉️
              </div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Email</h3>
              <p className="text-gray-900 font-semibold text-sm mb-4">orders@zarakitchen.online</p>
              <p className="text-gray-600 text-sm">We'll get back to you as soon as possible.</p>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-zara-red rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                📍
              </div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Our Location</h3>
              <p className="text-gray-900 font-semibold text-sm mb-4">Accra, Ghana</p>
              <p className="text-gray-600 text-sm">Visit us for a great dining experience.</p>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-zara-red rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                🕐
              </div>
              <h3 className="text-lg font-bold text-zara-red mb-3">Opening Hours</h3>
              <p className="text-gray-900 font-semibold text-sm mb-1">Mon - Fri: 8AM - 10PM</p>
              <p className="text-gray-900 font-semibold text-sm mb-4">Sat - Sun: 8AM - 11PM</p>
              <p className="text-gray-600 text-sm">We're open and ready to serve you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM & MAP SECTION */}
      <section id="form-section" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* FORM - LEFT */}
            <div>
              <h2 className="text-4xl font-bold text-zara-red italic mb-2">Send Us a Message</h2>
              <p className="text-gray-600 text-sm mb-8">Fill out the form below and we'll respond as soon as possible.</p>

              {success && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                  ❌ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold text-sm mb-2 flex items-center gap-2">
                      👤 Full Name *
                    </label>
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
                    <label className="block text-gray-700 font-semibold text-sm mb-2 flex items-center gap-2">
                      ✉️ Email Address *
                    </label>
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
                    <label className="block text-gray-700 font-semibold text-sm mb-2 flex items-center gap-2">
                      ☎️ Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 024 123 4567"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:border-zara-red focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold text-sm mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:border-zara-red focus:outline-none"
                      required
                    >
                      <option>Select a subject</option>
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
                  <label className="block text-gray-700 font-semibold text-sm mb-2 flex items-center gap-2">
                    💬 Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:border-zara-red focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-zara-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>✈️</span> {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* MAP & LOCATION - RIGHT */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-zara-red rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zara-red">Find Us</h3>
                  <p className="text-gray-600 text-sm">Accra, Ghana</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6">We are located in Accra and look forward to welcoming you!</p>

              {/* Google Map */}
              <div className="mb-6 rounded-lg overflow-hidden h-64 shadow-md">
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

              {/* Restaurant Image */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/hero/Fried-Rice.png"
                  alt="Zara Kitchen Restaurant"
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATERING SECTION */}
      <section className="bg-zara-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6 flex-1">
              <div className="text-6xl flex-shrink-0">🍽️</div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold italic mb-2">
                  Good Food Brings<br />People Together ❤
                </h2>
                <p className="text-lg">For bookings, large orders or special events, our team is ready to help.</p>
              </div>
            </div>
            <Link href="/catering">
              <button className="bg-white text-zara-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition whitespace-nowrap flex items-center gap-2">
                📅 Request Catering
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
