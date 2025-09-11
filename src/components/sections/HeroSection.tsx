export default function HeroSection() {
  const skills = [
    'DevSecOps', 'Artificial Intelligence', 'Machine learning', 'Cyber security',
    'FinOps', 'Cloud services', 'Microsevices', 'Kubernetes', 'Azure', 'AWS',
    'GCP', 'Terraform', 'GitLab/GitHub', 'Jenkins', 'Ansible', 'Docker/Podman', 'Python'
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/abhikghosh', icon: '💼' },
    { name: 'Xing', url: '#', icon: '🔗' },
    { name: 'Mobile', url: 'tel:+4917665979446', icon: '📱' },
    { name: 'WhatsApp', url: '#', icon: '💬' },
    { name: 'Email', url: 'mailto:abhikghosh@outlook.com', icon: '📧' },
    { name: 'Credly', url: '#', icon: '🏆' },
    { name: 'Medium', url: '#', icon: '📝' },
    { name: 'GitHub', url: 'https://github.com/abhikghosh12', icon: '💻' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with social links */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-2">ABHIK GHOSH</h1>
            
            {/* Language Toggle */}
            <div className="mb-8">
              <span className="text-sm text-gray-400 mr-4">English</span>
              <span className="bg-blue-600 px-3 py-1 rounded text-sm mr-2">EN</span>
              <span className="text-sm text-gray-400 mr-4">German</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-sm">DE</span>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 border border-gray-600 rounded p-3 text-center hover:bg-gray-700 transition-colors">
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="text-center">
            <a href="/appointment" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block">
              Contact me !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}