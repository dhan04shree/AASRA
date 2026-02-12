const express = require("express");
const router = express.Router();
const Scheme = require("../model/scheme");

router.post("/", async (req, res) => {
  try {
    const {
      income,
      category,
      age,
      locationType,
      gender,
      hasLand,
      bpl,
      aadhaar
    } = req.body;

    const schemes = await Scheme.find();

    const eligible = schemes.filter((scheme) => {
      const e = scheme.eligibility;

      return (
        income >= e.minIncome &&
        income <= e.maxIncome &&
        e.categories.includes(category) &&
        age >= e.minAge &&
        age <= e.maxAge &&
        (e.locationType === "Both" || e.locationType === locationType) &&
        (e.gender === "Any" || e.gender === gender) &&
        (!e.landOwnershipRequired || hasLand) &&
        (!e.bplRequired || bpl) &&
        (!e.aadhaarRequired || aadhaar)
      );
    });

    res.json(eligible);
  } catch (err) {
    res.status(500).json({ message: "Error checking eligibility" });
  }
});

module.exports = router;
