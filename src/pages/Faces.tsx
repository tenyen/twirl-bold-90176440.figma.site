import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const Faces = () => {
  const navigate = useNavigate();

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
                <path d="M0,400 Q360,300 720,400 T1440,400 L1440,0 L0,0 Z" fill="#5CE1E6" opacity="0.3"/>
                <path d="M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z" fill="#FF6B6B" opacity="0.2"/>
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div>
                  <div className="flex justify-center lg:justify-start mb-8">
                    <div className="w-32 h-32 bg-cyan-400 border-4 border-black flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                    Your Face, Your Rules
							
									
		  
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-700 mb-12">
                    Join thousands of everyday people earning royalties from their likeness. Set your parameters, approve usage, and get paid.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => navigate('/sign-up')}
                      className="text-lg font-semibold bg-cyan-400 text-white px-12 py-4 border-2 border-black hover:bg-cyan-500 transition-colors"
                    >
                      Reserve Your Profile
                    </button>
                    <button 
                      onClick={() => navigate('/for-you-faces')}
                      className="text-lg font-semibold bg-white text-black px-12 py-4 border-2 border-black hover:bg-gray-50 transition-colors"
                    >
                      For You
                    </button>
                  </div>
                </div>

                {/* Right Side - Faces Dashboard Mockup */}
                <div className="bg-white border-2 border-black p-8 relative">
                  <div className="absolute -top-4 right-4 bg-cyan-400 text-white px-4 py-2 border-2 border-black font-semibold">
                    Face Dashboard
                  </div>
                  
                  <div className="flex items-start gap-6 mb-6">
                    <img
                      src="https://c.animaapp.com/mg4iljce82GyUu/img/gemini_generated_image_1gwvw31gwvw31gwv-%281%29.png"
                      alt="Emma Rodriguez"
                      className="w-24 h-24 object-cover border-2 border-black"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">Ayanna Okafor</h3>
                      <p className="text-lg text-gray-700 mb-1">Verified Face </p>
                      <p className="text-gray-600">Marietta, Ga</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">
                    "I never thought being myself could be a career — now my face works for me."
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 border-2 border-blue-200 p-4">
                      <div className="text-2xl font-bold text-blue-600 mb-1">$1,524</div>
                      <div className="text-sm text-gray-600">Royalties Earned</div>
                    </div>
                    <div className="bg-green-50 border-2 border-green-200 p-4">
                      <div className="text-2xl font-bold text-green-600 mb-1">14</div>
                      <div className="text-sm text-gray-600">Usage Requests</div>
                    </div>
                  </div>

                  {/* Control Settings */}
                  <div className="bg-gray-50 border-2 border-gray-200 p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Control Settings</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Allow Commercial Use</span>
                        <div className="relative">
                          <input type="checkbox" defaultChecked className="sr-only" />
                          <div className="w-10 h-6 bg-green-500 border-2 border-black flex items-center">
                            <div className="w-4 h-4 bg-white border-2 border-black transform translate-x-5 transition-transform"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Allow Film Use</span>
                        <div className="relative">
                          <input type="checkbox" className="sr-only" />
                          <div className="w-10 h-6 bg-gray-300 border-2 border-black flex items-center">
                            <div className="w-4 h-4 bg-white border-2 border-black transform translate-x-1 transition-transform"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-white text-black py-3 border-2 border-black hover:bg-gray-50 transition-colors font-semibold text-sm">
                      View Usage Report
                    </button>
                    <button className="bg-cyan-400 text-white py-3 border-2 border-black hover:bg-cyan-500 transition-colors font-semibold text-sm">
                      Update Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Creators Choose Likelee Section */}
          <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Everyday People Choose Likelee
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The most transparent and profitable way to license and protect your likeness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Earn Royalties */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Earn Royalties</h3>
                  <p className="text-gray-600 text-lg">
                    Set your own rates and terms. Track Every Facial Usage. 
                  </p>
                </div>

                {/* Complete Control */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Complete Control</h3>
                  <p className="text-gray-600 text-lg">
                    You decide who can use your likeness and for what purposes.
                  </p>
                </div>

                {/* Full Transparency */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Full Transparency</h3>
                  <p className="text-gray-600 text-lg">
                    Track every use of your likeness with detailed analytics and reporting.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Start Earning in 3 Simple Steps */}
          <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Start Earning in 3 Simple Steps
                </h2>
                <p className="text-xl text-gray-600">
                  From upload to earning - it's that simple.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-white border-2 border-black p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Upload Your Photos</h3>
                  <p className="text-gray-600 text-center text-lg">
                    Create your verified digital identity with high-quality photos.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white border-2 border-black p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Set Your Parameters</h3>
                  <p className="text-gray-600 text-center text-lg">
                    Define usage rights, pricing, and approval requirements.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white border-2 border-black p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Start Earning</h3>
                  <p className="text-gray-600 text-center text-lg">
                    Approve licensing requests and earn royalties from your bedroom.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="success-stories" className="bg-black text-white py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to monetize your likeness?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                Join the platform that puts you first.
              </p>
              <button 
                onClick={() => navigate('/sign-up')}
                className="text-xl font-semibold bg-cyan-400 text-white px-16 py-6 border-2 border-white hover:bg-cyan-500 transition-colors inline-block"
              >
                Get Started Now
              </button>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};
