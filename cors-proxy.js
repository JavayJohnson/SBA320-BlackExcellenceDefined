const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();

app.use(cors());

// Route to proxy the request
app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }

  request({ url }).pipe(res);
});

// Start the proxy server on port 8080
app.listen(8080, () => {
  console.log('CORS proxy running on port 8080');
});
