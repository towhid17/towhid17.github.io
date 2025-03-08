import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ContactItemProps {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
}

export function ContactItem({ icon: Icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-purple-500/10 rounded-lg">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-secondary">{label}</p>
        <p className="text-primary">{value}</p>
      </div>
    </div>
  );
}