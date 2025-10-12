import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";

export const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-white box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <main className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24">
            <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
              <div className="box-border caret-transparent max-w-screen-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                
                {/* Header */}
                <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-12">
                  <button 
                    onClick={() => navigate('/')}
                    className="text-sm text-neutral-500 items-center box-border caret-transparent flex justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 mx-auto hover:text-zinc-900"
                  >
                    ← Back to Home
                  </button>
                  
                  <h1 className="text-3xl font-bold box-border caret-transparent leading-9 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 md:text-4xl">
                    Privacy Policy
                  </h1>
                </div>

                {/* Privacy Policy Content */}
                <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-8">
                  <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] prose prose-gray max-w-none">
                    
                    <p className="text-base box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      At Likelee.ai, we're committed to building a platform that empowers individuals to take control of their digital likeness — and that commitment extends to how we handle your personal information.
                    </p>

                    <p className="text-base box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      By joining the Likelee.ai waitlist, you acknowledge and agree to receive occasional email updates from us. These updates may include news about upcoming product launches, new features, special access opportunities, and other relevant information designed to keep you informed and engaged as we develop the Likelee platform.
                    </p>

                    <p className="text-base box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      We value your privacy and are intentional about handling your information with care and transparency. Any data you provide — such as your name and email address — is collected solely to enhance your experience, improve our services, and communicate updates tailored to your interests.
                    </p>

                    <p className="text-base box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      To help us operate efficiently, we may share limited information with carefully selected service providers and partners who support our operations, marketing, and analytics. These partners are bound by strict confidentiality obligations and are only permitted to use your data as necessary to perform their functions on our behalf.
                    </p>

                    <p className="text-base box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      You are always in control of your subscription. You can opt out of receiving communications from us at any time by clicking the "unsubscribe" link included in our emails.
                    </p>

                    <p className="text-base box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      If you have questions about how your information is used, or if you'd like to request access, correction, or deletion of your data, please reach out to us at{" "}
                      <a 
                        href="mailto:privacy@likelee.ai" 
                        className="text-cyan-400 box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] hover:text-cyan-500 transition-colors"
                      >
                        privacy@likelee.ai
                      </a>
                      . We'll respond promptly and do our best to accommodate your request.
                    </p>

                    <p className="text-sm text-neutral-500 box-border caret-transparent leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mt-8">
                      <strong>Last updated:</strong> September 2025
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
