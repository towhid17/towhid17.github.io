import { Boxes, Cloud, HeartPulse, ShieldCheck, BrainCircuit } from 'lucide-react';
import { useTilt } from '../../hooks/useTilt';

const interests = [
  {
    icon: Boxes,
    title: 'Distributed AI/ML Systems',
    blurb: 'Training and serving models across many machines.',
    accent: '124 58 237',
    accent2: '217 70 239',
  },
  {
    icon: Cloud,
    title: 'Edge & Cloud Computing',
    blurb: 'Placing computation where latency and cost work out.',
    accent: '6 182 212',
    accent2: '59 130 246',
  },
  {
    icon: ShieldCheck,
    title: 'Reinforcement Learning',
    blurb: 'Learning to optimize for long-term rewards.',
    accent: '244 63 94',
    accent2: '217 70 239',
  },
  // {
  //   icon: BrainCircuit,
  //   title: 'Machine Learning',
  //   blurb: 'Deep learning for systems and signal problems.',
  //   accent: '245 158 11',
  //   accent2: '244 63 94',
  // },
  // {
  //   icon: HeartPulse,
  //   title: 'Ubiquitous Computing & Digital Health',
  //   blurb: 'Sensing health signals from everyday devices.',
  //   accent: '16 185 129',
  //   accent2: '6 182 212',
  // },
] as const;

type Interest = (typeof interests)[number];

function InterestCard({ interest }: { interest: Interest }) {
  const ref = useTilt<HTMLDivElement>(9);
  const Icon = interest.icon;

  return (
    <div
      ref={ref}
      className="card-soft tilt sheen rim-glow group/card p-5"
      style={
        {
          '--accent': interest.accent,
          '--accent-2': interest.accent2,
        } as React.CSSProperties
      }
    >
      <span className="icon-badge mb-4 transition-transform duration-500 group-hover/card:-rotate-6 group-hover/card:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-base font-semibold text-[var(--text-1)]">
        {interest.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-3)]">
        {interest.blurb}
      </p>
    </div>
  );
}

export function ResearchInterests() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {interests.map((interest) => (
        <InterestCard key={interest.title} interest={interest} />
      ))}
    </div>
  );
}
