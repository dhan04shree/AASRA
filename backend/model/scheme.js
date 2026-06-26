const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      enum: ["Housing", "Rehabilitation", "Rental", "Slum Redevelopment", "Basic Services", "Other"],
      default: "Housing"
    },
    state: {
      type: String,
      default: "India"
    },
    launchYear: Number,

    description: {
      type: String,
      default: ""
    },

    benefits: [
      {
        type: String
      }
    ],

    officialLink: {
      type: String,
      default: ""
    },

    applyMode: {
      type: String,
      enum: ["Online", "Offline", "Both"],
      default: "Online"
    },

    incomeGroup: {
      type: [String], // EWS, LIG, MIG-I, MIG-II, BPL
      default: []
    },

    requiredDocuments: {
      type: [String],
      default: []
    },

    tags: {
      type: [String],
      default: []
    },

    status: {
      type: String,
      enum: ["Active", "Closed", "Upcoming"],
      default: "Active"
    },

    source: {
      type: String,
      default: "Government"
    },

    eligibility: {
      minIncome: {
        type: Number,
        default: 0
      },
      maxIncome: {
        type: Number,
        default: null
      },
      categories: {
        type: [String], // SC, ST, OBC, EWS, Minority, General etc.
        default: []
      },
      gender: {
        type: String,
        default: "Any"
      },
      minAge: {
        type: Number,
        default: 18
      },
      maxAge: {
        type: Number,
        default: null
      },
      locationType: {
        type: String,
        enum: ["Urban", "Rural", "Both"],
        default: "Both"
      },
      landOwnershipRequired: {
        type: Boolean,
        default: false
      },
      bplRequired: {
        type: Boolean,
        default: false
      },
      aadhaarRequired: {
        type: Boolean,
        default: true
      }
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Scheme", schemeSchema);
