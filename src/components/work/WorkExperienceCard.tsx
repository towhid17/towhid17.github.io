import type { CSSProperties, ReactNode } from 'react';
import { useTilt } from '../../hooks/useTilt';

interface WorkExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  logo?: ReactNode;
  accent: string;
  accent2: string;
  current?: boolean;
}

export function WorkExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  logo,
  accent,
  accent2,
  current = false,
}: WorkExperienceCardProps) {
  const ref = useTilt<HTMLDivElement>(5);

  return (
    <div
      ref={ref}
      className="card-soft tilt sheen rim-glow group/job p-5 sm:p-6"
      style={{ '--accent': accent, '--accent-2': accent2 } as CSSProperties}
    >
      <div className="flex flex-wrap items-start gap-4">
        <span className="icon-badge !h-12 !w-12 overflow-hidden transition-transform duration-500 group-hover/job:scale-105">
          {logo}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-[var(--text-1)]">{title}</h3>
            {current && <span className="pulse-badge">Current</span>}
          </div>
          <p className="text-sm text-[var(--text-2)]">
            {company} · {period}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--text-2)]">
        {description}
      </p>

      {technologies && technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
