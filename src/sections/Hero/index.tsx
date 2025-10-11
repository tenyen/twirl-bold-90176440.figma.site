import { HeroHeader } from "@/sections/Hero/components/HeroHeader";
import { WaitlistCards } from "@/sections/Hero/components/WaitlistCards";
import { FilmStrip } from "@/components/FilmStrip";
import { HandDrawnDecorations } from "@/components/HandDrawnDecorations";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-8 md:py-12">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
        <div className="box-border caret-transparent max-w-screen-lg outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
          <HeroHeader />
        </div>
      </div>
      <FilmStrip />
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl relative">
        {/* Hand-drawn decorations in background */}
        <HandDrawnDecorations />
        <div className="box-border caret-transparent max-w-screen-lg outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto relative z-10">
          <WaitlistCards />
        </div>
      </div>
    </section>
  );
};
