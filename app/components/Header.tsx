import Logo from './Logo';
import NavLinks from './navigation/NavLinks';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Logo />
            </div>
          </div>
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}