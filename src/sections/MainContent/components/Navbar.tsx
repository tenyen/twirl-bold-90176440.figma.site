import { useNavigate } from "react-router-dom";
import { NavbarBrand } from "@/sections/MainContent/components/NavbarBrand";
import { NavbarLinks } from "@/sections/MainContent/components/NavbarLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="backdrop-blur bg-white/60 dark:bg-zinc-900/60 box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] border-zinc-900/10 dark:border-zinc-100/10 border-b border-solid mb-16 md:mb-24 transition-colors">
      <div className="items-center box-border caret-transparent flex h-16 justify-between max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
        <NavbarBrand />
        <div className="flex items-center gap-4">
          <NavbarLinks />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
