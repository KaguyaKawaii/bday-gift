// src/components/FinalMessage.jsx
import React from 'react';

const FinalMessage = ({ name, sender, onNext, onPrevious, currentIndex, totalSlides }) => {
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

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full text-center">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-pink-300" />
          <span className="text-pink-300 text-sm">✦</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-pink-300" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-4 text-gray-800">
          HAPPY
          <br />
          BIRTHDAY,
          <br />
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-8" />

        {/* Messages */}
        <div className="space-y-4 text-gray-600 text-lg md:text-xl font-light leading-relaxed">
          <p>
            I hope this little corner
            <br />
            of the internet reminds you
            <br />
            how special you are to me.
          </p>
          
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent mx-auto my-4" />
          
          <p>
            There are still so many
            <br />
            memories waiting for us.
          </p>
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-8" />

        {/* Signature */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-pink-300 text-sm">✦</span>
          <span className="text-gray-500 font-light tracking-wider">
            {sender}
          </span>
          <span className="text-pink-300 text-sm">✦</span>
        </div>

        {/* Decorative bottom divider */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-pink-300" />
          <span className="text-pink-300 text-sm">✦</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-pink-300" />
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

export default FinalMessage;