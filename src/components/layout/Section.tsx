import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { accentVars, type AccentName } from '../../styles/accents';
import { useReveal } from '../../hooks/useReveal';

interface SectionProps {
  icon?: ReactNode;
  title: string;
  /** Short line under the title, e.g. a count or a one-line summary. */
  eyebrow?: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  accent?: AccentName;
  /** Anchor id; derived from the title when omitted. */
  id?: string;
  /** Right-hand slot in the header, e.g. an extra action. */
  action?: ReactNode;
}

export function Section({
  icon,
  title,
  eyebrow,
  children,
  defaultExpanded = false,
  accent = 'violet',
  id,
  action,
}: SectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const sectionId = id ?? title.toLowerCase().replace(/\s+/g, '-');
  const revealRef = useReveal<HTMLElement>();

  return (
    <section
      id={sectionId}
      ref={revealRef}
      style={accentVars(accent)}
      className="card reveal group scroll-mt-28"
    >
      <button
        type="button"
        onClick={() => setIsExpanded((open) => !open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
        aria-expanded={isExpanded}
        aria-controls={`${sectionId}-panel`}
      >
        <span className="flex min-w-0 items-center gap-4">
          {icon && <span className="icon-badge">{icon}</span>}
          <span className="min-w-0">
            <h2 className="truncate text-lg font-bold sm:text-xl">{title}</h2>
            {eyebrow && (
              <span className="mt-0.5 block truncate text-sm text-[var(--text-3)]">
                {eyebrow}
              </span>
            )}
          </span>
        </span>

        <span className="flex flex-none items-center gap-2">
          {action}
          <span className="icon-btn">
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-500 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </span>
        </span>
      </button>

      <div id={`${sectionId}-panel`} className="collapsible" data-open={isExpanded}>
        <div>
          <div className="px-5 pb-6 sm:px-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
