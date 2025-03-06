import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { NavContainer } from './NavContainer';

export function Navbar() {
  const isScrolled = useScrollPosition();

  return (
    <header
      className={`fixed max-w-7xl top-2 z-5000 left-4 right-4 mx-auto w-full md:w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-card backdrop-blur-lg shadow-lg'
          : 'glass-card'
      } rounded-xl border border-white/10`}
    >
      <NavContainer>
        <div className="flex items-center gap-6">
          <NavBrand />
          <NavLinks />
        </div>
        
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <MobileMenu />
        </div>
      </NavContainer>
    </header>
  );
}