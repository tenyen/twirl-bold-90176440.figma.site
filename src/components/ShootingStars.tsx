import { useState, useEffect } from 'react';

interface ShootingStarsProps {
  onStarClick?: () => void;
}

export const ShootingStars = ({ onStarClick }: ShootingStarsProps) => {
  const [stars, setStars] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    let starId = 0;

    const createStar = () => {
      const newStar = { id: starId++, delay: 0 };
      setStars(prev => [...prev, newStar]);

      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== newStar.id));
      }, 3000);
    };

    const interval = setInterval(createStar, 4500);
    createStar();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {stars.map(star => (
        <div
          key={star.id}
          onClick={(e) => {
            if (onStarClick) {
              e.stopPropagation();
              onStarClick();
            }
          }}
          className="absolute pointer-events-auto cursor-pointer"
          style={{
            top: `${Math.random() * 30}%`,
            right: '-5%',
            animation: 'shooting-star 3s ease-out forwards',
          }}
        >
          <div className="relative">
            <div className="w-1 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-orange-300 rounded-full shadow-[0_0_10px_rgba(94,225,230,0.8)]" />
            <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transform -rotate-45 origin-right"
                 style={{ animation: 'trail-fade 3s ease-out forwards' }} />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes shooting-star {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-120vw, 80vh);
            opacity: 0;
          }
        }
        @keyframes trail-fade {
          0% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
