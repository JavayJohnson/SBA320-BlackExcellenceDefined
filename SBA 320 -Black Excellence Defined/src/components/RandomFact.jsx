import React, { useState } from 'react';

function RandomFact() {
  const [fact, setFact] = useState("Click the button to load a random fact.");
  const [error, setError] = useState(null);

  const fetchFact = async () => {
    try {
      const response = await fetch('https://blackhistoryapi.com/api/v1/fact/random', {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}` // Ensure your API key is stored as an environment variable
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the fact.');
      }

      const data = await response.json();
      setFact(data.fact);
    } catch (err) {
      setError(err.message);
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
