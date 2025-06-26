
const interests = [
'Distributed AI/ML Systems',
'Edge/Cloud Computing',
'Network Security',
'Machine-learning',
'Ubuquitous computing and Digital Health'
];

export function ResearchInterests() {
  return (
    <div className="glass-card-2 p-6">
      <ul className="space-y-2 text-primary list-inside">
        {interests.map((interest) => (
          <li key={interest} className="flex items-center gap-2 before:content-['•'] before:text-accent">
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}