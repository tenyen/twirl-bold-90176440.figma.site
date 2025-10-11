export const SoraVideoDemo = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] flex items-center justify-center group">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      
      {/* Simulated Video Frame */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_1gwvw31gwvw31gwv-%281%29.png"
          alt="AI Generated Person"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
        />
        
        {/* Cinematic Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
        
        {/* Motion Blur Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-scan-horizontal opacity-30"></div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
          </div>
        </div>
      </div>
      
      {/* Label Overlay */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <h3 className="text-white font-semibold text-lg mb-1">Sora AI-Generated Video</h3>
          <p className="text-gray-300 text-sm">Your likeness in AI-generated media</p>
        </div>
      </div>
      
      {/* Subtle Animation Dots */}
      <div className="absolute top-4 right-4 flex space-x-1">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
      </div>
    </div>
  );
};
