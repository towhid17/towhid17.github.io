import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { navItems, scrollToSection } from './navItems';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape, and don't let the page scroll behind the sheet.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="icon-btn"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100]">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <nav className="card menu-sheet absolute inset-x-3 top-3 p-3">
              <div className="flex items-center justify-between px-2 pb-2">
                <span className="text-sm font-semibold text-[var(--text-3)]">
                  Navigate
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="icon-btn"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="menu-item"
                      style={{ animationDelay: `${index * 45}ms` }}
                      onClick={(event) => {
                        event.preventDefault();
                        setIsOpen(false);
                        scrollToSection(item.id);
                      }}
                    >
                      <span className="menu-item__dot" aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>,
          document.body
        )}
    </div>
  );
}
