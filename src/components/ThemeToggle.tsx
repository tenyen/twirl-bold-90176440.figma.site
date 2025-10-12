import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className={`transition-all duration-1000 ${isAnimating ? 'animate-spin' : ''}`}>
        {theme === 'light' ? (
          <Sun className={`w-5 h-5 text-amber-500 transition-all duration-1000 ${isAnimating ? 'scale-150 rotate-180' : 'scale-100'}`} />
        ) : (
          <Moon className={`w-5 h-5 text-cyan-300 transition-all duration-1000 ${isAnimating ? 'scale-150 -rotate-90' : 'scale-100'}`} />
        )}
      </div>
    </button>
  );
};
