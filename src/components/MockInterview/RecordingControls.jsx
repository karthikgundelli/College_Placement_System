import React, { useEffect } from 'react';

const RecordingControls = ({
  videoRef,
  recording,
  setRecording,
  setMediaRecorder,
  setRecordedChunks,
  streamRef
}) => {
  // Helper function to get supported MIME type (moved outside startRecording)
  const getSupportedMimeType = () => {
    const types = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm;codecs=h264,opus',
      'video/mp4;codecs=h264,aac',
      'video/webm',
      'video/mp4'
    ];

    for (let type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }
    
    console.warn('No supported MIME type found, using default');
    return ''; // Let browser decide
  };

  const startRecording = async () => {
    try {
      // Check for media devices support
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Media Devices API not supported in this browser');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      streamRef.current = stream;

      // Check for MediaRecorder support
      if (typeof MediaRecorder === 'undefined') {
        throw new Error('MediaRecorder not supported in this browser');
      }

      // Get supported MIME types
      const options = { mimeType: getSupportedMimeType() }; // Fixed: removed 'this.'
      
      const mediaRecorder = new MediaRecorder(stream, options);
      
      const chunks = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        setRecordedChunks(chunks);
      };

      // Handle errors
      mediaRecorder.onerror = (e) => {
        console.error('MediaRecorder error:', e.error);
        stopRecording();
      };

      mediaRecorder.start(1000); // Collect data every second
      setMediaRecorder(mediaRecorder);
      setRecording(true);
    } catch (err) {
      console.error('Error accessing media devices:', err);
      alert(`Recording failed: ${err.message}`);
    }
  };

  const stopRecording = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    setRecording(false);
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="recording-controls">
      {!recording ? (
        <button className="record-button" onClick={startRecording}>
          Start Recording
        </button>
      ) : (
        <button className="stop-button" onClick={stopRecording}>
          Stop Recording
        </button>
      )}
      <div className="recording-status">
        {recording ? (
          <div className="recording-indicator">
            <span className="recording-dot"></span>
            Recording
          </div>
        ) : (
          "Not Recording"
        )}
      </div>
    </div>
  );
};

export default RecordingControls;