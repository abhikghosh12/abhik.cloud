'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Award, Calendar, Users, TrendingUp } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Enterprise Cloud Migration',
      description: 'Led complete infrastructure modernization for Fortune 500 company',
      tech: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
      outcomes: ['40% cost reduction', '99.9% uptime', '3x faster deployment'],
      category: 'Cloud Architecture',
      year: '2024',
      team: '12 members',
      duration: '8 months'
    },
    {
      title: 'AI/ML Platform Development',
      description: 'Built scalable machine learning infrastructure with automated pipelines',
      tech: ['Python', 'TensorFlow', 'Kubernetes', 'MLflow'],
      outcomes: ['Real-time insights', '10x data processing', 'Automated model deployment'],
      category: 'AI/ML',
      year: '2023',
      team: '8 members',
      duration: '6 months'
    },
    {
      title: 'DevSecOps Implementation',
      description: 'Implemented security-first development lifecycle automation',
      tech: ['Jenkins', 'SonarQube', 'Vault', 'Ansible'],
      outcomes: ['Zero security incidents', '80% faster releases', 'Compliance automation'],
      category: 'DevSecOps',
      year: '2023',
      team: '6 members',
      duration: '4 months'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Professional Header */}
      <section className="navbar-top-gradient text-white py-24 pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Project Portfolio
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Showcasing successful cloud transformations and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <TrendingUp size={14} className="text-green-500 mr-2" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {project.team}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}