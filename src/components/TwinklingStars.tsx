export const TwinklingStars = () => {
  const stars = [
    { left: '10%', top: '10%', delay: '0s', duration: '3s' },
    { left: '25%', top: '5%', delay: '0.5s', duration: '2.5s' },
    { left: '45%', top: '8%', delay: '1s', duration: '3.5s' },
    { left: '60%', top: '12%', delay: '1.5s', duration: '2.8s' },
    { left: '75%', top: '7%', delay: '0.8s', duration: '3.2s' },
    { left: '85%', top: '15%', delay: '1.2s', duration: '2.7s' },
    { left: '15%', top: '18%', delay: '0.3s', duration: '3.3s' },
    { left: '92%', top: '10%', delay: '1.8s', duration: '2.9s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: star.left,
            top: star.top,
            boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.8)',
            animation: `twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};
