import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md
                    text-black flex items-center justify-between
                    py-4 px-6 text-sm tracking-wider font-semibold shadow-md">
      
      {/* Logo on the top-left, slightly pushed down */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-14 h-14 mt-2" />
      </div>

      {/* Navigation links centered/right-aligned */}
      <div className="flex space-x-8">
        <Link href="/"        className="hover:text-amber-400">HOME</Link>
        <Link href="/about"   className="hover:text-amber-400">ABOUT US</Link>
        <Link href="/services"className="hover:text-amber-400">SERVICES</Link>
        <Link href="/gallery" className="hover:text-amber-400">GALLERY</Link>
        <Link href="/contact" className="hover:text-amber-400">CONTACT US</Link>
      </div>
    </nav>
  );
}
