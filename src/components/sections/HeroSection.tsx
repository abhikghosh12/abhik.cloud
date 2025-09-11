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
                    <img 
                      src="https://static.wixstatic.com/media/9d2000_f4e1e2c7b4e546b1974d986cfc8d7203~mv2.png"
                      alt="Abhik Ghosh"
                      className="w-full h-full rounded-full object-cover"
                    />
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
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
                Cloud Architect & Technical Lead at Capgemini with expertise in AWS, Azure, and GCP. 
                Specialized in DevSecOps, AI/ML, and modern cloud transformation.
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

            {/* Animated Background Element */}
            <div className="flex-1 flex justify-center lg:justify-end relative">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
