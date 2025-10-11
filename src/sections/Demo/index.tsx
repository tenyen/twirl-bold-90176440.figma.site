import { SoraVideoDemo } from "./components/SoraVideoDemo";
import { LikeleeDashboard } from "./components/LikeleeDashboard";
import { ConnectionAnimation } from "./components/ConnectionAnimation";

export const Demo = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Demo Split Screen */}
        <div className="relative group mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Sora Video */}
            <div className="order-2 lg:order-1">
              <SoraVideoDemo />
            </div>
            
            {/* Right Side - Likelee Dashboard */}
            <div className="order-1 lg:order-2">
              <LikeleeDashboard />
            </div>
          </div>
          
          {/* Connection Animation */}
          <ConnectionAnimation />
        </div>

        {/* Text Block */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See the difference.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Sora creates. Likelee protects and pays.
          </p>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            While AI platforms generate content with your likeness, Likelee ensures you maintain control, 
            track usage, and earn fair compensation for every use of your digital identity.
          </p>
        </div>
      </div>
    </section>
  );
};
