const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "aasra_db",
  password: process.env.POSTGRES_PASS,
  port: 5432,
});

// const pool = new Pool({
//  connectionString: process.env.POSTGRES_URI,
//  ssl:{
//   rejectUnauthorized:false
//  }
// });

module.exports = pool;
