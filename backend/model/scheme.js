const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  name: String,
  type: String,
  state: String,
  launchYear: Number,
  description: String,
  benefits: String,
  officialLink: String,
  eligibility: {
    minIncome: Number,
    maxIncome: Number,
    categories: [String],
    gender: String,
    minAge: Number,
    maxAge: Number,
    locationType: String,
    landOwnershipRequired: Boolean,
    bplRequired: Boolean,
    aadhaarRequired: Boolean
  }
});

module.exports = mongoose.model("Scheme", schemeSchema);
