const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/auth")

const DB_URL = process.env.MONGO_URL
mongoose.connect(DB_URL)
   .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error("Error connecting to db", err);
  });
app.use(cors()); 
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/eligibility", require("./routes/eligibility"));
app.use("/api/schemes", require("./routes/schemes"));
app.use("/api/slums", require("./routes/slums"));
app.use("/api/slum_data", require("./routes/slum_data"));
app.use("/api/slum_density", require("./routes/slumDensity"));
app.use("/api/slum_heat", require("./routes/slumHeat"));


app.use("/api/schememap", require("./routes/schemeMap"));
app.use("/api/area", require("./routes/areaSearch"));
app.use("/api/filter", require("./routes/filter"));



app.listen(PORT, () => {
  console.log(`app listetning to port ${PORT}`);
});