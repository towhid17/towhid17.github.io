export function CustomDoiIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        {/* Outer Circle */}
        <circle cx="12" cy="12" r="10" />
        
        {/* "D" Shape - Smaller and Lowered */}
        <path d="M6 10h2a2 2 0 0 1 0 4H6z" />
        
        {/* "O" Shape - Positioned more to the right */}
        <circle cx="13.5" cy="12" r="2" />
        
        {/* "I" Shape - Smaller and Positioned Further Right */}
        <path d="M18 9v5" />
      </svg>
    );
  }
  