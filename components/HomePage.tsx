/* pages/HomePage.tsx */
import React from 'react';
import Navbar from '../components/navbar';
import { CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="font-sans text-zinc-900 bg-zinc-100 relative">
      {/* ───────────── NAVBAR ───────────── */}
      <Navbar />

      {/* ───────────── HERO ───────────── */}
      <header className="relative flex h-[90vh] items-center justify-center overflow-hidden text-center pt-40">
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
            At <strong>AKF Wale Constructions Ltd</strong>, we deliver everything from precise tile work to full-scale renovations — on time, on budget, and with unmatched attention to detail.
          </p>
          <a
            href="mailto:mandeepbassi0011@gmail.com"
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
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              AKF Wale Constructions Ltd is a full-service construction and renovation company serving homeowners across British Columbia. With a focus on craftsmanship and reliability, we specialize in tiles, drywall, taping, framing, glass doors, roofing, and custom kitchen cabinetry — turning your ideas into beautifully built reality.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-black mt-6 leading-relaxed">
              <span className="text-red-600 font-semibold">Our success</span> is rooted in a commitment to exceptional craftsmanship and a love for what we do. Every member of our team takes pride in creating residential spaces that reflect the personality and lifestyle of each client.
            </h3>
            <p className="text-gray-700 mt-6 max-w-xl mx-auto md:mx-0">
              At AKF Wale Constructions, we believe your home should be as unique as you are — and we’re here to help you build it, renovate it, and elevate it.
            </p>

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
                “Their drywall and paint crews finished four days early, and the quality was magazine-worthy. I won’t hire anyone else.”
              </p>
              <footer className="font-semibold">— Lisa T., Burnaby</footer>
            </blockquote>
            <blockquote className="rounded bg-white p-6 shadow">
              <p className="mb-4 italic">
                “A leaking main line almost shut our café. High End fixed the plumbing overnight and resurfaced the floor before opening.”
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
            <span className="text-xl font-semibold">Licensed & Insured</span>
            <span className="hidden h-6 w-px bg-zinc-300 sm:block" />
            <span className="text-xl font-semibold">Member — Vancouver Home Builders Assoc.</span>
          </div>
        </div>
      </section>

      {/* ───────────── GUARANTEE ───────────── */}
      <section className="bg-zinc-100 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-semibold">100% Satisfaction Promise</h2>
          <p className="text-lg">
            If any aspect of our workmanship fails within 2 years,&nbsp;<strong>we’ll fix it free of charge—no questions asked.</strong>
          </p>
        </div>
      </section>

      {/* ───────────── NEW FOOTER ───────────── */}
      <footer className="bg-zinc-900 text-zinc-200 pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/akfwale.png" alt="AKF Wale Constructions Ltd Logo" className="w-40 mb-4 brightness-100" />
            <h3 className="text-xl font-bold text-white mb-2">AKF Wale Constructions Ltd.</h3>
            <p className="text-sm text-zinc-400">
              Building excellence from blueprint to finish. Specializing in residential and commercial renovations with a passion for quality and precision.
            </p>
            <div className="flex gap-2 mt-4">
              <img src="/images/worksafebc.jpg" alt="WorkSafeBC" className="h-8" />
              <img src="/images/hba.jpg" alt="Home Builders Association" className="h-8" />
            </div>
          </div>

          {/* Service Areas */}
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

          {/* Contact Info */}
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

          {/* Social Links */}
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
