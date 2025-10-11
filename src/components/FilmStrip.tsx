import { useState, useRef, useEffect } from "react";

const faces = [
  {
    id: 1,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_1gwvw31gwvw31gwv-%281%29.png",
    name: "Emma",
    location: "Miami, Florida"
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_6laysz6laysz6lay.png",
    name: "Jaylen",
    location: "Atlanta, Georgia"
  },
  {
    id: 3,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_kismjukismjukism.png",
    name: "Sascha",
    location: "Zagreb, Croatia"
  },
  {
    id: 4,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_vx0gfxvx0gfxvx0g-%282%29.png",
    name: "Lorena",
    location: "Lisbon, Portugal"
  },
  {
    id: 5,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_385ss6385ss6385s.png",
    name: "Amara",
    location: "Long Beach, California"
  },
  {
    id: 6,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_m7v6mpm7v6mpm7v6.png",
    name: "Arjun",
    location: "Loni, India"
  },
  {
    id: 7,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_dqp8x7dqp8x7dqp8-%281%29.png",
    name: "Zara",
    location: "Limelette, Belgium"
  },
  {
    id: 8,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_o6jjr1o6jjr1o6jj-%281%29.png",
    name: "Janette",
    location: "Brooklyn, New York"
  },
  {
    id: 9,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_cq3a6ccq3a6ccq3a.png",
    name: "Bruna",
    location: "Salvador, Brazil "
  },
  {
    id: 10,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_hjhxiehjhxiehjhx.png",
    name: "Kente",
    location: "Capetown, South Africa"
  },
  {
    id: 11,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_delv0ddelv0ddelv-%281%29.png",
    name: "Steven",
    location: "Mobile, Alabama"
  },
  {
    id: 12,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_ntg5ckntg5ckntg5.png",
    name: "Emily",
    location: "Berkeley, California"
  },
  {
    id: 13,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_k3sfbqk3sfbqk3sf.png",
    name: "Haleigh",
    location: "Phoenix, Arizona"
  },
  {
    id: 14,
    image: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_oho1enoho1enoho1.png",
    name: "River",
    location: "Vancouver, Canada"
  }
];

export const FilmStrip = () => {
  const [hoveredFace, setHoveredFace] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-8 overflow-hidden w-full">

      {/* Clean Image Strip Container */}
      <div 
        className="relative box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Scrollable Moving Images */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          onWheel={handleWheel}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className={`flex space-x-6 ${isPaused ? '' : 'animate-scroll-slower'}`}>
            {/* Duplicate the faces array to create seamless loop */}
            {[...faces, ...faces, ...faces].map((face, index) => (
              <div
                key={`${face.id}-${index}`}
                className="relative flex-shrink-0 w-40 h-48 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20 shadow-lg border-2 border-black"
                onMouseEnter={() => setHoveredFace(face.id)}
                onMouseLeave={() => setHoveredFace(null)}
              >
                <img
                  src={face.image}
                  alt={face.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Overlay */}
                {hoveredFace === face.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4 text-white animate-fade-in">
                    <h3 className="font-bold text-xl mb-2 text-center">{face.name}</h3>
                    <p className="text-gray-300 text-lg text-center">{face.location}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
