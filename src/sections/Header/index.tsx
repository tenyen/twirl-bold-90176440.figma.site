import { HeaderLogo } from './components/HeaderLogo';

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <HeaderLogo />
      </div>
    </header>
  );
};
