// src/components/ThingsILove.jsx
import React from 'react';

const ThingsILove = ({ items, onNext, onPrevious, currentIndex, totalSlides }) => {
  // Color variations for each card
  const getCardStyle = (index) => {
    const colors = [
      'bg-amber-50 border-amber-200',
      'bg-pink-50 border-pink-200',
      'bg-purple-50 border-purple-200',
      'bg-blue-50 border-blue-200',
      'bg-orange-50 border-orange-200',
    ];
    return colors[index % colors.length];
  };

  const getAccentColor = (index) => {
    const colors = ['text-amber-400', 'text-pink-400', 'text-purple-400', 'text-blue-400', 'text-orange-400'];
    return colors[index % colors.length];
  };

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

      <div className="relative z-10 flex flex-col items-center max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            LITTLE THINGS I LOVE
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
          <p className="text-gray-400 text-sm font-light tracking-wider mt-3">about you</p>
        </div>

        {/* Love Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {items.map((item, index) => (
            <div 
              key={item.id}
              className={`group transform transition-all duration-300 hover:scale-105 ${
                index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'
              }`}
            >
              <div className={`${getCardStyle(index)} rounded-xl border-2 shadow-md hover:shadow-xl p-6 h-full transition-all duration-300 relative overflow-hidden`}>
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-current opacity-20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-current opacity-20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-current opacity-20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-current opacity-20" />

                {/* Decorative sticker dot */}
                <div className={`absolute top-3 right-3 text-xs ${getAccentColor(index)} opacity-30 select-none`}>
                  ✦
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`text-3xl mb-3 ${getAccentColor(index)} opacity-50 select-none`}>
                    ✦
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-800 mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {item.description}
                  </p>
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
    </div>
  );
};

export default ThingsILove;