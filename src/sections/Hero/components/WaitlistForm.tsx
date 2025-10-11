export const WaitlistForm = () => {
  return (
    <div className="bg-[linear-gradient(to_right,oklab(0.839909_-0.141908_-0.0158958_/_0.05)_0%,oklab(0.890537_0.003488_0.133287_/_0.05)_50%,oklab(0.711593_0.167053_0.0703646_/_0.05)_100%)] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-6 border border-[oklab(0.839909_-0.141908_-0.0158958_/_0.2)] p-8 rounded-[14px] border-solid">
      <form className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
        <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center mb-6">
          <div className="items-center box-border caret-transparent flex justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-3">
            <div className="items-center bg-[oklab(0.839909_-0.141908_-0.0158958_/_0.1)] box-border caret-transparent flex h-8 justify-center outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-8 mr-2 rounded-[3.35544e+07px]">
              <img
                src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-12.svg"
                alt="Icon"
                className="text-cyan-400 box-border caret-transparent h-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-4"
              />
            </div>
            <h3 className="text-xl font-semibold box-border caret-transparent leading-7 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
              Join Faces Waitlist
            </h3>
          </div>
          <p className="text-neutral-500 text-sm box-border caret-transparent leading-5 max-w-lg outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mx-auto">
            Get notified when we launch and receive exclusive early access with
            priority onboarding
          </p>
        </div>
        <div className="box-border caret-transparent max-w-lg outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-6 mx-auto">
          <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-3 mb-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
            <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
              <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                First Name *
              </label>
              <input
                type="text"
                placeholder="First name"
                value=""
                className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
              />
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
              <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name (optional)"
                value=""
                className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
              />
            </div>
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
            <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value=""
              className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
            />
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-4">
            <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 block leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone number (optional)"
              value=""
              className="text-base bg-stone-50 box-border caret-transparent flex h-12 leading-6 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-start w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5"
            />
          </div>
          <button
            type="submit"
            className="text-sm font-medium items-center bg-cyan-400 caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] gap-y-2 text-nowrap w-full px-4 py-0 rounded-lg"
          >
            Join Waitlist
            <img
              src="https://c.animaapp.com/mg05rtqgllY9ko/assets/icon-13.svg"
              alt="Icon"
              className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-nowrap w-4 ml-2"
            />
          </button>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] text-center">
          <p className="text-neutral-500 text-xs box-border caret-transparent leading-4 max-w-md outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mb-3 mx-auto">
            By joining, you agree to receive updates about likelee.ai. We
            respect your privacy and won&#39;t spam you.
          </p>
          <div className="text-neutral-500 text-xs items-center box-border caret-transparent flex justify-center leading-4 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
            <div className="items-center box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] mr-6">
              <div className="bg-cyan-400 box-border caret-transparent h-2 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-2 mr-1 rounded-[3.35544e+07px]"></div>
              <span className="box-border caret-transparent block outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                No spam guarantee
              </span>
            </div>
            <div className="items-center box-border caret-transparent flex outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
              <div className="bg-red-400 box-border caret-transparent h-2 outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-2 mr-1 rounded-[3.35544e+07px]"></div>
              <span className="box-border caret-transparent block outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
                Unsubscribe anytime
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
