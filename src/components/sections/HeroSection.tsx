export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Profile and Info */}
            <div className="flex-1 text-center lg:text-left">
              {/* Professional Profile Photo */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-6xl font-bold text-gray-600">
                      AG
                    </div>
                  </div>
                  {/* Social Media Links */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                    <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" 
                       className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <span className="text-white text-sm font-bold">in</span>
                    </a>
                    <a href="https://www.xing.com/profile/Abhik_Ghosh" 
                       className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                      <span className="text-white text-sm font-bold">X</span>
                    </a>
                    <a href="https://www.credly.com/users/abhik-ghosh.941f4a38" 
                       className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                      <span className="text-white text-sm font-bold">C</span>
                    </a>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ABHIK GHOSH
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-6">Cloud Architect</p>
              
              {/* Key Skills Tags */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                {['DevSecOps', 'Artificial Intelligence', 'Machine Learning', 'Cyber Security', 'FinOps', 'Cloud Services', 'Microservices', 'Kubernetes'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
                As a Cloud Architect at Capgemini, I design and shape the future with innovative cloud solutions, 
                accelerating Cloud transformation through FinOps, Cyber Security, Automation and AI/ML. 
                This allows clients to achieve their goals and optimize their performance.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="mailto:abhikghosh87@gmail.com" 
                   className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl text-center">
                  📧 Contact me !
                </a>
                <a href="/certificates" 
                   className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl text-center">
                  📜 Schedule an appointment
                </a>
              </div>
            </div>

            {/* Right side - Cloud Platform Logos */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-lg">AWS</span>
                  </div>
                  <p className="text-sm text-gray-400">Amazon Web Services</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-lg">Azure</span>
                  </div>
                  <p className="text-sm text-gray-400">Microsoft Azure</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-lg">GCP</span>
                  </div>
                  <p className="text-sm text-gray-400">Google Cloud</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-lg">K8s</span>
                  </div>
                  <p className="text-sm text-gray-400">Kubernetes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
