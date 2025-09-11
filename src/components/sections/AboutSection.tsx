export default function AboutSection() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '3', label: 'Cloud Platforms' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="section bg-white/5 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">ABOUT ME</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Personal Profile Section */}
          <div className="lg:col-span-1">
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Profile</h3>
              
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <img 
                  src="https://static.wixstatic.com/media/9d2000_f4e1e2c7b4e546b1974d986cfc8d7203~mv2.png"
                  alt="Abhik Ghosh"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* Social Media Links */}
              <div className="flex justify-center gap-4 mb-6">
                <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" 
                   className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-white text-sm font-bold">in</span>
                </a>
                <a href="https://www.xing.com/profile/Abhik_Ghosh" 
                   className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-white text-sm font-bold">X</span>
                </a>
                <a href="https://www.credly.com/users/abhik-ghosh.941f4a38" 
                   className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                  <span className="text-white text-sm font-bold">C</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Cloud Platform Logos */}
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg">AWS</span>
                  </div>
                  <p className="text-sm text-gray-400">Amazon Web Services</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg">Azure</span>
                  </div>
                  <p className="text-sm text-gray-400">Microsoft Azure</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg">GCP</span>
                  </div>
                  <p className="text-sm text-gray-400">Google Cloud</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg">K8s</span>
                  </div>
                  <p className="text-sm text-gray-400">Kubernetes</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="card">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                With over 5 years of experience in cloud architecture and digital transformation, 
                I specialize in designing and implementing scalable cloud solutions that drive business success. 
                My expertise spans across major cloud platforms including AWS, Azure, and GCP.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                With several years of experience in Operation, Incident Management, Software Development, 
                Cloud Services/Hyperscalar (AWS, Azure, GCP), Kubernetes, Containerization, Microservices, 
                DevSecOps, Backend, and Machine Learning, I'm ready to tackle your most complex challenges. 
                My certifications in AWS, Azure, GCP, Terraform, GenAI, Machine learning and Kubernetes 
                underscore my expertise.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Previously, I was involved in building digital infrastructure for Uniklinikum Augsburg, 
                a large academic hospital in Germany. I leveraged my expertise in AWS, Azure, DevSecOps, 
                microservices, and web development to create scalable, secure, and efficient systems that 
                support clinical research and data integration.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                I also worked on IoT and ML projects for the automation and energy sectors, using technologies 
                such as Python, Django, Node.js, TensorFlow, and Grafana. I am passionate about learning new 
                skills and exploring new domains, and I am always eager to collaborate with diverse teams and stakeholders.
              </p>
              
              {/* CTA Button */}
              <div className="text-center">
                <a href="/certificates" 
                   className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl text-white inline-block">
                  Schedule an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
