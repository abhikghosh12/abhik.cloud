export default function ExperienceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-indigo-600">Cloud Architect</h3>
            <p className="text-gray-600 mb-2">Capgemini • 2021 - Present</p>
            <p className="text-gray-700">
              Leading cloud transformation initiatives, designing scalable architectures, 
              and implementing DevSecOps practices for enterprise clients.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-indigo-600">DevOps Engineer</h3>
            <p className="text-gray-600 mb-2">Previous Company • 2019 - 2021</p>
            <p className="text-gray-700">
              Automated CI/CD pipelines, managed containerized applications, 
              and optimized cloud infrastructure for improved performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}