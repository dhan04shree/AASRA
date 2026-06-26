const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Scheme = require("./model/Scheme");
const schemesData = require("./schemesData");

dotenv.config();

const seedSchemes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

    // purane schemes delete karke fresh insert karna ho to
    await Scheme.deleteMany();

    await Scheme.insertMany(schemesData);

    console.log("Schemes inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding schemes:", error);
    process.exit(1);
  }
};

seedSchemes();