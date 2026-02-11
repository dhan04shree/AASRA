import { useContext } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Dashboard() {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-6 py-6">
        <nav className="space-y-2">
          {[
            { name: "Dashboard", path: "/dashboard" },
            { name: "Projects", path: "/dashboard/projects" },
            { name: "Applications", path: "/dashboard/applications" },
            { name: "Reports", path: "/dashboard/reports" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-sm ${
                  isActive
                    ? "bg-green-100 text-green-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content changes here */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
