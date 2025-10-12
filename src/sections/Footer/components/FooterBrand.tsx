export const FooterBrand = () => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <img
          src="/static/logo.svg"
          alt="Likelee.ai Logo"
          className="h-6 w-6 mr-2"
        />
        <span className="font-semibold">
          likelee.ai
        </span>
      </div>
      <p className="text-neutral-500 text-sm leading-5 mb-4">
        Connecting Faces, Creators, and Studios through secure, transparent licensing.
      </p>
    </div>
  );
};
