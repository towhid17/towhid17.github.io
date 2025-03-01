import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SectionProps {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function Section({ icon, title, children, defaultExpanded = false }: SectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const id = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div id={id} className="glass-card">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-left justify-between p-6"
        aria-expanded={isExpanded}
        aria-controls={id}
      >
        <div className="flex items-center gap-4">
          {icon && (
            <div className="p-2 bg-purple-500/20 rounded-lg">
              {icon}
            </div>
          )}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <span className="p-1 rounded-lg hover:bg-white/10 transition-colors">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0">{children}</div>
      </div>
    </div>
  );
}