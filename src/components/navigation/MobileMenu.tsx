import { Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Bio', href: '#about-me' },
  { label: 'Education', href: '#education' },
  { label: 'Research Interests', href: '#research-interests' },
  { label: 'Work Experience', href: '#work-experience' },
  // { label: 'Research Projects', href: '#research-projects' },
  { label: 'Publications', href: '#publications' },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg glass-card transition-colors text-primary"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-primary" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--gradient-start)] p-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-primary glass-card transition-colors"
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
      )}
    </div>
  );
}
