import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const AICreators = () => {
  const navigate = useNavigate();

  return (
    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
      <div className="relative box-border caret-transparent min-h-screen min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5]">
        <div className="box-border caret-transparent min-h-screen outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          {/* Hero Section */}
          <section className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                    Create for the brands shaping the AI era.
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-700 mb-12">
                    Build your portfolio. Connect with studios. Get hired for AI films, campaigns, and creative projects.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => navigate('/creator-sign-up')}
                      className="text-lg font-semibold bg-red-400 text-white px-12 py-4 border-2 border-black hover:bg-red-500 transition-colors"
                    >
                      Join as Creator
                    </button>
                    <button 
                      onClick={() => navigate('/for-you')}
                      className="text-lg font-semibold bg-white text-black px-12 py-4 border-2 border-black hover:bg-gray-50 transition-colors"
                    >
                      For You
                    </button>
                  </div>
                </div>

                {/* Right Side - Featured Creator Card */}
                <div className="bg-white border-2 border-black p-8 relative">
                  <div className="absolute -top-4 right-4 bg-yellow-400 text-black px-4 py-2 border-2 border-black font-semibold">
                    Featured Creator
                  </div>
                  
                  <div className="flex items-start gap-6 mb-6">
                    <img
                      src="https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-06-13-pm.png"
                      alt="Alex Chen"
                      className="w-24 h-24 object-cover border-2 border-black"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">Alex Chen</h3>
                      <p className="text-lg text-gray-700 mb-1">Cinematic AI Films</p>
                      <p className="text-gray-600">Los Angeles, CA</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex text-yellow-400">
                          {'★★★★★'.split('').map((star, i) => (
                            <span key={i}>{star}</span>
                          ))}
                        </div>
                        <span className="text-gray-600">47 projects</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    "Specializing in cinematic storytelling with cutting-edge AI video generation. From concept to final cut."
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-cyan-400 text-white px-4 py-2 border-2 border-black font-semibold">Sora</span>
                    <span className="bg-red-400 text-white px-4 py-2 border-2 border-black font-semibold">Runway Gen-3</span>
                  </div>

                  <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                    <span>3+ years experience</span>
                    <span className="font-semibold text-green-600">Available for hire</span>
                  </div>

                  <button 
                    onClick={() => navigate('/creator-sign-up')}
                    className="w-full bg-black text-white py-4 border-2 border-black hover:bg-gray-800 transition-colors font-semibold text-lg"
                  >
                    View Full Profile
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Your Gateway to AI Film Industry */}
          <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Gateway to AI Film Industry
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Join the next generation of filmmakers using AI to create groundbreaking visual content for the world's leading brands and studios.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Professional Portfolio */}
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Professional Portfolio</h3>
                  <p className="text-gray-600 text-lg">
                    Showcase your AI filmmaking work with a stunning, industry-standard portfolio that highlights your creative vision and technical expertise.
                  </p>
                </div>

                {/* Studio Connections */}
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Studio Connections</h3>
                  <p className="text-gray-600 text-lg">
                    Connect directly with production studios, agencies, and brands actively seeking AI filmmakers for cutting-edge projects.
                  </p>
                </div>

                {/* Premium Opportunities */}
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Premium Opportunities</h3>
                  <p className="text-gray-600 text-lg">
                    Access exclusive film projects, commercial campaigns, and creative collaborations that match your skills and artistic style.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Meet Our AI Filmmakers */}
          <section id="meet-filmmakers" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Meet Our AI Filmmakers
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Discover the talented creators already building their careers and portfolios on our platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Creator 1 - Alex Chen */}
                <div className="bg-white border-2 border-black p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-06-13-pm.png"
                      alt="Alex Chen"
                      className="w-16 h-16 object-cover border-2 border-black"
                    />
                    <div>
                      <h3 className="font-bold text-lg">Alex Chen</h3>
                      <p className="text-sm text-gray-700">Cinematic AI Films</p>
                      <p className="text-xs text-gray-600">Los Angeles, CA</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 border border-black font-semibold">Sora</span>
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 border border-black font-semibold">Runway Gen-3</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>3+ years</span>
                    <span>47 projects</span>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate('/creator-sign-up')}
                    className="w-full bg-white text-black py-3 border-2 border-black hover:bg-gray-50 transition-colors font-semibold"
                  >
                    View Portfolio
                  </button>
                </div>

                {/* Creator 2 - Maya Rodriguez */}
                <div className="bg-white border-2 border-black p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-21-46-pm.png"
                      alt="Maya Rodriguez"
                      className="w-16 h-16 object-cover border-2 border-black"
                    />
                    <div>
                      <h3 className="font-bold text-lg">Maya Rodriguez</h3>
                      <p className="text-sm text-gray-700">Brand Campaigns</p>
                      <p className="text-xs text-gray-600">New York, NY</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 border border-black font-semibold">Google Veo</span>
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 border border-black font-semibold">Luma Dream Machine</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>5+ years</span>
                    <span>73 projects</span>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate('/creator-sign-up')}
                    className="w-full bg-white text-black py-3 border-2 border-black hover:bg-gray-50 transition-colors font-semibold"
                  >
                    View Portfolio
                  </button>
                </div>

                {/* Creator 3 - Jordan Kim */}
                <div className="bg-white border-2 border-black p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-13-00-pm.png"
                      alt="Jordan Kim"
                      className="w-16 h-16 object-cover border-2 border-black"
                    />
                    <div>
                      <h3 className="font-bold text-lg">Jordan Kim</h3>
                      <p className="text-sm text-gray-700">Music Videos</p>
                      <p className="text-xs text-gray-600">Nashville, TN</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 border border-black font-semibold">Sora</span>
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 border border-black font-semibold">Pika Labs</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>2+ years</span>
                    <span>29 projects</span>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate('/creator-sign-up')}
                    className="w-full bg-white text-black py-3 border-2 border-black hover:bg-gray-50 transition-colors font-semibold"
                  >
                    View Portfolio
                  </button>
                </div>

                {/* Creator 4 - Sam Taylor */}
                <div className="bg-white border-2 border-black p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="https://c.animaapp.com/mg4iljce82GyUu/img/screenshot-2025-10-05-at-1-16-37-pm.png"
                      alt="Sam Taylor"
                      className="w-16 h-16 object-cover border-2 border-black"
                    />
                    <div>
                      <h3 className="font-bold text-lg">Sam Taylor</h3>
                      <p className="text-sm text-gray-700">Documentary AI</p>
                      <p className="text-xs text-gray-600">London, UK</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 border border-black font-semibold">Runway Gen-3</span>
                    <span className="bg-cyan-400 text-white text-xs px-3 py-1 border border-black font-semibold">Stable Video</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>4+ years</span>
                    <span>56 projects</span>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate('/creator-sign-up')}
                    className="w-full bg-white text-black py-3 border-2 border-black hover:bg-gray-50 transition-colors font-semibold"
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  How It Works
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  From portfolio creation to landing your next big project - we've streamlined the entire process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-cyan-400 border-4 border-black rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Create Profile</h3>
                  <p className="text-gray-600 text-lg">
                    Build your professional portfolio showcasing your AI filmmaking skills and experience.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-red-400 border-4 border-black rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Get Discovered</h3>
                  <p className="text-gray-600 text-lg">
                    Studios and brands browse creator profiles to find the perfect match for their projects.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Connect & Collaborate</h3>
                  <p className="text-gray-600 text-lg">
                    Receive project invitations and collaborate directly with industry professionals.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-cyan-400 border-4 border-black rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Build Career</h3>
                  <p className="text-gray-600 text-lg">
                    Complete projects, build your reputation, and advance your AI filmmaking career.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-black text-white py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to launch your AI filmmaking career?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                Join the platform connecting the next generation of creators with leading studios and brands.
              </p>
              <button 
                onClick={() => navigate('/creator-sign-up')}
                className="text-xl font-semibold bg-red-400 text-white px-16 py-6 border-2 border-white hover:bg-red-500 transition-colors inline-block"
              >
                Join as Creator
              </button>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};
