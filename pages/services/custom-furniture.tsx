import React from 'react';
import Navbar from '../../components/navbar';

export default function CustomFurniture() {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      <Navbar />

      {/* ───────────── HERO SECTION ───────────── */}
      <section className="relative pt-32 pb-20 text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/custom-furniture.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            🎨 <br className="hidden md:inline" />Custom Furniture & Specialty Builds
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bespoke Designs. Masterful Craftsmanship. Spaces that Inspire.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Schedule Your Free Quote
          </a>
        </div>
      </section>

      {/* ───────────── INTRO SECTION ───────────── */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <p className="max-w-5xl mx-auto text-lg text-gray-700 mb-6">
          At <span className="text-red-700 font-bold">AKF Wale Constructions Ltd.</span>, we craft unique, custom-designed features to elevate both residential and commercial spaces. From handcrafted furniture to immersive entertainment zones, our skilled artisans bring your vision to life with unmatched craftsmanship and detail.
        </p>

        <div className="grid gap-8 md:grid-cols-2 text-left mt-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">🔸 Custom Furniture</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-800">
              <li>Outdoor Bars & Patio Furniture</li>
              <li>Bedroom Furniture (bed frames, nightstands, dressers)</li>
              <li>Living Room Furniture: Custom Sofas, Coffee Tables & Entertainment Units</li>
              <li>Live Edge & Epoxy Resin Tables</li>
              <li>Dining Tables, Benches & Console Units</li>
              <li>Wall-Mounted or Floating Shelves</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">🔸 Luxury Custom Installations</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-800">
              <li>Home Theater Rooms with smart lighting & recliner seating</li>
              <li>Wine Cellars with climate control and custom shelving</li>
              <li>Feature Walls with wood, marble, LED lighting, and millwork</li>
              <li>Built-in Fireplaces & Mantel Units</li>
              <li>Accent Ceilings & Decorative Paneling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── CALL TO ACTION ───────────── */}
      <section className="bg-red-600 py-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="mb-6 text-lg">Contact our craftsmen today for a free consultation and start bringing your unique ideas to life.</p>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-white text-red-600 px-8 py-3 font-semibold transition hover:bg-zinc-200"
        >
          Schedule Your Free Quote
        </a>
      </section>

      {/* ───────────── TESTIMONIALS SECTION ───────────── */}
      <section className="bg-zinc-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic text-gray-700">
                “High End Constructions built our dream entertainment room — the attention to detail is amazing, and the process was effortless.”
              </p>
              <footer className="font-semibold text-gray-900">— Priya R., Vancouver</footer>
            </blockquote>
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic text-gray-700">
                “Their team created a stunning custom wine cellar that perfectly matches our home’s style. Couldn’t be happier!”
              </p>
              <footer className="font-semibold text-gray-900">— Mark L., Burnaby</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ───────────── NEW FOOTER ───────────── */}
      <footer className="bg-zinc-900 text-zinc-200 pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/akfwale.png" alt="AKF Wale Constructions Logo" className="w-40 mb-4 brightness-200" />
            <h3 className="text-xl font-bold text-white mb-2">High End Constructions Ltd.</h3>
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
              <li>Surrey</li>
              <li>Burnaby</li>
              <li>Langley</li>
              <li>Vancouver</li>
              <li>Richmond</li>
              <li>New Westminster</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>📞 <a href="tel:+16049025879" className="underline">+1 (604) 902-5879</a></li>
              <li>✉️ <a href="mailto:info@highendconstructions.ca" className="underline">info@highendconstructions.ca</a></li>
              <li className="mt-2">
                Unit 105 · 8028 128 Street<br/>Surrey, BC V3W 4E9
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <a href="https://www.facebook.com/profile.php?id=100063819044966" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S261.11 0 225.36 0c-73.22 0-121.09 44.38-121.09 124.72v70.62H22.89V288h81.38v224h100.17V288z"/></svg>
              </a>
              <a href="https://instagram.com/he_constructions_?igsh=aXpuNXBscXV0czJj" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7z"/></svg>
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
