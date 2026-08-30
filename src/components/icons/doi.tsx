interface CustomDoiIconProps {
  className?: string;
}

export function CustomDoiIcon({ className = 'w-4 h-4' }: CustomDoiIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M6 10h2a2 2 0 0 1 0 4H6z" />
      <circle cx="13.5" cy="12" r="2" />
      <path d="M18 9v5" />
    </svg>
  );
}
