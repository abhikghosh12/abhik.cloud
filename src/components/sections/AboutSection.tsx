import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section section relative">
      {/* Pink Gradient Side Panels */}
      <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-[#E91E63] to-transparent"></div>
      <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#E91E63] to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ABOUT ME</h2>
          <p className="text-lg text-gray-600">Personal Profile</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Image - No Social Links */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <img 
                src="/api/placeholder/300/300" 
                alt="Abhik Ghosh" 
                className="profile-image mx-auto mb-6"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-800">
              <p className="mb-6">
                As a Cloud Architect at Capgemini, I design and shape the future with innovative cloud solutions, 
                accelerating Cloud transformation through FinOps, Cyber Security, Automation and AI/ML. This 
                allows clients to achieve their goals and optimize their performance.
              </p>

              <p className="mb-6">
                With several years of experience in Operation, Incident Management, Software Development, 
                Cloud Services/Hyperscalar (AWS, Azure, GCP), Kubernetes, Containerization, Microservices, 
                DevSecOps, Backend, and Machine Learning, I'm ready to tackle your most complex challenges. 
                My certifications in AWS, Azure, GCP, Terraform, GenAI, Machine learning and Kubernetes 
                underscore my expertise.
              </p>

              <p className="mb-8">
                Previously, I was involved in building digital infrastructure for Uniklinikum Augsburg, a large 
                academic hospital in Germany. I leveraged my expertise in AWS, Azure, DevSecOps, microservices, 
                and web development to create scalable, secure, and efficient systems that support clinical 
                research and data integration. I also worked on IoT and ML projects for the automation and 
                energy sectors, using technologies such as Python, Django, Node.js, TensorFlow, and Grafana. 
                I am passionate about learning new skills and exploring new domains, and I am always eager to 
                collaborate with diverse teams and stakeholders.
              </p>

              <p className="mb-8">
                Curious to see how I can transform your business? Explore my work at my website and let's connect!
              </p>

              <div className="text-center">
                <Link
                  to="/appointment"
                  className="btn-secondary inline-block"
                >
                  Schedule an appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;