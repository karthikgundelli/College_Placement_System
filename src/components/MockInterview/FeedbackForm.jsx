import React, { useState } from 'react';

const FeedbackForm = ({ question, recordedChunks, onSubmit }) => {
  const [feedback, setFeedback] = useState({
    communication: 3,
    technical: 3,
    confidence: 3,
    notes: ''
  });
  const [videoUrl, setVideoUrl] = useState('');

  React.useEffect(() => {
    if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [recordedChunks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: name === 'notes' ? value : parseInt(value, 10)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      question,
      videoUrl,
      ...feedback
    });
  };

  return (
    <div className="feedback-form">
      <h2>Interview Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question:</label>
          <p>{question}</p>
        </div>

        {videoUrl && (
          <div className="form-group">
            <label>Your Recording:</label>
            <video controls src={videoUrl} className="playback-video" />
          </div>
        )}

        <div className="form-group">
          <label>Communication Skills (1-5):</label>
          <input
            type="range"
            name="communication"
            min="1"
            max="5"
            value={feedback.communication}
            onChange={handleChange}
          />
          <span>{feedback.communication}</span>
        </div>

        <div className="form-group">
          <label>Technical Knowledge (1-5):</label>
          <input
            type="range"
            name="technical"
            min="1"
            max="5"
            value={feedback.technical}
            onChange={handleChange}
          />
          <span>{feedback.technical}</span>
        </div>

        <div className="form-group">
          <label>Confidence (1-5):</label>
          <input
            type="range"
            name="confidence"
            min="1"
            max="5"
            value={feedback.confidence}
            onChange={handleChange}
          />
          <span>{feedback.confidence}</span>
        </div>

        <div className="form-group">
          <label>Additional Notes:</label>
          <textarea
            name="notes"
            value={feedback.notes}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;