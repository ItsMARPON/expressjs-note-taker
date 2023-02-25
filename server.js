const express = require('express');
const middleware = require('./middleware');
const api = require('./routes/get-routes');

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware
app.use(middleware);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);