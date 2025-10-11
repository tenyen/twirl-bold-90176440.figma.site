import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          <main className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24 flex items-center justify-center min-h-[calc(952px-160px)]">
            <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
              <div className="box-border caret-transparent max-w-screen-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                
                {/* Thank You Message */}
                <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-12 text-center">
                  <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                    <h1 className="text-4xl font-bold box-border caret-transparent leading-tight outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 md:text-5xl">
                      You're all set. We'll be reaching out soon :)
                    </h1>
                    <p className="text-neutral-500 text-xl box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] max-w-2xl mx-auto mb-8">
                      Demand is high, and we want everyone to have a wonderful and visible experience. We'll reach out when we're ready for you to join the Ecosystem!
                    </p>
                    <button 
                      onClick={() => navigate('/')}
                      className="text-lg font-semibold bg-cyan-400 text-white px-8 py-4 border-2 border-black hover:bg-cyan-500 transition-colors"
                    >
                      ← Back to Home
                    </button>
                  </div>
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
