import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import { useMap } from "react-leaflet";

function FitBounds({ geoData }) {
  if (!geoData?.features?.length) return;
  const map = useMap();
  useEffect(() => {
    if (!geoData || !geoData.features || geoData.features.length === 0) return;

    const layer = L.geoJSON(geoData);
    const bounds = layer.getBounds();

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [60, 60] });
    }

  }, [geoData, map]);

  return null;
}


function ExploreMaps() {

  const { token, loading } = useContext(AuthContext);
  const mapRef = useRef(null);
// const geoJsonRef = useRef(null);

  // State
  const [area, setArea] = useState("");
  const [geoData, setGeoData] = useState(null);
  const [schemes, setSchemes] = useState([]);
  const [areaInfo, setAreaInfo] = useState(null);

  // Load all slums initially
  useEffect(() => {
    fetch("http://localhost:3001/api/slums")
      .then(res => res.json())
      .then(data => setGeoData(data));
  }, []);
  useEffect(() => {

  // if empty → reset map
  if (!area.trim()) {
    fetch("http://localhost:3001/api/slums")
      .then(res => res.json())
      .then(data => {
        setGeoData(data);
        setAreaInfo(null);
        setSchemes([]);
      });
    return;
  }

  // debounce timer
  const timer = setTimeout(async () => {

    const res = await fetch(`http://localhost:3001/api/area/${area}`);

    if (!res.ok) return;

    const data = await res.json();

    setGeoData({
      type: "FeatureCollection",
      features: [{
        type: "Feature",
        properties: data.area,
        geometry: data.geometry
      }]
    });

    setAreaInfo(data.area);
    setSchemes(data.schemes || []);

  }, 400); // wait 400ms after typing stops

  return () => clearTimeout(timer);

}, [area]);



  if (loading) return null;
  if (!token) return <Navigate to="/login" replace />;



  useEffect(() => {
  if (area.trim() !== "") return;

  // If search box is empty → reset automatically
  fetch("http://localhost:3001/api/slums")
    .then(res => res.json())
    .then(data => {
      setGeoData(data);
      setAreaInfo(null);
      setSchemes([]);
    });

}, [area]);


  // Popup Info
 const onEachFeature = (feature, layer) => {
  const p = feature.properties;

  const popupContent = `
    <b>${p.name}</b><br/>
    Water: ${p.water ? "Available" : "Not Available"}<br/>
    Toilet: ${p.toilet ? "Available" : "Not Available"}<br/>
    Shelter: ${p.shelter ? "Permanent" : "Temporary"}<br/>
    Density: ${p.density}
  `;

  layer.bindPopup(popupContent);

  // Auto open when only one feature
  if (geoData && geoData.features && geoData.features.length === 1) {
    setTimeout(() => layer.openPopup(), 200);
  }
};


  // Color Styling
  const styleFeature = (feature) => {
    const p = feature.properties;

    if (!p.shelter) return { color: "red", weight: 2 };
    if (!p.water) return { color: "blue", weight: 2 };
    if (!p.toilet) return { color: "orange", weight: 2 };

    return { color: "green", weight: 2 };
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT PANEL */}
          <aside className="lg:col-span-4 space-y-4">

            <input
              type="text"
              placeholder="Search area..."
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
              className="border p-2 rounded w-full"
              
            />


            {/* <button
              onClick={searchArea}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Search & Show Schemes
            </button> */}


            {areaInfo && (
              <div className="border p-3 rounded bg-gray-50">
                <h3 className="font-bold mb-2">Area Information</h3>

                <p><b>Name:</b> {areaInfo.name}</p>
                <p><b>Water:</b> {areaInfo.water ? "Available" : "Not Available"}</p>
                <p><b>Toilet:</b> {areaInfo.toilet ? "Available" : "Not Available"}</p>
                <p><b>Shelter:</b> {areaInfo.shelter ? "Permanent" : "Temporary"}</p>
                <p><b>Density:</b> {areaInfo.density}</p>
              </div>
            )}

            {/* Scheme Info */}
           <div className="mt-4">
              <h3 className="font-bold text-lg">Applicable Government Schemes</h3>

              {schemes.length === 0 && areaInfo && (
                <p className="text-gray-500">No schemes available for this area</p>
              )}

              {schemes.map((s) => (
                <div key={s._id} className="border p-3 mt-3 rounded bg-blue-50">
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm">{s.description}</p>
                  <a href={s.officialLink} target="_blank" className="text-blue-600 underline">
                    Official Website
                  </a>
                </div>
              ))}
            </div>


          </aside>

          {/* MAP */}
          <section className="lg:col-span-8">
            <MapContainer
              center={[18.5204, 73.8567]}
              zoom={12}
              whenCreated={(map) => (mapRef.current = map)}
              style={{ height: "80vh" }}
            >
              <TileLayer
                  url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                  subdomains={['mt0','mt1','mt2','mt3']}
                  maxZoom={20}
                />


              {geoData && (
                <>
                  <GeoJSON
                    data={geoData}
                    style={styleFeature}
                    onEachFeature={onEachFeature}
                  />

                  <FitBounds geoData={geoData} />
                </>
              )}
            </MapContainer>

          </section>

        </div>
      </main>
    </div>
  );
}

export default ExploreMaps;
