import React from 'react';

const SocialProofSection: React.FC = () => {
  const metrics = [
    { number: '50+', label: 'Cloud Transformations', description: 'Successful migrations completed' },
    { number: '40%', label: 'Average Cost Reduction', description: 'Achieved for enterprise clients' },
    { number: '99.9%', label: 'Uptime Delivered', description: 'Across all managed infrastructure' },
    { number: '5+', label: 'Years Experience', description: 'In cloud architecture & DevSecOps' }
  ];

  const clientTypes = [
    'Fortune 500 Healthcare',
    'Financial Services',
    'Manufacturing',
    'Academic Institutions',
    'Government Agencies'
  ];

  return (
    <section className="bg-white py-16">
      <div className="container">
        {/* Quantified results */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#E91E63] mb-2">{metric.number}</div>
              <h3 className="font-bold text-gray-900 mb-2">{metric.label}</h3>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Industry expertise */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Trusted by Enterprise Clients Across Industries
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {clientTypes.map((type, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
          
          {/* Capgemini credibility */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <div className="flex items-center justify-center space-x-4">
              <img src="/api/placeholder/150/60" alt="Capgemini Logo" className="h-12" />
              <div className="text-left">
                <p className="text-gray-900 font-semibold">Currently serving enterprise clients at</p>
                <p className="text-gray-600 text-sm">Global consulting & technology services leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;