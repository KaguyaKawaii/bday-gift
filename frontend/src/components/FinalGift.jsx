// src/components/FinalGift.jsx
import React, { useState } from 'react';

const FinalGift = ({ onOpen, onNext, onPrevious, currentIndex, totalSlides }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setShowParticles(true);
    
    setTimeout(() => {
      onOpen();
    }, 1500);
    
    setTimeout(() => {
      setShowParticles(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-pink-50 via-rose-50 to-white px-4 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-pink-300/30 text-3xl select-none">✦</div>
      <div className="absolute top-8 right-8 text-pink-300/30 text-3xl select-none">✦</div>
      <div className="absolute bottom-8 left-8 text-pink-300/30 text-3xl select-none">✦</div>
      <div className="absolute bottom-8 right-8 text-pink-300/30 text-3xl select-none">✦</div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            ONE MORE THING
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        {/* Gift Box */}
        <div 
          className={`relative cursor-pointer transition-all duration-700 ${
            isOpened ? 'scale-110 opacity-0 pointer-events-none' : 'hover:scale-105'
          }`}
          onClick={handleOpen}
        >
          {/* Gift Box */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Box Body */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-3/4 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl shadow-2xl">
              {/* Box decorations */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl" />
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-pink-300 to-rose-300 -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 w-2 h-full bg-gradient-to-b from-pink-300 to-rose-300 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Box Lid */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[105%] h-1/4 bg-gradient-to-br from-pink-300 to-rose-300 rounded-t-xl shadow-lg transition-transform duration-700 origin-bottom ${
              isOpened ? 'rotate-y-180' : ''
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-xl" />
            </div>

            {/* Bow */}
            <div className={`absolute -top-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
              isOpened ? 'scale-150 opacity-0 translate-y-[-50px]' : ''
            }`}>
              <div className="relative">
                {/* Bow loops */}
                <div className="absolute -left-10 -top-4 w-12 h-8 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full transform -rotate-45 shadow-md" />
                <div className="absolute -right-10 -top-4 w-12 h-8 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full transform rotate-45 shadow-md" />
                {/* Bow center */}
                <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full shadow-lg z-10 relative" />
              </div>
            </div>

            {/* "OPEN" text on box */}
            {!isOpened && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white font-light text-sm tracking-[0.3em] animate-pulse-opacity">
                  ✦ TAP TO OPEN ✦
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Explosion Particles */}
        {showParticles && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => {
              const colors = ['#FF6B8A', '#FF8A9E', '#FFB6C1', '#FF69B4', '#FF1493', '#FFD700', '#FFA500', '#FF4081'];
              const size = Math.random() * 10 + 5;
              const isCircle = Math.random() > 0.5;
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: size,
                    height: isCircle ? size : size * 1.6,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    borderRadius: isCircle ? '50%' : '2px',
                    animation: `particle-explode ${Math.random() * 1.5 + 1}s ease-out forwards`,
                    animationDelay: `${Math.random() * 0.3}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: 0,
                  }}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center gap-6 px-4">
        {onPrevious && (
          <button
            onClick={onPrevious}
            className="px-6 py-3 bg-rose-200/50 backdrop-blur-sm hover:bg-rose-300/50 text-rose-700 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 text-sm font-light tracking-wider"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 14L6 8L12 2" />
            </svg>
            PREV
          </button>
        )}

        <div className="flex items-center gap-2">
          <span className="text-rose-400/60 text-sm font-light tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {onNext && (
          <button
            onClick={onNext}
            className="px-6 py-3 bg-rose-200/50 backdrop-blur-sm hover:bg-rose-300/50 text-rose-700 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 text-sm font-light tracking-wider"
          >
            NEXT
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 2L10 8L4 14" />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes particle-explode {
          0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(0);
          }
          50% {
            opacity: 1;
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px) rotate(${Math.random() * 720}deg) scale(0.5);
          }
        }
        
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-pulse-opacity {
          animation: pulse-opacity 1.5s ease-in-out infinite;
        }
        
        .rotate-y-180 {
          transform: translateX(-50%) rotateX(180deg);
        }
      `}</style>
    </div>
  );
};

export default FinalGift;