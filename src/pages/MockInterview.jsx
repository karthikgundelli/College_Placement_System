import React, { useState, useRef } from 'react';
import './MockInterviewPage.css'
import QuestionBank from '../components/MockInterview/QuestionBank';
import RecordingControls from '../components/MockInterview/RecordingControls';
import FeedbackForm from '../components/MockInterview/FeedbackForm';
import InterviewSummary from '../components/MockInterview/InterviewSummary';
import './MockInterviewPage.css';
import InterviewTimer from '../components/MockInterview/InterViewTimer';

const MockInterviewPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [interviewStage, setInterviewStage] = useState('setup'); // 'setup', 'in-progress', 'feedback', 'complete'
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [feedback, setFeedback] = useState({});
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startInterview = () => {
    setInterviewStage('in-progress');
  };

  const endInterview = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    setInterviewStage('feedback');
  };

  const submitFeedback = (feedbackData) => {
    setFeedback(feedbackData);
    setInterviewStage('complete');
  };

  const restartInterview = () => {
    setCurrentQuestion(null);
    setInterviewStage('setup');
    setRecordedChunks([]);
    setFeedback({});
  };

  return (
    <div className="mock-interview-container">
      <h1>Mock Interview Practice</h1>
      
      {interviewStage === 'setup' && (
        <div className="interview-setup">
          <h2>Prepare for Your Interview</h2>
          <p>You'll have 20 minutes to answer questions. Select a question to begin.</p>
          <QuestionBank 
            onSelectQuestion={setCurrentQuestion} 
            selectedQuestion={currentQuestion}
          />
          <button 
            className="start-button" 
            onClick={startInterview}
            disabled={!currentQuestion}
          >
            Start Interview
          </button>
        </div>
      )}

      {interviewStage === 'in-progress' && (
        <div className="interview-in-progress">
          <InterviewTimer duration={20} onComplete={endInterview} />
          
          <div className="video-container">
            <video ref={videoRef} autoPlay muted className="user-video" />
            <div className="current-question">
              <h3>Question:</h3>
              <p>{currentQuestion}</p>
            </div>
          </div>
          
          <RecordingControls 
            videoRef={videoRef}
            recording={recording}
            setRecording={setRecording}
            setMediaRecorder={setMediaRecorder}
            setRecordedChunks={setRecordedChunks}
            streamRef={streamRef}
          />
          
          <button className="end-button" onClick={endInterview}>
            End Interview
          </button>
        </div>
      )}

      {interviewStage === 'feedback' && (
        <FeedbackForm 
          question={currentQuestion}
          recordedChunks={recordedChunks}
          onSubmit={submitFeedback}
        />
      )}

      {interviewStage === 'complete' && (
        <InterviewSummary 
          feedback={feedback}
          onRestart={restartInterview}
        />
      )}
    </div>
  );
};

export default MockInterviewPage;