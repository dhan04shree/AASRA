import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SchemeDetails() {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/schemes/${id}`)
      .then((res) => setScheme(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!scheme) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow rounded-xl">

      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        {scheme.name}
      </h1>

      <p className="mb-6 text-gray-700">{scheme.description}</p>

      <h2 className="text-xl font-semibold mb-2">Benefits</h2>
      <p className="mb-6">{scheme.benefits}</p>

      <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
      <ul className="space-y-2">
        <li>Income: ₹{scheme.eligibility.minIncome} - ₹{scheme.eligibility.maxIncome}</li>
        <li>Age: {scheme.eligibility.minAge} - {scheme.eligibility.maxAge}</li>
        <li>Categories: {scheme.eligibility.categories.join(", ")}</li>
        <li>Location: {scheme.eligibility.locationType}</li>
        <li>Gender: {scheme.eligibility.gender}</li>
        <li>Land Required: {scheme.eligibility.landOwnershipRequired ? "Yes" : "No"}</li>
        <li>BPL Required: {scheme.eligibility.bplRequired ? "Yes" : "No"}</li>
        <li>Aadhaar Required: {scheme.eligibility.aadhaarRequired ? "Yes" : "No"}</li>
      </ul>

      <div className="mt-6">
        <a
          href={scheme.officialLink}
          target="_blank"
          rel="noreferrer"
          className="bg-indigo-600 text-white px-6 py-2 rounded"
        >
          Official Website
        </a>
      </div>

    </div>
  );
}
