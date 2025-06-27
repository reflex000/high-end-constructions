/* pages/services/Residential.tsx */
import React from 'react';
import { Bath, Home, Wrench, Paintbrush, Hammer, Lightbulb, DoorOpen, LayoutTemplate, Ruler, Sofa } from 'lucide-react';

export default function ResidentialServices() {
  return (
    <div className="bg-white text-zinc-800 font-sans pt-28 pb-20 px-6 md:px-20">
      {/* ───── Title & Description ───── */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-700 flex items-center justify-center gap-2">
          🏠 Residential Construction & Renovation
        </h1>
        <p className="text-xl md:text-2xl text-zinc-700 max-w-3xl mx-auto">
          <strong>Bringing Your Dream Home to Life — One Detail at a Time</strong>
        </p>
        <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700">
          At <strong className="text-black">High End Constructions Ltd.</strong>, we specialize in full-scope residential services —
          from <strong className="text-red-700">site prep</strong> and <strong className="text-red-700">structural framing</strong> to
          <strong className="text-red-700"> luxury finishes</strong>, <strong className="text-red-700">smart home systems</strong>, and
          <strong className="text-red-700"> custom millwork</strong>. Our licensed experts ensure unmatched quality —
          <em>on time and on budget.</em>
        </p>
      </section>

      {/* ───── Services Grid ───── */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
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
          ].map((service, idx) => (
            <div key={idx} className="flex items-center gap-3 text-lg">
              {service.icon}
              <span className="text-gray-800">{service.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          {[
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
            <div key={idx} className="flex items-center gap-3 text-lg">
              {service.icon}
              <span className="text-gray-800">{service.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
