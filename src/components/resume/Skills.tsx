interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: 'Programming',
    items: ['Python', 'TypeScript', 'C++', 'Julia'],
  },
  {
    category: 'Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Docker', 'Git', 'AWS', 'Linux'],
  },
];

export function Skills() {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="text-white/75 text-sm mb-2">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-200/90 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}