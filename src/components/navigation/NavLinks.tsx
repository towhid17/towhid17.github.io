import { NavLink } from './NavLink';

const navItems = [
  { label: 'Bio', href: '#about-me' },
  { label: 'Education', href: '#education' },
  { label: 'Research Interests', href: '#research-interests' },
  { label: 'Work Experience', href: '#work-experience' },
  // { label: 'Research Projects', href: '#research-projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Academic Projects', href: '#academic-projects' },
] as const;

export function NavLinks() {
  return (
    <ul className="hidden md:flex items-center gap-2">
      {navItems.map((item) => (
        <li key={item.href}>
          <NavLink {...item} />
        </li>
      ))}
    </ul>
  );
}