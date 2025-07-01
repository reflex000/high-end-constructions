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

            {/* WhatsApp Icon Link */}
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
    </>
  );
}
