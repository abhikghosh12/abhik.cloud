import React from 'react';
import { Link } from 'react-router-dom';

const AIHeroSection: React.FC = () => {
  const skills = [
    'Cloud Architect',
    'DevSecOps',
    'Artificial Intelligence',
    'Machine learning',
    'Cyber security',
    'FinOps',
    'Cloud services',
    'Microservices',
    'Kubernetes',
    'Azure',
    'AWS',
    'GCP',
    'Terraform',
    'GitLab/GitHub',
    'Jenkins',
    'Ansible',
    'Docker/Podman',
    'Python'
  ];

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#673AB7]">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Pink Gradient Side Panels */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#E91E63] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#E91E63] to-transparent z-10"></div>

      <div className="container relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center text-white space-y-8">
          
          {/* Main Hero Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
              Cloud Architect
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              DevSecOps & AI/ML Expert
            </h2>
            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto">
              Specializing in cloud transformation, security, and innovative solutions at Capgemini
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Link 
              to="/appointment"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#E91E63] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
            <div>
              <Link 
                to="/projects"
                className="inline-block text-white hover:text-pink-200 underline text-lg"
              >
                View My Projects →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-6">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <span key={index} className="bg-[#9C27B0] text-white px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link 
              to="/appointment"
              className="bg-[#E91E63] text-white px-6 py-3 rounded-full font-medium hover:bg-[#AD1457] transition-colors inline-block"
            >
              Contact me!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHeroSection;