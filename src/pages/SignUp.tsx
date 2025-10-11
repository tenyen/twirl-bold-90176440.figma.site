import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";
import { supabase } from "@/supabase";

// Define content type options
const contentTypeOptions = [
  { label: "Social-media ads", value: "social_ads" },
  { label: "Web & banner campaigns", value: "web_ads" },
  { label: "TV / streaming commercials", value: "tv_commercial" },
  { label: "Film & scripted streaming", value: "film_streaming" },
  { label: "Print & outdoor ads", value: "print_outdoor" },
  { label: "Music videos", value: "music_video" },
  { label: "Video-game / VR characters", value: "game_vr" },
  { label: "Stock photo / video libraries", value: "stock_library" },
  { label: "Educational / nonprofit spots", value: "edu_nonprofit" },
  { label: "AI model training datasets", value: "ai_dataset" },
  { label: "Other (text field)", value: "other_content" },
];

// Define brand/industry options
const industryOptions = [
  { label: "Fashion / Beauty", value: "fashion_beauty" },
  { label: "Tech / Electronics", value: "tech_elec" },
  { label: "Sports / Fitness", value: "sports_fitness" },
  { label: "Food / Beverage", value: "food_bev" },
  { label: "Film / Gaming / Music", value: "entertainment" },
  { label: "Automotive", value: "automotive" },
  { label: "Finance / Fintech", value: "finance" },
  { label: "Health / Wellness", value: "health_wellness" },
  { label: "Luxury & Lifestyle", value: "luxury" },
  { label: "Travel / Hospitality", value: "travel" },
  { label: "Open to any industry", value: "open_all" },
];

