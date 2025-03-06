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
        className="p-2 rounded-lg bg-dark-blue hover:bg-blue-900 transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0a0f1d] border border-[#1a2238] rounded-xl shadow-lg p-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-white hover:bg-[#16213e] transition-colors"
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
