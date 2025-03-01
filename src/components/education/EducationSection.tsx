import { Section } from '../layout/Section';
import { GraduationCap } from 'lucide-react';
import { EducationCard } from './EducationCard';


export function EducationSection() {
  return (
    <Section 
        icon={<GraduationCap className="w-6 h-6 text-purple-200" />} 
        title="Education" 
        defaultExpanded
    >
        <div className="space-y-4">
        <EducationCard
            icon=<img src='/src/components/icons/BUET_LOGO.png' alt='BUET'/>
            title="BSc. in Computer Science and Engineering"
            institution="Bangladesh University of Engineering and Technology (BUET)"
            period="2018-2023"
            description=<p><strong>Thesis:</strong> 'ENFIRED: ENforcing IoT FIREwall using fog-cloud framework under Delay constraints'
                <br/>
                <strong>Notable Courses:</strong> Computer Networks, Computer Security, Machine Learning, High-Performance Database Systems, Algorithm Engineering, Computer Architecture, Microprocessors, Microcontrollers Embedded Systems, Operating Systems, Computer Graphics, Introduction to Bioinformatics.
                </p>
                />

        </div>
    </Section>
    );
}