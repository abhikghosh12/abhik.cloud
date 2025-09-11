export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 90, icon: '☁️', color: 'bg-orange-500' },
        { name: 'Azure', level: 85, icon: '🔷', color: 'bg-blue-500' },
        { name: 'GCP', level: 80, icon: '🌐', color: 'bg-red-500' }
      ]
    },
    {
      title: 'DevOps & Containers',
      skills: [
        { name: 'Kubernetes', level: 88, icon: '⚙️', color: 'bg-purple-500' },
        { name: 'Docker', level: 92, icon: '🐳', color: 'bg-blue-600' },
        { name: 'Terraform', level: 85, icon: '🏗️', color: 'bg-indigo-500' }
      ]
    },
    {
      title: 'Programming & Security',
      skills: [
        { name: 'Python', level: 90, icon: '🐍', color: 'bg-green-500' },
        { name: 'DevSecOps', level: 87, icon: '🔒', color: 'bg-red-600' },
        { name: 'GitLab/GitHub', level: 85, icon: '📚', color: 'bg-gray-600' },
        { name: 'Jenkins', level: 82, icon: '🔧', color: 'bg-blue-700' }
      ]
    }
  ];

  // Additional skills from Wix site
  const additionalSkills = [
    'Artificial Intelligence', 'Machine Learning', 'Cyber Security', 'FinOps',
    'Cloud Services', 'Microservices', 'Ansible', 'Docker/Podman'
  ];

  return (
    <section id="skills" className="section bg-white/10 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Skills Image Banner - Similar to Wix site */}
        <div className="mb-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {skillCategories.flatMap(category => category.skills).map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 ${skill.color} rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl">{skill.icon}</span>
                  </div>
                  <p className="text-white text-sm font-medium">{skill.name}</p>
                  <p className="text-gray-400 text-xs">{skill.level}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Detailed Skills with Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        {/* Additional Skills Tags - Similar to Wix site */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/30 rounded-full text-blue-300 font-medium hover:from-blue-600/50 hover:to-purple-600/50 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
