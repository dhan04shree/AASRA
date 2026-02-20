const express = require("express");
const router = express.Router();
const db = require("../config/postgres");

router.get("/", async (req, res) => {
  const { minLng, minLat, maxLng, maxLat } = req.query;

  const { rows } = await db.query(`
    SELECT
      ST_Y(ST_Centroid(geom)) AS lat,
      ST_X(ST_Centroid(geom)) AS lng,
      level AS weight
    FROM slum_grid
    WHERE geom && ST_MakeEnvelope($1,$2,$3,$4,4326)
  `,[minLng,minLat,maxLng,maxLat]);

  res.json(rows);
});

module.exports = router;
