import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Hadapsar Slum Rehabilitation Scheme",
      location: "Hadapsar, Pune",
      status: "Ongoing",
    },
    {
      id: 2,
      name: "Yerwada Affordable Housing Project",
      location: "Yerwada, Pune",
      status: "Under Construction",
    },
    {
      id: 3,
      name: "Katraj EWS Housing Development",
      location: "Katraj, Pune",
      status: "Planning Phase",
    },
    {
      id: 4,
      name: "Warje Malwadi Redevelopment Project",
      location: "Warje Malwadi, Pune",
      status: "Completed",
    },
    {
      id: 5,
      name: "Shivajinagar Urban Slum Redevelopment",
      location: "Shivajinagar, Pune",
      status: "Ongoing",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Ongoing":
        return "bg-blue-100 text-blue-700";
      case "Under Construction":
        return "bg-yellow-100 text-yellow-700";
      case "Planning Phase":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Pune Housing & Slum Rehabilitation Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-gray-600">Location: {project.location}</p>
            <p className="mt-2">
              Status:{" "}
              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
