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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/eligibility", {
      ...formData,
      income: Number(formData.income),
      age: Number(formData.age),
    });

    setSchemes(res.data);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Check Eligibility</h1>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input type="number" name="income" placeholder="Income"
          className="w-full border p-2"
          onChange={handleChange} required />

        <input type="number" name="age" placeholder="Age"
          className="w-full border p-2"
          onChange={handleChange} required />

        <select name="category" className="w-full border p-2"
          onChange={handleChange} required>
          <option value="">Category</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="OBC">OBC</option>
          <option value="General">General</option>
          <option value="EWS">EWS</option>
        </select>

        <select name="locationType" className="w-full border p-2"
          onChange={handleChange} required>
          <option value="">Location</option>
          <option value="Urban">Urban</option>
          <option value="Rural">Rural</option>
        </select>

        <select name="gender" className="w-full border p-2"
          onChange={handleChange} required>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className="flex gap-4">
          <label>
            <input type="checkbox" name="hasLand" onChange={handleChange} />
            Own Land
          </label>

          <label>
            <input type="checkbox" name="bpl" onChange={handleChange} />
            BPL Card
          </label>

          <label>
            <input type="checkbox" name="aadhaar" onChange={handleChange} />
            Aadhaar
          </label>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Check
        </button>
      </form>

      <div className="mt-6">
        {schemes.map((scheme) => (
          <div key={scheme._id} className="border p-3 mb-2 rounded">
            <h3 className="font-bold">{scheme.name}</h3>
            <p>{scheme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
