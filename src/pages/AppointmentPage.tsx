export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">SCHEDULE AN APPOINTMENT</h1>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">👤</span>
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="text-gray-400">Abhik Ghosh</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-400">Morellstraße 6, 86159 Augsburg</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-2xl mr-4">📱</span>
                <div>
                  <p className="font-semibold">Mobile</p>
                  <a href="tel:+4917665979446" className="text-blue-400 hover:text-blue-300">
                    (+49) 017665979446
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:abhikghosh@outlook.com" className="text-blue-400 hover:text-blue-300">
                    abhikghosh@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-2xl mr-4">💬</span>
                <div>
                  <p className="font-semibold">Skype ID</p>
                  <p className="text-gray-400">abhik.tukai</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Send a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Meeting subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea 
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="mailto:abhikghosh@outlook.com"
              className="bg-green-600 hover:bg-green-700 py-3 px-4 rounded-lg text-center font-semibold transition-colors"
            >
              📧 Email Me
            </a>
            <a 
              href="tel:+4917665979446"
              className="bg-blue-600 hover:bg-blue-700 py-3 px-4 rounded-lg text-center font-semibold transition-colors"
            >
              📱 Call Me
            </a>
            <a 
              href="https://linkedin.com/in/abhikghosh"
              className="bg-indigo-600 hover:bg-indigo-700 py-3 px-4 rounded-lg text-center font-semibold transition-colors"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}