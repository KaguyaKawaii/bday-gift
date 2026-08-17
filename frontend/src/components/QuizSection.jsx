// src/components/QuizSection.jsx
import React, { useState } from 'react';

const QuizSection = ({ quiz, onNext, onPrevious, currentIndex, totalSlides }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (answerIndex) => {
    const correct = answerIndex === quiz[currentQuestion].correctAnswer;
    setSelectedAnswer(answerIndex);
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < quiz.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  if (showResult) {
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
          <div className="text-6xl mb-6 opacity-20 select-none">✦</div>
          
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] text-rose-600 mb-6">
            YOUR SCORE
          </h2>
          
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-8" />
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-pink-200" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-200" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-200" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-pink-200" />
            
            <h3 className="text-6xl font-light text-rose-600 mb-4">
              {score} / {quiz.length}
            </h3>
            
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-4" />
            
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              {score === quiz.length 
                ? "Perfect! You know us so well. ✦" 
                : score >= quiz.length * 0.7 
                  ? "Not bad at all! ✦" 
                  : "We'll make more memories to remember. ✦"}
            </p>

            <button
              onClick={resetQuiz}
              className="mt-6 px-6 py-2 bg-rose-100 hover:bg-rose-200 text-rose-600 rounded-full transition-all duration-300 text-sm font-light tracking-wider"
            >
              TAKE AGAIN
            </button>
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

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-rose-600">
            HOW WELL DO YOU KNOW US?
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mt-3" />
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full relative">
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-pink-200" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-200" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-200" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-pink-200" />

          {/* Question */}
          <div className="mb-6">
            <span className="text-xs text-gray-400 font-light tracking-widest block mb-2">
              QUESTION {String(currentQuestion + 1).padStart(2, '0')}
            </span>
            <h3 className="text-lg md:text-xl font-light text-gray-800 leading-relaxed">
              {quiz[currentQuestion].question}
            </h3>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-100 to-transparent my-4" />

          {/* Options */}
          <div className="space-y-3">
            {quiz[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = isSelected && isCorrect;
              const isWrongAnswer = isSelected && !isCorrect;
              
              return (
                <button
                  key={index}
                  className={`w-full p-4 text-left rounded-xl transition-all duration-300 text-sm md:text-base font-light ${
                    isSelected
                      ? isCorrectAnswer
                        ? 'bg-green-50 border-2 border-green-400 text-green-700'
                        : isWrongAnswer
                          ? 'bg-red-50 border-2 border-red-400 text-red-700'
                          : 'bg-rose-50 border-2 border-rose-400 text-rose-700'
                      : 'bg-gray-50 hover:bg-pink-50 border-2 border-transparent hover:border-pink-200 text-gray-700'
                  }`}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono ${
                      isSelected
                        ? isCorrectAnswer
                          ? 'text-green-400'
                          : isWrongAnswer
                            ? 'text-red-400'
                            : 'text-rose-400'
                        : 'text-gray-400'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {isSelected && (
                      <span className="ml-auto">
                        {isCorrectAnswer ? '✓' : '✗'}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {selectedAnswer !== null && (
            <div className="mt-4 text-center">
              <div className={`text-sm font-light tracking-wider ${
                isCorrect ? 'text-green-500' : 'text-red-500'
              }`}>
                {isCorrect ? '✦ YOU REMEMBERED. ✦' : '✦ NOT QUITE. ✦'}
              </div>
            </div>
          )}
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

export default QuizSection;