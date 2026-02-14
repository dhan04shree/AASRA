import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

function ViewSchemes() {
  const navigate = useNavigate();
  const { token, loading } = useContext(AuthContext);

  const [schemes, setSchemes] = useState([]);

  // Auth check
  if (loading) return null;
  if (!token) return <Navigate to="/login" replace />;

  // Fetch schemes from backend
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/schemes")
      .then((res) => setSchemes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          Available Housing Schemes
        </h1>

        {/* Scheme Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {schemes.map((scheme) => (
            <div
              key={scheme._id}
              onClick={() => navigate(`/schemes/${scheme._id}`)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-indigo-600">
                {scheme.name}
              </h2>

              <p className="text-gray-600 mt-2 line-clamp-2">
                {scheme.description}
              </p>

              <div className="mt-4 text-sm text-gray-500">
                <p><strong>State:</strong> {scheme.state}</p>
                <p><strong>Type:</strong> {scheme.type}</p>
              </div>

              <div className="mt-4 text-indigo-600 font-medium">
                View Details →
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ViewSchemes;
