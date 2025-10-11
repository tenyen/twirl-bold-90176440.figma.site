import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { db } from "@/firebase"; // Import Firebase services
import { ref as dbRef, push, serverTimestamp } from "firebase/database"; // Realtime Database imports

export const FacesWaitlist = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    motivation1: "",
    motivation2: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const waitlistData = {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      waitlistType: 'Faces Waitlist',
      motivation1: formData.motivation1 || "",
      motivation2: formData.motivation2 || "",
      createdAt: serverTimestamp(), // Use serverTimestamp for Realtime Database
    };

    console.log("Data being sent to Realtime Database (Faces Waitlist):", waitlistData); // DEBUG LOG
    try {
      await push(dbRef(db, 'facesWaitlist'), waitlistData);

      console.log("Faces Waitlist submitted successfully to Firebase Realtime Database:", formData);
      navigate('/thank-you'); // Redirect to ThankYou page

    } catch (error) {
      console.error('Firebase submission error:', error);
      alert('Something went wrong with your submission. Please try again or contact us directly.');
    }
  };

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-[952px] min-h-px min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-white box-border caret-transparent min-h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <main className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] py-16 md:py-24">
            <div className="box-border caret-transparent max-w-none outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full mx-auto px-4 md:max-w-screen-xl">
              <div className="box-border caret-transparent max-w-screen-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                
                {/* Header */}
                <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-12">
                  <button 
                    onClick={() => navigate('/')}
                    className="text-sm text-neutral-500 items-center box-border caret-transparent flex justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 mx-auto hover:text-zinc-900"
                  >
                    ← Back to Home
                  </button>
                  
                  <div className="items-center box-border caret-transparent flex justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                    <div className="items-center bg-[oklab(0.839909_-0.141908_-0.0158958_/_0.1)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-12 mr-3">
                      <img
                        src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-5.svg"
                        alt="Icon"
                        className="text-cyan-400 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6"
                      />
                    </div>
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                      <h1 className="text-3xl font-bold box-border caret-transparent leading-9 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] md:text-4xl">
                        Join Faces Waitlist
                      </h1>
                      <p className="text-neutral-500 text-lg box-border caret-transparent leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        For everyday people
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-500 text-lg box-border caret-transparent leading-7 max-w-screen-sm outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
                    License your facial likeness to directors, filmmakers, and brands. Earn royalties from your unique look.
                  </p>
                </div>

                {/* How It Works */}
                <div className="bg-white box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-6 mb-8">
                  <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center">
                    <h3 className="text-lg font-semibold box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
                      How It Works
                    </h3>
                    <div className="box-border caret-transparent gap-y-4 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-left">
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-cyan-400 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">1</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Upload your digitals (front, side, full body) in minutes.
                        </p>
                      </div>
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-cyan-400 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">2</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Set your preferences for how your likeness can be used.
                        </p>
                      </div>
                      <div className="items-start box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                        <div className="bg-cyan-400 box-border caret-transparent h-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-6 mr-3 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-medium">3</span>
                        </div>
                        <p className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                          Get licensed by filmmakers, brands, or creators — and earn royalties automatically.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="bg-[linear-gradient(to_right_bottom,oklab(0.839909_-0.141908_-0.0158958_/_0.1)_0%,oklab(0.839909_-0.141908_-0.0158958_/_0.05)_100%)] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border-2 border-black p-8">
                  <form onSubmit={handleSubmit} className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                    
                    {/* Basic Info */}
                    <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-3 mb-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                      <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
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
                      <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
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

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
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

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium block mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                      />
                    </div>

                    {/* Specific Questions */}
                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium block mb-2">
                        Would you like your likeness to be used only for certain project types? *
                      </label>
                      <select
                        name="motivation1"
                        value={formData.motivation1}
                        onChange={handleInputChange}
                        required
                        className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                      >
                        <option value="">Select your preference</option>
                        <option value="films-only">Films only</option>
                        <option value="ads-only">Advertisements only</option>
                        <option value="fashion-only">Fashion only</option>
                        <option value="no-ai-training">Everything except AI training</option>
                        <option value="all-projects">Open to all project types</option>
                        <option value="case-by-case">I'll decide case by case</option>
                      </select>
                    </div>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6">
                      <label className="text-sm font-medium block mb-2">
                        What excites you most about joining Likelee?
                      </label>
                      <select
                        name="motivation2"
                        value={formData.motivation2}
                        onChange={handleInputChange}
                        className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                      >
                        <option value="">Select what excites you most</option>
                        <option value="income">Earning passive income</option>
                        <option value="exposure">Getting exposure and being discovered</option>
                        <option value="rights-protection">Protecting my likeness rights</option>
                        <option value="creative-opportunities">Creative opportunities</option>
                        <option value="networking">Networking with creators</option>
                        <option value="all-above">All of the above</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="text-sm font-medium items-center bg-cyan-400 caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 text-nowrap w-full px-4 py-0 border-2 border-black hover:bg-cyan-500 transition-colors"
                    >
                      Join Faces Waitlist
                      <img
                        src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-13.svg"
                        alt="Icon"
                        className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-nowrap w-4 ml-2"
                      />
                    </button>

                    <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mt-6">
                      <p className="text-neutral-500 text-xs box-border caret-transparent leading-4 max-w-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-3 mx-auto">
                        By joining, you agree to receive updates about likelee.ai. We respect your privacy and won't spam you.
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
