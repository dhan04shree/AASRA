const express = require("express");
const router = express.Router();
const pool = require("../config/postgres");
const Scheme = require("../model/scheme"); // your mongo model

router.get("/:name", async (req, res) => {

  const areaName = req.params.name;

  // 1️⃣ Find area in PostGIS
  const result = await pool.query(`
    SELECT name, shelter, water, toilet, electricity, density,
    ST_AsGeoJSON(geom) as geometry
    FROM slum_clusters
    WHERE LOWER(name) LIKE LOWER($1)
    LIMIT 1
  `, [`%${areaName}%`]);

  if (!result.rows.length) {
    return res.status(404).json({ message: "Area not found" });
  }

  const area = result.rows[0];

  // 2️⃣ Decide eligible schemes
  let eligibleSchemeNames = [];

  if (!area.shelter)
    eligibleSchemeNames.push("Pradhan Mantri Awas Yojana");

  if (!area.toilet)
    eligibleSchemeNames.push("Sanitation Scheme");

  if (!area.water)
    eligibleSchemeNames.push("Water Supply Scheme");

  // 3️⃣ Fetch scheme details from MongoDB
  const schemes = await Scheme.find({
    name: { $in: eligibleSchemeNames }
  });

  // 4️⃣ Send everything together
  res.json({
    area: area,
    geometry: JSON.parse(area.geometry),
    schemes: schemes
  });

});

module.exports = router;
