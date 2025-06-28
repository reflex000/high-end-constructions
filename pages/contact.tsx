import React from 'react';
import Navbar from '../components/navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
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

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/16049025879"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition"
            >
              Open WhatsApp Chat
            </a>
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

            <div>
              <h3 className="font-semibold mb-1">Hours</h3>
              <p>Mon – Fri: 8 am – 5 pm</p>
              <p>Sat: 8 am – 1 pm</p>
              <p>Sun: Closed</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
