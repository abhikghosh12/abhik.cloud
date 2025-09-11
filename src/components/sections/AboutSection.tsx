import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abhik-ghosh-m-sc-61539425/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      className: 'linkedin'
    },
    {
      name: 'Xing',
      url: 'https://www.xing.com/profile/Abhik_Ghosh?sc_o=mxb_p',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.284.52 4.56 8.668 4.56 8.668.183.328.397.595.957.595h4.283c.609 0 .776-.407.617-.771 0 0-4.52-8.585-4.56-8.688 0 0 7.644-13.632 7.693-13.73.164-.403-.056-.75-.573-.75h-4.348zm-9.367 6.463c-.523 0-.79.398-.602.778 0 0 2.25 4.05 2.25 4.05L8.109 15.36c-.187.38.056.747.603.747h4.348c.548 0 .774-.406.611-.771 0 0-2.268-4.048-2.284-4.08L15.685 7.24c.187-.38-.056-.777-.603-.777H9.821z"/>
        </svg>
      ),
      className: 'xing'
    },
    {
      name: 'Credly',
      url: 'https://www.credly.com/users/abhik-ghosh.941f4a38',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 3.6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
        </svg>
      ),
      className: 'credly'
    }
  ];

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
          {/* Profile Image and Social Links */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <img 
                src="/api/placeholder/300/300" 
                alt="Abhik Ghosh" 
                className="profile-image mx-auto mb-6"
              />
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${social.className}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
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