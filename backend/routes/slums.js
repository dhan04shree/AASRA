const express = require("express");
const router = express.Router();
const pool = require("../config/postgres");

router.get("/", async (req, res) => {
  const result = await pool.query(`
    SELECT id, name, shelter, water, toilet, electricity, density,
    ST_AsGeoJSON(geom) as geometry
    FROM slum_clusters;
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
