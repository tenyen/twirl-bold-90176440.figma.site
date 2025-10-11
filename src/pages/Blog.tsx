import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";

export const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <main className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24">
            <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
              <div className="box-border caret-transparent max-w-screen-lg outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                
                {/* Header */}
                <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-12">
                  <button 
                    onClick={() => navigate('/')}
                    className="text-sm text-neutral-500 items-center box-border caret-transparent flex justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 mx-auto hover:text-zinc-900"
                  >
                    ← Back to Home
                  </button>
                  
                  <h1 className="text-4xl font-bold box-border caret-transparent leading-tight outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 md:text-5xl">
                    Likelee Blog
                  </h1>
                  <p className="text-neutral-500 text-xl box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                    Insights on AI, digital identity, and the future of likeness rights
                  </p>
                </div>

                {/* Coming Soon Message */}
                <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-12 text-center">
                  <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                    <h2 className="text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
                      Coming Soon
                    </h2>
                    <p className="text-neutral-500 text-lg box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] max-w-2xl mx-auto">
                      We're working on bringing you valuable content about the intersection of AI, creativity, and digital rights. 
                      Stay tuned for articles, guides, and industry insights.
                    </p>
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
