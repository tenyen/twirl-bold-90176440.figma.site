import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/sections/MainContent/components/Navbar";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to the Likelee Ecosystem.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] relative overflow-hidden">
          
          {/* Animated Butterflies */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <style>{`
              @keyframes butterfly-flight-1 {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(30vw, -20vh) rotate(90deg); }
                50% { transform: translate(60vw, 10vh) rotate(180deg); }
                75% { transform: translate(30vw, 40vh) rotate(270deg); }
                100% { transform: translate(0, 0) rotate(360deg); }
              }
              @keyframes butterfly-flight-2 {
                0% { transform: translate(100vw, 20vh) rotate(0deg); }
                25% { transform: translate(70vw, 50vh) rotate(-90deg); }
                50% { transform: translate(40vw, 20vh) rotate(-180deg); }
                75% { transform: translate(70vw, -10vh) rotate(-270deg); }
                100% { transform: translate(100vw, 20vh) rotate(-360deg); }
              }
              @keyframes butterfly-flight-3 {
                0% { transform: translate(50vw, 80vh) rotate(0deg); }
                25% { transform: translate(20vw, 60vh) rotate(120deg); }
                50% { transform: translate(50vw, 30vh) rotate(240deg); }
                75% { transform: translate(80vw, 60vh) rotate(360deg); }
                100% { transform: translate(50vw, 80vh) rotate(480deg); }
              }
              @keyframes butterfly-flight-4 {
                0% { transform: translate(10vw, 50vh) rotate(0deg); }
                25% { transform: translate(40vw, 70vh) rotate(-120deg); }
                50% { transform: translate(70vw, 50vh) rotate(-240deg); }
                75% { transform: translate(40vw, 30vh) rotate(-360deg); }
                100% { transform: translate(10vw, 50vh) rotate(-480deg); }
              }
              @keyframes wing-flap {
                0%, 100% { transform: scaleX(1); }
                50% { transform: scaleX(0.7); }
              }
            `}</style>

            {/* Butterfly 1 - Cyan - Hand Drawn */}
            <div className="absolute" style={{ animation: 'butterfly-flight-1 20s ease-in-out infinite' }}>
              <svg className="w-8 h-8" viewBox="0 0 100 100" style={{ animation: 'wing-flap 0.3s ease-in-out infinite' }}>
                {/* Hand-drawn wings with sketchy edges */}
                <path d="M 35 40 Q 20 25 18 35 Q 15 45 20 55 Q 28 65 35 65 Q 40 55 35 40 Z" 
                      fill="#5CE1E6" stroke="#22D3EE" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 40 Q 80 25 82 35 Q 85 45 80 55 Q 72 65 65 65 Q 60 55 65 40 Z" 
                      fill="#5CE1E6" stroke="#22D3EE" strokeWidth="1.5" opacity="0.8" />
                <path d="M 35 65 Q 28 70 25 78 Q 30 85 35 82 Q 38 75 35 65 Z" 
                      fill="#22D3EE" stroke="#0891B2" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 65 Q 72 70 75 78 Q 70 85 65 82 Q 62 75 65 65 Z" 
                      fill="#22D3EE" stroke="#0891B2" strokeWidth="1.5" opacity="0.8" />
                {/* Body with sketchy style */}
                <path d="M 50 30 Q 48 50 49 80" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="50" cy="28" r="4" fill="#000" stroke="#000" strokeWidth="1" />
                {/* Antennae */}
                <path d="M 50 28 Q 45 20 43 18" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M 50 28 Q 55 20 57 18" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="43" cy="18" r="1.5" fill="#000" />
                <circle cx="57" cy="18" r="1.5" fill="#000" />
              </svg>
            </div>

            {/* Butterfly 2 - Yellow - Hand Drawn */}
            <div className="absolute" style={{ animation: 'butterfly-flight-2 25s ease-in-out infinite' }}>
              <svg className="w-10 h-10" viewBox="0 0 100 100" style={{ animation: 'wing-flap 0.35s ease-in-out infinite' }}>
                <path d="M 35 40 Q 18 28 16 38 Q 14 48 19 58 Q 27 68 35 65 Q 39 53 35 40 Z" 
                      fill="#FFC94D" stroke="#FBBF24" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 40 Q 82 28 84 38 Q 86 48 81 58 Q 73 68 65 65 Q 61 53 65 40 Z" 
                      fill="#FFC94D" stroke="#FBBF24" strokeWidth="1.5" opacity="0.8" />
                <path d="M 35 65 Q 27 72 24 80 Q 29 87 35 83 Q 37 73 35 65 Z" 
                      fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 65 Q 73 72 76 80 Q 71 87 65 83 Q 63 73 65 65 Z" 
                      fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" opacity="0.8" />
                <path d="M 50 30 Q 49 52 50 80" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="50" cy="28" r="4" fill="#000" stroke="#000" strokeWidth="1" />
                <path d="M 50 28 Q 44 19 42 17" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M 50 28 Q 56 19 58 17" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="42" cy="17" r="1.5" fill="#000" />
                <circle cx="58" cy="17" r="1.5" fill="#000" />
              </svg>
            </div>

            {/* Butterfly 3 - Orange - Hand Drawn */}
            <div className="absolute" style={{ animation: 'butterfly-flight-3 22s ease-in-out infinite' }}>
              <svg className="w-9 h-9" viewBox="0 0 100 100" style={{ animation: 'wing-flap 0.32s ease-in-out infinite' }}>
                <path d="M 35 40 Q 19 26 17 36 Q 15 46 21 56 Q 29 66 35 65 Q 40 54 35 40 Z" 
                      fill="#FB923C" stroke="#F97316" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 40 Q 81 26 83 36 Q 85 46 79 56 Q 71 66 65 65 Q 60 54 65 40 Z" 
                      fill="#FB923C" stroke="#F97316" strokeWidth="1.5" opacity="0.8" />
                <path d="M 35 65 Q 28 71 26 79 Q 31 86 35 82 Q 38 74 35 65 Z" 
                      fill="#F97316" stroke="#EA580C" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 65 Q 72 71 74 79 Q 69 86 65 82 Q 62 74 65 65 Z" 
                      fill="#F97316" stroke="#EA580C" strokeWidth="1.5" opacity="0.8" />
                <path d="M 50 30 Q 48 51 49 80" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="50" cy="28" r="4" fill="#000" stroke="#000" strokeWidth="1" />
                <path d="M 50 28 Q 45 21 43 19" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M 50 28 Q 55 21 57 19" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="43" cy="19" r="1.5" fill="#000" />
                <circle cx="57" cy="19" r="1.5" fill="#000" />
              </svg>
            </div>

            {/* Butterfly 4 - Red - Hand Drawn */}
            <div className="absolute" style={{ animation: 'butterfly-flight-4 18s ease-in-out infinite' }}>
              <svg className="w-8 h-8" viewBox="0 0 100 100" style={{ animation: 'wing-flap 0.28s ease-in-out infinite' }}>
                <path d="M 35 40 Q 20 27 18 37 Q 16 47 22 57 Q 30 67 35 65 Q 39 52 35 40 Z" 
                      fill="#FF6B6B" stroke="#EF4444" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 40 Q 80 27 82 37 Q 84 47 78 57 Q 70 67 65 65 Q 61 52 65 40 Z" 
                      fill="#FF6B6B" stroke="#EF4444" strokeWidth="1.5" opacity="0.8" />
                <path d="M 35 65 Q 29 70 27 78 Q 32 85 35 81 Q 37 72 35 65 Z" 
                      fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 65 Q 71 70 73 78 Q 68 85 65 81 Q 63 72 65 65 Z" 
                      fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" opacity="0.8" />
                <path d="M 50 30 Q 49 50 50 80" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="50" cy="28" r="4" fill="#000" stroke="#000" strokeWidth="1" />
                <path d="M 50 28 Q 46 22 44 20" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M 50 28 Q 54 22 56 20" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="44" cy="20" r="1.5" fill="#000" />
                <circle cx="56" cy="20" r="1.5" fill="#000" />
              </svg>
            </div>

            {/* Butterfly 5 - Cyan (different path) - Hand Drawn */}
            <div className="absolute" style={{ animation: 'butterfly-flight-2 28s ease-in-out infinite 5s' }}>
              <svg className="w-7 h-7" viewBox="0 0 100 100" style={{ animation: 'wing-flap 0.33s ease-in-out infinite' }}>
                <path d="M 35 40 Q 21 29 19 39 Q 17 49 23 59 Q 31 69 35 65 Q 38 51 35 40 Z" 
                      fill="#5CE1E6" stroke="#22D3EE" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 40 Q 79 29 81 39 Q 83 49 77 59 Q 69 69 65 65 Q 62 51 65 40 Z" 
                      fill="#5CE1E6" stroke="#22D3EE" strokeWidth="1.5" opacity="0.8" />
                <path d="M 35 65 Q 30 69 28 77 Q 33 84 35 80 Q 36 71 35 65 Z" 
                      fill="#22D3EE" stroke="#0891B2" strokeWidth="1.5" opacity="0.8" />
                <path d="M 65 65 Q 70 69 72 77 Q 67 84 65 80 Q 64 71 65 65 Z" 
                      fill="#22D3EE" stroke="#0891B2" strokeWidth="1.5" opacity="0.8" />
                <path d="M 50 30 Q 48 49 49 80" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="50" cy="28" r="4" fill="#000" stroke="#000" strokeWidth="1" />
                <path d="M 50 28 Q 47 23 45 21" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M 50 28 Q 53 23 55 21" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="45" cy="21" r="1.5" fill="#000" />
                <circle cx="55" cy="21" r="1.5" fill="#000" />
              </svg>
            </div>
          </div>

          {/* Hand-Drawn Grass at Bottom - Fixed positioning */}
          <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-[90]" style={{ height: '80px' }}>
            <style>{`
              @keyframes grass-draw {
                0% { 
                  stroke-dashoffset: 100; 
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                }
                100% { 
                  stroke-dashoffset: 0; 
                  opacity: 1;
                }
              }
              @keyframes grass-grow-up {
                0% { 
                  transform: scaleY(0);
                  opacity: 0;
                }
                20% {
                  opacity: 1;
                }
                100% { 
                  transform: scaleY(1);
                  opacity: 1;
                }
              }
              @keyframes grass-sway {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(3deg); }
              }
              @keyframes flower-bloom {
                0% { 
                  transform: scale(0);
                  opacity: 0;
                }
                50% {
                  transform: scale(1.2);
                }
                100% { 
                  transform: scale(1);
                  opacity: 1;
                }
              }
            `}</style>
            <svg className="w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
              {/* Hand-drawn grass blades with sketchy style */}
              {Array.from({ length: 100 }).map((_, i) => {
                const x = (i * 1440) / 100 + Math.random() * 10;
                const height = 25 + Math.random() * 35;
                const curve = Math.random() * 15 - 7.5;
                const delay = Math.random() * 2;
                const swayDelay = Math.random() * 4;
                const colors = ['#10B981', '#22C55E', '#34D399', '#6EE7B7', '#059669'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                // Create hand-drawn wavy path
                const path = `M ${x} 80 Q ${x + curve} ${80 - height / 2} ${x + curve * 1.5} ${80 - height} Q ${x + curve * 2} ${80 - height / 2} ${x + curve * 1.2} ${80 - height * 0.8}`;
                
                return (
                  <g key={i} style={{ 
                    transformOrigin: `${x}px 80px`,
                  }}>
                    <path
                      d={path}
                      stroke={color}
                      strokeWidth={2 + Math.random()}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      style={{
                        animation: `grass-draw 1.2s ease-out ${delay}s forwards, grass-sway ${3 + Math.random() * 2}s ease-in-out ${delay + 1.2 + swayDelay}s infinite`,
                        transformOrigin: `${x}px 80px`
                      }}
                    />
                    {/* Add small details/tips to grass */}
                    {Math.random() > 0.5 && (
                      <circle
                        cx={x + curve * 1.5}
                        cy={80 - height}
                        r="2"
                        fill={color}
                        opacity="0.7"
                      />
                    )}
                  </g>
                );
              })}
              
              {/* Add some small flowers scattered in grass */}
              {Array.from({ length: 20 }).map((_, i) => {
                const x = Math.random() * 1440;
                const y = 55 + Math.random() * 15;
                const flowerColors = ['#FFC94D', '#FF6B6B', '#5CE1E6', '#FB923C'];
                const flowerColor = flowerColors[Math.floor(Math.random() * flowerColors.length)];
                const delay = 2 + Math.random() * 2;
                
                return (
                  <g key={`flower-${i}`} style={{
                    transformOrigin: `${x}px ${y}px`
                  }}>
                    {/* Flower stem */}
                    <path
                      d={`M ${x} 80 L ${x} ${y}`}
                      stroke="#22C55E"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="50"
                      strokeDashoffset="50"
                      style={{
                        animation: `grass-draw 0.6s ease-out ${delay}s forwards`
                      }}
                    />
                    {/* Flower petals - bloom animation */}
                    <g style={{
                      transformOrigin: `${x}px ${y}px`,
                      animation: `flower-bloom 0.5s ease-out ${delay + 0.6}s forwards`,
                      opacity: 0
                    }}>
                      <circle cx={x} cy={y} r="4" fill={flowerColor} opacity="0.9" />
                      <circle cx={x - 3} cy={y - 1} r="3" fill={flowerColor} opacity="0.8" />
                      <circle cx={x + 3} cy={y - 1} r="3" fill={flowerColor} opacity="0.8" />
                      <circle cx={x - 2} cy={y + 2.5} r="3" fill={flowerColor} opacity="0.8" />
                      <circle cx={x + 2} cy={y + 2.5} r="3" fill={flowerColor} opacity="0.8" />
                      {/* Flower center */}
                      <circle cx={x} cy={y} r="2" fill="#FFF" opacity="0.9" />
                    </g>
                  </g>
                );
              })}

              {/* Add some taller grass clumps */}
              {Array.from({ length: 30 }).map((_, i) => {
                const x = Math.random() * 1440;
                const delay = Math.random() * 2.5;
                const swayDelay = Math.random() * 2;
                
                return (
                  <g key={`clump-${i}`} style={{
                    transformOrigin: `${x}px 80px`,
                  }}>
                    {/* Multiple blades in a clump */}
                    {[0, 1, 2].map((blade) => {
                      const offset = (blade - 1) * 5;
                      const height = 40 + Math.random() * 25;
                      const curve = Math.random() * 12 - 6;
                      
                      return (
                        <path
                          key={blade}
                          d={`M ${x + offset} 80 Q ${x + offset + curve} ${80 - height / 2} ${x + offset + curve * 1.5} ${80 - height}`}
                          stroke="#059669"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                          opacity="0"
                          strokeDasharray="100"
                          strokeDashoffset="100"
                          style={{
                            animation: `grass-draw 1.3s ease-out ${delay + blade * 0.15}s forwards, grass-sway ${2.5 + Math.random()}s ease-in-out ${delay + 1.3 + swayDelay}s infinite`,
                            transformOrigin: `${x + offset}px 80px`
                          }}
                        />
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>
          
          {/* Animated Sketches Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Styles for animations */}
            <style>{`
              @keyframes draw {
                to { stroke-dashoffset: 0; }
              }
              @keyframes move-left-to-right {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(150vw); }
              }
              @keyframes move-right-to-left {
                0% { transform: translateX(150vw); }
                100% { transform: translateX(-100%); }
              }
              @keyframes float-vertical {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `}</style>

            {/* Wavy Lines */}
            {[
              { color: 'text-cyan-400', delay: '0.5s', duration: '25s', floatDelay: '0s', floatDuration: '4s', path: 'M5,15 Q15,5 25,15 T45,15 T65,15', size: 'w-20 h-8', top: '12', left: '8', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '1s', duration: '28s', floatDelay: '0.5s', floatDuration: '5s', path: 'M10,15 Q20,8 30,15 T50,15 T70,15 T90,15', size: 'w-24 h-10', top: '16', right: '12', move: 'move-right-to-left' },
              { color: 'text-yellow-400', delay: '1.5s', duration: '22s', floatDelay: '1s', floatDuration: '4.5s', path: 'M10,20 Q20,10 30,20 T50,20 T70,20', size: 'w-18 h-12', top: '1/4', left: '6', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '2s', duration: '30s', floatDelay: '1.5s', floatDuration: '5.5s', path: 'M10,15 Q25,8 40,15 T70,15 T90,15', size: 'w-22 h-10', top: '1/3', right: '10', move: 'move-right-to-left' },
              { color: 'text-cyan-400', delay: '2.5s', duration: '26s', floatDelay: '2s', floatDuration: '4s', path: 'M10,15 Q20,10 30,15 T50,15 T70,15', size: 'w-20 h-8', top: '1/2', left: '10', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '3s', duration: '29s', floatDelay: '2.5s', floatDuration: '5s', path: 'M10,15 Q22,7 34,15 T58,15 T82,15', size: 'w-24 h-10', top: '1/2', right: '14', move: 'move-right-to-left' },
              { color: 'text-yellow-400', delay: '3.5s', duration: '23s', floatDelay: '3s', floatDuration: '4.5s', path: 'M10,15 Q25,10 40,15 T70,15 T90,15', size: 'w-22 h-10', bottom: '24', left: '12', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '4s', duration: '27s', floatDelay: '3.5s', floatDuration: '5.5s', path: 'M10,15 Q20,8 30,15 T50,15 T70,15', size: 'w-20 h-8', bottom: '28', right: '16', move: 'move-right-to-left' },
            ].map((line, i) => (
              <svg key={`wavy-${i}`} className={`absolute opacity-25 ${line.size} ${line.color}`} style={{
                top: line.top, left: line.left, right: line.right, bottom: line.bottom,
                animation: `draw 2s ease-out ${line.delay} forwards, ${line.move} ${line.duration} linear infinite ${line.delay}, float-vertical ${line.floatDuration} ease-in-out infinite alternate ${line.floatDelay}`
              }} viewBox="0 0 100 30">
                <path d={line.path} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="150" />
              </svg>
            ))}

            {/* Stars */}
            {[
              { color: 'text-cyan-400', delay: '0.8s', duration: '30s', floatDelay: '0.3s', floatDuration: '4s', size: 'w-6 h-6', top: '10', left: '1/4', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '1.3s', duration: '27s', floatDelay: '0.8s', floatDuration: '5s', size: 'w-7 h-7', top: '15', right: '1/4', move: 'move-right-to-left' },
              { color: 'text-yellow-400', delay: '1.8s', duration: '32s', floatDelay: '1.3s', floatDuration: '4.5s', size: 'w-8 h-8', top: '1/3', left: '1/3', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '2.3s', duration: '29s', floatDelay: '1.8s', floatDuration: '5.5s', size: 'w-6 h-6', top: '1/3', right: '1/3', move: 'move-right-to-left' },
              { color: 'text-cyan-400', delay: '2.8s', duration: '31s', floatDelay: '2.3s', floatDuration: '4s', size: 'w-7 h-7', bottom: '1/4', left: '1/4', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '3.3s', duration: '26s', floatDelay: '2.8s', floatDuration: '5s', size: 'w-8 h-8', bottom: '1/4', right: '1/4', move: 'move-right-to-left' },
            ].map((star, i) => (
              <svg key={`star-${i}`} className={`absolute opacity-25 ${star.size} ${star.color}`} style={{
                top: star.top, left: star.left, right: star.right, bottom: star.bottom,
                animation: `draw 2s ease-out ${star.delay} forwards, ${star.move} ${star.duration} linear infinite ${star.delay}, float-vertical ${star.floatDuration} ease-in-out infinite alternate ${star.floatDelay}`
              }} viewBox="0 0 100 100">
                <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            ))}

            {/* Abstract Butterflies */}
            {[
              { color: 'text-yellow-400', delay: '1.1s', duration: '26s', floatDelay: '0.6s', floatDuration: '4.5s', size: 'w-8 h-8', top: '20', left: '20', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '1.6s', duration: '29s', floatDelay: '1.1s', floatDuration: '5.2s', size: 'w-9 h-9', top: '25', right: '25', move: 'move-right-to-left' },
              { color: 'text-cyan-400', delay: '2.1s', duration: '24s', floatDelay: '1.6s', floatDuration: '4.8s', size: 'w-8 h-8', bottom: '20', left: '20', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '2.6s', duration: '30s', floatDelay: '2.1s', floatDuration: '5.8s', size: 'w-9 h-9', bottom: '25', right: '25', move: 'move-right-to-left' },
            ].map((butterfly, i) => (
              <svg key={`butterfly-${i}`} className={`absolute opacity-25 ${butterfly.size} ${butterfly.color}`} style={{
                top: butterfly.top, left: butterfly.left, right: butterfly.right, bottom: butterfly.bottom,
                animation: `draw 2s ease-out ${butterfly.delay} forwards, ${butterfly.move} ${butterfly.duration} linear infinite ${butterfly.delay}, float-vertical ${butterfly.floatDuration} ease-in-out infinite alternate ${butterfly.floatDelay}`
              }} viewBox="0 0 100 100">
                <path d="M30,50 Q50,20 70,50 M30,50 Q50,80 70,50" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            ))}
          </div>

          <style>{`
            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>

          <Navbar />
          
          {/* Hand-Drawn Sun in Top Right Corner */}
          <div className="fixed top-4 right-4 md:top-6 md:right-6 pointer-events-none z-[5]">
            <style>{`
              @keyframes sun-rays-rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @keyframes sun-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
            `}</style>
            <svg className="w-32 h-32 md:w-40 md:h-40" viewBox="0 0 200 200">
              {/* Rotating sun rays */}
              <g style={{ transformOrigin: '100px 100px', animation: 'sun-rays-rotate 30s linear infinite' }}>
                {/* Long rays */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 100 + Math.cos(rad) * 50;
                  const y1 = 100 + Math.sin(rad) * 50;
                  const x2 = 100 + Math.cos(rad) * 75;
                  const y2 = 100 + Math.sin(rad) * 75;
                  
                  return (
                    <path
                      key={`long-${i}`}
                      d={`M ${x1} ${y1} L ${x2} ${y2}`}
                      stroke="#FFC94D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  );
                })}
                
                {/* Short rays in between */}
                {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 100 + Math.cos(rad) * 50;
                  const y1 = 100 + Math.sin(rad) * 50;
                  const x2 = 100 + Math.cos(rad) * 65;
                  const y2 = 100 + Math.sin(rad) * 65;
                  
                  return (
                    <path
                      key={`short-${i}`}
                      d={`M ${x1} ${y1} L ${x2} ${y2}`}
                      stroke="#FBBF24"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  );
                })}
              </g>
              
              {/* Sun body with hand-drawn style */}
              <g style={{ transformOrigin: '100px 100px', animation: 'sun-pulse 4s ease-in-out infinite' }}>
                {/* Outer glow circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="48"
                  fill="#FFC94D"
                  opacity="0.3"
                />
                
                {/* Main sun circle - hand drawn with slight irregularity */}
                <path
                  d="M 100 55 Q 120 55 135 70 Q 145 85 145 100 Q 145 115 135 130 Q 120 145 100 145 Q 80 145 65 130 Q 55 115 55 100 Q 55 85 65 70 Q 80 55 100 55 Z"
                  fill="#FFC94D"
                  stroke="#FBBF24"
                  strokeWidth="2.5"
                  opacity="0.95"
                />
                
                {/* Inner highlight */}
                <ellipse
                  cx="90"
                  cy="90"
                  rx="15"
                  ry="18"
                  fill="#FFF"
                  opacity="0.4"
                />
                
                {/* Cute face */}
                {/* Eyes */}
                <circle cx="90" cy="95" r="4" fill="#000" />
                <circle cx="110" cy="95" r="4" fill="#000" />
                
                {/* Smile */}
                <path
                  d="M 85 110 Q 100 118 115 110"
                  stroke="#000"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Rosy cheeks */}
                <circle cx="78" cy="105" r="6" fill="#FF6B6B" opacity="0.3" />
                <circle cx="122" cy="105" r="6" fill="#FF6B6B" opacity="0.3" />
              </g>
            </svg>
          </div>
          
          {/* Cute Ladybug crawling in the grass */}
          <div className="fixed bottom-0 left-0 w-full pointer-events-none z-[95]" style={{ height: '80px' }}>
            <style>{`
              @keyframes ladybug-crawl-grass {
                0% { left: -5%; bottom: 10px; }
                15% { left: 15%; bottom: 25px; }
                30% { left: 30%; bottom: 15px; }
                45% { left: 45%; bottom: 30px; }
                60% { left: 60%; bottom: 20px; }
                75% { left: 75%; bottom: 28px; }
                90% { left: 90%; bottom: 18px; }
                100% { left: 105%; bottom: 15px; }
              }
              @keyframes ladybug-legs {
                0%, 100% { transform: scaleY(1); }
                50% { transform: scaleY(1.2); }
              }
              @keyframes ladybug-wiggle {
                0%, 100% { transform: rotate(-8deg); }
                50% { transform: rotate(8deg); }
              }
            `}</style>
            <div className="absolute" style={{ animation: 'ladybug-crawl-grass 30s linear infinite' }}>
              <svg className="w-12 h-12" viewBox="0 0 100 100" style={{ animation: 'ladybug-wiggle 0.5s ease-in-out infinite' }}>
                {/* Ladybug body - hand drawn style */}
                <ellipse cx="50" cy="55" rx="28" ry="32" fill="#EF4444" stroke="#DC2626" strokeWidth="2.5" />
                {/* Center line */}
                <path d="M 50 30 L 50 80" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                {/* Spots - hand drawn */}
                <circle cx="38" cy="45" r="5" fill="#000" />
                <circle cx="62" cy="45" r="5" fill="#000" />
                <circle cx="35" cy="60" r="4" fill="#000" />
                <circle cx="65" cy="60" r="4" fill="#000" />
                <circle cx="42" cy="70" r="3.5" fill="#000" />
                <circle cx="58" cy="70" r="3.5" fill="#000" />
                {/* Head */}
                <circle cx="50" cy="30" r="12" fill="#000" stroke="#000" strokeWidth="2" />
                {/* Eyes - cute white dots */}
                <circle cx="45" cy="28" r="3" fill="#FFF" />
                <circle cx="55" cy="28" r="3" fill="#FFF" />
                <circle cx="46" cy="28" r="1.5" fill="#000" />
                <circle cx="56" cy="28" r="1.5" fill="#000" />
                {/* Antennae */}
                <path d="M 45 22 Q 42 15 40 12" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 55 22 Q 58 15 60 12" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="40" cy="12" r="2" fill="#000" />
                <circle cx="60" cy="12" r="2" fill="#000" />
                {/* Legs - animated */}
                <g style={{ animation: 'ladybug-legs 0.4s ease-in-out infinite' }}>
                  <path d="M 30 50 L 20 55" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 30 60 L 18 65" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 32 70 L 22 78" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                </g>
                <g style={{ animation: 'ladybug-legs 0.4s ease-in-out infinite 0.2s' }}>
                  <path d="M 70 50 L 80 55" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 70 60 L 82 65" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 68 70 L 78 78" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          <main className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] flex items-center justify-center min-h-[calc(100vh-200px)] relative z-10 pb-32">
            <div className="max-w-5xl mx-auto px-4 text-center">
              
              {/* Main Heading with Typing Effect */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight min-h-[4.5rem]">
                {typedText}
                {typedText.length < fullText.length && <span className="animate-pulse">|</span>}
              </h1>
              
              {/* Sub-line */}
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
                Join a growing network that connects real people with AI creators and studios.
              </p>

              {/* Visual - Ecosystem Icon Animation Placeholder */}
              <div className="mb-12 flex justify-center">
                <div className="relative w-64 h-64">
                  {/* Central Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white border-2 border-black flex items-center justify-center rounded-full shadow-lg">
                      <img
                        src="https://c.animaapp.com/mg4iljce82GyUu/img/chatgpt-image-sep-25-2025-09_54_14-pm.png"
                        alt="Likelee Logo"
                        className="w-12 h-12"
                      />
                    </div>
                  </div>

                  {/* Orbiting Icons - Face (Top) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-pulse">
                    <div className="w-16 h-16 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Orbiting Icons - Creator (Bottom Left) */}
                  <div className="absolute bottom-0 left-8 animate-pulse" style={{ animationDelay: '0.3s' }}>
                    <div className="w-16 h-16 bg-red-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Orbiting Icons - Studio (Bottom Right) */}
                  <div className="absolute bottom-0 right-8 animate-pulse" style={{ animationDelay: '0.6s' }}>
                    <div className="w-16 h-16 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 256 256">
                    <line x1="128" y1="128" x2="128" y2="32" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                    <line x1="128" y1="128" x2="64" y2="224" stroke="currentColor" strokeWidth="2" className="text-red-400" />
                    <line x1="128" y1="128" x2="192" y2="224" stroke="currentColor" strokeWidth="2" className="text-yellow-400" />
                  </svg>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => navigate('/faces')}
                  className="text-xl font-semibold bg-cyan-400 text-white px-12 py-6 border-2 border-black hover:bg-cyan-500 transition-colors w-full md:w-auto"
                >
                  I'm a Face
                </button>
                <button 
                  onClick={() => navigate('/ai-creators')}
                  className="text-xl font-semibold bg-red-400 text-white px-12 py-6 border-2 border-black hover:bg-red-500 transition-colors w-full md:w-auto"
                >
                  I'm an A.I. Creator
                </button>
                <button 
                  onClick={() => navigate('/brands-studios')}
                  className="text-xl font-semibold bg-yellow-400 text-black px-12 py-6 border-2 border-black hover:bg-yellow-500 transition-colors w-full md:w-auto"
                >
                  I'm a Brand/Studio
                </button>
              </div>

            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
