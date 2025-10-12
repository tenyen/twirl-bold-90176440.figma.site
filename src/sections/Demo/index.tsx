import { LikeleeDashboard } from './components/LikeleeDashboard';

export const Demo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Your Dashboard in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your likeness usage, monitor platforms, and manage your licensing preferences all in one place.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <LikeleeDashboard />
        </div>
      </div>
    </section>
  );
};
