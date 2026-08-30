import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';

const facts = [
  {
    icon: Briefcase,
    label: 'Now',
    value: 'Software Engineer, Therap BD Ltd.',
    accent: '16 185 129',
  },
  {
    icon: Sparkles,
    label: 'Previously',
    value: 'ML Engineer, AIEdgeInside',
    accent: '245 158 11',
  },
  {
    icon: GraduationCap,
    label: 'Studied',
    value: 'CSE at BUET',
    accent: '59 130 246',
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
        . I currently work as a software engineer at Therap BD Ltd., and
        previously worked as a machine learning engineer at AIEdgeInside. My
        research sits at the intersection of{' '}
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
