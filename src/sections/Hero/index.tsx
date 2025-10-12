import { WaitlistCards } from './components/WaitlistCards';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Face. Your Rights. Your Revenue.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering people to monetize, track, and protect their facial likeness through secure, transparent licensing agreements.
          </p>
        </div>
        <WaitlistCards />
      </div>
    </section>
  );
};
