import React, { useEffect, useState } from 'react';

/* Typing Effect Component */
const TypingWord = ({ word, delay = 0 }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setText(word.slice(0, index));
        if (index === word.length) clearInterval(interval);
      }, 100);
    }, delay);

    return () => clearTimeout(timeout);
  }, [word, delay]);

  return (
    <span className="relative inline-block text-2xl md:text-3xl font-medium lowercase tracking-wide">
      {/* Invisible full word (reserves space) */}
      <span className="invisible text-fuchsia-500">{word}</span>
      {/* Typed text */}
      <span className="absolute inset-0 text-fuchsia-500">{text}</span>
    </span>
  );
};

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0514] text-white font-sans overflow-hidden flex flex-col items-center justify-center p-6 pt-24">
      
      {/* --- MATCHED BACKGROUND START --- */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/14553707/pexels-photo-14553707.jpeg')",
        }}
      >
        {/* Dark Overlay - Matched to About Page (60% darkness) */}
        <div className="absolute inset-0 bg-black/15" />
        
        {/* Purple Tint - Matched style */}
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 via-purple-900/15 to-indigo-900/20" />
      </div>
      {/* --- MATCHED BACKGROUND END --- */}

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-12 animate-page">
        {/* Title */}
        <div className="relative inline-block animate-fade delay-1">
          <h1
            className="soft-glitch text-6xl md:text-8xl font-black tracking-tighter uppercase text-white relative"
            data-text="WIEMPOWER"
            style={{
              fontFamily: 'sans-serif',
              textShadow: '2px 0 #bc39f3, -1px 0 #00fff9'
            }}
          >
            WIEMPOWER
          </h1>
        </div>

        {/* Typing Words */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-20 animate-fade delay-2">
          <TypingWord word="discover" delay={1600} />
          <TypingWord word="develop" delay={2400} />
          <TypingWord word="deliver" delay={3000} />
        </div>

        {/* Mission Box */}
        <div className="border border-fuchsia-900/30 bg-fuchsia-950/20 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-2xl animate-fade delay-2">
          <p className="text-lg md:text-2xl font-light leading-relaxed text-pink-100">
            Where Ideas Ignite and Innovation Thrives. A platform that empowers
            women to address real-life challenges head-on and showcase their
            creativity and ingenuity.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-[#1a0b2e] via-[#2d124d] to-[#1a0b2e] py-4 px-6 rounded-md shadow-lg border-t border-white/10 animate-fade delay-3">
          <p className="text-sm md:text-lg font-bold tracking-widest uppercase text-center">
            Institute of Electrical and Electronics Engineers, <br className="md:hidden" />
            Indira Gandhi Delhi Technical University for Women
          </p>
        </div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px]" />

      <style>{`
        .animate-page {
          opacity: 0;
          transform: translateY(20px);
          animation: pageFade 1.2s ease-out forwards;
        }
        @keyframes pageFade {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.8s ease forwards;
        }
        .delay-1 { animation-delay: 0.4s; }
        .delay-2 { animation-delay: 0.8s; }
        .delay-3 { animation-delay: 1.2s; }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .soft-glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0.4;
          clip-path: inset(45% 0 45% 0);
          animation: move-slice 8s infinite steps(1);
        }
        @keyframes move-slice {
          0%, 90% { transform: translateX(0); opacity: 0; }
          91% { transform: translateX(3px); opacity: 0.5; border-top: 1px solid cyan; }
          93% { transform: translateX(-3px); opacity: 0.5; border-bottom: 1px solid magenta; }
          95%, 100% { transform: translateX(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;