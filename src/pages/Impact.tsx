import { useState, useEffect, useRef } from "react"; // Added useState import
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

// Helper component for animating elements on scroll
const AnimatedSection = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export const Impact = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] relative overflow-hidden">
          
          {/* Background Interactive Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Wavy Lines */}
            {[
              { color: 'text-cyan-400', delay: '0.5s', duration: '25s', floatDelay: '0s', floatDuration: '4s', path: 'M5,15 Q15,5 25,15 T45,15 T65,15', size: 'w-16 h-6', top: '10%', left: '5%', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '1s', duration: '28s', floatDelay: '0.5s', floatDuration: '5s', path: 'M10,15 Q20,8 30,15 T50,15 T70,15 T90,15', size: 'w-20 h-8', top: '15%', right: '8%', move: 'move-right-to-left' },
              { color: 'text-yellow-400', delay: '1.5s', duration: '22s', floatDelay: '1s', floatDuration: '4.5s', path: 'M10,20 Q20,10 30,20 T50,20 T70,20', size: 'w-14 h-10', top: '30%', left: '3%', move: 'move-left-to-right' },
              { color: 'text-orange-400', delay: '2s', duration: '30s', floatDelay: '1.5s', floatDuration: '5.5s', path: 'M10,15 Q25,8 40,15 T70,15 T90,15', size: 'w-18 h-8', top: '40%', right: '5%', move: 'move-right-to-left' },
              { color: 'text-cyan-400', delay: '2.5s', duration: '26s', floatDelay: '2s', floatDuration: '4s', path: 'M10,15 Q20,10 30,15 T50,15 T70,15', size: 'w-16 h-6', bottom: '30%', left: '8%', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '3s', duration: '29s', floatDelay: '2.5s', floatDuration: '5s', path: 'M10,15 Q22,7 34,15 T58,15 T82,15', size: 'w-20 h-8', bottom: '20%', right: '10%', move: 'move-right-to-left' },
            ].map((line, i) => (
              <svg key={`wavy-${i}`} className={`absolute opacity-15 ${line.size} ${line.color}`} style={{
                top: line.top, left: line.left, right: line.right, bottom: line.bottom,
                animation: `draw 2s ease-out ${line.delay} forwards, move-left-to-right ${line.duration} linear infinite ${line.delay}, float-subtle ${line.floatDuration} ease-in-out infinite alternate ${line.floatDelay}`
              }} viewBox="0 0 100 30">
                <path d={line.path} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="150" />
              </svg>
            ))}

            {/* Stars */}
            {[
              { color: 'text-cyan-400', delay: '0.8s', duration: '30s', floatDelay: '0.3s', floatDuration: '4s', size: 'w-5 h-5', top: '5%', left: '20%', move: 'move-left-to-right' },
              { color: 'text-yellow-400', delay: '1.3s', duration: '27s', floatDelay: '0.8s', floatDuration: '5s', size: 'w-6 h-6', top: '25%', right: '20%', move: 'move-right-to-left' },
              { color: 'text-orange-400', delay: '1.8s', duration: '32s', floatDelay: '1.3s', floatDuration: '4.5s', size: 'w-5 h-5', bottom: '10%', left: '25%', move: 'move-left-to-right' },
              { color: 'text-red-400', delay: '2.3s', duration: '29s', floatDelay: '1.8s', floatDuration: '5.5s', size: 'w-6 h-6', bottom: '5%', right: '25%', move: 'move-right-to-left' },
            ].map((star, i) => (
              <svg key={`star-${i}`} className={`absolute opacity-15 ${star.size} ${star.color}`} style={{
                top: star.top, left: star.left, right: star.right, bottom: star.bottom,
                animation: `draw 2s ease-out ${star.delay} forwards, move-left-to-right ${star.duration} linear infinite ${star.delay}, float-subtle ${star.floatDuration} ease-in-out infinite alternate ${star.floatDelay}`
              }} viewBox="0 0 100 100">
                <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            ))}

            {/* Abstract Leaf/Flow Shapes */}
            {[
              { color: 'text-green-500', delay: '0.7s', duration: '28s', floatDelay: '0.2s', floatDuration: '4.7s', size: 'w-7 h-7', top: '8%', left: '40%', move: 'move-left-to-right', path: 'M50,10 Q70,30 50,50 Q30,30 50,10 Z' },
              { color: 'text-blue-500', delay: '1.2s', duration: '26s', floatDelay: '0.7s', floatDuration: '5.3s', size: 'w-8 h-8', top: '35%', right: '15%', move: 'move-right-to-left', path: 'M20,50 Q50,20 80,50 Q50,80 20,50 Z' },
              { color: 'text-purple-500', delay: '1.7s', duration: '30s', floatDelay: '1.2s', floatDuration: '4.9s', size: 'w-7 h-7', bottom: '15%', left: '45%', move: 'move-left-to-right', path: 'M50,10 Q70,30 50,50 Q30,30 50,10 Z' },
            ].map((shape, i) => (
              <svg key={`leaf-${i}`} className={`absolute opacity-15 ${shape.size} ${shape.color}`} style={{
                top: shape.top, left: shape.left, right: shape.right, bottom: shape.bottom,
                animation: `draw 2s ease-out ${shape.delay} forwards, move-left-to-right ${shape.duration} linear infinite ${shape.delay}, float-subtle ${shape.floatDuration} ease-in-out infinite alternate ${shape.floatDelay}`
              }} viewBox="0 0 100 100">
                <path d={shape.path} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            ))}
          </div>

          <Navbar />
          
          {/* Hero Section */}
          <section className="py-16 md:py-24 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <AnimatedSection>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Our Environmental Acknowledgement
                  </h1>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
                    At Likelee, art is our north star. Faces become stories, code becomes color, and every creative choice ripples far beyond the screen.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Why This Matters to Creatives */}
          <section className="py-12 md:py-16 z-10 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <AnimatedSection>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                    <svg className="w-12 h-12 text-yellow-400 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                    </svg>
                    Why This Matters to Creatives
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <div className="bg-white border-2 border-black p-8">
                    <p className="text-lg text-gray-700">
                      If you've ever spent hours perfecting light in a frame or choosing the right texture for a character, you know craft is inseparable from context. The same applies to technology: pixels are powered by energy, renders move through data centers, and each "export" has a quiet footprint. Acknowledging that link keeps our practice honest—and invites more thoughtful experimentation.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* How We Approach Impact */}
          <section className="py-12 md:py-16 z-10 relative">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4 justify-center">
                  <svg className="w-12 h-12 text-cyan-400 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L11 18.5V19h1v-.07l6.79-6.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93v-2.07h-1v2.07zM17.93 11H19c0-4.08-3.05-7.44-7-7.93v2.07h-1V3.07c-3.95.49-7 3.85-7 7.93h1.07L12 5.5V5h1v.07l6.79 6.79z"/>
                  </svg>
                  How We Approach Impact
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Intentional Infrastructure */}
                <AnimatedSection delay={0.2}>
                  <div className="bg-white border-2 border-black p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center">
                        <svg className="w-12 h-12 text-cyan-400 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L11 18.5V19h1v-.07l6.79-6.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93v-2.07h-1v2.07zM17.93 11H19c0-4.08-3.05-7.44-7-7.93v2.07h-1V3.07c-3.95.49-7 3.85-7 7.93h1.07L12 5.5V5h1v.07l6.79 6.79z"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Intentional Infrastructure</h3>
                    <p className="text-gray-600 text-lg">
                      We favor cloud regions and partners that publicly share their sustainability road maps, and we review those partnerships regularly. It's not a one-and-one checkbox; it's an evolving conversation as technology and standards improve.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Efficiency as a Creative Constraint */}
                <AnimatedSection delay={0.4}>
                  <div className="bg-white border-2 border-black p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center">
                        <svg className="w-12 h-12 text-yellow-400 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Efficiency as a Creative Constraint</h3>
                    <p className="text-gray-600 text-lg">
                      Just as a filmmaker might limit takes to preserve spontaneity, we look for model-tuning and workflow tweaks that reduce overhead while keeping visual fidelity. Often, these constraints spark the most inventive outcomes.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Transparent Defaults */}
                <AnimatedSection delay={0.6}>
                  <div className="bg-white border-2 border-black p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center">
                        <svg className="w-12 h-12 text-orange-400 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Transparent Defaults</h3>
                    <p className="text-gray-600 text-lg">
                      Wherever practical, Likelee surfaces simple cues—think "eco-friendly mode" or gentle reminders when a project's settings lean resource-heavy. They're prompts, not mandates, because we trust artists to decide what best serves their vision.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Continuous Dialogue */}
          <section className="py-12 md:py-16 z-10 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <AnimatedSection>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                    <svg className="w-12 h-12 text-cyan-400 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                    Continuous Dialogue
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <div className="bg-white border-2 border-black p-8">
                    <p className="text-lg text-gray-700 mb-4">
                      Our roadmap is shaped in partnership with the community. We host quarterly roundtables with creators, sustainability advocates, and technologists to share insights and co-design features that balance ambition with responsibility.
                    </p>
                    <p className="text-lg text-cyan-400 font-semibold">
                      You're invited.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* What We Won't Do */}
          <section className="py-12 md:py-16 z-10 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <AnimatedSection>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    What We Won't Do
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <div className="bg-white border-2 border-black p-8">
                    <p className="text-lg text-gray-700">
                      We won't guilt-trip you, and we won't bury the reality of impact behind marketing gloss. Creativity thrives on clarity, not shame. That's why we speak plainly about trade-offs and invite feedback instead of locking in pledges that can't evolve with the craft.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Your Role */}
          <section className="py-12 md:py-16 z-10 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <AnimatedSection>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                    <svg className="w-12 h-12 text-green-500 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8c-1.11 0-2.07.39-2.83 1.02L11 7.42V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-1.42l3.17-1.6C14.93 14.61 15.89 15 17 15c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                    </svg>
                    Your Role
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <div className="bg-white border-2 border-black p-8">
                    <p className="text-lg text-gray-700">
                      If you choose to upload your face, license imagery, or build campaigns on Likelee, you're part of an ecosystem that values both artistic freedom and ecological mindfulness. Simple steps—like opting for efficient render presets or batching jobs—can make a difference, but the choice remains yours. We're here to make sustainable options feel intuitive, not restrictive.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Looking Ahead */}
          <section className="bg-black text-white py-24 md:py-32 z-10 relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Looking Ahead
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-xl md:text-2xl mb-12 text-gray-300">
                  We see sustainability as an ongoing practice, much like refining a storyboard or iterating on a color grade. As AI capabilities grow, so will our responsibility to weigh impact against expression. We promise to keep listening, keep learning, and keep building tools that let creativity flourish without turning a blind eye to the planet that inspires it.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <hr className="border-white/20 my-12" />
              </AnimatedSection>
              <AnimatedSection delay={0.6}>
                <p className="text-xl md:text-2xl font-bold text-cyan-400 mb-8 animate-pulse" style={{ animationDuration: '2s' }}>
                  Create boldly, consciously, and in good company.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.8}>
                <p className="text-lg text-gray-300">
                  If you have ideas, concerns, or just want to chat about greener workflows, our inbox—and our next community roundtable—are always open.
                </p>
              </AnimatedSection>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};
