import React from "react";

const Applications = () => {
  const applications = [
    {
      id: 1,
      name: "Ramesh Patil",
      project: "Hadapsar Slum Rehabilitation Scheme",
      status: "Pending",
      date: "2025-01-10",
    },
    {
      id: 2,
      name: "Sneha Kulkarni",
      project: "Yerwada Affordable Housing Project",
      status: "Approved",
      date: "2025-01-08",
    },
    {
      id: 3,
      name: "Amit Shinde",
      project: "Katraj EWS Housing Development",
      status: "Under Review",
      date: "2025-01-12",
    },
    {
      id: 4,
      name: "Pooja Jadhav",
      project: "Warje Malwadi Redevelopment Project",
      status: "Approved",
      date: "2025-01-05",
    },
    {
      id: 5,
      name: "Rahul More",
      project: "Shivajinagar Urban Slum Redevelopment",
      status: "Rejected",
      date: "2025-01-09",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Under Review":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Pune Housing Applications
      </h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Applicant</th>
              <th className="p-4">Project</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-4 font-medium">{app.name}</td>
                <td className="p-4 text-blue-600">{app.project}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{app.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
