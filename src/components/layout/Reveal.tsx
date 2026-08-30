import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>(delay);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
