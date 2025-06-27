import React from 'react';
import Navbar from '../../components/navbar';
import { Bath, Home, Wrench, Paintbrush, Hammer, Lightbulb, DoorOpen, LayoutTemplate, Ruler, Sofa } from 'lucide-react';

export default function Residential() {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      <Navbar />

      {/* ───────────── HERO SECTION ───────────── */}
      <section className="relative pt-32 pb-20 text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/services/residential-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            🏠 Residential Construction & Renovation
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bringing Your Dream Home to Life — One Detail at a Time
          </p>
          <a
            href="mailto:info@highendconstructions.ca"
            className="inline-block rounded-lg bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* ───────────── INTRO SECTION ───────────── */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-6">
          At <span className="text-red-700 font-bold">High End Constructions Ltd.</span>, we specialize in full-scope residential services — from <strong className="text-red-600">site prep</strong> and <strong className="text-red-600">structural framing</strong> to <strong className="text-red-600">luxury finishes</strong>, <strong className="text-red-600">smart home systems</strong>, and <strong className="text-red-600">custom millwork</strong>. Our licensed experts ensure unmatched quality — <em>on time and on budget</em>.
        </p>
      </section>

      {/* ───────────── SERVICES GRID ───────────── */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20">
        {[
          { label: 'Full Home Construction', icon: <Home className="text-red-600 w-6 h-6" /> },
          { label: 'Bathroom Renovations', icon: <Bath className="text-red-600 w-6 h-6" /> },
          { label: 'Kitchen Makeovers', icon: <Wrench className="text-red-600 w-6 h-6" /> },
          { label: 'Basement Finishing', icon: <Paintbrush className="text-red-600 w-6 h-6" /> },
          { label: 'Custom Closets & Storage', icon: <DoorOpen className="text-red-600 w-6 h-6" /> },
          { label: 'Smart Home Integration', icon: <Lightbulb className="text-red-600 w-6 h-6" /> },
          { label: 'Energy-Efficient Upgrades', icon: <Lightbulb className="text-red-600 w-6 h-6" /> },
          { label: 'Framing & Structural Repairs', icon: <Hammer className="text-red-600 w-6 h-6" /> },
          { label: 'Interior Painting', icon: <Paintbrush className="text-red-600 w-6 h-6" /> },
          { label: 'Flooring Installation (Hardwood, Tile, etc.)', icon: <LayoutTemplate className="text-red-600 w-6 h-6" /> },
          { label: 'Garage Additions', icon: <Home className="text-red-600 w-6 h-6" /> },
          { label: 'Custom Decks & Patios', icon: <Ruler className="text-red-600 w-6 h-6" /> },
          { label: 'Window & Door Installation', icon: <DoorOpen className="text-red-600 w-6 h-6" /> },
          { label: 'Insulation & Drywall', icon: <Hammer className="text-red-600 w-6 h-6" /> },
          { label: 'Exterior Siding & Trim', icon: <Paintbrush className="text-red-600 w-6 h-6" /> },
          { label: 'Custom Millwork', icon: <Sofa className="text-red-600 w-6 h-6" /> },
          { label: 'Luxury Finish Carpentry', icon: <Hammer className="text-red-600 w-6 h-6" /> },
          { label: 'Plumbing & Electrical Work', icon: <Wrench className="text-red-600 w-6 h-6" /> },
          { label: 'Roofing & Attic Renovations', icon: <Home className="text-red-600 w-6 h-6" /> },
          { label: 'Home Office Builds', icon: <LayoutTemplate className="text-red-600 w-6 h-6" /> },
        ].map((service, idx) => (
          <div key={idx} className="flex items-center gap-3 text-lg bg-zinc-50 p-4 rounded shadow hover:shadow-lg transition">
            {service.icon}
            <span className="text-gray-800">{service.label}</span>
          </div>
        ))}
      </section>

      {/* ───────────── TESTIMONIALS SECTION ───────────── */}
      <section className="bg-zinc-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic text-gray-700">
                “Our kitchen and bathrooms turned out better than we imagined! High End Constructions guided us through every step.”
              </p>
              <footer className="font-semibold text-gray-900">— Emily & Mark, Vancouver</footer>
            </blockquote>
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic text-gray-700">
                “From permits to final finishes, they delivered exceptional quality. Highly recommend for any home renovation.”
              </p>
              <footer className="font-semibold text-gray-900">— Jason R., Burnaby</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ───────────── CTA SECTION ───────────── */}
      <section className="bg-red-600 py-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
        <p className="mb-6 text-lg">Contact us today for a free consultation and let’s bring your vision to life.</p>
        <a
          href="mailto:info@highendconstructions.ca"
          className="inline-block rounded-lg bg-white text-red-600 px-8 py-3 font-semibold transition hover:bg-zinc-200"
        >
          Book Your Free Quote
        </a>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="bg-zinc-900 py-10 text-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <img src="/logo.png" alt="High End Constructions Logo" className="mx-auto w-40 md:mx-0" />
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
