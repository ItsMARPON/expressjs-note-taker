const express = require("express");
const middleware = require("./middleware/middleware");
const api = require("./routes/index");
const notes = require("./routes/notes");

const PORT = process.env.PORT || 8080;

const app = express();

// Import custom middleware
app.use(middleware);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use("/notes", notes);

app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
