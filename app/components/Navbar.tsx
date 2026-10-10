"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h2 className="font-black text-xl">
          Shamil Ahmad
        </h2>

        <a
          href="#contact"
          className="bg-indigo-600 px-6 py-3 rounded-full font-bold"
        >
          Book Strategy Call
        </a>

      </div>
    </header>
  );
}