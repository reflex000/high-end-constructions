import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-center space-x-8 font-semibold text-zinc-800 uppercase text-sm tracking-wide">
      <Link href="/" className="hover:text-amber-600 transition">Home</Link>
      <Link href="/about" className="hover:text-amber-600 transition">About Us</Link>
      <Link href="/services" className="hover:text-amber-600 transition">Services</Link>
      <Link href="/gallery" className="hover:text-amber-600 transition">Gallery</Link>
      <Link href="/contact" className="hover:text-amber-600 transition">Contact Us</Link>
    </nav>
  );
}
