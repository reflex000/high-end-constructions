import React from 'react';
import Navbar from '../components/navbar';

export default function HomePage() {
  return (
    <div className="bg-zinc-100 text-zinc-900 font-sans">
      <Navbar />

      {/* HERO */}
      <header className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Logo in Top-Left */}
        <div className="absolute top-4 left-4 z-20">
          <img src="/logo.png" alt="High End Constructions" className="h-14" />
        </div>

        {/* Headline Text */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md text-white">
            Building Excellence from Blueprint to Finish.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            At <strong>High End Constructions</strong>, we specialize in delivering everything from leak-proof plumbing to luxury renovations — on time, on budget, and with zero compromise on craftsmanship.
          </p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-lg text-lg hover:bg-zinc-800 transition"
          >
            Book My Free Consultation
          </a>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="bg-white py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20">
          {[
            { title: 'Drywall', image: '/images/services/drywall.jpg' },
            { title: 'Painting', image: '/images/services/painting.jpg' },
            { title: 'Flooring', image: '/images/services/flooring.jpg' },
            { title: 'Cabinets', image: '/images/services/cabinets.jpg' },
            { title: 'Finishing & Carpentry', image: '/images/services/finishingandcarpentry.jpg' }
          ].map((service, idx) => (
            <div
              key={idx}
              className="relative group h-72 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
              />
              <div className="relative z-10 flex flex-col h-full items-center justify-center text-white text-center px-4">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <a
                  href="#"
                  className="px-5 py-2 border-2 border-white rounded hover:bg-white hover:text-black transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-zinc-100" id="benefits">
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
            <a href="#contact" className="inline-block bg-amber-500 hover:bg-amber-600 transition px-8 py-3 rounded-lg text-zinc-900 font-semibold">Get My Free Consultation</a>
          </div>
        </div>
        <p className="text-center text-sm text-zinc-500 mt-8">© 2025 High End Constructions. All rights reserved.</p>
      </footer>
    </div>
  );
}
