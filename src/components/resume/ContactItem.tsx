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
        <Icon className="w-5 h-5 text-purple-200/80" />
      </div>
      <div>
        <p className="text-sm text-white/50">{label}</p>
        <p className="text-white/90">{value}</p>
      </div>
    </div>
  );
}