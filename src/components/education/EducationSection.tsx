import { GraduationCap } from 'lucide-react';
import { Section } from '../layout/Section';

const courses = [
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
  return (
    <Section
      id="education"
      icon={<GraduationCap className="h-5 w-5" />}
      title="Education"
      eyebrow="BUET, 2018 – 2023"
      accent="amber"
      defaultExpanded
    >
      <div className="card-soft p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-white p-2 shadow-lg">
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
          {courses.map((course) => (
            <span key={course} className="chip">
              {course}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
