import { useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

interface ExpandableCardProps {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export function ExpandableCard({ icon, title, children }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const id = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      id={id}
      className={`glass-card transition-all duration-300 ease-in-out ${
        isExpanded
          ? 'fixed inset-4 z-50 overflow-y-auto'
          : 'relative w-full'
      }`}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[var(--glass-bg)] backdrop-blur-md">
        <div className="flex items-center gap-4">
          {icon && (
            <div className="p-2 bg-purple-500/20 rounded-lg">
              {icon}
            </div>
          )}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={isExpanded ? 'Minimize' : 'Maximize'}
        >
          {isExpanded ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
      </div>
      <div className="p-6 pt-0">{children}</div>
    </div>
  );
}