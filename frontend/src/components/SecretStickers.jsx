// src/components/SecretStickers.jsx
import React, { useState } from 'react';

const SecretStickers = ({ secrets, onFound, foundSecrets, onNext, onPrevious, currentIndex, totalSlides }) => {
  const [showSecret, setShowSecret] = useState(null);

  const handleSecretClick = (secret) => {
    if (!foundSecrets.includes(secret.id)) {
      onFound(secret.id);
    }
    setShowSecret(secret);
    
    setTimeout(() => {
      setShowSecret(null);
    }, 3000);
  };

  const getStickerColor = (index) => {
    const colors = [
      'from-pink-400 to-rose-400',
      'from-purple-400 to-pink-400',
      'from-rose-400 to-orange-400',
      'from-blue-400 to-purple-400',
      'from-teal-400 to-blue-400',
      'from-orange-400 to-rose-400'
    ];
    return colors[index % colors.length];
  };

  const getStickerEmoji = (index) => {
    const emojis = ['✦', '✧', '✦', '✧', '✦', '✧'];
    return emojis[index % emojis.length];
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

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600">
            SECRET STICKERS
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
          <p className="text-gray-400 text-sm font-light tracking-wider mt-3">
            {foundSecrets.length} / {secrets.length} found
          </p>
        </div>

        {/* Stickers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-3xl">
          {secrets.map((secret, index) => {
            const isFound = foundSecrets.includes(secret.id);
            return (
              <div
                key={secret.id}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isFound 
                    ? 'opacity-40 scale-95' 
                    : 'hover:scale-110 hover:-translate-y-2'
                }`}
                onClick={() => handleSecretClick(secret)}
              >
                {/* Sticker Card */}
                <div className={`relative aspect-square rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br ${getStickerColor(index)} p-6 flex flex-col items-center justify-center`}>
                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/20" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/20" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/20" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/20" />

                  {/* Sticker content */}
                  <div className="text-white text-5xl md:text-6xl select-none mb-2">
                    {getStickerEmoji(index)}
                  </div>
                  
                  {isFound ? (
                    <div className="text-white/50 text-xs tracking-widest select-none">
                      FOUND
                    </div>
                  ) : (
                    <div className="text-white/70 text-xs tracking-widest select-none">
                      TAP
                    </div>
                  )}
                </div>

                {/* Found overlay */}
                {isFound && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl">
                    <div className="text-white text-2xl">✦</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Toast Notification */}
      {showSecret && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-slideUp">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-pink-200" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-200" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-200" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-pink-200" />
            
            <div className="text-center">
              <div className="text-3xl text-pink-300 select-none mb-2">✦</div>
              <p className="text-gray-700 text-sm font-light leading-relaxed">
                {showSecret.message}
              </p>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
            </div>
          </div>
        </div>
      )}

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
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SecretStickers;