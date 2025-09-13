import React from 'react';

const CertificationShowcase: React.FC = () => {
  const certifications = {
    professional: [
      {
        name: 'AWS Solutions Architect Professional',
        badge: '/api/placeholder/120/120',
        date: '2024',
        level: 'Professional'
      },
      {
        name: 'Azure Solutions Architect Expert',
        badge: '/api/placeholder/120/120',
        date: '2024',
        level: 'Expert'
      },
      {
        name: 'Google Cloud Professional Architect',
        badge: '/api/placeholder/120/120',
        date: '2023',
        level: 'Professional'
      }
    ],
    associate: [
      {
        name: 'AWS Developer Associate',
        badge: '/api/placeholder/100/100',
        date: '2023',
        level: 'Associate'
      },
      {
        name: 'Azure Administrator Associate',
        badge: '/api/placeholder/100/100',
        date: '2023',
        level: 'Associate'
      }
    ],
    specialty: [
      {
        name: 'Kubernetes CKA',
        badge: '/api/placeholder/100/100',
        date: '2024',
        level: 'Certified'
      },
      {
        name: 'Terraform Associate',
        badge: '/api/placeholder/100/100',
        date: '2023',
        level: 'Associate'
      },
      {
        name: 'Docker Certified Associate',
        badge: '/api/placeholder/100/100',
        date: '2023',
        level: 'Associate'
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proven Cloud Expertise
          </h2>
          <p className="text-lg text-gray-600">
            Current certifications demonstrating enterprise-level capabilities
          </p>
        </div>

        {/* Hierarchical certification display */}
        <div className="space-y-12">
          {/* Professional Level */}
          <div>
            <h3 className="text-xl font-bold text-[#E91E63] mb-6 text-center">
              Professional & Expert Level
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.professional.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center card-hover">
                  <img 
                    src={cert.badge} 
                    alt={cert.name}
                    className="w-24 h-24 mx-auto mb-4"
                  />
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{cert.level}</p>
                  <p className="text-xs text-[#E91E63] font-medium">Achieved {cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Associate Level */}
          <div>
            <h3 className="text-xl font-bold text-[#9C27B0] mb-6 text-center">
              Associate Level
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {certifications.associate.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center card-hover">
                  <img 
                    src={cert.badge} 
                    alt={cert.name}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{cert.level}</p>
                  <p className="text-xs text-[#9C27B0] font-medium">Achieved {cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialty Level */}
          <div>
            <h3 className="text-xl font-bold text-[#673AB7] mb-6 text-center">
              Specialty & Technology Specific
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.specialty.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center card-hover">
                  <img 
                    src={cert.badge} 
                    alt={cert.name}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{cert.level}</p>
                  <p className="text-xs text-[#673AB7] font-medium">Achieved {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust signal */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All certifications are current and verified through official vendor programs
          </p>
          <a 
            href="https://credly.com/users/abhik-ghosh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#E91E63] hover:text-[#AD1457] font-medium"
          >
            View Verified Badges on Credly →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationShowcase;