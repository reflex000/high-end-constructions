import React from 'react';
import Navbar from '../../components/navbar';
import {
  Building, PenTool, Shield, Users, Wrench, Warehouse, Store, Truck, Monitor, Lock, ClipboardList, HardHat, ArrowUp, Layers, Ruler, Square, Bolt, Flame, FileCheck
} from 'lucide-react';

export default function Commercial() {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      <Navbar />

      {/* ───────────── HERO SECTION ───────────── */}
      <section className="relative pt-32 pb-20 text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/commercial.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            🏢 <br className="hidden md:inline" />Commercial Construction & Maintenance
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Building Your Business Success — One Project at a Time
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

      {/* ───────────── INTRO SECTION ───────────── */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <p className="max-w-5xl mx-auto text-lg text-gray-700 mb-6">
          At <span className="text-red-700 font-bold">High End Constructions Ltd.</span>, we deliver <strong className="text-red-600">full-scope commercial construction</strong> and specialized <strong className="text-red-600">maintenance services</strong> across British Columbia. From retail fit-outs and industrial warehouses to office renovations, parkades, and data centers — our licensed experts provide complete project management and craftsmanship, <em>on time and on budget</em>.
        </p>
      </section>

      {/* ───────────── SERVICES GRID ───────────── */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20">
        {[
          { label: 'Retail Stores & Showrooms', icon: <Store className="text-red-600 w-6 h-6" /> },
          { label: 'Restaurants & Commercial Kitchens', icon: <PenTool className="text-red-600 w-6 h-6" /> },
          { label: 'Medical & Dental Offices', icon: <Shield className="text-red-600 w-6 h-6" /> },
          { label: 'Warehouses & Distribution Centers', icon: <Warehouse className="text-red-600 w-6 h-6" /> },
          { label: 'Office Renovations & Tenant Improvements', icon: <ClipboardList className="text-red-600 w-6 h-6" /> },
          { label: 'Institutional Buildings', icon: <Users className="text-red-600 w-6 h-6" /> },
          { label: 'Gyms, Spas & Wellness Centres', icon: <HardHat className="text-red-600 w-6 h-6" /> },
          { label: 'Commercial Roofing & Cladding', icon: <Building className="text-red-600 w-6 h-6" /> },
          { label: 'Curtainwalls & Storefront Systems', icon: <Layers className="text-red-600 w-6 h-6" /> },
          { label: 'Elevator & Lift Installation', icon: <ArrowUp className="text-red-600 w-6 h-6" /> },
          { label: 'Parkade & Driveway Construction', icon: <Truck className="text-red-600 w-6 h-6" /> },
          { label: 'Fire Protection & Code Compliance', icon: <Flame className="text-red-600 w-6 h-6" /> },
          { label: 'Data Center Fit-ups', icon: <Monitor className="text-red-600 w-6 h-6" /> },
          { label: 'Strata & Property Maintenance', icon: <Wrench className="text-red-600 w-6 h-6" /> },
          { label: 'Security & Life-Safety Integration', icon: <Lock className="text-red-600 w-6 h-6" /> },
          { label: 'Steel Erection & Metal Framing', icon: <Square className="text-red-600 w-6 h-6" /> },
          { label: 'Access Flooring & Raised Systems', icon: <Ruler className="text-red-600 w-6 h-6" /> },
          { label: 'HVAC & Mechanical Systems', icon: <Bolt className="text-red-600 w-6 h-6" /> },
          { label: 'Commercial Kitchen Equipment', icon: <PenTool className="text-red-600 w-6 h-6" /> },
          { label: 'As-Built Surveys & Testing', icon: <FileCheck className="text-red-600 w-6 h-6" /> },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Commercial Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic text-gray-700">
                “High End Constructions transformed our warehouse space flawlessly. They managed everything from permits to final inspection with ease.”
              </p>
              <footer className="font-semibold text-gray-900">— Alex P., Richmond</footer>
            </blockquote>
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic text-gray-700">
                “Our office renovation was delivered on time with exceptional attention to detail. Highly recommend their commercial team!”
              </p>
              <footer className="font-semibold text-gray-900">— Priya S., Vancouver</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ───────────── CTA SECTION ───────────── */}
      <section className="bg-red-600 py-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Commercial Project?</h2>
        <p className="mb-6 text-lg">Contact our experienced team for a free consultation — let’s bring your vision to life.</p>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-white text-red-600 px-8 py-3 font-semibold transition hover:bg-zinc-200"
        >
          Schedule Your Free Quote
        </a>
      </section>

      {/* ───────────── NEW FOOTER ───────────── */}
      <footer className="bg-zinc-900 text-zinc-200 pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="High End Constructions Logo" className="w-40 mb-4 brightness-200" />
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
            © 2025 High End Constructions Ltd. All rights reserved. Privacy Policy | Web Design by X!phos
          </p>
        </div>
      </footer>
    </div>
  );
}
