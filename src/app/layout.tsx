import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zara Kitchen | Food & Catering',
  description: 'Delicious food, good mood. Order now or request corporate catering.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍳</span>
              <h1 className="text-2xl font-black italic text-red-600">Zara Kitchen</h1>
            </div>
            <nav className="flex items-center gap-6">
              <a href="/" className="text-gray-700 hover:text-red-600">Home</a>
              <a href="/menu" className="text-gray-700 hover:text-red-600">Menu</a>
              <a href="/catering" className="text-gray-700 hover:text-red-600">Catering</a>
              <a href="/gallery" className="text-gray-700 hover:text-red-600">Gallery</a>
              <a href="https://wa.me/233591599629" className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold">WhatsApp</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-red-600 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm">
            <p className="mb-2">Good Food, Good Mood ❤️</p>
            <p className="text-red-100">© 2026 Zara Kitchen. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
