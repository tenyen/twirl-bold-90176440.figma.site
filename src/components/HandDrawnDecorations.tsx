export const HandDrawnDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Top Left - Squiggly Line */}
      <svg 
        className="absolute top-0 left-0 w-32 h-32" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 100"
      >
        <path
          d="M10,50 Q20,30 30,50 T50,50 T70,50 T90,50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-cyan-400"
          strokeDasharray="200"
          strokeDashoffset="200"
          style={{
            animation: 'draw 2s ease-out 0.5s forwards'
          }}
        />
      </svg>

      {/* Top Right - Circle Doodle */}
      <svg 
        className="absolute top-10 right-20 w-24 h-24" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-orange-300"
          strokeDasharray="188"
          strokeDashoffset="188"
          style={{
            animation: 'draw 2s ease-out 1s forwards'
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-orange-300"
          strokeDasharray="125"
          strokeDashoffset="125"
          style={{
            animation: 'draw 2s ease-out 1.5s forwards'
          }}
        />
      </svg>

      {/* Middle Left - Star Sketch */}
      <svg 
        className="absolute top-1/4 left-5 w-28 h-28" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 100"
      >
        <path
          d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-red-400"
          strokeDasharray="400"
          strokeDashoffset="400"
          style={{
            animation: 'draw 2.5s ease-out 2s forwards'
          }}
        />
      </svg>

      {/* Middle Right - Arrow Doodle */}
      <svg 
        className="absolute top-1/3 right-10 w-32 h-32" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 100"
      >
        <path
          d="M20,50 L70,50 M70,50 L60,40 M70,50 L60,60"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          className="text-cyan-400"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset="100"
          style={{
            animation: 'draw 2s ease-out 2.5s forwards'
          }}
        />
      </svg>

      {/* Bottom Left - Zigzag */}
      <svg 
        className="absolute bottom-32 left-10 w-36 h-20" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 50"
      >
        <path
          d="M10,40 L25,10 L40,40 L55,10 L70,40 L85,10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-orange-300"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset="200"
          style={{
            animation: 'draw 2s ease-out 3s forwards'
          }}
        />
      </svg>

      {/* Bottom Right - Spiral */}
      <svg 
        className="absolute bottom-24 right-32 w-28 h-28" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 100"
      >
        <path
          d="M50,50 Q60,40 60,30 Q60,20 50,20 Q40,20 40,30 Q40,40 50,40 Q55,40 55,35"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-red-400"
          strokeDasharray="150"
          strokeDashoffset="150"
          style={{
            animation: 'draw 2s ease-out 3.5s forwards'
          }}
        />
      </svg>

      {/* Top Center - Dots Pattern */}
      <svg 
        className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-20" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 100"
      >
        <circle cx="30" cy="30" r="0" fill="currentColor" className="text-cyan-400" style={{ animation: 'grow 0.3s ease-out 4s forwards' }} />
        <circle cx="50" cy="30" r="0" fill="currentColor" className="text-cyan-400" style={{ animation: 'grow 0.3s ease-out 4.1s forwards' }} />
        <circle cx="70" cy="30" r="0" fill="currentColor" className="text-cyan-400" style={{ animation: 'grow 0.3s ease-out 4.2s forwards' }} />
        <circle cx="30" cy="50" r="0" fill="currentColor" className="text-cyan-400" style={{ animation: 'grow 0.3s ease-out 4.3s forwards' }} />
        <circle cx="70" cy="50" r="0" fill="currentColor" className="text-cyan-400" style={{ animation: 'grow 0.3s ease-out 4.4s forwards' }} />
        <circle cx="30" cy="70" r="0" fill="currentColor" className="text-cyan-400" style={{ animation: 'grow 0.3s ease-out 4.5s forwards' }} />
        <circle cx="50" cy="70" r="0" fill="currentColor" className="text-cyan-400" style={{ animation: 'grow 0.3s ease-out 4.6s forwards' }} />
        <circle cx="70" cy="70" r="0" fill="currentColor" className="text-cyan-400" style={{ animation: 'grow 0.3s ease-out 4.7s forwards' }} />
      </svg>

      {/* Bottom Center - Wavy Underline */}
      <svg 
        className="absolute bottom-16 left-1/4 w-40 h-16" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 30"
      >
        <path
          d="M10,15 Q20,5 30,15 T50,15 T70,15 T90,15"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-orange-300"
          strokeDasharray="180"
          strokeDashoffset="180"
          style={{
            animation: 'draw 2s ease-out 5s forwards'
          }}
        />
      </svg>

      {/* Top Right Area - Plus Signs */}
      <svg 
        className="absolute top-32 right-1/3 w-16 h-16" 
        style={{ opacity: 0.15 }}
        viewBox="0 0 100 100"
      >
        <path 
          d="M30,30 L30,40 M25,35 L35,35" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-red-400"
          strokeDasharray="20"
          strokeDashoffset="20"
          style={{
            animation: 'draw 0.5s ease-out 5.5s forwards'
          }}
        />
        <path 
          d="M60,60 L60,70 M55,65 L65,65" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-red-400"
          strokeDasharray="20"
          strokeDashoffset="20"
          style={{
            animation: 'draw 0.5s ease-out 5.7s forwards'
          }}
        />
        <path 
          d="M70,20 L70,30 M65,25 L75,25" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-red-400"
          strokeDasharray="20"
          strokeDashoffset="20"
          style={{
            animation: 'draw 0.5s ease-out 5.9s forwards'
          }}
        />
      </svg>

      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes grow {
          to {
            r: 3;
          }
        }
      `}</style>
    </div>
  );
};
