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
            href="mailto:info@highendconstructions.ca"
            className="inline-block rounded-lg bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Schedule Your Free Quote
          </a>
        </div>
      </section>

      {/* ───────────── INTRO SECTION ───────────── */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <p className="max-w-5xl mx-auto text-lg text-gray-700 mb-6">
          At <span className="text-red-700 font-bold">High End Constructions Ltd.</span>, we craft unique, custom-designed features to elevate both residential and commercial spaces. From handcrafted furniture to immersive entertainment zones, our skilled artisans bring your vision to life with unmatched craftsmanship and detail.
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
          href="mailto:info@highendconstructions.ca"
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

      {/* ───────────── FOOTER ───────────── */}
      <footer className="bg-zinc-900 py-6 text-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <img src="/logo.png" alt="High End Constructions Logo" className="mx-auto w-40 md:mx-0 brightness-200" />
            <h3 className="mb-2 text-xl font-bold text-white">High End Constructions Ltd.</h3>
            <p>
              Unit&nbsp;105 · 8028 128 Street<br />
              Surrey, BC V3W 4E9
            </p>
            <div className="mt-4 space-y-1">
              <p>
                Call/Text:&nbsp;<a className="underline" href="tel:+16049025879">+1 (604) 902-5879</a>
              </p>
              <p>
                Email:&nbsp;<a className="underline" href="mailto:info@highendconstructions.ca">info@highendconstructions.ca</a>
              </p>
            </div>
          </div>
          <div className="self-center md:self-start">
            <a
              href="mailto:info@highendconstructions.ca"
              className="inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-zinc-900 transition hover:bg-amber-600"
            >
              Free Consultation
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          © 2025 High End Constructions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
