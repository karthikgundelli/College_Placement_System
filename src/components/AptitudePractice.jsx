import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Aptitude.css'
const AptitudePractice = () => {
  const { company } = useParams(); // Get the company name from the URL
  const navigate = useNavigate(); // Define navigate using useNavigate

  // State for timer
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isRunning, setIsRunning] = useState(true);

  // State for questions and answers
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is 15% of 200?',
      options: ['20', '30', '40', '50'],
      correctAnswer: '30',
      selectedAnswer: '',
    },
    {
      id: 2,
      question: 'If 2x + 5 = 15, what is the value of x?',
      options: ['5', '10', '15', '20'],
      correctAnswer: '5',
      selectedAnswer: '',
    },
    {
      id: 3,
      question: 'What is the next number in the sequence: 2, 4, 8, 16, ___?',
      options: ['24', '32', '64', '128'],
      correctAnswer: '32',
      selectedAnswer: '',
    },
    {
      id: 4,
      question: 'What is 25% of 400?',
      options: ['50', '100', '150', '200'],
      correctAnswer: '100',
      selectedAnswer: '',
    },
    {
      id: 5,
      question: 'If 3y - 7 = 20, what is the value of y?',
      options: ['7', '9', '10', '12'],
      correctAnswer: '9',
      selectedAnswer: '',
    },
    {
      id: 6,
      question: 'What is the square root of 144?',
      options: ['10', '12', '14', '16'],
      correctAnswer: '12',
      selectedAnswer: '',
    },
    {
      id: 7,
      question: 'What is 10% of 500?',
      options: ['25', '50', '75', '100'],
      correctAnswer: '50',
      selectedAnswer: '',
    },
    {
      id: 8,
      question: 'If 4z + 8 = 24, what is the value of z?',
      options: ['2', '4', '6', '8'],
      correctAnswer: '4',
      selectedAnswer: '',
    },
    {
      id: 9,
      question: 'What is the next number in the sequence: 3, 6, 12, 24, ___?',
      options: ['36', '48', '56', '64'],
      correctAnswer: '48',
      selectedAnswer: '',
    },
    {
      id: 10,
      question: 'What is 20% of 300?',
      options: ['40', '50', '60', '70'],
      correctAnswer: '60',
      selectedAnswer: '',
    },
    {
      id: 11,
      question: 'What is 30% of 500?',
      options: ['100', '150', '200', '250'],
      correctAnswer: '150',
      selectedAnswer: '',
    },
    {
      id: 12,
      question: 'If 5a + 10 = 35, what is the value of a?',
      options: ['3', '5', '7', '9'],
      correctAnswer: '5',
      selectedAnswer: '',
    },
    {
      id: 13,
      question: 'What is the next number in the sequence: 5, 10, 20, 40, ___?',
      options: ['60', '70', '80', '90'],
      correctAnswer: '80',
      selectedAnswer: '',
    },
    {
      id: 14,
      question: 'What is 50% of 600?',
      options: ['200', '250', '300', '350'],
      correctAnswer: '300',
      selectedAnswer: '',
    },
    {
      id: 15,
      question: 'If 6b - 12 = 24, what is the value of b?',
      options: ['4', '6', '8', '10'],
      correctAnswer: '6',
      selectedAnswer: '',
    },
    {
      id: 16,
      question: 'What is the square root of 169?',
      options: ['11', '12', '13', '14'],
      correctAnswer: '13',
      selectedAnswer: '',
    },
    {
      id: 17,
      question: 'What is 40% of 800?',
      options: ['200', '300', '320', '400'],
      correctAnswer: '320',
      selectedAnswer: '',
    },
    {
      id: 18,
      question: 'If 7c + 14 = 35, what is the value of c?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
      selectedAnswer: '',
    },
    {
      id: 19,
      question: 'What is the next number in the sequence: 7, 14, 28, 56, ___?',
      options: ['84', '98', '112', '126'],
      correctAnswer: '112',
      selectedAnswer: '',
    },
    {
      id: 20,
      question: 'What is 60% of 900?',
      options: ['450', '500', '540', '600'],
      correctAnswer: '540',
      selectedAnswer: '',
    },
    {
      id: 21,
      question: 'If 8d - 16 = 32, what is the value of d?',
      options: ['4', '6', '8', '10'],
      correctAnswer: '6',
      selectedAnswer: '',
    },
    {
      id: 22,
      question: 'What is the square root of 196?',
      options: ['12', '13', '14', '15'],
      correctAnswer: '14',
      selectedAnswer: '',
    },
    {
      id: 23,
      question: 'What is 70% of 1000?',
      options: ['600', '650', '700', '750'],
      correctAnswer: '700',
      selectedAnswer: '',
    },
    {
      id: 24,
      question: 'If 9e + 18 = 45, what is the value of e?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
      selectedAnswer: '',
    },
    {
      id: 25,
      question: 'What is the next number in the sequence: 9, 18, 36, 72, ___?',
      options: ['108', '126', '144', '162'],
      correctAnswer: '144',
      selectedAnswer: '',
    },
    {
      id: 26,
      question: 'What is 80% of 1200?',
      options: ['800', '900', '960', '1000'],
      correctAnswer: '960',
      selectedAnswer: '',
    },
    {
      id: 27,
      question: 'If 10f - 20 = 50, what is the value of f?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '7',
      selectedAnswer: '',
    },
    {
      id: 28,
      question: 'What is the square root of 225?',
      options: ['13', '14', '15', '16'],
      correctAnswer: '15',
      selectedAnswer: '',
    },
    {
      id: 29,
      question: 'What is 90% of 1500?',
      options: ['1200', '1300', '1350', '1400'],
      correctAnswer: '1350',
      selectedAnswer: '',
    },
    {
      id: 30,
      question: 'If 11g + 22 = 55, what is the value of g?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
      selectedAnswer: '',
    },
  ]);

  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);

  // Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert('Time is up! Your test has been submitted.');
      calculateScore();
    }
  }, [timeLeft, isRunning]);

  // Function to handle answer selection
  const handleAnswerSelect = (questionId, selectedOption) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, selectedAnswer: selectedOption } : q
      )
    );
    setAttempted((prev) => prev + 1); // Increment attempted count
  };

  // Function to calculate the score
  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((q) => {
      if (q.selectedAnswer === q.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  // Function to submit the test
  const submitTest = () => {
    setIsRunning(false);
    calculateScore();
    alert(`Test submitted! Your score is ${score}/${attempted}`);
    navigate('/aptitude'); // Redirect to the aptitude page after submission
  };

  // Format time (MM:SS)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="aptitude-practice">
      <h1>{company} Aptitude Practice</h1>
      <p>Time Left: {formatTime(timeLeft)}</p>

      {/* Display Questions */}
      <div className="questions">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <h3>{q.question}</h3>
            <div className="options">
              {q.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={q.selectedAnswer === option}
                    onChange={() => handleAnswerSelect(q.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button onClick={submitTest} disabled={!isRunning}>
        Submit Test
      </button>

      {/* Display Score */}
      {!isRunning && (
        <div className="score">
          <h2>Your Score: {score}/{attempted}</h2>
        </div>
      )}
    </div>
  );
};

export default AptitudePractice;