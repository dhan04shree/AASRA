import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, Link } from "react-router-dom";

function ExploreMaps() {
  const { token, loading } = useContext(AuthContext);

  // Filter State
  const [area, setArea] = useState("");
  const [scheme, setScheme] = useState("");
  const [status, setStatus] = useState("");

  if (loading) return null;

  // Protected route
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handleApplyFilters = (e) => {
    e.preventDefault();
    console.log("Applied Filters:", { area, scheme, status });

    // ✅ Later you can connect this with backend API
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ HEADER */}
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded bg-black"></div>
            <h1 className="text-lg font-semibold tracking-wide">A.A.S.R.A</h1>
          </div>

          {/* Navbar */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">
            <Link to="/dashboard" className="hover:text-black">
              Dashboard
            </Link>
            <Link to="/projects" className="hover:text-black">
              Projects
            </Link>
            <Link to="/applications" className="hover:text-black">
              Applications
            </Link>
            <Link to="/reports" className="hover:text-black">
              Reports
            </Link>
            <Link to="/analytics" className="hover:text-black">
              Analytics
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="h-10 w-10 rounded-xl border bg-gray-50 flex items-center justify-center hover:bg-gray-100">
              🔔
            </button>
            <div className="h-10 w-10 rounded-full bg-gray-200 border"></div>
          </div>
        </div>
      </header>

      {/* ✅ MAIN LAYOUT */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ✅ LEFT FILTER PANEL */}
          <aside className="lg:col-span-4">
            <h2 className="text-3xl font-bold mb-8">Filters</h2>

            <form onSubmit={handleApplyFilters}>
              {/* Area */}
              <div className="mb-7">
                <label className="block text-[16px] font-semibold text-gray-800 mb-3">
                  Area
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Hadapsar">Hadapsar</option>
                  <option value="Kothrud">Kothrud</option>
                  <option value="Shivajinagar">Shivajinagar</option>
                </select>
              </div>

              {/* Scheme */}
              <div className="mb-7">
                <label className="block text-[16px] font-semibold text-gray-800 mb-3">
                  Scheme
                </label>
                <select
                  value={scheme}
                  onChange={(e) => setScheme(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="PMAY">PMAY</option>
                  <option value="SlumRehab">Slum Rehabilitation</option>
                  <option value="AffordableHousing">Affordable Housing</option>
                </select>
              </div>

              {/* Status */}
              <div className="mb-10">
                <label className="block text-[16px] font-semibold text-gray-800 mb-3">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="UnderConstruction">Under Construction</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700 transition shadow-sm"
              >
                Apply Filters
              </button>
            </form>
          </aside>

          {/* ✅ RIGHT MAIN CONTENT */}
          <section className="lg:col-span-8">
            <h1 className="text-5xl font-extrabold text-gray-900">
              Interactive Map Dashboard
            </h1>

            <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl">
              Explore the current status of slum rehabilitation projects and
              affordable housing initiatives across Pune.
            </p>

            {/* ✅ BLANK MAP AREA (white page) */}
            <div className="mt-8 h-[520px] w-full rounded-2xl border border-gray-200 bg-white shadow-sm"></div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ExploreMaps;
