// src/components/RemindersSection.jsx
import React from 'react';

const RemindersSection = ({ onNext, onPrevious, currentIndex, totalSlides }) => {
  const reminders = [
    { type: 'A SONG', value: '[SONG]', icon: '♪' },
    { type: 'A PLACE', value: '[PLACE]', icon: '✦' },
    { type: 'A FOOD', value: '[FOOD]', icon: '✧' },
    { type: 'A COLOR', value: '[COLOR]', icon: '✦' },
    { type: 'A MOVIE', value: '[MOVIE]', icon: '♪' },
    { type: 'A RANDOM THING', value: '[THING]', icon: '✧' },
  ];

  const getCardColor = (index) => {
    const colors = [
      'from-pink-100 to-pink-200 border-pink-200',
      'from-rose-100 to-rose-200 border-rose-200',
      'from-purple-100 to-purple-200 border-purple-200',
      'from-blue-100 to-blue-200 border-blue-200',
      'from-teal-100 to-teal-200 border-teal-200',
      'from-orange-100 to-orange-200 border-orange-200'
    ];
    return colors[index % colors.length];
  };

  const getTextColor = (index) => {
    const colors = [
      'text-pink-600',
      'text-rose-600',
      'text-purple-600',
      'text-blue-600',
      'text-teal-600',
      'text-orange-600'
    ];
    return colors[index % colors.length];
  };

  const getIconColor = (index) => {
    const colors = [
      'text-pink-400',
      'text-rose-400',
      'text-purple-400',
      'text-blue-400',
      'text-teal-400',
      'text-orange-400'
    ];
    return colors[index % colors.length];
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

      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            THINGS THAT MAKE ME THINK OF YOU
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        {/* Reminders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reminders.map((reminder, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'
              }`}
            >
              <div className={`bg-gradient-to-br ${getCardColor(index)} rounded-2xl border-2 shadow-md hover:shadow-xl p-6 h-full transition-all duration-300 relative overflow-hidden`}>
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-current opacity-20" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-current opacity-20" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-current opacity-20" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-current opacity-20" />

                {/* Icon */}
                <div className={`text-4xl ${getIconColor(index)} opacity-50 mb-4 select-none`}>
                  {reminder.icon}
                </div>

                {/* Type */}
                <span className={`text-xs font-light tracking-widest ${getTextColor(index)} block mb-2`}>
                  {reminder.type}
                </span>

                {/* Value */}
                <span className="text-lg font-light text-gray-700 block">
                  {reminder.value}
                </span>

                {/* Decorative line */}
                <div className={`w-8 h-px bg-gradient-to-r from-transparent ${getIconColor(index).replace('text-', 'to-')} to-transparent mt-3 opacity-30`} />
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

export default RemindersSection;