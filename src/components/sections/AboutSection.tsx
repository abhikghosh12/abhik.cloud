export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">ABOUT ME</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Cloud Platform Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-orange-500 rounded-lg p-3 text-center">
              <span className="text-white font-bold">AWS</span>
            </div>
            <div className="bg-blue-500 rounded-lg p-3 text-center">
              <span className="text-white font-bold">Azure</span>
            </div>
            <div className="bg-red-500 rounded-lg p-3 text-center">
              <span className="text-white font-bold">GCP</span>
            </div>
            <div className="bg-purple-500 rounded-lg p-3 text-center">
              <span className="text-white font-bold">K8s</span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <p className="text-white/90 leading-relaxed mb-4">
              With over 5 years of experience in cloud architecture and digital transformation, 
              I specialize in designing and implementing scalable cloud solutions that drive business success.
            </p>
            
            <p className="text-white/80 leading-relaxed mb-4">
              With several years of experience in Operation, Incident Management, Software Development, 
              Cloud Services (AWS, Azure, GCP), Kubernetes, Containerization, Microservices, 
              DevSecOps, Backend, and Machine Learning, I'm ready to tackle your most complex challenges.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              Previously, I was involved in building digital infrastructure for Uniklinikum Augsburg, 
              a large academic hospital in Germany. I leveraged my expertise in AWS, Azure, DevSecOps, 
              microservices, and web development to create scalable, secure, and efficient systems.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">5+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">3</div>
              <div className="text-white/80 text-sm">Cloud Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-white/80 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
