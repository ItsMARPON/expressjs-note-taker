const notes = require("express").Router();
const path = require("path");
const db = require("../db/db.json");
const fs = require("fs");

// GET Route for notes page
notes.get("/", (req, res) => {
  console.log("Hello from notes page");
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

notes.get("/", (req, res) => {
  res.status(200).json(db);
});

notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { title, text } = req.body;
  if (title && text) {
    let newNote = {
      title,
      text,
    };
    const noteString = JSON.stringify(newNote);

    fs.writeFile("./db/db.json", noteString, (err) =>
      err
        ? console.error(err)
        : console.log(`New note ${newNote.title} has been written to json file`)
    );

    const response = {
      status: "SUCCESS",
      body: newNote,
    };
    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting note");
  }
});

module.exports = notes;
