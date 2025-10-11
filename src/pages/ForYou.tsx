import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const ForYou = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          {/* Essay Content */}
          <section className="py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-4">
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why We Built This
              </h1>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                You're not just a technician. You're an artist, a storyteller, a pioneer.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                AI filmmaking isn't about replacing creativity—it's about amplifying it. You deserve a platform that treats your craft with respect, 
                connects you to brands that value your vision, and pays you what you're worth.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                The Six Commitments We Make to You
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Creativity First, Tools Second.</strong> Models change; your ideas drive the work. Likelee stays tool-agnostic so you can swap engines without skipping a beat.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Straightforward Pay.</strong> Up-front fees, clear licenses, automatic royalties. No chasing invoices or decoding fine print.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Ready-to-Use Faces.</strong> Verified talent with contracts baked in. Spend time directing, not hunting releases.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Collaboration on Tap.</strong> Post briefs, find co-creators, and share assets without leaving your dashboard.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Transparent Metrics.</strong> See every usage, every payout, every contract status—one click away.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                <strong>Growth Built In.</strong> Workshops, technique breakdowns, and project reviews help you level up while you earn.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Your Next Step
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Likelee is your stage. Build your portfolio, get discovered, and help shape the future of visual storytelling.
              </p>

              <div className="mt-8">
                <button 
                  onClick={() => navigate('/creator-sign-up')}
                  className="text-lg font-semibold bg-red-400 text-white px-8 py-4 border-2 border-black hover:bg-red-500 transition-colors"
                >
                  Reserve Your Creator Profile →
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
