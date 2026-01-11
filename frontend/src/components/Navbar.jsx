import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-gray-800">
          Navbar
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`md:flex items-center space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <a href="/register" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
            Register
          </a>
          <a href="/login" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
            Login
          </a>
        </div>
      </div>
    </nav>
      <section className="w-full flex justify-center mt-6">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg">
        
        {/* Background Image (DULL EFFECT) */}
        <img
          src="public/slums.webp"
          alt="AASRA Slum"
          className="w-full h-[260px] object-cover 
                     brightness-75 contrast-75 saturate-50"
        />

        {/* Dark overlay to make it more dull */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white font-extrabold text-4xl tracking-wide drop-shadow">
            AASRA
          </h1>

          <p className="text-white/90 text-sm mt-2 drop-shadow">
            AI Powered Housing and Rehabilitation for Maharashtra
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold shadow-md transition">
              Explore Maps
            </button>

            <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-md font-semibold shadow-md transition">
              Track Application
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
