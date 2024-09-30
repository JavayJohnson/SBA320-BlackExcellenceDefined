import React, { useState } from 'react';

function RandomFact() {
  const [fact, setFact] = useState("Click the button to load a random fact.");
  const [error, setError] = useState(null);

  const fetchFact = async () => {
    try {
      const response = await fetch('https://rest.blackhistoryapi.io/fact/random', {
        headers: {
          'x-api-key': `SmF2YXlqb2huc29uU3VuIFNlcCAyOS`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the fact.');
      }

      const data = await response.json();
      console.log(data)
      setFact(data.Results[0].text);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="random-fact">
      <h2>Black EXCELLENCE Facts</h2>
      <button onClick={fetchFact}>Get Another Fact</button> {/* Button now placed below the header */}
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{fact}</p>}
    </div>
  );
}

export default RandomFact;
