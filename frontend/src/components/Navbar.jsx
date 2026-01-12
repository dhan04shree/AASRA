import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { Menu, X, LogOut, UserPlus, LogIn } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsOpen(false);
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-extrabold text-lg text-gray-900 tracking-tight"
            >
              AASRA
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-3">
              {!token ? (
                <>
                  {/* Login - Light */}
                  <Link
                    to="/login"
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition border ${
                      isActive("/login")
                        ? "bg-blue-600 text-white border-blue-600 shadow"
                        : "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <LogIn className="w-4 h-4" />
                      Login
                    </span>
                  </Link>

                  {/* Register - Light */}
                  <Link
                    to="/register"
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition border ${
                      isActive("/register")
                        ? "bg-emerald-600 text-white border-emerald-600 shadow"
                        : "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <UserPlus className="w-4 h-4" />
                      Register
                    </span>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition border
                            bg-red-50 text-red-700 border-red-100 hover:bg-red-100"
                >
                  <span className="flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </span>
                </button>

              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl hover:bg-gray-100 transition"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/*  Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 pt-2">
              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
                {!token ? (
                  <>
                    {/* Mobile Login - Light */}
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition border ${
                        isActive("/login")
                          ? "bg-blue-600 text-white border-blue-600 shadow"
                          : "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <LogIn className="w-4 h-4" />
                        Login
                      </span>
                    </Link>

                    {/* Mobile Register - Light */}
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition border ${
                        isActive("/register")
                          ? "bg-emerald-600 text-white border-emerald-600 shadow"
                          : "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4" />
                        Register
                      </span>
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition border
                              bg-red-50 text-red-700 border-red-100 hover:bg-red-100"
                  >
                    <span className="flex items-center gap-2">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </span>
                  </button>

                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
