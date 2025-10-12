import React from 'react';
import { Lock, Coins, BarChart3, Scale, Globe, Zap } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const benefits = [
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: 'Your facial data is protected with enterprise-grade encryption and secure storage protocols.'
    },
    {
      icon: Coins,
      title: 'Fair Compensation',
      description: 'You set the price for your likeness. No middlemen, no hidden fees - just transparent earnings.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track every usage of your likeness with detailed analytics and comprehensive reporting.'
    },
    {
      icon: Scale,
      title: 'Legal Protection',
      description: 'Legally binding contracts and automated enforcement protect your rights automatically.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with brands and creators worldwide while maintaining complete control.'
    },
    {
      icon: Zap,
      title: 'Instant Payments',
      description: 'Receive payments instantly when your likeness is used under approved terms.'
    }
  ];

  return (
    <section id="why-choose" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Likelee.ai
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The most comprehensive platform for facial likeness management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
