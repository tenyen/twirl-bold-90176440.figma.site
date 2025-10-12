import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    'Secure facial data storage with end-to-end encryption',
    'Customizable licensing terms and pricing models',
    'Real-time usage tracking and notifications',
    'Automated contract generation and management',
    'Instant payment processing and withdrawals',
    'Comprehensive usage analytics and reporting',
    'Legal compliance and rights management',
    'Multi-platform integration capabilities'
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Control Your Likeness
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A complete suite of tools designed to protect, monetize, and track your facial likeness with ease and confidence.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
              Explore All Features
            </button>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
