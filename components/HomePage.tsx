import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-zinc-100 text-zinc-900 font-sans">
      {/* HERO */}
      <header className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/11568645/pexels-photo-11568645.jpeg"
          alt="Pattullo Bridge"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        {/* Logo in Top-Left */}
        <div className="absolute top-4 left-4 z-20">
          <img src="/logo.png" alt="High End Constructions" className="h-14" />
        </div>

        {/* Headline Text */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Precision Craftsmanship, Delivered On Time — Every Time.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            From flawless drywall finishes to leak-proof plumbing, show-home flooring and showroom-ready painting, <strong>High End Constructions</strong> is your single, accountable partner for premium upgrades in Metro Vancouver.
          </p>
          <a href="#cta" className="inline-block bg-black text-white px-10 py-4 rounded-lg text-lg hover:bg-zinc-800 transition">Book My Free Consultation</a>
        </div>
      </header>

      {/* BENEFITS */}
      <section className="py-20" id="benefits">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Why Homeowners Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-2">On-Time, On-Budget</h3>
              <p className="text-sm text-zinc-700">Fixed-price contracts & milestone schedules mean no unpleasant surprises.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Uniform Workmanship</h3>
              <p className="text-sm text-zinc-700">In-house Red-Seal-certified crews across every trade ensure seamless quality.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Clean & Livable</h3>
              <p className="text-sm text-zinc-700">Daily site tidy-ups and HEPA dust control let you live comfortably while we work.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-2">5-Year Warranty</h3>
              <p className="text-sm text-zinc-700">Written workmanship warranty for complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-zinc-200 py-16" id="testimonials">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">What Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <blockquote className="bg-white p-6 rounded shadow">
              <p className="italic mb-4">“Their drywall and paint crews finished four days early, and the quality was magazine-worthy. I won’t hire anyone else.”</p>
              <footer className="font-semibold">— Lisa T., Burnaby</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded shadow">
              <p className="italic mb-4">“A leaking main line almost shut our café. High End fixed the plumbing overnight and resurfaced the floor before opening.”</p>
              <footer className="font-semibold">— Mark R., New Westminster</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-600">
            <span className="text-xl font-semibold">4.9★ Google (120+ reviews)</span>
            <span className="h-6 w-px bg-zinc-300 hidden sm:block"></span>
            <span className="text-xl font-semibold">Licensed & Insured · BC #7485632</span>
            <span className="h-6 w-px bg-zinc-300 hidden sm:block"></span>
            <span className="text-xl font-semibold">Member – Vancouver Home Builders Assoc.</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-red-500 text-white py-8" id="cta">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Only 3 Project Slots Left for Q3 Starts!</h2>
          <p className="mb-6 text-lg">Reserve yours before <strong>July 31</strong> to lock in current pricing.</p>
          <a href="mailto:info@highendconstructions.ca" className="inline-block bg-black/80 hover:bg-black transition px-10 py-4 rounded-lg text-lg">Schedule a Consultation</a>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 bg-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">100% Satisfaction Promise</h2>
          <p className="text-lg">If any aspect of our workmanship fails within five years, we’ll fix it <strong>free of charge — no questions asked.</strong></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
          <div>
            <img src="/logo.png" alt="Logo" className="h-12 mb-4 mx-auto md:mx-0" />
            <h3 className="text-xl font-bold mb-2 text-white">High End Constructions Ltd.</h3>
            <p>Unit 105 8028 128 Street<br />Surrey, BC V3W 4E9</p>
          </div>
          <div>
            <p>Call/Text: <a href="tel:+16049025879" className="underline">+1 (604) 902-5879</a></p>
            <p>Email: <a href="mailto:info@highendconstructions.ca" className="underline">info@highendconstructions.ca</a></p>
          </div>
          <div>
            <a href="#" className="inline-block bg-amber-500 hover:bg-amber-600 transition px-8 py-3 rounded-lg text-zinc-900 font-semibold">Get My Free Consultation</a>
          </div>
        </div>
        <p className="text-center text-sm text-zinc-500 mt-8">© 2025 High End Constructions. All rights reserved.</p>
      </footer>
    </div>
  );
}
