export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ABHIK GHOSH
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-4">Cloud Architect</p>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Cloud Architect & Technical Lead at Capgemini with expertise in AWS, Azure, and GCP. 
            Specialized in DevSecOps, AI/ML, and modern cloud transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:abhikghosh87@gmail.com" 
               className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              📧 Contact me !
            </a>
            <a href="/certificates" 
               className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              📜 Schedule an appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
