// src/components/InteractiveCards.jsx
import React, { useState } from 'react';

const InteractiveCards = ({ onNext, onPrevious, currentIndex, totalSlides }) => {
  const [flippedCards, setFlippedCards] = useState({});

  const cards = [
    {
      id: 1,
      front: "TAP ME",
      back: "I still get butterflies when I see your name on my phone.",
      color: "pink"
    },
    {
      id: 2,
      front: "TAP ME",
      back: "Your laugh is my favorite sound in the world.",
      color: "rose"
    },
    {
      id: 3,
      front: "TAP ME",
      back: "I love the way you scrunch your nose when you're thinking.",
      color: "purple"
    }
  ];

  const toggleCard = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getCardGradient = (color) => {
    const gradients = {
      pink: 'from-pink-400 to-pink-500',
      rose: 'from-rose-400 to-rose-500',
      purple: 'from-purple-400 to-purple-500'
    };
    return gradients[color] || gradients.pink;
  };

  const getCardBackGradient = (color) => {
    const gradients = {
      pink: 'from-pink-50 to-pink-100',
      rose: 'from-rose-50 to-rose-100',
      purple: 'from-purple-50 to-purple-100'
    };
    return gradients[color] || gradients.pink;
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
            A FEW SECRETS
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
          <p className="text-gray-400 text-sm font-light tracking-wider mt-3">tap a card to reveal</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {cards.map((card, index) => {
            const isFlipped = flippedCards[card.id];
            return (
              <div
                key={card.id}
                className="perspective-1000 h-72 cursor-pointer"
                onClick={() => toggleCard(card.id)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of card */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden bg-gradient-to-br ${getCardGradient(card.color)}`}
                  >
                    <div className="text-white/20 text-6xl select-none mb-4">✦</div>
                    <span className="text-white font-light text-lg tracking-wider">
                      {card.front}
                    </span>
                    <div className="absolute bottom-4 text-white/20 text-xs tracking-widest">
                      ✦ TAP ✦
                    </div>
                    
                    {/* Decorative corners */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/20" />
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/20" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/20" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/20" />
                  </div>

                  {/* Back of card */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180 bg-gradient-to-br ${getCardBackGradient(card.color)}`}
                  >
                    <div className={`text-${card.color}-300 text-2xl select-none mb-3`}>✦</div>
                    <p className="text-xs text-gray-400 font-light tracking-wider mb-3">
                      One thing I secretly love about you...
                    </p>
                    <p className="text-gray-700 text-center font-light leading-relaxed">
                      {card.back}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default InteractiveCards;