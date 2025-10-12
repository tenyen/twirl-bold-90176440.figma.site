import { useNavigate } from "react-router-dom";

export const NavbarBrand = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="items-center flex cursor-pointer"
    >
      <img
        src="/static/logo.svg"
        alt="Likelee.ai Logo"
        className="h-12 w-12 mr-3"
      />
      <span className="text-2xl font-bold">
        likelee.ai
      </span>
    </button>
  );
};
