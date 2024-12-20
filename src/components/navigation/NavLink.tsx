interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="px-4 py-2 rounded-lg hover:bg-black-100 dark:hover:bg-black-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth',
        });
      }}
    >
      {label}
    </a>
  );
}