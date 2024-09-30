import React, { useState } from 'react';

function Quiz() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    { 
      question: "Who was the first Black president of the United States?", 
      options: ["Barack Obama", "George Washington Carver", "Frederick Douglass"], 
      answer: "Barack Obama" 
    },
    { 
      question: "In what year was the Civil Rights Act passed?", 
      options: ["1954", "1964", "1974"], 
      answer: "1964" 
    },
    { 
      question: "Who led the Montgomery Bus Boycott?", 
      options: ["Harriet Tubman", "Rosa Parks", "Martin Luther King Jr."], 
      answer: "Rosa Parks" 
    },
    { 
      question: "Who was the first Black woman elected to the United States Congress?", 
      options: ["Shirley Chisholm", "Kamala Harris", "Michelle Obama"], 
      answer: "Shirley Chisholm" 
    },
    { 
      question: "In what year did Nelson Mandela become South Africa's first Black president?", 
      options: ["1990", "1994", "1998"], 
      answer: "1994" 
    },
    { 
      question: "Who was the first African American woman to win a Nobel Prize in Literature?", 
      options: ["Maya Angelou", "Toni Morrison", "Alice Walker"], 
      answer: "Toni Morrison" 
    },
    { 
      question: "Which famous abolitionist and former enslaved person was known for their autobiography 'Narrative of the Life of Frederick Douglass'?", 
      options: ["Frederick Douglass", "Booker T. Washington", "W.E.B. Du Bois"], 
      answer: "Frederick Douglass" 
    },
    { 
      question: "What year did Barack Obama win the Nobel Peace Prize?", 
      options: ["2008", "2009", "2010"], 
      answer: "2009" 
    },
    { 
      question: "Who was the first Black woman to travel into space?", 
      options: ["Mae Jemison", "Katherine Johnson", "Mary Jackson"], 
      answer: "Mae Jemison" 
    },
    { 
      question: "What historic Supreme Court case declared segregation in public schools unconstitutional?", 
      options: ["Plessy v. Ferguson", "Brown v. Board of Education", "Dred Scott v. Sandford"], 
      answer: "Brown v. Board of Education" 
    }
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[questionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questions.length) {
      setQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div id="quiz">
      <h2>Black History Quiz</h2>
      {showScore ? (
        <div>
          <p>Your final score: {score}/{questions.length}</p>
        </div>
      ) : (
        <div>
          <p>{questions[questionIndex].question}</p>
          <div className="quiz-buttons">
            {questions[questionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
