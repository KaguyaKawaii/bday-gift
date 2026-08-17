// src/components/Navigation.jsx
import React, { useState } from 'react';

const Navigation = ({ sections, currentSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navigation Toggle Button - Center Right */}
      <button 
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 group focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <div className="flex flex-col items-center gap-1.5 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10">
          <div className="w-0.5 h-5 bg-pink-400/60 group-hover:bg-pink-500 transition-all duration-300" />
          <div className="w-0.5 h-5 bg-pink-400/40 group-hover:bg-pink-500 transition-all duration-300" />
          <div className="w-0.5 h-5 bg-pink-400/20 group-hover:bg-pink-500 transition-all duration-300" />
          <span className="text-[8px] tracking-[0.3em] text-pink-400/60 group-hover:text-pink-500 mt-1 font-light" style={{ writingMode: 'vertical-rl' }}>
            MENU
          </span>
        </div>
      </button>
      
      {/* Navigation Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          {/* Navigation Panel */}
          <div 
            className="absolute right-0 top-0 h-full w-80 bg-white/98 backdrop-blur-xl shadow-2xl animate-slideInRight overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/98 backdrop-blur-xl px-6 py-6 border-b border-pink-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-pink-400 text-sm">✦</span>
                  <span className="text-xs tracking-[0.3em] text-pink-400 font-light uppercase">
                    Navigation
                  </span>
                </div>
                <button 
                  className="w-8 h-8 rounded-full hover:bg-pink-50 transition-all duration-200 text-pink-400 text-xl flex items-center justify-center hover:scale-110 hover:rotate-90 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Navigation Items */}
            <div className="px-4 py-4 space-y-0.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-300 group ${
                    currentSection === section.id 
                      ? 'bg-gradient-to-r from-pink-50 to-rose-50 text-pink-600' 
                      : 'hover:bg-pink-50/50 text-gray-600 hover:text-pink-500'
                  }`}
                  onClick={() => {
                    onNavigate(section.id);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] tracking-widest font-mono transition-all duration-300 w-6 ${
                      currentSection === section.id 
                        ? 'text-pink-400 font-medium' 
                        : 'text-gray-400 group-hover:text-pink-400'
                    }`}>
                      {section.number}
                    </span>
                    <span className={`text-sm tracking-wide transition-all duration-300 ${
                      currentSection === section.id 
                        ? 'font-medium' 
                        : 'font-light group-hover:font-medium'
                    }`}>
                      {section.title}
                    </span>
                    {currentSection === section.id && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse-dot" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(100%);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-pulse-dot {
          animation: pulse-dot 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;