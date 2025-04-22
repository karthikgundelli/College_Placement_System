import React from 'react';

const questions = [
  "Tell me about yourself.",
  "What are your greatest strengths?",
  "What are your greatest weaknesses?",
  "Why do you want to work for our company?",
  "Describe a challenging situation you faced and how you handled it.",
  "Where do you see yourself in five years?",
  "Why should we hire you?",
  "What are your salary expectations?",
  "How do you handle pressure or stressful situations?",
  "Describe a time you demonstrated leadership skills."
];

const QuestionBank = ({ onSelectQuestion, selectedQuestion }) => {
  return (
    <div className="question-bank">
      <h3>Select a Question:</h3>
      <div className="questions-list">
        {questions.map((question, index) => (
          <div 
            key={index}
            className={`question-item ${selectedQuestion === question ? 'selected' : ''}`}
            onClick={() => onSelectQuestion(question)}
          >
            {question}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBank;