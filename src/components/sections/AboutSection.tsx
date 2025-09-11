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
          <h2 className="heading-2 text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="card">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                I'm a passionate Cloud Architect with 5+ years of experience in designing and implementing 
                scalable cloud solutions. Currently working at Capgemini, I specialize in DevSecOps, 
                AI/ML, and cloud transformation across AWS, Azure, and GCP platforms.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                My expertise spans from infrastructure automation to machine learning deployment, 
                helping organizations modernize their technology stack and accelerate digital transformation.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
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