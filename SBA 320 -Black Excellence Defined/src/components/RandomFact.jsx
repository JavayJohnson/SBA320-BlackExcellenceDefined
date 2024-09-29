import React, { useState, useEffect } from 'react';

function RandomFact() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = async () => {
    const response = await fetch('https://blackhistoryapi.com/api/v1/fact/random', {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    });
    const data = await response.json();
    setFact(data.fact);
  };

  return (
    <div id="random-fact">
      <h2>Random Black History Fact</h2>
      <p>{fact}</p>
      <button onClick={fetchFact}>Get Another Fact</button>
    </div>
  );
}

export default RandomFact;
