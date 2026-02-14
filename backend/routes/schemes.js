const express = require("express");
const router = express.Router();
const Scheme = require("../model/scheme");

// Get all schemes
router.get("/", async (req, res) => {
  const schemes = await Scheme.find();
  res.json(schemes);
});

// Get single scheme
router.get("/:id", async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);
    res.json(scheme);
  } catch (err) {
    res.status(404).json({ message: "Scheme not found" });
  }
});

module.exports = router;
