
const interests = [
  'Distributed AI/ML Systems',
  'Edge/Cloud Computing',
  'Network Security',
  'Machine Learning',
  'Ubiquitous Computing and Digital Health',
];

export function ResearchInterests() {
  return (
    <div className="glass-card-2 p-6">
      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <span key={interest} className="chip text-base">
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}
