const express = require("express");
const router = express.Router();
const db = require("../config/postgres");

router.get("/", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT jsonb_build_object(
        'type','FeatureCollection',
        'features', jsonb_agg(feature)
      ) AS geojson
      FROM (
        SELECT jsonb_build_object(
          'type','Feature',
          'geometry', ST_AsGeoJSON(geom)::jsonb,
          'properties', jsonb_build_object(
            'id', id
          )
        ) AS feature
        FROM slum_clusters
      ) features;
    `);

    res.json(result.rows[0].geojson);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
