import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 min-h-[952px] min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-screen outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          <main className="py-16 md:py-24 flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                We're here to help! Reach out to us via email for any inquiries.
              </p>

              <div className="bg-white border-2 border-black p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">General Inquiries & Support</h2>
                <p className="text-lg text-gray-800 mb-4">
                  For general questions, technical support, or any assistance:
                </p>
                <a 
                  href="mailto:help@likelee.ai" 
                  className="text-cyan-400 text-xl font-semibold hover:text-cyan-500 transition-colors"
                >
                  help@likelee.ai
                </a>
              </div>

              <div className="bg-white border-2 border-black p-8">
                <h2 className="text-2xl font-bold mb-4">Operations & Partnerships</h2>
                <p className="text-lg text-gray-800 mb-4">
                  For operational matters, business partnerships, or media inquiries:
                </p>
                <a 
                  href="mailto:operations@likelee.ai" 
                  className="text-yellow-400 text-xl font-semibold hover:text-yellow-500 transition-colors"
                >
                  operations@likelee.ai
                </a>
              </div>

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
