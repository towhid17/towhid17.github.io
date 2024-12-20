import { type ReactNode } from 'react';

interface NewsContainerProps {
  children: ReactNode;
  maxHeight?: string;
}

export function NewsContainer({ children, maxHeight = '600px' }: NewsContainerProps) {
  return (
    <div 
      className="custom-scrollbar overflow-y-auto"
      style={{ maxHeight }}
    >
      {children}
    </div>
  );
}