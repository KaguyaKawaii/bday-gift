// src/components/VoiceMessage.jsx
import React, { useRef, useState } from 'react';
import Sticker from './Sticker';

const VoiceMessage = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="voice-message-section">
      <h3 className="voice-title">A MESSAGE IN MY VOICE</h3>
      
      <div className="voice-player">
        <Sticker
          src="/assets/stickers/microphone.svg"
          className="voice-sticker"
          rotation={-5}
          scale={0.6}
        />
        
        <button 
          className={`voice-play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <div className="sound-waves">
              <span className="sound-wave" />
              <span className="sound-wave" />
              <span className="sound-wave" />
              <span className="sound-wave" />
            </div>
          ) : (
            'PLAY MESSAGE'
          )}
        </button>
        
        <div className="voice-progress">
          <div 
            className="voice-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="voice-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        
        <audio
          ref={audioRef}
          src="/assets/audio/message.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
    </div>
  );
};

export default VoiceMessage;