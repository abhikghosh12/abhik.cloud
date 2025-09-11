export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Cloud Architect',
      company: 'Capgemini',
      period: '2021 - Present',
      description: 'Leading cloud transformation initiatives, designing scalable architectures, and implementing DevSecOps practices for enterprise clients.',
      achievements: [
        'Led 15+ cloud migration projects',
        'Reduced infrastructure costs by 40%',
        'Implemented zero-downtime deployments'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Previous Company',
      period: '2019 - 2021',
      description: 'Automated CI/CD pipelines, managed containerized applications, and optimized cloud infrastructure for improved performance.',
      achievements: [
        'Automated 90% of deployment processes',
        'Improved system reliability to 99.9%',
        'Reduced deployment time by 70%'
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-white/5 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white/20"></div>
                  
                  {/* Content */}
                  <div className="ml-16 card flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gradient mb-1">{exp.title}</h3>
                        <p className="text-white/80 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-primary-400 font-semibold">{exp.period}</span>
                    </div>
                    
                    <p className="text-white/90 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-white/80">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}