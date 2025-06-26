import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent/30 backdrop-blur-md
                    text-black flex items-center justify-between
                    py-1 px-6 text-sm tracking-wider font-semibold shadow-md">

      {/* Left: Logo */}
      <div className="flex items-center ml-14">
        <img 
          src="/logo1.png" 
          alt="High End Constructions Logo" 
          className="w-40 h-40 mt-2"
        />
      </div>

      {/* Right: Nav links */}
      <div className="flex space-x-8 items-center relative">
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
    </nav>
  );
}
