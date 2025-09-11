export default function SkillsSection() {
  const skills = [
    { name: 'AWS', level: 90 },
    { name: 'Azure', level: 85 },
    { name: 'GCP', level: 80 },
    { name: 'Kubernetes', level: 88 },
    { name: 'Docker', level: 92 },
    { name: 'Terraform', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'DevSecOps', level: 87 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}