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
  const [userGuess, setUserGuess] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Simple answer checking - ignores case and extra spaces
  const checkAnswer = (guess, correctAnswer) => {
    const cleanGuess = guess.toLowerCase().trim();
    const cleanAnswer = correctAnswer.toLowerCase().trim();
    return cleanGuess === cleanAnswer;
  };

  const submitAnswer = () => {
    if (userGuess.trim() !== '') {
      const correct = checkAnswer(userGuess, questionsAndAnswers[currentCardIndex].answer);
      setIsCorrect(correct);
      setHasGuessed(true);
      setIsFlipped(true);
    }
  };

  const goToNextCard = () => {
    if (currentCardIndex < questionsAndAnswers.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      setUserGuess('');
      setHasGuessed(false);
      setIsCorrect(false);
    }
  };

  const goToPreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      setUserGuess('');
      setHasGuessed(false);
      setIsCorrect(false);
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
            
            <div className="guess-section">
              <p>Enter your guess:</p>
              <input 
                type="text" 
                placeholder="Type your answer..." 
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && submitAnswer()}
                className={hasGuessed ? (isCorrect ? 'correct' : 'incorrect') : ''}
                disabled={hasGuessed}
              />
              {!hasGuessed && (
                <button onClick={submitAnswer}>Submit</button>
              )}
            </div>
            
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
