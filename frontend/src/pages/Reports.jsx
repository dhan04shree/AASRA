import React from "react";

const Reports = () => {
  // Matching your applications data
  const applications = [
    { status: "Pending" },
    { status: "Approved" },
    { status: "Under Review" },
    { status: "Approved" },
    { status: "Rejected" },
  ];

  const totalProjects = 5;
  const totalApplications = applications.length;

  const approved = applications.filter(
    (app) => app.status === "Approved"
  ).length;

  const pending = applications.filter(
    (app) => app.status === "Pending"
  ).length;

  const rejected = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  const underReview = applications.filter(
    (app) => app.status === "Under Review"
  ).length;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Pune Housing & Rehabilitation Reports
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Total Projects</h2>
          <p className="text-3xl font-bold mt-2">{totalProjects}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Total Applications</h2>
          <p className="text-3xl font-bold mt-2">{totalApplications}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Approved</h2>
          <p className="text-3xl font-bold mt-2 text-green-600">
            {approved}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Pending</h2>
          <p className="text-3xl font-bold mt-2 text-yellow-600">
            {pending}
          </p>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">
          Application Status Breakdown
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Approved</span>
            <span className="text-green-600 font-semibold">{approved}</span>
          </div>

          <div className="flex justify-between">
            <span>Pending</span>
            <span className="text-yellow-600 font-semibold">{pending}</span>
          </div>

          <div className="flex justify-between">
            <span>Under Review</span>
            <span className="text-blue-600 font-semibold">
              {underReview}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Rejected</span>
            <span className="text-red-600 font-semibold">{rejected}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
