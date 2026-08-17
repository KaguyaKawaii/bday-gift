// src/components/LoveLetter.jsx
import React from 'react';

const LoveLetter = ({ letter, onNext, onPrevious, currentIndex, totalSlides }) => {
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

      <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            A LETTER FOR YOU
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        {/* Letter Container */}
        <div className="w-full relative">
          {/* Decorative tape strips */}
          <div className="absolute -top-2 left-1/4 w-20 h-6 bg-yellow-100/70 rotate-[-6deg] rounded-sm shadow-sm" />
          <div className="absolute -bottom-2 right-1/4 w-20 h-6 bg-yellow-100/70 rotate-[4deg] rounded-sm shadow-sm" />

          {/* Decorative bow - top right */}
          <div className="absolute -top-4 -right-4 text-4xl text-pink-300 opacity-40 select-none">
            ✦
          </div>

          {/* Decorative flower - bottom left */}
          <div className="absolute -bottom-4 -left-4 text-4xl text-pink-300 opacity-40 select-none">
            ✧
          </div>

          {/* Letter Paper */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            {/* Corner decorations */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-pink-200" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-200" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-200" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-pink-200" />

            {/* Decorative inner corners */}
            <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-pink-100/50" />
            <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-pink-100/50" />
            <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-pink-100/50" />
            <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-pink-100/50" />

            {/* Date */}
            <div className="text-center mb-6">
              <span className="text-xs text-gray-400 font-light tracking-widest">
                {letter.date}
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-auto mt-2" />
            </div>

            {/* Letter Content */}
            <div className="space-y-4 text-gray-700 text-base md:text-lg font-light leading-relaxed">
              {letter.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-center">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8 text-center">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent mx-auto mb-4" />
              <p className="text-sm text-gray-400 font-light tracking-wider">
                With all my love,
              </p>
              <p className="text-lg text-rose-500 font-light tracking-wider mt-1">
                {letter.signature}
              </p>
              <div className="mt-2 text-pink-300 text-sm select-none">✦</div>
            </div>
          </div>
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

export default LoveLetter;