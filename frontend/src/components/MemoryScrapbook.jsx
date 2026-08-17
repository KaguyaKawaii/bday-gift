// src/components/MemoryScrapbook.jsx
import React, { useState } from 'react';

const MemoryScrapbook = ({ memories, onNext, onPrevious, currentIndex, totalSlides }) => {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Sample placeholder images if memory.photo is not available
  const getPlaceholderColor = (index) => {
    const colors = ['pink', 'rose', 'purple', 'blue', 'teal', 'orange'];
    return colors[index % colors.length];
  };

  const openMemory = (memory, index) => {
    setSelectedMemory(memory);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedMemory(null);
  };

  const goToPreviousMemory = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedMemory(memories[newIndex]);
    }
  };

  const goToNextMemory = () => {
    if (selectedIndex < memories.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedMemory(memories[newIndex]);
    }
  };

  // Keyboard navigation for modal
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMemory) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToNextMemory();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPreviousMemory();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMemory, selectedIndex]);

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
            OUR LITTLE ARCHIVE
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
          <p className="text-gray-400 text-sm font-light tracking-wider mt-3">click any memory to view</p>
        </div>

        {/* Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {memories.map((memory, index) => {
            const color = getPlaceholderColor(index);
            return (
              <div 
                key={memory.id}
                className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
                }`}
                onClick={() => openMemory(memory, index)}
              >
                <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-xl transition-shadow duration-300">
                  {/* Photo */}
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg overflow-hidden relative">
                    {memory.photo ? (
                      <img 
                        src={memory.photo} 
                        alt={memory.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-${color}-100 to-${color}-200">
                              <span class="text-4xl opacity-30">✦</span>
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-${color}-100 to-${color}-200`}>
                        <span className="text-4xl opacity-30">✦</span>
                      </div>
                    )}
                    
                    {/* Decorative sticker dot */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-pink-200/50 rounded-full flex items-center justify-center">
                      <span className="text-xs text-pink-400">✦</span>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="mt-3 text-center">
                    <span className="text-xs text-gray-400 font-light tracking-wider block">
                      {memory.date}
                    </span>
                    <p className="text-sm text-gray-600 font-light italic mt-1">
                      "{memory.quote}"
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

      {/* Modal - Full screen with left/right navigation */}
      {selectedMemory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className="relative w-[90vw] max-w-3xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white text-2xl flex items-center justify-center transition-all duration-200 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                onClick={goToPreviousMemory}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M15 18L9 12L15 6" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedIndex < memories.length - 1 && (
              <button
                onClick={goToNextMemory}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 18L15 12L9 6" />
                </svg>
              </button>
            )}

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Photo */}
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg overflow-hidden">
                {selectedMemory.photo ? (
                  <img 
                    src={selectedMemory.photo} 
                    alt={selectedMemory.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <span class="text-6xl opacity-20">✦</span>
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl opacity-20">✦</span>
                  </div>
                )}
              </div>
              
              {/* Details */}
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-light text-gray-800 tracking-wide">
                  {selectedMemory.title}
                </h3>
                
                <span className="text-xs text-gray-400 font-light tracking-wider block mt-1">
                  {selectedMemory.date}
                </span>
                
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto my-4" />
                
                <p className="text-gray-600 text-base font-light leading-relaxed">
                  {selectedMemory.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryScrapbook;