import { useEffect } from 'react';

interface StarConstellationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StarConstellationModal = ({ isOpen, onClose }: StarConstellationModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-zinc-900/95 backdrop-blur-lg border-2 border-cyan-400/50 rounded-lg p-8 max-w-md mx-4 shadow-[0_0_30px_rgba(34,211,238,0.4)] animate-fade-in-up pointer-events-auto">
        <div className="text-center">
          <div className="mb-4">
            <div className="inline-block">
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
                <circle cx="30" cy="20" r="2" fill="#5CE1E6" className="animate-pulse" />
                <circle cx="70" cy="25" r="2" fill="#FFC94D" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                <circle cx="50" cy="50" r="3" fill="#FF6B6B" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                <circle cx="20" cy="60" r="2" fill="#5CE1E6" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                <circle cx="80" cy="70" r="2" fill="#FFC94D" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
                <line x1="30" y1="20" x2="50" y2="50" stroke="#5CE1E6" strokeWidth="0.5" opacity="0.6" />
                <line x1="70" y1="25" x2="50" y2="50" stroke="#FFC94D" strokeWidth="0.5" opacity="0.6" />
                <line x1="50" y1="50" x2="20" y2="60" stroke="#FF6B6B" strokeWidth="0.5" opacity="0.6" />
                <line x1="50" y1="50" x2="80" y2="70" stroke="#5CE1E6" strokeWidth="0.5" opacity="0.6" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-teal-300 to-orange-300 bg-clip-text text-transparent">
            You discovered a Face Constellation!
          </h3>
          <p className="text-cyan-100 text-sm">
            Each star represents a unique face in the Likelee universe.
          </p>
        </div>
      </div>
    </div>
  );
};
