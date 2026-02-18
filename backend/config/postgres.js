const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "aasra_geo",
  password: process.env.POSTGRES_PASS,
  port: 5432,
});

module.exports = pool;
