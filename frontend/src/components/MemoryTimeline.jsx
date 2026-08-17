// src/components/MemoryTimeline.jsx
import React from 'react';

const MemoryTimeline = ({ timeline, onNext, onPrevious, currentIndex, totalSlides }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-50 via-rose-50 to-white px-4 py-16 relative overflow-hidden">
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

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            HOW WE GOT HERE
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-200 to-transparent -translate-x-1/2" />

          {timeline.map((item, index) => (
            <div 
              key={item.id}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-xs text-rose-400 font-light tracking-wider block mb-1">
                    {item.date}
                  </span>
                  <h3 className="text-base font-medium text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 shadow-md z-10">
                  <div className="w-8 h-8 rounded-full bg-pink-400/20 animate-ping absolute -top-2 -left-2" />
                </div>
              </div>

              {/* Decorative emoji/sticker */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="text-2xl opacity-20 select-none">
                  ✦
                </div>
              </div>
            </div>
          ))}
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
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          75% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default MemoryTimeline;