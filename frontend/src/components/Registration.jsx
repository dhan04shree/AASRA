import { useState } from "react";
import axios from "axios";
import { User, Lock, Eye, EyeOff, Loader2 } from "lucide-react";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        { username, password }
      );

      setMessage({ type: "success", text: response.data.message });
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Registration failed:", error);
      setMessage({
        type: "error",
        text: error?.response?.data?.error || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Register to continue to AASRA
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="relative mt-2">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                transition shadow-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-2xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                transition shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPass((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl py-3 font-semibold text-white bg-blue-600 
            hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg
            disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Account...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Messages */}
        {message.text && (
          <div
            className={`mt-5 text-sm text-center px-4 py-3 rounded-2xl font-medium ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
