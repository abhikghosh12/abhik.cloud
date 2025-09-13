import experienceData from '../../data/experience.json';

interface Project {
  customer: string;
  title: string;
  achievements: string[];
}

interface GenAIExperience {
  title: string;
  achievements: string[];
  technologies: string[];
}

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type?: string;
  duration: string;
  description: string;
  department?: string;
  projects?: Project[];
  genai_experience?: GenAIExperience;
  key_skills?: Record<string, string>;
  technologies?: string[];
  achievements?: string[];
  thesis?: string;
}

export default function ExperienceSection() {
  const experiences = experienceData.experience;

  return (
    <section id="experience" className="section bg-white/5 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-white font-medium text-lg">{exp.company}</p>
                    {exp.department && <p className="text-gray-400">{exp.department}</p>}
                  </div>
                  <div className="text-right">
                    <span className="text-purple-400 font-semibold">{exp.duration}</span>
                    {exp.type && <p className="text-gray-400 text-sm">{exp.type}</p>}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                {/* Projects */}
                {exp.projects && (
                  <div className="mb-6">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="mb-6 bg-gray-800/50 p-4 rounded">
                        <h4 className="font-bold text-green-400 mb-2">Customer: {project.customer}</h4>
                        <h5 className="font-semibold text-white mb-3">{project.title}</h5>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, aIndex) => (
                            <li key={aIndex} className="flex items-start text-gray-300">
                              <span className="text-blue-400 mr-2">▪</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* GenAI Experience */}
                {exp.genai_experience && (
                  <div className="mb-6 bg-purple-900/30 p-4 rounded">
                    <h4 className="font-bold text-purple-400 mb-3">{exp.genai_experience.title}</h4>
                    <ul className="space-y-1 mb-3">
                      {exp.genai_experience.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start text-gray-300">
                          <span className="text-purple-400 mr-2">▪</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-400"><strong>Skills:</strong> {exp.genai_experience.technologies.join(', ')}</p>
                  </div>
                )}
                
                {/* Key Skills */}
                {exp.key_skills && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Skills:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {Object.entries(exp.key_skills).map(([category, skills]) => (
                        <div key={category} className="text-gray-300 text-sm">
                          <span className="text-green-400 mr-2">▪</span>
                          <strong className="capitalize">{category}:</strong> {skills}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Technologies */}
                {exp.technologies && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                    <p className="text-gray-300 text-sm">{exp.technologies.join(', ')}</p>
                  </div>
                )}
                
                {/* Achievements */}
                {exp.achievements && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start text-gray-300">
                          <span className="text-blue-400 mr-2">▪</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Thesis */}
                {exp.thesis && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Master Thesis:</h4>
                    <p className="text-gray-300">{exp.thesis}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
