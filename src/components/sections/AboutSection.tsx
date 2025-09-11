export default function AboutSection() {
  const platforms = [
    { name: 'AWS', label: 'Amazon Web Services', color: 'bg-[#FF9900]' },
    { name: 'Azure', label: 'Microsoft Azure', color: 'bg-[#0078D4]' },
    { name: 'GCP', label: 'Google Cloud', color: 'bg-[#4285F4]' },
    { name: 'K8s', label: 'Kubernetes', color: 'bg-[#326CE5]' }
  ];

  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '3', label: 'Cloud Platforms' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-[#0A192F]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[#CCD6F6] text-3xl font-bold">
            About Me
          </h2>
          <div className="flex-1 h-px bg-[#233554]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#8892B0] mb-4">
                With over 5 years of experience in cloud architecture and digital transformation, 
                I specialize in designing and implementing scalable cloud solutions that drive business success. 
                My expertise spans across major cloud platforms including AWS, Azure, and GCP.
              </p>
              
              <p className="text-[#8892B0] mb-4">
                At Capgemini, I leverage my expertise in DevSecOps, AI/ML, and cloud transformation to help 
                organizations modernize their technology stack. My certifications in AWS, Azure, GCP, 
                Terraform, GenAI, and Kubernetes underscore my commitment to staying at the forefront 
                of cloud technologies.
              </p>
              
              <p className="text-[#8892B0] mb-8">
                Previously, I contributed to building digital infrastructure for Uniklinikum Augsburg, 
                where I implemented scalable, secure systems supporting clinical research and data integration. 
                I also worked on IoT and ML projects in the automation and energy sectors.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#64FFDA] mb-2">
                    {item.number}
                  </div>
                  <div className="text-[#8892B0] text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Platform Grid */}
            <div className="grid grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="group">
                  <div className={`relative rounded-lg overflow-hidden ${platform.color} aspect-square`}>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <div className="text-3xl font-bold mb-2">{platform.name}</div>
                      <div className="text-sm opacity-80">{platform.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="bg-[#112240] rounded-lg p-6">
              <h3 className="text-[#CCD6F6] text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'Docker', 'Terraform', 'DevSecOps', 'CI/CD', 'GitLab',
                  'Machine Learning', 'Microservices', 'Node.js', 'React'
                ].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#233554] text-[#64FFDA] rounded-full text-sm hover:bg-[#64FFDA]/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a 
                href="/certificates"
                className="inline-block px-8 py-4 border-2 border-[#64FFDA] text-[#64FFDA] rounded-md hover:bg-[#64FFDA]/10 transition-all duration-300"
              >
                View My Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
