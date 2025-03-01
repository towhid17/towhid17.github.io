import { GraduationCap } from 'lucide-react';
import React from 'react';

interface EducationCardProps {
  icon: React.ReactNode;
  title: string;
  institution: string;
  period: string;
  description: React.ReactNode;
}

export function EducationCard({ icon, title, institution, period, description }: EducationCardProps) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-500/20 rounded-lg">
          <div className="w-6 h-6 text-purple-200">{icon}</div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-white/75 text-sm">{institution}, {period}</p>
        </div>
      </div>
      <p className="mt-2 text-white/65 leading-relaxed">{description}</p>
    </div>
  );
}