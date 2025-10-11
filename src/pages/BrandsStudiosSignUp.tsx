import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";
import { supabase } from "@/supabase";

// Define industry options
const industryOptions = [
  { label: "Advertising Agency", value: "ad_agency" },
  { label: "Production Studio", value: "production_studio" },
  { label: "Film Studio", value: "film_studio" },
  { label: "Brand/Marketing Team", value: "brand_marketing" },
  { label: "Tech Company", value: "tech_company" },
  { label: "Fashion Brand", value: "fashion_brand" },
  { label: "Entertainment Company", value: "entertainment" },
  { label: "Other (text field)", value: "other_industry" },
];

// Define project types
const projectTypeOptions = [
  { label: "Commercials", value: "commercials" },
  { label: "Film/TV", value: "film_tv" },
  { label: "Social Media Campaigns", value: "social_media" },
  { label: "Print/Digital Ads", value: "print_digital" },
  { label: "Music Videos", value: "music_videos" },
  { label: "Brand Content", value: "brand_content" },
  { label: "Other (text field)", value: "other_project" },
];

export const BrandsStudiosSignUp = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // Step 0 is the initial message
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    selectedIndustry: "",
    otherIndustry: "",
    selectedProjectTypes: [] as string[],
    otherProjectType: "",
    teamSize: "",
    campaignScale: [] as string[], // New field for campaign scale
    specificNeeds: "",
    password: "",
    confirmPassword: ""
  });

  const [showOtherIndustryInput, setShowOtherIndustryInput] = useState(false);
  const [showOtherProjectTypeInput, setShowOtherProjectTypeInput] = useState(false);

  useEffect(() => {
    setShowOtherIndustryInput(formData.selectedIndustry === "other_industry");
  }, [formData.selectedIndustry]);

  useEffect(() => {
    setShowOtherProjectTypeInput(formData.selectedProjectTypes.includes("other_project"));
  }, [formData.selectedProjectTypes]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProjectTypeToggle = (value: string) => {
    setFormData(prev => {
      const currentTypes = prev.selectedProjectTypes;
      let newTypes;
      if (currentTypes.includes(value)) {
        newTypes = currentTypes.filter(type => type !== value);
      } else {
        newTypes = [...currentTypes, value];
      }
      return { ...prev, selectedProjectTypes: newTypes };
    });
  };

  const handleCampaignScaleToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      campaignScale: prev.campaignScale.includes(value)
        ? prev.campaignScale.filter((item) => item !== value)
        : [...prev.campaignScale, value],
    }));
  };

  const handleNext = () => {
    // Basic validation for current step before moving next
    if (currentStep === 1) {
      if (!formData.companyName || !formData.firstName || !formData.email) {
        alert("Please fill in all required fields for company info.");
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!supabase) {
      alert('Database is not configured. Please contact support.');
      return;
    }

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) {
        console.error("Auth error:", authError);
        alert(`Error creating account: ${authError.message}`);
        return;
      }

      if (!authData.user) {
        alert('Failed to create account. Please try again.');
        return;
      }

      const profileData = {
        companyName: formData.companyName,
        phone: formData.phone,
        website: formData.website,
        selectedIndustry: formData.selectedIndustry,
        otherIndustry: formData.otherIndustry,
        selectedProjectTypes: formData.selectedProjectTypes,
        otherProjectType: formData.otherProjectType,
        teamSize: formData.teamSize,
        campaignScale: formData.campaignScale,
        specificNeeds: formData.specificNeeds,
      };

      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: authData.user.id,
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          user_type: 'brand_studio',
          profile_data: profileData,
        });

      if (profileError) {
        console.error("Profile creation error:", profileError);
        alert('Account created but profile setup failed. Please contact support.');
        return;
      }

      console.log("Brand/Studio profile created successfully");
      navigate('/thank-you');

    } catch (error) {
      console.error("Signup error:", error);
      alert('Something went wrong with your submission. Please try again.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Initial message
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Limited Partner Access — Next 50 Brands Invited</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're expanding Likelee's private beta to a small group of visionary studios shaping the future of AI content.<br />
              Apply today to secure your onboarding slot and start licensing verified faces with full rights coverage.
            </p>
            <button type="button" onClick={() => setCurrentStep(1)} className="bg-yellow-400 text-black px-8 py-3 border-2 border-black hover:bg-yellow-500 transition-colors font-semibold">
              Reserve Your Spot
            </button>
          </div>
        );
      case 1:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 1: Company Info</h2>
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Company Name *</label>
              <input
                type="text"
                name="companyName"
                placeholder="Your company name"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium block mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name (optional)"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your work email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number (optional)"
                value={formData.phone}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Company Website</label>
              <input
                type="url"
                name="website"
                placeholder="https://yourcompany.com (optional)"
                value={formData.website}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={handleNext} className="bg-yellow-400 text-black px-8 py-3 border-2 border-black hover:bg-yellow-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 2: Business Details</h2>
            
            {/* Industry */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Industry *</label>
              <select
                name="selectedIndustry"
                value={formData.selectedIndustry}
                onChange={handleInputChange}
                required
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select your industry</option>
                {industryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {showOtherIndustryInput && (
                <input
                  type="text"
                  name="otherIndustry"
                  placeholder="Specify your industry"
                  value={formData.otherIndustry}
                  onChange={handleInputChange}
                  className="text-base bg-stone-50 border-2 border-black px-3 py-2 mt-2 w-full"
                />
              )}
            </div>

            {/* Project Types Multi-select */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">
                What types of projects will you use Likelee for?
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {projectTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleProjectTypeToggle(option.value)}
                    className={`text-sm font-medium px-4 py-2 border-2 border-black transition-colors ${
                      formData.selectedProjectTypes.includes(option.value)
                        ? 'bg-yellow-400 text-black'
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {showOtherProjectTypeInput && (
                <input
                  type="text"
                  name="otherProjectType"
                  placeholder="Specify other project type"
                  value={formData.otherProjectType}
                  onChange={handleInputChange}
                  className="text-base bg-stone-50 border-2 border-black px-3 py-2 mt-2 w-full"
                />
              )}
            </div>

            {/* Team Size */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Team Size</label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select team size (optional)</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button type="button" onClick={handleNext} className="bg-yellow-400 text-black px-8 py-3 border-2 border-black hover:bg-yellow-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 3: Project Needs</h2>
            
            {/* Campaign Scale */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">What scale of campaigns are you planning?</label>
              <div className="space-y-2">
                {['Social ads', 'Brand commercials', 'Film / TV', 'AI training / R&D'].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`campaign-${option.replace(/\s|\//g, '-')}`}
                      name="campaignScale"
                      value={option}
                      checked={formData.campaignScale.includes(option)}
                      onChange={(e) => {
                        const { value, checked } = e.target;
                        setFormData((prev) => ({
                          ...prev,
                          campaignScale: checked
                            ? [...prev.campaignScale, value]
                            : prev.campaignScale.filter((item) => item !== value),
                        }));
                      }}
                      className="h-4 w-4 text-yellow-400 border-2 border-black focus:ring-yellow-500"
                    />
                    <label htmlFor={`campaign-${option.replace(/\s|\//g, '-')}`} className="ml-2 text-sm text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Specific Needs */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">
                Tell us about your specific needs or upcoming projects
              </label>
              <textarea
                name="specificNeeds"
                placeholder="What are you looking to accomplish with Likelee? Any specific requirements or questions?"
                value={formData.specificNeeds}
                onChange={handleInputChange}
                rows={4}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button type="button" onClick={handleNext} className="bg-yellow-400 text-black px-8 py-3 border-2 border-black hover:bg-yellow-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 4: Create Account</h2>
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Password *</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                autoComplete="new-password"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                autoComplete="new-password"
              />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button
                type="submit"
                className="text-lg font-semibold bg-yellow-400 text-black px-8 py-4 border-2 border-black hover:bg-yellow-500 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-white box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          <main className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24">
            <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
              <div className="box-border caret-transparent max-w-screen-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                
                {/* Header */}
                <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-12">
                  <div className="items-center box-border caret-transparent flex justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                    <div className="w-12 h-12 bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                      </svg>
                    </div>
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] ml-3">
                      <h1 className="text-3xl font-bold box-border caret-transparent leading-9 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] md:text-4xl">
                        Brands & Studios
                      </h1>
                      {currentStep > 0 && (
                        <p className="text-neutral-500 text-lg box-border caret-transparent leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Step {currentStep} of 4
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-neutral-500 text-lg box-border caret-transparent leading-7 max-w-screen-sm outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                    Join the next wave of studios shaping AI content.
                  </p>

                  {/* Progress Bar */}
                  {currentStep > 0 && (
                    <div className="mt-8 max-w-md mx-auto">
                      <div className="w-full bg-gray-200 h-3 border-2 border-black overflow-hidden">
                        <div 
                          className="bg-yellow-400 h-full transition-all duration-500 ease-out"
                          style={{ width: `${(currentStep / 4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Form Steps */}
                <form onSubmit={handleSubmit} className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                  {renderStep()}
                </form>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
