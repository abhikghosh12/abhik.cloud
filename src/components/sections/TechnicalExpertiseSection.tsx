import React from 'react';

const TechnicalExpertiseSection: React.FC = () => {
  const expertiseAreas = {
    'AWS Specialist': {
      technologies: ['EC2', 'Lambda', 'RDS', 'CloudFormation', 'EKS', 'S3', 'API Gateway'],
      projects: ['Serverless architecture for 10M+ requests/day', 'Multi-region disaster recovery setup'],
      icon: '☁️'
    },
    'Azure Expert': {
      technologies: ['AKS', 'Functions', 'CosmosDB', 'ARM Templates', 'DevOps', 'AI Services'],
      projects: ['Enterprise AKS cluster for 5000+ users', 'AI/ML pipeline automation'],
      icon: '🔷'
    },
    'GCP Professional': {
      technologies: ['GKE', 'Cloud Functions', 'BigQuery', 'Terraform', 'Vertex AI'],
      projects: ['Data analytics platform processing 50TB/day', 'ML model deployment pipeline'],
      icon: '🔶'
    },
    'DevSecOps Expert': {
      technologies: ['Kubernetes', 'Docker', 'Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible'],
      projects: ['Zero-downtime deployment pipeline', 'Automated security scanning integration'],
      icon: '🔒'
    }
  };

  const architectureDiagrams = [
    {
      title: 'Multi-Cloud Architecture',
      description: 'High-availability setup across AWS, Azure, and GCP',
      complexity: 'Enterprise',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Serverless Data Pipeline',
      description: 'Real-time analytics processing 1M+ events/hour',
      complexity: 'Advanced',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Kubernetes Security Framework',
      description: 'Zero-trust security model with automated compliance',
      complexity: 'Expert',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Architecture Expertise
          </h2>
          <p className="text-lg text-gray-600">
            Proven solutions with quantified business impact
          </p>
        </div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.entries(expertiseAreas).map(([area, details], index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg card-hover">
              <div className="text-4xl mb-4">{details.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{area}</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {details.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-[#9C27B0] text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Recent Projects:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {details.projects.map((project, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#E91E63] mr-2">•</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Portfolio */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Architecture Portfolio
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {architectureDiagrams.map((diagram, index) => (
              <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-lg card-hover">
                <img 
                  src={diagram.image} 
                  alt={diagram.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900">{diagram.title}</h4>
                    <span className="bg-[#E91E63] text-white px-2 py-1 rounded text-xs">
                      {diagram.complexity}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{diagram.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Specialization */}
        <div className="mt-16 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Industry Specializations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Healthcare & Life Sciences</h4>
              <p className="text-pink-100 text-sm">HIPAA compliance, data security, clinical research platforms</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Financial Services</h4>
              <p className="text-pink-100 text-sm">PCI DSS, SOX compliance, high-frequency trading systems</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Manufacturing & IoT</h4>
              <p className="text-pink-100 text-sm">Industrial automation, predictive maintenance, edge computing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertiseSection;