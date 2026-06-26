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
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/eligibility`,
        {
          ...formData,
          income: Number(formData.income),
          age: Number(formData.age),
        }
      );

      setSchemes(res.data);
    } catch (error) {
      console.log(error);
      setSchemes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">
            AASRA Scheme Eligibility Checker
          </h1>
          <p className="text-slate-600 mt-2">
            Enter your details to find housing and rehabilitation schemes you may be eligible for.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 mb-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Income */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Annual Income
              </label>
              <input
                type="number"
                name="income"
                value={formData.income}
                placeholder="Enter annual income"
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none"
                onChange={handleChange}
                required
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                placeholder="Enter age"
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none"
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none"
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="General">General</option>
                <option value="EWS">EWS</option>
                <option value="LIG">LIG</option>
                <option value="MIG">MIG</option>
                <option value="BPL">BPL</option>
              </select>
            </div>

            {/* Location Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Location Type
              </label>
              <select
                name="locationType"
                value={formData.locationType}
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none"
                onChange={handleChange}
                required
              >
                <option value="">Select Location</option>
                <option value="Urban">Urban</option>
                <option value="Rural">Rural</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 outline-none"
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Any">Prefer schemes open to all</option>
              </select>
            </div>

            {/* Eligibility Options */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Additional Details
              </label>

              <div className="space-y-3 border border-slate-200 rounded-xl p-4 bg-slate-50">
                <label className="flex items-center gap-3 text-slate-700">
                  <input
                    type="checkbox"
                    name="hasLand"
                    checked={formData.hasLand}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Own land / property
                </label>

                <label className="flex items-center gap-3 text-slate-700">
                  <input
                    type="checkbox"
                    name="bpl"
                    checked={formData.bpl}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Have BPL card
                </label>

                <label className="flex items-center gap-3 text-slate-700">
                  <input
                    type="checkbox"
                    name="aadhaar"
                    checked={formData.aadhaar}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Aadhaar available
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center pt-2">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition"
                disabled={loading}
              >
                {loading ? "Checking..." : "Check Eligibility"}
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-5">
            Eligible Schemes
          </h2>

          {!loading && searched && schemes.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-slate-500 text-center">
              No eligible schemes found for the entered details.
            </div>
          )}

          <div className="grid gap-6">
            {schemes.map((scheme) => (
              <div
                key={scheme._id}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6"
              >
                {/* Header */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {scheme.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {scheme.type || "Housing"} • {scheme.state || "India"}
                    {scheme.launchYear ? ` • ${scheme.launchYear}` : ""}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-700 leading-7 mb-4">
                  {scheme.description}
                </p>

                {/* Scheme info */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-sm text-slate-500 mb-1">Apply Mode</p>
                    <p className="font-medium text-slate-900">
                      {scheme.applyMode || "Not specified"}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-sm text-slate-500 mb-1">Income Group</p>
                    <p className="font-medium text-slate-900">
                      {scheme.incomeGroup?.length > 0
                        ? scheme.incomeGroup.join(", ")
                        : "Not specified"}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                {scheme.benefits?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                      Key Benefits
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      {scheme.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Eligibility snapshot */}
                <div className="mb-5 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">Eligibility:</span>{" "}
                    {scheme.eligibility?.locationType || "Any location"} •{" "}
                    {scheme.eligibility?.gender || "Any gender"} •{" "}
                    Age {scheme.eligibility?.minAge ?? "N/A"}
                    {scheme.eligibility?.maxAge
                      ? ` - ${scheme.eligibility.maxAge}`
                      : "+"}
                  </p>
                </div>

                {/* Button */}
                {scheme.officialLink && (
                  <a
                    href={scheme.officialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium transition"
                  >
                    Visit Official Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}