import { useNavigate } from "react-router-dom";

export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
    isRoute?: boolean;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  const navigate = useNavigate();

  const handleLinkClick = (link: { text: string; href: string; isRoute?: boolean }) => {
    if (link.isRoute) {
      navigate(link.href);
    } else {
      window.open(link.href, '_blank');
    }
  };

  return (
    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
      <h4 className="font-medium box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
        {props.title}
      </h4>
      <ul className="box-border caret-transparent list-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] pl-0">
        {props.links.map((link, index) => (
          <li
            key={index}
            className={`box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] ${index < props.links.length - 1 ? "mb-2" : ""}`}
          >
            <button
              onClick={() => handleLinkClick(link)}
              className="text-neutral-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] hover:text-zinc-900 transition-colors text-left"
            >
              {link.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
