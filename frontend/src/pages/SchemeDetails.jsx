import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SchemeDetails() {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/schemes/${id}`)
      .then((res) => {
        setScheme(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return "Not specified";
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!scheme) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-rose-600 text-lg">Scheme not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200 rounded-2xl p-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">
          {scheme.name}
        </h1>

        {/* Basic Info */}
        <div className="text-sm text-slate-500 mb-6 flex flex-wrap gap-x-3 gap-y-1">
          <span>{scheme.type || "Housing"}</span>
          <span>•</span>
          <span>{scheme.state || "India"}</span>
          {scheme.launchYear && (
            <>
              <span>•</span>
              <span>{scheme.launchYear}</span>
            </>
          )}
          {scheme.status && (
            <>
              <span>•</span>
              <span>{scheme.status}</span>
            </>
          )}
        </div>

        {/* Description */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Description
          </h2>
          <p className="text-slate-700 leading-7">
            {scheme.description || "No description available."}
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Benefits
          </h2>

          {scheme.benefits?.length > 0 ? (
            <ul className="space-y-2 list-disc pl-5 text-slate-700">
              {scheme.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">No benefits listed.</p>
          )}
        </section>

        {/* Eligibility */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Eligibility
          </h2>

          <ul className="space-y-3 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Income Range:</span>{" "}
              {formatCurrency(scheme.eligibility?.minIncome)}
              {scheme.eligibility?.maxIncome !== null &&
              scheme.eligibility?.maxIncome !== undefined
                ? ` - ${formatCurrency(scheme.eligibility?.maxIncome)}`
                : "+"}
            </li>

            <li>
              <span className="font-semibold text-slate-900">Age:</span>{" "}
              {scheme.eligibility?.minAge ?? "N/A"}
              {scheme.eligibility?.maxAge
                ? ` - ${scheme.eligibility.maxAge}`
                : "+"}
            </li>

            <li>
              <span className="font-semibold text-slate-900">Categories:</span>{" "}
              {scheme.eligibility?.categories?.length > 0
                ? scheme.eligibility.categories.join(", ")
                : "Not specified"}
            </li>

            <li>
              <span className="font-semibold text-slate-900">Gender:</span>{" "}
              {scheme.eligibility?.gender || "Any"}
            </li>

            <li>
              <span className="font-semibold text-slate-900">Location Type:</span>{" "}
              {scheme.eligibility?.locationType || "Not specified"}
            </li>

            <li>
              <span className="font-semibold text-slate-900">
                Land Ownership Required:
              </span>{" "}
              {scheme.eligibility?.landOwnershipRequired ? "Yes" : "No"}
            </li>

            <li>
              <span className="font-semibold text-slate-900">BPL Required:</span>{" "}
              {scheme.eligibility?.bplRequired ? "Yes" : "No"}
            </li>

            <li>
              <span className="font-semibold text-slate-900">
                Aadhaar Required:
              </span>{" "}
              {scheme.eligibility?.aadhaarRequired ? "Yes" : "No"}
            </li>
          </ul>
        </section>

        {/* Required Documents */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Required Documents
          </h2>

          {scheme.requiredDocuments?.length > 0 ? (
            <ul className="space-y-2 list-disc pl-5 text-slate-700">
              {scheme.requiredDocuments.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">No document list available.</p>
          )}
        </section>

        {/* Official website */}
        {scheme.officialLink && (
          <div className="mt-8">
            <a
              href={scheme.officialLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Official Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}