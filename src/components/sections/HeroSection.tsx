export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-70"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-[#CCD6F6] mb-6">
                Abhik Ghosh
              </h1>
              <p className="text-xl lg:text-2xl text-[#8892B0] mb-6">
                Cloud Architect | DevSecOps Expert | AI/ML Specialist
              </p>
            </div>

            <p className="text-lg text-[#8892B0] max-w-xl">
              Designing innovative cloud solutions at Capgemini, accelerating digital transformation through FinOps, 
              Cyber Security, Automation and AI/ML.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:abhikghosh87@gmail.com"
                className="px-8 py-4 border-2 border-[#64FFDA] text-[#64FFDA] rounded-md hover:bg-[#64FFDA]/10 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="/certificates"
                className="px-8 py-4 bg-[#64FFDA] text-[#0A192F] rounded-md hover:bg-[#64FFDA]/90 transition-all duration-300"
              >
                View Certificates
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-64 h-64 mx-auto">
              {/* Profile Frame */}
              <div className="absolute inset-0 border-2 border-[#64FFDA] rounded-md transform translate-x-4 translate-y-4"></div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-full h-full bg-[#0A192F] rounded-md overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/9d2000_f4e1e2c7b4e546b1974d986cfc8d7203~mv2.png"
                  alt="Abhik Ghosh"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
              <a 
                href="https://www.linkedin.com/in/abhik-ghosh-msc/"
                className="w-10 h-10 flex items-center justify-center text-[#64FFDA] hover:text-[#CCD6F6] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-mono text-sm">in</span>
              </a>
              <a 
                href="https://www.xing.com/profile/Abhik_Ghosh"
                className="w-10 h-10 flex items-center justify-center text-[#64FFDA] hover:text-[#CCD6F6] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-mono text-sm">X</span>
              </a>
              <a 
                href="https://www.credly.com/users/abhik-ghosh.941f4a38"
                className="w-10 h-10 flex items-center justify-center text-[#64FFDA] hover:text-[#CCD6F6] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-mono text-sm">C</span>
              </a>
              <div className="w-px h-24 bg-[#64FFDA] mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
