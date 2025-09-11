export default function HeroSection() {
  const skills = [
    'Cloud Architect', 'DevSecOps', 'Artificial Intelligence', 'Machine Learning',
    'Cyber Security', 'FinOps', 'Cloud Services', 'Microservices', 'Kubernetes',
    'Azure', 'AWS', 'GCP', 'Terraform', 'GitLab/GitHub', 'Jenkins', 'Ansible',
    'Docker/Podman', 'Python'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ABHIK GHOSH
            </h1>
            <p className="text-2xl text-gray-300 mb-8">Cloud Architect | AI/ML Expert | DevSecOps Specialist</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Designing innovative cloud solutions at Capgemini, accelerating digital transformation through FinOps, Cyber Security, Automation and AI/ML
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">Expertise & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">3</div>
              <div className="text-gray-400">Cloud Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:abhikghosh@outlook.com" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl">
                📧 Email Me
              </a>
              <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}