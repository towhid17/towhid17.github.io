interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="nav-link"
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