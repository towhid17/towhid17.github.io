interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 first:pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">{title}</h2>
        <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
          {children}
        </div>
      </div>
    </section>
  );
}