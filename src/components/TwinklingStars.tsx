export const TwinklingStars = () => {
  const stars = [
    { left: '10%', top: '25%', delay: '0s', duration: '3s' },
    { left: '25%', top: '20%', delay: '0.5s', duration: '2.5s' },
    { left: '45%', top: '30%', delay: '1s', duration: '3.5s' },
    { left: '60%', top: '35%', delay: '1.5s', duration: '2.8s' },
    { left: '75%', top: '28%', delay: '0.8s', duration: '3.2s' },
    { left: '85%', top: '40%', delay: '1.2s', duration: '2.7s' },
    { left: '15%', top: '45%', delay: '0.3s', duration: '3.3s' },
    { left: '92%', top: '32%', delay: '1.8s', duration: '2.9s' },
    { left: '5%', top: '50%', delay: '0.7s', duration: '3.1s' },
    { left: '35%', top: '55%', delay: '1.3s', duration: '2.6s' },
    { left: '50%', top: '48%', delay: '0.4s', duration: '3.4s' },
    { left: '70%', top: '52%', delay: '1.6s', duration: '2.9s' },
    { left: '88%', top: '58%', delay: '0.9s', duration: '3.0s' },
    { left: '20%', top: '38%', delay: '1.1s', duration: '2.8s' },
    { left: '55%', top: '42%', delay: '0.6s', duration: '3.2s' },
    { left: '78%', top: '60%', delay: '1.4s', duration: '2.7s' },
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
