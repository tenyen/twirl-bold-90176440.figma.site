import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 min-h-[952px] min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-screen outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          <main className="py-16 md:py-24 flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Careers at LikeLee
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Join our team and help shape the future of AI content creation and digital identity.
              </p>

              <div className="bg-white border-2 border-black p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Explore Opportunities</h2>
                <p className="text-lg text-gray-800 mb-4">
                  We're always looking for passionate individuals to join our growing team. Send your resume and a cover letter to:
                </p>
                <a 
                  href="mailto:careers@likelee.ai" 
                  className="text-red-400 text-xl font-semibold hover:text-red-500 transition-colors"
                >
                  careers@likelee.ai
                </a>
              </div>

              <p className="text-md text-gray-600 mt-8">
                We value diversity, creativity, and a commitment to ethical AI.
              </p>

              <button 
                onClick={() => navigate('/')}
                className="mt-12 text-lg font-semibold bg-gray-200 text-black px-8 py-4 border-2 border-black hover:bg-gray-300 transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};
