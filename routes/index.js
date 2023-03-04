const api = require("express").Router();
const path = require("path");

// GET Route for homepage
api.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET Route for notes page
api.get("/notes", (req, res) => {
  console.log("Hello from notes page");
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = api;
