import React, { useState } from 'react';

function Quiz() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [
    { question: "Who was the first Black president of the United States?", answer: "Barack Obama" },
    { question: "In what year was the Civil Rights Act passed?", answer: "1964" },
    { question: "Who led the Montgomery Bus Boycott?", answer: "Rosa Parks" },
    // Add more questions here
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div id="quiz">
      <h2>Black History Quiz</h2>
      {questionIndex < questions.length ? (
        <div>
          <p>{questions[questionIndex].question}</p>
          <button onClick={() => handleAnswer("Barack Obama")}>Barack Obama</button>
          <button onClick={() => handleAnswer("1964")}>1964</button>
          <button onClick={() => handleAnswer("Rosa Parks")}>Rosa Parks</button>
        </div>
      ) : (
        <div>
          <p>Your final score: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
