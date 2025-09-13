import React from 'react';

const ClientTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      challenge: "Legacy infrastructure costing $50K monthly with frequent downtime",
      solution: "Designed multi-cloud architecture with automated scaling and monitoring",
      results: "35% cost reduction, 99.9% uptime achieved",
      quote: "Abhik's cloud architecture expertise transformed our operations. The cost savings and reliability improvements exceeded our expectations.",
      author: "Sarah Johnson",
      position: "VP of Technology",
      company: "MedTech Solutions",
      industry: "Healthcare",
      metrics: ["$18K monthly savings", "99.9% uptime", "3 months implementation"]
    },
    {
      challenge: "Slow deployment cycles taking 3-4 weeks per release",
      solution: "Implemented DevSecOps pipeline with Kubernetes and automated testing",
      results: "Deployment time reduced to 2 hours with zero security incidents",
      quote: "The DevSecOps transformation delivered by Abhik revolutionized our development process while maintaining the highest security standards.",
      author: "Michael Chen",
      position: "CTO",
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      metrics: ["2 hour deployments", "Zero security incidents", "200% productivity increase"]
    },
    {
      challenge: "Data processing infrastructure unable to scale for growing analytics needs",
      solution: "Built serverless data pipeline with AI/ML capabilities on AWS",
      results: "10x data processing capacity with 60% cost reduction",
      quote: "Abhik's AI/ML expertise helped us build a scalable analytics platform that drives our business intelligence initiatives.",
      author: "Dr. Emma Rodriguez",
      position: "Director of Data Science",
      company: "Research Institute",
      industry: "Academic",
      metrics: ["10x processing capacity", "60% cost reduction", "Real-time analytics"]
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Quantified results from enterprise cloud transformations
          </p>
        </div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-8 card-hover">
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Challenge-Solution-Results */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-red-600 uppercase mb-2">Challenge</h4>
                    <p className="text-gray-700">{testimonial.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-blue-600 uppercase mb-2">Solution</h4>
                    <p className="text-gray-700">{testimonial.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-green-600 uppercase mb-2">Results</h4>
                    <p className="text-gray-700 font-semibold">{testimonial.results}</p>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {testimonial.metrics.map((metric, idx) => (
                      <span key={idx} className="bg-[#E91E63] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="lg:pl-8">
                  <blockquote className="text-xl text-gray-800 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <p className="text-sm text-[#E91E63] font-medium">
                          {testimonial.company} • {testimonial.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to achieve similar results?</p>
          <a 
            href="/appointment" 
            className="btn-secondary inline-block btn-animate"
          >
            Schedule Your Cloud Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;