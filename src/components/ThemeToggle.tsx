import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

/** Sun and moon cross-fade and spin past each other on toggle. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-btn relative overflow-hidden"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  );
}
