export default function AppointmentPage() {
  const socialLinks = [
    { name: 'Mobile', icon: '📱', url: 'tel:+4917665979446' },
    { name: 'Email', icon: '📧', url: 'mailto:abhikghosh@outlook.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/abhik-ghosh-msc/' },
    { name: 'Xing', icon: '🔗', url: '#' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/abhikghosh12' },
    { name: 'Twitter', icon: '🐦', url: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Book an Appointment
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-8 text-center">Abhik Ghosh</h2>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-lg font-medium">Morellstraße 6</p>
                  <p className="text-lg font-medium">86159 Augsburg</p>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Skype ID:</span>
                      <span className="text-blue-400">abhik.tukai</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Email:</span>
                      <a href="mailto:abhikghosh@outlook.com" className="text-blue-400 hover:text-blue-300">
                        abhikghosh@outlook.com
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Mobile:</span>
                      <a href="tel:+4917665979446" className="text-blue-400 hover:text-blue-300">
                        (+49) 017665979446
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-semibold mb-4 text-center">Connect with me:</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        className="flex flex-col items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <span className="text-2xl mb-1">{link.icon}</span>
                        <span className="text-xs">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          
            {/* Calendly Integration */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 text-center">Schedule a Meeting</h2>
              
              {/* Calendly Embed */}
              <div className="bg-white rounded-lg p-4 mb-6">
                <iframe 
                  src="https://calendly.com/abhikghosh87" 
                  width="100%" 
                  height="600"
                  frameBorder="0"
                  title="Schedule Appointment"
                  className="rounded"
                ></iframe>
              </div>
              
              <div className="text-center text-sm text-gray-400">
                <p>Powered by: Calendly Connector</p>
              </div>
            </div>
          
          </div>
          
          {/* Quick Contact Options */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Prefer Direct Contact?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:abhikghosh@outlook.com"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                📧 Send Email
              </a>
              <a 
                href="tel:+4917665979446"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                📱 Call Now
              </a>
              <a 
                href="https://www.linkedin.com/in/abhik-ghosh-msc/"
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                💼 LinkedIn
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}