import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from '../ThemeToggle';

export function Navbar() {
  const isScrolled = useScrollPosition();

  return (
    <div className="sticky top-3 z-50 mb-6 sm:top-4">
      <nav
        className={`nav-shell flex items-center justify-between gap-3 px-3 py-2 sm:px-4 ${
          isScrolled ? 'nav-shell--scrolled' : ''
        }`}
      >
        <NavBrand />
        <NavLinks />
        <div className="flex flex-none items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
}
