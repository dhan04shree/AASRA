import { useEffect, useState } from "react";
import { GeoJSON, useMap } from "react-leaflet";

export default function SlumLayer() {
const map = useMap();
const [data, setData] = useState(null);

const loadData = () => {
const b = map.getBounds();
if (!b.isValid()) return;


const url = `http://localhost:3001/api/slum_density?minLng=${b.getWest()}&minLat=${b.getSouth()}&maxLng=${b.getEast()}&maxLat=${b.getNorth()}`;

fetch(url)
  .then(r => r.json())
  .then(d => setData(d));

};

useEffect(() => {
// wait until map finished loading tiles
map.whenReady(() => {
loadData();
});


map.on("moveend", loadData);

return () => {
  map.off("moveend", loadData);
};

}, [map]);

const getColor = (l) =>
l === 4 ? "#023d06" :
l === 3 ? "#00d13f" :
l === 2 ? "#aae4b6" :
"#3cff00";

if (!data) return null;

return (
<GeoJSON
key={JSON.stringify(data)}
data={data}
style={(f) => ({
fillColor: getColor(f.properties.level),
color: "transparent",
fillOpacity: 0.6
})}
/>
);
}
