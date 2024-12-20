import { NavLink } from './NavLink';

const navItems = [
  { label: 'Bio', href: '#bio' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
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