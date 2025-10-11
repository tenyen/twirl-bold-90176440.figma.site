export type WaitlistCardProps = {
  cardVariant: string;
  iconSrc: string;
  iconVariant: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  featureIconVariant: string;
  badgeIconSrc: string;
  badgeText: string;
  priceText: string;
  footerVariant: string;
  showTopIcon?: boolean;
  onClick?: () => void;
};

export const WaitlistCard = (props: WaitlistCardProps) => {
  return (
    <div
      className={`box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-6 cursor-pointer transition-all duration-300 hover:scale-105 group ${props.cardVariant} ${
        props.iconVariant === "bg-[oklab(0.839909_-0.141908_-0.0158958_/_0.1)]" 
          ? "hover:shadow-[0_0_30px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.3)]" 
          : props.iconVariant === "bg-[oklab(0.890537_0.003488_0.133287_/_0.1)]" 
          ? "hover:shadow-[0_0_30px_rgba(251,146,60,0.6),0_0_60px_rgba(251,146,60,0.3)]"
          : "hover:shadow-[0_0_30px_rgba(239,68,68,0.6),0_0_60px_rgba(239,68,68,0.3)]"
      }`}
      onClick={props.onClick}
    >
      <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
        <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
          <div className="items-center box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
            <div
              className={`items-center box-border caret-transparent flex h-12 justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-12 mr-3 transition-all duration-300 ${props.iconVariant} ${
                props.iconVariant === "bg-[oklab(0.839909_-0.141908_-0.0158958_/_0.1)]" 
                  ? "group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]" 
                  : props.iconVariant === "bg-[oklab(0.890537_0.003488_0.133287_/_0.1)]" 
                  ? "group-hover:bg-orange-300/20 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]"
                  : "group-hover:bg-red-400/20 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              }`}
            >
              <img
                src={props.iconSrc}
                alt="Icon"
                className={`box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 transition-all duration-300 ${
                  props.iconVariant === "bg-[oklab(0.839909_-0.141908_-0.0158958_/_0.1)]" 
                    ? "text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                    : props.iconVariant === "bg-[oklab(0.711593_0.167053_0.0703646_/_0.1)]" 
                    ? "text-red-400 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" 
                    : "text-orange-300 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                }`}
              />
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
            <h3 className={`text-lg font-semibold box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] transition-all duration-300 ${
              props.iconVariant === "bg-[oklab(0.839909_-0.141908_-0.0158958_/_0.1)]" 
                ? "group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_4px_rgba(34,211,238,0.6)]" 
                : props.iconVariant === "bg-[oklab(0.711593_0.167053_0.0703646_/_0.1)]" 
                ? "group-hover:text-red-400 group-hover:drop-shadow-[0_0_4px_rgba(239,68,68,0.6)]" 
                : "group-hover:text-orange-300 group-hover:drop-shadow-[0_0_4px_rgba(251,146,60,0.6)]"
            }`}>
              {props.title}
            </h3>
              <p className="text-neutral-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                {props.subtitle}
              </p>
            </div>
          </div>
          {props.showTopIcon && (
            <div className="items-center bg-cyan-400 box-border caret-transparent flex h-6 justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 rounded-[3.35544e+07px]">
              <img
                src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-6.svg"
                alt="Icon"
                className="text-white box-border caret-transparent h-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-4"
              />
            </div>
          )}
        </div>
        <p className="text-neutral-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
          {props.description}
        </p>
        <div className="box-border caret-transparent gap-x-2 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-4">
          {props.features.map((feature, index) => (
            <div
              key={index}
              className="text-xs items-center box-border caret-transparent flex leading-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]"
            >
              <div
                className={`box-border caret-transparent h-1.5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-1.5 mr-2 ${props.featureIconVariant}`}
              ></div>
              <span className="text-neutral-500 box-border caret-transparent block outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                {feature}
              </span>
            </div>
          ))}
        </div>
        <div
          className={`items-center box-border caret-transparent flex justify-end outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] pt-3 border-t border-solid ${props.footerVariant}`}
        >
            <span className="text-xs font-medium items-center box-border caret-transparent gap-x-1 flex shrink-0 justify-center leading-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-1 text-nowrap w-fit border-2 border-black overflow-hidden px-2 py-0.5">
            {props.priceText}
          </span>
        </div>
      </div>
    </div>
  );
};
