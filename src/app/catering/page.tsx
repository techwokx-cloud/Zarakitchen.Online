// src/app/catering/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MENU_CATEGORIES } from '@/data/menu-data'

// Sample catering items (select key items from each category)
const cateringItems = [
  { id: 1, name: 'Jollof Rice & Chicken', price: '₵35', image: '/menu-images/rice-dishes/zara-special.jpg', category: 'rice-dishes' },
  { id: 2, name: 'Chicken Fried Rice', price: '₵35', image: '/menu-images/rice-dishes/chicken-fried-rice.jpg', category: 'rice-dishes' },
  { id: 3, name: 'Banku & Tilapia', price: '₵28', image: '/menu-images/from-grill/banku-grilled-tilapia.jpg', category: 'from-grill' },
  { id: 4, name: 'Grilled Chicken & Plantain', price: '₵32', image: '/menu-images/on-grill/bbq-chicken.jpg', category: 'on-grill' },
  { id: 5, name: 'Waakye with Beef', price: '₵25', image: '/menu-images/ghanaian/fully-loaded-waakye.jpg', category: 'ghanaian' },
  { id: 6, name: 'Spring Rolls', price: '₵15', image: '/menu-images/light-meals/chicken-wrap.jpg', category: 'appetizers' },
  { id: 7, name: 'Fresh Salad', price: '₵12', image: '/menu-images/salads/caesar-salad.jpg', category: 'salads' },
  { id: 8, name: 'Assorted Desserts', price: '₵18', image: '/menu-images/desserts/chocolate-pudding.jpg', category: 'desserts' },
]

export default function CateringPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [orderItems, setOrderItems] = useState<{ [key: number]: number }>({})
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    phone: '',
    guests: '',
    date: '',
    location: '',
    time: '',
    style: 'individual',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const filteredItems = selectedCategory === 'all' 
    ? cateringItems 
    : cateringItems.filter(item => item.category === selectedCategory)

  const handleQuantityChange = (itemId: number, quantity: number) => {
    if (quantity < 0) return
    setOrderItems(prev => ({
      ...prev,
      [itemId]: quantity,
    }))
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const selectedItems = Object.entries(orderItems)
    .filter(([_, qty]) => qty > 0)
    .map(([id]) => {
      const item = cateringItems.find(i => i.id === parseInt(id))
      return item?.name || ''
    })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission (in production, this would go to an API)
    console.log('Catering request:', {
      ...formData,
      selectedItems,
      orderItems,
    })
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        company: '',
        contactPerson: '',
        phone: '',
        guests: '',
        date: '',
        location: '',
        time: '',
        style: 'individual',
        notes: '',
      })
      setOrderItems({})
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-black italic text-red-600 mb-4">
                Corporate Catering<br />Made Easy ❤️
              </h1>
              <p className="text-gray-600 mb-6">
                Choose your meals, enjoy already-discounted menu prices, and get free delivery.
              </p>
              <div className="flex gap-4">
                <a href="#build" className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center gap-2">
                  🍽️ Build Your Catering Order
                </a>
                <a href="#request" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors flex items-center gap-2">
                  📋 Request Catering
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/menu-images/extra-dishes/jollof-rice.jpg"
                alt="Corporate Catering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-red-50 py-12 border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: '👨‍🍳', title: 'Choose Your Own Menu', desc: 'Select the meals that work best for your team or event' },
              { icon: '💰', title: 'Already Discounted', desc: 'Catering meals use discounted menu pricing' },
              { icon: '🚚', title: 'Free Delivery', desc: 'Free delivery for eligible catering orders' },
              { icon: '🍽️', title: 'Buffet Option', desc: 'Choose a buffet setup for larger gatherings and events' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-red-600 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* LEFT: Build Your Catering Order */}
          <div className="col-span-2" id="build">
            <h2 className="text-3xl font-black italic text-red-600 mb-6">Build Your Catering Order</h2>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-gray-200">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-red-200 hover:bg-red-50'
                }`}
              >
                All
              </button>
              {['rice-dishes', 'from-grill', 'on-grill', 'ghanaian', 'appetizers', 'salads', 'desserts'].map(cat => {
                const category = MENU_CATEGORIES.find(c => c.id === cat)
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span>{category?.emoji}</span>
                    {category?.name.split(' ')[0]}
                  </button>
                )
              })}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-2 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-40 bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-red-600 font-bold mb-4">{item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mb-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, (orderItems[item.id] || 0) - 1)}
                        className="w-8 h-8 bg-red-100 text-red-600 rounded hover:bg-red-200"
                      >
                        −
                      </button>
                      <span className="flex-1 text-center font-bold">{orderItems[item.id] || 0}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, (orderItems[item.id] || 0) + 1)}
                        className="w-8 h-8 bg-red-100 text-red-600 rounded hover:bg-red-200"
                      >
                        +
                      </button>
                    </div>

                    <button className="w-full bg-red-600 text-white py-2 rounded font-bold hover:bg-red-700 text-sm">
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="mt-12 flex items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <span className="font-semibold">Choose what you want</span>
              </div>
              <div className="text-2xl">—</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <span className="font-semibold">Select quantities</span>
              </div>
              <div className="text-2xl">—</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <span className="font-semibold">Submit your request</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Request Form */}
          <div id="request">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
              <h3 className="text-2xl font-black italic text-red-600 mb-6">Request Corporate Catering</h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-semibold">
                  ✅ Request submitted! We'll contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company / Organization *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    placeholder="e.g. Acme Ltd"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person *</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleFormChange}
                    placeholder="Full name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="e.g. 0591599629"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests *</label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleFormChange}
                      placeholder="e.g. 20"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleFormChange}
                    placeholder="e.g. Accra, Ghana"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="8am">8:00 AM</option>
                    <option value="9am">9:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="12pm">12:00 PM</option>
                    <option value="1pm">1:00 PM</option>
                    <option value="6pm">6:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Catering Style *</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="style"
                        value="individual"
                        checked={formData.style === 'individual'}
                        onChange={handleFormChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Individual Meals</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="style"
                        value="buffet"
                        checked={formData.style === 'buffet'}
                        onChange={handleFormChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Buffet</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Requirements</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleFormChange}
                    placeholder="Any special requests or notes..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    rows={3}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  🚀 Request Catering
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                We'll review your request and contact you within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl">🎉</span>
          </div>
          <h2 className="text-3xl font-black italic mb-3">Planning a Corporate Event?</h2>
          <p className="text-lg mb-6 text-red-100">
            Let Zara Kitchen take care of the food.
          </p>
          <a
            href="#request"
            className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
          >
            📋 Request Catering
          </a>
        </div>
      </section>
    </div>
  )
}
