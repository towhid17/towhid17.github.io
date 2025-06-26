import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { NavContainer } from './NavContainer';
import { ThemeToggle } from '../ThemeToggle';

export function LiquidNavbar() {
  const isScrolled = useScrollPosition();

  return (
    <header
      className={`sticky top-0 transition-all duration-500 z-50 ${
        isScrolled
          ? 'liquid-nav shadow-2xl'
          : 'liquid-nav'
      }`}
      style={{
        margin: '8px',
        borderRadius: isScrolled ? '20px' : '24px',
      }}
    >
      <div className="max-w-[100rem] mx-auto px-0 py-0">
        <div className="overflow-hidden rounded-[inherit]">
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
        </div>
      </div>
    </header>
  );
}