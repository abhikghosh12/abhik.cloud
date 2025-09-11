export default function ProjectsSection() {
  const projects = [
    {
      title: "Cloud Migration Platform",
      description: "Automated cloud migration solution for enterprise applications",
      tech: ["AWS", "Terraform", "Python", "Docker"]
    },
    {
      title: "AI/ML Pipeline",
      description: "End-to-end machine learning pipeline with automated deployment",
      tech: ["Azure ML", "Kubernetes", "Python", "MLOps"]
    },
    {
      title: "DevSecOps Framework",
      description: "Security-first CI/CD framework for cloud-native applications",
      tech: ["Jenkins", "SonarQube", "Docker", "Kubernetes"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}