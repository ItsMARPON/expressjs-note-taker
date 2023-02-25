const path = require('path');

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

// GET Route for diagnostics 
app.get('/api/diagnostics', (req, res) =>
  res.sendFile('./db/diagnostics.json', JSON.stringify(res), null));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/404.html"))
);

// POST Route for diagnostics invalid form submissions
app.post('/api/diagnostics', (req, res) =>
console.info(`${req.method} request received -invalid form submissions`)
);