export default function ContactSection() {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'abhikghosh87@gmail.com',
      link: 'mailto:abhikghosh87@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'abhik-ghosh-msc',
      link: 'https://www.linkedin.com/in/abhik-ghosh-msc/'
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'abhik.cloud',
      link: 'https://abhik.cloud'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Germany',
      link: null
    }
  ];

  return (
    <section id="contact" className="section bg-white/5 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Ready to transform your cloud infrastructure? Let's discuss how we can work together 
                  on your next cloud transformation project.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-xl">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-white hover:text-primary-400 transition-colors duration-200 font-medium">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full btn btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}