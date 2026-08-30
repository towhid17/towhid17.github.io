import { Briefcase, Cpu } from 'lucide-react';
import { Section } from '../layout/Section';
import { WorkExperienceCard } from './WorkExperienceCard';

export function WorkExperienceSection() {
  return (
    <Section
      id="experience"
      icon={<Briefcase className="h-5 w-5" />}
      title="Work Experience"
      eyebrow="Industry roles"
      accent="emerald"
      defaultExpanded
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <WorkExperienceCard
          title="Software Engineer"
          company="Therap BD Ltd."
          period="July 2023 – Present"
          current
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
