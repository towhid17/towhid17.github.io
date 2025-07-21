import './lg.css';
import { ReactNode } from 'react';

interface LGProps {
  children: ReactNode;
}

export function LG({ children }: LGProps) {
  return (
    <>
      <div className="wrapper">
        <div className="effect"></div>
        <div className="tint"></div>
        <div className="shine"></div>
        <div className="text">
            {children}
        </div>
      </div>
    </>
  );
}
