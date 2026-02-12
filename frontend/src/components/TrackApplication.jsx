import React from "react";

export default function TrackApplication() {
  const applications = [
    {
      id: "APP2024-001",
      name: "Aarav Sharma",
      status: "Approved",
      date: "2024-07-26",
      location: "Mumbai",
    },
    {
      id: "APP2024-002",
      name: "Jacob Bennett",
      status: "Approved",
      date: "2024-07-25",
      location: "Delhi",
    },
    {
      id: "APP2024-003",
      name: "Chloe Hayes",
      status: "Rejected",
      date: "2024-07-24",
      location: "Chennai",
    },
    {
      id: "APP2024-004",
      name: "Noah Reed",
      status: "Pending",
      date: "2024-07-23",
      location: "Kolkata",
    },
  ];

  const statusBadge = (status) => {
    if (status === "Approved") {
      return "bg-green-100 text-green-700 border-green-200";
    }
    if (status === "Rejected") {
      return "bg-red-100 text-red-700 border-red-200";
    }
    return "bg-yellow-100 text-yellow-700 border-yellow-200";
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Application Tracking
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Track approval status, date and location of applications.
        </p>

        {/* Table Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Application ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Applicant Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Location
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {applications.map((app, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-gray-700">{app.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {app.name}
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold ${statusBadge(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-700">{app.date}</td>
                  <td className="px-6 py-4 text-gray-700">{app.location}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500">
            <span>Total Applications: {applications.length}</span>
            <span>Updated: Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}
