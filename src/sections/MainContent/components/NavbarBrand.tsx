import { useNavigate } from "react-router-dom";

export const NavbarBrand = () => {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => navigate('/')}
      className="items-center box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] cursor-pointer"
    >
      <img
        src="https://c.animaapp.com/mg4iljce82GyUu/img/chatgpt-image-sep-25-2025-09_54_14-pm.png"
        alt="Likelee.ai Logo"
        className="box-border caret-transparent h-12 max-w-full outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-12 mr-3"
      />
      <span className="text-2xl font-bold box-border caret-transparent block leading-8 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
        likelee.ai
      </span>
    </button>
  );
};
