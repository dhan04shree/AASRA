import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";

import SlumHeatLayer from "../pages/SlumHeatLayer";
import SlumLayer from "../pages/SlumLayer";

function ExploreMaps() {

const { token, loading } = useContext(AuthContext);
const mapRef = useRef(null);

// map controls
const [mapType, setMapType] = useState("street");
const [showHeat,setShowHeat] = useState(true);
const [showDensity,setShowDensity] = useState(false);
const [showBoundary,setShowBoundary] = useState(false);

const [heatStyle, setHeatStyle] = useState("medium");


// search states
const [area, setArea] = useState("");
const [geoData, setGeoData] = useState(null);
const [schemes, setSchemes] = useState([]);
const [areaInfo, setAreaInfo] = useState(null);

// initial load
// useEffect(() => {
// fetch("http://localhost:3001/api/slum_boundary")
// .then(res => res.json())
// .then(setGeoData);
// }, []);

// search debounce
useEffect(() => {
if (!area.trim()) return;


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

}, 400);

return () => clearTimeout(timer);


}, [area]);

// auth guard
if (loading) return null;
if (!token) return <Navigate to="/login" replace />;

return ( <div className="min-h-screen bg-white"> <main className="mx-auto max-w-7xl px-6 py-10"> <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">


{/* LEFT PANEL */}
<aside className="lg:col-span-3 space-y-2">

{/* MAP CONTROLS */}

<div className="border rounded-lg bg-white shadow p-5 space-y-6">

  <h3 className="text-xl font-bold">Map Controls</h3>

{/* BASE MAP */}

  <div>
    <div className="font-semibold mb-3">Base Map</div>
    <div className="grid grid-cols-2 gap-3">

  <button
    onClick={() => setMapType("street")}
    className={`py-2 rounded-md border font-medium ${
      mapType==="street" ? "bg-blue-600 text-white" : "bg-gray-100"
    }`}
  >
    Street View
  </button>

  <button
    onClick={() => setMapType("satellite")}
    className={`py-2 rounded-md border font-medium ${
      mapType==="satellite" ? "bg-blue-600 text-white" : "bg-gray-100"
    }`}
  >
    Satellite View
  </button>

</div>

  </div>

{/* LAYERS */}

  <div>
    <div className="font-semibold mb-3">Layers</div>

<div className="space-y-2">

  <button
    onClick={()=>setShowHeat(!showHeat)}
    className={`w-full py-2 rounded-md border text-left px-3 ${
      showHeat ? "bg-blue-600 text-white border-blue-500" : "bg-gray-50"
    }`}
  >
    Heatmap
  </button>

  <button
    onClick={()=>setShowDensity(!showDensity)}
    className={`w-full py-2 rounded-md border text-left px-3 ${
      showDensity ? "bg-blue-600 text-white border-blue-500" : "bg-gray-100"
    }`}
  >
    Density Grid
  </button>

</div>


  </div>

{/* HEAT DETAIL */}
{showHeat && ( <div> <div className="font-semibold mb-3">Heat Detail</div> <div className="grid grid-cols-2 gap-3">

    <button
      onClick={()=>setHeatStyle("sharp")}
      className={`py-2 rounded-md border ${
        heatStyle==="sharp" ? "bg-blue-600 text-white" : "bg-gray-100"
      }`}
    >
      Sharp
    </button>

    <button
      onClick={()=>setHeatStyle("medium")}
      className={`py-2 rounded-md border ${
        heatStyle==="medium" ? "bg-blue-600 text-white" : "bg-gray-100"
      }`}
    >
      Medium
    </button>

  </div>
</div>


)}

</div>



{/* Legend */}
{/* {showHeat && ( <div className="pt-2 border-t"> <div className="font-semibold mb-2">Density Legend</div> <div><span style={{background:"#7ec8ff"}} className="inline-block w-4 h-4 mr-2"></span>Low Density</div> <div><span style={{background:"#00d4ff"}} className="inline-block w-4 h-4 mr-2"></span>Moderate Density</div> <div><span style={{background:"#ffe600"}} className="inline-block w-4 h-4 mr-2"></span>High Density</div> <div><span style={{background:"#8a00ff"}} className="inline-block w-4 h-4 mr-2"></span>Extreme Congestion</div> </div>
)} */}

{/* </div> */}
</aside>

      {/* MAP */}
      <section className="lg:col-span-8 relative">

        {/* CONTROL PANEL */}
        {/* <div className="absolute z-[1000] left-80 top-6 bg-white shadow-lg rounded p-3 w-52 space-y-3 text-sm">

          <div>
            <div className="font-semibold mb-1">Base Map</div>
            <label className="block">
              <input type="radio" checked={mapType==="street"} onChange={()=>setMapType("street")} /> Street
            </label>
            <label className="block">
              <input type="radio" checked={mapType==="satellite"} onChange={()=>setMapType("satellite")} /> Satellite
            </label>
          </div>

          <div>
  <div className="font-semibold mb-1">Data Layers</div>

  <label className="block">
    <input
      type="checkbox"
      checked={showHeat}
      onChange={() => setShowHeat(!showHeat)}
    /> Heatmap
  </label>

{showHeat && ( <div className="ml-4 mt-2 text-xs"> <div className="font-semibold mb-1">Heat Style</div>


  <label className="block">
    <input
      type="radio"
      checked={heatStyle === "sharp"}
      onChange={() => setHeatStyle("sharp")}
    /> Sharp
  </label>

  <label className="block">
    <input
      type="radio"
      checked={heatStyle === "medium"}
      onChange={() => setHeatStyle("medium")}
    /> Medium
  </label>

  
</div>


)}

  <label className="block">
    <input
      type="checkbox"
      checked={showDensity}
      onChange={() => setShowDensity(!showDensity)}
    /> Density Grid
  </label>

  
</div>


        </div> */}

        {/* LEGEND */}
        <div className="absolute bottom-6 left-6 bg-white shadow-md rounded p-5 text-[2.3vh] z-[1000]">
          <div className="font-semibold mb-2">Density Legend</div>
          <div><span style={{background:"#7ec8ff"}} className="inline-block w-4 h-4 mr-2"></span>Low</div>
          <div><span style={{background:"#00d4ff  "}} className="inline-block w-4 h-4 mr-2"></span>Medium</div>
          <div><span style={{background:"#ffe600  "}} className="inline-block w-4 h-4 mr-2"></span>High</div>
          <div><span style={{background:"#8a00ff  "}} className="inline-block w-4 h-4 mr-2"></span>Extreme</div>
        </div>

        <MapContainer
          center={[19.117,72.90]}
          zoom={14}
          whenCreated={(map) => (mapRef.current = map)}
          style={{ height: "80vh"}}
          preferCanvas={true}
        >

          {mapType === "street" ? (
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          ) : (
            <TileLayer
              attribution="Tiles © Esri"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          )}

          <SlumHeatLayer visible={showHeat} styleType={heatStyle}/>
          {showDensity && <SlumLayer/>}

          {showBoundary && geoData && (
            <GeoJSON data={geoData} style={{color:"red",weight:2,fillOpacity:0.05}}/>
          )}

        </MapContainer>

      </section>


    </div>
  </main>
</div>

);
}

export default ExploreMaps;
