import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";
import { supabase } from "@/supabase";

// Define creator content type options
const creatorContentTypeOptions = [
  { label: "AI-generated films", value: "ai_films" },
  { label: "AI-driven commercials", value: "ai_commercials" },
  { label: "AI art installations", value: "ai_art" },
  { label: "Virtual reality experiences", value: "vr_experiences" },
  { label: "Interactive media", value: "interactive_media" },
  { label: "Digital fashion", value: "digital_fashion" },
  { label: "Music videos", value: "music_videos" },
  { label: "Other (text field)", value: "other_content" },
];

// Define AI tools options
const aiToolsOptions = [
  { label: "Sora", value: "sora" },
  { label: "RunwayML", value: "runwayml" },
  { label: "Midjourney", value: "midjourney" },
  { label: "DALL-E", value: "dalle" },
  { label: "Stable Diffusion", value: "stable_diffusion" },
  { label: "Pika Labs", value: "pika_labs" },
  { label: "Google Veo", value: "google_veo" },
  { label: "Luma Dream Machine", value: "luma_dream_machine" },
  { label: "Other (text field)", value: "other_ai_tool" },
];

export const CreatorSignUp = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // Step 0 is the initial message
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedCreatorContentTypes: [] as string[],
    otherCreatorContentType: "",
    selectedAITools: [] as string[],
    otherAITool: "",
    location: "",
    yearsExperience: "",
    portfolioLink: "",
    socialMediaLink: "",
    profilePhoto: null as File | null,
    password: "",
    confirmPassword: ""
  });

  const [showOtherCreatorContentTypeInput, setShowOtherCreatorContentTypeInput] = useState(false);
  const [showOtherAIToolInput, setShowOtherAIToolInput] = useState(false);

  useEffect(() => {
    setShowOtherCreatorContentTypeInput(formData.selectedCreatorContentTypes.includes("other_content"));
  }, [formData.selectedCreatorContentTypes]);

  useEffect(() => {
    setShowOtherAIToolInput(formData.selectedAITools.includes("other_ai_tool"));
  }, [formData.selectedAITools]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreatorContentTypeToggle = (value: string) => {
    setFormData(prev => {
      const currentTypes = prev.selectedCreatorContentTypes;
      let newTypes;
      if (currentTypes.includes(value)) {
        newTypes = currentTypes.filter(type => type !== value);
      } else {
        newTypes = [...currentTypes, value];
      }
      return { ...prev, selectedCreatorContentTypes: newTypes };
    });
  };

  const handleAIToolToggle = (value: string) => {
    setFormData(prev => {
      const currentTools = prev.selectedAITools;
      let newTools;
      if (currentTools.includes(value)) {
        newTools = currentTools.filter(tool => tool !== value);
      } else {
        newTools = [...currentTools, value];
      }
      return { ...prev, selectedAITools: newTools };
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, profilePhoto: e.target.files![0] }));
    }
  };

  const handleNext = () => {
    // Basic validation for current step before moving next
    if (currentStep === 1) {
      if (!formData.firstName || !formData.email) {
        alert("Please fill in all required fields for basic info.");
        return;
      }
    } else if (currentStep === 4) {
      if (!formData.profilePhoto) {
        alert("Please upload a profile photo.");
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
        firstName: formData.firstName,
        lastName: formData.lastName,
        selectedCreatorContentTypes: formData.selectedCreatorContentTypes,
        otherCreatorContentType: formData.otherCreatorContentType,
        selectedAITools: formData.selectedAITools,
        otherAITool: formData.otherAITool,
        location: formData.location,
        yearsExperience: formData.yearsExperience,
        portfolioLink: formData.portfolioLink,
        socialMediaLink: formData.socialMediaLink,
        profilePhotoName: formData.profilePhoto?.name || "",
      };

      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: authData.user.id,
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          user_type: 'creator',
          profile_data: profileData,
        });

      if (profileError) {
        console.error("Profile creation error:", profileError);
        alert('Account created but profile setup failed. Please contact support.');
        return;
      }

      console.log("Creator profile created successfully");
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
          <div className="bg-white dark:bg-zinc-900 border-2 border-black p-8 relative shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-6">All 200 Creator Slots Are Filled!</h2>
            <p className="text-lg text-gray-700 mb-8">
              The first 200 Creator spots have been filled.<br />
              We're curating the next wave of AI artists and filmmakers to ensure every profile gets real visibility with brands.<br />
              Reserve your profile now to join the upcoming cohort entering the Likelee ecosystem.
            </p>
            <button type="button" onClick={() => setCurrentStep(1)} className="bg-red-400 text-white px-8 py-3 border-2 border-black hover:bg-red-500 transition-colors font-semibold">
              Reserve My Profile
            </button>
          </div>
        );
      case 1:
        return (
          <div className="bg-white dark:bg-zinc-900 border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 1: Basic Info</h2>
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
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={handleNext} className="bg-red-400 text-white px-8 py-3 border-2 border-black hover:bg-red-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white dark:bg-zinc-900 border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 2: Creator Preferences</h2>
            {/* Content Type Multi-select Chips */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">
                What kind of AI content do you create?
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {creatorContentTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleCreatorContentTypeToggle(option.value)}
                    className={`text-sm font-medium px-4 py-2 border-2 border-black transition-colors ${
                      formData.selectedCreatorContentTypes.includes(option.value)
                        ? 'bg-red-400 text-white'
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {showOtherCreatorContentTypeInput && (
                <input
                  type="text"
                  name="otherCreatorContentType"
                  placeholder="Specify other content type"
                  value={formData.otherCreatorContentType}
                  onChange={handleInputChange}
                  className="text-base bg-stone-50 border-2 border-black px-3 py-2 mt-2 w-full"
                />
              )}
            </div>

            {/* AI Tools Multi-select Chips */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">
                What AI tools do you primarily use?
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {aiToolsOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleAIToolToggle(option.value)}
                    className={`text-sm font-medium px-4 py-2 border-2 border-black transition-colors ${
                      formData.selectedAITools.includes(option.value)
                        ? 'bg-red-400 text-white'
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {showOtherAIToolInput && (
                <input
                  type="text"
                  name="otherAITool"
                  placeholder="Specify other AI tool"
                  value={formData.otherAITool}
                  onChange={handleInputChange}
                  className="text-base bg-stone-50 border-2 border-black px-3 py-2 mt-2 w-full"
                />
              )}
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button type="button" onClick={handleNext} className="bg-red-400 text-white px-8 py-3 border-2 border-black hover:bg-red-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white dark:bg-zinc-900 border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 3: Profile Details</h2>
            
            {/* Location */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">City / State:</label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Los Angeles, CA"
                value={formData.location}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>

            {/* Years of Experience */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Years of AI Creative Experience:</label>
              <select
                name="yearsExperience"
                value={formData.yearsExperience}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select Experience Level</option>
                <option value="0-1">0-1 Year</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>

            {/* Portfolio Link */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Portfolio Link (Optional):</label>
              <input
                type="url"
                name="portfolioLink"
                placeholder="e.g., https://yourportfolio.com"
                value={formData.portfolioLink}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>

            {/* Social Media Link */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Social Media Link (Optional):</label>
              <input
                type="url"
                name="socialMediaLink"
                placeholder="e.g., https://instagram.com/yourhandle"
                value={formData.socialMediaLink}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button type="button" onClick={handleNext} className="bg-red-400 text-white px-8 py-3 border-2 border-black hover:bg-red-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white dark:bg-zinc-900 border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 4: Upload Profile Photo</h2>
            <div className="mb-6 text-center">
              <label className="text-sm font-medium block mb-4">Upload a high-quality profile photo:</label>
              <input
                type="file"
                name="profilePhoto"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:border-2 file:border-black
                  file:text-sm file:font-semibold
                  file:bg-red-400 file:text-white
                  hover:file:bg-red-500"
              />
              {formData.profilePhoto && (
                <p className="mt-4 text-sm text-gray-600">Selected: {formData.profilePhoto.name}</p>
              )}
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button type="button" onClick={handleNext} className="bg-red-400 text-white px-8 py-3 border-2 border-black hover:bg-red-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="bg-white dark:bg-zinc-900 border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 5: Create Password</h2>
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
                className="text-lg font-semibold bg-red-400 text-white px-8 py-3 border-2 border-black hover:bg-red-500 transition-colors"
              >
                Reserve Profile
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
                    <div className="w-12 h-12 bg-red-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] ml-3">
                      <h1 className="text-3xl font-bold box-border caret-transparent leading-9 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] md:text-4xl">
                        Creator Profile Reservation
                      </h1>
                      {currentStep > 0 && (
                        <p className="text-neutral-500 text-lg box-border caret-transparent leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Step {currentStep} of 5
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-neutral-500 text-lg box-border caret-transparent leading-7 max-w-screen-sm outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                    Join the next wave of AI filmmakers and artists.
                  </p>

                  {/* Progress Bar */}
                  {currentStep > 0 && (
                    <div className="mt-8 max-w-md mx-auto">
                      <div className="w-full bg-gray-200 h-3 border-2 border-black overflow-hidden">
                        <div 
                          className="bg-red-400 h-full transition-all duration-500 ease-out"
                          style={{ width: `${(currentStep / 5) * 100}%` }}
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
