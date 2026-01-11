import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const quickNavCards = [
    {
      title: "Check Eligibility",
      description: "Determine your eligibility for affordable housing programs.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "View Schemes",
      description: "Discover various housing schemes and initiatives.",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
      title: "Track Application",
      description: "Monitor the status of your housing application.",
      image:
        "https://images.unsplash.com/photo-1580910051074-7f2d8b0b1f4c",
    },
    {
      title: "Explore Housing Maps",
      description: "Explore interactive maps of housing projects and slum clusters.",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764b8a",
    },
  ];

  return (
    <div className="w-full">
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-gray-800">
            AASRA
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

          <div
            className={`md:flex items-center space-x-4 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="/register"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Register
            </a>
            <a
              href="/login"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="w-full flex justify-center mt-6 px-4">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg">
          {/* Background Image */}
          <img
            src="/slums.webp"
            alt="AASRA Slum"
            className="w-full h-[260px] object-cover brightness-75 contrast-75 saturate-50"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white font-extrabold text-4xl tracking-wide drop-shadow">
              AASRA
            </h1>

            <p className="text-white/90 text-sm mt-2 drop-shadow">
              AI Powered Housing and Rehabilitation for Maharashtra
            </p>

            <div className="flex gap-3 mt-6 flex-wrap justify-center">
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

      {/* ================= QUICK NAVIGATION ================= */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Quick Navigation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickNavCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="h-40 overflow-hidden rounded-t-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
