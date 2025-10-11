simport { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";

export const AccountCreation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Simulate account creation
    console.log("Account creation data:", formData);
    alert('🎉 Account created successfully! Welcome to Likelee.');
    navigate('/thank-you'); // Redirect to a generic thank you page or a specific welcome page
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
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
                  <button 
                    onClick={() => navigate('/faces')}
                    className="text-sm text-neutral-500 items-center box-border caret-transparent flex justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 mx-auto hover:text-zinc-900"
                  >
                    ← Back to Faces Page
                  </button>
                  
                  <div className="items-center box-border caret-transparent flex justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                    <div className="w-12 h-12 bg-cyan-400 border-2 border-black flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] ml-3">
                      <h1 className="text-3xl font-bold box-border caret-transparent leading-9 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] md:text-4xl">
                        Reserve Your Profile
                      </h1>
                      <p className="text-neutral-500 text-lg box-border caret-transparent leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        Create your Likelee account
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-500 text-lg box-border caret-transparent leading-7 max-w-screen-sm outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                    Join thousands of everyday people earning royalties from their likeness.
                  </p>
                </div>

                {/* Form */}
                <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-8">
                  <form onSubmit={handleSubmit} className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                    
                    {/* Basic Info */}
                    <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-3 mb-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                      <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="text-base bg-stone-50 border-2 border-black px-3 py-1 md:text-sm md:leading-5"
                        />
                      </div>
                      <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last name (optional)"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="text-base bg-stone-50 border-2 border-black px-3 py-1 md:text-sm md:leading-5"
                        />
                      </div>
                    </div>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="text-base bg-stone-50 border-2 border-black px-3 py-1 md:text-sm md:leading-5"
                      />
                    </div>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="text-base bg-stone-50 border-2 border-black px-3 py-1 md:text-sm md:leading-5"
                      />
                    </div>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="text-base bg-stone-50 border-2 border-black px-3 py-1 md:text-sm md:leading-5"
                      />
                    </div>

                    <button
                      type="submit"
                      className="text-sm font-medium items-center bg-cyan-400 caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 text-nowrap w-full px-4 py-0 border-2 border-black hover:bg-cyan-500 transition-colors"
                    >
                      Create Account
                      <img
                        src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-13.svg"
                        alt="Icon"
                        className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-nowrap w-4 ml-2"
                      />
                    </button>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mt-6">
                      <p className="text-neutral-500 text-xs box-border caret-transparent leading-4 max-w-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-3 mx-auto">
                        By creating an account, you agree to Likelee.ai's terms and privacy policy.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
