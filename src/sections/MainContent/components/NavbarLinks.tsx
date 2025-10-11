import { useNavigate } from "react-router-dom";

export const NavbarLinks = () => {
  const navigate = useNavigate();
  
  return (
    <div className="items-center box-border caret-transparent hidden min-h-0 min-w-0 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] md:flex md:min-h-[auto] md:min-w-[auto] gap-x-6">
      <button 
        onClick={() => navigate('/faces')}
        className="text-sm font-medium text-zinc-900 hover:text-cyan-400 transition-colors"
      >
        Faces
      </button>
      <button 
        onClick={() => navigate('/brands-studios')}
        className="text-sm font-medium text-zinc-900 hover:text-yellow-400 transition-colors"
      >
        Brands & Studios
      </button>
      <button 
        onClick={() => navigate('/ai-creators')}
        className="text-sm font-medium text-zinc-900 hover:text-orange-400 transition-colors"
      >
        AI Creators
      </button>
      <button 
        onClick={() => navigate('/impact')}
        className="text-sm font-medium text-zinc-900 hover:text-purple-400 transition-colors"
      >
        Impact
      </button>
    </div>
  );
};
