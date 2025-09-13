import React from 'react';

const CertificatesPage: React.FC = () => {
  const documents = [
    {
      name: 'Curriculum vitae',
      type: 'PDF',
      size: '2.1 MB',
      icon: '📄',
      description: 'Complete professional resume with detailed experience',
      downloadUrl: '/Certificates/cv.pdf'
    },
    {
      name: 'Cover letter',
      type: 'PDF',
      size: '1.2 MB',
      icon: '📝',
      description: 'Professional cover letter template',
      downloadUrl: '/Certificates/cover-letter.pdf'
    },
    {
      name: 'M.Sc. Certificates',
      type: 'PDF',
      size: '3.5 MB',
      icon: '🎓',
      description: 'Master of Science degree certificates',
      downloadUrl: '/Certificates/msc-certificates.pdf'
    },
    {
      name: 'Reference letter',
      type: 'PDF',
      size: '2.8 MB',
      icon: '📋',
      description: 'Professional reference letters from employers',
      downloadUrl: '/Certificates/reference-letter.pdf'
    },
    {
      name: 'Certificates Kubernetes',
      type: 'PDF',
      size: '2.2 MB',
      icon: '☸️',
      description: 'Kubernetes certification documents',
      downloadUrl: '/Certificates/kubernetes-certificates.pdf'
    },
    {
      name: 'Certificates AWS',
      type: 'PDF',
      size: '3.1 MB',
      icon: '☁️',
      description: 'Amazon Web Services certification documents',
      downloadUrl: '/Certificates/aws-certificates.pdf'
    },
    {
      name: 'Certificates Terraform',
      type: 'PDF',
      size: '1.8 MB',
      icon: '🏗️',
      description: 'Terraform Infrastructure as Code certifications',
      downloadUrl: '/Certificates/terraform-certificates.pdf'
    },
    {
      name: 'Certificates Azure',
      type: 'PDF',
      size: '2.5 MB',
      icon: '🔷',
      description: 'Microsoft Azure certification documents',
      downloadUrl: '/Certificates/azure-certificates.pdf'
    },
    {
      name: 'Excellance Award',
      type: 'PDF',
      size: '1.5 MB',
      icon: '🏆',
      description: 'Professional excellence and achievement awards',
      downloadUrl: '/Certificates/excellence-award.pdf'
    }
  ];

  const certificates = [
    {
      name: 'Kubernetes Certifications',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      image: '/api/placeholder/150/150',
      category: 'Container Orchestration',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38',
      downloadUrl: '#'
    },
    {
      name: 'AWS Certifications',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: '/api/placeholder/150/150',
      category: 'Cloud Architecture',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38',
      downloadUrl: '#'
    },
    {
      name: 'Terraform Certifications',
      issuer: 'HashiCorp',
      date: '2022',
      image: '/api/placeholder/150/150',
      category: 'Infrastructure as Code',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38',
      downloadUrl: '#'
    },
    {
      name: 'Azure Certifications',
      issuer: 'Microsoft',
      date: '2023',
      image: '/api/placeholder/150/150',
      category: 'Cloud Architecture',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38',
      downloadUrl: '#'
    },
    {
      name: 'Azure Solutions Architect Expert',
      issuer: 'Microsoft',
      date: '2023',
      image: '/api/placeholder/150/150',
      category: 'Cloud Architecture',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2022',
      image: '/api/placeholder/150/150',
      category: 'Cloud Architecture',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      image: '/api/placeholder/150/150',
      category: 'Container Orchestration',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2022',
      image: '/api/placeholder/150/150',
      category: 'Infrastructure as Code',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker',
      date: '2022',
      image: '/api/placeholder/150/150',
      category: 'Containerization',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'Machine Learning Engineer',
      issuer: 'Google Cloud',
      date: '2023',
      image: '/api/placeholder/150/150',
      category: 'AI/ML',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'DevSecOps Foundation',
      issuer: 'DevOps Institute',
      date: '2022',
      image: '/api/placeholder/150/150',
      category: 'Security',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'Python Developer',
      issuer: 'Python Institute',
      date: '2021',
      image: '/api/placeholder/150/150',
      category: 'Programming',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'Certified ScrumMaster',
      issuer: 'Scrum Alliance',
      date: '2021',
      image: '/api/placeholder/150/150',
      category: 'Project Management',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'AWS Security Specialty',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: '/api/placeholder/150/150',
      category: 'Security',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    },
    {
      name: 'Azure DevOps Engineer Expert',
      issuer: 'Microsoft',
      date: '2022',
      image: '/api/placeholder/150/150',
      category: 'DevOps',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
    }
  ];

  const categories = ['All', 'Cloud Architecture', 'Container Orchestration', 'Infrastructure as Code', 'AI/ML', 'Security', 'Programming', 'DevOps', 'Project Management'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Abhik Ghosh</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
              <i className="fab fa-xing fa-2x"></i>
            </a>
            <a href="tel:+4917665979446" className="text-purple-600 hover:text-purple-700 transition-colors">
              <i className="fas fa-mobile-alt fa-2x"></i>
            </a>
            <a href="https://wa.me/4917665979446" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-colors">
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            <a href="mailto:abhikghosh@outlook.com" className="text-red-500 hover:text-red-600 transition-colors">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
            <a href="https://www.credly.com/users/abhik-ghosh" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition-colors">
              <i className="fas fa-certificate fa-2x"></i>
            </a>
            <a href="https://medium.com/@abhikghosh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors">
              <i className="fab fa-medium fa-2x"></i>
            </a>
            <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-colors">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <span className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">English (EN)</span>
            <span className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">German (DE)</span>
          </div>
          <p className="text-lg text-gray-600">Professional Certifications and Digital Badges</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#9C27B0] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Documents Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{doc.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{doc.type} • {doc.size}</span>
                      <a
                        href={doc.downloadUrl}
                        download
                        className="inline-flex items-center px-3 py-1 bg-[#E91E63] text-white text-sm rounded-full hover:bg-[#AD1457] transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Downloads Button */}
        <div className="text-center mb-16">
          <button className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            All Downloads
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCertificates.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-24 h-24 object-contain mx-auto mb-4"
                />
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                
                <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full mb-4">
                  {cert.category}
                </span>
                
                <div className="space-y-2">
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#E91E63] text-white py-2 px-4 rounded-lg text-sm hover:bg-[#AD1457] transition-colors"
                  >
                    View Badge
                  </a>
                  <a
                    href={cert.downloadUrl}
                    className="block w-full border border-[#E91E63] text-[#E91E63] py-2 px-4 rounded-lg text-sm hover:bg-pink-50 transition-colors"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credly Integration Section */}
        <div className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] rounded-lg p-8 text-white text-center mb-16">
          <div className="mb-6">
            <img 
              src="/api/placeholder/200/80" 
              alt="Credly Logo" 
              className="mx-auto mb-4 brightness-0 invert"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Verify My Credentials</h2>
          <p className="text-lg mb-6 opacity-90">
            All my certifications are verified and can be viewed on my Credly profile
          </p>
          
          <a
            href="https://www.credly.com/users/abhik-ghosh.941f4a38"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#E91E63] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            View Credly Profile
          </a>
        </div>

        {/* Skills Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          <div>
            <div className="text-3xl font-bold text-[#E91E63] mb-2">15+</div>
            <div className="text-gray-600">Active Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#E91E63] mb-2">5</div>
            <div className="text-gray-600">Cloud Providers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#E91E63] mb-2">8</div>
            <div className="text-gray-600">Technology Areas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#E91E63] mb-2">100%</div>
            <div className="text-gray-600">Verified Badges</div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Continuous Learning Journey</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Currently Pursuing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>AWS Solutions Architect Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Kubernetes Security Specialist</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Planning to Achieve</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span>Google Cloud Security Engineer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span>AI Engineering Certification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need verification of my credentials or want to discuss my expertise?
          </p>
          <a href="/appointment" className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Contact me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;