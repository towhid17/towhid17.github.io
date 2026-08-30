import type { CSSProperties, ReactNode } from 'react';
import { useTilt } from '../../hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max rotation in degrees. Lower reads as subtle depth, higher as playful. */
  max?: number;
  id?: string;
}

/** Glass surface that tilts in 3D toward the cursor, with a specular sheen. */
export function TiltCard({ children, className = '', style, max = 6, id }: TiltCardProps) {
  const ref = useTilt<HTMLDivElement>(max);

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={`card tilt sheen rim-glow ${className}`}
    >
      {children}
    </div>
  );
}
