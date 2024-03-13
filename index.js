require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const app = new express();
// const { Pool } = require("pg");
// const mongoose = require("mongoose");

// try {
//   const pool = new Pool({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT,
//   });
// } catch (error) {
//   throw error;
// }

// try {
//   mongoose.connect(
//     `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`
//   );
// } catch (error) {
//   throw error;
// }
app.get("/", (req, resp) => {
  resp.send("I must run it properly.");
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`connected in port ${process.env.PORT}....`);
});
