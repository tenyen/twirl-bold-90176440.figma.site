import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const headlines = [
  "Rent your face from your bedroom. Set your price, or earn ongoing royalties.",
  "Brands & Studios: access real, human faces for your AI Driven projects.",
  "AI Creators: showcase your talent and get hired for next-gen campaigns."
];

const gradients = [
  "bg-gradient-to-r from-[#5CE1E6] via-[#5CE1E6] to-[#4FD1C7]", // Teal gradient
  "bg-gradient-to-r from-[#FFC94D] via-[#FFC94D] to-[#FFB74D]",  // Amber gradient (now second)
  "bg-gradient-to-r from-[#FF6B6B] via-[#FF6B6B] to-[#FF5252]"   // Coral gradient (now third)
];

const headlineActions = [
  () => {
    const waitlistSection = document.getElementById('waitlist-cards');
    if (waitlistSection) {
      const facesCard = waitlistSection.querySelector('[data-card="faces"]');
      if (facesCard) {
        facesCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  },
  () => {
    const waitlistSection = document.getElementById('waitlist-cards');
    if (waitlistSection) {
      const brandsCard = waitlistSection.querySelector('[data-card="brands"]');
      if (brandsCard) {
        brandsCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  },
  () => {
    const waitlistSection = document.getElementById('waitlist-cards');
    if (waitlistSection) {
      const creatorCard = waitlistSection.querySelector('[data-card="creator"]');
      if (creatorCard) {
        creatorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
];

export const RotatingHeadline = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleHeadlineClick = () => {
    headlineActions[currentIndex]();
  };

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // If user prefers reduced motion, don't animate
      return;
    }

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setIsVisible(true);
      }, 300); // Half of transition duration
    }, 4500); // 4.5 seconds display time (1 second longer)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-8">
      <button
        onClick={handleHeadlineClick}
        className={`text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] max-w-4xl mx-auto px-4 bg-clip-text text-transparent transition-all duration-600 ease-in-out md:text-3xl md:leading-10 motion-reduce:transition-none hover:scale-105 active:scale-95 cursor-pointer ${gradients[currentIndex]} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {headlines[currentIndex]}
      </button>
    </div>
  );
};