export const SignUp = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedContentTypes: [] as string[],
    otherContentType: "",
    selectedIndustries: [] as string[],
    location: "",
    birthdate: "",
    genderExpression: "",
    pronouns: "",
    hairColor: "",
    eyeColor: "",
    skinTone: "",
    heightRange: "",
    vibeTags: [] as string[],
    ethnicity: "",
    profileVisibility: "private",
    profilePhoto: null as File | null,
    password: "",
    confirmPassword: ""
  });

  const [showAllContentTypes, setShowAllContentTypes] = useState(false);
  const [showOtherContentTypeInput, setShowOtherContentTypeInput] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  useEffect(() => {
    setShowOtherContentTypeInput(formData.selectedContentTypes.includes("other_content"));
  }, [formData.selectedContentTypes]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentTypeToggle = (value: string) => {
    setFormData(prev => {
      const currentTypes = prev.selectedContentTypes;
      let newTypes;

      if (currentTypes.includes(value)) {
        newTypes = currentTypes.filter(type => type !== value);
      } else {
        newTypes = [...currentTypes, value];
      }
      return { ...prev, selectedContentTypes: newTypes };
    });
  };

  const handleIndustryToggle = (value: string) => {
    setFormData(prev => {
      let currentIndustries = prev.selectedIndustries;
      let newIndustries;

      if (value === "open_all") {
        newIndustries = currentIndustries.includes(value) ? [] : [value];
      } else {
        const filteredIndustries = currentIndustries.filter(ind => ind !== "open_all");
        if (filteredIndustries.includes(value)) {
          newIndustries = filteredIndustries.filter(type => type !== value);
        } else {
          newIndustries = [...filteredIndustries, value];
        }
      }
      return { ...prev, selectedIndustries: newIndustries };
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
    } else if (currentStep === 3) {
      if (!formData.birthdate) {
        alert("Please enter your birthdate.");
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
        selectedContentTypes: formData.selectedContentTypes,
        otherContentType: formData.otherContentType,
        selectedIndustries: formData.selectedIndustries,
        location: formData.location,
        birthdate: formData.birthdate,
        genderExpression: formData.genderExpression,
        pronouns: formData.pronouns,
        hairColor: formData.hairColor,
        eyeColor: formData.eyeColor,
        skinTone: formData.skinTone,
        heightRange: formData.heightRange,
        vibeTags: formData.vibeTags,
        ethnicity: formData.ethnicity,
        profileVisibility: formData.profileVisibility,
        profilePhotoName: formData.profilePhoto?.name || "",
      };

      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: authData.user.id,
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          user_type: 'face',
          profile_data: profileData,
        });

      if (profileError) {
        console.error("Profile creation error:", profileError);
        alert('Account created but profile setup failed. Please contact support.');
        return;
      }

      console.log("Faces profile created successfully");
      navigate('/thank-you');

    } catch (error) {
      console.error("Signup error:", error);
      alert('Something went wrong with your submission. Please try again.');
    }
  };

  const renderStep = () => {
    const visibleContentTypes = showAllContentTypes ? contentTypeOptions : contentTypeOptions.slice(0, 5);
    const visibleIndustryOptions = showAllIndustries ? industryOptions : industryOptions.slice(0, 5);

    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
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
              <button type="button" onClick={handleNext} className="bg-cyan-400 text-white px-8 py-3 border-2 border-black hover:bg-cyan-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 2: Preferences</h2>
            {/* Content Type Multi-select Chips */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">
                What kind of content are you interested in being featured in?
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {visibleContentTypes.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleContentTypeToggle(option.value)}
                    className={`text-sm font-medium px-4 py-2 border-2 border-black transition-colors ${
                      formData.selectedContentTypes.includes(option.value)
                        ? 'bg-cyan-400 text-white'
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {contentTypeOptions.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowAllContentTypes(!showAllContentTypes)}
                  className="text-sm text-cyan-400 hover:text-cyan-500 transition-colors mt-2"
                >
                  {showAllContentTypes ? "− Show Less" : "+ Show More"}
                </button>
              )}
              {showOtherContentTypeInput && (
                <input
                  type="text"
                  name="otherContentType"
                  placeholder="Specify other content type"
                  value={formData.otherContentType}
                  onChange={handleInputChange}
                  className="text-base bg-stone-50 border-2 border-black px-3 py-2 mt-2 w-full"
                />
              )}
            </div>

            {/* Industry / Brand Vibes Multi-select Dropdown */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">
                What types of brands or industries do you want to work with?
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {visibleIndustryOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleIndustryToggle(option.value)}
                    className={`text-sm font-medium px-4 py-2 border-2 border-black transition-colors ${
                      formData.selectedIndustries.includes(option.value)
                        ? 'bg-yellow-400 text-black'
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {industryOptions.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowAllIndustries(!showAllIndustries)}
                  className="text-sm text-yellow-400 hover:text-yellow-500 transition-colors mt-2"
                >
                  {showAllIndustries ? "− Show Less" : "+ Show More"}
                </button>
              )}
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button type="button" onClick={handleNext} className="bg-cyan-400 text-white px-8 py-3 border-2 border-black hover:bg-cyan-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
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

            {/* Birthdate */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Birthdate *</label>
              <input
                type="text" // Changed from "date" to "text"
                name="birthdate"
                placeholder="MM/DD/YYYY" // Added placeholder for format guidance
                value={formData.birthdate}
                onChange={handleInputChange}
                required
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              />
            </div>

            {/* Race/Ethnicity */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Race/Ethnicity *</label>
              <select
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleInputChange}
                required
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select Race/Ethnicity</option>
                <option value="asian">Asian</option>
                <option value="black">Black</option>
                <option value="hispanic">Hispanic/Latino</option>
                <option value="white">White</option>
                <option value="middle-eastern">Middle Eastern/North African</option>
                <option value="native-american">Native American/Indigenous</option>
                <option value="pacific-islander">Pacific Islander</option>
                <option value="multi-racial">Multi-racial</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Gender Expression */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">How do you identify?</label>
              <select
                name="genderExpression"
                value={formData.genderExpression}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select Gender Expression (Optional)</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-binary</option>
                <option value="gender-fluid">Gender Fluid</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Pronouns */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Pronouns:</label>
              <select
                name="pronouns"
                value={formData.pronouns}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select Pronouns (Optional)</option>
                <option value="she/her">She/Her</option>
                <option value="he/him">He/Him</option>
                <option value="they/them">They/Them</option>
                <option value="ze/zir">Ze/Zir</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Hair Color */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Hair Color:</label>
              <select
                name="hairColor"
                value={formData.hairColor}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select Hair Color (Optional)</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="blonde">Blonde</option>
                <option value="red">Red</option>
                <option value="dyed-other">Dyed/Other</option>
                <option value="multiple-rotating">Multiple, rotating</option>
              </select>
            </div>

            {/* Eye Color */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Eye Color:</label>
              <select
                name="eyeColor"
                value={formData.eyeColor}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select Eye Color (Optional)</option>
                <option value="brown">Brown</option>
                <option value="hazel">Hazel</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="gray">Gray</option>
              </select>
            </div>

            {/* Skin Tone */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Skin Tone:</label>
              <select
                name="skinTone"
                value={formData.skinTone}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select Skin Tone (Optional)</option>
                <option value="porcelain">Porcelain</option>
                <option value="ivory">Ivory</option>
                <option value="fair">Fair</option>
                <option value="light">Light</option>
                <option value="light-neutral">Light Neutral</option>
                <option value="light-warm">Light Warm</option>
                <option value="light-olive">Light Olive</option>
                <option value="medium-light">Medium Light</option>
                <option value="medium-neutral">Medium Neutral</option>
                <option value="medium-warm">Medium Warm</option>
                <option value="golden-tan">Golden Tan</option>
                <option value="caramel">Caramel</option>
                <option value="honey-brown">Honey Brown</option>
                <option value="tan-olive">Tan Olive</option>
                <option value="medium-deep">Medium Deep</option>
                <option value="rich-tan">Rich Tan</option>
                <option value="deep-bronze">Deep Bronze</option>
                <option value="deep-neutral">Deep Neutral</option>
                <option value="deep-warm">Deep Warm</option>
                <option value="ebony-deepest">Ebony / Deepest</option>
              </select>
            </div>

            {/* Height Range */}
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Height Range:</label>
              <select
                name="heightRange"
                value={formData.heightRange}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="">Select Height Range (Optional)</option>
                <option value="under-5-0">Under 5'0"</option>
                <option value="5-0-5-4">5'0"–5'4"</option>
                <option value="5-5-5-8">5'5"–5'8"</option>
                <option value="5-9-6-0">5'9"–6'0"</option>
                <option value="6-1-plus">6'1"+</option>
              </select>
            </div>

            {/* Vibe / Style Tags */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Vibe / Style Tags:</label>
              <div className="flex flex-wrap gap-2">
                {["Streetwear", "Glam", "Natural", "Classic", "Edgy", "Athletic"].map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      vibeTags: prev.vibeTags.includes(tag)
                        ? prev.vibeTags.filter(t => t !== tag)
                        : [...prev.vibeTags, tag]
                    }))}
                    className={`text-sm font-medium px-4 py-2 border-2 border-black transition-colors ${
                      formData.vibeTags.includes(tag)
                        ? 'bg-cyan-400 text-white'
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Visibility */}
            <div className="mb-6">
              <label className="text-sm font-medium block mb-2">Profile Visibility:</label>
              <select
                name="profileVisibility"
                value={formData.profileVisibility}
                onChange={handleInputChange}
                className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
              >
                <option value="private">Private (Only discoverable to brands and AI Creators)</option>
                <option value="public">Public (Internet search discoverable)</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button type="button" onClick={handleNext} className="bg-cyan-400 text-white px-8 py-3 border-2 border-black hover:bg-cyan-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Step 4: Upload Photo</h2>
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
                  file:bg-cyan-400 file:text-white
                  hover:file:bg-cyan-500"
              />
              {formData.profilePhoto && (
                <p className="mt-4 text-sm text-gray-600">Selected: {formData.profilePhoto.name}</p>
              )}
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-black px-8 py-3 border-2 border-black hover:bg-gray-300 transition-colors font-semibold">
                ← Previous
              </button>
              <button type="button" onClick={handleNext} className="bg-cyan-400 text-white px-8 py-3 border-2 border-black hover:bg-cyan-500 transition-colors font-semibold">
                Next →
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="bg-white border-2 border-black p-8 relative shadow-lg">
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
                className="text-lg font-semibold bg-cyan-400 text-white px-8 py-3 border-2 border-black hover:bg-cyan-500 transition-colors"
              >
                Sign Up
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
                    <div className="w-12 h-12 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] ml-3">
                      <h1 className="text-3xl font-bold box-border caret-transparent leading-9 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] md:text-4xl">
                        Sign Up for Likelee
                      </h1>
                      <p className="text-neutral-500 text-lg box-border caret-transparent leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        Step {currentStep} of 5
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-500 text-lg box-border caret-transparent leading-7 max-w-screen-sm outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                    Join thousands of everyday people earning royalties from their likeness.
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-8 max-w-md mx-auto">
                    <div className="w-full bg-gray-200 h-3 border-2 border-black overflow-hidden">
                      <div 
                        className="bg-cyan-400 h-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
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
