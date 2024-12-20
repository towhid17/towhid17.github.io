import { useScrollPosition } from '../../hooks/useScrollPosition';
import { ThemeToggle } from '../ThemeToggle';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { NavContainer } from './NavContainer';

export function Navbar() {
  const isScrolled = useScrollPosition();

  return (
    <header
      className={`fixed top-2 left-20 right-20 z-50 transition-all duration-300 ${
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
          <ThemeToggle />
          <MobileMenu />
        </div>
      </NavContainer>
    </header>
  );
}