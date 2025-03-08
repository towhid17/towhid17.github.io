import { Briefcase } from 'lucide-react';
import { Section } from '../layout/Section';
import { WorkExperienceCard } from './WorkExperienceCard';

export function WorkExperienceSection() {
  return (
    <Section 
      icon={<Briefcase className="w-6 h-6 text-primary" />} 
      title="Work Experience" 
      defaultExpanded
    >
      <div className="space-y-4">
        <WorkExperienceCard
          title="Software Engineer"
          company="Therap BD Ltd."
          period="July 2023-Present"
          description="This software service serves people with disabilities in the USA and Canada. I work in software development with Spring Framework, Oracle Cloud Infrastructure (OCI), JSP, Oracle DB, and REACT."
          technologies={["Spring", "Oracle DB", "Oracle Cloud Infracture", "React"]}
        />
        
        <WorkExperienceCard
          title="Machine Learning Engineer"
          company="AIEdgeInside"
          period="May 2023- November 2023"
          description="Designed and implemented machine learning solutions for various marketing products. Worked on LLM to fine-tune the response and text-to-speech for customer calls and
also fine-tune diffusion models for different marketing datasets."
          technologies={["LLM", "Deep Learning", "TensorFlow", "Computer Vision"]}
        />
    
      </div>
    </Section>
  );
}