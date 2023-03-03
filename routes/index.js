const api = require("express").Router();
const path = require("path");

// GET Route for homepage
api.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = api;
