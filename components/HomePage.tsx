import React from 'react';
import Navbar from '../components/navbar';

export default function HomePage() {
  return (
    <div className="font-sans text-zinc-900 bg-zinc-100">
      {/* ───────────── NAVBAR ───────────── */}
      <Navbar />

      {/* ───────────── HERO ───────────── */}
      {/* pt-32 pushes the video down so it starts after the fixed navbar */}
      <header className="relative flex h-[90vh] items-center justify-center overflow-hidden text-center pt-32">
        {/* background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source src="/videos/hero2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* headline box */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight text-black drop-shadow relative shimmer-effect">
              Building Excellence from Blueprint to Finish.
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

      {/* ───────────── SERVICE TILE GRID ───────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">
            Our Core Services
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Drywall',               img: '/images/services/drywall.jpg' },
              { title: 'Painting',              img: '/images/services/painting.jpg' },
              { title: 'Flooring',              img: '/images/services/flooring.jpg' },
              { title: 'Cabinets',              img: '/images/services/cabinets.jpg' },
              { title: 'Finishing & Carpentry', img: '/images/services/finishingandcarpentry.jpg' },
            ].map((svc, idx) => (
              <div
                key={idx}
                className="group relative h-[300px] overflow-hidden"
              >
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
                  <h3 className="mb-3 text-2xl font-bold">{svc.title}</h3>
                  <button className="border-2 border-white px-5 py-2 font-semibold transition hover:bg-white hover:text-black">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section id="testimonials" className="bg-zinc-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold">
            What Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic">
                “Their drywall and paint crews finished four days early, and the
                quality was magazine-worthy. I won’t hire anyone else.”
              </p>
              <footer className="font-semibold">— Lisa T., Burnaby</footer>
            </blockquote>
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic">
                “A leaking main line almost shut our café. High End fixed the
                plumbing overnight and resurfaced the floor before opening.”
              </p>
              <footer className="font-semibold">— Sid, New Westminster</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ───────────── TRUST BAR ───────────── */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-600">
            <span className="text-xl font-semibold">4.9★ Google (120+ reviews)</span>
            <span className="hidden h-6 w-px bg-zinc-300 sm:block" />
            <span className="text-xl font-semibold">Licensed & Insured · BC #7485632</span>
            <span className="hidden h-6 w-px bg-zinc-300 sm:block" />
            <span className="text-xl font-semibold">Member — Vancouver Home Builders Assoc.</span>
          </div>
        </div>
      </section>

      {/* ───────────── GUARANTEE ───────────── */}
      <section className="bg-zinc-100 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-semibold">100 % Satisfaction Promise</h2>
          <p className="text-lg">
            If any aspect of our workmanship fails within 2 years, we’ll fix it 
            <strong>free of charge—no questions asked.</strong>
          </p>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="bg-zinc-900 py-10 text-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <img src="/logo.png" alt="High End Constructions Logo" className="mx-auto w-40 md:mx-0" />
            <h3 className="mb-2 text-xl font-bold text-white">High End Constructions Ltd.</h3>
            <p>Unit 105 · 8028 128 Street<br />Surrey, BC V3W 4E9</p>
            <div className="mt-4 space-y-1">
              <p>Call/Text:&nbsp;
                <a className="underline" href="tel:+16049025879">+1&nbsp;(604)&nbsp;902-5879</a>
              </p>
              <p>Email:&nbsp;
                <a className="underline" href="mailto:info@highendconstructions.ca">info@highendconstructions.ca</a>
              </p>
            </div>
          </div>
          <div className="self-center md:self-start">
            <a href="mailto:info@highendconstructions.ca"
               className="inline-block rounded-lg bg-amber-500 px-8 py-3 font-semibold text-zinc-900 transition hover:bg-amber-600">
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
