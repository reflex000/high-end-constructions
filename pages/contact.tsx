import React from 'react';
import Navbar from '../components/navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-60 pb-20 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* ────── Form (left) ────── */}
          <section>
            <h1 className="text-3xl font-bold mb-6">Send Message</h1>

            <form className="space-y-5">
              <input className="w-full border p-3 rounded" placeholder="Name" />
              <input className="w-full border p-3 rounded" placeholder="Email*" type="email" />
              <input className="w-full border p-3 rounded" placeholder="Phone" type="tel" />
              <input className="w-full border p-3 rounded" placeholder="Address (Street, City, Zip)" />
              <textarea className="w-full border p-3 rounded" rows={4} placeholder="Message" />
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition w-full md:w-auto"
              >
                Send
              </button>
            </form>
          </section>

          {/* ────── Contact Info (right) ────── */}
          <aside className="space-y-6">
            <img src="/logo.png" alt="High End Constructions" className="h-28 mb-4" />

            <h2 className="text-2xl font-bold">Get a Free Quote</h2>
            <p>
              We strive to be in constant communication with our customers until the job is done.
              For a free quote or special requests, just drop us a line.
            </p>

            <div className="font-medium space-y-2">
              <p>High End Constructions Ltd.</p>
              <p>
                Unit 105 8028 128 Street,<br />Surrey, BC V3W 4E9
              </p>
              <p>📞 +1 (604) 902-5879</p>
              <p>✉️ info@highendconstructions.ca</p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/16049025879"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-green-600 hover:text-green-700 transition"
                aria-label="Chat on WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.938 11.938 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.98L0 24l6.3-1.65A11.945 11.945 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22c-1.79 0-3.54-.45-5.1-1.3l-.36-.2-3.75.98 1-3.65-.24-.38A9.931 9.931 0 0 1 2 12c0-5.52 4.48-10 10-10 2.67 0 5.19 1.04 7.07 2.93A9.931 9.931 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.27-7.36c-.29-.15-1.71-.84-1.98-.93-.27-.1-.46-.15-.65.15s-.75.93-.92 1.12c-.17.2-.34.22-.63.07-1.72-.86-2.84-1.54-3.97-3.49-.3-.5.3-.46.86-1.54.1-.2.05-.37-.03-.52-.07-.15-.65-1.56-.9-2.13-.24-.57-.48-.5-.65-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.23 3.07.15.2 2.11 3.22 5.12 4.51.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.71-.7 1.95-1.37.24-.66.24-1.23.17-1.37-.07-.15-.26-.24-.55-.39z"/>
                </svg>
              </a>
              <span className="text-green-700 font-medium">Contact on WhatsApp</span>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Hours</h3>
              <p>Mon – Fri: 8 am – 5 pm</p>
              <p>Sat: 8 am – 1 pm</p>
              <p>Sun: Closed</p>
            </div>
          </aside>
        </div>
      </main>

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
    </>
  );
}
