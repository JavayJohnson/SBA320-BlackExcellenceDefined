require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
const PORT = 8080;

app.use(cors()); // Enable CORS for all routes

// Create a proxy route
app.get('/proxy', (req, res) => {
  const apiUrl = 'https://blackhistoryapi.com/api/v1/fact/random';

  // Make the request to the external API
  request({
    url: apiUrl,
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}` // Use the API key from environment variables
    },
  })
  .on('error', function(err) {
    res.status(500).send('Error fetching from API');
  })
  .pipe(res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`CORS proxy running on port ${PORT}`);
});
