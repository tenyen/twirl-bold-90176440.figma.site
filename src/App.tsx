import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainContent } from "@/sections/MainContent";
import { Faces } from "@/pages/Faces";
import { BrandsStudios } from "@/pages/BrandsStudios";
import { AICreators } from "@/pages/AICreators";
import { Impact } from "@/pages/Impact";
import { BrowseFaces } from "@/pages/BrowseFaces";
import { FacesWaitlist } from "@/pages/FacesWaitlist";
import { CreatorWaitlist } from "@/pages/CreatorWaitlist";
import { BrandsStudiosWaitlist } from "@/pages/BrandsStudiosWaitlist";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { Blog } from "@/pages/Blog";
import { ThankYou } from "@/pages/ThankYou";
import { SignUp } from "@/pages/SignUp";
import { CreatorSignUp } from "@/pages/CreatorSignUp";
import { BrandsStudiosSignUp } from "@/pages/BrandsStudiosSignUp";
import { HowItWorks } from "@/pages/HowItWorks";
import { ForYou } from "@/pages/ForYou";
import { ForYou2 } from "@/pages/ForYou2";
import { ForYou3 } from "@/pages/ForYou3";
import { ContactUs } from "@/pages/ContactUs";
import { Careers } from "@/pages/Careers";
import { SignIn } from "@/pages/SignIn"; // New import for SignIn page
import { UserProvider } from "@/context/UserContext"; // New import for UserProvider

export const App = () => {
  return (
    <Router>
      <UserProvider> {/* Wrap the entire app with UserProvider */}
        <body className="text-zinc-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-left indent-[0px] normal-case visible border-separate font-ui_sans_serif">
          <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
            <div className="box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/faces" element={<Faces />} />
                <Route path="/brands-studios" element={<BrandsStudios />} />
                <Route path="/ai-creators" element={<AICreators />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/browse-faces" element={<BrowseFaces />} />
                <Route path="/faces-waitlist" element={<FacesWaitlist />} />
                <Route path="/creator-waitlist" element={<CreatorWaitlist />} />
                <Route path="/brands-studios-waitlist" element={<BrandsStudiosWaitlist />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/creator-sign-up" element={<CreatorSignUp />} />
                <Route path="/brands-studios-sign-up" element={<BrandsStudiosSignUp />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/for-you" element={<ForYou />} />
                <Route path="/for-you-brands" element={<ForYou2 />} />
                <Route path="/for-you-faces" element={<ForYou3 />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/sign-in" element={<SignIn />} /> {/* New SignIn route */}
              </Routes>
            </div>
          </div>
        </body>
      </UserProvider>
    </Router>
  );
};
