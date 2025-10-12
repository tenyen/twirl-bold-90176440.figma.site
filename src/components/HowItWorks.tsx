import React from 'react';
import { UserPlus, Settings, FileText, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'Sign up and securely upload your facial data to create your protected profile.'
    },
    {
      icon: Settings,
      title: 'Set Your Terms',
      description: 'Define how your likeness can be used, set pricing, and establish boundaries.'
    },
    {
      icon: FileText,
      title: 'License & Approve',
      description: 'Review requests and approve licensing agreements on your terms.'
    },
    {
      icon: TrendingUp,
      title: 'Track & Earn',
      description: 'Monitor usage in real-time and receive payments for authorized use.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to take control of your facial likeness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <step.icon className="w-10 h-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
