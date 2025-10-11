import { RotatingHeadline } from "@/components/RotatingHeadline";
import { MaterializeText } from "@/components/MaterializeText";

export const HeroHeader = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-8">
      <div className="flex justify-center mb-6">
        <button 
          onClick={() => {
            const waitlistSection = document.getElementById('waitlist-cards');
            if (waitlistSection) {
              waitlistSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-xs font-medium items-center bg-black text-white box-border caret-transparent inline-flex shrink-0 justify-center leading-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-nowrap w-fit border-[3px] overflow-hidden pl-2 pr-3 py-1 border-solid border-white gap-x-1.5 hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <img
            src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-4.svg"
            alt="Icon"
            className="box-border caret-transparent h-3 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-nowrap w-3 flex-shrink-0"
          />
          <span>Explore Waitlist Options</span>
        </button>
      </div>
      
      <RotatingHeadline />
      
      <p className="text-neutral-500 text-xl box-border caret-transparent leading-7 max-w-screen-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto mb-4">
        <MaterializeText 
          text="Where Identity meets opportunity."
          delay={1000}
        />
      </p>
    </div>
  );
};
