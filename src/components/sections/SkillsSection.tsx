export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Cloud & DevOps',
      description: 'Enterprise-scale cloud architecture and automation',
      skills: [
        { name: 'AWS Cloud', level: 90, color: 'bg-[#FF9900]' },
        { name: 'Azure', level: 85, color: 'bg-[#0078D4]' },
        { name: 'GCP', level: 80, color: 'bg-[#4285F4]' },
        { name: 'Kubernetes', level: 88, color: 'bg-[#326CE5]' },
        { name: 'Terraform', level: 85, color: 'bg-[#7B42BC]' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'Data-driven solutions and intelligent systems',
      skills: [
        { name: 'Python ML', level: 90, color: 'bg-[#64FFDA]' },
        { name: 'TensorFlow', level: 85, color: 'bg-[#FF6F00]' },
        { name: 'MLOps', level: 82, color: 'bg-[#00A4EF]' },
        { name: 'GenAI', level: 80, color: 'bg-[#16B7CC]' }
      ]
    },
    {
      title: 'Security & DevSecOps',
      description: 'Secure infrastructure and CI/CD pipelines',
      skills: [
        { name: 'DevSecOps', level: 88, color: 'bg-[#E34F26]' },
        { name: 'CI/CD', level: 92, color: 'bg-[#41CD52]' },
        { name: 'Cloud Security', level: 85, color: 'bg-[#FF5370]' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[#CCD6F6] text-3xl font-bold">
            Skills
          </h2>
          <div className="flex-1 h-px bg-[#233554]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-10px] transition-transform duration-300"
            >
              <h3 className="text-[#CCD6F6] text-xl font-bold mb-2">
                {category.title}
              </h3>
              <p className="text-[#8892B0] text-sm mb-6">
                {category.description}
              </p>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#CCD6F6]">{skill.name}</span>
                      <span className="text-[#64FFDA] text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-[#233554] rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-[#112240] rounded-lg p-8">
          <h3 className="text-[#CCD6F6] text-xl font-bold mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Docker', 'Ansible', 'GitLab', 'Jenkins', 'Node.js', 'React',
              'Microservices', 'System Design', 'API Development', 'Database Design',
              'Network Security', 'Performance Optimization', 'FinOps', 'Agile'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#233554] text-[#64FFDA] rounded-lg text-sm hover:bg-[#64FFDA]/10 transition-colors cursor-default"
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
