import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";

export default function SlumHeatLayer({ visible, styleType }) {

const map = useMap();
const heatRef = useRef(null);

// choose blur style
const getStyle = () => {
switch (styleType) {
case "sharp":
return { radius: 10, blur: 10 };
// case "smooth":
// return { radius: 35, blur: 90 };
default:
return { radius: 22, blur: 50 }; // medium
}
};

// load heat data
const loadHeat = async () => {
if (!visible) return;


const b = map.getBounds();
const url = `http://localhost:3001/api/slum_heat?minLng=${b.getWest()}&minLat=${b.getSouth()}&maxLng=${b.getEast()}&maxLat=${b.getNorth()}`;

const res = await fetch(url);
const points = await res.json();

const heatData = points.map(p => [p.lat, p.lng, p.weight]);

// remove previous layer
if (heatRef.current) {
  map.removeLayer(heatRef.current);
  heatRef.current = null;
}

const style = getStyle();

heatRef.current = L.heatLayer(heatData, {
  radius: style.radius,
  blur: style.blur,
  maxZoom: 17,
  gradient: {
    0.2: "#7ec8ff",
  0.4: "#00d4ff",
  0.6: "#ffe600",
  0.8: "#8a00ff"
  }
});

heatRef.current.addTo(map);


};

useEffect(() => {


// if heatmap turned OFF → remove layer
if (!visible) {
  if (heatRef.current) {
    map.removeLayer(heatRef.current);
    heatRef.current = null;
  }
  return;
}

// load first time
map.whenReady(loadHeat);

// reload when map moves
map.on("moveend", loadHeat);

// cleanup when component updates/unmounts
return () => {
  map.off("moveend", loadHeat);
  if (heatRef.current) {
    map.removeLayer(heatRef.current);
    heatRef.current = null;
  }
};


}, [visible, styleType]);   // 👈 VERY IMPORTANT (react re-runs when style changes)

return null;
}
