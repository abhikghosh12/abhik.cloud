export default function ProjectsSection() {
  const projects = [
    {
      title: "Cloud Migration Platform",
      description: "Automated cloud migration solution for enterprise applications with zero-downtime deployment strategies",
      tech: ["AWS", "Terraform", "Python", "Docker"],
      icon: "☁️",
      metrics: "50+ applications migrated"
    },
    {
      title: "AI/ML Pipeline",
      description: "End-to-end machine learning pipeline with automated deployment and model monitoring",
      tech: ["Azure ML", "Kubernetes", "Python", "MLOps"],
      icon: "🤖",
      metrics: "99.5% model accuracy"
    },
    {
      title: "DevSecOps Framework",
      description: "Security-first CI/CD framework for cloud-native applications with automated vulnerability scanning",
      tech: ["Jenkins", "SonarQube", "Docker", "Kubernetes"],
      icon: "🔒",
      metrics: "Zero security incidents"
    }
  ];

  return (
    <section id="projects" className="section bg-white/10 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-white/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <span className="text-primary-400 font-semibold text-sm">
                  {project.metrics}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-200">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}