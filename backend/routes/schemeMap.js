const express = require("express");
const router = express.Router();
const pool = require("../config/postgres");

// GET /api/schememap/PMAY
router.get("/:scheme", async (req, res) => {

  let condition = "";

  switch (req.params.scheme) {

    case "PMAY":
      condition = "shelter = false";
      break;

    case "Sanitation":
      condition = "toilet = false";
      break;

    case "Water":
      condition = "water = false";
      break;

    default:
      condition = "1=1";
  }

  const result = await pool.query(`
    SELECT name, ST_AsGeoJSON(geom) as geometry
    FROM slum_clusters
    WHERE ${condition};
  `);

  res.json({
    type: "FeatureCollection",
    features: result.rows.map(r => ({
      type: "Feature",
      properties: { name: r.name },
      geometry: JSON.parse(r.geometry)
    }))
  });
});

module.exports = router;
