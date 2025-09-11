import React from 'react';
import { Link } from 'react-router-dom';

const CertificatesSection: React.FC = () => {
  const certificates = [
    { name: 'AWS Certified Solutions Architect', category: 'Cloud Architecture' },
    { name: 'Azure Solutions Architect Expert', category: 'Cloud Architecture' },
    { name: 'Google Cloud Professional', category: 'Cloud Architecture' },
    { name: 'Kubernetes Certified', category: 'Container Orchestration' },
    { name: 'Terraform Associate', category: 'Infrastructure as Code' },
    { name: 'Docker Certified', category: 'Containerization' },
    { name: 'Machine Learning', category: 'AI/ML' },
    { name: 'DevSecOps', category: 'Security' },
    { name: 'Python Developer', category: 'Programming' },
    { name: 'Scrum Master', category: 'Project Management' },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
          <p className="text-lg text-gray-600">Professional Certifications and Achievements</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#9C27B0] text-white p-4 rounded-lg text-center hover:bg-[#7B1FA2] transition-colors duration-300 cursor-pointer"
            >
              <h3 className="font-medium text-sm mb-2">{cert.name}</h3>
              <p className="text-xs opacity-80">{cert.category}</p>
            </div>
          ))}
        </div>

        {/* Credly Badge Display */}
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/api/placeholder/200/80" 
              alt="Credly Logo" 
              className="mx-auto mb-4"
            />
          </div>
          
          <Link
            to="/certificates"
            className="btn-secondary inline-block"
          >
            Contact me!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;