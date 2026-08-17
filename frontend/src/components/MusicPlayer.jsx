// src/components/MusicPlayer.jsx
import React, { useRef, useState } from 'react';
import Sticker from './Sticker';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

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
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  return (
    <div className="music-section">
      <h3 className="music-title">OUR SOUNDTRACK</h3>
      
      <div className="music-player">
        <Sticker
          src="/assets/stickers/vinyl.svg"
          className="music-sticker"
          rotation={0}
          scale={0.8}
          animation={isPlaying ? 'rotate' : null}
        />
        
        <div className="music-info">
          <h4 className="song-title">[SONG TITLE]</h4>
          <p className="song-artist">[ARTIST]</p>
        </div>
        
        <button 
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
        >
          {isPlaying ? 'PAUSE' : 'PLAY'}
        </button>
        
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <audio
          ref={audioRef}
          src="/assets/music/our-song.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;