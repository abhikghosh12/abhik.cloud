import React from 'react';

const CertificatesPage: React.FC = () => {
  const certificates = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: '/api/placeholder/150/150',
      category: 'Cloud Architecture',
      credlyUrl: 'https://www.credly.com/users/abhik-ghosh.941f4a38'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h1>
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredCertificates.map((cert, index) => (
            <div key={index} className="card card-hover text-center">
              <img 
                src={cert.image} 
                alt={cert.name}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              
              <span className="certificate-badge mb-4">
                {cert.category}
              </span>
              
              <div className="mt-4">
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  View Badge
                </a>
              </div>
            </div>
          ))}
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
          <button className="btn-secondary">
            Contact me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;