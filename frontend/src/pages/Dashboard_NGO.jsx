import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard_NGO = () => {
  const navigate = useNavigate();

  // 🔹 Dummy statistics
  const totalProjects = 5;
  const totalApplications = 120;
  const approved = 75;
  const pending = 45;

  // 🔹 Pie Chart Data
  const applicationData = [
    { name: "Approved", value: approved },
    { name: "Pending", value: pending },
  ];

  const COLORS = ["#16a34a", "#facc15"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">NGO Dashboard</h1>



      {/* 🔥 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Total Projects</h2>
          <p className="text-3xl font-bold mt-2">{totalProjects}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Total Applications</h2>
          <p className="text-3xl font-bold mt-2">{totalApplications}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Approved Applications</h2>
          <p className="text-3xl font-bold mt-2 text-green-600">
            {approved}
          </p>
        </div>
      </div>

      {/* 🔥 Pie Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">
          Applications Status Overview
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={applicationData}
              cx="50%"
              cy="50%"
              outerRadius={130}
              dataKey="value"
              label
            >
              {applicationData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard_NGO;
