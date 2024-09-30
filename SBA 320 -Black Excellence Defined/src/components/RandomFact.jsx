import React, { useState, useEffect } from 'react';

function RandomFact() {
  const [fact, setFact] = useState("Loading...");
  const [error, setError] = useState(null);

  // Function to fetch random fact
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
      setFact(data.fact);  // Ensure the fact is coming from the "fact" key in the API response
    } catch (err) {
      setError(err.message);  // Display error if there's an issue
    }
  };

  // Fetch a fact when the component first mounts
  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div id="random-fact">
      <h2>Random Black History Fact</h2>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{fact}</p>}
      <button onClick={fetchFact}>Get Another Fact</button>
    </div>
  );
}

export default RandomFact;
