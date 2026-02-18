const express = require("express");
const router = express.Router();
const pool = require("../config/postgres");

router.get("/", async (req, res) => {

  const { area, scheme } = req.query;

  let conditions = [];

  // area search
  if (area && area.trim() !== "") {
    conditions.push(`LOWER(name) LIKE LOWER('%${area}%')`);
  }

  // scheme conditions
  if (scheme === "PMAY") conditions.push("shelter = false");
  if (scheme === "Sanitation") conditions.push("toilet = false");
  if (scheme === "Water") conditions.push("water = false");

  let whereClause = conditions.length ? "WHERE " + conditions.join(" AND ") : "";

  const result = await pool.query(`
    SELECT name, shelter, water, toilet, electricity, density,
    ST_AsGeoJSON(geom) as geometry
    FROM slum_clusters
    ${whereClause};
  `);

  res.json({
    type: "FeatureCollection",
    features: result.rows.map(r => ({
      type: "Feature",
      properties: {
        name: r.name,
        shelter: r.shelter,
        water: r.water,
        toilet: r.toilet,
        electricity: r.electricity,
        density: r.density
      },
      geometry: JSON.parse(r.geometry)
    }))
  });

});

module.exports = router;
