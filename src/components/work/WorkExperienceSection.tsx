import { BookOpenCheck, Briefcase, Cpu, FlaskConical } from 'lucide-react';
import { Section } from '../layout/Section';
import { WorkExperienceCard } from './WorkExperienceCard';

export function WorkExperienceSection() {
  return (
    <Section
      id="experience"
      icon={<Briefcase className="h-5 w-5" />}
      title="Work Experience"
      eyebrow="Research, teaching & industry"
      accent="emerald"
      defaultExpanded
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <WorkExperienceCard
          title="PhD Researcher"
          company="RACELab, UC Santa Barbara"
          period="Sep 2025 – Present"
          current
          accent="124 58 237"
          accent2="6 182 212"
          logo={<FlaskConical className="h-5 w-5" />}
          description="Researching distributed systems, IoT, and AI for adaptive edge environments."
          highlights={[
            'Developing reinforcement learning methods for scheduling and spatial data placement to improve resource utilization and query efficiency in distributed IoT–edge environments.',
            'Designing a custom simulation framework for spatial data block placement and range-query evaluation, and using it with a simplified IoT deployment to evaluate adaptive placement and scheduling policies.',
          ]}
          technologies={['Distributed Systems', 'IoT', 'Reinforcement Learning', 'Edge Computing']}
        />

        <WorkExperienceCard
          title="Teaching Assistant"
          company="UC Santa Barbara · California, USA"
          period="Sep 2025 – Present"
          current
          accent="59 130 246"
          accent2="16 185 129"
          logo={<BookOpenCheck className="h-5 w-5" />}
          description="Tutoring Introduction to Computer Communication Networks and Problem Solving II, with classes averaging approximately 30 students."
          technologies={['Computer Networks', 'Problem Solving', 'Teaching']}
        />

        <WorkExperienceCard
          title="Software Engineer"
          company="Therap BD Ltd."
          period="July 2023 – Aug 31, 2025"
          accent="16 185 129"
          accent2="6 182 212"
          logo={
            <img
              src="/images/icon/therap.jpg"
              alt="Therap logo"
              className="h-full w-full object-cover"
            />
          }
          description="Therap serves people with disabilities across the USA and Canada. I build features with the Spring Framework, Oracle Cloud Infrastructure, JSP, Oracle DB, and React."
          technologies={['Spring', 'Oracle DB', 'Oracle Cloud Infrastructure', 'React']}
        />

        <WorkExperienceCard
          title="Machine Learning Engineer"
          company="AIEdgeInside"
          period="May 2023 – November 2023"
          accent="245 158 11"
          accent2="244 63 94"
          logo={<Cpu className="h-5 w-5" />}
          description="Designed and implemented machine learning solutions for marketing products — fine-tuning LLM responses and text-to-speech for customer calls, plus diffusion models for marketing datasets."
          technologies={['LLM', 'Deep Learning', 'TensorFlow', 'Computer Vision']}
        />
      </div>
    </Section>
  );
}
