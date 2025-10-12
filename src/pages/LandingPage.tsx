import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { MainContent } from '../sections/MainContent';
import { Demo } from '../sections/Demo';
import { Footer } from '../sections/Footer';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MainContent />
      <Demo />
      <Footer />
    </div>
  );
};
