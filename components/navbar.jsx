import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const hoverTimeoutRef = useRef(null); // ⬅️ for delay buffer

  // Desktop hover enter/leave buffer handlers
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsServicesHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 200); // small delay to avoid flicker
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white
                    text-black flex items-center justify-between
                    py-1 px-6 text-sm tracking-wider font-semibold shadow-md">

      {/* Logo */}
      <div className="flex items-center ml-6">
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

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center relative">
        <Link href="/" className="hover:text-amber-400">HOME</Link>
        <Link href="/about" className="hover:text-amber-400">ABOUT US</Link>

        {/* Desktop SERVICES Dropdown with Hover Buffer */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-amber-400 flex items-center gap-1">
            SERVICES <ChevronDown size={16} />
          </button>
          <div
            className={`absolute top-full left-0 mt-2 bg-white w-64 rounded-md shadow-lg z-50 transition-opacity duration-200 ${
              isServicesHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <Link href="/services/residential" className="block px-4 py-2 text-green-600 hover:bg-amber-100">Residential</Link>
            <Link href="/services/commercial" className="block px-4 py-2 text-green-600 hover:bg-amber-100">Commercial</Link>
            <Link href="/services/custom-furniture" className="block px-4 py-2 text-green-600 hover:bg-amber-100">Custom Furniture & Specialty Builds</Link>
          </div>
        </div>

        <Link href="/gallery" className="hover:text-amber-400">GALLERY</Link>
        <Link href="/contact" className="hover:text-amber-400">CONTACT US</Link>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-start p-4 space-y-3 md:hidden z-40 shadow-md">
          <Link href="/" className="hover:text-amber-400">HOME</Link>
          <Link href="/about" className="hover:text-amber-400">ABOUT US</Link>

          {/* Mobile SERVICES Dropdown Toggle */}
          <div className="w-full">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex justify-between items-center w-full font-semibold text-gray-800"
            >
              SERVICES <ChevronDown size={16} className={`transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileServicesOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/services/residential" className="block text-green-600 hover:underline">Residential</Link>
                <Link href="/services/commercial" className="block text-green-600 hover:underline">Commercial</Link>
                <Link href="/services/custom-furniture" className="block text-green-600 hover:underline">Custom Furniture</Link>
              </div>
            )}
          </div>

          <Link href="/gallery" className="hover:text-amber-400">GALLERY</Link>
          <Link href="/contact" className="hover:text-amber-400">CONTACT US</Link>
        </div>
      )}
    </nav>
  );
}
