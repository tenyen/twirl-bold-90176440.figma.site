export const WaitlistCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">👤</div>
        <h3 className="text-xl font-semibold mb-2">For Faces</h3>
        <p className="text-gray-600 mb-4">
          Control how your likeness is used in AI-generated content
        </p>
        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Join Waitlist
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">🎨</div>
        <h3 className="text-xl font-semibold mb-2">For AI Creators</h3>
        <p className="text-gray-600 mb-4">
          Access licensed likenesses for your AI-generated projects
        </p>
        <button className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
          Join Waitlist
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">🎬</div>
        <h3 className="text-xl font-semibold mb-2">For Brands & Studios</h3>
        <p className="text-gray-600 mb-4">
          License likenesses legally and ethically for your projects
        </p>
        <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};
