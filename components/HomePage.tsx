/* pages/HomePage.tsx */
import React from 'react';
import Navbar from '../components/navbar';
import { CheckCircle } from 'lucide-react'; // Using lucide icons

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
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="shimmer-effect relative mb-6 text-4xl font-extrabold leading-tight text-black drop-shadow md:text-6xl">
            Building Excellence from Blueprint to Finish.
          </h1>
          <p className="mb-8 text-xl text-white md:text-2xl">
            At <strong>High End Constructions</strong>, we deliver everything from
            leak-proof plumbing to luxury renovations—on time, on budget, and without compromise.
          </p>
          <a
            href="mailto:info@highendconstructions.ca"
            className="inline-block rounded-lg bg-black px-10 py-4 text-lg text-white transition hover:bg-zinc-800"
          >
            Get Free Quote
          </a>
        </div>
      </header>

      {/* ───────────── ABOUT US ───────────── */}
      <section id="about" className="bg-white py-20 px-6 md:px-16 lg:px-24">
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">About Us</h2>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              High End Constructions Ltd. is a full-service construction and renovation company
              serving homeowners across British Columbia. With a passion for precision and decades
              of combined experience, we bring visions to life — from site prep and structural
              framing to luxury finishes and smart home features.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-black mt-6 leading-relaxed">
              <span className="text-red-600 font-semibold">Our success</span> is rooted in a
              commitment to exceptional craftsmanship and a love for what we do.
            </h3>

            <p className="text-gray-700 mt-6 max-w-xl mx-auto md:mx-0">
              Your home should be as unique as you are — and we’re here to help you build it,
              renovate it, and elevate it.
            </p>

            {/* ───────────── What Sets Us Apart ───────────── */}
            <div className="mt-8 space-y-4 text-left">
              <h4 className="text-xl font-semibold mb-3">🛠 What Sets Us Apart:</h4>
              {[
                'Fully licensed & insured professionals across all trades',
                'Transparent project management and client communication',
                'Custom design-build solutions tailored to your needs',
                'Dedicated to quality, safety, and long-term durability',
                'Proven experience in both residential and commercial construction',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 opacity-0 animate-fadeIn animation-delay"
                  style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
                >
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <img
              src="/images/sketch.png"
              alt="Architectural Sketch"
              className="w-full max-w-md mx-auto drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ───────────── SERVICES ───────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Residential', link: '/services/residential', img: 'residential.jpg' },
              { title: 'Commercial', link: '/services/commercial', img: 'commercial.jpg' },
              { title: 'Custom Furniture', link: '/services/custom-furniture', img: 'custom.jpg' },
            ].map(({ title, link, img }) => (
              <a
                key={title}
                href={link}
                className="group relative block h-[400px] overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={`/images/services/${img}`}
                  alt={title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
                  <h3 className="mb-4 text-3xl font-bold">{title}</h3>
                  <span className="border-2 border-white px-5 py-2 font-semibold transition hover:bg-white hover:text-black">
                    Explore
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section id="testimonials" className="bg-zinc-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold">What Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic">
                “Their drywall and paint crews finished four days early, and the quality was magazine-worthy.
                I won’t hire anyone else.”
              </p>
              <footer className="font-semibold">— Lisa T., Burnaby</footer>
            </blockquote>
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic">
                “A leaking main line almost shut our café. High End fixed the plumbing overnight
                and resurfaced the floor before opening.”
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
            <span className="text-xl font-semibold">Licensed &amp; Insured · BC #7485632</span>
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
            If any aspect of our workmanship fails within 2 years,&nbsp;we’ll fix it&nbsp;
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
            <p>
              Unit&nbsp;105 · 8028 128 Street<br />
              Surrey, BC V3W 4E9
            </p>
            <div className="mt-4 space-y-1">
              <p>
                Call/Text:&nbsp;
                <a className="underline" href="tel:+16049025879">
                  +1 (604) 902-5879
                </a>
              </p>
              <p>
                Email:&nbsp;
                <a className="underline" href="mailto:info@highendconstructions.ca">
                  info@highendconstructions.ca
                </a>
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
