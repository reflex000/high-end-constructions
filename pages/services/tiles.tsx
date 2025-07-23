import React from 'react';
import Navbar from '../../components/navbar';
import { Carousel, CarouselItem } from '../../components/carousel';

export default function TilesPage() {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      <Navbar />

      {/* ───────────── HERO SECTION ───────────── */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/tiling.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Precision. Style. Durability.
          </h1>
          <p className="text-xl md:text-xl mb-8">
            Experience flawless tile installations tailored to your lifestyle.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      {/* ───────────── TILE TYPES ───────────── */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-600">We Handle All Major Tile Types</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10">
          Our experts install a variety of tile types for residential and commercial spaces.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Porcelain Tile',
            'Ceramic Tile',
            'Mosaic Accent Tiles',
            'Natural Stone',
            'Glass Tile Backsplashes',
            'Marble & Travertine',
          ].map((name, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow hover:shadow-lg group"
              style={{
                backgroundImage: "url('/images/services/pexels-szafran-24357101.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />
              <div className="relative z-10 flex h-full items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── CLIENT PROJECT SHOWCASE ───────────── */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl font-bold mb-10">Real Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            '1.jpg', '2.jpg', '3.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
          ].map((img, idx) => (
            <a
              key={idx}
              href={`/images/services/${img}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded overflow-hidden shadow block"
            >
              <img
                src={`/images/services/${img}`}
                alt={`Project ${idx + 1}`}
                className="h-60 w-full object-cover hover:opacity-90 transition"
              />
            </a>
          ))}
        </div>
      </section>

      {/* ───────────── TESTIMONIAL CAROUSEL ───────────── */}
      <section className="bg-zinc-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto px-6">
          <Carousel>
            <CarouselItem>
              <blockquote className="text-center text-lg italic text-zinc-700">
                “AKF Wale Constructions delivered clean, professional work on time. Our bathroom looks luxurious now.”
                <footer className="mt-4 text-sm font-semibold text-zinc-900">— Harjit S., Langley</footer>
              </blockquote>
            </CarouselItem>
            <CarouselItem>
              <blockquote className="text-center text-lg italic text-zinc-700">
                “Their attention to detail and tile finishing is next level. Highly recommended.”
                <footer className="mt-4 text-sm font-semibold text-zinc-900">— Simran K., Surrey</footer>
              </blockquote>
            </CarouselItem>
            <CarouselItem>
              <blockquote className="text-center text-lg italic text-zinc-700">
                “Very responsive, professional, and reliable team. Will call them again for my kitchen tiles.”
                <footer className="mt-4 text-sm font-semibold text-zinc-900">— Amrit B., Vancouver</footer>
              </blockquote>
            </CarouselItem>
          </Carousel>
        </div>
      </section>

      {/* ───────────── CTA SECTION ───────────── */}
      <section className="bg-red-600 py-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Tile It Beautifully.</h2>
        <p className="mb-6 text-lg">Book a no-obligation visit and get expert advice tailored to your space.</p>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-white text-red-600 px-8 py-3 font-semibold transition hover:bg-zinc-200"
        >
          Get a Free Quote
        </a>
      </section>

      {/* ───────────── FOOTER (FROM HOMEPAGE) ───────────── */}
      <footer className="bg-zinc-900 text-zinc-200 pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/akfwale1.png" alt="AKF Wale Constructions Ltd Logo" className="w-40 mb-4 brightness-100" />
            <h3 className="text-xl font-bold text-white mb-2">AKF Wale Constructions Ltd.</h3>
            <p className="text-sm text-zinc-400">
              Building excellence from blueprint to finish. Specializing in residential and commercial renovations with a passion for quality and precision.
            </p>
            <div className="flex gap-2 mt-4">
              <img src="/images/worksafebc.jpg" alt="WorkSafeBC" className="h-8" />
              <img src="/images/hba.jpg" alt="Home Builders Association" className="h-8" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Service Areas</h4>
            <ul className="space-y-1 text-sm text-zinc-400">
              <li>Surrey</li><li>Burnaby</li><li>Langley</li><li>Vancouver</li><li>Richmond</li><li>New Westminster</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>📞 <a href="tel:+16047820777" className="underline">+1 (604) 782-0777</a></li>
              <li>✉️ <a href="mailto:mandeepbassi0011@gmail.com" className="underline">mandeepbassi0011@gmail.com</a></li>
              <li className="mt-2">Unit 105 · 8028 128 Street<br />Surrey, BC V3W 4E9</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <a href="https://www.facebook.com/profile.php?id=100063819044966" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5" fill="currentColor"><path d="..."/></svg>
              </a>
              <a href="https://www.instagram.com/akf_wale_construction_ltd" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5" fill="currentColor"><path d="..."/></svg>
              </a>
            </div>
            <a href="/blog" className="underline text-sm text-zinc-400 hover:text-white">Our Blog</a>
          </div>
        </div>
        <div className="mt-8 bg-red-700 py-4">
          <p className="text-center text-sm text-zinc-100">
            © 2025 AKF Wale Constructions Ltd. All rights reserved. Privacy Policy | Web Design by X!phos
          </p>
        </div>
      </footer>
    </div>
  );
}
