import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional: uses Lucide icons

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent/30 backdrop-blur-md
                    text-black flex items-center justify-between
                    py-1 px-6 text-sm tracking-wider font-semibold shadow-md">

      {/* Logo */}
      <div className="flex items-center ml-14">
        <img 
          src="/logo1.png" 
          alt="High End Constructions Logo" 
          className="w-40 h-40 mt-2"
        />
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Nav Links (Desktop) */}
      <div className="hidden md:flex space-x-8 items-center relative">
        <Link href="/" className="hover:text-amber-400">HOME</Link>
        <Link href="/about" className="hover:text-amber-400">ABOUT US</Link>

        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className="hover:text-amber-400">SERVICES</button>
          {isServicesOpen && (
            <div className="absolute bg-white mt-2 w-64 rounded-md shadow-lg z-50">
              <Link href="/services/residential" className="block px-4 py-2 text-green-600 hover:bg-amber-100">Residential</Link>
              <Link href="/services/commercial" className="block px-4 py-2 text-green-600 hover:bg-amber-100">Commercial</Link>
              <Link href="/services/custom-furniture" className="block px-4 py-2 text-green-600 hover:bg-amber-100">Custom Furniture & Specialty Builds</Link>
            </div>
          )}
        </div>

        <Link href="/gallery" className="hover:text-amber-400">GALLERY</Link>
        <Link href="/contact" className="hover:text-amber-400">CONTACT US</Link>
      </div>

      {/* Nav Links (Mobile dropdown) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-start p-4 space-y-3 md:hidden z-40 shadow-md">
          <Link href="/" className="hover:text-amber-400">HOME</Link>
          <Link href="/about" className="hover:text-amber-400">ABOUT US</Link>
          <div>
            <div className="font-semibold text-gray-800 mt-2">SERVICES</div>
            <Link href="/services/residential" className="block text-green-600 ml-4 hover:underline">Residential</Link>
            <Link href="/services/commercial" className="block text-green-600 ml-4 hover:underline">Commercial</Link>
            <Link href="/services/custom-furniture" className="block text-green-600 ml-4 hover:underline">Custom Furniture</Link>
          </div>
          <Link href="/gallery" className="hover:text-amber-400">GALLERY</Link>
          <Link href="/contact" className="hover:text-amber-400">CONTACT US</Link>
        </div>
      )}
    </nav>
  );
}
