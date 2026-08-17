// src/components/FinalMemoryPage.jsx
import React from 'react';

const FinalMemoryPage = ({ onNext, onPrevious, currentIndex, totalSlides }) => {
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

      <div className="relative z-10 flex flex-col items-center max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            TO BE CONTINUED
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        {/* Polaroid Frame */}
        <div className="relative w-full max-w-sm">
          {/* Decorative stars */}
          <div className="absolute -top-6 -left-6 text-3xl text-pink-300/20 select-none animate-float-slow">✦</div>
          <div className="absolute -bottom-6 -right-6 text-2xl text-pink-300/20 select-none animate-float">✦</div>

          {/* Polaroid */}
          <div className="bg-white rounded-lg shadow-2xl p-4 pb-8 relative transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-pink-200" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-pink-200" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-pink-200" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-pink-200" />

            {/* Photo Frame */}
            <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                }} />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-pink-200/20 rounded-full blur-2xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl text-pink-300/40 select-none mb-3">✦</div>
                <span className="text-xl font-light tracking-[0.3em] text-pink-400/60">
                  NEXT MEMORY
                </span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mt-3" />
                <div className="text-4xl text-pink-300/40 select-none mt-3">✦</div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400 font-light leading-relaxed tracking-wide">
                We'll come back here
                <br />
                when we've made another one.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-10">
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-3deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FinalMemoryPage;