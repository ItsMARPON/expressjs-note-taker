const notes = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");
const uuid = require("../helpers/uuid");

notes.get("/", (req, res) => {
  res.status(200).json(db);
});

notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { title, text } = req.body;
  if (title && text) {
    const length = db.length;

    let newNote = {
      title,
      text,
      id: uuid(),
    };
    const noteString = JSON.stringify(newNote);

    db.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(db), (err) =>
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
