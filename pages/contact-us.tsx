import React from 'react';

export default function ContactUs() {
  return (
    <div className="relative min-h-screen text-white font-sans pt-32">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg"
        alt="Construction Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Get in Touch with High End Constructions
        </h1>

        <div className="bg-white/90 text-black rounded-lg shadow-lg p-8">
          <form className="grid gap-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" className="w-full p-3 border rounded" placeholder="Your name" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" className="w-full p-3 border rounded" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input type="tel" className="w-full p-3 border rounded" placeholder="+1 604-902-5879" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea className="w-full p-3 border rounded" rows={4} placeholder="Tell us more about your project..." />
            </div>
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white py-3 rounded font-semibold">
              Submit
            </button>
          </form>

          {/* Open WhatsApp Button */}
          <a
            href="https://wa.me/16049025879"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition"
          >
            Open WhatsApp Chat
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-10 text-white">
          <p>📍 Unit 105 8028 128 Street, Surrey, BC V3W 4E9</p>
          <p>📞 +1 (604) 902-5879</p>
          <p>✉️ info@highendconstructions.ca</p>
        </div>
      </div>
    </div>
  );
}
