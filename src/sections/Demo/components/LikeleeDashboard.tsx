export const LikeleeDashboard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 h-full min-h-[400px] p-6 group hover:shadow-3xl transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
            <img
              src="/static/logo.svg"
              alt="Likelee Logo"
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-semibold text-gray-900">Likelee Dashboard</h3>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            ER
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Emma Rodriguez</h4>
            <p className="text-sm text-gray-600">Verified Creator</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h5 className="font-medium text-gray-900">Detected Platforms</h5>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">2 Active</span>
          </div>
          <div className="flex space-x-2">
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Sora</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Runway</span>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-gray-900">Royalties Earned</h5>
            <span className="text-2xl font-bold text-green-600">$48.20</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">+$12.40 this week</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h5 className="font-medium text-gray-900 mb-3">Control Settings</h5>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Commercial Use</span>
              <div className="relative">
                <div className="w-10 h-6 bg-green-500 rounded-full shadow-inner flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-5 transition-transform"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">AI Training</span>
              <div className="relative">
                <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-1 transition-transform"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500">Likelee Dashboard — Track and monetize your AI likeness</p>
      </div>
    </div>
  );
};
