import React from 'react';
import Navbar from '../../components/navbar';
import { Bath, Home, Wrench, Paintbrush, Hammer, Lightbulb, DoorOpen, LayoutTemplate, Ruler, Sofa } from 'lucide-react';

export default function Residential() {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      <Navbar />

      {/* ───────────── HERO SECTION ───────────── */}
      <section
        className="relative pt-32 pb-20 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/residential.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            🏠 <br className="hidden md:inline" />Residential Construction & Renovation
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bringing Your Dream Home to Life — One Detail at a Time
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* ───────────── INTRO SECTION ───────────── */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-6">
          At <span className="text-red-700 font-bold">AKF Wale Constructions Ltd.</span>,we provide full-service construction and renovation <strong className="text-red-600">serving homeowners across British Columbia.</strong> With a focus on craftsmanship and reliability, <strong className="text-red-600">we specialize in tiles, drywall, taping, framing, glass doors, roofing, and custom kitchen cabinetry</strong>  — turning your ideas into beautifully built reality. Our licensed experts ensure unmatched quality — <em>on time and on budget</em>.
        </p>
      </section>

      {/* ───────────── SERVICES GRID ───────────── */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20">
        {[
          { label: 'Bathroom Renovations', icon: <Bath className="text-red-600 w-6 h-6" /> },
          { label: 'Kitchen Makeovers', icon: <Wrench className="text-red-600 w-6 h-6" /> },
          { label: 'Basement Finishing', icon: <Paintbrush className="text-red-600 w-6 h-6" /> },
          { label: 'Custom Closets & Storage', icon: <DoorOpen className="text-red-600 w-6 h-6" /> },
          { label: 'Framing & Structural Repairs', icon: <Hammer className="text-red-600 w-6 h-6" /> },
          { label: 'Interior Painting', icon: <Paintbrush className="text-red-600 w-6 h-6" /> },
          { label: 'Flooring Installation (Hardwood, Tile, etc.)', icon: <LayoutTemplate className="text-red-600 w-6 h-6" /> },
          { label: 'Garage Additions', icon: <Home className="text-red-600 w-6 h-6" /> },
          { label: 'Window & Door Installation', icon: <DoorOpen className="text-red-600 w-6 h-6" /> },
          { label: 'Insulation & Drywall', icon: <Hammer className="text-red-600 w-6 h-6" /> },
          { label: 'Exterior Siding & Trim', icon: <Paintbrush className="text-red-600 w-6 h-6" /> },
          { label: 'Plumbing & Electrical Work', icon: <Wrench className="text-red-600 w-6 h-6" /> },
          { label: 'Roofing & Attic Renovations', icon: <Home className="text-red-600 w-6 h-6" /> },
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
                “Our kitchen and bathrooms turned out better than we imagined! AKF Wale Constructions Ltd guided us through every step.”
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
          href="/contact"
          className="inline-block rounded-lg bg-white text-red-600 px-8 py-3 font-semibold transition hover:bg-zinc-200"
        >
          Book Your Free Quote
        </a>
      </section>

      {/* ───────────── NEW FOOTER ───────────── */}
      <footer className="bg-zinc-900 text-zinc-200 pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/akfwale.png" alt="AKF Wale Constructions Logo" className="w-40 mb-4 brightness-100" />
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
              <li>📞 <a href="tel:+16047820777" className="underline">+1 (604) 782-0777</a></li>
              <li>✉️ <a href="mailto:mandeepbassi0011@gmail.com" className="underline">mandeepbassi0011@gmail.com</a></li>
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
              <a href="https://www.instagram.com/akf_wale_construction_ltd?igsh=MW5xOXB2ZG9waWh0" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition">
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
