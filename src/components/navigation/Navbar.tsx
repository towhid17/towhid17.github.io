// import { useScrollPosition } from '../../hooks/useScrollPosition';
// import { NavBrand } from './NavBrand';
// import { NavLinks } from './NavLinks';
// import { MobileMenu } from './MobileMenu';
// import { NavContainer } from './NavContainer';

// export function Navbar() {
//   const isScrolled = useScrollPosition();

//   return (
//     <header
//       className={`fixed max-w-7xl top-2 z-5000 left-4 right-4 mx-auto w-full md:w-full transition-all duration-300 ${
//         isScrolled
//           ? 'glass-card backdrop-blur-lg shadow-lg'
//           : 'glass-card'
//       } rounded-xl border border-white/10`}
//     >
//       <NavContainer>
//         <div className="flex items-center gap-6">
//           <NavBrand />
//           <NavLinks />
//         </div>
        
//         <div className="flex items-center gap-4">
//           {/* <ThemeToggle /> */}
//           <MobileMenu />
//         </div>
//       </NavContainer>
//     </header>
//   );
// }


import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { NavContainer } from './NavContainer';
import { ThemeToggle } from '../ThemeToggle';

export function Navbar() {
  const isScrolled = useScrollPosition();

  return (
    <header
      className={`sticky top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
        isScrolled
          ? 'glass-card backdrop-blur-lg shadow-xl rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0px] rounded-tr-[0px]'
          : 'glass-card-2 rounded-[30px]'
      }`}
    >
      <div className="max-w-[95rem] mx-auto px-0 py-0">
        <div className="overflow-hidden">
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