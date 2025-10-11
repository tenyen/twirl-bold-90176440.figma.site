import { WaitlistCard } from "@/sections/Hero/components/WaitlistCard";
import { useNavigate } from "react-router-dom";

export const WaitlistCards = () => {
  const navigate = useNavigate();
  return (
    <div id="waitlist-cards" className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 mb-8 md:grid-cols-[repeat(3,minmax(0px,1fr))] relative">
      <style>{`
        @keyframes sketch-draw {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Hand-drawn arrow annotation for Faces card */}
      <div className="absolute -top-16 left-[10%] pointer-events-none hidden md:block z-20">
        <svg width="100" height="80" viewBox="0 0 100 80" className="opacity-70">
          <path
            d="M 10 10 Q 30 5 50 15 L 48 10 M 50 15 L 45 18"
            stroke="#22D3EE"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="100"
            style={{ animation: 'sketch-draw 1s ease-out 1.5s forwards' }}
          />
          <text x="5" y="8" fill="#22D3EE" fontSize="12" fontWeight="600" opacity="0" style={{ animation: 'fade-in 0.5s ease-out 2.5s forwards' }}>
            Upload your
          </text>
          <text x="5" y="22" fill="#22D3EE" fontSize="12" fontWeight="600" opacity="0" style={{ animation: 'fade-in 0.5s ease-out 2.5s forwards' }}>
            face here!
          </text>
        </svg>
      </div>

      {/* Hand-drawn circle annotation for Creator card */}
      <div className="absolute -top-12 left-[40%] pointer-events-none hidden md:block z-20">
        <svg width="120" height="60" viewBox="0 0 120 60" className="opacity-60">
          <ellipse
            cx="60"
            cy="30"
            rx="50"
            ry="25"
            stroke="#F97316"
            strokeWidth="2"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{ animation: 'sketch-draw 1.2s ease-out 2s forwards' }}
          />
          <text x="25" y="10" fill="#F97316" fontSize="11" fontWeight="600" opacity="0" style={{ animation: 'fade-in 0.5s ease-out 3.2s forwards' }}>
            AI creators
          </text>
          <text x="30" y="22" fill="#F97316" fontSize="11" fontWeight="600" opacity="0" style={{ animation: 'fade-in 0.5s ease-out 3.2s forwards' }}>
            join here
          </text>
        </svg>
      </div>

      {/* Hand-drawn underline annotation for Brands card */}
      <div className="absolute -bottom-12 right-[5%] pointer-events-none hidden md:block z-20">
        <svg width="140" height="50" viewBox="0 0 140 50" className="opacity-70">
          <path
            d="M 10 25 Q 50 20 90 25 T 130 25"
            stroke="#EF4444"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="150"
            strokeDashoffset="150"
            style={{ animation: 'sketch-draw 1s ease-out 2.5s forwards' }}
          />
          <path
            d="M 15 28 Q 55 23 95 28 T 125 28"
            stroke="#EF4444"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="150"
            strokeDashoffset="150"
            opacity="0.6"
            style={{ animation: 'sketch-draw 1s ease-out 2.6s forwards' }}
          />
          <text x="25" y="45" fill="#EF4444" fontSize="12" fontWeight="600" opacity="0" style={{ animation: 'fade-in 0.5s ease-out 3.6s forwards' }}>
            Brands find talent
          </text>
        </svg>
      </div>

      <div data-card="faces" className="relative">
        <WaitlistCard
        cardVariant="bg-white"
        iconSrc="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-5.svg"
        iconVariant="bg-[oklab(0.839909_-0.141908_-0.0158958_/_0.1)]"
        title="Faces Waitlist"
        subtitle="For everyday people"
        description="License your facial likeness to directors, filmmakers, and brands. Earn royalties from your unique look."
        features={[
          "Work with your favorite brands",
					"Earn passive income",
          "Set your own usage terms",
          "Grow your social media presence",
          "Get global exposure opportunities",
          "Network with creators",
        ]}
        featureIconVariant="bg-cyan-400"
        badgeIconSrc=""
        badgeText=""
        priceText="Free to join"
        footerVariant="border-zinc-900/10"
        showTopIcon={false}
        onClick={() => navigate('/faces-waitlist')}
        />
      </div>
      <div data-card="creator">
        <WaitlistCard
        cardVariant="bg-white"
        iconSrc="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-10.svg"
        iconVariant="bg-[oklab(0.890537_0.003488_0.133287_/_0.1)]"
        title="Creator Waitlist"
        subtitle="For AI artists, filmmakers, and creative technologists"
        description="Showcase your talent and connect with studios seeking next-generation creators for AI-driven campaigns and films."
        features={[
          "Build your professional portfolio",
          "Connect with production studios",
          "Access exclusive film projects",
          "Get hired for paid collaborations",
          "Collaborate with top AI tools",
          "Grow your reputation in AI film",
        ]}
        featureIconVariant="bg-orange-300"
        badgeIconSrc=""
        badgeText=""
        priceText="Early access"
        footerVariant="border-[oklab(0.890537_0.003488_0.133287_/_0.1)]"
        showTopIcon={false}
        onClick={() => navigate('/creator-waitlist')}
        />
      </div>
      <div data-card="brands">
        <WaitlistCard
        cardVariant="bg-white"
        iconSrc="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-8.svg"
        iconVariant="bg-[oklab(0.711593_0.167053_0.0703646_/_0.1)]"
        title="Brands & Studios"
        subtitle="For directors & brands"
        description="Find and license authentic faces for your creative projects. Access diverse talent from our community."
        features={[
          "Browse diverse talent pool",
          "Speedrun high-touch campaigns",
          "Find AI Professionals",
          "Secure licensing agreements",
          "Project management tools",
          "Rights protection & compliance",
        ]}
        featureIconVariant="bg-red-400"
        badgeIconSrc=""
        badgeText=""
        priceText="Early access"
        footerVariant="border-[oklab(0.711593_0.167053_0.0703646_/_0.1)]"
        showTopIcon={false}
        onClick={() => navigate('/brands-studios-waitlist')}
        />
      </div>
    </div>
  );
};
