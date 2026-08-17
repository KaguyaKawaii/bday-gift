// src/components/PersonalMessage.jsx
import React from 'react';

const PersonalMessage = ({ message, onNext, onPrevious, currentIndex, totalSlides }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-pink-50 via-rose-50 to-white px-4 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-pink-300/30 text-3xl select-none">✦</div>
      <div className="absolute top-8 right-8 text-pink-300/30 text-3xl select-none">✦</div>
      <div className="absolute bottom-8 left-8 text-pink-300/30 text-3xl select-none">✦</div>
      <div className="absolute bottom-8 right-8 text-pink-300/30 text-3xl select-none">✦</div>
      
      <div className="absolute top-1/4 left-6 w-px h-20 bg-gradient-to-b from-transparent via-pink-200/50 to-transparent" />
      <div className="absolute top-1/4 right-6 w-px h-20 bg-gradient-to-b from-transparent via-pink-200/50 to-transparent" />

      <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            A NOTE FOR YOU
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        {/* Message Card */}
        <div className="w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
          {/* Corner decorations */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-pink-200" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-200" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-200" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-pink-200" />
          
          {/* Decorative dots */}
          <div className="absolute top-4 right-4 text-pink-200 text-xl select-none">✦</div>
          <div className="absolute bottom-4 left-4 text-pink-200 text-xl select-none">✦</div>
          
          {/* Tape decorations */}
          <div className="absolute -top-2 left-1/3 w-16 h-6 bg-yellow-100/60 rotate-[-8deg] rounded-sm shadow-sm" />
          <div className="absolute -bottom-2 right-1/3 w-16 h-6 bg-yellow-100/60 rotate-[5deg] rounded-sm shadow-sm" />

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center font-light">
            {message}
          </p>
        </div>
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
    </div>
  );
};

export default PersonalMessage;