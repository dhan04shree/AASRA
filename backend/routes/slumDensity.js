const express = require("express");
const router = express.Router();
const db = require("../config/postgres");

router.get("/", async (req, res) => {
  try {
    const { minLng, minLat, maxLng, maxLat } = req.query;

    if (!minLng) return res.json({ type: "FeatureCollection", features: [] });

    const { rows } = await db.query(`
  SELECT json_build_object(
    'type','FeatureCollection',
    'features', COALESCE(json_agg(
      json_build_object(
        'type','Feature',
        'geometry', ST_AsGeoJSON(geom)::json,
        'properties', json_build_object('level', level)
      )
    ), '[]'::json)
  ) AS geojson
  FROM slum_grid
  WHERE geom IS NOT NULL
  AND NOT ST_IsEmpty(geom)
  AND geom && ST_MakeEnvelope($1,$2,$3,$4,4326);
`, [minLng,minLat,maxLng,maxLat]);


    res.json(rows[0].geojson || {type:"FeatureCollection",features:[]});

  } catch (err) {
    console.error(err);
    res.status(500).json({ error:"bbox failed" });
  }
});

module.exports = router;
