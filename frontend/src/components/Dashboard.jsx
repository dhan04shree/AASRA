import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Dashboard() {
  const { token, loading } = useContext(AuthContext);

  // While auth state is loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  // If not authenticated → redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Authenticated dashboard UI
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-6 py-6 relative">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-green-700" />
          <span className="font-semibold">A.A.S.R.A</span>
        </div>

        <nav className="space-y-2">
          {["Dashboard", "Projects", "Applications", "Reports", "Settings"].map(
            (item, idx) => (
              <div
                key={item}
                className={`px-4 py-2 rounded-lg cursor-pointer text-sm ${
                  idx === 0
                    ? "bg-green-100 text-green-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </div>
            )
          )}
        </nav>

        <div className="absolute bottom-6 left-6 text-sm text-gray-500">
          Help and Docs
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              placeholder="Search"
              className="px-4 py-2 border rounded-lg text-sm"
            />
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { label: "Total Projects", value: 120 },
            { label: "Active Applications", value: 45 },
            { label: "Completed Projects", value: 75 },
          ].map((item) => (
            <div key={item.label} className="bg-white p-6 rounded-xl border">
              <p className="text-sm text-gray-500 mb-2">{item.label}</p>
              <p className="text-2xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-medium mb-4">Recent Applications</h2>
          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="text-left py-2">Applicant Name</th>
                <th className="text-left py-2">Project</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Date Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                {
                  name: "Emily Carter",
                  project: "Green Valley Housing",
                  status: "Pending",
                  date: "2024-07-20",
                },
                {
                  name: "Liam Foster",
                  project: "Urban Renewal Initiative",
                  status: "Approved",
                  date: "2024-07-15",
                },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="py-3">{row.name}</td>
                  <td className="text-green-700">{row.project}</td>
                  <td>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">
                      {row.status}
                    </span>
                  </td>
                  <td className="text-gray-500">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
