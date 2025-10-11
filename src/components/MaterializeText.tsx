import { useState, useEffect } from "react";

interface MaterializeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const MaterializeText = ({ text, className = "", delay = 0 }: MaterializeTextProps) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex >= text.length) return;
        
        const char = text[currentIndex];
        setVisibleChars(currentIndex + 1);
        currentIndex++;
        
        // Dramatic pause before period
        const isPeriod = char === '.';
        const nextDelay = isPeriod ? 300 : 80; // 300ms pause before period, 80ms normal
        
        setTimeout(typeNextChar, nextDelay);
      };
      
      typeNextChar();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ease-out ${
            index < visibleChars 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-2'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
