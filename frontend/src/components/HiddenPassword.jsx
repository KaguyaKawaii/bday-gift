// src/components/HiddenPassword.jsx
import React, { useState } from 'react';

const HiddenPassword = ({ onUnlock, unlockedMessage, onNext, onPrevious, currentIndex, totalSlides }) => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleUnlock = () => {
    if (password === 'bubba') {
      setIsUnlocked(true);
      onUnlock("You found our little secret, bb. Maybe words can't fully explain how much I love you, but I hope every little thing I've made for you shows you just how much you mean to me.");
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  if (isUnlocked) {
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
          <div className="text-6xl mb-6 text-rose-300 opacity-30 select-none">✦</div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-pink-200" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-200" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-200" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-pink-200" />
            
            <div className="text-rose-400 text-4xl mb-4 select-none">✦</div>
            
            <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
              {unlockedMessage}
            </p>
            
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-4" />
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
  }

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
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-rose-600">
            THERE'S SOMETHING HIDDEN HERE
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        {/* Password Input */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full relative">
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-pink-200" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-200" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-200" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-pink-200" />

          <div className="text-center mb-6">
            <div className="text-4xl text-rose-300 opacity-30 select-none">✦</div>
            <p className="text-xs text-gray-400 font-light tracking-widest mt-2">
              ENTER THE SECRET PASSWORD
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent mx-auto mt-3" />
          </div>

          <div className="space-y-4">
            <input
              type="password"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-center text-gray-700 placeholder-gray-400 focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all duration-300"
              placeholder="✦ ✦ ✦ ✦ ✦ ✦ ✦"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
            />

            <button
              onClick={handleUnlock}
              className="w-full py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-xl font-light tracking-wider hover:from-pink-500 hover:to-rose-500 transition-all duration-300 hover:scale-[1.02]"
            >
              UNLOCK
            </button>

            {/* Hint Toggle Button */}
            <button
              onClick={() => setShowHint(!showHint)}
              className="w-full text-center text-xs text-gray-400 hover:text-rose-400 transition-all duration-300 font-light tracking-wider"
            >
              {showHint ? '✦ HIDE HINT ✦' : '✦ NEED A HINT? ✦'}
            </button>

            {/* Hint Message */}
            {showHint && (
              <div className="text-center p-4 bg-pink-50/80 rounded-xl border border-pink-200 animate-fadeIn">
                <p className="text-xs text-gray-500 font-light tracking-wider leading-relaxed">
                  What's the sweet nickname she calls you?
                  <br />
                  <span className="text-rose-400 font-medium">The one that makes you smile every time.</span>
                  <br />
                  It's short, cute, and starts with a 'B'! ✦
                </p>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent mx-auto mt-2" />
                <p className="text-[10px] text-gray-400 font-light tracking-widest mt-2">
                  💡 HINT: B _ _ _ _ (it's what she lovingly calls you)
                </p>
              </div>
            )}

            {showError && (
              <div className="text-center text-red-400 text-sm font-light tracking-wider animate-shake">
                ✦ That's not quite right. Try again! ✦
              </div>
            )}
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

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HiddenPassword;