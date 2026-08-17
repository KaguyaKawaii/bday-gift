// src/components/InteractiveCake.jsx
import React, { useState } from 'react';

const InteractiveCake = ({ onNext, onPrevious, currentIndex, totalSlides }) => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showWish, setShowWish] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCakeClick = () => {
    if (candlesLit && !isAnimating) {
      setIsAnimating(true);
      setCandlesLit(false);
      
      setTimeout(() => {
        setShowWish(true);
        setShowConfetti(true);
        setIsAnimating(false);
        
        setTimeout(() => {
          setShowConfetti(false);
        }, 4000);
      }, 600);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-rose-50 via-pink-50 to-white px-4 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            MAKE A WISH
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        <div className="relative">
          <div 
            className={`relative cursor-pointer transition-all duration-700 ${
              !candlesLit ? 'scale-105' : 'hover:scale-105 active:scale-95'
            }`}
            onClick={handleCakeClick}
          >
            <div className="relative flex flex-col items-center">
              <div className="flex gap-6 mb-1 relative z-10">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`relative transition-all duration-700 ${
                      !candlesLit ? 'opacity-0 scale-0 translate-y-4' : 'opacity-100 scale-100 translate-y-0'
                    }`}>
                      <div className={`w-2.5 h-6 bg-gradient-to-t from-pink-400 to-pink-300 rounded-t-sm relative ${
                        !candlesLit ? 'bg-gray-300' : ''
                      }`}>
                        <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-3 h-4 rounded-full ${
                          candlesLit 
                            ? 'bg-gradient-to-t from-yellow-400 to-orange-400 shadow-lg shadow-yellow-500/50' 
                            : 'opacity-0'
                        }`} />
                        {candlesLit && (
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400/20 rounded-full blur-xl" />
                        )}
                      </div>
                      <div className="w-4 h-1 bg-pink-300 rounded-full mt-0.5" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-0 -mt-1">
                <div className="w-52 md:w-60 h-10 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg shadow-md relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg" />
                  <div className="absolute -top-1 left-1/4 w-5 h-1 bg-pink-200/60 rounded-full" />
                  <div className="absolute -top-1 right-1/4 w-3 h-1 bg-pink-200/60 rounded-full" />
                </div>
                <div className="w-[calc(100%+16px)] h-2.5 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full -mt-0.5 mx-[-8px]" />
                <div className="w-[calc(100%+32px)] h-12 bg-gradient-to-b from-pink-400 to-rose-400 rounded-lg shadow-xl -mt-0.5 mx-[-16px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg" />
                  <div className="absolute bottom-1.5 left-1/4 w-6 h-1 bg-pink-300/40 rounded-full" />
                  <div className="absolute bottom-1.5 right-1/4 w-4 h-1 bg-pink-300/40 rounded-full" />
                </div>
                <div className="w-[calc(100%+48px)] h-2.5 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full -mt-0.5 mx-[-24px] shadow-lg" />
              </div>
            </div>

            {candlesLit && (
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-rose-400/70 text-sm font-light tracking-widest whitespace-nowrap">
                click to make a wish
              </div>
            )}
          </div>

          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              {[...Array(40)].map((_, i) => {
                const colors = ['#FF6B8A', '#FF8A9E', '#FFB6C1', '#FF69B4', '#FF1493', '#FFD700', '#FFA500', '#FF4081'];
                const size = Math.random() * 8 + 4;
                const isCircle = Math.random() > 0.5;
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: '-10%',
                      width: size,
                      height: isCircle ? size : size * 1.6,
                      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                      borderRadius: isCircle ? '50%' : '2px',
                      animation: `confetti-fall ${Math.random() * 2 + 2.5}s ease-in forwards`,
                      animationDelay: `${Math.random() * 0.8}s`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      opacity: 0,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        {showWish && (
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300" />
              <span className="text-rose-400 text-sm">✦</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300" />
            </div>
            <p className="text-xl md:text-2xl font-light text-rose-700 tracking-wide">
              I hope your wish comes true.
            </p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300" />
              <span className="text-rose-400 text-sm">✦</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300" />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center gap-6 px-4">
        <button
          onClick={onPrevious}
          className="px-6 py-3 bg-rose-200/50 backdrop-blur-sm hover:bg-rose-300/50 text-rose-700 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 text-sm font-light tracking-wider"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 14L6 8L12 2" />
          </svg>
          PREV
        </button>

        <div className="flex items-center gap-2">
          <span className="text-rose-400/60 text-sm font-light tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={onNext}
          className="px-6 py-3 bg-rose-200/50 backdrop-blur-sm hover:bg-rose-300/50 text-rose-700 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 text-sm font-light tracking-wider"
        >
          NEXT
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 2L10 8L4 14" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(0);
          }
          20% {
            opacity: 1;
            transform: translateY(20px) rotate(72deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(calc(100vh)) rotate(720deg) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveCake;