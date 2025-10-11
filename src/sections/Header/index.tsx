import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";

export const Header = () => {
  return (
    <div className="fixed items-center bg-white border-b-neutral-200 border-l-zinc-900/10 border-r-zinc-900/10 border-t-zinc-900/10 box-border caret-transparent flex shrink-0 h-12 justify-start outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full z-[999] p-2 border-b border-solid -top-12 inset-x-0">
      <HeaderLogo />
    </div>
  );
};
