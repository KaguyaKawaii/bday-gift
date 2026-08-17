// src/components/BirthdayHero.jsx
import React, { useEffect, useState } from 'react';

const BirthdayHero = ({ 
  name, 
  onNext, 
  onPrevious, 
  currentIndex = 0, 
  totalSlides = 1 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className={`min-h-screen w-full flex items-center justify-center relative overflow-hidden transition-opacity duration-800 ease-in bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-128 h-128 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-white/5 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-8 max-w-4xl w-full">
        <h1 className="font-black leading-[1.1] mb-8 text-[clamp(3rem,10vw,6rem)] drop-shadow-2xl">
          HAPPY
          <br />
          BIRTHDAY,
          <br />
          <span className="inline-block bg-gradient-to-r from-yellow-300 via-pink-200 to-yellow-300 bg-clip-text text-transparent text-[clamp(4rem,12vw,7rem)]">
            {name}
          </span>
        </h1>
        
        <div className="text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed drop-shadow-md">
          <p className="my-2">Another year of you.</p>
          <p className="my-2">Another year I'm grateful you're here.</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center gap-6 px-4">
        {onPrevious && (
          <button
            onClick={onPrevious}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 text-sm font-light tracking-wider"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 14L6 8L12 2" />
            </svg>
            PREV
          </button>
        )}

        <div className="flex items-center gap-2">
          <span className="text-white/60 text-sm font-light tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {onNext && (
          <button
            onClick={onNext}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 text-sm font-light tracking-wider"
          >
            NEXT
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 2L10 8L4 14" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default BirthdayHero;