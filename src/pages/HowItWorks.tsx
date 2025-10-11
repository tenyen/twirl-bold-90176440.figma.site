import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-white box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  How Likelee Works
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
                  A transparent marketplace connecting everyday people, AI creators, and brands through verified likeness licensing.
                </p>
              </div>
            </div>
          </section>

          {/* For Faces Section */}
          <section className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center mb-12">
                <div className="w-16 h-16 bg-cyan-400 border-2 border-black flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">For Faces</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Upload Your Photos</h3>
                  <p className="text-gray-600 text-lg">
                    Create your verified digital identity with high-quality photos. Set your preferences for how your likeness can be used.
                  </p>
                </div>

                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Get Discovered</h3>
                  <p className="text-gray-600 text-lg">
                    Brands and studios browse verified faces and send licensing requests for their projects. You maintain full control.
                  </p>
                </div>

                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Earn Royalties</h3>
                  <p className="text-gray-600 text-lg">
                    Approve licensing requests and earn royalties automatically. Track every use of your likeness with detailed analytics.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => navigate('/sign-up')}
                  className="text-lg font-semibold bg-cyan-400 text-white px-12 py-4 border-2 border-black hover:bg-cyan-500 transition-colors"
                >
                  Join as a Face
                </button>
              </div>
            </div>
          </section>

          {/* For AI Creators Section */}
          <section className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center mb-12">
                <div className="w-16 h-16 bg-red-400 border-2 border-black flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">For AI Creators</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-red-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Build Your Portfolio</h3>
                  <p className="text-gray-600 text-lg">
                    Showcase your AI filmmaking work with a professional portfolio. Highlight your creative vision and technical expertise.
                  </p>
                </div>

                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-red-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Connect with Brands</h3>
                  <p className="text-gray-600 text-lg">
                    Get discovered by studios and brands seeking AI talent. Receive project invitations that match your skills.
                  </p>
                </div>

                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-red-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Build Your Career</h3>
                  <p className="text-gray-600 text-lg">
                    Complete projects, build your reputation, and advance your AI filmmaking career with exclusive opportunities.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => navigate('/creator-sign-up')}
                  className="text-lg font-semibold bg-red-400 text-white px-12 py-4 border-2 border-black hover:bg-red-500 transition-colors"
                >
                  Join as a Creator
                </button>
              </div>
            </div>
          </section>

          {/* For Brands & Studios Section */}
          <section className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center mb-12">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-black flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">For Brands & Studios</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-black">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Browse Verified Faces</h3>
                  <p className="text-gray-600 text-lg">
                    Search our database of verified faces with powerful filters. Find the perfect likeness for your creative projects.
                  </p>
                </div>

                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-black">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">License Instantly</h3>
                  <p className="text-gray-600 text-lg">
                    Send licensing requests and get approval quickly. Every license includes full legal protection and usage rights.
                  </p>
                </div>

                <div className="bg-white border-2 border-black p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-black">3</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Create with Confidence</h3>
                  <p className="text-gray-600 text-lg">
                    Download high-resolution assets and launch campaigns faster with verified rights and transparent documentation.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => navigate('/brands-studios-sign-up')}
                  className="text-lg font-semibold bg-yellow-400 text-black px-12 py-4 border-2 border-black hover:bg-yellow-500 transition-colors"
                >
                  Get Access
                </button>
              </div>
            </div>
          </section>

          {/* Why Likelee Section */}
          <section className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Likelee?
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  The most transparent and secure platform for likeness licensing in the AI era.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Full Rights Protection</h3>
                  <p className="text-gray-600 text-lg">
                    Every transaction includes comprehensive legal documentation and rights management.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Complete Transparency</h3>
                  <p className="text-gray-600 text-lg">
                    Track every use of your likeness with detailed analytics and real-time reporting.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L11 18.5V19h1v-.07l6.79-6.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93v-2.07h-1v2.07zM17.93 11H19c0-4.08-3.05-7.44-7-7.93v2.07h-1V3.07c-3.95.49-7 3.85-7 7.93h1.07L12 5.5V5h1v.07l6.79 6.79z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Verified Community</h3>
                  <p className="text-gray-600 text-lg">
                    All faces, creators, and brands are verified to ensure authenticity and trust.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-black text-white py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to join the Likelee ecosystem?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                Whether you're a face, creator, or brand — there's a place for you.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button 
                  onClick={() => navigate('/sign-up')}
                  className="text-xl font-semibold bg-cyan-400 text-white px-12 py-6 border-2 border-white hover:bg-cyan-500 transition-colors"
                >
                  Join as a Face
                </button>
                <button 
                  onClick={() => navigate('/creator-sign-up')}
                  className="text-xl font-semibold bg-red-400 text-white px-12 py-6 border-2 border-white hover:bg-red-500 transition-colors"
                >
                  Join as a Creator
                </button>
                <button 
                  onClick={() => navigate('/brands-studios-sign-up')}
                  className="text-xl font-semibold bg-yellow-400 text-black px-12 py-6 border-2 border-white hover:bg-yellow-500 transition-colors"
                >
                  Get Access
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
