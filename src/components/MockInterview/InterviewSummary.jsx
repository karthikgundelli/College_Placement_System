import React from 'react';

const InterviewSummary = ({ feedback, onRestart }) => {
  return (
    <div className="interview-summary">
      <h2>Interview Complete</h2>
      <div className="summary-content">
        <h3>Question:</h3>
        <p>{feedback.question}</p>

        <h3>Feedback:</h3>
        <div className="feedback-scores">
          <div className="score-item">
            <span>Communication:</span>
            <div className="score-bar">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`score-dot ${i < feedback.communication ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
          <div className="score-item">
            <span>Technical Knowledge:</span>
            <div className="score-bar">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`score-dot ${i < feedback.technical ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
          <div className="score-item">
            <span>Confidence:</span>
            <div className="score-bar">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`score-dot ${i < feedback.confidence ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {feedback.notes && (
          <>
            <h3>Notes:</h3>
            <p>{feedback.notes}</p>
          </>
        )}

        {feedback.videoUrl && (
          <div className="playback-section">
            <h3>Your Recording:</h3>
            <video controls src={feedback.videoUrl} className="playback-video" />
          </div>
        )}

        <button className="restart-button" onClick={onRestart}>
          Practice Another Question
        </button>
      </div>
    </div>
  );
};

export default InterviewSummary;