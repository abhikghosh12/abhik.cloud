export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">ABOUT ME</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Personal Profile</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-48 h-48 bg-gray-700 rounded-lg mx-auto mb-4"></div>
                <div className="text-center">
                  <a href="https://linkedin.com/in/abhikghosh" className="text-blue-400 hover:text-blue-300 mr-4">LinkedIn</a>
                  <a href="https://credly.com" className="text-blue-400 hover:text-blue-300">Credly</a>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-300 leading-relaxed mb-6">
                  As a Cloud Architect at Capgemini, I design and shape the future with innovative cloud solutions, 
                  accelerating Cloud transformation through FinOps, Cyber Security, Automation and AI/ML. This allows 
                  clients to achieve their goals and optimize their performance.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  With several years of experience in Operation, Incident Management, Software Development, Cloud 
                  Services/Hyperscalar (AWS, Azure, GCP), Kubernetes, Containerization, Microservices, DevSecOps, 
                  Backend, and Machine Learning, I'm ready to tackle your most complex challenges. My certifications 
                  in AWS, Azure, GCP, Terraform, GenAI, Machine learning and Kubernetes underscore my expertise.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Previously, I was involved in building digital infrastructure for Uniklinikum Augsburg, a large 
                  academic hospital in Germany. I leveraged my expertise in AWS, Azure, DevSecOps, microservices, 
                  and web development to create scalable, secure, and efficient systems that support clinical research 
                  and data integration.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">
              Curious to see how I can transform your business? Explore my work at my website and let's connect!
            </p>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule an appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}