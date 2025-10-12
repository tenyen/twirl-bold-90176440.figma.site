import React from 'react';
import { Shield, DollarSign, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Face. Your Rights. <br />
            <span className="text-gray-600">Your Future.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Empower yourself to monetize, track, and protect your facial likeness through secure, transparent licensing agreements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 text-lg font-medium">
              Start Protecting Your Likeness
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all text-lg font-medium">
              Learn More
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Protect</h3>
              <p className="text-gray-600 text-center">Secure your facial data with advanced encryption</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monetize</h3>
              <p className="text-gray-600 text-center">Set your terms and earn from your likeness</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Track</h3>
              <p className="text-gray-600 text-center">Monitor every use of your facial data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
