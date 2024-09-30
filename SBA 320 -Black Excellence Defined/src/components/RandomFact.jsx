import React, { useState } from 'react';

function RandomFact() {
  const [fact, setFact] = useState("Click the button to load a random fact.");
  const [error, setError] = useState(null);

  // Function to fetch random fact using the server-side proxy
  const fetchFact = async () => {
    try {
      const response = await fetch('http://localhost:8080/proxy?url=https://blackhistoryapi.com/api/v1/fact/random');

      if (!response.ok) {
        throw new Error('Failed to fetch the fact.');
      }

      const data = await response.json();
      setFact(data.fact);  // Set the fact from the API response
    } catch (err) {
      setError(err.message);  // Display error if there's an issue
    }
  };

  return (
    <div id="random-fact">
      <h2>Random Black History Fact</h2>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{fact}</p>}
      <button onClick={fetchFact}>Get Another Fact</button>
    </div>
  );
}

export default RandomFact;
