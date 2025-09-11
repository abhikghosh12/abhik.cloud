export default function ProjectsPage() {
  const projects = [
    {
      title: "OBJECT-DETECTION-TENSORFLOW",
      description: "The Tensorflow framework is being used for object detection models. Object detection models can be used in various industries. Python is being used to write the code. Please refer github repositories for further details.",
      tech: ["TensorFlow", "Python", "Object Detection", "Machine Learning"],
      github: "https://github.com/abhikghosh12"
    },
    {
      title: "DJANGO REST API", 
      description: "It uses django rest framework to build API. Here lets Build, run and test the app. It creats a nested serializer and uses HTTP REST methods to do all CRUD functions.",
      tech: ["Django", "REST API", "Python", "HTTP"],
      github: "https://github.com/abhikghosh12"
    },
    {
      title: "TIME SERIES DATA CLASSIFIER",
      description: "Phasor measurement unit (PMU) is a device which use to measure the magnitude and phase angle of a phasor e.g. Voltage or current. The ML algorithms of LTSM CONVOLUTION NETWORK is used to classify the data. Anamoly detection models are developed based on this classifier.",
      tech: ["LSTM", "CNN", "Time Series", "Anomaly Detection", "Python"],
      github: "https://github.com/abhikghosh12"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">PROJECTS</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">{project.title}</h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.github}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="mr-2">🔗</span>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/abhikghosh12" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}