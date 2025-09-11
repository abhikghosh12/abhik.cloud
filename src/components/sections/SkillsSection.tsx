export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 90, icon: '☁️' },
        { name: 'Azure', level: 85, icon: '🔷' },
        { name: 'GCP', level: 80, icon: '🌐' }
      ]
    },
    {
      title: 'DevOps & Containers',
      skills: [
        { name: 'Kubernetes', level: 88, icon: '⚙️' },
        { name: 'Docker', level: 92, icon: '🐳' },
        { name: 'Terraform', level: 85, icon: '🏗️' }
      ]
    },
    {
      title: 'Programming & Security',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'DevSecOps', level: 87, icon: '🔒' }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-white/10 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="text-primary-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}