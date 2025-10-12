import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

// Mock data for faces (expanded for a full page)
const mockFaces = [
  { id: 1, name: "Ayanna", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_1gwvw31gwvw31gwv-%281%29.png", hair: "black", eye: "brown", age: "25-34", ethnicity: "black" },
  { id: 2, name: "Emma", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_6laysz6laysz6lay.png", hair: "blonde", eye: "blue", age: "18-24", ethnicity: "white" },
  { id: 3, name: "Sascha", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_kismjukismjukism.png", hair: "brown", eye: "green", age: "35-44", ethnicity: "white" },
  { id: 4, name: "Lorena", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_vx0gfxvx0gfxvx0g-%282%29.png", hair: "black", eye: "brown", age: "25-34", ethnicity: "hispanic" },
  { id: 5, name: "Amara", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_385ss6385ss6385s.png", hair: "red", eye: "hazel", age: "18-24", ethnicity: "asian" },
  { id: 6, name: "Arjun", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_m7v6mpm7v6mpm7v6.png", hair: "black", eye: "brown", age: "35-44", ethnicity: "asian" },
  { id: 7, name: "Zara", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_dqp8x7dqp8x7dqp8-%281%29.png", hair: "brown", eye: "blue", age: "25-34", ethnicity: "middle-eastern" },
  { id: 8, name: "Janette", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_o6jjr1o6jjr1o6jj-%281%29.png", hair: "blonde", eye: "green", age: "45-54", ethnicity: "white" },
  { id: 9, name: "Bruna", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_cq3a6ccq3a6ccq3a.png", hair: "black", eye: "brown", age: "18-24", ethnicity: "hispanic" },
  { id: 10, name: "Kente", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_hjhxiehjhxiehjhx.png", hair: "black", eye: "brown", age: "35-44", ethnicity: "black" },
  { id: 11, name: "Steven", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_delv0ddelv0ddelv-%281%29.png", hair: "brown", eye: "hazel", age: "25-34", ethnicity: "white" },
  { id: 12, name: "Emily", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_ntg5ckntg5ckntg5.png", hair: "blonde", eye: "blue", age: "18-24", ethnicity: "white" },
  { id: 13, name: "Haleigh", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_k3sfbqk3sfbqk3sf.png", hair: "red", eye: "green", age: "45-54", ethnicity: "white" },
  { id: 14, name: "River", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_oho1enoho1enoho1.png", hair: "brown", eye: "brown", age: "25-34", ethnicity: "asian" }
];

export const BrowseFaces = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    hairColor: '',
    eyeColor: '',
    age: '',
    ethnicity: ''
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredFaces = mockFaces.filter(face => {
    return (
      (!filters.hairColor || face.hair === filters.hairColor) &&
      (!filters.eyeColor || face.eye === filters.eyeColor) &&
      (!filters.age || face.age === filters.age) &&
      (!filters.ethnicity || face.ethnicity === filters.ethnicity)
    );
  });

  const visibleFacesCount = 12; // Number of faces to show clearly
  const displayedFaces = filteredFaces.slice(0, visibleFacesCount);
  const blurredFaces = filteredFaces.slice(visibleFacesCount);

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          <main className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24">
            <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
              <div className="box-border caret-transparent max-w-screen-lg outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                
                {/* Header */}
                <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-12">
                  <button 
                    onClick={() => navigate('/brands-studios')}
                    className="text-sm text-neutral-500 items-center box-border caret-transparent flex justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 mx-auto hover:text-zinc-900"
                  >
                    ← Back to Brands & Studios
                  </button>
                  
                  <h1 className="text-4xl font-bold box-border caret-transparent leading-tight outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 md:text-5xl">
                    Browse Verified Faces
                  </h1>
                  <p className="text-neutral-500 text-xl box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] max-w-2xl mx-auto">
                    Find the perfect likeness for your next AI-driven campaign or film.
                  </p>
                </div>

                {/* Filtering Options */}
                <div className="bg-white border-2 border-black p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6">Filter Faces</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <select
                      name="hairColor"
                      value={filters.hairColor}
                      onChange={handleFilterChange}
                      className="text-base bg-stone-50 border-2 border-black px-3 py-2"
                    >
                      <option value="">Hair Color</option>
                      <option value="blonde">Blonde</option>
                      <option value="brown">Brown</option>
                      <option value="black">Black</option>
                      <option value="red">Red</option>
                      <option value="other">Other</option>
                    </select>
                    <select
                      name="eyeColor"
                      value={filters.eyeColor}
                      onChange={handleFilterChange}
                      className="text-base bg-stone-50 border-2 border-black px-3 py-2"
                    >
                      <option value="">Eye Color</option>
                      <option value="blue">Blue</option>
                      <option value="brown">Brown</option>
                      <option value="green">Green</option>
                      <option value="hazel">Hazel</option>
                      <option value="other">Other</option>
                    </select>
                    <select
                      name="age"
                      value={filters.age}
                      onChange={handleFilterChange}
                      className="text-base bg-stone-50 border-2 border-black px-3 py-2"
                    >
                      <option value="">Age</option>
                      <option value="18-24">18-24</option>
                      <option value="25-34">25-34</option>
                      <option value="35-44">35-44</option>
                      <option value="45-54">45-54</option>
                      <option value="55+">55+</option>
                    </select>
                    <select
                      name="ethnicity"
                      value={filters.ethnicity}
                      onChange={handleFilterChange}
                      className="text-base bg-stone-50 border-2 border-black px-3 py-2"
                    >
                      <option value="">Ethnicity</option>
                      <option value="asian">Asian</option>
                      <option value="black">Black</option>
                      <option value="hispanic">Hispanic</option>
                      <option value="white">White</option>
                      <option value="middle-eastern">Middle Eastern</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="text-center mt-8">
                    <button className="bg-yellow-400 text-black py-3 px-8 border-2 border-black hover:bg-yellow-500 transition-colors font-semibold text-sm">
                      Apply Filters
                    </button>
                  </div>
                </div>

                {/* Faces Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative">
                  {displayedFaces.map((face) => (
                    <div key={face.id} className="relative w-full h-48 border-2 border-black overflow-hidden">
                      <img src={face.avatar} alt={face.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-xs p-1 text-center font-semibold">
                        {face.name}
                      </div>
                    </div>
                  ))}
                  {blurredFaces.length > 0 && (
                    <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white/80 backdrop-blur-sm p-8">
                      {mockFaces.map((face, index) => (
                        <div key={index} className="relative w-full h-48 border-2 border-gray-300 overflow-hidden">
                          <img src={face.avatar} alt={face.name} className="w-full h-full object-cover blur-sm" />
                        </div>
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-center text-lg font-bold">
                        Unlock More Faces
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
