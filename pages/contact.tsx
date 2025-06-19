import React from 'react';
import Navbar from '../components/navbar'; // ✅ import the Navbar

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/2092736/pexels-photo-2092736.jpeg")',
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-lg max-w-xl w-full text-white">
          <h1 className="text-3xl font-bold mb-6">Get in touch with High End Constructions</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded text-black"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded text-black"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded text-black"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 rounded text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-zinc-300 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
