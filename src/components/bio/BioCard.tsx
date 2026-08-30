import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';

const facts = [
  {
    icon: GraduationCap,
    label: 'Now',
    value: 'PhD Student, UC Santa Barbara',
    accent: '124 58 237',
  },
  {
    icon: Briefcase,
    label: 'Research',
    value: 'PhD Researcher, RACELab',
    accent: '6 182 212',
  },
  {
    icon: Sparkles,
    label: 'Focus',
    value: 'Distributed systems, IoT & AI',
    accent: '245 158 11',
  },
] as const;

export function BioCard() {
  return (
    <div className="space-y-6">
      <p className="max-w-3xl text-base leading-relaxed text-[var(--text-2)] sm:text-lg">
        I'm Towhid (he/him), a graduate of the{' '}
        <a
          className="link-accent"
          href="https://cse.buet.ac.bd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Department of CSE, BUET
        </a>
        . I am now a first-year Computer Science PhD student at the{' '}
        <a
          className="link-accent"
          href="https://www.cs.ucsb.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of California, Santa Barbara
        </a>
        , where I conduct research with RACELab. My work sits at the intersection of{' '}
        <strong className="font-semibold text-[var(--text-1)]">
          distributed AI/ML systems, edge and cloud computing, and network
          security
        </strong>
        .
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="card-soft lift group/fact flex items-center gap-3 p-4"
            style={{ '--accent': fact.accent } as React.CSSProperties}
          >
            <span className="icon-badge !h-9 !w-9 !rounded-xl transition-transform duration-500 group-hover/fact:scale-110">
              <fact.icon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-wide text-[var(--text-3)]">
                {fact.label}
              </span>
              <span className="block text-sm font-semibold text-[var(--text-1)]">
                {fact.value}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
