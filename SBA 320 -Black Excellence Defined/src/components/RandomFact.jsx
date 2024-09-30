import React, { useState } from 'react';

function RandomFact() {
  const [fact, setFact] = useState("Click the button to load a random fact.");
  const [error, setError] = useState(null);

  const fetchFact = async () => {
    try {
      const response = await fetch('https://blackhistoryapi.com/api/v1/fact/random', {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
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
      <h2>Black OURstory Facts</h2>
      <button onClick={fetchFact}>Get Another Fact</button> {/* Button placed below the header */}
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{fact}</p>}
    </div>
  );
}

export default RandomFact;
