/* pages/HomePage.tsx */
import React from 'react';
import Navbar from '../components/navbar';

export default function HomePage() {
  return (
    <div className="font-sans text-zinc-900 bg-zinc-100">
      {/* ───────────── NAVBAR ───────────── */}
      <Navbar />

      {/* ───────────── HERO ───────────── */}
      <header className="relative flex h-[90vh] items-center justify-center overflow-hidden text-center pt-32">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="shimmer-effect relative mb-6 text-4xl font-extrabold leading-tight text-black drop-shadow md:text-6xl">
            Building Excellence&nbsp;from Blueprint&nbsp;to&nbsp;Finish.
          </h1>

          <p className="mb-8 text-xl text-white md:text-2xl">
            At <strong>High End Constructions</strong> we deliver everything from
            leak-proof plumbing to luxury renovations—on time, on budget, and
            without compromise.
          </p>

          <a
            href="mailto:info@highendconstructions.ca"
            className="inline-block rounded-lg bg-black px-10 py-4 text-lg text-white transition hover:bg-zinc-800"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* ───────────── ABOUT (scroll-target) ───────────── */}
      <section
        id="about"
        className="w-full bg-white py-16 px-6 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
            High End Constructions Ltd. is a full-service construction and
            renovation company serving homeowners across British Columbia. With a
            passion for precision and decades of combined experience, we bring
            visions to life—from site prep and structural framing to luxury
            finishes and smart-home features.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Our&nbsp;success</span>{' '}
            is rooted in a commitment to exceptional craftsmanship and a love
            for what we do. Every member of our team takes pride in creating
            residential spaces that reflect the personality and lifestyle of
            each client.
          </h2>

          <p className="text-gray-700 mt-6 max-w-xl mx-auto md:mx-0">
            We believe your home should be as unique as you are—and we’re here
            to help you build it, renovate it, and elevate it.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/services/sketch.png"  /*  <-- drop sketch image in /public/images */
            alt="Architectural Sketch"
            className="w-full max-w-md mx-auto drop-shadow-md"
          />
        </div>
      </section>

      {/* ───────────── CORE SERVICES ───────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">
            Our Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* ── Residential ── */}
            <a
              href="/services/residential"
              className="group relative block h-[400px] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="/images/services/residential.jpg"
                alt="Residential"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
                <h3 className="mb-4 text-3xl font-bold">Residential</h3>
                <span className="border-2 border-white px-5 py-2 font-semibold transition hover:bg-white hover:text-black">
                  Explore
                </span>
              </div>
            </a>

            {/* ── Commercial ── */}
            <a
              href="/services/commercial"
              className="group relative block h-[400px] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="/images/services/commercial.jpg"
                alt="Commercial"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
                <h3 className="mb-4 text-3xl font-bold">Commercial</h3>
                <span className="border-2 border-white px-5 py-2 font-semibold transition hover:bg-white hover:text-black">
                  Explore
                </span>
              </div>
            </a>

            {/* ── Custom Furniture ── */}
            <a
              href="/services/custom-furniture"
              className="group relative block h-[400px] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="/images/services/custom.jpg"
                alt="Custom Furniture"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
                <h3 className="mb-4 px-3 text-2xl font-bold leading-snug">
                  Custom Furniture&nbsp;&amp;&nbsp;Specialty Builds
                </h3>
                <span className="border-2 border-white px-5 py-2 font-semibold transition hover:bg-white hover:text-black">
                  Explore
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/*  … everything else (Testimonials, Trust bar, etc.) stays unchanged … */}
    </div>
  );
}
