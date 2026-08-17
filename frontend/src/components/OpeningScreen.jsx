// src/components/OpeningScreen.jsx
import React, { useState } from 'react';

const OpeningScreen = ({ onOpen }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setIsClosing(true);
    setTimeout(onOpen, 800);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
      isClosing ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 animate-gradient">
        {/* Decorative geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full animate-float-slower" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-white/5 rounded-full animate-float-slow" />
        
        {/* Decorative rings */}
        <div className="absolute top-1/3 left-1/3 w-48 h-48 border-2 border-white/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 border-2 border-white/10 rounded-full animate-spin-slower" />
        
        {/* Decorative lines */}
        <div className="absolute top-20 left-1/2 w-px h-32 bg-white/10 transform -rotate-45" />
        <div className="absolute bottom-20 left-1/2 w-px h-32 bg-white/10 transform rotate-45" />
        <div className="absolute top-1/2 left-20 w-32 h-px bg-white/10" />
        <div className="absolute top-1/2 right-20 w-32 h-px bg-white/10" />
        
        {/* Abstract shapes */}
        <div className="absolute top-10 right-20 w-16 h-16 border-2 border-white/10 transform rotate-45" />
        <div className="absolute bottom-10 left-20 w-16 h-16 border-2 border-white/10 transform -rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Decorative text elements */}
      <div className="absolute top-[10%] left-[8%] text-6xl md:text-7xl opacity-20 animate-float select-none pointer-events-none font-serif transform -rotate-12">
        ✦
      </div>
      <div className="absolute top-[15%] right-[10%] text-5xl md:text-6xl opacity-20 animate-float-delayed select-none pointer-events-none font-serif transform rotate-12">
        ✧
      </div>
      <div className="absolute bottom-[20%] left-[12%] text-5xl md:text-6xl opacity-20 animate-float-slow select-none pointer-events-none font-serif transform -rotate-8">
        ✦
      </div>
      <div className="absolute bottom-[15%] right-[8%] text-6xl md:text-7xl opacity-20 animate-float select-none pointer-events-none font-serif transform rotate-8">
        ✧
      </div>
      <div className="absolute top-[45%] left-[5%] text-3xl md:text-4xl opacity-15 animate-float-delayed select-none pointer-events-none">
        ✦
      </div>
      <div className="absolute top-[40%] right-[5%] text-3xl md:text-4xl opacity-15 animate-float-slow select-none pointer-events-none">
        ✧
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-white/30" />
          <span className="text-white/40 text-sm tracking-[0.3em] font-light">✦</span>
          <div className="w-12 h-px bg-white/30" />
        </div>

        <h2 className="text-white/80 text-sm md:text-base font-light tracking-[0.3em] uppercase mb-6 animate-fadeInDown">
          A Little Surprise
        </h2>
        
        <h1 className="text-white text-5xl md:text-7xl font-light mb-2 animate-fadeInUp tracking-wider">
          FOR
        </h1>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-pink-200 to-yellow-300 bg-clip-text text-transparent animate-namePulse tracking-wide">
          JENSHIN KIANTH
        </h1>
        
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6" />
        
        <p className="text-white/90 text-lg md:text-xl font-light mb-10 animate-fadeInUp delay-200 tracking-wide">
          I made something for you.
        </p>
        
        <button 
          className="group relative px-14 py-4 bg-white text-pink-500 font-bold text-lg tracking-wider rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden animate-fadeInUp delay-300"
          onClick={handleOpen}
        >
          <span className="relative z-10 flex items-center gap-3">
            <span className="text-pink-400">✦</span>
            OPEN
            <span className="text-pink-400">✦</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-rose-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </button>

        {/* Decorative corner accents */}
        <div className="absolute -top-8 -left-8 w-12 h-12 border-t-2 border-l-2 border-white/20" />
        <div className="absolute -top-8 -right-8 w-12 h-12 border-t-2 border-r-2 border-white/20" />
        <div className="absolute -bottom-8 -left-8 w-12 h-12 border-b-2 border-l-2 border-white/20" />
        <div className="absolute -bottom-8 -right-8 w-12 h-12 border-b-2 border-r-2 border-white/20" />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spinSlower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes namePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 4s ease-in-out infinite; }
        .animate-float-slower { animation: floatSlower 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out infinite 1.5s; }
        .animate-spin-slow { animation: spinSlow 20s linear infinite; }
        .animate-spin-slower { animation: spinSlower 25s linear infinite; }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
        .animate-fadeInUp.delay-300 { animation-delay: 0.3s; }
        .animate-namePulse { animation: namePulse 2s ease-in-out infinite; }
        
        .shadow-3xl {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default OpeningScreen;