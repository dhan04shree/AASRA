import { useState } from "react";
import axios from "axios";

export default function CheckEligi() {
  const [formData, setFormData] = useState({
    income: "",
    category: "",
    age: "",
    locationType: "",
    gender: "",
    hasLand: false,
    bpl: false,
    aadhaar: false,
  });

  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await axios.post("http://localhost:3001/api/eligibility", {
      ...formData,
      income: Number(formData.income),
      age: Number(formData.age),
    });

    setSchemes(res.data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">
            AASRA Scheme Eligibility Checker
          </h1>
          <p className="text-gray-600 mt-2">
            Enter your details to find eligible housing schemes
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="number"
              name="income"
              placeholder="Annual Income"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              onChange={handleChange}
              required
            />

            <select
              name="category"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
              <option value="General">General</option>
              <option value="EWS">EWS</option>
            </select>

            <select
              name="locationType"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              onChange={handleChange}
              required
            >
              <option value="">Urban or Rural</option>
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
            </select>

            <select
              name="gender"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2 text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="hasLand" onChange={handleChange} />
                Own Land
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" name="bpl" onChange={handleChange} />
                BPL Card
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" name="aadhaar" onChange={handleChange} />
                Aadhaar Available
              </label>
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-md"
              >
                {loading ? "Checking..." : "Check Eligibility"}
              </button>
            </div>

          </form>
        </div>

        {/* Results Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Eligible Schemes
          </h2>

          {schemes.length === 0 && !loading && (
            <div className="bg-white p-6 rounded-xl shadow text-gray-500 text-center">
              No schemes found. Try adjusting your details.
            </div>
          )}

          <div className="grid gap-6">
            {schemes.map((scheme) => (
              <div
                key={scheme._id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-indigo-700">
                  {scheme.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {scheme.description}
                </p>

                <a
                  href={scheme.officialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
                >
                  Visit Official Website →
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
