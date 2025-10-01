import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const questionsAndAnswers = [
    {
        question: 'Who is the top scorer in the Premier League?',
        answer: 'Salah'
    },
    {
        question: 'Who is the fastest player in the Premier League?',
        answer: 'Micky van de Ven'
    },
    {
        question: 'Who is the best defender in the Premier League?',
        answer: 'van Dijk'
    },
    {
        question: 'Who is the best midfielder in the Premier League?',
        answer: 'Harry Kane'
    },
    {
        question: 'Who is the coolest player in the Premier League?',
        answer: 'Kylian Mbappe'
    }
  ]

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const goToNextCard = () => {
    if (currentCardIndex < questionsAndAnswers.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const goToPreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  return (
    <>
      <div className="content">
        <h1>The Ultimate Soccer Quiz!</h1>
        <p>How well do you know your premier league? Test your knowledge with this quiz!</p>
        <p>Number of questions: {questionsAndAnswers.length}</p>
        
        {!quizStarted ? (
          <button onClick={startQuiz} className="start-button">Start Quiz</button>
        ) : (
          <div className="quiz-container">
            <p className="card-counter">
              Card {currentCardIndex + 1} of {questionsAndAnswers.length}
            </p>
            {currentCardIndex === questionsAndAnswers.length - 1 && (
              <>
                <p className="card-counter">Click on this button below to start over!</p>
                <button onClick={startQuiz} className="start-button"> Start Over! </button>
              </>
            )}
            
            <Card 
              question={questionsAndAnswers[currentCardIndex].question}
              answer={questionsAndAnswers[currentCardIndex].answer}
              isFlipped={isFlipped}
              onCardClick={handleCardClick}
            />
            
            <div className="navigation-buttons">
              <button 
                onClick={goToPreviousCard} 
                disabled={currentCardIndex === 0}
                className="nav-button"
              >
                ← Previous
              </button>
              <button 
                onClick={goToNextCard} 
                disabled={currentCardIndex === questionsAndAnswers.length - 1}
                className="nav-button"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
      
      <footer className="footer">
        <p>Brandon Gonzalez®</p>
      </footer>
    </>
  )
}

export default App;
