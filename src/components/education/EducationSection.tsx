import { GraduationCap, School2 } from 'lucide-react';
import { Section } from '../layout/Section';
import { useTilt } from '../../hooks/useTilt';

const ucsbCourses = [
  'Operating Systems',
  'Runtime Systems',
  'Distributed Systems',
  'Reinforcement Learning',
];

const buetCourses = [
  'Computer Networks',
  'Computer Security',
  'Machine Learning',
  'High-Performance Database Systems',
  'Algorithm Engineering',
  'Computer Architecture',
  'Microprocessors & Embedded Systems',
  'Operating Systems',
  'Computer Graphics',
  'Bioinformatics',
];

export function EducationSection() {
  const ucsbTiltRef = useTilt<HTMLElement>(7);
  const buetTiltRef = useTilt<HTMLElement>(7);

  return (
    <Section
      id="education"
      icon={<GraduationCap className="h-5 w-5" />}
      title="Education"
      eyebrow="UC Santa Barbara · BUET"
      accent="amber"
      defaultExpanded
    >
      <div className="grid gap-4">
        <article
          ref={ucsbTiltRef}
          className="card-soft tilt sheen rim-glow group/education p-5 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="icon-badge !h-14 !w-14 !rounded-2xl transition-transform duration-500 group-hover/education:-rotate-6 group-hover/education:scale-110">
              <School2 className="h-7 w-7" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-[var(--text-1)]">
                  PhD in Computer Science
                </h3>
                <span className="pulse-badge">Current</span>
              </div>
              <p className="text-sm text-[var(--text-2)]">
                University of California, Santa Barbara (UCSB) · California, USA
              </p>
              <p className="mt-1 text-sm font-medium text-[rgb(var(--accent))]">
                PhD student · Sep 2025 – Present
              </p>
            </div>
          </div>

          <div className="divider my-5" />

          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-3)]">
            Relevant coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {ucsbCourses.map((course) => (
              <span key={course} className="chip">
                {course}
              </span>
            ))}
          </div>
        </article>

        <article
          ref={buetTiltRef}
          className="card-soft tilt sheen rim-glow group/education p-5 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-white p-2 shadow-lg transition-transform duration-500 group-hover/education:-rotate-6 group-hover/education:scale-110">
              <img
                src="/images/icon/BUET_LOGO.png"
                alt="BUET logo"
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <h3 className="text-lg font-bold text-[var(--text-1)]">
                BSc. in Computer Science and Engineering
              </h3>
              <p className="text-sm text-[var(--text-2)]">
                Bangladesh University of Engineering and Technology (BUET) · 2018 – 2023
              </p>
            </div>
          </div>

          <div className="divider my-5" />

          <p className="text-sm leading-relaxed text-[var(--text-2)]">
            <span className="font-semibold text-[var(--text-1)]">Thesis: </span>
            ENFIRED — ENforcing IoT FIREwall using fog-cloud framework under Delay
            constraints
          </p>

          <p className="mb-3 mt-5 text-xs font-semibold uppercase tracking-wide text-[var(--text-3)]">
            Notable coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {buetCourses.map((course) => (
              <span key={course} className="chip">
                {course}
              </span>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
