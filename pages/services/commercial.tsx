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
              href="/contact"
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
