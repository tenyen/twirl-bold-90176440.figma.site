import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

// Mock data for creators and faces
const mockCreators = [
  { id: 1, name: "Alex Chen", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-06-13-pm.png" },
  { id: 2, name: "Maya Rodriguez", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-21-46-pm.png" },
  { id: 3, name: "Jordan Kim", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-13-00-pm.png" },
  { id: 4, name: "Sam Taylor", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-16-37-pm.png" },
];

const mockFaces = [
  { id: 1, name: "Ayanna Okafor-McKenzie", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_1gwvw31gwvw31gwv-%281%29.png" },
  { id: 2, name: "Emma Rodriguez", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_6laysz6laysz6lay.png" },
  { id: 3, name: "Sascha", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_kismjukismjukism.png" },
  { id: 4, name: "Lorena", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_vx0gfxvx0gfxvx0g-%282%29.png" },
  { id: 5, name: "Amara", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_385ss6385ss6385s.png" },
  { id: 6, name: "Arjun", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_m7v6mpm7v6mpm7v6.png" },
  { id: 7, name: "Zara", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_dqp8x7dqp8x7dqp8-%281%29.png" },
  { id: 8, name: "Janette", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_o6jjr1o6jjr1o6jj-%281%29.png" },
  { id: 9, name: "Bruna", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_cq3a6ccq3a6ccq3a.png" },
  { id: 10, name: "Kente", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_hjhxiehjhxiehjhx.png" },
  { id: 11, name: "Steven", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_delv0ddelv0ddelv-%281%29.png" },
  { id: 12, name: "Emily", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_ntg5ckntg5ckntg5.png" },
  { id: 13, name: "Haleigh", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_k3sfbqk3sfbqk3sf.png" },
  { id: 14, name: "River", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_oho1enoho1enoho1.png" }
];

// Component for the default Brand Dashboard Mockup
const BrandDashboardMockup = ({ onNewProjectClick, onBrowseFacesClick }: { onNewProjectClick: () => void; onBrowseFacesClick: () => void }) => (
  <div className="bg-white border-2 border-black p-8 relative">
    <div className="absolute -top-4 right-4 bg-yellow-400 text-black px-4 py-2 border-2 border-black font-semibold">
      Brand Dashboard
    </div>
    
    <div className="flex items-start gap-6 mb-6">
      <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center">
        <img
          src="https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-2-35-44-pm.png"
          alt="Radiant Beauty Co. Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-1">Radiant Beauty Co.</h3>
        <p className="text-lg text-gray-700 mb-1">Premium Skincare & Makeup</p>
        <p className="text-gray-600">Los Angeles, CA</p>
      </div>
    </div>

    <p className="text-gray-700 mb-6">
      A leading beauty brand focused on innovative skincare and makeup products.
    </p>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-blue-50 border-2 border-blue-200 p-4">
        <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
        <div className="text-sm text-gray-600">Campaigns Launched</div>
      </div>
      <div className="bg-green-50 border-2 border-green-200 p-4">
        <div className="text-3xl font-bold text-green-600 mb-1">5</div>
        <div className="text-sm text-gray-600">Active Projects</div>
      </div>
    </div>

    {/* Current Projects */}
    <div className="bg-gray-50 border-2 border-gray-200 p-4 mb-6">
      <h4 className="font-semibold text-gray-900 mb-3">Current Projects</h4>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-700">Spring Collection Launch</span>
          <span className="bg-yellow-400 text-black px-2 py-1 border border-black text-xs font-semibold">In Production</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-700">Holiday Gift Guide</span>
          <span className="bg-green-400 text-white px-2 py-1 border border-black text-xs font-semibold">Completed</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-700">New Product Line Ad</span>
          <span className="bg-cyan-400 text-white px-2 py-1 border border-black text-xs font-semibold">Casting</span>
        </div>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="grid grid-cols-1 gap-3"> {/* Changed to 1 column as only one button remains */}
      <button 
        onClick={onNewProjectClick}
        className="bg-yellow-400 text-black py-3 border-2 border-black hover:bg-yellow-500 transition-colors font-semibold text-sm"
      >
        New Project
      </button>
    </div>
  </div>
);

// Component for the New Project Invitation Flow
const InviteFlowDashboard = ({ onBackClick }: { onBackClick: () => void }) => {
  const [invitedCreators, setInvitedCreators] = useState<{ id: number; name: string; avatar: string; status: 'pending' | 'invited' }[]>([
    { id: 1, name: "Alex Chen", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-06-13-pm.png", status: 'invited' },
  ]);
  const [newCreatorName, setNewCreatorName] = useState('');
  const [showCreatorInput, setShowCreatorInput] = useState(false);

  const [invitedFaces, setInvitedFaces] = useState<{ id: number; name: string; avatar: string; status: 'pending' | 'invited' }[]>([
    { id: 1, name: "Ayanna Okafor-McKenzie", avatar: "https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_1gwvw31gwvw31gwv-%281%29.png", status: 'invited' },
  ]);
  const [newFaceName, setNewFaceName] = useState('');
  const [showFaceInput, setShowFaceInput] = useState(false);

  const handleInviteCreator = () => {
    if (newCreatorName.trim()) {
      const mockCreator = mockCreators.find(c => c.name.toLowerCase().includes(newCreatorName.toLowerCase()));
      setInvitedCreators(prev => [
        ...prev,
        { 
          id: prev.length + 1, 
          name: mockCreator ? mockCreator.name : newCreatorName, 
          avatar: mockCreator ? mockCreator.avatar : "https://via.placeholder.com/150/cccccc/ffffff?text=?", 
          status: 'pending' 
        }
      ]);
      setNewCreatorName('');
      setShowCreatorInput(false);
    }
  };

  const handleInviteFace = () => {
    if (newFaceName.trim()) {
      const mockFace = mockFaces.find(f => f.name.toLowerCase().includes(newFaceName.toLowerCase()));
      setInvitedFaces(prev => [
        ...prev,
        { 
          id: prev.length + 1, 
          name: mockFace ? mockFace.name : newFaceName, 
          avatar: mockFace ? mockFace.avatar : "https://via.placeholder.com/150/cccccc/ffffff?text=?", 
          status: 'pending' 
        }
      ]);
      setNewFaceName('');
      setShowFaceInput(false);
    }
  };

  return (
    <div className="bg-white border-2 border-black p-8 relative">
      <div className="absolute -top-4 right-4 bg-yellow-400 text-black px-4 py-2 border-2 border-black font-semibold">
        New Project
      </div>

      <button 
        onClick={onBackClick}
        className="absolute top-4 left-4 text-sm text-gray-600 hover:text-black transition-colors"
      >
        ← Back to Dashboard
      </button>

      <h3 className="text-3xl font-bold text-center mb-8 mt-12">Invite to Project</h3>

      {/* Invite Creators Section */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          Invite AI Creators
        </h4>
        <div className="space-y-4">
          {invitedCreators.map((creator, index) => (
            <div key={index} className="flex items-center gap-4 bg-gray-50 border-2 border-gray-200 p-3">
              <img src={creator.avatar} alt={creator.name} className="w-10 h-10 object-cover border border-black" />
              <span className="font-medium text-gray-800">{creator.name}</span>
              <span className={`ml-auto text-sm font-semibold ${creator.status === 'pending' ? 'text-orange-500' : 'text-green-600'}`}>
                {creator.status === 'pending' ? 'Pending' : 'On Project'}
              </span>
            </div>
          ))}
          {showCreatorInput ? (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter creator name"
                value={newCreatorName}
                onChange={(e) => setNewCreatorName(e.target.value)}
                className="flex-1 text-base bg-stone-50 border-2 border-black px-3 py-2"
              />
              <button
                onClick={handleInviteCreator}
                className="bg-red-400 text-white px-4 py-2 border-2 border-black hover:bg-red-500 transition-colors font-semibold text-sm"
              >
                Add
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowCreatorInput(true)}
              className="w-full bg-white text-black py-3 border-2 border-black hover:bg-gray-50 transition-colors font-semibold text-sm"
            >
              Invite more creators
            </button>
          )}
        </div>
      </div>

      {/* Invite Faces Section */}
      <div>
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          Invite Likelee Faces
        </h4>
        <div className="space-y-4">
          {invitedFaces.map((face, index) => (
            <div key={index} className="flex items-center gap-4 bg-gray-50 border-2 border-gray-200 p-3">
              <img src={face.avatar} alt={face.name} className="w-10 h-10 object-cover border border-black" />
              <span className="font-medium text-gray-800">{face.name}</span>
              <span className={`ml-auto text-sm font-semibold ${face.status === 'pending' ? 'text-orange-500' : 'text-green-600'}`}>
                {face.status === 'pending' ? 'Pending' : 'On Project'}
              </span>
            </div>
          ))}
          {showFaceInput ? (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter face name"
                value={newFaceName}
                onChange={(e) => setNewFaceName(e.target.value)}
                className="flex-1 text-base bg-stone-50 border-2 border-black px-3 py-2"
              />
              <button
                onClick={handleInviteFace}
                className="bg-cyan-400 text-white px-4 py-2 border-2 border-black hover:bg-cyan-500 transition-colors font-semibold text-sm"
              >
                Add
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowFaceInput(true)}
              className="w-full bg-white text-black py-3 border-2 border-black hover:bg-gray-50 transition-colors font-semibold text-sm"
            >
              Invite more faces
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Component for browsing faces
const BrowseFacesDashboard = ({ onBackClick }: { onBackClick: () => void }) => {
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

  const displayedFaces = mockFaces.slice(0, 6); // Show first 6 faces
  const blurredFaces = mockFaces.slice(6); // The rest are blurred

  return (
    <div className="bg-white border-2 border-black p-8 relative">
      <div className="absolute -top-4 right-4 bg-yellow-400 text-black px-4 py-2 border-2 border-black font-semibold">
        Browse Faces
      </div>

      <button 
        onClick={onBackClick}
        className="absolute top-4 left-4 text-sm text-gray-600 hover:text-black transition-colors"
      >
        ← Back to Dashboard
      </button>

      <h3 className="text-3xl font-bold text-center mb-8 mt-12">Find Your Perfect Face</h3>

      {/* Filtering Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

      {/* Faces Grid */}
      <div className="grid grid-cols-3 gap-4 relative">
        {displayedFaces.map((face) => (
          <div key={face.id} className="relative w-full h-24 border-2 border-black overflow-hidden">
            <img src={face.avatar} alt={face.name} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-xs p-1 text-center font-semibold">
              {face.name}
            </div>
          </div>
        ))}
        {blurredFaces.length > 0 && (
          <div className="absolute inset-0 grid grid-cols-3 gap-4 bg-white/80 backdrop-blur-sm p-8">
            {mockFaces.map((face, index) => (
              <div key={index} className="relative w-full h-24 border-2 border-gray-300 overflow-hidden">
                <img src={face.avatar} alt={face.name} className="w-full h-full object-cover blur-sm" />
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-center text-lg font-bold">
              Unlock More Faces
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        <button className="bg-yellow-400 text-black py-3 px-8 border-2 border-black hover:bg-yellow-500 transition-colors font-semibold text-sm">
          Apply Filters
        </button>
      </div>
    </div>
  );
};


export const BrandsStudios = () => {
  const navigate = useNavigate();
  const [showDashboardFlow, setShowDashboardFlow] = useState<'default' | 'invite' | 'browse'>('default');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
      <div className="relative box-border caret-transparent min-h-screen min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5]">
        <div className="box-border caret-transparent min-h-screen outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          {/* Hero Section */}
          <section className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-12 md:py-16 relative overflow-hidden">
            {/* Decorative waves */}
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" fill="none">
                <path d="M0,400 Q360,300 720,400 T1440,400 L1440,0 L0,0 Z" fill="#FFC94D" opacity="0.3"/>
                <path d="M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z" fill="#FF6B6B" opacity="0.2"/>
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div>
                  <div className="flex justify-center lg:justify-start mb-8">
                    <div className="w-32 h-32 bg-yellow-400 border-4 border-black flex items-center justify-center">
                      <svg className="w-16 h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                      </svg>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                    Brands & Studios 
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-700 mb-4">
                    For creative teams, agencies, and production houses
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700 mb-12">
                    Access verified, licensed faces for your campaigns, commercials, and AI-driven projects — and connect with top AI creators to build them for you.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => navigate('/brands-studios-sign-up')}
                      className="text-lg font-semibold bg-yellow-400 text-black px-12 py-4 border-2 border-black hover:bg-yellow-500 transition-colors"
                    >
                      Get Access
                    </button>
                    <button 
                      onClick={() => navigate('/for-you-brands')}
                      className="text-lg font-semibold bg-white text-black px-12 py-4 border-2 border-black hover:bg-gray-50 transition-colors"
                    >
                      For You
                    </button>
                  </div>
                </div>

                {/* Right Side - Conditional Dashboard/Invite Flow/Browse Faces */}
                {showDashboardFlow === 'default' && (
                  <BrandDashboardMockup 
                    onNewProjectClick={() => setShowDashboardFlow('invite')} 
                    onBrowseFacesClick={() => setShowDashboardFlow('browse')} 
                  />
                )}
                {showDashboardFlow === 'invite' && (
                  <InviteFlowDashboard onBackClick={() => setShowDashboardFlow('default')} />
                )}
                {showDashboardFlow === 'browse' && (
                  <BrowseFacesDashboard onBackClick={() => setShowDashboardFlow('default')} />
                )}
              </div>
            </div>
          </section>

          {/* Everything You Need for Production Section */}
          <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Everything You Need for Production
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From pre-production to final render, we've got your casting covered.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Advanced Search */}
                <div className="text-center bg-white border-2 border-black p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Search</h3>
                  <p className="text-gray-600 text-lg">
                    Find the perfect faces with powerful filters for age, ethnicity, style, and more.
                  </p>
                </div>

                {/* Instant Licensing */}
                <div className="text-center bg-white border-2 border-black p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Instant Licensing</h3>
                  <p className="text-gray-600 text-lg">
                    License and download high-resolution assets immediately after approval.
                  </p>
                </div>

                {/* Legal Protection */}
                <div className="text-center bg-white border-2 border-black p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Legal Protection</h3>
                  <p className="text-gray-600 text-lg">
                    Every license includes full legal protection and usage rights documentation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Studios Choose Likelee Section */}
          <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Studios Choose Likelee
                </h2>
                <p className="text-xl text-gray-600">
                  The industry's most comprehensive likeness licensing platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* 10,000+ Verified Faces */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-red-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Access Verified Faces</h3>
                  <p className="text-gray-600 text-lg">
                    Access a diverse database of verified, legally-cleared likenesses.
                  </p>
                </div>

                {/* Bulk Licensing */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-red-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Bulk Licensing</h3>
                  <p className="text-gray-600 text-lg">
                    Special rates for bulk licensing and enterprise accounts.
                  </p>
                </div>

                {/* Production Ready */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-red-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Production Ready</h3>
                  <p className="text-gray-600 text-lg">
                    High-resolution assets optimized for AI generation and post-production.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="browse-faces" className="bg-black text-white py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to revolutionize your casting?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                Join leading studios already using Likelee for their AI film productions.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => navigate('/brands-studios-sign-up')}
                  className="text-xl font-semibold bg-yellow-400 text-black px-16 py-6 border-2 border-white hover:bg-yellow-500 transition-colors inline-block"
                >
                  Get Access
                </button>
                <button 
                  onClick={() => navigate('/for-you-brands')}
                  className="text-xl font-semibold bg-transparent text-white px-16 py-6 border-2 border-white hover:bg-white hover:text-black transition-colors inline-block"
                >
                  For You
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};
