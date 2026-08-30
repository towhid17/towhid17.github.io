import type { CSSProperties } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import type { AcademicProject } from '../../data/types';
import { useTilt } from '../../hooks/useTilt';

const palette = [
  ['124 58 237', '217 70 239'],
  ['6 182 212', '59 130 246'],
  ['16 185 129', '6 182 212'],
  ['245 158 11', '244 63 94'],
  ['244 63 94', '217 70 239'],
  ['79 70 229', '6 182 212'],
  ['217 70 239', '124 58 237'],
] as const;

interface AcademicProjectCardProps {
  academicProject: AcademicProject;
  index: number;
}

export function AcademicProjectCard({
  academicProject,
  index,
}: AcademicProjectCardProps) {
  const { title, link, description, technologies } = academicProject;
  const [accent, accent2] = palette[index % palette.length];
  const ref = useTilt<HTMLDivElement>(6);

  return (
    <div
      ref={ref}
      className="card-soft tilt sheen rim-glow group/proj flex flex-col p-5"
      style={{ '--accent': accent, '--accent-2': accent2 } as CSSProperties}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold leading-snug text-[var(--text-1)]">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn flex-none"
          aria-label={`Open ${title} on GitHub`}
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/proj:translate-x-0.5 group-hover/proj:-translate-y-0.5" />
        </a>
      </div>

      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[var(--text-3)]">
        {description}
      </p>

      {technologies && technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="chip !text-xs">
              {tech}
            </span>
          ))}
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="link-accent mt-4 inline-flex items-center gap-1.5 text-sm"
      >
        <Github className="h-3.5 w-3.5" />
        Source
      </a>
    </div>
  );
}
