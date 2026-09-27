import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-zara-red rounded-full flex items-center justify-center text-white font-bold text-lg">
            Z
          </div>
          <span className="navbar-brand hidden sm:inline">Zara Kitchen</span>
        </Link>

        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className={`nav-links ${isOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-gray-800 p-4 rounded-b' : 'hidden sm:flex'}`}>
          <Link href="/" className="hover:text-zara-red">
            Home
          </Link>
          <Link href="/menu" className="hover:text-zara-red">
            Menu
          </Link>
          <Link href="/about" className="hover:text-zara-red">
            About
          </Link>
          <Link href="/gallery" className="hover:text-zara-red">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-zara-red">
            Contact
          </Link>
          <a
            href="https://wa.me/233591599629"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
