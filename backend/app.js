const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const City = require("./models/cities");

const app = express();

mongoose
  .connect(
    'mongodb://localhost:27017/services', { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to Services database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.get("/api/city", (req, res, next) => {
  City.find().then(documents => {
    res.status(200).json({
      cities: documents
    });
  });
});

module.exports = app;
