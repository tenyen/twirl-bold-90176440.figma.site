import { NavbarBrand } from './components/NavbarBrand';

export const MainContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <NavbarBrand />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How Likelee Works
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A transparent platform connecting faces, creators, and studios through secure licensing.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Register Your Likeness</h3>
              <p className="text-gray-600">
                Create your profile and set your licensing preferences
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Discovered</h3>
              <p className="text-gray-600">
                Creators and studios browse licensed likenesses
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Royalties</h3>
              <p className="text-gray-600">
                Track usage and receive transparent payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
