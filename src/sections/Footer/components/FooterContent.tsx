import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 py-12 md:max-w-screen-xl">
      <div className="box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <FooterBrand />
        <FooterColumn
          title="Resources"
          links={[
            { text: "Blog", href: "/blog", isRoute: true },
            { text: "Careers", href: "/careers", isRoute: true }, // New Careers link
          ]}
        />
        <FooterColumn
          title="Support"
          links={[
            { text: "Privacy Policy", href: "/privacy-policy", isRoute: true },
            { text: "Contact Us", href: "/contact-us", isRoute: true }, // New Contact Us link
          ]}
        />
      </div>
      <div className="items-center box-border caret-transparent flex flex-col justify-between outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] border-zinc-900/10 mt-12 pt-8 border-t border-solid md:flex-row">
        <p className="text-neutral-500 text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4 md:mb-0">
          © 2025 likelee.ai. All rights reserved.
        </p>
      </div>
    </div>
  );
};
