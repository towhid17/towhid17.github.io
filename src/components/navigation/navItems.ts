export const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Research', id: 'research' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Publications', id: 'publications' },
  { label: 'Projects', id: 'projects' },
] as const;

export const navIds = navItems.map((item) => item.id);

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
