import React from 'react';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Cloud Migration Platform',
      description: 'Enterprise-scale cloud migration platform for automotive industry',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
      image: '/api/placeholder/400/250',
      status: 'Completed'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning analytics platform for healthcare data',
      technologies: ['Python', 'TensorFlow', 'Azure', 'React'],
      image: '/api/placeholder/400/250',
      status: 'In Progress'
    },
    {
      title: 'DevSecOps Pipeline',
      description: 'Automated CI/CD pipeline with security integration',
      technologies: ['GitLab CI/CD', 'Jenkins', 'Ansible', 'ArgoCD'],
      image: '/api/placeholder/400/250',
      status: 'Completed'
    },
    {
      title: 'IoT Data Platform',
      description: 'Real-time IoT data processing and visualization platform',
      technologies: ['Python', 'Grafana', 'InfluxDB', 'Docker'],
      image: '/api/placeholder/400/250',
      status: 'Completed'
    },
    {
      title: 'Microservices Architecture',
      description: 'Containerized microservices for large-scale applications',
      technologies: ['Kubernetes', 'Harbor', 'Rancher', 'Prometheus'],
      image: '/api/placeholder/400/250',
      status: 'Ongoing'
    },
    {
      title: 'GenAI Chatbot Platform',
      description: 'Conversational AI platform with natural language understanding',
      technologies: ['LangChain', 'OpenAI', 'AWS Bedrock', 'Python'],
      image: '/api/placeholder/400/250',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-600">Showcase of my recent work and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card card-hover">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[#E91E63] text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in collaborating on a project?
          </p>
          <button className="btn-secondary">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;