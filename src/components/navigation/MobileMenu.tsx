import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const navItems = [
  { label: 'Bio', href: '#about-me' },
  { label: 'Education', href: '#education' },
  { label: 'Research Interests', href: '#research-interests' },
  { label: 'Work Experience', href: '#work-experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Academic Projects', href: '#academic-projects' },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full glass-card-2 transition-colors text-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
      </button>

      {isOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed top-20 left-3 right-3 z-50 glass-card p-3">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="nav-link text-primary text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: 'smooth',
                      });
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </>,
          document.body
        )}
    </div>
  );
}
