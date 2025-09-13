import React from 'react';

const ValuePropositionSection: React.FC = () => {
  const services = [
    {
      title: 'Cloud Migration & Modernization',
      description: 'Legacy system transformation with minimal downtime',
      outcomes: ['40% cost reduction', '99.9% uptime', '3x faster deployment'],
      icon: '🚀'
    },
    {
      title: 'DevSecOps Implementation',
      description: 'Automated security throughout development lifecycle',
      outcomes: ['Zero security incidents', '80% faster releases', 'Compliance automation'],
      icon: '🔒'
    },
    {
      title: 'AI/ML Platform Development',
      description: 'Scalable ML infrastructure with automated pipelines',
      outcomes: ['Real-time insights', '10x data processing', 'Automated model deployment'],
      icon: '🤖'
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Vendor-neutral architecture for maximum flexibility',
      outcomes: ['Risk mitigation', 'Cost optimization', 'Performance scaling'],
      icon: '☁️'
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Service Excellence That Delivers Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cloud solutions designed to transform your business operations 
            and accelerate growth through proven methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg card-hover">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#E91E63] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Outcomes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.outcomes.map((outcome, idx) => (
                        <span key={idx} className="bg-[#9C27B0] px-3 py-1 rounded-full text-sm">
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Performance Guarantee</h3>
          <p className="text-lg mb-6">
            Every architecture solution comes with measurable performance metrics 
            and a 30-day optimization guarantee.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">30 Days</div>
              <div className="text-pink-100">Performance optimization period</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-pink-100">Post-implementation support</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-pink-100">Client satisfaction commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;